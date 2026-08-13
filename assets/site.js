(function(){
/* favicon */
var fav=document.createElement('link');fav.rel='icon';fav.href='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#C8102E"/><text x="16" y="23" font-size="19" font-family="Arial,sans-serif" font-weight="800" fill="#fff" text-anchor="middle">S</text></svg>');document.head.appendChild(fav);
/* Google tag (gtag.js) */
var gs=document.createElement('script');gs.async=true;gs.src='https://www.googletagmanager.com/gtag/js?id=AW-17482577142';document.head.appendChild(gs);
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','AW-17482577142');
/* header */
var header=''+
'<div class="topbar"><div class="wrap"><div>Call: <a href="tel:+35314734915">+353 1 4734915</a> &nbsp;\u00B7&nbsp; <a href="mailto:info@seda.ie">info@seda.ie</a></div>'+
'<div class="socials"><a href="https://www.facebook.com/SEDACollege" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/seda_college" target="_blank" rel="noopener">Instagram</a><a href="https://x.com/sedacollege" target="_blank" rel="noopener">X</a><a href="https://www.linkedin.com/school/seda-college/" target="_blank" rel="noopener">LinkedIn</a><a href="https://www.youtube.com/user/sedacollege" target="_blank" rel="noopener">YouTube</a></div></div></div>'+
'<header class="site-head"><div class="wrap">'+
'<a class="brand" href="./index.html"><span class="mark"></span>SEDA <em>College</em></a>'+
'<input type="checkbox" id="nav-toggle" aria-hidden="true">'+
'<nav class="mainnav" aria-label="Main"><ul>'+
'<li><a data-page="home" href="./index.html">Home</a></li>'+
'<li><a data-page="about" href="./about-us.html">About Us</a></li>'+
'<li class="has-sub"><a data-page="courses" href="./general-english.html">Courses</a><ul class="sub">'+
'<li><a data-page="general-english" href="./general-english.html">General English</a></li>'+
'<li><a data-page="certtesol" href="./certtesol.html">CertTESOL</a></li></ul></li>'+
'<li class="has-sub"><a data-page="admissions" href="./how-to-apply.html">Admissions</a><ul class="sub">'+
'<li><a data-page="how-to-apply" href="./how-to-apply.html">How To Apply</a></li>'+
'<li><a data-page="entry-requirements" href="./entry-requirements.html">Entry Requirements</a></li>'+
'<li><a data-page="visa" href="./visa-and-legal-requirements.html">Visa &amp; Legal Requirements</a></li>'+
'<li><a data-page="terms" href="./terms-conditions.html">Terms &amp; Conditions</a></li>'+
'<li><a data-page="refund" href="./refund-policy.html">Refund Policy</a></li></ul></li>'+
'<li class="has-sub"><a data-page="services" href="./first-day-induction.html">Services</a><ul class="sub">'+
'<li><a data-page="induction" href="./first-day-induction.html">First Day Induction</a></li>'+
'<li><a data-page="accommodation" href="./accommodation.html">Accommodation</a></li>'+
'<li><a data-page="health" href="./health-insurance.html">Health Insurance</a></li>'+
'<li><a data-page="myseda" href="./myseda.html">MySEDA</a></li>'+
'<li><a data-page="social" href="./social-activities.html">Social Activities</a></li></ul></li>'+
'<li class="has-sub"><a data-page="exams" href="./trinity-ise.html">Exams</a><ul class="sub">'+
'<li><a data-page="trinity" href="./trinity-ise.html">Trinity ISE</a></li>'+
'<li><a data-page="ielts" href="./ielts.html">IELTS</a></li>'+
'<li><a data-page="tie" href="./tie.html">TIE</a></li></ul></li>'+
'<li><a data-page="internship" href="./internship.html">Internship</a></li>'+
'<li><a data-page="contact" href="./contact-us.html">Contact Us</a></li>'+
'</ul></nav>'+
'<label class="burger" for="nav-toggle" aria-label="Menu">\u2630</label>'+
'</div></header>';
var h=document.getElementById('site-header');if(h){h.outerHTML=header;}
/* footer */
var year=new Date().getFullYear();
var footer=''+
'<footer class="site-foot"><div class="wrap"><div class="cols">'+
'<div><div class="brandline">SEDA <em>College</em></div><p>Delivering English language courses in the centre of Dublin since 2009, alongside our Cork campus. A truly international and multicultural learning environment.</p></div>'+
'<div><h4>Featured</h4><ul><li><a href="./index.html">SEDA College</a></li><li><a href="./first-day-induction.html">First Day Induction</a></li><li><a href="./general-english.html">General English</a></li><li><a href="./social-activities.html">Social Activities</a></li><li><a href="./contact-us.html">Contact Us</a></li></ul></div>'+
'<div><h4>Useful Info</h4><ul><li><a href="./privacy-policy.html">Privacy Policy</a></li><li><a href="./health-insurance.html">Health Insurance</a></li><li><a href="./how-to-apply.html">How to apply</a></li><li><a href="./internship.html">Internship</a></li><li><a href="./refund-policy.html">Refund Policy</a></li></ul></div>'+
'<div><h4>Contact</h4><ul><li>Dublin: (01) 473 4915</li><li>Cork: (021) 241 0944</li><li><a href="mailto:info@seda.ie">info@seda.ie</a></li><li>68-72, Capel St, Dublin 1, D01 AR29</li><li>Clarkes Bridge House, Hanover St, Cork</li></ul></div>'+
'</div><div class="base"><div>\u00A9 '+year+' SEDA College. All Rights Reserved.</div>'+
'<div>Trinity VCP \u00B7 Trinity College London Exam Centre \u00B7 Erasmus \u00B7 EAQUALS \u00B7 TIE \u00B7 ACELS \u00B7 ELT Ireland</div></div></div></footer>';
var f=document.getElementById('site-footer');if(f){f.outerHTML=footer;}
/* active link */
var page=document.body.getAttribute('data-page');
if(page){var link=document.querySelector('nav.mainnav a[data-page="'+page+'"]');if(link){link.classList.add('active');}}
})();