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
    
  });
});
