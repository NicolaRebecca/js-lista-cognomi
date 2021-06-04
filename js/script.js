var cognomiArray = ['bianchi','rossi','verdi','fumagalli','brambilla','scotti']


while ( cognomeUtente = prompt("inserisci il cognome")){
 cognomiArray.push(cognomeUtente)
 break
}

for( var i = 0; i < cognomiArray.length; i++){
    cognomiArray.sort()
    
 }

 document.getElementById("risultato").innerHTML += cognomiArray;
 document.getElementById("risultato").innerHTML += (" <br> la mia posizione è: ") + parseInt(cognomiArray.indexOf(cognomeUtente) +1);
