// - chiedo una parola all'utente e la inserisco in una variabile

const userWord = prompt("Inserisci una parola");

const wordL = userWord.length - 1;

let readWord = "";

for (let i = wordL; i >= 0; i--) {


    readWord += userWord[i];
    console.log(readWord)

}
