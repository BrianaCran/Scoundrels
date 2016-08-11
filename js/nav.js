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
  $('.fa-home').mouseout(function(){
     $('.Ho').slideToggle("slow");
    $('.fa-home').hide();
  });
  $('.Ho').mouseover(function(){
     $('.fa-home').slideToggle("slow");
    $('.Ho').hide();
  });

});
//historical
$(document).ready(function(){
  $('.fa-book').mouseout(function(){
     $('.H').slideToggle("slow");
    $('.fa-book').hide();
  });
  $('.H').mouseover(function(){
     $('.fa-book').slideToggle("slow");
    $('.H').hide();
  });

});
//Game
$(document).ready(function(){
  $('.fa-map').mouseout(function(){
     $('.G').slideToggle("slow");
    $('.fa-map').hide();
  });
  $('.G').mouseover(function(){
     $('.fa-map').slideToggle("slow");
    $('.G').hide();
  });

});
//Museum
$(document).ready(function(){
  $('.fa-university').mouseout(function(){
     $('.M').slideToggle("slow");
    $('.fa-university').hide();
  });
  $('.M').mouseover(function(){
     $('.fa-university').slideToggle("slow");
    $('.M').hide();
  });

});
//end of nav hover effect
