const nPLPro={arr:[],compile:function(){let t=window.location.href.split("?")[0],e=this.arr.findIndex(e=>e.link.split("?")[0]===t);if(-1!==e){let n=e+1,i=e-1,r="",l="";n<this.arr.length&&(r=`<a href="${this.arr[n].link}">‹ Trước kia</a>`),i>=0&&(l=`<a href="${this.arr[i].link}">Kế tiếp ›</a>`),jQuery(".nPL-show").html(`<select onchange="location = this.value;"class="nPL_select">${this.arr.map((t,n)=>`<option value="${t.link}"${n===e?"selected":""}>${t.title}</option>`).join("")}</select><div class="inner_nPL">${l}${r}</div>`);const head=document.querySelector('head');const link1=document.createElement('link');link1.href=this.arr[n].link;link1.rel='prefetch';link1.as='document';head.appendChild(link1);const link2=document.createElement('link');link2.href=this.arr[i].link;link2.rel='prefetch';link2.as='document';head.appendChild(link2);const link3=document.createElement('link');link3.href=this.arr[n].link;link3.rel='prerender';head.appendChild(link3);const link4=document.createElement('link');link4.href=this.arr[i].link;link4.rel='prerender';head.appendChild(link4);}},create:function(t,e=[]){Promise.all(e.map(e=>{let n=`/feeds/posts/summary/-/${t}?alt=json-in-script&start-index=${e}&max-results=150`;return jQuery.ajax({type:"get",url:n,dataType:"jsonp"}).promise()})).then(t=>{t.forEach(t=>{"entry"in t.feed&&t.feed.entry.forEach(t=>{let e=t.link.find(t=>"alternate"===t.rel).href.split("?")[0];this.arr.push({title:t.title.$t,link:e})})}),this.arr.length>0?this.compile():console.log("Error: no entries found.")}).catch(t=>console.log(t))},run:function(t,e=[]){"function"==typeof jQuery&&document.getElementById("nPL")?this.create(t,e):console.log("Error: not function or element not found.")}};
const limitHistory=100,histories=function(){function i(i,t,e){this.id=i,this.title=t,this.link=e}function t(){localStorage.setItem("History",JSON.stringify(list))}return list=[],null!=localStorage.getItem("History")&&(list=JSON.parse(localStorage.getItem("History"))),(obj={}).addHistory=function(e,s,l){var n=new i(e,s,l);if(null!=list){if(same=list.find(i=>i.id==e),list.length<100){if(same)for(let o in list)list[o].id===e&&list.splice(list.length,0,list.splice(o,1)[0]),t();else list.push(n),t()}else if(same)for(let r in list)list[r].id===e&&list.splice(list.length,0,list.splice(r,1)[0]),t();else list.splice(0,1),list.push(n),t()}else list.push(n),t()},obj}();
