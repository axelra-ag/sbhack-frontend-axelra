import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Tab1 from "./src/Tab1";
import Tab2 from "./src/Tab2";
import Tab3 from "./src/Tab3";
import {
  __BOLD_FONT_SOURCE,
  __EXTRABOLD_FONT_SOURCE,
  __FONTS,
  __LIGHT_FONT_SOURCE,
  __REGULAR_FONT_SOURCE,
  __SEMIBOLD_FONT_SOURCE
} from "./src/layout/fonts";

const TabNavigator = createBottomTabNavigator({
  //Tab1: Tab1,
  Tab2: Tab2,
  Tab3: Tab3
});

const Container = createAppContainer(TabNavigator);

class App extends Component {
  state = {
    isLoadingComplete: false
  };
  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        [__FONTS.LIGHT]: __LIGHT_FONT_SOURCE,
        [__FONTS.REGULAR]: __REGULAR_FONT_SOURCE,
        [__FONTS.SEMIBOLD]: __SEMIBOLD_FONT_SOURCE,
        [__FONTS.BOLD]: __BOLD_FONT_SOURCE,
        [__FONTS.EXTRABOLD]: __EXTRABOLD_FONT_SOURCE
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View
          style={{ flex: 1, flexDirection: "column", backgroundColor: "#fff" }}
        >
          <Container />
        </View>
      );
    }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
