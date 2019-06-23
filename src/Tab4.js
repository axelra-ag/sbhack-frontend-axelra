import React from "react";
import styled from "styled-components";
import Animated, { Easing } from "react-native-reanimated";
import { View, Text, Image } from "react-native";
import { runTiming } from "react-native-redash";
import MapView from "react-native-maps";
import Callout from "./lit-animation/Callout";
import RewardCallout from "./lit-animation/RewardCallout";
import { __COLORS } from "./layout/colors";
import { __FONTS } from "./layout/fonts";
import RideInProgress from "./RideInProgress";
import headerOptions from "./header-options";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  endRide,
  getAccounts,
  getBalance,
  getTokenBalance,
  startRide
} from "./web3/web3";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { AsyncStorage } from "react-native";

const Pulse = styled(Animated.View)`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  position: absolute;
  align-self: center;
  margin-top: 6px;
`;

export class LitPin extends React.Component {
  state = {
    reset: Date.now()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        reset: Date.now()
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const config = {
      duration: 3 * 1000,
      toValue: 1.2,
      easing: Easing.elastic(0.8)
    };
    const scale = runTiming(new Animated.Clock(0), 0.7, config);
    const opacity = Animated.interpolate(scale, {
      inputRange: [1, 1.2],
      outputRange: [0.5, 0]
    });
    return (
      <View>
        <Pulse
          key={this.state.reset}
          style={{
            opacity,
            backgroundColor: this.props.reward ? "#FFB300" : "#58B368",

            transform: [
              {
                scale
              }
            ]
          }}
        />
        <Image
          source={
            this.props.reward
              ? require("../assets/marker-yellow.png")
              : require("../assets/marker-green.png")
          }
          style={{ width: 100 / 2.5, height: 160 / 2.5 }}
        />
      </View>
    );
  }
}

const here = [47.367681, 8.539606];

const getDistance = (x, y) => {
  const xDiff = here[0] - x;
  const yDiff = here[1] - y;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff) * 111;
};

const rewards = [
  {
    latitude: 47.41084,
    longitude: 8.499048,
    unlockAmount: 150
  },
  {
    latitude: 47.430883,
    longitude: 8.493533,
    unlockAmount: 100
  },
  {
    latitude: 47.364119,
    longitude: 8.537259,
    unlockAmount: 100
  },
  {
    latitude: 47.370868,
    longitude: 8.534043,
    unlockAmount: 70
  }
];

class Tab4 extends React.Component {
  static navigationOptions = {
    ...headerOptions,
    title: "Stations"
  };
  state = {
    started: false,
    bikes: [],
    balance: null
  };

  componentWillMount() {
    this._getLocationAsync();
    console.log("location ");
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("NIG BIG");
    }

    let location = await Location.getCurrentPositionAsync({});
    let coords = location.coords;
    console.log("getting my coordinate ", coords);
    await this.getApprovalForLocation(coords);
  };

  getApprovalForLocation(coordinates) {
    let body = JSON.stringify({
      coordinates: {
        lat: coordinates.latitude,
        lng: coordinates.longitude
      }
    });
    console.log(body);
    fetch(
      `http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com/maps/get-closest-station-coord`,
      {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
        alert(`Could not fetch ${err.message}`);
      });
  }

  async componentDidMount() {
    fetch(
      `http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com/maps/get-stations?hiho`,
      {
        method: "get",
        headers: {
          Origin:
            "http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          bikes: response.result
        });
      })
      .catch(err => {
        alert(`Could not fetch ${err.message}`);
      });
    const account = await getAccounts();
    const balance = await getTokenBalance(account[0]);
    this.setState({ balance });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          userLocationAnnotationTitle={null}
          showsCurrent
          showsUserLocation
          initialRegion={{
            longitude: 8.539918,
            latitude: 47.367424,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03
          }}
          style={{ flex: 1 }}
        >
          {this.state.started
            ? null
            : this.state.bikes.map(bike => (
                <MapView.Marker
                  key={bike.coordinates[0] + bike.coordinates[1]}
                  coordinate={{
                    longitude: bike.coordinates[1],
                    latitude: bike.coordinates[0]
                  }}
                  centerOffset={{ x: 0.5, y: -(100 / 2.5) }}
                >
                  <View>
                    <LitPin />
                  </View>

                  <MapView.Callout
                    onPress={() => {
                      this.props.navigation.navigate("StationDetail", {
                        bike,
                        onStart: () => {
                          this.setState({ started: true });
                        }
                      });
                    }}
                    style={{ width: 240 }}
                  >
                    <Callout
                      name={bike.name}
                      bikesAvailable={bike.availableBikes}
                      distance={getDistance(
                        bike.coordinates[0],
                        bike.coordinates[1]
                      )}
                    />
                  </MapView.Callout>
                </MapView.Marker>
              ))}
          {this.state.started
            ? null
            : rewards.map(reward => (
                <MapView.Marker
                  key={reward.longitude + reward.latitude}
                  coordinate={{
                    longitude: reward.longitude,
                    latitude: reward.latitude
                  }}
                  centerOffset={{ x: 0.5, y: -(100 / 2.5) }}
                >
                  <View>
                    <LitPin reward />
                  </View>
                  <MapView.Callout
                    onPress={() => {
                      this.props.navigation.navigate("RewardDetail");
                    }}
                  >
                    <RewardCallout
                      unlockAmount={reward.unlockAmount}
                      distance={getDistance(reward.latitude, reward.longitude)}
                    />
                  </MapView.Callout>
                </MapView.Marker>
              ))}
        </MapView>
        {this.state.started ? (
          <RideInProgress
            didFinish={() => {
              this.setState({
                started: false
              });
              this.props.navigation.navigate("RideDone");
            }}
          />
        ) : (
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
                justifyContent: "center",
                backgroundColor: __COLORS.THIRD
              }}
            >
              <View>
                <Text style={{ color: "white", fontFamily: __FONTS.BOLD }}>
                  You have
                </Text>
                <View style={{ height: 3 }} />
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontFamily: __FONTS.BOLD
                  }}
                >
                  {this.state.balance}{" "}
                  <Image
                    source={require("../assets/coin.png")}
                    style={{
                      tintColor: "white",
                      width: 16,
                      height: 12
                    }}
                  />{" "}
                  <Text style={{ width: 10 }} />
                  CO2
                </Text>
                <View style={{ height: 2 }} />
                <Text
                  style={{
                    fontSize: 14,
                    color: "white"
                  }}
                >
                  Bike to earn CO2
                </Text>
              </View>
            </View>
            <View style={{ width: 4 }} />
            <TouchableOpacity
              style={{ flex: 1, height: 80 }}
              onPress={async () => {
                this.setState({ started: true });
                console.log("Starting the ride..");
                // const account = await AsyncStorage.getItem("account");
                const accounts = await getAccounts();
                console.log(accounts[0]);
                const start = await startRide(
                  9,
                  "C3gtjvMVUmfMbbFDq",
                  accounts[0],
                  10
                );
              }}
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
                  style={{
                    width: 640 / 14,
                    height: 512 / 14,
                    tintColor: "white"
                  }}
                  source={require("../assets/barcode.png")}
                />
                <View style={{ height: 6 }} />
                <Text style={{ color: "white", fontFamily: __FONTS.BOLD }}>
                  RIDE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Tab4;
