// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

let Letter = require("./letter");

let Word = function(selectedWord) {

        this.selectedWord = selectedWord.toLowerCase();

        this.lettersInWord = this.selectedWord.split("");
    
        this.numBlanks = this.lettersInWord.length;

        console.log("Word function delivery: " + this.lettersInWord);

        let letters = new Letter(this.selectedWord, this.numBlanks);

        this.word = letters

        // letters.blanks();

        this.guess = function(letter) {

            this.guess = letter

            letters.CheckLetter(this.guess)

            console.log("This is the guess function: " + this.guess)

            this.displayB = "You still have letters to guess! " + "\n " + letters.blanksAndSuccess.join(" ") + "\n \n" + "You have " + letters.guessesLeft + " guesses left!";

            console.log(this.displayB);
        }

        this.displayA = "Here is your word, take a crack at it ! " + "\n " + letters.blanksAndSuccess.join(" ") + "\n \n" + "You have " + letters.guessesLeft + " guesses left!";

        // console.log(this.display);

        // console.log(word.guessesLeft);

    };



   
    


    module.exports = Word;