import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { __COLORS, __GRAY_SCALE } from "./colors";
import { BoldText, RegularText } from "./typography";

export const Container = styled(TouchableOpacity)`
  padding: 20px;
  border-radius: 6px;
  margin: 20px;
  background: ${props => props.background || __COLORS.SECOND};
`;

const Text = styled(BoldText)`
  color: ${__COLORS.WHITE};
  text-align: center;
  font-size: 18px;
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
    </Container>
  );
};
