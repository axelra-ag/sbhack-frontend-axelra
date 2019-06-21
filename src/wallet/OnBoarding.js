import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";
import PinScreen from "./Pin";
import { ActivityIndicator } from "react-native";
import DownloadKeyStoreScreen from "./DownloadKeyStoreScreen";
import Welcome from "./WelcomeScreen";
import SeedScreen from "./SeedScreen";
import PinConfirm from "./PinConfirm";
import { LoadingScreen } from "../LoadingScreen";
import Footer from "./Footer";

const Container = styled(Flex)``;

const Body = styled(Flex)``;

export const SCREENS = {
  WELCOME: "WELCOME",
  PIN_CODE: "PIN_CODE",
  PIN_CODE_CONFIRM: "PIN_CODE_CONFIRM",
  DOWNLOAD_KEYSTORE_FILE: "DOWNLOAD_KEYSTORE_FILE",
  SEED: "SEED"
};

class OnBoarding extends React.Component {
  state = {
    currentScreen: null
  };

  componentDidMount() {
    this.setState({ currentScreen: SCREENS.WELCOME });
  }

  renderScreen() {
    switch (this.state.currentScreen) {
      case SCREENS.PIN_CODE:
        return <PinScreen />;

      case SCREENS.DOWNLOAD_KEYSTORE_FILE:
        return <DownloadKeyStoreScreen />;
      case SCREENS.WELCOME:
        return <Welcome />;

      case SCREENS.SEED:
        return <SeedScreen />;

      case SCREENS.PIN_CODE_CONFIRM:
        return <PinConfirm />;
      default:
        return <LoadingScreen />;
    }
  }

  render() {
    return (
      <Container flex={1}>
        <Body flex={4}>{this.renderScreen()}</Body>
        <Footer flex={1} />
      </Container>
    );
  }
}
export default OnBoarding;
