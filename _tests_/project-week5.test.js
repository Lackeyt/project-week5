import {UserPlanetsAge} from '../src/project-week5.js';

describe('UserPlanetsAge', () =>{
  let reusableUserPlanetsAge;

  beforeEach(() => {
    reusableUserPlanetsAge = new UserPlanetsAge(10);
  })

  test("return user inputted age in Mercury years", () => {
    expect(reusableUserPlanetsAge.mercuryAge).toEqual(41.67);
  })

  test("return user inputted age in Venus years", () => {
    expect(reusableUserPlanetsAge.venusAge).toEqual(16.13);
  })

  test("return user inputted age in mars years", () => {
    expect(reusableUserPlanetsAge.marsAge).toEqual(5.32);
  })

  test("return user inputted age in Jupiter years", () => {
    expect(reusableUserPlanetsAge.jupiterAge).toEqual(.84);
  })

  test("return user inputted age in saturn years", () => {
    expect(reusableUserPlanetsAge.saturnAge).toEqual(.34);
  })

  test("return user inputted age in uranus years", () => {
    expect(reusableUserPlanetsAge.uranusAge).toEqual(.12);
  })

  test("return user inputted age in neptune years", () => {
    expect(reusableUserPlanetsAge.neptuneAge).toEqual(.06);
  })

})