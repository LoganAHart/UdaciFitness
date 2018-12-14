import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`;

const WelcomeText = styled.Text`
  color: white;
`;

const WelcomeBtn = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  margin: 5px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

class StyledComponents extends Component {
  render() {
    return (
      <CenterView>
        <WelcomeText>Hello! This is using styled-components</WelcomeText>
        <WelcomeBtn onPress={() => alert('Hello again!')}>
          <WelcomeText>Push Me!</WelcomeText>
        </WelcomeBtn>
      </CenterView>
    );
  }
}

export default StyledComponents;
