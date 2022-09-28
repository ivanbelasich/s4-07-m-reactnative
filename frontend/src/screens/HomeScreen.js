import React from "react";
<<<<<<< HEAD
import { ScrollView, Text } from "react-native";
import JobCard from "../../components/JobCard";

const HomeScreen = () => {
  return (
    <ScrollView >

      <Text className="">HomeScreen</Text>
      <JobCard/>
     
      <JobCard/>
      <JobCard/>
      <JobCard/>
    </ScrollView>
=======
import { View, Text } from "react-native";
import Details from '../components/details';

const HomeScreen = () => {
  return (
    <View>
      <Details />
    </View>
>>>>>>> develop
  );
};

export default HomeScreen;
