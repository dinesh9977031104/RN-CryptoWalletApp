import React from 'react';
import { 
    Text,
    View,
    TouchableOpacity,

} from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

const TextButton = ({ lable, containerStyle, onPress}) => {
    return(
        <TouchableOpacity style={{
            alignItems:'center',
            justifyContent:'center',
            paddingHorizontal:18,
            paddingVertical:3,
            borderRadius:15,
            backgroundColor:COLORS.gray1,
            ...containerStyle
        }}
        onPress={onPress}>

            <Text style={{
                color:COLORS.white,
                ...FONTS.h3
            }}>
                {lable}
            </Text>

        </TouchableOpacity>
    )
}

export default TextButton;