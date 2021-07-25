/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Button as RNPButton } from 'react-native-paper'
import { StyleSheet } from 'react-native'

import theme from '../../styles/theme'

const styles = StyleSheet.create({
  content: {
    paddingVertical: 8
  }
})

const Button = (props) => (
  <RNPButton
    contentStyle={styles.content}
    mode="contained"
    theme={{ colors: { primary: theme.colors.dark } }}
    {...props}
  />
)

export default Button
