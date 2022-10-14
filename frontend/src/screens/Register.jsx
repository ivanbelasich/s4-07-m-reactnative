import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState, useEffect } from 'react';

import { Get } from 'react-axios'
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import Toast from "react-native-root-toast";



export default function Register({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [password2, setPassword2] = React.useState("");
    const [load, setLoad] = React.useState(false);


    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(true);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const RegisterValidationSchema = yup.object().shape({

        nombreCompleto: yup
            .string("Ingresa tus Nombres y Apellidos")
            .required("*Campo requerido"),

        email: yup
            .string("Ingresa tu Email")
            .required("*Campo requerido")
            .email("Ingresa un Email válido"),
        provincia: yup
            .string("Seleccione una provincia")
            .required("*Campo requerido"),
        genero: yup
            .string("Seleccione un genero")
            .required("*Campo requerido"),
        department: yup
            .string("Seleccione un departamento")
            .required("*Campo requerido"),
        ciudad: yup
            .string("Seleccione una localidad")
            .required("*Campo requerido"),
        password: yup
            .string()
            .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
            .required('*Campo requerido'),


    });

    const register = async (data) => {
        console.log(data);
        setLoad(true);

        try {
            const response = await axios.post(
                "https://s4-07-m-reactnative.herokuapp.com/api/auth/register", data);

            let toast = Toast.show("Registro correcto, por favor inicie sesión", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                backgroundColor: "green",
            });
            setLoad(false);

            setTimeout(() => {
                navigation.navigate("Login");
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Login" }],
                });
            }, 2000);
        } catch (error) {
            let toast = Toast.show("Datos incorrectos", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                backgroundColor: "red",
            });
            setLoad(false);
            console.log(error);
        }
    };

    return (
        <ScrollView>
            <View className="container mx-auto px-10 py-20 flex-col items-center">

                <Image source={require("../assets/Login/Logo.png")} className="w-[222px] h-[82px]" />
                <View className="my-6">
                    <Text className="text-center font-bold w-[228px] text-[16px]">Rellena los campos y sé parte de TA$KS</Text>
                </View>


                <Formik
                    validateOnMount={true}
                    validationSchema={RegisterValidationSchema}
                    initialValues={{ nombreCompleto: '', email: '', genero: '', fechaDeNacimiento: '', provincia: '', department: '', ciudad: '', password: '' }}
                    //onSubmit={values => console.log(values)}
                    onSubmit={values => register(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        setFieldValue,

                    }) => (
                        <>

                            <View className="mb-2">
                                <Text className="ml-3 font-bold">Nombre y Apellido</Text>
                                <TextInput
                                    className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]"
                                    placeholder="Juan Perez"
                                    onChangeText={handleChange('nombreCompleto')}
                                    onBlur={handleBlur('nombreCompleto')}
                                    value={values.nombreCompleto}
                                    keyboardType="default"
                                />

                                {(errors.nombreCompleto && touched.nombreCompleto) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.nombreCompleto}</Text>
                                }

                            </View>

                            <View className="mb-2">
                                <Text className="ml-3 font-bold">Email</Text>
                                <TextInput
                                    className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] "
                                    placeholder="info@tasksaccount.com"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />

                                {(errors.email && touched.email) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.email}</Text>
                                }
                            </View>

                            <View className="mb-2">
                                <View className="position-relative ">
                                    <Text className="ml-3 font-bold">Género</Text>
                                    <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]">
                                        <Picker
                                            style={{ position: 'relative', top: -5 }}
                                            selectedValue={values.genero}
                                            onBlur={handleBlur('genero')}
                                            onValueChange={(itemValue, itemIndex) => setFieldValue('genero', itemValue)}>
                                            <Picker.Item label="Seleccione" />
                                            <Picker.Item label="Hombre" value="Hombre" />
                                            <Picker.Item label="Mujer" value="Mujer" />
                                            <Picker.Item label="Otro" value="Otro" />
                                        </Picker>
                                    </View>
                                </View>
                                {(errors.genero && touched.genero) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.genero}</Text>
                                }
                            </View>

                            <View className="mb-2">
                                <Text className="ml-3 font-bold">Fecha de nacimiento</Text>
                                <View>
                                    <TouchableOpacity
                                        className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]  flex  justify-center"
                                        onPress={showDatepicker}
                                    >
                                        <Text className="">{date.toDateString()}</Text>
                                        {show && (
                                            <DateTimePicker
                                                maximumDate={new Date(Date.now())}
                                                locale="es-ES"
                                                value={date}
                                                mode={mode}
                                                is24Hour={true}
                                                onChange={(event, selectedDate) => {
                                                    const currentDate = selectedDate;
                                                    setShow(false);
                                                    setDate(currentDate);
                                                    setFieldValue('fechaDeNacimiento', selectedDate.toISOString())
                                                }}
                                            />
                                        )}

                                    </TouchableOpacity>
                                </View>
                                {(errors.date && touched.date) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.date}</Text>
                                }
                            </View>

                            <View className="position-relative mb-2">
                                <Text className="ml-3 font-bold">Provincia</Text>
                                <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]">
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
                                                        onBlur={handleBlur('provincia')}
                                                        onValueChange={(itemValue, itemIndex) => setFieldValue('provincia', itemValue)}

                                                        selectedValue={values.provincia}
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
                                {(errors.provincia && touched.provincia) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.provincia}</Text>
                                }
                            </View>


                            <View className="position-relative mb-2">
                                <Text className="ml-3 font-bold">Departamento</Text>
                                <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]">
                                    {values.provincia && (
                                        <Get url={`https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre&max=5000&provincia=${values.provincia}`}>
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

                                                            onBlur={handleBlur('department')}
                                                            onValueChange={(itemValue, itemIndex) => setFieldValue('department', itemValue)}


                                                            selectedValue={values.department}

                                                        // selectedValue={departamento}
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
                                {(errors.department && touched.department) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.department}</Text>
                                }
                            </View>

                            <View className="position-relative mb-2">
                                <Text className="ml-3 font-bold">Localidad</Text>
                                <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]">
                                    {values.department && (
                                        <Get url={`https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=5000&departamento=${values.department}`}>
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

                                                            onBlur={handleBlur('ciudad')}
                                                            onValueChange={(itemValue, itemIndex) => setFieldValue('ciudad', itemValue)}

                                                            selectedValue={values.ciudad}

                                                        // selectedValue={localidad}
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
                                {(errors.ciudad && touched.ciudad) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.ciudad}</Text>
                                }
                            </View>


                            <View className="mb-2">
                                <Text className="ml-4 font-bold">Contraseña</Text>
                                <TextInput
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder="Contraseña"
                                    className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]"
                                />
                                {(errors.password && touched.password) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.password}</Text>
                                }
                            </View>


                            <View className="mb-10">
                                <Text className="ml-4 font-bold">Repetir contraseña</Text>
                                {password2 !== values.password && password2 !== "" && (
                                    <Text className="my-0 ml-4 text-[#f00]">Las contraseñas deben coincidir</Text>
                                )}
                                <TextInput
                                    secureTextEntry
                                    onChangeText={setPassword2}
                                    // onBlur={handleBlur('password2')}
                                    // value={password2}
                                    placeholder="Repita Contraseña"
                                    className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]"
                                />
                                {/* {(errors.password2 && touched.password2) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.password2}</Text>
                                } */}

                            </View>

                            <TouchableOpacity className="w-1/2 py-2 border bg-dark-purple rounded-xl mb-10" onPress={handleSubmit}>
                                <Text className="text-center text-white">
                                    {load ? (
                                        <ActivityIndicator color="pink" size="small" />
                                    ) : (
                                        "Registrarse"
                                    )}{" "}
                                </Text>
                            </TouchableOpacity>



                        </>
                    )}
                </Formik>


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
                    <TouchableOpacity className="" onPress={() => {
                        navigation.navigate("Login");
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }],
                        });
                    }}>
                        <Text className="underline color-dark-purple">Inicia sesión</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    )
}