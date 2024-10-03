
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/navigation';
export default function App() {
  return (
    <View style = {{backgroundColor: 'white',flex: 1}}>
      <Navigation/>
    </View>
  );

}

const styles = StyleSheet.create({});
