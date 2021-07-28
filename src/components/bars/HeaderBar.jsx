import PropTypes from 'prop-types'
import React from 'react'
import { Appbar } from 'react-native-paper'

import globalStyles from '../../styles/globalStyles'

const HeaderBar = ({ title, onPressBack }) => (
  <Appbar.Header style={globalStyles.headerContainer}>
    {Boolean(onPressBack) && (
      <Appbar.Action icon="keyboard-backspace" onPress={onPressBack} />
    )}
    <Appbar.Content
      title={title}
      titleStyle={globalStyles.headerTitle}
      style={globalStyles.centerAlign}

    />
  </Appbar.Header>
)

HeaderBar.propTypes = {
  onPressBack: PropTypes.func,
  title: PropTypes.string.isRequired
}

HeaderBar.defaultProps = {
  onPressBack: null
}

export default HeaderBar
