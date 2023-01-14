import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../../reducers";
import { loginAuthedUser } from "../../actions/authedUser";

const store = configureStore({ reducer })

describe("Navbar", () => {
  it("should render the component", () => {
    store.dispatch(loginAuthedUser({
      username: "tylermcginnis", password: ""
    }))
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  it("should display all elements", () => {
    store.dispatch(loginAuthedUser({
      username: "tylermcginnis", password: ""
    }))
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const homeLinkElement = view.getByTestId("home-link");
    const newPollLinkElement = view.getByTestId("new-poll-link");
    const leaderboardLinkElement = view.getByTestId("leaderboard-link");
    const logoutLinkElement = view.getByTestId("logout-link");

    expect(homeLinkElement.textContent).toBe("Home");
    expect(newPollLinkElement.textContent).toBe("New Poll");
    expect(leaderboardLinkElement.textContent).toBe("Leaderboard");
    expect(logoutLinkElement.textContent).toBe("Logout");
  });
});
