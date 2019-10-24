'use strict';



window.addEventListener('scroll', navToggel);
const navigationBar = document.querySelector('.main-header');
function navToggel(){
    if(window.scrollY > 170){
        navigationBar.classList.add('stickyNavbar');
    }else{
        navigationBar.classList.remove('stickyNavbar');
    }
}    
var project_carousel = $('#our-project');
project_carousel.owlCarousel({
	loop:true,
        nav:true,
        autoplay:true,
        dots:false,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            700: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

let client_carousel = $('#our-client-slide');
client_carousel.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        481:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})