import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Footer from "./Footer";
import { __COLORS } from "../layout/colors";
import { SCREENS } from "./OnBoardingScreens";


const Container = styled(Flex)``;

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
        <Body flex={4} />
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
