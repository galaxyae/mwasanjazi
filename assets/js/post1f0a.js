/* Koenig Gallery Card
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Website : ghost.org
   Repo    : github.com/tryghost
   Author  : Ghost
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
(function (window, document) {
    var resizeImagesInGalleries = function resizeImagesInGalleries() {
        var images = document.querySelectorAll('.kg-gallery-image img');
        images.forEach(function (image) {
            var container = image.closest('.kg-gallery-image');
            var width = image.attributes.width.value;
            var height = image.attributes.height.value;
            var ratio = width / height;
            container.style.flex = ratio + ' 1 0%';
        });
    };

    document.addEventListener('DOMContentLoaded', resizeImagesInGalleries);
})(window, document);

/* clipboard.js
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 2.0.6
   Website : clipboardjs.com
   Repo    : github.com/zenorocha/clipboard.js
   Author  : Zeno Rocha
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});

/* Custom settings for clipboard */
new ClipboardJS("#copy");

/* lightense-images
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 1.0.9
   Website : sparanoid.com/work/lightense-images/
   Repo    : github.com/sparanoid/lightense-images
   Author  : Tunghsiao Liu
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Lightense=t():e.Lightense=t()}(window,function(){return function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=function(){"use strict";var n,y=window,v=document,k={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",background:"rgba(255, 255, 255, .98)",zIndex:1e6,beforeShow:void 0,afterShow:void 0,beforeHide:void 0,afterHide:void 0},x={};function o(e){var t=x[e];if(t){if("function"!=typeof t)throw"config.".concat(e," must be a function!");Reflect.apply(t,x,[x])}}function r(t){t.src&&!t.classList.contains("lightense-target")&&(t.classList.add("lightense-target"),t.addEventListener("click",function(e){if(x.keyboard&&(e.metaKey||e.ctrlKey))return y.open(t.src,"_blank");!function(e){if(x.target=e,x.target.classList.contains("lightense-open"))return s();var n,r,i;o("beforeShow"),x.scrollY=y.scrollY,n=x.target,r="transitionend",i=function(){o("afterShow")},n.addEventListener(r,function e(t){Reflect.apply(i,this,t),n.removeEventListener(r,e)});var t=new Image;t.onload=function(){!function(e){var t=e.width,n=e.height,r=y.pageYOffset||v.documentElement.scrollTop||0,i=y.pageXOffset||v.documentElement.scrollLeft||0,o=x.target.getBoundingClientRect(),a=t/o.width,c=y.innerWidth||v.documentElement.clientWidth||0,s=y.innerHeight||v.documentElement.clientHeight||0,l=x.target.getAttribute("data-lightense-padding")||x.target.getAttribute("data-padding")||x.padding,d=l<c?c-l:c-k.padding,u=l<s?s-l:s-k.padding,g=t/n,f=d/u;x.scaleFactor=t<d&&n<u?a:g<f?u/n*a:d/t*a;var p=c/2,b=r+s/2,h=o.left+i+o.width/2,m=o.top+r+o.height/2;x.translateX=Math.round(p-h),x.translateY=Math.round(b-m)}(this),function(){x.target.classList.add("lightense-open"),x.wrap=v.createElement("div"),x.wrap.className="lightense-wrap",setTimeout(function(){x.target.style.transform="scale("+x.scaleFactor+")"},20),x.target.parentNode.insertBefore(x.wrap,x.target),x.wrap.appendChild(x.target),setTimeout(function(){x.wrap.style.transform="translate3d("+x.translateX+"px, "+x.translateY+"px, 0)"},20);var e={cubicBezier:x.target.getAttribute("data-lightense-cubic-bezier")||x.cubicBezier,background:x.target.getAttribute("data-lightense-background")||x.target.getAttribute("data-background")||x.background,zIndex:x.target.getAttribute("data-lightense-z-index")||x.zIndex},t=u({},x,e);c("lightense-images-css-computed","\n    :root {\n      --lightense-z-index: ".concat(t.zIndex-1,";\n      --lightense-backdrop: ").concat(t.background,";\n      --lightense-duration: ").concat(t.time,"ms;\n      --lightense-timing-func: ").concat(t.cubicBezier,";\n      --lightense-backdrop-safari: ").concat(a(t.background),";\n    }")),x.container.style.visibility="visible",setTimeout(function(){x.container.style.opacity="1"},20)}(),y.addEventListener("keyup",d,!1),y.addEventListener("scroll",l,!1),x.container.addEventListener("click",s,!1)},t.src=x.target.src}(this)},!1))}function a(e){var t,n,r=/^#([A-Fa-f0-9]{3}){1,2}$/.test(t=e)?(3===(n=t.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x"+n.join(""))>>16&255,n>>8&255,255&n].join(", ")+", 1)"):/(rgb\((?:\d{1,3}[,)] ?){3}(?:\d?\.\d+\))?)/.test(t)?t.replace(")",", 1)"):/(rgba\((?:\d{1,3}[,)] ?){3}(?:\d?\.\d+\))?)/.test(t)?t:k.background,i=/([\d.]+)\)$/g,o=i.exec(r)[1];return r.replace(i,.7*o+")")}function c(e,t){var n=v.head||v.getElementsByTagName("head")[0];v.getElementById(e)&&v.getElementById(e).remove();var r=v.createElement("style");r.id=e,r.styleSheet?r.styleSheet.cssText=t:r.appendChild(v.createTextNode(t)),n.appendChild(r)}function s(){o("beforeHide"),y.removeEventListener("keyup",d,!1),y.removeEventListener("scroll",l,!1),x.container.removeEventListener("click",s,!1),x.target.classList.remove("lightense-open"),x.wrap.style.transform="",x.target.style.transform="",x.target.classList.add("lightense-transitioning"),x.container.style.opacity="",setTimeout(function(){o("afterHide"),x.container.style.visibility="",x.container.style.backgroundColor="",x.wrap.parentNode.replaceChild(x.target,x.wrap),x.target.classList.remove("lightense-transitioning")},x.time)}function l(){Math.abs(x.scrollY-y.scrollY)>=x.offset&&s()}function d(e){e.preventDefault(),27===e.keyCode&&s()}return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};n=function(e){switch(g(e)){case"undefined":throw"You need to pass an element!";case"string":return v.querySelectorAll(e);case"object":return e}}(e),x=u({},k,t),c("lightense-images-css","\n:root {\n  --lightense-z-index: ".concat(x.zIndex-1,";\n  --lightense-backdrop: ").concat(x.background,";\n  --lightense-backdrop-safari: ").concat(a(x.background),";\n  --lightense-duration: ").concat(x.time,"ms;\n  --lightense-timing-func: ").concat(x.cubicBezier,";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop-safari);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop-safari);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}")),v.querySelector(".lightense-backdrop")||(x.container=v.createElement("div"),x.container.className="lightense-backdrop",v.body.appendChild(x.container)),function(e){var t=e.length;if(t)for(var n=0;n<t;n++)r(e[n]);else r(e)}(n)}}();e.exports=n}])});

/* Custom settings for lightense-images */
const lightense = document.querySelector(".post-wrap img"),
      imageLink = document.querySelectorAll(".post-wrap a img");

