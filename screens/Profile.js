import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Switch,
    ScrollView,
} from 'react-native';

import { MainLayout } from './'

import { HeaderBar } from '../components';
import { SIZES, COLORS, FONTS, dummyData, icons, } from '../constants';

const SectionTitle = ({ title }) => {
    return (
        <View style={{
            marginTop: SIZES.padding
        }}>
            <Text style={{
                color: COLORS.lightGray3, ...FONTS.h4
            }}>{title}</Text>

        </View>
    )
}

const Setting = ({ title, value, type, onPress }) => {

    if (type == 'button') {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center'
            }}
                onPress={onPress}>
                <Text style={{
                    flex: 1, color: COLORS.white, ...FONTS.h3
                }}>
                    {title}
                </Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>

                    <Text style={{
                        marginRight: SIZES.radius, color: COLORS.lightGray3, ...FONTS.h3
                    }}>
                        {value}
                    </Text>

                    <Image source={icons.rightArrow}
                        style={{
                            height: 15,
                            width: 15,
                            tintColor: COLORS.white
                        }} />

                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <View style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center'
            }}>
                <Text style={{
                    flex: 1, color: COLORS.white, ...FONTS.h3
                }}>{title}</Text>

                <Switch
                    value={value}
                    onValueChange={(value) => onPress(value)} />
            </View>
        )
    }
}


const Profile = () => {

    const [faceId, setFaceId] = React.useState(true)
    return (
        <MainLayout>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black,
                paddingHorizontal: SIZES.padding
            }}>

                {/* header */}

                <HeaderBar
                    title='Profile' />

                {/* details */}
                <ScrollView>
                    {/* email & user id */}
                    <View style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,

                    }}>
                        {/* email & id */}
                        <View style={{
                            flex: 1
                        }}>
                            <Text style={{
                                color: COLORS.white, ...FONTS.h3
                            }}>{dummyData.profile.email}</Text>

                            <Text style={{
                                color: COLORS.lightGray3, ...FONTS.body4
                            }}> ID: {dummyData.profile.id}</Text>

                        </View>

                        {/* status */}

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image source={icons.verified}
                                style={{
                                    height: 25,
                                    width: 25
                                }} />

                            <Text style={{
                                color: COLORS.lightGreen, ...FONTS.body4, marginLeft: SIZES.base
                            }}>Verified</Text>
                        </View>

                    </View>

                    {/* app section */}
                    <SectionTitle
                        title='APP' />

                    <Setting
                        title='Launch Screen'
                        value='Home'
                        type='button'
                        onPress={() => console.log('pressed')}
                    />

                    <Setting
                        title='Appearance'
                        value='Dark'
                        type='button'
                        onPress={() => console.log('pressed')}
                    />

                    {/* account */}

                    <SectionTitle
                        title='ACCOUNT' />

                    <Setting
                        title='Payment Currency'
                        value='USD'
                        type='button'
                        onPress={() => console.log('pressed')}
                    />

                    <Setting
                        title='Language'
                        value='English'
                        type='button'
                        onPress={() => console.log('pressed')}
                    />

                    {/* security */}
                    <SectionTitle
                        title='SECURITY' />

                    <Setting
                        title='FaceID'
                        value={faceId}
                        type='switch'
                        onPress={(value) => setFaceId(value)}
                    />

                    <Setting
                        title='Password Setting'
                        value=''
                        type='button'
                        onPress={() => console.log('pressed')}
                    />

                    <Setting
                        title='Change Password'
                        value=''
                        type='button'
                        onPress={() => console.log('pressed')}
                    />

                    <Setting
                        title='2-Factor Authentication'
                        value=''
                        type='button'
                        onPress={() => console.log('pressed')}
                    />



                </ScrollView>
            </View>
        </MainLayout>

    )
}

export default Profile;