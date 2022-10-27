import { FlatList, View } from "react-native";
import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { useNavigation } from "@react-navigation/native";


const JobCardList = ({ jobs, userData, buscarPor, buscarCat}) => {
    const navigation = useNavigation();

    // Filtrando los trabajos por Titulo

    console.log('jobCardList', buscarCat)
   
        const inResult = jobs.filter((val) => {
            if(buscarPor === undefined){
                return val
            } else if(val.titulo.toLowerCase().includes(buscarPor.toLowerCase())) {
                return val }
            // else if(val.categoria.toLowerCase().includes(buscarCat.toLowerCase())) {
            //     return val
            //     // Deberia estar funcionando pero no me devuelve los resultados.
            // }
        } );
    

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
                className=""
            />
        </View>
    );
};

export default JobCardList;
