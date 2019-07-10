function open_education(){
var html_string;

	html_string = '<h2>education</h2>';
	html_string += "<div class='u_container'>";
    html_string += "<div class= 'u_name'><strong>N.O.R.T. <span>&Otilde;</span>ppekeskus <br> ( IT School )</strong><br>(Tartu / Estonia)<br>September - October 2015</div>";
    html_string += "<div class='u_desc'><strong>Web Application Developement</strong><br>Advanced javascript, jQuery & php<br>(modules, javascript patterns, using jQuery for working with DOM other javascript libraries)<br>SQL,CRUD operations based on MySQL, criterea expressions,MySQL tools <br>Objects and classed in javascript and php <br> project work for application that stores and reads data (TODO application)</div>";
    html_string +="</div>";
    html_string +="<div class='u_container'>";
    html_string +="<div class= 'u_name'><strong>Central Queensland University </strong><br>(Gold coast /Australia) <br>July 2008 - December 2011 </div>";
    html_string +="<div class= 'u_desc'><strong>MIS (Master of Information Systems)</strong><br>degree focused on following subjets<br>System Management.<br>System Development.<br>Database Development and Management.<br>Digital Telecommunications and Networks.<br>Information System Management.<br> Web Applications for Business.<br Web Applications Development <br> Network Security.<br>Security Ethics and Electronic commerce Systems.<br></div>";
    html_string += "</div>";
    html_string += "<div class='u_container'>";
    html_string += "<div class='u_name'><strong>Lakhotia IT Education Center</strong><br>(Vadodara/India)<br>december-january 2008 </div>";
    html_string += "<div class='u_desc'><strong>Web Developement</strong><br>HTML,CSS, & JavaScript for Beginers.Course was focused on to give core knowledge about getting in to web development and teach HTML,CSS and JavaScript for Startes. </div>";
    html_string += "</div>";
    html_string += "<div class='u_container'>";
    html_string += "<div class='u_name'><strong>Dharmsinh Desai University</strong><br>(Nadiad/India) <br> July2004 -April 2007 </div>";
    html_string += "<div class='u_desc'><strong>BBA (Bachelor of Business Administration)</strong><br>Degree focused on follwing Subject:<br>Principles of Management<br>Principles of Economics<br>Principles and Practices of Accountancy<br>Business Mathematics<br>Communication Skills<br>Growth and Structure of Industry<br>Marketing Management<br>Financial Management<br>Advance Human Resource Management<br>Business Statistics<br>Managerial Economics<br>Organisation Behaviour<br>Industrial and commercial Law<br>Taxation</div>";
   html_string += "</div>";
	$('.education_container').html(html_string);
}
