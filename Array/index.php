<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Hello PHP</title>
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
      #tab tbody tr td {
        vertical-align: middle;
      }
      .tt:hover {
        color: #999E9D;
        font-weight: bold;
        background-color: #75DCCF;

      }
      thead tr th:hover {
        background-color: #75DCCF;
      }
      tbody tr td:hover {
        background-color: #75DCCF;
      }
      tbody tr:hover {
        background-color: #75DCCF;
      }
    </style>
  </head>
  <body>
    <h1>Hello PHP</h1>
    <h3>C'est génial PHP</h3>
    <?php //Déclare l'ouverture du PHP
      //Echo afiche du texte
      echo "Cette ligne sera compilé en PHP par le serveur";
      echo "<p class='alert alert-success'>
              On peut se servir de bootstrap :)
           </p>";


      //Je créé ici ma Variable
      $maVariable = "Ceci est maVariable";
      //Je l'affiche comme ceci
      echo $maVariable;

      // je concatene avec des .""
      $monPrenom = "Quentin";
      $maVille = "Lyon";
      $monAge = 23;
      echo "<p class='alert alert-warning'>Je m'appelle ".$monPrenom." j'habite à ".$maVille." j'ai ".$monAge." ans</p>";

      // je concatene aussi avec {}
      $adresse = "11 rue Cyprien Cuchet";
      $cP = 26200;
      $city = "Montélimar";
      $departement = "drôme";
      $pays = "France";

      echo "<p class='alert alert-danger'>Je vis au {$adresse} {$cP} {$city}
              dans le département de {$departement}
              en {$pays}
            </p>";

      // Je compare mon age et j'affiche un echo en fonction de la comparaison
      if($monAge == 23) {
        echo "<div class= 'alert alert-success'> age = 23 </div>";
      }
      else if($age > 23){
        echo "<div class= 'alert alert-warning'>tu es plus vieux que 23</div>";
      }
      else {
        echo "<div class= 'alert alert-danger'>tu es moins vieux que 23</div>";
      }

      //Cela fonctionne aussi pour les lien en fonction d'une chaine de caracterer
      if($cP == 26200) {
        echo "<a href= 'https://www.facebook.com/groups/151981921643185/?fref=ts'class= 'alert alert-success'>Voici votre club les 45EMES Montélimar</a>";
      }
      else if($cP == 69100){
        echo "<a href='https://www.facebook.com/Falcons-de-Bron-Villeurbanne-51419630807/?fref=ts'class= 'alert alert-warning'>Voici votre club Bron-Villeurbanne</a>";
      }
      else {
        echo "<div class= 'alert alert-danger'>Vous n'avais pas de club</div>";
      }

      // Au moins 18 et de Lyon
      if($monAge >= 18 && $city == "Montélimar") {
        echo "<h2 class= 'alert alert-success'>Un majeur L'yonnais <h2>";
      }


      // 2 variables: Météo et température
      // si il fait beau et chaud :
      //  Afficher une image de plage

      // si  il fait beau et froid:
      // Afficher une image de Ski

      // si il fait froid et moche:
      //  Afficher une image de couverture

      // Bonus: Si il fait Beau ou chaud,
      // Afficher une image du Parc de la tete d'or

      // Bonus 2: Si il ne fait pas froid
      // ou qu'il ne fait pas beau
      // Afficher une image de cinema
      $meteo = "beau";
      $temperature = "chaud";

      if($meteo == "beau" && $temperature == "chaud") {
        echo "<img src='http://www.divinatix.com/wp-content/uploads/2014/10/Etoile.jpg'/>";
      }
      elseif($meteo == "beau" && $temperature == "froid") {
        echo "<img src= 'http://www.salut-les-vacances.com/wp-content/uploads/2012/09/VH_-_Sejour_Ski_au_Mont_St_Anne-300x100.jpg'/>";
      }
      elseif ($meteo == "moche" && $temperature == "froid") {
        echo "<img src='http://matelsom.scene7.com/is/image/matelsom/camif/10007219_ficelle1'/>";
      }
      elseif ($meteo == "beau" || $temperature == "chaud") {
        echo "<img src='http://www.pasbetes.com/wp-content/uploads/2012/05/ptetedor11.jpg'/>";
      }
      elseif ($meteo != "moche" || $temperature != "froid") {
        echo "<img src='http://www.trop-libre.fr/wp-content/uploads/2014/04/21.04.20141.jpg'/>";
      }
    ?> <!-- Fermeture de la balise -->

    <?php
      //Les tableaux

      // 1ere syntaxe pour les tableaux en PHP
      $tableau = [14, 11, 15, 10, 12, 8, 18, 19];

      //2eme syntaxe pour les tableaux les crochets [] et remplacer par array()
      $nombres = array(15, 10, 12.5, 14, 10, 7, 8, 19);

      echo "<p>Mon 1er nombre {$tableau[0]} </p>";
      echo "<p>Mon 4eme nombre {$tableau[3]} </p>";

      // Créer un tableau des 12 mois de l'année et remplacer le mois de décembre par le mot "Noël"
      // Bonus: Compter le nombre de mois dans le tableau
      // Bonus2: Intervertir le mois de Septembre avec le mois de Mars
      // Bonus3: Afficher tous les mois de l'année et en h1 votre mois d'anniversaire


      //exo
      $tabYear = [janvier, février, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, décembre];
      echo "<p>Mon 1er nombre {$tabYear[11]} </p>";
      $tabYear[11] = "noel";
      // ou $tabYear[sizeof($tabYear)]
      echo "<p>Mon 1er nombre {$tabYear[11]} </p>";

      // Bonus:
      echo "<p>La longueur de mon tableau".sizeof($tabYear)." </p>";

      // Bonus2:
      $tabStock = $tabYear[8];
      $tabYear[8] = $tabYear[2];
      $tabYear[2] = $tabStock;
      echo "<p>Mon mois 9 ".$tabYear[8]." </p>";
      echo "<p>Mon mois 3 ".$tabYear[2]." </p>";


      print_r($tabYear); // print_r et similaire à console.log de jquery mais affiche dans la page et non la console.

      for($i = 0; $i < count($tabYear); $i++){

        if($tabYear[$i] == "octobre"){
            echo "<h1>".$tabYear[$i]."</h1>";
        }
        else if($tabYear[$i] == end($tabYear)){
          echo "<h3>".$tabYear[$i]."</h3>";
        }
        else{
  		      echo $tabYear[$i];
        }
      }

      $tabPerso = [
          "ID" => "aucun",
          "nom" => "BENARD",
          "prenom" => "Quentin",
          "avatar" => "</br><img src='https://upload.wikimedia.org/wikipedia/fr/8/89/638px-Logo_BRIO.svg.png'/>",
          "ville" => "Montélimar",
          "pseudo" => "Brio",
          "email" => "benardq@gmail.com",
      ];

      foreach($tabPerso as $key => $value) {
        echo "<p>Mon " .$key. " est " .$value. "</p>";
        if($key == "pseudo" ){
          $value = "toto";
          echo "<p>Mon nouveau Pseudo: " .$value. "</p>";
        }
      }


    ?>


