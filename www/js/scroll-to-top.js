const inner = $('.inner');
const scrollToTop = $('.scroll-top');
const scrollToAbout = $('.scroll-about'); 
const innerHeight = inner.outerHeight();

// Show scroll button on inner for scrolling to About
function onLoad(){
     scrollToAbout.css({
         'top': (innerHeight - 35)
     });
}

// Scroll to top by click on scroll-top button
function onScrollTopBtn(e) {
    let pos = $(window).scrollTop(); 
    if (pos > windowHeight) { 
        scrollToTop.css({
            'display': 'block',
            'top': (windowHeight - 45)
        });
    }
    if (pos < innerHeight) {
        scrollToTop.css({
            'display': 'none'
        });
    }
} 

$(document).ready(onLoad); //set initial position for scrollToAbout button
$(window).on('scroll', onScrollTopBtn); //event on scroll-top button