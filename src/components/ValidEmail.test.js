import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando se a checagem de e-mail só aparece depois que algum e-mail é inserido', () => {
  render(<ValidEmail email="" />)
  const isValidText = screen.queryByTestId('id-is-email-valid')
  expect(isValidText).not.toBeInTheDocument();
})



test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValidText = screen.queryByTestId('id-is-email-valid')
  const isValid = screen.getByText('Email Válido');
  expect(isValidText).toBeInTheDocument();
  expect(isValidText).toHaveAttribute('class', 'green-text')
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValidText = screen.queryByTestId('id-is-email-valid')
  const isInvalid = screen.getByText('Email Inválido');
  expect(isValidText).toBeInTheDocument();
  expect(isValidText).toHaveAttribute('class', 'red-text')
  expect(isInvalid).toBeInTheDocument();
});