<h1>NEW TEST</h1>
    <?php
    $profils =
[
  [
    "id" => 12354665,
    "nom" => "Boyer",
    "prenom" => "Julien",
    "avatar" => "https://pbs.twimg.com/profile_images/616076655547682816/6gMRtQyY.jpg",
    "ville" => "Lyon",
    "pseudo" => "Symfomany",
    "email" => "julien@meetserious.com",
  ],
  [
    "id" => 48484,
    "nom" => "Verrecchia",
    "prenom" => "Ludovic",
    "avatar" => "https://pbs.twimg.com/profile_images/ludov.jpg",
    "ville" => "Paris",
    "tags" => ["capital", "ville", "sexe", "ect"],
    "pseudo" => "UnPtitLu",
    "email" => "ludovic@meetserious.com",
  ],
];

echo $profils[1]['prenom'];?>

<h2>Exo 1</h2>
<?php


$profils[1]['ville'] = 'Marseille';
echo $profils[1]['ville'];
 ?>

<h2>Exo 2</h2>
<?php
echo count($profils);
echo count($profils[1]['tags']);
 ?>

 <h2>Exo 3</h2>

 <?php
foreach ($profils as $profil) {
  foreach ($profil as $key => $value) {
    echo "<p>Ici ma clef:<b> " .$key. " </b>est:<b> " .$value. " </b>est ma valeur </p>";
    if($key == "tags") {
      foreach ($value as $key => $value) {
        echo "<p>Ici ma clef:<b> " .$keys. " </b>est:<b> " .$value. " </b>est ma valeur </p>";

      }
    }
  }
}
     ?>
 <!-- // Exercice
 // Créer un tableau multidimentionnelle stockant le nom du mois de l'année et le nombre de jours des mois
 // Afficher l'ensemble des données de ce tableau
 // Compter et Afficher le nombre total de jour dans l'année
 // Calculer et Afficher la moyenne du nb. de jour par mois
 // Bonus: Ajouter les 4 saisons selon les mois et afficher la saison de chaque mois -->
 <h2>EXO 4 Les mois </h2>
 <?php

