//***********************************************
//* Autor: Vassil Dimitrov                      *
//* Date: 15.03.2015                            *
//* Last changes at:                 *
//***********************************************

$(document).ready(function () {
    //Sticky Navigation
    // stickyNavigation();
    //Paralax Effect
    // $(window).bind('scroll', stickyNavigation());
    // $(window).on('resize', stickyNavigation());

// --------------------------------------------------------------------

    $(".nav-cell").on("click", function(e){
        var x = e.pageX;
        var y = e.pageY;
        var clickY = y - $(this).offset().top;
        var clickX = x - $(this).offset().left;
      var box = this;
       
      var setX = parseInt(clickX);
      var setY = parseInt(clickY);
       $(this).find("svg").remove();
       $(this).append('<svg><circle cx="'+setX+'" cy="'+setY+'" r="'+10+'"><animate attributeType="xml" attributeName="r" from="0" to="200" dur=".3s" fill="freeze"/><animate attributeType="CSS" attributeName="opacity" from="1" to="0" dur=".5s" fill="freeze"/></circle></svg>');
    });
});
// -----------------------------------------------------------------------
// function stickyNavigation() {
//     var topBar = $('.nav-wrapper');
//     var navCell = $('.nav-tile');
//     var article = $('.aside-first-container');

//     // our function that decides weather the navigation bar should have "fixed" css position or not.
//     function sticky_navigation() {
//         var scroll_top = document.body.scrollTop; // our current vertical position from the top
//         // if we've scrolled more than the navigation, change its position to fixed to stick to top,
//         if ($(window).scrollTop() > 250 && $(window).width() >= 960) {
//             topBar.addClass('scroll-top-bar');
//             navCell.addClass('scroll-nav-tile');
//         } else {
//             topBar.removeClass('scroll-top-bar');
//             navCell.removeClass('scroll-nav-tile');
//         }
//         if ($(window).scrollTop() > 450) {
//             article.addClass('fadeInUpBig');
            
//         }
//     }
//     // run our function on load
//     sticky_navigation();
//     // and run it again every time you scroll
//     $(window).bind('scroll', function () {
//         sticky_navigation();
//     });
// }
