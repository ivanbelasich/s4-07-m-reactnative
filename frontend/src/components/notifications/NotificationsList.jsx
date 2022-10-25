import { FlatList } from "react-native";
import React from "react";
import Notification from "./Notification";
import { useNavigation } from "@react-navigation/native";

const NotificationsList = ({ data, userData }) => {
  console.log({ data } + "notificaciones");
  const navigation = useNavigation();

  const render = ({ item }) => (
    <Notification
      item={item}
      // onPress={() => navigation.navigate("Detalle", { value: item, data: userData })}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={render}
      keyExtractor={(item) => item._id}
    />
  );
};

export default NotificationsList;