$Year =
[
"Winter" =>
[
  [
  "nbJours" => 31,
  "nom" => "Janvier"
  ],
  [
  "nbJours" => 28,
  "nom" => "Février"
  ],
  [
  "nbJours" => 31,
  "nom" => "Mars"
  ],
],
 "Spring" =>
 [
   [
    "nbJours" => 30,
    "nom" => "Avril"
    ],
    [
     "nbJours" => 31,
     "nom" => "Mai"
    ],
    [
     "nbJours" => 30,
     "nom" => "Juin"
    ],
],
"Summer" =>
[
  [
   "nbJours" => 31,
   "nom" => "Juillet"
  ],
  [
   "nbJours" => 31,
   "nom" => "Août"
  ],
  [
   "nbJours" => 30,
   "nom" => "Septembre"
  ],
],
"Automn" =>
[
  [
   "nbJours" => 31,
   "nom" => "Octobre"
  ],
  [
   "nbJours" => 30,
   "nom" => "Novembre"
  ],
  [
   "nbJours" => 31,
   "nom" => "Décembre"
  ],
],
 ];

$totalDays = 0;

foreach($Year as $Clef => $Season){
  foreach ($Season as $mois) {
    if($mois['nom'] == "Avril") {
      $mois['nom'] = "<span id='One'><i class='fa fa-hand-o-right' aria-hidden='true'></i></span>" .$mois['nom'];
    }
    echo "<p>The month: <i><b> " .$mois['nom']. "</b></i> the season <b>" .$Clef. " </b>with<b> " .$mois['nbJours']. " </b> days </p>";
    foreach($mois as $key => $val){
      if($key == "nbJours") {
        $totalDays = $totalDays + $val;
       }
     }
   }
  }
  echo "<p> Ceci est mon Nombre total de Jours <b>" .$totalDays. "</b></p>";

?>


<h2>EXO 5 Jeux</h2>
<!-- // Créer un tableau contenant 5 articles avec pour chaque article
   + Un titre
   + Un résumé
   + Une description (avec balses HTML)
   + Un nom de catégorie
   + Un note sur 20
   + Une image (url vers image)
   + Un tableau tags pour chaque article
   + Un tableau qui regroupe les informations de l'auteur (nom, prenom et email) pour chaque article
   + Un tableau qui regroupe 4 urls de videos pour chaque article

+ Afficher l'ensemble des informations avec des boucles

+ Afficher les articles qui ont une note > 15 en background success
// Afficher les articles qui ont une note > 10 et < 15 en background infos
// Afficher les articles qui ont une note > 8 et < 10 en background warning
// Afficher les articles qui ont une note < 8  en background danger

+ Afficher si la longueur du titre > 20 caractères alors ajouter un glyphycon remove glyphicon glyphicon-remove
+ Afficher les tags dans des Labels Boostrap et afficher le nombre de tags par articles dans des Badges Boostrap
+ Ajouter 3 tags "Bilbo", "Saquet" et "Hobbit" pour le 4eme articles
+ Bonus: Si l'auteur a un email Yahoo ou Gmail, afficher un logo Yahoo ou Gmail dans l'article -->

 <?php

