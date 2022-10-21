import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";

const Header = ({ isTransparent }) => {
  const userName = useSelector((state) => state.user);
  const [name, subName] = userName[0].user.nombreCompleto.split(" ");
  const navigation = useNavigation();

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
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </TouchableOpacity>
      <View className="flex-row items-center">
        <View className="items-center mr-3">
          <Text className=" text-[15px] font-semibold text-[#FCFCFC]">{name}</Text>
          <Text className=" text-[15px] font-semibold text-[#FCFCFC]">{subName}</Text>
        </View>

        <View className="rounded-full">
          <Image
            source={require("../assets/ProfileCard/profile-pic.png")}
            className="h-[70px] w-[70px]"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
