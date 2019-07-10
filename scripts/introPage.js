
function open_introPage(){
var html_string;

	html_string = '<div class="page_bar">';
	html_string += '<div class="logo">sunil<span>rana</span></div>';
    html_string += '<div class="links">';
    html_string += '<ul>';
    html_string += '<li id="about-btn">introduction<div class="aboutMe"><div class="inaboutMe"><h2>Hi, there!</h2><h4>Thank you for taking the time to visit my website</h4><p>I develop attractive and interactive user experiences for the web sites. I love spending time on fixing little details and optimizing web apps</p><p>I’m an easy to work with, friendly person.</p><p>This site showcases some of my web development work, including a variety of user interface.</p><p>this site is created on my own custom made framework with javascript/jquery and css animations.</p></div></div> </li>';
    html_string += '<li onclick="downloadMe();"><a id="downloadable" download>Download my Resume</a></li>';
    html_string += '</ul></div></div>';
    html_string += '<div class="quickcontacs">';
    html_string += '<ul>';
    html_string += '<li onclick="window.open("https://www.facebook.com/sunilrana7");"><img src="smallIcons/facebook.png"/></li><li onclick="window.open("https://github.com/sunil351");"><img src="smallIcons/github.png"</li><li onclick="window.open("https://ee.linkedin.com/in/sunil351");"><img src="smallIcons/linkedin.png"</li><li onclick="window.open("https://twitter.com/Sunil351351");"><img src="smallIcons/twitter.png"</li>';
    html_string += '</ul></div>';
    html_string += '<div class ="sign_holder"><div class ="signUnder"><strong>Hello!</strong></div><div class = "sign">Im Sunil, a Passionate <br>Web Developer</div><div class = "signUnder">View Portfolio</div><div class = "downPointingArrow_holder"><img src="icons/arrow2.png" /></div></div>';

	$('.intro-page').html(html_string);
}
 $('#about-btn').click(function(){
        $('.aboutMe').stop().animate({height: '620px'},700);
    });
    $('#about-btn').mouseleave(function(){
         $('.aboutMe').animate({height: '0px'},700).delay(1000);
    });