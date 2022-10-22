import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import WalletIcon from "../../assets/Wallet/wallet-icon.png";
import VioletButton from "./VioletButton";
import WhiteButton from "./WhiteButton";
// import Paypal from './paypalComponent';
import PaymentBtn from './PaymentStack';

import icon_Paystack2 from "../../assets/Wallet/icon_Paystack2.png";

const Wallet = () => {

  return (
    <View className="">
      <View className="justify-center flex-row items-center">
        <Image source={WalletIcon}></Image>
        <Text className="text-xl font-bold ml-2">TU BILLETERA</Text>
      </View>
      <View className="flex-row justify-around my-4 mx-3">
        <Text className="text-center text-[15px] color-[#000000]">
          Balance:{" "}
          <Text className="font-black text-2xl text-[#531CB3]">$1000</Text>
        </Text>
        <TouchableOpacity>
          <Text className="text-xs underline color-[#570E7E] w-[60%] text-center m-auto">
            Historial de transacciones </Text>
        </TouchableOpacity>
      </View>
      <View className="mb-5">
        <PaymentBtn inputTitle={'Ingresa Dinero a la cuenta'} placeHolder={'Cantidad a Ingresar'} tWing={'flex px-3 mt-14 items-center rounded-xl justify-center'} dNone={false} />
      </View>
      <View className="items-center mb-10 mx-5 mt-2">
        <TouchableOpacity className="mx-2 h-10 shadow-xl  shadow-[#570E7E] w-full border-2 border-[#5D1683] rounded-xl flex flex-row items-center bg-white justify-center">
          <Image source={icon_Paystack2} />
          <Text className="font-extrabold text-xs  color-[#531CB3]  ml-2">
            RETIRAR DINERO
          </Text>
        </TouchableOpacity>

      </View>
      <View className="flex-row justify-around mb-2">
        <VioletButton title="DARSE DE BAJA" />
        <WhiteButton title="CERRAR SESIÓN" />
      </View>
    </View>
  );
};

export default Wallet;
