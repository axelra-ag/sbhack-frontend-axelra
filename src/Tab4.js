import React from 'react';
import styled from 'styled-components';
import Animated, {Easing} from 'react-native-reanimated';
import {View, Text, Image} from 'react-native';
import {runTiming} from 'react-native-redash';
import MapView from 'react-native-maps';
import Callout from './lit-animation/Callout';
import RewardCallout from './lit-animation/RewardCallout';
import {__COLORS} from './layout/colors';
import {__FONTS} from './layout/fonts';
import RideInProgress from './RideInProgress';
import headerOptions from './header-options';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

class Tab4 extends React.Component {
	static navigationOptions = {
		...headerOptions,
		title: 'Stations'
	};
	state = {
		started: false,
		bikes: []
	};
	componentDidMount() {
		fetch(
			`http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com/maps/get-stations?hiho`,
			{
				method: 'get',
				headers: {
					Origin:
						'http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com',
					'Content-Type': 'application/json'
				}
			}
		)
			.then(response => response.json())
			.then(response => {
				this.setState({
					bikes: response.result
				});
			})
			.catch(err => {
				alert(`Could not fetch ${err.message}`);
			});
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<MapView
					userLocationAnnotationTitle={null}
					showsCurrent
					showsUserLocation
					initialRegion={{
						longitude: 8.539918,
						latitude: 47.367424,
						latitudeDelta: 0.03,
						longitudeDelta: 0.03
					}}
					style={{flex: 1}}
				>
					{this.state.bikes.map(bike => (
						<MapView.Marker
							key={bike.coordinates[0] + bike.coordinates[1]}
							coordinate={{
								longitude: bike.coordinates[1],
								latitude: bike.coordinates[0]
							}}
							centerOffset={{x: 0.5, y: -(100 / 2.5)}}
						>
							<View>
								<LitPin />
							</View>

							<MapView.Callout
								onPress={() => {
									this.props.navigation.navigate('StationDetail', {
										bike
									});
								}}
								style={{width: 240}}
							>
								<Callout
									bikesAvailable={bike.availableBikes}
									distance={getDistance(
										bike.coordinates[0],
										bike.coordinates[1]
									)}
								/>
							</MapView.Callout>
						</MapView.Marker>
					))}
					{rewards.map(reward => (
						<MapView.Marker
							key={reward.longitude + reward.latitude}
							coordinate={{
								longitude: reward.longitude,
								latitude: reward.latitude
							}}
							centerOffset={{x: 0.5, y: -(100 / 2.5)}}
						>
							<View>
								<LitPin reward />
							</View>
							<MapView.Callout
								onPress={() => {
									this.props.navigation.navigate('RewardDetail');
								}}
							>
								<RewardCallout
									unlockAmount={reward.unlockAmount}
									distance={getDistance(reward.latitude, reward.longitude)}
								/>
							</MapView.Callout>
						</MapView.Marker>
					))}
				</MapView>
				{this.state.started ? (
					<RideInProgress
						didFinish={() => {
							this.props.navigation.navigate('RideDone');
						}}
					/>
				) : (
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							height: 110,
							width: '100%',
							padding: 12,
							paddingLeft: 14,
							paddingRight: 14,
							flexDirection: 'row'
						}}
					>
						<View
							style={{
								padding: 16,
								borderRadius: 6,
								borderBottomRightRadius: 2,
								borderTopRightRadius: 2,
								flex: 1,
								justifyContent: 'center',
								backgroundColor: __COLORS.THIRD
							}}
						>
							<View>
								<Text style={{color: 'white', fontFamily: __FONTS.BOLD}}>
									You have
								</Text>
								<View style={{height: 3}} />
								<Text
									style={{
										fontSize: 18,
										color: 'white',
										fontFamily: __FONTS.BOLD
									}}
								>
									100{' '}
									<Image
										source={require('../assets/coin.png')}
										style={{
											tintColor: 'white',
											width: 16,
											height: 12
										}}
									/>{' '}
									<Text style={{width: 10}} />
									CO2
								</Text>
								<View style={{height: 2}} />
								<Text
									style={{
										fontSize: 14,
										color: 'white'
									}}
								>
									Bike to earn CO2
								</Text>
							</View>
						</View>
						<View style={{width: 4}} />
						<TouchableOpacity
							style={{flex: 1, height: 80}}
							onPress={() => {
								this.setState({started: true});
							}}
						>
							<View
								style={{
									backgroundColor: __COLORS.THIRD,
									justifyContent: 'center',
									alignItems: 'center',
									zIndex: 1,
									width: 80,
									flex: 1,
									borderRadius: 6,
									borderBottomLeftRadius: 2,
									borderTopLeftRadius: 2
								}}
							>
								<View style={{height: 8}} />
								<Image
									style={{
										width: 640 / 14,
										height: 512 / 14,
										tintColor: 'white'
									}}
									source={require('../assets/barcode.png')}
								/>
								<View style={{height: 6}} />
								<Text style={{color: 'white', fontFamily: __FONTS.BOLD}}>
									RIDE
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	}
}

export default Tab4;
