import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileButton(props) {
  return (
    <LinearGradient
      colors={["#570E7E", "#AA7BC3"]}
      className=" h-10 rounded-xl "
    >
      <View className="w-32">
        <Text className="text-[#f1f1f1] text-xs font-inter text-center p-3 font-extrabold"> {props.title}</Text>
      </View>
    </LinearGradient>
  );
}