window.addEventListener("load", function() {
  if (imageLink) {
      for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
      for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
      Lightense(".post-wrap img:not(.no-lightense)", {
      padding: 60,
      offset: 30
      });
  }
}, false)

/* reframe.js
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 2.2.6
   Website : dollarshaveclub.github.io/reframe.js
   Repo    : github.com/yowainwright/reframe.js
   Author  : Jeff Wainwright
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(!(-1!==r.className.split(" ").indexOf(n))){var f=r.getAttribute("height"),d=r.getAttribute("width");if(!(-1<d.indexOf("%")||-1<r.style.width.indexOf("%"))){var s=(f||r.offsetHeight)/(d||r.offsetWidth)*100,a=document.createElement("div");a.className=n;var l=a.style;l.position="relative",l.width="100%",l.paddingTop=s+"%";var p=r.style;p.position="absolute",p.width="100%",p.height="100%",p.left="0",p.top="0",r.parentNode.insertBefore(a,r),r.parentNode.removeChild(r),a.appendChild(r)}}}}});

/* Custom settings for Reframe */
reframe(".post-wrap iframe:not(.reframe-off)");

/* disqusLoader.js
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 1.0.0
   Repo    : github.com/osvaldasvalutis/disqusLoader.js
   Author  : Osvaldas Valutis
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(t,e,n){"use strict";var o=function(t,e){var n,o={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o},r=function(t){var n=t.getBoundingClientRect();return{top:n.top+e.body.scrollTop,left:n.left+e.body.scrollLeft}},i=function(t,n){var o=e.createElement("script");o.src=t,o.async=!0,o.setAttribute("data-timestamp",+new Date),o.addEventListener("load",function(){"function"==typeof n&&n()}),(e.head||e.body).appendChild(o)},d=function(t,e){var n,o;return function(){var r=this,i=arguments,d=+new Date;n&&d<n+t?(clearTimeout(o),o=setTimeout(function(){n=d,e.apply(r,i)},t)):(n=d,e.apply(r,i))}},s=!1,a=!1,u=!1,l=!1,c="unloaded",f=!1,p=function(){if(!f||!e.body.contains(f)||"loaded"==f.disqusLoaderStatus)return!0;var n=t.pageYOffset,o=r(f).top;if(o-n>t.innerHeight*a||n-o-f.offsetHeight-t.innerHeight*a>0)return!0;var d=e.getElementById("disqus_thread");d&&d.removeAttribute("id"),f.setAttribute("id","disqus_thread"),f.disqusLoaderStatus="loaded","loaded"==c?DISQUS.reset({reload:!0,config:u}):(t.disqus_config=u,"unloaded"==c&&(c="loading",i(l,function(){c="loaded"})))};t.addEventListener("scroll",d(s,p)),t.addEventListener("resize",d(s,p)),t.disqusLoader=function(t,n){n=o({laziness:1,throttle:250,scriptUrl:!1,disqusConfig:!1},n),a=n.laziness+1,s=n.throttle,u=n.disqusConfig,l=!1===l?n.scriptUrl:l,(f="string"==typeof t?e.querySelector(t):"number"==typeof t.length?t[0]:t).disqusLoaderStatus="unloaded",p()}}(window,document);

/* Custom settings for disqusLoader.js */
var disqus = document.getElementById('disqusloader');
if (disqus) {
    disqusLoader(disqus, options)
}