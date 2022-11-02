import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function VioletButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={["#570E7E", "#AA7BC3"]}
        style={styles.contentContainer}
        className="h-10 rounded-xl items-center justify-center shadow-xl w-[135px] shadow-[#570E7E]"
      >
        <Image source={props.imagen} />
        <Text className="font-extrabold text-xs color-[#F1F1F1]">
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    elevation: 15,
  },
});
