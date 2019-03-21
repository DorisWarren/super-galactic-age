
export class Age {
  constructor(dob, gender, smoker, yoga, vegan) {
    this.dob = dob;
    this.gender = gender;
    this.smoker = smoker;
    this.yoga = yoga;
    this.vegan = vegan;
  }

}

ageInYears() {
  const dob = this.dob;
  const ageInYears = moment().diff(dob,"years");
  return ageInYears;
}
ageInSeconds(){
  const ageInSeconds = this.ageInYears() * 31536000;

  }
  return ageInSeconds
}
mercury() {
  const mercuryAge = Math.round(this.ageInYears() * 0.24);
  return mercuryAge;
}

venus() {
  const venusAge = Math.round(this.ageInYears() * 0.62);
  return venusAge;
}

mars() {
  const marsAge = Math.round(this.ageInYears() * 1.88);
  return marsAge;
}

jupiter() {
  const jupiterAge = Math.round(this.ageInYears() *11.86);
  return jupiterAge;
}
lifeExpectancyEarth(gender,smoker,yoga,vegan) {
  let averageLife = 78;
  if (gender === "male") {
    averageLife -= 5;
  }
  if (smoker === "yes") {
    averageLife -= 13;
  }
  if (yoga === "yes") {
    averageLife +=5;
  }
  if (vegan === "yes") {
    averageLife -= 3;
  }
  return averageLife;
}

lifeExpectancyMercury() {
  const earthLife = this.lifeExpectancyEarth();
  const mercuryLife = Math.round(earthLife / 0.24);
  return mercuryLife;
}

lifeExpectancyVenus() {
  const earthLife = this.lifeExpectancyEarth();
  const venusLife = Math.round(earthLife / 0.62);
  return venusLife;
}

lifeExpectancyMars() {
  const earthLife = this.lifeExpectancyEarth();
  const marsLife = Math.round(earthLife / 1.88);
  return marsLife;
}

lifeExpectancyJupiter() {
  const earthLife = this.lifeExpectancyEarth();
  const jupiterLife = Math.round(earthLife / 11.86);
  return jupiterLife;
}

earthYearsLeft() {
  const earthLife = this.lifeExpectancyEarth();
  const age = this.ageInYears();
  const yearsLeft = earthLife - age;
  return yearsLeft;
}

mercuryYearsLeft() {
  const mercuryLife = this.lifeExpectancyMercury();
  const age = this.ageInYears();
  const yearsLeft = mercuryLife - age;
  return yearsLeft;
}

venusYearsLeft() {
  const venusLife = this.lifeExpectancyVenus();
  const age = this.ageInYears();
  const yearsLeft = venusLife - age;
  return yearsLeft;
}

marsYearsLeft() {
  const marsLife = this.lifeExpectancyMars();
  const age = this.ageInYears();
  const yearsLeft = marsLife - age;
  return yearsLeft;
}

jupiterYearsLeft() {
  const jupiterLife = this.lifeExpectancyJupiter();
  const age = this.ageInYears();
  const yearsLeft = jupiterLife - age;
  return yearsleft;
}
