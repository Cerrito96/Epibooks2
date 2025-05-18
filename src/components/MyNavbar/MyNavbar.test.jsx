import { render, screen, fireEvent } from "@testing-library/react";
import MyNavbar from "./MyNavbar";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "../ThemeContextProvider/ThemeContextProvider";
import SelectContextProvider from "../SelectedContextProvider/SelectContextProvider";
import AlertCartProvider from "../AlertCartProvider/AlertCartProvider";

test("verifica input navbar", () => {
    render(
        <BrowserRouter>
            <ThemeContextProvider>
                <SelectContextProvider>
                    <AlertCartProvider>
                        <MyNavbar />
                    </AlertCartProvider>
                </SelectContextProvider>
            </ThemeContextProvider>
        </BrowserRouter>

    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'The' } });

    const button = screen.getByTestId('test-button');
    fireEvent.click(button);

    const filteredItem = screen.getByTestId('test-cards');
    expect(filteredItem).toBeInTheDocument();
});
