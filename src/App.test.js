import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import "@testing-library/jest-dom"; 
import TestComponent from "path-to-test-component";
test('renders learn react link', () => {
  render(<App />);
});
