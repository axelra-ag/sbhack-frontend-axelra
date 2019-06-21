import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Flex } from "./layout/layout";
import { H1, H2, H3, H4, H5, Paragraph } from "./layout/typography";
import { __COLORS } from "./layout/colors";

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

const Scale = styled(View)`
  flex-direction: row;
  min-height: 80px;
`;

const Box = styled(View)`
  background-color: ${props => props.color};
  flex: 1;
`;

export const StyleExample = () => {
  return (
    <Container flex={1}>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <Paragraph>This is a paragraph</Paragraph>
      <Scale>
        <Box color={__COLORS.FIRST} />
        <Box color={__COLORS.SECOND} />
        <Box color={__COLORS.THIRD} />
        <Box color={__COLORS.FOURTH} />
      </Scale>
    </Container>
  );
};
