<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>PHP function</title>
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" media="all" title="bootstraCdn" charset="utf-8">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
    <style>
      #One {
        color: red;
        font-family: "Arial", "cursive";
        font-weight: bold;
        font-size: 15px;
      }
    </style>
  </head>
  <body>

    <div class="alert alert-info">

    <?php
	/*******************************************************************Rappel********************************************/

/* Fonction affichera la mention selon les notes données
*
* $notes : tableau de notes
* $messageSuccess: message affocher de succès
* $messageFail: message affocher en cas d'echec
*/

/*
* Le retour noté "return" permet de retourner un resultat
* exploitable en dehors de ma fonction
*/

function mention($notes, $messageSuccess, $messageFail){
  $somme = 0;
  foreach($notes as $note){
    $somme = $somme + $note;
  }
  $resultat = $somme / count($notes);

  if($resultat < 10){

    return $messageSuccess;

  }else{

    return $messageFail;
  }
}

//appel
$message = mention([15,10,18,1,2,1,2,1,1,8,7,2,12,14], "Bravo Quentin", "Dommage Quentin, tu reviendra nous voir");

if($message == "Bravo Quentin"){
  echo "<div class='alert alert-success'>".$message."</div>";
}else{
  echo "<div class='alert alert-danger'>".$message."</div>";
}


// le return conclut une fonction
// rien de s'execute après un return
function enfer($nb){
  if($nb == 666){
    return "C'est l'enfer :)";
  }
  return "C'est le paradis :(";
}

$resultat = enfer(456);
// le resultat de ma fonction "c'est le paradis"
echo "<p>".$resultat."</p>";
$resultat = enfer(666);
// le resultat de ma fonction "c'est enfer"
echo "<p>".$resultat."</p>";


?>
</div>
<div class="alert alert-info">

<?php

$tableau = [
  "nom" => "BENARD",
  "Prenom" => "Quentin",
  "Age" => 23,
  "Geoloc" => [51.5544,56.5412],
];
foreach ($tableau as $value) {
  if(is_array($value)){ // Verifie si $value est un tableau
    echo "Je suis un tableau<br />";
  }
}
echo "La longueur de mon prénom est de " .strlen($tableau['Prenom']). "<br />";
// mesure le nombre de caractere

echo "Le nb d'elements dans mon tableau est de ".count($tableau)." <br />";
; // Compte le nombre d'element présent dans ...


// preg_match permet de te'ster une regex
$Regex = '/^[a-z0-9 ]{3,}$/i';
if(preg_match($Regex, "Je suis une chaine")){
  echo "Okay pour la regex <br />";
}else{
  echo "Mauvaise syntaxe pour la regex <br />";
}


//stripos permet de chercher une sous chaine et sa position
$chaine = "Bonjour les dévelloppeur PHP";
$FindMe = "dévelloppeur";

$pos1 = stripos($chaine, $FindMe);
print_r($pos1);

//substr()permet d'extraire une sous chaine de caratere a partir de segment
echo substr($chaine, 0, 7);

//Array_oush() permet de pousser 1 ou plusieurs elements dans mon tableau
$notes = [10,15,12,14,8,15,19];
$notes2 = [4,2,3,7];
print_r($notes);
print_r($notes2);
array_push($notes, 14,12,15);
array_push($notes, $notes2);

$profil = [
  'email' => 'benardq@^gmail.com',
  'password' => '123456'
];

$avatar = [
  'avatar' => 'gravatar.jpg',
  'pseudo' => 'Brio'
];

//array_merge(: permer la fusion de plusieurs tableaux
$tabfussioner = array_merge($profil, $avatar);

//


?>
</div>
<div class="alert alert-info">

<h1>EXERCICE: 1  FUNCTION</h1>

<?php
// + Rajoutez dans ce tableau une 4ème personne, Etienne Duvillage, 48 ans
// + Faites ensuite afficher à l’écran tous les noms, et seulement les noms, des personnes présentes dans le tableau.
$identite = array(
	"personne 1"=> array("nom" => "dutronc", "prenom"=>"michel", "age"=>"30"),
	"personne 2"=> array("nom" => "duroc", "prenom"=>"émilie", "age"=>"23"),
	"personne 3"=> array("nom" => "dupersil", "prenom"=>"évelyne", "age"=>"36")
);

