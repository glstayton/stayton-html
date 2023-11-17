const sum = require("./index");
describe("sum", () => {
    it("should add two numbers", () => {
        const simple = [1 , 2];
        const expected = 3
        const actual = sum(simple[0], simple[1]);
        expect(actual).toEqual(expected);
    })
})