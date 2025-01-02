const { expect } = require("chai");
const mathEnforcer = require("../7.Homework/04-mathEnforcer");

describe("mathEnforcer", function () {
  describe("addFive", function () {
    it("return undefined with wrong input", () => {
      expect(mathEnforcer.addFive("5")).to.be.undefined;
    });
    it("work with negative numbers", () => {
      expect(mathEnforcer.addFive(-3)).to.equal(2);
    });
    it("work with numbers", () => {
      expect(mathEnforcer.addFive(3)).to.equal(8);
    });
    it("work with not integer numbers", () => {
      expect(mathEnforcer.addFive(1.55)).to.equal(6.55);
    });
    it("work with not integer numbers", () => {
      expect(mathEnforcer.addFive(-2.5)).to.equal(2.5);
    });
  });

  describe("subtractTen", function () {
    it("return undefined with wrong input", () => {
      expect(mathEnforcer.subtractTen("5")).to.be.undefined;
    });
    it("work with numbers", () => {
      expect(mathEnforcer.subtractTen(5)).to.equal(-5);
    });
    it("work with numbers", () => {
      expect(mathEnforcer.subtractTen(15)).to.equal(5);
    });
    it("work with not integer negative numbers", () => {
      expect(mathEnforcer.subtractTen(-1.5)).to.equal(-11.5);
    });
    it("work with not integer numbers", () => {
      expect(mathEnforcer.subtractTen(1.55)).to.equal(-8.45);
    });
  });
  describe("sum", function () {
    it("return undefined with wrong input", () => {
      expect(mathEnforcer.sum("5", "5")).to.be.undefined;
    });
    it("return undefined with wrong input", () => {
      expect(mathEnforcer.sum("5", 5)).to.be.undefined;
    });
    it("work with negative numbers", () => {
      expect(mathEnforcer.sum(5, -5)).to.equal(0);
    });
    it("work with negative numbers", () => {
      expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
    });
    it("work with numbers", () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
    });
    it("work with not integer numbers", () => {
      expect(mathEnforcer.sum(5.7, 4.4)).to.closeTo(10.1, 0.01);
    });
    it("work with not integer numbers", () => {
      expect(mathEnforcer.sum(-6.7, -5.4)).to.closeTo(-12.1, 0.01);
    });
    it("work with not integer numbers", () => {
      expect(mathEnforcer.sum(3.14, 3.14)).to.closeTo(6.28, 0.01);
    });
  });
});
