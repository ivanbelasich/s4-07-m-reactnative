import { View, Text } from "react-native";
import ProfileCard from "../components/ProfileCard";
import React from "react";
import Wallet from "../components/Wallet";

const Profile = () => {
  return (
    <View className="p-5">
      <ProfileCard />
      <Wallet />
    </View>
  );
};

export default Profile;
