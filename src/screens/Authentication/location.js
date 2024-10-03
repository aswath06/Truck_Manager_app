import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

// The component
const EnableLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2019/03/job-location.jpg?resize=1029%2C642&ssl=1',
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        Enable Your <Text style={styles.highlightedText}>Location</Text>
      </Text>

      <Text style={styles.description}>
        To search for the best nearby driver, we want to know your current
        location.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Use current location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '50%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.8, // Responsive width
    height: width * 0.7, // Responsive height
    resizeMode: 'cover', // Change to cover to enable borderRadius
    marginBottom: 30,
    borderRadius: 15, // Border radius applied
    overflow: 'hidden', // Ensure the borderRadius works properly
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  highlightedText: {
    color: '#FF7F50', // Color matching your design
  },
  description: {
    fontSize: 14,
    color: '#8f8f8f',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  locationButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    paddingVertical: 10,
  },
  skipButtonText: {
    color: '#8f8f8f',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default EnableLocationScreen;
