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


//////////////////////////////////////////////////////////////////////////////

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




//creo variabile per agganciare elemento in pagina
const resultElement = document.getElementById('welcome');

//creo array di mail
const mails = ["salvo@gmail.com","marco@gmail.com","luca@gmail.com"];
console.table(mails);
 
//chiedo email all'utente
const userMail = prompt("digita la tua mail", "luca@gmail.com").trim();


//creo variabile con messaggio di default 
let message = "Non sei registrato";

//-ciclo la variabile mails per quante sono le mail nell'array
for(let i = 0; i < mails.length; i++){
    let currentElement = mails[i];
    console.log(currentElement);

    //creo condizione se la mail dell'utente è nella lista
    //se la mail è uguale alla mail della lista
    if(userMail === currentElement){
        //stampa in pagina "sei registrato"
        message = `${userMail} sei registrato`;
    }
}

//stampo testo all'interno della pagina
resultElement.innerText = message;



///////////////////////////////////////////////////////////////////////////////////////////


// # Gioco dei dadi
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
*/


/*
-creo variabile numero generato da cpu da 1 a 6
-creo variabile numero generato dall'utente da 1 a 6
-creo la condizione per confrontare i due numeri
    -se il numeroCpu è maggiore del numeroUtente
        -stampo in console "il numeroCpu è maggiore del numeroUtente"
        -altrimenti se i numeri sono uguali stampo "il numeroCpu è uguale al numeroUtente"
        -altrimenti stampo in console "il numeroutente è maggiore del numeroCpu"
*/


//creo variabile numero generato da cpu da 1 a 6
const numberCpu = Math.floor(Math.random() * 6) + 1;
console.log(numberCpu);



