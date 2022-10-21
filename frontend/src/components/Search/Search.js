import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";
import { FontAwesome } from "@expo/vector-icons";

const Search = ({search}) => {
    return (
        //crear gradient para el fondo
        <View className="flex items-center justify-center flex-col p-4 gap-3 bg-transparent">
            <Text className="text-3xl font-bold text-white" > TITULO 1 </Text>
            <View className="flex flex-row items-center justify-center">
                <SearchInput search={search} />
                <TouchableOpacity className="ml-5" onPress={() => console.log("filter")}>
                    <FontAwesome name="filter" size={30} color="#6E378A" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Search;
