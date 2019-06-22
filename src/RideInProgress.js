import React from 'react';
import {View, Text, Image} from 'react-native';
import {__COLORS} from './layout/colors';
import {__FONTS} from './layout/fonts';
import {TouchableHighlight} from 'react-native-gesture-handler';

const pad = num => {
	if (num < 10) {
		return `0${num}`;
	}
	return num;
};

const formatSeconds = seconds => {
	const minutes = Math.floor(seconds / 60);
	const remainSec = seconds - minutes * 60;
	return `${pad(minutes)}:${pad(seconds)}`;
};

export default class RideInProgress extends React.Component {
	state = {
		seconds: 0
	};
	componentDidMount() {
		setInterval(() => {
			this.setState({
				seconds: this.state.seconds + 1
			});
		}, 1000);
	}
	render() {
		return (
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
						<Text
							style={{
								fontSize: 18,
								color: 'white',
								fontFamily: __FONTS.BOLD
							}}
						>
							Ride in progress
						</Text>
						<View style={{height: 2}} />
						<Text
							style={{
								fontSize: 14,
								color: 'white'
							}}
						>
							{formatSeconds(this.state.seconds)}
						</Text>
					</View>
				</View>
				<View style={{width: 4}} />
				<TouchableHighlight
					onPress={() => {
						this.props.didFinish();
					}}
					style={{height: 80, flex: 1, borderRadius: 6}}
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
							style={{width: 640 / 14, height: 512 / 14, tintColor: 'white'}}
							source={require('../assets/barcode.png')}
						/>
						<View style={{height: 6}} />
						<Text style={{color: 'white', fontFamily: __FONTS.BOLD}}>STOP</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
