import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { __COLORS, __GRAY_SCALE } from "./colors";
import { BoldText, RegularText } from "./typography";
import Icon from "react-native-vector-icons/Ionicons";

export const Container = styled(TouchableOpacity)`
  padding: 20px;
  border-radius: 6px;
  margin: 20px;
  background: ${props => props.background || __COLORS.SECOND};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled(BoldText)`
  color: ${__COLORS.WHITE};
  text-align: center;
  font-size: 18px;
  margin-left: auto;
  margin-right: -5px;
`;

export const Button = ({ background, children, onPress }) => {
  return (
    <Container
      background={background}
      onPress={() => {
        onPress();
      }}
    >
      <Text>{children}</Text>
      <Icon
        name={"ios-arrow-round-forward"}
        size={30}
        color={__COLORS.WHITE}
        style={{ marginBottom: -2, marginLeft: "auto" }}
      />
    </Container>
  );
};
