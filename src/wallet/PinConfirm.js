import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";
import Footer from "./Footer";
import { SCREENS } from "./OnBoarding";

const Container = styled(Flex)``;

const PinConfirm = () => {
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
