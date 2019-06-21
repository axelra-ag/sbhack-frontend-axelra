import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';
import Coin, { size } from './lit-animation/Coin';
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
    padding-horizontal: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
    background: white;
    border-radius: 2px;
`;

const Label = styled(Text)`
    font-family: ${__FONTS.SEMIBOLD};
    font-size: 15px;
    color: ${__COLORS.FIRST};
`;

export default class extends React.Component {
    animationArea = React.createRef()
    state = {
        width: null,
        height: null
    }
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
                        shadowOpacity={0.15}
                        shadowRadius={2}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Image style={{
                            height: 24, width: 24, marginRight: 14,
                            tintColor: __COLORS.THIRD
                        }} source={require('../assets/bullseye.png')}></Image>
                        <View>
                            <Label style={{ color: __COLORS.THIRD }}>Goal achieved</Label>
                            <Label style={{ fontFamily: __FONTS.REGULAR }}>Bike 1 million kilometers</Label>
                        </View>
                    </GoalAchived>
                    <View
                        ref={this.animationArea}
                        onLayout={() => {
                            this.animationArea.current.measure((ox, oy, width, height) => {
                                this.setState({
                                    width,
                                    height
                                })
                            })
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
                                    <Coin xOffset={size + 30} height={this.state.height} type="modum" delay={1500} />
                                    <View style={{ width: 30 }} />
                                    <Coin exitOffset={100} xOffset={0} height={this.state.height} type="ether" delay={3500} />
                                    <View style={{ width: 30 }} />
                                    <Coin exitOffset={200} xOffset={0 - size - 30} height={this.state.height} type="vetri" delay={5500} />
                                </>
                            ) : null}
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}
