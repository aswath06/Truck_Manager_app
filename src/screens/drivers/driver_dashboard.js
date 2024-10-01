import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Appbar from '../../components/Appbar'
import Dashboard from '../../components/Dashboard'
import Checkbox from '../../components/check-btn'
import Cards from '../../components/Cards'
import Cards2 from '../../components/Cards2'

export default function Driver_dashboard() {
  return (
    <View>
        <Appbar/>
        <Dashboard/>
        <Checkbox/>
        <Cards2/>

    </View>
  )
}

const styles = StyleSheet.create({})