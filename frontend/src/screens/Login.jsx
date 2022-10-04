import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'





export default function Notification() {

    const [user, onChangeUser] = React.useState("");
    const [password, onChangePassword] = React.useState(null);

    return (
        <View className="container mx-auto px-10 py-20 flex-col items-center">

            <Image source={require("../assets/Login/Logo.png")} className="w-[222px] h-[82px]" />

            <View className="my-10">
                <Text className="text-center">Ingresa</Text>
                <Text className="text-center">para continuar</Text>
            </View>
            <TextInput
                onChangeText={onChangeUser}
                value={user}
                placeholder="Usuario"
                className="py-1 px-3  bg-[#D9D9D9] rounded-full w-[307px] h-[39px] mb-10"
            />
            <TextInput
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Contraseña"
                keyboardType="password"
                className="py-1 px-3  bg-[#D9D9D9] rounded-full w-[307px] h-[39px] mb-10"
            />
            <TouchableOpacity className="w-1/2 py-2 border bg-dark-purple rounded-full mb-5">
                <Text className="text-center text-white">INGRESAR</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mb-20">
                <Text>Perdio Contraseña?</Text>
            </TouchableOpacity>


            <View className="flex-row mb-20 justify-between w-full">
            <TouchableOpacity className="w-[150px] h-[36px] border border-dark-purple rounded-full flex-row items-center justify-center">
                    <Image source={require("../assets/Login/google.png")} className="h-[20px] w-[20px] mr-[10px]"/>
                    <Text className="text-center text-dark-purple">Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-[150px] h-[36px] border border-dark-purple rounded-full flex-row items-center justify-center">
                    <Image source={require("../assets/Login/facebook.png")} className="h-[20px] w-[20px] mr-[10px]"/>
                    <Text className="text-center text-dark-purple">Facebook</Text>
                </TouchableOpacity>
            </View>

            <Text>No tienes cuenta? Registrate</Text>

        </View>
    )
}
