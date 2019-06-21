import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Tab1 from './src/Tab1';
import Tab2 from './src/Tab2';
import Tab3 from './src/Tab3';

const TabNavigator = createBottomTabNavigator({
  //Tab1: Tab1,
  Tab2: Tab2,
  Tab3: Tab3
})

const Container = createAppContainer(TabNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Container />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
