import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CollapsibleView from "@eliav2/react-native-collapsible-view";


const FaqCard = ({ title, data }) => {
  return (
    <TouchableOpacity>
      <View className="items-center flex bg-[#D9C6E3] rounded-[20px] mt-[8] mx-4">
        <CollapsibleView
          style={{
            backgroundColor: "trasnparent",
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 0,
          }}
          noArrow={true}
          title={
            <Text
              style={{
                fontsize: 46,
                color: "black",
                lineHeight: 24,
                alignItems: "center",
                fontWeight: "700",
                width: "100%",
                textAlign: "center",
              }}
            >
              {" "}
              {title}{" "}
            </Text>
          }
        >
          <Text className=" h-[182]  text-black text-xl text-center font-Inter font-regular mt-8 ">
            {data}
          </Text>
        </CollapsibleView>
      </View>
    </TouchableOpacity>
  );
};

export default FaqCard;
