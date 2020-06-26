//Business Logic

export class UserPlanetsAge{
  constructor(age){
    this.earthAge = age
    this.mercuryAge = Math.floor(age / .24)
  }
  
}