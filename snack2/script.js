console.log('JS OK!')


// Crea 10 oggetti che rappresentano una zucchina. 
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


// Crea 10 oggetti che rappresentano una zucchina. 
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
const zucchineMenoQuindici = [
    {
    varietà: 'normale',
    peso: 50,
    lunghezza: '13'
    },
    {
    varietà: 'nera',
    peso: 72,
    lunghezza: '11'
    },
    {
    varietà: 'normale',
    peso: 100,
    lunghezza: '12'
    },
    {
    varietà: 'normale',
    peso: 157,
    lunghezza: '14'
    },
    {
    varietà: 'normale',
    peso: 120,
    lunghezza: '15'
    },
    {
    varietà: 'normale',
    peso: 115,
    lunghezza: '9'
    }
]

const zucchinePiùQuindici = [
    {
    varietà: 'normale',
    peso: 126,
    lunghezza: '16'
    },
    {
    varietà: 'normale',
    peso: 40,
    lunghezza: '17'
    },
    {
    varietà: 'normale',
    peso: 90,
    lunghezza: '20'
    },
    {
    varietà: 'normale',
    peso: 145,
    lunghezza: '22'
    }
]


let somma = 0;
stampaPeso (zucchinePiùQuindici)
console.log('Il totale del peso delle zucchine INFERIORI a 15cm è', somma, 'gr');
stampaPeso (zucchinePiùQuindici)
    console.log('Il totale del peso delle zucchine SUPERIORI a 15cm è', somma, 'gr');
 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
function stampaPeso (zucchine){
    
    for (let i = 0; i < zucchine.length; i ++) {
        const totaleZucchine = zucchine[i];
        somma += totaleZucchine.peso;
    }
 return somma;
    
}
