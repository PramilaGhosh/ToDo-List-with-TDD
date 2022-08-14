import React from "react";
import Buttons from "./button";

describe("should",()=>{
    it("filters should be of type buttons ",()=>{
        const { getByTestId } = render(<Buttons />);
        expect(getByTestId("button-id")).toHaveAttribute("type","className");
    });
    it("should be able to access individually",()=>{
        const { getByTestId } = render(<button />);
        expect(getByTestId("button-id")).toHaveAccessibleName;
    });

});