import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Toast from "react-native-root-toast";
import VioletButton from "../Profile/VioletButton";

const ApplyJobButton = ({ titulo, username, idCreador }) => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const date = new Date();

  const applyJob = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://s4-07-m-reactnative.herokuapp.com/notifications",
        {
          titulo: `Has aplicado correctamente para "${titulo}"`,
          descripcion: `Contáctate con ${username} para continuar con la aplicación.`,
          userId: userData[0].user._id,
          fecha: date.toISOString(),
          leido: false,
        }
      );
      const response2 = await axios.post(
        "https://s4-07-m-reactnative.herokuapp.com/notifications",
        {
          titulo: `Solicitud de aplicación para ${titulo}`,
          descripcion: `El usuario ${userData[0].user.nombreCompleto} aplicó para ${titulo}`,
          userId: idCreador,
          fecha: date.toISOString(),
          leido: false,
        }
      );
      let toast = Toast.show("Has aplicado correctamente para el trabajo!", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: "green",
      });
      setLoading(false);
    } catch (error) {
      let toast = Toast.show("Error al aplicar al trabajo", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: "red",
      });
      console.log(error, "newJobApply error");
      setLoading(false);
    }
  };

  /* const Btn = ({ contratador, trabajo }) => (
    /*   <StyledView className="flex-row mb-2 justify-between">
      <TouchableOpacity className="shadow-xl  shadow-[#570E7E] rounded-xl">
        <Text className="border-2 h-10 p-3 font-extrabold text-xs border-[#5D1683] rounded-xl bg-[#D9C6E3] color-[#531CB3] text-center w-[135px]">
          CONTACTAR
        </Text>
      </TouchableOpacity>
      <VioletButton title="APLICAR" onPress={() => applyJob} />
    </StyledView> */

  return (
    <View>
    <VioletButton onPress={applyJob} title="Aplicar"/>
    </View>
  );
};

export default ApplyJobButton;
