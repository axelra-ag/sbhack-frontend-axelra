import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1, H2 } from "../layout/typography";
import Header from "./Header";
import Footer from "./Footer";
import { SCREENS } from "./OnBoarding";
import { __COLORS } from "../layout/colors";

const Container = styled(Flex)``;

const Body = styled(Flex)`
  background: ${__COLORS.FOURTH};
`;

const Welcome = ({ navigate }) => {
  return (
    <Container flex={1}>
      <Header
        title={"City-Work Bike"}
        subTitle={"Swiss Blockchain Hackathon 2019 - Axelra Team"}
      />
      <Body flex={4}>
        <H2>Body</H2>
      </Body>
      <Footer
        onPress={() => {
          navigate(SCREENS.PIN_CODE);
        }}
      />
    </Container>
  );
};
export default Welcome;
