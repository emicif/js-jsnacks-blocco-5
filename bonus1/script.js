console.log('JS OK!')

// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro, 
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const letter = ['a', 'b', 'c'];
const number = [1, 2, 3];



console.log(letter[0], number[0]);

fusion(letter, number);

/*
function fusion(...myArguments) {
    console.log(letter);

}
*/


function fusion(...myArguments) {
    for (let i = 0; i < myArguments; i++) {
        console.log(myArguments);
    }
}
