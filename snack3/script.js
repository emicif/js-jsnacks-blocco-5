console.log('JS OK!')

//Scrivi una funzione che accetti una stringa come argomento 
// e la ritorni girata (es. Ciao -> oaiC)

stringa('ciao');

function stringa (parola) {
    const parolaDivisa = parola.split('');
    const parolaReverse = parolaDivisa.reverse();
    const parolaInvertita = parolaReverse.join('');
    console.log('La parola invertita è', parolaInvertita);
}

