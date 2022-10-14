import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './details';
import JobCard from './JobCard';
// import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const CustomNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
               options={{
                    headerShown: false,
                    headerStyle: { height: 130, backgroundColor: "#724BB6" },
                    headerTitle: { fontSize: 60 },
                    headerTitleStyle: {
                        fontWeight: "600",
                        fontSize: 26,
                        color: "#fff",
                    },
                    tabBarIcon: () => (
                        <Image
                            source={require("../../src/assets/Navigation/home-icon.png")}
                        />
                    ),
                }}
                name = "Trabajos"
                component={JobCard}
            />
            <Stack.Screen
                name="Detalle"
                component={Details}
            />
        </Stack.Navigator>
    )
}

export {CustomNav}