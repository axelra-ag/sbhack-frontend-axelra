import React, { Component } from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Number } from "./Number";

const Container = styled(View)``;

const Numbers = styled(View)`
  flex-direction: column;
  padding: 0 30px;
`;

const Row = styled(View)`
  margin: 10px;
  flex-direction: row;
`;

class PinCode extends Component {
  render() {
    return (
      <Container>
        <Numbers>
          <Row>
            {[1, 2, 3].map(n => {
              return <Number number={n} key={n} onPress={number => {}} />;
            })}
          </Row>
          <Row>
            {[4, 5, 6].map(n => {
              return <Number number={n} key={n} onPress={number => {}} />;
            })}
          </Row>
          <Row>
            {[7, 8, 9].map(n => {
              return <Number number={n} key={n} onPress={number => {}} />;
            })}
          </Row>
          <Row>
            <Number number={0} key={0} onPress={number => {}} />
          </Row>
        </Numbers>
      </Container>
    );
  }
}

export default PinCode;
