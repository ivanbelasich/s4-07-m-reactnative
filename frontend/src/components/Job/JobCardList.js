import { FlatList, SafeAreaView, View, Text } from "react-native";
import React from "react";
import JobCard from "./JobCard";
import { useNavigation } from "@react-navigation/native";

const JobCardList = ({ jobs, userData, buscarPor, buscarCat }) => {
  const navigation = useNavigation();

  // Filtrando los trabajos por Titulo

  const inResult = jobs.filter((val) => {
    if (buscarPor === undefined) {
      return val;
    } else if (val.titulo.toLowerCase().includes(buscarPor.toLowerCase())) {
      return val;
    }
    // else if(val.categoria.toLowerCase().includes(buscarCat.toLowerCase())) {
    //     return val
    //     // Deberia estar funcionando pero no me devuelve los resultados.
    // }
  });

  const render = ({ item }) => (
    <JobCard
      item={item}
      onPress={() =>
        navigation.navigate("Detalle", { value: item, data: userData })
      }
    />
  );

  const listFooter = () => {
    return <Text className="text-center text-xl text-black mb-80"></Text>;
  };

  return (
    <SafeAreaView>
      <View className="mx-2">
        <FlatList
          data={inResult.reverse()}
          renderItem={render}
          keyExtractor={(item) => item._id}
          className="flex"
          ListFooterComponent={listFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobCardList;
