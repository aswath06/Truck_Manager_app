import { StyleSheet, View } from 'react-native';
import React from 'react';
import Card from './Card'; // Import the Card component

export default function Cards2() {
  return (
    <View style={styles.container}>
      <Card
        title="My Jobs"
        imageSource={require('../assets/images/truck.png')}
        bgColor="#d0f6aa"  // Light green
        borderColor="#66bb6a" // Darker green for border
      />
      <Card
        title="Qr Scan"
        imageSource={require('../assets/images/scan-qr-code.png')}
        bgColor="#B3D5F0"  // Light blue
        borderColor="#90b3e9" // Darker yellow for border
      />
      <Card
        title="images"
        imageSource={require('../assets/images/image-recognition.png')}
        bgColor="#f4d8c1"  // Light yellow
        borderColor="#e6a700" // Darker yellow for border
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,  // Increased space on both sides
    flexDirection: 'row',
    flexWrap: 'wrap',  // Wrap items to the next line if necessary
    justifyContent: 'space-between',
    paddingBottom: 20, // Optional: add bottom padding to the container for extra space
  },
});
