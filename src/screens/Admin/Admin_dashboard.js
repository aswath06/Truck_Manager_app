import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Appbar from '../../components/Appbar'
import Dashboard from '../../components/Dashboard'
import Cards from '../../components/Cards'


export default function Admin_dashboard() {
  return (
    <View style={styles.conatiner}>
      <Appbar />
      <Dashboard />
      <Cards/>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    height: "100%",

  }
})