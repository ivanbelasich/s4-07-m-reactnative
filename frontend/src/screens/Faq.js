import React from "react";
import { View } from "react-native";
import FaqCard from "../components/FaqCard";

const Faq = () => {
  return (
    <View className="mt-5">
      <FaqCard />
      <FaqCard />
      <FaqCard />
      <FaqCard />
    </View>
  );
};

export default Faq;
