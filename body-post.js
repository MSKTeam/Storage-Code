window.addEventListener("load",function(){
!function(){var t=document,e=t.createElement("script");e.src="https://cdn.jsdelivr.net/gh/tntg123/MSKComic2023@main/comment-MSKComic.js",(t.head||t.body).appendChild(e)}();
$(document).ready(function(){$.ajax({url:"/feeds/posts/summary/-/"+labelName+"?start-index=1&max-results=1&alt=json",dataType:"json",success:function(r){for(var e=r.feed.entry,t=[],a=0;a<e.length;a++){var n=e[a];n.title.$t;for(var l="",s=0;s<n.link.length;s++)if("alternate"==n.link[s].rel){l=n.link[s].href;break}t.push(l)}$("a.Chapter").attr("href",t[0])},error:function(){console.log("Error loading feed")}})});
document.querySelector('.loading-postchapter').style.display = 'none';document.querySelector('.content-postchapter').style.display = 'block';
!function() {function f() {var a=document.getElementById("block-adblock");a.innerHTML='<p class="note noteAlert blocked"><strong>❌ Phát hiện Adblock !</strong><br><br>Xin lỗi vì đã làm hỏng trải nghiệm của bạn.<br>Vui lòng xem xét hỗ trợ chúng tôi bằng cách vô hiệu hóa Trình chặn quảng cáo của bạn, Nó giúp chúng tôi duy trì nhóm dịch và trang website này.<br>Để xem nội dung, hãy tắt trình chặn quảng cáo và làm mới trang.<br><br>Cảm ơn bạn !!!</p>';} var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";b.onerror=function() {f();window.adblock=!0};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}(); });
