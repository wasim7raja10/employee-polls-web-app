import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import React from "react";
import reducer from "../reducers";

const store = configureStore({reducer})

describe("Login", () => {
  test("should render the component", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  test("should display all elements", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    
    const existingUserLabelElement = screen.getByTestId("existing-user-label");
    const usernameLabelElement = screen.getByTestId("username-label");
    const usernameInputElement = screen.getByTestId("username-input");
    const passwordLabelElement = screen.getByTestId("password-label");
    const passwordInputElement = screen.getByTestId("password-input");
    const submitButtonElement = screen.getByTestId("submit-login");

    expect(usernameLabelElement.textContent).toBe("Username");
    expect(passwordLabelElement.textContent).toBe("Password");
    expect(submitButtonElement.textContent).toBe("Login");
    expect(existingUserLabelElement.textContent).toBe("Existing User");

    fireEvent.change(usernameInputElement, { target: { value: "user" } });
    fireEvent.change(passwordInputElement, { target: { value: "password" } });
    expect(usernameInputElement.value).toBe("user");
    expect(passwordInputElement.value).toBe("password");
  });
});
