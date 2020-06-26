//Business Logic

export class UserDetails{
  constructor(age, sex, continent){
    this.earthAge = age;
    this.userSex = sex;
    this.userContinent = continent;
    this.earthLifeExpectancy;
    switch (sex){
      case "Male":
        switch (continent){
          case "North America":
            this.earthLifeExpectancy = 76
            break;
          case "Oceania":
            this.earthLifeExpectancy = 76;
            break;
          case "Europe":
            this.earthLifeExpectancy = 75;
            break;
          case "South America":
            this.earthLifeExpectancy = 72;
            break;
          case "Asia":
            this.earthLifeExpectancy = 71;
            break;
          case "Africa":
            this.earthLifeExpectancy = 61;
            break;
        }
        break;
      case "Female":
        switch (continent){
          case "North America":
            this.earthLifeExpectancy = 81;
            break;
          case "Oceania":
            this.earthLifeExpectancy = 80;
            break;
          case "Europe":
            this.earthLifeExpectancy = 82;
            break;
          case "South America":
            this.earthLifeExpectancy = 78;
            break;
          case "Asia":
            this.earthLifeExpectancy = 75;
            break;
          case "Africa":
            this.earthLifeExpectancy = 65;
            break;
        }
        break;
    }
  }

  mercuryYear(years){
    let mercuryYear = parseFloat((years / .24).toFixed(2))
    return mercuryYear
  }

  venusYear(years){
    let venusYear = parseFloat((years / .62).toFixed(2))
    return venusYear
  }

  marsYear(years){
    let marsYear = parseFloat((years / 1.88).toFixed(2))
    return marsYear
  }

  jupiterYear(years){
    let jupiterYear = parseFloat((years / 11.86).toFixed(2))
    return jupiterYear
  }

  saturnYear(years){
    let saturnYear = parseFloat((years / 29.46).toFixed(2))
    return saturnYear
  }

  uranusYear(years){
    let uranusYear = parseFloat((years / 84.01).toFixed(2))
    return uranusYear
  }

  neptuneYear(years){
    let neptuneYear = parseFloat((years / 164.79).toFixed(2))
    return neptuneYear
  }

  plutoYear(years){
    let plutoYear = parseFloat((years / 248.59).toFixed(2))
    return plutoYear
  }

  earthYearsRemaining(){
    //let yearsRemaining = this.earthLifeExpectancy - this.earthAge
    //return yearsRemaining
  }

  earthYearsPastExpected(){
    let yearsRemaining = (this.earthLifeExpectancy - this.earthAge) * -1
    return yearsRemaining
  }
}