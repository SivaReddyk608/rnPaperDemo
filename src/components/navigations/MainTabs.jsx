import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from '../screens/AccountScreen'
import BagScreen from '../screens/BagScreen'
import ScanScreen from '../screens/ScanScreen'
import SearchScreen from '../screens/SearchScreen'

const ScanStack = createStackNavigator()

function ScanStackScreen() {
  return (
    <ScanStack.Navigator>
      <ScanStack.Screen name="ScanScreen" component={ScanScreen} />
    </ScanStack.Navigator>
  )
}

const SearchStack = createStackNavigator()

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

const BagStack = createStackNavigator()

function BagStackScreen() {
  return (
    <BagStack.Navigator>
      <BagStack.Screen name="Bag" component={BagScreen} />
    </BagStack.Navigator>
  )
}

const AccountStack = createStackNavigator()

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
    </AccountStack.Navigator>
  )
}
const AppTab = createBottomTabNavigator()

function MainTabs() {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName

          switch (route.name) {
            default:
            case 'Scan':
              iconName = 'barcode-scan'
              break
            case 'Search':
              iconName = 'text-search'
              break
            case 'Bag':
              iconName = 'basket-outline'
              break
            case 'Account':
              iconName = 'account-outline'
              break
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <AppTab.Screen name="Scan" component={ScanStackScreen} />
      <AppTab.Screen name="Search" component={SearchStackScreen} />
      <AppTab.Screen name="Bag" component={BagStackScreen} />
      <AppTab.Screen name="Account" component={AccountStackScreen} />
    </AppTab.Navigator>
  )
}

export default MainTabs
