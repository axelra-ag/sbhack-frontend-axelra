import React, { Component } from "react";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import Header from "./Header";
import LottieManager from "./LottieManager";
import LottieAnimation from "../bike-animation.json";
import { BoldText, H3, Paragraph, RegularText } from "../layout/typography";
import { __COLORS, __GRAY_SCALE } from "../layout/colors";

import {
  createAccount,
  getAccounts,
  getBalance,
  getNetwork
} from "../web3/web3";
import { AsyncStorage, View } from "react-native";
import QRCode from "react-native-qrcode";
import { Share } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "../layout/button";

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
  justify-content: flex-start;
`;

const SubTitle = styled(RegularText)`
  text-align: center;
  font-size: 34px;
  line-height: 40px;
  margin: 0 0 15px 0;
`;

const Bike = styled(Flex)`
  justify-content: flex-start;
`;

const Data = styled(BoldText)`
  text-align: center;
  color: ${__COLORS.FIRST};
  margin: 10px 0;
`;

class SeedScreen extends Component {
  state = {
    alert: null,
    network: null,
    address: null,
    qrCode: "",
    code: null
  };

  async componentDidMount() {
    const network = await getNetwork();
    this.setState({ network });
    await this.createMyAccount();
    const code = await AsyncStorage.getItem("code");
    this.setState({ code });
  }

  async createMyAccount() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const newAccount = await createAccount(String(this.state.code));
    this.setState({ address: newAccount });
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: `My address: ${this.state.address}.\nMy access code: ${
          this.state.code
        }.\nNetwork used: ${this.state.network}.\n`,
        title: "Your Wallet"
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <Container>
        {this.state.alert}
        <Body flex={5}>
          <First flex={1}>
            <SubTitle style={{ padding: 15, color: __COLORS.FOURTH }}>
              {this.state.address
                ? "Backup your Wallet. "
                : "We are creating your Wallet. "}
              <SubTitle style={{ color: __COLORS.SECOND }}>
                {this.state.address ? "Press below." : "Please Wait. "}
              </SubTitle>
            </SubTitle>
          </First>
          {!this.state.address && (
            <Bike flex={1}>
              <LottieManager
                json={LottieAnimation}
                height={280}
                width={30}
                style={{
                  marginTop: -50,
                  zIndex: -450000,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              />
            </Bike>
          )}

          {this.state.address && (
            <Third flex={1}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <QRCode
                  value={this.state.address}
                  size={150}
                  bgColor={__COLORS.FIRST}
                  fgColor="white"
                />
              </View>

              <Data>Network detected: {this.state.network}</Data>
              <Button
                onPress={() => {
                  this.onShare();
                }}
              >
                Backup your Wallet.
              </Button>
            </Third>
          )}
        </Body>
        <Flex flex={1} />
      </Container>
    );
  }
}

export default SeedScreen;
