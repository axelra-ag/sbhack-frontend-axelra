import React from 'react';
import {min, max, last} from 'lodash';
import {View, Image, Text} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {__COLORS} from './layout/colors';
import Header from './wallet/Header';
import Footer from './wallet/Footer';
import {SafeAreaView, withNavigation} from 'react-navigation';
import AnimateNumber from 'react-native-animate-number';
import {__FONTS} from './layout/fonts';

const rewards = [
	{
		latitude: 47.41084,
		longitude: 8.499048
	},
	{
		latitude: 47.430883,
		longitude: 8.493533
	}
];

export const mapLayout = (points, paddingFactor = 1.1) => {
	const longitudes = points.map(p => p.longitude);
	const latitudes = points.map(p => p.latitude);
	const left = min(longitudes);
	const right = max(longitudes);
	const top = max(latitudes);
	const bottom = min(latitudes);
	const middle = {
		longitude: (left + right) / 2,
		latitude: (top + bottom) / 2
	};
	const longitudeDelta = Math.max(0.001, (right - left) * paddingFactor);
	const latitudeDelta = Math.max(0.001, (top - bottom) * paddingFactor);
	return {
		middle,
		longitudeDelta,
		latitudeDelta
	};
};

class RideDone extends React.Component {
	render() {
		const position = mapLayout(rewards);
		const {longitudeDelta, latitudeDelta} = position;
		return (
			<SafeAreaView style={{flex: 1}}>
				<MapView
					style={{height: 300}}
					initialRegion={{
						...position.middle,
						longitudeDelta: longitudeDelta + 0.0005,
						latitudeDelta: latitudeDelta + 0.0005
					}}
				>
					<Marker
						anchor={{
							x: 0.5,
							y: 0.75
						}}
						coordinate={{
							latitude: 47.367424,
							longitude: 8.539918
						}}
					/>
					<Marker
						tracksViewChanges={false}
						coordinate={last(rewards)}
						anchor={{
							x: 0.5,
							y: 0.75
						}}
					>
						<Image
							style={{width: 20, height: 20}}
							source={require('../assets/end.png')}
						/>
					</Marker>
					<Marker
						tracksViewChanges={false}
						anchor={{
							x: 0.5,
							y: 0.75
						}}
						coordinate={rewards[0]}
					>
						<Image
							style={{width: 20, height: 20}}
							source={require('../assets/start.png')}
						/>
					</Marker>
					<Polyline
						coordinates={rewards.map(t => ({
							latitude: t.latitude,
							longitude: t.longitude
						}))}
						lineCap="round"
						strokeColor={__COLORS.THIRD}
						strokeWidth={4}
					/>
				</MapView>
				<Header title="Morning commute" subTitle="2.5 km" />
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Image
						source={require('../assets/coin.png')}
						style={{
							tintColor: __COLORS.SECOND,
							width: 32,
							height: 24
						}}
					/>
					<View style={{height: 14}} />
					<Text
						style={{
							color: __COLORS.SECOND,
							fontFamily: __FONTS.BOLD,
							fontSize: 18
						}}
					>
						You earned{' '}
						<AnimateNumber
							timing="easeOut"
							steps={40}
							interval={16}
							value={120}
							formatter={val => {
								return parseFloat(val).toFixed(0);
							}}
						/>{' '}
						CO2 token
					</Text>
				</View>
				<Footer
					background={__COLORS.THIRD}
					onPress={() => {
						this.props.navigation.navigate('Wallet');
					}}
				>
					Go to Wallet
				</Footer>
			</SafeAreaView>
		);
	}
}

export default withNavigation(RideDone);
