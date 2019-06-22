import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {MapView} from 'expo';
import Header from './wallet/Header';
import Footer from './wallet/Footer';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {__FONTS} from './layout/fonts';
import {LitPin} from './Tab4';
import {__COLORS} from './layout/colors';
import {Button} from './layout/button';
import Coin, {size} from './lit-animation/Coin';

class BikeStations extends React.Component {
	static navigationOptions = {
		title: 'Chest'
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
					style={{height: 200}}
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
							<LitPin reward />
						</View>
					</MapView.Marker>
				</MapView>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontFamily: __FONTS.BOLD}}>This chest includes:</Text>
					<View style={{height: 8}} />
					<View style={{flexDirection: 'row', justifyContent: 'center'}}>
						<Coin
							noSlideDown
							xOffset={size + 30}
							height={100}
							type="modum"
							delay={300}
						/>
						<View style={{width: 30}} />
						<Coin
							noSlideDown
							xOffset={size + 30}
							height={100}
							type="vetri"
							delay={600}
						/>
					</View>
				</View>
				<Footer onPress={() => {}}>Unlock for 100 VLV</Footer>
			</View>
		);
	}
}

export default BikeStations;
