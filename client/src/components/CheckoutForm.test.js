import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

const testInput = {
  firstName: "Nat",
  lastName: "Hietala",
  address: "123 Test St.",
  city: "Silver Town",
  state:"MN",
  zip:'55555'
}

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

test("form shows success message on submit with form details", async () => {
  // Arrange 
  render(<CheckoutForm />)

  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  const button = screen.queryByRole('button')

  // Act
   act( () => {
    userEvent.type(firstName, testInput.firstName);
    userEvent.type(lastName, testInput.lastName);
    userEvent.type(address, testInput.address);
    userEvent.type(city, testInput.city);
    userEvent.type(state, testInput.state);
    userEvent.type(zipInput, testInput.zip);
  })

  await act( async () => {
    userEvent.click(button)
  })

  // Assert
  expect(/successMessage/i).toBeInTheDocument;
});
