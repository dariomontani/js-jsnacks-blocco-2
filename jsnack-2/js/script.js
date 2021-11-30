// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numeri = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
];

let even = 0;
let odd = 0;
for (let i = 0; i < numeri.length; i++) {

    if (i % 2 == 0) {
        even += numeri[i];
    } else {
        odd += numeri[i];
    }
}

console.log(even);