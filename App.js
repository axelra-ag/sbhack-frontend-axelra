import global from './global';
import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator
} from 'react-navigation';
//import Tab1 from './src/Tab1';
import LitAnimation from './src/LitAnimation';
import Wallet from './src/Wallet';
import {
	__BOLD_FONT_SOURCE,
	__EXTRABOLD_FONT_SOURCE,
	__FONTS,
	__LIGHT_FONT_SOURCE,
	__REGULAR_FONT_SOURCE,
	__SEMIBOLD_FONT_SOURCE
} from './src/layout/fonts';

import './global';
import {__COLORS} from './src/layout/colors';
import {Ionicons} from '@expo/vector-icons';
import Tab4 from './src/Tab4';
import StationDetail from './src/StationDetail';
import RewardDetail from './src/RewardDetail';
import RideDone from './src/RideDone';

const Map = createStackNavigator({
	Tab4,
	StationDetail,
	RewardDetail,
	RideDone,
	LitAnimation
});

Map.navigationOptions = {
	title: 'Map',
	tabBarIcon: ({tintColor}) => (
		<Image
			source={require('./assets/pin.png')}
			style={{
				height: 32,
				width: 32,
				tintColor
			}}
		/>
	)
};

const TabNavigator = createBottomTabNavigator(
	{
		Map,
		DebugTab: Tab1,
		Wallet
	},
	{
		tabBarOptions: {
			style: {
				height: 70
			},
			labelStyle: {
				transform: [
					{
						translateY: -7
					}
				],
				fontFamily: __FONTS.BOLD,
				fontWeight: 'bold'
			},
			activeTintColor: __COLORS.THIRD,
			inactiveTintColor: __COLORS.FIRST
		}
	}
);

const Container = createAppContainer(TabNavigator);

class App extends Component {
	state = {
		isLoadingComplete: false
	};
	_loadResourcesAsync = async () => {
		return Promise.all([
			Font.loadAsync({
				[__FONTS.LIGHT]: __LIGHT_FONT_SOURCE,
				[__FONTS.REGULAR]: __REGULAR_FONT_SOURCE,
				[__FONTS.SEMIBOLD]: __SEMIBOLD_FONT_SOURCE,
				[__FONTS.BOLD]: __BOLD_FONT_SOURCE,
				[__FONTS.EXTRABOLD]: __EXTRABOLD_FONT_SOURCE,
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				...Ionicons.font
			})
		]);
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({isLoadingComplete: true});
	};

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<View
					style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}
				>
					<Container />
				</View>
			);
		}
	}
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