$Book =
[
  "ArticleOne" =>
  [
    "Title" => "Overwatch",
    "Resume" => "Avec Overwatch, Blizzard se lance dans le genre FPS après avoir révolutionné le monde du MOBA avec Heroes of the Storm et du Free-to-Play avec Hearthstone.",
    "Description" => "Dans une période de crise mondiale, des héros venus de tous les horizons ont composé une équipe d’intervention internationale pour ramener la paix dans un monde déchiré par la guerre : Overwatch. Cette organisation a mis fin à la crise et préservé la paix pendant les décennies suivantes, inspiré une ère d’exploration, d’innovation et de découvertes. Mais après bien des années, son influence s’est étiolée, et elle a finalement été dissoute.",
    "Category" => "FPS",
    "Note" => 7,
    "Img" => "http://hdqwalls.com/wallpapers/thumb/overwatch-game-all-heroes.jpg",
    "Tags" => ["Jeu", "Fps", "Inline", "MultiPlayer"],
    "Info" => [
      "Nom" => "Blizzard",
      "prenom" => "Bliz",
      "Email" => "blizzard@bliz.com",
    ],
    "Video" =>
    [
      "https://www.youtube.com/watch?v=yfSaKtvEu1k",
      "https://www.youtube.com/watch?v=Yala2U3Iqh4",
      "https://www.youtube.com/watch?v=FKw3NQVcLpk",
      "https://www.youtube.com/watch?v=yl6pt82zwU4",
    ],
  ],//Fin AticleOne
  "ArticleTwo" =>
  [
    "Title" => "TeamFortress 2 sou aussi TF2",
    "Resume" => "Team Fortress 2, ou TF2, est un jeu vidéo de tir à la première personne multijoueur en ligne basé sur le jeu d'équipe. Développé par Valve Corporation, il est la suite directe de Team Fortress Classic.",
    "Description" => "Chaque classe possède généralement 3 armes, l'arme principale (déterminant souvent la caractéristique de la classe), l'arme secondaire (souvent un pistolet ou un fusil à pompe) et une arme de courte porté à utilisation infinie. Bien que l'on puisse débloquer de nouvelles armes, elles sont limitées à une classe précise et le statut et ne sont pas fondamentalement différentes des armes de départ.",
    "Category" => "FPS",
    "Note" => 9,
    "Img" => "http://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1457137799",
    "Tags" => ["Fps", "tir"],
    "Info" => [
      "Nom" => "Valve",
      "prenom" => "Robin",
      "Email" => "robin@yahoo.com",
    ],
    "Video" =>
    [
      "https://www.youtube.com/watch?v=eo6mF93jEnY",
      "https://www.youtube.com/watch?v=gXNwXS0v094",
      "https://www.youtube.com/watch?v=QoomSTxip2s",
      "https://www.youtube.com/watch?v=WYbkftkAtfw",
    ],
  ],//Fin AticleTwo
  "ArticleThree" =>
  [
    "Title" => "WoW ou aussi World of Warcraft",
    "Resume" => "World of Warcraft: Legion est la sixième extension de jeu vidéo du jeu de rôle en ligne massivement multijoueur World of Warcraft. Elle a été annoncée le 6 août 2015 à la gamescom et est axée sur le retour de la légion ardente en Azeroth.",
    "Description" => "La tombe de Sargeras a été rouverte, et les démons de la Légion ardente fondent sur notre monde. Ils concentrent la totalité de leur terrifiante puissance à l’invocation du titan noir en Azeroth… et ils savent déjà où se trouve la clé qui lui permettra de revenir.
    La Horde et l’Alliance dévastées, vous seul êtes à même de vous emparer des armes les plus prodigieuses de l’univers de Warcraft, d’arpenter les antiques îles Brisées à la recherche de reliques des titans et de défier la Légion avant que le dernier espoir d’Azeroth s’évanouisse.Armez-vous de courage, champion. L’extinction est imminente.",
    "Category" => "Mmorpg",
    "Note" => 13,
    "Img" => "http://fr.ubergizmo.com/wp-content/uploads/2015/08/blizzard-world-of-warcraft-legion-300x300.png",
    "Tags" => ["Jeu", "Mmorpg", "Inline", "Fantasy"],
    "Info" => [
      "Nom" => "Blizzard",
      "prenom" => "Bliz",
      "Email" => "blizzard@gmail.com",
    ],
    "Video" =>
    [
      "https://www.youtube.com/watch?v=c2K-UOhCTaM",
      "https://www.youtube.com/watch?v=2Rxoz13Bthc",
      "https://www.youtube.com/watch?v=RbEUKYsfpIw",
      "https://www.youtube.com/watch?v=rOV-3RNfJX0",
    ],
  ],//Fin AticleThree
  "ArticleFour" =>
  [
    "Title" => "DungeonDefender2",
    "Resume" => "Dungeon Defenders II is a cooperative Action Tower Defense game, packed with roleplaying elements like loot, levelling, and pets.",
    "Description" => "Dans une période de crise mondiale, des héros venus de tous les horizons ont composé une équipe d’intervention internationale pour ramener la paix dans un monde déchiré par la guerre : Overwatch. Cette organisation a mis fin à la crise et préservé la paix pendant les décennies suivantes, inspiré une ère d’exploration, d’innovation et de découvertes. Mais après bien des années, son influence s’est étiolée, et elle a finalement été dissoute.",
    "Category" => "",
    "Note" => 14,
    "Img" => "http://cdn.akamai.steamstatic.com/steam/apps/236110/header.jpg?t=1459892779",
    "Tags" =>  ["DefenseTower", "Steam", "MultiPlayer"],
    "Info" => [
      "Nom" => "Valve",
      "prenom" => "Robin",
      "Email" => "robin@yahoo.com",
    ],
    "Video" =>
    [
      "https://www.youtube.com/watch?v=YLxdVd7OAJ4",
      "https://www.youtube.com/watch?v=kfsuK1ISEb0",
      "https://www.youtube.com/watch?v=RExllZDX7l8",
      "https://www.youtube.com/watch?v=uc4LoyhNh_c",
    ],
  ],//Fin AticleFour
  "ArticleFive" =>
  [
    "Title" => "Overwatch",
    "Resume" => "League of Legends est un jeu vidéo d'ordinateur de type arène de bataille en ligne multijoueur gratuit développé et édité par Riot Games sur Windows et Mac OS X. Fin janvier 2013, un nouveau client bêta pour Mac a été distribué par Riot Games",
    "Description" => "Dans une période de crise mondiale, des héros venus de tous les horizons ont composé une équipe d’intervention internationale pour ramener la paix dans un monde déchiré par la guerre : Overwatch. Cette organisation a mis fin à la crise et préservé la paix pendant les décennies suivantes, inspiré une ère d’exploration, d’innovation et de découvertes. Mais après bien des années, son influence s’est étiolée, et elle a finalement été dissoute.",
    "Category" => "FPS",
    "Note" => 19,
    "Img" => "https://signup.euw.leagueoflegends.com/theme/signup_theme/img/signup_logo2_clean.png",
    "Tags" => ["Jeu", "Moba", "Battle", "MultiPlayer"],
    "Info" => [
      "Nom" => "RiotGame",
      "prenom" => "Feak",
      "Email" => "riotd@gmail.com",
    ],
    "Video" =>
    [
      "https://www.youtube.com/watch?v=78cM5D6n1qk",
      "https://www.youtube.com/watch?v=YCH0YHmZenI",
      "https://www.youtube.com/watch?v=NlrPy_picAI",
      "https://www.youtube.com/watch?v=-k9kdgVx7VY",
    ],
  ],//Fin AticleFive
];// Fin book LVL1


