import PropTypes from 'prop-types';
import React from 'react';
import {
    Image, TouchableOpacity, View
} from 'react-native';
import { debouncePress } from '../../lib/debounce';
import { IconStyles } from '../../styles/ui/Icon';

const Icon = props => {
    const { source, inline, onDebouncedPress, disabled, automationId } = props;
    const image = (
        <Image
            testID={automationId}
            source={source}
            style={[IconStyles.icon, inline && !onDebouncedPress && IconStyles.offset, props.style]}
        />
    );
    const icon = onDebouncedPress ? (
        <TouchableOpacity
            testID={automationId}
            onPress={debouncePress(onDebouncedPress)}
            style={[IconStyles.icon, inline && IconStyles.offset]}
            accessibilityLabel={`select item`}
            disabled={disabled}
        >
            {image}
        </TouchableOpacity>
    ) : image;

    return inline ? (
        <View style={IconStyles.inlineIcon}>
            {icon}
        </View>
    ) : icon;
};

Icon.propTypes = {
    source: Image.PropTypes.source.isRequired,
    inline: PropTypes.bool,
    onDebouncedPress: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    automationId: PropTypes.string
}

export default Icon
