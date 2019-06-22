import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Web3 from "web3";

const Container = styled(Flex)``;

class SeedScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          title={"Wallet"}
          subTitle={"We are initializing your wallet. Be patience please :-)"}
        />
      </Container>
    );
  }
}

export default SeedScreen;
