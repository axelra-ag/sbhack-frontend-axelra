import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Footer from "./Footer";
import { SCREENS } from "./OnBoardingScreens";
import PinCode from "./PinCode";
import { __COLORS } from "../layout/colors";
import * as PropTypes from "prop-types";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

class PinConfirm extends Component {
  compare() {
    if (this.props.secondCode) {
      let flag = true;
      this.props.firstCode.forEach((f, i) => {
        if (f !== this.props.secondCode[i]) {
          flag = false;
        }
      });
      return flag;
    }
    return false;
  }
  render() {
    let { navigate } = this.props;

    return (
      <Container>
        <Header
          title={"Confirm your Pin"}
          subTitle={
            "Make sure that the pin code is the same. Maybe use a hash? "
          }
        />
        <Body flex={4}>
          <PinCode
            onComplete={code => {
              this.props.onSecondCode(code);
            }}
            color={__COLORS.FOURTH}
          />
        </Body>
        <Footer
          disabled={!this.compare()}
          background={__COLORS.FIRST}
          onPress={() => {
            navigate(SCREENS.PIN_CODE);
          }}
        >
          Create Wallet
        </Footer>
      </Container>
    );
  }
}

PinConfirm.propTypes = { navigate: PropTypes.any };
export default PinConfirm;
