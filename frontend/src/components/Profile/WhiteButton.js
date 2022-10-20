import { View, Text, TouchableOpacity,Image} from "react-native";
import React from "react";

const WhiteButton = (props) => {
  
  return (
    <TouchableOpacity className="h-10 shadow-xl  shadow-[#570E7E] w-[135px] border-2 border-[#5D1683] rounded-xl flex flex-row items-center bg-white justify-center">
    <Image  source={props.imagen} />
      <Text className="font-extrabold text-xs  color-[#531CB3]  ml-2">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default WhiteButton;
