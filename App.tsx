import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fullstart from './src/screens/login/Fullstart';
import Login from './src/screens/drivers/My_job/My_Job_Details';
import Navigation from './src/navigation/navigation';
export default function App() {
  return (
    <View style = {{backgroundColor: 'white',flex: 1}}>
      {/* <Login /> */}
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({});
