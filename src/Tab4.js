import React from 'react';
import styled from 'styled-components';
import { Animated } from 'expo'
import { View, Text, Image } from 'react-native'
import { runTiming } from 'react-native-redash'
import { MapView, DangerZone } from 'expo'
import Callout from './lit-animation/Callout';
const { Easing } = DangerZone;

const Pulse = styled(Animated.View)`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    position: absolute;
    align-self: center;
    margin-top: 6px;
`;

export class LitPin extends React.Component {
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
                    backgroundColor: this.props.reward ? '#FFB300' : '#58B368',

                    transform: [{
                        scale
                    }]
                }} />
                <Image source={this.props.reward ? require('../assets/marker-yellow.png') : require('../assets/marker-green.png')} style={{ width: 100 / 2.5, height: 160 / 2.5 }} />
            </View>
        )
    }
}

const here = [47.367681, 8.539606]

const getDistance = (x, y) => {
    const xDiff = here[0] - x
    const yDiff = here[1] - y
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff) * 111
}

const bikes = [{
    longitude: 8.539918,
    latitude: 47.367424,
    bikesAvailable: Math.round(Math.random() * 5)
}, {
    longitude: 8.538818,
    latitude: 47.366424,
    bikesAvailable: Math.round(Math.random() * 5)

}, {
    longitude: 8.542226,
    latitude: 47.366713,
    bikesAvailable: Math.round(Math.random() * 5)

}, {
    latitude: 47.363770,
    longitude: 8.535403,
    bikesAvailable: Math.round(Math.random() * 5)

}]

const rewards = [{
    latitude: 47.410840,
    longitude: 8.499048
}, {
    latitude: 47.430883,
    longitude: 8.493533,
}, {
    latitude: 47.364119,
    longitude: 8.537259
}, {
    latitude: 47.370868,
    longitude: 8.534043
}]

export default () => {
    return (
        <View style={{ flex: 1 }}>
            <MapView userLocationAnnotationTitle={null} showsCurrent showsUserLocation initialRegion={{
                longitude: 8.539918,
                latitude: 47.367424,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} style={{ flex: 1 }}>
                {bikes.map(bike => (
                    <MapView.Marker key={bike.longitude + bike.latitude} coordinate={{
                        longitude: bike.longitude,
                        latitude: bike.latitude,
                    }} centerOffset={{ x: 0.5, y: -(100 / 2.5) }} >
                        <View>
                            <LitPin />
                        </View>

                        <MapView.Callout style={{ width: 240 }}>
                            <Callout bikesAvailable={bike.bikesAvailable} distance={getDistance(bike.latitude, bike.longitude)} />
                        </MapView.Callout>
                    </MapView.Marker>
                ))}
                {rewards.map(bike => (
                    <MapView.Marker key={bike.longitude + bike.latitude} coordinate={{
                        longitude: bike.longitude,
                        latitude: bike.latitude,
                    }} centerOffset={{ x: 0.5, y: -(100 / 2.5) }} >
                        <View>
                            <LitPin reward />
                        </View>
                        <MapView.Callout>
                            <Text>Todo Bitch</Text>
                        </MapView.Callout>
                    </MapView.Marker>
                ))}

            </MapView>
        </View>
    )
}
