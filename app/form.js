var ustwoForm = {

  disableText: function () {
    var field = document.getElementById('other-field');
    field.value = '';
    field.disabled = true;
  },

  enableText: function () {
    var field = document.getElementById('other-field');
    field.disabled = false;
  },

  submitForm: function (e) {
    var other = document.getElementById('other');
    var otherField = document.getElementById('other-field');
    if(other.checked && otherField.value == '') {
      e.preventDefault();
      alert('You must enter a value for Other')
    } else {
      document.getElementById('submit-handle').click();
    }
  },

};

var Init = function () {
  var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', ustwoForm.submitForm, false);
};
