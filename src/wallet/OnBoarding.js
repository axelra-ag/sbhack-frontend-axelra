import React from "react";
import { View, AsyncStorage } from "react-native";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import PinScreen from "./Pin";
import Unlock from "./Unlock";

import DownloadKeyStoreScreen from "./DownloadKeyStoreScreen";
import Welcome from "./WelcomeScreen";
import SeedScreen from "./SeedScreen";
import PinConfirm from "./PinConfirm";
import { LoadingScreen } from "../LoadingScreen";

import { SCREENS } from "./OnBoardingScreens";
import AddressScreen from "./AddressScreen";
import { getBalance } from "../web3/web3";
import AddressWorkScreen from "./AddressWorkScreen";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

class OnBoarding extends React.Component {
  state = {
    currentScreen: null,
    firstCode: null,
    secondCode: null,
    accountExist: false
  };

  async componentDidMount() {
    this.setState({ currentScreen: SCREENS.WELCOME });
    const localUser = await AsyncStorage.getItem("account");
    try {
      await getBalance(localUser);
      await this.setState({ accountExist: true });
    } catch (e) {
      this.setState({ accountExist: false });
      console.log("User doesnt exist");
    }
  }

  renderScreen() {
    switch (this.state.currentScreen) {
      case SCREENS.PIN_CODE:
        return (
          <PinScreen
            onFirstCode={firstCode => {
              this.setState({ firstCode });
            }}
            firstCode={this.state.firstCode}
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      case SCREENS.PIN_CODE_CONFIRM:
        return (
          <PinConfirm
            onSecondCode={secondCode => {
              this.setState({ secondCode });
            }}
            firstCode={this.state.firstCode}
            secondCode={this.state.secondCode}
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      case SCREENS.UNLOCK:
        return (
          <Unlock
            onFirstCode={firstCode => {
              this.setState({ firstCode });
            }}
            firstCode={this.state.firstCode}
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      case SCREENS.DOWNLOAD_KEYSTORE_FILE:
        return <DownloadKeyStoreScreen />;
      case SCREENS.WELCOME:
        return (
          <Welcome
            accountExist={this.state.accountExist}
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      case SCREENS.SEED:
        return (
          <SeedScreen
            accountExist={this.state.accountExist}
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );
      case SCREENS.ADDRESS:
        return (
          <AddressScreen
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      case SCREENS.ADDRESS_WORK:
        return (
          <AddressWorkScreen
            navigate={currentScreen => {
              this.setState({ currentScreen });
            }}
          />
        );

      default:
        return <LoadingScreen />;
    }
  }

  render() {
    return <Container flex={1}>{this.renderScreen()}</Container>;
  }
}

export default OnBoarding;
