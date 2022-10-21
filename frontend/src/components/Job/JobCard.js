import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./../Header";
import Search from "./../Search/Search";
import AddButton from "./../AddButton";
import { useNavigation } from "@react-navigation/native";

// Importando useGetData para conexion basedatos, o pedir informacion.
// import {useGetData} from '../../useFetch';

const JobCard = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-[#D9C6E3] my-2 mx-4 rounded-xl p-4 shadow-xl  shadow-[#570E7E]"
  >
    <View className="flex-row justify-between ">
      <Text className="text-2xl flew-row justify-center font-medium">
        {item.titulo}
      </Text>
      <Text className="text-xl font-black">
        <Image source={require("../../assets/MoneyIcon.png")} /> {item.presupuesto}{" "}
      </Text>
    </View>
    <View className="flex-row">
      <Text className=" text-sm text-[#565555] py-1 pr-3">
        <Image className="" source={require("../../assets/Vector.png")} />{" "}
        {item.createdAt.slice(0,10)}{" "}
      </Text>
      <Text className="text-sm text-[#565555] py-1 ">
        <Image className="" source={require("../../assets/LocationIcon.png")} />{" "}
        {`${item?.ciudad}, ${item?.provincia}`}
      </Text>
    </View>
    <View className="flex-row justify-between py-4">
      <View className="w-2/3">
        <Text className=" text-sm font-normal leading-4" numberOfLines={2}>
          {item.descripcion}
        </Text>
      </View>
      <Text className="text-sm font-normal bg-[#F3F1F1] rounded-[10px] w-[86px] h-[22px] text-center">
        {item.categoria}
      </Text>
    </View>
  </TouchableOpacity>
);

export default JobCard