// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(9, 3)).toEqual(3);
      expect(divide(32, 4)).toEqual(8);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide()).toEqual(undefined);
      expect(divide(2)).toEqual(undefined);
      expect(divide(3, undefined)).toEqual(undefined);
    });
  });
});
