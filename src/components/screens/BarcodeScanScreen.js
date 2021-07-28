import React, { useEffect } from 'react'

import BarcodeScanner from '../scandit/BarcodeScanner'
import HeaderBar from '../bars/HeaderBar'
import I18n from '../../lib/i18n'

const BarcodeScanScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderBar
          onPressBack={() => navigation.goBack()}
          title={I18n.t('screens.barcode_scan.header_title')}
        />
      )
    })
  }, [navigation])

  return (
    <BarcodeScanner
      scannerInfo={I18n.t('screens.barcode_scan.scan_info')}
      // eslint-disable-next-line no-console
      onBarcodeDetected={(item) => console.warn({ item })}
    />
  )
}

export default BarcodeScanScreen
