import React from "react";
import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import styled from "styled-components";

export default props => {
  return (
    <Modal visible={props.visible} animationType="fade" transparent={false}>
      <View style={{ marginTop: 22 }}>
        <View>
          <Text />

          <TouchableWithoutFeedback
            onPress={() => {
              props.handleModal();
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};
