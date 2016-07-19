var expect = chai.expect;

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
      var field = document.getElementById('other-field');
      var value = ustwoForm.enableText();
      expect(field.disabled).to.be.false;
    });
  });
});
