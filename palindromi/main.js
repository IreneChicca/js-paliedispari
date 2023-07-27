// - chiedo una parola all'utente e la inserisco in una variabile

const userWord = prompt("Inserisci una parola");

const wordL = userWord.length - 1;

let readWord = "";


function read(val) {

    for (let i = wordL; i >= 0; i--) {


        readWord += val[i];

    }
    return readWord

}


const reversedWord = read(userWord)

if (userWord == reversedWord) {

    alert("palindromo yes")

}
else {
    alert("palindromo nop")

}