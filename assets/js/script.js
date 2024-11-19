console.log("hello world");

function dontClick() {
    alert("I told you not to click this! Bye!");
    window.close();
}

function addingMachine() {
    // assigning each input value to a variable
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    //if number1 and number2 are both not null
    if(number1 != null && number2 != null ) {
        // adding numbers 1 and 2
        let output = number1 + number2;
        // setting the paragraph HTML with id output to the output value
        document.getElementById("output").innerHTML = output;
    }
}

function clearMachine() {
    document.getElementById("number1").value = "";
    document.getElementById('number2').value = null;
    document.getElementById("output").innerHTML = "";
}

function meow() {
    let meowSound = new Audio('assets/audio/cat-meow.mp3');
    meowSound.play();
}

let darkModeSetting = false;

function darkMode() {

    if(darkModeSetting == false) {
        darkModeSetting = true;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("dark-mode").innerHTML = "Deactivate Dark Mode";
    }

    else {
        darkModeSetting = false;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("dark-mode").innerHTML = "Activate Dark Mode";
    }

}