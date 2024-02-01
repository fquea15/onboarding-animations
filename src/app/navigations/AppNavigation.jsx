import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { getItem } from '../utils/AsyncStorage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const [showOnboarding, setShowOnboarding] = useState(true)

    useEffect(() => {
        checkIfAlreadyOnboarded()
    }, [showOnboarding])

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded) {
            //hide onboarding
            setShowOnboarding(false)
            console.log('LOG', onboarded)
        } else {
            setShowOnboarding(true)
            console.log("Hola")
            console.log("skjdkjsd", onboarded)
            console.log(showOnboarding)
        }
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={`${showOnboarding ? 'Onboarding' : 'Home'}`}>
                <Stack.Screen name='Onboarding' options={{ headerShown: false }} component={OnboardingScreen} />
                <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}