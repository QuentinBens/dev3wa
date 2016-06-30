$(document).ready(function() {
  console.log("Départ console");



//globaloption jMask
  $.jMaskGlobals = {
   maskElements: 'input,td,span,div',
   dataMaskAttr: '*[data-mask]',
   dataMask: true,
   watchInterval: 300,
   watchInputs: true,
   watchDataMask: false,
   byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
   translation: {
       '0': {pattern: /\d/},
       '9': {pattern: /\d/, optional: true},
       '@': {pattern: /\d/, recursive: true},
       'A': {pattern: /[a-zA-Z0-9]/},
       'S': {pattern: /[a-zA-Z]/}
   }
  };

//globaloption animate css
  $.fn.extend({
    animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });

// init mask
  $(".maskPrix").mask("@.@@@.@@@€",{placeholder: "000.000€",reverse: true});
  $(".maskID").mask("SS-000SS#00",{placeholder: "AA-000BB#11"});
  $(".maskCP").mask("@@ @@0",{placeholder: "00 000", reverse:true});
  $(".maskSurface").mask("@.@@0m²",{placeholder: "00 m²", reverse:true});


// mask alrt div
  $('div#alertTypeLoc').hide();
  $('div#alertGeo').hide();
  $('.alertF').hide();
  $('.alertPrix').hide();
  $('.alertSurface').hide();
  $('.alertPiece').hide();
  $('.chambreSurface').hide();
  $('.autreChauffage').hide();
  $('.alertPieceSpe').hide();


// Variable générales
  var errorTab = [];
  var varProgressBar = 0;
  var refID = /^[a-z]{2}\-[0-9]{3}[a-z]{2}\#[0-9]{2}$/i;
  var varMotClef = /^([a-z\-\, ]){1,}$/i;
  var varVille = /^([A-Z\- ]){2,}$/i;
  var varPrix = /^([0-4. ]{1,})?[0-9]{2,3}([\. ])?[0-9]{3}[€]|(5[\. ]?000[\. ]?000)[€]$/i;
  var varSurface = /^([0-4. ]{1,})?[0-9]{1,3}[m][\²]|(5[\. ]?000)[m][\²]$/i;


/*
/************************************* Enoncé: Formulaire Recherche de bieen immobilier ********************************************************************

/*
* L'idée est de ne plus surligner les bordure en rouge ou en vert mais de placer de jolies messages d'erreurs
* disponible ici http://getbootstrap.com/components/#alerts
* Des icônes peuvent être mise en place http://getbootstrap.com/components/#glyphicons-glyphs
*
* Toutes les verifications se feront uand je quitte mon champs et quand je clique sur mon boutton "Créer cette annonce"
*
*
* Inspiré par le moteur de recherche seLoger http://www.seloger.com/locations.htm


/*
**********************************************************************************************************************************************************
*
*/


/*
* ID: Recherche un bien par ID: L'ID est valider par le format : FR-XXXAA#69 avec X qui sont des chiffres , A des lettre et 69 le département
*
*/

$('input#txtID').blur(function(){
  var elt=$(this);
  console.log(elt.val());

  if(refID.test(elt.val())) {
    console.log("if ok");
    elt.css({
      "background-color":"#fff"
    });
    elt.popover('hide');
  }else {
    elt.css({
      "background-color":"#ffd6e0"
    });
    errorTab.push(elt);
    elt.popover('show');
  }

}); // End function


/*
*
* Champs de texte Mot clefs, séparé par des virgules.
* Les mots clefs peuvent etre que des caractères alpha avec tiret, espace et virgules compris

*
* Bonus : Il ne doit pas y avoir plus 4 MOTS (voir split() en JS)
*

*
*/
$('textarea#motCleRecherche').blur(function(){
  var elt=$(this);
  console.log(elt.val().split(" ").length);

  if(varMotClef.test(elt.val()) && elt.val().split(" ").length <= 4 ){
    console.log("if ok");
    console.log(elt.val().split(" ").length);
    $('div#alertMotClef').hide();
    elt.css({
      "background-color":"#fff"
    });
  }else {
    console.log('else mot clef');
    elt.css({
      "background-color":"#ffd6e0"
    });
    errorTab.push(elt);
    elt.animateCss('shake');
    $('div#alertMotClef').removeClass('hide');
  }

}); // End function


/*



*
* Type de bien en location : liste de case à cocher

* Appartement  Maison / Villa  Local commercial  Bureau  Parking  Terrain  Bâtiment  Hôtel particulier

* Verification : Au moins 2 checkbox jusqu'à 5 checkbox cochés (Obligatoire)

* Si Bâtiment ou  Hôtel particulier est selectionnée, alors le champs "Prix Minimum" est verouillé à 300 000€

* Si il y a plus de 5 checkbox cochées, mettre un texte "Trop de type de bien selectionnées"

* Si il y moins de 2 checkbox cochées, mettre un texte "Pas assez de type de bien selectionnées"
*

*/
$('select#se1ectDept').click(function(){
    console.log('click ok ' + 'chkbx = ' + ($('input[class="typeLoc"]:checked').length));

    if ($('input[class="typeLoc"]:checked').length < 2){
      console.log(' error inf à 2');
      $('div#alertTypeLoc').text('Vous devez séléctionner au moins 2 options');
      $('div#alertTypeLoc').show();

    }else if ($('input[class="typeLoc"]:checked').length > 5) {
      console.log(' error sup à 5');
      $('div#alertTypeLoc').text('Vous devez sélectioner moins de 5 options');
      $('div#alertTypeLoc').show();

    }else if ($('input#TypeLocBat').is(":checked") || $('input#TypeLocHotel').is(":checked")){
       console.log("prix a 300k");
       $('div#alertTypeLoc').hide();
       $('input#selectMinPrix').attr('disabled','disabled').val('300.000€');

    }else if ($('input#TypeLocTerrain').is(":checked") || $('input#TypeLocParking').is(":checked")) {
      console.log("cick ok");
      $('div#CommodImmeuble label.optionLoc').addClass('disabled');
      $('div#CommodImmeuble label.optionLoc input').addClass('disabled');
      $('div#PieceSpe label.optionLoc').addClass('disabled');
      $('div#PieceSpe label.optionLoc input').addClass('disabled');

    }else {
      $('div#alertTypeLoc').hide();
      $('input#selectMinPrix').removeAttr('disabled','disabled').val('');
      $('div#CommodImmeuble label.optionLoc').removeClass('disabled');
      $('div#CommodImmeuble label.optionLoc input').removeClass('disabled');
    }

  }); //end function

/*
*
* Département: Liste déroulante des départements en choix (Obligatoire)
*
* Code Postal: Champs de saisie qui sera vérifier au niveau du format qui sera compléter selon le département choisi
*
*/
  $('#selectCP').focus(function(){
    console.log($('#se1ectDept').val());
    var elt=$(this);

    if ($('#se1ectDept').val() == "00") {
      console.log('choisir departement');
      $('div#alertGeo').text('Vous devez séléctionner un département');
      $('div#alertGeo').show();
      $('.alertF').show();
    }else {

        // rajouter if et else sur test regex CP

      console.log("dept ok");
      $('div#alertGeo').hide();
      $('.alertF').hide();
      elt.val($('#se1ectDept').val());
    }


    }); //end function

/*
* Champs Ville:   caracteres alphas avec tiret et espace compris minimum 2 caractères (Obligatoire)
*

*/

  $('#selectVille').blur(function(){
    var elt=$(this);

    if ( varVille.test(elt.val()) == false ) {
      $('div#alertGeo').text('2 caractères minimum');
      $('div#alertGeo').show();
      $('.alertF').show();
    }else {
      $('div#alertGeo').hide();
      $('.alertF').hide();
    }

  }); //end function


/*

* Prix minimum: de 0 à 5000000€: Verifier le symbole € et le format (Obligatoire)
*
*/
  $('input#selectMinPrix').blur(function(){
    var elt=$(this);
    console.log("blur prix min " + "val " + elt.val());

  if (elt.val() == '') {
    console.log("champ vide");
    $('div#alertPrix').text('Vous devez saisir un prix mini');
    $('div#alertPrix').show();
    $('.alertF').show();
  }
  else if ( varPrix.test(elt.val()) == false ) {
    $('div#alertPrix').text('Vous ne pouvez saisir que des chiffres');
    $('div#alertPrix').show();
    $('.alertF').show();
  }else {
    $('div#alertPrix').hide();
    $('.alertF').hide();
  }



  });//end function




/*
*
* Prix maximum: de 0 à 5000000€: Verifier le symbole €,le format et qu'il plus grand ou égal au prix minimum (Obligatoire)
*
*
*/
  $('input#selectMaxPrix').blur(function(){
    var elt=$(this);
    console.log("blur prix min " + "val " + elt.val().replace('€', ''));

    if (elt.val() == '') {
      console.log("champ vide");
      $('div#alertSurface').text('Vous devez saisir un prix max');
      $('div#alertSurface').show();
      $('.alertF').show();

    }else if (varPrix.test(elt.val()) == false) {
      console.log("champ vide");
      $('div#alertPrix').text('Vous devez saisir un prix max');
      $('div#alertPrix').show();
      $('.alertF').show();
    }
    else if (elt.val().replace('€', '') < $('input#selectMinPrix').val().replace('€', '')) {
      console.log("else if prix mmax");
      $('div#alertPrix').text('Le prix Max est superieur au prix Min');
      $('div#alertPrix').show();
      $('.alertF').show();
    }
    else {
      $('div#alertPrix').hide();
      $('.alertF').hide();
    }

  });//end function


/*

* Surface minimum: de 0 à 5000m² (Obligatoire)
*

*/
$('input#selectMinSurface').blur(function(){
  var elt=$(this);
  console.log("blur surf min " + "val " + elt.val().replace('m²', ''));

  if (elt.val() == '') {
    console.log("champ vide");
    $('div#alertSurface').text('Vous devez saisir une surface mini');
    $('div#alertSurface').show();
    $('.alertF').show();
  }
  else if (varSurface.test(elt.val()) == false) {
    console.log("regex false");
    $('div#alertSurface').text('Vous devez saisir une surface mini');
    $('div#alertSurface').show();
    $('.alertF').show();
  }
  else {
    $('div#alertSurface').hide();
    $('.alertF').hide();
  }

});//end function



/*

* Surface maximum: de 0 à 5000m²: Verifier le format et qu'il plus grand ou égal au surface minimum (Obligatoire)
*

*/
$('input#selectMaxSurface').blur(function(){
  var elt=$(this);
  console.log("blur surf max " + "val " + elt.val().replace('m²', ''));

  if (elt.val() == '') {
    console.log("champ vide");
    $('div#alertSurface').text('Vous devez saisir une surface mini');
    $('div#alertSurface').show();
    $('.alertF').show();
  }
  else if (varSurface.test(elt.val()) == false) {
    console.log("regex false");
    $('div#alertSurface').text('Vous devez saisir des chiffre ou une surface inférieure a 5.000m²');
    $('div#alertSurface').show();
    $('.alertF').show();
  }
  else if (elt.val().replace('m²', '') < $('input#selectMinSurface').val().replace('m²', '')) {
    $('div#alertSurface').text('La surface Max est inférieure à la surface Min');
    $('div#alertSurface').show();
    $('.alertF').show();
  }
  else {
    $('div#alertSurface').hide();
    $('.alertF').hide();
  }

  });//end function

/*

* NB de pieces: Liste de Checkbox de 1 à 5 étages (Obligatoire)


* NB de chambres: Liste de Checkbox de 1 à 5 (Facultatif)
* Quand une checkbox est cochée, un champs apparait pour donnez le mettre carré  moyen de ces chambres
*
*/



  $('div#nbChambre input[type=checkbox]').click(function(){
    console.log("clic ok, nb chbx" + $('input[class="nbPieceCkbx"]:checked').length);

    if ($('input[class="nbPieceCkbx"]:checked').length == 0) {
      $('div#alertPiece').text('Vous devez choisir une option au minimum');
      $('div#alertPiece').show();
      $('.alertF').show();
      $('#chambreSurface').hide();
    }
    else {
      $('#chambreSurface').show();
      $('div#alertPiece').hide();
      $('.alertF').hide();
    }

  }); //end function




/*
* Critères supplémentaires
*
* Type de chauffage : Gaz, collectif, fuel, electrique, Individuel, Autre
* Si autre est selectionner veuillez faire apparaitre un champs pour saisir manuellemen le type de chauffage
*
//  $('input#TypeLocHotel').is(":checked")

*/

$('input#TypeChauffageAutre').click(function(){
  $('div#autreChauffage').show();

});



/*


* Btn Radio: vide ou  meublé ou indifférent (Obligatoire avec indiférent cochée par défaut)
*
* Checkbox Uniquement les exclusivités
*
*
* Périmetre ; de 0 à 100km
*
*
* Situation du logement dans l'immeuble : Champos de saisie   Min etage, Max etage

* Liste de Checboxes: A propos de l'immeuble :  ascenseur,  un interphone,  un digicode,  gardien
*
* Liste de Checkboxes: Commodités: (Maximum 3 cases à cochées selectionnées)
piscine
alarme
climatisation
cheminée
parquet
terrasse(s)
balcon(s)
*
*/

$('div#PieceSpe input[type=checkbox]').click(function(){
  console.log($('div#CommodImmeuble input[type=checkbox]:checked').length);

  if ( $('div#CommodImmeuble input[type=checkbox]:checked').length > 3 ) {
    console.log("inf à 4");
    $('.alertPieceSpe').text('3 options maximum');
    $('.alertPieceSpe').show();
    $('.alertF').show();
  }
  else {
    $('.alertPieceSpe').hide();
    $('.alertF').hide();
  }

}); //endF

// $('input#TypeLocHotel').is(":checked")


/*
* Les checkbox Cheminée, Alarme, Terasse et Balcon seront desactivées si Parking   ou Terrain sont selectionnées
*
*/


// -------------------------> voir ligne 183

//       }); //endF
/*
* Liste de checkbox: Pièces (Maximum 4 cases à cochées selectionnées)
salle à manger séparée
séjour
toilettes séparés
salle de bains
salle d'eau (douche)
entrée séparée
*
*
* Les checkbox séjour,salle à manger  seront desactivées si Parking  ou Terrain sont selectionnées
*

// -------------------------> voir ligne 183


*
* Liste de checkbox Rangements (Maximum 4 cases à cochées selectionnées)
cave
placards
parking ouvert
box (parking fermé ou garage)
*
*
*
* Liste de bouton radio Orientation (Maximum 5 cases à cochées selectionnées)
sud
est
nord
ouest
sans vis à vis
Indiférent (coché par défaut)
*/


























































}); //end ready
