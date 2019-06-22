import React, {Component} from 'react';
import styled from 'styled-components';
import {Flex} from '../layout/layout';
import Header from './Header';
import Web3 from 'web3';
import LottieManager from './LottieManager';
import LottieAnimation from '../bike-animation.json';
import {Image} from 'react-native';
import {H3, RegularText} from '../layout/typography';
import {__COLORS} from '../layout/colors';

const web3 = new Web3(
	new Web3.providers.HttpProvider('http://172.20.10.3:8545')
);

const createAddress = () => {
	console.log('hier...');
	const address = web3.eth.getAccounts(s => {
		console.log(s);
	});
};

const Container = styled(Flex)``;

const Body = styled(Flex)`
	justify-content: center;
`;

const First = styled(Flex)`
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`;

const SubTitle = styled(RegularText)`
	text-align: center;
	font-size: 30px;
`;

class SeedScreen extends Component {
	componentDidMount() {
		createAddress();
	}

	render() {
		return (
			<Container>
				<Header title={''} subTitle={''} />

				<Body flex={1}>
					<First flex={1}>
						<SubTitle style={{padding: 15, color: __COLORS.FOURTH}}>
							We are creating your Wallet.{' '}
							<SubTitle style={{color: __COLORS.SECOND}}>Please wait.</SubTitle>
						</SubTitle>
					</First>
					<Flex flex={1} style={{zIndex: -1}}>
						<LottieManager json={LottieAnimation} height={300} />
					</Flex>
					<Flex flex={1} />
				</Body>
			</Container>
		);
	}
}

export default SeedScreen;
