console.log('JS OK!')

// Crea un array di 10 oggetti che rappresentano una zucchina, 
// indicando per ognuna varietà, peso e lunghezza. 
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
    varietà: 'normale',
    peso: 50,
    lunghezza: '16'
    },
    {
    varietà: 'nera',
    peso: 72,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 100,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 157,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 120,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 115,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 126,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 40,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 90,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 145,
    lunghezza: '16'
    }
]


let somma = 0;
    for (let i = 0; i < zucchine.length; i ++) {
        const totaleZucchine = zucchine[i];
        somma += totaleZucchine.peso;
    }
    console.log('Il totale del peso delle zucchine presenti nella lista è', somma, 'grammi');


