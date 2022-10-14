import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from '../components/details';
import JobCard from '../components/JobCard';

const Stack = createNativeStackNavigator();

const CustomNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Trabajos"
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