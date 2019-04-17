var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
  $("#nav-list").on("click", "a", function (event) {

    event.preventDefault();
    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);

    $("#nav-list").css('top', '-500px');
  });
  $("#burger").click(function () {
    $("#nav-list").css('top', '0');
  });
});
jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $("#nav-list");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $("#nav-list").css('top', '-500px');
    }
  });
});



function firstevent (id){
    document.getElementsByClassName("inter show")[0].className = "inter"
    document.getElementById(id).className ="inter show"
  }
  
  $(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('a#go').click( function(event){ // лoвим клик пo ссылки с id="go"
      event.preventDefault(); // выключaем стaндaртную рoль элементa
      $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
         function(){ // пoсле выпoлнения предъидущей aнимaции
          $('#modal_form') 
            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
            .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
      });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
      $('#modal_form')
        .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
          function(){ // пoсле aнимaции
            $(this).css('display', 'none'); // делaем ему display: none;
            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
          }
        );
    });
  });
