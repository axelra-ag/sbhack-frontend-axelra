import React from "react";
import { View, Text, Image } from "react-native";
import LottieManager from "./wallet/LottieManager";
import Animated, { Easing } from "react-native-reanimated";
import { __COLORS } from "./layout/colors";
import { __FONTS } from "./layout/fonts";
import BikeAnimation from "./bike.json";
import { TouchableHighlight } from "react-native-gesture-handler";
import { runTiming } from "react-native-redash";
import { endRide, getAccounts, getTokenBalance } from "./web3/web3";

const pad = num => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

const formatSeconds = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainSec = seconds - minutes * 60;
  return `${pad(minutes)}:${pad(remainSec)}`;
};

export class AnimatedCO2 extends React.Component {
  render() {
    return (
      <Animated.Text
        style={{
          fontFamily: __FONTS.BOLD,
          fontWeight: "bold",
          color: __COLORS.THIRD,
          position: "absolute",
          left: 22,
          opacity: 0.8
        }}
      >
        CO2
      </Animated.Text>
    );
  }
}

export default class RideInProgress extends React.Component {
  state = {
    seconds: 0,
    kilometers: 0
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
        kilometers: this.state.kilometers + Math.random() / 50
      });
    }, 1000);
  }
  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 110,
          width: "100%",
          padding: 12,
          paddingLeft: 14,
          paddingRight: 14,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            padding: 16,
            borderRadius: 6,
            borderBottomRightRadius: 2,
            borderTopRightRadius: 2,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: __COLORS.THIRD
          }}
        >
          <LottieManager
            json={BikeAnimation}
            height={80}
            width={80}
            style={{
              marginTop: 20,
              marginLeft: -20,
              zIndex: -450000,
              justifyContent: "center",
              alignItems: "center"
            }}
          />
          <AnimatedCO2 />
          <View>
            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontFamily: __FONTS.BOLD
              }}
            >
              Ride in progress
            </Text>
            <View style={{ height: 2 }} />
            <Text
              style={{
                fontSize: 14,
                color: "white"
              }}
            >
              {formatSeconds(this.state.seconds)}
              {"          "}
              {this.state.kilometers.toFixed(2)} km
            </Text>
          </View>
        </View>
        <View style={{ width: 4 }} />
        <TouchableHighlight
          onPress={async () => {
            this.props.didFinish();
            const account = await getAccounts();

            const end = await endRide(0, 9, "C3gtjvMVUmfMbbFDq", account[0]);
          }}
          style={{ height: 80, flex: 1, borderRadius: 6 }}
        >
          <View
            style={{
              backgroundColor: __COLORS.THIRD,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
              width: 80,
              flex: 1,
              borderRadius: 6,
              borderBottomLeftRadius: 2,
              borderTopLeftRadius: 2
            }}
          >
            <View style={{ height: 8 }} />
            <Image
              style={{ width: 24, height: 24, tintColor: "white" }}
              source={require("../assets/flag.png")}
            />
            <View style={{ height: 12 }} />
            <Text style={{ color: "white", fontFamily: __FONTS.BOLD }}>
              STOP
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
