import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text } from "react-native";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import Search from "../components/Search/Search";

const HomeScreen = () => {

    return (
        <ScrollView>
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
            <JobCard />
            <JobCard />
        </ScrollView>
    );
};

export default HomeScreen;
