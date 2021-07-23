import React, { useContext, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet } from 'react-native';

import AppContext from '../contexts/AppContext';
import I18n from '../../lib/i18n';
import TextInput from '../inputs/TextInput';
import Button from '../buttons/Button';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  }
})

const LoginScreen = ({ navigation }) => {
  const [networkId, setNetworkId] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useContext(AppContext)

  navigation.setOptions({
    title: I18n.t('screens.login.header_title')
  })

  const handleSignIn = () => {
    if (networkId?.length > 0 && password?.length > 0) {
      setCurrentUser({ networkId, password })
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <TextInput
        accessibilityLabel={I18n.t('fields.lsco_network_id')}
        label={I18n.t('fields.lsco_network_id')}
        onChangeText={text => setNetworkId(text)}
        value={networkId}
      />
      <TextInput
        accessibilityLabel={I18n.t('fields.password')}
        label={I18n.t('fields.password')}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        value={password}
      />
      <Button
        accessibilityLabel={I18n.t('buttons.sign_in')}
        onPress={handleSignIn}
      >
        {I18n.t('buttons.sign_in')}
      </Button>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;