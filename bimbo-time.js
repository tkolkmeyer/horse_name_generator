import input from "readline-sync";

function spinLogo(x) {

    x.classList.add("spin");
}

function whatsYourName() {
    let name = input.question("What is your name?");
    return name;
}

// function generator() {

//     const input = require('readline-sync');

//     let info = input.question("What is your name? ");


//     // add single syllable common names and adjectives
//     let randomBimboFirst = ["disco", "ginger", "cherry"];

//     // add nouns and shit
//     let randomBimboLast = ["mama", "banana cake", "dipshit"];

//     let firstNameIndex = Math.floor(Math.random() * (randomBimboFirst.length));


//     let lastNameIndex =
//         Math.floor(Math.random() * (randomBimboLast.length));

//     let firstName = randomBimboFirst[firstNameIndex];

//     let lastName = randomBimboLast[lastNameIndex];

//     return "Your bimbo name is: " + firstName + " " + lastName;
// }

function runProgram() {
    whatsYourName()

}

export const spinLogo = spinLogo;
export const runProgram = runProgram;
export const whatsYourName = whatsYourName;