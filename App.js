/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  StatusBar
} from 'react-native'

import AppContainer from './src/components/elements/AppContainer'

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <AppContainer />
  </SafeAreaView>
)

export default App
