import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import LocationIcon from "../../assets/ProfileCard/location-icon.png";
import ProfilePic from "../../assets/ProfileCard/profile-pic.png";
import ProfileButton from "./ProfileButton";

const ProfileCard = () => {
  return (
    <View className="h-[268px] my-8 mx-7  shadow-2xl bg-[#f6f6f6] shadow-[#724BB6] justify-around">
      <View className="items-center ">
        <Image source={ProfilePic} />
      </View>
        <Text className="text-base pb-2 text-center font-medium">Lorem Ipsum</Text>
        <View className="flex-row justify-around mb-2 ">
      <View className="m-1">
        <Text className="text-base pb-2 font-medium">Edad: 25 años</Text>
        <Text className="text-base h-7 font-medium">
          <Image source={LocationIcon} />
          <Text> est. Sed</Text>
        </Text>
      </View>
      <View className="m-1 items-center">
       <ProfileButton title={"EDITAR PERFIL"} />
        <Text className="text-base h-7 mt-2 rounded-xl w-[89px] text-center bg-[#E1D1E9] ">
         categoria
        </Text>
      </View>
      </View>
    </View>
  );
};

export default ProfileCard;
