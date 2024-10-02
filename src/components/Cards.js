import { StyleSheet, View } from 'react-native';
import React from 'react';
import Card from './Card'; // Import the Card component

export default function Cards() {
  return (
    <View style={styles.container}>
      <Card
        title="Truck in Moving"
        subtitle="10"
        imageSource={require('../assets/images/truck.png')}
        bgColor="#d0f6aa"  // Light green
        borderColor="#66bb6a" // Darker green for border
      />
      <Card
        title="Truck in Rest"
        subtitle="10"
        imageSource={require('../assets/images/truckrest.png')}
        bgColor="#f4d8c1"  // Light yellow
        borderColor="#e6a700" // Darker yellow for border
      />
      <Card
        title="Truck in Services"
        subtitle="10"
        imageSource={require('../assets/images/car-service.png')}
        bgColor="#facccc"  // Light red (Light Pink)
        borderColor="#f28c8c" // Darker red for border
      />
      <Card
        title="Job Assign"
        subtitle="10"
        imageSource={require('../assets/images/jobs.png')}
        bgColor="#AEAEAE"  // Light grey
        borderColor="#7d7d7d" // Darker grey for border
      />
      <Card
        title="Add Truck"
        subtitle="10"
        imageSource={require('../assets/images/truck-loading.png')}
        bgColor="#F4D1F9"  // Light pink
        borderColor="#f49ac2" // Darker pink for border
      />
      <Card
        title="Drivers"
        subtitle="10"
        imageSource={require('../assets/images/add-person.png')}
        bgColor="#B3D5F0"  // Light blue
        borderColor="#90b3e8" // Darker blue for border
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
