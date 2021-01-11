// funzione generatrice numeri random
function getRandomNum(max) {
  var getResult = parseInt(Math.floor((Math.random() * max) + 1));
  return getResult;
}

// funzione inserimento di numero, verificandone la validità numerica
function getNum() {
    var choice = parseInt(prompt('Inserisci un numero'));
    if (isNaN(choice)) {
      alert('Ammessi soltanto caratteri numerici');
    } else {
      return choice;
    }
}

// funzione verifica limite minimo e massimo di un numero
function isExtra(num, max) {
  if (num == 0 || num > max) {
    alert('Il numero deve essere compreso tra 1 e ' + max);
    return true;
  }
}

// funzione verifica numero duplicato
function isReply(num, nums) {
  if (nums.includes(num)) {
    alert('Numero già inserito precedentemente!');
    return true;
  }
}

// funzione equivalenza quantità numeri & capacità contenitore
function isEqual(nums, max) {
  return nums.length === max;
}

// regole di gioco
alert('CAMPO MINATO\n\nInserisci i numeri, evitando di scrivere quelli "bomba"');
alert('Per giocare imposta un livello di difficoltà');
alert('Scrivi:\n\n "1" per Facile.\n "2" per Medio.\n "3" per Difficile.');

// ciclo DO WHILE per selezionare livello difficoltà
do {
  var level = getNum(); // scriviamo un numero valido
  if (isExtra(level, 3)) {
    level = false; // se maggiore di 3 il ciclo ripartirà
  }
} while (!level);

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

var bombsNum = []; // dichiarazione array contenitore 16 numeri "bomba"
var bombsQuantity = 16; // quantità dei numeri bomba

// ciclo FOR generatore di 16 numeri
for (var i = 0; i < bombsQuantity; i++) {
  bombsNum.push(getRandomNum(numsLimit));
}
console.log(bombsNum);

var usrNum; // dichiariamo var numero utente
var usrNums = []; // dichiarazione array contenitore numeri utente
var usrNmsCapacity = numsLimit - bombsQuantity; // capacità array numeri utente
var win; // dichiariamo var vittoria
var loose; // dichiariamo var perdita

// ciclo DO WHILE per iniziare inserimento numeri utente
do {
  // scriviamo un numero valido
  usrNum = getNum();
  // verifichiamone i requisiti (se non è duplicato e se rientra nel quantity-range)
  if (!isReply(usrNum, usrNums) && !isExtra(usrNum, numsLimit)) {
    // inseriamo la scelta nelL'apposito array
    usrNums.push(usrNum);
  }
  // vinciamo quando raggiungiamo capacità max del contenitore usrNums
  win = isEqual(usrNums, usrNmsCapacity);
  // perdiamo quando il numero utente è presente tra i numeri bomba
  loose = bombsNum.includes(usrNum);
  // ciclo continua finchè non è vera la "vittoria" o la "perdita"
} while (!win && !loose);

/* --- Con l'operatore OR non funziona, non capisco perchè:
while (!win || !loose);
 --- */

// esiti in base al risultato
if (win) { // in caso di vittoria
  alert('Complimenti, hai evitato tutti i numeri bomba!');
} else { // in caso di sconfitta
  alert('Il numero ' + usrNum + ' è una bomba! Partita terminata.');
  usrNums.length = usrNums.length - 1; // - 1 per non contare il num. bomba
}

alert('Punteggio: ' + usrNums.length); // punteggio
