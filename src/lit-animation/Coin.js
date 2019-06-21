import React from 'react';
import { View, Image } from 'react-native'
import styled from 'styled-components'

const Coin = styled(View)`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    border-width: 2px;
`;

const CoinIcon = styled(Image)`

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

export default class extends React.Component {
    render() {
        return (
            <View>
                <Coin>
                    <CoinIcon style={{
                        width: 32,
                        height: 32
                    }} source={ether} />
                </Coin>
                <Coin>
                    <CoinIcon style={{
                        width: 32,
                        height: 32
                    }} source={modum} />
                </Coin>
                <Coin>
                    <CoinIcon style={{
                        width: 32,
                        height: 32
                    }} source={vetri} />
                </Coin>
            </View>
        )

    }
}
