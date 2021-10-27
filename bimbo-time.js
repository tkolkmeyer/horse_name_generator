function spinLogo(x) {

    x.classList.add("spin");
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


}

module.exports = {
    spinLogo: spinLogo,
    runProgram: runProgram,
}