import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Flex } from "./layout/layout";
import { StyleExample } from "./StyleExample";

const MyView = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <MyView flex={1}>
      <StyleExample />
    </MyView>
  );
};
