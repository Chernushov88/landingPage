$(function($){  
  /* mask */
  $(".input-phone").mask("+7(999) 999-99-99");
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
  $('#carousel_home').owlCarousel({
      margin: 0,
      items : 1,
      autoplayTimeout: 3000,
      autoplay: true,
      dots:  false,
      nav: false,
      // loop: true
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
  // $(window).scroll(function(){
  //   let scrolDOM = $(this).scrollTop();
  //   console.log('scrolDOM', scrolDOM)
  //   if (scrolDOM > 300) {
  //     $('#handsImg').attr('src','img/screen2/hands/2.png');
  //     if (scrolDOM > 400) {
  //       $('#handsImg').attr('src','img/screen2/hands/3.png');
  //       if (scrolDOM > 600) {
  //         $('#handsImg').attr('src','img/screen2/hands/4.png');
  //         if (scrolDOM > 800) {
  //           $('#handsImg').attr('src','img/screen2/hands/5.png');
  //           if (scrolDOM > 1000) {
  //             $('#handsImg').attr('src','img/screen2/hands/6.png');
  //           }
  //         }
  //       }
  //     }
  //   }
  //   else{
  //     $('#handsImg').attr('src','img/screen2/hands/1.png');
  //   }
  //
  // });
     
  $('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  // $(".darken").click(function(){
  //   $(".darken").fadeOut(300);
  //    $('.popup').removeClass('open');
  // });
      
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

window.addEventListener('load', function(){

  let btnAll = document.querySelectorAll('.btn-js');
  btnAll.forEach( (e) =>{
    e.addEventListener('click', function(event){
      event.preventDefault();
      console.log(e);
      let modal = document.querySelector(e.getAttribute('data-modal'));
      let close = document.querySelector('.close');
      let darken = document.querySelector('.darken');
      let formAction = e.getAttribute('data-action');

      let modalFormId = e.getAttribute('data-form-id');
      let modalForm = modal.querySelector('.form');
      modalForm.setAttribute('id', modalFormId);

      let resultId = e.getAttribute(('data-result'))
      let result = modalForm.querySelector('.result');
      result.setAttribute('id', resultId);

      let bthSubmit = modalForm.querySelector('button.btn');
      let bthSubmitSpan = modalForm.querySelector('button.btn span');
      console.log('bthSubmitSpan', bthSubmitSpan);
      let dataTextBtn = e.getAttribute('data-text-btn');
      console.log( 'dataTextBtn', dataTextBtn);
      bthSubmitSpan.innerText = dataTextBtn;

      bthSubmit.addEventListener('click', function(){
        let newmodalFormId = '#' + modalFormId;
        let newresultId = '#' + resultId;
        send(formAction,newmodalFormId,newresultId);
      })
      close.addEventListener('click', function(){
        modal.classList.remove("open");
        darken.classList.remove('active');
      });
      darken.addEventListener('click', function(){
        modal.classList.remove("open");
        darken.classList.remove('active');
      });
      if (e.hasAttribute('data-modal')){
        modal.classList.add("open");
        darken.classList.add('active');
      }

    })
  });
})


function send(url,form_id,result_div) {
    console.log('url', url);
    console.log('form_id', form_id);
    console.log('result_div', result_div);
  jQuery.ajax({
    type: "POST",
    url:  url,
    data: jQuery(form_id).serialize(),
    // Выводим то что вернул PHP
    success: function(html){
       console.log('success', html);
        jQuery(result_div).fadeIn(1800);
      jQuery(result_div).empty();
      jQuery(result_div).append(html);

      setTimeout(function() {
        jQuery(document).ready(function(){
          jQuery(result_div).fadeOut(1800);
        });
      }, 60000)
    },
    error: function(html) {
      console.log('error', html);
      // jQuery(result_div).empty();
      // jQuery(result_div).append("Ошибка!");
    }
  });
}


// $(function() {
//   var blockTop = $('.second').offset().top;
//   var CountUpFlag = 0;
//   var $window = $(window);
//   $window.on('load scroll', function() {
//     var top = $window.scrollTop();
//     var height = $window.height();
//     if (top + height >= blockTop && CountUpFlag == 0) {
//       CountUp();
//       CountUpFlag = 1;
//     }
//   });
//   function CountUp() {
//     $('#animation').show();
//   }
// });