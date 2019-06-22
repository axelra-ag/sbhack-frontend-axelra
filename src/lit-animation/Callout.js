import React from 'react';
import styled from 'styled-components';
import {View, Text, Image} from 'react-native';

const Label = styled(Text)`
	color: green;
`;

export default class extends React.Component {
	render() {
		return (
			<View style={{width: 240, flexDirection: 'row'}}>
				<Image
					style={{
						height: 114 / 4,
						width: 143 / 4,
						tintColor: '#58B368',
						marginRight: 10
					}}
					source={require('../../assets/bicycle.png')}
				/>
				<View>
					<Label>
						{String(this.props.bikesAvailable)} bike
						{this.props.bikesAvailable === 1 ? '' : 's'} available
					</Label>
					<Label>
						{this.props.distance ? this.props.distance.toFixed(1) : null} km
						away
					</Label>
				</View>
			</View>
		);
	}
}
