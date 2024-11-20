import { Sum } from "../DemoTestFiles/Sum"

test("Sum function should calc the sum of 2 numbers", () => {

    const result = Sum(3, 4);

    expect(result).toBe(7)// this will pass
    // expect(result).toBe(5)// this will fail

});