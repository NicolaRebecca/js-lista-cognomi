var cognomiArray = ['bianchi','rossi','verdi','fumagalli','brambilla','scotti']
// var cognomeUtente = prompt("inserisci il cognome")

while ( cognomeUtente = prompt("inserisci il cognome")){
 cognomiArray.push(cognomeUtente)
 break
}

for( var i = 0; i < cognomiArray.length; i++){
    cognomiArray.sort()
 }

document.getElementById("risultato").innerHTML += cognomiArray;
