$(function() {


//tel
	//BEGIN phone input
	$(".phone").mask("+7 (999) 999-9999");
	
	//END phone input



//BEGIN popup global
function popupbg() {
    $('.popup-bg').css('height', 200 + $(window).height());
}

$(window).resize(popupbg());

popupbg();

function popups(elem, popup) {

    elem.click(function(e) {
        $('.popup-bg').addClass('active');
        $('body').addClass('active');
        popup.addClass('active');
        $('body').addClass('active');
        // e.preventDefault();
    })

    $('.popup-bg').click(function() {
        $(this).removeClass('active');
        popup.removeClass('active');
        $('body').removeClass('active');
    })

    $('.popup-close').click(function() {
        $('.popup-bg').removeClass('active');
        popup.removeClass('active');
        $('body').removeClass('active');
    })
}

popups($('.all-form'), $('.allform'));
popups($('.catalog-form1'), $('.catalogform1'));
popups($('.catalog-form2'), $('.catalogform2'));
popups($('.catalog-form3'), $('.catalogform3'));
popups($('.catalog-form4'), $('.catalogform4'));

//menu
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.main-menu').toggleClass("show");
  $('.logo-mob').toggleClass("none");
  $('body').toggleClass('overfloy');
});

jQuery(window).width() <= 767 && $(".menu-items li").on('click', function() {
  $('.menu-toggle').removeClass("on");
  $('.main-menu').removeClass("show");
  $('.logo-mob').removeClass("none");
  $('body').removeClass('overfloy');
});


//slider 
if(jQuery('.reviews__slider').length) {
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<svg class="svg-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="61" viewBox="0 0 32 61"><defs><path id="tl6ma" d="M174.226 2243.284l-28.079-28.247-.11.111-1.878-1.888.11-.112-.143-.144 1.881-1.892.144.144 28.046-28.213 1.877 1.889-28.046 28.213 28.08 28.247z"/><linearGradient id="tl6mb" x1="144.13" x2="176.13" y1="2217.28" y2="2209.04" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#765b14"/><stop offset=".25" stop-color="#edcc5b"/><stop offset=".5" stop-color="#977619"/><stop offset=".75" stop-color="#edcc5b"/><stop offset="1" stop-color="#765b14"/></linearGradient></defs><g><g transform="translate(-144 -2183)"><use fill="#190e26" xlink:href="#tl6ma"/><use fill="url(#tl6mb)" xlink:href="#tl6ma"/></g></g></svg>',
    nextArrow: '<svg class="svg-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="61" viewBox="0 0 33 61"><defs><path id="4vb3a" d="M1026.302 2182.743l28.137 28.137.11-.11 1.882 1.881-.11.11.143.144-1.885 1.886-.144-.144-28.104 28.104-1.881-1.881 28.104-28.104-28.138-28.138z"/><linearGradient id="4vb3b" x1="1024.42" x2="1056.42" y1="2216.75" y2="2208.74" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#765b14"/><stop offset=".25" stop-color="#edcc5b"/><stop offset=".5" stop-color="#977619"/><stop offset=".75" stop-color="#edcc5b"/><stop offset="1" stop-color="#765b14"/></linearGradient></defs><g><g transform="translate(-1024 -2182)"><use fill="#190e26" xlink:href="#4vb3a"/><use fill="url(#4vb3b)" xlink:href="#4vb3a"/></g></g></svg>',
    
  });
}
//accordeon
	var contents = $('.accordeon-content');
  var titles = $('.accordeon-title');
  titles.on('click',function(){
    
    var title = $(this);
    console.log(title);
    contents.filter(':visible').slideUp(function(){
    	$(this).prev('.accordeon-title').removeClass('is-opened');
    });  
    
    var content = title.next('.accordeon-content'); 
    
    if (!content.is(':visible')) {
      content.slideDown(function(){title.addClass('is-opened')});
    } 
  });
  
//navigation menu
  var linkNav = document.querySelectorAll('.menu__items [href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.25; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset, // производим прокрутка прокрутка
          hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
      t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
          start = null;
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
          if (start === null) start = time;
          var progress = time - start,
              r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
          window.scrollTo(0, r);
          if (r != w + t) {
              requestAnimationFrame(step)
          } else {
              location.hash = hash // URL с хэшем
          }
      }
  }, false);
}



});





