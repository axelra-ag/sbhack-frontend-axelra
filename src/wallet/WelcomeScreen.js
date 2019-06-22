import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1, H2 } from "../layout/typography";
import Header from "./Header";
import Footer from "./Footer";

import LottieManager from "./LottieManager";
import { SCREENS } from "./OnBoardingScreens";

const Container = styled(Flex)``;

const Body = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const Welcome = ({ navigate }) => {
  return (
    <Container flex={1}>
      <Header
        title={"Bike to Work"}
        subTitle={"Swiss Blockchain Hackathon 2019 - Axelra Team"}
      />
      <Body flex={4}>
        <LottieManager
          url={
            "https://assets7.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"
          }
        />
      </Body>
      <Footer
        onPress={() => {
          navigate(SCREENS.PIN_CODE);
        }}
      >
        Get Started
      </Footer>
    </Container>
  );
};
export default Welcome;
