import { StyleSheet, View, SafeAreaView, Dimensions, Image, Animated, Easing, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Startbutton from '../../components/startbutton';

const { height, width } = Dimensions.get('window'); // Get screen dimensions

export default function Getstarted() {
    const slideAnimRectangle = useRef(new Animated.Value(-height)).current; // Initialize animation value for rectangle
    const slideAnimImage = useRef(new Animated.Value(-width)).current; // Initialize animation value for image
    const fadeAnimWelcomeText = useRef(new Animated.Value(0)).current; // Initialize animation value for Welcome text opacity
    const fadeAnimSubText = useRef(new Animated.Value(0)).current; // Initialize animation value for Truck Management System opacity

    useEffect(() => {
        // Start the rectangle slide animation first
        Animated.timing(slideAnimRectangle, {
            toValue: 0, // Slide to the original position (top of the screen)
            duration: 1000, // Duration of the animation (1 second)
            easing: Easing.ease, // Smooth easing
            useNativeDriver: true, // Use native driver for better performance
        }).start(() => {
            // Start the image slide animation after the rectangle animation completes
            Animated.timing(slideAnimImage, {
                toValue: width * 0.1, // Slide to a position that is 10% from the left
                duration: 1000, // Duration of the image animation (1 second)
                easing: Easing.ease, // Smooth easing
                useNativeDriver: true, // Use native driver for better performance
            }).start();
        });

        // Start fading the Welcome text
        Animated.timing(fadeAnimWelcomeText, {
            toValue: 1, // Fade in to full opacity
            duration: 2000, // 2 seconds fade in duration
            useNativeDriver: true, // Use native driver for better performance
        }).start();

        // Start fading the Truck Management System text after Welcome text fades in
        Animated.timing(fadeAnimSubText, {
            toValue: 1, // Fade in to full opacity
            duration: 2000, // 2 seconds fade in duration
            delay: 1000, // Delay the subtext fade until after welcome text
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    }, [slideAnimRectangle, slideAnimImage, fadeAnimWelcomeText, fadeAnimSubText]);

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Animated content section */}
            <View style={styles.contentContainer}>
                <Animated.View style={[styles.rectangle, { transform: [{ translateY: slideAnimRectangle }] }]}>
                    <Animated.Text style={[styles.welcomeText, { opacity: fadeAnimWelcomeText }]}>
                        Welcome
                    </Animated.Text>
                    <Animated.Text style={[styles.subText, { opacity: fadeAnimSubText }]}>
                        Truck Management System
                    </Animated.Text>
                    <Animated.View style={[styles.animatedView, { 
                        transform: [{ translateX: slideAnimImage }], 
                        top: height * 0.15 // Move the image a little lower (adjust as needed)
                    }]}>
                        <Image 
                            source={require('../../assets/images/eichertruck.png')} // Use local image from assets folder
                            style={styles.image}
                        />
                    </Animated.View>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Background color for SafeArea
    },
    contentContainer: {
        flex: 1, // Takes up available vertical space
        justifyContent: 'center', // Centers content vertically
    },
    rectangle: {
        position: 'absolute', // Make the rectangle fill the parent
        top: 0,
        left: 0,
        width: width, // Full width of the screen
        height: height * 0.7, // 70% of the screen height
        backgroundColor: 'orange', // Orange color for the rectangle
        borderBottomLeftRadius: 40, // Rounded corners for the bottom-left
        borderBottomRightRadius: 40, // Rounded corners for the bottom-right
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    },
    welcomeText: {
        position: 'absolute', // Position it absolutely within the rectangle
        top: height * 0.05, // Adjust this to move text higher (5% from the top)
        color: 'white', // Text color
        fontSize: 35, // Increased font size (changed from 30 to 40)
        fontWeight: 'bold', // Bold text
        textAlign: 'center', // Center text horizontally
        width: '100%', // Make it full width for centering
    },
    subText: {
        position: 'absolute', // Position it absolutely below the welcome text
        top: height * 0.12, // Move this higher to be closer to welcome text
        color: 'white', // Text color
        fontSize: 27, // Increased font size for subtext (changed from 22 to 30)
        textAlign: 'center', // Center text horizontally
        width: '100%', // Make it full width for centering
        fontWeight:"600",
    },
    animatedView: {
        position: 'absolute', // Keep the animated view positioned absolutely
        top: height * 0.15, // Set initial position for the image view
    },
    image: {
        width: 600, // Adjust the width of the image
        height: 600, // Adjust the height of the image
        resizeMode: 'contain', // Image will maintain aspect ratio
    },
});
