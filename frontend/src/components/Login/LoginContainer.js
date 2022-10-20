import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import Toast from "react-native-root-toast";
import { useDispatch } from "react-redux";
import { addUserData } from "../../features/user/UserSlice";
import VioletButton from "../Profile/VioletButton";

export default function LoginContainer({ navigation }) {
  const [user, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigation.navigate("isLogged");
      navigation.reset({
        index: 0,
        routes: [{ name: "isLogged" }],
      });
    }
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://s4-07-m-reactnative.herokuapp.com/api/auth/login",
        {
          email: user,
          password: password,
        }
      );
      setToken(response.data.token);
      dispatch(addUserData(response.data));
      let toast = Toast.show("Usuario ingresado correctamente", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: "green",
      });
      setLoading(false);

      setTimeout(() => {
        navigation.navigate("isLogged");
        navigation.reset({
          index: 0,
          routes: [{ name: "isLogged" }],
        });
      }, 1000);
    } catch (error) {
      let toast = Toast.show("Usuario o contraseña incorrectos", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: "red",
      });
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View className="container mx-auto px-10 h-[100%]  flex-col items-center justify-center">
      <Image
        source={require("../../assets/Login/Logo.png")}
        className="w-[222px] h-[82px] mt-[30px]"
      />

      <View className="my-8">
        <Text className="text-center text-[16px] font-semibold">Ingresar</Text>
        <Text className="text-center text-[16px] font-semibold">para continuar</Text>
      </View>
      <View>
        <Text className="ml-4 font-bold">E-mail</Text>
        <TextInput
          onChangeText={onChangeUser}
          value={user}
          placeholder="info@tasksaccount.com"
          className="py-1 px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-8"
        />
      </View>
      <View>
        <Text className="ml-4 font-bold">Contraseña</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={onChangePassword}
          value={password}
          placeholder="*****"
          keyboardType="password"
          className=" px-3  bg-[#D9D9D9] rounded-xl w-[307px] h-[39px] mb-[30px]"
        />
      </View>
      <View className="flex-row items-center mb-[45px]">
        <Text className="w-[104px]">Olvidaste tu contraseña?</Text>
        <TouchableOpacity className="">
          <Text className="underline color-dark-purple">
            Toca aqui para recuperarla
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="w-1/2 py-2 border bg-dark-purple rounded-xl mb-10"
        onPress={() => login()}
      >
        <Text className="text-center text-white font-extrabold">
          {loading ? (
            <ActivityIndicator color="pink" size="small" />
          ) : (
            "INGRESAR"
          )}{" "}
        </Text>
      </TouchableOpacity>

      <View className="flex-row mb-10 justify-between w-full">
        <TouchableOpacity className="w-[150px] h-[36px] border border-dark-purple rounded-xl flex-row items-center justify-center">
          <Image
            source={require("../../assets/Login/google.png")}
            className="h-[20px] w-[20px] mr-[10px]"
          />
          <Text className="text-center text-dark-purple font-extrabold">GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[150px] h-[36px] border border-dark-purple rounded-xl flex-row items-center justify-center">
          <Image
            source={require("../../assets/Login/facebook.png")}
            className="h-[20px] w-[20px] mr-[10px]"
          />
          <Text className="text-center text-dark-purple font-extrabold">FACEBOOK</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center">
        <Text className="w-[153px]">Eres nuevo en TA$KS?</Text>
        <TouchableOpacity
          className=""
          onPress={() => {
            navigation.navigate("register");
            navigation.reset({
              index: 0,
              routes: [{ name: "register" }],
            });
          }}
        >
          <Text className="underline color-dark-purple">Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
