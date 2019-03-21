import {Age}from "./../src/logic.js"

describe ("Age",function() {

  it("it should calculate age on Mercury",function(){
    const checkAgeMercury = new Age (50)
    expect (checkAgeMercury.mercury()).toEqual(12)
  });

  it("given a date object it will find the day of the week",function(){
    expect(datePicker.findDay()).toEqual("Friday")
  });

  it("given a date string input, should return a date object",function(){
    expect(typeof datePicker.dateObject).toEqual("object")
  });

  it("given a date object it will find the day of the week",function(){
    expect(datePicker.findDay()).toEqual("Friday")
  });

  it("given a date string input, should return a date object",function(){
    expect(typeof datePicker.dateObject).toEqual("object")
  });

  it("given a date object it will find the day of the week",function(){
    expect(datePicker.findDay()).toEqual("Friday")
  });
});
