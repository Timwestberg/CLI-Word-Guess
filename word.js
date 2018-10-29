// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

let Letter = require("./letter");

let Word = function() {

        this.wordbank = ["Naurto","Magi","DeathNote", "Sinbad", "FairyTail", "Pokemon", "Bleach","Fate"]

        this.random = Math.floor(Math.random() * this.wordbank.length)
        
        // console.log(this.random)

        this.selectedWord = this.wordbank[this.random]

        console.log(this.selectedWord);

        let word = new Letter(this.selectedWord);

        // word.guessedLetter = process.argv[2]

        // console.log(word.guessedLetter);

        // word.CheckLetter(word.guessedLetter);

        let display = "You still have letters to guess! " + "\n " + word.blanksAndSuccess.join(" ") + "\n \n" + "You have " + word.guessesLeft + " guesses left!";

        console.log(display);

        // console.log(word.guessesLeft);

    };



    Word();
    


