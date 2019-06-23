import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { Input } from "react-native-elements";
import Header from "./Header";
import Footer from "./Footer";
import { __COLORS } from "../layout/colors";
import { SCREENS } from "./OnBoardingScreens";
import { GooglePlacesInput } from "./GoogleInputField";
import MyGoogleInputField from "./MyGoogleInputField";
import { H4, Paragraph } from "../layout/typography";
import MapView from "react-native-maps";
import { LitPin } from "../Tab4";
import { View } from "react-native";

const Container = styled(Flex)``;

const ArrowContainer = styled(Flex)``;

const Body = styled(Flex)`
  justify-content: center;
`;

class AddressWorkScreen extends Component {
  state = {
    workAddress: null,
    workAddressClosestStation: null
  };

  fetchClosestStation = address => {
    return fetch(
      `http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com/maps/get-closest-station`,
      {
        method: "POST",
        body: JSON.stringify({ address }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  };
  render() {
    let { navigate } = this.props;
    const [lat, long] = this.state.workAddressClosestStation
      ? this.state.workAddressClosestStation
      : [];
    return (
      <Container>
        <Header
          title={"Setup your Challenge"}
          subTitle={"... and where do you work."}
        />
        <Body flex={4}>
          <Flex flex={1}>
            <MyGoogleInputField
              placeholder={"Enter your work address.."}
              returnKeyType={"send"}
              label={"Work"}
              prediction={this.state.workAddress}
              setNearAddress={address =>
                this.setState({ workAddressClosestStation: address })
              }
              setAddress={async workAddress => {
                this.setState({ workAddress }, () => {
                  this.fetchClosestStation(this.state.workAddress)
                    .then(response => response.json())
                    .then(response => {
                      this.setState({
                        workAddressClosestStation: response.result.coordinates
                      });
                    })
                    .catch(error => console.log);
                });
              }}
            />
          </Flex>
          {this.state.workAddressClosestStation && (
            <Flex style={{ marginTop: -100 }}>
              <H4 style={{ textAlign: "center" }}>
                The closest station to your work
              </H4>
              <Flex flex={1}>
                <MapView
                  userLocationAnnotationTitle={null}
                  showsCurrent
                  showsUserLocation
                  initialRegion={{
                    longitude: long,
                    latitude: lat,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                  }}
                  style={{ height: 200 }}
                >
                  <MapView.Marker
                    key={539918 + 47.367424}
                    coordinate={{
                      longitude: long,
                      latitude: lat
                    }}
                    centerOffset={{ x: 0.5, y: -(100 / 2.5) }}
                  >
                    <View>
                      <LitPin />
                    </View>
                  </MapView.Marker>
                </MapView>
              </Flex>
            </Flex>
          )}
        </Body>
        <Footer
          disabled={!this.props.firstCode}
          background={__COLORS.FIRST}
          onPress={() => {
            navigate(SCREENS.ADDRESS_WORK);
          }}
        >
          Next
        </Footer>
      </Container>
    );
  }
}

export default AddressWorkScreen;
