import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";

const Header = ({ isTransparent }) => {
  const userName = useSelector((state) => state.user);
  console.log(userName, "estadooo");
  return (
    <View
      className={`mt-8 py-5 px-7 ${
        isTransparent ? "bg-transparent" : "bg-[#724BB6]"
      } flex-row  items-center justify-between  `}
    >
      <TouchableOpacity>
        <Image
          source={require("../assets/LogoHome.png")}
          className="h-10 w-5"
        />
      </TouchableOpacity>
      <View className="flex-row items-center ">
        <Text className="pr-3 text-lg text-[#FCFCFC] ">
          {userName && userName[0].user.nombreCompleto}
        </Text>
        <View className="rounded-full">
          <Image
            source={require("../assets/avatar.png")}
            className="h-12 w-12"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
