(window.webpackJsonp=window.webpackJsonp||[]).push([[5],[,function(e,t,n){"use strict";(function(e){var i,a=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var r,o,s,c,l=n(9);(o=r=t.Device||(t.Device={}))[o.PC=1]="PC",o[o.PHONE=2]="PHONE",o[o.IPAD=3]="IPAD",o[o.length=3]="length",(c=s=t.Language||(t.Language={}))[c.ENGLISH=0]="ENGLISH",c[c.CHINESE=1]="CHINESE";var u,d=(a(h,u=Error),h);function h(e){var t=u.call(this,e)||this;return t.name="PlatformError",t}t.PlatformError=d;var p=n(7),f=(Object.defineProperty(g.prototype,"body",{get:function(){return this._body},set:function(e){this._body=e},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"origin",{get:function(){return this._origin},set:function(e){this._origin=e},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"device",{get:function(){return this._device},set:function(e){this._device=e},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"header",{get:function(){return this._header},set:function(e){this._header=e},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"lang",{get:function(){return this._lang},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"clientWidth",{get:function(){return this._clientWidth},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"clientHeight",{get:function(){return this._clientHeight},enumerable:!0,configurable:!0}),g.prototype.changeDeviceBySrcollWeight=function(){this._clientWidth<768?this._device=r.PHONE:this._clientWidth<1024?this._device=r.IPAD:this._device=r.PC},g.prototype.changeLang=function(e){this._lang=e,this.dispatchEvent(new CustomEvent("langChange",{detail:{lang:this._lang}}))},g.prototype.langName=function(){return this._lang===s.CHINESE?"中文":this._lang===s.ENGLISH?"英文":"unknow language"},g.prototype.deviceName=function(){return this._device===r.PC?"pc":this._device===r.IPAD?"ipad":this._device===r.PHONE?"手机":"unknow device"},g.prototype.swithEnvironment=function(){if(this._device===r.PC&&location.href.startsWith(this._origin+"/m.")){var e=location.href.substring(this._origin.length+3,location.href.length);location.replace(this._origin+"/"+e)}else this._device!==r.IPAD&&this._device!==r.PHONE||location.href.startsWith(this._origin+"/m.")||(""===(e=location.href.substring(this._origin.length,location.href.length).replace("/",""))&&(e="index.html"),location.replace(this._origin+"/m."+e))},g.prototype.addEventListener=function(e,t,n){this.listeners.hasOwnProperty(e)||(this.listeners[e]=[]),this.listeners[e].push(t)},g.prototype.dispatchEvent=function(e){var t=this;return!!this.listeners.hasOwnProperty(e.type)&&(this.listeners[e.type].forEach(function(n){n.call(t,e)}),!0)},g.prototype.removeEventListener=function(e,t,n){if(this.listeners.hasOwnProperty(e))for(var i=this.listeners[e],a=i.indexOf(t);-1!==a;)i.splice(a,1),a=i.indexOf(t)},g);function g(){var t=this;if(this.listeners={},this._clientWidth=document&&document.body&&document.body.clientWidth,this._clientHeight=document&&document.body&&document.body.clientHeight,this._lang=s.CHINESE,!navigator||!navigator.userAgent)throw new d("This is not browser environment!");var n=navigator.userAgent.toLowerCase();-1!==n.search(/ipad/i)?this._device=r.IPAD:-1!==n.search(/iphone os/i)||-1!==n.search(/midp/i)||-1!==n.search(/ucweb/i)||-1!==n.search(/android/i)||-1!==n.search(/windows ce/i)||-1!==n.search(/windows mobile/i)?this._device=r.PHONE:this._device=r.PC,location&&location.origin&&(this._origin=location.origin),"dev"===l.envirenment?this.changeDeviceBySrcollWeight():e(window).resize(function(e){t.changeDeviceBySrcollWeight(),t.swithEnvironment()}),e(document).on("DOMContentLoaded",function(e){t.swithEnvironment()}),e(window).on("load",function(e){t._device===r.PC?(t._body=new p.PcBody,t._header=new p.PcHeader):(t._body=new p.PhoneBody,t._header=new p.PhoneHeader),t._header.bootstrap(),t._body.bootstrap({lang:t._lang}),t.dispatchEvent(new CustomEvent("load",{detail:{}}))})}t.Platform=f,t.platformInstance=new f}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(Object.defineProperty(a.prototype,"cssPrefix",{get:function(){return this._cssPrefix},set:function(e){this._cssPrefix=e},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"appName",{get:function(){return this._appName},set:function(e){this._appName=e},enumerable:!0,configurable:!0}),a);function a(e){this._cssPrefix="ke-nuo",this._appName="公司网站",this._appName=e}var r=new(t.App=i);t.appInstance=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a,r=/(\{\{)\s*(\S+\.?)+\s*(\}\})/g;t.compileHtml=(i=!0,a=new Map,function(e,t){if(i){var n=[];n.push(e);for(var s=0;s<n.length;)n[s].hasChildNodes()&&n[s].childNodes.forEach(function(e){3===e.nodeType?r.test(e.textContent)&&(a.get(e.textContent)?a.get(e.textContent).push(e):a.set(e.textContent,[e]),e.textContent=e.textContent&&e.textContent.replace(r,o(t))):1===e.nodeType&&n.push(e)}),s++;i=!1}else a.forEach(function(e,n){var i="";e.forEach(function(e){""===i&&(i=n.replace(r,o(t))),e.textContent=i})})});var o=function(e){return function(t,n,i,a,r,o){if(e&&""!==i){for(var s=0,c=i&&i.split(".");s<c.length;s++){var l=c[s];if(!e[l])return i;e=e[l]}return e}return i}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),a={key_0:"首页",key_1:"公司简介",key_2:"成功案例展示",key_3:"公司风采",key_4:"联系我们",key_5:"精益求精，诚信服务",key_6:"山东柯诺信息科技有限公司成立于2018年，目前有员工30余人。",key_7:"公司核心人员来自于海外学习及工作过的精英，在国内大型互联网公司就职过的技术及运营骨干。山东柯诺信息科技有限公司坚持“以应用软件开发和服务为核心，国内、国外市场同步发展”的战略。通过不同市场的借鉴和互动，不断吸收国际化管理经验和先进技术经验，促进技术和业务的相互转化，实现公司产品和技术的不断创新。",key_8:"目前，公司业务覆盖海外的政府及公共事业、金融、等各行业领域以及国内的电子商务、金融、智慧社区、CRM等领域。",key_9:"团队介绍",key_10:"高瞻远瞩，制胜未来",key_11:"互联网经验",key_12:""},r={key_0:"Index",key_1:"Company Introduce",key_2:"Demonstration of Success Cases",key_3:"Company elegance",key_4:"Contact us"};t.getLangData=function(e){return e===i.Language.CHINESE?a:e===i.Language.ENGLISH?r:void 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.Platform=i.Platform,t.platformInstance=i.platformInstance,t.Language=i.Language;var a=n(2);t.appInstance=a.appInstance,t.App=a.App},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7);t.PcHeader=i.PcHeader,t.PcBody=i.PcBody;var a=n(5);t.platformInstance=a.platformInstance,t.Language=a.Language;var r=n(13);t.getLangData=r.getLangData,t.compileHtml=r.compileHtml},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(8);t.PcBody=i.PcBody;var a=n(10);t.PcHeader=a.PcHeader;var r=n(11);t.PhoneBody=r.PhoneBody;var o=n(12);t.PhoneHeader=o.PhoneHeader},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=n(2),r=n(3),o=n(4),s=(c.prototype.bootstrap=function(e){null!==this._el&&this.translate(o.getLangData(e.lang))},Object.defineProperty(c.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),c.prototype.translate=function(t){if(Object.assign(this.data,t),this._el){var n=this._el.querySelector("main");if("string"==typeof n){var i=document.createElement("div");i.innerHTML=r.compileHtml(n,t);for(var o=document.createDocumentFragment();i.firstChild;)o.appendChild(i.firstChild);this._el.replaceChild(o,this._el.querySelector("main"))}else r.compileHtml(n,t)}e("."+a.appInstance.cssPrefix+"-app").css("display","block")},c);function c(){var t=this;this.data={},this._el=e("body")&&e("body")[0],i.platformInstance.addEventListener("langChange",function(e){var n=o.getLangData(e.detail.lang);t.translate(n)})}t.PcBody=s}).call(this,n(0))},function(e,t){e.exports={port:9e3,host:"127.0.0.1",hot:!1,envirenment:"dev",base:"127.0.0.1:9000",baseUrl:{phone:"http://127.0.0.1:9000/m",pc:"http://127.0.0.1:9000"}}},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),a=(r.prototype.bootstrap=function(t){if(null!==this._el&&void 0!==this._el){var n=e(this._el).find(".lang-downlist")&&e(this._el).find(".lang-downlist")[0],a=e(this._el).find("."+i.appInstance.cssPrefix+"-menus li"),r=null;a.each(function(t,n){var a=e(n).find("a")[0]&&e(n).find("a")[0].href;location.href.substring(0,location.href.length-1)===i.platformInstance.origin&&0===t?(null!==r&&e(r).removeClass("cur"),e(n).addClass("cur"),r=n):a&&location.href===a&&(null!==r&&e(r).removeClass("cur"),e(n).addClass("cur"),r=n)});var o=Object.keys(i.Language).length/2;if(0<o){for(var s=document&&document.createDocumentFragment(),c=0;c<o;c++){var l=document&&document.createElement("li"),u=document&&document.createElement("a");u.classList.add("item-link"),u.innerText=i.Language[i.Language[c]]===i.Language.CHINESE?"中":"EN",l.appendChild(u),l.classList.add("downlist-item"),l.setAttribute("data-langType",i.Language[i.Language[c]]),i.platformInstance.lang===Number.parseInt(i.Language[i.Language[c]])?(l.classList.add("cur"),s.insertBefore(l,s.firstChild)):s.appendChild(l)}n.appendChild(s)}var d=e(this._el).find(".lang-downlist li"),h=d&&d[0];d.each(function(t,a){Number.parseInt(e(a).attr("data-langType"))===i.platformInstance.lang&&e(a).addClass("cur"),e(a).on("click",function(t){null!==h&&e(h).removeClass("cur"),e(h=a).addClass("cur"),n.insertBefore(a,n.firstChild),i.platformInstance.changeLang(Number.parseInt(e(a).attr("data-langType")))})})}},Object.defineProperty(r.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),r);function r(){this._el=e("."+i.appInstance.cssPrefix+"-header")&&e("."+i.appInstance.cssPrefix+"-header")[0]}t.PcHeader=a}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=n(2),r=n(3),o=n(4),s=(c.prototype.bootstrap=function(e){null!==this._el&&this.translate(o.getLangData(e.lang))},Object.defineProperty(c.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),c.prototype.translate=function(t){if(Object.assign(this.data,t),this._el){var n=this._el.querySelector("main");if("string"==typeof n){var i=document.createElement("div");i.innerHTML=r.compileHtml(n,t);for(var o=document.createDocumentFragment();i.firstChild;)o.appendChild(i.firstChild);this._el.replaceChild(o,this._el.querySelector("main"))}else r.compileHtml(n,t)}e("."+a.appInstance.cssPrefix+"-app").css("display","block")},c);function c(){var t=this;this.data={},this._el=e("body")&&e("body")[0],i.platformInstance.addEventListener("langChange",function(e){var n=o.getLangData(e.detail.lang);t.translate(n)})}t.PhoneBody=s}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),a=(r.prototype.bootstrap=function(){if(null!==this._el&&void 0!==this._el){var t=e(this._el).find(".language select")&&e(this._el).find(".language select")[0],n=Object.keys(i.Language).length/2;if(0<n){for(var a=document&&document.createDocumentFragment(),r=0;r<n;r++){var o=document&&document.createElement("option");o.innerText=i.Language[i.Language[r]]===i.Language.CHINESE?"中":"EN",o.value=i.Language[i.Language[r]],i.platformInstance.lang===Number.parseInt(i.Language[i.Language[r]])?(o.selected=!0,a.insertBefore(o,a.firstChild)):a.appendChild(o)}t.appendChild(a)}var s=e(this._el).find(".language select")&&e(this._el).find(".language select")[0];s.addEventListener("change",function(e){i.platformInstance.changeLang(Number.parseInt(s.value))})}},Object.defineProperty(r.prototype,"el",{get:function(){return this._el},enumerable:!0,configurable:!0}),r);function r(){this._el=e("aside")&&e("aside")[0]}t.PhoneHeader=a}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4);t.getLangData=i.getLangData;var a=n(3);t.compileHtml=a.compileHtml},,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(33)},function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),n(34);var a=n(6);a.platformInstance.addEventListener("load",function(){var t=a.platformInstance.header;new e("#fullpage",{verticalCentered:!0,lockAnchors:!0,scrollOverflow:!0,dragAndMove:!0,css3:!0,onLeave:function(e,n){var a=i(t.el);1===e.index&&0===n.index?a.hasClass("hidden")&&a.removeClass("hidden"):a.hasClass("hidden")||a.addClass("hidden")}})})}).call(this,n(16),n(0))},function(e,t,n){var i=n(35);"string"==typeof i&&(i=[[e.i,i,""]]);n(14)(i,{hmr:!0,transform:void 0,insertInto:void 0}),i.locals&&(e.exports=i.locals)},function(e,t,n){}],[[32,0,1]]]);