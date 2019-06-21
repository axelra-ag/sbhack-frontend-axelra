import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import styled from "styled-components";
import { H3, Paragraph } from "../../layout/typography";
import { __COLORS } from "../../layout/colors";
import { Flex } from "../../layout/layout";

const ModalWrapper = styled(View)`
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center
`
export default class ModalInfo extends Component {
  state = {
    step: "first"
  };

  changeStep = step => {
    this.setState({ step });
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
          <ButtonWrapper>
            <TouchableWithoutFeedback
              onPress={() => {
                handleModal();
              }}
            >
              <Text>Cancel</Text>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: __COLORS.SECOND,
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 25,
                paddingRight: 25,
                borderRadius: 20
              }}
              onPress={() => this.changeStep("second")}
            >
              <Text> Order </Text>
            </TouchableOpacity>
          </ButtonWrapper>
        </ModalWrapper>
      </Modal>
    );
  }
}
