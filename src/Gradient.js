import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {__COLORS} from './layout/colors';

export default ({children, ...props}) => (
	<LinearGradient
		locations={[0, 1]}
		start={{x: 1, y: 0}}
		end={{x: 0, y: 0}}
		style={{flex: 1}}
		colors={[__COLORS.THIRD, __COLORS.SECOND]}
		{...props}
	>
		{children}
	</LinearGradient>
);
