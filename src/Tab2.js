import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';
import Coin from './lit-animation/Coin';
import { LinearGradient } from 'expo-linear-gradient';
import { __COLORS, __GRAY_SCALE } from './layout/colors';
import { SafeAreaView } from 'react-navigation';
import Header from "./wallet/Header";
import { darken } from 'polished';
import { __FONTS } from './layout/fonts';


const Title = styled(Text)`
    color: black;
    padding-top: 30px;
    font-size: 28px;
    text-align: center;
    font-weight: bold;
`;

const GoalAchived = styled(View)`
    padding: 15px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
    background: white;
    border-radius: 4px;
`;

const Label = styled(Text)`
    font-family: ${__FONTS.SEMIBOLD};
    font-size: 15px;
    color: ${__COLORS.FIRST};
`;

export default class extends React.Component {
    render() {
        return (
            <LinearGradient
                style={{ flex: 1 }}
                colors={['white', darken(0.1, '#ffffff')]}
                start={{ x: 0.7, y: 0.2 }}
                end={{ x: 1, y: 1 }}
            >
                <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
                    <Header
                        title={'Congratulations'}
                        subTitle={'Here are your rewards'}
                    />
                    <GoalAchived
                        shadowColor="black"
                        shadowOffset={{
                            width: 0,
                            height: 0
                        }}
                        shadowOpacity={0.2}
                        shadowRadius={2}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Image style={{
                            height: 32, width: 32, marginRight: 14
                        }} source={require('../assets/bullseye.png')}></Image>
                        <View>
                            <Label>Goal achieved</Label>
                            <Label style={{ fontFamily: __FONTS.REGULAR }}>Bike 1 million kilometers</Label>
                        </View>
                    </GoalAchived>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Coin type="modum" delay={1500} />
                            <View style={{ width: 30 }} />
                            <Coin type="ether" delay={3500} />
                            <View style={{ width: 30 }} />
                            <Coin type="vetri" delay={5500} />
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}
