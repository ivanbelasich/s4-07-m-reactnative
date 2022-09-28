import React from "react";
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
  );
};

export default HomeScreen;
