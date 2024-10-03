// import React, {useState} from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   View,
//   Modal,
//   Text,
//   TouchableOpacity,
//   Image,
//   Button,
// } from 'react-native';
// import DriverCard from './assign_driver_card';
// import drivers from '../../../res/assign_driver_details.json';

// const AssignDriverCard = () => {
//   const [selectedDriver, setSelectedDriver] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleCardPress = driver => {
//     setSelectedDriver(driver);
//     setModalVisible(!modalVisible);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedDriver(null);
//   };
//   console.log(selectedDriver);

//   return (
//     <View style={styles.container}>
// <FlatList
//         data={drivers}
//         renderItem={({item}) => (
//           <DriverCard
//             driver={item}
//             onPress={() => handleCardPress(item)} // Passing the onPress prop
//           />
//         )}
//         keyExtractor={item => item.id.toString()}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//       />

//       {selectedDriver && (
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={closeModal}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Image
//                 source={{uri: selectedDriver.imageUrl}}
//                 style={styles.driverImage}
//               />
//               <Text style={styles.driverName}>{selectedDriver.name}</Text>
//               <Text style={styles.driverAddress}>
//                 {selectedDriver.address ? selectedDriver.address : 'Address not available'}
//               </Text>
//               <Button title="Close" onPress={closeModal} />
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   list: {
//     justifyContent: 'space-between',
//     paddingBottom: 20, // For spacing at the bottom
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '100%',
//     backgroundColor: 'white',
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//   },
//   driverImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     position: 'absolute',
//     bottom: '90%',
//     borderWidth: 1.5,
//     borderColor: '#de6c21',
//   },
//   driverName: {
//     fontSize: 20,
//     fontWeight: '900',
//     marginBottom: 10,
//     paddingTop: '10%',
//     color: 'black',
//   },
//   driverAddress: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 10,
//   },
// });

// export default AssignDriverCard;
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import DriverCard from './assign_driver_card';
import drivers from '../../../res/assign_driver_details.json';

const AssignDriverCard = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardPress = driver => {
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
        renderItem={({item}) => (
          <DriverCard
            driver={item}
            onPress={() => handleCardPress(item)} // Passing the onPress prop
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      {selectedDriver && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={{uri: selectedDriver.imageUrl}}
                style={styles.driverImage}
              />
              <Text style={styles.driverName}>{selectedDriver.name}</Text>
              {/* Display the address */}
              <Text style={styles.driverAddress}>
                {selectedDriver.address
                  ? selectedDriver.address
                  : 'Address not available'}
              </Text>
              <TouchableOpacity
                style={styles.assignbtn}
                onPress={closeModal}>
                <Text style={{color: '#fff', fontWeight: '800'}}>Assign</Text>
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
    padding: 10,
  },
  list: {
    justifyContent: 'space-between',
    paddingBottom: 20, // For spacing at the bottom
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
    padding: 20,
    alignItems: 'center',
  },
  driverImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    bottom: '90%',
    borderWidth: 1.5,
    borderColor: '#de6c21',
  },
  driverName: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10,
    paddingTop: '10%',
    color: 'black',
  },
  driverAddress: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
  assignbtn: {
    paddingHorizontal: '13%',
    paddingVertical: '4%',
    borderRadius: 10,
    backgroundColor: '#f4721e',
  },
});

export default AssignDriverCard;
