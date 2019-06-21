import React from 'react';
import { View, Text } from 'react-native';
import Coin from './lit-animation/Coin';

export default class extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Coin />
            </View>
        )
    }
}
