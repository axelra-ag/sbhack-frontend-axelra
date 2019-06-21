import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";

const Container = styled(Flex)``;

const SeedScreen = () => {
  return (
    <Container>
      <Header title={"Seed Phrase"} />
    </Container>
  );
};
export default SeedScreen;
