import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { UserDetails } from './userDetails';

function populateOutputAges(user){

}

function populateOutputYearsLeftOrOver(user){
  
}

$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault()
    user = new UserDetails(parseInt($("#age").val()), $("input:radio[name=sex]:checked").val(), $("input:radio[name=continent]:checked").val())
    populateOutputAges(user);
    populateOutputYearsLeftOrOver(user);
  })
  //User Interface
});

