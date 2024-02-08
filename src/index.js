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

let musicSelection = parseInt(
prompt(
    `What is your favorite music genre? 
    Please enter a number: 
    1 - Rock 
    2 - Pop 
    3 - Electronic`)
    )

// Initialize a variable to store the selected genre.

// Determine the selected genre based on the user's choice.

// Display the chosen genre.

let selectedGenre = ""

if (musicSelection === 1) {
    selectedGenre = "Rock"
} else if (musicSelection === 2) {
    selectedGenre = "Pop"
} else if (musicSelection === 3) {
    selectedGenre = "Electronic"
} else {
    alert("Invalid choice, please enter 1, 2 or 3")
    exit(1)
}

alert(`You have selected ${selectedGenre} as your favorite genre.`)

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
// Determine the available concert slots and corresponding artist names.

 let concertSlot = ""

 let artistNames = []

 switch (selectedGenre) {
    case "Rock":
        concertSlot = parseInt(
            prompt(
                `Select a slot for Rock
                1 - The Strokes
                2 - Blink 182
                3 - Pearl Jam
                Please enter the number of your choice`
            )
        )
            artistNames = ["The Strokes", "Blink 182", "Pearl Jam"]
            break
            
    case "Pop":
        concertSlot = parseInt(
            prompt(
                `Select a slot for Pop
                1 - Rihanna
                2 - Beyoncé
                3 - Ariana Grande
                Please enter the number of your choice`
            )
        )
            artistNames = ["Rihanna", "Beyoncé", "Ariana Grande"]
            break

     case "Electronic":
        concertSlot = parseInt(
            prompt(
                `Select a slot for Pop
                1 - Tale Impala
                2 - Björk
                3 - Daft Punk
                Please enter the number of your choice`
            )
        )
            artistNames = ["Tale Impala", "Björk", "Daft Punk"]
            break

        default:
            alert("Invalid choice, try again")
 }

    console.log("concert slot", concertSlot)


let timeSlot =""
switch (concertSlot) {
    case 1: 
        timeSlot = "18:00"
        break

    case 2: 
        timeSlot = "21:00"
        break

    case 3: 
        timeSlot = "23:00"
        break

    default:
        alert("Invalid choice, try again")
}

console.log("time slot", timeSlot)

if (concertSlot === 1) {
    alert (
        `Great choice! You've reserved a spot to see ${artistNames[0]} at ${timeSlot} for the ${selectedGenre} concert!`
    )
} else if (concertSlot === 2) {
    alert (
        `Great choice! You've reserved a spot to see ${artistNames[1]} at ${timeSlot} for the ${selectedGenre} concert!`
    )
} else if (concertSlot === 3) {
    alert (
        `Great choice! You've reserved a spot to see ${artistNames[2]} at ${timeSlot} for the ${selectedGenre} concert!`
    )
}

// bonus
// Determine the selected time slot based on the user's concert slot choice.

// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.
