import { FlatList, View } from "react-native";
import React, { useState } from "react";
import JobCard from "./JobCard";
import { useNavigation } from "@react-navigation/native";


const JobCardList = ({ jobs, userData, buscarPor }) => {
    const navigation = useNavigation();

    // Filtrando los trabajos por Titulo
    const inResult = jobs.filter((d) => d.titulo.includes(buscarPor) );
    console.log(inResult);

    const render = ({ item }) => (
        <JobCard
            item={item}
            onPress={() => navigation.navigate("Detalle", { value: item, data: userData })}
        />
    );

    return (
        <View>
            <FlatList
                data={inResult}
                renderItem={render}
                keyExtractor={(item) => item._id}
                className="mb-auto"
            />
        </View>
    );
};

export default JobCardList;
