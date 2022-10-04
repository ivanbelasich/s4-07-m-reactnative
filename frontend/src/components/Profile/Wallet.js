import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import WalletIcon from "../../assets/Wallet/wallet-icon.png";
import ProfileButton from "./ProfileButton";

const Wallet = () => {
  return (
    <View className="">
      <View className="justify-center flex-row items-center">
        <Image source={WalletIcon}></Image>
        <Text className="text-xl font-bold ml-2">TU BILLETERA</Text>
      </View>
      <View className="flex-row justify-around my-4">
        <Text className="text-center ">
          Balance:{" "}
          <Text className="font-extrabold text-xl text-[#531CB3]">$1000</Text>
        </Text>
        <Text className="text-base underline color-[#570E7E] ">
          transactions history
        </Text>
      </View>
      <View className="flex-row justify-around">
        <Text className="border-2 p-2.5 font-extrabold text-xs border-[#5D1683] rounded-xl bg-white color-[#531CB3]">RETIRAR DINERO</Text>
        <ProfileButton title="INGRESAR DINERO"/>
      </View>
    </View>
  );
};

export default Wallet;
