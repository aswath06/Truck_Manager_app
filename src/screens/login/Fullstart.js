import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Startbutton from '../../components/startbutton'
import Getstarted from './get-started'

export default function Fullstart() {
  return (
    <View>
        <Getstarted/>
        <Startbutton/>
    </View>
  )
}

const styles = StyleSheet.create({})