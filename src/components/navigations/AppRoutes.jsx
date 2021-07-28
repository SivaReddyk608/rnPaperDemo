import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BarcodeScanScreen from '../screens/BarcodeScanScreen'
import MainTabs from './MainTabs'

const AppStack = createStackNavigator()

const AppRoutes = () => (
  <AppStack.Navigator initialRouteName="App" mode="modal">
    <AppStack.Screen name="AppTabs" component={MainTabs} options={{ header: () => null }} />
    <AppStack.Screen name="BarcodeScan" component={BarcodeScanScreen} />
  </AppStack.Navigator>
)

export default AppRoutes
