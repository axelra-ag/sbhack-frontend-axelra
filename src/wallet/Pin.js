import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";
import Footer from "./Footer";
import { SCREENS } from "./OnBoarding";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

const PinScreen = ({ navigate }) => {
  return (
    <Container>
      <Header
        title={"PIN CODE"}
        subTitle={"This has to be really secure. Maybe a hash?"}
      />
      <Body flex={4} />
      <Footer
        onPress={() => {
          navigate(SCREENS.PIN_CODE);
        }}
      />
    </Container>
  );
};
export default PinScreen;
