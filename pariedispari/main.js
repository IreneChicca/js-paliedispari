

// - **se** il valore sarà uguale a quello scelto inizialmente dall'utente
//     - allora quest'ultimo avrà vinto
//     - altrimenti no


// - chiedo all'utente un parametro tra pari e dispari e chiedo all'utente di inserire un numero da 1 a 5

const choice = prompt("Scegli tra \"pari\" o \"dispari\"")
const userNum = parseInt(prompt("Scegli un numero tra 1 e 5"))

// prendo elementi di interesse per stampare

const choiceEl = document.getElementById("choice")
const userEl = document.getElementById("user-num")
const pcEl = document.getElementById("pc-num")
const resultEl = document.getElementById("result")


// stampo per far vedere all'utente

choiceEl.innerHTML = "Hai scelto: " + choice;
userEl.innerHTML = "Il tuo numero è: " + userNum;
pcEl.innerHTML = "Il numero dell'avversario è: " + randomNum();

// - con una funzione genero un numero random per il pc

function randomNum() {
    const random = Math.floor(Math.random() * (5)) + 1;

    return random;
}




// - con una funzione sommo i due numeri e return un valore tra pari o dispari


function sumNum(val1, val2) {

    const sum = val1 + val2;

    return sum;

}


const finalNum = sumNum(randomNum(), userNum)



if (choice == 'pari' && finalNum % 2 == 0) {

    resultEl.innerHTML = "hai vinto! :D "

}

else if (choice == 'dispari' && finalNum % 2 != 0) {
    resultEl.innerHTML = "hai vinto! :D "

}
else {
    resultEl.innerHTML = 'hai perso ):'

}


