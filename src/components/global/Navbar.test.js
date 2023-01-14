import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import {setAuthedUser} from "../actions/authedUser";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

const store = configureStore({reducer})

describe("Navbar", () => {
    it("should render the component", () => {
        store.dispatch(setAuthedUser({id: "sarahedo", password: ""}));

        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar/>
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it("should display username of logged in user", () => {
        store.dispatch(setAuthedUser({id: "sarahedo", password: ""}));

        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const userSpanElement = view.getByTestId("authUserName");
        expect(userSpanElement.textContent).toBe("Tyler McGinnis");

    });
});
