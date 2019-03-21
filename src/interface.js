import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Age} from "./logic.js";

$(document).ready(function() {
  $("#age-form").submit(function(event){
    event.preventDefault();

    const age = $("#age").val();
    const userYoga = $(".yoga").val();
    const userVegan = $(".vegan").val();
    const userAge = new Age(age, yoga, vegan);
    console.log("userAge")

    const mercury = userAge.mercury();
    const venus = userAge.venus();
    const mars = userAge.mars();
    const jupiter = userAge.jupiter();

    // const earthLife = userAge.lifeExpectancyEarth();
    // const mercuryLife = userAge.lifeExpectancyMercury();
    // const venuslife = userAge.lifeExpectancyVenus();
    // const marslife = userAge.lifeExpectancyMars();
    // const jupiterlife = userAge.lifeExpectancyJupiter();

  });
});
