
function getTwitter(){
return "<div class='twitter'><a href='https://twitter.com/share' class='twitter-share-button'{count}>Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script></div>";
}
function open_contact(){
    var html_string;
    html_string = "<h2>Contact</h2>";
    html_string += "<div class='contact_details'>";
    html_string += '<div class="icon_container"><img src="icons/facebook.png"/><span class="icon_info" onclick="window.open("https://www.facebook.com/sunilrana7");">https://www.facebook.com/sunilrana7</span></div>';
    html_string += '<div class="icon_container"><img src="icons/linkedin.png"/><span class="icon_info" onclick="window.open("https://ee.linkedin.com/in/sunil351");">https://ee.linkedin.com/in/sunil351</span></div>';
    html_string += '<div class="icon_container"><img src="icons/twitter.png"/><span class="icon_info" onclick="window.open("https://twitter.com/Sunil351351");">https://twitter.com/Sunil351351</span></div>';
    html_string += '<div class="icon_container"><img src="icons/github.png"/><span class="icon_info" onclick="window.open("https://github.com/sunil351");">https://github.com/sunil351</span></div>';
    html_string += '<div class="icon_container"><img src="icons/email.png"/><span class="icon_info"><a href="mailto:sunny.16986@yahoo.com">sunny.16986@yahoo.com</a></span></div>';
    html_string += '<div class="icon_container"><img src="icons/skype.png"/><span class="icon_info">sunil351</span></div>  </div>';
    html_string += getTwitter();
    $(".contact_container").html(html_string);
}