import { View, Text, Modal, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import VioletButton from "../Profile/VioletButton";
import { useNavigation } from "@react-navigation/native";

export default function ModalContainer(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShowModal(!showModal);
        }}
      >
        <View className="bg-[#D2A8E8] w-[305px] m-auto p-10 shadow-2xl shadow-[#724BB6]">
          <Text className="text-lg font-extrabold color-[#570E7E] text-center leading-[22px]">
            {props.title}
          </Text>

          <Text className="text-[15px] font-semibold text-center color-[#FCFCFC] mt-4 leading-[18px] mb-6]">
            {props.message}
          </Text>
          <VioletButton
            title="Aceptar"
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </Modal>
      <Pressable onPress={() => setShowModal(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
}
