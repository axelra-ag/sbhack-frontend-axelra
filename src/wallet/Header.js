import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1, RegularText } from "../layout/typography";
import { __COLORS, __GRAY_SCALE } from "../layout/colors";
import { SafeAreaView } from "react-native";

const Container = styled(View)`
  justify-content: center;
  padding: 15px 30px 0 30px;
`;

const SubTitle = styled(RegularText)`
  font-size: 18px;
  color: ${__GRAY_SCALE._600};
  margin-top: -8px;
`;

const Header = ({ title, subTitle }) => {
  return (
    <SafeAreaView>
      <Container>
        <H1>{title}</H1>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    </SafeAreaView>
  );
};
export default Header;
