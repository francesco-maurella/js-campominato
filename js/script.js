// funzione generatrice numeri random
function getRandomNum(max) {
  getResult = parseInt(Math.floor((Math.random() * max) + 1));
  return getResult;
}

//dichiarazione array contenitore 16 numeri
var bombsNum = [];

// ciclo FOR generatore di 16 numeri
for (var i = 0; i < 16; i++) {
  bombsNum.push(getRandomNum(100))
}


/* verificare se un numero scelto dall'utente rientra nell'array
attraverso un ciclo WHILE */
