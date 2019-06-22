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
import { H4 } from "../layout/typography";

const Container = styled(Flex)``;

const ArrowContainer = styled(Flex)``;

const Body = styled(Flex)`
  justify-content: center;
`;

class AddressScreen extends Component {
  render() {
    let { navigate } = this.props;
    return (
      <Container>
        <Header
          title={"Setup your Challenge"}
          subTitle={"Tell us where do you work and where do you live."}
        />
        <Body flex={4}>
          <MyGoogleInputField
            placeholder={"Enter your home address.."}
            returnKeyType={"next"}
            label={"Home"}
          />

          <MyGoogleInputField
            placeholder={"Enter your work address.."}
            returnKeyType={"send"}
            label={"Work"}
          />
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
