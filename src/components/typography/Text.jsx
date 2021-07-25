/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-unused-styles */
import PropTypes from 'prop-types'
import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'

import theme from '../../styles/theme'

const styles = StyleSheet.create({

  // Align
  text_centerAlign: {
    textAlign: 'center'
  },
  text_justifyAlign: {
    textAlign: 'justify'
  },
  text_leftAlign: {
    textAlign: 'left'
  },
  text_rightAlign: {
    textAlign: 'right'
  },

  // Colors
  ...Object.keys(theme.colors).reduce((colorStyles, color) => ({
    ...colorStyles,
    [`text_${color}Color`]: {
      color: theme.colors[color]
    }
  }), {}),

  // Decorations
  text_normalDecoration: {
    textDecorationLine: 'none'
  },
  text_underlinedDecoration: {
    textDecorationLine: 'underline'
  },
  text_strikeDecoration: {
    textDecorationLine: 'line-through'
  },

  // Sizes
  text_smallSize: {
    fontSize: 10
  },
  text_mediumSize: {
    fontSize: 12
  },
  text_normalSize: {
    fontSize: 14
  },
  text_largeSize: {
    fontSize: 18
  },
  text_xLargeSize: {
    fontSize: 24
  },

  // Transforms
  text_lowercaseTransform: {
    textTransform: 'lowercase'
  },
  text_uppercaseTransform: {
    textTransform: 'uppercase'
  },
  text_capitalizeTransform: {
    textTransform: 'capitalize'
  },

  // Weight
  text_regularWeight: {
    fontWeight: 'normal'
  },
  text_mediumWeight: {
    fontWeight: '800'
  },
  text_semiboldWeight: {
    fontWeight: 'bold'
  }
})

function Text({ align, children, color, decoration, size, style, transform, weight, ...other }) {
  return (
    <RNText
      style={[
        styles[`text_${color}Color`],
        styles[`text_${decoration}Decoration`],
        styles[`text_${size}Size`],
        styles[`text_${transform}Transform`],
        styles[`text_${weight}Weight`],
        styles[`text_${align}Align`],
        style
      ]}
      {...other}
    >
      {children}
    </RNText>
  )
}

Text.propTypes = {
  align: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  decoration: PropTypes.oneOf(['normal', 'underlined', 'strike']),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.oneOf(['small', 'medium', 'normal', 'large', 'xLarge']),
  transform: PropTypes.oneOf(['none', 'lowercase', 'uppercase', 'capitalize']),
  weight: PropTypes.oneOf(['regular', 'medium', 'semibold'])
}

Text.defaultProps = {
  align: 'left',
  children: null,
  color: 'dark',
  decoration: 'normal',
  size: 'normal',
  style: null,
  transform: 'none',
  weight: 'regular'
}

export default Text
