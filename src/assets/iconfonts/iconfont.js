(function(window){var svgSprite='<svg><symbol id="icon-location" viewBox="0 0 1024 1024"><path d="M255.8 172C398 26.9 628.4 26.9 770.6 172c142.2 145.1 109.1 380.4-33.1 525.5L513.2 960.2 288.9 697.5C146.8 552.4 113.7 317.1 255.8 172z m257.4 692.7l177.5-215C807 531 840.1 338.5 723.8 219.7 607.5 101 418.9 101 302.6 219.7c-116.3 118.7-83.2 311.2 33.1 430l177.5 215z m0-632.7c-91.4 0-165.4 75.6-165.4 168.9 0 93.3 74.1 168.9 165.4 168.9 91.4 0 165.4-75.6 165.4-168.9 0.1-93.2-74-168.9-165.4-168.9z m0 270.3c-54.8 0-99.3-45.4-99.3-101.3s44.4-101.3 99.3-101.3 99.3 45.4 99.3 101.3-44.5 101.3-99.3 101.3z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)