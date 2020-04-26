import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Signup } from './Signup';

test('renders the sign up form inputs', () => {
  const { getByLabelText } = render(<Signup />);
  const userInputs = [
    getByLabelText(/name/i),
    getByLabelText(/email/i),
    getByLabelText(/role/i),
    getByLabelText(/password/i)
  ];

  userInputs.forEach((input) => expect(input).toBeInTheDocument());
});

test('renders the submit button diabled if the form is incomplete', async () => {
  // arrange
  const { getByLabelText } = render(<Signup />);

  // act
  fireEvent.change(getByLabelText(/name/i), {
    target: {value: 'Nick'},
  })

  fireEvent.change(getByLabelText(/email/i), {
    target: {value: 'offerman@woodworks.co'},
  })

  // assert
  const submitButton = await screen.findByText(/submit/i)
  expect(submitButton.closest('button')).toBeDisabled()
});

test('renders the submit button enabled if the form is valid', async () => {
  // arrange
  const { getByLabelText } = render(<Signup />);

  // act
  fireEvent.change(getByLabelText(/name/i), {
    target: {value: 'Nick'},
  })

  fireEvent.change(getByLabelText(/email/i), {
    target: {value: 'offerman@woodworks.co'},
  })

  fireEvent.change(getByLabelText(/password/i), {
    target: {value: '1234567890Ab'},
  })

  // assert
  const submitButton = await screen.findByText(/submit/i)
  expect(submitButton.closest('button')).toBeEnabled()
});

test('renders the second form after submiting the first', async () => {
  // arrange
  const { getByLabelText, findByText } = render(<Signup />);

  // act
  fireEvent.change(getByLabelText(/name/i), {
    target: {value: 'Nick'},
  })

  fireEvent.change(getByLabelText(/email/i), {
    target: {value: 'offerman@woodworks.co'},
  })

  fireEvent.change(getByLabelText(/password/i), {
    target: {value: '1234567890Ab'},
  })

  fireEvent.click(screen.getByText(/submit/i))

  // assert
  const stepLabel = await findByText(/privacy/i)

  expect(stepLabel).toHaveClass('MuiStepLabel-active')
  expect(getByLabelText(/receive updates/i)).toBeInTheDocument()
  expect(getByLabelText(/receive communication/i)).toBeInTheDocument()
});
