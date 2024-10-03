import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Callicon from '../../assets/icons/callicon';
import Locationicon from '../../assets/icons/locationicon';

const DriverCard = ({driver , onPress}) => {
  return (
    <View>
      <TouchableOpacity  style={styles.card} onPress={onPress}>
        <View>
          <View style={styles.header}>
            <Image source={{uri: driver.imageUrl}} style={styles.image} />
            <View style={styles.distanceContainer}>
              <Locationicon />
              <Text style={styles.distance}>{driver.distance}</Text>
            </View>
          </View>
          <View style={styles.det}>
            <Text style={styles.name}>{driver.name}</Text>
            <Text style={styles.id}>Driver id: {driver.dri_id}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.callButton}>
                <Callicon />
                <Text style={styles.callButtonText}> Call</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.star}>⭐</Text>
              <Text style={styles.rating}>{driver.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  det: {
    paddingVertical: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginRight: 10,
    width: '90%', // Adjust card width
    shadowColor: '#f4721e',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 40,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#f4721e',
  },
  distance: {
    color: '#f4721e',
    fontSize: 13,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: '900',
    color: 'grey',
    fontSize: 15,
  },
  id: {
    color: 'grey',
    fontSize: 11,
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#FF5C00',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  callButtonText: {
    paddingRight: 10,
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  star: {
    fontSize: 16,
    color: '#FFD700',
    marginLeft: 5,
  },
});

export default DriverCard;
