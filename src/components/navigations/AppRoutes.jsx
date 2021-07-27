import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainTabs from './MainTabs'
import BarcodeScanScreen from '../screens/BarcodeScanScreen'

const AppStack = createStackNavigator()

const AppRoutes = () => (
  <AppStack.Navigator initialRouteName="App" mode="modal">
    <AppStack.Screen name="AppTabs" component={MainTabs} options={{ header: () => null }} />
    <AppStack.Screen name="BarcodeScan" component={BarcodeScanScreen} />
  </AppStack.Navigator>
)

export default AppRoutes
