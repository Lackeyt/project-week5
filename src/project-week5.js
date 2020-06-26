//Business Logic

export class UserPlanetsAge{
  constructor(age){
    this.earthAge = age
    //this.mercuryAge = parseFloat((age / .24).toFixed(2));
    //this.venusAge = parseFloat((age / .62).toFixed(2));
    //this.marsAge = parseFloat((age / 1.88).toFixed(2));
    //this.jupiterAge = parseFloat((age / 11.86).toFixed(2));
    //this.saturnAge = parseFloat((age / 29.46).toFixed(2));
    //this.uranusAge = parseFloat((age / 84.01).toFixed(2));
    //this.neptuneAge = parseFloat((age / 164.79).toFixed(2));
    //this.plutoAge = parseFloat((age / 248.59).toFixed(2));
  }

  mercuryAge(){
    let mercuryAge = parseFloat((this.earthAge / .24).toFixed(2))
    return mercuryAge
  }

  venusAge(){
    let venusAge = parseFloat((this.earthAge / .62).toFixed(2))
    return venusAge
  }

  marsAge(){
    let marsAge = parseFloat((this.earthAge / 1.88).toFixed(2))
    return marsAge
  }

  jupiterAge(){
    let jupiterAge = parseFloat((this.earthAge / 11.86).toFixed(2))
    return jupiterAge
  }

  saturnAge(){
    let saturnAge = parseFloat((this.earthAge / 29.46).toFixed(2))
    return saturnAge
  }

  uranusAge(){
    let uranusAge = parseFloat((this.earthAge / 84.01).toFixed(2))
    return uranusAge
  }

  neptuneAge(){
    let neptuneAge = parseFloat((this.earthAge / 164.79).toFixed(2))
    return neptuneAge
  }

  plutoAge(){
    let plutoAge = parseFloat((this.earthAge / 248.59).toFixed(2))
    return plutoAge
  }
  
  lifeExpectancy(){

  }
}