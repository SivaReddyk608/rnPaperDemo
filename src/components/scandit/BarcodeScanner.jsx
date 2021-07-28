/* eslint-disable react/jsx-props-no-spreading */
import Config from 'react-native-config'
import KeepAwake from '@sayem314/react-native-keep-awake'
import React from 'react'
import RnBeep from 'react-native-a-beep'
import { AppState, Vibration, View } from 'react-native'
import { noop } from 'lodash-es'
import {
  BarcodeCapture,
  BarcodeCaptureFeedback,
  BarcodeCaptureSettings,
  Symbology
} from 'scandit-react-native-datacapture-barcode'
import {
  Camera,
  DataCaptureContext,
  DataCaptureView,
  Feedback,
  FrameSourceState,
  MarginsWithUnit,
  MeasureUnit,
  NumberWithUnit,
  RectangularLocationSelection,
  SizeWithUnit
} from 'scandit-react-native-datacapture-core'

import BarcodeScannerStyles from '../../styles/scandit/BarcodeScannerStyles'
import Text from '../typography/Text'
import { debounceEvent } from '../../lib/debounce'

const VIBRATE_TIME = 1000

const VIBRATE_PATTERN = [0 * VIBRATE_TIME]

const CONSECUTIVE_BARCODE_SCAN_DELAY = 300

const DEFAULT_BARCODE_TYPES = [
  Symbology.Code11,
  Symbology.Code25,
  Symbology.Code32,
  Symbology.Code39,
  Symbology.Code93,
  Symbology.Code128,
  Symbology.EAN8,
  Symbology.UPCE,
  Symbology.EAN13UPCA
]

const SCAN_AREA_SIZE = new SizeWithUnit(
  new NumberWithUnit(0.85, MeasureUnit.Fraction),
  new NumberWithUnit(200, MeasureUnit.DIP)
)

const SCAN_AREA_MARGINS = new MarginsWithUnit(
  new NumberWithUnit(0, MeasureUnit.DIP),
  new NumberWithUnit(0, MeasureUnit.DIP),
  new NumberWithUnit(0, MeasureUnit.DIP),
  new NumberWithUnit(150, MeasureUnit.DIP)
)

function useUtilities() {
  const createUtilities = () => {
    let consecutiveScanReady = true

    let consecutiveScanReadyTimeoutId

    const deferConsecutiveScan = () => {
      consecutiveScanReady = false
      clearTimeout(consecutiveScanReadyTimeoutId)
      consecutiveScanReadyTimeoutId = setTimeout(() => {
        consecutiveScanReady = true
      }, CONSECUTIVE_BARCODE_SCAN_DELAY)
    }

    const barcodeEventValidator = (f) => (_, event) => {
      const barcodeInfo = event.newlyRecognizedBarcodes[0]
      if (!barcodeInfo?.data) {
        return
      }
      let barcode = barcodeInfo.data

      /* https://www.scandit.com/products/barcode-scanning/symbologies/upc-code/
        For EAN12UPCA Scandit provides barcode data with 0 as start padding, hence removing */
      if (barcodeInfo.symbology === Symbology.EAN13UPCA && barcodeInfo.symbolCount === 12) {
        barcode = barcode.substr(1)
      }
      if (consecutiveScanReady) {
        f(barcode)
      }
      deferConsecutiveScan()
    }

    return {
      barcodeEventValidator
    }
  }
  return React.useRef(createUtilities()).current
}

const useScanditScanner = (props) => {
  const utilities = useUtilities()
  const scannerRef = React.useRef < DataCaptureView | null >(null)
  const onBarcodeDetected = React.useCallback(
    (data) => {
      Vibration.vibrate(VIBRATE_PATTERN)
      RnBeep.beep()
      props.onBarcodeDetected({ data })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.onBarcodeDetected]
  )

  const debouncedOnBarcodeDetected = debounceEvent(props.defer ? noop : onBarcodeDetected)
  const apiKey = Config.SCANDIT_API_KEY
  const scanditContext = DataCaptureContext.forLicenseKey(apiKey)
  const settings = new BarcodeCaptureSettings()
  settings.enableSymbologies(props.barcordTypes ?? DEFAULT_BARCODE_TYPES)

  settings.locationSelection = RectangularLocationSelection.withSize(SCAN_AREA_SIZE)

  const barcodeCapture = BarcodeCapture.forContext(scanditContext, settings)
  const cameraSettings = BarcodeCapture.recommendedCameraSettings

  const camera = Camera.default

  if (camera) {
    camera.applySettings(cameraSettings).catch(noop)
  }

  scanditContext.setFrameSource(camera).catch(noop)

  barcodeCapture.feedback = new BarcodeCaptureFeedback()
  barcodeCapture.feedback.success = new Feedback(null, null)

  const toggleCapture = React.useCallback(
    (start) => {
      barcodeCapture.isEnabled = start
      camera?.switchToDesiredState(start ? FrameSourceState.On : FrameSourceState.Off)
    },
    [barcodeCapture, camera]
  )

  const handleAppStateChange = React.useCallback(
    async (nextAppState) => {
      if (nextAppState.match(/inactive|background/)) {
        toggleCapture(false)
      } else {
        toggleCapture(true)
      }
    },
    [toggleCapture]
  )

  // App state listener effect
  React.useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
    return () => AppState.removeEventListener('change', handleAppStateChange)
  }, [handleAppStateChange])

  // Barcode capture listener effect
  React.useEffect(() => {
    const barcodeCaptureListener = {
      didScan: utilities.barcodeEventValidator(debouncedOnBarcodeDetected)
    }
    barcodeCapture.addListener(barcodeCaptureListener)
    return () => barcodeCapture.removeListener(barcodeCaptureListener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedOnBarcodeDetected])

  // Scanner effect
  React.useEffect(() => {
    toggleCapture(true)
    if (scannerRef.current) {
      scannerRef.current.scanAreaMargins = SCAN_AREA_MARGINS
    }
    return () => {
      scanditContext.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [scanditContext, scannerRef]
}

const BarcodeScanner = React.memo(
  (props) => {
    const [scanditContext, scannerRef] = useScanditScanner(props)
    const dataCaptureViewProps = {
      style: BarcodeScannerStyles.container
    }
    return (
      <View style={BarcodeScannerStyles.container}>
        <DataCaptureView
          {...dataCaptureViewProps}
          context={scanditContext}
          // eslint-disable-next-line no-return-assign
          ref={(ref) => (scannerRef.current = ref)}
        />
        <View style={BarcodeScannerStyles.cameraOverlay}>
          <Text
            align="center"
            color="light"
            size="large"
            style={BarcodeScannerStyles.scannerHint}
          >
            {props.scannerInfo}
          </Text>
          <View style={BarcodeScannerStyles.scanArea}>
            <View style={BarcodeScannerStyles.cornerTopLeft} />
            <View style={BarcodeScannerStyles.cornerTopRight} />
            <View style={BarcodeScannerStyles.cornerBottomLeft} />
            <View style={BarcodeScannerStyles.cornerBottomRight} />
          </View>
        </View>
        <KeepAwake />
      </View>
    )
  }
)

export default BarcodeScanner
