const { render, screen, fireEvent } = require("@testing-library/react")
const { act } = require("react")
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})



it("Should open accordion and display menu items when clicked on accordion", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordionHeader = screen.getByText("Not Tasty");  // Replace with your actual text or test id for the header
    fireEvent.click(accordionHeader);

    // Check if the menu items are displayed (for example, checking for the length of menu items)
    expect(screen.getAllByTestId("accordion-menu-items").length).toBe(5);
});

it("Should show the initial cart state as 'Cart (0 items)'", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        );
    });

    const beforeClickOnAddcartItems = screen.getByText("Cart (0 items)");
    expect(beforeClickOnAddcartItems).toBeInTheDocument();
});

it("Should increment cart count to 1 when add button is clicked", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordionHeader = screen.getByText("Not Tasty");
    fireEvent.click(accordionHeader);
    let addBtns = screen.getAllByRole("button", { name: "+" });
    fireEvent.click(addBtns[0]);  // Click the first "+" button

    const afterClickOnAddcartItems = screen.getByText("Cart (1 items)");
    expect(afterClickOnAddcartItems).toBeInTheDocument();
});

it("Should increment cart count to 2 when add button is clicked again", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        );
    });

    const accordionHeader = screen.getByText("Not Tasty");
    fireEvent.click(accordionHeader);
    let addBtns = screen.getAllByRole("button", { name: "+" });
    fireEvent.click(addBtns[3]);  // First click, cart count should be 1
    fireEvent.click(addBtns[4]);  // Second click, cart count should be 2
    // 1 items is add from the previous one, coz store is common
    const afterClickOnAddcartItemsAgain = screen.getByText("Cart (3 items)");
    expect(afterClickOnAddcartItemsAgain).toBeInTheDocument();
});

it("Should check cart items are same as items listed in header", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });

    const cartItems = screen.getAllByTestId("cart-items");
    expect(cartItems.length).toBe(3);
});

it("Should check cart items will be 0 after clearing the cart", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });

    let clearBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearBtn);
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

});
