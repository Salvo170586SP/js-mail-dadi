console.log('JS OK');

/* 
// # Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.


// # Gioco dei dadi
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.

*/


//MAIL
/* 
-creo array di mail
-chiedo email all'utente
-ciclo la variabile mails per quante sono le mail nell'array
-creo condizione 
    -se la email è nella lista
        -stampo messaggio in console "sei autorizzato"
    -altrimenti
        -stampo messaggio in console "non sei registrato" 
*/


//creo array di mail
const mails = ["salvo@gmail.com", "marco@gmail.com", "paolo@gmail.com"];
console.table(mails);

//chiedo email all'utente
const userMail = prompt("digita la tua mail", "salvo@gmail.com").trim();
console.log(userMail);




//-ciclo la variabile mails per quante sono le mail nell'array
for(let i = 0; i < mails.length; i++){
    console.log(mails[i]); 
}
