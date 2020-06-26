//Business Logic

export class UserPlanetsAge{
  constructor(age){
    this.earthAge = age
    this.mercuryAge = parseFloat((age / .24).toFixed(2));
    this.venusAge = parseFloat((age / .62).toFixed(2));
    this.marsAge = parseFloat((age / 1.88).toFixed(2));
  }
  
}