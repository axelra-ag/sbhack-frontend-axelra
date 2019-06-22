import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styled from 'styled-components';
import Coin, { size } from './lit-animation/Coin';
import { LinearGradient } from 'expo-linear-gradient';
import { __COLORS, __GRAY_SCALE } from './layout/colors';
import { SafeAreaView } from 'react-navigation';
import AnimateNumber from 'react-native-animate-number';

import Header from './wallet/Header';
import { darken } from 'polished';
import { __FONTS } from './layout/fonts';

const Title = styled(Text)`
	color: black;
	padding-top: 30px;
	font-size: 28px;
	text-align: center;
	font-weight: bold;
`;

const GoalAchived = styled(LinearGradient)`
	padding: 15px;
	padding-horizontal: 20px;
	margin-left: 30px;
	margin-right: 30px;
	margin-top: 20px;
	background: white;
	border-radius: 6px;
`;

const Label = styled(Text)`
	font-family: ${__FONTS.SEMIBOLD};
	font-size: 15px;
	color: ${__COLORS.FIRST};
`;

export default class extends React.Component {
    animationArea = React.createRef();
    state = {
        width: null,
        height: null,
        modum: 0,
        valid: 0,
        eth: 0
    };
    static navigationOptions = {
        title: 'Chest Open'
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                modum: 20,
                valid: 20,
                eth: 0.1
            })
        }, 11000);
    }
    render() {
        return (
            <LinearGradient
                style={{ flex: 1 }}
                colors={['#ffffff', '#ffffff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <Header
                        title={'Congratulations'}
                        subTitle={'Here are your rewards'}
                    />
                    <View
                        shadowColor="black"
                        shadowOffset={{
                            width: 0,
                            height: 0
                        }}
                        shadowOpacity={0.15}
                        shadowRadius={2}
                    >
                        <GoalAchived
                            colors={['white', 'white']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Image
                                style={{
                                    height: 24,
                                    width: 24,
                                    marginRight: 14,
                                    tintColor: __COLORS.THIRD
                                }}
                                source={require('../assets/bullseye.png')}
                            />
                            <View>
                                <Label style={{ color: __COLORS.THIRD }}>Goal achieved</Label>
                                <Label style={{ fontFamily: __FONTS.REGULAR }}>
                                    Earn 100{' '} <Image
                                        source={require('../assets/coin.png')}
                                        style={{
                                            tintColor: __COLORS.FIRST,
                                            width: 16,
                                            height: 12,
                                            marginTop: -1
                                        }}
                                    /> CO2 Token
								</Label>
                            </View>
                        </GoalAchived>
                    </View>

                    <View
                        ref={this.animationArea}
                        onLayout={() => {
                            this.animationArea.current.measure((ox, oy, width, height) => {
                                this.setState({
                                    width,
                                    height
                                });
                            });
                        }}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            {this.state.height ? (
                                <>
                                    <Coin
                                        xOffset={size + 30}
                                        height={this.state.height}
                                        type="modum"
                                        delay={1500}
                                    />
                                    <View style={{ width: 30 }} />
                                    <Coin
                                        exitOffset={100}
                                        xOffset={0}
                                        height={this.state.height}
                                        type="ether"
                                        delay={3500}
                                    />
                                    <View style={{ width: 30 }} />
                                    <Coin
                                        exitOffset={200}
                                        xOffset={0 - size - 30}
                                        height={this.state.height}
                                        type="vetri"
                                        delay={5500}
                                    />
                                </>
                            ) : null}
                        </View>
                    </View>
                    <View style={{ height: 60 }} />
                    <View
                        shadowColor="black"
                        shadowOffset={{
                            width: 0,
                            height: 0
                        }}
                        shadowOpacity={0.15}
                        shadowRadius={2}
                    >
                        <GoalAchived
                            colors={[__COLORS.SECOND, __COLORS.SECOND]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0.7, y: 0 }}
                            shadowColor="black"
                            shadowOffset={{
                                width: 0,
                                height: 0
                            }}
                            shadowOpacity={0.15}
                            shadowRadius={2}
                            style={{
                                backgroundColor: __COLORS.THIRD,
                                flexDirection: 'row',
                                alignItems: 'center',
                                position: 'absolute',
                                bottom: 10,
                                width: Dimensions.get('window').width - 60
                            }}
                        >
                            <Image
                                style={{
                                    height: 24,
                                    width: 24,
                                    marginRight: 14,
                                    tintColor: 'white'
                                }}
                                source={require('../assets/wallet.png')}
                            />
                            <View>
                                <Label style={{ color: 'white', fontWeight: 'bold', fontFamily: __FONTS.BOLD, fontSize: 16 }}>Wallet</Label>
                                <View style={{ height: 5 }} />
                                <Label
                                    style={{
                                        fontFamily: __FONTS.REGULAR,
                                        color: 'white',
                                        opacity: 0.8
                                    }}
                                >
                                    <AnimateNumber
                                        timing="easeOut"
                                        steps={10}
                                        interval={20}

                                        value={this.state.modum}
                                        formatter={val => {
                                            return parseFloat(val).toFixed(0);
                                        }}
                                    />{' '}
                                    MOD{'      '}
                                    <AnimateNumber
                                        timing="easeOut"
                                        steps={10}
                                        interval={20}

                                        formatter={val => {
                                            return parseFloat(val).toFixed(0);
                                        }}
                                        value={this.state.valid}
                                    />{' '}
                                    VLD{'      '}
                                    <AnimateNumber
                                        timing="easeOut"
                                        steps={10}
                                        interval={20}
                                        formatter={val => {
                                            return parseFloat(val).toFixed(2);
                                        }}
                                        value={this.state.eth}
                                    />{' '}
                                    ETH
								</Label>
                            </View>
                        </GoalAchived>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}
