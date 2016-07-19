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

  validateForm: function (formData) {
    var message;
    if(!formData.name.length) {
      message = "You must write your name";
    } else if (!formData.email.length) {
      message = "Please include your email address";
    } else if (formData.celebration === undefined) {
      message = "Celebration type is required";
    } else if (formData.celebration === 'other' && !formData.celebrationOther.length) {
      message = "Please provide details for your other selection";
    } else {
      message = "Thanks for submitting your form!";
    }
    return message;
  },

  collectFormData: function () {
    var celebrations = document.getElementsByName('celebration');
    var celebration;
    for (var i = 0; i < celebrations.length; i++ ) {
      if(celebrations[i].checked) {
        celebration = celebrations[i].value;
        break;
      };
    }

    var formData = {
      name: document.getElementById('name-field').value,
      email: document.getElementById('email-field').value,
      celebration: celebration,
      celebrationOther: document.getElementById('other-field').value
    }
    return formData;
  },

  submitForm: function (e) {
    e.preventDefault();
    var formData = ustwoForm.collectFormData();
    console.log(formData);
    var message = ustwoForm.validateForm(formData);
    document.getElementById('final-message').innerHTML = message;
  }

};

var Init = function () {
  var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', ustwoForm.submitForm, false);
};
