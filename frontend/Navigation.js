import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen.js";
import Faq from "./src/screens/Faq.js";
import Profile from "./src/screens/Profile.js";
import Notifications from "./src/screens/Notifications.js";
import Chat from "./src/screens/Chat.js";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login.jsx";
import Register from "./src/screens/Register.jsx";
import NewjobComponent from "./src/components/NewjobComponent";
import Details from "./src/components/details.js";


// screens

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#724BB6",
    height: 80,
  },
  tabBarLabel: () => {
    return null;
  },
  headerStyle: { height: 130, backgroundColor: "#724BB6" },
  headerTitle: { fontSize: 60 },
  headerTitleStyle: {
    fontWeight: "800",
    fontSize: 28,
    color: "#fff",
  },
  headerTitleAlign: "center",
};

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" {...{ screenOptions }}
    tabBarOptions={{
      activeBackgroundColor: "#D2A8E8" ,
      activeTintColor:"#D2A8E8",
    
    }}>
      <Tab.Screen
        options={{
          title: "TU PERFIL",
          tabBarIcon: () => (
            <Image
              source={require("./src/assets/Navigation/profile-icon.png")}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          title: "¿CÓMO PODEMOS AYUDARTE?",

          tabBarIcon: () => (
            <Image source={require("./src/assets/Navigation/faqs-icon.png")} activeBackgroundColor= "#D2A8E8"/>
            
          ),
        }}
        name="FAQ'S"
        component={Faq}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require("./src/assets/Navigation/home-icon.png")} />
          ),
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "NOTIFICACIONES",
          tabBarIcon: () => (
            <Image
              source={require("./src/assets/Navigation/notification-icon.png")}
            />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        options={{
          title: "MENSAJES",

          tabBarIcon: () => (
            <Image
              source={require("./src/assets/Navigation/messages-icon.png")}
            />
          ),
        }}
        name="Chat"
        component={Chat}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="isLogged" component={MyTabs} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="newjobComponent" component={NewjobComponent} />
        <Stack.Screen name="Detalle" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
