
export class Age {
  constructor(age, yoga, vegan) {
    this.age = age;
    this.yoga = yoga;
    this.vegan = vegan;
    this.averageLife = 78;
  }
  mercury() {
    const mercuryAge = Math.round(this.age * 0.24);
    return mercuryAge;
  }

  venus() {
    const venusAge = Math.round(this.age * 0.62);
    return venusAge;
  }

  mars() {
    const marsAge = Math.round(this.age * 1.88);
    return marsAge;
  }

  jupiter() {
    const jupiterAge = Math.round(this.age *11.86);
    return jupiterAge;
  }
  lifeExpectancyForVegans() {
    if(this.vegan === "yes") {
      const veganYes = this.averageLife - 13;
      return veganYes;
    }else if (this.vegan === "no"){
      const veganNo = this.averageLife + 13;
      return veganNo;
    }
  }
  lifeExpectancyForYoga() {
    if(this.yoga === "yes") {
      const yogaYes = this.averageLife + 8;
      return yogaYes;
    }else if (this.yoga === "no"){
      const yogaNo = this.averageLife - 5;
      return yogaNo;
    }
  }
}
