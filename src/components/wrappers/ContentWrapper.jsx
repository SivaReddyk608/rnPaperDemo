/* eslint-disable react-native/no-unused-styles */
import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  contentWrapper_centerAlign: {
    alignItems: 'center'
  },
  contentWrapper_narrowX: {
    marginLeft: 16,
    marginRight: 16
  },
  contentWrapper_narrowY: {
    marginBottom: 16,
    marginTop: 16
  },
  contentWrapper_rightAlign: {
    alignItems: 'flex-end'
  },
  contentWrapper_thinX: {
    marginLeft: 12,
    marginRight: 12
  },
  contentWrapper_thinY: {
    marginBottom: 12,
    marginTop: 12
  },
  contentWrapper_wideX: {
    marginLeft: 24,
    marginRight: 24
  },
  contentWrapper_wideY: {
    marginBottom: 24,
    marginTop: 24
  }
})

function ContentWrapper({ align, children, gutterX, gutterY, style }) {
  return (
    <View style={[
      align && styles[`contentWrapper_${align}Align`],
      gutterX && styles[`contentWrapper_${gutterX}X`],
      gutterY && styles[`contentWrapper_${gutterY}Y`],
      !!style && style
    ]}
    >
      {children}
    </View>
  )
}

ContentWrapper.propTypes = {
  align: PropTypes.oneOf(['center', 'right']),
  children: PropTypes.node,
  gutterX: PropTypes.oneOf(['narrow', 'none', 'thin', 'wide']),
  gutterY: PropTypes.oneOf(['narrow', 'none', 'thin', 'wide']),
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

ContentWrapper.defaultProps = {
  align: null,
  children: null,
  gutterX: 'narrow',
  gutterY: 'narrow',
  style: null
}

export default ContentWrapper
