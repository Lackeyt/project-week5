import {UserDetails} from '../src/userDetails.js';

describe('UserDetails', () =>{
  let reusableUserDetails;

  beforeEach(() => {
    reusableUserDetails = new UserDetails(10, "Male", "North America");
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
    expect(reusableUserDetails.earthYearsRemaining()).toEqual(66);
  })

  test("return remaining years left alive for each planet based on earth years remaining", () => {
    if (reusableUserDetails.earthAge < reusableUserDetails.earthLifeExpectancy)
    expect(reusableUserDetails.mercuryYear(reusableUserDetails.earthYearsRemaining())).toEqual(275);
  })

  test("return years past life expectancy when earth age > life expectancy for each planet", () => {
    const userDets = new UserDetails(100, "Female", "Asia");
    if (userDets.earthAge >= userDets.earthLifeExpectancy)
    expect(userDets.mercuryYear(userDets.earthYearsPastExpected())).toEqual(104.17);
    expect(userDets.venusYear(userDets.earthYearsPastExpected())).toEqual(40.32);
    expect(userDets.marsYear(userDets.earthYearsPastExpected())).toEqual(13.3);
    expect(userDets.jupiterYear(userDets.earthYearsPastExpected())).toEqual(2.11);
    expect(userDets.saturnYear(userDets.earthYearsPastExpected())).toEqual(.85);
    expect(userDets.uranusYear(userDets.earthYearsPastExpected())).toEqual(.3);
    expect(userDets.neptuneYear(userDets.earthYearsPastExpected())).toEqual(.15);
    expect(userDets.plutoYear(userDets.earthYearsPastExpected())).toEqual(.1);
  })
})