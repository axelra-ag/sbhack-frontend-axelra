import React, { Component } from "react";
import { View, ScrollView, SafeAreaView, Animated } from "react-native";
import { Flex } from "../../layout/layout";
import { H2, Paragraph } from "../../layout/typography";
import styled from "styled-components";
import MarketFlatList from "./MarketFlatList";
import { __COLORS } from "../../layout/colors";
import { data } from "./data";
import AnimateNumber from "react-native-animate-number";
import { getTokenBalance } from "../../web3/web3";
import converter from "hex2dec";

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

const MarketListWrapper = styled(View)`
  justify-content: space-around;
`;

const InfoWrapper = styled(View)`
  margin-top: 20px;
`;

export default class MarketTab extends Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    this.setState({ categories: [...data] });
    const a = await getTokenBalance(
      "0x532ecEb65AE833B11738BB805CC7E116bf7cCCf3"
    );
    console.log(a);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Container>
          <ScrollView>
            <InfoWrapper>
              <H2 style={{ textAlign: "center" }}>
                You have{" "}
                <AnimateNumber
                  timing="easeOut"
                  steps={40}
                  interval={16}
                  value={120}
                  formatter={val => {
                    return parseFloat(val).toFixed(0);
                  }}
                />{" "}
                CO2 token
              </H2>
              <Paragraph style={{ textAlign: "center" }}>
                You can spend them on one of the following.
              </Paragraph>
            </InfoWrapper>
            <MarketListWrapper style={{ alignItems: "center" }}>
              {this.state.categories.map(({ name, data, icon }, index) => (
                <MarketFlatList
                  key={name}
                  icon={icon}
                  data={data}
                  title={name}
                  index={index}
                />
              ))}
            </MarketListWrapper>
          </ScrollView>
        </Container>
      </SafeAreaView>
    );
  }
}
