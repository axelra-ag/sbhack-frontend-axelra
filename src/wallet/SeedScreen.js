import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import LottieManager from "./LottieManager";
import LottieAnimation from "../bike-animation.json";
import { BoldText, H3, RegularText } from "../layout/typography";
import { __COLORS } from "../layout/colors";
import { Alert } from "react-native";
import { createAccount, getAccounts, getNetwork } from "../web3/web3";

const Container = styled(Flex)``;

const Body = styled(Flex)`
  justify-content: center;
`;

const First = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Third = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled(RegularText)`
  text-align: center;
  font-size: 30px;
`;

const Data = styled(BoldText)`
  text-align: center;
  color: ${__COLORS.FIRST};
`;

class SeedScreen extends Component {
  state = {
    alert: null,
    network: null
  };
  async componentDidMount() {
    const accounst = await getAccounts();
    console.log(accounst);
    const network = await getNetwork();
    this.setState({ network });
    const newAccount = await createAccount();
    console.log(newAccount);
  }

  render() {
    return (
      <Container>
        <Header title={""} subTitle={""} />
        {this.state.alert}
        <Body flex={1}>
          <First flex={1}>
            <SubTitle style={{ padding: 15, color: __COLORS.FOURTH }}>
              We are creating your Wallet.{" "}
              <SubTitle style={{ color: __COLORS.SECOND }}>
                Please wait.
              </SubTitle>
            </SubTitle>
          </First>
          <Flex flex={1} style={{ zIndex: -1 }}>
            <LottieManager json={LottieAnimation} height={300} />
          </Flex>
          <Third flex={1}>
            <Data>Network detected: {this.state.network}</Data>
          </Third>
        </Body>
      </Container>
    );
  }
}

export default SeedScreen;
