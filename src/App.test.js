import React from 'react';
import { cleanup, render, fireEvent } from "@testing-library/react";
import App from './App';

afterEach(cleanup);

test('renders Hello World text', () => {
  const { getByText } = render(<App />);
  const defaultText = getByText(/Hello World/i);
  expect(defaultText).toBeInTheDocument();
});

test("clicking Hello World generates input box", async () => {
  const { getByText, findByTestId } = render(<App />);
  fireEvent.click(getByText('Hello World'))
  const textBox = await findByTestId(/text-input/i);
  expect(textBox).toBeTruthy();
});

test("updateTest fn removes input box after pressing enter", async () => {
  const { getByText, findByTestId } = render(<App />);
  fireEvent.click(getByText('Hello World'))
  const textBox = await findByTestId(/text-input/i);
  textBox.value = 'test value';
  fireEvent.keyDown(textBox, { key: 'Enter', code: 'Enter' })
  setTimeout(() => { expect(textBox).toBeFalsy(); }, 1000);
});
