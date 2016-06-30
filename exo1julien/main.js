//alert() est une fonction qui permet d'affichier une boite de dialogue
/*
*
Commentaire sur plusieurs ligne
*
*/
//Commentaire sur une ligne 
// alert("Bonjour La promotion L9");



// chaine est le nom de la variable
// "Coucou world!" est la valeur de la variable chaine
// Assignation (affecter une valeur à une variable)
var chaine = "Coucou world!";

// alert(chaine)

// Je déclare 4 variable: nom, prenom, âge, ville
/*J'affiche mes 4 variables dans la boite de dialogue en ajoutant + pour
qu'elles apparaissent dans la même boite*/

// l'assignation
var lastname = "BENARD";
var firstname = "Quentin";
var age = 23;
var city = "Montélimar ";
var note = 18;


// La concatenation pour cumuler les valeurs dans la boite de dialogue
// alert("Je suis " + lastname + " " + firstname + " " + "j'ai " + age + "ans " + " j'habite " + city + "et je mesure " + note + "m")


// debuger avec la console cnsole log est mon AMI
// debuger des variable comme "nom" et "prenom"
console.log(lastname, firstname);


// arithmetique et permet les calculs + - * / fonctionne
var nombre = 1;
var autreNombre = 55;

var resultat = nombre + autreNombre;

console.log(resultat);


// Conditions ...


// Si age et inférieur à 18
// Si (ma condition) { }

if(age < 18){

	console.log("Vous êtes mineur...Dommage :( ");

}

else if(age < 30){ //Sinon si (condition)
 	
 	console.log("Vous êtes un jeune majeur avec un peu d'experience");

 }
else{ //Sinon

	console.log("Vous êtes majeur. Bienvenue :) ");

}

if(note < 10){

	console.log("je n'ai pas eu mon bac");
}
else if(note >= 10 ){

	console.log("j'ai eu mon bac");

}

if(note < 8){

	console.log("recalé");

}
else if(note >= 8 && note < 10){

	console.log("Rattrapage");
}
if(note >= 10 && note < 12){

	console.log("Passable");
}
if(note >= 12 && note < 14){

	console.log("Mention AB");
}
if(note >= 14 && note < 16){

	console.log("Mention B");
}
if(note > 16){

	console.log("TB")
}



// EXERCICE 1 sur note de commentaire
// pas d'accent, pas d'espace, pas d'undescore, pas de schiffre premier
// CamelCase => Des Majuscules à la place d'espace
// Priviligier entre  4 et 8 caractères pour le nommage d'une variable
var noteone = 5;
var notetwo = 5;
var notethree = 5;
var notefour = 5;
var notefive = 5;

var resultat = (noteone + notetwo + notethree + notefour + notefive) / 5;


console.log(resultat);
// comparer 2 valeur entre elles "=="
//  Le ou se symbolise avec ||
if(noteone == 0 || notetwo == 0 || notethree == 0 || notefour == 0 || notefive == 0){
	console.log("Impossible d'avoir une note égale à zéro");
}

else if(noteone == 5 && notetwo == 5 && notethree == 5 && notefour == 5 && notefive == 5){
		console.log("Ce film est un chef d'oeuvre !! ");
	}

	else if(resultat < 3 ){
		console.log("film nul");
	}

	else if(resultat >=3 && resultat <=4){
		console.log("film moyen");
	}

	else if(resultat > 4){
		console.log("film super! deadpool");
}


// Tableau entre crochets
var tab = [15,10,12,2,5,7,8];

console.log(tab);

// Tableau commence par l'indice 0
var prenoms = ["Clarysse", "Olivier", "Martin", "Alain", "Zoé", "Julien"];

console.log(prenoms);

console.log(prenoms[0]);

console.log(prenoms[4]);

prenoms[1] = "Robert";

console.log(prenoms[1]);




