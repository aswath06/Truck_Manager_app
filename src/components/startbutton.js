import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';

export default function Startbutton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange', // Set button background color
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 40, // Horizontal padding
    borderRadius: 30, // Rounded corners
    alignSelf: 'center', // Ensure the button is centered horizontally
    marginBottom: 20, // Add space at the bottom for better placement
    top:"1000%",
    width:"80%",
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 18, // Text size
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center text horizontally
  },
});