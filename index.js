let race, name, charRace;

//declaring variables

alert(
  "Hello Traveller, and welcome to our portal. Play this game correctly and you may join us on our journey across the galaxy."
);

function checkName() {
  name = prompt("What is your name traveller?");
  //prompt for the champions name.

  if (name.length < 3) {
    alert("Username must contain at least 3 characters");
    checkName();
    //alert name invalid
  } else if (name == null) {
    alert("You haven't entered anything. Please enter 1 or 2!");
    checkName();
  } else {
    console.log("Your name is: " + name);
    //log the champions name.
    checkRace();
  }
}
checkName();

function checkRace() {
  charRace = parseInt(
    prompt(
      `Greetings ${name} next you will need to choose your reason for travelling.\n Enter 1 for Business. \n Enter 2 for Pleasure.`
    ),
    10
  ); //prompt for the champion to enter their race.

  if (charRace === 1) {
    race = "Business";
    console.log("Your race is: " + race);
    alert(
      "Greetings " +
        name +
        " as you are travelling for " +
        race +
        ", remember to recommend us to your colleagues. It's time to begin your journey!"
    );
  } else if (charRace === 2) {
    race = "Pleasure";
    console.log("Your race is: " + race);
    alert(
      "Greetings " +
        name +
        " as you are travelling for " +
        race +
        ", remember to recommend us to everyone you know. It's time to begin your journey!"
    );
  } else {
    alert("You have entered an invalid value please enter 1 or 2!");
    checkRace();
  }
}
