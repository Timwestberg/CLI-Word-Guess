
let Word = require("./word");

let inquirer = require("inquirer")



let Hangman = function () {
    this.wordbank = ["Naurto","Magi","DeathNote", "Sinbad", "FairyTail", "Pokemon", "Bleach","Fate"];

    this.random = Math.floor(Math.random() * this.wordbank.length);

    this.selectedWord = this.wordbank[this.random];
  
    let game = new Word(this.selectedWord);

    // this.game = game;

    console.log(game.displayA);

    this.Guessing = function() {

        if(game.word.guessesLeft > 0) {

        inquirer
        .prompt([
        {
            name: "Guess",
            type:"input",
            message:"What is your guess?"
        }
        ])
        .then(function(ans){
        game.guess(ans.Guess)
        
        this.Guessing();
        });
        // this.Guessing(); DO NOT FUCKING RUN IT LIKE THIS, gets stuck on repeating function.
    }


}

this.Guessing();
    // if(game.Word.guessesLeft> 0) {
    //     inquirer.prompt([
    //         {
    //             name: "Guess",
    //             message:"What is your Guess?",
    //             type:"input"
    //         }
    //       ])
    //       .then(answers => {
        
    //       });


    // }


  
}

Hangman();









// if (lettersInWord.toString() == blanksAndSuccess.toString()) {
//     winCount++
//     alert("You Win!");

//     document.getElementById("win-s").innerText = winCount;

//     game();
// }
// //  IF YOU LOSE!!!
// else if(guessesLeft == 0) {
//     lossCount++
//     alert("You Lost");

//     document.getElementById("loss-s").innerText = lossCount;

//     game();
// }