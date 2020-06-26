import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { UserDetails } from './userDetails';

//User Interface
function populateOutputAges(user){
  $("#planetAgeList").append(`<li><strong>Mercury:</strong> ${user.mercuryYear(user.earthAge)}</li>`);
  $("#planetAgeList").append(`<li><strong>Venus:</strong> ${user.venusYear(user.earthAge)}</li>`);
  $("#planetAgeList").append(`<li><strong>Mars:</strong> ${user.marsYear(user.earthAge)}</li>`);
  $("#planetAgeList").append(`<li><strong>Jupiter:</strong> ${user.jupiterYear(user.earthAge)}</li>`);
  $("#planetAgeList").append(`<li><strong>Saturn:</strong> ${user.saturnYear(user.earthAge)}</li>`);
  $("#planetAgeList").append(`<li><strong>Uranus:</strong> ${user.uranusYear(user.earthAge)}</li>`);
  $("#planetAgeList").append(`<li><strong>Neptune:</strong> ${user.neptuneYear(user.earthAge)}</li>`);
  $("#planetAgeList").append(`<li><strong>Pluto:</strong> ${user.plutoYear(user.earthAge)}</li>`);
}

function populateOutputYearsLeftOrOver(user){
  if (user.earthAge < user.earthLifeExpectancy) {
    $("#yearsLeftOrYearsOver").text("How Many Years You Have Left (on average...):")
    $("#planetLifeLeftList").append(`<li><strong>Mercury:</strong> ${user.mercuryYear(user.earthYearsRemaining())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Venus:</strong> ${user.venusYear(user.earthYearsRemaining())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Mars:</strong> ${user.marsYear(user.earthYearsRemaining())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Jupiter:</strong> ${user.jupiterYear(user.earthYearsRemaining())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Saturn:</strong> ${user.saturnYear(user.earthYearsRemaining())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Uranus:</strong> ${user.uranusYear(user.earthYearsRemaining())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Neptune:</strong> ${user.neptuneYear(user.earthYearsRemaining())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Pluto:</strong> ${user.plutoYear(user.earthYearsRemaining())}</li>`);
  } else if (user.earthAge >= user.earthLifeExpectancy) {
    $("#yearsLeftOrYearsOver").text("You were supposed to be dead all these years ago (congrats!):")
    $("#planetLifeLeftList").append(`<li><strong>Mercury:</strong> ${user.mercuryYear(user.earthYearsPastExpected())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Venus:</strong> ${user.venusYear(user.earthYearsPastExpected())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Mars:</strong> ${user.marsYear(user.earthYearsPastExpected())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Jupiter:</strong> ${user.jupiterYear(user.earthYearsPastExpected())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Saturn:</strong> ${user.saturnYear(user.earthYearsPastExpected())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Uranus:</strong> ${user.uranusYear(user.earthYearsPastExpected())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Neptune:</strong> ${user.neptuneYear(user.earthYearsPastExpected())}</li>`);
    $("#planetLifeLeftList").append(`<li><strong>Pluto:</strong> ${user.plutoYear(user.earthYearsPastExpected())}</li>`);
  }
}

$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();
    let user;
    user = new UserDetails(parseInt($("#age").val()), $("input:radio[name=sex]:checked").val(), $("input:radio[name=continent]:checked").val());
    if (user.isValidAge() === false){
      $("#error").show();
    } else {
      populateOutputAges(user);
      populateOutputYearsLeftOrOver(user);
      $("#userInput").hide()
      $("#output").show()
    }
  });
});

