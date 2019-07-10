function TWIT(){
return "<a href='https://twitter.com/Sunil351351' class='twitter-follow-button' data-show-count='false' data-size='large' data-show-screen-name='false' data-dnt='true'>Follow @Sunil351351</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>";
}
function open_profile(){
var html_string;

	html_string = '<h2>profile</h2>';
    html_string += "<div class='p_pic'>";
    html_string += "<img src='images/350.jpg'>";
    html_string += "</div>";
    html_string += "<div class='p_info'>";
    html_string += "<div class='para_p'>";
    html_string += "<span class='title'>About Me:</span>";
    html_string += "<p>I’m 29 years old, from India currently live in Estonia. I'm a creative web developer. And passionate for everything about web-developing, I have earned a master’s degree in information systems from the central Queensland University (Australia) plus  I have done web application development courses from NORT computer center (Estonia). As well as for the past few years I have been  self-learning web development  techniques and  programming languages from  various different  books and from e-learning programmes.</p>";
    html_string += "</div>";
     html_string += "<div class='p_details'>";
    html_string += "<span class ='title'>Details:</span>";
    html_string += "<p><strong>Name:</strong><br>Sunil Rana</p>";
    html_string += "<p><strong>Age:</strong><br>29 years old</p>";
    html_string += "<p><strong>Location:</strong><br>Estonia</p>";
    html_string += "<p>" + TWIT() + "</p>";
    html_string += "</div>";
    html_string += "</div>";
    html_string += "</div>";
	$('.p_container').html(html_string);
}
