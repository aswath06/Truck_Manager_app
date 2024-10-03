import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Assign_drivers from '../screens/Admin/Job_assign/assign_Drivers';
import Add_Driver from '../screens/Admin/Driver_page/Add_Driver';
import EnableLocationScreen from '../screens/Authentication/location';
import Fullstart from '../screens/login/Fullstart';
import Login from '../screens/login/login';
import Sigin from '../screens/login/signin';
import Driver_dashboard from '../screens/drivers/driver_dashboard';
import Admin_dashboard from '../screens/Admin/Admin_dashboard';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Fullstart">
        <Stack.Screen
          name="Fullstart"
          component={Fullstart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Driver_dash"
          component={Driver_dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Admin_dash"
          component={Admin_dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sigin"
          component={Sigin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Assign_drivers"
          component={Assign_drivers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add_Driver"
          component={Add_Driver}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Enable_Location"
          component={EnableLocationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})


