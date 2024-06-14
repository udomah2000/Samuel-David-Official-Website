(function ($) {
	
	"use strict";

	$(function() {
        $("#tabs").tabs();
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	$('.schedule-filter li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) + 1
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 993) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);
// 767




let fullTxt = document.getElementById("fullText");
let full_Txt = document.getElementById("full-Text");
function openText(pic) {
  full_Txt.style.display = "flex"
  fullTxt.innerHTML = pic
} 
function closeText() {
	full_Txt.style.display = "none"
	location.assign('../../index.html#content1')
} 

// item 2
let fullTxt2 = document.getElementById("fullText2");
let full_Txt2 = document.getElementById("full-Text2");
function openText2(pic2) {
  full_Txt2.style.display = "flex"
  fullTxt2.innerHTML = pic2
} 
function closeText2() {
	full_Txt2.style.display = "none"
	location.assign('../../index.html#content2')
} 

// item 3
let fullTxt3 = document.getElementById("fullText3");
let full_Txt3 = document.getElementById("full-Text3");
function openText3(pic3) {
  full_Txt3.style.display = "flex"
  fullTxt3.innerHTML = pic3
} 
function closeText3() {
	full_Txt3.style.display = "none"
	location.assign('../../index.html#content3')
} 

// item 4
let fullTxt4 = document.getElementById("fullText4");
let full_Txt4 = document.getElementById("full-Text4");
function openText4(pic4) {
  full_Txt4.style.display = "flex"
  fullTxt4.innerHTML = pic4
} 
function closeText4() {
	full_Txt4.style.display = "none"
	location.assign('../../index.html#content4')
} 


// item 5
let fullTxt5 = document.getElementById("fullText5");
let full_Txt5 = document.getElementById("full-Text5");
function openText5(pic5) {
  full_Txt5.style.display = "flex"
  fullTxt5.innerHTML = pic5
} 
function closeText5() {
	full_Txt5.style.display = "none"
	location.assign('../../index.html#content5')
} 






// footer date
document.getElementById('date').innerHTML = new Date().getFullYear()