import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen.js";
import Faq from "./src/screens/Faq.js";
import Profile from "./src/screens/Profile.js";
import Notifications from "./src/screens/Notifications.js";
import Chat from "./src/screens/Chat.js";
import { Image, View } from "react-native";

// screens

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#724BB6",
    height: 80,
  },
  tabBarLabel: () => {
    return null;
  },
};

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" {...{ screenOptions }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/profile-icon.png")} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{
          title: '¿CÓMO PODEMOS AYUDARTE?',
          headerStyle: { height:84, width:259, },
          headerTitle:{ fontSize: 24, },
          headerTitleStyle: {  fontWeight:'700', paddingLeft:90},
          tabBarIcon: () => (
            <Image source={require("./assets/faqs-icon.png")} />
          ),
        }}
        name="FAQ'S"
        component={Faq}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/home-icon.png")} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/notification-icon.png")} />
          ),
        }}
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require("./assets/messages-icon.png")} />
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
      <MyTabs />
    </NavigationContainer>
  );
}
