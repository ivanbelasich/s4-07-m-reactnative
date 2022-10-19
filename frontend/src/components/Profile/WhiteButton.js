import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const WhiteButton = (props) => {
  return (
    <TouchableOpacity className="shadow-xl  shadow-[#570E7E] rounded-xl">
      <Text className="border-2 h-10 p-3 font-extrabold text-xs border-[#5D1683] rounded-xl bg-white color-[#531CB3] text-center w-[135px]">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default WhiteButton;
