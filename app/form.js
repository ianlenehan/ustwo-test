var ustwoForm = {

  disableText: function () {
    var field = document.getElementById('other-field');
    field.value = '';
    field.disabled = true;
  },

  enableText: function () {
    document.getElementById('other-field').disabled = false;
  }

};
