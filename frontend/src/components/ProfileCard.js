import { View, Text } from "react-native";
import { Image } from "react-native";
import LocationIcon from "../assets/ProfileCard/location-icon.png";
import ProfilePic from "../assets/ProfileCard/profile-pic.png";
import React from "react";

const ProfileCard = () => {
  return (
    <View className="h-40 flex-row items-center justify-between">
      <View className="p-2">
        <Image source={ProfilePic} />
      </View>
      <View className="p-2">
        <Text className="text-base pb-2">Ivan Belasich</Text>
        <Text className="text-base pb-2">Edad: 24 años</Text>
        <Text className="text-base h-7">
          <Image source={LocationIcon} />
          <Text> est. Sed</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProfileCard;
