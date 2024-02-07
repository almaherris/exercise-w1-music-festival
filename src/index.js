// Brief

// Start Here
// Welcome and Introduction

// Display a welcoming message for the user.
alert("Welcome to the Music Festival Concert Slot Reservation! Get ready to choose your favorite music genre!")


// Prompt the user to enter their name.

let person = prompt("Please enter your user name")

// Display a greeting message with the user's name.

alert(`Hello, ${person}! Let's get started.`)

// Music Genre Selection
// Ask the user to choose a music genre.

let musicSelection = prompt(
    `What is your favorite music genre? 
    Please enter a number: 
    1 - Rock 
    2 - Pop 
    3 - Electronic`)

// Initialize a variable to store the selected genre.

// Determine the selected genre based on the user's choice.

// Display the chosen genre.

let selectedGenre = ""

if (musicSelection === "1") {
    selectedGenre = "Rock"
} else if (musicSelection === "2") {
    selectedGenre = "Pop"
} else if (musicSelection === "3") {
    selectedGenre = "Electronic"
} else {
    alert("Invalid choice, please enter 1, 2 or 3")
}

alert(`You have selected ${selectedGenre} as your favorite genre.`)

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
// Determine the available concert slots and corresponding artist names.



// bonus
// Determine the selected time slot based on the user's concert slot choice.

// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.
