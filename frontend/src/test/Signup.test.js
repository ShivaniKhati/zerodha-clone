import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../landing_page/signup/SignUp.css", () => ({}));

jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <a>{children}</a>,
}));

import SignUp from "../landing_page/signup/SignUp";

describe("Signup Component", () => {
  test("renders signup form", () => {
    render(<SignUp />);

    expect(
      screen.getByText("Create your account")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter your email")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter your username")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Sign Up" })
    ).toBeInTheDocument();
  });
});