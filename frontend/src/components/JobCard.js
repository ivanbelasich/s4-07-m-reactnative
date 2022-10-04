import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";

function JobCard() {
  return (
    <View className="bg-[#D9C6E3] mt-4 mx-4 rounded-xl">
      <TouchableOpacity className="p-4">
        <View className="flex-row justify-between">
          <Text className="text-2xl flew-row justify-center font-medium">
            Title 2
          </Text>
          <Text className="text-xl font-black">
            <Image source={require("../assets/MoneyIcon.png")} /> 1000{" "}
          </Text>
        </View>
        <View className="flex-row">
          <Text className=" text-sm text-[#565555] py-1 pr-3">
            <Image className="" source={require("../assets/Vector.png")} />{" "}
            23-09-2022{" "}
          </Text>
          <Text className="text-sm text-[#565555] py-1 ">
            <Image
              className=""
              source={require("../assets/LocationIcon.png")}
            />{" "}
            Mar de Plata{" "}
          </Text>
        </View>
        <View className="flex-row justify-between py-4">
          <View className="w-2/3">
            <Text className=" text-sm font-normal leading-4">
            Est. Sed tincidunt non consectetur est.placerat sed turpis
              volutpat at lobortis...
            </Text>
          </View>
          <Text className="text-sm font-normal bg-[#F3F1F1] rounded-[10px] w-[86px] h-[22px] text-center">
            categoria
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default JobCard;
