$(function($){  
  /* mask */
  $(".phone").mask("+7(999) 999-99-99");
/* navigator */
  var ua = navigator.userAgent;    
  // с помощью регулярок проверяем наличие текста,
  // соответствующие тому или иному браузеру
  if (ua.search(/Chrome/) > 0) console.log('Google Chrome');
  if (ua.search(/Firefox/) > 0) $('body').addClass('body_firefox');
  if (ua.search(/Opera/) > 0) console.log('Opera');
  if (ua.search(/Safari/) > 0) console.log('Safari');
  if (ua.search(/MSIE/) > 0) console.log('Internet Explorer');

  /* -- owl-carusel ---*/
  $('#carousel_home_baner').owlCarousel({
      margin: 0,
      items : 1,
      dots:  true,
      singleItem: true,
      nav: true, 
      loop: true,
      responsive:{
        992:{ 
          
        },
        768:{ 
          nav:  true,
          dots:  true,
        },
        320:{
          nav:  false,
          dots:  false,
        }
      }
  });


  var winWidth = $( document ).width();
  if (winWidth < 767) {
    $('#activation').attr('colspan',6);
  }

  /* quantity-selector */
  $('.quantity-selector').on('click', 'button', function(){
    var op = $(this).attr('data-op');
    var input = $(this).parent().parent().find('.quantity-selector__field');
    var inputVal = $(this).parent().parent().find('.quantity-selector__field').val();

    if (op == '+') {
      var newVal = (parseInt($(input).val(),10) + 1);
      $(input).val(newVal);
    }else if(op == '-'){
      console.log(inputVal);
      if(inputVal > 1){
        var newVal = (parseInt($(input).val(),10) - 1);
        $(input).val(newVal);
      }       
    } 
  });




  $("[data-fancybox]").fancybox({
    toolbar: "auto",
    buttons : [ 
      'slideShow',
      'close'
    ],
    loop: true,
    keyboard: true,
    arrows: true,
    infobar: true,
    modal: true,
    idleTime: 3,      
  });


  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 120) {
        $(".header").addClass('fixed');
    } else {
        $(".header").removeClass('fixed');
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) { 
    $('#scroll').fadeIn();
    } else {
    $('#scroll').fadeOut();
    }
  });
     
  $('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  $(".darken").click(function(){
    $(".darken").fadeOut(300); 
     $('.popup').removeClass('open');
  });
      
  $(document).on('click','.slct',function(e){
    var dropBlock = $(this).parent().find('.drop'); 
     if( dropBlock.is(':hidden') ) {
      dropBlock.slideDown(150);
      $(this).addClass('active');
      $('.drop').find('li').click(function(){  
        var selectResult = $(this).html();
        var selectValue = $(this).attr('value');
        console.log(selectValue);
        $(this).parent().parent().find('input').val(selectValue).trigger('change');
        console.log($(this).parent().parent().find('input').val());
        $(this).parents().find('.slct').removeClass('active').html(selectResult);
       dropBlock.slideUp(150);
      });   
     } else {
      $(this).removeClass('active');
      dropBlock.slideUp();
     }  
    console.log('I am work!!');
    return false;
  });

});
$(document).mouseup(function (e) {
  var container = $(".drop");

  if ((container.has(e.target).length === 0) ){
    container.slideUp(150);
  }
});
function ShowPopup(target){
  event.preventDefault();
  $(".darken").fadeIn();
  $(target).addClass('open');
}

function HidePopup(target){
  $(".darken").fadeOut(300); 
  $(target).removeClass('open');
}

function touchMenu(elem,menu){
  $(elem).toggleClass('active');
  $(menu).toggleClass('active');
  $('.dark-transparent').toggleClass('active');
  addIconsMenu(menu);
}

function addIconsMenu(menu){
  console.log(menu);
  $(menu + ' li').each(function(){
    $(this).children('.add').click(function(){
      console.log('click');
      $(this).toggleClass('active').parent('li').children('ul').toggleClass('show');
    });
  });
};


