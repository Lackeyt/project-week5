import {UserPlanetsAge} from '../src/project-week5.js';

describe('UserPlanetsAge', () =>{
  let reusableUserPlanetsAge;

  beforeEach(() => {
    reusableUserPlanetsAge = new UserPlanetsAge(10);
  })

  test("return user inputted age in Mercury years", () => {
    expect(reusableUserPlanetsAge.mercuryAge).toEqual(41)
  })

})