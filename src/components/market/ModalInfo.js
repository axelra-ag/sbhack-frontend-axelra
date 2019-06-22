import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView
} from "react-native";
import styled from "styled-components";
import { H3, Paragraph, H4 } from "../../layout/typography";
import { __COLORS } from "../../layout/colors";

const ModalWrapper = styled(View)`
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled(View)`
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export default class ModalInfo extends Component {
  state = {
    step: "first",
    dataSource: [],
    chosenData: [],
    fullPrice: 0
  };

  changeStep = step => {
    this.setState({ step });
  };

  FlatListItemSeparator = () => <View style={styles.line} />;

  componentDidUpdate(prevProps) {
    if (prevProps.clickedCompany.id !== this.props.clickedCompany.id) {
      this.setState({
        dataSource: this.props.clickedCompany.options
      });
    }
  }

  renderItem = data => {
    return (
      <TouchableOpacity
        style={[styles.list, data.item.isSelected ? styles.selected : {}]}
        onPress={() => this.selectItem(data)}
      >
        <Image
          source={require("../../../assets/market/logo.png")}
          style={{ width: 40, height: 40, margin: 6 }}
        />
        <Text style={styles.lightText}>{data.item.name}</Text>
      </TouchableOpacity>
    );
  };

  selectItem = data => {
    this.setState(
      {
        dataSource: this.state.dataSource.map(item => {
          return item.id === data.item.id
            ? { ...item, isSelected: !item.isSelected }
            : item;
        })
      },
      () => {
        const fullPrice = this.state.dataSource
          .filter(item => item.isSelected)
          .reduce((acc, item) => acc + parseInt(item.price), 0);
        this.setState({
          fullPrice
        });
      }
    );
  };

  render() {
    const {
      visible,
      handleModal,
      clickedCompany: { name, logo, info }
    } = this.props;
    return (
      <Modal visible={visible} animationType="fade" transparent={false}>
        <ModalWrapper style={{ marginTop: 22 }}>
          <H3>{name}</H3>
          <Image style={{ width: 100, height: 100 }} source={logo} />
          <Paragraph>{info}</Paragraph>
          <H4>Available Options</H4>
          <ScrollView style={styles.flatList}>
            <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={item => this.renderItem(item)}
              keyExtractor={item => item.name.toString()}
            />
          </ScrollView>
          <ButtonWrapper>
            <TouchableWithoutFeedback
              onPress={() => {
                handleModal();
              }}
            >
              <Text>Cancel</Text>
            </TouchableWithoutFeedback>

            {this.state.fullPrice !== 0 && <Text>Price: {this.state.fullPrice}</Text>}

            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: __COLORS.SECOND,
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 15
              }}
              onPress={() => this.changeStep("second")}
            >
              <Text>Make order</Text>
            </TouchableOpacity>
          </ButtonWrapper>
        </ModalWrapper>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "row",
    backgroundColor: __COLORS.SECOND,
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: -1
  },
  line: {
    height: 0.5,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  selected: { backgroundColor: __COLORS.THIRD },
  flatList: {
    maxHeight: "40%",
    width: "100%"
  }
});
