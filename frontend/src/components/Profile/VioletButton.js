import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function VioletButton(props) {
  return (
    <TouchableOpacity className="">
      <LinearGradient
        colors={["#570E7E", "#AA7BC3"]}
        className="h-10 rounded-[10px] "
     
      >
        <View>
          <Text
            onPress={props.onPress}
            className="text-[#f1f1f1] text-xs text-center py-3  m-auto font-extrabold w-[135px] "
          >
            {props.title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
