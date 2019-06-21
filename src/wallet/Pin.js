import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Footer from "./Footer";
import { __COLORS } from "../layout/colors";
import { SCREENS } from "./OnBoardingScreens";
import PinCode from "./PinCode";
import * as PropTypes from "prop-types";

const Container = styled(Flex)``;

const Body = styled(Flex)`
  justify-content: center;
`;

class PinScreen extends Component {
  state = {
    code: null
  };
  render() {
    let { navigate } = this.props;
    return (
      <Container>
        <Header
          title={"Create Wallet"}
          subTitle={"Select a very secure code for accessing your wallet."}
        />
        <Body flex={4}>
          <PinCode
            onComplete={code => {
              this.setState({ code });
            }}
          />
        </Body>
        <Footer
          disabled={!this.state.code}
          background={__COLORS.THIRD}
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

PinScreen.propTypes = { navigate: PropTypes.any };
export default PinScreen;
