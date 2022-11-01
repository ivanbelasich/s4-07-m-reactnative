import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Notification({ item }) {
  return (
    <TouchableOpacity>
      <View
        className={`mt-2 items-center justify-center relative min-h-[98px] ${
          !item.leido ? "bg-light-purple" : "bg-[#D9C5E3]"
        }`}
      >
        <Text className="pr-3 pt-2 text-md absolute right-0 top-0">
          {item.fecha?.slice(0, 10)}
        </Text>
        <View className="flex-row w-full my-6">
          <View className="justify-center px-6 ">
            <Image
              source={require("../../assets/Notifications/campana.png")}
              className="h-10 w-8 "
            />
          </View>
          <View>
            <Text className="text-lg text-dark-purple font-extrabold">
              ¡{item.titulo}!
            </Text>
            <Text className="text-base ">
              {item.descripcion}
         </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
