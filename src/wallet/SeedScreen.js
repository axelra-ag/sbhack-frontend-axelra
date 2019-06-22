import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import Web3 from "web3";

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://kovan.infura.io/v3/344e9e84c0804cd5a15f4dd4b9b49a1e')
);

web3.eth.getBlockNumber().then(console.log)

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
