import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";
import Footer from "./Footer";
import { __COLORS } from "../layout/colors";
import {SCREENS} from "./OnBoardingScreens";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

const PinScreen = ({ navigate }) => {
  return (
    <Container>
      <Header
        title={"Create Wallet"}
        subTitle={"Select a very secure code for accessing your wallet."}
      />
      <Body flex={4} />
      <Footer
        background={__COLORS.SECOND}
        onPress={() => {
          navigate(SCREENS.PIN_CODE);
        }}
      />
    </Container>
  );
};
export default PinScreen;
