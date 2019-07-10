function open_work(){
var html_string;

	html_string = "<h2>Work</h2>";
	html_string += "<span class='abi_sub'>Projects</span>";
    html_string += "<br><br>";
    //--------------------------------------------------------------------------------------------------------//
    html_string += "<div class='web_container'><img id='visitpage' src='icons/openNewWinwt.png'/><div class='img_container'><figure class='images'><img src='images/web.jpg' alt='img22'/><figcaption><h3>Onepage<span>Web</span></h3><div><p>Javascript</p><p>Jquery</p><p>CSS Animations</p></div><a href='#'>View more</a></figcaption></figure></div>";
    html_string += "<div class='web_description'><strong>Description:</strong><hr><p>this is one page Web - fully design and developed  by me<br>all different navigaton links are writeen in seperate  javascript file & utilised jQueryand CSS3 for the animations<br>i have not use any external framework for developement <br>it is total Responsive Web for all devices and browsers<br>might not work in very old browsers* </p></div></div>";
    //------------------------------------------------------------------------------------------------------//
    html_string +="<div class='web_container'><img id='visitpage' src='icons/openNewWinwt.png'/><div class='img_container'><figure class='images'><img src='images/web2.jpg' alt='img22'/><figcaption><h3>simple<span>Web</span></h3><div><p>javascript / jquery</p><p>php / xml</p><p>sql</p></div><a onclick=window.open('http://nort.ee/oppurid/sunil/exercise1/page1.html')></a></figcaption></figure></div>";
    html_string +="<div class='web_description'><strong>Description:</strong><hr><p>this is Demo-Web i developed for the course project work <br>i have use javascript / jQuery , php & MySQL and xml<br>it has a demo forms that inserts, delete and update and saves in to database through php<br>as well as javaScript form validation functionality<br>all links are written in to seperate html file<br> there is no  use of any framework for developement<br>responsive on all devices in desktop view.</p></div></div>";
    //----------------------------------------------------------------------------------------------------------//
    html_string +="<div class='web_container'><img id='visitpage' src='icons/openNewWinwt.png'/><div class='img_container'><figure class='images'><img src='images/web3.jpg' alt='img22'/><figcaption><h3>Cool<span>Menu</span></h3><div><p>Javascript</p><p>jquery</p></div><a href='#'>View more</a></figcaption></figure></div>";
    html_string +="<div class='web_description'><strong>Description:</strong><hr><p> demo-javascript based menu.</p></div></div>";
    //---------------------------------------------------------------------------------------------------------//
    html_string +="<div class='web_container'><img id='visitpage' src='icons/openNewWinwt.png'/><div class='img_container'><figure class='images'><img src='images/web4.jpg' alt='img22'/><figcaption><h3>demo <span>page</span></h3><div><p>Bootstrap</p><p>Jquery</p><p>CSS animations</p></div><a href='#'>View more</a></figcaption></figure></div>";
    html_string +="<div class='web_description'><strong>Description:</strong><hr><p>demo-web with Bootstrap<br>under-developing*</p></div></div>";
    //--------------------------------------------------------------------------------------------------------//
    html_string +="<div class='web_container'><img id='visitpage' src='icons/openNewWinwt.png'/><div class='img_container'><figure class='images'><img src='images/web5.jpg' alt='img22'/><figcaption><h3>demo <span>page</span></h3><div><p>Advanced javascript</p><p>Jquery</p><p>Bootstrap</p></div><a href='#'>View more</a></figcaption>			</figure></div>";
    html_string +="<div class='web_description'><strong>Description:</strong><hr><p>Demo-web with bootstrap framworks.<br>all menu buttons linked to different pages with javascript, pages written in javascript.<br>client details example created with pure javascript.clicking every client name opens up details and picture of client. without refreshing page.</p></div></div>";
    //--------------------------------------------------------------------------------------------------------------//
    html_string +="<div class='web_container'><img id='visitpage' src='icons/openNewWinwt.png'/><div class='img_container'><figure class='images'><img src='images/web6.jpg' alt='img22'/><figcaption><h3>first<span>Work</span></h3><div><p>CSS</p><p>365 Grid Framework</p></div><a href='#'>View more</a></figcaption></figure> </div>";
    html_string +="<div class='web_description'><strong>Description:</strong><hr><p>this is very first demo website i developed with CSS and 365 grid framework.</p></div></div>";
    //--------------------------------------------------------------------------------------------------------------//
    html_string +="<div class='web_container'><img id='visitpage' src='icons/openNewWinwt.png'/><div class='img_container'><figure class='images'><img src='images/web7.jpg' alt='img22'/><figcaption><h3>Circled<span>menu</span></h3><div><p>jquery</p><p>CSS animations</p></div><a href='#'>View more</a></figcaption>	</figure> </div>";
    html_string +="<div class='web_description'><strong>Description:</strong><hr><p>one of my hobby work, circled icon menu,developed with jquery and css animations</p></div></div>";
    //---------------------------------------------------------------------------------------------------------------//
    html_string +="<div class='pastWorkContainer'><div class='pastWork'>Past Work History</div>";
    //---------//
    html_string += "<div class='working'><div class='pastWorkTitle'><strong>Swing Manager</strong><br><p>Mcdonalds Australia <br>(GoldCoast & Perth City)<br>feb 2011- nov 2014</p></div><div class='pastWorkDesc'><strong>Duties:</strong><br><p>Shift Manager<br>Human Resource Manager<br> Food Cost Manager</p></div></div>";
    //---------------------------------------------------------------------------------------------------------------//
    html_string += "<div class='working'><div class='pastWorkTitle'><strong>crew:</strong> <br><strong>crew Trainer(2009-onwards):</strong><p>Mcdonalds Australia<br>(GoldCoast -QLD) <br>dec 2008- jan 2011<br><br>*worked part-time during masters</p></div><div class='pastWorkDesc'><strong>Duties:</strong><br><p>Crew Jobs<br>as crew trainer - provide training for  new employees.make training step by step training plans for developement of new  emloyees.</p></div></div>";
    //---------------------------------------------------------------------------------------------------------------//
    html_string += "<div class='working'><p class='workingP'><strong>Work Accomplishments</strong><hr></p><ul><li>Awarded Employee of the month, Two times in 2009.(worked as crew trainer in Mcdonalds).</li><li>Awarded Employee of the year in 2009.(worked as Crew trainer in Mcdonalds).</li><li>Awarded Employee of the first quarter in 2010.(worked as Manager in Mcdonads).</li><li>Achieved numerous prizes for controlling labour and waste over shift.(worked as Manager in            Mcdonalds).</li></ul></div>";
    
	$('.work_Container').html(html_string);
}