foreach ($Book as $key => $Article ) {
  //NIVEAU ZERO
  //Ajout de 3 Tags dans article 4
  if($key == 'ArticleFour') {
    $Article['Tags'][4] = 'Bilbo';
    $Article['Tags'][5] = 'Saquet';
    $Article['Tags'][6] = 'Hobbit';
  }
  // Ajout de test email pour rajout icone en corespondance
  $icone = "";
  if(preg_match("#yahoo#", $Article['Info']['Email'])) {
    $icone= "<img src='http://cdn2.perfectpatients.com/childsites/uploads/2402/files/yahoo-icon.png'/>";
  }
  elseif(preg_match("#gmail#", $Article['Info']['Email'])) {
    $icone = "<img src='http://www.kamalcomputers.com/images/gmail_logo.png'/>";
  } else {
    $icone = "<img src ='https://general.bajajallianz.com/Insurance/Payment/images/error.jpg'/>";
  }

  $glyphRemove = "";
  if ($Article['Note'] > 15) {
    $Background = "success";
  }
  elseif ($Article['Note'] <= 15 && $Article['Note'] >10) {
    $Background = "info";
  }
  elseif ($Article['Note'] <= 10 && $Article['Note'] >8) {
    $Background = "warning";
  }
  elseif ($Article['Note'] <= 8 ) {
    $Background = "danger";
  }

  if (strlen($Article['Title']) >= 20) {
   $glyphRemove = "<span class='glyphicon glyphicon-remove'></span>";
  }
  echo "<div class='alert alert-" .$Background. "'>";
  foreach ($Article as $Keys => $Value) {
    //NIVEAU 1
    if($Keys == "Tags") {
      echo "<p>Ici ma clef: <button class='btn btn-info' >" .$Keys. " <span class='badge'>" .count($Value). "</span></button>, ici mes Valeurs :</p>";
      foreach ($Value as $key => $keyVal) {// NIVEAU 2.1
        echo "<li><span class='label label-primary'>" .$keyVal. "</span></li>";
      }// FIN NIVEAU 2.1
    }
    elseif ($Keys == "Info") {
      echo "<br /></ul><p>Ici ma clef: <b>" .$Keys. "</b>, ici ces clefs et Valeurs :</p>".$icone;
      foreach ($Value as $keyInfo => $keyVal) {// NIVEAU 2.2
        echo "<li>Mon " .$keyInfo. " et sa valeur: " .$keyVal. "</li>";
      }// FIN NIVEAU 2.2
    }
    elseif($Keys == "Video") {
      echo "<br /><p>Ici ma clef: <b>" .$Keys. "</b>, ici mes Valeurs :</p>";
      foreach ($Value as $key => $keyVal) {// NIVEAU 2.3
        $key = $key +1;
        echo "<li><a href='" .$keyVal. "'>Ma vidéo Youtube " .$key. "</a></li>";
      }// FIN NIVEAU 2.3
    }
    elseif ($Keys == "Title") {
      echo "<p>" .$glyphRemove. "Ici ma clef: <b>" .$Keys. "</b>, ici ma Valeur, <b>" .$Value. "</b></p>";
    }

    elseif ($Keys == "Img") {
      echo "<p>Ici ma clef: <b>" .$Keys. "</b>, ici ma Valeur: <b>" .$Value."</b><br /> <img src='" .$Value. "'/></p>";
    }
    elseif($Keys == "Note") {
      echo "<p>Ici ma clef: <b>" .$Keys. "</b>, ici ma Valeur, <b>" .$Value. "</b></p>";
    }
    else {
      echo "<p>Ici ma clef: <b>" .$Keys. "</b>, ici ma Valeur, <b>" .$Value. "</b></p>";
    }
  }//FIN NIVEAU 1
  echo "</div>";
}// FIN NIVEAU ZERO

