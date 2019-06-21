import React from 'react';
import styled from 'styled-components';
import { Animated } from 'expo'
import { View, Text, Image } from 'react-native'
import { runTiming } from 'react-native-redash'
import { MapView, DangerZone } from 'expo'
const { Easing } = DangerZone;

const Pulse = styled(Animated.View)`
    height: 30px;
    width: 30px;
    background-color: #58B368;
    border-radius: 15px;
    position: absolute;
    align-self: center;
    margin-top: 6px;
`;

class LitPin extends React.Component {
    state = {
        reset: Date.now()
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                reset: Date.now()
            })
        }, 3000);
    }
    render() {
        const config = {
            duration: 3 * 1000,
            toValue: 1.2,
            easing: Easing.elastic(0.8),
        };
        const scale = runTiming(new Animated.Clock(0), 0.7, config)
        const opacity = Animated.interpolate(scale, {
            inputRange: [1, 1.2],
            outputRange: [0.5, 0]
        })
        return (
            <View>
                <Pulse key={this.state.reset} style={{
                    opacity,
                    transform: [{
                        scale
                    }]
                }} />
                <Image source={require('../assets/marker-green.png')} style={{ width: 100 / 2.5, height: 160 / 2.5 }} />
            </View>
        )
    }
}

export default () => {
    return (
        <View style={{ flex: 1 }}>
            <MapView showsCurrent showsUserLocation initialRegion={{
                longitude: 8.539918,
                latitude: 47.367424,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} style={{ flex: 1 }}>
                <MapView.Marker coordinate={{
                    longitude: 8.539918,
                    latitude: 47.367424,
                }} centerOffset={{ x: 0.5, y: 1 }} anchor={{ x: 0.5, y: 0 }}>
                    <View>
                        <LitPin />
                    </View>

                    <MapView.Callout>
                        <View>
                            <Text>hih</Text>
                        </View>
                    </MapView.Callout>
                </MapView.Marker>
            </MapView>
        </View>
    )
}
