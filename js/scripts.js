$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const pronouns = $("select#pronouns").val();
    const vehical = $("select#vehical").val();
    const animal = $("select#animal").val();
    $('#surveyForm').trigger("reset");

    
    if (vehical === 'vans', 'trucks', 'motor' && animal === 'snakes') {
      $("#language1-hidden").show();
    } else if (vehical === 'vans', 'trucks', 'motor' && animal === 'dogs') {
      $("#language2-hidden").show();
    } if (vehical === 'vans', 'trucks', 'motor' && animal === 'cats') {
      $("#language3-hidden").show();
    }

  });
});
