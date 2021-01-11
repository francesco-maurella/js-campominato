// funzione generatrice numeri random
function getRandomNum(max) {
  var getResult = parseInt(Math.floor((Math.random() * max) + 1));
  return getResult;
}

// funzione inserimento di numero, verificandone la validità numerica
function getNum(max) {
  var choice = parseInt(prompt('Inserisci un numero, da 1 a ' + max));
  return choice;
}

// funzione verifica limite minimo e massimo di un numero
function isExtra(num, max) {
  return (num == 0 || num > max);
}

// funzione verifica numero duplicato
function isDuplicate(num, nums) {
  return (nums.includes(num));
}

// funzione equivalenza quantità numeri & capacità contenitore
function isEqual(nums, max) {
  return nums.length === max;
}

// funzione equivalenza quantità numeri & capacità contenitore
function isNotValid() {
  alert('Valore inserito non valido.');
  return false
}

// regole di gioco
alert('CAMPO MINATO\n\nInserisci i numeri, evitando di scrivere quelli "bomba"');
alert('Per giocare imposta un livello di difficoltà');
alert('Scrivi:\n\n "1" per Facile.\n "2" per Medio.\n "3" per Difficile.');

var level; // dichiariamo var "livello"
var levels = 3; // numero livelli
var nextStep; // dichiariamo var "step successivo"

// ciclo DO WHILE per selezionare livello difficoltà
do {
  level = getNum(levels); // scriviamo un numero livello valido
  if (isNaN(level) || isExtra(level, levels)) {
    nextStep = isNotValid();
  } else {
    nextStep = true
  }
} while (!nextStep); // il ciclo continua finchè nextStep risulta "false"

var numsLimit; // dichiarazione var quantità numeri

// la quantità di numeri "numsLimit" varierà in base al livello scelto
switch (level) {
  case 1:
    numsLimit = 100;
    break;
  case 2:
    numsLimit = 80;
    break;
  case 3:
    numsLimit = 50;
    break;
}

// esito scelta livello
alert('Livello difficoltà: ' + level + '\n' + numsLimit + ' tentativi disponibili');
alert('Iniziamo');

var bomb; // dichiarazione var "numero boba"
var bombs = []; // dichiarazione array contenitore 16 numeri "bomba"

// ciclo DO WHILE per generare contenuto dei numeri bomba
do {
  bomb = getRandomNum(numsLimit); // generiamo un numero bomba
  if (!isDuplicate(bomb, bombs)) { // se non ci sono numeri duplicati
    bombs.push(bomb); // il numero viene inserito nel contenitore "numeri bomba"
  }
} while (!isEqual(bombs, 16)) // fine ciclo quando la quantità di bombe è = 16

console.log(bombs);

var usrNum; // dichiariamo var numero utente
var usrNums = []; // dichiarazione array contenitore numeri utente
var usrNmsCapacity = numsLimit - bombs.length; // capacità array numeri utente
var win; // dichiariamo var vittoria
var loose; // dichiariamo var sconfitta

// ciclo DO WHILE per iniziare inserimento numeri utente
do {
  // scriviamo un numero valido
  usrNum = getNum(numsLimit);
  // verifichiamo i requisiti (numero intero, non duplicato, non fuori target)
  if (isNaN(usrNum) || isDuplicate(usrNum, usrNums) || isExtra(usrNum, numsLimit)) {
    usrNum = isNotValid();
  } else if (!isDuplicate(usrNum, bombs)) { // se non è presente tra le "bombe"
    usrNums.push(usrNum); // inseriamo la scelta nelL'apposito array
  }
  // vinciamo quando raggiungiamo capacità max del contenitore usrNums
  win = isEqual(usrNums, usrNmsCapacity);
  // perdiamo quando il numero utente è presente tra i numeri bomba
  loose = isDuplicate(usrNum, bombs);
  // ciclo continua finchè non raggiungiamo capacità massima, o numero non corrisponde a una bomba
} while (!win && !loose);

/* --- Con l'operatore OR non funziona, non capisco perchè:
while (!win || !loose);
 --- */

// esiti in base al risultato
if (win) { // in caso di vittoria
  alert('Complimenti, hai evitato tutti i numeri bomba!');
} else { // in caso di sconfitta
  alert('Il numero ' + usrNum + ' è una bomba! Partita terminata.');
}

alert('Punteggio: ' + usrNums.length); // punteggio
