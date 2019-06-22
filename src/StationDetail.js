import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import MapView from 'react-native-maps';
import Header from './wallet/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {__FONTS} from './layout/fonts';
import {LitPin} from './Tab4';
import Callout from './lit-animation/Callout';
import {__COLORS} from './layout/colors';
import headerOptions from './header-options';

const list = [
	{
		name: 'Bike 1',
		mileage: 10.2
	},
	{
		name: 'Bike 2',
		mileage: 20
	},
	{
		name: 'Bike 3',
		mileage: 30
	}
];

class BikeStations extends React.Component {
	static navigationOptions = {
		...headerOptions,
		title: 'Station ' + Math.round(Math.random() * 10)
	};
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
						latitudeDelta: 0.01,
						longitudeDelta: 0.01
					}}
					style={{height: 300}}
				>
					<MapView.Marker
						key={539918 + 47.367424}
						coordinate={{
							longitude: 8.539918,
							latitude: 47.367424
						}}
						centerOffset={{x: 0.5, y: -(100 / 2.5)}}
					>
						<View>
							<LitPin />
						</View>
					</MapView.Marker>
				</MapView>
				<ScrollView style={{flex: 1}}>
					<Header title="Station X" subTitle="10 bikes available." />
					<View style={{height: 15}} />

					{list.map(b => (
						<TouchableOpacity
							key={b.name}
							style={{paddingTop: 10, paddingBottom: 10}}
						>
							<View style={{paddingLeft: 30, flexDirection: 'row'}}>
								<Image
									style={{
										height: 114 / 4,
										width: 143 / 4,
										tintColor: '#58B368',
										marginRight: 20,
										flexDirection: 'row'
									}}
									source={require('../assets/bicycle.png')}
								/>
								<View>
									<Text
										style={{
											fontFamily: __FONTS.BOLD,
											fontSize: 18,
											color: __COLORS.FIRST
										}}
									>
										{b.name}
									</Text>
									<View style={{height: 5}} />
									<Text style={{opacity: 0.8}}>
										E-Bike: Range {b.mileage}km
									</Text>
								</View>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		);
	}
}

export default BikeStations;
