import React from "react";
import { View, Text, FlatList } from "react-native";
import { H5, Paragraph } from "../../layout/typography";
import styled from "styled-components";
import { __COLORS } from "../../layout/colors";

const CategoryWrapper = styled(View)`
  height: 150px;
  width: 150px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${__COLORS.THIRD};
  margin: 10px;
  border-radius: 5px;
`;

const CategoryItemName = styled(Paragraph)`
  font-size: 15px;
`;

export default ({ data, title }) => (
  <>
    <H5 style={{ textAlign: "center" }}>{title}</H5>
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <CategoryWrapper style={{ padding: 10 }}>
          <View
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#626262",
              height: 50,
              width: 50
            }}
          />
          <CategoryItemName>{item.name}</CategoryItemName>
        </CategoryWrapper>
      )}
    />
  </>
);
