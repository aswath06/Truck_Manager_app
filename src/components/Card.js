import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = ({ title, subtitle, imageSource, bgColor, borderColor }) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: bgColor, borderColor: borderColor }]}>
      <View style={styles.content}>
        {/* Image above the title */}
        <Image source={imageSource} style={styles.image} />
        <Text style={[styles.text, { color: borderColor }]}>{title}</Text>
        {subtitle && <Text style={[styles.text, { color: borderColor }]}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',  // Card width set to 45%
    height: 150,   // Increased height to accommodate the image
    borderRadius: 10,
    borderWidth: 2,          // Add border width
    shadowColor: '#FFA500',  // Orange shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,      // Adjust shadow opacity for visibility
    shadowRadius: 4,
    elevation: 5,            // Elevation for Android shadow
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
    marginTop: 20,  // Space between rows
    marginBottom: 20,  // Space between cards vertically
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',   // Center the content within the card
    height: '100%',
    width: '100%',
  },
  image: {
    width: 50,      // Image width
    height: 50,     // Image height
    marginBottom: 10, // Space between image and title
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Card;
