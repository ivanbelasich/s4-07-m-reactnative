import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import LocationIcon from "../../assets/ProfileCard/location-icon.png";
import ProfilePic from "../../assets/ProfileCard/profile-pic.png";
import VioletButton from "./VioletButton";
import WhiteButton from "./WhiteButton";
import EditIcon from "../../assets/ProfileCard/edit-icon.png";

const ProfileCard = () => {
  return (
    <View className="my-8 mx-7 py-4 shadow-2xl bg-[#f6f6f6] shadow-[#724BB6] justify-around">
      <View className="items-center ">
        <TouchableOpacity className="z-10">
          <Image
            source={EditIcon}
            className="bg-[#673085] rounded-2xl fixed top-6 left-8"
          />
        </TouchableOpacity>
        <Image source={ProfilePic} className="z-0" />
      </View>
      <Text className="text-base pb-2 text-center font-medium">
        Lorem Ipsum
      </Text>
      <View className="justify-around my-3 flex-row">
        <Text className="text-base pb-2 font-medium">Edad: 25 años</Text>
        <Text className="text-base h-7 font-medium">
          <Image source={LocationIcon} />
          <Text> Córdoba, Argentina</Text>
        </Text>
      </View>
      <View className="flex-row justify-around mt-4">
        <WhiteButton title="POSTULACIONES" />
        <VioletButton title="TAREAS CREADAS" />
      </View>
    </View>
  );
};

export default ProfileCard;
