// Il programma dovrà chiedere all'utente il numero
// di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo
//  totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai
// km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in
// forma umana (con massimo due decimali, per indicare
//  centesimi sul prezzo).


// BIGLIETTO TRENO

// richiesta numero km
const tripLenght = prompt('Qunti chilometri vuoi percorrere?');
console.log(tripLenght);
// età passeggero
const ageUser = prompt('Quanti anni hai?');
console.log(ageUser);
// creo variabile output
let ticketPrice;
// se età passegero minore di 18 allora sconto 20%
if ( ageUser < 18) {
    ticketPrice = (((tripLenght * 0.21)/100)*80);
// se over 65 sconto 40%
} else if ( ageUser > 65 ) {
    ticketPrice = (((tripLenght * 0.21)/100)*60);
} else {
    ticketPrice = tripLenght * 0.21;
}
// arrotondo
ticketPrice = ticketPrice.toFixed(2);
console.log(ticketPrice);
// OUTPUT
// Stampo il risultato all'utente
alert(ticketPrice);
document.getElementById('ticket-price').innerHTML = 'sono:'+ticketPrice+'€ grazie';
