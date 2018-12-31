var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

function form_in() {
  document.getElementById("Sign_In").classList.add("show_form")
  document.getElementById("Sign_Up").classList.remove("show_form")
}

function form_up() {
  document.getElementById("Sign_Up").classList.add("show_form")
  document.getElementById("Sign_In").classList.remove("show_form")
}

function close_form() {
  document.getElementById("Sign_Up").classList.remove("show_form")
  document.getElementById("Sign_In").classList.remove("show_form")
}
