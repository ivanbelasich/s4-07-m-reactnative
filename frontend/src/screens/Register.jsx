import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import SelectProv from '../components/Login/SelectProv';
import { Get } from 'react-axios'





export default function Register() {




    const [name, setName] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [password, setPassword] = React.useState(null);
    const [password2, setPassword2] = React.useState(null);
    const [date, setDate] = React.useState(new Date(1598051730000));
    const [provincia, setProvincia] = React.useState();
    const [departamento, setDepartamento] = React.useState();
    const [localidad, setLocalidad] = React.useState();




    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
        locale = "es-ES"
    };


    onPressButton =()=>{
        alert("Envio en construcción")
    }

    return (
        <ScrollView>
            <View className="container mx-auto px-10 py-20 flex-col items-center">

                <Image source={require("../assets/Login/Logo.png")} className="w-[222px] h-[82px]" />



                <View className="my-6">
                    <Text className="text-center font-bold w-[228px] text-[16px]">Rellena los campos y sé parte de TA$KS</Text>

                </View>
                <View>
                    <Text className="ml-3 font-bold">Nombre Completo</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder="Juan Perez"
                        className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3"
                    />
                </View>
                <View>
                    <Text className="ml-3 font-bold">Mail</Text>
                    <TextInput
                        keyboardType='email-address'
                        onChangeText={setMail}
                        value={mail}
                        placeholder="info@tasksaccount.com"
                        className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3"
                    />
                </View>
                <View className="position-relative ">
                    <Text className="ml-3 font-bold">Género</Text>
                    <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3">
                        <Picker
                            style={{ position: 'relative', top: -5 }}
                            selectedValue={gender}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
                            <Picker.Item label="Hombre" value="Hombre" />
                            <Picker.Item label="Mujer" value="Mujer" />
                            <Picker.Item label="Otro" value="Otro" />
                        </Picker>
                    </View>
                </View>
                <View>
                    <Text className="ml-3 font-bold">Fecha de nacimiento</Text>
                    <View>
                        <TouchableOpacity className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3 flex  justify-center" onPress={showDatepicker}>
                            <Text className="">{date.toDateString()}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="position-relative ">
                    <Text className="ml-3 font-bold">Provincia</Text>
                    <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3">
                        <Get url="https://apis.datos.gob.ar/georef/api/provincias" params={{ orden: "nombre" }}>
                            {(error, response, isLoading, makeRequest, axios) => {
                                if (error) {
                                    return (<Text>Something bad happened: {error.message}</Text>)
                                }
                                else if (isLoading) {
                                    return (<Text>Loading...</Text>)
                                }
                                else if (response !== null) {
                                    return (
                                        <Picker
                                            style={{ position: 'relative', top: -5 }}
                                            onValueChange={(itemValue, itemIndex) => setProvincia(itemValue)}
                                            selectedValue={provincia}
                                        >
                                            <Picker.Item label="Seleccione" value="seleccione" />
                                            {response.data.provincias.map(prov =>
                                                <Picker.Item label={prov.nombre} value={prov.nombre} key={prov.id} />
                                            )}
                                        </Picker>
                                    )
                                }
                            }}
                        </Get>
                    </View>
                </View>

                <View className="position-relative ">
                    <Text className="ml-3 font-bold">Departamento</Text>
                    <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3">
                        {provincia && (
                            <Get url={`https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre&max=5000&provincia=${provincia}`}>
                                {(error, response, isLoading, makeRequest, axios) => {
                                    if (error) {
                                        return (<Text>Something bad happened: {error.message}</Text>)
                                    }
                                    else if (isLoading) {
                                        return (<Text>Loading...</Text>)
                                    }
                                    else if (response !== null) {
                                        return (
                                            <Picker
                                                style={{ position: 'relative', top: -5 }}
                                                onValueChange={(itemValue, itemIndex) => setDepartamento(itemValue)}
                                                selectedValue={departamento}
                                            >
                                                <Picker.Item label="Seleccione" value="seleccione" />
                                                {response.data.departamentos.map(dpto =>
                                                    <Picker.Item label={dpto.nombre} value={dpto.nombre} key={dpto.id} />
                                                )}
                                            </Picker>
                                        )
                                    }
                                }}
                            </Get>
                        )}
                    </View>
                </View>

                <View className="position-relative ">
                    <Text className="ml-3 font-bold">Localidad</Text>
                    <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3">
                        {departamento && (
                            <Get url={`https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=5000&departamento=${departamento}`}>
                                {(error, response, isLoading, makeRequest, axios) => {
                                    if (error) {
                                        return (<Text>Something bad happened: {error.message}</Text>)
                                    }
                                    else if (isLoading) {
                                        return (<Text>Loading...</Text>)
                                    }
                                    else if (response !== null) {
                                        return (

                                            <Picker
                                                style={{ position: 'relative', top: -5 }}
                                                onValueChange={(itemValue, itemIndex) => setLocalidad(itemValue)}
                                                selectedValue={localidad}
                                            >
                                                <Picker.Item label="Seleccione" value="seleccione" />
                                                {response.data.localidades.map(loc =>
                                                    <Picker.Item label={loc.nombre} value={loc.nombre} key={loc.id} />
                                                )}
                                            </Picker>
                                        )
                                    }
                                }}
                            </Get>
                        )}


                    </View>
                </View>

                <View>
                    <Text className="ml-4 font-bold">Contraseña</Text>
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Contraseña"
                        keyboardType="password"
                        className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-3"
                    />
                </View>

                <View className="mb-0">
                    <Text className="ml-4 font-bold">Repetir contraseña</Text>
                    {password2 !== password && password2 !== "" && (
                        <Text className="my-0 ml-4 text-[#f00]">Las contraseñas deben coincidir</Text>
                    )}
                    <TextInput
                        secureTextEntry={true}
                        onChangeText={setPassword2}
                        value={password2}
                        placeholder="Repita Contraseña"
                        keyboardType="password"
                        className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-10"
                    />

                </View>

                <TouchableOpacity className="w-1/2 py-2 border bg-dark-purple rounded-xl mb-10" onPress={this.onPressButton}>
                    <Text className="text-center text-white">Registrarse</Text>
                </TouchableOpacity>

                <View className="flex-row mb-10 justify-between w-full">
                    <TouchableOpacity className="w-[150px] h-[36px] border border-dark-purple rounded-xl flex-row items-center justify-center">
                        <Image source={require("../assets/Login/google.png")} className="h-[20px] w-[20px] mr-[10px]" />
                        <Text className="text-center text-dark-purple">Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-[150px] h-[36px] border border-dark-purple rounded-xl flex-row items-center justify-center">
                        <Image source={require("../assets/Login/facebook.png")} className="h-[20px] w-[20px] mr-[10px]" />
                        <Text className="text-center text-dark-purple">Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center">
                    <Text className="w-[153px]">De vuelta por aquí?</Text>
                    <TouchableOpacity className="">
                        <Text className="underline color-dark-purple">Inicia sesión</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    )
}