import React from "react";
import { ScrollView, Text } from "react-native";
import JobCard from "../components/JobCard";
import Search from "../components/Search";

const HomeScreen = () => {
  return (
    <ScrollView >
      <Search/>
      <JobCard/>
      <JobCard/>
    </ScrollView>
  )
}

export default HomeScreen;
