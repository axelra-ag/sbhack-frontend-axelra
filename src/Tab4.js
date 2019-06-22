import React from 'react';
import styled from 'styled-components';
import {Animated} from 'expo';
import {View, Text, Image} from 'react-native';
import {runTiming} from 'react-native-redash';
import {MapView, DangerZone} from 'expo';
import Callout from './lit-animation/Callout';
import RewardCallout from './lit-animation/RewardCallout';
const {Easing} = DangerZone;

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
	};
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				reset: Date.now()
			});
		}, 3000);
	}
	render() {
		const config = {
			duration: 3 * 1000,
			toValue: 1.2,
			easing: Easing.elastic(0.8)
		};
		const scale = runTiming(new Animated.Clock(0), 0.7, config);
		const opacity = Animated.interpolate(scale, {
			inputRange: [1, 1.2],
			outputRange: [0.5, 0]
		});
		return (
			<View>
				<Pulse
					key={this.state.reset}
					style={{
						opacity,
						backgroundColor: this.props.reward ? '#FFB300' : '#58B368',

						transform: [
							{
								scale
							}
						]
					}}
				/>
				<Image
					source={
						this.props.reward
							? require('../assets/marker-yellow.png')
							: require('../assets/marker-green.png')
					}
					style={{width: 100 / 2.5, height: 160 / 2.5}}
				/>
			</View>
		);
	}
}

const here = [47.367681, 8.539606];

const getDistance = (x, y) => {
	const xDiff = here[0] - x;
	const yDiff = here[1] - y;
	return Math.sqrt(xDiff * xDiff + yDiff * yDiff) * 111;
};

const bikes = [
	{
		longitude: 8.539918,
		latitude: 47.367424,
		bikesAvailable: Math.round(Math.random() * 5)
	},
	{
		longitude: 8.538818,
		latitude: 47.366424,
		bikesAvailable: Math.round(Math.random() * 5)
	},
	{
		longitude: 8.542226,
		latitude: 47.366713,
		bikesAvailable: Math.round(Math.random() * 5)
	},
	{
		latitude: 47.36377,
		longitude: 8.535403,
		bikesAvailable: Math.round(Math.random() * 5)
	},
	...[
		{
			id: 0,
			name: 'Station 0',
			coordinates: [47.3436811, 8.5242391],
			availableBikes: 10
		},
		{
			id: 1,
			name: 'Station 1',
			coordinates: [47.34795, 8.526061],
			availableBikes: 15
		},
		{
			id: 2,
			name: 'Station 2',
			coordinates: [47.3750872, 8.5177966],
			availableBikes: 5
		},
		{
			id: 3,
			name: 'Station 3',
			coordinates: [47.3972822, 8.3974746],
			availableBikes: 7
		},
		{
			id: 4,
			name: 'Station 4',
			coordinates: [47.4273416, 8.553148],
			availableBikes: 0
		},
		{
			id: 5,
			name: 'Station 5',
			coordinates: [47.403289, 8.607952],
			availableBikes: 34
		},
		{
			id: 6,
			name: 'Station 6',
			coordinates: [47.3793099, 8.5593968],
			availableBikes: 17
		},
		{
			id: 7,
			name: 'Station 7',
			coordinates: [47.366528, 8.540304],
			availableBikes: 13
		},
		{
			id: 8,
			name: 'Station 8',
			coordinates: [47.33486, 8.526954],
			availableBikes: 2
		}
	].map(a => ({
		latitude: a.coordinates[0],
		longitude: a.coordinates[1],
		bikesAvailable: a.availableBikes
	}))
];

const rewards = [
	{
		latitude: 47.41084,
		longitude: 8.499048,
		unlockAmount: 150
	},
	{
		latitude: 47.430883,
		longitude: 8.493533,
		unlockAmount: 100
	},
	{
		latitude: 47.364119,
		longitude: 8.537259,
		unlockAmount: 100
	},
	{
		latitude: 47.370868,
		longitude: 8.534043,
		unlockAmount: 70
	}
];

const Tab4 = props => {
	return (
		<View style={{flex: 1}}>
			<MapView
				userLocationAnnotationTitle={null}
				showsCurrent
				showsUserLocation
				initialRegion={{
					longitude: 8.539918,
					latitude: 47.367424,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01
				}}
				style={{flex: 1}}
			>
				{bikes.map(bike => (
					<MapView.Marker
						key={bike.longitude + bike.latitude}
						coordinate={{
							longitude: bike.longitude,
							latitude: bike.latitude
						}}
						centerOffset={{x: 0.5, y: -(100 / 2.5)}}
					>
						<View>
							<LitPin />
						</View>

						<MapView.Callout
							onPress={() => {
								props.navigation.navigate('StationDetail');
							}}
							style={{width: 240}}
						>
							<Callout
								bikesAvailable={bike.bikesAvailable}
								distance={getDistance(bike.latitude, bike.longitude)}
							/>
						</MapView.Callout>
					</MapView.Marker>
				))}
				{rewards.map(bike => (
					<MapView.Marker
						key={bike.longitude + bike.latitude}
						coordinate={{
							longitude: bike.longitude,
							latitude: bike.latitude
						}}
						centerOffset={{x: 0.5, y: -(100 / 2.5)}}
					>
						<View>
							<LitPin reward />
						</View>
						<MapView.Callout
							onPress={() => {
								props.navigation.navigate('RewardDetail');
							}}
						>
							<RewardCallout
								unlockAmount={bike.unlockAmount}
								distance={getDistance(bike.latitude, bike.longitude)}
							/>
						</MapView.Callout>
					</MapView.Marker>
				))}
			</MapView>
		</View>
	);
};

Tab4.navigationOptions = {
	title: 'Stations'
};

export default Tab4;
