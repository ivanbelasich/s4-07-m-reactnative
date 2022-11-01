import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import ProfilePic from "../../assets/profile-detail-image.png";
import ApplyJobButton from "./ApplyJobButton";

const StyledView = styled(View);
const StyledText = styled(Text);

const Header = ({ title, price }) => (
  <StyledView className="flex flex-row justify-between flex-wrap mb-1">
    <StyledText className="txt-slate800 text-2xl font-semibold w-auto">
      {title}
    </StyledText>
  </StyledView>
);

const DatePlace = ({ date, place, category }) => (
  <StyledView className="flex flex-row justify-between">
    <StyledText style={styles.text}>
      <Image source={require("../../assets/Vector.png")} /> {date.slice(0, 10)}
    </StyledText>
    <StyledText style={styles.text}>
      <Image source={require("../../assets/LocationIcon.png")} /> {place}
    </StyledText>
    {/* lo movi para mejor visualizacion */}
    <StyledText className="text-slate-800 rounded-full bg-violet-50 w-auto px-2 text-center">
      {category}
    </StyledText>
  </StyledView>
);

const Description = ({ description }) => (
  <StyledText className="mt-3 mb-3">{description}</StyledText>
);

const Category = ({ category }) => (
  <StyledView className="flex flex-row justify-end">
    <StyledText className="text-slate-800 rounded-full bg-violet-50 w-auto px-2 text-center">
      {category}
    </StyledText>
  </StyledView>
);

const UserContractor = ({ avatar, userName, userLast, deadline, budget }) => (
  <StyledView className="mb-4 shadow-xl  shadow-[#570E7E]">
    <StyledView className="flex flex-row mb-3">
      <StyledText className="font-bold text-red-500">Deadline: </StyledText>
      <StyledText className="font-bold">{deadline}</StyledText>
    </StyledView>

    <StyledView className="flex-row justify-between my-3">
      <StyledView className="flex flex-row">
        <Image
          source={{ uri: avatar, width: 50, height: 50 }}
          className="rounded-full text-center"
        />
        <TouchableOpacity>
          <StyledView className="flex-row items-center ml-2 ">
            <Image source={ProfilePic} className="mr-4" />
            <View>
              <StyledText className="flex font-bold">
                {userName}
                {userLast}
              </StyledText>
              <StyledText>Contratador</StyledText>
            </View>
          </StyledView>
        </TouchableOpacity>
      </StyledView>
      <StyledView className="text-slate-800 rounded-2xl bg-violet-50 w-32 h-[50px] px-2">
        <StyledText className="text-center text-xl font-bold ">
          ${budget}
        </StyledText>
        <StyledText className="text-xs text-center text-[#570E7E] ">
          Presupuesto
        </StyledText>
      </StyledView>
    </StyledView>
  </StyledView>
);

<ApplyJobButton /* titulo={items.title} descripcion={items.descripcion} */ />;

const Details = ({ route, navigation }) => {
  // console.log(route.params);
  const items = route.params.value;

  return (
    <View className="h-full justify-center shadow-xl  shadow-[#570E7E]">
      {/* cambiar nombre del archivo fakeData por la API  */}
      <View style={styles.container} className="rounded-md">
        <View className="flex-row  justify-between mb-2">
          <Header title={items.titulo} price={items.presupuesto} />
          <Ionicons
            name="arrow-undo"
            size={29}
            color="#570E7E"
            onPress={() => navigation.navigate("isLogged")}
          />
        </View>
        <DatePlace
          date={items.createdAt}
          place={`${items.ciudad}, ${items.provincia}`}
          category={items.categoria}
        />
        <StyledText className="mt-4">Descripción</StyledText>
        <Description description={items.descripcion} />
        <UserContractor
          avatar={items.userAvatar}
          userName={items.contratador}
          userLast={items.userLastName}
          deadline={items.fechaLimite?.slice(0, 10)}
          budget={items.presupuesto}
        />
        <ApplyJobButton descripcion={items.descripcion} titulo={items.titulo} idCreador={items.userId} />
        {/* <Category category={item.category} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#D9C6E3",
    padding: 15,
    marginHorizontal: 10,
  },
  text: {
    color: "rgb(86, 85, 85)",
  },
});

export default Details;
