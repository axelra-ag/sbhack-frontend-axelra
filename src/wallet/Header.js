import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Flex } from "../layout/layout";
import { H1 } from "../layout/typography";

const Container = styled(View)`
  height: 175px;
  justify-content: center;
`;

const Header = ({ title }) => {
  return (
    <Container>
      <H1>{title}</H1>
    </Container>
  );
};
export default Header;
