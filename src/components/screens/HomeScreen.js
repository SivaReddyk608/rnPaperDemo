import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import React, { useContext } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Alert, StyleSheet, Text } from 'react-native';

import AppContext from '../contexts/AppContext';
import I18n from '../../lib/i18n';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.light,
    flex: 1
  },
  info: {
    fontSize: 22
  },
  logout: {
    paddingRight: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    paddingVertical: 16,
    fontSize: 16
  },
  header:{
    backgroundColor: theme.colors.light
  }
})

const HomeScreen = ({ navigation }) => {
  const { currentUser, setCurrentUser } = useContext(AppContext)

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Logout", onPress: () => setCurrentUser(null) }
      ]
    );
  }

  navigation.setOptions({
    header: () => (
      <Appbar.Header style={styles.header}>
        <Appbar.Action 
        animated={false}
        icon="keyboard-backspace"  
        />
        <Appbar.Content title="SCAN"/>
        <Appbar.Action icon="barcode-scan"  />
      </Appbar.Header>
    ),
  })

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <MaterialCommunityIcons name="barcode-scan" size={189} color="gray" />
      <Text style={styles.title}>{I18n.t('screens.home.title')}</Text>
      <Text style={styles.subTitle}>{I18n.t('screens.home.sub_title')}</Text>
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;