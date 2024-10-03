import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import drivers from '../../../res/assign_driver_details.json';

export default function Assign_details({ topicText, memberStatus }) {
  return (
    <View>
      <View style={styles.pref}>
        <Text style={styles.topic}>{topicText}</Text>
        <Text style={styles.topic}>{memberStatus}</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#rgb(239, 239, 244)',
          marginVertical: '3%',
          marginHorizontal: '5%',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topic: {
    color: 'black',
  },
  pref: {
    paddingHorizontal: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
