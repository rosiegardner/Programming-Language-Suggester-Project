$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const pronouns = $("select#pronouns").val();
    const vehical = $("select#vehical").val();
    const animal = $("select#animal").val();
    $("surveyForm").trigger("#reset")

    
    if (vehical === 'vans', 'trucks', 'motor' && animal === 'snakes') {
      $("#language1-hidden").show();
      $("#language2-hidden").hide();
      $("#language3-hidden").hide();
    } else if (vehical === 'vans', 'trucks', 'motor' && animal === 'dogs') {
      $("#language1-hidden").hide();
      $("#language2-hidden").show();
      $("#language3-hidden").hide();
    } if (vehical === 'vans', 'trucks', 'motor' && animal === 'cats') {
      $("#language1-hidden").hide();
      $("#language2-hidden").hide();
      $("#language3-hidden").show();
    }
      event.preventDefault();

  });
});
