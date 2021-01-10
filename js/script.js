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
      }
    }
    while (isNaN(num));
    return num;
}

// funzione verifica requisiti di inserimento
function isValid(num, nums, max) {
  if (num > max) {
    alert('Il numero deve essere compreso tra 1 a ' + max);
  } else if (nums.includes(num)) {
    alert('Numero già inserito precedentemente!');
  } else {
    return true;
  }
}

// funzione vincitore
function isEqual(nums, max) {
  return nums.lenght === max;
}

var numsLimit = 100; // var limite massimo del valore numerico
var bombsNum = []; // dichiarazione array contenitore 16 numeri "bomba"
var bombsQuantity = 16; // quantità dei numeri bomba

// ciclo FOR generatore di 16 numeri
for (var i = 0; i < bombsQuantity; i++) {
  bombsNum.push(getRandomNum(numsLimit));
}

var usrNum; // dichiariamo var numero utente
var usrNums = []; // dichiarazione array contenitore numeri utente
var usrNmsCapacity = numsLimit - bombsQuantity; // quantità max contenitore numeri utente

// parte un ciclo DO WHILE
do {
  // riempiamo la var numero utente
  usrNum = getUserNum();
  // verifichiamo requisiti descritti nella funzione
  if (isValid(usrNum, usrNums, numsLimit)) {
    usrNums.push(usrNum); // inseriamo il numero nelL'apposito array
  }
  // ciclo si interrompe se numero è presente nell'array "numeri bomba", o si raggiunge quantità max dell'array usrNums
} while (!bombsNum.includes(usrNum) || isEqual(usrNums, usrNmsCapacity));

// esiti in base al risultato
if (isEqual(usrNums, usrNmsCapacity)) { // in caso di vittoria
  alert('Complimenti, hai evitato tutti i numeri bomba!');
} else { // in caso di sconfitta
  alert('Il numero ' + usrNum + ' è una bomba! Partita terminata.');
  usrNums.length = usrNums.length - 1; // sottraiamo 1, alla quantità di numeri presenti nell'array userNums
}

alert('Punteggio: ' + usrNums.length); // punteggio
