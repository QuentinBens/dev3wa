// $(document).ready(function(){
// console.log('REAADEY UPPPP !!');
//
// //Je charge tout de suite la liste de tous les élèves
//   getStudents('-');
//
//   //Au changement de valeur de notre select de choix de sexe
//   $('form select[name="sex"]').change(function(){
//     getStudents($(this).val());
//
//     var w = [];
//     var m = [];
//     var all = [];
//
//      if($(this).val() == "w") {
//        console.log($(this).val());
//        w.push("lol");
//        console.log(w);
//      }
//
//   });// END  Change form select[name="sex"]
// });//FIN DOCUMENT READY
//
//
// //Déclaration du la fonction "getStudents", récupérant les élève de la session
//         function getStudents(new_sex){
//           $.ajax({
//               url: 'http://192.168.100.85:90/Ajax/exemple-call.php',
//               dataType: 'json',
//               data: { sex: new_sex },
//               success: function(dataResponse){
//                 if(dataResponse['result'] == 'error') {
//                   //L'URL ajax m'informe d'une erreur
//                 	console.log('Une erreur de traitement s\'est produite....');
//                 }else{
//                   //L'URL ajax m'informe d'autre chose qu'une erreur
//                 	console.log('Quel est ce result ?? C\'est : ' + dataResponse['result']);
//                   console.log(w);
//                 }
//               },
//               error: function(){
//                 // Remplir en cas d'error
//               },
//
//           }); // END AJAX
//         }

// =======================++VERSION PROFFFFF =======================================
        $(document).ready(function(){
  //setInterval("getUsers()", 5000);

    //Au changement de valeur de notre select de choix de sexe
    $("form select[name='sex']").change(function(){
      //On lance un appel ajax pour récupérer la liste des étudiants L9 en fonction du sexe
      console.log($(this).val);
        $.ajax({
            url: 'http://192.168.100.85:90/Ajax/exemple-call.php',
            dataType: 'json',
            data: { sex: $(this).val() },
            method: 'GET',
            success: function(dataResponse){ //En cas de code de retour 200
                if(dataResponse['result'] == 'success'){
                  //L'URL ajax m'informe d'autre chose qu'une erreur
                  console.log('Quel est ce result ?? C\'est : ' + dataResponse['result'] + ' avec les données suivantes : ' + dataResponse['data_result']['student']);

                  var items = [];
                  $.each( dataResponse['data_result']['student'], function (key, val ) {
                    console.log(val);
                    if (val == "Quentin") {
                      items.push("<li id='myName'>clé : " + key + " => Valeur : <span>" + val + "</span></li>")
                    }else{
                      items.push("<li id='otherName'>clé : " + key + " => Valeur : <span>" + val + "</span></li>")
                    }
                  });
                  console.log(items);

                  // $("select[name='sex'] + *").replaceWith($( "<ul/>", {
                  $("select[name='sex'] + *").replaceWith($( "<ul/>", {
                    "class": "list-students",
                    html: items.join( "" )
                  }));


                }else{
                  //L'URL ajax m'informe d'une erreur
                  alert('Une erreur de traitement s\'est produite....');
                }
            },
            error: function(){
                //Actions à faire en cas d'erreur
            }
        });
    });
});
/* END Document Ready */
