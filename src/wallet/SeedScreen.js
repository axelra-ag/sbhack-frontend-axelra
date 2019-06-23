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
  getNetwork,
  unlockAccount
} from "../web3/web3";
import { AsyncStorage, View } from "react-native";
import QRCode from "react-native-qrcode";
import { Share } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "../layout/button";
import { SCREENS } from "./OnBoardingScreens";
import {sendEther} from "../web3/web3.js";

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
    /*this.props.accountExist ? await this.unlockAccount() : await this.createMyAccount();*/
    this.createMyAccount();
    const balance = await getBalance(this.state.address);
    await sendEther(this.state.address);
    console.log("With this balance ", balance);
    const code = await AsyncStorage.getItem("code");
    this.setState({ code });
  }

  async createMyAccount() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const newAccount = await createAccount(String(this.state.code));
    console.log("Create a new account ", newAccount);
    await AsyncStorage.setItem("account", newAccount);
    this.setState({ address: newAccount });
  }

  async unlockAccount() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const address = await AsyncStorage.getItem("account");
    const isAccountUnlocked = await unlockAccount(
      address,
      String(this.state.code),
      9000
    );
    console.log("Unlock an new account ", isAccountUnlocked);
    this.setState({ address });
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
        <Body flex={1}>
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
            <Third flex={2}>
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
                icon={
                  <Icon
                    name="download"
                    size={24}
                    color={__COLORS.WHITE}
                    style={{ marginLeft: "auto" }}
                  />
                }
                onPress={() => {
                  this.onShare();
                }}
              >
                Backup your Wallet.
              </Button>

              <Button
                style={{ marginTop: -5 }}
                background={__COLORS.FOURTH}
                onPress={() => {
                  this.props.navigate(SCREENS.ADDRESS);
                }}
              >
                Continue
              </Button>
            </Third>
          )}
        </Body>
      </Container>
    );
  }
}

export default SeedScreen;
