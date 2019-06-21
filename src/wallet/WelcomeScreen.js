import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";

const Container = styled(Flex)``;

const Welcome = () => {
  return (
    <Container>
      <Header title={"Welcome"} />
    </Container>
  );
};
export default Welcome;
