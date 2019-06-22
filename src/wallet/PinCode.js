import React, { Component } from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Number } from "./Number";
import { __COLORS } from "../layout/colors";
import Icon from "react-native-vector-icons/Entypo";
import { Flex } from "../layout/layout";
import { TouchableOpacity } from "react-native";

const Container = styled(View)``;

const Numbers = styled(View)`
  flex-direction: column;
  padding: 0 30px;
`;

const Row = styled(View)`
  margin: 10px;
  flex-direction: row;
  /*background: cornflowerblue;*/
`;

const Labels = styled(View)`
  flex-direction: row;
  flex: 1;
  background: red;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
`;

const Label = styled(View)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background: ${props => props.color || __COLORS.SECOND};
  opacity: ${props => props.opacity};
`;

const LabelContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 30px;
`;

class PinCode extends Component {
  state = {
    code: [-1, -1, -1, -1]
  };

  insertNumber(number) {
    const code = [...this.state.code];

    let firstOccurrenceIndex = code.indexOf(-1);
    if (firstOccurrenceIndex !== -1) {
      // -1 in array
      code[firstOccurrenceIndex] = number;
    }

    if (!code.includes(-1)) {
      this.props.onComplete(code);
    }

    this.setState({ code });
  }

  removeNumber() {
    const code = [...this.state.code];
    let firstOccurrenceIndex = code.indexOf(-1);
    if (firstOccurrenceIndex !== -1) {
      // -1 in array
      code[firstOccurrenceIndex - 1] = -1;
    }

    if (!code.includes(-1)) {
      code[code.length - 1] = -1;
      this.props.onComplete(null);
    }
    this.setState({ code });
  }

  render() {
    return (
      <Container>
        <Labels>
          {this.state.code.map((n, i) => {
            return (
              <LabelContainer key={`code${i}`}>
                <Label
                  size={n === -1 ? 8 : 11}
                  opacity={n === -1 ? 0.5 : 1}
                  color={this.props.color}
                />
              </LabelContainer>
            );
          })}
        </Labels>
        <Numbers>
          <Row>
            {[1, 2, 3].map(n => {
              return (
                <Number
                  number={n}
                  key={n}
                  onPress={number => {
                    this.insertNumber(number);
                  }}
                />
              );
            })}
          </Row>
          <Row>
            {[4, 5, 6].map(n => {
              return (
                <Number
                  number={n}
                  key={n}
                  onPress={number => {
                    this.insertNumber(number);
                  }}
                />
              );
            })}
          </Row>
          <Row>
            {[7, 8, 9].map(n => {
              return (
                <Number
                  number={n}
                  key={n}
                  onPress={number => {
                    this.insertNumber(number);
                  }}
                />
              );
            })}
          </Row>
          <Row>
            <Flex flex={1} />
            <Number
              number={0}
              key={0}
              onPress={number => {
                this.insertNumber(number);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                this.removeNumber();
              }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon name={"erase"} size={32} color={__COLORS.FIRST} />
            </TouchableOpacity>
          </Row>
        </Numbers>
      </Container>
    );
  }
}

export default PinCode;
