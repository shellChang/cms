(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(6);t.Header=i.Header,t.headerInstance=i.headerInstance,t.Body=i.Body;var r=n(5);t.platformInstance=r.platformInstance,t.Language=r.Language;var a=n(11);t.getLangData=a.getLangData,t.compileHtml=a.compileHtml},function(e,t,n){"use strict";(function(e){var i,r=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a,o,s=n(8);!function(e){e[e.PC=1]="PC",e[e.PHONE=2]="PHONE",e[e.IPAD=3]="IPAD",e[e.length=3]="length"}(a=t.Device||(t.Device={})),function(e){e[e.ENGLISH=0]="ENGLISH",e[e.CHINESE=1]="CHINESE"}(o=t.Language||(t.Language={}));var c=function(e){function t(t){var n=e.call(this,t)||this;return n.name="PlatformError",n}return r(t,e),t}(Error);t.PlatformError=c;var l=function(){function t(){var t=this;if(this.listeners={},this._clientWidth=document&&document.body&&document.body.clientWidth,this._clientHeight=document&&document.body&&document.body.clientHeight,this._lang=o.CHINESE,!navigator||!navigator.userAgent)throw new c("This is not browser environment!");var n=navigator.userAgent.toLowerCase();-1!==n.search(/ipad/i)?this._device=a.IPAD:-1!==n.search(/iphone os/i)||-1!==n.search(/midp/i)||-1!==n.search(/ucweb/i)||-1!==n.search(/android/i)||-1!==n.search(/windows ce/i)||-1!==n.search(/windows mobile/i)?this._device=a.PHONE:this._device=a.PC,location&&location.origin&&(this._origin=location.origin),"dev"===s.envirenment?this.changeDeviceBySrcollWeight():e(window).resize(function(e){t.changeDeviceBySrcollWeight(),t.swithEnvironment()}),e(document).on("DOMContentLoaded",function(e){t.swithEnvironment()})}return Object.defineProperty(t.prototype,"clientWidth",{get:function(){return this._clientWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"clientHeight",{get:function(){return this._clientHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"origin",{get:function(){return this._origin},set:function(e){this._origin=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lang",{get:function(){return this._lang},enumerable:!0,configurable:!0}),t.prototype.changeDeviceBySrcollWeight=function(){this._clientWidth<768?this._device=a.PHONE:this._clientWidth<1024?this._device=a.IPAD:this._device=a.PC},t.prototype.changeLang=function(e){this._lang=e,this.dispatchEvent(new CustomEvent("langChange",{detail:{lang:this._lang}}))},Object.defineProperty(t.prototype,"device",{get:function(){return this._device},set:function(e){this._device=e},enumerable:!0,configurable:!0}),t.prototype.langName=function(){return this._lang===o.CHINESE?"中文":this._lang===o.ENGLISH?"英文":"unknow language"},t.prototype.deviceName=function(){return this._device===a.PC?"pc":this._device===a.IPAD?"ipad":this._device===a.PHONE?"手机":"unknow device"},t.prototype.swithEnvironment=function(){if(this._device===a.PC&&location.href.startsWith(this._origin+"/m")){var e=location.href.substring(this._origin.length+2,location.href.length);location.replace(""+this._origin+e)}else if((this._device===a.IPAD||this._device===a.PHONE)&&!location.href.startsWith(this._origin+"/m")){e=location.href.substring(this._origin.length,location.href.length);location.replace(this._origin+"/m"+e)}},t.prototype.addEventListener=function(e,t,n){this.listeners.hasOwnProperty(e)||(this.listeners[e]=[]),this.listeners[e].push(t)},t.prototype.dispatchEvent=function(e){var t=this;return!!this.listeners.hasOwnProperty(e.type)&&(this.listeners[e.type].forEach(function(n){n.call(t,e)}),!0)},t.prototype.removeEventListener=function(e,t,n){if(this.listeners.hasOwnProperty(e))for(var i=this.listeners[e],r=i.indexOf(t);-1!==r;)i.splice(r,1),r=i.indexOf(t)},t}();t.Platform=l,t.platformInstance=new l}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r,a=/(\{\{)\s*(\S+\.?)+\s*(\}\})/g;t.compileHtml=(i=!0,r=new Map,function(e,t){if(i){var n=[];n.push(e);for(var s=0;s<n.length;)n[s].hasChildNodes()&&n[s].childNodes.forEach(function(e){3===e.nodeType?a.test(e.textContent)&&(r.get(e.textContent)?r.get(e.textContent).push(e):r.set(e.textContent,[e]),e.textContent=e.textContent&&e.textContent.replace(a,o(t))):1===e.nodeType&&n.push(e)}),s++;i=!1}else r.forEach(function(e,n){var i="";e.forEach(function(e){""===i&&(i=n.replace(a,o(t))),e.textContent=i})})});var o=function(e){return function(t,n,i,r,a,o){if(e&&""!==i){for(var s=0,c=i&&i.split(".");s<c.length;s++){var l=c[s];if(!e[l])return i;e=e[l]}return e}return i}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r={key_0:"首页",key_1:"公司简介",key_2:"成功案例展示",key_3:"公司风采",key_4:"联系我们",key_5:"精益求精，诚信服务",key_6:"山东柯诺信息科技有限公司成立于2018年，目前有员工30余人。",key_7:"公司核心人员来自于海外学习及工作过的精英，在国内大型互联网公司就职过的技术及运营骨干。山东柯诺信息科技有限公司坚持“以应用软件开发和服务为核心，国内、国外市场同步发展”的战略。通过不同市场的借鉴和互动，不断吸收国际化管理经验和先进技术经验，促进技术和业务的相互转化，实现公司产品和技术的不断创新。",key_8:"目前，公司业务覆盖海外的政府及公共事业、金融、等各行业领域以及国内的电子商务、金融、智慧社区、CRM等领域。",key_9:"团队介绍",key_10:"高瞻远瞩，制胜未来",key_11:"互联网经验",key_12:""},a={key_1:"Company Introduce",key_2:"Demonstration of Success Cases",key_3:"Company elegance",key_4:"Contact us"};t.getLangData=function(e){return e===i.Language.CHINESE?r:e===i.Language.ENGLISH?a:void 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t.Platform=i.Platform,t.platformInstance=i.platformInstance,t.Language=i.Language;var r=n(10);t.appInstance=r.appInstance,t.App=r.App},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t.Body=i.Body;var r=n(9);t.Header=r.Header,t.headerInstance=r.headerInstance},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=n(3),a=n(4),o=function(){function t(){var t=this;this.data={},this._el=e("body")&&e("body")[0],i.platformInstance.addEventListener("langChange",function(e){var n=a.getLangData(e.detail.lang);t.translate(n)})}return t.prototype.bootstrap=function(){this._el},Object.defineProperty(t.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),t.prototype.translate=function(e){if(Object.assign(this.data,e),this._el){var t=this._el.querySelector("main");if("string"==typeof t){var n=document.createElement("div");n.innerHTML=r.compileHtml(t,e);for(var i=document.createDocumentFragment();n.firstChild;)i.appendChild(n.firstChild);this._el.replaceChild(i,this._el.querySelector("main"))}else r.compileHtml(t,e)}},t}();t.Body=o}).call(this,n(0))},function(e,t,n){"use strict";e.exports={port:9e3,host:"127.0.0.1",hot:!1,envirenment:"dev"}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),r=function(){function t(){this._el=e("."+i.appInstance.cssPrefix+"-header")&&e("."+i.appInstance.cssPrefix+"-header")[0]}return t.prototype.bootstrap=function(){if(null!==this._el){var t=e(this._el).find(".lang-downlist")&&e(this._el).find(".lang-downlist")[0],n=e(this._el).find("."+i.appInstance.cssPrefix+"-menus li"),r=null;n.each(function(t,n){var i=e(n).find("a")[0]&&e(n).find("a")[0].href;location.href===i&&(null!==r&&e(r).removeClass("cur"),e(n).addClass("cur"),r=n)});var a=Object.keys(i.Language).length/2;if(a>0){for(var o=document&&document.createDocumentFragment(),s=0;s<a;s++){var c=document&&document.createElement("li"),l=document&&document.createElement("a");l.classList.add("item-link"),l.innerText=i.Language[i.Language[s]]===i.Language.CHINESE?"中":"EN",c.appendChild(l),c.classList.add("downlist-item"),c.setAttribute("data-langType",i.Language[i.Language[s]]),i.platformInstance.lang===Number.parseInt(i.Language[i.Language[s]])?(c.classList.add("cur"),o.insertBefore(c,o.firstChild)):o.appendChild(c)}t.appendChild(o)}var u=e(this._el).find(".lang-downlist li"),d=u&&u[0];u.each(function(n,r){Number.parseInt(e(r).attr("data-langType"))===i.platformInstance.lang&&e(r).addClass("cur"),e(r).on("click",function(n){null!==d&&e(d).removeClass("cur"),d=r,e(r).addClass("cur"),t.insertBefore(r,t.firstChild),i.platformInstance.changeLang(Number.parseInt(e(r).attr("data-langType")))})})}},Object.defineProperty(t.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),t}();t.Header=r;var a=new r;t.headerInstance=a}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this._cssPrefix="ke-nuo",this._appName="公司网站",this._appName=e}return Object.defineProperty(e.prototype,"cssPrefix",{get:function(){return this._cssPrefix},set:function(e){this._cssPrefix=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"appName",{get:function(){return this._appName},set:function(e){this._appName=e},enumerable:!0,configurable:!0}),e}();t.App=i;var r=new i;t.appInstance=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4);t.getLangData=i.getLangData;var r=n(3);t.compileHtml=r.compileHtml},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),n(36);var r=n(1),a=new r.Body,o=r.getLangData(r.platformInstance.lang);a.translate(o);new e("#fullpage",{verticalCentered:!0,lockAnchors:!0,scrollOverflow:!0,dragAndMove:!0,css3:!0,onLeave:function(e,t){var n=i(r.headerInstance.el);1===e.index&&0===t.index?n.hasClass("hidden")&&n.removeClass("hidden"):n.hasClass("hidden")||n.addClass("hidden")}})}).call(this,n(13),n(0))},function(e,t,n){var i=n(37);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){}],[[34,0,1]]]);