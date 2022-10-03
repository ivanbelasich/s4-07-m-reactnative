import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CollapsibleView from "@eliav2/react-native-collapsible-view";

const FaqCard = () => {
  return (
    <TouchableOpacity>
      <View className="items-center flex w-screen  bg-[#D9C6E3] rounded-[20px] mb-[8] mt-[8]">
        <CollapsibleView style={{ backgroundColor: 'trasnparent', borderRadius: 20, alignItems: "center", borderWidth: 0 }} noArrow={true} title={
          <Text style={{ fontsize: 46, color: "black", lineHeight: 24, alignItems: "center", fontWeight: '700' }}> ¿PREGUNTA? </Text>
        }>
          <Text className=" h-[182]  text-black text-xl text-center font-Inter font-regular mt-8 ">Ut elit sit sit ultrices ex.
            venenatis lacus, Vestibulum convallis. viverra quis tortor. tincidunt est. Praesent ex ex ex at, maximus Cras sed tincidunt at orci fringilla sed amet, Lorem ex vitae efficitur.</Text>
        </CollapsibleView>
      </View>
    </TouchableOpacity>
  )
}

export default FaqCard;

