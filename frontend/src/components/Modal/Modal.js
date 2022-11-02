import { View, Text, Modal, Alert } from "react-native";
import React from "react";
import VioletButton from "../Profile/VioletButton";

export default function ModalContainer({
  title,
  message,
  showModal,
  setShowModal,
}) {
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
            {title}
          </Text>

          <Text className="text-[15px] font-semibold text-center color-[#FCFCFC] mt-4 leading-[18px] mb-6]">
            {message}
          </Text>
          <VioletButton
            title="Aceptar"
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </Modal>

      {/*     PARA ACTIVAR EL MODAL => setShowModal(true) dentro del componente a utilizar 
  
       EJEMPLO: 

     <Pressable onPress={() => setShowModal(true)}>
        <Text>Show Modal</Text>
      </Pressable> */}
    </View>
  );
}
