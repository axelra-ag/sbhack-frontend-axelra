import React from 'react';
import {View, Text, Image} from 'react-native';
import Market from './components/market';
import {__COLORS} from './layout/colors';

const Wallet = () => <Market />;

Wallet.navigationOptions = {
	title: 'Wallet',
	tabBarIcon: ({tintColor}) => (
		<Image
			source={require('../assets/wallet.png')}
			style={{
				height: 32,
				width: 32,
				marginTop: 15,
				marginBottom: 15,
				tintColor
			}}
		/>
	)
};

export default Wallet;
