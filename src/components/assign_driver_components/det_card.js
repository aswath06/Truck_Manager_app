import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Single Button Component
const DriverButton = ({ label, number, icon, buttonStyle, textColor }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      {number && <Text style={[styles.number, { color: textColor }]}>{number}</Text>}
      {icon && <Text style={[styles.icon, { color: textColor }]}>{icon}</Text>}
    </TouchableOpacity>
  );
};

const DriverButtons = () => {
  return (
    <View style={styles.container}>
      <DriverButton 
        label="Present" 
        number="10" 
        textColor="#2ab91d" 
        buttonStyle={styles.presentButton} 
      />
      <DriverButton 
        label="Absent" 
        number="10" 
        textColor="#ff0000" 
        buttonStyle={styles.absentButton} 
      />
      <DriverButton 
        label="Update Driver" 
        textColor="#ff0000" 
        buttonStyle={styles.updateButton} 
      />
      <DriverButton 
        label="Add Driver" 
        icon="👤" 
        textColor="#0370c7" 
        buttonStyle={styles.addButton} 
      />
    </View>
  );
};

// Function for responsive font size
const responsiveFontSize = (fontSize) => {
  const scaleFactor = width / 375;
  return fontSize * scaleFactor;
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: responsiveFontSize(12),
    fontWeight: '900',
    textAlign: 'center',
  },
  number: {
    fontSize: responsiveFontSize(16),
    fontWeight: '900',
    textAlign: 'center',
  },
  icon: {
    fontSize: responsiveFontSize(20),
    textAlign: 'center',
    marginTop: 5,
  },
  presentButton: {
    backgroundColor: '#ccf7b6',
    borderWidth: 2,
    borderColor: 'green',
  },
  absentButton: {
    backgroundColor: '#f7b6b6',
    borderWidth: 2,
    borderColor: 'red',
  },
  updateButton: {
    backgroundColor: '#f7d08a',
    borderWidth: 2,
    borderColor: 'orange',
  },
  addButton: {
    backgroundColor: '#b6e0f7',
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export default DriverButtons;
