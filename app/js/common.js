$(function() {

// //tabs
//     $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
//         $(this)
//           .addClass('active').siblings().removeClass('active')
//           .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//       });
// //tel
//     var input = document.querySelector("#tel");
//     window.intlTelInput(input);



// //BEGIN popup global
// function popupbg() {
//     $('.popup-bg').css('height', 200 + $(window).height());
// }

// $(window).resize(popupbg());

// popupbg();

// function popups(elem, popup) {

//     elem.click(function(e) {
//         $('.popup-bg').addClass('active');
//         $('body').addClass('active');
//         popup.addClass('active');
//         $('body').addClass('active');
//         // e.preventDefault();
//     })

//     $('.popup-bg').click(function() {
//         $(this).removeClass('active');
//         popup.removeClass('active');
//         $('body').removeClass('active');
//     })

//     $('.popup-close').click(function() {
//         $('.popup-bg').removeClass('active');
//         popup.removeClass('active');
//         $('body').removeClass('active');
//     })
// }

// popups($('.global-form'), $('.globalform'));

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
// if(jQuery('.about-slider').length) {
//   $('.about-slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true

//   });
// }



});





