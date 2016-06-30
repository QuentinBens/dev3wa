$(document).ready(function(){
//=======================DEBUT DE JQUERY==========================

console.log("READY !  UP !");

$.ajax({
    url: "http://echo.jsontest.com/personne1/adresse1/personne2/adresse2/personne3/adresse3/quentin/monAdresse",
    dataType: "json",
    success: function(dataResponse){ //En cas de code de retour 200
        var items = [];
        console.log(dataResponse);
        $.each( dataResponse, function( MaKeyPerso, MaValPerso ) {
            items.push( "<li >Clé : " + MaKeyPerso + " => Valeur : " + MaValPerso + "</li>" );
        });
        console.log(items);
        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).prependTo("#json2");
        // alert('Appel 1 : ' + $('#json2 ul').length);
        console.log('Appel 1 : ' + $('#json2 ul').length);
    },
    error: function(data){ //En cas de code de retour 404, 500, etc.
        alert("oooops");
    },
    complete: function(data){
      console.log('ajax terminée, quel que soit le code de statut retourné');
    },
    beforeSend: function(){
      alert('Lancement de l\'ajax JSON 2');
    }
}); // FIN AJAX


// alert('Appel 2 : ' + $('#json2 ul').length);
console.log('Appel 2 : ' + $('#json2 ul').length);

});//FIN DE JQUERY
