



let Letter = function(Word, blanks) 
{
    this.wrongLetters = [];

    this.guessesLeft = 9;

    this.blanksAndSuccess=[];

    this.selectedWord = Word.toLowerCase();

    this.numBlanks = blanks;

    this.guessedLetter = "";

    this.lettersGuessed = false;

    this.CheckLetter = function(letter) 
    {
            this.letterCorrect = false;
        
            for (i = 0; i < this.numBlanks; i++) 
            {
                if (this.selectedWord[i] == letter) 
                {
                    this.letterCorrect = true;
                };
            };
        
            if (this.letterCorrect) 
            {
                for (i = 0; i < this.numBlanks; i++) 

                {

                    if (this.selectedWord[i] == letter) 

                    {

                        this.blanksAndSuccess[i] = letter;

                    };
                };
            }
        
            else {
                this.wrongLetters.push(letter);
                this.guessesLeft--
                };
        
    };
        


    this.blanks = function() 
    {
        for (var i = 0; i < this.numBlanks; i++) 
        {
            this.blanksAndSuccess.push("_");
            // console.log(blanksAndSuccess.join(" "))
        };
    };

    this.blanks();

    console.log("Deep in:" + this.selectedWord);



// ======================= TESTING ===========================================
    console.log(this.numBlanks);
    // this.CheckLetter(this.guessedLetter);
    // console.log(this.lettersInWord);
    console.log(this.selectedWord);
    // console.log(this.guessedLetter);
    console.log(this.guessesLeft);
    console.log(this.blanksAndSuccess.join(" "));

// ======================= TESTING ===========================================

};


module.exports = Letter;