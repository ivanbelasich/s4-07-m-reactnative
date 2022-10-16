import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AddButton = (props) => {
  return (
    <View className=" shadow-[50] right-4 absolute  w-1/5  self-end my-[650]">
      <LinearGradient
        colors={["#673085", "#AA7BC3"]}
        className="rounded-[140px]"
      >
        <TouchableOpacity>
          <Text
            className=" text-white text-center text-[52px] mb-[8px] ml-[15px]"
            onPress={props.onClick}
          >
            {props.texto}{" "}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default AddButton;
