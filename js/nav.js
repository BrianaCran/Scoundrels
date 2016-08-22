//dropdown menu behavior
$(document).ready(function(){
  $('.dropdown-toggle').hover(function(){
    $('.dropdown-menu').show();
  });
});
$(document).ready(function(){
  $('.nav').hover(function(){
    $('.dropdown-menu').hide();
  });
});

//nav hover effect start
//home
$(document).ready(function(){
if($(window).width()>768){
  $('.fa-home').mouseout(function(){
     $('.Ho').slideToggle("fast");
    $('.fa-home').hide();
  });
  $('.Ho').mouseover(function(){
     $('.fa-home').slideToggle("fast");
    $('.Ho').hide();
  });}

});
//historical
$(document).ready(function(){
  if($(window).width()>768){
  $('.fa-book').mouseout(function(){
     $('.H').slideToggle("fast");
    $('.fa-book').hide();
  });
  $('.H').mouseover(function(){
     $('.fa-book').slideToggle("fast");
    $('.H').hide();
  });};

});
//Game
$(document).ready(function(){
  if($(window).width()>768){
  $('.fa-map').mouseout(function(){
     $('.G').slideToggle("fast");
    $('.fa-map').hide();
  });
  $('.G').mouseover(function(){
     $('.fa-map').slideToggle("fast");
    $('.G').hide();
  });};

});
//Museum
$(document).ready(function(){
  if($(window).width()>768){
  $('.fa-university').mouseout(function(){
     $('.M').slideToggle("fast");
    $('.fa-university').hide();
  });
  $('.M').mouseover(function(){
     $('.fa-university').slideToggle("fast");
    $('.M').hide();
  });};

});

//end of nav hover effect

//mobile nav
$(document).ready(function(){

  $('.showMenu').click(function(){
   $('.options').slideDown("fast");
 });

});

$(document).ready(function(){


if($(window).width()>769 && $(window).width()<1199){

alert("Please resize your browser to mobile size or full screen on desktop. Thank you for your patience!");

   }
});
