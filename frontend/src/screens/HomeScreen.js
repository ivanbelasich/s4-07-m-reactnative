import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search/Search";
import AddButton from "../components/AddButton";
import JobCardContainer from "../components/Job/JobCardContainer";
import ModalContainer from "../components/Modal/Modal";


const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
<ModalContainer titulo={'modal'}/>
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
