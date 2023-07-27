

// - **se** il valore sarà uguale a quello scelto inizialmente dall'utente
//     - allora quest'ultimo avrà vinto
//     - altrimenti no


// - chiedo all'utente un parametro tra pari e dispari e chiedo all'utente di inserire un numero da 1 a 5

const choice = prompt("Scegli tra \"pari\" o \"dispari\"")
const userNum = parseInt(prompt("Scegli un numero tra 1 e 5"))
const pcNumber = randomNum();

// prendo elementi di interesse per stampare

const choiceEl = document.getElementById("choice")
const userEl = document.getElementById("user-num")
const pcEl = document.getElementById("pc-num")
const resultEl = document.getElementById("result")



// stampo per far vedere all'utente


choiceEl.innerHTML = "Hai scelto: " + choice;
userEl.innerHTML = "Il tuo numero è: " + userNum;
pcEl.innerHTML = "Il numero dell'avversario è: " + pcNumber;

// - con una funzione genero un numero random per il pc

function randomNum() {
    const random = Math.floor(Math.random() * 5) + 1;
    return random;

    // (max - min + 1 ) + min
    // console.log(Math.floor(Math.random() * (5 - 1 + 1) + 1))

    // 0 - 9
    // Math.floor(Math.random() * 10);

    // // 1 - 10
    // Math.floor(Math.random() * 10) + 1;

    // // 10 - 20
    // Math.floor(Math.random() * 10) + 10;

    // // 20 - 30
    // Math.floor(Math.random() * 10) + 20;
}



// - con una funzione sommo i due numeri e return un valore tra pari o dispari


function sumNum(val1, val2) {

    const sum = val1 + val2;

    return sum;

}


const finalNum = sumNum(pcNumber, userNum)



if (choice == 'pari' && finalNum % 2 == 0) {

    resultEl.innerHTML = "hai vinto! :D "

}

else if (choice == 'dispari' && finalNum % 2 != 0) {
    resultEl.innerHTML = "hai vinto! :D "

}
else {
    resultEl.innerHTML = 'hai perso ):'

}


//  ho visto che quando richiamo la funzione random piu volte, (giustamente) genera ogni volta un nuovo numero, esiste un modo per incastonare il primo valore generato cosi da poter stampare messaggi ecc? 