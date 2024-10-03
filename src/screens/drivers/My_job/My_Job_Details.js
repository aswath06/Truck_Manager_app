import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Call from '../../../assets/icons/Call';
import Location from '../../../assets/icons/Location';
import Start from '../../../assets/icons/Start';
import Arrow from '../../../assets/icons/arrow_back';

const StaticCard = () => {
  const handleCardPress = () => {
    console.log('Card pressed!');
  };

  return (
    <ScrollView>
      <Arrow style={{top: 38, left: 30}} />
      <Text
        style={{
          fontSize: 19,
          fontWeight: '700',
          bottom: 0,
          marginTop: 10,
          color: 'black',
          left: 60,
        }}>
        My Job
      </Text>
      <TouchableOpacity style={styles.card} onPress={handleCardPress}>
        <Text style={{fontSize: 16, bottom: 7, marginTop: 5, color: '#000'}}>
          These are the available trucks
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../../../assets/images/Profile.jpg')}
              style={styles.image}
            />
            <Text style={styles.textStyle1}>Name</Text>
          </View>

          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Task</Text>
              <Text style={styles.textStyle}> Chemical Delivery</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Departed</Text>
              <Text style={styles.textStyle}> 20 Feb, 05:00 PM</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Current Location</Text>
              <View>
                <Text style={styles.textStyle}> 123 Main Street,</Text>
                <Text style={styles.textStyle}> Anytown, IND 845103</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Trip Cost</Text>
              <Text style={styles.textStyle}> Rs 10000</Text>
            </View>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Call />
            <Text style={{marginLeft: 5, color: 'orange', fontSize: 18}}>
              Get in Contact
            </Text>
          </View>
          <Text
            style={{
              marginTop: 3,
              marginLeft: 110,
              color: 'red',
              fontSize: 18,
            }}>
            Decline
          </Text>
        </View>
      </TouchableOpacity>

      {/* Second Card (Orange Card) */}
      <TouchableOpacity style={styles.orangeCard} onPress={handleCardPress}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '700',
            bottom: 7,
            marginTop: 5,
            color: '#fff',
            left: 120,
          }}>
          Truck Info
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[styles.textStyle2, {color: '#fff', marginLeft: 20}]}>
                Vehicle number :
              </Text>
              <Text style={[styles.textStyle2, {color: '#fff'}]}>
                {'  '} TN39CK1288
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[styles.textStyle2, {color: '#fff', marginLeft: 20}]}>
                Vehicle Rc :
              </Text>
              <Text style={[styles.textStyle2, {color: '#fff'}]}>
                {'  '} 3/10/2024
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[styles.textStyle2, {color: '#fff', marginLeft: 20}]}>
                Insurance :
              </Text>
              <Text style={[styles.textStyle2, {color: '#fff'}]}>
                {'  '} 5/6/2024
              </Text>
            </View>
            <View>
              <Image
                source={require('../../../assets/images/Truck1.png')}
                style={styles.image1}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Third Card (Route and Map) */}
      <Text style={[styles.textStyle4, {left: 25}]}>Route</Text>
      <TouchableOpacity style={styles.thirdCard} onPress={handleCardPress}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Start style={{marginTop: 15, marginRight: 4}} />
            <Text style={styles.textStyle4}>Warrington,</Text>
            <Text style={{top: 6, left: 2, color: 'black', fontSize: 16}}>
              PA 76102
            </Text>
          </View>

          <Text style={{left: 25, bottom: 8}}>Jun 22 10:00 AM EST</Text>
        </View>
        <View style={styles.verticalLine} />
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Location style={{marginTop: 10, marginRight: 4}} />
            <Text style={styles.textStyle4}>Midland,</Text>
            <Text style={{top: 6, left: 2, color: 'black', fontSize: 16}}>
              TX 79705
            </Text>
          </View>

          <Text style={{left: 25, bottom: 8}}>Jun 22 10:00 AM EST</Text>
        </View>
        <Text>Recieved 59 mins ago</Text>
      </TouchableOpacity>

      {/* Map Section */}
      <Text
        style={[
          styles.textStyle4,
          {marginLeft: 25, marginTop: 20, bottom: 10},
        ]}>
        Map
      </Text>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 9.8475,
            longitude: 78.4844,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          loadingEnabled={true}
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    margin: 20,
    padding: 15,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  verticalLine: {
    borderLeftWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#000',
    height: 20,
    marginHorizontal: 10,
  },
  orangeCard: {
    backgroundColor: 'orange',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  thirdCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 20,
    top: 10,
    marginBottom: 10,
    padding: 10,
  },
  hr: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%',
    borderColor: '#d6cece',
  },
  textStyle: {
    fontSize: 13,
    color: '#000',
  },
  textStyle1: {
    left: 17,
    bottom: 8,
    top: 0.2,
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  textStyle2: {
    fontSize: 17,
    color: '#000',
    fontWeight: '600',
  },
  textStyle3: {
    fontSize: 15,
    color: '#000',
  },
  textStyle4: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  image: {
    top: 8,
    width: 80,
    height: 80,
    borderRadius: 90,
    marginBottom: 10,
  },
  image1: {
    width: 330,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
  },
  mapContainer: {
    marginHorizontal: 20,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
});

export default StaticCard;
