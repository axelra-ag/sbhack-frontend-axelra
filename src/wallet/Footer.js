import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { H1, H2, RegularText } from "../layout/typography";
import { Button } from "../layout/button";

const Container = styled(View)`
  justify-content: center;
  padding: 15px 30px 0 30px;
`;

const Footer = ({ onPress, background, children, disabled }) => {
  return (
    <Container>
      <Button
        disabled={disabled}
        background={background}
        onPress={() => {
          onPress();
        }}
      >
        {children}
      </Button>
    </Container>
  );
};
export default Footer;
