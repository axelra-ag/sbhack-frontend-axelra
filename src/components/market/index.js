import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import { Flex } from "../../layout/layout";
import { H2 } from "../../layout/typography";
import styled from "styled-components";
import MarketFlatList from "./MarketFlatList";
import {__COLORS} from "../../layout/colors"

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  background-color: ${__COLORS.SECOND};
`;

const MarketListWrapper = styled(View)`
  margin-top: 50px;
  justify-content: space-around;
`;

export default class MarketTab extends Component {
  state = {
    categories: [
      {
        name: "Flight Tickets",
        data: [
          { name: "Swiss Air Lines", id: 5 },
          { name: "Qatar Airways", id: 1 },
          { name: "Singapore Airlines", id: 2 },
          { name: "ANA All Nippon Airways", id: 3 },
          { name: "Cathay Pacific Airways", id: 4 }
        ]
      },
      {
        name: "Food Delivery",
        data: [
          { name: "Gärtnerei", id: 1 },
          { name: "Desperado", id: 2 },
          { name: "Swiss Chuchi", id: 3 },
          { name: "Zeughauskeller", id: 4 },
          { name: "McDonald’s", id: 5 }
        ]
      },
      {
        name: "Bicycles shops",
        data: [
          { name: "Cycle Store Zurich", id: 1 },
          { name: "Diavelo Switzerland AG", id: 2 },
          { name: "boardlocal bikelocal", id: 3 },
          { name: "Velo Sport+E-Bike ", id: 4 }
        ]
      }
    ]
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <H2>You have 10 coins</H2>
          <MarketListWrapper>
            {this.state.categories.map(category => (
              <MarketFlatList
                key={category.name}
                data={category.data}
                title={category.name}
              />
            ))}
          </MarketListWrapper>
        </ScrollView>
      </Container>
    );
  }
}
