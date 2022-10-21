import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function VioletButton(props) {
  return (
    <TouchableOpacity className="flex items-center" onPress={props.onPress}>
      <LinearGradient
        colors={["#570E7E", "#AA7BC3"]}
        className="h-10 rounded-xl w-[135px]   flex flex-row items-center justify-center shadow-lg shadow-[#570E7E]"
      >
        <Image source={props.imagen} />
        <Text className="font-extrabold text-xs  color-[#F1F1F1] ml-2">
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
