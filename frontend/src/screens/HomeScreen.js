import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search/Search";
import AddButton from "../components/AddButton";
import JobCardContainer from "../components/Job/JobCardContainer";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={[
          "rgb(83, 28, 179)",
          "rgb(148, 75, 187)",
          "rgb(170, 123, 195)",
          "rgb(242, 242, 242)",
        ]}
      >
        <Header isTransparent />
        <Search />
      </LinearGradient>
      <JobCardContainer />
      <AddButton
        texto="+"
        onClick={() => {
          navigation.navigate("newjobComponent");
          navigation.reset({
            index: 0,
            routes: [{ name: "newjobComponent" }],
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
