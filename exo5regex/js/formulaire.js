 $(document).ready(function(){
//=======================DEBUT DE JQUERY==========================


// Nom produit
//4 caract min alpha et - compris
$("#produit").keyup(function(){

  var elt = $(this).val();
  var regex = /^[a-z\- ]{4,}$/i

  if (regex.test(elt)){
    $("#produit").css({
      "border": "2px solid green"
    });
  }else{
    $("#produit").css({
    "border": "2px solid red"
    });
  }
});//fin produit

// "Accroche du Produit"
// Vérification par Regex. : Min. 8 caractères et que des caractères
// alpha-numérique avec espace compris
$("#accroche").keyup(function(){

  var elt = $(this).val();
  var regex = /^[a-z0-9 ]{8,}$/i;

  if (regex.test(elt)){
    $("#accroche").css({
      "border": "2px solid green"
    });
  }else{
    $("#accroche").css({
    "border": "2px solid red"
    });
  }
});// fin accroche


// "Couleur de produit"
//#AA66EE: vérification de la saisie d'une couleur hexadecimal

$("#color").keyup(function() {

  var elt = $(this).val();
  var regex = /^\#[a-z0-9]{6}$/i;

  if(regex.test(elt)){
    $("#color").css({
      "border": "2px solid green"
    });
  }else{
    $("#color").css({
    "border": "2px solid red"
    });
  }
});// fin de COLOR =========================================

// "Quantité du produit"
// La quantité sera vérifié et devra etre comprise entre 1 et 1000 unités

$("#quantit").keyup(function(){
  var elt = $(this).val();
  var regex = /^[0-9]{1,3}$|1000/;

  if(regex.test(elt) && elt > 0 && elt <= 1000){
    $("#quantit").css({
      "border": " 2px solid green"
    });
  }else{
    $("#quantit").css({
    "border": "2px solid red"
    });
  }
});// fin Quantit ========================================

// Si le bouton Non est coché, faire apparaitre un champs texte "Prix de la Livraison(€)"
// (voir les fonctions hide() ou show())
$("#oui, #non").click(function(){

  var elt = $(this);

  if ($("#non").is(':checked')){
    $("#prixHide").show();
  }else{
    $("#prixHide").hide();
  }
});// fin du click Livraison ====================================



// Payable en 3 fois : Checkbox (facultative)
// Retrait OFFERT en magasin: CheckBox (facultative)



// ================================================================

 // "Référence du produit"
 // Format: AA-XXXX-BB avec vérification du format
 // (A et B sont des lettres et X des chiffres)

 $("#reference").keyup(function(){

   var elt = $(this).val();
   var regex = /^[a-z]{2}\-[0-9]{4}\-[a-z]{2}$/i;

   if (regex.test(elt)){
     $("#reference").css({
       "border": "2px solid green"
     });
   }else{
     $("#reference").css({
       "border": "2px solid red"
   });
  }
 });// Fin de  reference Produit ================================



// Champs texte Prix HT(€) avec vérfification du format du prix au format 00.00€

$("#price").keyup(function(){
  var elt = $(this).val();
  var regex = /^[0-9]{0,5}([\.\,][0-9]{1,2})?\€$/;

  if(regex.test(elt) && parseFloat(elt) >= 0.01) {
    $("#price").css({
      "border": "2px solid green"
    });
  }else{
    $("#price").css({
      "border": "2px solid red"
    });
  }
}); // Fin de keyup pour prix verifacaion =========================


// "Résumé du produit"
//  avec minimum 10 caractères, que des caracatères alpha avec tiret,
//   point,parenthèses,apostrophe, point-virgule et  espace compris

$("#resume").keyup(function(){
  var elt = $(this).val();
  var regex = /^[a-z\-\.\(\)\"\;\,\' ]{10,}$/im

  if(regex.test(elt)){
    $("#resume").css({
      "border": "2px solid green"
    });
  }else{
    $("#resume").css({
      "border": "2px solid red"
    });
  }
});// Fin de resumé Produit ==================================

// Capacité Mémoire en Go.:
// 5Go, 10 Go, 20Go, 50Go, 100Go, 1To,
// Autre Quand je selectionne "Autre", un champs texte
// apparait pou saisir manuellement la capacité

$("input[name='capacity']").click(function(){
  var elt = $(this);

  if ($("#other").is(':checked')){
    $("#otherHide").show();
  }
  else if($("#other").is(':checked') == false){
    $("#otherHide").hide();
  }

});// Fin de click capcity ==================================


// "Date de sortie du produit":
//  à valider et vérifier au format française "JJ/MM/XXXX"
// Bonus: Vérifier que la date de sortie soit ultérieur à aujourd'hui au niveau de l'année

$("#date").keyup(function(){
  var regex = /^([0-2][1-9]|10|20|30|31|01)\/((0?[1-9])|10|11|12)\/201[6-9]$/
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var actualDate = day + "/" + month + "/" + year;
  var elt = $(this).val();
  console.log(elt);
  console.log(actualDate);

// On utilise" "process" pour apliquer la fonction
//qui vient reformater ma date pour la comparer avec une autre au bon format
  function process(date){
     var parts = date.split("/");
     var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
     return date.getTime();
  }
    if (regex.test(elt) && process(elt) >= process(actualDate)){
      alert("bon");
      $("#date").css({
      "border": "2px solid green"
      });
    }else{

      $("#date").css({
     "border": "2px solid red"
      });
    }
}); //fin de DATE ==============================================

// Liste déroulante pour le choix du Transporteur du produit:
// UPS, DHL, SoCollissimo,TNT, GLS, FretBay, LaPoste, Point Relay, Autre
// Une des options est obligatoire: nous sommes obligés de selectionner 2 transporteurs
// Bonus: Quand je selectionne "Autre",
// un champs apparait en dessous permettant la saisie manuelle
// d'un transporteur (voir les fonction hide() et show())



$("#transport").change(function(){

  var elt = $(this);
  var other = $("option[value='other']:selected").length;
  console.log(elt.val());

  if ($("#transport option:selected").length >= 2){
    $("#transport").css({
    "border": "2px solid green"
    });
    if (other == 1 ){
          $("#transportHide").show();
      }
    else{
          $("#transportHide").hide();
      }
  }
  else if (other == 1 ){
        $("#transportHide").show();
      }
  else if (other == 0 ) {
        $("#transportHide").hide();
      }
  else{
    $("#transport").css({
   "border": "2px solid red"
    });
  }
});// Fin de CHANGE #Transport=============================================

// Groupe Boutons radios "Délai d'Expédition du produit":
// Expédié sous 24h, Expédié sous 48h.,Expédié sous 5J.,Expédié sous 1 semaine. Autre
// Bonus: Quand je selectionne "Autre", un champs apparait en dessous permettant
//  la saisie manuelle le délai d'expédition (voir les fonction hide() et show())


$("input[name='expedition']").click(function(){

var elt = $(this).length;
console.log(elt);


if ($("#timeOther").is(':checked')){
  $("#expeditionHide").show();
}else {
  $("#expeditionHide").hide();
}

});//fin de EXPEDITION CLICK===============================================

// Un champs texte Poids Net de format XXX.X Kg.
// Case a cocher en dessous "Prendre en compte le poids du colis":
// Si je coche cette case, la valeur du Poids Net augmente de 5%.

var eltPoids = $(this).val();
var regexPoids = /^[0-9]?[0-9]?[0-9]?[\.\,]?[0-9]?[0-9]? ?Kg$/i
var poids = parseFloat(eltPoids.replace(',' , '.'));
var poidsPlus = poids / 0.95;

$("#poids").keyup(function(){

  var eltPoids = $(this).val();
  var regexPoids = /^[0-9]?[0-9]?[0-9]?[\.\,]?[0-9]?[0-9]? ?Kg$/i
  var poids = parseFloat(eltPoids.replace(',' , '.'));
  var poidsPlus = poids / 0.95;

//Utiliser .replace('*','*') Pour remplacer un element par un autre
  if (regexPoids.test(eltPoids) && parseFloat(eltPoids.replace(',' , '.')) > 0.00){
    $("#poids").css({
      "border": "2px solid green"
    });
    if ($("#pricePoids").is(':checked')){
      console.log('coucou');
      $("label[for='pricePoids'] span").text(poidsPlus);
    }

  }
  else {
    $("#poids").css({
      "border": "2px solid red"
    });
  }
});//FIN DE HEYUP POIDS ==================================================

$("#pricePoids").click(function(){

  var eltPoids = $("#poids").val();
  var regexPoids = /^[0-9]?[0-9]?[0-9]?[\.\,]?[0-9]?[0-9]? ?Kg$/i
  var poids = parseFloat(eltPoids.replace(',' , '.'));
  var poidsPlus = poids / 0.95;

  if (regexPoids.test(eltPoids) && parseFloat(eltPoids.replace(',' , '.')) > 0.00 && $("#pricePoids").is(':checked')){

    $("label[for='pricePoids'] span").text(poidsPlus.toFixed(2));
  }
  else if ($("#pricePoids").is(':checked') == false){

    $("label[for='pricePoids'] span").text(parseFloat($("#poids").val()));
  }
}); // FIn de CLICK POIDS

// ============================HTML==========================================
// Boutons radios:
// -Disponible en stock,
// -Disponible hors-stock,
// -Affichage simple des détails du produit hors-stock
// =========================================================================



// Garantie du Produit":
// -Nb d'année avec la vérification du nombre de 0 à 5 ans


$("#warranty").keyup(function(){

  var elt = $(this).val();
  var regex = /^[0-5]$/

  if (parseFloat(elt) >= 1 && parseFloat(elt) <= 5 && regex.test(elt)){
    $("#warranty").css({
      "border": "2px solid green"
    });
    $("#SaisieWarranty").show();
  }
  else if(parseFloat(elt) == 0){
    $("#warranty").css({
      "border": "2px solid green"
    });
    $("#SaisieWarranty").hide();
  }
  else {
    $("#warranty").css({
      "border": "2px solid red"
    });
    $("#SaisieWarranty").hide();
  }
}); // FIN DE KEYUP WARRANTY ============================================

// -Zone de saisie de la Garantie: Elle doit faire au minimum 15 caractères
//  si le nb d'année est strictement supérieur à 0
$("#SaisieWarranty").keyup(function(){

    if ($("#SaisieWarranty").val().length >= 15){
      $("#SaisieWarranty").css({
        "border": "2px solid green"
      });
    }else {
      $("#SaisieWarranty").css({
        "border": "2px solid red"
      });
    }
}); // FIN DE KEYUP SAISIE DE GARANTIE ==================================


// Taxe du Produit": Au Format "00.00%"
// Bonus: Quand je quitte le champs Taxe, cela me calcule le prix TTC
//  a partir du Prix HT et de la Taxe (La fonction val() peut aussi
//   modifier une valeur d'un input...)
// Champs texte Prix TTC avec TVA inclue au format XX.XX€
// Bonus: Quand je quitte la saisie de ce champs, le symbole € est mis à la fin du prix

$("#taxe").keyup(function(){

  var elt = $(this).val();
  var regex = /^[\d]{1,2}[\,\.]?[\d]{0,2}\%$/

  if (regex.test(elt)){
    $("#taxe").css({
      "border": "2px solid green"
    });
  }else {
    $("#taxe").css({
      "border": "2px solid red"
    });
  }


}); //FIN DE KEYUP TAXE

$("#taxe").blur(function(){

  var elt = $(this).val();
  var priceHT = parseFloat($("#price").val().replace(",","."));
  var taxe = parseFloat(elt.replace(",",".")) / 100 + 1;
  var priceTTC = priceHT * taxe;
  var priceTTC = priceTTC.toFixed(2);
  console.log(priceHT, taxe, priceTTC);

  $("b span").text(priceTTC);

});// FIN DE BLUR CALCUL TAXE =================================================


// "Fonctionnalités du Produit (Fiche Technique)":
//  Minimum 20 caractères avec prise en comptes des balises HTML <p> <h1><h3> ...


$("#ficheTec").keyup(function(){

  var elt = $(this).val();
  var regex = /^[^|~#/µ]+$/i;

  if (regex.test(elt) && elt.length >= 20){

    $("#ficheTec").css({
      "border": "2px solid green"
    });
  }else{
    $("#ficheTec").css({
      "border": "2px solid red"
    });
  }
}); // FIN DE FICHETECHNIQUE KEYUP======================================

// "Url d'image du produit": à valider du format  d'URL distante  "http://www.....jpg"
//  avec validation de l'extension .jpg ou .jpeg ou .png
// Bonus: Quand je quitte le champs, une prévisualisation de l'image produit est affiché en dessous


$("#picture").blur(function(){

  var elt = $(this).val();
  var regex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png|tif|bmp)/i;
  $("img").attr('src',elt);
  if (regex.test(elt)){
    $("#picture").css({
      "border": "2px solid green"
    });
  }else{
    $("#picture").css({
      "border": "2px solid red"
    });
  }
}); // FIN DE BLUR PICTURE


$("#picture").blur(function(){

  var elt = $(this).val();
  var regex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png|tif|bmp)/i;
  $("img").attr('src',elt);
  if (regex.test(elt)){
    $("#picture").css({
      "border": "2px solid green"
    });
  }else{
    $("#picture").css({
      "border": "2px solid red"
    });
  }
}); // FIN DE BLUR PICTURE ========================================================



// "Url de vidéo de démonstration":
// Validation d'une iframe <iframe> en provenance des plateformes
//   avec URL distante sur Youtube, Dailymotion ou Vimeo
// Bonus: Quand je quitte le champs, une prévisualisation de l'iframe produit est affiché en dessous


$("#video").blur(function(){

  var elt = $(this).val();
  var regex = /^https?:\/\/+|vimeo|youtube|dailymotion/i;
  console.log(elt);
  if (regex.test(elt)){
    $("div > iframe").show();
    $("div > iframe").replaceWith(elt);
  }else{
    $("div > iframe").hide();
  }
}); // FIN DE BLUR VIDEO ==========================================================


 // Nom: champs texte (min 3 caractères alpha-numérique avec point compris)
 // Email: Champs texte à valider au niveau du format
 // Telephone : Champos texte à valider  au niveau du format
 // Num. SIREN de l'entreprise à valider avec une regex
 // Coordonnées bancaire du responsable de la Société:
 // Numéro 16 chiffres avec XXXX-XXXX-XXXX-XXXX
 // Cryptogramme Visuel: XXX
 // Date d'expiration MM/AA


$("#infoSociety > input").keyup(function(){

  var elt = $(this).attr("data-regex");
  var eltVal = $(this).val();

  var regexNom = /^[a-z0-9\.]{3,}$/i;
  var regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/i;
  var regexTel = /^[0-9(\.\/\- )?]{10,}$/;
  var regexSiren = /^([0-9]{3}\ ?){3}?$/i;
  var regexCB = /^([0-9]{4}[\-\. ]?){4}$/;
  var regexCrypto = /^[0-9]{3}$/;
  var regexDate = /^[0-9][0-9]\/[0-9][0-9]$/;
  var tab = [regexNom, regexEmail, regexTel, regexSiren, regexCB, regexCrypto, regexDate];


var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getYear() + "";
var yearOne = d.getFullYear();
var yearTwo = year.substr(year.length - 2,year.length );
var actualDate = day + "/" + month + "/" + yearOne;


function process(date){
   var parts = date.split("/");
   var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
   return date.getTime();
}

  for(var i = 0; i < tab.length; i++){

      if(tab[i] +"" == elt){
        if(tab[i].test(eltVal)){
           $(this).css({
             "border": "2px solid green"
           });
           if ( process(actualDate) <= process("31/"+$(this).val())){;
             $(this).css({
               "border": "2px solid green"
             });
           }
           else{
             $(this).css({
               "border": "2px solid red"
             });
           }
        }
        else{
          $(this).css({
            "border": "2px solid red"
          });
        }
      }
  }
}); //FIIN DE KEYUP infocociety ==================================================



// Champ texte du "Manuel d'Utilisation":
// Valider au format d'une URL à extension .html, .doc, .docx ou format.pdf

$("#manuel").blur(function(){

  var eltVal = $(this).val();
  var regex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:docx?|pdf|html)/i

  if(regex.test(eltVal)){
    $(this).css({
      "border": "2px solid green"
    });
  }
  else{
    $(this).css({
      "border": "2px solid red"
    });
  }
}); // FIN DE BLUR MANUEL ==================================================

// Checbox Obligatoire: Checkbox J'accèpte les Conditions Générales de Ventes CGV
// Checbox Obligatoire: Checkbox J'accèpte les Conditions Générales d'Utilisation CGU du site
// Boutton de type button "Créer le produit"
// and je clique dessus, je dois vérifier la valifité du Nom, de la référéncene, du Prix et du résumé
 // ainsi que les 2 checkbox CGU et CGV soit
// bien cochées
$("button[type=button]").click(function(){

  var eltVal = $(this).val();

  if($("#cgv").is(':checked') && $("#cgu").is(':checked') && ){
    $("button").css({
      "border": "2px solid green"
    });
    console.log($(this));
  }
  else{
    $("button").css({
      "border": "2px solid red"
    });
  }






});// CLICK BUTTON CHECKBOX REQUIRED


























    });//=========== FIN DE JQUERY =======
