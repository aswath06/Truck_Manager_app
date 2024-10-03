import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AssignDriverCard from '../../../components/assign_driver_components/assign_driver_list';
import Search from '../../../components/assign_driver_components/assign_driver_searchbar';
import Assign_driver_appbar from '../../../components/assign_driver_components/assign_driver_appbar';
import DriverButtons from '../../../components/assign_driver_components/det_card';

export default function Add_Driver() {
  return (
    <View style={styles.container}>
      <Assign_driver_appbar title="Drivers" />
      <Search />
      <DriverButtons/>
      <AssignDriverCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
