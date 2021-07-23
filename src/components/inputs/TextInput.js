import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput as RNPTextInput } from 'react-native-paper'

import theme from '../../styles/theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.light,
        marginBottom: 16
    }
})

const TextInput = (props) => {
    return (
        <RNPTextInput
            style={styles.container}
            mode="flat"
            outlineColor={theme.colors.grey}
            theme={{ colors: { primary: theme.colors.dark } }}
            {...props}
        />
    )
}

export default TextInput