#  _Super Galactic Age Calculator_

#### _Calculates a users age in years and life expectancy information, converted to different planets in the solar system_
##### __Created:__ 6/23/2020
##### __Last Updated:__ 6/23/2020 
##### By _**Tyson Lackey**_  


## Description

_gathers user entered data (Age, sex, continent of residence). Calculates the user's expected life span, average years of life remaining, or years past expected life span based on entered data. life span and age values are converted to their equivelent year values for all planets in the solar system. _

## Behaviors

| Spec| Example input | Example Output
| ----------- | ----------- | ----------- |
| return user inputted age in Mercury years | age: 10 | 41.67 |
| return user inputted age in Venus years | age: 10 | 16.13 |
| return user inputted age in Mars years | age: 10 | 5.32 |
| return user inputted age in Jupiter years | age: 10 | .84 |
| return user inputted age in Saturn years | age: 10 | .34 |
| return user inputted age in Uranus years | age: 10 | .12 |
| return user inputted age in Neptune years | age: 10 | .06 |
| return user inputted age in Pluto years | age: 10 | .04 |
| return user remaining years left alive based on age, sex, and continent of residence | age: 10, sex: "male", continent: "North America" | 66 |
| return user remaining years on each planet left based on avg life expectancy | age: 10, sex: "male", continent: "North America" | mercury years left: 275 |
| return user years over avg life expactancy if inputted age is > life expectancy for each planet | age: 100, sex: "female", continent: "Asia" | Venus: 40.32 |
| Age must be an integer >= 0 | age: -5, age: "twenty seven" | error message |

## Setup/Installation Requirements

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:
1. Internet Browser
2. Code editor like VScode to view the codebase

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:

1. Download this repository onto your computer
2. Double click index.html to open it in your web browser

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open via Bash/GitBash:

1. Clone this repository onto your computer:
    "git clone https://github.com/Lackeyt/project-week5"
2. Navigate into the "project-week5" directory in Visual Studio Code or preferred text editor:
3. Open the project
    "code ."
4. Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
5. Enter the command "$ npm install" in the terminal and press "Enter".
6. Enter the command "$ npm run build" in the terminal and press "Enter".
7. Enter the command "$ npm run start" in the terminal and press "Enter".
8. Open index.html in your browser:
    "open index.html"

## Known Bugs

* n/a

## Support and contact details

* Discord: TysonL#4409
* Email: lackeyt90@gmail.com


## Technologies Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap
* Javascript (ES6)
* JQuery
* webpack

## Resources:

* https://www.statista.com/statistics/270861/life-expectancy-by-continent/  (life expectancy statistics)
* https://www.exploratorium.edu/ronh/age/   (additional planet conversion values)

### License

Copyright (c) 2020 **_Tyson Lackey_**

This software is licensed under the MIT license.