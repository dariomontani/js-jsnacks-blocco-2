// jsnack 1
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const nomiCasuali = [
    'Marco',
    'Giulia',
    'Martina',
    'Laura',
    'Bruno',
    'Alfredo',
    'Luca'
];

const cognomiCasuali = [
    'Rossi',
    'Russo',
    'Ferrari',
    'Bianchi',
    'Ricci',
    'Montani',
    'Barbieri'
];

let nome = nomiCasuali[Math.floor(Math.random() * nomiCasuali.length)];
console.log(nome);

let cognome = cognomiCasuali[Math.floor(Math.random() * cognomiCasuali.length)];
console.log(cognome);

let invitatoFalso = nome + ' ' + cognome;
console.log('nome invitato falso:', invitatoFalso);