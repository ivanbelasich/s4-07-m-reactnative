import { View, ViewBase, ScrollView } from "react-native";
import ProfileCard from "../components/Profile/ProfileCard";
import React from "react";
import Wallet from "../components/Profile/Wallet";

const Profile = () => {
  return (
    <ScrollView >
      <ProfileCard />
      <Wallet />
    </ScrollView>
  );
};

export default Profile;
