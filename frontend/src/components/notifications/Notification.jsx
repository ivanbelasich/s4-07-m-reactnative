import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Notification({ item }) {
  return (
    <TouchableOpacity>
      <View
        className={`mt-2  flex-row  items-center justify-center relative min-h-[98px] ${
          !item.leido ? "bg-light-purple" : "bg-[#D9C5E3]"
        }`}
      >
        <Text className="pr-3 pt-2 text-md absolute right-0 top-0">
          {item.fecha?.slice(0, 10)}
        </Text>

        <View className="flex-row w-full pr-2">
        <View className="justify-center px-2">
          <View className="relative">
            <Image
              source={require("../../assets/Notifications/campana.png")}
              className="h-10 w-8"
            />
            {/* <View className="bg-[#570E7E] h-[25px] w-[25px] rounded-full absolute -right-4 -top-4 flex items-center justify-center">
                                <Text className='font-bold text-white'>1</Text>
                            </View> */}
          </View>
        </View>
     
          <View className="pr-8">
            <Text className="text-lg text-dark-purple font-extrabold">
              ¡{item.descripcion}!
            </Text>
            <Text className="text-base">
              Tu postulación para {item.titulo} fue aceptada.
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
