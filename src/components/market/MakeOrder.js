import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Text,
  Left
} from "native-base";
import { Alert } from "react-native";
import { __COLORS } from "../../layout/colors";

export default class MakeOrder extends Component {
  state = {
    email: "",
    name: "",
    delivery: ""
  };

  handlePress = () => {
    const { email, name, delivery } = this.state;
    if (email && name && delivery) {
      Alert.alert(
        "Confirmation",
        "You have received a confirmation email",
        [
          {
            text: "Got it!",
            onPress: () => {
              this.props.changeStep("first");
              this.props.closeModal();
            }
          }
        ],
        { cancelable: false }
      );
    }
  };

  render() {
    const { changeStep } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent onPress={() => changeStep("first")}>
              <Icon name="arrow-back" style={{ color: __COLORS.THIRD }} />
              <Text style={{ color: __COLORS.THIRD }}>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Delivery address</Label>
              <Input
                value={this.state.delivery}
                onChangeText={text => this.setState({ delivery: text })}
              />
            </Item>
            <Button
              iconRight
              transparent
              bordered
              style={{
                borderColor: __COLORS.THIRD,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20
              }}
              onPress={this.handlePress}
            >
              <Text style={{ color: __COLORS.THIRD }}>Confirm</Text>
              <Icon name="bicycle" style={{ color: __COLORS.THIRD }} />
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
