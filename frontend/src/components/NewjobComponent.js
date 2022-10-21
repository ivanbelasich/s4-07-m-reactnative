import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Button,
  Image,
  ActivityIndicator,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import WhiteButton from "./Profile/WhiteButton";
import VioletButton from "./Profile/VioletButton";
// import DateTimePick from "./DateTimePick";
import Checkbox from "../assets/checkbox.png";
import PaymentBtn from './Profile/PaymentStack';

import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import Toast from "react-native-root-toast";
import { LinearGradient } from "expo-linear-gradient";




export default function NewjobComponent ({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [load, setLoad] = React.useState(false);

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const RegisterValidationSchema = yup.object().shape({

    titulo: yup
      .string("Ingresa titulo del post")
      .required("*Campo requerido"),
    categoria: yup
      .string("Seleccione una categoria")
      .required("*Campo requerido"),
    presupuesto: yup
      .number()
      .required('*Campo requerido')
      .positive()
      .integer(),
    descripcion: yup
      .string("Ingresa titulo del post")
      .required("*Campo requerido"),
    fechaLimite: yup
      .date()
      .default(() => new Date()),
    userId: yup
      .string()
  });






  const postear = async (data) => {
    const datos = data
    datos.presupuesto = Number(datos.presupuesto)
    //data.presupuesto = 1500;
    // console.log(datos);
    setLoad(true);

    try {
      const response = await axios.post(
        "https://s4-07-m-reactnative.herokuapp.com/api/jobcards", datos)
       

      let toast = Toast.show("Post exitoso!", {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: "green",
      });
      setLoad(false);

      setTimeout(() => {
        navigation.navigate("isLogged");
        navigation.reset({
          index: 0,
          routes: [{ name: "isLogged" }],
        });
      }, 2000);
    } catch (error) {
      let toast = Toast.show("Algo salio mal, intente nuevamente o comuniquese con el administrador", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: "red",
      });
      setLoad(false);
      // console.log(error);
    }
  };





  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  // };
  return (
    <ScrollView>
      <Formik
        validateOnMount={true}
        validationSchema={RegisterValidationSchema}
        initialValues={{ titulo: '', categoria: '', presupuesto: '', fechaLimite: '', descripcion: '', userId: '634742c61f645b0765e7a2c3' }}
        //onSubmit={values => console.log(values)}
        onSubmit={values => postear(values)
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,

        }) => (
          <>
            <View className="px-3 mt-14 items-center rounded-xl">
              <VioletButton
                onPress={() => navigation.navigate("isLogged")}
                title="Volver"
              />
              <Text className="mx-8 my-2 self-start text-[16px]  font-medium">
                Título
              </Text>
              <TextInput
                className=" mb-8 bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] pl-3 "
                onChangeText={handleChange('titulo')}
                onBlur={handleBlur('titulo')}
                value={values.titulo}
                keyboardType="default" />

              {(errors.titulo && touched.titulo) &&
                <Text className="text-xs text-red-500 ml-4">{errors.titulo}</Text>
              }

              <Text className="mx-8 my-2 self-start text-[16px] font-medium">
                Categoría
              </Text>
              <View className="mb-8 bg-[#DFD8E2] w-[90%] rounded-xl h-[39px] justify-center pl-1 text-[#A1A1A1] ">
                <Picker
                  selectedValue={values.categoria}
                  onBlur={handleBlur('categoria')}
                  onValueChange={(itemValue, itemIndex) => setFieldValue('categoria', itemValue)}
                >
                  <Picker.Item label="" value="null" enabled={false} />
                  <Picker.Item label="Java" value="java" className="text-[#A1A1A1]" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
                {(errors.categoria && touched.categoria) &&
                  <Text className="text-xs text-red-500 ml-4">{errors.categoria}</Text>
                }
              </View>
              <Text className="mx-8 my-2 self-start text-[16px] font-medium  ">
                Fecha límite
              </Text>
              {/*   <TextInput
          className="mb-8 pl-3 bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] "
          type={"date"}
          placeholder="dd/mm/yy"
        /> */}
              {/* <DateTimePick
                    date={date} setDate={setDate}
              //  onChange={onChange} 
              /> */}
              <TouchableOpacity
                className="mb-8 pl-3 bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] flex  justify-center"
                onPress={showDatepicker}
              >
                <Text className="">{date.toDateString()}</Text>
                {show && (
                  <DateTimePicker
                    minimumDate={new Date(Date.now())}
                    locale="es-ES"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={(event, selectedDate) => {
                      const currentDate = selectedDate;
                      setShow(false);
                      setDate(currentDate);
                      setFieldValue('fechaLimite', selectedDate.toISOString())
                    }}
                  />
                )}

              </TouchableOpacity>
              <Text className="mx-8 my-2 self-start text-[16px] font-medium ">
                Presupuesto
              </Text>
              <TextInput
              type="number"
                className="mb-8  bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] pl-3 "
                onChangeText={handleChange('presupuesto')}
                onBlur={handleBlur('presupuesto')}
                value={Number(values.presupuesto)}
                keyboardType="numeric"
              />

              {(errors.presupuesto && touched.presupuesto) &&
                <Text className="text-xs text-red-500 ml-4">{errors.presupuesto}</Text>
              }
              <PaymentBtn value={values.presupuesto} dNone={true} />
              <Text className="mx-8 my-2 self-start text-[16px] font-medium">
                Descripción
              </Text>
              <TextInput
                style={{ textAlignVertical: "top" }}
                multiline
                numberOfLines={6}
                className="mb-8  bg-[#DFD8E2] rounded-xl w-[90%]  p-3"
                onChangeText={handleChange('descripcion')}
                onBlur={handleBlur('descripcion')}
                value={values.descripcion}
                keyboardType="default"
              />
              {(errors.descripcion && touched.descripcion) &&
                <Text className="text-xs text-red-500 ml-4">{errors.descripcion}</Text>
              }
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

              <TouchableOpacity onPress={handleSubmit}>
                <LinearGradient
                  colors={["#570E7E", "#AA7BC3"]}
                  className="h-10 rounded-xl"
                >
                  <View>
                    <Text
                      className="text-[#f1f1f1] text-xs text-center py-3  m-auto font-extrabold w-[135px]"
                    >
                      {load ? (
                        <ActivityIndicator color="pink" size="small" />
                      ) : (
                        "PUBLICAR"
                      )}{" "}
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>

            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};


