import {UserPlanetsAge} from '../src/project-week5.js';

describe('UserPlanetsAge', () =>{
  let reusableUserPlanetsAge;

  beforeEach(() => {
    reusableUserPlanetsAge = new UserPlanetsAge(10);
  })

  test("return user inputted age in Mercury years", () => {
    expect(reusableUserPlanetsAge.mercuryYear(reusableUserPlanetsAge.earthAge)).toEqual(41.67);
  })

  test("return user inputted age in Venus years", () => {
    expect(reusableUserPlanetsAge.venusYear(reusableUserPlanetsAge.earthAge)).toEqual(16.13);
  })

  test("return user inputted age in mars years", () => {
    expect(reusableUserPlanetsAge.marsYear(reusableUserPlanetsAge.earthAge)).toEqual(5.32);
  })

  test("return user inputted age in Jupiter years", () => {
    expect(reusableUserPlanetsAge.jupiterYear(reusableUserPlanetsAge.earthAge)).toEqual(.84);
  })

  test("return user inputted age in saturn years", () => {
    expect(reusableUserPlanetsAge.saturnYear(reusableUserPlanetsAge.earthAge)).toEqual(.34);
  })

  test("return user inputted age in uranus years", () => {
    expect(reusableUserPlanetsAge.uranusYear(reusableUserPlanetsAge.earthAge)).toEqual(.12);
  })

  test("return user inputted age in neptune years", () => {
    expect(reusableUserPlanetsAge.neptuneYear(reusableUserPlanetsAge.earthAge)).toEqual(.06);
  })

  test("return user inputted age in pluto years", () => {
    expect(reusableUserPlanetsAge.plutoYear(reusableUserPlanetsAge.earthAge)).toEqual(.04);
  })

})