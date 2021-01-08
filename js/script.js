// funzione generatrice numeri random
function getRandomNum(max) {
  getResult = parseInt(Math.floor((Math.random() * max) + 1));
  return getResult;
}

// funzione verifica numerica
function isValid(num, nums, max) {
  if (isNaN(num)) {
    alert('Ammessi soltanto caratteri numerici');
  } if (num > max) {
    alert('Il numero deve essere compreso tra 1 a 100');
  } if (nums.includes(num)) {
    alert('Non puoi inserire lo stesso numero 2 volte');
  } else {
    return true
  }
}

//dichiarazione array contenitore 16 numeri
var bombsNum = [];
var userNums = [];


// ciclo FOR generatore di 16 numeri
for (var i = 0; i < 16; i++) {
  bombsNum.push(getRandomNum(100))
}
console.log(bombsNum)

/* verificare se un numero scelto dall'utente rientra nell'array
attraverso un ciclo DO WHILE */
var count = 0;
var userNum;
do {
  userNum = parseInt(prompt('Inserisci un numero'));
  if (isValid(userNum, userNums, 100)) {
    userNums.push(userNum); // inserisce il numero nel suo array
  }
} while (!bombsNum.includes(userNum));

// esito
alert('Il numero ' + userNum + ' è una bomba! Partita terminata.');
alert('Punteggio: ' + parseInt(userNums.length) + 1);
