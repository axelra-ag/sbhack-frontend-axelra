import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Footer from "./Footer";
import {SCREENS} from "./OnBoardingScreens";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

const PinConfirm = ({navigate}) => {
  return (
    <Container>
      <Header title={"Confirm your Pin"} />
      <Body flex={4} />
      <Footer
        onPress={() => {
          navigate(SCREENS.PIN_CODE);
        }}
      />
    </Container>
  );
};
export default PinConfirm;
