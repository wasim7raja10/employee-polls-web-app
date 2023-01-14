import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import NewPoll from "./NewPoll";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

const store = configureStore({reducer})

describe("NewPoll", () => {
    it("should render the component", () => {
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

    it("should display all elements", () => {
        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll/>
                </BrowserRouter>
            </Provider>
        );

        const firstOptionLabelElement = view.getByTestId("firstOptionLabel");
        const firstOptionInputElement = view.getByTestId("firstOption");
        const secondOptionLabelElement = view.getByTestId("secondOptionLabel");
        const secondOptionInputElement = view.getByTestId("secondOption");
        const submitButtonElement = view.getByTestId("submit-poll");

        expect(firstOptionLabelElement.textContent).toBe("First Option");
        expect(secondOptionLabelElement.textContent).toBe("Second Option");
        expect(submitButtonElement.textContent).toBe("Add Poll");

        fireEvent.change(firstOptionInputElement, {target: {value: 'Texas'}});
        fireEvent.change(secondOptionInputElement, {target: {value: 'New Hampshire'}});
        expect(firstOptionInputElement.value).toBe("Texas");
        expect(secondOptionInputElement.value).toBe("New Hampshire");
    });
});
