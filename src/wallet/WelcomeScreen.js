import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";

const Container = styled(Flex)``;

const Welcome = () => {
  return (
    <Container>
      <Header
        title={"City-Work Bike"}
        subTitle={"Swiss Blockchain Hackathon 2019 - Axelra Team"}
    />
    </Container>
  );
};
export default Welcome;
