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

class Unlock extends Component {

  _storeCode = async () => {
    try {
      await AsyncStorage.setItem("code", JSON.stringify(this.props.secondCode));
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    let { navigate } = this.props;
    return (
      <Container>
        <Header
          title={"Unlock Wallet"}
          subTitle={"Type your secure code for accessing your wallet."}
        />
        <Body flex={4}>
          <PinCode
            onComplete={code => {
              this.props.onFirstCode(code);
            }}
          />
        </Body>
        <Footer
          disabled={!this.props.firstCode}
          background={__COLORS.THIRD}
          onPress={() => {
            this._storeCode();
            navigate(SCREENS.SEED);
          }}
        >
          Unlock Wallet
        </Footer>
      </Container>
    );
  }
}

export default Unlock;
