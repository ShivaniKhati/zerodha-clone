import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

import Login from "../landing_page/login/Login";

describe("Login Component", () => {
  test("renders login form", () => {
    render(<Login />);

    expect(screen.getByText("Welcome back")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter your email")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });
});