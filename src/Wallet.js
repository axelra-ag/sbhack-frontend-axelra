import React from 'react';
import {View, Text, Image} from 'react-native';
import Market from './components/market';
import {__COLORS} from './layout/colors';
import headerOptions from './header-options';
import { createStackNavigator } from 'react-navigation';

const Wallet = () => <Market />;

Wallet.navigationOptions ={ 
	...headerOptions,
	title: "Wallet"
}
const Stack = createStackNavigator({
	Wallet
})

Stack.navigationOptions = {
	...headerOptions,
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

export default Stack;
