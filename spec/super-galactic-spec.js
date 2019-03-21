import {Age}from "./../src/logic.js"

describe ("Age",function() {

  it("it should calculate age on Mercury",function(){
    const checkAgeMercury = new Age (50)
    expect (checkAgeMercury.mercury()).toEqual(12)
  });

  it("it should calculate age on Venus",function(){
    const checkAgeVenus = new Age (90)
    expect (checkAgeVenus.venus()).toEqual(56)
  });

  it("it should calculate age on Mars",function(){
    const checkAgeMars = new Age (66)
    expect(checkAgeMars.mars()).toEqual(124)
  });

  it("it should calculate age on Jupiter",function(){
    const checkAgeJupiter = new Age (5)
    expect(checkAgeJupiter.jupiter()).toEqual(59)
  });

  it("it should calculate age expectancy for yogis ",function(){
    const checkYesYoga = new Age (55, "yes" )
    expect(checkYesYoga.lifeExpectancyForYoga()).toEqual(86)
  });

  it("it should calculate age expectancy for vegans ",function(){
    const checkYesVegan = new Age (33, "yes","yes")
    expect(checkYesVegan.lifeExpectancyForVegans()).toEqual(65)
  });
  it("it should calculate age expectancy for yogis ",function(){
    const checkYesYoga = new Age (55, "yes" )
    expect(checkYesYoga.lifeExpectancyForYoga()).toEqual(86)
  });
});
