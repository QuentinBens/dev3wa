var niveau = prompt("Quel niveau voulez-vous utilisé? Debutant, Confirme, Senior").toLowerCase();
var tolerance = 5;
var limitEssai = 5;

if(niveau == "debutant"){
  var nombreOr = Math.floor((Math.random() * 10) + 1);
}else if(niveau == "confirme"){
   tolerance = 4;
   nombreOr = Math.floor((Math.random() * 10) + 1);
   limitEssai = 4;
}else{
  tolerance = 3;
  limitEssai = 3;
  nombreOr = Math.floor((Math.random() * 10) + 1);
}
//alert(nombreOr);


var nbEssai = 0;
var tableauEssai = [];
// + / - 2
var nombreDemande = prompt("Veuillez deviner le nombre d'Or?");
if(nombreDemande - nombreOr >= -tolerance && nombreDemande - nombreOr <= tolerance && nombreOr != nombreDemande){
      alert("Tu brûle");
}

tableauEssai.push(nombreDemande);
nbEssai++;


while(nombreOr != nombreDemande && nbEssai < limitEssai){

    nombreDemande = prompt("Veuillez deviner le nombre d'Or et ? (" + nbEssai + ")");
    tableauEssai.push(nombreDemande);
    
    // Comparer nombreDemande à nombreOr avec 2
    if(nombreDemande - nombreOr >= -tolerance && nombreDemande - nombreOr <= tolerance && nombreOr != nombreDemande){
      alert("Tu brûle");
    }
    
    nbEssai++;
    
}

if(nombreOr == nombreDemande ){
  if(nbEssai == 1){
      alert('Bien joué! One Shot + ' + nbEssai);
  }else{
      alert('Bien joué! + ' + nbEssai);
  }
}
 
if(nombreOr != nombreDemande || nbEssai == 5){
  alert("Tu as perdu... la bon ne réponse est: "  + nombreOr);
  console.log("Les reponses envoyées ont été" + tableauEssai);
  
}else{ // nombreOr == nombreDemande || nbEssai != 5
  alert('Fin du jeu.');
}