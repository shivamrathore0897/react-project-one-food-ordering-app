import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should search res list for 'restaurant'", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Body />
                </Provider>
            </BrowserRouter>
        );
    })

    // before filter screen should load all 14 res cards
    let restaurantCardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(restaurantCardsBeforeSearch.length).toBe(14);
    console.log("🚀 ~ it ~ restaurantCardsBeforeSearch.length:", restaurantCardsBeforeSearch.length);

    let searchButton = screen.getByRole("button", { name: "Search" })
    let searchInput = screen.getByTestId("searchInput");
    
    fireEvent.change(searchInput, { target: { value: 'restaurant'} });
    fireEvent.click(searchButton);

    // screen should load only 2 res cards
    let restaurantCardsAfterSearch = screen.getAllByTestId("resCard");
    expect(restaurantCardsAfterSearch.length).toBe(2);
    console.log("🚀 ~ it ~ restaurantCardsAfterSearch.length:", restaurantCardsAfterSearch.length);

})

it("should filter filter top rated restaurant", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Body />
                </Provider>
            </BrowserRouter>
        );
    })

    // before filter screen should load all 14 res cards
    let restaurantCardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(restaurantCardsBeforeFilter.length).toBe(14);
    console.log("🚀 ~ it ~ restaurantCardsBeforeFilter.length:", restaurantCardsBeforeFilter.length);

    let searchButton = screen.getByRole("button", { name: "Top Rated Restaurants" })
    fireEvent.click(searchButton);

    // screen should load only 2 res cards
    let restaurantCardsAfterFilter = screen.getAllByTestId("resCard");
    expect(restaurantCardsAfterFilter.length).toBe(9);
    console.log("🚀 ~ it ~ restaurantCardsAfterFilter.length:", restaurantCardsAfterFilter.length);

})
