import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Footer from "./Footer";
import { SCREENS } from "./OnBoardingScreens";
import PinCode from "./PinCode";
import { __COLORS } from "../layout/colors";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

const PinConfirm = ({ navigate }) => {
  return (
    <Container>
      <Header
        title={"Confirm your Pin"}
        subTitle={"Make sure that the pin code is the same."}
      />
      <Body flex={4}>
        <PinCode onComplete={() => {}} />
      </Body>
      <Footer
        background={__COLORS.FIRST}
        onPress={() => {
          navigate(SCREENS.PIN_CODE);
        }}
      >
        Create Wallet
      </Footer>
    </Container>
  );
};
export default PinConfirm;
