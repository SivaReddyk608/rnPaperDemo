import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen'
import AppContext from '../contexts/AppContext';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
    <AuthStack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerStyle: { borderBottomWidth: 2 }, headerTitleStyle: { alignSelf: 'center' } }}
    >
        <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
)

const ScanStack = createStackNavigator();

function ScanStackScreen() {
  return (
    <ScanStack.Navigator>
      <ScanStack.Screen name="HomeScreen" component={HomeScreen} />
    </ScanStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={HomeScreen} />
    </SearchStack.Navigator>
  );
}

const BagStack = createStackNavigator();

function BagScreen() {
  return (
    <BagStack.Navigator>
      <BagStack.Screen name="Bag" component={HomeScreen} />
    </BagStack.Navigator>
  );
}

const AccountStack = createStackNavigator();

function AccountScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={HomeScreen} />
    </AccountStack.Navigator>
  );
}
const AppTab = createBottomTabNavigator();

function AppTabs() {
    return (
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Scan':
                            iconName = 'barcode-scan';
                            break
                        case 'Search':
                            iconName = 'text-search';
                            break
                        case 'Bag':
                            iconName = 'basket-outline';
                            break
                        case 'Account':
                            iconName = 'account-outline';
                            break
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <AppTab.Screen name="Scan" component={ScanStackScreen} />
            <AppTab.Screen name="Search" component={SearchScreen} />
            <AppTab.Screen name="Bag" component={BagScreen} />
            <AppTab.Screen name="Account" component={AccountScreen} />
        </AppTab.Navigator>
    );
}

const AppStack = createStackNavigator();

const AppNavigator = () => (
    <AppStack.Navigator initialRouteName="App" mode="modal">
        <AppStack.Screen name="AppTabs" component={AppTabs} options={{ header: () => null }} />
    </AppStack.Navigator>
)

const RootNavigator = () => {
    const { currentUser } = useContext(AppContext)

    if (currentUser?.networkId) {
        return <AppNavigator />
    }
    return (
        <AuthNavigator />
    )
}

const AppContainer = () => {
    const [currentUser, setCurrentUser] = useState({networkId:'hi'})
    return (
        <AppContext.Provider
            value={{ currentUser, setCurrentUser }}
        >
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </AppContext.Provider>
    )
}

export default AppContainer
