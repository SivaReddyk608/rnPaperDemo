import React, { useEffect } from 'react'
import { View } from 'react-native'

import globalStyles from '../../styles/globalStyles'
import HeaderBar from '../bars/HeaderBar'
import I18n from '../../lib/i18n'
import Text from '../typography/Text'

const SearchScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => <HeaderBar title={I18n.t('screens.search.header_title')} />
    })
  }, [navigation])

  return (
    <View style={[globalStyles.screenContainer, globalStyles.centerAlign]}>
      <Text>Welcome to Search</Text>
    </View>
  )
}

export default SearchScreen
