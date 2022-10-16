import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";
import Search from "./Search/Search";
import AddButton from "./AddButton";
import { useNavigation } from "@react-navigation/native";

// Importando useGetData para conexion basedatos, o pedir informacion.
// import {useGetData} from '../../useFetch';

const DATA = [
  {
    id: "1",
    title: "Jardinero",
    budget: 1000,
    date: "19-10-2022",
    zone: "Mar de Plata",
    description:
      "Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. Circumambulate the city of a dreamy Sabbath afternoon. There stand his trees, each with a hollow trunk, as if a hermit and a crucifix were within; and here sleeps his meadow,\n and there sleep his cattle; and up from yonder cottage goes a sleepy smoke. —Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Though I cannot tell why it was exactly that those stage managers, theFates, put me down for this shabby part of a whaling voyage, whenothers were set down for magnificent parts in high tragedies, and shortand easy parts in genteel comedies, and jolly parts in farces—though Icannot tell why this was exactly; yet, now that I recall all thecircumstances, I think I can see a little into the springs and motiveswhich being cunningly presented to me under various disguises, inducedme to set about performing the part I did, besides cajoling me into thedelusion that it was a choice resulting from my own unbiased freewilland discriminating judgment. Surelyall this is not without meaning.",
    categorias: "categoria 1",
    userAvatar:
      "https://img.freepik.com/free-photo/half-profile-image-beautiful-young-woman-with-bob-hairdo-posing-gazing-with-eyes-full-reproach-suspicion-human-facial-expressions-emotions-reaction-feelings_343059-4660.jpg?w=2000",
    userName: "Eugenia",
    userLastName: "Williamson",
    deadline: "5-12-2022",
  },
  {
    id: "2",
    title: "Diseñador",
    budget: 2000,
    date: "20-10-2022",
    zone: "Buenos Aires",
    description:
      "The act of paying is perhaps the most uncomfortableinfliction that the two orchard thieves entailed upon us. What does that indignity amount to, weighed,I mean, in the scales of the New Testament? I abandon the glory and distinctionof such offices to those who like them. And,doubtless, my going on this whaling voyage, formed part of the grandprogramme of Providence that was drawn up a long time ago. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream.",
    categorias: "categoria 2",
    userAvatar:
      "https://www.themoviedb.org/t/p/original/tWHyifIcUEc1E0ufIZq5JqyeF6R.jpg",
    userName: "Michael",
    userLastName: "Jackson",
    deadline: "6-1-2023",
  },
  {
    id: "3",
    title: "Cuidado Niños",
    budget: 500,
    date: "26-9-2022",
    zone: "Cartajena",
    description:
      "The act of paying is perhaps the most uncomfortableinfliction that the two orchard thieves entailed upon us. What does that indignity amount to, weighed,I mean, in the scales of the New Testament? I abandon the glory and distinctionof such offices to those who like them. And,doubtless, my going on this whaling voyage, formed part of the grandprogramme of Providence that was drawn up a long time ago. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream.",
    categorias: "categoria 5",
    userAvatar:
      "https://eddie-hernandez.com/wp-content/uploads/2019/11/EJ-Womans-Professional-Outdoor-Headshot-14.jpg",
    userName: "Yazmin",
    userLastName: "Gutierrez",
    deadline: "16-4-2023",
  },
  {
    id: "4",
    title: "Programador",
    budget: 5000,
    date: "21-7-2022",
    zone: "Buenos Aires",
    description:
      "The act of paying is perhaps the most uncomfortableinfliction that the two orchard thieves entailed upon us. What does that indignity amount to, weighed,I mean, in the scales of the New Testament? I abandon the glory and distinctionof such offices to those who like them. And,doubtless, my going on this whaling voyage, formed part of the grandprogramme of Providence that was drawn up a long time ago. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream.",
    categorias: "categoria 4",
    userAvatar:
      "https://i.pinimg.com/736x/7e/95/b1/7e95b15e2d99e08fee6a825391303fa7.jpg",
    userName: "Giles",
    userLastName: "Morales",
    deadline: "19-6-2023",
  },
  {
    id: "5",
    title: "Limpieza",
    budget: 100,
    date: "2-11-2022",
    zone: "Buenos Aires",
    description:
      "The act of paying is perhaps the most uncomfortableinfliction that the two orchard thieves entailed upon us. What does that indignity amount to, weighed,I mean, in the scales of the New Testament? I abandon the glory and distinctionof such offices to those who like them. And,doubtless, my going on this whaling voyage, formed part of the grandprogramme of Providence that was drawn up a long time ago. Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream.",
    categorias: "categoria 1",
    userAvatar:
      "https://i.pinimg.com/474x/ec/62/70/ec6270b59722dd9719de490e393eddae.jpg",
    userName: "Peter",
    userLastName: "Parker",
    deadline: "31-8-2023",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-[#D9C6E3] my-2 mx-4 rounded-xl p-4"
  >
    <View className="flex-row justify-between">
      <Text className="text-2xl flew-row justify-center font-medium">
        {item.title}
      </Text>
      <Text className="text-xl font-black">
        <Image source={require("../assets/MoneyIcon.png")} /> {item.budget}{" "}
      </Text>
    </View>
    <View className="flex-row">
      <Text className=" text-sm text-[#565555] py-1 pr-3">
        <Image className="" source={require("../assets/Vector.png")} />{" "}
        {item.date}{" "}
      </Text>
      <Text className="text-sm text-[#565555] py-1 ">
        <Image className="" source={require("../assets/LocationIcon.png")} />{" "}
        {item.zone}{" "}
      </Text>
    </View>
    <View className="flex-row justify-between py-4">
      <View className="w-2/3">
        <Text className=" text-sm font-normal leading-4" numberOfLines={2}>
          {item.description}
        </Text>
      </View>
      <Text className="text-sm font-normal bg-[#F3F1F1] rounded-[10px] w-[86px] h-[22px] text-center">
        {item.categorias}
      </Text>
    </View>
  </TouchableOpacity>
);

function JobCard() {
  const navigation = useNavigation();
  // Para obtener la data de la base de datos
  // const {data, loading } = useGetData('https://s4-07-m-reactnative.herokuapp.com/api/jobcards');

  const render = ({ item }) => (
    <Item
      item={item}
      onPress={() => navigation.navigate("Detalle", { value: item })}
    />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={render}
      keyExtractor={(item) => item.id}
      extraData={DATA.id}
      className="mb-auto"
    />
  );
}

export default JobCard;
