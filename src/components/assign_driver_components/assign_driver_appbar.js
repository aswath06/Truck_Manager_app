import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import ArrowBack from '../../assets/icons/arrowback';

const {width} = Dimensions.get('window');

export default function Assign_driver_appbar({title}) {
  return (
    <View>
      <View style={[styles.header, {gap: 5}]}>
        <ArrowBack />
        <Text style={styles.heading}>{title}</Text>
      </View>
    </View>
  );
}

const responsiveFontSize = (fontSize) => {
  const scaleFactor = width / 375;
  return fontSize * scaleFactor;
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(18),
  },
});
