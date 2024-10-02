import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const PaymentCompleted = () => {
  return (
    <View style={styles.container}>
      {/* Animated Circle with Tick */}
      <Animatable.View 
        animation="zoomIn" 
        duration={1000} 
        style={styles.circle}
      >
        <Animatable.Text 
          animation="bounceIn" 
          duration={1000} 
          style={styles.tick}
        >
          ✔
        </Animatable.Text>
      </Animatable.View>

      {/* Success Message */}
      <Text style={styles.message}>Payment Completed Successfully!</Text>
      <Text style={styles.subMessage}>Thank you for the transacion.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tick: {
    fontSize: 50,
    color: '#fff',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subMessage: {
    fontSize: 16,
    color: '#777',
  },
});

export default PaymentCompleted;
