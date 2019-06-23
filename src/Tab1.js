import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Flex } from "./layout/layout";
import { StyleExample } from "./StyleExample";
import OnBoarding from "./wallet/OnBoarding";

const MyView = styled(Flex)``;

export default ({ goToApp }) => {
  return (
    <MyView flex={1}>
      <OnBoarding
        goToApp={() => {
          goToApp();
        }}
      />
    </MyView>
  );
};
