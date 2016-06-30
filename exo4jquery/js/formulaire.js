 $(document).ready(function(){//DEBUT DE JQUERY



//=====================email=========================
   //selectionner le type email
   $("input[type=email]").blur(function(){

     console.log("Vous avez perdu le curseur sur l'email");

   });


   //========================EXERCICE 1==============
   // Exercice: Controller à la perte de focus le champs code postal
   // pour qu'qu'il y ait 5 chiffres: Vert si c'est bon , rouge si ce n'est pas bon

   $("#cp").blur(function(){
     var elt = $(this);

     if(elt.val().length >= 5) {
       $(this).css({
        "border": "2px solid green",
      });
     }
     else {
       $(this).css({
        "border": "2px solid red",
      });
    };
   });
   //========================EXERCICE 2====================================
  //  Exercice 2 : Ajouter un controle quand on quitte  le focus sur le champs nom
  //   ou prenom que le nom soit différent du prénom. SI le nom est égal au prénom
  //   mettre une bordure orange


$("#prenom, #nom").blur(function(){

  var elt = $(this);

  if($("#nom").val() == $("#prenom").val()){

    $("#prenom, #nom").css({
      "border": "2px solid orange",
    });
  }
  else if ($("#prenom, #nom").val().length <= 3){
    elt.css({
      "border": "2px solid red"
    });
  }
  else {
    elt.css({
      "border": "2px solid green"
    });
  }
});

// //=====================Exercice 3=========================
// Exercice 3 : Ajouter un controle quand on quitte le champs
// telephone qu'il y ait 10 chiffres


$("#tel").blur(function(){

  var eltTel = $(this);

  if($(this).val().length != 10){
    eltTel.css({
      "border": "2px solid red",
    });
  }
  else{
    eltTel.css({
      "border-color": "2px solid green"
    });
  }
});



//=====================Exercice 4=========================
/* Exercice 4 : Controller si la description a 50 caractères quand je tape
 sur le clavier avec l'evenement keyyup
  + SI la description fait <10 caractees: bordure rouge
  + SI la description est comprise entre 10 et 20: bordure orange
  + Si la description est 20 et 30 caractères: bordure jaune
  + SI la description est supérieur à 30 caractères: bordure verte */

$("#description").keyup(function() {

  var eltvalue = $(this).val();

  if(eltvalue.length <= 10){
    $(this).css({
      "border": "2px solid red"
    });
  }
  else if(eltvalue.length > 10 && eltvalue.length <= 20) {
    $(this).css({
      "border": "2px solid orange"
    });
  }
  else if (eltvalue.length > 20 && eltvalue.length <= 30) {
    $(this).css({
      "border": "2px solid yellow"
    });
  }
  else {
    $(this).css({
      "border": "2px solid green"
    });
  }
});

//==========================Exercice 5===============================
/*Exercice 5: Controller quand je tappe  la confirmation de mon mot de passe
(evenement  keyup) que cette confirmation soit égal à mon mot de passe
 et que mon mot de passe fasse bien minimum 8 caractères */

 $("#mdp, #confirmation").keyup(function(){

   var elt = $(this);

   if($("#mdp").val() != $("#confirmation").val()){
     $("mdp, #confirmation").css({
       "border": "2px solid red"
     });
   }
   else{
     $("#mdp, #confirmation").css({
       "border": "2px solid green"
     });
   }
 });



//==========================Exercice 6===============================
/*
* Exercice 6: Controller quand je tape mon age( evenemnt keyup)
 que mon age soit compris  entre 18 et 99 ans
*/


$("#age").keyup(function(){

  var elt = $(this);

  if (elt.val()<= 99 && elt.val() >= 18) {
    elt.css({
      "border": "2px solid green"
    });
  }
  else {
    elt.css({
      "border": "2px solid red"
    });
  }
});


//=============================Exercice 7 ====================================
/* Exercice 7: Controller quand je quite mon champs username
 que mon champ soit différent  du nom et du prénom */

 $("#userName").blur(function(){

   var elt = $(this);

   if ($("#userName").val() == $("#prenom").val() || $("#userName").val() == $("#nom").val()){
    $("#userName").css({
      "border": "2px solid red"
    });
   }
   else {
     $("#userName").css({
       "border": "2px solid green"
     });
   }
 });


//============================Exercie 8====================================
/* Exercice 8: Controller quand je clique sur mon boutton crée un compte
que j'ai coché au moin 1 sexe (Fille ou Garcon ou Indifférent) */

$("#button").click(function(){

  var elt = $(this);

  console.log("elt");

  if ($("input[name='sexe']:checked").length == 1){
    $("#button").css({
      "background-color": "green"
    });
  }
  else {
    alert("Vous avez oublié de cocher le sexe")
  }
});// fin de click


//==========================Exercice 9====================================
/*
 * Exercice 9: Controller quand je clique sur mon boutton
  de vérifier si j'ai au moin 2 cases à cocher dans mon formulaire
 */

 $("#button").click(function(){

   var elt = $(this);

   if ($("input[type='checkbox']:checked").length >= 2){
     $("#button").css({
       "background-color": "green"
     });
   }
   else {
     alert("Vous devez cocher 2 checkbox" );
   }
 });// fin de click

//==========================Exercice 10===========================
/*Exercice 10: Controller quand je clique sur mon boutton
de vérifier si j'ai ma case a cocher C.G.U. est bien valider*/

$("#button").click(function(){

  var elt = $(this);

  if ($("#cgu:checked").length == 1){
    $("#button").css({
      "background-color": "green"
    });
  }
  else {
    alert("Vous devez cochez les CGU");
  }

});// fin de click

// =========================Exercice 11================================
/* Exercice 11: Ajouter un bouton "+" et un bouton "-" sur la description
pour augmenter ou diminuer la taille de police de saisie des contenu  */

var taille = 1;

$("#more, #less").click(function(){

  var elt = $(this);


  if ($(this).attr('id') == 'more') {
    console.log($(this));
    taille++;
  }else {
    taille--;
  }

  $("textarea").css({
    "font-size": taille + "em"
  });

}); // Fin de .click



//============================Exercice 12==================================
/*Exercice 12: Controller quand je tappe une url de photo,
cela m'affiche l'apercu de l'image en dessous
  ( Il existe une fonction attr() en Jquery)*/


  $("#tof").keyup(function(){

  var elt = $(this);

  $("#urlImage").attr("src",elt.val());


}); // fin de .keyup

//===========================Exercice 13====================================
/*Exercice 13:
Modifier le compteur de caractères pour la description (par décrémentation)
quand je tape dans la zone de saisie Fonction text() ou fonction html()*/

var caract = 300 ;


$("#description").keyup(function(){

var elt = $(this);
var caractactuel = $("#description").val().length ;

$("#caract").text(caract -  caractactuel);

});// fin de keyup


//===========================Exercice 14 et 16==================================
/*Exercice 14:
Générer 2 nombre aléatoire pour le capcha et
l'afficher a coté du champ Capcha lors du chargement de la page */
/*Exercice 16:
   Lors du clique du bouton "Créer un compte",
   vérifier la saisie du CAPCHA que se soit el resultat de la somme
   des 2 chiffres généré aléatoirement*/


var capchaOne = Math.floor(Math.random() * 10);
var capchaTwo = Math.floor(Math.random() * 10);

$("#capchaOne").html(capchaOne);
$("#capchaTwo").html(capchaTwo);

$("#button").click(function(){

  var elt = $(this);

if (capchaTwo + capchaOne != $("#formControl").val()){
  alert("Captcha incorect veuillez ressaisir le résultat ! ");
  $("#formControl").css({
    "border": "2px solid red"
  });
}
else{
  $("#formControl").css({
    "border": "2px solid green"
  });
}

});//fin de click

//===========================Exercice 15===============================
/* Exercice 15: Ajouter une checkbox "Voir le mot de passe en claire"
 en HTML et quand je clique su cette checkbox le mot de passe
 est révélé en claire (fonction attr() pour modifier un attribut)*/

 $("#checkboxMdp, #checkboxConfirm").click(function(){

 if ($("#checkboxMdp:checked").length == 1) {

   $("#mdp").attr("type", "text");
 }else {
   $("#mdp").attr("type", "password");
 }


 if ($("#checkboxConfirm:checked").length == 1) {

   $("#confirmation").attr("type", "text");
 }else {
   $("#confirmation").attr("type", "password");
 }
});//fin de click


// ==========================Exercice 17==============================
/* Exercice 17:
Créer une barre de progression   (Exemple: http://getbootstrap.com/components/#progress)
qui augmente de taille selon la longeur du mot de passe quand je saisi mon mot  de passe
  */

$("#mdp").keyup(function(){

  var elt = $(this);

  if (elt.val().length <= 4 ) {
    $("#one #red").attr("style", "width: 33.33%");
    $("#one #orange").attr("style", "width: 0%");
    $("#one #green").attr("style", "width: 0%");

    if(elt.val().length == 0){
      $("#red").attr("style", "width: 0%");
    }
  }
  else if (elt.val().length >= 4 && elt.val().length <= 8 ){
    $("#one #red").attr("style", "width: 0%");
    $("#one #orange").attr("style", "width: 66.66%")
    $("#one #green").attr("style", "width: 0%");
  }
  else if (elt.val().length >= 8 ){
    $("#one #red").attr("style", "width: 0%");
    $("#one #orange").attr("style", "width: 0%");
    $("#one #green").attr("style", "width: 100%");

  }

});
$("#confirmation").keyup(function(){

  var elt = $(this);

  if (elt.val().length <= 4 ) {
    $("#two #red").attr("style", "width: 33.33%");
    $("#two #orange").attr("style", "width: 0%");
    $("#two #green").attr("style", "width: 0%");

    if(elt.val().length == 0){
      $("#two #red").attr("style", "width: 0%");
    }
  }
  else if (elt.val().length >= 4 && elt.val().length <= 8 ){
    $("#two #red").attr("style", "width: 0%");
    $("#two #orange").attr("style", "width: 66.66%")
    $("#two #green").attr("style", "width: 0%");
  }
  else if (elt.val().length >= 8 ){
    $("#two #red").attr("style", "width: 0%");
    $("#two #orange").attr("style", "width: 0%");
    $("#two #green").attr("style", "width: 100%");

  }
});

// ============================Exercice 18==========================
/*Ajouter un apercu du descriptif en direct qui prend en compte <b> ou <i>*/

$("#description").keyup(function(){

  // var elt = $(this).val();
  //
  // $("p #view").val() = elt ;



});//Fin de keyup
















 });//=========== FIN DE JQUERY =======
