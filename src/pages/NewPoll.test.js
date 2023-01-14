import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import NewPoll from "./NewPoll";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

const store = configureStore({reducer})

describe("NewPoll", () => {
    test("should render the component", () => {
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll/>
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
                    <NewPoll/>
                </BrowserRouter>
            </Provider>
        );

        const firstOptionLabelElement = screen.getByTestId("firstOptionLabel");
        const firstOptionInputElement = screen.getByTestId("firstOption");
        const secondOptionLabelElement = screen.getByTestId("secondOptionLabel");
        const secondOptionInputElement = screen.getByTestId("secondOption");
        const submitButtonElement = screen.getByTestId("submit-poll");

        expect(firstOptionLabelElement.textContent).toBe("First Option");
        expect(secondOptionLabelElement.textContent).toBe("Second Option");
        expect(submitButtonElement.textContent).toBe("Add Poll");

        fireEvent.change(firstOptionInputElement, {target: {value: 'Texas'}});
        fireEvent.change(secondOptionInputElement, {target: {value: 'New Hampshire'}});
        expect(firstOptionInputElement.value).toBe("Texas");
        expect(secondOptionInputElement.value).toBe("New Hampshire");
    });
});
