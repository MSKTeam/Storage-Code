window.addEventListener("load",function(){
var limitBookmark=100,bookmark=function(){function t(t,o,a,i,e,s){this.id=t,this.name=o,this.status=a,this.type=i,this.link=e,this.img=s}function o(){localStorage.setItem("bookmark",JSON.stringify(list))}return list=[],null!=localStorage.getItem("bookmark")&&(list=JSON.parse(localStorage.getItem("bookmark"))),(obj={}).addItemTobookmark=function(a,i,e,s,m,r){var k=new t(a,i,e,s,m,r),h=list;null!=h?(same=h.find(t=>t.id==a),list.length<limitBookmark&&!same&&(list.push(k),o())):(list.push(k),o())},obj.removeThisItem=function(t){for(var a in list)if(list[a].id===t){list.splice(a,1);break}o()},obj}();$(".bookmark").each(function(t){let o=JSON.parse(localStorage.getItem("bookmark"));for(var a in o)o[a].id==$(this).data("id")&&($(this).html("Đ\xe3 theo d\xf5i"),$(this).addClass("bookmarked"));$(this).click(function(){let t=JSON.parse(localStorage.getItem("bookmark")),o=$(this).data("id"),a=$("article.oh.a2 header h1.mb-6").text().replace("\n",""),i=location.protocol+"//"+location.hostname+location.pathname,e=$("div.grid div.a1 figure img").attr("src"),s=$("aside.s1 div.y6x11p:nth-child(1) span.dt a").text().replace("\n",""),m=$("aside.s1 div.y6x11p:nth-child(2) span.dt a").text().replace("\n","");null==t?$(this).hasClass("bookmarked")?(bookmark.removeThisItem(o),$(this).html("Theo d\xf5i"),$(this).removeClass("bookmarked")):(bookmark.addItemTobookmark(o,a,s,m,i,e),$(this).addClass("bookmarked"),$(this).html("Đ\xe3 theo d\xf5i")):$(this).hasClass("bookmarked")?(bookmark.removeThisItem(o),$(this).html("Theo d\xf5i"),$(this).removeClass("bookmarked")):t.length<limitBookmark&&(bookmark.addItemTobookmark(o,a,s,m,i,e),$(this).addClass("bookmarked"),$(this).html("Đ\xe3 theo d\xf5i"))})});
$(function(){jQuery.getScript("//cdn.firebase.com/v0/firebase.js").done(function(){$.each($(".post-views"),function(e,t){var a=$(t).find("#postviews"),n=$('link[rel="canonical"]').attr("href"),i=$(t).attr("data-id"),o=new Firebase("https://mskmanga-default-rtdb.firebaseio.com/Pages/"+i);o.once("value",function(e){var t,l=e.val(),c=!1;null==l&&((l={}).value=0,l.url=n,l.id=i,c=!0),a.text((t=l.value,t>=1e9?(t/1e9).toFixed(1)+" Tỷ":t>=1e6?(t/1e6).toFixed(1)+"Tr":t>=1e3?(t/1e3).toFixed(1)+"K":t)),l.value++,"/"!=window.location.pathname&&n==l.url&&(c?o.set(l):o.child("value").set(l.value))})})})})
function timeAgo(o){var t=(new Date).getTime()-o.getTime(),e=Math.floor(t/1e3),r=Math.floor(e/60),a=Math.floor(r/60),g=Math.floor(a/24),h=Math.floor(g/30),n=Math.floor(h/12);return 0===t?"Vừa đăng lên":e<60?e+" giây trước":r<60?r+" phút trước":a<24?a+" giờ trước":g<30?g+" ngày trước":h<12?h+" tháng trước":n+" năm trước"}(function timeAgo(selector){var templates={prefix:"",suffix:"",seconds:"1 giây trước",seconds:"%d giây trước",minute:"1 phút trước",minutes:"%d phút trước",hour:"1 giờ trước",hours:"%d giờ trước",day:"1 ngày trước",days:"%d ngày trước",month:"1 tháng trước",months:"%d tháng trước",year:"1 năm trước",years:"%d năm trước"};var template=function(t,n){return templates[t]&&templates[t].replace(/%d/i,Math.abs(Math.round(n)));};var timer=function(time){if(!time)return;time=time.replace(/\.\d+/,"");time=time.replace(/-/,"/").replace(/-/,"/");time=time.replace(/T/," ").replace(/Z/," UTC");time=time.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");time=new Date(time*1000||time);var now=new Date();var seconds=((now.getTime()-time)*.001)>>0;var minutes=seconds/60;var hours=minutes/60;var days=hours/24;var years=days/365;return templates.prefix+(seconds<45&&template('seconds',seconds)||seconds<90&&template('minute',1)||minutes<45&&template('minutes',minutes)||minutes<90&&template('hour',1)||hours<24&&template('hours',hours)||hours<42&&template('day',1)||days<30&&template('days',days)||days<45&&template('month',1)||days<365&&template('months',days/30)||years<1.5&&template('year',1)||template('years',years))+templates.suffix;};var elements=document.getElementsByClassName('timeago');for(var i in elements){var $this=elements[i];if(typeof $this==='object'){$this.innerHTML=timer($this.getAttribute('title')||$this.getAttribute('datetime'));}}setTimeout(timeAgo,60000);})();
})