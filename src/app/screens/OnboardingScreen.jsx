import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/AsyncStorage';

const { width, height } = Dimensions.get('window')

export default function OnboardingScreen() {

    const navigation = useNavigation()

    const handleDone = () => {
        navigation.navigate('Home')
        setItem('onboarded', '1')
    }

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                bottomBarHighlight={false}
                containerStyles={{
                    paddingHorizontal: 15,
                }}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View >
                                <Lottie source={require('../../assets/animations/animation-3.json')} autoPlay loop
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Subscribe this channel to boost your productivity level',
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View>
                                <Lottie source={require('../../assets/animations/animation-2.json')} autoPlay loop style={styles.lottie} />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interruption',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <View>
                                <Lottie source={require('../../assets/animations/animation-4.json')} autoPlay loop style={styles.lottie} />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interruption',
                    }

                ]}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    doneButton: {
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 99,
        borderBottomLeftRadius: 99
    }
});