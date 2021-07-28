import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React, { useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { noop } from 'lodash-es'
import { RESULTS } from 'react-native-permissions'

import Button from '../buttons/Button'
import ContentWrapper from '../wrappers/ContentWrapper'
import globalStyles from '../../styles/globalStyles'
import HeaderBar from '../bars/HeaderBar'
import I18n from '../../lib/i18n'
import Text from '../typography/Text'
import { getCameraPermissionStatus } from '../../lib/permissions'

const ScanScreen = ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = React.useState(false)

  useEffect(() => {
    navigation.setOptions({
      header: () => <HeaderBar title={I18n.t('screens.scan.header_title')} />
    })
  }, [navigation])

  const navigateToBarcode = (permission) => {
    if (cameraPermission || permission) {
      navigation.navigate('BarcodeScan')
    } else {
      // eslint-disable-next-line no-use-before-define
      checkPermissions()
    }
  }

  const checkPermissions = () => {
    getCameraPermissionStatus()
      .then(async (status) => {
        const isCamera = status === RESULTS.GRANTED
        setCameraPermission(isCamera)
        if (isCamera) {
          navigateToBarcode(isCamera)
        }
      })
      .catch(noop)
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[globalStyles.screenContainer, globalStyles.justifyCenter]}
    >
      <ContentWrapper align="center">
        <MaterialCommunityIcons name="barcode-scan" size={189} color="gray" />
        <Text size="xLarge" weight="semibold" transform="uppercase">{I18n.t('screens.scan.title')}</Text>
        <Text size="large" onPress={checkPermissions}>{I18n.t('screens.scan.sub_title')}</Text>
      </ContentWrapper>
      <ContentWrapper>
        <Button onPress={navigateToBarcode}>
          <Text color="light" weight="semibold">
            {I18n.t('buttons.tap_to_scan')}
          </Text>
        </Button>
      </ContentWrapper>
    </KeyboardAwareScrollView>
  )
}

export default ScanScreen
