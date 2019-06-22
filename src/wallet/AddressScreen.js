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

const Container = styled(Flex)``;

const ArrowContainer = styled(Flex)``;

const Body = styled(Flex)`
  justify-content: center;
`;

class AddressScreen extends Component {
  state = {
    homeAddress: null,
    workAddress: null,
    homeAddressClosestStation: null,
    workAddressClosestStation: null
  };

  fetchClosestStation(address) {
    fetch(
      `http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com/maps/get-closest-station`,
      {
        method: "POST",
        body: JSON.stringify({ address }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        return response.result;
      })
      .catch(error => console.log);
  }
  render() {
    let { navigate } = this.props;
    return (
      <Container>
        <Header
          title={"Setup your Challenge"}
          subTitle={"Tell us where do you work and where do you live."}
        />
        <Body flex={4}>
          <Flex flex={1}>
            <MyGoogleInputField
              placeholder={"Enter your home address.."}
              returnKeyType={"next"}
              label={"Home"}
              prediction={this.state.homeAddress}
              setAddress={async homeAddress => {
                this.setState({ homeAddress });
                let homeAddressClosestStation;
                if (homeAddress) {
                  homeAddressClosestStation = await this.fetchClosestStation(
                    homeAddress
                  );
                }
                this.setState({ homeAddressClosestStation });
              }}
            />
          </Flex>
          <Flex flex={1}>
            <MyGoogleInputField
              placeholder={"Enter your work address.."}
              returnKeyType={"send"}
              label={"Work"}
              prediction={this.state.workAddress}
              setAddress={async workAddress => {
                this.setState({ workAddress });
                let workAddressClosestStation;
                if (workAddressClosestStation) {
                  workAddressClosestStation = await this.fetchClosestStation(
                    workAddress
                  );
                }
                this.setState({ workAddressClosestStation });
              }}
            />
          </Flex>
        </Body>
        <Footer
          disabled={!this.props.firstCode}
          background={__COLORS.FIRST}
          onPress={() => {
            navigate(SCREENS.PIN_CODE_CONFIRM);
          }}
        >
          Next
        </Footer>
      </Container>
    );
  }
}

export default AddressScreen;
