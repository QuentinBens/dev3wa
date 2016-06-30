$(document).ready(function(){
//=======================DEBUT DE JQUERY==========================
console.log($(document));



$("img[src]").hover(function(){
  var attrSrc = $(this).attr('src');
  var elt = $(this);
  var attrTitle = $(this).attr('title')

$("#remplacer").attr("src", attrSrc);
$('.bandeau').text(attrTitle)
$(".bandeau").show();


$("img").css({
  'border': '2px solid transparent'
});
elt.css({
  'border': '2px solid red'
});

});//Fin de hover

$("img[src]").mouseout(function(){

  var elt = $(this);
  elt.css({
    'border': '2px solid red'
  });
});//FIN DE mouseout

$("button[name='next']").click(function(){

  var elt = $(this);
  var srcOne = "img/img1.jpg";
  var srcTwo = "img/img2.jpg";
  var srcThree = "img/img3.jpg";
  var srcFour = "img/img4.jpg";
  var tab = [srcOne, srcTwo, srcThree, srcFour];
  var tabOne = [];

  for(var i = 0; i < tab.length; i++){

    if ($("#visio > img").attr('src') == tab[i] && $("button[name='next']").length == 1) {
      var srcFinal = i++
      console.log(srcFinal);
      $("#visio > img").attr('src', tab[srcFinal + 1] );
    }
  }
});//fin de click button

$("button[name='prev']").click(function(){

  var elt = $(this);
  var srcOne = "img/img1.jpg";
  var srcTwo = "img/img2.jpg";
  var srcThree = "img/img3.jpg";
  var srcFour = "img/img4.jpg";
  var tab = [srcOne, srcTwo, srcThree, srcFour];
  var tabOne = [];

  for(var i = 0; i < tab.length; i++){

    if ($("#visio > img").attr('src') == tab[i]) {
      var srcFinal = i++;
      console.log(srcFinal);
      $("#visio > img").attr('src', tab[srcFinal - 1] );

      if ($(".img").attr('src') == ta)
    }
  }
});






















});//=========== FIN DE JQUERY =======
