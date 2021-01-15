import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("Sanity Test/Loads with no Errors", () => {
  render(<CheckoutForm />)
})

test("form header renders", () => {
  // Arrange
  render(<CheckoutForm />)
  
  // Act
  const formHeader = screen.getByText(/checkout form/i)

  // Assert
  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  // Arrange 
  
  // Act
  
  // Assert
});
