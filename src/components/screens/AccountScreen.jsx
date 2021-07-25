import React, { useEffect } from 'react'
import { View } from 'react-native'

import globalStyles from '../../styles/globalStyles'
import HeaderBar from '../bars/HeaderBar'
import I18n from '../../lib/i18n'
import Text from '../typography/Text'

const AccountScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => <HeaderBar title={I18n.t('screens.account.header_title')} />
    })
  }, [navigation])

  return (
    <View style={[globalStyles.screenContainer, globalStyles.centerAlign]}>
      <Text>Welcome to Your Account</Text>
    </View>
  )
}

export default AccountScreen
