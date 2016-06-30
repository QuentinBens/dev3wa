// Jeu en ligne: http://www.jeux.com/flash/blackjack-gratuit-3373.html


// Phase d'initialisation :


// Enssemble de carte:
var listeCarte = [1,2,3,4,5,6,7,8,9,10];
var notreMain = [];
var croupierMain = [];

// Nombre aléatoire de 0 à 9
// Ces 2 nombres serviront à generer les 2 cartes tirées aléatoirement
var nombreOneJoueur = Math.floor(Math.random() * 10);
var nombreTwoJoueur = Math.floor(Math.random() * 10);
var nombreOneCroupier = Math.floor(Math.random() * 10);
var nombreTwoCroupier = Math.floor(Math.random() * 10);

//J'extrait mon elment de mon trableau selon la position titrées aléatoirement
var carteOneJoueur = listeCarte[nombreOneJoueur];
var carteTwoJoueur = listeCarte[nombreTwoJoueur];
var carteOneCroupier = listeCarte[nombreOneCroupier];
var carteTwoCroupier = listeCarte[nombreTwoCroupier];
var scoreMain = carteOneJoueur + carteTwoJoueur;
var scoreCroupier = carteOneCroupier + carteTwoCroupier;

notreMain.push(carteOneJoueur, carteTwoJoueur);
croupierMain.push(carteOneCroupier, carteTwoCroupier);

console.log("Vos cartes sont, " + notreMain, "Celle du croupier " + croupierMain);
console.log("Votre score, " + scoreMain, " Celle du croupier, " + scoreCroupier);

alert("Vos cartes sont " + carteOneJoueur + " et " + carteTwoJoueur + " Total actuel " + scoreMain );
// ETAPE 1 : 1er TOUR
var souhaitOne = prompt("Votre Main est de " + scoreMain + " Voulez-vous vous coucher ou piocher ? Répondez 'piocher' ou 'coucher'").toLowerCase();
if(scoreMain == 20){
	alert("BlackJack à 20 en 23 cartes!!!");
}
else{
		if(souhaitOne == 'piocher'){
		// 3 eme carte
		var nombreThreeJoueur = Math.floor(Math.random() * 10);
		var carteThreejoueur = listeCarte[nombreThreeJoueur];
		notreMain.push(carteThreejoueur);
		// score
		scoreMain = scoreMain + carteThreejoueur;
		console.log("la troisieme carte est " + carteThreejoueur + ", Mon score de main est " + scoreMain);

		if(scoreMain > 20){
			alert("C'est perdu... ! ");
		}
		else if(scoreMain < 20){
			var souhaitTwo = prompt("Votre Main est de " + scoreMain + " Voulez-vous vous coucher ou piocher ? Répondez 'piocher' ou 'coucher'").toLowerCase();
			if(souhaitTwo ='piocher'){
				// 4eme carte :  on ajoute la variante  4eme carte
				var nombreFourJoueur = Math.floor(Math.random() * 10);
				var carteFourjoueur = listeCarte[nombreFourJoueur];
				notreMain.push(carteFourjoueur);
				// score avec la 4 éme carte
				scoreMain = scoreMain + carteFourjoueur;
				console.log("La quatrieme carte est " + carteFourjoueur + " Mon score de main est " + scoreMain);
				// Si score plus grand que 20 c'est perdu
				if(scoreMain > 20){
					alert("C'est perdu... ! Car votre score main est " + scoreMain + " plus grand que 20");
				}
				// Sinon si le score égale à 20
				else if(scoreMain == 20){
					alert("BlackJack !!");
				}
			}
		}
		else{
			alert("BlackJack à  20 et à 3 cartes !!!");
		}
		
	}
	else{
		if(scoreCroupier < 17){
		// Initialisation score Croupier
		var nombreThreeCroupier = Math.floor(Math.random() * 10);
		var carteThreeCroupier = listeCarte[nombreThreeCroupier];
		// J'ajoute la 3éme  carte dans la main du croupier
		croupierMain.push(carteThreeCroupier);
		// j'adittione la 3eme carte au score croupier		
		scoreCroupier = scoreCroupier + carteThreeCroupier;
		}
		if( scoreMain < scoreCroupier ){
			alert("C'est perdu");
		}
		else{
			alert("C'est gagné !!! ");
		}
		

		// REVELER LES CARTES DU CROUPIER 
		// Et dire si on a gagné ou perdu 
		// Tant que score du groupier < 17 alors on lui faire retirer carte 
	}
}