import React from 'react';
import {min, max} from 'lodash';
import {View} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {__COLORS} from './layout/colors';
import Header from './wallet/Header';

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

export default class extends React.Component {
	render() {
		const position = mapLayout(rewards);
		const {longitudeDelta, latitudeDelta} = position;
		return (
			<View style={{flex: 1}}>
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
					<Polyline
						coordinates={rewards.map(t => ({
							latitude: t.latitude,
							longitude: t.longitude
						}))}
						lineCap="round"
						strokeColor={__COLORS.THIRD}
						strokeWidth={8}
					/>
				</MapView>
				<Header title="My header" subTitle="fsdf" />
			</View>
		);
	}
}
