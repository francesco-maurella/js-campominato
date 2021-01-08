// funzione generatrice numeri random
function getRandomNum(max) {
  getResult = parseInt(Math.floor((Math.random() * max) + 1));
  return getResult;
}

// funzione verifica requisiti numerici ammessi
function isValid(num, nums, max) {
  if (isNaN(num)) {
    alert('Ammessi soltanto caratteri numerici');
  } else if (num > max) {
    alert('Il numero deve essere compreso tra 1 a 100');
  } else if (nums.includes(num)) {
    alert('Non puoi inserire lo stesso numero 2 volte');
  } else {
    return true
  }
}

var numLimit = 100; // var limite massimo deò valore numerico
var bombsNum = []; // dichiarazione array contenitore 16 numeri "bomba"
var userNums = []; // dichiarazione array contenitore numeri utente


// ciclo FOR generatore di 16 numeri
for (var i = 0; i < 16; i++) {
  bombsNum.push(getRandomNum(numLimit))
}
console.log(bombsNum)

/* verificare se un numero scelto dall'utente rientra nell'array
attraverso un ciclo DO WHILE */
var userNum; // dichiariamo var numero utente
do {
  // riempiamo var numero utente
  userNum = parseInt(prompt('Inserisci un numero'));
  // verifichiamo requisiti descritti nella funzione
  if (isValid(userNum, userNums, numLimit)) {
    userNums.push(userNum); // inserisce il numero nel suo array
  }
} while (!bombsNum.includes(userNum));

// esito
alert('Il numero ' + userNum + ' è una bomba! Partita terminata.');
alert('Punteggio: ' + parseInt(userNums.length);
