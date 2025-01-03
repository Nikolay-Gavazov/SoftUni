const { expect } = require("chai");
const createCalculator = require("../7.Lecture(tests)/07-addSubstract");

describe("calculator", function () {
  let calc = null;

  beforeEach(() => {
    calc = createCalculator();
  });
  it("can add numbers", () => {
    calc.add(1);
    calc.add(2);
    expect(calc.get()).to.equal(3);
  });
  it("can subtract", () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });
  it("can add and subtract", () => {
    calc.add(5);
    calc.subtract(3);
    expect(calc.get()).to.equal(2);
  });
  it("can add nums as string", () => {
    calc.add("2");
    expect(calc.get()).to.equal(2);
  });
  it("return zero", () => {
    expect(calc.get()).to.equal(0);
  });
});
