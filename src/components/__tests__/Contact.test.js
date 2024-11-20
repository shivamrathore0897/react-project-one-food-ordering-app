import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"



describe("Contact us page test caes", () => {


    // Some Testing Helper functions work in describe block only
    beforeAll(() => {
        // console.log('Before All');
    })
    beforeEach(() => {
        // console.log('Before Each');
    })
    afterEach(() => {
        // console.log('After Each');
    })
    afterAll(() => {
        // console.log('After All');
    })

    test("should check weather there is heading present in contact us component", () => {

        render(<ContactUs />)

        const heading = screen.getByRole("heading");

        //ASSERTION
        expect(heading).toBeInTheDocument();
    })

    test("should check weather there is button present in contact us component", () => {

        render(<ContactUs />)

        const button = screen.getByText("SUBMIT");

        //ASSERTION
        expect(button).toBeInTheDocument();
    })

    test("should check weather there is input with placeholder - 'name' present in contact us component", () => {

        render(<ContactUs />)

        const inputName = screen.getByPlaceholderText("name")

        //ASSERTION
        expect(inputName).toBeInTheDocument();
    })

    it("should check weather there are more than 1 input are there or not", () => {

        render(<ContactUs />)

        const allInputs = screen.getAllByRole("textbox")
        console.log("🚀 ~ test ~ allInputs:", allInputs.length);

        //ASSERTION -- all are ok
        // expect(allInputs.length === 2)
        // expect(allInputs.length).toBe(2)
        expect(allInputs.length).not.toBe(3)
    })

})
