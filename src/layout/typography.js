import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { __FONTS } from "./fonts";
import { __COLORS } from "./colors";

const defaultColor = __COLORS.FIRST;

const Heading = styled(Text)`
  font-family: ${__FONTS.BOLD};
  color: ${props => props.color || defaultColor};
  margin: 10px 0;
`;

export const H1 = styled(Heading)`
  font-size: 36px;
`;

export const H2 = styled(Heading)`
  font-size: 30px;
`;

export const H3 = styled(Heading)`
  font-size: 28px;
`;

export const H4 = styled(Heading)`
  font-size: 22px;
`;

export const H5 = styled(Heading)`
  font-size: 18px;
`;

export const Paragraph = styled(Text)`
  font-size: 18px;
  font-family: ${__FONTS.LIGHT};
  margin: 10px 0;
`;

export const LightText = styled(Text)`
  font-family: ${__FONTS.LIGHT};
`;

export const RegularText = styled(Text)`
  font-family: ${__FONTS.REGULAR};
`;

export const SemiBoldText = styled(Text)`
  font-family: ${__FONTS.SEMIBOLD};
`;

export const BoldText = styled(Text)`
  font-family: ${__FONTS.BOLD};
`;

export const ExtraBoldText = styled(Text)`
  font-family: ${__FONTS.EXTRABOLD};
`;
