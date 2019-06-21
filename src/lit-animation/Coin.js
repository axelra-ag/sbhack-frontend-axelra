import React from 'react';
import { View, Image } from 'react-native'
import { Svg, DangerZone } from 'expo'

import formula from 'reanimated-formula'
import styled from 'styled-components'
import { darken } from 'polished'
import { LinearGradient } from 'expo-linear-gradient'
import { runTiming, atan2 } from 'react-native-redash'
import { __COLORS } from '../layout/colors'

const { Animated, Easing } = DangerZone;
const { interpolate } = Animated

const { Circle, Stop, Defs, Filter, FEMerge, LinearGradient: SvgLinearGradient, FEMergeNode, FEOffset, FEGaussianBlur } = Svg

const Coin = styled(View)`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`;

const CoinBackground = styled(Animated.createAnimatedComponent(LinearGradient)).attrs({
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    colors: ['white', darken(0.1, '#ffffff')]
})`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
`;


const CoinIcon = styled(Animated.Image)`

`

const ether = require('../../assets/coins/ether.png')
const modum = require('../../assets/coins/modum.png')
const vetri = require('../../assets/coins/vetri.png')

const getSource = (type) => {
    if (type == 'ether') {
        return ether;
    }
    if (type === 'modum') {
        return modum
    }
    if (type == 'vetri') {
        return vetri
    }
}

const size = 50
const strokeWidth = 2

const radius = (size - strokeWidth) / 2

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const reallyBigOffset = 100000

export default class extends React.Component {
    state = {
        started: false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                started: true
            })
        }, this.props.delay || 0)
    }
    render() {
        const config = {
            duration: 1.5 * 1000,
            toValue: 1,
            easing: Easing.out(Easing.ease),
        };
        const progress = this.state.started ? runTiming(new Animated.Clock(0), 0, config) : 0;
        const circumference = radius * 2 * Math.PI;

        const alpha = interpolate(progress, {
            inputRange: [0, 1],
            outputRange: [Math.PI * 2, 0]
        })
        const glowAlpha = interpolate(progress, {
            inputRange: [0, 0.97],
            outputRange: [Math.PI * 2, 0]
        })
        const scale = interpolate(progress, {
            inputRange: [0.8, 1],
            outputRange: [1.2, 1]
        })
        const opacity = interpolate(progress, {
            inputRange: [0.7, 0.9],
            outputRange: [0, 1]
        })
        const glowOpacity = interpolate(progress, {
            inputRange: [0.0, 0.1, 0.98, 1],
            outputRange: [0, 1, 1, 0]
        })
        const coinOpacity = interpolate(progress, {
            inputRange: [0.9, 1],
            outputRange: [0, 1]
        })
        const { add, multiply, cos, sin } = Animated
        const translateX = add(multiply(radius, cos(glowAlpha)), radius)
        const translateY = formula`-1 * ${radius} * sin(${glowAlpha}) + ${radius}`
        const strokeDashoffset = Animated.multiply(formula`max(0, ${alpha})`, radius)
        return (
            <Animated.View
                style={{
                    transform: [
                        {
                            scale: formula`min(${scale}, 1.2)`
                        }
                    ]
                }}
            >
                <CoinBackground
                    shadowColor={__COLORS.THIRD}
                    shadowOffset={{
                        width: -reallyBigOffset,
                        height: -reallyBigOffset
                    }}
                    shadowOpacity={3}
                    shadowRadius={2}
                    style={{
                        opacity: coinOpacity
                    }}
                />
                <Coin>
                    <Dot

                        style={{
                            opacity: glowOpacity,
                            transform: [
                                {
                                    translateY
                                },
                                { translateX }
                            ]
                        }}
                    />
                    <Svg
                        width={size}
                        height={size}
                        style={{ position: 'absolute' }}
                    >
                        <Defs>
                            <SvgLinearGradient
                                id="grad"
                                x1="0"
                                y1="0"
                                x2="100%"
                                y2="0"
                            >
                                <Stop offset="0" stopColor={__COLORS.SECOND} />
                                <Stop offset="1" stopColor={__COLORS.THIRD} />
                            </SvgLinearGradient>
                        </Defs>
                        <AnimatedCircle
                            stroke="url(#grad)"
                            fill="none"
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            strokeDasharray={`${circumference}, ${circumference}`}
                            {...{ strokeDashoffset, strokeWidth }}
                        />
                    </Svg>
                    <CoinIcon
                        style={{
                            width: 32,
                            height: 32,
                            opacity
                        }}
                        source={getSource(this.props.type)}
                    />
                </Coin>
            </Animated.View>
        );

    }
}

const Dot = styled(Animated.View)`
    border-radius: 3px;
    background-color: black;
    width: 6px;
    height: 6px;
    position: absolute;
    top: ${reallyBigOffset - 3}px;
    left: ${reallyBigOffset - 3}px;
`;
