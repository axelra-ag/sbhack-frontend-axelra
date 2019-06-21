import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Footer from "./Footer";
import { __COLORS } from "../layout/colors";
import { SCREENS } from "./OnBoardingScreens";
import PinCode from "./PinCode";

const Container = styled(Flex)``;

const Body = styled(Flex)`
  justify-content: center;
`;

const PinScreen = ({ navigate }) => {
  return (
    <Container>
      <Header
        title={"Create Wallet"}
        subTitle={"Select a very secure code for accessing your wallet."}
      />
      <Body flex={4}>
        <PinCode />
      </Body>
      <Footer
        background={__COLORS.THIRD}
        onPress={() => {
          navigate(SCREENS.PIN_CODE);
        }}
      >
        Next
      </Footer>
    </Container>
  );
};
export default PinScreen;
