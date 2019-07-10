$(document).ready(function(){
$('.downPointingArrow_holder').each(function setAnim(){
$('.downPointingArrow_holder').animate({top: '+=30px'},700).animate({top: '-=30px'},700,setAnim);
}); // arrow animation //
}); 
//-----------------------------------------------------------------------------//
$(function(){
  $("nav ul a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  }); //main scrolling animate effect function //
         $('nav a').on("click", function () {
        $(this).parent().siblings().find("a").removeClass('active');
        $(this).addClass('active');
    });
	$('.downPointingArrow_holder').click(function(){
        var profile = $('#profile');
		$('html, body').scrollTo(profile,700);
		return false;
	}); // down arrow scroller //
    $('#upPointingArrow a').click(function(){
		$('html, body').animate({scrollTop : 0},700);
		return false;
	}); 
    //-------------------------------------------------------------------------//
    $('#about-btn').click(function(){
        $('.aboutMe').stop().animate({height: '620px'},700);
    });
    $('#about-btn').mouseleave(function(){
         $('.aboutMe').animate({height: '0px'},700).delay(1000);
    });
	//------------------------------------------------------------------------//
	  $(window).bind('scroll', function() {
	   var navHeight = $( window ).height();
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		}); // nav scroller //
}); 

     $(document).ready(function(){
        $('span.nav-btn').click(function(){
            $('ul.nav').slideToggle();
            $(this).toggleClass('down');
        });
            });

            $(window).resize(function(){
            if($(window).width() > 768){
        $('ul.nav').removeAttr('style');
    }
});

function downloadMe(){
    var asking = confirm('PLEASE CONFIRM OK! if you wish to download My Resume');
    if(asking===true){
       return document.getElementById('downloadable').setAttribute("href","SunilRanaCV.pdf");
    }
}


//-----------------------------------------------------------------------------------------------------//
// openWin(){
  //  var Win = window.open("folderX/index.html","folderX/index.html","width='200%', height='200%'");
//}
