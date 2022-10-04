import { View, Text, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const SearchInput = () => {
    return (
        <View className="flex flex-row items-center justify-center rounded-2xl bg-light-purple overflow-hidden  ">
            <TextInput
                className="bg-red px-6 py-2 bg-gray-100 w-52 border-black border-2 flex rounded-2xl overflow-hidden "
                placeholder="Search a task"
            />

            <View className="px-3">
                <FontAwesome5 name="search" size={24} color="#6E378A" />
            </View>
        </View>
    );
};

export default SearchInput;
