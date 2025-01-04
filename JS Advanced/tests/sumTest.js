const { expect } = require("chai");
const sum = require("../7.Lecture(tests)/04-sumNumbers");

describe("sum", function () {
  it("can sum numbers", () => {
    expect(sum([2, 5, 10])).to.be.equal(17);
  });
  it("isNaN", () => {
    expect(sum(["a", 1])).to.be.NaN;
  });
  it("can sum tho nums came as String", () => {
    expect(sum(["1", "3"])).to.be.equal(4);
  });
  it("works with floating-point numbers", () => {
    expect(sum([1.5, 0.5])).to.be.equal(2);
  });
});
