import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';

import App from '../App';

const mockAxios = jest.spyOn(axios, 'get');
const mockAxiosPost = jest.spyOn(axios, 'post');
const mockAxiosPut = jest.spyOn(axios, 'put');
const mockAxiosDelete = jest.spyOn(axios, 'delete');

const TestComponent = () => {
  return (
    <View style={styles.container}>
      <Button
        title="GET"
        onPress={getData}
      />
      <Button
        title="POST"
        onPress={postData}
      />
      <Button
        title="PUT"
        onPress={putData}
      />
      <Button
        title="DELETE"
        onPress={deleteData}
      />
    </View>
  );
};

describe('Testes das funções GET, POST, PUT e DELETE', () => {
  test('Teste a função GET', async () => {
    // Adicione aqui a lógica para testar a função GET
    expect(mockAxios.get).toHaveBeenCalled();
  });

  test('Teste a função POST', async () => {
    // Adicione aqui a lógica para testar a função POST
    expect(mockAxios.post).toHaveBeenCalled();
  });

  test('Teste a função PUT', async () => {
    // Adicione aqui a lógica para testar a função PUT
    expect(mockAxios.put).toHaveBeenCalled();
  });

  test('Teste a função DELETE', async () => {
    // Adicione aqui a lógica para testar a função DELETE
    expect(mockAxios.delete).toHaveBeenCalled();
  });
});