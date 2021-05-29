import React from 'react';

import {
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants'

const IconTextButton = ({ lable, icon, containerStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...containerStyle
            }}
            onPress={onPress}>

            <Image
            source={icon}
            resizeMode='contain'
            style={{
                height:20,
                width:20
            }}/>

            <Text style={{
                marginLeft:SIZES.base,
                ...FONTS.h3
            }}>
                {lable}
            </Text>

        </TouchableOpacity>
    )
}

export default IconTextButton;