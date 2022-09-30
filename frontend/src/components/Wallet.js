import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import WalletIcon from "../assets/Wallet/wallet-icon.png";

const Wallet = () => {
  return (
    <View>
      <View className="flex-row items-center justify-around h-8">
        <Text className="text-xl">WALLET</Text>
        <Image source={WalletIcon}></Image>
        <Text className="text-base underline">transactions history</Text>
      </View>
      <Text className="text-center">
        Balance: <Text className="font-extrabold text-xl">$1000</Text>
      </Text>
      <View className="flex-row sizi justify-around mt-3 mb-3">
        <TouchableOpacity>
          <Text className=" text-[#e5e5e5] leading-10 align-middle w-32 text-center items-center h-10 rounded-[20px] bg-[#373737]">
            TEXT BUTTON
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="w-32 leading-10 text-center h-10 rounded-[20px] border-2 border-[#373737]">
            TEXT BUTTON
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wallet;
