import React from 'react';
import { View } from 'react-native'
import styled from 'styled-components'

const Coin = styled(View)`
    background-color: green;
    width: 25px;
    height: 25px;
`;

export default class extends React.Component {
    render() {
        return (
            <View>
                <Coin></Coin>
            </View>
        )

    }
}
