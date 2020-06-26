//Business Logic

export class UserPlanetsAge{
  constructor(age){
    this.earthAge = age
    //this.earthLifeExpectancy
  }

  mercuryAge(years){
    let mercuryAge = parseFloat((years / .24).toFixed(2))
    return mercuryAge
  }

  venusAge(years){
    let venusAge = parseFloat((years / .62).toFixed(2))
    return venusAge
  }

  marsAge(years){
    let marsAge = parseFloat((years / 1.88).toFixed(2))
    return marsAge
  }

  jupiterAge(years){
    let jupiterAge = parseFloat((years / 11.86).toFixed(2))
    return jupiterAge
  }

  saturnAge(years){
    let saturnAge = parseFloat((years / 29.46).toFixed(2))
    return saturnAge
  }

  uranusAge(years){
    let uranusAge = parseFloat((years / 84.01).toFixed(2))
    return uranusAge
  }

  neptuneAge(years){
    let neptuneAge = parseFloat((years / 164.79).toFixed(2))
    return neptuneAge
  }

  plutoAge(years){
    let plutoAge = parseFloat((years / 248.59).toFixed(2))
    return plutoAge
  }
  
  lifeExpectancy(){

  }
}