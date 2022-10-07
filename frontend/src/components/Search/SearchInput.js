import { View, Text, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const SearchInput = () => {
    return (
        <View className="flex flex-row items-center justify-center rounded-2xl border-black border-[0.3px] bg-light-purple overflow-hidden">
            <TextInput
                className="bg-red h-[43px] pl-4 bg-gray-100 w-[276px]  flex rounded-l-2xl overflow-hidden "
                placeholder="Search a task"
            />

            <View className="px-3">
                <FontAwesome5 name="search" size={24} color="#6E378A" />
            </View>
        </View>
    );
};

export default SearchInput;
