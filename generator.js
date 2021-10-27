// function generator() {

form.addEventListener("submit-button", function(event) {

            let name = document.getElementById("name").value;
            document.getElementById('hello-you').innerHTML = `That's great, ${name.value} . . . we're gonna call you ____`;
        }

        // // add single syllable common names and adjectives
        // let randomBimboFirst = ["disco", "ginger", "cherry"];

        // // add nouns and shit
        // let randomBimboLast = ["mama", "banana cake", "dipshit"];

        // let firstNameIndex = Math.floor(Math.random() * (randomBimboFirst.length));


        // let lastNameIndex =
        //     Math.floor(Math.random() * (randomBimboLast.length));

        // let firstName = randomBimboFirst[firstNameIndex];

        // let lastName = randomBimboLast[lastNameIndex];

        // // what's your name?
        // // thats great . . . we're going to call you _____



        // return "Your bimbo name is: " + firstName + " " + lastName;
        // }

        // window.addEventListener("load", function() {

        //     let form = document.querySelector("form");
        //     form.addEventListener("submit", function(event) {

        //         let name = document.getElementById("name");

        //         if (name.value === "") {
        //             alert("All fields are required!");
        //         };

        //         document.getElementById('hello-you').innerHTML = `That's great, ${name.value} . . . we're gonna call you ____`;

        //         event.preventDefault();

        //     });

        // });