import {UserDetails} from '../src/project-week5.js';

describe('UserDetails', () =>{
  let reusableUserDetails;

  beforeEach(() => {
    reusableUserDetails = new UserDetails(10, "male", "North America");
  })

  test("return earth years in Mercury years", () => {
    expect(reusableUserDetails.mercuryYear(reusableUserDetails.earthAge)).toEqual(41.67);
  })

  test("return earth years in Venus years", () => {
    expect(reusableUserDetails.venusYear(reusableUserDetails.earthAge)).toEqual(16.13);
  })

  test("return earth years in mars years", () => {
    expect(reusableUserDetails.marsYear(reusableUserDetails.earthAge)).toEqual(5.32);
  })

  test("return earth years in Jupiter years", () => {
    expect(reusableUserDetails.jupiterYear(reusableUserDetails.earthAge)).toEqual(.84);
  })

  test("return earth years in saturn years", () => {
    expect(reusableUserDetails.saturnYear(reusableUserDetails.earthAge)).toEqual(.34);
  })

  test("return earth years in uranus years", () => {
    expect(reusableUserDetails.uranusYear(reusableUserDetails.earthAge)).toEqual(.12);
  })

  test("return earth years in neptune years", () => {
    expect(reusableUserDetails.neptuneYear(reusableUserDetails.earthAge)).toEqual(.06);
  })

  test("return earth years in pluto years", () => {
    expect(reusableUserDetails.plutoYear(reusableUserDetails.earthAge)).toEqual(.04);
  })

  test("return user remaining years left alive on earth based on sex and continent of residence", () => {
    expect(reusableUserDetails.earthYearsRemaining()).toEqual(66)
  })
})