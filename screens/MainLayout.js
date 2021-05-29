import React from 'react';
import { View, Animated } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

import { connect } from 'react-redux';
import { IconTextButton } from '../components';


const MainLayout = ({ children, isTradeModalVisible }) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (isTradeModalVisible) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        }
    }, [isTradeModalVisible])


    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 280]
    })

    return (
        <View style={{
            flex: 1,

        }}>
            {children}

            {isTradeModalVisible &&
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: COLORS.transparentBlack
                    }}
                    opacity={modalAnimatedValue}
                />
            }

            <Animated.View
                style={{
                    position: 'absolute',
                    left: 0,
                    top: modalY,
                    width: '100%',
                    padding: SIZES.padding,
                    backgroundColor: COLORS.primary
                }}>
                <IconTextButton
                    lable='Transfer'
                    icon={icons.send}
                    onPress={() => console.log("transfer")} />

                <IconTextButton
                    lable='Withdraw'
                    icon={icons.withdraw}
                    containerStyle={{ marginTop: SIZES.base }}
                    onPress={() => console.log("withdraw")} />


            </Animated.View>
        </View>
    )
}

//export default MainLayout;


function mapStatToPress(state) {
    return {
        isTradeModalVisible: state.tabRaducer.isTradeModalVisible
    }
}

function mapDispatchToPress(dispatch) {
    return {
    }
}

export default connect(mapStatToPress, mapDispatchToPress)(MainLayout);