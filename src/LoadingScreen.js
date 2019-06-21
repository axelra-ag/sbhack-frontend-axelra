import React from "react";
import styled from "styled-components";
import { Flex } from "./layout/layout";
import { ActivityIndicator } from "react-native";
import { __COLORS } from "./layout/colors";

const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const LoadingScreen = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={__COLORS.SECOND} />
    </Container>
  );
};
