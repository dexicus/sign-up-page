var check = function() {
    element = document.getElementById('confirm_password')
    button = document.getElementById('submit')
    if (document.getElementById('password').value !=
      document.getElementById('confirm_password').value) {
        element.classList.add('pwd-mismatch');
        button.classList.add('btn-disabled');
        button.disabled = true;
    } else {
        element.classList.remove('pwd-mismatch');
        button.classList.remove('btn-disabled')
        button.disabled = false;
    }
  }