$identite['personne 4'] = ["nom" => "Duvillage", "prenom"=>"Etienne", "age"=>"48"];
print_r($identite);




echo "<p>Ici les nom de mes 4 personnes : </p>";

// NIVEAU 0
foreach ($identite as $personne => $valuePersonne) {

  // J'affiche les noms de mes 4 personnes
  echo "<li> ".$valuePersonne["nom"]. "</li>";

}//FIN NIVEAU 0
?>
</div>

<div class="alert alert-info">

<h2>Suite EXO </h2>
<!-- // + Jean a fait ses courses et décide de mémoriser ses achats informatiquement.
// + Il décide de stocker tous lesproduits qu’il a acheté dans un tableau, en PHP. Créez le tableauchariotqui contient les produits suivants :chocolat, poulet, citrons, oignons (ainsi, $chariot[0]vaut ”chocolat”).
// + Rajouter du curry dans le tableau chariot
// + Faites une fonction qui prend en entrée un mois et qui permette à Jean de lister ce qu’il avait acheté cemois.
// + Faites une fonction qui permette de lister tous les produits achetés depuis le début de l’année -->

<?php
//tableau inialiser
$chariotJean = [];
//ajout de 4 valeurs
$chariotJean = ["chocolat", "poulet", "citrons", "oignons"];
//ajout d'une 5éme
$chariotJean[4] = ["curry"];

echo "<p>Dans mon chariot j'ai plusieurs ingrédients :</p><ul>";

foreach ($chariotJean as $keyIngredient => $valueIngredient) {
  echo "<li>Ici mon ingrédients : <b>" .$keyIngredient. "</b> qui est <b>" .$valueIngredient. "</b></li>";
}
echo "</ul>";



