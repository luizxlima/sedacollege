(function(){
/* favicon */
var fav=document.createElement('link');fav.rel='icon';fav.href='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F97316"/><stop offset="1" stop-color="#FBBF24"/></linearGradient></defs><rect width="32" height="32" rx="7" fill="#160F28"/><text x="16" y="23" font-size="19" font-family="Arial,sans-serif" font-weight="800" fill="url(#g)" text-anchor="middle">S</text></svg>');document.head.appendChild(fav);
/* Google tag (gtag.js) */
var gs=document.createElement('script');gs.async=true;gs.src='https://www.googletagmanager.com/gtag/js?id=AW-17482577142';document.head.appendChild(gs);
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','AW-17482577142');
/* header */
var header=''+
'<div class="topbar"><div class="wrap"><div>Call: <a href="tel:+35314734915">+353 1 473 4915</a> &nbsp;\u00B7&nbsp; <a href="mailto:info@seda.ie">info@seda.ie</a></div>'+
'<div class="socials"><a href="https://www.facebook.com/SEDACollege" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/seda_college" target="_blank" rel="noopener">Instagram</a><a href="https://www.youtube.com/user/sedacollege" target="_blank" rel="noopener">YouTube</a><a href="https://www.linkedin.com/school/seda-college/" target="_blank" rel="noopener">LinkedIn</a></div></div></div>'+
'<header class="site-head"><div class="wrap">'+
'<a class="brand" href="./index.html"><span class="mark"></span>SEDA <em>College</em></a>'+
'<input type="checkbox" id="nav-toggle" aria-hidden="true">'+
'<nav class="mainnav" aria-label="Main"><ul>'+
'<li class="has-sub"><a data-page="courses" href="./general-english.html">Programs</a><ul class="sub">'+
'<li><a data-page="general-english" href="./general-english.html">General English</a></li>'+
'<li><a data-page="certtesol" href="./certtesol.html">CertTESOL</a></li>'+
'<li><a data-page="trinity" href="./trinity-ise.html">Trinity ISE</a></li>'+
'<li><a data-page="ielts" href="./ielts.html">IELTS</a></li>'+
'<li><a data-page="tie" href="./tie.html">TIE</a></li>'+
'<li><a data-page="internship" href="./internship.html">Internship</a></li></ul></li>'+
'<li class="has-sub"><a data-page="admissions" href="./how-to-apply.html">Admissions</a><ul class="sub">'+
'<li><a data-page="how-to-apply" href="./how-to-apply.html">How To Apply</a></li>'+
'<li><a data-page="entry-requirements" href="./entry-requirements.html">Entry Requirements</a></li>'+
'<li><a data-page="visa" href="./visa-and-legal-requirements.html">Visa &amp; Legal Requirements</a></li>'+
'<li><a data-page="terms" href="./terms-conditions.html">Terms &amp; Conditions</a></li>'+
'<li><a data-page="refund" href="./refund-policy.html">Refund Policy</a></li></ul></li>'+
'<li class="has-sub"><a data-page="services" href="./social-activities.html">Student Life</a><ul class="sub">'+
'<li><a data-page="induction" href="./first-day-induction.html">First Day Induction</a></li>'+
'<li><a data-page="accommodation" href="./accommodation.html">Accommodation</a></li>'+
'<li><a data-page="health" href="./health-insurance.html">Health Insurance</a></li>'+
'<li><a data-page="myseda" href="./myseda.html">MySEDA</a></li>'+
'<li><a data-page="social" href="./social-activities.html">Social Activities</a></li></ul></li>'+
'<li><a data-page="about" href="./about-us.html">About</a></li>'+
'<li><a data-page="contact" href="./contact-us.html">Contact</a></li>'+
'<li><a class="nav-cta" href="mailto:info@seda.ie?subject=Quote%20Request">Get Quote</a></li>'+
'</ul></nav>'+
'<label class="burger" for="nav-toggle" aria-label="Menu">\u2630</label>'+
'</div></header>';
var h=document.getElementById('site-header');if(h){h.outerHTML=header;}
/* footer */
var year=new Date().getFullYear();
var footer=''+
'<footer class="site-foot"><div class="wrap"><div class="cols">'+
'<div><div class="brandline">SEDA <em>College</em></div><div class="tagline">Live Your Dream</div>'+
'<p><strong style="color:#F3EFFA">SEDA College</strong>, delivering exceptional education, cultural activities, and accommodation partnerships across Dublin, Cork, Limerick, and Galway since 2008.</p>'+
'<ul style="margin-top:14px"><li>\uD83D\uDCDE +353 1 473 4915</li><li>\u2709\uFE0F <a href="mailto:info@seda.ie">info@seda.ie</a></li><li>\uD83D\uDCCD Dublin \u00B7 Cork \u00B7 Limerick \u00B7 Galway</li></ul></div>'+
'<div><h4>Programs</h4><ul><li><a href="./general-english.html">General English</a></li><li><a href="./certtesol.html">Teacher Training</a></li><li><a href="./trinity-ise.html">Trinity ISE</a></li><li><a href="./ielts.html">IELTS</a></li><li><a href="./tie.html">TIE</a></li><li><a href="./internship.html">Internship</a></li></ul></div>'+
'<div><h4>Student Life</h4><ul><li><a href="./first-day-induction.html">First Day Induction</a></li><li><a href="./accommodation.html">Accommodation</a></li><li><a href="./health-insurance.html">Health Insurance</a></li><li><a href="./myseda.html">MySEDA</a></li><li><a href="./social-activities.html">Social Activities</a></li></ul></div>'+
'<div><h4>Company</h4><ul><li><a href="./about-us.html">About SEDA</a></li><li><a href="./contact-us.html">Contact Us</a></li><li><a href="./how-to-apply.html">How To Apply</a></li><li><a href="./privacy-policy.html">Privacy Policy</a></li><li><a href="./terms-conditions.html">Terms &amp; Conditions</a></li><li><a href="./refund-policy.html">Refund Policy</a></li></ul></div>'+
'</div><div class="base"><div>\u00A9 '+year+' SEDA College. All rights reserved.</div>'+
'<div><a href="./privacy-policy.html">Privacy Policy</a> \u00B7 <a href="./terms-conditions.html">Terms &amp; Conditions</a></div></div></div></footer>';
var f=document.getElementById('site-footer');if(f){f.outerHTML=footer;}
/* active link */
var page=document.body.getAttribute('data-page');
if(page){var link=document.querySelector('nav.mainnav a[data-page="'+page+'"]');if(link){link.classList.add('active');}}
})();