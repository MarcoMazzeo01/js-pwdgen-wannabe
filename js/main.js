// constants
const pwEnd = "21";

//variables
let firstName = prompt("Inserisci il tuo nome","Nome utente");
let lastName = prompt("Inserisci il tuo cognome","Cognome utente");
let favColor = prompt("Inserisci il tuo colore preferito","Colore preferito");

//main
let passwordDisplay = `${firstName + lastName + favColor + pwEnd}`

document.getElementById("password").innerHTML = passwordDisplay