?>
<h2>EXERCICE 6 : Tableau des adresses d'une boutique en ligne </h2>
<!-- * Etape 0 : Créer un tableau vide au départ qui stockera les adresses
* Etape 1 : Remplir ce tableau  d'une sous tableau associatif pour l'adresse de facturation :
* Adresse, Ville, Pays, (sans modifier le tableau en dur)
* Etape 2 : Remplir ce tableau d'un 2eme sous tableau associatif pour l'adresse de livraison :
* Adresse, Ville, Pays (sans modifier le tableau en dur)
* Ajouter pour l'adresse de facturation le nom, prénom et email de l'utilisateur (sans modifier le tableau en dur)
* Ajouter un commentaire pour l'adresse de livraison et un autre commntaire l'adresse de facturation
* Ajouter une liste de 3 pseudos pour l'utilisateur dans  l'adresse de facturation
* Afficher l'ensemble des informations de ce tableau d'adresses
* Bonus: Supprimer le pays du tableau de livraison (avec la fonction unset()) -->

<?php
//DEBUT adresse
$Adresse = [] ;
// Ajout de facturation pour adresse
$Adresse['Facturation'] = [
  "Adresse", "Ville", "Pays"
];
// Ajout de livraison pour Adresse
$Adresse['Livraison'] = [
  "Adresse", "Ville", "Pays"
];
// Ajout de User pour facturation
$Adresse['Facturation']['User'] = [
  "Nom" => "BENARD",
  "Prenom" => "quentin",
  "Email" => "quentin@gmail.com"
];
//Ajout de commentaire pour facturation
$Adresse['Facturation']['Commentaire'] = "Ici mon commentaire pour mon adresse de facturation";
//Ajoutde "commentaire" pour Livraison
$Adresse['Livraison']['Commentaire'] = "Ici mon commentaire pour mon adresse de livraison";

//Ajout 3 pseudos pour user dans adresse facturation
$Adresse["Facturation"]['User']['Pseudo'] = ["pseudo1", "pseudo2", "pseudo3"];



