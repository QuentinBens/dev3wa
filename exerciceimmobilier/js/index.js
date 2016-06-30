$(document).ready(function(){

  var regexId = /^FR\-[0-9]{3}[a-z]{2}\#[0-9]{2}$/i;
  var tabErrors = [];
  var regexTxt = /^[\-\s\w\,]+$/;

  $('input#txtID').blur(function(){
     var elt = $(this);
     console.log(elt.val());
     if(regexId.test(elt.val())){

       elt.parents('div.form-group').removeClass('has-error').addClass('has-success').children('span.glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok').next('.alert').slideUp();

     }else{

       elt.parents('div.form-group').removeClass('has-success').addClass('has-error').children('span.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove').next('.alert').slideDown().html("<b>Attention</b> Votre ID est invalide");

       tabErrors.push(elt);
     }
   });

   $('input#txtID').popover();

   $('textarea#motCleRecherche').blur(function(){
       var elt = $(this);
    // trim() :  permet de supprimer les espaces au début et a la fin
    // split permet de convertir une chaine de caractères par un tableau selon un sépareteur
    // console.log( elt.val().trim().split(" "));

     if(regexTxt.test(elt.val()) &&  elt.val().trim().split(" ").length >= 4 ){


        elt.parents('div.form-group').removeClass('has-error').addClass('has-success').children('span.glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok').next('.alert').remove();

       var tableau = elt.val().trim().split(" ");

       elt.parents(".form-group").find('span.label').remove();

       elt.prev().html("<label>Mots clefs <span class='badge'>" + tableau.length +" mots</span></label>");

       for(var i = 0; i< tableau.length; i++){

             elt.parents(".form-group").append('<span class="label label-success"> '+ tableau[i] +' </span>');
           //elt.parents(".form-group").find('span:last-child').after('<span class="label label-success"> '+ tableau[i] +' </span>');
       }

       //elt.after(labels)

     }else{

     elt.parents('div.form-group').removeClass('has-success').addClass('has-error').children('span.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove').after('alertMsg');

     }

   });

});// END DOC READY
