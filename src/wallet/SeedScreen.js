import React from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import Header from "./Header";

const Container = styled(Flex)``;

const SeedScreen = () => {
  return (
    <Container>
      <Header
        title={"Wallet"}
        subTitle={"We are initializing your wallet. Be patience please :)"}
      />
    </Container>
  );
};
export default SeedScreen;