// Niveau 0
foreach ($Adresse as $keyAdresse => $valueAdresse) {

  echo "<div class='alert alert-info'>
  Dans mon tableau J'ai deux adresses en voilà une : <b>" .$keyAdresse. "</b><br />";

  // Niveau 1
  foreach ($valueAdresse as $keylol => $valueAdress) {
    if(is_array($valueAdress) && $keylol == "User"){
      echo "<li>Pour : <b>".$keylol. "</b> j'ai la valeur:</li><ul>";
      // Niveau 2
      foreach ($valueAdress as $keyUser => $valueUser){
        if(is_array($valueUser) && $keyUser == "Pseudo"){
        echo "<li>Ici ma clef : <b>".$keyUser." </b>Ici ma valeur :</li><ul>";
        // Niveau 3
        foreach ($valueUser as $keyPseudo => $valuePseudo) {
          echo "<li>Ici ma clef : <b>".$keyPseudo." </b>Ici ma valeur :<b>" .$valuePseudo. "</b></li>";
        }//Fin de niveau 3
      }else{
        echo "<li>Ici ma clef : <b>".$keyUser." </b>Ici ma valeur :<b>" .$valueUser. "</b></li>";
      }

    }// FIN niveau 2
    echo "</ul>";
    }else{
      echo "<li>Pour : <b>".$keylol. "</b> j'ai la valeur: <b>" .$valueAdress. "</b></li>";
    }
    echo "</ul>";
  }//Fin NIVEAU 1
  echo "</div>";
}// Fin NIVEAU 0

?>





<h2>EXERCICE 7 : Tableaux du panier d'une boutique en ligne </h2>
<?php

// Créer un tableau vide au départ qui représentera notre panier
//  Ajouter un item de panier qui comprends la quantité, la référence du produit, l'intitulé du produit ainsi que le prix unitaire (sans modifier le tableau en dur)
// Ajouter 2 autres items dans ce panier (sans modifier le tableau en dur)
// Calculer le total HT du panier et le stocker dans le tableau
// Calculer le total TTC du panier avc une TVA à 20% et le stocker dans le tableau
// Afficher toutes les informations du panier
// Bonus: Ajouter 2 remises de 15% et 19% pour le premier et le 2eme item, les stocker dans le tableau et reafficher le montant TTC avec prises en compte de ces remises
// Bonus 2: Afficher toutes les informations dans un tableau HTML <table> (C'est horrible :p)

// Ajout de mon tableau vide

$Panier = [];

$Panier['Deadpool'] =
[
  "Qte" => 5,
  "reference" => 123456789,
  "intitulé" => "Figurine Deadpool",
  "prixU" => 15,
]; // Fin Panier deadppol
$Panier['Spider-man'] =
[
  "Qte" => 7,
  "reference" => 123456788,
  "intitulé" => "Figurine Spider-man",
  "prixU" => 17,
]; //Fin panier spider
$Panier['Wolverine'] =
[
  "Qte" => 9,
  "reference" => 123456787,
  "intitulé" => "Figurine Wolverine",
  "prixU" => 19,
]; // Fin panier Wolverine

// Ajout TotalHT des items
$Panier['TotalHT'] = ($Panier['Deadpool']["prixU"] + $Panier['Spider-man']["prixU"] + $Panier['Wolverine']["prixU"])/ count($Panier);

// Ajout TotalTTC des items avec 20%
$Panier['TotalTTC'] = $Panier['TotalHT'] + ($Panier['TotalHT']/ 100 * 20);

print_r($Panier);


// print_r($Panier);
//NIVEAU 0
  echo
  "<table id='tab' cell-padding='10px' class='table table-hover' class='table table-striped' class='active' border='0'  style='
  box-shadow: -1px 5px 10px 10px rgba(0, 0, 0, 0.7);
  font-family: Arial; '>
  <thead  style='background-color: #D9D9D9' >
  <tr>
  <th>Articles</th>
  <th>Intitulé produits</th>
  <th>Prix Unitaire</th>
  <th>Références</th>
  <th>Total HT</th>
  <th>Total TTC</th>
  </tr>
  </thead>
  <tbody>";
  foreach ($Panier as $keyPanier => $valueArticle) {
    if($keyPanier != "TotalHT" && $keyPanier != "TotalTTC" ){
      echo "
      <tr style='background-color: white'>
      <td >".$keyPanier."</td></tr>";
    }
  }// FIN NIVEAU 0


"<td >Intitulé produit 1</td>
<td >Prix 1</td>
<td >Référence 1</td>
<td class='tt' rowspan='3'><p>Prix ##### HT</p></td>
<td class='tt' rowspan='3'><p>Prix ##### TTC</p></td>
</tr>";
  echo"
  </tbody>
  </table>";



?>


























<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>


  </body>
</html>
