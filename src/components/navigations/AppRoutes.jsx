import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainTabs from './MainTabs'

const AppStack = createStackNavigator()

const AppRoutes = () => (
  <AppStack.Navigator initialRouteName="App" mode="modal">
    <AppStack.Screen name="AppTabs" component={MainTabs} options={{ header: () => null }} />
  </AppStack.Navigator>
)

export default AppRoutes
