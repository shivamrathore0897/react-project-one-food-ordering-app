const { render, screen } = require("@testing-library/react");
import MOCK_DATA from "../mocks/resCardMocks.json";
import RestaurantCard, { PromotedRestaurantCard } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render restaurant card component with props Data", () => {


    render(
        <RestaurantCard {...MOCK_DATA} />
    )
    let restauntName = screen.getByText("Mehtas (Old Delhi Original)")

    expect(restauntName).toBeInTheDocument();


})

it("should render restaurant card component with romoted Label", () => {

    let WithPromotedLabelRestaurantCard = PromotedRestaurantCard(RestaurantCard);

    render(
        MOCK_DATA?.promoted ? <WithPromotedLabelRestaurantCard {...MOCK_DATA} /> : <RestaurantCard {...MOCK_DATA} />
    )
    let promotedLabel = screen.getByText(/Promoted/i);
    expect(promotedLabel).toBeInTheDocument();


})