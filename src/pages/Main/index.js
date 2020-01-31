import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, SubmitButton, Form, Input } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Insira seu usuário"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
