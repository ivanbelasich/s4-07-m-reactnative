import React from "react";
import { ScrollView, View } from "react-native";
import FaqCard from "../components/FAQS/FaqCard";
import faqData from "../components/FAQS/FaqData";

const Faq = () => {
  return (
    <ScrollView className="my-5">
      {faqData.map((el, idx) => (
        <FaqCard title={el.title} data={el.data} key={idx} />
      ))}
    </ScrollView>
  );
};

export default Faq;
