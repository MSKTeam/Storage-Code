const nPLPro={arr:[],compile:function(){let t=this.arr.findIndex(t=>t.link===window.location.href);if(-1!==t){let e=t-1,n=t+1,i="";n<this.arr.length&&(i+=`<a href="${this.arr[n].link}">‹ Prev</a>`),e>=0&&(i+=`<a href="${this.arr[e].link}">Next ›</a>`),jQuery(".nPL-show").html(`<select onchange="location = this.value;" id="nPL_select">${this.arr.map((e,n)=>`<option value="${e.link}" ${n===t?"selected":""}>${e.title}</option>`).join("")}</select><div class="inner_nPL">${i}</div>`)}},create:function(t,e=[]){let n=[];e.forEach(e=>{let i=`/feeds/posts/summary/-/${this.settings.cat}?alt=json-in-script&start-index=${e}&max-results=150`;n.push(t.ajax({type:"get",url:i,dataType:"jsonp"}).promise())}),Promise.all(n).then(t=>{t.forEach(t=>{"entry"in t.feed&&t.feed.entry.forEach(t=>{this.arr.push({title:t.title.$t,link:t.link.find(t=>"alternate"===t.rel).href})})}),this.arr.length>0?this.compile():console.log("Error: no entries found.")}).catch(t=>console.log(t))},run:function(t,e=[]){"function"==typeof jQuery&&document.getElementById("nPL")?(this.settings.cat=t,this.create(jQuery,e)):console.log("Error: not function or element not found.")},settings:{cat:""}};
const PrefetchChapter={arr:[],compile:function(){let e=this.arr.findIndex(e=>e.link===window.location.href);if(-1!==e){let t=e-1,r=e+1,n=e-2,i=e+2,l="";t>=0&&(l+=`<link href="${this.arr[t].link}" rel="Prefetch" as="document">`),r<this.arr.length&&(l+=`<link href="${this.arr[r].link}" rel="Prefetch" as="document">`),n>=0&&(l+=`<link href="${this.arr[n].link}" rel="Prefetch" as="document">`),i<this.arr.length&&(l+=`<link href="${this.arr[i].link}" rel="Prefetch" as="document">`),document.getElementById("PrefetchChapter").innerHTML=l}},create:function(e,t=[]){let r=[];t.forEach(t=>{let n=`/feeds/posts/summary/-/${this.settings.cat}?alt=json-in-script&start-index=${t}&max-results=150`;r.push(e.ajax({type:"get",url:n,dataType:"jsonp"}).promise())}),Promise.all(r).then(e=>{e.forEach(e=>{"entry"in e.feed&&e.feed.entry.forEach(e=>{this.arr.push({title:e.title.$t,link:e.link.find(e=>"alternate"===e.rel).href})})}),this.arr.length>0?this.compile():console.log("Error: no entries found.")}).catch(e=>console.log(e))},run:function(e,t=[]){"function"==typeof jQuery&&document.getElementById("PrefetchChapter")?(this.settings.cat=e,this.create(jQuery,t)):console.log("Error: not function or element not found.")},settings:{cat:""}};
const limitHistory=100,histories=function(){function i(i,t,e){this.id=i,this.title=t,this.link=e}function t(){localStorage.setItem("History",JSON.stringify(list))}return list=[],null!=localStorage.getItem("History")&&(list=JSON.parse(localStorage.getItem("History"))),(obj={}).addHistory=function(e,s,l){var n=new i(e,s,l);if(null!=list){if(same=list.find(i=>i.id==e),list.length<100){if(same)for(let o in list)list[o].id===e&&list.splice(list.length,0,list.splice(o,1)[0]),t();else list.push(n),t()}else if(same)for(let r in list)list[r].id===e&&list.splice(list.length,0,list.splice(r,1)[0]),t();else list.splice(0,1),list.push(n),t()}else list.push(n),t()},obj}();
