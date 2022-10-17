import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function DateTimePick({ date, setDate, onChange }) {
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View className="bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] justify-center mb-8">
      <Text onPress={showDatepicker} className="pl-3 text-[#A1A1A1]">
        Selecciona una fecha límite
      </Text>
    </View>
  );
}
