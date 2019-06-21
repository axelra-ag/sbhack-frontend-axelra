import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Flex } from "../../layout/layout";
import { H2, Paragraph } from "../../layout/typography";
import styled from "styled-components";
import MarketFlatList from "./MarketFlatList";
import { __COLORS } from "../../layout/colors";

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

const createID = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
export default class MarketTab extends Component {
  state = {
    categories: [
      {
        name: "Flight Tickets",
        data: [
          {
            name: "Swiss Air Lines",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Qatar Airways",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Singapore Airlines",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "ANA All Nippon Airways",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Cathay Pacific Airways",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ]
      },
      {
        name: "Food Delivery",
        data: [
          {
            name: "Gärtnerei",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Desperado",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Swiss Chuchi",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Zeughauskeller",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "McDonald’s",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ]
      },
      {
        name: "Bicycles shops",
        data: [
          {
            name: "Cycle Store Zurich",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Diavelo Switzerland AG",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "boardlocal bikelocal",
            id: createID(),
            logo: require("../../../assets/market/logo.png"),
            info:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
          {
            name: "Velo Sport+E-Bike ",
            id: createID(),
            logo: require("../../../assets/market/logo.png")
          }
        ]
      }
    ]
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <InfoWrapper>
            <H2 style={{ textAlign: "center" }}>You have 10 tokens</H2>
            <Paragraph style={{ textAlign: "center" }}>You can spend them on one of the following.</Paragraph>
          </InfoWrapper>
          <MarketListWrapper>
            {this.state.categories.map(({ name, data }) => (
              <MarketFlatList key={name} data={data} title={name} />
            ))}
          </MarketListWrapper>
        </ScrollView>
      </Container>
    );
  }
}
