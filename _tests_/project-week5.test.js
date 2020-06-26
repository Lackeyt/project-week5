import {UserPlanetsAge} from '../src/project-week5.js';

describe('UserPlanetsAge', () =>{
  let reusableUserPlanetsAge;

  beforeEach(() => {
    reusableUserPlanetsAge = new UserPlanetsAge(10);
  })

  test("return user inputted age in Mercury years", () => {
    expect(reusableUserPlanetsAge.mercuryAge(reusableUserPlanetsAge.earthAge)).toEqual(41.67);
  })

  test("return user inputted age in Venus years", () => {
    expect(reusableUserPlanetsAge.venusAge(reusableUserPlanetsAge.earthAge)).toEqual(16.13);
  })

  test("return user inputted age in mars years", () => {
    expect(reusableUserPlanetsAge.marsAge(reusableUserPlanetsAge.earthAge)).toEqual(5.32);
  })

  test("return user inputted age in Jupiter years", () => {
    expect(reusableUserPlanetsAge.jupiterAge(reusableUserPlanetsAge.earthAge)).toEqual(.84);
  })

  test("return user inputted age in saturn years", () => {
    expect(reusableUserPlanetsAge.saturnAge(reusableUserPlanetsAge.earthAge)).toEqual(.34);
  })

  test("return user inputted age in uranus years", () => {
    expect(reusableUserPlanetsAge.uranusAge(reusableUserPlanetsAge.earthAge)).toEqual(.12);
  })

  test("return user inputted age in neptune years", () => {
    expect(reusableUserPlanetsAge.neptuneAge(reusableUserPlanetsAge.earthAge)).toEqual(.06);
  })

  test("return user inputted age in pluto years", () => {
    expect(reusableUserPlanetsAge.plutoAge(reusableUserPlanetsAge.earthAge)).toEqual(.04);
  })

})