import React from "react";
import { View, FlatList, TouchableWithoutFeedback, Image } from "react-native";
import { H5, Paragraph } from "../../layout/typography";
import ModalInfo from "./ModalInfo";
import styled from "styled-components";
import { Divider } from "react-native-elements";
import { __COLORS } from "../../layout/colors";

const CategoryWrapper = styled(View)`
  height: 150px;
  width: 150px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${__COLORS.THIRD};
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
    const { data, title } = this.props;
    const { isModalOpen, currentItem } = this.state;
    return (
      <>
        <ModalInfo
          visible={isModalOpen}
          handleModal={this.handleModal}
          clickedCompany={currentItem}
        />

        <H5 style={{ textAlign: "center" }}>{title}</H5>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => this.handleModal(item)}>
              <CategoryWrapper id={item.id} style={{ padding: 10 }}>
                <Image
                  source={item.logo}
                  style={{
                    height: 70,
                    width: 70
                  }}
                />
                <CategoryItemName>{item.name}</CategoryItemName>
              </CategoryWrapper>
            </TouchableWithoutFeedback>
          )}
        />
      </>
    );
  }
}
