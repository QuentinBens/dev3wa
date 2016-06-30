/*Quand mon document HRML est prêt*/
/*avec ses element*/
 $(document).ready(function(){

 	console.log('Bienvenue dans jquery');

// $()sert à selectioner 1 ou plusieurs element ex: tous mes h1
 	var element = $("h1");
 	console.log(element.text());

 // Extraire tous les paragraphe
 // afficher leur textes en console
 	var paragraphe = $("p");
 	console.log(paragraphe.text());

// extrait le texte de l'ID  #one de mon paragaphe p et de mon titre h1
// puis je les affiche dans ma consolle log
 	var paragrapheId = $("p#one,h1");
 	console.log(paragrapheId.text());

 // text de mon lien a dans div par la class
 	var link = $("main div.box p > a");
 	console.log(link.text());
// On peut chainer les seleceteur ex
	var elements = $("main div, div.box, h1, h3").text();
	console.log(elements);

// ATTENTION le + EN JS selectione le frere
// imediat contraiement au css
	var titre = $("main div.box h2 + h3 ").text();
	console.log(titre);

 // tield : les element freres aes h1
 	var titres = $("main div.box ~ h3").text();
 	console.log(titres);

// PSEUDO SELECTEUR

// eq(): égal à: indice qui commence par 0
	var secondParagraphe = $("section p:eq(2)").text();
	console.log(secondParagraphe);

// Toute l'arborescenc et toutes ses profondeurs
	var titre = $("h3:eq(0)").text();
	console.log(titre);

// : last Je selectione le dernier paragraphe
	var dernierPara = $ ("section p:last").text();
	console.log(dernierPara);

// :first seclection  du permier span
	var firstSpan = $ ("span:first").text();
	console.log(firstSpan);


// Color red sur les selecteur

	$("section p:first, h2").css("color", "red");
// color and font zise on selectioner
	$("h2").css({
		"color": "green",
		"font-size": "40px"
	});

// Modifier la font size et la font family des 3 derniers
// Paragraphes, des h1 et des liens qui ont une classe "link"

	// var lastPara = $("section > p:gt(2), a.link, h1").text();
	// console.log(lastPara);

	// lastPara.css("font-size", "30px");

	// $("section > p:gt(2), a.link, h1").css("font-size", "23px");
	// $("p:not(p:last)").css("font-style", "italic");
	// $("form input").css("border-color", "red");
	// $("form textarea").css("border-color", "green");
	// $("h5").css({
	// 	"color": "grey",
	// 	"text-transform": "uppercase"
	// });
	// $(":header:contains('julien'), p:contains('julien')").css("color", "purple");
	// $("li:odd, p:empty").css("border", "3px solid pink");
	// $("body > img").css({
	// 	"border": "3px solid green",
	// 	"border-radius":"50px"
	// })
	// $("form input:checkbox + label, form input:radio + label").css({
	// 	"color": "orange",
	// 	"font-style": "italic"
	// })
	// $("li:has(span)").css({
	// 	"color": "green",
	// 	"font-style": "italic"
	// })
	// $("li ul").css({
	// 	"border": "3px solid purple",
	// })

  // je selectionne mon champs Nom
  // je crée un evenement quand je perd mon curseur
  $("label:contains('Nom') + input").blur(function(){


    // $(this) signifie je récupère mon element courant
    var elementCourantNom = $(this);

    //val() permet de récupère la valeur d'un element
    // recupère la valeur que saisie l'utilisateur
    console.log(elementCourantNom.val());

    // length est la longeur d'une chaine
    // val() la valeur d'un element
    if(elementCourantNom.val().length <= 3){
      $(this).css({
        "border": "1px solid red"
      });
    }
    else{
       $(this).css({
        "border": "1px solid green"
      });
    }
  });



  $("label:contains('Prénom') + input").blur(function(){

  	var elementCourantPrenom = $(this);


  	if(elementCourantPrenom.val().length <= 3){
  		$(this).css({
  			"border": "2px solid red"
  		});
  	}
  	else{
  		$(this).css({
  			"border": "2px solid green"
  		});
  	}


	  if($("label:contains('Nom') + input").val() == elementCourantPrenom.val()){
	  	$(this).css({
	  		"background-color": "red",
	  	})
	  }
	  else{
	  	$(this).css({
	  		"background-color": "green"
	  	});
	  };


  });



  //selectionner le type email
  $("input[type=email]").blur(function(){

    console.log("Vous avez perdu le curseur sur l'email");

  });




});
