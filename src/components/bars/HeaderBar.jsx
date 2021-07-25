import { Appbar } from 'react-native-paper'
import PropTypes from 'prop-types'
import React from 'react';

import globalStyles from '../../styles/globalStyles'

const HeaderBar = ({ title }) => (
  <Appbar.Header style={globalStyles.headerContainer}>
    <Appbar.Content
      title={title}
      titleStyle={globalStyles.headerTitle}
      style={globalStyles.centerAlign}

    />
  </Appbar.Header>
)

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeaderBar
