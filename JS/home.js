//smooth scrolling
$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
        	          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });


/** scroll events **/

var portfolioPos = 0;
var aboutPos = 0;


jf_scroll={ 
	posDetector: function(){
		portfolioPos = $("#portfolio").offset().top;
		aboutPos = $("#about").offset().top;
		//console.log($("#portfolio").offset());
	}
};


$(window).scroll(function() {
	//Collapse the navbar on scroll. When user scrolls down the page and hits 150 on the offset the navbar collapses, by adding a CSS class
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    
    /* Hide Titles */
    if ($(window).width() > 400) {
		$(".intro h1").toggleClass("fade",$(this).scrollTop() > 90);
		$(".intro p").toggleClass("fade", $(this).scrollTop() > 200);
		$(".portfolio_intro h1").toggleClass("fade",$(this).scrollTop() > 90);
		$(".portfolio_intro h2").toggleClass("fade", $(this).scrollTop() > 200);
	}
	
	$("#nav_portfolio").removeClass("active");
	$("#nav_about").removeClass("active");
	
	if ($(this).scrollTop() >= aboutPos) {
		$("#nav_about").addClass("active");
	} else if($(this).scrollTop() >= ($(document).height() - $(window).height() - 150)) {
		$("#nav_about").addClass("active");		
	} else if($(this).scrollTop() >= portfolioPos) {
		$("#nav_portfolio").addClass("active");		
	} 
});

$(window).resize(function(){
	jf_scroll.posDetector();
});

