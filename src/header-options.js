import React from 'react';
import Gradient from './Gradient';
import {__FONTS} from './layout/fonts';

export default {
	headerStyle: {
		borderBottomWidth: 0,
		backgroundColor: 'transparent',
		elevation: 0
	},
	headerTitleStyle: {
		color: 'white',
		fontFamily: __FONTS.BOLD
	},
	headerBackTitleStyle: {
		color: 'white',
		fontFamily: __FONTS.REGULAR
	},
	headerTintColor: 'white',
	headerBackground: <Gradient />
};
