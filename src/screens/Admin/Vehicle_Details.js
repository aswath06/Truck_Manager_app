import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import VehicleForm from '../../components/vehicle_form';
import Arrow from '../../assets/icons/arrow_back'
const Vehicle = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flexDirection:'row'}}>
        <Arrow style={styles.icon}/>
        <Text style={styles.title}>Vehicle Details</Text>
      </View>
      <View style={styles.container}>
        <VehicleForm />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginTop:40,
    left:40,
    color:'black'
  },
  icon :{
    marginTop:46,
    left:34,
  }
});

export default Vehicle;
