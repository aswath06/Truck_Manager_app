import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import DriverCard from './assign_driver_card';
import drivers from '../../../res/assign_driver_details.json';
import Assign_details from './assign_details';

// Get device width
const { width } = Dimensions.get('window');

const AssignDriverCard = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardPress = (driver) => {
    setSelectedDriver(driver);
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDriver(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            driver={item}
            onPress={() => handleCardPress(item)} // Passing the onPress prop
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      {selectedDriver && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={{ uri: selectedDriver.imageUrl }}
                style={styles.driverImage}
              />
              <Text style={styles.driverName}>{selectedDriver.name}</Text>
              <Text style={styles.driverAddress}>
                {selectedDriver.address
                  ? selectedDriver.address
                  : 'Address not available'}
              </Text>
              <View>
              <Assign_details/>
              <Assign_details/>
              <Assign_details/>
              <Assign_details/>
              <Assign_details/>
              </View>
              <TouchableOpacity style={styles.assignbtn} onPress={closeModal}>
                <Text style={{ color: '#fff', fontWeight: '800' }}>Assign</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.03, // Adjust padding based on screen width
  },
  list: {
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: width * 0.05, // Adjust bottom padding
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: width * 0.05, // Adjust padding based on screen width
    alignItems: 'center',
  },
  driverImage: {
    width: width * 0.25, // Adjust image width based on screen width
    height: width * 0.25, // Adjust image height
    borderRadius: (width * 0.25) / 2, // Circular image
    position: 'absolute',
    bottom: '90%',
    borderWidth: 1.5,
    borderColor: '#de6c21',
  },
  driverName: {
    fontSize: width * 0.05, // Adjust font size based on screen width
    fontWeight: '900',
    marginBottom: width * 0.02, // Adjust margin
    marginTop: '15%',
    color: 'black',
  },
  driverAddress: {
    fontSize: width * 0.04, // Adjust font size
    color: 'gray',
    marginBottom: width * 0.02, // Adjust margin
    textAlign: 'center',
  },
  assignbtn: {
    paddingHorizontal: width * 0.13, // Adjust padding based on screen width
    paddingVertical: width * 0.04, // Adjust padding based on screen width
    borderRadius: 10,
    backgroundColor: '#f4721e',
  },
});

export default AssignDriverCard;
