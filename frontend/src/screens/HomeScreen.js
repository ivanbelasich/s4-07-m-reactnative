import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search/Search";
import AddButton from "../components/AddButton";
import JobCardContainer from "../components/Job/JobCardContainer";

const HomeScreen = ({ navigation }) => {

  //function para filtrar las jobcards segun escriba el usuario
  const [searchFilter, setSearchFilter ] = useState();
  const [searchCategoria, setSearchCategoria] = useState();

  return (
    <View className="h-screen">
      <LinearGradient
        colors={[
          "rgb(83, 28, 179)",
          "rgb(148, 75, 187)",
          "rgb(170, 123, 195)",
          "rgb(242, 242, 242)",
        ]}
      >
        <Header isTransparent />
        <Search search={setSearchFilter} categoria={setSearchCategoria}/>
      </LinearGradient>
      <JobCardContainer searchBy={searchFilter} searchByCat={searchCategoria} />
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
