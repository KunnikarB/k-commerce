
// Dark Mode
function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

function validateForm() {
  let x = document.forms['myForm']['email'].value;
  if (x == '') {
    alert('E-mail must be filled out');
    return false;
  }
}