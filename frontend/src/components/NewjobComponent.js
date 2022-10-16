import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  Button,
} from "react-native";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import WhiteButton from "./Profile/WhiteButton";
import VioletButton from "./Profile/VioletButton";

const NewjobComponent = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="right-0 left-0 top-8 items-center justify-center">
        <Button title="Home" onPress={() => navigation.navigate("isLogged")} />
        <Text className="mx-8 my-2 self-start text-[16px]  font-medium">
          Título
        </Text>
        <TextInput className=" mb-8 bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] " />
        <Text className="mx-8 my-2 self-start text-[16px] font-medium">
          Categoría
        </Text>
        <CollapsibleView
          style={{
            backgroundColor: "transparent",
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 0,
          }}
          title={
            <Text className=" pl-4 bg-[#DFD8E2] items-center w-[98%] rounded-xl h-[39px] text-black text-[16px] font-regular mt-2 ">
              Elegir <AntDesign name="caretdown" size={30} color="#570E7E" />
            </Text>
          }
          noArrow={true}
        >
          <Text className=" w-[342px] pl-4 left-0 right-0 bg-[#DFD8E2] items-center rounded-xl  h-[69px] text-black text-[16px] text-left font-regular">
            Pintura,Jardin , Hogar, Construccion, Varios
          </Text>
        </CollapsibleView>

        <Text className="mx-8 my-2 self-start text-[16px] font-medium">
          Fecha límite
        </Text>
        <TextInput
          className="mb-8  bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] "
          type={"date"}
        />
        <Text className="mx-8 my-2 self-start text-[16px] font-medium">
          Presupuesto
        </Text>
        <TextInput className="mb-8  bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] " />
        <Text className="mx-8 my-2 self-start text-[16px] font-medium">
          Descripción
        </Text>
        <TextInput className="mb-8  bg-[#DFD8E2] rounded-xl w-[90%] h-[138px] " />
      </View>
      <View className="right-0 left-0 mb-[50px] ">
        <View className="flex flex-row">
          <Text className=" w-[2/4] mx-8 mb-8  mt-6 text-start text-[16px] mr-[20px]font-medium">
            Adjuntar Archivo:{" "}
          </Text>
          <View className=" w-[3/4] flex flex-row items-center justify-start  gap-6 ">
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
        <Text className=" mx-8 my-2 self-start text-[16px] text-[#570E7E] w-2/4 underline font-medium">
          ACEPTAR REGLAS DE POSTEO
        </Text>
      </View>
      <View className="flex-row justify-around">
        <WhiteButton title="GUARDAR BORRADOR" />
        <VioletButton title="PUBLICAR" />
      </View>
    </ScrollView>
  );
};

export default NewjobComponent;
