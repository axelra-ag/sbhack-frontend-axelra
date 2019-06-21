import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import Coin from './lit-animation/Coin';
import { LinearGradient } from 'expo-linear-gradient';
import { __COLORS } from './layout/colors';
import { SafeAreaView } from 'react-navigation';
import Header from "./wallet/Header";


const Title = styled(Text)`
    color: black;
    padding-top: 30px;
    font-size: 28px;
    text-align: center;
    font-weight: bold;
`;

export default class extends React.Component {
    render() {
        return (
            <LinearGradient style={{ flex: 1 }} colors={['white', __COLORS.THIRD, __COLORS.SECOND]} start={{ x: 0.7, y: 0.2 }} end={{ x: 1, y: 1 }}>
                <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
                    <Header
                        title={"Congratulations"}
                        subTitle={"Here are your rewards"}
                    />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        )
    }
}
