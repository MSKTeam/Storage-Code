window.addEventListener('load',function(){
let itemsPerPage=35;let currentPage=parseInt(getQueryVariable("page"))||1;let totalPages=Math.ceil($('.PTPost').length/itemsPerPage);function getQueryVariable(variable){let query=window.location.search.substring(1);let vars=query.split("&");for(let i=0;i<vars.length;i++){let pair=vars[i].split("=");if(pair[0]===variable){return pair[1]}}
return!1}
function showPage(page){$('.PTPost').hide();$('.PTPost').slice((page-1)*itemsPerPage,page*itemsPerPage).show();currentPage=page;updateButtons();updatePageNumbers();window.history.pushState({},"","?page="+page)}
function updateButtons(){$('#firstPage').prop("disabled",currentPage===1);$('#prevPage').prop("disabled",currentPage===1);$('#nextPage').prop("disabled",currentPage===totalPages);$('#lastPage').prop("disabled",currentPage===totalPages)}
function updatePageNumbers(){$("#pageNumbers").empty();let startPage=1;let endPage=totalPages;if(totalPages>6){startPage=currentPage-2;endPage=currentPage+2;if(startPage<1){startPage=1;endPage=5}
if(endPage>totalPages){endPage=totalPages;startPage=totalPages-4}}
for(let i=startPage;i<=endPage;i++){let button=$("<button class='buttonPage' title='Trang "+i+"'>"+i+"</button>");if(i===currentPage){button.addClass("currentPage")}
button.click(function(){showPage(i)});$("#pageNumbers").append(button)}
if(startPage>1){$("#pageNumbers").prepend("<button class='hidebutton'>...</button>")}
if(endPage<totalPages){$("#pageNumbers").append("<button class='hidebutton'>...</button>")}}
$('#firstPage').click(function(){showPage(1)});$('#prevPage').click(function(){showPage(currentPage-1)});$('#nextPage').click(function(){showPage(currentPage+1)});$('#lastPage').click(function(){showPage(totalPages)});showPage(currentPage)})
$(function(){jQuery.getScript("//cdn.firebase.com/v0/firebase.js").done(function(){$.each($(".post-views"),function(e,t){var a=$(t).find("#postviews"),n=$('link[rel="canonical"]').attr("href"),i=$(t).attr("data-id"),o=new Firebase("https://mskmanga-default-rtdb.firebaseio.com/Pages/"+i);o.once("value",function(e){var t,l=e.val(),c=!1;null==l&&((l={}).value=0,l.url=n,l.id=i,c=!0),a.text((t=l.value,t>=1e9?(t/1e9).toFixed(1)+" Tỷ":t>=1e6?(t/1e6).toFixed(1)+"Tr":t>=1e3?(t/1e3).toFixed(1)+"K":t)),l.value++,"/"!=window.location.pathname&&n==l.url&&(c?o.set(l):o.child("value").set(l.value))})})})
$(document).ready((function(){$(".tabx span").click((function(){var a=$(this).attr("data-tab");$(".tabx span").removeClass("active"),$(".PopularPosts").removeClass("current"),$(this).addClass("active"),$("#"+a).addClass("current")}))}));});
window.addEventListener('load',function(){document.querySelector('.loading-home').style.display = 'none';document.querySelector('.content-home').style.display = 'block';});
$("#firstPage, #prevPage, #nextPage, #lastPage, #pageNumbers").on("click",function(){let e=$(".top-scroll-home-page-phantrang");$("html, body").animate({scrollTop:e.offset().top},300)});
