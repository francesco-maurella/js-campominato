// funzione generatrice numeri random
function getRandomNum(max) {
  var getResult = parseInt(Math.floor((Math.random() * max) + 1));
  return getResult;
}

// funzione inserimento di numero, verificandone la validità
function getUserNum() {
  do {
    var num = parseInt(prompt('Inserisci un numero'));
    if (isNaN(num)) {
      alert('Ammessi soltanto caratteri numerici');
    } else {
      return num;
    }
  } while (!isNaN(num));
}

// funzione verifica requisiti di inserimento
function isValid(num, nums, max) {
  if (num > max) {
    alert('Il numero deve essere compreso tra 1 a 100');
  } else if (nums.includes(num)) {
    alert('Non puoi inserire lo stesso numero 2 volte');
  } else {
    return true
  }
}

switch (expression) {
  case expression:

    break;
  default:

}

var numLimit = 100; // var limite massimo del valore numerico
var bombsNum = []; // dichiarazione array contenitore 16 numeri "bomba"

// ciclo FOR generatore di 16 numeri
for (var i = 0; i < 16; i++) {
  bombsNum.push(getRandomNum(numLimit));
}

var userNum; // dichiariamo var numero utente
var userNums = []; // dichiarazione array contenitore numeri utente

// parte un ciclo DO WHILE
do {
  // riempiamo la var numero utente
  userNum = getUserNum();
  // verifichiamo requisiti descritti nella funzione
  if (isValid(userNum, userNums, numLimit)) {
    userNums.push(userNum); // inseriamo il numero nelL'apposito array
  }
  // ciclo si interrompe se numero è presente nell'array "numeri bomba"
} while (!bombsNum.includes(userNum));

// esito
alert('Il numero ' + userNum + ' è una bomba! Partita terminata.');
alert('Punteggio: ' + (userNums.length - 1));
