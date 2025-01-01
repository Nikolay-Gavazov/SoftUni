const { expect, assert } = require("chai");
const motorcycleRider = require("../ExamPrep/Exam-07Dec2022/03-motorcycleRider/Motorcycle Rider");

describe("motorcycleRider", function () {
  it("check category wrong input", () => {
    assert.throw(
      motorcycleRider.licenseRestriction("A3"),
      "Invalid Information!"
    );
    assert.throw(
      motorcycleRider.licenseRestriction(["AM"]),
      "Invalid Information!"
    );
    assert.throw(motorcycleRider.licenseRestriction(1), "Invalid Information!");
    assert.throw(motorcycleRider.licenseRestriction(), "Invalid Information!");
  });

  it("check category", () => {
    assert.equal(
      motorcycleRider.licenseRestriction("AM"),
      "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
    );
    assert.equal(
      motorcycleRider.licenseRestriction("A1"),
      "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
    );
    assert.equal(
      motorcycleRider.licenseRestriction("A2"),
      "Motorcycles with maximum power of 35KW. and the minimum age is 18."
    );
    assert.equal(
      motorcycleRider.licenseRestriction("A"),
      "No motorcycle restrictions, and the minimum age is 24."
    );
  });

  it("check showroom wrong input", () => {
    assert.equal(
      motorcycleRider.motorcycleShowroom("AM", 100),
      "Invalid Information!"
    );
    assert.equal(
      motorcycleRider.motorcycleShowroom([], 100),
      "Invalid Information!"
    );
    assert.equal(
      motorcycleRider.motorcycleShowroom(["100", "200"], 1),
      "Invalid Information!"
    );
    assert.equal(
      motorcycleRider.motorcycleShowroom(["200", "300"], "1"),
      "Invalid Information!"
    );
    assert.equal(motorcycleRider.motorcycleShowroom(), "Invalid Information!");
  });

  it("check showroom", () => {
    assert.equal(
      motorcycleRider.motorcycleShowroom(["100", "200"], 100),
      "There are 1 available motorcycles matching your criteria!"
    );
    assert.equal(
      motorcycleRider.motorcycleShowroom(["100", "250", "600"], 800),
      "There are 3 available motorcycles matching your criteria!"
    );
  });
  it("check spendings wrong input", () => {
    assert.equal(
      motorcycleRider.otherSpendings([], [], 100),
      "Invalid Information!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(["helmet"], "engine oil", true),
      "Invalid Information!"
    );
    assert.equal(
      motorcycleRider.otherSpendings("helmet", ["engine oil"], true),
      "Invalid Information!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(["helmet"], true),
      "Invalid Information!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(["helmet"], ["engine oil"]),
      "Invalid Information!"
    );
    assert.equal(motorcycleRider.otherSpendings(), "Invalid Information!");
  });

  it("check spendings", () => {
    assert.equal(
      motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true),
      "You spend $243.00 for equipment and consumables with 10% discount!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(["helmet"], [], true),
      "You spend $180.00 for equipment and consumables with 10% discount!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(
        ["helmet", "jacked"],
        ["engine oil", "oil filter"],
        true
      ),
      "You spend $540.00 for equipment and consumables with 10% discount!"
    );
    assert.equal(
      motorcycleRider.otherSpendings([], ["engine oil"], false),
      "You spend $70.00 for equipment and consumables!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false),
      "You spend $270.00 for equipment and consumables!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(
        ["helmet", "jacked"],
        ["engine oil", "oil filter"],
        false
      ),
      "You spend $600.00 for equipment and consumables!"
    );
  });
});
