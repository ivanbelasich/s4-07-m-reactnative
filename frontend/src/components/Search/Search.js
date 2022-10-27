import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { FontAwesome } from "@expo/vector-icons";

const Search = ({ search, categoria }) => {
  /*   const [selectedCategoria, setSelectedCategoria] = useState();
  categoria(selectedCategoria); */

  return (
    //crear gradient para el fondo
    <View className="flex items-center justify-center flex-col p-4 gap-3 bg-transparent">
      <Text className="text-3xl font-bold text-white"> TITULO 1 </Text>
      <View className="flex flex-row items-center justify-center">
        <SearchInput search={search} />
        <TouchableOpacity
          className="ml-5 flex"
          onPress={() => console.log("filter")}
        >
          <FontAwesome name="filter" size={30} color="#6E378A" />
          {/* No encontre forma de ocultar triangulo y dejar el icono de filtro */}
          {/*     <Picker
                        selectedValue={selectedCategoria}
                        mode='dropdown'
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategoria(itemValue)
                        }>
                        <Picker.Item label="" value="null" enabled={false} />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="javascript" />
                        <Picker.Item label="Limpieza" value="limpieza" />
                        <Picker.Item label="Reparaciones" value="Reparaciones" />              
                    </Picker> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
