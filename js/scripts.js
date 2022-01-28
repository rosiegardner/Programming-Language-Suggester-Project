$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const pronouns = $("select#pronouns").val();
    const animal = $("select#animal").val();
    const vehical = $("select#vehical").val();
    
    if (animal === 'cats', 'dogs', 'snakes' && vehical === 'vans') {
      $("#language1-hidden").show();
    } else if (animal === 'dogs', 'cats', 'snakes' && vehical === 'trucks') {
      $("#language2-hidden").show();
    } if (animal === 'snakes', 'dogs', 'cats' && vehical === 'motor') {
      $("#language3-hidden").show();
    }

  });
});