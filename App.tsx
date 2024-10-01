import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Admin_dashboard from './src/screens/Admin/Admin_dashboard'
import Driver_dashboard from './src/screens/drivers/driver_dashboard'

export default function App() {
  return (
    <View>
      <Driver_dashboard/>
    </View>
  )
}

const styles = StyleSheet.create({})