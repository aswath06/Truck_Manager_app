import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import vector icons
import Truck from '../../src/assets/icons/truck'; // Custom truck icon
import Attach from '../../src/assets/icons/attachment'; // Custom attachment icon

const VehicleForm = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [truckTypeOpen, setTruckTypeOpen] = useState(false);
  const [truckTypeValue, setTruckTypeValue] = useState(null);
  const [truckTypeItems, setTruckTypeItems] = useState([
    { label: '4 Tyre', value: '4 Tyre' },
    { label: '6 Tyre', value: '6 Tyre' },
    { label: '10 Tyre', value: '10 Tyre' },
    { label: '12 Tyre', value: '12 Tyre' },
    { label: '16 Tyre', value: '16 Tyre' },
    { label: '18 Tyre', value: '18 Tyre' },
    { label: '22 Tyre', value: '22 Tyre' },
  ]);

  const [builtTypeOpen, setBuiltTypeOpen] = useState(false);
  const [builtTypeValue, setBuiltTypeValue] = useState(null);
  const [builtTypeItems, setBuiltTypeItems] = useState([
    { label: 'Flatted Trucks', value: 'Flatted Trucks' },
    { label: 'Refrigerated Trucks', value: 'Refrigerated Trucks' },
    { label: 'Tanker Trucks', value: 'Tanker Trucks' },
    { label: 'Box Trucks', value: 'Box Trucks' },
    { label: 'Dump Trucks', value: 'Dump Trucks' },
  ]);

  const validationSchema = Yup.object().shape({
    vehicleNumber: Yup.string().required('Vehicle number is required.'),
    truckType: Yup.string().required('Truck type is required.'),
    builtType: Yup.string().required('Built type is required.'),
    insuranceEndDate: Yup.date().required('Insurance end date is required.'),
    pollutionEndDate: Yup.date().required('Pollution end date is required.'),
    nextServiceDate: Yup.date().required('Next service date is required.'),
  });
  const handleSubmit = (values) => {
    setSubmitted(true); 
    setFormData(values);
    console.log('Vehicle data submitted:', values);
  };


  const onTruckTypeOpen = useCallback(() => {
    setBuiltTypeOpen(false);
  }, []);

  const onBuiltTypeOpen = useCallback(() => {
    setTruckTypeOpen(false);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Formik
            initialValues={{
              vehicleNumber: '',
              truckType: '',
              builtType: '',
              insuranceEndDate: '',
              pollutionEndDate: '',
              nextServiceDate: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
              <>
                <Text style={[styles.label,{top:10}]}>Vehicle Number:</Text>
                <Truck name="user" size={20} style={styles.icon} />
                <TextInput
                  style={[styles.input , {bottom:12}]}
                  placeholder="AA 00 HH 1234"
                  onChangeText={handleChange('vehicleNumber')}
                  onBlur={handleBlur('vehicleNumber')}
                  value={values.vehicleNumber}
                />
                {submitted && errors.vehicleNumber ? (
                  <Text style={styles.error}>{errors.vehicleNumber}</Text>
                    ) : (
                       <View style={styles.uploadContainer}>
                       <Attach />
                        <Text style={styles.uploadText}>Upload Your Vehicle Number Plate</Text>
                      </View>
                    )}
                {/* Truck Type Dropdown */}
                <View style={[styles.dropdownWrapper, truckTypeOpen && { zIndex: 2000 }]}>
                  <Text style={styles.label}>Truck Type:</Text>
                  <DropDownPicker
                    open={truckTypeOpen}
                    value={truckTypeValue}
                    items={truckTypeItems}
                    setOpen={setTruckTypeOpen}
                    setValue={(value) => {
                      setTruckTypeValue(value);
                      setFieldValue('truckType', value);
                    }}
                    setItems={setTruckTypeItems}
                    placeholder="Select Truck Type"
                    style={styles.dropdown}
                    containerStyle={{ height: truckTypeOpen ? 320 : 40 }}
                    maxHeight={350}
                    onOpen={onTruckTypeOpen}
                  />
                  {submitted && errors.truckType ? (
                    <Text style={styles.error}>{errors.truckType}</Text>
                  ) : null}

                  </View>

                {/* Built Type Dropdown */}
                <View style={[styles.dropdownWrapper, builtTypeOpen && { zIndex: 1500 }]}>
                  <Text style={styles.label}>Built Type:</Text>
                  <DropDownPicker
                    open={builtTypeOpen}
                    value={builtTypeValue}
                    items={builtTypeItems}
                    setOpen={setBuiltTypeOpen}
                    setValue={(value) => {
                      setBuiltTypeValue(value);
                      setFieldValue('builtType', value);
                    }}
                    setItems={setBuiltTypeItems}
                    placeholder="Select Built Type"
                    style={styles.dropdown}
                    containerStyle={{ height: builtTypeOpen ? 240 : 40 }}
                    maxHeight={350}
                    onOpen={onBuiltTypeOpen}
                  />
                  {submitted && errors.builtType ? (
                    <Text style={styles.error}>{errors.builtType}</Text>
                    ) : null}
                 </View>

                {/* Insurance End Date */}
                <Text style={styles.label}>Insurance End Date:</Text>
                <TextInput
                  style={styles.input1}
                  placeholder="YYYY-MM-DD"
                  onChangeText={handleChange('insuranceEndDate')}
                  onBlur={handleBlur('insuranceEndDate')}
                  value={values.insuranceEndDate}
                />
                {submitted && errors.insuranceEndDate ? (
                  <Text style={styles.error}>{errors.insuranceEndDate}</Text>
                  ) : (
                        <View style={styles.errorPlaceholder} />
                  )}
                {/* Pollution End Date */}
                <Text style={styles.label}>Pollution End Date:</Text>
                <TextInput
                  style={styles.input1}
                  placeholder="YYYY-MM-DD"
                  onChangeText={handleChange('pollutionEndDate')}
                  onBlur={handleBlur('pollutionEndDate')}
                  value={values.pollutionEndDate}
                />
                {submitted && errors.pollutionEndDate ? (
                  <Text style={styles.error}>{errors.pollutionEndDate}</Text>
                  ) : (
                    <View style={styles.errorPlaceholder} />
                  )}
                {/* Next Service Date */}
                <Text style={styles.label}>Next Service Date:</Text>
                <TextInput
                  style={styles.input1}
                  placeholder="YYYY-MM-DD"
                  onChangeText={handleChange('nextServiceDate')}
                  onBlur={handleBlur('nextServiceDate')}
                  value={values.nextServiceDate}
                />
                {submitted && errors.nextServiceDate ? (
                    <Text style={styles.error}>{errors.nextServiceDate}</Text>
                      ) : (
                      <View style={styles.errorPlaceholder} />
                  )}
              </>
            )}
          </Formik>
        </ScrollView>
        <TouchableOpacity style={styles.submitButton} onPress={() => { setSubmitted(true); handleSubmit(); }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    maxHeight: 590,
    padding: 10,
    flexGrow: 1,
    borderColor: 'orange',
    borderWidth: 1,
    margin: 15,
    borderRadius: 20,
  },
  label:{
    bottom:7,
    color:'black',
    fontSize:16
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom:10,
    left:15,
    marginBottom: 10,
  },
  uploadText: {
    marginLeft: 3,
    fontWeight: '500',
    color: 'black',
  },
  icon: {
    top: 25,
    left: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 50,
  },
  
  input1: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  dropdownWrapper: {
    marginBottom: 30,
  },
  dropdown: {
    marginBottom: 1,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  errorPlaceholder: {
    height: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
    marginHorizontal: 40,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VehicleForm;
