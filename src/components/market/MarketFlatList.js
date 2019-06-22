import React from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";

import { H5, Paragraph } from "../../layout/typography";
import ModalInfo from "./ModalInfo";
import styled from "styled-components";
import { __COLORS } from "../../layout/colors";

const CategoryWrapper = styled(View)`
  height: 150px;
  width: 150px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => {
    switch (props.color) {
      case 0:
        return __COLORS.SECOND;
      case 1:
        return __COLORS.THIRD;
      case 2:
        return __COLORS.FOURTH;
      default:
        return "#fff";
    }
  }};
  margin: 10px;
  border-radius: 5px;
`;

const CategoryItemName = styled(Paragraph)`
  font-size: 15px;
  text-align: center;
`;

export default class MarketFlatList extends React.Component {
  state = {
    isModalOpen: false,
    currentItem: {}
  };

  handleModal = item => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      currentItem: item ? item : {}
    });
  };

  render() {
    const { data, title, icon } = this.props;
    const { isModalOpen, currentItem } = this.state;
    return (
      <>
        <ModalInfo
          visible={isModalOpen}
          handleModal={this.handleModal}
          clickedCompany={currentItem}
          icon={icon}
        />

        <H5 style={{ textAlign: "center" }}>{title}</H5>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => this.handleModal(item)}>
              <CategoryWrapper
                id={item.id}
                shadowColor={__COLORS.SECOND}
                shadowOffset={{
                  width: 2,
                  height: 2
                }}
                shadowOpacity={0.15}
                shadowRadius={2}
                style={{
                  borderWidth: 0.3,
                  borderColor: __COLORS.SECOND,
                  padding: 2
                }}
              >
                <ImageBackground
                  source={item.logo}
                  style={{
                    height: "100%",
                    width: "100%"
                  }}
                />
              </CategoryWrapper>
            </TouchableWithoutFeedback>
          )}
        />
      </>
    );
  }
}
