window.addEventListener('load',function(){
var mybutton=document.getElementById("scTop");window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>150||document.documentElement.scrollTop>150){mybutton.style.display="block"}else{mybutton.style.display="none"}}function topFunction(){document.body.scrollTop=0;document.documentElement.scrollTop=0};
function myMenu(){var a=document.getElementById("PageList1");a.classList.toggle("shwx")};
function fungsiSearch(){var a=document.getElementById("Query-input");a.classList.toggle("mystyle")};
function darkMode(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("#modeSwitch").classList.add("dark-mode"):document.querySelector("#modeSwitch").classList.remove("dark-mode")};
function copyFunction(){document.getElementById("getlink").select(),document.execCommand("copy"),document.getElementById("share-notif").innerHTML="<span>Link copied!</span>" };
  var link1 = document.createElement('link');
  link1.href = '/feeds/posts/default/-/Project?orderby=published&amp;alt=json-in-script&amp;max-results=150&amp;callback=update.compile';
  link1.rel = 'prefetch';
  var link2 = document.createElement('link');
  link2.href = '/feeds/posts/default/-/Series?orderby=published&amp;amp;alt=json-in-script&amp;callback=postarea4&amp;max-results=5';
  link2.rel = 'prefetch';
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(link1);
  head.appendChild(link2);
});
