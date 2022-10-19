import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Button,
  Image,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import WhiteButton from "./Profile/WhiteButton";
import VioletButton from "./Profile/VioletButton";
import DateTimePick from "./DateTimePick";
import Checkbox from "../assets/checkbox.png";
import PaymentBtn from './Profile/PaymentStack';

const NewjobComponent = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  return (
    <ScrollView>
      <View className="px-3 mt-14 items-center rounded-xl">
        <VioletButton
          onPress={() => navigation.navigate("isLogged")}
          title="Volver"
        />
        <Text className="mx-8 my-2 self-start text-[16px]  font-medium">
          Título
        </Text>
        <TextInput className=" mb-8 bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] pl-3 " />
        <Text className="mx-8 my-2 self-start text-[16px] font-medium">
          Categoría
        </Text>
        <View className="mb-8 bg-[#DFD8E2] w-[90%] rounded-xl h-[39px] justify-center pl-1 text-[#A1A1A1] ">
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="" value="null" enabled={false} />
            <Picker.Item label="Java" value="java" className="text-[#A1A1A1]" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text className="mx-8 my-2 self-start text-[16px] font-medium  ">
          Fecha límite
        </Text>
        {/*   <TextInput
          className="mb-8 pl-3 bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] "
          type={"date"}
          placeholder="dd/mm/yy"
        /> */}
        <DateTimePick date={date} setDate={setDate} onChange={onChange} />

        {/* Cambie esta seccion por boton de ingresar dinero.*/}
        <PaymentBtn tWing={'mx-8 my-2 self-start text-[16px] font-medium flex w-100'} inputTitle={'Presupuesto'}/>
        {/* <Text className="mx-8 my-2 self-start text-[16px] font-medium ">
          Presupuesto
        </Text>
        <TextInput className="mb-8  bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] pl-3 " /> */}


        <Text className="mx-8 my-2 self-start text-[16px] font-medium">
          Descripción
        </Text>
        <TextInput
          style={{ textAlignVertical: "top" }}
          multiline
          numberOfLines={6}
          className="mb-8  bg-[#DFD8E2] rounded-xl w-[90%]  p-3 "
        />
      </View>
      <View className="right-0 left-0 mb-[50px] ">
        <View className="flex-row ">
          <Text className=" w-[2/4] mx-8 mb-8   text-start text-[16px] mr-[20px] font-medium">
            Adjuntar Archivo:{" "}
          </Text>
          <View className="flex-row gap-8">
            <TouchableOpacity>
              <MaterialIcons
                name="add-photo-alternate"
                size={25}
                color="#570E7E"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="paperclip" size={25} color="#570E7E" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="link" size={25} color="#570E7E" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row items-center">
          <Text className=" mx-8 my-2 self-start text-[16px] text-[#570E7E] w-2/4 underline font-medium ">
            ACEPTAR REGLAS DE POSTEO
          </Text>
          <Image source={Checkbox} />
        </View>
      </View>
      <View className="flex-row justify-around mb-6">
        <WhiteButton title="GUARDAR BORRADOR" />
        <VioletButton title="PUBLICAR" />
      </View>
    </ScrollView>
  );
};

export default NewjobComponent;
