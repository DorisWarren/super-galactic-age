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
    const userAge = new Age(dob, userGender, userSmoker, userYoga, userVegan);
    console.log("userAge")

    const userMercury = userAge.mercury();
    const userVenus = userAge.venus();
    const userMars = userAge.mars();
    const userJupiter = userAge.jupiter();

    const userEarthLife = userAge.lifeOnEarth();
    const userMercuryLife = userAge.lifeOnMercury();
    const userVenuslife = userAge.lifeOnVenus();
    const userMarslife = userAge.lifeOnMars();
    const userJupiterlife = userAge.lifeOnJupiter();

    const userEarthYearsLeft =  userAge.earthYearsLeft();
    const userMercuryYearsLeft = userAge.mercuryYearsLeft();
    const userVenusYearsLeft = userAge.venusYearsLeft();
    const userMarsYearsLeft = userAge.marsYearsLeft();
    const userJupiterYearsLeft = userAge.jupiterYearsLeft();

  });
});
