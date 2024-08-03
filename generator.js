window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        let name = document.querySelector("input[name=name").value;

        if (name === "") {
            alert("TELL US");
        };

        let firstName = [
            "Silky",
            "Hell",
            "Saucy",
            "Juicy",
            "Vitamin",
            "Minty",
            "Phoenix",
            "Alaska",
            "Roxy",
            "Foxy",
            "Ginger",
            "Pearl",
            "Disco",
            "Calamity",
            "Genevieve",
            "Elle",
            "Love",
            "Brooklyn",
            "Charlize",
            "Rhinestone",
            "Diamond",
            "Pinot",
            "Sugar",
            "Salty",
            "Dorthy",
            "Vanessa",
            "Angela",
            "Tamara",
            "Diana",
            "Tia",
            "Doja",
            "Harlette",
            "Ashley",
            "Trixie",
            "Katya",
            "Ben",
            "Becky",
            "Carol",
            "Belle",
            "Delphine",
            "Anastasia",
            "Violet",
            "Tyra",
            "Raven",
            "Basil",
            "Sofia",
            "Mariah",
            "Almond",
            "Pecan",
            "Princess",
            "Ivy",
            "Jasmine",
            "DuJour",
            "Fame",
            "Noami",
            "Bambi",
            "Gigi",
            "Berry",
            "Jane",
            "Mary",
            "Dingo",
            "Cherry",
            "Strawberry",
            "Foster",
            "Golden",
            "Azalea",
            "Lily",
            "Yasmin",
            "Zinnia",
            "Poppy",
            "Daisy",
            "Dahlia",
            "Sage",
            "Cedar",
            "Ren",
            "Crying",
            "Indigo",
            "Sorrel",
            "Sloppy",
            "Glossy",
            "Captain",
            "Bingo"
        ];
        let lastName = [
            "Pandemonium",
            "the Noodle",
            "the Essence",
            "the Jay",
            "the Sauce",
            "the Sweet",
            "Cherry",
            "Cinnamon",
            "the Cherry",
            "Ketchup",
            "Moon",
            "Jalfo",
            "Dolphin",
            "the Moon",
            "Leopard",
            "the Fox",
            "the Chicken",
            "Lion",
            "George",
            "Bells",
            "Duvet",
            "the Gossip",
            "Chugs",
            "Kay",
            "Mustard",
            "the Phoenix",
            "Ritz",
            "the Ritz",
            "Princess",
            "Buchanan",
            "Mayonnaise",
            "Chanel",
            "Dipshit",
            "Pearl",
            "Deficiency",
            "Veloure",
            "Bloodlust",
            "Cox",
            "Lux",
            "Evangalista",
            "Frank",
            "Joe",
            "Willow",
            "Hamburger",
            "Balloon",
            "Pancake",
            "Muffin",
            "the Corndog",
            "Hotdog",
            "Sorbet",
            "Dango",
            "the Juice",
            "the Strawberry",
            "Cartoon",
            "Money",
            "the Bunny",
            "Shampoo",
            "Foster",
            "the Joe",
            "the Posh",
            "the Primrose",
            "Poppins",
            "Au Fait",
            "Julep",
            "High Ball",
            "Christmas",
            "Maverick",
            "Duke",
            "Meatball",
            "Cornbread",
            "Gravy",
            "Dongo",
            "'Crying Emoji' Jones",
            "'Sunglasses Emoji' Davis",
            "'Nervous Sweating Emoji' Kelly"
        ];

        let firstNameIndex = Math.floor(Math.random() * firstName.length);
        let lastNameIndex = Math.floor(Math.random() * lastName.length);
        let firstBimboName = firstName[firstNameIndex];
        let lastBimboName = lastName[lastNameIndex];
        let bimboName = firstBimboName + " " + lastBimboName;

        document.getElementById('hello-you').innerHTML = `Okay ${name}! That's great . . . We're gonna call you ${bimboName}`;


        event.preventDefault();

    });

});