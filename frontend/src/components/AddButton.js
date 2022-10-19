import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AddButton = (props) => {
  return (
    <View className=" shadow-[50] w-[80px] absolute bottom-0 right-0 mr-6 mb-6">
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
