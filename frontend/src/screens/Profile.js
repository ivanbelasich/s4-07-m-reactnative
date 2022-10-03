import { View, ViewBase } from "react-native";
import ProfileCard from "../components/Profile/ProfileCard";
import React from "react";
import Wallet from "../components/Profile/Wallet";

const Profile = () => {
  return (
    <View >
      <ProfileCard />
      <Wallet />
    </View>
  );
};

export default Profile;
