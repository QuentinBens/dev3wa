// alert() permet d'afficher en boite de dialogue un message
// () oermet d'afficher en boite de dialogue et de demander une information à l'utilisateur


// Demander (()) en boite de dialogue le signe astrologique
// Afficher (alert()) en boite de dialogue la tranche du mois de naissance
// Vous etes Poisson et vous né entre 2 Mars au 29 Mai
// var sign = ( "Quel est votre signe Astrologique ?")
// var date = new Date();
// var myCurrentMonth = date.getMonth()+ 1;
// var myCurrentDate = date.getDate();
// var myCurrentDateMonth = myCurrentDate && myCurrentMonth;
// console.log(myCurrentDateMonth);


// var signe = ("Quel est votre symbole astrologique?").toLowerCase();

// // j'extrait la date courante
// var myCurrentDate =  new Date();
// var myCurrentMonth = myCurrentDate.getMonth();


// // comparaison ==
// if(signe == "poisson"){
//  alert("Vous êtes poisson et vous né entre Fin  26 février Debut 2 avril"); 
  
//  if(myCurrentMonth >= 1 && myCurrentMonth <= 3){
//    alert("C'est le mois des poissons"); 
//  }
    
// }

// else if(signe == "vierge"){
//  alert("Vous êtes vierge et né entre aout et septembre"); 
  
//    if(myCurrentMonth >= 8 && myCurrentMonth <= 10){
//    alert("C'est le mois des vierges");

//  }

// }
// //...
// else{
//  alert("Je n'ai pas compris votre symbole"); 
// }



// // Autre manière
// var symboles = ["cancer", "vierge", "capricorne", "verseau", "scropion", "belier", "poisson"];

// //symbole
// var signe = ("Quel est votre symbole astrologique?").toLowerCase();

// //boucle qui va parcourir mon tableai
// // i = i + 1; <=> i++

// // Technique de Drapeau
// var drapeau = false;

// for(var i = 0; i < symboles.length; i++){
 
//   // i = 0 => 1ere tour
//   // i = 5 => 2eme tour de boucle
//   if(signe  == symboles[i]){
//     drapeau = true;
//     alert("Votre signe astrologique est " + signe);
//   }
  
// }

// if(drapeau == false){
//      alert("Votre signe astrologique est incorrecte");
// }

// // Autre methode !!! 
// while(symboles.indexOf(signe) == -1){
//   signe = ("Quel est votre symbole astrologique?").toLowerCase();
// }


var reponse = Math.floor((Math.random() * 10) + 1);
console.log("Le nombre que tu dois deviner est " + reponse );
var resultatDevinette = prompt("Saisissez un chiffre entre 1 et 10 !");
if(resultatDevinette - reponse >= -2 && resultatDevinette - reponse <= 2 && resultatDevinette != reponse ){
	alert("Tu Brûle !!!")
	}
var compteur = 0;
	compteur++;

var tabEssai = [];



if(resultatDevinette == reponse) {
	alert(" Crongratulation u have win !  En seulement " + compteur + " réponses ");
}

else {
	while(resultatDevinette != reponse && compteur <= 5){
	resultatDevinette = prompt("Veuillez ressaisir un chiffre entre 1 et 10 !");
	compteur++;
	tabEssai.push(resultatDevinette);

	if(resultatDevinette - reponse >= -2 && resultatDevinette - reponse <= 2 && resultatDevinette != reponse ){
	alert("Tu Brûle !!!")
	}

}
}
(resultatDevinette == reponse) {
	alert(" Crongratulation u have win !  En seulement " + compteur + " réponses ");
	}
	else if(compteur == 5){
		alert("Dommage tu as perdu ! la réponse était " + reponse);
	}


	

