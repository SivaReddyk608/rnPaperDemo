import { StyleSheet } from 'react-native'

import theme from './theme'

const globalStyles = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    backgroundColor: theme.colors.light
  },
  headerTitle: {
    textTransform: 'uppercase'
  },
  screenContainer: {
    backgroundColor: theme.colors.light,
    flex: 1
  }
})

export default globalStyles
