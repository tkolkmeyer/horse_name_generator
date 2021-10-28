window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

        let name = document.querySelector("input[name=name").value;

        console.log("logging value 'name' to the console: " + name);

        if (name.value === "") {
            alert("All fields are required!");
        };

        document.getElementById('hello-you').innerHTML = `That's great, ${name} . . . we're gonna call you ____`;

        event.preventDefault();

    });

});