import React from 'react';
import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
import {__FONTS} from '../layout/fonts';
import {__COLORS} from '../layout/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Label = styled(Text)``;

export default class extends React.Component {
	render() {
		return (
			<View style={{width: 280, flexDirection: 'row', alignItems: 'center'}}>
				<Image
					style={{
						height: 114 / 4,
						width: 128 / 4,
						tintColor: '#FFB300',
						marginRight: 10
					}}
					source={require('../../assets/chest.png')}
				/>
				<View>
					<Label
						style={{
							fontWeight: 'bold',
							fontFamily: __FONTS.BOLD,
							color: __COLORS.FIRST
						}}
					>
						Chest
					</Label>
					<View style={{height: 3}} />
					<Label
						style={{
							color: __COLORS.FIRST,
							fontFamily: __FONTS.REGULAR
						}}
					>
						{this.props.unlockAmount} CO2 to unlock
					</Label>
					<View style={{height: 3}} />
					<Label
						style={{
							color: __COLORS.FIRST,
							fontFamily: __FONTS.REGULAR
						}}
					>
						{this.props.distance ? this.props.distance.toFixed(1) : null} km
						away
					</Label>
				</View>
				<View style={{flex: 1}} />
				<Image
					style={{
						height: 126 / 8,
						width: 79 / 8,
						tintColor: __COLORS.FIRST
					}}
					source={require('../../assets/chevron.png')}
				/>
			</View>
		);
	}
}
