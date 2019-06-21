import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { LightText, RegularText } from "../layout/typography";
import { __COLORS, __GRAY_SCALE } from "../layout/colors";
import { TouchableOpacity } from "react-native";

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const SIZE = 75;

const Ball = styled(TouchableOpacity)`
  background: ${__GRAY_SCALE._200};
  border-radius: ${SIZE / 2}px;
  padding: 15px;
  width: ${SIZE}px;
  height: ${SIZE}px;
  justify-content: center;
  align-content: center;
`;

const Text = styled(LightText)`
  font-size: 30px;
  text-align: center;
  color: ${__COLORS.FIRST};
`;

export const Number = ({ number, onPress }) => {
  return (
    <Container>
      <Ball
        onPress={() => {
          onPress(number);
        }}
      >
        <Text>{number}</Text>
      </Ball>
    </Container>
  );
};
