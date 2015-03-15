//***********************************************
//* Autor: Vassil Dimitrov                      *
//* Date: 24.02.2015                            *
//* Last changes at:                 *
//***********************************************

$(document).ready(function () {
    //Sticky Navigation
    stickyNavigation();
    menuTog();
    // anim();
    // scrollings();
    // homePassword(); 
    $(window).click(function(){
           stickyNavigation();

    });
    $(window).bind('scroll', stickyNavigation());
    $(window).on('resize', stickyNavigation());
});

function stickyNavigation() {
    var topBar = $('.nav-wrapper');
    var navCell = $('.nav-tile');
    var article = $('.aside-first-container');

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    function sticky_navigation() {
        var scroll_top = document.body.scrollTop; // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        if ($(window).scrollTop() > 250 && $(window).width() >= 960) {
            topBar.addClass('scroll-top-bar');
            navCell.addClass('scroll-nav-tile');
        } else {
            topBar.removeClass('scroll-top-bar');
            navCell.removeClass('scroll-nav-tile');
        }
        if ($(window).scrollTop() > 450) {
            article.addClass('fadeInUpBig');
            
        }
    }
    // run our function on load
    sticky_navigation();
    // and run it again every time you scroll
    $(window).bind('scroll', function () {
        sticky_navigation();
    });
}
/**** add at 26.02.2015  ****/
 function homePassword () {
    var cover = $('.cover-screen');
    var pass = $('.center-info-input').val();

    $('.center-info-input').on('blur', function(){
         var pass_2 = $('.center-info-input').val();
         var errMessage = $('.message');
             if(pass_2 == "1"){
                 cover.css({'display':'none'});
                 $('body').css({'overflow':'auto'});
             }else {
                 $(errMessage).css({'display':'block'});
             }
     });

     if(cover) {
         $('body').css({'overflow':'hidden'});
     }else {
         $('body').css({'overflow':'auto'});
     }
 }

function menuTog() {
    var menuTrig = $('.hidden-hamburger');
    var triggedIt =$('.nav-container');

    menuTrig.on('click', function(){
        triggedIt.toggle();
        // if(triggedIt.length){
        //     $('body').css({'overflow':'hidden'});
        // }else{
        //     $('body').css({'overflow':'auto'})
        //     }
    });
}

function scrollings () {
    $("a").click(function() {
        alert('click');
    $('html, body').animate({
        scrollTop: $("#bottom").offset().top
    }, 100);
});
}