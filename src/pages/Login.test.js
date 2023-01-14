import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import React from "react";
import reducer from "../reducers";

const store = configureStore({reducer})

describe("Login", () => {
  it("should render the component", () => {
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

  it("should display all elements", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    
    const existingUserLabelElement = view.getByTestId("existing-user-label");
    const usernameLabelElement = view.getByTestId("username-label");
    const usernameInputElement = view.getByTestId("username-input");
    const passwordLabelElement = view.getByTestId("password-label");
    const passwordInputElement = view.getByTestId("password-input");
    const submitButtonElement = view.getByTestId("submit-login");

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
