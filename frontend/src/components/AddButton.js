import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AddButton = (props) => {
  return (
    <View className="shadow-2xl shadow-[#673085] w-[80px] h-[80px] absolute bottom-16 right-4 rounded-[150px]">
      <LinearGradient
        colors={["#673085", "#AA7BC3"]}
        className="rounded-[150px] "
      >
        <TouchableOpacity>
          <Text
            className=" text-white text-center text-[52px] mb-[8px] ml-[14px]"
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
