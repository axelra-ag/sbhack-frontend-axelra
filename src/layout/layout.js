import { View } from "react-native";
import styled from "styled-components";

export const Flex = styled(View)`
  flex: ${props => props.flex};
  flex-direction: ${props => props.direction || "column"};
`;
