import React from 'react';
import { ScrollView, Text } from 'react-native';
import FaqCard from '../components/FaqCard'


const Faq = () => {
  return (
    <ScrollView >
      <FaqCard />
      <FaqCard />
      <FaqCard />
    </ScrollView>
  )
}

export default Faq;