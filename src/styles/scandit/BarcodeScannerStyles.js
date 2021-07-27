import { StyleSheet } from 'react-native'

import theme from '../theme'

const scannerBorderWidth = 12

const cornerBaseStyle = {
  position: 'absolute',
  width: '25%',
  height: '35%',
  borderColor: theme.colors.light
}

export default StyleSheet.create({
  cameraOverlay: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  container: {
    flex: 1
  },
  cornerBottomLeft: {
    ...cornerBaseStyle,
    borderBottomWidth: scannerBorderWidth,
    borderLeftWidth: scannerBorderWidth,
    bottom: 1,
    left: 1
  },
  cornerBottomRight: {
    ...cornerBaseStyle,
    borderBottomWidth: scannerBorderWidth,
    borderRightWidth: scannerBorderWidth,
    bottom: 1,
    right: 1
  },
  cornerTopLeft: {
    ...cornerBaseStyle,
    borderLeftWidth: scannerBorderWidth,
    borderTopWidth: scannerBorderWidth,
    left: 1,
    top: 1
  },
  cornerTopRight: {
    ...cornerBaseStyle,
    borderRightWidth: scannerBorderWidth,
    borderTopWidth: scannerBorderWidth,
    right: 1,
    top: 1
  },
  scanArea: {
    alignSelf: 'center',
    height: 200,
    marginTop: 50,
    width: '85%'
  },
  scannerHint: {
    backgroundColor: theme.colors.overlay,
    margin: 16
  }
})
