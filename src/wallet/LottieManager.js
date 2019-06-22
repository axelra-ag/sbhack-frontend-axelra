import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Lottie from 'lottie-react-native';
import {DangerZone} from 'expo';

export default class LottieManager extends React.Component {
	state = {
		animation: null
	};

	componentWillMount() {
		this._playAnimation();
	}

	render() {
		return (
			<View style={styles.animationContainer}>
				{this.state.animation && (
					<Lottie
						ref={animation => {
							this.animation = animation;
						}}
						style={{
							width: this.props.width || 400,
							height: this.props.height || 400,
							backgroundColor: '#fff'
						}}
						source={this.state.animation}
					/>
				)}
			</View>
		);
	}

	_playAnimation = () => {
		if (!this.state.animation) {
			this._loadAnimationAsync();
		} else {
			this.animation.reset();
			this.animation.play();
		}
	};

	_loadAnimationAsync = async () => {
		let result;
		if (this.props.json) {
			result = this.props.json;
		}
		if (this.props.url) {
			result = await fetch(this.props.url)
				.then(data => {
					return data.json();
				})
				.catch(error => {
					console.error(error);
				});
		}
		this.setState({animation: result}, this._playAnimation);
	};
}

const styles = StyleSheet.create({
	animationContainer: {
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {
		paddingTop: 20
	}
});
