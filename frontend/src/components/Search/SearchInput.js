import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

const SearchInput = ({search}) => {

    const [searchValue, setSearchValue ] = useState();

    const searchFilterValue = () => {
        // console.log(searchValue);
        search(searchValue);
    }

    return (
        <View className="flex flex-row items-center justify-center rounded-2xl border-black border-[0.3px] bg-light-purple overflow-hidden">
            <TextInput
                className="bg-red h-[43px] pl-4 bg-gray-100 w-[276px]  flex rounded-l-2xl overflow-hidden "
                placeholder="Jardineria, plomería, educación..."
                onChangeText={setSearchValue}
                value={searchValue}
            />

            <TouchableOpacity className="px-3" onPress={searchFilterValue}>
                <FontAwesome5 name="search" size={24} color="#6E378A" />
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
