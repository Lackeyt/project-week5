//Business Logic

export class UserPlanetsAge{
  constructor(age){
    this.earthAge = age
    this.mercuryAge = parseFloat((age / .24).toFixed(2));
    this.venusAge = parseFloat((age / .62).toFixed(2));
    this.marsAge = parseFloat((age / 1.88).toFixed(2));
    this.jupiterAge = parseFloat((age / 11.86).toFixed(2));
    this.saturnAge = parseFloat((age / 29.4).toFixed(2));
  }
  
}