import { fireEvent, render } from "@testing-library/react";
import React from "react";
import todo from './todo';

describe("rendering", () => {
    it("should contain a text box to provide task name",() => {
        const { getByTestId } = render(<todo />);
        expect( getByTestId("input-textbox") ).toBeInTheDocument;

    });
    it("should contain an add button to add the task",() => {
        const { getByTestId } = render(<todo />);
        expect( getByTestId("add-button") ).toBeInTheDocument;

    });
    it("add button should be enabled",() => {
        const { getByTestId } = render(<todo />);
        expect( getByTestId("add-button") ).toBeEnabled;

    });
    it("should have edit button",()=>{
        const { getByTestId }= render(<todo />);
        expect(getByTestId("edit-button")).toHaveTextContent("");
    });
});