// Intervertion...
var prenomTemp = prenoms[4]; // Zoe ds prenomTemp
prenoms[4] = prenoms[5]; // ["Clarysse", "Olivier", "Martin", "Alain", "Julien", "Julien"];
console.log(prenoms);
prenoms[5] = prenomTemp // ["Clarysse", "Olivier", "Martin", "Alain", "Julien", "Zoe"];
console.log(prenoms);



// Longueur d'un tableau: compter le nombre d'element que comporte un tableau
console.log(prenoms.length);

// Compte le nb d'elment d'un tableau
console.log(tab.length);


//Boucle

// Boucle sert principalement a parcourir chaque element de tableau
// 1ere etape: initialisation de ma boucle. (i = 0)
// 2nd etape: c'est la condition d'arret de ma boucle (i < tab.length)
// 3eme etape:  incrementation: i = i +1

// 0 ...
// 1 ...
// 2...
for(var i = 0; i < tab.length; i++){
 
console.log(i);

}

for(var i = 0; i < prenoms.length; i++){
 
console.log(prenoms[i]);

}
 console.log(tab[i]); // tab[i] correspond à l'element courant dans ma boucle
  // tab[0]
  // tab[1]



// Exercice:
// Afficher chaque prénom du tableau des prenoms
// Si le prénom est le vôtre, afficher "C'est moi!"
var prenoms = ["Clarysse","Roxane", "Ayapo", "Olivier", "Martin", "Alain", "Zoé", "Julien"];



// Initialisation de ma variable 
// var i = 0

// Condition d'arret
// if(i < prenoms.length)

// i++ Incrémentation


var nombre = 5;

//<=> nombre++;

nombre = nombre + 1; //<=> nombre++;
  
// boucle à 3 etapes
for(var i = 0; i < prenoms.length; i++){
  
  if(prenoms[i] == "Julien"){ // prenoms[i] est le prénom courant dans ma boucle
  
    console.log("C'est moi ");
  
  } else{
    
    console.log(prenoms[i]);
  }
  
}

var tabsecond = [3,6,18,12,13,15,17,11,5,7];

console.log(tabsecond);

var compteurInf = 0;
var compteurSup = 0;
var note16a20 = 0;
var note8a12 = 0;
var newtab = [];

for(var i = 0; i < tabsecond.length; i++){

	if (tabsecond[i] < 10){
		compteurInf++; //compteurInf = CompteurInf +1;
		}
	else {
		compteurSup++;
		}
}

for(var i = 0; i < tabsecond.length; i++){

	if (tabsecond[i] >= 16 && tabsecond[i] <= 20){
		note16a20++;
		}
	else if (tabsecond[i] >= 8 && tabsecond[i] <= 12){
		note8a12++;
	}
}
for(var i = 0; i < tabsecond.length; i++){

	if (tabsecond[i] >= 12 && tabsecond[i] <= 18){
		newtab.push(tabsecond[i]);
	}
}

console.log("Note inférieur à 10 = " + compteurInf)
console.log("Note supérieur à 10 = " + compteurSup)
console.log("Note comprise entre 16 et 20 = " + note16a20)
console.log("Note comprise entre 8 et 12 = " + note8a12)
console.log(newtab);
console.log(newtab.length);





// Exercice

// Créer un tableau avec 10 notes  (les notes seront sur 20)
// Compter le nombre de notes au dessus de la moyenne (10/20)
// Compter le nombre de notes en dessous de la moyenne


// Créer 2 variable compteurs

// Le nb. de note inférieur à 10 est de: 4
// Le nb. de note supérieur à 10 est de : 6
// Afficher Le nb. de note comprise entre 16 et 20 ou 8 et 12
// Stocker dans un nouveau tableau les notes comprises entre 12 et 18 (fonction push())
// Afficher le nouveau tableau de notes et le nombre d'elements qu'il comporte 
// Calculer la moyenne de ce nouveau tableau


// Bonus: Afficher la note la plus petite
// Bonus 2: Afficher la note la plus grande



prompt( "Quel est votre signe Astrologique ?");