// LoginPage.test.js
import React from 'react';
import { render, fireEvent, getByText, waitFor } from '@testing-library/react';
import LoginPage from '../pages/login_page/login';

test('Elemento do switch alert não pode estar no começo ao iniciar a página', () => {
  // Renderiza o componente LoginPage
  const { queryByText } = render(<LoginPage />);

  expect(queryByText('OK')).toBeNull();
});

