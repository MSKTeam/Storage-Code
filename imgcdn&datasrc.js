const domains=["i0.wp.com","i1.wp.com","i2.wp.com","i3.wp.com"];$("img").each(function(){let t=$(this).attr("src"),o=domains[Math.floor(Math.random()*domains.length)],i=t.replace(/^https?:\/\/(.+?)\//,"https://"+o+"/$1/");$(this).attr("src",i)});
$('div.check-box img[src]').attr({'data-src': function() {return $(this).attr('src');},'class': 'lazyload','loading': 'lazy'}).removeAttr('src')
