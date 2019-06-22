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
import { Icon } from "native-base";
import styled from "styled-components";
import { H3, Paragraph, H4, H5 } from "../../layout/typography";
import { __COLORS } from "../../layout/colors";
import MakeOrder from "./MakeOrder";

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
        dataSource: this.props.clickedCompany.options,
        fullPrice: 0
      });
    }
  }

  renderItem = ({ item, index }, isLast) => {
    return (
      <TouchableOpacity
        style={[
          styles.list,
          item.isSelected ? styles.selected : {},
          index === 0 && styles.firstList,
          isLast && styles.lastList
        ]}
        onPress={() => this.selectItem(item)}
      >
        <Icon name={this.props.icon} style={{ color: "#fff" }} />
        <H5 style={{color: "#fff", marginLeft: 10}}>{item.name}</H5>
      </TouchableOpacity>
    );
  };

  selectItem = itemSel => {
    this.setState(
      {
        dataSource: this.state.dataSource.map(item => {
          return item.id === itemSel.id
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
    const { step, dataSource, fullPrice } = this.state;
    return (
      <Modal visible={visible} animationType="fade" transparent={false}>
        {step === "first" && (
          <ModalWrapper style={{ marginTop: 22 }}>
            <Image style={{ width: 100, height: 100 }} source={logo} />
            <Paragraph>{info}</Paragraph>
            <H4>Available Options</H4>
            <ScrollView style={styles.flatList}>
              <FlatList
                data={dataSource}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={item =>
                  this.renderItem(item, item.index === dataSource.length - 1)
                }
                keyExtractor={item => item.name.toString()}
              />
            </ScrollView>
            <ButtonWrapper>
              <TouchableWithoutFeedback
                onPress={() => {
                  handleModal();
                }}
              >
                <H5>Cancel</H5>
              </TouchableWithoutFeedback>

              {fullPrice !== 0 && <H5>Price: {fullPrice}</H5>}

              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: __COLORS.THIRD,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderRadius: 10
                }}
                onPress={() => this.changeStep("second")}
              >
                <H5 style={{color: "#fff"}}>Make order</H5>
              </TouchableOpacity>
            </ButtonWrapper>
          </ModalWrapper>
        )}
        {step === "second" && (
          <MakeOrder
            closeModal={handleModal}
            changeStep={this.changeStep}
          />
        )}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
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
  },
  firstList: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  lastList: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  }
});
