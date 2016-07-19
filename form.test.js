// run 'npm test'
console.log('testing');
var expect = require("chai").expect;
var ustwo = require("../app/form");

describe("Basic Test", function () {
  describe("Adding 1 + 1", function () {
    it("should equal 2", function () {
      expect(1+1).to.equal(2);
    });
  });
});

describe("ustwo Form", function () {
  describe("Celebration type", function () {

    it("should enable the other text field when other is selected", function () {
      ustwo.ustwoForm.enableText();
      expect(ustwo.ustwoForm.enableText()).to.be.false;
    });
  });
});