$moisIng =
[
  "January" => ["poivrons", "jambon", "sel"],
  "February" => ["curry", "poulet", "yahourt"],
  "March" => ["chocolat", "citron", "oignons"],
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
//$tab est mon tableau de mois
//$key est le mois dont je cherche la liste
function listAchat($tab, $key){
  // niveau 0
  if(is_array($tab)){
    foreach ($tab as $keyMois => $valIng) {
      // je vérifie que la valeur de mon mois est un tableau
      if(is_array($valIng) && $key == $keyMois && count($valIng) > 0){
        // niveau 1
      echo "<p>Pour mon mois de <b>" .$keyMois. "</b> j'ai acheté :</p><ul>";
      foreach($valIng as $valueIngredient){
        echo "<li> " .$valueIngredient. "</li>";
        }//fin niveau 1
      }elseif($key == $keyMois && count($valIng) > 0){
        return "<p>Pour le mois de <b>" .$key. "</b> Vous n'avez rien acheter </p>";
      }
    echo "</ul>";
    }//Fin niveau 0
  }
}// fin de function

listAchat($moisIng, "October")


?>
</div>
<div class="alert alert-info">

<h2>Exercices de Bootstrap</h2>
<!-- * Creer une fonction qui affiche un message alert en Boostrap en prenant en parametre
* Un message
* Une icone
* Une importante (h1, h2 ou h3): parametre optionel avec valeur par défaut h3
* Une classe (success, infos, warning, danger)   parametre avec valeur par défaut h3 avec valeur par défaut warning -->

<?php


function alert($mess, $title, $hn = 3, $class = "warning", $icon = "hand-right"){

    echo "
    <div class='alert alert-" .$class. "' width='100%'><br />

    <h".$hn." style='display:inline'><span class='glyphicon glyphicon-".$icon."'></span> " .$title. " <span class='glyphicon glyphicon-".$icon."'></span></h".$hn."><br />
    <p>" .$mess. "</p>
    </div> ";

}

alert("Salut je m'appel quentin", "HEY", "1", "warning", "retweet")

?>
</div>
<div class="alert alert-info">

<h2 class="alert alert-success">Fonction chiffre paire, Ils sont: </h2>
<!-- Définissez une fonction qui prend en entrée un tableau d'entiers et retourne  que les chiffres pairs -->

<?php

$entier = [5, 12, 23, 1, 4, 7, 8, 44, 8, 55, 96, 5, 3, 6, 5, 4, 9];
function pairs($tab){

  if(is_array($tab)){
    $resultTab = [];
    foreach ($tab as $keyTab => $valueTab) {

      if($valueTab % 2 == 0){
        array_push($resultTab, $valueTab) ;

      }
    }// fin niveau 0
  }// fin first if
  return $resultTab;
}//Fin function

$tab = pairs($entier);
echo "<ul>";
foreach ($tab as $key => $value) {
echo "<li><b>".$value."</b></li>";
}
echo "</ul>";
?>
</div>
<div class="alert alert-info">

<h2 class="alert alert-success">Fonction supprime les espaces</h2>
<!-- Créer une fonction qui prends un texte et qui supprime toues les espaces& -->
<?php

function lessSpace($string){
  if(is_string($string)){
    str_replace(" ", "", $string);
  }//Fin 1er if
  return str_replace(" ", "", $string);
}// fin function

$testString = "Aujourd'hui j'ai pris des vacances, et elles sont bien passée : )";
$testLessSpace = lessSpace($testString);

Echo "<p>Avant j'avais <b>".$testString."</b> Maintenant J'ai <b>".$testLessSpace."</b>";

?>
</div>
<div class="alert alert-info">

<h2 class="alert alert-success">Fonction qui retourne le nb d'étoile demander</h2>

<?php
function star($nbStar){
  if(is_numeric($nbStar)){
    for ($i=0; $i < $nbStar ; $i++) {
      echo "<span class='glyphicon glyphicon-star'></span>";
      }
    }else{
      echo "Ce n'est pas un nombre";
    }
  }

  echo star(1);
?>
</div>

<div class="alert alert-info">


<h2 class="alert alert-success">Fonction comparaison tableau</h2>

<!-- * Ecrivez une fonction tableauxIdentiques qui retourne true si les 2 tableaux arguments  -->

<?php

$tabOne = [5,2,3,4,1];
$tabTwo = [5,3,2,1,4];

function identical_values($tabone, $tabtwo){

  if(array_diff($tabone , $tabtwo) == []){
    echo "TRUE";
  }else{
    echo "FALSE";
  }
}//Fin de function

echo identical_values($tabOne, $tabTwo);
?>
</div>
<div class="alert alert-info">

<h2 class="alert alert-success">FonctionTableau associatif année</h2>
<?php

$date = [

  "annee" => 2012,
  "mois" => 05,
  "jour" => 2,
  "heure" => 11,
  "minute" => 30,

];


// function tri($datePara){
  // $annee = 0;
  // $mois = ["January", "February", "March", "April", "April", "May" ,"June", "July", "August", "September", "October", "November", "December" ];
  // $day = ["Monday", "Tuesday", "Wenesday", "Thirday", "Friday", "Saturday", "Sunday"];
  // Le 16 Mars 2016 à 20h50

  if(is_array($date)){
    foreach ($date as $keyDate => $valueDate) {
      if($keyDate == "annee"){
        $year = $valueDate;
      }
      elseif($keyDate == "mois"){
        $month = $valueDate;

        $mois = ["January", "February", "March", "April", "May" ,"June", "July", "August", "September", "October", "November", "December" ];

        $monmoi = $mois[$month -1];

      }
      elseif($keyDate == "jour") {
        $day = $valueDate;
      }
      elseif($keyDate == "heure"){
        $hour = $valueDate;
      }
      elseif($keyDate == "minute"){
        $time = $valueDate;
      }
    }
    echo "<p class='alert alert-success'>Le ".$day." ".$monmoi." ".$year." à ".$hour."h".$time."</p>";
  }


?>
</div>

<div class="alert alert-info">
  <h2 class="alert alert-success">FonctionTableau Calcul d'aire</h2>
  <?php
  function airePremietre($mesures){

    if(count($mesures) == 2){ //si j'ai 2 côtés (carré ou rectangle)
      //current() : reccupérer 1er élément du tab
      $longueur = current($mesures);
      //next() : reccupérer le 2nd élément du tab
      $largeur = next($mesures);

      if($longueur != $largeur){
        $perimetre = ($longueur * $largeur) * 2;
        $aire = $longueur * $largeur;

        echo "Le périmètre du rectangle : ".$perimetre.". L'aire du rectangle : ".$aire.".";
      }else{

           $perimetre = ($longueur * 4);
           $aire = $longueur  * $largeur;
          echo "Le périmètre du carré : ".$perimetre.". L'aire du carré : ".$aire.".";
      }
    }
    elseif(count($mesures) == 3){ //si j'ai 3 côtés (triangle)
         $aire = ($mesures['base'] * $mesures['hauteur']) / 2;
         $perimetre = array_sum($mesures);

    	  echo "Le périmètre du triangle : ".$perimetre.". L'aire du triangle : ".$aire.".";

    }else{

  			 $aire = pi() * $mesures[0]  * $mesures[0]; //pi() 3.14...
         $perimetre = 2 * pi() * $mesures[0];

    	  echo "Le périmètre du cercle : ".$perimetre.". L'aire du cercle : ".$aire.".";
    }
  }
  airePremietre([5,8]);
  ?>


</div>
<div class="alert alert-info">
  <h2 class="alert alert-success">Fucntion pour convertir</h2>
  <!-- Créer une fonction qui va me permettre de convertir un prix du franc à l'euro et au format français avec la devise €
* Resultat : 12 500,75€
* Bonus: ajouter un parametre pour exploiter la précision après la virgule et un autre parametre pour dire si le prix doit etre arrondi ou pas -->


<?php
//
// function convert($prix){
//
//
//   $prixEuros = numberformat($prix/ 6.55957, 2, ',', ' ');
//   return $prixEuros. "€";
//
// }
//
// echo convert(65,5);


?>
</div>


<div class="alert alert-info">
  <h2 class="alert alert-success">Fucntion pour compter le nombre de mot</h2>


<?php

  $phrase = [
    "phrase1"=>"bonjour comment ca va bonjour",
    "phrase2"=>"bonjour je suis une deuxieme phrase",
    "phrase3"=>"Bonjour je suis une troisieme phrase",
  ];

  function nmbMot($phrase){
  foreach ($phrase as $value) {
    // echo str_word_count($value); => me donne le nombre de mot par phrase que l'on va additioner
    $total += str_word_count($value);
    }
  return "<p> il y a ".$total." mots </p>"; // on envoi le total à l'exterieur
  }
  echo nmbMot($phrase);


?>
</div>
<div class="alert alert-info">
  <h2 class="alert alert-success">Fucntion panier</h2>
<!--
  /*
  * Créer une fonction qui prends en paramètres 5 produits avec titre, description, quantité, prix
  * et qui me retourne le prix total de ces 5 produits et la moyenne des prix
  */ -->
<?php

$produits =[
      [
      "titre" => "Produit1",
      "description" => "description1",
      "quantite" => 1,
      "prix" => 3
      ],
      [
        "titre" => "Produit2",
        "description" => "description2",
        "quantite" => 1,
        "prix" => 4
      ],
      [
        "titre" => "Produit3",
        "description" => "description3",
        "quantite" => 1,
        "prix" => 5
      ],
      [
        "titre" => "Produit4",
        "description" => "description4",
        "quantite" => 1,
        "prix" => 6
      ],
      [
        "titre" => "Produit5",
        "description" => "description5",
        "quantite" => 1,
        "prix" => 7
      ]
  ];
  function returnPrix($tab){
    $total=0;
    foreach($tab as $key1=>$value1){
      foreach($value1 as $key2=>$value2){
        if($key2=="prix"){
          $total=$total+$value2;
        }
      }
    }
    echo "Le total du prix des produits est : ".$total."€ et la moyenne est : ".($total/count($tab))."€";
  }
  returnPrix($produits);

  // Seconde méthode
  // $tabprix = array_column($produits, 'prix') //extraire juste les prix sans foreach[76]
  // $total = array_sum($tabprix);
  // $moyenne = $total / count($tabprix);

?>
</div>
<div class="alert alert-info">
  <h2 class="alert alert-success">Fonction Majuscule</h2>

<?php

$noms = ["quentin", "meygan", "laurent", "noemie", "muriel", "robert"];

function majParagraphe($tab){

  if(is_array($tab)){

    echo "<p>";
    foreach ($tab as $valueTab) {
      $tabFinal .= ucwords($valueTab). " ";
    }
    echo "</p>";
  }

  return $tabFinal;
}

echo majParagraphe($noms);






?>
</div>







<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>


  </body>
</html>
