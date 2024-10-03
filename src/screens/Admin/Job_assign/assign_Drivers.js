import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
// import ArrowBack from '../../../assets/icons/arrowback';
import Search from '../../../components/assign_driver_components/assign_driver_searchbar';
import AssignDriverCard from '../../../components/assign_driver_components/assign_driver_list';
import Assign_driver_appbar from '../../../components/assign_driver_components/assign_driver_appbar';

const {width} = Dimensions.get('window');

export default function Assign_drivers() {
  return (
    <View style={styles.container}>
      <Assign_driver_appbar title="Assign drivers" />
      <Text style = {styles.my_driver}>My Drivers</Text>
      <View>
        <Search/>
      </View>
      <AssignDriverCard/>
    </View>
  );
}

const responsiveFontSize = (fontSize) => {
  const scaleFactor = width / 375;
  return fontSize * scaleFactor;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(18),
  },
  my_driver: {
    color: '#000',
    paddingTop: 20,
    fontWeight: '900',
    fontSize: responsiveFontSize(22),
  },
});
