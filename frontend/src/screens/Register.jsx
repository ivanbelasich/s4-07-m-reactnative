import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react'
import { Get } from 'react-axios'
import { Formik } from 'formik';
import * as yup from 'yup';

// import { View, Text,Form, Label, Item,Input } from 'native-base'





export default function Register() {





    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


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

        nombresyapellidos: yup
            .string("Ingresa tus Nombres y Apellidos")
            .required("*Campo requerido"),

        email: yup
            .string("Ingresa tu Email")
            .required("*Campo requerido")
            .email("Ingresa un Email válido"),
        province: yup
            .string("Seleccione una provincia")
            .required("*Campo requerido"),
        gender: yup
            .string("Seleccione un genero")
            .required("*Campo requerido"),
        department: yup
            .string("Seleccione un departamento")
            .required("*Campo requerido"),
        city: yup
            .string("Seleccione una localidad")
            .required("*Campo requerido"),
        password: yup
            .string()
            .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
            .required('*Campo requerido'),
        password2: yup
            .string()
            .min(8, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
            .required('*Campo requerido'),



    });

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
                    initialValues={{ nombresyapellidos: '', email: '', gender: '', fecha: '', province: '', department: '', city: '', password: '', password2: '' }}
                    onSubmit={values => console.log(values)}
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
                                    onChangeText={handleChange('nombresyapellidos')}
                                    onBlur={handleBlur('nombresyapellidos')}
                                    value={values.nombresyapellidos}
                                    keyboardType="default"
                                />

                                {(errors.nombresyapellidos && touched.nombresyapellidos) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.nombresyapellidos}</Text>
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
                                            selectedValue={values.gender}
                                            onBlur={handleBlur('gender')}
                                            onValueChange={(itemValue, itemIndex) => setFieldValue('gender', itemValue)}>
                                            <Picker.Item label="Seleccione" />
                                            <Picker.Item label="Hombre" value="Hombre" />
                                            <Picker.Item label="Mujer" value="Mujer" />
                                            <Picker.Item label="Otro" value="Otro" />
                                        </Picker>
                                    </View>
                                </View>
                                {(errors.gender && touched.gender) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.gender}</Text>
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
                                                    setFieldValue('fecha', selectedDate.toDateString())
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
                                                        // selectedValue={values.gender}
                                                        onBlur={handleBlur('province')}
                                                        onValueChange={(itemValue, itemIndex) => setFieldValue('province', itemValue)}

                                                        selectedValue={values.province}
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
                                {(errors.province && touched.province) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.province}</Text>
                                }
                            </View>


                            <View className="position-relative mb-2">
                                <Text className="ml-3 font-bold">Departamento</Text>
                                <View className="px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]">
                                    {values.province && (
                                        <Get url={`https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre&max=5000&provincia=${values.province}`}>
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

                                                            onBlur={handleBlur('city')}
                                                            onValueChange={(itemValue, itemIndex) => setFieldValue('city', itemValue)}

                                                            selectedValue={values.city}

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
                                {(errors.city && touched.city) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.city}</Text>
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
                                {values.password2 !== values.password && values.password2 !== "" && (
                                    <Text className="my-0 ml-4 text-[#f00]">Las contraseñas deben coincidir</Text>
                                )}
                                <TextInput
                                    secureTextEntry
                                    onChangeText={handleChange('password2')}
                                    onBlur={handleBlur('password2')}
                                    value={values.password2}
                                    placeholder="Repita Contraseña"
                                    className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px]"
                                />
                                {(errors.password2 && touched.password2) &&
                                    <Text className="text-xs text-red-500 ml-4">{errors.password2}</Text>
                                }

                            </View>

                            <TouchableOpacity className="w-1/2 py-2 border bg-dark-purple rounded-xl mb-10" onPress={handleSubmit}>
                                <Text className="text-center text-white">Registrarse</Text>
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
                    <TouchableOpacity className="">
                        <Text className="underline color-dark-purple">Inicia sesión</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    )
}