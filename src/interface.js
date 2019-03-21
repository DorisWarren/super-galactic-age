import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Age} from "./logic.js";

$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();

    const age = $("#age").val();
    const userYoga = $("#yoga").val();
    const userVegan = $("#vegan").val();
    const userAge = new Age(age, yoga, vegan);
    console.log(userAge)

    $("#ageOnMercury") = userAge.mercury();
    $("#ageOnVenus") = userAge.venus();
    $("#ageOnMars") = userAge.mars();
    $("#ageOnJupiter") = userAge.jupiter();

  });
});
