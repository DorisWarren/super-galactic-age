import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Age} from "./logic.js";

$(document).ready(function() {
  $("#age-form").submit(function(event){
    event.preventDefault();

    const dob = $("#dob").val();
    const userGender = $(".gender").val();
    const userSmoker = $(".smoker").val()
    const userYoga = $(".yoga").val();
    const userVegan = $(".vegan").val();
    const userAge = new Age(dob, gender, smoker, yoga, vegan);
    console.log("userAge")

    const mercury = userAge.mercury();
    const venus = userAge.venus();
    const mars = userAge.mars();
    const jupiter = userAge.jupiter();

    const earthLife = userAge.lifeExpectancyEarth();
    const mercuryLife = userAge.lifeExpectancyMercury();
    const venuslife = userAge.lifeExpectancyVenus();
    const marslife = userAge.lifeExpectancyMars();
    const jupiterlife = userAge.lifeExpectancyJupiter();

    const userEarthYearsLeft =  userAge.earthYearsLeft();
    const userMercuryYearsLeft = userAge.mercuryYearsLeft();
    const userVenusYearsLeft = userAge.venusYearsLeft();
    const userMarsYearsLeft = userAge.marsYearsLeft();
    const userJupiterYearsLeft = userAge.jupiterYearsLeft();

  });
});
