(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var svg=$('rr-svg');if(svg){var rr=[].slice.call(document.querySelectorAll('input[name=rr]')),sl=$('rr-s');var INFO={'1,1':['Fine and stretchy','The classic cuff rib. Neat, very elastic and comfortable on any leg.'],'2,2':['Sporty and grippy','Bolder columns with plenty of stretch. A favourite for athletic and casual socks.'],'3,1':['Smooth and dressy','Wide knit columns read almost flat, with a gentle, tailored stretch.'],'4,2':['Bold and structured','A pronounced, textured stripe with moderate give, often on chunky socks.']};
 function draw(){var v='1,1';rr.forEach(function(x){if(x.checked)v=x.value;});var k=+v.split(',')[0],p=+v.split(',')[1],s=+sl.value/100;$('rr-sv').textContent=Math.round(s*100)+'%';
  var kw=14,pw=14*(0.35+s*0.85),x=0,o='',col=0;while(x<420){for(var i=0;i<k&&x<420;i++){o+='<rect x="'+x.toFixed(1)+'" y="0" width="'+(kw-2)+'" height="420" rx="6" fill="#EFE7DA" opacity="'+(0.88-(col%2)*0.06)+'"/>';x+=kw;col++;}for(var j=0;j<p&&x<420;j++){o+='<rect x="'+x.toFixed(1)+'" y="0" width="'+Math.max(1,pw-1).toFixed(1)+'" height="420" fill="#1E0F16"/>';x+=pw;}}
  for(var y=14;y<420;y+=18)o+='<line x1="0" y1="'+y+'" x2="420" y2="'+y+'" stroke="#2A1620" stroke-opacity=".18" stroke-width="1"/>';svg.innerHTML=o;
  var st=Math.round((p/(k+p))*80+20);$('rr-o').innerHTML='<b>'+v.replace(',','&times;')+' &middot; '+INFO[v][0]+'</b><p>'+INFO[v][1]+' Relative stretch: about '+st+' out of 100.</p>';}
 rr.forEach(function(x){x.addEventListener('change',draw);});sl.addEventListener('input',draw);draw();}
var mf=[].slice.call(document.querySelectorAll('input[name=mf]'));if(mf.length){var F=[['Merino wool',[9,8,6,7],'Warm, breathable and odour-resistant.'],['Cotton',[5,8,5,6],'Soft and cool, best for mild weather.'],['Bamboo viscose',[5,9,6,5],'Silky, cool and soft to the touch.'],['Alpaca',[10,7,5,6],'Very warm and light for cold days.']],L=['Warmth','Breathability','Stretch','Durability'];var ms=$('mf-s');
 function bl(){var k=0;mf.forEach(function(x){if(x.checked)k=+x.value;});var sh=+ms.value,ny=Math.round((100-sh)*0.7),el=100-sh-ny;$('mf-sv').textContent=sh+'%';
  $('dn-m').style.strokeDasharray=sh+' 100';$('dn-n').style.strokeDasharray=(100-sh)+' 100';$('dn-n').style.strokeDashoffset=-sh;
  $('mf-mix').innerHTML='<i style="background:#C2614B"></i>'+sh+'% '+F[k][0]+'<br><i style="background:#8C9A7B"></i>'+ny+'% nylon, '+el+'% elastane';
  var b=F[k][1],f=(100-sh)/50,v=[b[0]*sh/80,b[1]*sh/80+1,b[2]+f*4,b[3]+f*4];$('mf-o').innerHTML=v.map(function(x,i){x=Math.max(1,Math.min(10,x));return '<div class="rb-bar"><span>'+L[i]+'<b>'+x.toFixed(1)+'/10</b></span><div><i style="width:'+(x*10)+'%"></i></div></div>';}).join('')+'<p>'+F[k][2]+' More nylon and elastane add stretch and durability.</p>';}
 mf.forEach(function(x){x.addEventListener('change',bl);});ms.addEventListener('input',bl);bl();}
})();
