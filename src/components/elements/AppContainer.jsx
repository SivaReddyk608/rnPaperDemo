import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppRoutes from '../navigations/AppRoutes'

const AppContainer = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
)

export default AppContainer
