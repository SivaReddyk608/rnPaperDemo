import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useEffect } from 'react'

import I18n from '../../lib/i18n'
import Text from '../typography/Text'
import globalStyles from '../../styles/globalStyles'
import HeaderBar from '../bars/HeaderBar'

const ScanScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => <HeaderBar title={I18n.t('screens.scan.header_title')} />
    })
  }, [navigation])

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[globalStyles.screenContainer, globalStyles.centerAlign]}
    >
      <MaterialCommunityIcons name="barcode-scan" size={189} color="gray" />
      <Text size="xLarge" weight="semibold" transform="uppercase">{I18n.t('screens.scan.title')}</Text>
      <Text size="large">{I18n.t('screens.scan.sub_title')}</Text>
    </KeyboardAwareScrollView>
  )
}

export default ScanScreen
