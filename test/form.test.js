var expect = chai.expect;

describe("ustwo Form", function () {

  describe("it should validate name, email and celebration type", function () {

    it("should return an error message if name field is empty", function () {
      var data = {
        name: '',
        email: 'me@email.com',
        celebration: 'Birthday',
        celebrationOther: ''
      };
      var errors = ustwoForm.validateForm(data);
      expect(errors).to.equal('You must write your name');
    });

    it("should return an error message if email field is empty", function () {
      var data = {
        name: 'Ian',
        email: '',
        celebration: 'Birthday',
        celebrationOther: ''
      };
      var errors = ustwoForm.validateForm(data);
      expect(errors).to.equal('Please include your email address');
    });

    it("should return an error message if email address is invalid", function () {
      var data = {
        name: 'Ian',
        email: 'ian@gmaildotcom',
        celebration: 'Birthday',
        celebrationOther: ''
      };
      var errors = ustwoForm.validateForm(data);
      expect(errors).to.equal('Please enter a valid email address');

      var data2 = {
        name: 'Ian',
        email: 'ianatgmail.com',
        celebration: 'Birthday',
        celebrationOther: ''
      };
      var errors2 = ustwoForm.validateForm(data2);
      expect(errors2).to.equal('Please enter a valid email address');
    });

    it("should return an error message if celebration type is undefined", function () {
      var data = {
        name: 'Ian',
        email: 'me@email.com',
        celebration: undefined,
        celebrationOther: ''
      };
      var errors = ustwoForm.validateForm(data);
      expect(errors).to.equal('Celebration type is required');
    });

    it("should return an error message if celebration other is selected and the text field is empty", function () {
      var data = {
        name: 'Ian',
        email: 'me@email.com',
        celebration: 'other',
        celebrationOther: ''
      };
      var errors = ustwoForm.validateForm(data);
      expect(errors).to.equal('Please provide details for your other selection');
    });

    it("should return a success message if all data is valid", function () {
      var data = {
        name: 'Ian',
        email: 'me@email.com',
        celebration: 'other',
        celebrationOther: 'Some data'
      };
      var errors = ustwoForm.validateForm(data);
      expect(errors).to.equal('Thanks for submitting your form!');
    });

  });
});
