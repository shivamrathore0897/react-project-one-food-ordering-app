import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // let loginButton = screen.getByRole("button");
    // --------or--------
    // let loginButton = screen.getByText("Login");
    // --------or--------
    let loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
})

it("should render header component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    let cartItems = screen.getByText("Cart (0 items)");
    expect(cartItems).toBeInTheDocument();
})

it("should render header component with cart items irrespective of item numbers", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // regex will only match Cart text inside screen in header component
    let cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})

it("should change loign button to logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    let loginButton = screen.getByRole("button", { name: "Login" });

    // fire the click event to simulate login logout functionality
    fireEvent.click(loginButton);
    let logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
})