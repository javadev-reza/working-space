/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.2.27
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,u){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.27/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Sa(b){if(null==b||Ja(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:G(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(N(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(L(b)||Sa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Xb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Xb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Yb(b){return function(a,c){b(c,a)}}function ib(){for(var b=na.length,a;b;){b--;a=na[b].charCodeAt(0);if(57==a)return na[b]="A",na.join("");if(90==a)na[b]="0";else return na[b]=String.fromCharCode(a+1),na.join("")}na.unshift("0");return na.join("")}function Zb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Zb(b,a);return b}function U(b){return parseInt(b,
10)}function $b(b,a){return E(new (E(function(){},{prototype:b})),a)}function v(){}function ga(b){return b}function aa(b){return function(){return b}}function F(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function G(b){return"string"===typeof b}function jb(b){return"number"===typeof b}function va(b){return"[object Date]"===Ba.call(b)}function N(b){return"function"===typeof b}function kb(b){return"[object RegExp]"===Ba.call(b)}
function Ja(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ta(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ua(b,a){var c=Ta(b,a);0<=c&&b.splice(c,1);return a}function Ka(b,a,c,d){if(Ja(b)||b&&b.$evalAsync&&b.$watch)throw Va("cpws");if(a){if(b===a)throw Va("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ta(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Zb(a,g)}}else if(a=b)L(b)?a=Ka(b,[],c,d):va(b)?a=new Date(b.getTime()):kb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ka(b,{},c,d));
return a}function ha(b,a){if(L(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!lb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Ca(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ca(b[d],a[d]))return!1;return!0}}else{if(va(b))return va(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(kb(b)&&kb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ja(b)||Ja(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!N(b[d])){if(!Ca(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!N(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?wa.call(arguments,2):[];return!N(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(wa.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=u:Ja(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return G(b)?JSON.parse(b):b}function Wa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=bc(c[0]),D(d)&&(b=D(c[1])?bc(c[1]):!0,lb.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function mb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function dc(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Va("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function nb(b,a){a=
a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Va("areq",a||"?",c||"required");return b}function Ya(b,a,c){c&&L(b)&&(b=b[b.length-1]);Db(N(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ea(b,a){if("hasOwnProperty"===b)throw Va("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&N(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Yc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function Zc(b){E(b,{bootstrap:dc,copy:Ka,extend:E,equals:Ca,element:A,forEach:r,injector:ec,noop:v,bind:Bb,toJson:oa,fromJson:ac,identity:ga,isUndefined:F,isDefined:D,isString:G,isFunction:N,isObject:T,isNumber:jb,isElement:Tc,isArray:L,version:$c,isDate:va,lowercase:x,uppercase:La,callbacks:{counter:0},$$minErr:z,$$csp:Za});$a=Yc(W);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",ad)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",
gc).directive({a:cd,input:hc,textarea:hc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Fb).directive(jc);
a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function ab(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],k=a,m,l,n,q,p,s;if(!d||null!=b)for(;e.length;)for(m=e.shift(),l=0,n=m.length;l<n;l++)for(q=A(m[l]),k?q.triggerHandler("$destroy"):k=!k,p=0,q=(s=q.children()).length;p<q;p++)e.push(Fa(s[p]));return f.apply(this,arguments)}var f=Fa.fn[b],f=f.$original||f;e.$original=f;Fa.fn[b]=e}function S(b){if(b instanceof S)return b;G(b)&&(b=$(b));if(!(this instanceof S)){if(G(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(G(b)){var a=b;b=X;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);A(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ma(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ma(b[a])}function lc(b,a,c,d){if(D(d))throw Hb("offargs");var e=pa(b,"events");pa(b,"handle")&&(F(a)?r(e,function(a,c){bb(b,c,a);delete e[c]}):r(a.split(" "),function(a){F(c)?(bb(b,a,e[a]),delete e[a]):Ua(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=cb[c];d&&(a?delete cb[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),lc(b)),delete cb[c],b.ng339=u))}function pa(b,a,c){var d=
b.ng339,d=cb[d||-1];if(D(c))d||(b.ng339=d=++me,d=cb[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=pa(b,"data"),e=D(c),f=!e&&D(a),g=f&&!T(a);d||g||pa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function ob(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+$(a)+" "," ")))})}function pb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function Jb(b,a){if(a){a=a.nodeName||!D(a.length)||Ja(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function mc(b,a){return qb(b,"$"+(a||"ngController")+"Controller")}function qb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function nc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ma(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function oc(b,a){var c=rb[a.toLowerCase()];return c&&pc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(F(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=R?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Na(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===u&&(d=b.$$hashKey=(a||ib)()):d=b;return c+":"+d}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function qc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),r(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Ya(b[c],"fn"),a=b.slice(0,c)):Ya(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(T(b))r(b,
Yb(a));else return a(b,c)}}function c(a,b){Ea(a,"service");if(N(b)||L(b))b=n.instantiate(b);if(!b.$get)throw eb("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;r(a,function(a){if(!m.get(a)){m.put(a,!0);try{if(G(a))for(c=$a(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],k=n.get(g[0]);k[g[1]].apply(k,g[2])}else N(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Ya(a,"module")}catch(p){throw L(a)&&(a=
a[a.length-1]),p.message&&(p.stack&&-1==p.stack.indexOf(p.message))&&(p=p.message+"\n"+p.stack),eb("modulerr",a,p.stack||p.message||p);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw eb("cdep",d+" <- "+k.join(" <- "));return a[d]}try{return k.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{k.shift()}}function d(a,b,e){var f=[],h=qc(a),g,k,p;k=0;for(g=h.length;k<g;k++){p=h[k];if("string"!==typeof p)throw eb("itkn",p);f.push(e&&e.hasOwnProperty(p)?
e[p]:c(p))}L(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||N(e)?e:c},get:c,annotate:qc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",k=[],m=new db([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,
b){Ea(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw eb("unpr",k.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||v)});return p}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,
wa.call(arguments,1))}finally{if(s--,0===s)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});t=b(ea,a)})()}function g(){y!=h.url()&&(y=h.url(),r(ba,function(a){a(h.url())}))}var h=this,k=a[0],m=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var s=0,J=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===s?a():J.push(a)};
var w=[],t;h.addPollFn=function(a){F(t)&&f(100,n);w.push(a);return a};var y=m.href,K=a.find("base"),B=null;h.url=function(a,c){m!==b.location&&(m=b.location);l!==b.history&&(l=b.history);if(a){if(y!=a){var e=y&&Ga(y)===Ga(a);y=a;!e&&d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),K.attr("href",K.attr("href"))):(e||(B=a),c?m.replace(a):m.href=a);return h}}else return B||m.href.replace(/%27/g,"'")};var ba=[],O=!1;h.onUrlChange=function(a){if(!O){if(d.history)A(b).on("popstate",g);if(d.hashchange)A(b).on("hashchange",
g);else h.addPollFn(g);O=!0}ba.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=K.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var M={},ca="",P=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===u?k.cookie=escape(a)+"=;path="+P+";expires=Thu, 01 Jan 1970 00:00:00 GMT":G(b)&&(d=(k.cookie=escape(a)+"="+escape(b)+";path="+P).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==
ca)for(ca=k.cookie,d=ca.split("; "),M={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),M[a]===u&&(M[a]=unescape(e.substring(h+1))));return M}};h.defer=function(a,b){var c;s++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(v),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),k={},m=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;return a[b]={put:function(a,b){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!F(b))return a in k||g++,k[a]=b,g>m&&this.remove(q.key),b},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete k[a];g--},removeAll:function(){k={};g=0;l={};n=q=null},destroy:function(){l=h=k=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){Ea(a,"directive");G(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);N(g)?g={compile:aa(g)}:!g.compile&&g.link&&(g.compile=aa(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(k){d(k)}});return e}])),c[a].push(e)):r(a,Yb(k));
return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,q,p,s,J,w,t,y,K){function B(a,b,c,d,e){a instanceof
A||(a=A(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);ba(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?Oa.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var k=g.length;d<k;d++){var p=g[d].nodeType;1!==p&&9!==p||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ba(a,b){try{a.addClass(b)}catch(c){}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,p,l,m,q,
n,w;f=c.length;var s=Array(f);for(m=0;m<f;m++)s[m]=c[m];n=m=0;for(q=k.length;m<q;n++)p=s[n],c=k[m++],f=k[m++],c?(c.scope?(l=a.$new(),A.data(p,"$scope",l)):l=a,w=c.transcludeOnThisElement?M(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?M(a,b):null,c(f,l,p,d,w)):f&&f(a,p.childNodes,u,e)}for(var k=[],p,l,m,q,n=0;n<a.length;n++)p=new Ob,l=ca(a[n],[],p,0===n?d:u,e),(f=l.length?I(l,a[n],p,b,c,null,[],[],f):null)&&f.scope&&ba(p.$$element,"ng-scope"),p=f&&f.terminal||!(m=a[n].childNodes)||!m.length?
null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),k.push(f,p),q=q||f||p,f=null;return q?g:null}function M(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ca(a,b,c,d,g){var k=c.$attr,p;switch(a.nodeType){case 1:ea(b,qa(Pa(a).toLowerCase()),"E",d,g);for(var l,m,q,n=a.attributes,w=0,s=n&&n.length;w<s;w++){var t=!1,J=!1;l=n[w];if(!R||8<=R||l.specified){p=l.name;m=
$(l.value);l=qa(p);if(q=U.test(l))p=nb(l.substr(6),"-");var y=l.replace(/(Start|End)$/,"");l===y+"Start"&&(t=p,J=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));l=qa(p.toLowerCase());k[l]=p;if(q||!c.hasOwnProperty(l))c[l]=m,oc(a,l)&&(c[l]=!0);S(a,b,m,l);ea(b,l,"A",d,g,t,J)}}a=a.className;if(G(a)&&""!==a)for(;p=f.exec(a);)l=qa(p[2]),ea(b,l,"C",d,g)&&(c[l]=$(p[3])),a=a.substr(p.index+p[0].length);break;case 3:x(b,a.nodeValue);break;case 8:try{if(p=e.exec(a.nodeValue))l=qa(p[1]),ea(b,l,"M",d,
g)&&(c[l]=$(p[2]))}catch(B){}}b.sort(F);return b}function P(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function C(a,b,c){return function(d,e,f,g,k){e=P(e[0],b,c);return a(d,e,f,g,k)}}function I(a,c,d,e,f,g,k,q,n){function w(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=H.require;a.directiveName=z;if(K===H||H.$$isolateScope)a=rc(a,
{isolateScope:!0});k.push(a)}if(b){c&&(b=C(b,c,d));b.require=H.require;b.directiveName=z;if(K===H||H.$$isolateScope)b=rc(b,{isolateScope:!0});q.push(b)}}function t(a,b,c,d){var e,f="data",g=!1;if(G(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(t(a,b,c,d))}));return e}function J(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&
(b=a,a=u);Ia&&(c=ca);return n(a,b,c)}var y,Q,B,M,C,P,ca={},ra;y=c===f?d:ha(d,new Ob(A(f),d.$attr));Q=y.$$element;if(K){var ue=/^\s*([@=&])(\??)\s*(\w*)\s*$/;P=e.$new(!0);!I||I!==K&&I!==K.$$originalDirective?Q.data("$isolateScopeNoTemplate",P):Q.data("$isolateScope",P);ba(Q,"ng-isolate-scope");r(K.scope,function(a,c){var d=a.match(ue)||[],f=d[3]||c,g="?"==d[2],d=d[1],k,l,n,q;P.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){P[c]=a});y.$$observers[f].$$scope=e;y[f]&&(P[c]=b(y[f])(e));
break;case "=":if(g&&!y[f])break;l=p(y[f]);q=l.literal?Ca:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){k=P[c]=l(e);throw ja("nonassign",y[f],K.name);};k=P[c]=l(e);P.$watch(function(){var a=l(e);q(a,P[c])||(q(a,k)?n(e,a=P[c]):P[c]=a);return k=a},null,l.literal);break;case "&":l=p(y[f]);P[c]=function(a){return l(e,a)};break;default:throw ja("iscp",K.name,c,a);}})}ra=n&&w;O&&r(O,function(a){var b={$scope:a===K||a.$$isolateScope?P:e,$element:Q,$attrs:y,$transclude:ra},c;C=a.controller;
"@"==C&&(C=y[a.name]);c=s(C,b);ca[a.name]=c;Ia||Q.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(B=k.length;g<B;g++)try{M=k[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(H){l(H,ia(Q))}g=e;K&&(K.template||null===K.templateUrl)&&(g=P);a&&a(g,f.childNodes,u,n);for(g=q.length-1;0<=g;g--)try{M=q[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(D){l(D,ia(Q))}}n=n||{};for(var y=-Number.MAX_VALUE,
M,O=n.controllerDirectives,K=n.newIsolateScopeDirective,I=n.templateDirective,ea=n.nonTlbTranscludeDirective,F=!1,E=!1,Ia=n.hasElementTranscludeDirective,x=d.$$element=A(c),H,z,V,S=e,R,Ha=0,sa=a.length;Ha<sa;Ha++){H=a[Ha];var U=H.$$start,Y=H.$$end;U&&(x=P(c,U,Y));V=u;if(y>H.priority)break;if(V=H.scope)M=M||H,H.templateUrl||(fb("new/isolated scope",K,H,x),T(V)&&(K=H));z=H.name;!H.templateUrl&&H.controller&&(V=H.controller,O=O||{},fb("'"+z+"' controller",O[z],H,x),O[z]=H);if(V=H.transclude)F=!0,H.$$tlb||
(fb("transclusion",ea,H,x),ea=H),"element"==V?(Ia=!0,y=H.priority,V=x,x=d.$$element=A(X.createComment(" "+z+": "+d[z]+" ")),c=x[0],ra(f,wa.call(V,0),c),S=B(V,e,y,g&&g.name,{nonTlbTranscludeDirective:ea})):(V=A(Kb(c)).contents(),x.empty(),S=B(V,e));if(H.template)if(E=!0,fb("template",I,H,x),I=H,V=N(H.template)?H.template(x,d):H.template,V=W(V),H.replace){g=H;V=Ib.test(V)?A($(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",z,"");ra(f,x,c);sa={$attr:{}};V=ca(c,[],sa);var Z=a.splice(Ha+
1,a.length-(Ha+1));K&&D(V);a=a.concat(V).concat(Z);v(d,sa);sa=a.length}else x.html(V);if(H.templateUrl)E=!0,fb("template",I,H,x),I=H,H.replace&&(g=H),J=te(a.splice(Ha,a.length-Ha),x,d,f,F&&S,k,q,{controllerDirectives:O,newIsolateScopeDirective:K,templateDirective:I,nonTlbTranscludeDirective:ea}),sa=a.length;else if(H.compile)try{R=H.compile(x,d,S),N(R)?w(null,R,U,Y):R&&w(R.pre,R.post,U,Y)}catch(ve){l(ve,ia(x))}H.terminal&&(J.terminal=!0,y=Math.max(y,H.priority))}J.scope=M&&!0===M.scope;J.transcludeOnThisElement=
F;J.templateOnThisElement=E;J.transclude=S;n.hasElementTranscludeDirective=Ia;return J}function D(a){for(var b=0,c=a.length;b<c;b++)a[b]=$b(a[b],{$$isolateScope:!0})}function ea(b,e,f,g,p,m,n){if(e===p)return null;p=null;if(c.hasOwnProperty(e)){var q;e=a.get(e+d);for(var w=0,s=e.length;w<s;w++)try{q=e[w],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(m&&(q=$b(q,{$$start:m,$$end:n})),b.push(q),p=q)}catch(y){l(y)}}return p}function v(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ba(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function te(a,b,c,d,e,f,g,k){var p=[],l,m,w=b[0],s=a.shift(),y=E({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=N(s.templateUrl)?s.templateUrl(b,c):s.templateUrl;
b.empty();n.get(t.getTrustedResourceUrl(J),{cache:q}).success(function(q){var n,t;q=W(q);if(s.replace){q=Ib.test(q)?A($(q)):[];n=q[0];if(1!=q.length||1!==n.nodeType)throw ja("tplrt",s.name,J);q={$attr:{}};ra(d,b,n);var B=ca(n,[],q);T(s.scope)&&D(B);a=B.concat(a);v(c,q)}else n=w,b.html(q);a.unshift(y);l=I(a,n,c,e,b,s,f,g,k);r(d,function(a,c){a==n&&(d[c]=b[0])});for(m=O(b[0].childNodes,e);p.length;){q=p.shift();t=p.shift();var K=p.shift(),C=p.shift(),B=b[0];if(t!==w){var P=t.className;k.hasElementTranscludeDirective&&
s.replace||(B=Kb(n));ra(K,A(t),B);ba(A(B),P)}t=l.transcludeOnThisElement?M(q,l.transclude,C):C;l(m,q,B,d,t)}p=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;p?(p.push(b),p.push(c),p.push(d),p.push(a)):(l.transcludeOnThisElement&&(a=M(b,l.transclude,e)),l(m,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function fb(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function x(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ba(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ba(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function z(a,b){if("srcdoc"==b)return t.HTML;var c=Pa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Pa(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,z(a,e)))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function ra(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,k;if(a)for(g=0,k=a.length;g<k;g++)if(a[g]==d){a[g++]=c;k=g+e-1;for(var p=a.length;g<
p;g++,k++)k<p?a[g]=a[k]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function rc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:qa,$addClass:function(a){a&&0<a.length&&y.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&y.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sc(a,b),d=sc(b,a);0===c.length?y.removeClass(this.$$element,d):0===d.length?y.addClass(this.$$element,c):y.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=oc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=nb(a,"-"));e=Pa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=K(b,"src"===a);!1!==c&&(null===b||b===u?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var sa=b.startSymbol(),Ia=b.endSymbol(),W="{{"==sa||"}}"==Ia?ga:function(a){return a.replace(/\{\{/g,sa).replace(/}}/g,Ia)},U=/^ngAttr[A-Z]/;return B}]}function qa(b){return ab(b.replace(we,""))}function sc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Ea(a,"controller");T(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,k;G(e)&&(g=e.match(a),h=g[1],k=g[3],e=b.hasOwnProperty(h)?b[h]:fc(f.$scope,h,!0)||fc(d,h,!0),Ya(e,h,!0));g=c.instantiate(e,f);if(k){if(!f||"object"!==typeof f.$scope)throw z("$controller")("noscp",
h||e.name,k);f.$scope[k]=g}return g}}]}function Pd(){this.$get=["$window",function(b){return A(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function tc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=x($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function uc(b){var a=T(b)?b:u;return function(c){a||(a=tc(b));return c?a[x(c)]||null:a}}function vc(b,a,c){if(N(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){G(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==Ba.call(a)&&"[object Blob]"!==Ba.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function b(a){var d=E({},a,{data:vc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[x(a.method)]);
a:for(d in b){a=x(d);for(f in c)if(x(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){N(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=La(c.method);var f=[function(a){d=a.headers;var c=vc(a.data,uc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===x(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=n.when(c);for(r(t,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function m(a,b,c,e){C&&(200<=a&&300>a?C.put(A,[a,b,tc(c),e]):C.remove(A));q(b,a,c,e);d.$$phase||d.$apply()}function q(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?t.resolve:t.reject)({data:a,status:b,headers:uc(d),config:c,statusText:e})}function s(){var a=Ta(p.pendingRequests,c);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),r=t.promise,C,I,A=J(c.url,c.params);p.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(C=T(c.cache)?c.cache:T(e.cache)?e.cache:w);if(C)if(I=C.get(A),D(I)){if(I&&N(I.then))return I.then(s,s),I;L(I)?q(I[1],I[0],ha(I[2]),I[3]):q(I,200,{},"OK")}else C.put(A,r);F(I)&&
((I=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=I),a(c.method,A,f,m,g,c.timeout,c.withCredentials,c.responseType));return r}function J(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){T(a)&&(a=va(a)?a.toISOString():oa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),t=[];r(f,function(a){t.unshift(G(a)?q.get(a):q.invoke(a))});r(g,
function(a,b){var c=G(a)?q.get(a):q.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");p.defaults=e;return p}]}function xe(b){if(8>=R&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){bb(f,"load",g);bb(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};sb(f,"load",g);sb(f,"error",g);8>=R&&(f.onreadystatechange=function(){G(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,k,m,l,n,q,p,s){function J(){t=g;K&&K();B&&B.abort()}function w(a,d,e,f,g){O&&c.cancel(O);K=B=null;0===d&&(d=e?200:"file"==xa(k).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(v)}
var t;b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==x(e)){var y="_"+(d.counter++).toString(36);d[y]=function(a){d[y].data=a;d[y].called=!0};var K=f(k.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(a,b){w(l,a,d[y].data,"",b);d[y]=v})}else{var B=a(e);B.open(e,k,!0);r(n,function(a,b){D(a)&&B.setRequestHeader(b,a)});B.onreadystatechange=function(){if(B&&4==B.readyState){var a=null,b=null,c="";t!==g&&(a=B.getAllResponseHeaders(),b="response"in B?B.response:B.responseText);t===g&&
10>R||(c=B.statusText);w(l,t||B.status,b,a,c)}};p&&(B.withCredentials=!0);if(s)try{B.responseType=s}catch(ba){if("json"!==s)throw ba;}B.send(m||null)}if(0<q)var O=c(J,q);else q&&N(q.then)&&q.then(J)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,m,l){for(var n,q,p=0,s=[],J=f.length,w=!1,t=[];p<J;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,
n+g))?(p!=n&&s.push(f.substring(p,n)),s.push(p=c(w=f.substring(n+g,q))),p.exp=w,p=q+h,w=!0):(p!=J&&s.push(f.substring(p)),p=J);(J=s.length)||(s.push(""),J=1);if(l&&1<s.length)throw wc("noconcat",f);if(!m||w)return t.length=J,p=function(a){try{for(var b=0,c=J,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=oa(g)}t[b]=g}return t.join("")}catch(h){a=wc("interr",f,h.toString()),
d(a)}},p.exp=f,p.parts=s,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,k){var m=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,s=D(k)&&!k;h=D(h)?h:0;q.then(null,null,d);q.$$intervalId=m(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);s||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
mb(b[a]);return b.join("/")}function xc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ta(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);xc(b,this,b);this.$$parse=function(a){var e=ta(c,a);if(!G(e))throw Sb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,
e){var f,g;(f=ta(b,d))!==u?(g=f,g=(f=ta(a,f))!==u?c+(ta("/",f)||f):b+g):(f=ta(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Tb(b,a){var c=Rb(b);xc(b,this,b);this.$$parse=function(d){var e=ta(b,d)||ta(c,d),e="#"==e.charAt(0)?ta(a,e):this.$$html5?e:"";if(!G(e))throw Sb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),
e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function Ac(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){var f,g;b==Ga(d)?f=d:(g=ta(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+
(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,k=d.baseHref(),m=d.url();
a?(k=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(k||"/"),e=e.history?zc:Ac):(k=Ga(m),e=Tb);h=new e(k,"#"+b);h.$$parseLinkUrl(m,m);var l=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");T(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);l.test(e)||(!e||(b.attr("target")||a.isDefaultPrevented())||
!h.$$parseLinkUrl(e,g))||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=h.$$replace;n&&a==h.absUrl()||(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return n});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?
function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&
b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){ma(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),d);var h=ma(b[f],d);h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ya(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===u&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);ma(b[f],d);return b[f]=c}function Qa(b){return"constructor"==
b}function Cc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);var h=function(a){return ma(a,f)},k=g.expensiveChecks,m=k||Qa(b)?h:ga,l=k||Qa(a)?h:ga,n=k||Qa(c)?h:ga,q=k||Qa(d)?h:ga,p=k||Qa(e)?h:ga;return g.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,t;if(null==k)return k;(k=m(k[b]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=m(a)})),k=m(k.$$v));if(!a)return k;if(null==k)return u;(k=l(k[a]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=
l(a)})),k=l(k.$$v));if(!c)return k;if(null==k)return u;(k=n(k[c]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=n(a)})),k=n(k.$$v));if(!d)return k;if(null==k)return u;(k=q(k[d]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=q(a)})),k=q(k.$$v));if(!e)return k;if(null==k)return u;(k=p(k[e]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=p(a)})),k=p(k.$$v));return k}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=m(h[b]);
if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=q(h[d]);return e?null==h?u:h=p(h[e]):h}}function Ae(b,a){return function(c,d){return b(c,d,ya,ma,a)}}function Dc(b,a,c){var d=a.expensiveChecks,e=d?Be:Ce;if(e.hasOwnProperty(b))return e[b];var f=b.split("."),g=f.length,h;if(a.csp)h=6>g?Cc(f[0],f[1],f[2],f[3],f[4],c,a):function(b,d){var e=0,h;do h=Cc(f[e++],f[e++],f[e++],f[e++],f[e++],c,a)(b,d),d=u,b=h;while(e<g);return h};
else{var k="var p;\n";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var m=d;r(f,function(b,e){ka(b,c);var f=(e?"s":'((l&&l.hasOwnProperty("'+b+'"))?l:s)')+'["'+b+'"]',g=d||Qa(b);g&&(f="eso("+f+", fe)",m=!0);k+="if(s == null) return undefined;\ns="+f+";\n";a.unwrapPromises&&(k+='if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v='+(g?"eso(v)":"v")+";});\n}\n s="+(g?"eso(s.$$v)":"s.$$v")+"\n}\n")});k+="return s;";
h=new Function("s","l","pw","eso","fe",k);h.toString=aa(k);if(m||a.unwrapPromises)h=Ae(h,c)}"hasOwnProperty"!==b&&(e[b]=h);return h}function Xd(){var b={},a={},c={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0,expensiveChecks:!1};this.unwrapPromises=function(a){return D(a)?(c.unwrapPromises=!!a,this):c.unwrapPromises};this.logPromiseWarnings=function(a){return D(a)?(c.logPromiseWarnings=a,this):c.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(d,e,f){c.csp=e.csp;var g={csp:c.csp,
unwrapPromises:c.unwrapPromises,logPromiseWarnings:c.logPromiseWarnings,expensiveChecks:!0};ya=function(a){c.logPromiseWarnings&&!Ec.hasOwnProperty(a)&&(Ec[a]=!0,f.warn("[$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(e,f){var m;switch(typeof e){case "string":var l=f?a:b;if(l.hasOwnProperty(e))return l[e];m=f?g:c;var n=new Ub(m);m=(new gb(n,d,m)).parse(e);"hasOwnProperty"!==e&&(l[e]=m);return m;case "function":return e;
default:return v}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return De(function(a){b.$evalAsync(a)},a)}]}function De(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],m,l;return l={resolve:function(a){if(g){var c=g;g=u;m=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=
c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),J=function(d){try{l.resolve((N(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},w=function(b){try{l.resolve((N(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},t=function(b){try{l.notify((N(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,w,t]):m.then(J,w,t);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,
!1)}return g&&N(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&N(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((N(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,
when:function(h,m,l,n){var q=e(),p,s=function(b){try{return(N(m)?m:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(N(l)?l:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(N(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(s,J,w)))},function(a){p||(p=!0,q.resolve(J(a)))},function(a){p||q.notify(w(a))})});return q.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,
--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=
e;return f}]}function Yd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ib();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=
{}}function k(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function m(a,b){var c=f(a);Ya(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=
this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=ib();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=m(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!N(b)){var h=m(b||v,"listener");g.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var k=g.fn;g.fn=function(a,b,c){k.call(this,a,b,c);Ua(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ua(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,l=f(a),m=[],n={},q=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Sa(d))for(e!==m&&(e=m,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,
k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b])):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=!1,b(d,d,c)):b(d,g,c);if(h)if(T(d))if(Sa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)lb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,h,l,m=this.$$asyncQueue,r=this.$$postDigestQueue,
K,B,u=b,O,M=[],A,P,C;k("$digest");g.$$checkUrlChange();c=null;do{B=!1;for(O=this;m.length;){try{C=m.shift(),C.scope.$eval(C.expression)}catch(I){q.$$phase=null,e(I)}c=null}a:do{if(l=O.$$watchers)for(K=l.length;K--;)try{if(d=l[K])if((f=d.get(O))!==(h=d.last)&&!(d.eq?Ca(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))B=!0,c=d,d.last=d.eq?Ka(f,null):f,d.fn(f,h===n?f:h,O),5>u&&(A=4-u,M[A]||(M[A]=[]),P=N(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,P+="; newVal: "+oa(f)+"; oldVal: "+
oa(h),M[A].push(P));else if(d===c){B=!1;break a}}catch(D){q.$$phase=null,e(D)}if(!(l=O.$$childHead||O!==this&&O.$$nextSibling))for(;O!==this&&!(l=O.$$nextSibling);)O=O.$parent}while(O=l);if((B||m.length)&&!u--)throw q.$$phase=null,a("infdig",b,oa(M));}while(B||m.length);for(q.$$phase=null;r.length;)try{r.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=v,this.$on=this.$watch=function(){return v})}},
$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=Ta(c,b);-1!==d&&(c[d]=null,l(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(wa.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;
f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(wa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;
return q}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return D(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!R||8<=R)if(f=xa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ee(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw za("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(kb(b))return RegExp("^"+b.source+"$");throw za("imatcher");}function Fc(b){var a=[];D(b)&&r(b,function(b){a.push(Ee(b))});return a}function ae(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Fc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Fc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw za("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw za("icontext",
a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===u||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=xa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw za("insecurl",
d.toString());}if(c===fa.HTML)return e(d);throw za("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw za("iequirks");var e=ha(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(fa,function(a,b){var c=x(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,b)};e[ab("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,l=!1,n=!1;if(m){for(var q in m)if(l=k.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in m&&"webkit");l=!!("transition"in m||h+"Transition"in m);n=!!("animation"in m||h+"Animation"in m);!d||l&&n||(l=G(f.body.style.webkitTransition),n=G(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==R)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:R,msieDocumentMode:g}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,k){var m=c.defer(),l=m.promise,n=D(k)&&!k;h=a.defer(function(){try{m.resolve(e())}catch(a){m.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=m;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;R&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=G(b)?xa(b):b;return b.protocol===Gc.protocol&&b.host===Gc.host}function ee(){this.$get=aa(W)}function kc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Hc);a("date",Ic);a("filter",Fe);a("json",Ge);a("limitTo",He);a("lowercase",Ie);a("number",Jc);a("orderBy",Kc);a("uppercase",Je)}function Fe(){return function(b,
a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Xa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&lb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h)&&d.push(h)}return d}}function Hc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return Lc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Lc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Lc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],m=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(h=g,m=!0)}if(m)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Mc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Mc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,m=0;m<l;m++)0===(l-m)%q&&0!==m&&(h+=c),h+=g.charAt(m);for(m=l;m<g.length;m++)0===(g.length-m)%n&&0!==m&&(h+=c),h+=g.charAt(m);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,
e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Vb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=La(a?"SHORT"+b:b);return d[f][e]}}function Ic(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?
a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=Ke.test(c)?U(c):a(c));jb(c)&&(c=new Date(c));
if(!va(c))return c;for(;e;)(k=Le.exec(e))?(g=g.concat(wa.call(k,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Me[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ge(){return function(b){return oa(b,!0)}}function He(){return function(b,a){if(!L(b)&&!G(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(G(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Kc(b){return function(a,c,d){function e(a,b){return Wa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(va(a)&&va(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=L(c)?c:[c];0===c.length&&(c=["+"]);c=Uc(c,function(a){var c=!1,d=a||ga;if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);
if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var m=d();return e(function(a,b){return f(a[m],b[m])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return wa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Aa(b){N(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Nc(b,a,c,d){function e(a,c){c=c?"-"+nb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||
yb,h=0,k=f.$error={},m=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$addControl=function(a){Ea(a.$name,"input");m.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(k,function(b,c){f.$setValidity(c,!0,a)});Ua(m,a)};f.$setValidity=function(a,b,c){var d=k[a];if(b)d&&(Ua(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),k[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||
e(b);if(d){if(-1!=Ta(d,c))return}else k[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Ra);f.$dirty=!1;f.$pristine=!0;r(m,function(a){a.$setPristine()})}}function ua(b,a,c,d){b.$setValidity(a,c);return c?d:u}function Oc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ne(b,
a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Oc(e,d)||!Oc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Oe),h=a[0].placeholder,k={},m=x(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(R&&"input"===(e||k).type&&a[0].placeholder!==h)h=a[0].placeholder;else if("password"!==m&&Wa(c.ngTrim||"T")&&
(f=$(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var q,p=function(){q||(q=f.defer(function(){n();q=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?
(s=RegExp(e[1],e[2]),e=function(a){return ua(d,"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw z("ngPattern")("noregexp",s,e,ia(a));return ua(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return ua(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var w=U(c.ngMaxlength);e=function(a){return ua(d,"maxlength",d.$isEmpty(a)||
a.length<=w,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(G(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<
b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(b){if(!0===a||f.$index%2===a){var m=e(b||[]);if(!l){var p=k(m,1);h.$addClass(p)}else if(!Ca(b,l)){var s=e(l),p=d(m,s),m=d(s,m),m=k(m,-1),p=k(p,1);0===p.length?c.removeClass(g,m):0===m.length?c.addClass(g,p):c.setClass(g,p,m)}}l=ha(b)}var l;f.$watch(h[b],m,!0);h.$observe("class",function(a){m(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));
g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Oe="validity",x=function(b){return G(b)?b.toLowerCase():b},lb=Object.prototype.hasOwnProperty,La=function(b){return G(b)?b.toUpperCase():b},R,A,Fa,wa=[].slice,Pe=[].push,Ba=Object.prototype.toString,Va=z("ng"),Xa=W.angular||(W.angular={}),$a,Pa,na=["0","0","0"];R=U((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(R)&&(R=U((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));v.$inject=[];ga.$inject=[];var L=
function(){return N(Array.isArray)?Array.isArray:function(b){return"[object Array]"===Ba.call(b)}}(),$=function(){return String.prototype.trim?function(b){return G(b)?b.trim():b}:function(b){return G(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Pa=9>R?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?La(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Za=function(){if(D(Za.isActive_))return Za.isActive_;var b=!(!X.querySelector("[ng-csp]")&&
!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},Xc=/[A-Z]/g,$c={full:"1.2.27",major:1,minor:2,dot:27,codeName:"prime-factorization"};S.expando="ng339";var cb=S.cache={},me=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},bb=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||
{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Hb=z("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=
da.caption=da.thead;da.th=da.td;var Oa=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Pe,sort:[].sort,splice:[].splice},rb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){rb[x(b)]=b});
var pc={};r("input select option textarea button form details".split(" "),function(b){pc[La(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:qb,scope:function(b){return A.data(b,"$scope")||qb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:mc,injector:function(b){return qb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,
a,c){a=ab(a);if(D(c))b.style[a]=c;else{var d;8>=R&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=R&&(d=""===d?u:d);return d}},attr:function(b,a,c){var d=x(a);if(rb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:u;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,
d){var e=a[b.nodeType];if(F(d))return e?b[e]:"";b[e]=d}var a=[];9>R?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(F(a)){if("SELECT"===Pa(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ma(d[c]);b.innerHTML=a},empty:nc},function(b,a){S.prototype[a]=function(a,d){var e,
f,g=this.length;if(b!==nc&&(2==b.length&&b!==Nb&&b!==mc?a:d)===u){if(T(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ma,on:function a(c,d,e,f){if(D(f))throw Hb("onargs");var g=pa(c,"events"),h=pa(c,"handle");g||pa(c,"events",g={});h||pa(c,"handle",h=ne(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==
d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},
off:lc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ma(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,
c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ma(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:pb,removeClass:ob,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Nb(a,c));(f?pb:ob)(a,c)})},parent:function(a){return(a=
a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(pa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:v,type:e,target:a},
c.type&&(e=E(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)F(g)?(g=a(this[h],c,e,f),D(g)&&(g=A(g))):Jb(g,a(this[h],c,e,f));return D(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var pe=
/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,eb=z("$injector"),Qe=z("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qe("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",
function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){pb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){pb(a,c);ob(a,g)});h&&d(h)},enabled:v}}]}],ja=z("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];
var we=/^(x[\:\-_]|data[\:\-_])/i,wc=z("$interpolate"),Re=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ze={http:80,https:443,ftp:21},Sb=z("$location");Ac.prototype=Tb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(F(a))return this.$$url;a=Re.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Bc("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||jb(a))a=a.toString(),this.$$search=cc(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=z("$parse"),Ec=
{},ya,Se=Function.prototype.call,Te=Function.prototype.apply,Pc=Function.prototype.bind,hb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^
e(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ue={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ub=function(a){this.options=a};Ub.prototype={constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=u;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=hb[this.ch],e=hb[a],f=hb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+
1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},
throwError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-
1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;
else break}d={index:d,text:c};if(hb.hasOwnProperty(c))d.fn=hb[c],d.literal=!0,d.constant=!0;else{var k=Dc(c,this.options,this.text);d.fn=E(function(a,c){return k(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+
1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ue[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var gb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};gb.ZERO=E(function(){return 0},{constant:!0});gb.prototype={constructor:gb,
parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=
!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===
a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,
f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var k=0;k<d.length;k++)h.push(d[k](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(gb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return E(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f),k;ka(h,c.text);if(!g)return u;(g=ma(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&
(k=g,"$$v"in g||(k.$$v=u,k.then(function(a){k.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=ka(d(e,g),c.text);(g=ma(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],k=c?c(f,g):f,m=0;m<d.length;m++)h.push(ma(d[m](f,g),e.text));m=a(f,g,k)||v;ma(k,e.text);var l=e.text;if(m){if(m.constructor===m)throw la("isecfn",
l);if(m===Se||m===Te||Pc&&m===Pc)throw la("isecff",l);}h=m.apply?m.apply(k,h):m(h[0],h[1],h[2],h[3],h[4]);return ma(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},k=0;k<a.length;k++){var m=a[k];e[m.key]=m.value(c,d)}return e},{literal:!0,constant:c})}};var Ce={},Be={},za=z("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Gc=xa(W.location.href,!0);kc.$inject=["$provide"];Hc.$inject=["$locale"];Jc.$inject=["$locale"];
var Mc=".",Me={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Vb(Math[0<
a?"floor":"ceil"](a/60),2)+Vb(Math.abs(a%60),2))}},Le=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ke=/^\-?\d+$/;Ic.$inject=["$locale"];var Ie=aa(x),Je=aa(La);Kc.$inject=["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=R&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ba.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(rb,function(a,c){if("multiple"!=a){var d=qa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=qa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ba.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),R&&g&&e.prop(g,f[h])):"href"===
a&&f.$set(h,null)})}}}});var yb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Nc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Nc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){bb(e[0],"submit",h)},0,!1)})}var k=e.parent().controller("form"),
m=f.name||f.ngForm;m&&ub(a,m,g,m);if(k)e.on("$destroy",function(){k.$removeControl(g);m&&ub(a,m,u,m);E(g,yb)})}}}}}]},dd=Qc(),qd=Qc(!0),Ve=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,We=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Xe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Xe.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return u});Ne(e,"number",Ye,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ua(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ua(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ua(e,"number",e.$isEmpty(a)||
jb(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"url",e.$isEmpty(a)||Ve.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"email",e.$isEmpty(a)||We.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){F(d.name)&&c.attr("name",ib());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;G(f)||(f=!0);G(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:v,button:v,submit:v,reset:v,file:v},Ye=["badInput"],hc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Rc[x(f.type)]||Rc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Ra="ng-pristine",zb="ng-dirty",Ze=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+nb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var k=f(d.ngModel),m=k.assign;if(!m)throw z("ngModel")("nonassign",d.ngModel,ia(e));this.$render=v;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,q=this.$error={};e.addClass(Ra);h(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Ra)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=k(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=
c,p.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Ze,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push($(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):u});e.$isEmpty=function(a){return!a||!a.length}}}},$e=/^(true|false|\d+)$/,Id=function(){return{priority:100,
compile:function(a,c){return $e.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},id=Aa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==u?"":a)})}}}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var h=c(g.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){f.html(a.getTrustedHtml(h(d))||"")})}}}}],ld=Wb("",!0),nd=Wb("Odd",0),md=Wb("Even",1),od=Aa({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={},af={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=qa("ng-"+a);jc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var h=d(g[c],!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};af[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,m;c.$watch(e.ngIf,function(f){Wa(f)?k||(k=c.$new(),g(k,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.remove(),m=null),k&&(k.$destroy(),k=null),h&&(m=Eb(h.clone),a.leave(m,function(){m=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Xa.noop,compile:function(g,h){var k=h.ngInclude||h.src,m=h.onload||"",l=h.autoscroll;return function(g,h,p,r,J){var w=0,t,y,u,B=function(){y&&(y.remove(),y=null);t&&(t.$destroy(),t=null);
u&&(e.leave(u,function(){y=null}),y=u,u=null)};g.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!D(l)||l&&!g.$eval(l)||d()},p=++w;f?(a.get(f,{cache:c}).success(function(a){if(p===w){var c=g.$new();r.template=a;a=J(c,function(a){B();e.enter(a,null,h,k)});t=c;u=a;t.$emit("$includeContentLoaded");g.$eval(m)}}).error(function(){p===w&&B()}),g.$emit("$includeContentRequested")):(B(),r.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],ud=Aa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=Aa({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),m=g.offset||0,l=e.$eval(k)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+m+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-m));return n[c](e,f,!0)},function(a){f.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,k){var m=g.ngRepeat,l=m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,s,u,w,t={$id:Na};if(!l)throw d("iexp",
m);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){w&&(t[w]=a);t[u]=c;t.$index=d;return n(e,t)}):(p=function(a,c){return Na(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);u=l[3]||l[1];w=l[2];var y={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,t={},D,C,I,x,G,v,z,F=[];if(Sa(a))v=a,G=q||p;else{G=q||s;v=[];for(I in a)a.hasOwnProperty(I)&&"$"!=I.charAt(0)&&v.push(I);v.sort()}D=v.length;h=F.length=v.length;for(g=0;g<h;g++)if(I=a===
v?g:v[g],x=a[I],n=G(I,x,g),Ea(n,"`track by` id"),y.hasOwnProperty(n))z=y[n],delete y[n],t[n]=z,F[g]=z;else{if(t.hasOwnProperty(n))throw r(F,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",m,n,oa(x));F[g]={id:n};t[n]=!1}for(I in y)y.hasOwnProperty(I)&&(z=y[I],g=Eb(z.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());g=0;for(h=v.length;g<h;g++){I=a===v?g:v[g];x=a[I];z=F[g];F[g-1]&&(l=F[g-1].clone[F[g-1].clone.length-1]);if(z.scope){C=z.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
z.clone[0]!=n&&c.move(Eb(z.clone),null,A(l));l=z.clone[z.clone.length-1]}else C=e.$new();C[u]=x;w&&(C[w]=I);C.$index=g;C.$first=0===g;C.$last=g===D-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));z.scope||k(C,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+m+" ");c.enter(a,null,A(l));l=a;z.scope=C;z.clone=a;t[z.id]=z})}y=t})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Wa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Wa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=Aa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],m=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q;n=0;for(q=k.length;n<q;++n)k[n].remove();n=k.length=0;for(q=
m.length;n<q;++n){var p=h[n];m[n].$destroy();k[n]=p;a.leave(p,function(){k.splice(n,1)})}h.length=0;m.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Cd=
Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ed=Aa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],bf=z("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,m={},l=e,n;k.databound=d.ngModel;k.init=function(a,c,d){l=a;n=d};k.addOption=function(c){Ea(c,'"option value"');m[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
k.removeOption=function(a){this.hasOption(a)&&(delete m[a],l.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};k.hasOption=function(a){return m.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=v})}],link:function(e,g,h,k){function m(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new db(d.$viewValue);r(c.find("option"),function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){Ca(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
s,u,v;s=g.$modelValue;u=A(e)||[];var F=n?Xb(u):u,G,Q,C;Q={};C=!1;if(p)if(k=g.$modelValue,w&&L(k))for(C=new db([]),d={},v=0;v<k.length;v++)d[m]=k[v],C.put(w(e,d),k[v]);else C=new db(k);v=C;var E,K;for(C=0;G=F.length,C<G;C++){k=C;if(n){k=F[C];if("$"===k.charAt(0))continue;Q[n]=k}Q[m]=u[k];d=r(e,Q)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=D(v.remove(w?w(e,Q):x(e,Q))):(w?(d={},d[m]=s,d=w(e,d)===w(e,Q)):d=s===x(e,Q),v=v||d);E=l(e,Q);E=D(E)?E:"";k.push({id:w?w(e,Q):n?F[C]:C,label:E,selected:d})}p||(z||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));Q=0;for(F=c.length;Q<F;Q++){d=c[Q];k=a[d];B.length<=Q?(s={element:y.clone().attr("label",d),label:k.label},u=[s],B.push(u),f.append(s.element)):(u=B[Q],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;C=0;for(G=k.length;C<G;C++)d=k[C],(v=u[C+1])?(E=v.element,v.label!==d.label&&(E.text(v.label=d.label),E.prop("label",v.label)),v.id!==d.id&&E.val(v.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",
v.selected=d.selected),R&&E.prop("selected",v.selected))):(""===d.id&&z?K=z:(K=t.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),u.push({element:K,label:d.label,id:d.id,selected:d.selected}),q.addOption(d.label,K),E?E.after(K):s.element.append(K),E=K);for(C++;u.length>C;)d=u.pop(),q.removeOption(d.label),d.element.remove()}for(;B.length>Q;)B.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw bf("iexp",s,ia(f));var l=c(k[2]||k[1]),
m=k[4]||k[6],n=k[5],r=c(k[3]||""),x=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},k,l,q,r,s,t,v;if(p)for(l=[],r=0,t=B.length;r<t;r++)for(a=B[r],q=1,s=a.length;q<s;q++){if((k=a[q].element)[0].selected){k=k.val();n&&(d[n]=k);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=k);v++);else d[m]=c[k];l.push(x(e,d))}}else if(k=f.val(),"?"==k)l=u;else if(""===
k)l=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==k){l=x(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=x(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(A,h);e.$watchCollection(function(){var a={},c=A(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},h);p&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var q=k[0];k=k[1];var p=h.multiple,s=h.ngOptions,z=!1,w,t=A(X.createElement("option")),y=A(X.createElement("optgroup")),
x=t.clone();h=0;for(var B=g.children(),v=B.length;h<v;h++)if(""===B[h].value){w=z=B.eq(h);break}q.init(k,z,x);p&&(k.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,k):p?l(e,g,k):m(e,g,k,q)}}}}],hd=["$interpolate",function(a){var c={addOption:v,removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var m=d.parent(),l=m.data("$selectController")||m.parent().data("$selectController");l&&l.databound?
d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=aa({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Fa=W.jQuery)&&Fa.fn.on?(A=Fa,E(Fa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",
!1,!1,!1),Gb("html",!1,!1,!0)):A=S,Xa.element=A,Zc(Xa),A(X).ready(function(){Wc(X,dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 AngularJS v1.2.27
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.2.27
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){h.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});k=d.scope=b;k.$emit("$viewContentLoaded");k.$eval(u)}else y()}
var k,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,c){var b=h.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var h={};this.when=function(a,c){h[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,k){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=k.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(h,function(f,h){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;
else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:h,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",function(){this.$get=function(){return{}}});
n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$interval","$transition",function(a,b,c,d){function e(){f();var b=+a.interval;!isNaN(b)&&b>0&&(h=c(g,b))}function f(){h&&(c.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(c,f){function g(){if(!m){if(j.currentSlide&&angular.isString(f)&&!a.noTransition&&c.$element){c.$element.addClass(f);{c.$element[0].offsetWidth}angular.forEach(k,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(c,{direction:f,active:!0,entering:!0}),angular.extend(j.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=d(c.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(c,j.currentSlide)}else h(c,j.currentSlide);j.currentSlide=c,l=i,e()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var i=k.indexOf(c);void 0===f&&(f=i>l?"next":"prev"),c&&c!==j.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){m=!0}),j.indexOfSlide=function(a){return k.indexOf(a)},a.next=function(){var b=(l+1)%k.length;return a.$currentTransition?void 0:j.select(k[b],"next")},a.prev=function(){var b=0>l-1?k.length-1:l-1;return a.$currentTransition?void 0:j.select(k[b],"prev")},a.isActive=function(a){return j.currentSlide===a},a.$watch("interval",e),a.$on("$destroy",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){if(b){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})}},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()
})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(e,f,g,h,i,j){return function(e,k,l){function m(a){var b=a||n.trigger||l,d=c[b]||b;return{show:b,hide:d}}var n=angular.extend({},b,d),o=a(e),p=j.startSymbol(),q=j.endSymbol(),r="<div "+o+'-popup title="'+p+"title"+q+'" content="'+p+"content"+q+'" placement="'+p+"placement"+q+'" animation="animation" is-open="isOpen"></div>';return{restrict:"EA",compile:function(){var a=f(r);return function(b,c,d){function f(){D.isOpen?l():j()}function j(){(!C||b.$eval(d[k+"Enable"]))&&(s(),D.popupDelay?z||(z=g(o,D.popupDelay,!1),z.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return z=null,y&&(g.cancel(y),y=null),D.content?(q(),w.css({top:0,left:0,display:"block"}),A?h.find("body").append(w):c.after(w),E(),D.isOpen=!0,D.$digest(),E):angular.noop}function p(){D.isOpen=!1,g.cancel(z),z=null,D.animation?y||(y=g(r,500)):r()}function q(){w&&r(),x=D.$new(),w=a(x,angular.noop)}function r(){y=null,w&&(w.remove(),w=null),x&&(x.$destroy(),x=null)}function s(){t(),u()}function t(){var a=d[k+"Placement"];D.placement=angular.isDefined(a)?a:n.placement}function u(){var a=d[k+"PopupDelay"],b=parseInt(a,10);D.popupDelay=isNaN(b)?n.popupDelay:b}function v(){var a=d[k+"Trigger"];F(),B=m(a),B.show===B.hide?c.bind(B.show,f):(c.bind(B.show,j),c.bind(B.hide,l))}var w,x,y,z,A=angular.isDefined(n.appendToBody)?n.appendToBody:!1,B=m(void 0),C=angular.isDefined(d[k+"Enable"]),D=b.$new(!0),E=function(){var a=i.positionElements(c,w,D.placement,A);a.top+="px",a.left+="px",w.css(a)};D.isOpen=!1,d.$observe(e,function(a){D.content=a,!a&&D.isOpen&&p()}),d.$observe(k+"Title",function(a){D.title=a});var F=function(){c.unbind(B.show,j),c.unbind(B.hide,l)};v();var G=b.$eval(d[k+"Animation"]);D.animation=angular.isDefined(G)?!!G:n.animation;var H=b.$eval(d[k+"AppendToBody"]);A=angular.isDefined(H)?H:A,A&&b.$on("$locationChangeSuccess",function(){D.isOpen&&p()}),b.$on("$destroy",function(){g.cancel(y),g.cancel(z),F(),r(),D=null})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y="typeahead-"+x.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":y});var z=angular.element("<div typeahead-popup></div>");z.attr({id:y,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr("template-url",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr("aria-expanded",!1)},B=function(a){return y+"-option-"+a};x.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind("blur",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind("click",G),i.$on("$destroy",function(){e.unbind("click",G),t&&H.remove()});var H=a(z)(x);t?e.find("body").append(H):j.after(H)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}});
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$interval","$transition",function(a,b,c,d){function e(){f();var b=+a.interval;!isNaN(b)&&b>0&&(h=c(g,b))}function f(){h&&(c.cancel(h),h=null)}function g(){var b=+a.interval;i&&!isNaN(b)&&b>0?a.next():a.pause()}var h,i,j=this,k=j.slides=a.slides=[],l=-1;j.currentSlide=null;var m=!1;j.select=a.select=function(c,f){function g(){if(!m){if(j.currentSlide&&angular.isString(f)&&!a.noTransition&&c.$element){c.$element.addClass(f);{c.$element[0].offsetWidth}angular.forEach(k,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(c,{direction:f,active:!0,entering:!0}),angular.extend(j.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=d(c.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(c,j.currentSlide)}else h(c,j.currentSlide);j.currentSlide=c,l=i,e()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var i=k.indexOf(c);void 0===f&&(f=i>l?"next":"prev"),c&&c!==j.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){m=!0}),j.indexOfSlide=function(a){return k.indexOf(a)},a.next=function(){var b=(l+1)%k.length;return a.$currentTransition?void 0:j.select(k[b],"next")},a.prev=function(){var b=0>l-1?k.length-1:l-1;return a.$currentTransition?void 0:j.select(k[b],"prev")},a.isActive=function(a){return j.currentSlide===a},a.$watch("interval",e),a.$on("$destroy",f),a.play=function(){i||(i=!0,e())},a.pause=function(){a.noPause||(i=!1,f())},j.addSlide=function(b,c){b.$element=c,k.push(b),1===k.length||b.active?(j.select(k[k.length-1]),1==k.length&&a.play()):b.active=!1},j.removeSlide=function(a){var b=k.indexOf(a);k.splice(b,1),k.length>0&&a.active?j.select(b>=k.length?k[b-1]:k[b]):l>b&&l--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a){var c=[],d=a.split("");return angular.forEach(e,function(b,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:b(c,"index")}}function d(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var e={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.parse=function(b,e){if(!angular.isString(b)||!e)return b;e=a.DATETIME_FORMATS[e]||e,this.parsers[e]||(this.parsers[e]=c(e));var f=this.parsers[e],g=f.regex,h=f.map,i=b.match(g);if(i&&i.length){for(var j,k={year:1900,month:0,date:1,hours:0},l=1,m=i.length;m>l;l++){var n=h[l-1];n.apply&&n.apply.call(k,i[l])}return d(k.year,k.month,k.date)&&(j=new Date(k.year,k.month,k.date,k.hours)),j}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),h.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(a){if(j[a]){var c=b(j[a]);if(h.$parent.$watch(c,function(b){h.watchData[a]=b}),r.attr(l(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;h.$watch("watchData."+a,function(a,b){a!==b&&d(h.$parent,a)})}}}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);q.remove(),p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){if(b){var c=b.getToggleElement();a&&c&&c[0].contains(a.target)||b.$apply(function(){b.isOpen=!1})}},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.getToggleElement=function(){return h.toggleElement},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b,c,d){b.backdropClass=d.backdropClass||"",b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].querySelectorAll("[autofocus]").length||d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();if(h>=0&&!k){l=e.$new(!0),l.index=h;var i=angular.element("<div modal-backdrop></div>");i.attr("backdrop-class",b.backdropClass),k=d(i)(l),f.append(k)}var j=angular.element("<div modal-window></div>");j.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var o=d(j)(b.scope);n.top().value.modalDomEl=o,f.append(o),f.addClass(m)},o.close=function(a,b){var c=n.get(a);c&&(c.value.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a);c&&(c.value.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i),b.controllerAs&&(d[b.controllerAs]=f)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()
});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(e,f,g,h,i,j){return function(e,k,l){function m(a){var b=a||n.trigger||l,d=c[b]||b;return{show:b,hide:d}}var n=angular.extend({},b,d),o=a(e),p=j.startSymbol(),q=j.endSymbol(),r="<div "+o+'-popup title="'+p+"title"+q+'" content="'+p+"content"+q+'" placement="'+p+"placement"+q+'" animation="animation" is-open="isOpen"></div>';return{restrict:"EA",compile:function(){var a=f(r);return function(b,c,d){function f(){D.isOpen?l():j()}function j(){(!C||b.$eval(d[k+"Enable"]))&&(s(),D.popupDelay?z||(z=g(o,D.popupDelay,!1),z.then(function(a){a()})):o()())}function l(){b.$apply(function(){p()})}function o(){return z=null,y&&(g.cancel(y),y=null),D.content?(q(),w.css({top:0,left:0,display:"block"}),A?h.find("body").append(w):c.after(w),E(),D.isOpen=!0,D.$digest(),E):angular.noop}function p(){D.isOpen=!1,g.cancel(z),z=null,D.animation?y||(y=g(r,500)):r()}function q(){w&&r(),x=D.$new(),w=a(x,angular.noop)}function r(){y=null,w&&(w.remove(),w=null),x&&(x.$destroy(),x=null)}function s(){t(),u()}function t(){var a=d[k+"Placement"];D.placement=angular.isDefined(a)?a:n.placement}function u(){var a=d[k+"PopupDelay"],b=parseInt(a,10);D.popupDelay=isNaN(b)?n.popupDelay:b}function v(){var a=d[k+"Trigger"];F(),B=m(a),B.show===B.hide?c.bind(B.show,f):(c.bind(B.show,j),c.bind(B.hide,l))}var w,x,y,z,A=angular.isDefined(n.appendToBody)?n.appendToBody:!1,B=m(void 0),C=angular.isDefined(d[k+"Enable"]),D=b.$new(!0),E=function(){var a=i.positionElements(c,w,D.placement,A);a.top+="px",a.left+="px",w.css(a)};D.isOpen=!1,d.$observe(e,function(a){D.content=a,!a&&D.isOpen&&p()}),d.$observe(k+"Title",function(a){D.title=a});var F=function(){c.unbind(B.show,j),c.unbind(B.hide,l)};v();var G=b.$eval(d[k+"Animation"]);D.animation=angular.isDefined(G)?!!G:n.animation;var H=b.$eval(d[k+"AppendToBody"]);A=angular.isDefined(H)?H:A,A&&b.$on("$locationChangeSuccess",function(){D.isOpen&&p()}),b.$on("$destroy",function(){g.cancel(y),g.cancel(z),F(),r(),D=null})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=i.$eval(k.typeaheadFocusFirst)!==!1,v=b(k.ngModel).assign,w=g.parse(k.typeahead),x=i.$new();i.$on("$destroy",function(){x.$destroy()});var y="typeahead-"+x.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":y});var z=angular.element("<div typeahead-popup></div>");z.attr({id:y,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&z.attr("template-url",k.typeaheadTemplateUrl);var A=function(){x.matches=[],x.activeIdx=-1,j.attr("aria-expanded",!1)},B=function(a){return y+"-option-"+a};x.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",B(a))});var C=function(a){var b={$viewValue:a};q(i,!0),c.when(w.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){x.activeIdx=u?0:-1,x.matches.length=0;for(var e=0;e<c.length;e++)b[w.itemName]=c[e],x.matches.push({id:B(e),label:w.viewMapper(x,b),model:c[e]});x.query=a,x.position=t?f.offset(j):f.position(j),x.position.top=x.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else A();d&&q(i,!1)},function(){A(),q(i,!1)})};A(),x.query=void 0;var D,E=function(a){D=d(function(){C(a)},o)},F=function(){D&&d.cancel(D)};l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(F(),E(a)):C(a):(q(i,!1),F(),A()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[w.itemName]=a,b=w.viewMapper(i,d),d[w.itemName]=void 0,c=w.viewMapper(i,d),b!==c?b:a)}),x.select=function(a){var b,c,e={};e[w.itemName]=c=x.matches[a].model,b=w.modelMapper(i,e),v(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:w.viewMapper(i,e)}),A(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==x.matches.length&&-1!==h.indexOf(a.which)&&(-1!=x.activeIdx||13!==a.which&&9!==a.which)&&(a.preventDefault(),40===a.which?(x.activeIdx=(x.activeIdx+1)%x.matches.length,x.$digest()):38===a.which?(x.activeIdx=(x.activeIdx>0?x.activeIdx:x.matches.length)-1,x.$digest()):13===a.which||9===a.which?x.$apply(function(){x.select(x.activeIdx)}):27===a.which&&(a.stopPropagation(),A(),x.$digest()))}),j.bind("blur",function(){m=!1});var G=function(a){j[0]!==a.target&&(A(),x.$digest())};e.bind("click",G),i.$on("$destroy",function(){e.unbind("click",G),t&&H.remove()});var H=a(z)(x);t?e.find("body").append(H):j.after(H)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]);
!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null!=n&&!isNaN(n)}function e(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function r(n){return n.length}function u(n){for(var t=1;n*t%1;)t*=10;return t}function i(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function o(){}function a(n){return ia+n in this}function c(n){return n=ia+n,n in this&&delete this[n]}function s(){var n=[];return this.forEach(function(t){n.push(t)}),n}function l(){var n=0;for(var t in this)t.charCodeAt(0)===oa&&++n;return n}function f(){for(var n in this)if(n.charCodeAt(0)===oa)return!1;return!0}function h(){}function g(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function p(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=aa.length;r>e;++e){var u=aa[e]+t;if(u in n)return u}}function v(){}function d(){}function m(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new o;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function y(){Zo.event.preventDefault()}function x(){for(var n,t=Zo.event;n=t.sourceEvent;)t=n;return t}function M(n){for(var t=new d,e=0,r=arguments.length;++e<r;)t[arguments[e]]=m(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Zo.event;u.target=n,Zo.event=u,t[u.type].apply(e,r)}finally{Zo.event=i}}},t}function _(n){return sa(n,pa),n}function b(n){return"function"==typeof n?n:function(){return la(n,this)}}function w(n){return"function"==typeof n?n:function(){return fa(n,this)}}function S(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Zo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function k(n){return n.trim().replace(/\s+/g," ")}function E(n){return new RegExp("(?:^|\\s+)"+Zo.requote(n)+"(?:\\s+|$)","g")}function A(n){return(n+"").trim().split(/^|\s+/)}function C(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=A(n).map(N);var u=n.length;return"function"==typeof t?r:e}function N(n){var t=E(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",k(u+" "+n))):e.setAttribute("class",k(u.replace(t," ")))}}function z(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function L(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function T(n){return"function"==typeof n?n:(n=Zo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function q(n){return{__data__:n}}function R(n){return function(){return ga(this,n)}}function D(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function P(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function U(n){return sa(n,da),n}function j(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function H(){var n=this.__transition__;n&&++n.active}function F(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Xo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Zo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=O;a>0&&(n=n.substring(0,a));var s=ya.get(n);return s&&(n=s,c=Y),a?t?u:r:t?v:i}function O(n,t){return function(e){var r=Zo.event;Zo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Zo.event=r}}}function Y(n,t){var e=O(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function I(){var n=".dragsuppress-"+ ++Ma,t="click"+n,e=Zo.select(Wo).on("touchmove"+n,y).on("dragstart"+n,y).on("selectstart"+n,y);if(xa){var r=Bo.style,u=r[xa];r[xa]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),xa&&(r[xa]=u),i&&(e.on(t,function(){y(),o()},!0),setTimeout(o,0))}}function Z(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>_a&&(Wo.scrollX||Wo.scrollY)){e=Zo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();_a=!(u.f||u.e),e.remove()}return _a?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function V(){return Zo.event.changedTouches[0].identifier}function X(){return Zo.event.target}function $(){return Wo}function B(n){return n>0?1:0>n?-1:0}function W(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function J(n){return n>1?0:-1>n?ba:Math.acos(n)}function G(n){return n>1?Sa:-1>n?-Sa:Math.asin(n)}function K(n){return((n=Math.exp(n))-1/n)/2}function Q(n){return((n=Math.exp(n))+1/n)/2}function nt(n){return((n=Math.exp(2*n))-1)/(n+1)}function tt(n){return(n=Math.sin(n/2))*n}function et(){}function rt(n,t,e){return this instanceof rt?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof rt?new rt(n.h,n.s,n.l):mt(""+n,yt,rt):new rt(n,t,e)}function ut(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new gt(u(n+120),u(n),u(n-120))}function it(n,t,e){return this instanceof it?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof it?new it(n.h,n.c,n.l):n instanceof at?st(n.l,n.a,n.b):st((n=xt((n=Zo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new it(n,t,e)}function ot(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new at(e,Math.cos(n*=Aa)*t,Math.sin(n)*t)}function at(n,t,e){return this instanceof at?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof at?new at(n.l,n.a,n.b):n instanceof it?ot(n.l,n.c,n.h):xt((n=gt(n)).r,n.g,n.b):new at(n,t,e)}function ct(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=lt(u)*ja,r=lt(r)*Ha,i=lt(i)*Fa,new gt(ht(3.2404542*u-1.5371385*r-.4985314*i),ht(-.969266*u+1.8760108*r+.041556*i),ht(.0556434*u-.2040259*r+1.0572252*i))}function st(n,t,e){return n>0?new it(Math.atan2(e,t)*Ca,Math.sqrt(t*t+e*e),n):new it(0/0,0/0,n)}function lt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function ft(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function ht(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function gt(n,t,e){return this instanceof gt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof gt?new gt(n.r,n.g,n.b):mt(""+n,gt,ut):new gt(n,t,e)}function pt(n){return new gt(n>>16,255&n>>8,255&n)}function vt(n){return pt(n)+""}function dt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function mt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(_t(u[0]),_t(u[1]),_t(u[2]))}return(i=Ia.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.substring(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function yt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new rt(r,u,c)}function xt(n,t,e){n=Mt(n),t=Mt(t),e=Mt(e);var r=ft((.4124564*n+.3575761*t+.1804375*e)/ja),u=ft((.2126729*n+.7151522*t+.072175*e)/Ha),i=ft((.0193339*n+.119192*t+.9503041*e)/Fa);return at(116*u-16,500*(r-u),200*(u-i))}function Mt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function _t(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function bt(n){return"function"==typeof n?n:function(){return n}}function wt(n){return n}function St(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),kt(t,e,n,r)}}function kt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Zo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Wo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Zo.event;Zo.event=n;try{o.progress.call(i,c)}finally{Zo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Xo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Zo.rebind(i,o,"on"),null==r?i:i.get(Et(r))}function Et(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function At(){var n=Ct(),t=Nt()-n;t>24?(isFinite(t)&&(clearTimeout($a),$a=setTimeout(At,t)),Xa=0):(Xa=1,Wa(At))}function Ct(){var n=Date.now();for(Ba=Za;Ba;)n>=Ba.t&&(Ba.f=Ba.c(n-Ba.t)),Ba=Ba.n;return n}function Nt(){for(var n,t=Za,e=1/0;t;)t.f?t=n?n.n=t.n:Za=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Va=n,e}function zt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Lt(n,t){var e=Math.pow(10,3*ua(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Tt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:wt;return function(n){var e=Ga.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=Ka.get(g)||qt;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Zo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function qt(n){return n+""}function Rt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Dt(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new nc(e-1)),1),e}function i(n,e){return t(n=new nc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{nc=Rt;var r=new Rt;return r._=n,o(r,t,e)}finally{nc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Pt(n);return c.floor=c,c.round=Pt(r),c.ceil=Pt(u),c.offset=Pt(i),c.range=a,n}function Pt(n){return function(t,e){try{nc=Rt;var r=new Rt;return r._=t,n(r,e)._}finally{nc=Date}}}function Ut(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=ec[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&nc!==Rt,o=new(i?Rt:nc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in ec?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{nc=Rt;var t=new nc;return t._=n,r(t)}finally{nc=Date}}var r=t(n);return e.parse=function(n){try{nc=Rt;var t=r.parse(n);return t&&t._}finally{nc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=re;var x=Zo.map(),M=Ht(v),_=Ft(v),b=Ht(d),w=Ft(d),S=Ht(m),k=Ft(m),E=Ht(y),A=Ft(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return jt(n.getDate(),t,2)},e:function(n,t){return jt(n.getDate(),t,2)},H:function(n,t){return jt(n.getHours(),t,2)},I:function(n,t){return jt(n.getHours()%12||12,t,2)},j:function(n,t){return jt(1+Qa.dayOfYear(n),t,3)},L:function(n,t){return jt(n.getMilliseconds(),t,3)},m:function(n,t){return jt(n.getMonth()+1,t,2)},M:function(n,t){return jt(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return jt(n.getSeconds(),t,2)},U:function(n,t){return jt(Qa.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return jt(Qa.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return jt(n.getFullYear()%100,t,2)},Y:function(n,t){return jt(n.getFullYear()%1e4,t,4)},Z:te,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Wt,e:Wt,H:Gt,I:Gt,j:Jt,L:ne,m:Bt,M:Kt,p:l,S:Qt,U:Yt,w:Ot,W:It,x:c,X:s,y:Vt,Y:Zt,Z:Xt,"%":ee};return t}function jt(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Ht(n){return new RegExp("^(?:"+n.map(Zo.requote).join("|")+")","i")}function Ft(n){for(var t=new o,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Ot(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Yt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function It(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Zt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Vt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.y=$t(+r[0]),e+r[0].length):-1}function Xt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=-t,e+5):-1}function $t(n){return n+(n>68?1900:2e3)}function Bt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Wt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function Jt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function Gt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Kt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Qt(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ne(n,t,e){rc.lastIndex=0;var r=rc.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function te(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(ua(t)/60),u=ua(t)%60;return e+jt(r,"0",2)+jt(u,"0",2)}function ee(n,t,e){uc.lastIndex=0;var r=uc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function re(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ue(){}function ie(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function oe(n,t){n&&cc.hasOwnProperty(n.type)&&cc[n.type](n,t)}function ae(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function ce(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)ae(n[e],t,1);t.polygonEnd()}function se(){function n(n,t){n*=Aa,t=t*Aa/2+ba/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);lc.add(Math.atan2(h,f)),r=n,u=c,i=s}var t,e,r,u,i;fc.point=function(o,a){fc.point=n,r=(t=o)*Aa,u=Math.cos(a=(e=a)*Aa/2+ba/4),i=Math.sin(a)},fc.lineEnd=function(){n(t,e)}}function le(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function fe(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function he(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function ge(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function pe(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function ve(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function de(n){return[Math.atan2(n[1],n[0]),G(n[2])]}function me(n,t){return ua(n[0]-t[0])<ka&&ua(n[1]-t[1])<ka}function ye(n,t){n*=Aa;var e=Math.cos(t*=Aa);xe(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function xe(n,t,e){++hc,pc+=(n-pc)/hc,vc+=(t-vc)/hc,dc+=(e-dc)/hc}function Me(){function n(n,u){n*=Aa;var i=Math.cos(u*=Aa),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);gc+=s,mc+=s*(t+(t=o)),yc+=s*(e+(e=a)),xc+=s*(r+(r=c)),xe(t,e,r)}var t,e,r;wc.point=function(u,i){u*=Aa;var o=Math.cos(i*=Aa);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),wc.point=n,xe(t,e,r)}}function _e(){wc.point=ye}function be(){function n(n,t){n*=Aa;var e=Math.cos(t*=Aa),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-J(g)/h,v=Math.atan2(h,g);Mc+=p*s,_c+=p*l,bc+=p*f,gc+=v,mc+=v*(r+(r=o)),yc+=v*(u+(u=a)),xc+=v*(i+(i=c)),xe(r,u,i)}var t,e,r,u,i;wc.point=function(o,a){t=o,e=a,wc.point=n,o*=Aa;var c=Math.cos(a*=Aa);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),xe(r,u,i)},wc.lineEnd=function(){n(t,e),wc.lineEnd=_e,wc.point=ye}}function we(){return!0}function Se(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(me(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new Ee(e,n,null,!0),s=new Ee(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new Ee(r,n,null,!1),s=new Ee(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),ke(i),ke(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function ke(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Ee(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Ae(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Ce))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Zo.merge(g);var n=Le(m,p);g.length?(_||(i.polygonStart(),_=!0),Se(g,ze,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=Ne(),M=t(x),_=!1;return y}}function Ce(n){return n.length>1}function Ne(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:v,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function ze(n,t){return((n=n.x)[0]<0?n[1]-Sa-ka:Sa-n[1])-((t=t.x)[0]<0?t[1]-Sa-ka:Sa-t[1])}function Le(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;lc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+ba/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+ba/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>ba,k=p*x;if(lc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*wa:_,S^h>=e^m>=e){var E=he(le(f),le(n));ve(E);var A=he(u,E);ve(A);var C=(S^_>=0?-1:1)*G(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-ka>i||ka>i&&0>lc)^1&o}function Te(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?ba:-ba,c=ua(i-e);ua(c-ba)<ka?(n.point(e,r=(r+o)/2>0?Sa:-Sa),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=ba&&(ua(e-u)<ka&&(e-=u*ka),ua(i-a)<ka&&(i-=a*ka),r=qe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function qe(n,t,e,r){var u,i,o=Math.sin(n-e);return ua(o)>ka?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Re(n,t,e,r){var u;if(null==n)u=e*Sa,r.point(-ba,u),r.point(0,u),r.point(ba,u),r.point(ba,0),r.point(ba,-u),r.point(0,-u),r.point(-ba,-u),r.point(-ba,0),r.point(-ba,u);else if(ua(n[0]-t[0])>ka){var i=n[0]<t[0]?ba:-ba;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function De(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?ba:-ba),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(me(e,g)||me(p,g))&&(p[0]+=ka,p[1]+=ka,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&me(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=le(n),u=le(t),o=[1,0,0],a=he(r,u),c=fe(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=he(o,a),p=pe(o,f),v=pe(a,h);ge(p,v);var d=g,m=fe(p,d),y=fe(d,d),x=m*m-y*(fe(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=pe(d,(-m-M)/y);if(ge(_,p),_=de(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=ua(A-ba)<ka,N=C||ka>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(ua(_[0]-w)<ka?k:E):k<=_[1]&&_[1]<=E:A>ba^(w<=_[0]&&_[0]<=S)){var z=pe(d,(-m+M)/y);return ge(z,p),[_,de(z)]}}}function u(t,e){var r=o?n:ba-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ua(i)>ka,c=sr(n,6*Aa);return Ae(t,e,c,o?[0,-n]:[-ba,n-ba])}function Pe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Ue(n,t,e,r){function u(r,u){return ua(r[0]-n)<ka?u>0?0:3:ua(r[0]-e)<ka?u>0?2:1:ua(r[1]-t)<ka?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&W(s,i,n)>0&&++t:i[1]<=r&&W(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-kc,Math.min(kc,n)),t=Math.max(-kc,Math.min(kc,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=Ne(),C=Pe(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Zo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&Se(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function je(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function He(n){var t=0,e=ba/3,r=tr(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ba/180,e=n[1]*ba/180):[180*(t/ba),180*(e/ba)]},u}function Fe(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,G((i-(n*n+e*e)*u*u)/(2*u))]},e}function Oe(){function n(n,t){Ac+=u*n-r*t,r=n,u=t}var t,e,r,u;Tc.point=function(i,o){Tc.point=n,t=r=i,e=u=o},Tc.lineEnd=function(){n(t,e)}}function Ye(n,t){Cc>n&&(Cc=n),n>zc&&(zc=n),Nc>t&&(Nc=t),t>Lc&&(Lc=t)}function Ie(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Ze(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Ze(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Ze(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Ve(n,t){pc+=n,vc+=t,++dc}function Xe(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);mc+=o*(t+n)/2,yc+=o*(e+r)/2,xc+=o,Ve(t=n,e=r)}var t,e;Rc.point=function(r,u){Rc.point=n,Ve(t=r,e=u)}}function $e(){Rc.point=Ve}function Be(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);mc+=o*(r+n)/2,yc+=o*(u+t)/2,xc+=o,o=u*n-r*t,Mc+=o*(r+n),_c+=o*(u+t),bc+=3*o,Ve(r=n,u=t)}var t,e,r,u;Rc.point=function(i,o){Rc.point=n,Ve(t=r=i,e=u=o)},Rc.lineEnd=function(){n(t,e)}}function We(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,wa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:v};return a}function Je(n){function t(n){return(a?r:e)(n)}function e(t){return Qe(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=le([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=ua(ua(w)-1)<ka||ua(r-h)<ka?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],z=C-t,L=N-e,T=x*z-y*L;(T*T/M>i||ua((y*z+x*L)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Aa),a=16;
return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function Ge(n){var t=Je(function(t,e){return n([t*Ca,e*Ca])});return function(n){return er(t(n))}}function Ke(n){this.stream=n}function Qe(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function nr(n){return tr(function(){return n})()}function tr(n){function t(n){return n=a(n[0]*Aa,n[1]*Aa),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*Ca,n[1]*Ca]}function r(){a=je(o=ir(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=Je(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Sc,_=wt,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=er(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Sc):De((b=+n)*Aa),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Ue(n[0][0],n[0][1],n[1][0],n[1][1]):wt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Aa,d=n[1]%360*Aa,r()):[v*Ca,d*Ca]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Aa,y=n[1]%360*Aa,x=n.length>2?n[2]%360*Aa:0,r()):[m*Ca,y*Ca,x*Ca]},Zo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function er(n){return Qe(n,function(t,e){n.point(t*Aa,e*Aa)})}function rr(n,t){return[n,t]}function ur(n,t){return[n>ba?n-wa:-ba>n?n+wa:n,t]}function ir(n,t,e){return n?t||e?je(ar(n),cr(t,e)):ar(n):t||e?cr(t,e):ur}function or(n){return function(t,e){return t+=n,[t>ba?t-wa:-ba>t?t+wa:t,e]}}function ar(n){var t=or(n);return t.invert=or(-n),t}function cr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),G(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),G(l*r-a*u)]},e}function sr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=lr(e,u),i=lr(e,i),(o>0?i>u:u>i)&&(u+=o*wa)):(u=n+o*wa,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=de([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function lr(n,t){var e=le(t);e[0]-=n,ve(e);var r=J(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-ka)%(2*Math.PI)}function fr(n,t,e){var r=Zo.range(n,t-ka,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function hr(n,t,e){var r=Zo.range(n,t-ka,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function gr(n){return n.source}function pr(n){return n.target}function vr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(tt(r-t)+u*o*tt(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ca,Math.atan2(o,Math.sqrt(r*r+u*u))*Ca]}:function(){return[n*Ca,t*Ca]};return p.distance=h,p}function dr(){function n(n,u){var i=Math.sin(u*=Aa),o=Math.cos(u),a=ua((n*=Aa)-t),c=Math.cos(a);Dc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Pc.point=function(u,i){t=u*Aa,e=Math.sin(i*=Aa),r=Math.cos(i),Pc.point=n},Pc.lineEnd=function(){Pc.point=Pc.lineEnd=v}}function mr(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function yr(n,t){function e(n,t){o>0?-Sa+ka>t&&(t=-Sa+ka):t>Sa-ka&&(t=Sa-ka);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ba/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=B(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Sa]},e):Mr}function xr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ua(u)<ka?rr:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-B(u)*Math.sqrt(n*n+e*e)]},e)}function Mr(n,t){return[n,Math.log(Math.tan(ba/4+t/2))]}function _r(n){var t,e=nr(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=ba*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function br(n,t){return[Math.log(Math.tan(ba/4+t/2)),-n]}function wr(n){return n[0]}function Sr(n){return n[1]}function kr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&W(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function Er(n,t){return n[0]-t[0]||n[1]-t[1]}function Ar(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Cr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function Nr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function zr(){Gr(this),this.edge=this.site=this.circle=null}function Lr(n){var t=Bc.pop()||new zr;return t.site=n,t}function Tr(n){Yr(n),Vc.remove(n),Bc.push(n),Gr(n)}function qr(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Tr(n);for(var c=i;c.circle&&ua(e-c.circle.x)<ka&&ua(r-c.circle.cy)<ka;)i=c.P,a.unshift(c),Tr(c),c=i;a.unshift(c),Yr(c);for(var s=o;s.circle&&ua(e-s.circle.x)<ka&&ua(r-s.circle.cy)<ka;)o=s.N,a.push(s),Tr(s),s=o;a.push(s),Yr(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],Br(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Xr(c.site,s.site,null,u),Or(c),Or(s)}function Rr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Vc._;a;)if(r=Dr(a,o)-i,r>ka)a=a.L;else{if(u=i-Pr(a,o),!(u>ka)){r>-ka?(t=a.P,e=a):u>-ka?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Lr(n);if(Vc.insert(t,c),t||e){if(t===e)return Yr(t),e=Lr(t.site),Vc.insert(c,e),c.edge=e.edge=Xr(t.site,c.site),Or(t),Or(e),void 0;if(!e)return c.edge=Xr(t.site,c.site),void 0;Yr(t),Yr(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};Br(e.edge,s,p,M),c.edge=Xr(s,n,null,M),e.edge=Xr(n,p,null,M),Or(t),Or(e)}}function Dr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Pr(n,t){var e=n.N;if(e)return Dr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ur(n){this.site=n,this.edges=[]}function jr(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Zc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(ua(r-t)>ka||ua(u-e)>ka)&&(a.splice(o,0,new Wr($r(i.site,l,ua(r-f)<ka&&p-u>ka?{x:f,y:ua(t-f)<ka?e:p}:ua(u-p)<ka&&h-r>ka?{x:ua(e-p)<ka?t:h,y:p}:ua(r-h)<ka&&u-g>ka?{x:h,y:ua(t-h)<ka?e:g}:ua(u-g)<ka&&r-f>ka?{x:ua(e-g)<ka?t:f,y:g}:null),i.site,null)),++c)}function Hr(n,t){return t.angle-n.angle}function Fr(){Gr(this),this.x=this.y=this.arc=this.site=this.cy=null}function Or(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Ea)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Wc.pop()||new Fr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=$c._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}$c.insert(y,m),y||(Xc=m)}}}}function Yr(n){var t=n.circle;t&&(t.P||(Xc=t.N),$c.remove(t),Wc.push(t),Gr(t),n.circle=null)}function Ir(n){for(var t,e=Ic,r=Pe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Zr(t,n)||!r(t)||ua(t.a.x-t.b.x)<ka&&ua(t.a.y-t.b.y)<ka)&&(t.a=t.b=null,e.splice(u,1))}function Zr(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Vr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Xr(n,t,e,r){var u=new Vr(n,t);return Ic.push(u),e&&Br(u,n,t,e),r&&Br(u,t,n,r),Zc[n.i].edges.push(new Wr(u,n,t)),Zc[t.i].edges.push(new Wr(u,t,n)),u}function $r(n,t,e){var r=new Vr(n,null);return r.a=t,r.b=e,Ic.push(r),r}function Br(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Wr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function Jr(){this._=null}function Gr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function Kr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Qr(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function nu(n){for(;n.L;)n=n.L;return n}function tu(n,t){var e,r,u,i=n.sort(eu).pop();for(Ic=[],Zc=new Array(n.length),Vc=new Jr,$c=new Jr;;)if(u=Xc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Zc[i.i]=new Ur(i),Rr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;qr(u.arc)}t&&(Ir(t),jr(t));var o={cells:Zc,edges:Ic};return Vc=$c=Ic=Zc=null,o}function eu(n,t){return t.y-n.y||t.x-n.x}function ru(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function uu(n){return n.x}function iu(n){return n.y}function ou(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function au(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&au(n,c[0],e,r,o,a),c[1]&&au(n,c[1],o,r,u,a),c[2]&&au(n,c[2],e,a,o,i),c[3]&&au(n,c[3],o,a,u,i)}}function cu(n,t){n=Zo.rgb(n),t=Zo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+dt(Math.round(e+i*n))+dt(Math.round(r+o*n))+dt(Math.round(u+a*n))}}function su(n,t){var e,r={},u={};for(e in n)e in t?r[e]=hu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function lu(n,t){return t-=n=+n,function(e){return n+t*e}}function fu(n,t){var e,r,u,i=Gc.lastIndex=Kc.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=Gc.exec(n))&&(r=Kc.exec(t));)(u=r.index)>i&&(u=t.substring(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:lu(e,r)})),i=Kc.lastIndex;return i<t.length&&(u=t.substring(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function hu(n,t){for(var e,r=Zo.interpolators.length;--r>=0&&!(e=Zo.interpolators[r](n,t)););return e}function gu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(hu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function pu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function vu(n){return function(t){return 1-n(1-t)}}function du(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function mu(n){return n*n}function yu(n){return n*n*n}function xu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Mu(n){return function(t){return Math.pow(t,n)}}function _u(n){return 1-Math.cos(n*Sa)}function bu(n){return Math.pow(2,10*(n-1))}function wu(n){return 1-Math.sqrt(1-n*n)}function Su(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/wa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*wa/t)}}function ku(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Eu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Au(n,t){n=Zo.hcl(n),t=Zo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ot(e+i*n,r+o*n,u+a*n)+""}}function Cu(n,t){n=Zo.hsl(n),t=Zo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ut(e+i*n,r+o*n,u+a*n)+""}}function Nu(n,t){n=Zo.lab(n),t=Zo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function zu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Lu(n){var t=[n.a,n.b],e=[n.c,n.d],r=qu(t),u=Tu(t,e),i=qu(Ru(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ca,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ca:0}function Tu(n,t){return n[0]*t[0]+n[1]*t[1]}function qu(n){var t=Math.sqrt(Tu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Ru(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Du(n,t){var e,r=[],u=[],i=Zo.transform(n),o=Zo.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:lu(a[0],c[0])},{i:3,x:lu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:lu(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:lu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:lu(g[0],p[0])},{i:e-2,x:lu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Pu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Uu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function ju(n){for(var t=n.source,e=n.target,r=Fu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Hu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Fu(n,t){if(n===t)return n;for(var e=Hu(n),r=Hu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Ou(n){n.fixed|=2}function Yu(n){n.fixed&=-7}function Iu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Zu(n){n.fixed&=-5}function Vu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Vu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Xu(n,t){return Zo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Ku,n}function $u(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Bu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function Wu(n){return n.children}function Ju(n){return n.value}function Gu(n,t){return t.value-n.value}function Ku(n){return Zo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Qu(n){return n.x}function ni(n){return n.y}function ti(n,t,e){n.y0=t,n.y=e}function ei(n){return Zo.range(n.length)}function ri(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ui(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ii(n){return n.reduce(oi,0)}function oi(n,t){return n+t[1]}function ai(n,t){return ci(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ci(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function si(n){return[Zo.min(n),Zo.max(n)]}function li(n,t){return n.value-t.value}function fi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function hi(n,t){n._pack_next=t,t._pack_prev=n}function gi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function pi(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(vi),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],yi(r,u,i),t(i),fi(r,i),r._pack_prev=i,fi(i,u),u=r._pack_next,o=3;s>o;o++){yi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(gi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!gi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?hi(r,u=a):hi(r=c,u),o--):(fi(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(di)}}function vi(n){n._pack_next=n._pack_prev=n}function di(n){delete n._pack_next,delete n._pack_prev}function mi(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)mi(u[i],t,e,r)}function yi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function xi(n,t){return n.parent==t.parent?1:2}function Mi(n){var t=n.children;return t.length?t[0]:n.t}function _i(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function bi(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function wi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Si(n,t,e){return n.a.parent===t.parent?n.a:e}function ki(n){return 1+Zo.max(n,function(n){return n.y})}function Ei(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ai(n){var t=n.children;return t&&t.length?Ai(t[0]):n}function Ci(n){var t,e=n.children;return e&&(t=e.length)?Ci(e[t-1]):n}function Ni(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function zi(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Li(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ti(n){return n.rangeExtent?n.rangeExtent():Li(n.range())}function qi(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Ri(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Di(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ss}function Pi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Zo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Ui(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Pi:qi,c=r?Uu:Pu;return o=u(n,t,c,e),a=u(t,n,c,hu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(zu)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Oi(n,t)},i.tickFormat=function(t,e){return Yi(n,t,e)},i.nice=function(t){return Hi(n,t),u()},i.copy=function(){return Ui(n,t,e,r)},u()}function ji(n,t){return Zo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Hi(n,t){return Ri(n,Di(Fi(n,t)[2]))}function Fi(n,t){null==t&&(t=10);var e=Li(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Oi(n,t){return Zo.range.apply(Zo,Fi(n,t))}function Yi(n,t,e){var r=Fi(n,t);if(e){var u=Ga.exec(e);if(u.shift(),"s"===u[8]){var i=Zo.formatPrefix(Math.max(ua(r[0]),ua(r[1])));return u[7]||(u[7]="."+Ii(i.scale(r[2]))),u[8]="f",e=Zo.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Zi(u[8],r)),e=u.join("")}else e=",."+Ii(r[2])+"f";return Zo.format(e)}function Ii(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Zi(n,t){var e=Ii(t[2]);return n in ls?Math.abs(e-Ii(Math.max(ua(t[0]),ua(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Vi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Ri(r.map(u),e?Math:hs);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Li(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return fs;arguments.length<2?t=fs:"function"!=typeof t&&(t=Zo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Vi(n.copy(),t,e,r)},ji(o,n)}function Xi(n,t,e){function r(t){return n(u(t))}var u=$i(t),i=$i(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Oi(e,n)},r.tickFormat=function(n,t){return Yi(e,n,t)},r.nice=function(n){return r.domain(Hi(e,n))},r.exponent=function(o){return arguments.length?(u=$i(t=o),i=$i(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Xi(n.copy(),t,e)},ji(r,n)}function $i(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Bi(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Zo.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new o;for(var i,a=-1,c=r.length;++a<c;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+o);return i=r(n.length<2?(c+s)/2:c+l*o/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-o+2*c);return i=r(l+h*c,h),s&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-o+2*c)),g=f-l-(n.length-o)*h;return i=r(l+Math.round(g/2),h),s&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Li(t.a[0])},e.copy=function(){return Bi(n,t)},e.domain(n)}function Wi(e,r){function u(){var n=0,t=r.length;for(o=[];++n<t;)o[n-1]=Zo.quantile(e,n/t);return i}function i(n){return isNaN(n=+n)?void 0:r[Zo.bisect(o,n)]}var o;return i.domain=function(r){return arguments.length?(e=r.filter(t).sort(n),u()):e},i.range=function(n){return arguments.length?(r=n,u()):r},i.quantiles=function(){return o},i.invertExtent=function(n){return n=r.indexOf(n),0>n?[0/0,0/0]:[n>0?o[n-1]:e[0],n<o.length?o[n]:e[e.length-1]]},i.copy=function(){return Wi(e,r)},u()}function Ji(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return Ji(n,t,e)},u()}function Gi(n,t){function e(e){return e>=e?t[Zo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return Gi(n,t)},e}function Ki(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Oi(n,t)},t.tickFormat=function(t,e){return Yi(n,t,e)},t.copy=function(){return Ki(n)},t}function Qi(n){return n.innerRadius}function no(n){return n.outerRadius}function to(n){return n.startAngle}function eo(n){return n.endAngle}function ro(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=bt(e),p=bt(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=wr,r=Sr,u=we,i=uo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=xs.get(n)||uo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function uo(n){return n.join("L")}function io(n){return uo(n)+"Z"}function oo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function ao(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function co(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function so(n,t){return n.length<4?uo(n):n[1]+ho(n.slice(1,n.length-1),go(n,t))}function lo(n,t){return n.length<3?uo(n):n[0]+ho((n.push(n[0]),n),go([n[n.length-2]].concat(n,[n[1]]),t))}function fo(n,t){return n.length<3?uo(n):n[0]+ho(n,go(n,t))}function ho(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return uo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function go(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function po(n){if(n.length<3)return uo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",xo(bs,o),",",xo(bs,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Mo(c,o,a);return n.pop(),c.push("L",r),c.join("")}function vo(n){if(n.length<4)return uo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(xo(bs,i)+","+xo(bs,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Mo(e,i,o);return e.join("")}function mo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[xo(bs,o),",",xo(bs,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Mo(t,o,a);return t.join("")}function yo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return po(n)}function xo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Mo(n,t,e){n.push("C",xo(Ms,t),",",xo(Ms,e),",",xo(_s,t),",",xo(_s,e),",",xo(bs,t),",",xo(bs,e))}function _o(n,t){return(t[1]-n[1])/(t[0]-n[0])}function bo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=_o(u,i);++t<e;)r[t]=(o+(o=_o(u=i,i=n[t+1])))/2;return r[t]=o,r}function wo(n){for(var t,e,r,u,i=[],o=bo(n),a=-1,c=n.length-1;++a<c;)t=_o(n[a],n[a+1]),ua(t)<ka?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function So(n){return n.length<3?uo(n):n[0]+ho(n,wo(n))}function ko(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ms,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Eo(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=bt(e),_=bt(u),b=e===r?function(){return g}:bt(r),w=u===i?function(){return p}:bt(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=wr,r=wr,u=0,i=Sr,o=we,a=uo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=xs.get(n)||uo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ao(n){return n.radius}function Co(n){return[n.x,n.y]}function No(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ms;return[e*Math.cos(r),e*Math.sin(r)]}}function zo(){return 64}function Lo(){return"circle"}function To(n){var t=Math.sqrt(n/ba);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function qo(n,t){return sa(n,Cs),n.id=t,n}function Ro(n,t,e,r){var u=n.id;return P(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Do(n){return null==n&&(n=""),function(){this.textContent=n}}function Po(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var a=r.time;i=u[e]={tween:new o,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Zo.timer(function(r){function o(r){return u.active>e?s():(u.active=e,i.event&&i.event.start.call(n,l,t),i.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Zo.timer(function(){return p.c=c(r||1)?we:c,1},0,a),void 0)}function c(r){if(u.active!==e)return s();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);
return o>=1?(i.event&&i.event.end.call(n,l,t),s()):void 0}function s(){return--u.count?delete u[e]:delete n.__transition__,1}var l=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=Ba,v=[];return p.t=h+a,r>=h?o(r-h):(p.c=o,void 0)},0,a)}}function Uo(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function jo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Ho(n){return n.toISOString()}function Fo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Zo.bisect(Us,u);return i==Us.length?[t.year,Fi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Us[i-1]<Us[i]/u?i-1:i]:[Fs,Fi(n,e)[2]]}return r.invert=function(t){return Oo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Oo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Oo(+e+1),t).length}var i=r.domain(),o=Li(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Ri(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Oo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Oo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Li(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Oo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Fo(n.copy(),t,e)},ji(r,n)}function Oo(n){return new Date(n)}function Yo(n){return JSON.parse(n.responseText)}function Io(n){var t=$o.createRange();return t.selectNode($o.body),t.createContextualFragment(n.responseText)}var Zo={version:"3.4.11"};Date.now||(Date.now=function(){return+new Date});var Vo=[].slice,Xo=function(n){return Vo.call(n)},$o=document,Bo=$o.documentElement,Wo=window;try{Xo(Bo.childNodes)[0].nodeType}catch(Jo){Xo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{$o.createElement("div").style.setProperty("opacity",0,"")}catch(Go){var Ko=Wo.Element.prototype,Qo=Ko.setAttribute,na=Ko.setAttributeNS,ta=Wo.CSSStyleDeclaration.prototype,ea=ta.setProperty;Ko.setAttribute=function(n,t){Qo.call(this,n,t+"")},Ko.setAttributeNS=function(n,t,e){na.call(this,n,t,e+"")},ta.setProperty=function(n,t,e){ea.call(this,n,t+"",e)}}Zo.ascending=n,Zo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Zo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Zo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Zo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Zo.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Zo.mean=function(n,e){var r,u=0,i=n.length,o=-1,a=i;if(1===arguments.length)for(;++o<i;)t(r=n[o])?u+=r:--a;else for(;++o<i;)t(r=e.call(n,n[o],o))?u+=r:--a;return a?u/a:void 0},Zo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Zo.median=function(e,r){return arguments.length>1&&(e=e.map(r)),e=e.filter(t),e.length?Zo.quantile(e.sort(n),.5):void 0};var ra=e(n);Zo.bisectLeft=ra.left,Zo.bisect=Zo.bisectRight=ra.right,Zo.bisector=function(t){return e(1===t.length?function(e,r){return n(t(e),r)}:t)},Zo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Zo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Zo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Zo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,t=Zo.min(arguments,r),e=new Array(t);++n<t;)for(var u,i=-1,o=e[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return e},Zo.transpose=function(n){return Zo.zip.apply(Zo,n)},Zo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Zo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Zo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Zo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ua=Math.abs;Zo.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,i=[],o=u(ua(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)i.push(r/o);else for(;(r=n+e*++a)<t;)i.push(r/o);return i},Zo.map=function(n){var t=new o;if(n instanceof o)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},i(o,{has:a,get:function(n){return this[ia+n]},set:function(n,t){return this[ia+n]=t},remove:c,keys:s,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===oa&&n.call(this,t.substring(1),this[t])}});var ia="\x00",oa=ia.charCodeAt(0);Zo.nest=function(){function n(t,a,c){if(c>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=i[c++],d=new o;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Zo.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Zo.set=function(n){var t=new h;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},i(h,{has:a,add:function(n){return this[ia+n]=!0,n},remove:function(n){return n=ia+n,n in this&&delete this[n]},values:s,size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===oa&&n.call(this,t.substring(1))}}),Zo.behavior={},Zo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=g(n,t,t[e]);return n};var aa=["webkit","ms","moz","Moz","o","O"];Zo.dispatch=function(){for(var n=new d,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=m(n);return n},d.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Zo.event=null,Zo.requote=function(n){return n.replace(ca,"\\$&")};var ca=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,sa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},la=function(n,t){return t.querySelector(n)},fa=function(n,t){return t.querySelectorAll(n)},ha=Bo.matches||Bo[p(Bo,"matchesSelector")],ga=function(n,t){return ha.call(n,t)};"function"==typeof Sizzle&&(la=function(n,t){return Sizzle(n,t)[0]||null},fa=Sizzle,ga=Sizzle.matchesSelector),Zo.selection=function(){return ma};var pa=Zo.selection.prototype=[];pa.select=function(n){var t,e,r,u,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return _(i)},pa.selectAll=function(n){var t,e,r=[];n=w(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Xo(n.call(e,e.__data__,a,u))),t.parentNode=e);return _(r)};var va={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Zo.ns={prefix:va,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),va.hasOwnProperty(e)?{space:va[e],local:n}:n}},pa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Zo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(S(t,n[t]));return this}return this.each(S(n,t))},pa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=A(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!E(n[u]).test(t))return!1;return!0}for(t in n)this.each(C(t,n[t]));return this}return this.each(C(n,t))},pa.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(z(e,n[e],t));return this}if(2>r)return Wo.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(z(n,t,e))},pa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(L(t,n[t]));return this}return this.each(L(n,t))},pa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},pa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},pa.append=function(n){return n=T(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},pa.insert=function(n,t){return n=T(n),t=b(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},pa.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},pa.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new o,y=new o,x=[];for(r=-1;++r<a;)d=t.call(u=n[r],u.__data__,r),m.has(d)?v[r]=u:m.set(d,u),x.push(d);for(r=-1;++r<f;)d=t.call(e,i=e[r],r),(u=m.get(d))?(g[r]=u,u.__data__=i):y.has(d)||(p[r]=q(i)),y.set(d,i),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=q(i);for(;f>r;++r)p[r]=q(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var c=U([]),s=_([]),l=_([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return s.enter=function(){return c},s.exit=function(){return l},s},pa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},pa.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return _(u)},pa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},pa.sort=function(n){n=D.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},pa.each=function(n){return P(this,function(t,e,r){n.call(t,t.__data__,e,r)})},pa.call=function(n){var t=Xo(arguments);return n.apply(t[0]=this,t),this},pa.empty=function(){return!this.node()},pa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},pa.size=function(){var n=0;return this.each(function(){++n}),n};var da=[];Zo.selection.enter=U,Zo.selection.enter.prototype=da,da.append=pa.append,da.empty=pa.empty,da.node=pa.node,da.call=pa.call,da.size=pa.size,da.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return _(o)},da.insert=function(n,t){return arguments.length<2&&(t=j(this)),pa.insert.call(this,n,t)},pa.transition=function(){for(var n,t,e=Ss||++Ns,r=[],u=ks||{time:Date.now(),ease:xu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&Po(t,c,e,u),n.push(t)}return qo(r,e)},pa.interrupt=function(){return this.each(H)},Zo.select=function(n){var t=["string"==typeof n?la(n,$o):n];return t.parentNode=Bo,_([t])},Zo.selectAll=function(n){var t=Xo("string"==typeof n?fa(n,$o):n);return t.parentNode=Bo,_([t])};var ma=Zo.select(Bo);pa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(F(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(F(n,t,e))};var ya=Zo.map({mouseenter:"mouseover",mouseleave:"mouseout"});ya.forEach(function(n){"on"+n in $o&&ya.remove(n)});var xa="onselectstart"in $o?null:p(Bo.style,"userSelect"),Ma=0;Zo.mouse=function(n){return Z(n,x())};var _a=/WebKit/.test(Wo.navigator.userAgent)?-1:0;Zo.touches=function(n,t){return arguments.length<2&&(t=x().touches),t?Xo(t).map(function(t){var e=Z(n,t);return e.identifier=t.identifier,e}):[]},Zo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+s[0],y:r[1]+s[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Zo.event.target===f),g({type:"dragend"}))}var s,l=this,f=Zo.event.target,h=l.parentNode,g=e.of(l,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Zo.select(u()).on(i+d,a).on(o+d,c),y=I(),x=t(h,v);r?(s=r.apply(l,arguments),s=[s.x-x[0],s.y-x[1]]):s=[0,0],g({type:"dragstart"})}}var e=M(n,"drag","dragstart","dragend"),r=null,u=t(v,Zo.mouse,$,"mousemove","mouseup"),i=t(V,Zo.touch,X,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Zo.rebind(n,e,"on")};var ba=Math.PI,wa=2*ba,Sa=ba/2,ka=1e-6,Ea=ka*ka,Aa=ba/180,Ca=180/ba,Na=Math.SQRT2,za=2,La=4;Zo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=Q(v),o=i/(za*h)*(e*nt(Na*t+v)-K(v));return[r+o*s,u+o*l,i*e/Q(Na*t+v)]}return[r+n*s,u+n*l,i*Math.exp(Na*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+La*f)/(2*i*za*h),p=(c*c-i*i-La*f)/(2*c*za*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Na;return e.duration=1e3*y,e},Zo.behavior.zoom=function(){function n(n){n.on(A,s).on(Ra+".zoom",f).on("dblclick.zoom",h).on(z,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Zo.mouse(r),h),a(s)}function e(){f.on(C,null).on(N,null),g(l&&Zo.event.target===i),c(s)}var r=this,i=Zo.event.target,s=L.of(r,arguments),l=0,f=Zo.select(Wo).on(C,n).on(N,e),h=t(Zo.mouse(r)),g=I();H.call(r),o(s)}function l(){function n(){var n=Zo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){var t=Zo.event.target;Zo.select(t).on(M,i).on(_,f),b.push(t);for(var e=Zo.event.changedTouches,o=0,c=e.length;c>o;++o)v[e[o].identifier]=null;var s=n(),l=Date.now();if(1===s.length){if(500>l-m){var h=s[0],g=v[h.identifier];r(2*S.k),u(h,g),y(),a(p)}m=l}else if(s.length>1){var h=s[0],x=s[1],w=h[0]-x[0],k=h[1]-x[1];d=w*w+k*k}}function i(){for(var n,t,e,i,o=Zo.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=d&&Math.sqrt(l/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Zo.event.touches.length){for(var t=Zo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}Zo.selectAll(b).on(x,null),w.on(A,s).on(z,l),k(),c(p)}var h,g=this,p=L.of(g,arguments),v={},d=0,x=".zoom-"+Zo.event.changedTouches[0].identifier,M="touchmove"+x,_="touchend"+x,b=[],w=Zo.select(g).on(A,null).on(z,e),k=I();H.call(g),e(),o(p)}function f(){var n=L.of(this,arguments);d?clearTimeout(d):(g=t(p=v||Zo.mouse(this)),H.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),y(),r(Math.pow(2,.002*Ta())*S.k),u(p,g),a(n)}function h(){var n=L.of(this,arguments),e=Zo.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Zo.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var g,p,v,d,m,x,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=qa,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",z="touchstart.zoom",L=M(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=L.of(this,arguments),t=S;Ss?Zo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Zo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?qa:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,x=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Zo.rebind(n,L,"on")};var Ta,qa=[0,1/0],Ra="onwheel"in $o?(Ta=function(){return-Zo.event.deltaY*(Zo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in $o?(Ta=function(){return Zo.event.wheelDelta},"mousewheel"):(Ta=function(){return-Zo.event.detail},"MozMousePixelScroll");Zo.color=et,et.prototype.toString=function(){return this.rgb()+""},Zo.hsl=rt;var Da=rt.prototype=new et;Da.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new rt(this.h,this.s,this.l/n)},Da.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new rt(this.h,this.s,n*this.l)},Da.rgb=function(){return ut(this.h,this.s,this.l)},Zo.hcl=it;var Pa=it.prototype=new et;Pa.brighter=function(n){return new it(this.h,this.c,Math.min(100,this.l+Ua*(arguments.length?n:1)))},Pa.darker=function(n){return new it(this.h,this.c,Math.max(0,this.l-Ua*(arguments.length?n:1)))},Pa.rgb=function(){return ot(this.h,this.c,this.l).rgb()},Zo.lab=at;var Ua=18,ja=.95047,Ha=1,Fa=1.08883,Oa=at.prototype=new et;Oa.brighter=function(n){return new at(Math.min(100,this.l+Ua*(arguments.length?n:1)),this.a,this.b)},Oa.darker=function(n){return new at(Math.max(0,this.l-Ua*(arguments.length?n:1)),this.a,this.b)},Oa.rgb=function(){return ct(this.l,this.a,this.b)},Zo.rgb=gt;var Ya=gt.prototype=new et;Ya.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new gt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new gt(u,u,u)},Ya.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new gt(n*this.r,n*this.g,n*this.b)},Ya.hsl=function(){return yt(this.r,this.g,this.b)},Ya.toString=function(){return"#"+dt(this.r)+dt(this.g)+dt(this.b)};var Ia=Zo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Ia.forEach(function(n,t){Ia.set(n,pt(t))}),Zo.functor=bt,Zo.xhr=St(wt),Zo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=kt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new h,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Zo.csv=Zo.dsv(",","text/csv"),Zo.tsv=Zo.dsv("	","text/tab-separated-values"),Zo.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=x().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return Z(n,r)};var Za,Va,Xa,$a,Ba,Wa=Wo[p(Wo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Zo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Va?Va.n=i:Za=i,Va=i,Xa||($a=clearTimeout($a),Xa=1,Wa(At))},Zo.timer.flush=function(){Ct(),Nt()},Zo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var Ja=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Lt);Zo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Zo.round(n,zt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),Ja[8+e/3]};var Ga=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,Ka=Zo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Zo.round(n,zt(n,t))).toFixed(Math.max(0,Math.min(20,zt(n*(1+1e-15),t))))}}),Qa=Zo.time={},nc=Date;Rt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){tc.setUTCDate.apply(this._,arguments)},setDay:function(){tc.setUTCDay.apply(this._,arguments)},setFullYear:function(){tc.setUTCFullYear.apply(this._,arguments)},setHours:function(){tc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){tc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){tc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){tc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){tc.setUTCSeconds.apply(this._,arguments)},setTime:function(){tc.setTime.apply(this._,arguments)}};var tc=Date.prototype;Qa.year=Dt(function(n){return n=Qa.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),Qa.years=Qa.year.range,Qa.years.utc=Qa.year.utc.range,Qa.day=Dt(function(n){var t=new nc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),Qa.days=Qa.day.range,Qa.days.utc=Qa.day.utc.range,Qa.dayOfYear=function(n){var t=Qa.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=Qa[n]=Dt(function(n){return(n=Qa.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=Qa.year(n).getDay();return Math.floor((Qa.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});Qa[n+"s"]=e.range,Qa[n+"s"].utc=e.utc.range,Qa[n+"OfYear"]=function(n){var e=Qa.year(n).getDay();return Math.floor((Qa.dayOfYear(n)+(e+t)%7)/7)}}),Qa.week=Qa.sunday,Qa.weeks=Qa.sunday.range,Qa.weeks.utc=Qa.sunday.utc.range,Qa.weekOfYear=Qa.sundayOfYear;var ec={"-":"",_:" ",0:"0"},rc=/^\s*\d+/,uc=/^%/;Zo.locale=function(n){return{numberFormat:Tt(n),timeFormat:Ut(n)}};var ic=Zo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Zo.format=ic.numberFormat,Zo.geo={},ue.prototype={s:0,t:0,add:function(n){ie(n,this.t,oc),ie(oc.s,this.s,this),this.s?this.t+=oc.t:this.s=oc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var oc=new ue;Zo.geo.stream=function(n,t){n&&ac.hasOwnProperty(n.type)?ac[n.type](n,t):oe(n,t)};var ac={Feature:function(n,t){oe(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)oe(e[r].geometry,t)}},cc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){ae(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ae(e[r],t,0)},Polygon:function(n,t){ce(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ce(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)oe(e[r],t)}};Zo.geo.area=function(n){return sc=0,Zo.geo.stream(n,fc),sc};var sc,lc=new ue,fc={sphere:function(){sc+=4*ba},point:v,lineStart:v,lineEnd:v,polygonStart:function(){lc.reset(),fc.lineStart=se},polygonEnd:function(){var n=2*lc;sc+=0>n?4*ba+n:n,fc.lineStart=fc.lineEnd=fc.point=v}};Zo.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=le([t*Aa,e*Aa]);if(m){var u=he(m,r),i=[u[1],-u[0],0],o=he(i,u);ve(o),o=de(o);var c=t-p,s=c>0?1:-1,v=o[0]*Ca*s,d=ua(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*Ca;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*Ca;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ua(r)>180?r+(r>0?360:-360):r}else v=n,d=e;fc.point(n,e),t(n,e)}function i(){fc.lineStart()}function o(){u(v,d),fc.lineEnd(),ua(y)>ka&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,fc.polygonStart()},polygonEnd:function(){fc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>lc?(l=-(h=180),f=-(g=90)):y>ka?g=90:-ka>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],Zo.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);
for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Zo.geo.centroid=function(n){hc=gc=pc=vc=dc=mc=yc=xc=Mc=_c=bc=0,Zo.geo.stream(n,wc);var t=Mc,e=_c,r=bc,u=t*t+e*e+r*r;return Ea>u&&(t=mc,e=yc,r=xc,ka>gc&&(t=pc,e=vc,r=dc),u=t*t+e*e+r*r,Ea>u)?[0/0,0/0]:[Math.atan2(e,t)*Ca,G(r/Math.sqrt(u))*Ca]};var hc,gc,pc,vc,dc,mc,yc,xc,Mc,_c,bc,wc={sphere:v,point:ye,lineStart:Me,lineEnd:_e,polygonStart:function(){wc.lineStart=be},polygonEnd:function(){wc.lineStart=Me}},Sc=Ae(we,Te,Re,[-ba,-ba/2]),kc=1e9;Zo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ue(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Zo.geo.conicEqualArea=function(){return He(Fe)}).raw=Fe,Zo.geo.albers=function(){return Zo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Zo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Zo.geo.albers(),o=Zo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Zo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+ka,f+.12*s+ka],[l-.214*s-ka,f+.234*s-ka]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+ka,f+.166*s+ka],[l-.115*s-ka,f+.234*s-ka]]).stream(c).point,n},n.scale(1070)};var Ec,Ac,Cc,Nc,zc,Lc,Tc={point:v,lineStart:v,lineEnd:v,polygonStart:function(){Ac=0,Tc.lineStart=Oe},polygonEnd:function(){Tc.lineStart=Tc.lineEnd=Tc.point=v,Ec+=ua(Ac/2)}},qc={point:Ye,lineStart:v,lineEnd:v,polygonStart:v,polygonEnd:v},Rc={point:Ve,lineStart:Xe,lineEnd:$e,polygonStart:function(){Rc.lineStart=Be},polygonEnd:function(){Rc.point=Ve,Rc.lineStart=Xe,Rc.lineEnd=$e}};Zo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Zo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Ec=0,Zo.geo.stream(n,u(Tc)),Ec},n.centroid=function(n){return pc=vc=dc=mc=yc=xc=Mc=_c=bc=0,Zo.geo.stream(n,u(Rc)),bc?[Mc/bc,_c/bc]:xc?[mc/xc,yc/xc]:dc?[pc/dc,vc/dc]:[0/0,0/0]},n.bounds=function(n){return zc=Lc=-(Cc=Nc=1/0),Zo.geo.stream(n,u(qc)),[[Cc,Nc],[zc,Lc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||Ge(n):wt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Ie:new We(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Zo.geo.albersUsa()).context(null)},Zo.geo.transform=function(n){return{stream:function(t){var e=new Ke(t);for(var r in n)e[r]=n[r];return e}}},Ke.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Zo.geo.projection=nr,Zo.geo.projectionMutator=tr,(Zo.geo.equirectangular=function(){return nr(rr)}).raw=rr.invert=rr,Zo.geo.rotation=function(n){function t(t){return t=n(t[0]*Aa,t[1]*Aa),t[0]*=Ca,t[1]*=Ca,t}return n=ir(n[0]%360*Aa,n[1]*Aa,n.length>2?n[2]*Aa:0),t.invert=function(t){return t=n.invert(t[0]*Aa,t[1]*Aa),t[0]*=Ca,t[1]*=Ca,t},t},ur.invert=rr,Zo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=ir(-n[0]*Aa,-n[1]*Aa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ca,n[1]*=Ca}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=sr((t=+r)*Aa,u*Aa),n):t},n.precision=function(r){return arguments.length?(e=sr(t*Aa,(u=+r)*Aa),n):u},n.angle(90)},Zo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Aa,u=n[1]*Aa,i=t[1]*Aa,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Zo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Zo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Zo.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Zo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ua(n%d)>ka}).map(l)).concat(Zo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ua(n%m)>ka}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=fr(a,o,90),f=hr(r,e,y),h=fr(s,c,90),g=hr(i,u,y),n):y},n.majorExtent([[-180,-90+ka],[180,90-ka]]).minorExtent([[-180,-80-ka],[180,80+ka]])},Zo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=gr,u=pr;return n.distance=function(){return Zo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Zo.geo.interpolate=function(n,t){return vr(n[0]*Aa,n[1]*Aa,t[0]*Aa,t[1]*Aa)},Zo.geo.length=function(n){return Dc=0,Zo.geo.stream(n,Pc),Dc};var Dc,Pc={sphere:v,point:v,lineStart:dr,lineEnd:v,polygonStart:v,polygonEnd:v},Uc=mr(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Zo.geo.azimuthalEqualArea=function(){return nr(Uc)}).raw=Uc;var jc=mr(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},wt);(Zo.geo.azimuthalEquidistant=function(){return nr(jc)}).raw=jc,(Zo.geo.conicConformal=function(){return He(yr)}).raw=yr,(Zo.geo.conicEquidistant=function(){return He(xr)}).raw=xr;var Hc=mr(function(n){return 1/n},Math.atan);(Zo.geo.gnomonic=function(){return nr(Hc)}).raw=Hc,Mr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Sa]},(Zo.geo.mercator=function(){return _r(Mr)}).raw=Mr;var Fc=mr(function(){return 1},Math.asin);(Zo.geo.orthographic=function(){return nr(Fc)}).raw=Fc;var Oc=mr(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Zo.geo.stereographic=function(){return nr(Oc)}).raw=Oc,br.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Sa]},(Zo.geo.transverseMercator=function(){var n=_r(br),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=br,Zo.geom={},Zo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=bt(e),i=bt(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(Er),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=kr(a),l=kr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=wr,r=Sr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Zo.geom.polygon=function(n){return sa(n,Yc),n};var Yc=Zo.geom.polygon.prototype=[];Yc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Yc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Yc.clip=function(n){for(var t,e,r,u,i,o,a=Nr(n),c=-1,s=this.length-Nr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Ar(o,l,u)?(Ar(i,l,u)||n.push(Cr(i,o,l,u)),n.push(o)):Ar(i,l,u)&&n.push(Cr(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Ic,Zc,Vc,Xc,$c,Bc=[],Wc=[];Ur.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Hr),t.length},Wr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},Jr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=nu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(Kr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Qr(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(Qr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Kr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?nu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,Kr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,Qr(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,Kr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,Qr(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,Kr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,Qr(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Zo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return tu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/ka)*ka,y:Math.round(o(n,t)/ka)*ka,i:t}})}var r=wr,u=Sr,i=r,o=u,a=Jc;return n?t(n):(t.links=function(n){return tu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return tu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Hr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&ru(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=bt(r=n),t):r},t.y=function(n){return arguments.length?(o=bt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Jc:n,t):a===Jc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Jc?null:a&&a[1]},t)};var Jc=[[-1e6,-1e6],[1e6,1e6]];Zo.geom.delaunay=function(n){return Zo.geom.voronoi().triangles(n)},Zo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(ua(c-e)+ua(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=ou()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=bt(a),M=bt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=ou();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){au(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=wr,c=Sr;return(o=arguments.length)?(a=uu,c=iu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Zo.interpolateRgb=cu,Zo.interpolateObject=su,Zo.interpolateNumber=lu,Zo.interpolateString=fu;var Gc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Kc=new RegExp(Gc.source,"g");Zo.interpolate=hu,Zo.interpolators=[function(n,t){var e=typeof t;return("string"===e?Ia.has(t)||/^(#|rgb\(|hsl\()/.test(t)?cu:fu:t instanceof et?cu:Array.isArray(t)?gu:"object"===e&&isNaN(t)?su:lu)(n,t)}],Zo.interpolateArray=gu;var Qc=function(){return wt},ns=Zo.map({linear:Qc,poly:Mu,quad:function(){return mu},cubic:function(){return yu},sin:function(){return _u},exp:function(){return bu},circle:function(){return wu},elastic:Su,back:ku,bounce:function(){return Eu}}),ts=Zo.map({"in":wt,out:vu,"in-out":du,"out-in":function(n){return du(vu(n))}});Zo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=ns.get(e)||Qc,r=ts.get(r)||wt,pu(r(e.apply(null,Vo.call(arguments,1))))},Zo.interpolateHcl=Au,Zo.interpolateHsl=Cu,Zo.interpolateLab=Nu,Zo.interpolateRound=zu,Zo.transform=function(n){var t=$o.createElementNS(Zo.ns.prefix.svg,"g");return(Zo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Lu(e?e.matrix:es)})(n)},Lu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var es={a:1,b:0,c:0,d:1,e:0,f:0};Zo.interpolateTransform=Du,Zo.layout={},Zo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(ju(n[e]));return t}},Zo.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Zo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Zo.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(wa-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Zo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Zo.event.x,n.py=Zo.event.y,a.resume()}var e,r,u,i,o,a={},c=Zo.dispatch("start","tick","end"),s=[1,1],l=.9,f=rs,h=us,g=-30,p=is,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Vu(t=Zo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Zo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Zo.behavior.drag().origin(wt).on("dragstart.force",Ou).on("drag.force",t).on("dragend.force",Yu)),arguments.length?(this.on("mouseover.force",Iu).on("mouseout.force",Zu).call(e),void 0):e},Zo.rebind(a,c,"on")};var rs=20,us=1,is=1/0;Zo.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(s=e.call(n,i,i.depth))&&(c=s.length)){for(var c,s,l;--c>=0;)o.push(l=s[c]),l.parent=i,l.depth=i.depth+1;r&&(i.value=0),i.children=s}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Bu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=Gu,e=Wu,r=Ju;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&($u(t,function(n){n.children&&(n.value=0)}),Bu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},Zo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Zo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Xu(e,r)},Zo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Zo.sum(o),s=Zo.range(i.length);null!=e&&s.sort(e===os?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=os,r=0,u=wa;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var os={};Zo.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Zo.permute(s,f),l=Zo.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=wt,e=ei,r=ri,u=ti,i=Qu,o=ni;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:as.get(t)||ei,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:cs.get(t)||ri,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var as=Zo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ui),i=n.map(ii),o=Zo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Zo.range(n.length).reverse()},"default":ei}),cs=Zo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ri});Zo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Zo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=si,u=ai;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=bt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return ci(n,t)}:bt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Zo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Bu(a,function(n){n.r=+l(n.value)}),Bu(a,pi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;Bu(a,function(n){n.r+=f}),Bu(a,pi),Bu(a,function(n){n.r-=f})}return mi(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Zo.layout.hierarchy().sort(li),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Xu(n,e)},Zo.layout.tree=function(){function n(n,u){var l=o.call(this,n,u),f=l[0],h=t(f);if(Bu(h,e),h.parent.m=-h.z,$u(h,r),s)$u(f,i);else{var g=f,p=f,v=f;$u(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);$u(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return l}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){wi(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],s=u.m,l=i.m,f=o.m,h=c.m;o=_i(o),u=Mi(u),o&&u;)c=Mi(c),i=_i(i),i.a=n,r=o.z+f-u.z-s+a(o._,u._),r>0&&(bi(Si(o,n,e),n,r),s+=r,l+=r),f+=o.m,s+=u.m,h+=c.m,l+=i.m;o&&!_i(i)&&(i.t=o,i.m+=f-l),u&&!Mi(c)&&(c.t=u,c.m+=s-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=Zo.layout.hierarchy().sort(null).value(null),a=xi,c=[1,1],s=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(s=null==(c=t)?i:null,n):s?null:c},n.nodeSize=function(t){return arguments.length?(s=null==(c=t)?null:i,n):s?c:null},Xu(n,o)},Zo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;Bu(c,function(n){var t=n.children;t&&t.length?(n.x=Ei(t),n.y=ki(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ai(c),f=Ci(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return Bu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Zo.layout.hierarchy().sort(null).value(null),e=xi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Xu(n,t)},Zo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Zo.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=Ni,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ni(t):zi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return zi(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?Ni:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Xu(i,a)},Zo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Zo.random.normal.apply(Zo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Zo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Zo.scale={};var ss={floor:wt,ceil:wt};Zo.scale.linear=function(){return Ui([0,1],[0,1],hu,!1)};var ls={s:1,g:1,p:1,r:1,e:1};Zo.scale.log=function(){return Vi(Zo.scale.linear().domain([0,1]),10,!0,[1,10])};var fs=Zo.format(".0e"),hs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Zo.scale.pow=function(){return Xi(Zo.scale.linear(),1,[0,1])},Zo.scale.sqrt=function(){return Zo.scale.pow().exponent(.5)},Zo.scale.ordinal=function(){return Bi([],{t:"range",a:[[]]})},Zo.scale.category10=function(){return Zo.scale.ordinal().range(gs)},Zo.scale.category20=function(){return Zo.scale.ordinal().range(ps)},Zo.scale.category20b=function(){return Zo.scale.ordinal().range(vs)},Zo.scale.category20c=function(){return Zo.scale.ordinal().range(ds)};var gs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(vt),ps=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(vt),vs=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(vt),ds=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(vt);Zo.scale.quantile=function(){return Wi([],[])},Zo.scale.quantize=function(){return Ji(0,1,[0,1])},Zo.scale.threshold=function(){return Gi([.5],[0,1])},Zo.scale.identity=function(){return Ki([0,1])},Zo.svg={},Zo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ms,a=u.apply(this,arguments)+ms,c=(o>a&&(c=o,o=a,a=c),a-o),s=ba>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);
return c>=ys?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=Qi,e=no,r=to,u=eo;return n.innerRadius=function(e){return arguments.length?(t=bt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=bt(t),n):e},n.startAngle=function(t){return arguments.length?(r=bt(t),n):r},n.endAngle=function(t){return arguments.length?(u=bt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ms;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ms=-Sa,ys=wa-ka;Zo.svg.line=function(){return ro(wt)};var xs=Zo.map({linear:uo,"linear-closed":io,step:oo,"step-before":ao,"step-after":co,basis:po,"basis-open":vo,"basis-closed":mo,bundle:yo,cardinal:fo,"cardinal-open":so,"cardinal-closed":lo,monotone:So});xs.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Ms=[0,2/3,1/3,0],_s=[0,1/3,2/3,0],bs=[0,1/6,2/3,1/6];Zo.svg.line.radial=function(){var n=ro(ko);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},ao.reverse=co,co.reverse=ao,Zo.svg.area=function(){return Eo(wt)},Zo.svg.area.radial=function(){var n=Eo(ko);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Zo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ms,l=s.call(n,u,r)+ms;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ba)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=gr,o=pr,a=Ao,c=to,s=eo;return n.radius=function(t){return arguments.length?(a=bt(t),n):a},n.source=function(t){return arguments.length?(i=bt(t),n):i},n.target=function(t){return arguments.length?(o=bt(t),n):o},n.startAngle=function(t){return arguments.length?(c=bt(t),n):c},n.endAngle=function(t){return arguments.length?(s=bt(t),n):s},n},Zo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=gr,e=pr,r=Co;return n.source=function(e){return arguments.length?(t=bt(e),n):t},n.target=function(t){return arguments.length?(e=bt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Zo.svg.diagonal.radial=function(){var n=Zo.svg.diagonal(),t=Co,e=n.projection;return n.projection=function(n){return arguments.length?e(No(t=n)):t},n},Zo.svg.symbol=function(){function n(n,r){return(ws.get(t.call(this,n,r))||To)(e.call(this,n,r))}var t=Lo,e=zo;return n.type=function(e){return arguments.length?(t=bt(e),n):t},n.size=function(t){return arguments.length?(e=bt(t),n):e},n};var ws=Zo.map({circle:To,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*As)),e=t*As;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Zo.svg.symbolTypes=ws.keys();var Ss,ks,Es=Math.sqrt(3),As=Math.tan(30*Aa),Cs=[],Ns=0;Cs.call=pa.call,Cs.empty=pa.empty,Cs.node=pa.node,Cs.size=pa.size,Zo.transition=function(n){return arguments.length?Ss?n.transition():n:ma.transition()},Zo.transition.prototype=Cs,Cs.select=function(n){var t,e,r,u=this.id,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Po(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return qo(i,u)},Cs.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=w(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Po(u,g,o,i),t.push(u)}return qo(a,o)},Cs.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return qo(u,this.id)},Cs.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):P(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Cs.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Du:hu,a=Zo.ns.qualify(n);return Ro(this,"attr."+n,t,a.local?i:u)},Cs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Zo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Cs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Wo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=hu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Ro(this,"style."+n,t,u)},Cs.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Wo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Cs.text=function(n){return Ro(this,"text",n,Do)},Cs.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Cs.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Zo.ease.apply(Zo,arguments)),P(this,function(e){e.__transition__[t].ease=n}))},Cs.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Cs.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:P(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Cs.each=function(n,t){var e=this.id;if(arguments.length<2){var r=ks,u=Ss;Ss=e,P(this,function(t,r,u){ks=t.__transition__[e],n.call(t,t.__data__,r,u)}),ks=r,Ss=u}else P(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Zo.dispatch("start","end"))).on(n,t)});return this},Cs.transition=function(){for(var n,t,e,r,u=this.id,i=++Ns,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Po(e,s,i,r)),n.push(e)}return qo(o,i)},Zo.svg.axis=function(){function n(n){n.each(function(){var n,s=Zo.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):wt:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",ka),d=Zo.transition(p.exit()).style("opacity",ka).remove(),m=Zo.transition(p.order()).style("opacity",1),y=Ti(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Zo.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Uo,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Uo,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=jo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=jo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Zo.scale.linear(),r=zs,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ls?t+"":zs,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var zs="bottom",Ls={top:1,right:1,bottom:1,left:1};Zo.svg.brush=function(){function n(i){i.each(function(){var i=Zo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,wt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ts[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Zo.transition(i),h=Zo.transition(o);c&&(l=Ti(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Ti(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Zo.event.keyCode&&(C||(x=null,z[0]-=l[1],z[1]-=f[1],C=2),y())}function p(){32==Zo.event.keyCode&&2==C&&(z[0]+=l[1],z[1]+=f[1],C=0,y())}function v(){var n=Zo.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Zo.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),z[0]=l[+(n[0]<x[0])],z[1]=f[+(n[1]<x[1])]):x=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Ti(t),c=a[0],s=a[1],p=z[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Zo.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Zo.select(Zo.event.target),w=a.of(_,arguments),S=Zo.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=I(),z=Zo.mouse(_),L=Zo.select(Wo).on("keydown.brush",u).on("keyup.brush",p);if(Zo.event.changedTouches?L.on("touchmove.brush",v).on("touchend.brush",m):L.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)z[0]=l[0]-z[0],z[1]=f[0]-z[1];else if(k){var T=+/w$/.test(k),q=+/^n/.test(k);M=[l[1-T]-z[0],f[1-q]-z[1]],z[0]=l[T],z[1]=f[q]}else Zo.event.altKey&&(x=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Zo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=M(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=qs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ss?Zo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=gu(l,t.x),r=gu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=qs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=qs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Zo.rebind(n,a,"on")};var Ts={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},qs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Rs=Qa.format=ic.timeFormat,Ds=Rs.utc,Ps=Ds("%Y-%m-%dT%H:%M:%S.%LZ");Rs.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ho:Ps,Ho.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Ho.toString=Ps.toString,Qa.second=Dt(function(n){return new nc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),Qa.seconds=Qa.second.range,Qa.seconds.utc=Qa.second.utc.range,Qa.minute=Dt(function(n){return new nc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),Qa.minutes=Qa.minute.range,Qa.minutes.utc=Qa.minute.utc.range,Qa.hour=Dt(function(n){var t=n.getTimezoneOffset()/60;return new nc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),Qa.hours=Qa.hour.range,Qa.hours.utc=Qa.hour.utc.range,Qa.month=Dt(function(n){return n=Qa.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),Qa.months=Qa.month.range,Qa.months.utc=Qa.month.utc.range;var Us=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],js=[[Qa.second,1],[Qa.second,5],[Qa.second,15],[Qa.second,30],[Qa.minute,1],[Qa.minute,5],[Qa.minute,15],[Qa.minute,30],[Qa.hour,1],[Qa.hour,3],[Qa.hour,6],[Qa.hour,12],[Qa.day,1],[Qa.day,2],[Qa.week,1],[Qa.month,1],[Qa.month,3],[Qa.year,1]],Hs=Rs.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",we]]),Fs={range:function(n,t,e){return Zo.range(Math.ceil(n/e)*e,+t,e).map(Oo)},floor:wt,ceil:wt};js.year=Qa.year,Qa.scale=function(){return Fo(Zo.scale.linear(),js,Hs)};var Os=js.map(function(n){return[n[0].utc,n[1]]}),Ys=Ds.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",we]]);Os.year=Qa.year.utc,Qa.scale.utc=function(){return Fo(Zo.scale.linear(),Os,Ys)},Zo.text=St(function(n){return n.responseText}),Zo.json=function(n,t){return kt(n,"application/json",Yo,t)},Zo.html=function(n,t){return kt(n,"text/html",Io,t)},Zo.xml=St(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Zo):"object"==typeof module&&module.exports&&(module.exports=Zo),this.d3=Zo}();
(function(){function t(e,t){return(new Date(t,e+1,0)).getDate()}function n(e,t,n){return function(r,i,s){var o=e(r),u=[];o<r&&t(o);if(s>1)while(o<i){var a=new Date(+o);n(a)%s===0&&u.push(a),t(o)}else while(o<i)u.push(new Date(+o)),t(o);return u}}var e=window.nv||{};e.version="1.1.15b",e.dev=!0,window.nv=e,e.tooltip=e.tooltip||{},e.utils=e.utils||{},e.models=e.models||{},e.charts={},e.graphs=[],e.logs={},e.dispatch=d3.dispatch("render_start","render_end"),e.dev&&(e.dispatch.on("render_start",function(t){e.logs.startTime=+(new Date)}),e.dispatch.on("render_end",function(t){e.logs.endTime=+(new Date),e.logs.totalTime=e.logs.endTime-e.logs.startTime,e.log("total",e.logs.totalTime)})),e.log=function(){if(e.dev&&console.log&&console.log.apply)console.log.apply(console,arguments);else if(e.dev&&typeof console.log=="function"&&Function.prototype.bind){var t=Function.prototype.bind.call(console.log,console);t.apply(console,arguments)}return arguments[arguments.length-1]},e.render=function(n){n=n||1,e.render.active=!0,e.dispatch.render_start(),setTimeout(function(){var t,r;for(var i=0;i<n&&(r=e.render.queue[i]);i++)t=r.generate(),typeof r.callback==typeof Function&&r.callback(t),e.graphs.push(t);e.render.queue.splice(0,i),e.render.queue.length?setTimeout(arguments.callee,0):(e.dispatch.render_end(),e.render.active=!1)},0)},e.render.active=!1,e.render.queue=[],e.addGraph=function(t){typeof arguments[0]==typeof Function&&(t={generate:arguments[0],callback:arguments[1]}),e.render.queue.push(t),e.render.active||e.render()},e.identity=function(e){return e},e.strip=function(e){return e.replace(/(\s|&)/g,"")},d3.time.monthEnd=function(e){return new Date(e.getFullYear(),e.getMonth(),0)},d3.time.monthEnds=n(d3.time.monthEnd,function(e){e.setUTCDate(e.getUTCDate()+1),e.setDate(t(e.getMonth()+1,e.getFullYear()))},function(e){return e.getMonth()}),e.interactiveGuideline=function(){"use strict";function c(o){o.each(function(o){function g(){var e=d3.mouse(this),n=e[0],r=e[1],o=!0,a=!1;l&&(n=d3.event.offsetX,r=d3.event.offsetY,d3.event.target.tagName!=="svg"&&(o=!1),d3.event.target.className.baseVal.match("nv-legend")&&(a=!0)),o&&(n-=i.left,r-=i.top);if(n<0||r<0||n>p||r>d||d3.event.relatedTarget&&d3.event.relatedTarget.ownerSVGElement===undefined||a){if(l&&d3.event.relatedTarget&&d3.event.relatedTarget.ownerSVGElement===undefined&&d3.event.relatedTarget.className.match(t.nvPointerEventsClass))return;u.elementMouseout({mouseX:n,mouseY:r}),c.renderGuideLine(null);return}var f=s.invert(n);u.elementMousemove({mouseX:n,mouseY:r,pointXValue:f}),d3.event.type==="dblclick"&&u.elementDblclick({mouseX:n,mouseY:r,pointXValue:f})}var h=d3.select(this),p=n||960,d=r||400,v=h.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([o]),m=v.enter().append("g").attr("class"," nv-wrap nv-interactiveLineLayer");m.append("g").attr("class","nv-interactiveGuideLine");if(!f)return;f.on("mousemove",g,!0).on("mouseout",g,!0).on("dblclick",g),c.renderGuideLine=function(t){if(!a)return;var n=v.select(".nv-interactiveGuideLine").selectAll("line").data(t!=null?[e.utils.NaNtoZero(t)]:[],String);n.enter().append("line").attr("class","nv-guideline").attr("x1",function(e){return e}).attr("x2",function(e){return e}).attr("y1",d).attr("y2",0),n.exit().remove()}})}var t=e.models.tooltip(),n=null,r=null,i={left:0,top:0},s=d3.scale.linear(),o=d3.scale.linear(),u=d3.dispatch("elementMousemove","elementMouseout","elementDblclick"),a=!0,f=null,l=navigator.userAgent.indexOf("MSIE")!==-1;return c.dispatch=u,c.tooltip=t,c.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.left=typeof e.left!="undefined"?e.left:i.left,c):i},c.width=function(e){return arguments.length?(n=e,c):n},c.height=function(e){return arguments.length?(r=e,c):r},c.xScale=function(e){return arguments.length?(s=e,c):s},c.showGuideLine=function(e){return arguments.length?(a=e,c):a},c.svgContainer=function(e){return arguments.length?(f=e,c):f},c},e.interactiveBisect=function(e,t,n){"use strict";if(!e instanceof Array)return null;typeof n!="function"&&(n=function(e,t){return e.x});var r=d3.bisector(n).left,i=d3.max([0,r(e,t)-1]),s=n(e[i],i);typeof s=="undefined"&&(s=i);if(s===t)return i;var o=d3.min([i+1,e.length-1]),u=n(e[o],o);return typeof u=="undefined"&&(u=o),Math.abs(u-t)>=Math.abs(s-t)?i:o},e.nearestValueIndex=function(e,t,n){"use strict";var r=Infinity,i=null;return e.forEach(function(e,s){var o=Math.abs(t-e);o<=r&&o<n&&(r=o,i=s)}),i},function(){"use strict";window.nv.tooltip={},window.nv.models.tooltip=function(){function y(){if(a){var e=d3.select(a);e.node().tagName!=="svg"&&(e=e.select("svg"));var t=e.node()?e.attr("viewBox"):null;if(t){t=t.split(" ");var n=parseInt(e.style("width"))/t[2];l.left=l.left*n,l.top=l.top*n}}}function b(e){var t;a?t=d3.select(a):t=d3.select("body");var n=t.select(".nvtooltip");return n.node()===null&&(n=t.append("div").attr("class","nvtooltip "+(u?u:"xy-tooltip")).attr("id",h)),n.node().innerHTML=e,n.style("top",0).style("left",0).style("opacity",0),n.selectAll("div, table, td, tr").classed(p,!0),n.classed(p,!0),n.node()}function w(){if(!c)return;if(!g(n))return;y();var t=l.left,u=o!=null?o:l.top,h=b(m(n));f=h;if(a){var p=a.getElementsByTagName("svg")[0],d=p?p.getBoundingClientRect():a.getBoundingClientRect(),v={left:0,top:0};if(p){var E=p.getBoundingClientRect(),S=a.getBoundingClientRect(),x=E.top;if(x<0){var T=a.getBoundingClientRect();x=Math.abs(x)>T.height?0:x}v.top=Math.abs(x-S.top),v.left=Math.abs(E.left-S.left)}t+=a.offsetLeft+v.left-2*a.scrollLeft,u+=a.offsetTop+v.top-2*a.scrollTop}return s&&s>0&&(u=Math.floor(u/s)*s),e.tooltip.calcTooltipPosition([t,u],r,i,h),w}var t=null,n=null,r="w",i=50,s=25,o=null,u=null,a=null,f=null,l={left:null,top:null},c=!0,h="nvtooltip-"+Math.floor(Math.random()*1e5),p="nv-pointer-events-none",d=function(e,t){return e},v=function(e){return e},m=function(e){if(t!=null)return t;if(e==null)return"";var n=d3.select(document.createElement("table")),r=n.selectAll("thead").data([e]).enter().append("thead");r.append("tr").append("td").attr("colspan",3).append("strong").classed("x-value",!0).html(v(e.value));var i=n.selectAll("tbody").data([e]).enter().append("tbody"),s=i.selectAll("tr").data(function(e){return e.series}).enter().append("tr").classed("highlight",function(e){return e.highlight});s.append("td").classed("legend-color-guide",!0).append("div").style("background-color",function(e){return e.color}),s.append("td").classed("key",!0).html(function(e){return e.key}),s.append("td").classed("value",!0).html(function(e,t){return d(e.value,t)}),s.selectAll("td").each(function(e){if(e.highlight){var t=d3.scale.linear().domain([0,1]).range(["#fff",e.color]),n=.6;d3.select(this).style("border-bottom-color",t(n)).style("border-top-color",t(n))}});var o=n.node().outerHTML;return e.footer!==undefined&&(o+="<div class='footer'>"+e.footer+"</div>"),o},g=function(e){return e&&e.series&&e.series.length>0?!0:!1};return w.nvPointerEventsClass=p,w.content=function(e){return arguments.length?(t=e,w):t},w.tooltipElem=function(){return f},w.contentGenerator=function(e){return arguments.length?(typeof e=="function"&&(m=e),w):m},w.data=function(e){return arguments.length?(n=e,w):n},w.gravity=function(e){return arguments.length?(r=e,w):r},w.distance=function(e){return arguments.length?(i=e,w):i},w.snapDistance=function(e){return arguments.length?(s=e,w):s},w.classes=function(e){return arguments.length?(u=e,w):u},w.chartContainer=function(e){return arguments.length?(a=e,w):a},w.position=function(e){return arguments.length?(l.left=typeof e.left!="undefined"?e.left:l.left,l.top=typeof e.top!="undefined"?e.top:l.top,w):l},w.fixedTop=function(e){return arguments.length?(o=e,w):o},w.enabled=function(e){return arguments.length?(c=e,w):c},w.valueFormatter=function(e){return arguments.length?(typeof e=="function"&&(d=e),w):d},w.headerFormatter=function(e){return arguments.length?(typeof e=="function"&&(v=e),w):v},w.id=function(){return h},w},e.tooltip.show=function(t,n,r,i,s,o){var u=document.createElement("div");u.className="nvtooltip "+(o?o:"xy-tooltip");var a=s;if(!s||s.tagName.match(/g|svg/i))a=document.getElementsByTagName("body")[0];u.style.left=0,u.style.top=0,u.style.opacity=0,u.innerHTML=n,a.appendChild(u),s&&(t[0]=t[0]-s.scrollLeft,t[1]=t[1]-s.scrollTop),e.tooltip.calcTooltipPosition(t,r,i,u)},e.tooltip.findFirstNonSVGParent=function(e){while(e.tagName.match(/^g|svg$/i)!==null)e=e.parentNode;return e},e.tooltip.findTotalOffsetTop=function(e,t){var n=t;do isNaN(e.offsetTop)||(n+=e.offsetTop);while(e=e.offsetParent);return n},e.tooltip.findTotalOffsetLeft=function(e,t){var n=t;do isNaN(e.offsetLeft)||(n+=e.offsetLeft);while(e=e.offsetParent);return n},e.tooltip.calcTooltipPosition=function(t,n,r,i){var s=parseInt(i.offsetHeight),o=parseInt(i.offsetWidth),u=e.utils.windowSize().width,a=e.utils.windowSize().height,f=window.pageYOffset,l=window.pageXOffset,c,h;a=window.innerWidth>=document.body.scrollWidth?a:a-16,u=window.innerHeight>=document.body.scrollHeight?u:u-16,n=n||"s",r=r||20;var p=function(t){return e.tooltip.findTotalOffsetTop(t,h)},d=function(t){return e.tooltip.findTotalOffsetLeft(t,c)};switch(n){case"e":c=t[0]-o-r,h=t[1]-s/2;var v=d(i),m=p(i);v<l&&(c=t[0]+r>l?t[0]+r:l-v+c),m<f&&(h=f-m+h),m+s>f+a&&(h=f+a-m+h-s);break;case"w":c=t[0]+r,h=t[1]-s/2;var v=d(i),m=p(i);v+o>u&&(c=t[0]-o-r),m<f&&(h=f+5),m+s>f+a&&(h=f+a-m+h-s);break;case"n":c=t[0]-o/2-5,h=t[1]+r;var v=d(i),m=p(i);v<l&&(c=l+5),v+o>u&&(c=c-o/2+5),m+s>f+a&&(h=f+a-m+h-s);break;case"s":c=t[0]-o/2,h=t[1]-s-r;var v=d(i),m=p(i);v<l&&(c=l+5),v+o>u&&(c=c-o/2+5),f>m&&(h=f);break;case"none":c=t[0],h=t[1]-r;var v=d(i),m=p(i)}return i.style.left=c+"px",i.style.top=h+"px",i.style.opacity=1,i.style.position="absolute",i},e.tooltip.cleanup=function(){var e=document.getElementsByClassName("nvtooltip"),t=[];while(e.length)t.push(e[0]),e[0].style.transitionDelay="0 !important",e[0].style.opacity=0,e[0].className="nvtooltip-pending-removal";setTimeout(function(){while(t.length){var e=t.pop();e.parentNode.removeChild(e)}},500)}}(),e.utils.windowSize=function(){var e={width:640,height:480};return document.body&&document.body.offsetWidth&&(e.width=document.body.offsetWidth,e.height=document.body.offsetHeight),document.compatMode=="CSS1Compat"&&document.documentElement&&document.documentElement.offsetWidth&&(e.width=document.documentElement.offsetWidth,e.height=document.documentElement.offsetHeight),window.innerWidth&&window.innerHeight&&(e.width=window.innerWidth,e.height=window.innerHeight),e},e.utils.windowResize=function(e){if(e===undefined)return;var t=window.onresize;window.onresize=function(n){typeof t=="function"&&t(n),e(n)}},e.utils.getColor=function(t){return arguments.length?Object.prototype.toString.call(t)==="[object Array]"?function(e,n){return e.color||t[n%t.length]}:t:e.utils.defaultColor()},e.utils.defaultColor=function(){var e=d3.scale.category20().range();return function(t,n){return t.color||e[n%e.length]}},e.utils.customTheme=function(e,t,n){t=t||function(e){return e.key},n=n||d3.scale.category20().range();var r=n.length;return function(i,s){var o=t(i);return r||(r=n.length),typeof e[o]!="undefined"?typeof e[o]=="function"?e[o]():e[o]:n[--r]}},e.utils.pjax=function(t,n){function r(r){d3.html(r,function(r){var i=d3.select(n).node();i.parentNode.replaceChild(d3.select(r).select(n).node(),i),e.utils.pjax(t,n)})}d3.selectAll(t).on("click",function(){history.pushState(this.href,this.textContent,this.href),r(this.href),d3.event.preventDefault()}),d3.select(window).on("popstate",function(){d3.event.state&&r(d3.event.state)})},e.utils.calcApproxTextWidth=function(e){if(typeof e.style=="function"&&typeof e.text=="function"){var t=parseInt(e.style("font-size").replace("px","")),n=e.text().length;return n*t*.5}return 0},e.utils.NaNtoZero=function(e){return typeof e!="number"||isNaN(e)||e===null||e===Infinity?0:e},e.utils.optionsFunc=function(e){return e&&d3.map(e).forEach(function(e,t){typeof this[e]=="function"&&this[e](t)}.bind(this)),this},e.models.axis=function(){"use strict";function m(e){return e.each(function(e){var i=d3.select(this),m=i.selectAll("g.nv-wrap.nv-axis").data([e]),g=m.enter().append("g").attr("class","nvd3 nv-wrap nv-axis"),y=g.append("g"),b=m.select("g");p!==null?t.ticks(p):(t.orient()=="top"||t.orient()=="bottom")&&t.ticks(Math.abs(s.range()[1]-s.range()[0])/100),b.transition().call(t),v=v||t.scale();var w=t.tickFormat();w==null&&(w=v.tickFormat());var E=b.selectAll("text.nv-axislabel").data([o||null]);E.exit().remove();switch(t.orient()){case"top":E.enter().append("text").attr("class","nv-axislabel");var S=s.range().length==2?s.range()[1]:s.range()[s.range().length-1]+(s.range()[1]-s.range()[0]);E.attr("text-anchor","middle").attr("y",0).attr("x",S/2);if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text"),x.exit().remove(),x.attr("transform",function(e,t){return"translate("+s(e)+",0)"}).select("text").attr("dy","-0.5em").attr("y",-t.tickPadding()).attr("text-anchor","middle").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate("+s.range()[t]+",0)"})}break;case"bottom":var T=36,N=30,C=b.selectAll("g").select("text");if(f%360){C.each(function(e,t){var n=this.getBBox().width;n>N&&(N=n)});var k=Math.abs(Math.sin(f*Math.PI/180)),T=(k?k*N:N)+30;C.attr("transform",function(e,t,n){return"rotate("+f+" 0,0)"}).style("text-anchor",f%360>0?"start":"end")}E.enter().append("text").attr("class","nv-axislabel");var S=s.range().length==2?s.range()[1]:s.range()[s.range().length-1]+(s.range()[1]-s.range()[0]);E.attr("text-anchor","middle").attr("y",T).attr("x",S/2);if(u){var x=m.selectAll("g.nv-axisMaxMin").data([s.domain()[0],s.domain()[s.domain().length-1]]);x.enter().append("g").attr("class","nv-axisMaxMin").append("text"),x.exit().remove(),x.attr("transform",function(e,t){return"translate("+(s(e)+(h?s.rangeBand()/2:0))+",0)"}).select("text").attr("dy",".71em").attr("y",t.tickPadding()).attr("transform",function(e,t,n){return"rotate("+f+" 0,0)"}).style("text-anchor",f?f%360>0?"start":"end":"middle").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate("+(s(e)+(h?s.rangeBand()/2:0))+",0)"})}c&&C.attr("transform",function(e,t){return"translate(0,"+(t%2==0?"0":"12")+")"});break;case"right":E.enter().append("text").attr("class","nv-axislabel"),E.style("text-anchor",l?"middle":"begin").attr("transform",l?"rotate(90)":"").attr("y",l?-Math.max(n.right,r)+12:-10).attr("x",l?s.range()[0]/2:t.tickPadding());if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(e,t){return"translate(0,"+s(e)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",t.tickPadding()).style("text-anchor","start").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate(0,"+s.range()[t]+")"}).select("text").style("opacity",1)}break;case"left":E.enter().append("text").attr("class","nv-axislabel"),E.style("text-anchor",l?"middle":"end").attr("transform",l?"rotate(-90)":"").attr("y",l?-Math.max(n.left,r)+d:-10).attr("x",l?-s.range()[0]/2:-t.tickPadding());if(u){var x=m.selectAll("g.nv-axisMaxMin").data(s.domain());x.enter().append("g").attr("class","nv-axisMaxMin").append("text").style("opacity",0),x.exit().remove(),x.attr("transform",function(e,t){return"translate(0,"+v(e)+")"}).select("text").attr("dy",".32em").attr("y",0).attr("x",-t.tickPadding()).attr("text-anchor","end").text(function(e,t){var n=w(e);return(""+n).match("NaN")?"":n}),x.transition().attr("transform",function(e,t){return"translate(0,"+s.range()[t]+")"}).select("text").style("opacity",1)}}E.text(function(e){return e}),u&&(t.orient()==="left"||t.orient()==="right")&&(b.selectAll("g").each(function(e,t){d3.select(this).select("text").attr("opacity",1);if(s(e)<s.range()[1]+10||s(e)>s.range()[0]-10)(e>1e-10||e<-1e-10)&&d3.select(this).attr("opacity",0),d3.select(this).select("text").attr("opacity",0)}),s.domain()[0]==s.domain()[1]&&s.domain()[0]==0&&m.selectAll("g.nv-axisMaxMin").style("opacity",function(e,t){return t?0:1}));if(u&&(t.orient()==="top"||t.orient()==="bottom")){var L=[];m.selectAll("g.nv-axisMaxMin").each(function(e,t){try{t?L.push(s(e)-this.getBBox().width-4):L.push(s(e)+this.getBBox().width+4)}catch(n){t?L.push(s(e)-4):L.push(s(e)+4)}}),b.selectAll("g").each(function(e,t){if(s(e)<L[0]||s(e)>L[1])e>1e-10||e<-1e-10?d3.select(this).remove():d3.select(this).select("text").remove()})}a&&b.selectAll(".tick").filter(function(e){return!parseFloat(Math.round(e.__data__*1e5)/1e6)&&e.__data__!==undefined}).classed("zero",!0),v=s.copy()}),m}var t=d3.svg.axis(),n={top:0,right:0,bottom:0,left:0},r=75,i=60,s=d3.scale.linear(),o=null,u=!0,a=!0,f=0,l=!0,c=!1,h=!1,p=null,d=12;t.scale(s).orient("bottom").tickFormat(function(e){return e});var v;return m.axis=t,d3.rebind(m,t,"orient","tickValues","tickSubdivide","tickSize","tickPadding","tickFormat"),d3.rebind(m,s,"domain","range","rangeBand","rangeBands"),m.options=e.utils.optionsFunc.bind(m),m.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,m):n},m.width=function(e){return arguments.length?(r=e,m):r},m.ticks=function(e){return arguments.length?(p=e,m):p},m.height=function(e){return arguments.length?(i=e,m):i},m.axisLabel=function(e){return arguments.length?(o=e,m):o},m.showMaxMin=function(e){return arguments.length?(u=e,m):u},m.highlightZero=function(e){return arguments.length?(a=e,m):a},m.scale=function(e){return arguments.length?(s=e,t.scale(s),h=typeof s.rangeBands=="function",d3.rebind(m,s,"domain","range","rangeBand","rangeBands"),m):s},m.rotateYLabel=function(e){return arguments.length?(l=e,m):l},m.rotateLabels=function(e){return arguments.length?(f=e,m):f},m.staggerLabels=function(e){return arguments.length?(c=e,m):c},m.axisLabelDistance=function(e){return arguments.length?(d=e,m):d},m},e.models.bullet=function(){"use strict";function m(e){return e.each(function(e,n){var p=c-t.left-t.right,m=h-t.top-t.bottom,g=d3.select(this),y=i.call(this,e,n).slice().sort(d3.descending),b=s.call(this,e,n).slice().sort(d3.descending),w=o.call(this,e,n).slice().sort(d3.descending),E=u.call(this,e,n).slice(),S=a.call(this,e,n).slice(),x=f.call(this,e,n).slice(),T=d3.scale.linear().domain(d3.extent(d3.merge([l,y]))).range(r?[p,0]:[0,p]),N=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(T.range());this.__chart__=T;var C=d3.min(y),k=d3.max(y),L=y[1],A=g.selectAll("g.nv-wrap.nv-bullet").data([e]),O=A.enter().append("g").attr("class","nvd3 nv-wrap nv-bullet"),M=O.append("g"),_=A.select("g");M.append("rect").attr("class","nv-range nv-rangeMax"),M.append("rect").attr("class","nv-range nv-rangeAvg"),M.append("rect").attr("class","nv-range nv-rangeMin"),M.append("rect").attr("class","nv-measure"),M.append("path").attr("class","nv-markerTriangle"),A.attr("transform","translate("+t.left+","+t.top+")");var D=function(e){return Math.abs(N(e)-N(0))},P=function(e){return Math.abs(T(e)-T(0))},H=function(e){return e<0?N(e):N(0)},B=function(e){return e<0?T(e):T(0)};_.select("rect.nv-rangeMax").attr("height",m).attr("width",P(k>0?k:C)).attr("x",B(k>0?k:C)).datum(k>0?k:C),_.select("rect.nv-rangeAvg").attr("height",m).attr("width",P(L)).attr("x",B(L)).datum(L),_.select("rect.nv-rangeMin").attr("height",m).attr("width",P(k)).attr("x",B(k)).attr("width",P(k>0?C:k)).attr("x",B(k>0?C:k)).datum(k>0?C:k),_.select("rect.nv-measure").style("fill",d).attr("height",m/3).attr("y",m/3).attr("width",w<0?T(0)-T(w[0]):T(w[0])-T(0)).attr("x",B(w)).on("mouseover",function(){v.elementMouseover({value:w[0],label:x[0]||"Current",pos:[T(w[0]),m/2]})}).on("mouseout",function(){v.elementMouseout({value:w[0],label:x[0]||"Current"})});var j=m/6;b[0]?_.selectAll("path.nv-markerTriangle").attr("transform",function(e){return"translate("+T(b[0])+","+m/2+")"}).attr("d","M0,"+j+"L"+j+","+ -j+" "+ -j+","+ -j+"Z").on("mouseover",function(){v.elementMouseover({value:b[0],label:S[0]||"Previous",pos:[T(b[0]),m/2]})}).on("mouseout",function(){v.elementMouseout({value:b[0],label:S[0]||"Previous"})}):_.selectAll("path.nv-markerTriangle").remove(),A.selectAll(".nv-range").on("mouseover",function(e,t){var n=E[t]||(t?t==1?"Mean":"Minimum":"Maximum");v.elementMouseover({value:e,label:n,pos:[T(e),m/2]})}).on("mouseout",function(e,t){var n=E[t]||(t?t==1?"Mean":"Minimum":"Maximum");v.elementMouseout({value:e,label:n})})}),m}var t={top:0,right:0,bottom:0,left:0},n="left",r=!1,i=function(e){return e.ranges},s=function(e){return e.markers},o=function(e){return e.measures},u=function(e){return e.rangeLabels?e.rangeLabels:[]},a=function(e){return e.markerLabels?e.markerLabels:[]},f=function(e){return e.measureLabels?e.measureLabels:[]},l=[0],c=380,h=30,p=null,d=e.utils.getColor(["#1f77b4"]),v=d3.dispatch("elementMouseover","elementMouseout");return m.dispatch=v,m.options=e.utils.optionsFunc.bind(m),m.orient=function(e){return arguments.length?(n=e,r=n=="right"||n=="bottom",m):n},m.ranges=function(e){return arguments.length?(i=e,m):i},m.markers=function(e){return arguments.length?(s=e,m):s},m.measures=function(e){return arguments.length?(o=e,m):o},m.forceX=function(e){return arguments.length?(l=e,m):l},m.width=function(e){return arguments.length?(c=e,m):c},m.height=function(e){return arguments.length?(h=e,m):h},m.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,m):t},m.tickFormat=function(e){return arguments.length?(p=e,m):p},m.color=function(t){return arguments.length?(d=e.utils.getColor(t),m):d},m},e.models.bulletChart=function(){"use strict";function m(e){return e.each(function(n,h){var g=d3.select(this),y=(a||parseInt(g.style("width"))||960)-i.left-i.right,b=f-i.top-i.bottom,w=this;m.update=function(){m(e)},m.container=this;if(!n||!s.call(this,n,h)){var E=g.selectAll(".nv-noData").data([p]);return E.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),E.attr("x",i.left+y/2).attr("y",18+i.top+b/2).text(function(e){return e}),m}g.selectAll(".nv-noData").remove();var S=s.call(this,n,h).slice().sort(d3.descending),x=o.call(this,n,h).slice().sort(d3.descending),T=u.call(this,n,h).slice().sort(d3.descending),N=g.selectAll("g.nv-wrap.nv-bulletChart").data([n]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-bulletChart"),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-bulletWrap"),k.append("g").attr("class","nv-titles"),N.attr("transform","translate("+i.left+","+i.top+")");var A=d3.scale.linear().domain([0,Math.max(S[0],x[0],T[0])]).range(r?[y,0]:[0,y]),O=this.__chart__||d3.scale.linear().domain([0,Infinity]).range(A.range());this.__chart__=A;var M=function(e){return Math.abs(O(e)-O(0))},_=function(e){return Math.abs(A(e)-A(0))},D=k.select(".nv-titles").append("g").attr("text-anchor","end").attr("transform","translate(-6,"+(f-i.top-i.bottom)/2+")");D.append("text").attr("class","nv-title").text(function(e){return e.title}),D.append("text").attr("class","nv-subtitle").attr("dy","1em").text(function(e){return e.subtitle}),t.width(y).height(b);var P=L.select(".nv-bulletWrap");d3.transition(P).call(t);var H=l||A.tickFormat(y/100),B=L.selectAll("g.nv-tick").data(A.ticks(y/50),function(e){return this.textContent||H(e)}),j=B.enter().append("g").attr("class","nv-tick").attr("transform",function(e){return"translate("+O(e)+",0)"}).style("opacity",1e-6);j.append("line").attr("y1",b).attr("y2",b*7/6),j.append("text").attr("text-anchor","middle").attr("dy","1em").attr("y",b*7/6).text(H);var F=d3.transition(B).attr("transform",function(e){return"translate("+A(e)+",0)"}).style("opacity",1);F.select("line").attr("y1",b).attr("y2",b*7/6),F.select("text").attr("y",b*7/6),d3.transition(B.exit()).attr("transform",function(e){return"translate("+A(e)+",0)"}).style("opacity",1e-6).remove(),d.on("tooltipShow",function(e){e.key=n.title,c&&v(e,w.parentNode)})}),d3.timer.flush(),m}var t=e.models.bullet(),n="left",r=!1,i={top:5,right:40,bottom:20,left:120},s=function(e){return e.ranges},o=function(e){return e.markers},u=function(e){return e.measures},a=null,f=55,l=null,c=!0,h=function(e,t,n,r,i){return"<h3>"+t+"</h3>"+"<p>"+n+"</p>"},p="No Data Available.",d=d3.dispatch("tooltipShow","tooltipHide"),v=function(t,n){var r=t.pos[0]+(n.offsetLeft||0)+i.left,s=t.pos[1]+(n.offsetTop||0)+i.top,o=h(t.key,t.label,t.value,t,m);e.tooltip.show([r,s],o,t.value<0?"e":"w",null,n)};return t.dispatch.on("elementMouseover.tooltip",function(e){d.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){d.tooltipHide(e)}),d.on("tooltipHide",function(){c&&e.tooltip.cleanup()}),m.dispatch=d,m.bullet=t,d3.rebind(m,t,"color"),m.options=e.utils.optionsFunc.bind(m),m.orient=function(e){return arguments.length?(n=e,r=n=="right"||n=="bottom",m):n},m.ranges=function(e){return arguments.length?(s=e,m):s},m.markers=function(e){return arguments.length?(o=e,m):o},m.measures=function(e){return arguments.length?(u=e,m):u},m.width=function(e){return arguments.length?(a=e,m):a},m.height=function(e){return arguments.length?(f=e,m):f},m.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.right=typeof e.right!="undefined"?e.right:i.right,i.bottom=typeof e.bottom!="undefined"?e.bottom:i.bottom,i.left=typeof e.left!="undefined"?e.left:i.left,m):i},m.tickFormat=function(e){return arguments.length?(l=e,m):l},m.tooltips=function(e){return arguments.length?(c=e,m):c},m.tooltipContent=function(e){return arguments.length?(h=e,m):h},m.noData=function(e){return arguments.length?(p=e,m):p},m},e.models.cumulativeLineChart=function(){"use strict";function D(b){return b.each(function(b){function q(e,t){d3.select(D.container).style("cursor","ew-resize")}function R(e,t){M.x=d3.event.x,M.i=Math.round(O.invert(M.x)),rt()}function U(e,t){d3.select(D.container).style("cursor","auto"),x.index=M.i,k.stateChange(x)}function rt(){nt.data([M]);var e=D.transitionDuration();D.transitionDuration(0),D.update(),D.transitionDuration(e)}var A=d3.select(this).classed("nv-chart-"+S,!0),H=this,B=(f||parseInt(A.style("width"))||960)-u.left-u.right,j=(l||parseInt(A.style("height"))||400)-u.top-u.bottom;D.update=function(){A.transition().duration(L).call(D)},D.container=this,x.disabled=b.map(function(e){return!!e.disabled});if(!T){var F;T={};for(F in x)x[F]instanceof Array?T[F]=x[F].slice(0):T[F]=x[F]}var I=d3.behavior.drag().on("dragstart",q).on("drag",R).on("dragend",U);if(!b||!b.length||!b.filter(function(e){return e.values.length}).length){var z=A.selectAll(".nv-noData").data([N]);return z.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),z.attr("x",u.left+B/2).attr("y",u.top+j/2).text(function(e){return e}),D}A.selectAll(".nv-noData").remove(),w=t.xScale(),E=t.yScale();if(!y){var W=b.filter(function(e){return!e.disabled}).map(function(e,n){var r=d3.extent(e.values,t.y());return r[0]<-0.95&&(r[0]=-0.95),[(r[0]-r[1])/(1+r[1]),(r[1]-r[0])/(1+r[0])]}),X=[d3.min(W,function(e){return e[0]}),d3.max(W,function(e){return e[1]})];t.yDomain(X)}else t.yDomain(null);O.domain([0,b[0].values.length-1]).range([0,B]).clamp(!0);var b=P(M.i,b),V=g?"none":"all",$=A.selectAll("g.nv-wrap.nv-cumulativeLine").data([b]),J=$.enter().append("g").attr("class","nvd3 nv-wrap nv-cumulativeLine").append("g"),K=$.select("g");J.append("g").attr("class","nv-interactive"),J.append("g").attr("class","nv-x nv-axis").style("pointer-events","none"),J.append("g").attr("class","nv-y nv-axis"),J.append("g").attr("class","nv-background"),J.append("g").attr("class","nv-linesWrap").style("pointer-events",V),J.append("g").attr("class","nv-avgLinesWrap").style("pointer-events","none"),J.append("g").attr("class","nv-legendWrap"),J.append("g").attr("class","nv-controlsWrap"),c&&(i.width(B),K.select(".nv-legendWrap").datum(b).call(i),u.top!=i.height()&&(u.top=i.height(),j=(l||parseInt(A.style("height"))||400)-u.top-u.bottom),K.select(".nv-legendWrap").attr("transform","translate(0,"+ -u.top+")"));if(m){var Q=[{key:"Re-scale y-axis",disabled:!y}];s.width(140).color(["#444","#444","#444"]).rightAlign(!1).margin({top:5,right:0,bottom:5,left:20}),K.select(".nv-controlsWrap").datum(Q).attr("transform","translate(0,"+ -u.top+")").call(s)}$.attr("transform","translate("+u.left+","+u.top+")"),d&&K.select(".nv-y.nv-axis").attr("transform","translate("+B+",0)");var G=b.filter(function(e){return e.tempDisabled});$.select(".tempDisabled").remove(),G.length&&$.append("text").attr("class","tempDisabled").attr("x",B/2).attr("y","-.71em").style("text-anchor","end").text(G.map(function(e){return e.key}).join(", ")+" values cannot be calculated for this time period."),g&&(o.width(B).height(j).margin({left:u.left,top:u.top}).svgContainer(A).xScale(w),$.select(".nv-interactive").call(o)),J.select(".nv-background").append("rect"),K.select(".nv-background rect").attr("width",B).attr("height",j),t.y(function(e){return e.display.y}).width(B).height(j).color(b.map(function(e,t){return e.color||a(e,t)}).filter(function(e,t){return!b[t].disabled&&!b[t].tempDisabled}));var Y=K.select(".nv-linesWrap").datum(b.filter(function(e){return!e.disabled&&!e.tempDisabled}));Y.call(t),b.forEach(function(e,t){e.seriesIndex=t});var Z=b.filter(function(e){return!e.disabled&&!!C(e)}),et=K.select(".nv-avgLinesWrap").selectAll("line").data(Z,function(e){return e.key}),tt=function(e){var t=E(C(e));return t<0?0:t>j?j:t};et.enter().append("line").style("stroke-width",2).style("stroke-dasharray","10,10").style("stroke",function(e,n){return t.color()(e,e.seriesIndex)}).attr("x1",0).attr("x2",B).attr("y1",tt).attr("y2",tt),et.style("stroke-opacity",function(e){var t=E(C(e));return t<0||t>j?0:1}).attr("x1",0).attr("x2",B).attr("y1",tt).attr("y2",tt),et.exit().remove();var nt=Y.selectAll(".nv-indexLine").data([M]);nt.enter().append("rect").attr("class","nv-indexLine").attr("width",3).attr("x",-2).attr("fill","red").attr("fill-opacity",.5).style("pointer-events","all").call(I),nt.attr("transform",function(e){return"translate("+O(e.i)+",0)"}).attr("height",j),h&&(n.scale(w).ticks(Math.min(b[0].values.length,B/70)).tickSize(-j,0),K.select(".nv-x.nv-axis").attr("transform","translate(0,"+E.range()[0]+")"),d3.transition(K.select(".nv-x.nv-axis")).call(n)),p&&(r.scale(E).ticks(j/36).tickSize(-B,0),d3.transition(K.select(".nv-y.nv-axis")).call(r)),K.select(".nv-background rect").on("click",function(){M.x=d3.mouse(this)[0],M.i=Math.round(O.invert(M.x)),x.index=M.i,k.stateChange(x),rt()}),t.dispatch.on("elementClick",function(e){M.i=e.pointIndex,M.x=O(M.i),x.index=M.i,k.stateChange(x),rt()}),s.dispatch.on("legendClick",function(e,t){e.disabled=!e.disabled,y=!e.disabled,x.rescaleY=y,k.stateChange(x),D.update()}),i.dispatch.on("stateChange",function(e){x.disabled=e.disabled,k.stateChange(x),D.update()}),o.dispatch.on("elementMousemove",function(i){t.clearHighlights();var s,f,l,c=[];b.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){f=e.interactiveBisect(n.values,i.pointXValue,D.x()),t.highlightPoint(r,f,!0);var o=n.values[f];if(typeof o=="undefined")return;typeof s=="undefined"&&(s=o),typeof l=="undefined"&&(l=D.xScale()(D.x()(o,f))),c.push({key:n.key,value:D.y()(o,f),color:a(n,n.seriesIndex)})});if(c.length>2){var h=D.yScale().invert(i.mouseY),p=Math.abs(D.yScale().domain()[0]-D.yScale().domain()[1]),d=.03*p,m=e.nearestValueIndex(c.map(function(e){return e.value}),h,d);m!==null&&(c[m].highlight=!0)}var g=n.tickFormat()(D.x()(s,f),f);o.tooltip.position({left:l+u.left,top:i.mouseY+u.top}).chartContainer(H.parentNode).enabled(v).valueFormatter(function(e,t){return r.tickFormat()(e)}).data({value:g,series:c})(),o.renderGuideLine(l)}),o.dispatch.on("elementMouseout",function(e){k.tooltipHide(),t.clearHighlights()}),k.on("tooltipShow",function(e){v&&_(e,H.parentNode)}),k.on("changeState",function(e){typeof e.disabled!="undefined"&&(b.forEach(function(t,n){t.disabled=e.disabled[n]}),x.disabled=e.disabled),typeof e.index!="undefined"&&(M.i=e.index,M.x=O(M.i),x.index=e.index,nt.data([M])),typeof e.rescaleY!="undefined"&&(y=e.rescaleY),D.update()})}),D}function P(e,n){return n.map(function(n,r){if(!n.values)return n;var i=t.y()(n.values[e],e);return i<-0.95&&!A?(n.tempDisabled=!0,n):(n.tempDisabled=!1,n.values=
n.values.map(function(e,n){return e.display={y:(t.y()(e,n)-i)/(1+i)},e}),n)})}var t=e.models.line(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.interactiveGuideline(),u={top:30,right:30,bottom:50,left:60},a=e.utils.defaultColor(),f=null,l=null,c=!0,h=!0,p=!0,d=!1,v=!0,m=!0,g=!1,y=!0,b=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},w,E,S=t.id(),x={index:0,rescaleY:y},T=null,N="No Data Available.",C=function(e){return e.average},k=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),L=250,A=!1;n.orient("bottom").tickPadding(7),r.orient(d?"right":"left"),s.updateState(!1);var O=d3.scale.linear(),M={i:0,x:0},_=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=b(i.series.key,a,f,i,D);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],k.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){k.tooltipHide(e)}),k.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),D.dispatch=k,D.lines=t,D.legend=i,D.xAxis=n,D.yAxis=r,D.interactiveLayer=o,d3.rebind(D,t,"defined","isArea","x","y","xScale","yScale","size","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","useVoronoi","id"),D.options=e.utils.optionsFunc.bind(D),D.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,D):u},D.width=function(e){return arguments.length?(f=e,D):f},D.height=function(e){return arguments.length?(l=e,D):l},D.color=function(t){return arguments.length?(a=e.utils.getColor(t),i.color(a),D):a},D.rescaleY=function(e){return arguments.length?(y=e,D):y},D.showControls=function(e){return arguments.length?(m=e,D):m},D.useInteractiveGuideline=function(e){return arguments.length?(g=e,e===!0&&(D.interactive(!1),D.useVoronoi(!1)),D):g},D.showLegend=function(e){return arguments.length?(c=e,D):c},D.showXAxis=function(e){return arguments.length?(h=e,D):h},D.showYAxis=function(e){return arguments.length?(p=e,D):p},D.rightAlignYAxis=function(e){return arguments.length?(d=e,r.orient(e?"right":"left"),D):d},D.tooltips=function(e){return arguments.length?(v=e,D):v},D.tooltipContent=function(e){return arguments.length?(b=e,D):b},D.state=function(e){return arguments.length?(x=e,D):x},D.defaultState=function(e){return arguments.length?(T=e,D):T},D.noData=function(e){return arguments.length?(N=e,D):N},D.average=function(e){return arguments.length?(C=e,D):C},D.transitionDuration=function(e){return arguments.length?(L=e,D):L},D.noErrorCheck=function(e){return arguments.length?(A=e,D):A},D},e.models.discreteBar=function(){"use strict";function E(e){return e.each(function(e){var i=n-t.left-t.right,E=r-t.top-t.bottom,S=d3.select(this);e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})});var T=p&&d?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0}})});s.domain(p||d3.merge(T).map(function(e){return e.x})).rangeBands(v||[0,i],.1),o.domain(d||d3.extent(d3.merge(T).map(function(e){return e.y}).concat(f))),c?o.range(m||[E-(o.domain()[0]<0?12:0),o.domain()[1]>0?12:0]):o.range(m||[E,0]),b=b||s,w=w||o.copy().range([o(0),o(0)]);var N=S.selectAll("g.nv-wrap.nv-discretebar").data([e]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-discretebar"),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-groups"),N.attr("transform","translate("+t.left+","+t.top+")");var A=N.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});A.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),A.exit().transition().style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),A.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}),A.transition().style("stroke-opacity",1).style("fill-opacity",.75);var O=A.selectAll("g.nv-bar").data(function(e){return e.values});O.exit().remove();var M=O.enter().append("g").attr("transform",function(e,t,n){return"translate("+(s(u(e,t))+s.rangeBand()*.05)+", "+o(0)+")"}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),g.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),g.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){g.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){g.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(t.series+.5)/e.length,o(a(t,n))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()});M.append("rect").attr("height",0).attr("width",s.rangeBand()*.9/e.length),c?(M.append("text").attr("text-anchor","middle"),O.select("text").text(function(e,t){return h(a(e,t))}).transition().attr("x",s.rangeBand()*.9/2).attr("y",function(e,t){return a(e,t)<0?o(a(e,t))-o(0)+12:-4})):O.selectAll("text").remove(),O.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).style("fill",function(e,t){return e.color||l(e,t)}).style("stroke",function(e,t){return e.color||l(e,t)}).select("rect").attr("class",y).transition().attr("width",s.rangeBand()*.9/e.length),O.transition().attr("transform",function(e,t){var n=s(u(e,t))+s.rangeBand()*.05,r=a(e,t)<0?o(0):o(0)-o(a(e,t))<1?o(0)-1:o(a(e,t));return"translate("+n+", "+r+")"}).select("rect").attr("height",function(e,t){return Math.max(Math.abs(o(a(e,t))-o(d&&d[0]||0))||1)}),b=s.copy(),w=o.copy()}),E}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.ordinal(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=e.utils.defaultColor(),c=!1,h=d3.format(",.2f"),p,d,v,m,g=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),y="discreteBar",b,w;return E.dispatch=g,E.options=e.utils.optionsFunc.bind(E),E.x=function(e){return arguments.length?(u=e,E):u},E.y=function(e){return arguments.length?(a=e,E):a},E.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,E):t},E.width=function(e){return arguments.length?(n=e,E):n},E.height=function(e){return arguments.length?(r=e,E):r},E.xScale=function(e){return arguments.length?(s=e,E):s},E.yScale=function(e){return arguments.length?(o=e,E):o},E.xDomain=function(e){return arguments.length?(p=e,E):p},E.yDomain=function(e){return arguments.length?(d=e,E):d},E.xRange=function(e){return arguments.length?(v=e,E):v},E.yRange=function(e){return arguments.length?(m=e,E):m},E.forceY=function(e){return arguments.length?(f=e,E):f},E.color=function(t){return arguments.length?(l=e.utils.getColor(t),E):l},E.id=function(e){return arguments.length?(i=e,E):i},E.showValues=function(e){return arguments.length?(c=e,E):c},E.valueFormat=function(e){return arguments.length?(h=e,E):h},E.rectClass=function(e){return arguments.length?(y=e,E):y},E},e.models.discreteBarChart=function(){"use strict";function w(e){return e.each(function(e){var u=d3.select(this),p=this,E=(s||parseInt(u.style("width"))||960)-i.left-i.right,S=(o||parseInt(u.style("height"))||400)-i.top-i.bottom;w.update=function(){g.beforeUpdate(),u.transition().duration(y).call(w)},w.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var T=u.selectAll(".nv-noData").data([m]);return T.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),T.attr("x",i.left+E/2).attr("y",i.top+S/2).text(function(e){return e}),w}u.selectAll(".nv-noData").remove(),d=t.xScale(),v=t.yScale().clamp(!0);var N=u.selectAll("g.nv-wrap.nv-discreteBarWithAxes").data([e]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-discreteBarWithAxes").append("g"),k=C.append("defs"),L=N.select("g");C.append("g").attr("class","nv-x nv-axis"),C.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),C.append("g").attr("class","nv-barsWrap"),L.attr("transform","translate("+i.left+","+i.top+")"),l&&L.select(".nv-y.nv-axis").attr("transform","translate("+E+",0)"),t.width(E).height(S);var A=L.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));A.transition().call(t),k.append("clipPath").attr("id","nv-x-label-clip-"+t.id()).append("rect"),L.select("#nv-x-label-clip-"+t.id()+" rect").attr("width",d.rangeBand()*(c?2:1)).attr("height",16).attr("x",-d.rangeBand()/(c?1:2));if(a){n.scale(d).ticks(E/100).tickSize(-S,0),L.select(".nv-x.nv-axis").attr("transform","translate(0,"+(v.range()[0]+(t.showValues()&&v.domain()[0]<0?16:0))+")"),L.select(".nv-x.nv-axis").transition().call(n);var O=L.select(".nv-x.nv-axis").selectAll("g");c&&O.selectAll("text").attr("transform",function(e,t,n){return"translate(0,"+(n%2==0?"5":"17")+")"})}f&&(r.scale(v).ticks(S/36).tickSize(-E,0),L.select(".nv-y.nv-axis").transition().call(r)),L.select(".nv-zeroLine line").attr("x1",0).attr("x2",E).attr("y1",v(0)).attr("y2",v(0)),g.on("tooltipShow",function(e){h&&b(e,p.parentNode)})}),w}var t=e.models.discreteBar(),n=e.models.axis(),r=e.models.axis(),i={top:15,right:10,bottom:50,left:60},s=null,o=null,u=e.utils.getColor(),a=!0,f=!0,l=!1,c=!1,h=!0,p=function(e,t,n,r,i){return"<h3>"+t+"</h3>"+"<p>"+n+"</p>"},d,v,m="No Data Available.",g=d3.dispatch("tooltipShow","tooltipHide","beforeUpdate"),y=250;n.orient("bottom").highlightZero(!1).showMaxMin(!1).tickFormat(function(e){return e}),r.orient(l?"right":"left").tickFormat(d3.format(",.1f"));var b=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=p(i.series.key,a,f,i,w);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+i.left,e.pos[1]+i.top],g.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){g.tooltipHide(e)}),g.on("tooltipHide",function(){h&&e.tooltip.cleanup()}),w.dispatch=g,w.discretebar=t,w.xAxis=n,w.yAxis=r,d3.rebind(w,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","id","showValues","valueFormat"),w.options=e.utils.optionsFunc.bind(w),w.margin=function(e){return arguments.length?(i.top=typeof e.top!="undefined"?e.top:i.top,i.right=typeof e.right!="undefined"?e.right:i.right,i.bottom=typeof e.bottom!="undefined"?e.bottom:i.bottom,i.left=typeof e.left!="undefined"?e.left:i.left,w):i},w.width=function(e){return arguments.length?(s=e,w):s},w.height=function(e){return arguments.length?(o=e,w):o},w.color=function(n){return arguments.length?(u=e.utils.getColor(n),t.color(u),w):u},w.showXAxis=function(e){return arguments.length?(a=e,w):a},w.showYAxis=function(e){return arguments.length?(f=e,w):f},w.rightAlignYAxis=function(e){return arguments.length?(l=e,r.orient(e?"right":"left"),w):l},w.staggerLabels=function(e){return arguments.length?(c=e,w):c},w.tooltips=function(e){return arguments.length?(h=e,w):h},w.tooltipContent=function(e){return arguments.length?(p=e,w):p},w.noData=function(e){return arguments.length?(m=e,w):m},w.transitionDuration=function(e){return arguments.length?(y=e,w):y},w},e.models.distribution=function(){"use strict";function l(e){return e.each(function(e){var a=n-(i==="x"?t.left+t.right:t.top+t.bottom),l=i=="x"?"y":"x",c=d3.select(this);f=f||u;var h=c.selectAll("g.nv-distribution").data([e]),p=h.enter().append("g").attr("class","nvd3 nv-distribution"),d=p.append("g"),v=h.select("g");h.attr("transform","translate("+t.left+","+t.top+")");var m=v.selectAll("g.nv-dist").data(function(e){return e},function(e){return e.key});m.enter().append("g"),m.attr("class",function(e,t){return"nv-dist nv-series-"+t}).style("stroke",function(e,t){return o(e,t)});var g=m.selectAll("line.nv-dist"+i).data(function(e){return e.values});g.enter().append("line").attr(i+"1",function(e,t){return f(s(e,t))}).attr(i+"2",function(e,t){return f(s(e,t))}),m.exit().selectAll("line.nv-dist"+i).transition().attr(i+"1",function(e,t){return u(s(e,t))}).attr(i+"2",function(e,t){return u(s(e,t))}).style("stroke-opacity",0).remove(),g.attr("class",function(e,t){return"nv-dist"+i+" nv-dist"+i+"-"+t}).attr(l+"1",0).attr(l+"2",r),g.transition().attr(i+"1",function(e,t){return u(s(e,t))}).attr(i+"2",function(e,t){return u(s(e,t))}),f=u.copy()}),l}var t={top:0,right:0,bottom:0,left:0},n=400,r=8,i="x",s=function(e){return e[i]},o=e.utils.defaultColor(),u=d3.scale.linear(),a,f;return l.options=e.utils.optionsFunc.bind(l),l.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,l):t},l.width=function(e){return arguments.length?(n=e,l):n},l.axis=function(e){return arguments.length?(i=e,l):i},l.size=function(e){return arguments.length?(r=e,l):r},l.getData=function(e){return arguments.length?(s=d3.functor(e),l):s},l.scale=function(e){return arguments.length?(u=e,l):u},l.color=function(t){return arguments.length?(o=e.utils.getColor(t),l):o},l},e.models.historicalBar=function(){"use strict";function w(E){return E.each(function(w){var E=n-t.left-t.right,S=r-t.top-t.bottom,T=d3.select(this);s.domain(d||d3.extent(w[0].values.map(u).concat(f))),c?s.range(m||[E*.5/w[0].values.length,E*(w[0].values.length-.5)/w[0].values.length]):s.range(m||[0,E]),o.domain(v||d3.extent(w[0].values.map(a).concat(l))).range(g||[S,0]),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]-s.domain()[0]*.01,s.domain()[1]+s.domain()[1]*.01]):s.domain([-1,1])),o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]+o.domain()[0]*.01,o.domain()[1]-o.domain()[1]*.01]):o.domain([-1,1]));var N=T.selectAll("g.nv-wrap.nv-historicalBar-"+i).data([w[0].values]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBar-"+i),k=C.append("defs"),L=C.append("g"),A=N.select("g");L.append("g").attr("class","nv-bars"),N.attr("transform","translate("+t.left+","+t.top+")"),T.on("click",function(e,t){y.chartClick({data:e,index:t,pos:d3.event,id:i})}),k.append("clipPath").attr("id","nv-chart-clip-path-"+i).append("rect"),N.select("#nv-chart-clip-path-"+i+" rect").attr("width",E).attr("height",S),A.attr("clip-path",h?"url(#nv-chart-clip-path-"+i+")":"");var O=N.select(".nv-bars").selectAll(".nv-bar").data(function(e){return e},function(e,t){return u(e,t)});O.exit().remove();var M=O.enter().append("rect").attr("x",0).attr("y",function(t,n){return e.utils.NaNtoZero(o(Math.max(0,a(t,n))))}).attr("height",function(t,n){return e.utils.NaNtoZero(Math.abs(o(a(t,n))-o(0)))}).attr("transform",function(e,t){return"translate("+(s(u(e,t))-E/w[0].values.length*.45)+",0)"}).on("mouseover",function(e,t){if(!b)return;d3.select(this).classed("hover",!0),y.elementMouseover({point:e,series:w[0],pos:[s(u(e,t)),o(a(e,t))],pointIndex:t,seriesIndex:0,e:d3.event})}).on("mouseout",function(e,t){if(!b)return;d3.select(this).classed("hover",!1),y.elementMouseout({point:e,series:w[0],pointIndex:t,seriesIndex:0,e:d3.event})}).on("click",function(e,t){if(!b)return;y.elementClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()}).on("dblclick",function(e,t){if(!b)return;y.elementDblClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()});O.attr("fill",function(e,t){return p(e,t)}).attr("class",function(e,t,n){return(a(e,t)<0?"nv-bar negative":"nv-bar positive")+" nv-bar-"+n+"-"+t}).transition().attr("transform",function(e,t){return"translate("+(s(u(e,t))-E/w[0].values.length*.45)+",0)"}).attr("width",E/w[0].values.length*.9),O.transition().attr("y",function(t,n){var r=a(t,n)<0?o(0):o(0)-o(a(t,n))<1?o(0)-1:o(a(t,n));return e.utils.NaNtoZero(r)}).attr("height",function(t,n){return e.utils.NaNtoZero(Math.max(Math.abs(o(a(t,n))-o(0)),1))})}),w}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[],l=[0],c=!1,h=!0,p=e.utils.defaultColor(),d,v,m,g,y=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),b=!0;return w.highlightPoint=function(e,t){d3.select(".nv-historicalBar-"+i).select(".nv-bars .nv-bar-0-"+e).classed("hover",t)},w.clearHighlights=function(){d3.select(".nv-historicalBar-"+i).select(".nv-bars .nv-bar.hover").classed("hover",!1)},w.dispatch=y,w.options=e.utils.optionsFunc.bind(w),w.x=function(e){return arguments.length?(u=e,w):u},w.y=function(e){return arguments.length?(a=e,w):a},w.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,w):t},w.width=function(e){return arguments.length?(n=e,w):n},w.height=function(e){return arguments.length?(r=e,w):r},w.xScale=function(e){return arguments.length?(s=e,w):s},w.yScale=function(e){return arguments.length?(o=e,w):o},w.xDomain=function(e){return arguments.length?(d=e,w):d},w.yDomain=function(e){return arguments.length?(v=e,w):v},w.xRange=function(e){return arguments.length?(m=e,w):m},w.yRange=function(e){return arguments.length?(g=e,w):g},w.forceX=function(e){return arguments.length?(f=e,w):f},w.forceY=function(e){return arguments.length?(l=e,w):l},w.padData=function(e){return arguments.length?(c=e,w):c},w.clipEdge=function(e){return arguments.length?(h=e,w):h},w.color=function(t){return arguments.length?(p=e.utils.getColor(t),w):p},w.id=function(e){return arguments.length?(i=e,w):i},w.interactive=function(e){return arguments.length?(b=!1,w):b},w},e.models.historicalBarChart=function(){"use strict";function x(e){return e.each(function(d){var T=d3.select(this),N=this,C=(u||parseInt(T.style("width"))||960)-s.left-s.right,k=(a||parseInt(T.style("height"))||400)-s.top-s.bottom;x.update=function(){T.transition().duration(E).call(x)},x.container=this,g.disabled=d.map(function(e){return!!e.disabled});if(!y){var L;y={};for(L in g)g[L]instanceof Array?y[L]=g[L].slice(0):y[L]=g[L]}if(!d||!d.length||!d.filter(function(e){return e.values.length}).length){var A=T.selectAll(".nv-noData").data([b]);return A.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),A.attr("x",s.left+C/2).attr("y",s.top+k/2).text(function(e){return e}),x}T.selectAll(".nv-noData").remove(),v=t.xScale(),m=t.yScale();var O=T.selectAll("g.nv-wrap.nv-historicalBarChart").data([d]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-historicalBarChart").append("g"),_=O.select("g");M.append("g").attr("class","nv-x nv-axis"),M.append("g").attr("class","nv-y nv-axis"),M.append("g").attr("class","nv-barsWrap"),M.append("g").attr("class","nv-legendWrap"),f&&(i.width(C),_.select(".nv-legendWrap").datum(d).call(i),s.top!=i.height()&&(s.top=i.height(),k=(a||parseInt(T.style("height"))||400)-s.top-s.bottom),O.select(".nv-legendWrap").attr("transform","translate(0,"+ -s.top+")")),O.attr("transform","translate("+s.left+","+s.top+")"),h&&_.select(".nv-y.nv-axis").attr("transform","translate("+C+",0)"),t.width(C).height(k).color(d.map(function(e,t){return e.color||o(e,t)}).filter(function(e,t){return!d[t].disabled}));var D=_.select(".nv-barsWrap").datum(d.filter(function(e){return!e.disabled}));D.transition().call(t),l&&(n.scale(v).tickSize(-k,0),_.select(".nv-x.nv-axis").attr("transform","translate(0,"+m.range()[0]+")"),_.select(".nv-x.nv-axis").transition().call(n)),c&&(r.scale(m).ticks(k/36).tickSize(-C,0),_.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("legendClick",function(t,n){t.disabled=!t.disabled,d.filter(function(e){return!e.disabled}).length||d.map(function(e){return e.disabled=!1,O.selectAll(".nv-series").classed("disabled",!1),e}),g.disabled=d.map(function(e){return!!e.disabled}),w.stateChange(g),e.transition().call(x)}),i.dispatch.on("legendDblclick",function(e){d.forEach(function(e){e.disabled=!0}),e.disabled=!1,g.disabled=d.map(function(e){return!!e.disabled}),w.stateChange(g),x.update()}),w.on("tooltipShow",function(e){p&&S(e,N.parentNode)}),w.on("changeState",function(e){typeof e.disabled!="undefined"&&(d.forEach(function(t,n){t.disabled=e.disabled[n]}),g.disabled=e.disabled),x.update()})}),x}var t=e.models.historicalBar(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s={top:30,right:90,bottom:50,left:90},o=e.utils.defaultColor(),u=null,a=null,f=!1,l=!0,c=!0,h=!1,p=!0,d=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},v,m,g={},y=null,b="No Data Available.",w=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),E=250;n.orient("bottom").tickPadding(7),r.orient(h?"right":"left");var S=function(i,s){if(s){var o=d3.select(s).select("svg"),u=o.node()?o.attr("viewBox"):null;if(u){u=u.split(" ");var a=parseInt(o.style("width"))/u[2];i.pos[0]=i.pos[0]*a,i.pos[1]=i.pos[1]*a}}var f=i.pos[0]+(s.offsetLeft||0),l=i.pos[1]+(s.offsetTop||0),c=n.tickFormat()(t.x()(i.point,i.pointIndex)),h=r.tickFormat()(t.y()(i.point,i.pointIndex)),p=d(i.series.key,c,h,i,x);e.tooltip.show([f,l],p,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+s.left,e.pos[1]+s.top],w.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){w.tooltipHide(e)}),w.on("tooltipHide",function(){p&&e.tooltip.cleanup()}),x.dispatch=w,x.bars=t,x.legend=i,x.xAxis=n,x.yAxis=r,d3.rebind(x,t,"defined","isArea","x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","id","interpolate","highlightPoint","clearHighlights","interactive"),x.options=e.utils.optionsFunc.bind(x),x.margin=function(e){return arguments.length?(s.top=typeof e.top!="undefined"?e.top:s.top,s.right=typeof e.right!="undefined"?e.right:s.right,s.bottom=typeof e.bottom!="undefined"?e.bottom:s.bottom,s.left=typeof e.left!="undefined"?e.left:s.left,x):s},x.width=function(e){return arguments.length?(u=e,x):u},x.height=function(e){return arguments.length?(a=e,x):a},x.color=function(t){return arguments.length?(o=e.utils.getColor(t),i.color(o),x):o},x.showLegend=function(e){return arguments.length?(f=e,x):f},x.showXAxis=function(e){return arguments.length?(l=e,x):l},x.showYAxis=function(e){return arguments.length?(c=e,x):c},x.rightAlignYAxis=function(e){return arguments.length?(h=e,r.orient(e?"right":"left"),x):h},x.tooltips=function(e){return arguments.length?(p=e,x):p},x.tooltipContent=function(e){return arguments.length?(d=e,x):d},x.state=function(e){return arguments.length?(g=e,x):g},x.defaultState=function(e){return arguments.length?(y=e,x):y},x.noData=function(e){return arguments.length?(b=e,x):b},x.transitionDuration=function(e){return arguments.length?(E=e,x):E},x},e.models.indentedTree=function(){"use strict";function g(e){return e.each(function(e){function k(e,t,n){d3.event.stopPropagation();if(d3.event.shiftKey&&!n)return d3.event.shiftKey=!1,e.values&&e.values.forEach(function(e){(e.values||e._values)&&k(e,0,!0)}),!0;if(!O(e))return!0;e.values?(e._values=e.values,e.values=null):(e.values=e._values,e._values=null),g.update()}function L(e){return e._values&&e._values.length?h:e.values&&e.values.length?p:""}function A(e){return e._values&&e._values.length}function O(e){var t=e.values||e._values;return t&&t.length}var t=1,n=d3.select(this),i=d3.layout.tree().children(function(e){return e.values}).size([r,f]);g.update=function(){n.transition().duration(600).call(g)},e[0]||(e[0]={key:a});var s=i.nodes(e[0]),y=d3.select(this).selectAll("div").data([[s]]),b=y.enter().append("div").attr("class","nvd3 nv-wrap nv-indentedtree"),w=b.append("table"),E=y.select("table").attr("width","100%").attr("class",c);if(o){var S=w.append("thead"),x=S.append("tr");l.forEach(function(e){x.append("th").attr("width",e.width?e.width:"10%").style("text-align",e.type=="numeric"?"right":"left").append("span").text(e.label)})}var T=E.selectAll("tbody").data(function(e){return e});T.enter().append("tbody"),t=d3.max(s,function(e){return e.depth}),i.size([r,t*f]);var N=T.selectAll("tr").data(function(e){return e.filter(function(e){return u&&!e.children?u(e):!0})},function(e,t){return e.id||e.id||++m});N.exit().remove(),N.select("img.nv-treeicon").attr("src",L).classed("folded",A);var C=N.enter().append("tr");l.forEach(function(e,t){var n=C.append("td").style("padding-left",function(e){return(t?0:e.depth*f+12+(L(e)?0:16))+"px"},"important").style("text-align",e.type=="numeric"?"right":"left");t==0&&n.append("img").classed("nv-treeicon",!0).classed("nv-folded",A).attr("src",L).style("width","14px").style("height","14px").style("padding","0 1px").style("display",function(e){return L(e)?"inline-block":"none"}).on("click",k),n.each(function(n){!t&&v(n)?d3.select(this).append("a").attr("href",v).attr("class",d3.functor(e.classes)).append("span"):d3.select(this).append("span"),d3.select(this).select("span").attr("class",d3.functor(e.classes)).text(function(t){return e.format?e.format(t):t[e.key]||"-"})}),e.showCount&&(n.append("span").attr("class","nv-childrenCount"),N.selectAll("span.nv-childrenCount").text(function(e){return e.values&&e.values.length||e._values&&e._values.length?"("+(e.values&&e.values.filter(function(e){return u?u(e):!0}).length||e._values&&e._values.filter(function(e){return u?u(e):!0}).length||0)+")":""}))}),N.order().on("click",function(e){d.elementClick({row:this,data:e,pos:[e.x,e.y]})}).on("dblclick",function(e){d.elementDblclick({row:this,data:e,pos:[e.x,e.y]})}).on("mouseover",function(e){d.elementMouseover({row:this,data:e,pos:[e.x,e.y]})}).on("mouseout",function(e){d.elementMouseout({row:this,data:e,pos:[e.x,e.y]})})}),g}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e4),o=!0,u=!1,a="No Data Available.",f=20,l=[{key:"key",label:"Name",type:"text"}],c=null,h="images/grey-plus.png",p="images/grey-minus.png",d=d3.dispatch("elementClick","elementDblclick","elementMouseover","elementMouseout"),v=function(e){return e.url},m=0;return g.options=e.utils.optionsFunc.bind(g),g.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,g):t},g.width=function(e){return arguments.length?(n=e,g):n},g.height=function(e){return arguments.length?(r=e,g):r},g.color=function(t){return arguments.length?(i=e.utils.getColor(t),scatter.color(i),g):i},g.id=function(e){return arguments.length?(s=e,g):s},g.header=function(e){return arguments.length?(o=e,g):o},g.noData=function(e){return arguments.length?(a=e,g):a},g.filterZero=function(e){return arguments.length?(u=e,g):u},g.columns=function(e){return arguments.length?(l=e,g):l},g.tableClass=function(e){return arguments.length?(c=e,g):c},g.iconOpen=function(e){return arguments.length?(h=e,g):h},g.iconClose=function(e){return arguments.length?(p=e,g):p},g.getUrl=function(e){return arguments.length?(v=e,g):v},g},e.models.legend=function(){"use strict";function c(h){return h.each(function(c){var h=n-t.left-t.right,p=d3.select(this),d=p.selectAll("g.nv-legend").data([c]),v=d.enter().append("g").attr("class","nvd3 nv-legend").append("g"),m=d.select("g");d.attr("transform","translate("+t.left+","+t.top+")");var g=m.selectAll(".nv-series").data(function(e){return e}),y=g.enter().append("g").attr("class","nv-series").on("mouseover",function(e,t){l.legendMouseover(e,t)}).on("mouseout",function(e,t){l.legendMouseout(e,t)}).on("click",function(e,t){l.legendClick(e,t),a&&(f?(c.forEach(function(e){e.disabled=!0}),e.disabled=!1):(e.disabled=!e.disabled,c.every(function(e){return e.disabled})&&c.forEach(function(e){e.disabled=!1})),l.stateChange({disabled:c.map(function(e){return!!e.disabled})}))}).on("dblclick",function(e,t){l.legendDblclick(e,t),a&&(c.forEach(function(e){e.disabled=!0}),e.disabled=!1,l.stateChange({disabled:c.map(function(e){return!!e.disabled})}))});y.append("circle").style("stroke-width",2).attr("class","nv-legend-symbol").attr("r",5),y.append("text").attr("text-anchor","start").attr("class","nv-legend-text").attr("dy",".32em").attr("dx","8"),g.classed("disabled",function(e){return e.disabled}),g.exit().remove(),g.select("circle").style("fill",function(e,t){return e.color||s(e,t)}).style("stroke",function(e,t){return e.color||s(e,t)}),g.select("text").text(i);if(o){var b=[];g.each(function(t,n){var r=d3.select(this).select("text"),i;try{i=r.getComputedTextLength();if(i<=0)throw Error()}catch(s){i=e.utils.calcApproxTextWidth(r)}b.push(i+28)});var w=0,E=0,S=[];while(E<h&&w<b.length)S[w]=b[w],E+=b[w++];w===0&&(w=1);while(E>h&&w>1){S=[],w--;for(var x=0;x<b.length;x++)b[x]>(S[x%w]||0)&&(S[x%w]=b[x]);E=S.reduce(function(e,t,n,r){return e+t})}var T=[];for(var N=0,C=0;N<w;N++)T[N]=C,C+=S[N];g.attr("transform",function(e,t){return"translate("+T[t%w]+","+(5+Math.floor(t/w)*20)+")"}),u?m.attr("transform","translate("+(n-t.right-E)+","+t.top+")"):m.attr("transform","translate(0,"+t.top+")"),r=t.top+t.bottom+Math.ceil(b.length/w)*20}else{var k=5,L=5,A=0,O;g.attr("transform",function(e,r){var i=d3.select(this).select("text").node().getComputedTextLength()+28;return O=L,n<t.left+t.right+O+i&&(L=O=5,k+=20),L+=i,L>A&&(A=L),"translate("+O+","+k+")"}),m.attr("transform","translate("+(n-t.right-A)+","+t.top+")"),r=t.top+t.bottom+k+15}}),c}var t={top:5,right:0,bottom:5,left:0},n=400,r=20,i=function(e){return e.key},s=e.utils.defaultColor(),o=!0,u=!0,a=!0,f=!1,l=d3.dispatch("legendClick","legendDblclick","legendMouseover","legendMouseout","stateChange");return c.dispatch=l,c.options=e.utils.optionsFunc.bind(c),c.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,c):t},c.width=function(e){return arguments.length?(n=e,c):n},c.height=function(e){return arguments.length?(r=e,c):r},c.key=function(e){return arguments.length?(i=e,c):i},c.color=function(t){return arguments.length?(s=e.utils.getColor(t),c):s},c.align=function(e){return arguments.length?(o=e,c):o},c.rightAlign=function(e){return arguments.length?(u=e,c):u},c.updateState=function(e){return arguments.length?(a=e,c):a},c.radioButtonMode=function(e){return arguments.length?(f=e,c):f},c},e.models.line=function(){"use strict";function m(g){return g.each(function(m){var g=r-n.left-n.right,b=i-n.top-n.bottom,w=d3.select(this);c=t.xScale(),h=t.yScale(),d=d||c,v=v||h;var E=w.selectAll("g.nv-wrap.nv-line").data([m]),S=E.enter().append("g").attr("class","nvd3 nv-wrap nv-line"),T=S.append("defs"),N=S.append("g"),C=E.select("g");N.append("g").attr("class","nv-groups"),N.append("g").attr("class","nv-scatterWrap"),E.attr("transform","translate("+n.left+","+n.top+")"),t.width(g).height(b);var k=E.select(".nv-scatterWrap");k.transition().call(t),T.append("clipPath").attr("id","nv-edge-clip-"+t.id()).append("rect"),E.select("#nv-edge-clip-"+t.id()+" rect").attr("width",g).attr("height",b),C.attr("clip-path",l?"url(#nv-edge-clip-"+t.id()+")":""),k.attr("clip-path",l?"url(#nv-edge-clip-"+t.id()+")":"");var L=E.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});L.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),L.exit().remove(),L.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return s(e,t)}).style("stroke",function(e,t){return s(e,t)}),L.transition().style("stroke-opacity",1).style("fill-opacity",.5);var A=L.selectAll("path.nv-area").data(function(e){return f(e)?[e]:[]});A.enter().append("path").attr("class","nv-area").attr("d",function(t){return d3.svg.area().interpolate(p).defined(a).x(function(t,n){return e.
utils.NaNtoZero(d(o(t,n)))}).y0(function(t,n){return e.utils.NaNtoZero(v(u(t,n)))}).y1(function(e,t){return v(h.domain()[0]<=0?h.domain()[1]>=0?0:h.domain()[1]:h.domain()[0])}).apply(this,[t.values])}),L.exit().selectAll("path.nv-area").remove(),A.transition().attr("d",function(t){return d3.svg.area().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(c(o(t,n)))}).y0(function(t,n){return e.utils.NaNtoZero(h(u(t,n)))}).y1(function(e,t){return h(h.domain()[0]<=0?h.domain()[1]>=0?0:h.domain()[1]:h.domain()[0])}).apply(this,[t.values])});var O=L.selectAll("path.nv-line").data(function(e){return[e.values]});O.enter().append("path").attr("class","nv-line").attr("d",d3.svg.line().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(d(o(t,n)))}).y(function(t,n){return e.utils.NaNtoZero(v(u(t,n)))})),O.transition().attr("d",d3.svg.line().interpolate(p).defined(a).x(function(t,n){return e.utils.NaNtoZero(c(o(t,n)))}).y(function(t,n){return e.utils.NaNtoZero(h(u(t,n)))})),d=c.copy(),v=h.copy()}),m}var t=e.models.scatter(),n={top:0,right:0,bottom:0,left:0},r=960,i=500,s=e.utils.defaultColor(),o=function(e){return e.x},u=function(e){return e.y},a=function(e,t){return!isNaN(u(e,t))&&u(e,t)!==null},f=function(e){return e.area},l=!1,c,h,p="linear";t.size(16).sizeDomain([16,256]);var d,v;return m.dispatch=t.dispatch,m.scatter=t,d3.rebind(m,t,"id","interactive","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","forceX","forceY","forceSize","clipVoronoi","useVoronoi","clipRadius","padData","highlightPoint","clearHighlights"),m.options=e.utils.optionsFunc.bind(m),m.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,m):n},m.width=function(e){return arguments.length?(r=e,m):r},m.height=function(e){return arguments.length?(i=e,m):i},m.x=function(e){return arguments.length?(o=e,t.x(e),m):o},m.y=function(e){return arguments.length?(u=e,t.y(e),m):u},m.clipEdge=function(e){return arguments.length?(l=e,m):l},m.color=function(n){return arguments.length?(s=e.utils.getColor(n),t.color(s),m):s},m.interpolate=function(e){return arguments.length?(p=e,m):p},m.defined=function(e){return arguments.length?(a=e,m):a},m.isArea=function(e){return arguments.length?(f=d3.functor(e),m):f},m},e.models.lineChart=function(){"use strict";function N(m){return m.each(function(m){var C=d3.select(this),k=this,L=(a||parseInt(C.style("width"))||960)-o.left-o.right,A=(f||parseInt(C.style("height"))||400)-o.top-o.bottom;N.update=function(){C.transition().duration(x).call(N)},N.container=this,b.disabled=m.map(function(e){return!!e.disabled});if(!w){var O;w={};for(O in b)b[O]instanceof Array?w[O]=b[O].slice(0):w[O]=b[O]}if(!m||!m.length||!m.filter(function(e){return e.values.length}).length){var M=C.selectAll(".nv-noData").data([E]);return M.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),M.attr("x",o.left+L/2).attr("y",o.top+A/2).text(function(e){return e}),N}C.selectAll(".nv-noData").remove(),g=t.xScale(),y=t.yScale();var _=C.selectAll("g.nv-wrap.nv-lineChart").data([m]),D=_.enter().append("g").attr("class","nvd3 nv-wrap nv-lineChart").append("g"),P=_.select("g");D.append("rect").style("opacity",0),D.append("g").attr("class","nv-x nv-axis"),D.append("g").attr("class","nv-y nv-axis"),D.append("g").attr("class","nv-linesWrap"),D.append("g").attr("class","nv-legendWrap"),D.append("g").attr("class","nv-interactive"),P.select("rect").attr("width",L).attr("height",A>0?A:0),l&&(i.width(L),P.select(".nv-legendWrap").datum(m).call(i),o.top!=i.height()&&(o.top=i.height(),A=(f||parseInt(C.style("height"))||400)-o.top-o.bottom),_.select(".nv-legendWrap").attr("transform","translate(0,"+ -o.top+")")),_.attr("transform","translate("+o.left+","+o.top+")"),p&&P.select(".nv-y.nv-axis").attr("transform","translate("+L+",0)"),d&&(s.width(L).height(A).margin({left:o.left,top:o.top}).svgContainer(C).xScale(g),_.select(".nv-interactive").call(s)),t.width(L).height(A).color(m.map(function(e,t){return e.color||u(e,t)}).filter(function(e,t){return!m[t].disabled}));var H=P.select(".nv-linesWrap").datum(m.filter(function(e){return!e.disabled}));H.transition().call(t),c&&(n.scale(g).ticks(L/100).tickSize(-A,0),P.select(".nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),P.select(".nv-x.nv-axis").transition().call(n)),h&&(r.scale(y).ticks(A/36).tickSize(-L,0),P.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),N.update()}),s.dispatch.on("elementMousemove",function(i){t.clearHighlights();var a,f,l,c=[];m.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){f=e.interactiveBisect(n.values,i.pointXValue,N.x()),t.highlightPoint(r,f,!0);var s=n.values[f];if(typeof s=="undefined")return;typeof a=="undefined"&&(a=s),typeof l=="undefined"&&(l=N.xScale()(N.x()(s,f))),c.push({key:n.key,value:N.y()(s,f),color:u(n,n.seriesIndex)})});if(c.length>2){var h=N.yScale().invert(i.mouseY),p=Math.abs(N.yScale().domain()[0]-N.yScale().domain()[1]),d=.03*p,g=e.nearestValueIndex(c.map(function(e){return e.value}),h,d);g!==null&&(c[g].highlight=!0)}var y=n.tickFormat()(N.x()(a,f));s.tooltip.position({left:l+o.left,top:i.mouseY+o.top}).chartContainer(k.parentNode).enabled(v).valueFormatter(function(e,t){return r.tickFormat()(e)}).data({value:y,series:c})(),s.renderGuideLine(l)}),s.dispatch.on("elementMouseout",function(e){S.tooltipHide(),t.clearHighlights()}),S.on("tooltipShow",function(e){v&&T(e,k.parentNode)}),S.on("changeState",function(e){typeof e.disabled!="undefined"&&m.length===e.disabled.length&&(m.forEach(function(t,n){t.disabled=e.disabled[n]}),b.disabled=e.disabled),N.update()})}),N}var t=e.models.line(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.interactiveGuideline(),o={top:30,right:20,bottom:50,left:60},u=e.utils.defaultColor(),a=null,f=null,l=!0,c=!0,h=!0,p=!1,d=!1,v=!0,m=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},g,y,b={},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),x=250;n.orient("bottom").tickPadding(7),r.orient(p?"right":"left");var T=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=m(i.series.key,a,f,i,N);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),N.dispatch=S,N.lines=t,N.legend=i,N.xAxis=n,N.yAxis=r,N.interactiveLayer=s,d3.rebind(N,t,"defined","isArea","x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","useVoronoi","id","interpolate"),N.options=e.utils.optionsFunc.bind(N),N.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,N):o},N.width=function(e){return arguments.length?(a=e,N):a},N.height=function(e){return arguments.length?(f=e,N):f},N.color=function(t){return arguments.length?(u=e.utils.getColor(t),i.color(u),N):u},N.showLegend=function(e){return arguments.length?(l=e,N):l},N.showXAxis=function(e){return arguments.length?(c=e,N):c},N.showYAxis=function(e){return arguments.length?(h=e,N):h},N.rightAlignYAxis=function(e){return arguments.length?(p=e,r.orient(e?"right":"left"),N):p},N.useInteractiveGuideline=function(e){return arguments.length?(d=e,e===!0&&(N.interactive(!1),N.useVoronoi(!1)),N):d},N.tooltips=function(e){return arguments.length?(v=e,N):v},N.tooltipContent=function(e){return arguments.length?(m=e,N):m},N.state=function(e){return arguments.length?(b=e,N):b},N.defaultState=function(e){return arguments.length?(w=e,N):w},N.noData=function(e){return arguments.length?(E=e,N):E},N.transitionDuration=function(e){return arguments.length?(x=e,N):x},N},e.models.linePlusBarChart=function(){"use strict";function T(e){return e.each(function(e){var l=d3.select(this),c=this,v=(a||parseInt(l.style("width"))||960)-u.left-u.right,N=(f||parseInt(l.style("height"))||400)-u.top-u.bottom;T.update=function(){l.transition().call(T)},b.disabled=e.map(function(e){return!!e.disabled});if(!w){var C;w={};for(C in b)b[C]instanceof Array?w[C]=b[C].slice(0):w[C]=b[C]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var k=l.selectAll(".nv-noData").data([E]);return k.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),k.attr("x",u.left+v/2).attr("y",u.top+N/2).text(function(e){return e}),T}l.selectAll(".nv-noData").remove();var L=e.filter(function(e){return!e.disabled&&e.bar}),A=e.filter(function(e){return!e.bar});m=A.filter(function(e){return!e.disabled}).length&&A.filter(function(e){return!e.disabled})[0].values.length?t.xScale():n.xScale(),g=n.yScale(),y=t.yScale();var O=d3.select(this).selectAll("g.nv-wrap.nv-linePlusBar").data([e]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),_=O.select("g");M.append("g").attr("class","nv-x nv-axis"),M.append("g").attr("class","nv-y1 nv-axis"),M.append("g").attr("class","nv-y2 nv-axis"),M.append("g").attr("class","nv-barsWrap"),M.append("g").attr("class","nv-linesWrap"),M.append("g").attr("class","nv-legendWrap"),p&&(o.width(v/2),_.select(".nv-legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.bar?" (left axis)":" (right axis)"),e})).call(o),u.top!=o.height()&&(u.top=o.height(),N=(f||parseInt(l.style("height"))||400)-u.top-u.bottom),_.select(".nv-legendWrap").attr("transform","translate("+v/2+","+ -u.top+")")),O.attr("transform","translate("+u.left+","+u.top+")"),t.width(v).height(N).color(e.map(function(e,t){return e.color||h(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar})),n.width(v).height(N).color(e.map(function(e,t){return e.color||h(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar}));var D=_.select(".nv-barsWrap").datum(L.length?L:[{values:[]}]),P=_.select(".nv-linesWrap").datum(A[0]&&!A[0].disabled?A:[{values:[]}]);d3.transition(D).call(n),d3.transition(P).call(t),r.scale(m).ticks(v/100).tickSize(-N,0),_.select(".nv-x.nv-axis").attr("transform","translate(0,"+g.range()[0]+")"),d3.transition(_.select(".nv-x.nv-axis")).call(r),i.scale(g).ticks(N/36).tickSize(-v,0),d3.transition(_.select(".nv-y1.nv-axis")).style("opacity",L.length?1:0).call(i),s.scale(y).ticks(N/36).tickSize(L.length?0:-v,0),_.select(".nv-y2.nv-axis").style("opacity",A.length?1:0).attr("transform","translate("+v+",0)"),d3.transition(_.select(".nv-y2.nv-axis")).call(s),o.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),T.update()}),S.on("tooltipShow",function(e){d&&x(e,c.parentNode)}),S.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),b.disabled=t.disabled),T.update()})}),T}var t=e.models.line(),n=e.models.historicalBar(),r=e.models.axis(),i=e.models.axis(),s=e.models.axis(),o=e.models.legend(),u={top:30,right:60,bottom:50,left:60},a=null,f=null,l=function(e){return e.x},c=function(e){return e.y},h=e.utils.defaultColor(),p=!0,d=!0,v=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},m,g,y,b={},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState");n.padData(!0),t.clipEdge(!1).padData(!0),r.orient("bottom").tickPadding(7).highlightZero(!1),i.orient("left"),s.orient("right");var x=function(n,o){var u=n.pos[0]+(o.offsetLeft||0),a=n.pos[1]+(o.offsetTop||0),f=r.tickFormat()(t.x()(n.point,n.pointIndex)),l=(n.series.bar?i:s).tickFormat()(t.y()(n.point,n.pointIndex)),c=v(n.series.key,f,l,n,T);e.tooltip.show([u,a],c,n.value<0?"n":"s",null,o)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),n.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],S.tooltipShow(e)}),n.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){d&&e.tooltip.cleanup()}),T.dispatch=S,T.legend=o,T.lines=t,T.bars=n,T.xAxis=r,T.y1Axis=i,T.y2Axis=s,d3.rebind(T,t,"defined","size","clipVoronoi","interpolate"),T.options=e.utils.optionsFunc.bind(T),T.x=function(e){return arguments.length?(l=e,t.x(e),n.x(e),T):l},T.y=function(e){return arguments.length?(c=e,t.y(e),n.y(e),T):c},T.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,T):u},T.width=function(e){return arguments.length?(a=e,T):a},T.height=function(e){return arguments.length?(f=e,T):f},T.color=function(t){return arguments.length?(h=e.utils.getColor(t),o.color(h),T):h},T.showLegend=function(e){return arguments.length?(p=e,T):p},T.tooltips=function(e){return arguments.length?(d=e,T):d},T.tooltipContent=function(e){return arguments.length?(v=e,T):v},T.state=function(e){return arguments.length?(b=e,T):b},T.defaultState=function(e){return arguments.length?(w=e,T):w},T.noData=function(e){return arguments.length?(E=e,T):E},T},e.models.lineWithFocusChart=function(){"use strict";function k(e){return e.each(function(e){function U(e){var t=+(e=="e"),n=t?1:-1,r=M/3;return"M"+.5*n+","+r+"A6,6 0 0 "+t+" "+6.5*n+","+(r+6)+"V"+(2*r-6)+"A6,6 0 0 "+t+" "+.5*n+","+2*r+"Z"+"M"+2.5*n+","+(r+8)+"V"+(2*r-8)+"M"+4.5*n+","+(r+8)+"V"+(2*r-8)}function z(){a.empty()||a.extent(w),I.data([a.empty()?g.domain():w]).each(function(e,t){var n=g(e[0])-v.range()[0],r=v.range()[1]-g(e[1]);d3.select(this).select(".left").attr("width",n<0?0:n),d3.select(this).select(".right").attr("x",g(e[1])).attr("width",r<0?0:r)})}function W(){w=a.empty()?null:a.extent();var n=a.empty()?g.domain():a.extent();if(Math.abs(n[0]-n[1])<=1)return;T.brush({extent:n,brush:a}),z();var s=H.select(".nv-focus .nv-linesWrap").datum(e.filter(function(e){return!e.disabled}).map(function(e,r){return{key:e.key,values:e.values.filter(function(e,r){return t.x()(e,r)>=n[0]&&t.x()(e,r)<=n[1]})}}));s.transition().duration(N).call(t),H.select(".nv-focus .nv-x.nv-axis").transition().duration(N).call(r),H.select(".nv-focus .nv-y.nv-axis").transition().duration(N).call(i)}var S=d3.select(this),L=this,A=(h||parseInt(S.style("width"))||960)-f.left-f.right,O=(p||parseInt(S.style("height"))||400)-f.top-f.bottom-d,M=d-l.top-l.bottom;k.update=function(){S.transition().duration(N).call(k)},k.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var _=S.selectAll(".nv-noData").data([x]);return _.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),_.attr("x",f.left+A/2).attr("y",f.top+O/2).text(function(e){return e}),k}S.selectAll(".nv-noData").remove(),v=t.xScale(),m=t.yScale(),g=n.xScale(),y=n.yScale();var D=S.selectAll("g.nv-wrap.nv-lineWithFocusChart").data([e]),P=D.enter().append("g").attr("class","nvd3 nv-wrap nv-lineWithFocusChart").append("g"),H=D.select("g");P.append("g").attr("class","nv-legendWrap");var B=P.append("g").attr("class","nv-focus");B.append("g").attr("class","nv-x nv-axis"),B.append("g").attr("class","nv-y nv-axis"),B.append("g").attr("class","nv-linesWrap");var j=P.append("g").attr("class","nv-context");j.append("g").attr("class","nv-x nv-axis"),j.append("g").attr("class","nv-y nv-axis"),j.append("g").attr("class","nv-linesWrap"),j.append("g").attr("class","nv-brushBackground"),j.append("g").attr("class","nv-x nv-brush"),b&&(u.width(A),H.select(".nv-legendWrap").datum(e).call(u),f.top!=u.height()&&(f.top=u.height(),O=(p||parseInt(S.style("height"))||400)-f.top-f.bottom-d),H.select(".nv-legendWrap").attr("transform","translate(0,"+ -f.top+")")),D.attr("transform","translate("+f.left+","+f.top+")"),t.width(A).height(O).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),n.defined(t.defined()).width(A).height(M).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),H.select(".nv-context").attr("transform","translate(0,"+(O+f.bottom+l.top)+")");var F=H.select(".nv-context .nv-linesWrap").datum(e.filter(function(e){return!e.disabled}));d3.transition(F).call(n),r.scale(v).ticks(A/100).tickSize(-O,0),i.scale(m).ticks(O/36).tickSize(-A,0),H.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+O+")"),a.x(g).on("brush",function(){var e=k.transitionDuration();k.transitionDuration(0),W(),k.transitionDuration(e)}),w&&a.extent(w);var I=H.select(".nv-brushBackground").selectAll("g").data([w||a.extent()]),q=I.enter().append("g");q.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",M),q.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",M);var R=H.select(".nv-x.nv-brush").call(a);R.selectAll("rect").attr("height",M),R.selectAll(".resize").append("path").attr("d",U),W(),s.scale(g).ticks(A/100).tickSize(-M,0),H.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),d3.transition(H.select(".nv-context .nv-x.nv-axis")).call(s),o.scale(y).ticks(M/36).tickSize(-A,0),d3.transition(H.select(".nv-context .nv-y.nv-axis")).call(o),H.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+y.range()[0]+")"),u.dispatch.on("stateChange",function(e){k.update()}),T.on("tooltipShow",function(e){E&&C(e,L.parentNode)})}),k}var t=e.models.line(),n=e.models.line(),r=e.models.axis(),i=e.models.axis(),s=e.models.axis(),o=e.models.axis(),u=e.models.legend(),a=d3.svg.brush(),f={top:30,right:30,bottom:30,left:60},l={top:0,right:30,bottom:20,left:60},c=e.utils.defaultColor(),h=null,p=null,d=100,v,m,g,y,b=!0,w=null,E=!0,S=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},x="No Data Available.",T=d3.dispatch("tooltipShow","tooltipHide","brush"),N=250;t.clipEdge(!0),n.interactive(!1),r.orient("bottom").tickPadding(5),i.orient("left"),s.orient("bottom").tickPadding(5),o.orient("left");var C=function(n,s){var o=n.pos[0]+(s.offsetLeft||0),u=n.pos[1]+(s.offsetTop||0),a=r.tickFormat()(t.x()(n.point,n.pointIndex)),f=i.tickFormat()(t.y()(n.point,n.pointIndex)),l=S(n.series.key,a,f,n,k);e.tooltip.show([o,u],l,null,null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+f.left,e.pos[1]+f.top],T.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),T.on("tooltipHide",function(){E&&e.tooltip.cleanup()}),k.dispatch=T,k.legend=u,k.lines=t,k.lines2=n,k.xAxis=r,k.yAxis=i,k.x2Axis=s,k.y2Axis=o,d3.rebind(k,t,"defined","isArea","size","xDomain","yDomain","xRange","yRange","forceX","forceY","interactive","clipEdge","clipVoronoi","id"),k.options=e.utils.optionsFunc.bind(k),k.x=function(e){return arguments.length?(t.x(e),n.x(e),k):t.x},k.y=function(e){return arguments.length?(t.y(e),n.y(e),k):t.y},k.margin=function(e){return arguments.length?(f.top=typeof e.top!="undefined"?e.top:f.top,f.right=typeof e.right!="undefined"?e.right:f.right,f.bottom=typeof e.bottom!="undefined"?e.bottom:f.bottom,f.left=typeof e.left!="undefined"?e.left:f.left,k):f},k.margin2=function(e){return arguments.length?(l=e,k):l},k.width=function(e){return arguments.length?(h=e,k):h},k.height=function(e){return arguments.length?(p=e,k):p},k.height2=function(e){return arguments.length?(d=e,k):d},k.color=function(t){return arguments.length?(c=e.utils.getColor(t),u.color(c),k):c},k.showLegend=function(e){return arguments.length?(b=e,k):b},k.tooltips=function(e){return arguments.length?(E=e,k):E},k.tooltipContent=function(e){return arguments.length?(S=e,k):S},k.interpolate=function(e){return arguments.length?(t.interpolate(e),n.interpolate(e),k):t.interpolate()},k.noData=function(e){return arguments.length?(x=e,k):x},k.xTickFormat=function(e){return arguments.length?(r.tickFormat(e),s.tickFormat(e),k):r.tickFormat()},k.yTickFormat=function(e){return arguments.length?(i.tickFormat(e),o.tickFormat(e),k):i.tickFormat()},k.brushExtent=function(e){return arguments.length?(w=e,k):w},k.transitionDuration=function(e){return arguments.length?(N=e,k):N},k},e.models.linePlusBarWithFocusChart=function(){"use strict";function B(e){return e.each(function(e){function nt(e){var t=+(e=="e"),n=t?1:-1,r=q/3;return"M"+.5*n+","+r+"A6,6 0 0 "+t+" "+6.5*n+","+(r+6)+"V"+(2*r-6)+"A6,6 0 0 "+t+" "+.5*n+","+2*r+"Z"+"M"+2.5*n+","+(r+8)+"V"+(2*r-8)+"M"+4.5*n+","+(r+8)+"V"+(2*r-8)}function rt(){h.empty()||h.extent(x),Z.data([h.empty()?k.domain():x]).each(function(e,t){var n=k(e[0])-k.range()[0],r=k.range()[1]-k(e[1]);d3.select(this).select(".left").attr("width",n<0?0:n),d3.select(this).select(".right").attr("x",k(e[1])).attr("width",r<0?0:r)})}function it(){x=h.empty()?null:h.extent(),S=h.empty()?k.domain():h.extent(),D.brush({extent:S,brush:h}),rt(),r.width(F).height(I).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar})),t.width(F).height(I).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar}));var n=J.select(".nv-focus .nv-barsWrap").datum(U.length?U.map(function(e,t){return{key:e.key,values:e.values.filter(function(e,t){return r.x()(e,t)>=S[0]&&r.x()(e,t)<=S[1]})}}):[{values:[]}]),i=J.select(".nv-focus .nv-linesWrap").datum(z[0].disabled?[{values:[]}]:z.map(function(e,n){return{key:e.key,values:e.values.filter(function(e,n){return t.x()(e,n)>=S[0]&&t.x()(e,n)<=S[1]})}}));U.length?C=r.xScale():C=t.xScale(),s.scale(C).ticks(F/100).tickSize(-I,0),s.domain([Math.ceil(S[0]),Math.floor(S[1])]),J.select(".nv-x.nv-axis").transition().duration(P).call(s),n.transition().duration(P).call(r),i.transition().duration(P).call(t),J.select(".nv-focus .nv-x.nv-axis").attr("transform","translate(0,"+L.range()[0]+")"),u.scale(L).ticks(I/36).tickSize(-F,0),J.select(".nv-focus .nv-y1.nv-axis").style("opacity",U.length?1:0),a.scale(A).ticks(I/36).tickSize(U.length?0:-F,0),J.select(".nv-focus .nv-y2.nv-axis").style("opacity",z.length?1:0).attr("transform","translate("+C.range()[1]+",0)"),J.select(".nv-focus .nv-y1.nv-axis").transition().duration(P).call(u),J.select(".nv-focus .nv-y2.nv-axis").transition().duration(P).call(a)}var N=d3.select(this),j=this,F=(v||parseInt(N.style("width"))||960)-p.left-p.right,I=(m||parseInt(N.style("height"))||400)-p.top-p.bottom-g,q=g-d.top-d.bottom;B.update=function(){N.transition().duration(P).call(B)},B.container=this;if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var R=N.selectAll(".nv-noData").data([_]);return R.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),R.attr("x",p.left+F/2).attr("y",p.top+I/2).text(function(e){return e}),B}N.selectAll(".nv-noData").remove();var U=e.filter(function(e){return!e.disabled&&e.bar}),z=e.filter(function(e){return!e.bar});C=r.xScale(),k=o.scale(),L=r.yScale(),A=t.yScale(),O=i.yScale(),M=n.yScale();var W=e.filter(function(e){return!e.disabled&&e.bar}).map(function(e){return e.values.map(function(e,t){return{x:y(e,t),y:b(e,t)}})}),X=e.filter(function(e){return!e.disabled&&!e.bar}).map(function(e){return e.values.map(function(e,t){return{x:y(e,t),y:b(e,t)}})});C.range([0,F]),k.domain(d3.extent(d3.merge(W.concat(X)),function(e){return e.x})).range([0,F]);var V=N.selectAll("g.nv-wrap.nv-linePlusBar").data([e]),$=V.enter().append("g").attr("class","nvd3 nv-wrap nv-linePlusBar").append("g"),J=V.select("g");$.append("g").attr("class","nv-legendWrap");var K=$.append("g").attr("class","nv-focus");K.append("g").attr("class","nv-x nv-axis"),K.append("g").attr("class","nv-y1 nv-axis"),K.append("g").attr("class","nv-y2 nv-axis"),K.append("g").attr("class","nv-barsWrap"),K.append("g").attr("class","nv-linesWrap");var Q=$.append("g").attr("class","nv-context");Q.append("g").attr("class","nv-x nv-axis"),Q.append("g").attr("class","nv-y1 nv-axis"),Q.append("g").attr("class","nv-y2 nv-axis"),Q.append("g").attr("class","nv-barsWrap"),Q.append("g").attr("class","nv-linesWrap"),Q.append("g").attr("class","nv-brushBackground"),Q.append("g").attr("class","nv-x nv-brush"),E&&(c.width(F/2),J.select(".nv-legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.bar?" (left axis)":" (right axis)"),e})).call(c),p.top!=c.height()&&(p.top=c.height(),I=(m||parseInt(N.style("height"))||400)-p.top-p.bottom-g),J.select(".nv-legendWrap").attr("transform","translate("+F/2+","+ -p.top+")")),V.attr("transform","translate("+p.left+","+p.top+")"),i.width(F).height(q).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&e[n].bar})),n.width(F).height(q).color(e.map(function(e,t){return e.color||w(e,t)}).filter(function(t,n){return!e[n].disabled&&!e[n].bar}));var G=J.select(".nv-context .nv-barsWrap").datum(U.length?U:[{values:[]}]),Y=J.select(".nv-context .nv-linesWrap").datum(z[0].disabled?[{values:[]}]:z);J.select(".nv-context").attr("transform","translate(0,"+(I+p.bottom+d.top)+")"),G.transition().call(i),Y.transition().call(n),h.x(k).on("brush",it),x&&h.extent(x);var Z=J.select(".nv-brushBackground").selectAll("g").data([x||h.extent()]),et=Z.enter().append("g");et.append("rect").attr("class","left").attr("x",0).attr("y",0).attr("height",q),et.append("rect").attr("class","right").attr("x",0).attr("y",0).attr("height",q);var tt=J.select(".nv-x.nv-brush").call(h);tt.selectAll("rect").attr("height",q),tt.selectAll(".resize").append("path").attr("d",nt),o.ticks(F/100).tickSize(-q,0),J.select(".nv-context .nv-x.nv-axis").attr("transform","translate(0,"+O.range()[0]+")"),J.select(".nv-context .nv-x.nv-axis").transition().call(o),f.scale(O).ticks(q/36).tickSize(-F,0),J.select(".nv-context .nv-y1.nv-axis").style("opacity",U.length?1:0).attr("transform","translate(0,"+k.range()[0]+")"),J.select(".nv-context .nv-y1.nv-axis").transition().call(f),l.scale(M).ticks(q/36).tickSize(U.length?0:-F,0),J.select(".nv-context .nv-y2.nv-axis").style("opacity",z.length?1:0).attr("transform","translate("+k.range()[1]+",0)"),J.select(".nv-context .nv-y2.nv-axis").transition().call(l),c.dispatch.on("stateChange",function(e){B.update()}),D.on("tooltipShow",function(e){T&&H(e,j.parentNode)}),it()}),B}var t=e.models.line(),n=e.models.line(),r=e.models.historicalBar(),i=e.models.historicalBar(),s=e.models.axis(),o=e.models.axis(),u=e.models.axis(),a=e.models.axis(),f=e.models.axis(),l=e.models.axis(),c=e.models.legend(),h=d3.svg.brush(),p={top:30,right:30,bottom:30,left:60},d={top:0,right:30,bottom:20,left:60},v=null,m=null,g=100,y=function(e){return e.x},b=function(e){return e.y},w=e.utils.defaultColor(),E=!0,S,x=null,T=!0,N=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},C,k,L,A,O,M,_="No Data Available.",D=d3.dispatch("tooltipShow","tooltipHide","brush"),P=0;t.clipEdge(!0),n.interactive(!1),s.orient("bottom").tickPadding(5),u.orient("left"),a.orient("right"),o.orient("bottom").tickPadding(5),f.orient("left"),l.orient("right");var H=function(n,r){S&&(n.pointIndex+=Math.ceil(S[0]));var i=n.pos[0]+(r.offsetLeft||0),o=n.pos[1]+(r.offsetTop||0),f=s.tickFormat()(t.x()(n.point,n.pointIndex)),l=(n.series.bar?u:a).tickFormat()(t.y()(n.point,n.pointIndex)),c=N(n.series.key,f,l,n,B);e.tooltip.show([i,o],c,n.value<0?"n":"s",null,r)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+p.left,e.pos[1]+p.top],D.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){D.tooltipHide(e)}),r.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+p.left,e.pos[1]+p.top],D.tooltipShow(e)}),r.dispatch.on("elementMouseout.tooltip",function(e){D.tooltipHide(e)}),D.on("tooltipHide",function(){T&&e.tooltip.cleanup()}),B.dispatch=D,B.legend=c,B.lines=t,B.lines2=n,B.bars=r,B.bars2=i,B.xAxis=s,B.x2Axis=o,B.y1Axis=u,B.y2Axis=a,B.y3Axis=f,B.y4Axis=l,d3.rebind(B,t,"defined","size","clipVoronoi","interpolate"),B.options=e.utils.optionsFunc.bind(B),B.x=function(e){return arguments.length?(y=e,t.x(e),r.x(e),B):y},B.y=function(e){return arguments.length?(b=e,t.y(e),r.y(e),B):b},B.margin=function(e){return arguments.length?(p.top=typeof e.top!="undefined"?e.top:p.top,p.right=typeof e.right!="undefined"?e.right:p.right,p.bottom=typeof e.bottom!="undefined"?e.bottom:p.bottom,p.left=typeof e.left!="undefined"?e.left:p.left,B):p},B.width=function(e){return arguments.length?(v=e,B):v},B.height=function(e){return arguments.length?(m=e,B):m},B.color=function(t){return arguments.length?(w=e.utils.getColor(t),c.color(w),B):w},B.showLegend=function(e){return arguments.length?(E=e,B):E},B.tooltips=function(e){return arguments.length?(T=e,B):T},B.tooltipContent=function(e){return arguments.length?(N=e,B):N},B.noData=function(e){return arguments.length?(_=e,B):_},B.brushExtent=function(e){return arguments.length?(x=e,B):x},B},e.models.multiBar=function(){"use strict";function C(e){return e.each(function(e){var C=n-t.left-t.right,k=r-t.top-t.bottom,L=d3.select(this);d&&e.length&&(d=[{values:e[0].values.map(function(e){return{x:e.x,y:0,series:e.series,size:.01}})}]),c&&(e=d3.layout.stack().offset(h).values(function(e){return e.values}).y(a)(!e.length&&d?d:e)),e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})}),c&&e[0].values.map(function(t,n){var r=0,i=0;e.map(function(e){var t=e.values[n];t.size=Math.abs(t.y),t.y<0?(t.y1=i,i-=t.size):(t.y1=t.size+r,r+=t.size)})});var A=y&&b?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0,y1:e.y1}})});i.domain(y||d3.merge(A).map(function(e){return e.x})).rangeBands(w||[0,C],S),s.domain(b||d3.extent(d3.merge(A).map(function(e){return c?e.y>0?e.y1:e.y1+e.y:e.y}).concat(f))).range(E||[k,0]),i.domain()[0]===i.domain()[1]&&(i.domain()[0]?i.domain([i.domain()[0]-i.domain()[0]*.01,i.domain()[1]+i.domain()[1]*.01]):i.domain([-1,1])),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]+s.domain()[0]*.01,s.domain()[1]-s.domain()[1]*.01]):s.domain([-1,1])),T=T||i,N=N||s;var O=L.selectAll("g.nv-wrap.nv-multibar").data([e]),M=O.enter().append("g").attr("class","nvd3 nv-wrap nv-multibar"),_=M.append("defs"),D=M.append("g"),P=O.select("g");D.append("g").attr("class","nv-groups"),O.attr("transform","translate("+t.left+","+t.top+")"),_.append("clipPath").attr("id","nv-edge-clip-"+o).append("rect"),O.select("#nv-edge-clip-"+o+" rect").attr("width",C).attr("height",k),P.attr("clip-path",l?"url(#nv-edge-clip-"+o+")":"");var H=O.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e,t){return t});H.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),H.exit().transition().selectAll("rect.nv-bar").delay(function(t,n){return n*g/e[0].values.length}).attr("y",function(e){return c?N(e.y0):N(0)}).attr("height",0).remove(),H.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return p(e,t)}).style("stroke",function(e,t){return p(e,t)}),H.transition().style("stroke-opacity",1).style("fill-opacity",.75);var B=H.selectAll("rect.nv-bar").data(function(t){return d&&!e.length?d.values:t.values});B.exit().remove();var j=B.enter().append("rect").attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).attr("x",function(t,n,r){return c?0:r*i.rangeBand()/e.length}).attr("y",function(e){return N(c?e.y0:0)}).attr("height",0).attr("width",i.rangeBand()/(c?1:e.length)).attr("transform",function(e,t){return"translate("+i(u(e,t))+",0)"});B.style("fill",function(e,t,n){return p(e,n,t)}).style("stroke",function(e,t,n){return p(e,n,t)}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),x.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),x.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){x.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length
,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){x.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[i(u(t,n))+i.rangeBand()*(c?e.length/2:t.series+.5)/e.length,s(a(t,n)+(c?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}),B.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}).transition().attr("transform",function(e,t){return"translate("+i(u(e,t))+",0)"}),v&&(m||(m=e.map(function(){return!0})),B.style("fill",function(e,t,n){return d3.rgb(v(e,t)).darker(m.map(function(e,t){return t}).filter(function(e,t){return!m[t]})[n]).toString()}).style("stroke",function(e,t,n){return d3.rgb(v(e,t)).darker(m.map(function(e,t){return t}).filter(function(e,t){return!m[t]})[n]).toString()})),c?B.transition().delay(function(t,n){return n*g/e[0].values.length}).attr("y",function(e,t){return s(c?e.y1:0)}).attr("height",function(e,t){return Math.max(Math.abs(s(e.y+(c?e.y0:0))-s(c?e.y0:0)),1)}).attr("x",function(t,n){return c?0:t.series*i.rangeBand()/e.length}).attr("width",i.rangeBand()/(c?1:e.length)):B.transition().delay(function(t,n){return n*g/e[0].values.length}).attr("x",function(t,n){return t.series*i.rangeBand()/e.length}).attr("width",i.rangeBand()/e.length).attr("y",function(e,t){return a(e,t)<0?s(0):s(0)-s(a(e,t))<1?s(0)-1:s(a(e,t))||0}).attr("height",function(e,t){return Math.max(Math.abs(s(a(e,t))-s(0)),1)||0}),T=i.copy(),N=s.copy()}),C}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=d3.scale.ordinal(),s=d3.scale.linear(),o=Math.floor(Math.random()*1e4),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=!0,c=!1,h="zero",p=e.utils.defaultColor(),d=!1,v=null,m,g=1200,y,b,w,E,S=.1,x=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),T,N;return C.dispatch=x,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(u=e,C):u},C.y=function(e){return arguments.length?(a=e,C):a},C.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,C):t},C.width=function(e){return arguments.length?(n=e,C):n},C.height=function(e){return arguments.length?(r=e,C):r},C.xScale=function(e){return arguments.length?(i=e,C):i},C.yScale=function(e){return arguments.length?(s=e,C):s},C.xDomain=function(e){return arguments.length?(y=e,C):y},C.yDomain=function(e){return arguments.length?(b=e,C):b},C.xRange=function(e){return arguments.length?(w=e,C):w},C.yRange=function(e){return arguments.length?(E=e,C):E},C.forceY=function(e){return arguments.length?(f=e,C):f},C.stacked=function(e){return arguments.length?(c=e,C):c},C.stackOffset=function(e){return arguments.length?(h=e,C):h},C.clipEdge=function(e){return arguments.length?(l=e,C):l},C.color=function(t){return arguments.length?(p=e.utils.getColor(t),C):p},C.barColor=function(t){return arguments.length?(v=e.utils.getColor(t),C):v},C.disabled=function(e){return arguments.length?(m=e,C):m},C.id=function(e){return arguments.length?(o=e,C):o},C.hideable=function(e){return arguments.length?(d=e,C):d},C.delay=function(e){return arguments.length?(g=e,C):g},C.groupSpacing=function(e){return arguments.length?(S=e,C):S},C},e.models.multiBarChart=function(){"use strict";function A(e){return e.each(function(e){var b=d3.select(this),O=this,M=(u||parseInt(b.style("width"))||960)-o.left-o.right,_=(a||parseInt(b.style("height"))||400)-o.top-o.bottom;A.update=function(){b.transition().duration(k).call(A)},A.container=this,S.disabled=e.map(function(e){return!!e.disabled});if(!x){var D;x={};for(D in S)S[D]instanceof Array?x[D]=S[D].slice(0):x[D]=S[D]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var P=b.selectAll(".nv-noData").data([T]);return P.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),P.attr("x",o.left+M/2).attr("y",o.top+_/2).text(function(e){return e}),A}b.selectAll(".nv-noData").remove(),w=t.xScale(),E=t.yScale();var H=b.selectAll("g.nv-wrap.nv-multiBarWithLegend").data([e]),B=H.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarWithLegend").append("g"),j=H.select("g");B.append("g").attr("class","nv-x nv-axis"),B.append("g").attr("class","nv-y nv-axis"),B.append("g").attr("class","nv-barsWrap"),B.append("g").attr("class","nv-legendWrap"),B.append("g").attr("class","nv-controlsWrap"),c&&(i.width(M-C()),t.barColor()&&e.forEach(function(e,t){e.color=d3.rgb("#ccc").darker(t*1.5).toString()}),j.select(".nv-legendWrap").datum(e).call(i),o.top!=i.height()&&(o.top=i.height(),_=(a||parseInt(b.style("height"))||400)-o.top-o.bottom),j.select(".nv-legendWrap").attr("transform","translate("+C()+","+ -o.top+")"));if(l){var F=[{key:"Grouped",disabled:t.stacked()},{key:"Stacked",disabled:!t.stacked()}];s.width(C()).color(["#444","#444","#444"]),j.select(".nv-controlsWrap").datum(F).attr("transform","translate(0,"+ -o.top+")").call(s)}H.attr("transform","translate("+o.left+","+o.top+")"),d&&j.select(".nv-y.nv-axis").attr("transform","translate("+M+",0)"),t.disabled(e.map(function(e){return e.disabled})).width(M).height(_).color(e.map(function(e,t){return e.color||f(e,t)}).filter(function(t,n){return!e[n].disabled}));var I=j.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));I.transition().call(t);if(h){n.scale(w).ticks(M/100).tickSize(-_,0),j.select(".nv-x.nv-axis").attr("transform","translate(0,"+E.range()[0]+")"),j.select(".nv-x.nv-axis").transition().call(n);var q=j.select(".nv-x.nv-axis > g").selectAll("g");q.selectAll("line, text").style("opacity",1);if(m){var R=function(e,t){return"translate("+e+","+t+")"},U=5,z=17;q.selectAll("text").attr("transform",function(e,t,n){return R(0,n%2==0?U:z)});var W=d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;j.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform",function(e,t){return R(0,t===0||W%2!==0?z:U)})}v&&q.filter(function(t,n){return n%Math.ceil(e[0].values.length/(M/100))!==0}).selectAll("text, line").style("opacity",0),g&&q.selectAll(".tick text").attr("transform","rotate("+g+" 0,0)").style("text-anchor",g>0?"start":"end"),j.select(".nv-x.nv-axis").selectAll("g.nv-axisMaxMin text").style("opacity",1)}p&&(r.scale(E).ticks(_/36).tickSize(-M,0),j.select(".nv-y.nv-axis").transition().call(r)),i.dispatch.on("stateChange",function(e){S=e,N.stateChange(S),A.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;F=F.map(function(e){return e.disabled=!0,e}),e.disabled=!1;switch(e.key){case"Grouped":t.stacked(!1);break;case"Stacked":t.stacked(!0)}S.stacked=t.stacked(),N.stateChange(S),A.update()}),N.on("tooltipShow",function(e){y&&L(e,O.parentNode)}),N.on("changeState",function(n){typeof n.disabled!="undefined"&&(e.forEach(function(e,t){e.disabled=n.disabled[t]}),S.disabled=n.disabled),typeof n.stacked!="undefined"&&(t.stacked(n.stacked),S.stacked=n.stacked),A.update()})}),A}var t=e.models.multiBar(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o={top:30,right:20,bottom:50,left:60},u=null,a=null,f=e.utils.defaultColor(),l=!0,c=!0,h=!0,p=!0,d=!1,v=!0,m=!1,g=0,y=!0,b=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" on "+t+"</p>"},w,E,S={stacked:!1},x=null,T="No Data Available.",N=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),C=function(){return l?180:0},k=250;t.stacked(!1),n.orient("bottom").tickPadding(7).highlightZero(!0).showMaxMin(!1).tickFormat(function(e){return e}),r.orient(d?"right":"left").tickFormat(d3.format(",.1f")),s.updateState(!1);var L=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=b(i.series.key,a,f,i,A);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],N.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){N.tooltipHide(e)}),N.on("tooltipHide",function(){y&&e.tooltip.cleanup()}),A.dispatch=N,A.multibar=t,A.legend=i,A.xAxis=n,A.yAxis=r,d3.rebind(A,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","clipEdge","id","stacked","stackOffset","delay","barColor","groupSpacing"),A.options=e.utils.optionsFunc.bind(A),A.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,A):o},A.width=function(e){return arguments.length?(u=e,A):u},A.height=function(e){return arguments.length?(a=e,A):a},A.color=function(t){return arguments.length?(f=e.utils.getColor(t),i.color(f),A):f},A.showControls=function(e){return arguments.length?(l=e,A):l},A.showLegend=function(e){return arguments.length?(c=e,A):c},A.showXAxis=function(e){return arguments.length?(h=e,A):h},A.showYAxis=function(e){return arguments.length?(p=e,A):p},A.rightAlignYAxis=function(e){return arguments.length?(d=e,r.orient(e?"right":"left"),A):d},A.reduceXTicks=function(e){return arguments.length?(v=e,A):v},A.rotateLabels=function(e){return arguments.length?(g=e,A):g},A.staggerLabels=function(e){return arguments.length?(m=e,A):m},A.tooltip=function(e){return arguments.length?(b=e,A):b},A.tooltips=function(e){return arguments.length?(y=e,A):y},A.tooltipContent=function(e){return arguments.length?(b=e,A):b},A.state=function(e){return arguments.length?(S=e,A):S},A.defaultState=function(e){return arguments.length?(x=e,A):x},A.noData=function(e){return arguments.length?(T=e,A):T},A.transitionDuration=function(e){return arguments.length?(k=e,A):k},A},e.models.multiBarHorizontal=function(){"use strict";function C(e){return e.each(function(e){var i=n-t.left-t.right,y=r-t.top-t.bottom,C=d3.select(this);p&&(e=d3.layout.stack().offset("zero").values(function(e){return e.values}).y(a)(e)),e.forEach(function(e,t){e.values.forEach(function(e){e.series=t})}),p&&e[0].values.map(function(t,n){var r=0,i=0;e.map(function(e){var t=e.values[n];t.size=Math.abs(t.y),t.y<0?(t.y1=i-t.size,i-=t.size):(t.y1=r,r+=t.size)})});var k=b&&w?[]:e.map(function(e){return e.values.map(function(e,t){return{x:u(e,t),y:a(e,t),y0:e.y0,y1:e.y1}})});s.domain(b||d3.merge(k).map(function(e){return e.x})).rangeBands(E||[0,y],.1),o.domain(w||d3.extent(d3.merge(k).map(function(e){return p?e.y>0?e.y1+e.y:e.y1:e.y}).concat(f))),d&&!p?o.range(S||[o.domain()[0]<0?m:0,i-(o.domain()[1]>0?m:0)]):o.range(S||[0,i]),T=T||s,N=N||d3.scale.linear().domain(o.domain()).range([o(0),o(0)]);var L=d3.select(this).selectAll("g.nv-wrap.nv-multibarHorizontal").data([e]),A=L.enter().append("g").attr("class","nvd3 nv-wrap nv-multibarHorizontal"),O=A.append("defs"),M=A.append("g"),_=L.select("g");M.append("g").attr("class","nv-groups"),L.attr("transform","translate("+t.left+","+t.top+")");var D=L.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e,t){return t});D.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),D.exit().transition().style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove(),D.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}).style("fill",function(e,t){return l(e,t)}).style("stroke",function(e,t){return l(e,t)}),D.transition().style("stroke-opacity",1).style("fill-opacity",.75);var P=D.selectAll("g.nv-bar").data(function(e){return e.values});P.exit().remove();var H=P.enter().append("g").attr("transform",function(t,n,r){return"translate("+N(p?t.y0:0)+","+(p?0:r*s.rangeBand()/e.length+s(u(t,n)))+")"});H.append("rect").attr("width",0).attr("height",s.rangeBand()/(p?1:e.length)),P.on("mouseover",function(t,n){d3.select(this).classed("hover",!0),x.elementMouseover({value:a(t,n),point:t,series:e[t.series],pos:[o(a(t,n)+(p?t.y0:0)),s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),x.elementMouseout({value:a(t,n),point:t,series:e[t.series],pointIndex:n,seriesIndex:t.series,e:d3.event})}).on("click",function(t,n){x.elementClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length,o(a(t,n)+(p?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}).on("dblclick",function(t,n){x.elementDblClick({value:a(t,n),point:t,series:e[t.series],pos:[s(u(t,n))+s.rangeBand()*(p?e.length/2:t.series+.5)/e.length,o(a(t,n)+(p?t.y0:0))],pointIndex:n,seriesIndex:t.series,e:d3.event}),d3.event.stopPropagation()}),H.append("text"),d&&!p?(P.select("text").attr("text-anchor",function(e,t){return a(e,t)<0?"end":"start"}).attr("y",s.rangeBand()/(e.length*2)).attr("dy",".32em").text(function(e,t){return g(a(e,t))}),P.transition().select("text").attr("x",function(e,t){return a(e,t)<0?-4:o(a(e,t))-o(0)+4})):P.selectAll("text").text(""),v&&!p?(H.append("text").classed("nv-bar-label",!0),P.select("text.nv-bar-label").attr("text-anchor",function(e,t){return a(e,t)<0?"start":"end"}).attr("y",s.rangeBand()/(e.length*2)).attr("dy",".32em").text(function(e,t){return u(e,t)}),P.transition().select("text.nv-bar-label").attr("x",function(e,t){return a(e,t)<0?o(0)-o(a(e,t))+4:-4})):P.selectAll("text.nv-bar-label").text(""),P.attr("class",function(e,t){return a(e,t)<0?"nv-bar negative":"nv-bar positive"}),c&&(h||(h=e.map(function(){return!0})),P.style("fill",function(e,t,n){return d3.rgb(c(e,t)).darker(h.map(function(e,t){return t}).filter(function(e,t){return!h[t]})[n]).toString()}).style("stroke",function(e,t,n){return d3.rgb(c(e,t)).darker(h.map(function(e,t){return t}).filter(function(e,t){return!h[t]})[n]).toString()})),p?P.transition().attr("transform",function(e,t){return"translate("+o(e.y1)+","+s(u(e,t))+")"}).select("rect").attr("width",function(e,t){return Math.abs(o(a(e,t)+e.y0)-o(e.y0))}).attr("height",s.rangeBand()):P.transition().attr("transform",function(t,n){return"translate("+(a(t,n)<0?o(a(t,n)):o(0))+","+(t.series*s.rangeBand()/e.length+s(u(t,n)))+")"}).select("rect").attr("height",s.rangeBand()/e.length).attr("width",function(e,t){return Math.max(Math.abs(o(a(e,t))-o(0)),1)}),T=s.copy(),N=o.copy()}),C}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.ordinal(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=[0],l=e.utils.defaultColor(),c=null,h,p=!1,d=!1,v=!1,m=60,g=d3.format(",.2f"),y=1200,b,w,E,S,x=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout"),T,N;return C.dispatch=x,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(u=e,C):u},C.y=function(e){return arguments.length?(a=e,C):a},C.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,C):t},C.width=function(e){return arguments.length?(n=e,C):n},C.height=function(e){return arguments.length?(r=e,C):r},C.xScale=function(e){return arguments.length?(s=e,C):s},C.yScale=function(e){return arguments.length?(o=e,C):o},C.xDomain=function(e){return arguments.length?(b=e,C):b},C.yDomain=function(e){return arguments.length?(w=e,C):w},C.xRange=function(e){return arguments.length?(E=e,C):E},C.yRange=function(e){return arguments.length?(S=e,C):S},C.forceY=function(e){return arguments.length?(f=e,C):f},C.stacked=function(e){return arguments.length?(p=e,C):p},C.color=function(t){return arguments.length?(l=e.utils.getColor(t),C):l},C.barColor=function(t){return arguments.length?(c=e.utils.getColor(t),C):c},C.disabled=function(e){return arguments.length?(h=e,C):h},C.id=function(e){return arguments.length?(i=e,C):i},C.delay=function(e){return arguments.length?(y=e,C):y},C.showValues=function(e){return arguments.length?(d=e,C):d},C.showBarLabels=function(e){return arguments.length?(v=e,C):v},C.valueFormat=function(e){return arguments.length?(g=e,C):g},C.valuePadding=function(e){return arguments.length?(m=e,C):m},C},e.models.multiBarHorizontalChart=function(){"use strict";function C(e){return e.each(function(e){var d=d3.select(this),m=this,k=(u||parseInt(d.style("width"))||960)-o.left-o.right,L=(a||parseInt(d.style("height"))||400)-o.top-o.bottom;C.update=function(){d.transition().duration(T).call(C)},C.container=this,b.disabled=e.map(function(e){return!!e.disabled});if(!w){var A;w={};for(A in b)b[A]instanceof Array?w[A]=b[A].slice(0):w[A]=b[A]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var O=d.selectAll(".nv-noData").data([E]);return O.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),O.attr("x",o.left+k/2).attr("y",o.top+L/2).text(function(e){return e}),C}d.selectAll(".nv-noData").remove(),g=t.xScale(),y=t.yScale();var M=d.selectAll("g.nv-wrap.nv-multiBarHorizontalChart").data([e]),_=M.enter().append("g").attr("class","nvd3 nv-wrap nv-multiBarHorizontalChart").append("g"),D=M.select("g");_.append("g").attr("class","nv-x nv-axis"),_.append("g").attr("class","nv-y nv-axis").append("g").attr("class","nv-zeroLine").append("line"),_.append("g").attr("class","nv-barsWrap"),_.append("g").attr("class","nv-legendWrap"),_.append("g").attr("class","nv-controlsWrap"),c&&(i.width(k-x()),t.barColor()&&e.forEach(function(e,t){e.color=d3.rgb("#ccc").darker(t*1.5).toString()}),D.select(".nv-legendWrap").datum(e).call(i),o.top!=i.height()&&(o.top=i.height(),L=(a||parseInt(d.style("height"))||400)-o.top-o.bottom),D.select(".nv-legendWrap").attr("transform","translate("+x()+","+ -o.top+")"));if(l){var P=[{key:"Grouped",disabled:t.stacked()},{key:"Stacked",disabled:!t.stacked()}];s.width(x()).color(["#444","#444","#444"]),D.select(".nv-controlsWrap").datum(P).attr("transform","translate(0,"+ -o.top+")").call(s)}M.attr("transform","translate("+o.left+","+o.top+")"),t.disabled(e.map(function(e){return e.disabled})).width(k).height(L).color(e.map(function(e,t){return e.color||f(e,t)}).filter(function(t,n){return!e[n].disabled}));var H=D.select(".nv-barsWrap").datum(e.filter(function(e){return!e.disabled}));H.transition().call(t);if(h){n.scale(g).ticks(L/24).tickSize(-k,0),D.select(".nv-x.nv-axis").transition().call(n);var B=D.select(".nv-x.nv-axis").selectAll("g");B.selectAll("line, text")}p&&(r.scale(y).ticks(k/100).tickSize(-L,0),D.select(".nv-y.nv-axis").attr("transform","translate(0,"+L+")"),D.select(".nv-y.nv-axis").transition().call(r)),D.select(".nv-zeroLine line").attr("x1",y(0)).attr("x2",y(0)).attr("y1",0).attr("y2",-L),i.dispatch.on("stateChange",function(e){b=e,S.stateChange(b),C.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;P=P.map(function(e){return e.disabled=!0,e}),e.disabled=!1;switch(e.key){case"Grouped":t.stacked(!1);break;case"Stacked":t.stacked(!0)}b.stacked=t.stacked(),S.stateChange(b),C.update()}),S.on("tooltipShow",function(e){v&&N(e,m.parentNode)}),S.on("changeState",function(n){typeof n.disabled!="undefined"&&(e.forEach(function(e,t){e.disabled=n.disabled[t]}),b.disabled=n.disabled),typeof n.stacked!="undefined"&&(t.stacked(n.stacked),b.stacked=n.stacked),C.update()})}),C}var t=e.models.multiBarHorizontal(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend().height(30),s=e.models.legend().height(30),o={top:30,right:20,bottom:50,left:60},u=null,a=null,f=e.utils.defaultColor(),l=!0,c=!0,h=!0,p=!0,d=!1,v=!0,m=function(e,t,n,r,i){return"<h3>"+e+" - "+t+"</h3>"+"<p>"+n+"</p>"},g,y,b={stacked:d},w=null,E="No Data Available.",S=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),x=function(){return l?180:0},T=250;t.stacked(d),n.orient("left").tickPadding(5).highlightZero(!1).showMaxMin(!1).tickFormat(function(e){return e}),r.orient("bottom").tickFormat(d3.format(",.1f")),s.updateState(!1);var N=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=m(i.series.key,a,f,i,C);e.tooltip.show([o,u],l,i.value<0?"e":"w",null,s)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+o.left,e.pos[1]+o.top],S.tooltipShow(e)}),t.dispatch.on("elementMouseout.tooltip",function(e){S.tooltipHide(e)}),S.on("tooltipHide",function(){v&&e.tooltip.cleanup()}),C.dispatch=S,C.multibar=t,C.legend=i,C.xAxis=n,C.yAxis=r,d3.rebind(C,t,"x","y","xDomain","yDomain","xRange","yRange","forceX","forceY","clipEdge","id","delay","showValues","showBarLabels","valueFormat","stacked","barColor"),C.options=e.utils.optionsFunc.bind(C),C.margin=function(e){return arguments.length?(o.top=typeof e.top!="undefined"?e.top:o.top,o.right=typeof e.right!="undefined"?e.right:o.right,o.bottom=typeof e.bottom!="undefined"?e.bottom:o.bottom,o.left=typeof e.left!="undefined"?e.left:o.left,C):o},C.width=function(e){return arguments.length?(u=e,C):u},C.height=function(e){return arguments.length?(a=e,C):a},C.color=function(t){return arguments.length?(f=e.utils.getColor(t),i.color(f),C):f},C.showControls=function(e){return arguments.length?(l=e,C):l},C.showLegend=function(e){return arguments.length?(c=e,C):c},C.showXAxis=function(e){return arguments.length?(h=e,C):h},C.showYAxis=function(e){return arguments.length?(p=e,C):p},C.tooltip=function(e){return arguments.length?(m=e,C):m},C.tooltips=function(e){return arguments.length?(v=e,C):v},C.tooltipContent=function(e){return arguments.length?(m=e,C):m},C.state=function(e){return arguments.length?(b=e,C):b},C.defaultState=function(e){return arguments.length?(w=e,C):w},C.noData=function(e){return arguments.length?(E=e,C):E},C.transitionDuration=function(e){return arguments.length?(T=e,C):T},C},e.models.multiChart=function(){"use strict";function C(e){return e.each(function(e){var u=d3.select(this),f=this;C.update=function(){u.transition().call(C)},C.container=this;var k=(r||parseInt(u.style("width"))||960)-t.left-t.right,L=(i||parseInt(u.style("height"))||400)-t.top-t.bottom,A=e.filter(function(e){return!e.disabled&&e.type=="line"&&e.yAxis==1}),O=e.filter(function(e){return!e.disabled&&e.type=="line"&&e.yAxis==2}),M=e.filter(function(e){return!e.disabled&&e.type=="bar"&&e.yAxis==1}),_=e.filter(function(e){return!e.disabled&&e.type=="bar"&&e.yAxis==2}),D=e.filter(function(e){return!e.disabled&&e.type=="area"&&e.yAxis==1}),P=e.filter(function(e){return!e.disabled&&e.type=="area"&&e.yAxis==2}),H=e.filter(function(e){return!e.disabled&&e.yAxis==1}).map(function(e){return e.values.map(function(e,t){return{x:e.x,y:e.y}})}),B=e.filter(function(e){return!e.disabled&&e.yAxis==2}).map(function(e){return e.values.map(function(e,t){return{x:e.x,y:e.y}})});a.domain(d3.extent(d3.merge(H.concat(B)),function(e){return e.x})).range([0,k]);var j=u.selectAll("g.wrap.multiChart").data([e]),F=j.enter().append("g").attr("class","wrap nvd3 multiChart").append("g");F.append("g").attr("class","x axis"),F.append("g").attr("class","y1 axis"),F.append("g").attr("class","y2 axis"),F.append("g").attr("class","lines1Wrap"),F.append("g").attr("class","lines2Wrap"),F.append("g").attr("class","bars1Wrap"),F.append("g").attr("class","bars2Wrap"),F.append("g").attr("class","stack1Wrap"),F.append("g").attr("class","stack2Wrap"),F.append("g").attr("class","legendWrap");var I=j.select("g");s&&(x.width(k/2),I.select(".legendWrap").datum(e.map(function(e){return e.originalKey=e.originalKey===undefined?e.key:e.originalKey,e.key=e.originalKey+(e.yAxis==1?"":" (right axis)"),e})).call(x),t.top!=x.height()&&(t.top=x.height(),L=(i||parseInt(u.style("height"))||400)-t.top-t.bottom),I.select(".legendWrap").attr("transform","translate("+k/2+","+ -t.top+")")),d.width(k).height(L).interpolate("monotone").color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="line"})),v.width(k).height(L).interpolate("monotone").color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="line"})),m.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="bar"})),g.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="bar"})),y.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==1&&e[n].type=="area"})),b.width(k).height(L).color(e.map(function(e,t){return e.color||n[t%n.length]}).filter(function(t,n){return!e[n].disabled&&e[n].yAxis==2&&e[n].type=="area"})),I.attr("transform","translate("+t.left+","+t.top+")");var q=I.select(".lines1Wrap").datum(A),R=I.select(".bars1Wrap").datum(M),U=I.select(".stack1Wrap").datum(D),z=I.select(".lines2Wrap").datum(O),W=I.select(".bars2Wrap").datum(_),X=I.select(".stack2Wrap").datum(P),V=D.length?D.map(function(e){return e.values}).reduce(function(e,t){return e.map(function(e,n){return{x:e.x,y:e.y+t[n].y}})}).concat([{x:0,y:0}]):[],$=P.length?P.map(function(e){return e.values}).reduce(function(e,t){return e.map(function(e,n){return{x:e.x,y:e.y+t[n].y}})}).concat([{x:0,y:0}]):[];h.domain(l||d3.extent(d3.merge(H).concat(V),function(e){return e.y})).range([0,L]),p.domain(c||d3.extent(d3.merge(B).concat($),function(e){return e.y})).range([0,L]),d.yDomain(h.domain()),m.yDomain(h.domain()),y.yDomain(h.domain()),v.yDomain(p.domain()),g.yDomain(p.domain()),b.yDomain(p.domain()),D.length&&d3.transition(U).call(y),P.length&&d3.transition(X).call(b),M.length&&d3.transition(R).call(m),_.length&&d3.transition(W).call(g),A.length&&d3.transition(q).call(d),O.length&&d3.transition(z).call(v),w.ticks(k/100).tickSize(-L,0),I.select(".x.axis").attr("transform","translate(0,"+L+")"),d3.transition(I.select(".x.axis")).call(w),E.ticks(L/36).tickSize(-k,0),d3.transition(I.select(".y1.axis")).call(E),S.ticks(L/36).tickSize(-k,0),d3.transition(I.select(".y2.axis")).call(S),I.select(".y2.axis").style("opacity",B.length?1:0).attr("transform","translate("+a.range()[1]+",0)"),x.dispatch.on("stateChange",function(e){C.update()}),T.on("tooltipShow",function(e){o&&N(e,f.parentNode)})}),C}var t={top:30,right:20,bottom:50,left:60},n=d3.scale.category20().range(),r=null,i=null,s=!0,o=!0,u=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" at "+t+"</p>"},a,f,l,c,a=d3.scale.linear(),h=d3.scale.linear(),p=d3.scale.linear(),d=e.models.line().yScale(h),v=e.models.line().yScale(p),m=e.models.multiBar().stacked(!1).yScale(h),g=e.models.multiBar().stacked(!1).yScale(p),y=e.models.stackedArea().yScale(h),b=e.models.stackedArea().yScale(p),w=e.models.axis().scale(a).orient("bottom").tickPadding(5),E=e.models.axis().scale(h).orient("left"),S=e.models.axis().scale(p).orient("right"),x=e.models.legend().height(30),T=d3.dispatch("tooltipShow","tooltipHide"),N=function(t,n){var r=t.pos[0]+(n.offsetLeft||0),i=t.pos[1]+(n.offsetTop||0),s=w.tickFormat()(d.x()(t.point,t.pointIndex)),o=(t.series.yAxis==2?S:E).tickFormat()(d.y()(t.point,t.pointIndex)),a=u(t.series.key,s,o,t,C);e.tooltip.show([r,i],a,undefined,undefined,n.offsetParent)};return d.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),d.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),m.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),m.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),g.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),g.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),y.dispatch.on("tooltipShow",function(e){if(!Math.round(y.y()(e.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),y.dispatch.on("tooltipHide",function(e){T.tooltipHide(e)}),b.dispatch.on("tooltipShow",function(e){if(!Math.round(b.y()(e.point)*100))return setTimeout(function(){d3.selectAll(".point.hover").classed("hover",!1)},0),!1;e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),b.dispatch.on("tooltipHide",function(e){T.tooltipHide(e)}),d.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),d.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],T.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){T.tooltipHide(e)}),T.on("tooltipHide",function(){o&&e.tooltip.cleanup()}),C.dispatch=T,C.lines1=d,C.lines2=v,C.bars1=m,C.bars2=g,C.stack1=y,C.stack2=b,C.xAxis=w,C.yAxis1=E,C.yAxis2=S,C.options=e.utils.optionsFunc.bind(C),C.x=function(e){return arguments.length?(getX=e,d.x(e),m.x(e),C):getX},C.y=function(e){return arguments.length?(getY=e,d.y(e),m.y(e),C):getY},C.yDomain1=function(e){return arguments.length?(l=e,C):l},C.yDomain2=function(e){return arguments.length?(c=e,C):c},C.margin=function(e){return arguments.length?(t=e,C):t},C.width=function(e){return arguments.length?(r=e,C):r},C.height=function(e){return arguments.length?(i=e,C):i},C.color=function(e){return arguments.length?(n=e,x.color(e),C):n},C.showLegend=function(e){return arguments.length?(s=e,C):s},C.tooltips=function(e){return arguments.length?(o=e,C):o},C.tooltipContent=function(e){return arguments.length?(u=e,C):u},C},e.models.ohlcBar=function(){"use strict";function x(e){return e.each(function(e){var g=n-t.left-t.right,x=r-t.top-t.bottom,T=d3.select(this);s.domain(y||d3.extent(e[0].values.map(u).concat(p))),v?s.range(w||[g*.5/e[0].values.length,g*(e[0].values.length-.5)/e[0].values.length]):s.range(w||[0,g]),o.domain(b||[d3.min(e[0].values.map(h).concat(d)),d3.max(e[0].values.map(c).concat(d))]).range(E||[x,0]),s.domain()[0]===s.domain()[1]&&(s.domain()[0]?s.domain([s.domain()[0]-s.domain()[0]*.01,s.domain()[1]+s.domain()[1]*.01]):s.domain([-1,1])),o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]+o.domain()[0]*.01,o.domain()[1]-o.domain()[1]*.01]):o.domain([-1,1]));var N=d3.select(this).selectAll("g.nv-wrap.nv-ohlcBar").data([e[0].values]),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-ohlcBar"),k=C.append("defs"),L=C.append("g"),A=N.select("g");L.append("g").attr("class","nv-ticks"),N.attr("transform","translate("+t.left+","+t.top+")"),T.on("click",function(e,t){S.chartClick({data:e,index:t,pos:d3.event,id:i})}),k.append("clipPath").attr("id","nv-chart-clip-path-"+i).append("rect"),N.select("#nv-chart-clip-path-"+i+" rect").attr("width",g).attr("height",x),A.attr("clip-path",m?"url(#nv-chart-clip-path-"+i+")":"");var O=N.select(".nv-ticks").selectAll(".nv-tick").data(function(e){return e});O.exit().remove();var M=O.enter().append("path").attr("class",function(e,t,n){return(f(e,t)>l(e,t)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+n+"-"+t}).attr("d",function(t,n){var r=g/e[0].values.length*.9;return"m0,0l0,"+(o(f(t,n))-o(c(t,n)))+"l"+ -r/2+",0l"+r/2+",0l0,"+(o(h(t,n))-o(f(t,n)))+"l0,"+(o(l(t,n))-o(h(t,n)))+"l"+r/2+",0l"+ -r/2+",0z"}).attr("transform",function(e,t){return"translate("+s(u(e,t))+","+o(c(e,t))+")"}).on("mouseover",function(t,n){d3.select(this).classed("hover",!0),S.elementMouseover({point:t,series:e[0],pos:[s(u(t,n)),o(a(t,n))],pointIndex:n,seriesIndex:0,e:d3.event})}).on("mouseout",function(t,n){d3.select(this).classed("hover",!1),S.elementMouseout({point:t,series:e[0],pointIndex:n,seriesIndex:0,e:d3.event})}).on("click",function(e,t){S.elementClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()}).on("dblclick",function(e,t){S.elementDblClick({value:a(e,t),data:e,index:t,pos:[s(u(e,t)),o(a(e,t))],e:d3.event,id:i}),d3.event.stopPropagation()});O.attr("class",function(e,t,n){return(f(e,t)>l(e,t)?"nv-tick negative":"nv-tick positive")+" nv-tick-"+n+"-"+t}),d3.transition(O).attr("transform",function(e,t){return"translate("+s(u(e,t))+","+o(c(e,t))+")"}).attr("d",function(t,n){var r=g/e[0].values.length*.9;return"m0,0l0,"+(o(f(t,n))-o(c(t,n)))+"l"+ -r/2+",0l"+r/2+",0l0,"+(o(h(t,n))-o(f(t,n)))+"l0,"+(o(l(t,n))-o(h(t,n)))+"l"+r/2+",0l"+ -r/2+",0z"})}),x}var t={top:0
,right:0,bottom:0,left:0},n=960,r=500,i=Math.floor(Math.random()*1e4),s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=function(e){return e.open},l=function(e){return e.close},c=function(e){return e.high},h=function(e){return e.low},p=[],d=[],v=!1,m=!0,g=e.utils.defaultColor(),y,b,w,E,S=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return x.dispatch=S,x.options=e.utils.optionsFunc.bind(x),x.x=function(e){return arguments.length?(u=e,x):u},x.y=function(e){return arguments.length?(a=e,x):a},x.open=function(e){return arguments.length?(f=e,x):f},x.close=function(e){return arguments.length?(l=e,x):l},x.high=function(e){return arguments.length?(c=e,x):c},x.low=function(e){return arguments.length?(h=e,x):h},x.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,x):t},x.width=function(e){return arguments.length?(n=e,x):n},x.height=function(e){return arguments.length?(r=e,x):r},x.xScale=function(e){return arguments.length?(s=e,x):s},x.yScale=function(e){return arguments.length?(o=e,x):o},x.xDomain=function(e){return arguments.length?(y=e,x):y},x.yDomain=function(e){return arguments.length?(b=e,x):b},x.xRange=function(e){return arguments.length?(w=e,x):w},x.yRange=function(e){return arguments.length?(E=e,x):E},x.forceX=function(e){return arguments.length?(p=e,x):p},x.forceY=function(e){return arguments.length?(d=e,x):d},x.padData=function(e){return arguments.length?(v=e,x):v},x.clipEdge=function(e){return arguments.length?(m=e,x):m},x.color=function(t){return arguments.length?(g=e.utils.getColor(t),x):g},x.id=function(e){return arguments.length?(i=e,x):i},x},e.models.pie=function(){"use strict";function S(e){return e.each(function(e){function q(e){var t=(e.startAngle+e.endAngle)*90/Math.PI-90;return t>90?t-180:t}function R(e){e.endAngle=isNaN(e.endAngle)?0:e.endAngle,e.startAngle=isNaN(e.startAngle)?0:e.startAngle,m||(e.innerRadius=0);var t=d3.interpolate(this._current,e);return this._current=t(0),function(e){return A(t(e))}}function U(e){e.innerRadius=0;var t=d3.interpolate({startAngle:0,endAngle:0},e);return function(e){return A(t(e))}}var o=n-t.left-t.right,f=r-t.top-t.bottom,S=Math.min(o,f)/2,x=S-S/5,T=d3.select(this),N=T.selectAll(".nv-wrap.nv-pie").data(e),C=N.enter().append("g").attr("class","nvd3 nv-wrap nv-pie nv-chart-"+u),k=C.append("g"),L=N.select("g");k.append("g").attr("class","nv-pie"),k.append("g").attr("class","nv-pieLabels"),N.attr("transform","translate("+t.left+","+t.top+")"),L.select(".nv-pie").attr("transform","translate("+o/2+","+f/2+")"),L.select(".nv-pieLabels").attr("transform","translate("+o/2+","+f/2+")"),T.on("click",function(e,t){E.chartClick({data:e,index:t,pos:d3.event,id:u})});var A=d3.svg.arc().outerRadius(x);y&&A.startAngle(y),b&&A.endAngle(b),m&&A.innerRadius(S*w);var O=d3.layout.pie().sort(null).value(function(e){return e.disabled?0:s(e)}),M=N.select(".nv-pie").selectAll(".nv-slice").data(O),_=N.select(".nv-pieLabels").selectAll(".nv-label").data(O);M.exit().remove(),_.exit().remove();var D=M.enter().append("g").attr("class","nv-slice").on("mouseover",function(e,t){d3.select(this).classed("hover",!0),E.elementMouseover({label:i(e.data),value:s(e.data),point:e.data,pointIndex:t,pos:[d3.event.pageX,d3.event.pageY],id:u})}).on("mouseout",function(e,t){d3.select(this).classed("hover",!1),E.elementMouseout({label:i(e.data),value:s(e.data),point:e.data,index:t,id:u})}).on("click",function(e,t){E.elementClick({label:i(e.data),value:s(e.data),point:e.data,index:t,pos:d3.event,id:u}),d3.event.stopPropagation()}).on("dblclick",function(e,t){E.elementDblClick({label:i(e.data),value:s(e.data),point:e.data,index:t,pos:d3.event,id:u}),d3.event.stopPropagation()});M.attr("fill",function(e,t){return a(e,t)}).attr("stroke",function(e,t){return a(e,t)});var P=D.append("path").each(function(e){this._current=e});M.select("path").transition().attr("d",A).attrTween("d",R);if(l){var H=d3.svg.arc().innerRadius(0);c&&(H=A),h&&(H=d3.svg.arc().outerRadius(A.outerRadius())),_.enter().append("g").classed("nv-label",!0).each(function(e,t){var n=d3.select(this);n.attr("transform",function(e){if(g){e.outerRadius=x+10,e.innerRadius=x+15;var t=(e.startAngle+e.endAngle)/2*(180/Math.PI);return(e.startAngle+e.endAngle)/2<Math.PI?t-=90:t+=90,"translate("+H.centroid(e)+") rotate("+t+")"}return e.outerRadius=S+10,e.innerRadius=S+15,"translate("+H.centroid(e)+")"}),n.append("rect").style("stroke","#fff").style("fill","#fff").attr("rx",3).attr("ry",3),n.append("text").style("text-anchor",g?(e.startAngle+e.endAngle)/2<Math.PI?"start":"end":"middle").style("fill","#000")});var B={},j=14,F=140,I=function(e){return Math.floor(e[0]/F)*F+","+Math.floor(e[1]/j)*j};_.transition().attr("transform",function(e){if(g){e.outerRadius=x+10,e.innerRadius=x+15;var t=(e.startAngle+e.endAngle)/2*(180/Math.PI);return(e.startAngle+e.endAngle)/2<Math.PI?t-=90:t+=90,"translate("+H.centroid(e)+") rotate("+t+")"}e.outerRadius=S+10,e.innerRadius=S+15;var n=H.centroid(e),r=I(n);return B[r]&&(n[1]-=j),B[I(n)]=!0,"translate("+n+")"}),_.select(".nv-label text").style("text-anchor",g?(d.startAngle+d.endAngle)/2<Math.PI?"start":"end":"middle").text(function(e,t){var n=(e.endAngle-e.startAngle)/(2*Math.PI),r={key:i(e.data),value:s(e.data),percent:d3.format("%")(n)};return e.value&&n>v?r[p]:""})}}),S}var t={top:0,right:0,bottom:0,left:0},n=500,r=500,i=function(e){return e.x},s=function(e){return e.y},o=function(e){return e.description},u=Math.floor(Math.random()*1e4),a=e.utils.defaultColor(),f=d3.format(",.2f"),l=!0,c=!0,h=!1,p="key",v=.02,m=!1,g=!1,y=!1,b=!1,w=.5,E=d3.dispatch("chartClick","elementClick","elementDblClick","elementMouseover","elementMouseout");return S.dispatch=E,S.options=e.utils.optionsFunc.bind(S),S.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,S):t},S.width=function(e){return arguments.length?(n=e,S):n},S.height=function(e){return arguments.length?(r=e,S):r},S.values=function(t){return e.log("pie.values() is no longer supported."),S},S.x=function(e){return arguments.length?(i=e,S):i},S.y=function(e){return arguments.length?(s=d3.functor(e),S):s},S.description=function(e){return arguments.length?(o=e,S):o},S.showLabels=function(e){return arguments.length?(l=e,S):l},S.labelSunbeamLayout=function(e){return arguments.length?(g=e,S):g},S.donutLabelsOutside=function(e){return arguments.length?(h=e,S):h},S.pieLabelsOutside=function(e){return arguments.length?(c=e,S):c},S.labelType=function(e){return arguments.length?(p=e,p=p||"key",S):p},S.donut=function(e){return arguments.length?(m=e,S):m},S.donutRatio=function(e){return arguments.length?(w=e,S):w},S.startAngle=function(e){return arguments.length?(y=e,S):y},S.endAngle=function(e){return arguments.length?(b=e,S):b},S.id=function(e){return arguments.length?(u=e,S):u},S.color=function(t){return arguments.length?(a=e.utils.getColor(t),S):a},S.valueFormat=function(e){return arguments.length?(f=e,S):f},S.labelThreshold=function(e){return arguments.length?(v=e,S):v},S},e.models.pieChart=function(){"use strict";function v(e){return e.each(function(e){var u=d3.select(this),a=this,f=(i||parseInt(u.style("width"))||960)-r.left-r.right,d=(s||parseInt(u.style("height"))||400)-r.top-r.bottom;v.update=function(){u.transition().call(v)},v.container=this,l.disabled=e.map(function(e){return!!e.disabled});if(!c){var m;c={};for(m in l)l[m]instanceof Array?c[m]=l[m].slice(0):c[m]=l[m]}if(!e||!e.length){var g=u.selectAll(".nv-noData").data([h]);return g.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),g.attr("x",r.left+f/2).attr("y",r.top+d/2).text(function(e){return e}),v}u.selectAll(".nv-noData").remove();var y=u.selectAll("g.nv-wrap.nv-pieChart").data([e]),b=y.enter().append("g").attr("class","nvd3 nv-wrap nv-pieChart").append("g"),w=y.select("g");b.append("g").attr("class","nv-pieWrap"),b.append("g").attr("class","nv-legendWrap"),o&&(n.width(f).key(t.x()),y.select(".nv-legendWrap").datum(e).call(n),r.top!=n.height()&&(r.top=n.height(),d=(s||parseInt(u.style("height"))||400)-r.top-r.bottom),y.select(".nv-legendWrap").attr("transform","translate(0,"+ -r.top+")")),y.attr("transform","translate("+r.left+","+r.top+")"),t.width(f).height(d);var E=w.select(".nv-pieWrap").datum([e]);d3.transition(E).call(t),n.dispatch.on("stateChange",function(e){l=e,p.stateChange(l),v.update()}),t.dispatch.on("elementMouseout.tooltip",function(e){p.tooltipHide(e)}),p.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),l.disabled=t.disabled),v.update()})}),v}var t=e.models.pie(),n=e.models.legend(),r={top:30,right:20,bottom:20,left:20},i=null,s=null,o=!0,u=e.utils.defaultColor(),a=!0,f=function(e,t,n,r){return"<h3>"+e+"</h3>"+"<p>"+t+"</p>"},l={},c=null,h="No Data Available.",p=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),d=function(n,r){var i=t.description()(n.point)||t.x()(n.point),s=n.pos[0]+(r&&r.offsetLeft||0),o=n.pos[1]+(r&&r.offsetTop||0),u=t.valueFormat()(t.y()(n.point)),a=f(i,u,n,v);e.tooltip.show([s,o],a,n.value<0?"n":"s",null,r)};return t.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+r.left,e.pos[1]+r.top],p.tooltipShow(e)}),p.on("tooltipShow",function(e){a&&d(e)}),p.on("tooltipHide",function(){a&&e.tooltip.cleanup()}),v.legend=n,v.dispatch=p,v.pie=t,d3.rebind(v,t,"valueFormat","values","x","y","description","id","showLabels","donutLabelsOutside","pieLabelsOutside","labelType","donut","donutRatio","labelThreshold"),v.options=e.utils.optionsFunc.bind(v),v.margin=function(e){return arguments.length?(r.top=typeof e.top!="undefined"?e.top:r.top,r.right=typeof e.right!="undefined"?e.right:r.right,r.bottom=typeof e.bottom!="undefined"?e.bottom:r.bottom,r.left=typeof e.left!="undefined"?e.left:r.left,v):r},v.width=function(e){return arguments.length?(i=e,v):i},v.height=function(e){return arguments.length?(s=e,v):s},v.color=function(r){return arguments.length?(u=e.utils.getColor(r),n.color(u),t.color(u),v):u},v.showLegend=function(e){return arguments.length?(o=e,v):o},v.tooltips=function(e){return arguments.length?(a=e,v):a},v.tooltipContent=function(e){return arguments.length?(f=e,v):f},v.state=function(e){return arguments.length?(l=e,v):l},v.defaultState=function(e){return arguments.length?(c=e,v):c},v.noData=function(e){return arguments.length?(h=e,v):h},v},e.models.scatter=function(){"use strict";function I(q){return q.each(function(I){function Q(){if(!g)return!1;var e,i=d3.merge(I.map(function(e,t){return e.values.map(function(e,n){var r=f(e,n),i=l(e,n);return[o(r)+Math.random()*1e-7,u(i)+Math.random()*1e-7,t,n,e]}).filter(function(e,t){return b(e[4],t)})}));if(D===!0){if(x){var a=X.select("defs").selectAll(".nv-point-clips").data([s]).enter();a.append("clipPath").attr("class","nv-point-clips").attr("id","nv-points-clip-"+s);var c=X.select("#nv-points-clip-"+s).selectAll("circle").data(i);c.enter().append("circle").attr("r",T),c.exit().remove(),c.attr("cx",function(e){return e[0]}).attr("cy",function(e){return e[1]}),X.select(".nv-point-paths").attr("clip-path","url(#nv-points-clip-"+s+")")}i.length&&(i.push([o.range()[0]-20,u.range()[0]-20,null,null]),i.push([o.range()[1]+20,u.range()[1]+20,null,null]),i.push([o.range()[0]-20,u.range()[0]+20,null,null]),i.push([o.range()[1]+20,u.range()[1]-20,null,null]));var h=d3.geom.polygon([[-10,-10],[-10,r+10],[n+10,r+10],[n+10,-10]]),p=d3.geom.voronoi(i).map(function(e,t){return{data:h.clip(e),series:i[t][2],point:i[t][3]}}),d=X.select(".nv-point-paths").selectAll("path").data(p);d.enter().append("path").attr("class",function(e,t){return"nv-path-"+t}),d.exit().remove(),d.attr("d",function(e){return e.data.length===0?"M 0 0":"M"+e.data.join("L")+"Z"});var v=function(e,n){if(F)return 0;var r=I[e.series];if(typeof r=="undefined")return;var i=r.values[e.point];n({point:i,series:r,pos:[o(f(i,e.point))+t.left,u(l(i,e.point))+t.top],seriesIndex:e.series,pointIndex:e.point})};d.on("click",function(e){v(e,_.elementClick)}).on("mouseover",function(e){v(e,_.elementMouseover)}).on("mouseout",function(e,t){v(e,_.elementMouseout)})}else X.select(".nv-groups").selectAll(".nv-group").selectAll(".nv-point").on("click",function(e,n){if(F||!I[e.series])return 0;var r=I[e.series],i=r.values[n];_.elementClick({point:i,series:r,pos:[o(f(i,n))+t.left,u(l(i,n))+t.top],seriesIndex:e.series,pointIndex:n})}).on("mouseover",function(e,n){if(F||!I[e.series])return 0;var r=I[e.series],i=r.values[n];_.elementMouseover({point:i,series:r,pos:[o(f(i,n))+t.left,u(l(i,n))+t.top],seriesIndex:e.series,pointIndex:n})}).on("mouseout",function(e,t){if(F||!I[e.series])return 0;var n=I[e.series],r=n.values[t];_.elementMouseout({point:r,series:n,seriesIndex:e.series,pointIndex:t})});F=!1}var q=n-t.left-t.right,R=r-t.top-t.bottom,U=d3.select(this);I.forEach(function(e,t){e.values.forEach(function(e){e.series=t})});var W=N&&C&&A?[]:d3.merge(I.map(function(e){return e.values.map(function(e,t){return{x:f(e,t),y:l(e,t),size:c(e,t)}})}));o.domain(N||d3.extent(W.map(function(e){return e.x}).concat(d))),w&&I[0]?o.range(k||[(q*E+q)/(2*I[0].values.length),q-q*(1+E)/(2*I[0].values.length)]):o.range(k||[0,q]),u.domain(C||d3.extent(W.map(function(e){return e.y}).concat(v))).range(L||[R,0]),a.domain(A||d3.extent(W.map(function(e){return e.size}).concat(m))).range(O||[16,256]);if(o.domain()[0]===o.domain()[1]||u.domain()[0]===u.domain()[1])M=!0;o.domain()[0]===o.domain()[1]&&(o.domain()[0]?o.domain([o.domain()[0]-o.domain()[0]*.01,o.domain()[1]+o.domain()[1]*.01]):o.domain([-1,1])),u.domain()[0]===u.domain()[1]&&(u.domain()[0]?u.domain([u.domain()[0]-u.domain()[0]*.01,u.domain()[1]+u.domain()[1]*.01]):u.domain([-1,1])),isNaN(o.domain()[0])&&o.domain([-1,1]),isNaN(u.domain()[0])&&u.domain([-1,1]),P=P||o,H=H||u,B=B||a;var X=U.selectAll("g.nv-wrap.nv-scatter").data([I]),V=X.enter().append("g").attr("class","nvd3 nv-wrap nv-scatter nv-chart-"+s+(M?" nv-single-point":"")),$=V.append("defs"),J=V.append("g"),K=X.select("g");J.append("g").attr("class","nv-groups"),J.append("g").attr("class","nv-point-paths"),X.attr("transform","translate("+t.left+","+t.top+")"),$.append("clipPath").attr("id","nv-edge-clip-"+s).append("rect"),X.select("#nv-edge-clip-"+s+" rect").attr("width",q).attr("height",R>0?R:0),K.attr("clip-path",S?"url(#nv-edge-clip-"+s+")":""),F=!0;var G=X.select(".nv-groups").selectAll(".nv-group").data(function(e){return e},function(e){return e.key});G.enter().append("g").style("stroke-opacity",1e-6).style("fill-opacity",1e-6),G.exit().remove(),G.attr("class",function(e,t){return"nv-group nv-series-"+t}).classed("hover",function(e){return e.hover}),G.transition().style("fill",function(e,t){return i(e,t)}).style("stroke",function(e,t){return i(e,t)}).style("stroke-opacity",1).style("fill-opacity",.5);if(p){var Y=G.selectAll("circle.nv-point").data(function(e){return e.values},y);Y.enter().append("circle").style("fill",function(e,t){return e.color}).style("stroke",function(e,t){return e.color}).attr("cx",function(t,n){return e.utils.NaNtoZero(P(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(H(l(t,n)))}).attr("r",function(e,t){return Math.sqrt(a(c(e,t))/Math.PI)}),Y.exit().remove(),G.exit().selectAll("path.nv-point").transition().attr("cx",function(t,n){return e.utils.NaNtoZero(o(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(u(l(t,n)))}).remove(),Y.each(function(e,t){d3.select(this).classed("nv-point",!0).classed("nv-point-"+t,!0).classed("hover",!1)}),Y.transition().attr("cx",function(t,n){return e.utils.NaNtoZero(o(f(t,n)))}).attr("cy",function(t,n){return e.utils.NaNtoZero(u(l(t,n)))}).attr("r",function(e,t){return Math.sqrt(a(c(e,t))/Math.PI)})}else{var Y=G.selectAll("path.nv-point").data(function(e){return e.values});Y.enter().append("path").style("fill",function(e,t){return e.color}).style("stroke",function(e,t){return e.color}).attr("transform",function(e,t){return"translate("+P(f(e,t))+","+H(l(e,t))+")"}).attr("d",d3.svg.symbol().type(h).size(function(e,t){return a(c(e,t))})),Y.exit().remove(),G.exit().selectAll("path.nv-point").transition().attr("transform",function(e,t){return"translate("+o(f(e,t))+","+u(l(e,t))+")"}).remove(),Y.each(function(e,t){d3.select(this).classed("nv-point",!0).classed("nv-point-"+t,!0).classed("hover",!1)}),Y.transition().attr("transform",function(e,t){return"translate("+o(f(e,t))+","+u(l(e,t))+")"}).attr("d",d3.svg.symbol().type(h).size(function(e,t){return a(c(e,t))}))}clearTimeout(j),j=setTimeout(Q,300),P=o.copy(),H=u.copy(),B=a.copy()}),I}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e5),o=d3.scale.linear(),u=d3.scale.linear(),a=d3.scale.linear(),f=function(e){return e.x},l=function(e){return e.y},c=function(e){return e.size||1},h=function(e){return e.shape||"circle"},p=!0,d=[],v=[],m=[],g=!0,y=null,b=function(e){return!e.notActive},w=!1,E=.1,S=!1,x=!0,T=function(){return 25},N=null,C=null,k=null,L=null,A=null,O=null,M=!1,_=d3.dispatch("elementClick","elementMouseover","elementMouseout"),D=!0,P,H,B,j,F=!1;return I.clearHighlights=function(){d3.selectAll(".nv-chart-"+s+" .nv-point.hover").classed("hover",!1)},I.highlightPoint=function(e,t,n){d3.select(".nv-chart-"+s+" .nv-series-"+e+" .nv-point-"+t).classed("hover",n)},_.on("elementMouseover.point",function(e){g&&I.highlightPoint(e.seriesIndex,e.pointIndex,!0)}),_.on("elementMouseout.point",function(e){g&&I.highlightPoint(e.seriesIndex,e.pointIndex,!1)}),I.dispatch=_,I.options=e.utils.optionsFunc.bind(I),I.x=function(e){return arguments.length?(f=d3.functor(e),I):f},I.y=function(e){return arguments.length?(l=d3.functor(e),I):l},I.size=function(e){return arguments.length?(c=d3.functor(e),I):c},I.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,I):t},I.width=function(e){return arguments.length?(n=e,I):n},I.height=function(e){return arguments.length?(r=e,I):r},I.xScale=function(e){return arguments.length?(o=e,I):o},I.yScale=function(e){return arguments.length?(u=e,I):u},I.zScale=function(e){return arguments.length?(a=e,I):a},I.xDomain=function(e){return arguments.length?(N=e,I):N},I.yDomain=function(e){return arguments.length?(C=e,I):C},I.sizeDomain=function(e){return arguments.length?(A=e,I):A},I.xRange=function(e){return arguments.length?(k=e,I):k},I.yRange=function(e){return arguments.length?(L=e,I):L},I.sizeRange=function(e){return arguments.length?(O=e,I):O},I.forceX=function(e){return arguments.length?(d=e,I):d},I.forceY=function(e){return arguments.length?(v=e,I):v},I.forceSize=function(e){return arguments.length?(m=e,I):m},I.interactive=function(e){return arguments.length?(g=e,I):g},I.pointKey=function(e){return arguments.length?(y=e,I):y},I.pointActive=function(e){return arguments.length?(b=e,I):b},I.padData=function(e){return arguments.length?(w=e,I):w},I.padDataOuter=function(e){return arguments.length?(E=e,I):E},I.clipEdge=function(e){return arguments.length?(S=e,I):S},I.clipVoronoi=function(e){return arguments.length?(x=e,I):x},I.useVoronoi=function(e){return arguments.length?(D=e,D===!1&&(x=!1),I):D},I.clipRadius=function(e){return arguments.length?(T=e,I):T},I.color=function(t){return arguments.length?(i=e.utils.getColor(t),I):i},I.shape=function(e){return arguments.length?(h=e,I):h},I.onlyCircles=function(e){return arguments.length?(p=e,I):p},I.id=function(e){return arguments.length?(s=e,I):s},I.singlePoint=function(e){return arguments.length?(M=e,I):M},I},e.models.scatterChart=function(){"use strict";function F(e){return e.each(function(e){function K(){if(T)return X.select(".nv-point-paths").style("pointer-events","all"),!1;X.select(".nv-point-paths").style("pointer-events","none");var i=d3.mouse(this);h.distortion(x).focus(i[0]),p.distortion(x).focus(i[1]),X.select(".nv-scatterWrap").call(t),b&&X.select(".nv-x.nv-axis").call(n),w&&X.select(".nv-y.nv-axis").call(r),X.select(".nv-distributionX").datum(e.filter(function(e){return!e.disabled})).call(o),X.select(".nv-distributionY").datum(e.filter(function(e){return!e.disabled})).call(u)}var C=d3.select(this),k=this,L=(f||parseInt(C.style("width"))||960)-a.left-a.right,I=(l||parseInt(C.style("height"))||400)-a.top-a.bottom;F.update=function(){C.transition().duration(D).call(F)},F.container=this,A.disabled=e.map(function(e){return!!e.disabled});if(!O){var q;O={};for(q in A)A[q]instanceof Array?O[q]=A[q].slice(0):O[q]=A[q]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var R=C.selectAll(".nv-noData").data([_]);return R.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),R.attr("x",a.left+L/2).attr("y",a.top+I/2).text(function(e){return e}),F}C.selectAll(".nv-noData").remove(),P=P||h,H=H||p;var U=C.selectAll("g.nv-wrap.nv-scatterChart").data([e]),z=U.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+t.id()),W=z.append("g"),X=U.select("g");W.append("rect").attr("class","nvd3 nv-background"),W.append("g").attr("class","nv-x nv-axis"),W.append("g").attr("class","nv-y nv-axis"),W.append("g").attr("class","nv-scatterWrap"),W.append("g").attr("class","nv-distWrap"),W.append("g").attr("class","nv-legendWrap"),W.append("g").attr("class","nv-controlsWrap");if(y){var V=S?L/2:L;i.width(V),U.select(".nv-legendWrap").datum(e).call(i),a.top!=i.height()&&(a.top=i.height(),I=(l||parseInt(C.style("height"))||400)-a.top-a.bottom),U.select(".nv-legendWrap").attr("transform","translate("+(L-V)+","+ -a.top+")")}S&&(s.width(180).color(["#444"]),X.select(".nv-controlsWrap").datum(j).attr("transform","translate(0,"+ -a.top+")").call(s)),U.attr("transform","translate("+a.left+","+a.top+")"),E&&X.select(".nv-y.nv-axis").attr("transform","translate("+L+",0)"),t.width(L).height(I).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),d!==0&&t.xDomain(null),v!==0&&t.yDomain(null),U.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t);if(d!==0){var $=h.domain()[1]-h.domain()[0];t.xDomain([h.domain()[0]-d*$,h.domain()[1]+d*$])}if(v!==0){var J=p.domain()[1]-p.domain()[0];t.yDomain([p.domain()[0]-v*J,p.domain()[1]+v*J])}(v!==0||d!==0)&&U.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),b&&(n.scale(h).ticks(n.ticks()&&n.ticks().length?n.ticks():L/100).tickSize(-I,0),X.select(".nv-x.nv-axis").attr("transform","translate(0,"+p.range()[0]+")").call(n)),w&&(r.scale(p).ticks(r.ticks()&&r.ticks().length?r.ticks():I/36).tickSize(-L,0),X.select(".nv-y.nv-axis").call(r)),m&&(o.getData(t.x()).scale(h).width(L).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),W.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),X.select(".nv-distributionX").attr("transform","translate(0,"+p.range()[0]+")").datum(e.filter(function(e){return!e.disabled})).call(o)),g&&(u.getData(t.y()).scale(p).width(I).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),W.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),X.select(".nv-distributionY").attr("transform","translate("+(E?L:-u.size())+",0)").datum(e.filter(function(e){return!e.disabled})).call(u)),d3.fisheye&&(X.select(".nv-background").attr("width",L).attr("height",I),X.select(".nv-background").on("mousemove",K),X.select(".nv-background").on("click",function(){T=!T}),t.dispatch.on("elementClick.freezeFisheye",function(){T=!T})),s.dispatch.on("legendClick",function(e,i){e.disabled=!e.disabled,x=e.disabled?0:2.5,X.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),X.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(h.distortion(x).focus(0),p.distortion(x).focus(0),X.select(".nv-scatterWrap").call(t),X.select(".nv-x.nv-axis").call(n),X.select(".nv-y.nv-axis").call(r)):T=!1,F.update()}),i.dispatch.on("stateChange",function(e){A.disabled=e.disabled,M.stateChange(A),F.update()}),t.dispatch.on("elementMouseover.tooltip",function(e){d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",function(t,n){return e.pos[1]-I}),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",e.pos[0]+o.size()),e.pos=[e.pos[0]+a.left,e.pos[1]+a.top],M.tooltipShow(e)}),M.on("tooltipShow",function(e){N&&B(e,k.parentNode)}),M.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),A.disabled=t.disabled),F.update()}),P=h.copy(),H=p.copy()}),F}var t=e.models.scatter(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.models.distribution(),u=e.models.distribution(),a={top:30,right:20,bottom:50,left:75},f=null,l=null,c=e.utils.defaultColor(),h=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.xScale(),p=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.yScale(),d=0,v=0,m=!1,g=!1,y=!0,b=!0,w=!0,E=!1,S=!!d3.fisheye,x=0,T=!1,N=!0,C=function(e,t,n){return"<strong>"+t+"</strong>"},k=function(e,t,n){return"<strong>"+n+"</strong>"},L=null,A={},O=null,M=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),_="No Data Available.",D=250;t.xScale(h).yScale(p),n.orient("bottom").tickPadding(10),r.orient(E?"right":"left").tickPadding(10),o.axis("x"),u.axis("y"),s.updateState(!1);var P,H,B=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),f=i.pos[0]+(s.offsetLeft||0),l=p.range()[0]+a.top+(s.offsetTop||0),c=h.range()[0]+a.left+(s.offsetLeft||0),d=i.pos[1]+(s.offsetTop||0),v=n.tickFormat()(t.x()(i.point,i.pointIndex)),m=r.tickFormat()(t.y()(i.point,i.pointIndex));C!=null&&e.tooltip.show([f,l],C(i.series.key,v,m,i,F),"n",1,s,"x-nvtooltip"),k!=null&&e.tooltip.show([c,d],k(i.series.key,v,m,i,F),"e",1,s,"y-nvtooltip"),L!=null&&e.tooltip.show([o,u],L(i.series.key,v,m,i,F),i.value<0?"n":"s",null,s)},j=[{key:"Magnify",disabled:!0}];return t.dispatch.on("elementMouseout.tooltip",function(e){M.tooltipHide(e),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",0),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",u.size())}),M.on("tooltipHide",function(){N&&e.tooltip.cleanup()}),F.dispatch=M,F.scatter=t,F.legend=i,F.controls=s,F.xAxis=n,F.yAxis=r,F.distX=o,F.distY=u,d3.rebind(F,t,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),F.options=e.utils.optionsFunc.bind(F),F.margin=function(e){return arguments.length?(a.top=typeof e.top!="undefined"?e.top:a.top,a.right=typeof e.right!="undefined"?e.right:a.right,a.bottom=typeof e.bottom!="undefined"?e.bottom:a.bottom,a.left=typeof e.left!="undefined"?e.left:a.left,F):a},F.width=function(e){return arguments.length?(f=e,F):f},F.height=function(e){return arguments.length?(l=e,F):l},F.color=function(t){return arguments.length?(c=e.utils.getColor(t),i.color(c),o.color(c),u.color(c),F):c},F.showDistX=function(e){return arguments.length?(m=e,F):m},F.showDistY=function(e){return arguments.length?(g=e,F):g},F.showControls=function(e){return arguments.length?(S=e,F):S},F.showLegend=function(e){return arguments.length?(y=e,F):y},F.showXAxis=function(e){return arguments.length?(b=e,F):b},F.showYAxis=function(e){return arguments.length?(w=e,F):w},F.rightAlignYAxis=function(e){return arguments.length?(E=e,r.orient(e?"right":"left"),F):E},F.fisheye=function(e){return arguments.length?(x=e,F):x},F.xPadding=function(e){return arguments.length?(d=e,F):d},F.yPadding=function(e){return arguments.length?(v=e,F):v},F.tooltips=function(e){return arguments.length?(N=e,F):N},F.tooltipContent=function(e){return arguments.length?(L=e,F):L},F.tooltipXContent=function(e){return arguments.length?(C=e,F):C},F.tooltipYContent=function(e){return arguments.length?(k=e,F):k},F.state=function(e){return arguments.length?(A=e,F):A},F.defaultState=function(e){return arguments.length?(O=e,F):O},F.noData=function(e){return arguments.length?(_=e,F):_},F.transitionDuration=function(e){return arguments.length?(D=e,F):D},F},e.models.scatterPlusLineChart=function(){"use strict";function B(e){return e.each(function(e){function $(){if(S)return z.select(".nv-point-paths").style("pointer-events","all"),!1;z.select(".nv-point-paths").style("pointer-events","none");var i=d3.mouse(this);h.distortion(E).focus(i[0]),p.distortion(E).focus(i[1]),z.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),g&&z.select(".nv-x.nv-axis").call(n),y&&z.select(".nv-y.nv-axis").call(r),z.select(".nv-distributionX").datum(e.filter(function(e){return!e.disabled})).call(o),z.select(".nv-distributionY").datum(e.filter(function(e){return!e.disabled})).call(u)}var T=d3.select(this),N=this,C=(f||parseInt(T.style("width"))||960)-a.left-a.right,j=(l||parseInt(T.style("height"))||400)-a.top-a.bottom;B.update=function(){T.transition().duration(M).call(B)},B.container=this,k.disabled=e.map(function(e){return!!e.disabled});if(!L){var F;L={};for(F in k)k[F]instanceof Array?L[F]=k[F].slice(0):L[F]=k[F]}if(!e||!e.length||!e.filter(function(e){return e.values.length}).length){var I=T.selectAll(".nv-noData").data([O]);return I.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),I.attr("x",a.left+C/2).attr("y",a.top+j/2).text(function(e){return e}),B}T.selectAll(".nv-noData").remove(),h=t.xScale(),p=t.yScale(),_=_||h,D=D||p;var q=T.selectAll("g.nv-wrap.nv-scatterChart").data([e]),R=q.enter().append("g").attr("class","nvd3 nv-wrap nv-scatterChart nv-chart-"+t.id()),U=R.append("g"),z=q.select("g");U.append("rect").attr("class","nvd3 nv-background").style("pointer-events","none"),U.append("g").attr("class","nv-x nv-axis"),U.append("g").attr("class","nv-y nv-axis"),U.append("g").attr("class","nv-scatterWrap"),U.append("g").attr("class","nv-regressionLinesWrap"),U.append("g").attr("class","nv-distWrap"),U.append("g").attr("class","nv-legendWrap"),U.append("g").attr("class","nv-controlsWrap"),q.attr("transform","translate("+a.left+","+a.top+")"),b&&z.select(".nv-y.nv-axis").attr("transform","translate("+C+",0)"),m&&(i.width(C/2),q.select(".nv-legendWrap").datum(e).call(i),a.top!=i.height()&&(a.top=i.height(),j=(l||parseInt(T.style("height"))||400)-a.top-a.bottom),q.select(".nv-legendWrap").attr("transform","translate("+C/2+","+ -a.top+")")),w&&(s.width(180).color(["#444"]),z.select(".nv-controlsWrap").datum(H).attr("transform","translate(0,"+ -a.top+")").call(s)),t.width(C).height(j).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),q.select(".nv-scatterWrap").datum(e.filter(function(e){return!e.disabled})).call(t),q.select(".nv-regressionLinesWrap").attr("clip-path","url(#nv-edge-clip-"+t.id()+")");var W=q.select(".nv-regressionLinesWrap").selectAll(".nv-regLines").data(function(e){return e});W.enter().append("g").attr("class","nv-regLines");var X=W.selectAll(".nv-regLine").data(function(e){return[e]}),V=X.enter().append("line").attr("class","nv-regLine").style("stroke-opacity",0);X.transition().attr("x1",h.range()[0]).attr("x2",h.range()[1]).attr("y1",function(e,t){return p(h.domain()[0]*e.slope+e.intercept)}).attr("y2",function(e,t){return p(h.domain()[1]*e.slope+e.intercept)}).style("stroke",function(e,t,n){return c(e,n)}).style("stroke-opacity",function(e,t){return e.disabled||typeof e.slope=="undefined"||typeof e.intercept=="undefined"?0:1}),g&&(n.scale(h).ticks(n.ticks()?n.ticks():C/100).tickSize(-j,0),z.select(".nv-x.nv-axis").attr("transform","translate(0,"+p.range()[0]+")").call(n)),y&&(r.scale(p).ticks(r.ticks()?r.ticks():j/36).tickSize(-C,0),z.select(".nv-y.nv-axis").call(r)),d&&(o.getData(t.x()).scale(h).width(C).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),U.select(".nv-distWrap").append("g").attr("class","nv-distributionX"),z.select(".nv-distributionX").attr("transform","translate(0,"+p.range()[0]+")").datum(e.filter(function(e){return!e.disabled})).call(o)),v&&(u.getData(t.y()).scale(p).width(
j).color(e.map(function(e,t){return e.color||c(e,t)}).filter(function(t,n){return!e[n].disabled})),U.select(".nv-distWrap").append("g").attr("class","nv-distributionY"),z.select(".nv-distributionY").attr("transform","translate("+(b?C:-u.size())+",0)").datum(e.filter(function(e){return!e.disabled})).call(u)),d3.fisheye&&(z.select(".nv-background").attr("width",C).attr("height",j),z.select(".nv-background").on("mousemove",$),z.select(".nv-background").on("click",function(){S=!S}),t.dispatch.on("elementClick.freezeFisheye",function(){S=!S})),s.dispatch.on("legendClick",function(e,i){e.disabled=!e.disabled,E=e.disabled?0:2.5,z.select(".nv-background").style("pointer-events",e.disabled?"none":"all"),z.select(".nv-point-paths").style("pointer-events",e.disabled?"all":"none"),e.disabled?(h.distortion(E).focus(0),p.distortion(E).focus(0),z.select(".nv-scatterWrap").call(t),z.select(".nv-x.nv-axis").call(n),z.select(".nv-y.nv-axis").call(r)):S=!1,B.update()}),i.dispatch.on("stateChange",function(e){k=e,A.stateChange(k),B.update()}),t.dispatch.on("elementMouseover.tooltip",function(e){d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",e.pos[1]-j),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",e.pos[0]+o.size()),e.pos=[e.pos[0]+a.left,e.pos[1]+a.top],A.tooltipShow(e)}),A.on("tooltipShow",function(e){x&&P(e,N.parentNode)}),A.on("changeState",function(t){typeof t.disabled!="undefined"&&(e.forEach(function(e,n){e.disabled=t.disabled[n]}),k.disabled=t.disabled),B.update()}),_=h.copy(),D=p.copy()}),B}var t=e.models.scatter(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.models.distribution(),u=e.models.distribution(),a={top:30,right:20,bottom:50,left:75},f=null,l=null,c=e.utils.defaultColor(),h=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.xScale(),p=d3.fisheye?d3.fisheye.scale(d3.scale.linear).distortion(0):t.yScale(),d=!1,v=!1,m=!0,g=!0,y=!0,b=!1,w=!!d3.fisheye,E=0,S=!1,x=!0,T=function(e,t,n){return"<strong>"+t+"</strong>"},N=function(e,t,n){return"<strong>"+n+"</strong>"},C=function(e,t,n,r){return"<h3>"+e+"</h3>"+"<p>"+r+"</p>"},k={},L=null,A=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),O="No Data Available.",M=250;t.xScale(h).yScale(p),n.orient("bottom").tickPadding(10),r.orient(b?"right":"left").tickPadding(10),o.axis("x"),u.axis("y"),s.updateState(!1);var _,D,P=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),f=i.pos[0]+(s.offsetLeft||0),l=p.range()[0]+a.top+(s.offsetTop||0),c=h.range()[0]+a.left+(s.offsetLeft||0),d=i.pos[1]+(s.offsetTop||0),v=n.tickFormat()(t.x()(i.point,i.pointIndex)),m=r.tickFormat()(t.y()(i.point,i.pointIndex));T!=null&&e.tooltip.show([f,l],T(i.series.key,v,m,i,B),"n",1,s,"x-nvtooltip"),N!=null&&e.tooltip.show([c,d],N(i.series.key,v,m,i,B),"e",1,s,"y-nvtooltip"),C!=null&&e.tooltip.show([o,u],C(i.series.key,v,m,i.point.tooltip,i,B),i.value<0?"n":"s",null,s)},H=[{key:"Magnify",disabled:!0}];return t.dispatch.on("elementMouseout.tooltip",function(e){A.tooltipHide(e),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-distx-"+e.pointIndex).attr("y1",0),d3.select(".nv-chart-"+t.id()+" .nv-series-"+e.seriesIndex+" .nv-disty-"+e.pointIndex).attr("x2",u.size())}),A.on("tooltipHide",function(){x&&e.tooltip.cleanup()}),B.dispatch=A,B.scatter=t,B.legend=i,B.controls=s,B.xAxis=n,B.yAxis=r,B.distX=o,B.distY=u,d3.rebind(B,t,"id","interactive","pointActive","x","y","shape","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","sizeRange","forceX","forceY","forceSize","clipVoronoi","clipRadius","useVoronoi"),B.options=e.utils.optionsFunc.bind(B),B.margin=function(e){return arguments.length?(a.top=typeof e.top!="undefined"?e.top:a.top,a.right=typeof e.right!="undefined"?e.right:a.right,a.bottom=typeof e.bottom!="undefined"?e.bottom:a.bottom,a.left=typeof e.left!="undefined"?e.left:a.left,B):a},B.width=function(e){return arguments.length?(f=e,B):f},B.height=function(e){return arguments.length?(l=e,B):l},B.color=function(t){return arguments.length?(c=e.utils.getColor(t),i.color(c),o.color(c),u.color(c),B):c},B.showDistX=function(e){return arguments.length?(d=e,B):d},B.showDistY=function(e){return arguments.length?(v=e,B):v},B.showControls=function(e){return arguments.length?(w=e,B):w},B.showLegend=function(e){return arguments.length?(m=e,B):m},B.showXAxis=function(e){return arguments.length?(g=e,B):g},B.showYAxis=function(e){return arguments.length?(y=e,B):y},B.rightAlignYAxis=function(e){return arguments.length?(b=e,r.orient(e?"right":"left"),B):b},B.fisheye=function(e){return arguments.length?(E=e,B):E},B.tooltips=function(e){return arguments.length?(x=e,B):x},B.tooltipContent=function(e){return arguments.length?(C=e,B):C},B.tooltipXContent=function(e){return arguments.length?(T=e,B):T},B.tooltipYContent=function(e){return arguments.length?(N=e,B):N},B.state=function(e){return arguments.length?(k=e,B):k},B.defaultState=function(e){return arguments.length?(L=e,B):L},B.noData=function(e){return arguments.length?(O=e,B):O},B.transitionDuration=function(e){return arguments.length?(M=e,B):M},B},e.models.sparkline=function(){"use strict";function d(e){return e.each(function(e){var i=n-t.left-t.right,d=r-t.top-t.bottom,v=d3.select(this);s.domain(l||d3.extent(e,u)).range(h||[0,i]),o.domain(c||d3.extent(e,a)).range(p||[d,0]);var m=v.selectAll("g.nv-wrap.nv-sparkline").data([e]),g=m.enter().append("g").attr("class","nvd3 nv-wrap nv-sparkline"),b=g.append("g"),w=m.select("g");m.attr("transform","translate("+t.left+","+t.top+")");var E=m.selectAll("path").data(function(e){return[e]});E.enter().append("path"),E.exit().remove(),E.style("stroke",function(e,t){return e.color||f(e,t)}).attr("d",d3.svg.line().x(function(e,t){return s(u(e,t))}).y(function(e,t){return o(a(e,t))}));var S=m.selectAll("circle.nv-point").data(function(e){function n(t){if(t!=-1){var n=e[t];return n.pointIndex=t,n}return null}var t=e.map(function(e,t){return a(e,t)}),r=n(t.lastIndexOf(o.domain()[1])),i=n(t.indexOf(o.domain()[0])),s=n(t.length-1);return[i,r,s].filter(function(e){return e!=null})});S.enter().append("circle"),S.exit().remove(),S.attr("cx",function(e,t){return s(u(e,e.pointIndex))}).attr("cy",function(e,t){return o(a(e,e.pointIndex))}).attr("r",2).attr("class",function(e,t){return u(e,e.pointIndex)==s.domain()[1]?"nv-point nv-currentValue":a(e,e.pointIndex)==o.domain()[0]?"nv-point nv-minValue":"nv-point nv-maxValue"})}),d}var t={top:2,right:0,bottom:2,left:0},n=400,r=32,i=!0,s=d3.scale.linear(),o=d3.scale.linear(),u=function(e){return e.x},a=function(e){return e.y},f=e.utils.getColor(["#000"]),l,c,h,p;return d.options=e.utils.optionsFunc.bind(d),d.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,d):t},d.width=function(e){return arguments.length?(n=e,d):n},d.height=function(e){return arguments.length?(r=e,d):r},d.x=function(e){return arguments.length?(u=d3.functor(e),d):u},d.y=function(e){return arguments.length?(a=d3.functor(e),d):a},d.xScale=function(e){return arguments.length?(s=e,d):s},d.yScale=function(e){return arguments.length?(o=e,d):o},d.xDomain=function(e){return arguments.length?(l=e,d):l},d.yDomain=function(e){return arguments.length?(c=e,d):c},d.xRange=function(e){return arguments.length?(h=e,d):h},d.yRange=function(e){return arguments.length?(p=e,d):p},d.animate=function(e){return arguments.length?(i=e,d):i},d.color=function(t){return arguments.length?(f=e.utils.getColor(t),d):f},d},e.models.sparklinePlus=function(){"use strict";function v(e){return e.each(function(c){function O(){if(a)return;var e=C.selectAll(".nv-hoverValue").data(u),r=e.enter().append("g").attr("class","nv-hoverValue").style("stroke-opacity",0).style("fill-opacity",0);e.exit().transition().duration(250).style("stroke-opacity",0).style("fill-opacity",0).remove(),e.attr("transform",function(e){return"translate("+s(t.x()(c[e],e))+",0)"}).transition().duration(250).style("stroke-opacity",1).style("fill-opacity",1);if(!u.length)return;r.append("line").attr("x1",0).attr("y1",-n.top).attr("x2",0).attr("y2",b),r.append("text").attr("class","nv-xValue").attr("x",-6).attr("y",-n.top).attr("text-anchor","end").attr("dy",".9em"),C.select(".nv-hoverValue .nv-xValue").text(f(t.x()(c[u[0]],u[0]))),r.append("text").attr("class","nv-yValue").attr("x",6).attr("y",-n.top).attr("text-anchor","start").attr("dy",".9em"),C.select(".nv-hoverValue .nv-yValue").text(l(t.y()(c[u[0]],u[0])))}function M(){function r(e,n){var r=Math.abs(t.x()(e[0],0)-n),i=0;for(var s=0;s<e.length;s++)Math.abs(t.x()(e[s],s)-n)<r&&(r=Math.abs(t.x()(e[s],s)-n),i=s);return i}if(a)return;var e=d3.mouse(this)[0]-n.left;u=[r(c,Math.round(s.invert(e)))],O()}var m=d3.select(this),g=(r||parseInt(m.style("width"))||960)-n.left-n.right,b=(i||parseInt(m.style("height"))||400)-n.top-n.bottom;v.update=function(){v(e)},v.container=this;if(!c||!c.length){var w=m.selectAll(".nv-noData").data([d]);return w.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),w.attr("x",n.left+g/2).attr("y",n.top+b/2).text(function(e){return e}),v}m.selectAll(".nv-noData").remove();var E=t.y()(c[c.length-1],c.length-1);s=t.xScale(),o=t.yScale();var S=m.selectAll("g.nv-wrap.nv-sparklineplus").data([c]),T=S.enter().append("g").attr("class","nvd3 nv-wrap nv-sparklineplus"),N=T.append("g"),C=S.select("g");N.append("g").attr("class","nv-sparklineWrap"),N.append("g").attr("class","nv-valueWrap"),N.append("g").attr("class","nv-hoverArea"),S.attr("transform","translate("+n.left+","+n.top+")");var k=C.select(".nv-sparklineWrap");t.width(g).height(b),k.call(t);var L=C.select(".nv-valueWrap"),A=L.selectAll(".nv-currentValue").data([E]);A.enter().append("text").attr("class","nv-currentValue").attr("dx",p?-8:8).attr("dy",".9em").style("text-anchor",p?"end":"start"),A.attr("x",g+(p?n.right:0)).attr("y",h?function(e){return o(e)}:0).style("fill",t.color()(c[c.length-1],c.length-1)).text(l(E)),N.select(".nv-hoverArea").append("rect").on("mousemove",M).on("click",function(){a=!a}).on("mouseout",function(){u=[],O()}),C.select(".nv-hoverArea rect").attr("transform",function(e){return"translate("+ -n.left+","+ -n.top+")"}).attr("width",g+n.left+n.right).attr("height",b+n.top)}),v}var t=e.models.sparkline(),n={top:15,right:100,bottom:10,left:50},r=null,i=null,s,o,u=[],a=!1,f=d3.format(",r"),l=d3.format(",.2f"),c=!0,h=!0,p=!1,d="No Data Available.";return v.sparkline=t,d3.rebind(v,t,"x","y","xScale","yScale","color"),v.options=e.utils.optionsFunc.bind(v),v.margin=function(e){return arguments.length?(n.top=typeof e.top!="undefined"?e.top:n.top,n.right=typeof e.right!="undefined"?e.right:n.right,n.bottom=typeof e.bottom!="undefined"?e.bottom:n.bottom,n.left=typeof e.left!="undefined"?e.left:n.left,v):n},v.width=function(e){return arguments.length?(r=e,v):r},v.height=function(e){return arguments.length?(i=e,v):i},v.xTickFormat=function(e){return arguments.length?(f=e,v):f},v.yTickFormat=function(e){return arguments.length?(l=e,v):l},v.showValue=function(e){return arguments.length?(c=e,v):c},v.alignValue=function(e){return arguments.length?(h=e,v):h},v.rightAlignValue=function(e){return arguments.length?(p=e,v):p},v.noData=function(e){return arguments.length?(d=e,v):d},v},e.models.stackedArea=function(){"use strict";function g(e){return e.each(function(e){var a=n-t.left-t.right,b=r-t.top-t.bottom,w=d3.select(this);p=v.xScale(),d=v.yScale();var E=e;e.forEach(function(e,t){e.seriesIndex=t,e.values=e.values.map(function(e,n){return e.index=n,e.seriesIndex=t,e})});var S=e.filter(function(e){return!e.disabled});e=d3.layout.stack().order(l).offset(f).values(function(e){return e.values}).x(o).y(u).out(function(e,t,n){var r=u(e)===0?0:n;e.display={y:r,y0:t}})(S);var T=w.selectAll("g.nv-wrap.nv-stackedarea").data([e]),N=T.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedarea"),C=N.append("defs"),k=N.append("g"),L=T.select("g");k.append("g").attr("class","nv-areaWrap"),k.append("g").attr("class","nv-scatterWrap"),T.attr("transform","translate("+t.left+","+t.top+")"),v.width(a).height(b).x(o).y(function(e){return e.display.y+e.display.y0}).forceY([0]).color(e.map(function(e,t){return e.color||i(e,e.seriesIndex)}));var A=L.select(".nv-scatterWrap").datum(e);A.call(v),C.append("clipPath").attr("id","nv-edge-clip-"+s).append("rect"),T.select("#nv-edge-clip-"+s+" rect").attr("width",a).attr("height",b),L.attr("clip-path",h?"url(#nv-edge-clip-"+s+")":"");var O=d3.svg.area().x(function(e,t){return p(o(e,t))}).y0(function(e){return d(e.display.y0)}).y1(function(e){return d(e.display.y+e.display.y0)}).interpolate(c),M=d3.svg.area().x(function(e,t){return p(o(e,t))}).y0(function(e){return d(e.display.y0)}).y1(function(e){return d(e.display.y0)}),_=L.select(".nv-areaWrap").selectAll("path.nv-area").data(function(e){return e});_.enter().append("path").attr("class",function(e,t){return"nv-area nv-area-"+t}).attr("d",function(e,t){return M(e.values,e.seriesIndex)}).on("mouseover",function(e,t){d3.select(this).classed("hover",!0),m.areaMouseover({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}).on("mouseout",function(e,t){d3.select(this).classed("hover",!1),m.areaMouseout({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}).on("click",function(e,t){d3.select(this).classed("hover",!1),m.areaClick({point:e,series:e.key,pos:[d3.event.pageX,d3.event.pageY],seriesIndex:e.seriesIndex})}),_.exit().remove(),_.style("fill",function(e,t){return e.color||i(e,e.seriesIndex)}).style("stroke",function(e,t){return e.color||i(e,e.seriesIndex)}),_.transition().attr("d",function(e,t){return O(e.values,t)}),v.dispatch.on("elementMouseover.area",function(e){L.select(".nv-chart-"+s+" .nv-area-"+e.seriesIndex).classed("hover",!0)}),v.dispatch.on("elementMouseout.area",function(e){L.select(".nv-chart-"+s+" .nv-area-"+e.seriesIndex).classed("hover",!1)}),g.d3_stackedOffset_stackPercent=function(e){var t=e.length,n=e[0].length,r=1/t,i,s,o,a=[];for(s=0;s<n;++s){for(i=0,o=0;i<E.length;i++)o+=u(E[i].values[s]);if(o)for(i=0;i<t;i++)e[i][s][1]/=o;else for(i=0;i<t;i++)e[i][s][1]=r}for(s=0;s<n;++s)a[s]=0;return a}}),g}var t={top:0,right:0,bottom:0,left:0},n=960,r=500,i=e.utils.defaultColor(),s=Math.floor(Math.random()*1e5),o=function(e){return e.x},u=function(e){return e.y},a="stack",f="zero",l="default",c="linear",h=!1,p,d,v=e.models.scatter(),m=d3.dispatch("tooltipShow","tooltipHide","areaClick","areaMouseover","areaMouseout");return v.size(2.2).sizeDomain([2.2,2.2]),v.dispatch.on("elementClick.area",function(e){m.areaClick(e)}),v.dispatch.on("elementMouseover.tooltip",function(e){e.pos=[e.pos[0]+t.left,e.pos[1]+t.top],m.tooltipShow(e)}),v.dispatch.on("elementMouseout.tooltip",function(e){m.tooltipHide(e)}),g.dispatch=m,g.scatter=v,d3.rebind(g,v,"interactive","size","xScale","yScale","zScale","xDomain","yDomain","xRange","yRange","sizeDomain","forceX","forceY","forceSize","clipVoronoi","useVoronoi","clipRadius","highlightPoint","clearHighlights"),g.options=e.utils.optionsFunc.bind(g),g.x=function(e){return arguments.length?(o=d3.functor(e),g):o},g.y=function(e){return arguments.length?(u=d3.functor(e),g):u},g.margin=function(e){return arguments.length?(t.top=typeof e.top!="undefined"?e.top:t.top,t.right=typeof e.right!="undefined"?e.right:t.right,t.bottom=typeof e.bottom!="undefined"?e.bottom:t.bottom,t.left=typeof e.left!="undefined"?e.left:t.left,g):t},g.width=function(e){return arguments.length?(n=e,g):n},g.height=function(e){return arguments.length?(r=e,g):r},g.clipEdge=function(e){return arguments.length?(h=e,g):h},g.color=function(t){return arguments.length?(i=e.utils.getColor(t),g):i},g.offset=function(e){return arguments.length?(f=e,g):f},g.order=function(e){return arguments.length?(l=e,g):l},g.style=function(e){if(!arguments.length)return a;a=e;switch(a){case"stack":g.offset("zero"),g.order("default");break;case"stream":g.offset("wiggle"),g.order("inside-out");break;case"stream-center":g.offset("silhouette"),g.order("inside-out");break;case"expand":g.offset("expand"),g.order("default");break;case"stack_percent":g.offset(g.d3_stackedOffset_stackPercent),g.order("default")}return g},g.interpolate=function(e){return arguments.length?(c=e,g):c},g},e.models.stackedAreaChart=function(){"use strict";function M(y){return y.each(function(y){var _=d3.select(this),D=this,P=(a||parseInt(_.style("width"))||960)-u.left-u.right,H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom;M.update=function(){_.transition().duration(A).call(M)},M.container=this,S.disabled=y.map(function(e){return!!e.disabled});if(!x){var B;x={};for(B in S)S[B]instanceof Array?x[B]=S[B].slice(0):x[B]=S[B]}if(!y||!y.length||!y.filter(function(e){return e.values.length}).length){var j=_.selectAll(".nv-noData").data([T]);return j.enter().append("text").attr("class","nvd3 nv-noData").attr("dy","-.7em").style("text-anchor","middle"),j.attr("x",u.left+P/2).attr("y",u.top+H/2).text(function(e){return e}),M}_.selectAll(".nv-noData").remove(),b=t.xScale(),w=t.yScale();var F=_.selectAll("g.nv-wrap.nv-stackedAreaChart").data([y]),I=F.enter().append("g").attr("class","nvd3 nv-wrap nv-stackedAreaChart").append("g"),q=F.select("g");I.append("rect").style("opacity",0),I.append("g").attr("class","nv-x nv-axis"),I.append("g").attr("class","nv-y nv-axis"),I.append("g").attr("class","nv-stackedWrap"),I.append("g").attr("class","nv-legendWrap"),I.append("g").attr("class","nv-controlsWrap"),I.append("g").attr("class","nv-interactive"),q.select("rect").attr("width",P).attr("height",H);if(h){var R=c?P-C:P;i.width(R),q.select(".nv-legendWrap").datum(y).call(i),u.top!=i.height()&&(u.top=i.height(),H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom),q.select(".nv-legendWrap").attr("transform","translate("+(P-R)+","+ -u.top+")")}if(c){var U=[{key:L.stacked||"Stacked",metaKey:"Stacked",disabled:t.style()!="stack",style:"stack"},{key:L.stream||"Stream",metaKey:"Stream",disabled:t.style()!="stream",style:"stream"},{key:L.expanded||"Expanded",metaKey:"Expanded",disabled:t.style()!="expand",style:"expand"},{key:L.stack_percent||"Stack %",metaKey:"Stack_Percent",disabled:t.style()!="stack_percent",style:"stack_percent"}];C=k.length/3*260,U=U.filter(function(e){return k.indexOf(e.metaKey)!==-1}),s.width(C).color(["#444","#444","#444"]),q.select(".nv-controlsWrap").datum(U).call(s),u.top!=Math.max(s.height(),i.height())&&(u.top=Math.max(s.height(),i.height()),H=(f||parseInt(_.style("height"))||400)-u.top-u.bottom),q.select(".nv-controlsWrap").attr("transform","translate(0,"+ -u.top+")")}F.attr("transform","translate("+u.left+","+u.top+")"),v&&q.select(".nv-y.nv-axis").attr("transform","translate("+P+",0)"),m&&(o.width(P).height(H).margin({left:u.left,top:u.top}).svgContainer(_).xScale(b),F.select(".nv-interactive").call(o)),t.width(P).height(H);var z=q.select(".nv-stackedWrap").datum(y);z.transition().call(t),p&&(n.scale(b).ticks(P/100).tickSize(-H,0),q.select(".nv-x.nv-axis").attr("transform","translate(0,"+H+")"),q.select(".nv-x.nv-axis").transition().duration(0).call(n)),d&&(r.scale(w).ticks(t.offset()=="wiggle"?0:H/36).tickSize(-P,0).setTickFormat(t.style()=="expand"||t.style()=="stack_percent"?d3.format("%"):E),q.select(".nv-y.nv-axis").transition().duration(0).call(r)),t.dispatch.on("areaClick.toggle",function(e){y.filter(function(e){return!e.disabled}).length===1?y.forEach(function(e){e.disabled=!1}):y.forEach(function(t,n){t.disabled=n!=e.seriesIndex}),S.disabled=y.map(function(e){return!!e.disabled}),N.stateChange(S),M.update()}),i.dispatch.on("stateChange",function(e){S.disabled=e.disabled,N.stateChange(S),M.update()}),s.dispatch.on("legendClick",function(e,n){if(!e.disabled)return;U=U.map(function(e){return e.disabled=!0,e}),e.disabled=!1,t.style(e.style),S.style=t.style(),N.stateChange(S),M.update()}),o.dispatch.on("elementMousemove",function(i){t.clearHighlights();var s,a,f,c=[];y.filter(function(e,t){return e.seriesIndex=t,!e.disabled}).forEach(function(n,r){a=e.interactiveBisect(n.values,i.pointXValue,M.x()),t.highlightPoint(r,a,!0);var o=n.values[a];if(typeof o=="undefined")return;typeof s=="undefined"&&(s=o),typeof f=="undefined"&&(f=M.xScale()(M.x()(o,a)));var u=t.style()=="expand"?o.display.y:M.y()(o,a);c.push({key:n.key,value:u,color:l(n,n.seriesIndex),stackedValue:o.display})}),c.reverse();if(c.length>2){var h=M.yScale().invert(i.mouseY),p=Infinity,d=null;c.forEach(function(e,t){h=Math.abs(h);var n=Math.abs(e.stackedValue.y0),r=Math.abs(e.stackedValue.y);if(h>=n&&h<=r+n){d=t;return}}),d!=null&&(c[d].highlight=!0)}var v=n.tickFormat()(M.x()(s,a)),m=t.style()=="expand"?function(e,t){return d3.format(".1%")(e)}:function(e,t){return r.tickFormat()(e)};o.tooltip.position({left:f+u.left,top:i.mouseY+u.top}).chartContainer(D.parentNode).enabled(g).valueFormatter(m).data({value:v,series:c})(),o.renderGuideLine(f)}),o.dispatch.on("elementMouseout",function(e){N.tooltipHide(),t.clearHighlights()}),N.on("tooltipShow",function(e){g&&O(e,D.parentNode)}),N.on("changeState",function(e){typeof e.disabled!="undefined"&&y.length===e.disabled.length&&(y.forEach(function(t,n){t.disabled=e.disabled[n]}),S.disabled=e.disabled),typeof e.style!="undefined"&&t.style(e.style),M.update()})}),M}var t=e.models.stackedArea(),n=e.models.axis(),r=e.models.axis(),i=e.models.legend(),s=e.models.legend(),o=e.interactiveGuideline(),u={top:30,right:25,bottom:50,left:60},a=null,f=null,l=e.utils.defaultColor(),c=!0,h=!0,p=!0,d=!0,v=!1,m=!1,g=!0,y=function(e,t,n,r,i){return"<h3>"+e+"</h3>"+"<p>"+n+" on "+t+"</p>"},b,w,E=d3.format(",.2f"),S={style:t.style()},x=null,T="No Data Available.",N=d3.dispatch("tooltipShow","tooltipHide","stateChange","changeState"),C=250,k=["Stacked","Stream","Expanded"],L={},A=250;n.orient("bottom").tickPadding(7),r.orient(v?"right":"left"),s.updateState(!1);var O=function(i,s){var o=i.pos[0]+(s.offsetLeft||0),u=i.pos[1]+(s.offsetTop||0),a=n.tickFormat()(t.x()(i.point,i.pointIndex)),f=r.tickFormat()(t.y()(i.point,i.pointIndex)),l=y(i.series.key,a,f,i,M);e.tooltip.show([o,u],l,i.value<0?"n":"s",null,s)};return t.dispatch.on("tooltipShow",function(e){e.pos=[e.pos[0]+u.left,e.pos[1]+u.top],N.tooltipShow(e)}),t.dispatch.on("tooltipHide",function(e){N.tooltipHide(e)}),N.on("tooltipHide",function(){g&&e.tooltip.cleanup()}),M.dispatch=N,M.stacked=t,M.legend=i,M.controls=s,M.xAxis=n,M.yAxis=r,M.interactiveLayer=o,d3.rebind(M,t,"x","y","size","xScale","yScale","xDomain","yDomain","xRange","yRange","sizeDomain","interactive","useVoronoi","offset","order","style","clipEdge","forceX","forceY","forceSize","interpolate"),M.options=e.utils.optionsFunc.bind(M),M.margin=function(e){return arguments.length?(u.top=typeof e.top!="undefined"?e.top:u.top,u.right=typeof e.right!="undefined"?e.right:u.right,u.bottom=typeof e.bottom!="undefined"?e.bottom:u.bottom,u.left=typeof e.left!="undefined"?e.left:u.left,M):u},M.width=function(e){return arguments.length?(a=e,M):a},M.height=function(e){return arguments.length?(f=e,M):f},M.color=function(n){return arguments.length?(l=e.utils.getColor(n),i.color(l),t.color(l),M):l},M.showControls=function(e){return arguments.length?(c=e,M):c},M.showLegend=function(e){return arguments.length?(h=e,M):h},M.showXAxis=function(e){return arguments.length?(p=e,M):p},M.showYAxis=function(e){return arguments.length?(d=e,M):d},M.rightAlignYAxis=function(e){return arguments.length?(v=e,r.orient(e?"right":"left"),M):v},M.useInteractiveGuideline=function(e){return arguments.length?(m=e,e===!0&&(M.interactive(!1),M.useVoronoi(!1)),M):m},M.tooltip=function(e){return arguments.length?(y=e,M):y},M.tooltips=function(e){return arguments.length?(g=e,M):g},M.tooltipContent=function(e){return arguments.length?(y=e,M):y},M.state=function(e){return arguments.length?(S=e,M):S},M.defaultState=function(e){return arguments.length?(x=e,M):x},M.noData=function(e){return arguments.length?(T=e,M):T},M.transitionDuration=function(e){return arguments.length?(A=e,M):A},M.controlsData=function(e){return arguments.length?(k=e,M):k},M.controlLabels=function(e){return arguments.length?typeof e!="object"?L:(L=e,M):L},r.setTickFormat=r.tickFormat,r.tickFormat=function(e){return arguments.length?(E=e,r):E},M}})();
/*! angularjs-nvd3-directives - v0.0.7 - 2014-04-07
 * http://cmaurer.github.io/angularjs-nvd3-directives
 * Copyright (c) 2014 Christian Maurer; Licensed Apache License, v2.0 */
( function () {
  'use strict';


  angular.module( 'legendDirectives', [] ).directive( 'simpleSvgLegend', function () {
    return {
      restrict: 'EA',
      scope: {
        id: '@',
        width: '@',
        height: '@',
        margin: '@',
        x: '@',
        y: '@',
        labels: '@',
        styles: '@',
        classes: '@',
        shapes: '@',
        padding: '@',
        columns: '@'
      },
      compile: function () {
        return function link( scope, element, attrs ) {
          var id, width, height, margin, widthTracker = 0,
            heightTracker = 0,
            columns = 1,
            columnTracker = 0,
            padding = 10,
            paddingStr, svgNamespace = 'http://www.w3.org/2000/svg',
            svg, g, labels, styles, classes, shapes, x = 0,
            y = 0;
          margin = scope.$eval( attrs.margin ) || {
            left: 5,
            top: 5,
            bottom: 5,
            right: 5
          };
          width = attrs.width === 'undefined' ? element[ 0 ].parentElement.offsetWidth - ( margin.left + margin.right ) : +attrs.width - ( margin.left + margin.right );
          height = attrs.height === 'undefined' ? element[ 0 ].parentElement.offsetHeight - ( margin.top + margin.bottom ) : +attrs.height - ( margin.top + margin.bottom );
          if ( !attrs.id ) {
            //if an id is not supplied, create a random id.
            id = 'legend-' + Math.random();
          } else {
            id = attrs.id;
          }
          if ( attrs.columns ) {
            columns = +attrs.columns;
          }
          if ( attrs.padding ) {
            padding = +attrs.padding;
          }
          paddingStr = padding + '';
          svg = document.createElementNS( svgNamespace, 'svg' );
          if ( attrs.width ) {
            svg.setAttribute( 'width', width + '' );
          }
          if ( attrs.height ) {
            svg.setAttribute( 'height', height + '' );
          }
          svg.setAttribute( 'id', id );
          if ( attrs.x ) {
            x = +attrs.x;
          }
          if ( attrs.y ) {
            y = +attrs.y;
          }
          element.append( svg );
          g = document.createElementNS( svgNamespace, 'g' );
          g.setAttribute( 'transform', 'translate(' + x + ',' + y + ')' );
          svg.appendChild( g );
          if ( attrs.labels ) {
            labels = scope.$eval( attrs.labels );
          }
          if ( attrs.styles ) {
            styles = scope.$eval( attrs.styles );
          }
          if ( attrs.classes ) {
            classes = scope.$eval( attrs.classes );
          }
          if ( attrs.shapes ) {
            shapes = scope.$eval( attrs.shapes );
          }
          for ( var i in labels ) {
            if ( labels.hasOwnProperty( i ) ) {
              var shpe = shapes[ i ],
                shape, text, textSize, g1;
              if ( columnTracker % columns === 0 ) {
                widthTracker = 0;
                heightTracker = heightTracker + ( padding + padding * 1.5 );
              }
              g1 = document.createElementNS( svgNamespace, 'g' );
              g1.setAttribute( 'transform', 'translate(' + widthTracker + ', ' + heightTracker + ')' );
              if ( shpe === 'rect' ) {
                shape = document.createElementNS( svgNamespace, 'rect' );
                //x, y, rx, ry
                shape.setAttribute( 'y', 0 - padding / 2 + '' );
                shape.setAttribute( 'width', paddingStr );
                shape.setAttribute( 'height', paddingStr );
              } else if ( shpe === 'ellipse' ) {
                shape = document.createElementNS( svgNamespace, 'ellipse' );
                shape.setAttribute( 'rx', paddingStr );
                shape.setAttribute( 'ry', padding + padding / 2 + '' );
              } else {
                shape = document.createElementNS( svgNamespace, 'circle' );
                shape.setAttribute( 'r', padding / 2 + '' );
              }
              if ( styles && styles[ i ] ) {
                shape.setAttribute( 'style', styles[ i ] );
              }
              if ( classes && classes[ i ] ) {
                shape.setAttribute( 'class', classes[ i ] );
              }
              g1.appendChild( shape );
              widthTracker = widthTracker + shape.clientWidth + ( padding + padding / 2 );
              text = document.createElementNS( svgNamespace, 'text' );
              text.setAttribute( 'transform', 'translate(10, 5)' );
              text.appendChild( document.createTextNode( labels[ i ] ) );
              g1.appendChild( text );
              g.appendChild( g1 );
              textSize = text.clientWidth;
              widthTracker = widthTracker + textSize + ( padding + padding * 0.75 );
              columnTracker++;
            }
          }
        };
      }
    };
  } ).directive( 'nvd3Legend', [
    function () {
      var margin, width, height, id;
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          id: '@',
          margin: '&',
          width: '@',
          height: '@',
          key: '&',
          color: '&',
          align: '@',
          rightalign: '@',
          updatestate: '@',
          radiobuttonmode: '@',
          x: '&',
          y: '&'
        },
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              if ( scope.chart ) {
                return d3.select( '#' + attrs.id + ' svg' ).attr( 'height', height ).attr( 'width', width ).datum( data ).transition().duration( 250 ).call( scope.chart );
              }
              margin = scope.$eval( attrs.margin ) || {
                top: 5,
                right: 0,
                bottom: 5,
                left: 0
              };
              width = attrs.width === undefined ? element[ 0 ].parentElement.offsetWidth - ( margin.left + margin.right ) : +attrs.width - ( margin.left + margin.right );
              height = attrs.height === undefined ? element[ 0 ].parentElement.offsetHeight - ( margin.top + margin.bottom ) : +attrs.height - ( margin.top + margin.bottom );
              if ( width === undefined || width < 0 ) {
                width = 400;
              }
              if ( height === undefined || height < 0 ) {
                height = 20;
              }
              if ( !attrs.id ) {
                //if an id is not supplied, create a random id.
                id = 'legend-' + Math.random();
              } else {
                id = attrs.id;
              }
              nv.addGraph( {
                generate: function () {
                  var chart = nv.models.legend().width( width ).height( height ).margin( margin ).align( attrs.align === undefined ? true : attrs.align === 'true' ).rightAlign( attrs.rightalign === undefined ? true : attrs.rightalign === 'true' ).updateState( attrs.updatestate === undefined ? true : attrs.updatestate === 'true' ).radioButtonMode( attrs.radiobuttonmode === undefined ? false : attrs.radiobuttonmode === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).key( attrs.key === undefined ? function ( d ) {
                    return d.key;
                  } : scope.key() );
                  if ( !d3.select( '#' + attrs.id + ' svg' )[ 0 ][ 0 ] ) {
                    d3.select( '#' + attrs.id ).append( 'svg' );
                  }
                  d3.select( '#' + attrs.id + ' svg' ).attr( 'height', height ).attr( 'width', width ).datum( data ).transition().duration( 250 ).call( chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                }
              } );
            }
          } );
        }
      };
    }
  ] );

  function initializeLegendMargin( scope, attrs ) {
    var margin = ( scope.$eval( attrs.legendmargin ) || {
      left: 0,
      top: 5,
      bottom: 5,
      right: 0
    } );
    if ( typeof ( margin ) !== 'object' ) {
      // we were passed a vanilla int, convert to full margin object
      margin = {
        left: margin,
        top: margin,
        bottom: margin,
        right: margin
      };
    }
    scope.legendmargin = margin;
  }

  function configureLegend( chart, scope, attrs ) {
    if ( chart.legend && attrs.showlegend && ( attrs.showlegend === 'true' ) ) {
      initializeLegendMargin( scope, attrs );
      chart.legend.margin( scope.legendmargin );
      chart.legend.width( attrs.legendwidth === undefined ? 400 : ( +attrs.legendwidth ) );
      chart.legend.height( attrs.legendheight === undefined ? 20 : ( +attrs.legendheight ) );
      chart.legend.key( attrs.legendkey === undefined ? function ( d ) {
        return d.key;
      } : scope.legendkey() );
      chart.legend.color( attrs.legendcolor === undefined ? nv.utils.defaultColor() : scope.legendcolor() );
      chart.legend.align( attrs.legendalign === undefined ? true : ( attrs.legendalign === 'true' ) );
      chart.legend.rightAlign( attrs.legendrightalign === undefined ? true : ( attrs.legendrightalign === 'true' ) );
      chart.legend.updateState( attrs.legendupdatestate === undefined ? true : ( attrs.legendupdatestate === 'true' ) );
      chart.legend.radioButtonMode( attrs.legendradiobuttonmode === undefined ? false : ( attrs.legendradiobuttonmode === 'true' ) );
    }
  }

  function processEvents( chart, scope ) {
    if ( chart.dispatch ) {
      if ( chart.dispatch.tooltipShow ) {
        chart.dispatch.on( 'tooltipShow.directive', function ( event ) {
          scope.$emit( 'tooltipShow.directive', event );
        } );
      }

      if ( chart.dispatch.tooltipHide ) {
        chart.dispatch.on( 'tooltipHide.directive', function ( event ) {
          scope.$emit( 'tooltipHide.directive', event );
        } );
      }

      if ( chart.dispatch.beforeUpdate ) {
        chart.dispatch.on( 'beforeUpdate.directive', function ( event ) {
          scope.$emit( 'beforeUpdate.directive', event );
        } );
      }

      if ( chart.dispatch.stateChange ) {
        chart.dispatch.on( 'stateChange.directive', function ( event ) {
          scope.$emit( 'stateChange.directive', event );
        } );
      }

      if ( chart.dispatch.changeState ) {
        chart.dispatch.on( 'changeState.directive', function ( event ) {
          scope.$emit( 'changeState.directive', event );
        } );
      }
    }

    if ( chart.lines ) {
      chart.lines.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.lines.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseout.tooltip.directive', event );
      } );

      chart.lines.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );
    }

    if ( chart.stacked && chart.stacked.dispatch ) {
      chart.stacked.dispatch.on( 'areaClick.toggle.directive', function ( event ) {
        scope.$emit( 'areaClick.toggle.directive', event );
      } );

      chart.stacked.dispatch.on( 'tooltipShow.directive', function ( event ) {
        scope.$emit( 'tooltipShow.directive', event );
      } );

      chart.stacked.dispatch.on( 'tooltipHide.directive', function ( event ) {
        scope.$emit( 'tooltipHide.directive', event );
      } );

    }

    if ( chart.interactiveLayer ) {
      if ( chart.interactiveLayer.elementMouseout ) {
        chart.interactiveLayer.dispatch.on( 'elementMouseout.directive', function ( event ) {
          scope.$emit( 'elementMouseout.directive', event );
        } );
      }

      if ( chart.interactiveLayer.elementMousemove ) {
        chart.interactiveLayer.dispatch.on( 'elementMousemove.directive', function ( event ) {
          scope.$emit( 'elementMousemove.directive', event );
        } );
      }
    }

    if ( chart.discretebar ) {
      chart.discretebar.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.discretebar.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.discretebar.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );
    }

    if ( chart.multibar ) {
      chart.multibar.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.multibar.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.multibar.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );

    }

    if ( chart.pie ) {
      chart.pie.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.pie.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.pie.dispatch.on( 'elementClick.directive', function ( event ) {
        scope.$emit( 'elementClick.directive', event );
      } );
    }

    if ( chart.scatter ) {
      chart.scatter.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.scatter.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );
    }

    if ( chart.bullet ) {
      chart.bullet.dispatch.on( 'elementMouseover.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );

      chart.bullet.dispatch.on( 'elementMouseout.tooltip.directive', function ( event ) {
        scope.$emit( 'elementMouseover.tooltip.directive', event );
      } );
    }

    if ( chart.legend ) {
      //'legendClick', 'legendDblclick', 'legendMouseover'
      //stateChange
      chart.legend.dispatch.on( 'stateChange.legend.directive', function ( event ) {
        scope.$emit( 'stateChange.legend.directive', event );
      } );
      chart.legend.dispatch.on( 'legendClick.directive', function ( d, i ) {
        scope.$emit( 'legendClick.directive', d, i );
      } );
      chart.legend.dispatch.on( 'legendDblclick.directive', function ( d, i ) {
        scope.$emit( 'legendDblclick.directive', d, i );
      } );
      chart.legend.dispatch.on( 'legendMouseover.directive', function ( d, i ) {
        scope.$emit( 'legendMouseover.directive', d, i );
      } );
    }

    if ( chart.controls ) {
      if ( chart.controls.legendClick ) {
        chart.controls.dispatch.on( 'legendClick.directive', function ( d, i ) {
          scope.$emit( 'legendClick.directive', d, i );
        } );
      }
    }

  }

  function configureXaxis( chart, scope, attrs ) {
    if ( attrs.xaxisorient ) {
      chart.xAxis.orient( attrs.xaxisorient );
    }
    if ( attrs.xaxisticks ) {
      chart.xAxis.scale().ticks( attrs.xaxisticks );
    }
    if ( attrs.xaxistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.xaxistickvalues ) ) ) {
        chart.xAxis.tickValues( scope.$eval( attrs.xaxistickvalues ) );
      } else if ( typeof scope.xaxistickvalues() === 'function' ) {
        chart.xAxis.tickValues( scope.xaxistickvalues() );
      }
    }
    if ( attrs.xaxisticksubdivide ) {
      chart.xAxis.tickSubdivide( scope.xaxisticksubdivide() );
    }
    if ( attrs.xaxisticksize ) {
      chart.xAxis.tickSize( scope.xaxisticksize() );
    }
    if ( attrs.xaxistickpadding ) {
      chart.xAxis.tickPadding( scope.xaxistickpadding() );
    }
    if ( attrs.xaxistickformat ) {
      chart.xAxis.tickFormat( scope.xaxistickformat() );
    }
    if ( attrs.xaxislabel ) {
      chart.xAxis.axisLabel( attrs.xaxislabel );
    }
    if ( attrs.xaxisscale ) {
      chart.xAxis.scale( scope.xaxisscale() );
    }
    if ( attrs.xaxisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.xaxisdomain ) ) ) {
        chart.xDomain( scope.$eval( attrs.xaxisdomain ) );
      } else if ( typeof scope.xaxisdomain() === 'function' ) {
        chart.xDomain( scope.xaxisdomain() );
      }
    }
    if ( attrs.xaxisrange ) {
      if ( Array.isArray( scope.$eval( attrs.xaxisrange ) ) ) {
        chart.xRange( scope.$eval( attrs.xaxisrange ) );
      } else if ( typeof scope.xaxisrange() === 'function' ) {
        chart.xRange( scope.xaxisrange() );
      }
    }
    if ( attrs.xaxisrangeband ) {
      chart.xAxis.rangeBand( scope.xaxisrangeband() );
    }
    if ( attrs.xaxisrangebands ) {
      chart.xAxis.rangeBands( scope.xaxisrangebands() );
    }
    if ( attrs.xaxisshowmaxmin ) {
      chart.xAxis.showMaxMin( ( attrs.xaxisshowmaxmin === 'true' ) );
    }
    if ( attrs.xaxishighlightzero ) {
      chart.xAxis.highlightZero( ( attrs.xaxishighlightzero === 'true' ) );
    }
    if ( attrs.xaxisrotatelabels ) {
      chart.xAxis.rotateLabels( ( +attrs.xaxisrotatelabels ) );
    }
    //    if(attrs.xaxisrotateylabel){
    //        chart.xAxis.rotateYLabel((attrs.xaxisrotateylabel === "true"));
    //    }
    if ( attrs.xaxisstaggerlabels ) {
      chart.xAxis.staggerLabels( ( attrs.xaxisstaggerlabels === 'true' ) );
    }
    if ( attrs.xaxislabeldistance ) {
      chart.xAxis.axisLabelDistance( ( +attrs.xaxislabeldistance ) );
    }
  }

  function configureX2axis( chart, scope, attrs ) {
    if ( attrs.x2axisorient ) {
      chart.x2Axis.orient( attrs.x2axisorient );
    }
    if ( attrs.x2axisticks ) {
      chart.x2Axis.scale().ticks( attrs.x2axisticks );
    }
    if ( attrs.x2axistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.x2axistickvalues ) ) ) {
        chart.x2Axis.tickValues( scope.$eval( attrs.x2axistickvalues ) );
      } else if ( typeof scope.xaxistickvalues() === 'function' ) {
        chart.x2Axis.tickValues( scope.x2axistickvalues() );
      }
    }
    if ( attrs.x2axisticksubdivide ) {
      chart.x2Axis.tickSubdivide( scope.x2axisticksubdivide() );
    }
    if ( attrs.x2axisticksize ) {
      chart.x2Axis.tickSize( scope.x2axisticksize() );
    }
    if ( attrs.x2axistickpadding ) {
      chart.x2Axis.tickPadding( scope.x2axistickpadding() );
    }
    if ( attrs.x2axistickformat ) {
      chart.x2Axis.tickFormat( scope.x2axistickformat() );
    }
    if ( attrs.x2axislabel ) {
      chart.x2Axis.axisLabel( attrs.x2axislabel );
    }
    if ( attrs.x2axisscale ) {
      chart.x2Axis.scale( scope.x2axisscale() );
    }
    if ( attrs.x2axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.x2axisdomain ) ) ) {
        chart.x2Axis.domain( scope.$eval( attrs.x2axisdomain ) );
      } else if ( typeof scope.x2axisdomain() === 'function' ) {
        chart.x2Axis.domain( scope.x2axisdomain() );
      }
    }
    if ( attrs.x2axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.x2axisrange ) ) ) {
        chart.x2Axis.range( scope.$eval( attrs.x2axisrange ) );
      } else if ( typeof scope.x2axisrange() === 'function' ) {
        chart.x2Axis.range( scope.x2axisrange() );
      }
    }
    if ( attrs.x2axisrangeband ) {
      chart.x2Axis.rangeBand( scope.x2axisrangeband() );
    }
    if ( attrs.x2axisrangebands ) {
      chart.x2Axis.rangeBands( scope.x2axisrangebands() );
    }
    if ( attrs.x2axisshowmaxmin ) {
      chart.x2Axis.showMaxMin( ( attrs.x2axisshowmaxmin === 'true' ) );
    }
    if ( attrs.x2axishighlightzero ) {
      chart.x2Axis.highlightZero( ( attrs.x2axishighlightzero === 'true' ) );
    }
    if ( attrs.x2axisrotatelables ) {
      chart.x2Axis.rotateLabels( ( +attrs.x2axisrotatelables ) );
    }
    //    if(attrs.xaxisrotateylabel){
    //        chart.xAxis.rotateYLabel((attrs.xaxisrotateylabel === "true"));
    //    }
    if ( attrs.x2axisstaggerlabels ) {
      chart.x2Axis.staggerLabels( ( attrs.x2axisstaggerlabels === 'true' ) );
    }
    if ( attrs.x2axislabeldistance ) {
      chart.x2Axis.axisLabelDistance( ( +attrs.x2axislabeldistance ) );
    }
  }

  function configureYaxis( chart, scope, attrs ) {
    if ( attrs.yaxisorient ) {
      chart.yAxis.orient( attrs.yaxisorient );
    }
    if ( attrs.yaxisticks ) {
      chart.yAxis.scale().ticks( attrs.yaxisticks );
    }
    if ( attrs.yaxistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.yaxistickvalues ) ) ) {
        chart.yAxis.tickValues( scope.$eval( attrs.yaxistickvalues ) );
      } else if ( typeof scope.yaxistickvalues() === 'function' ) {
        chart.yAxis.tickValues( scope.yaxistickvalues() );
      }
    }
    if ( attrs.yaxisticksubdivide ) {
      chart.yAxis.tickSubdivide( scope.yaxisticksubdivide() );
    }
    if ( attrs.yaxisticksize ) {
      chart.yAxis.tickSize( scope.yaxisticksize() );
    }
    if ( attrs.yaxistickpadding ) {
      chart.yAxis.tickPadding( scope.yaxistickpadding() );
    }
    if ( attrs.yaxistickformat ) {
      chart.yAxis.tickFormat( scope.yaxistickformat() );
    }
    if ( attrs.yaxislabel ) {
      chart.yAxis.axisLabel( attrs.yaxislabel );
    }
    if ( attrs.yaxisscale ) {
      chart.yAxis.scale( scope.yaxisscale() );
    }
    if ( attrs.yaxisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.yaxisdomain ) ) ) {
        chart.yDomain( scope.$eval( attrs.yaxisdomain ) );
      } else if ( typeof scope.yaxisdomain() === 'function' ) {
        chart.yDomain( scope.yaxisdomain() );
      }
    }
    if ( attrs.yaxisrange ) {
      if ( Array.isArray( scope.$eval( attrs.yaxisrange ) ) ) {
        chart.yRange( scope.$eval( attrs.yaxisrange ) );
      } else if ( typeof scope.yaxisrange() === 'function' ) {
        chart.yRange( scope.yaxisrange() );
      }
    }
    if ( attrs.yaxisrangeband ) {
      chart.yAxis.rangeBand( scope.yaxisrangeband() );
    }
    if ( attrs.yaxisrangebands ) {
      chart.yAxis.rangeBands( scope.yaxisrangebands() );
    }
    if ( attrs.yaxisshowmaxmin ) {
      chart.yAxis.showMaxMin( ( attrs.yaxisshowmaxmin === 'true' ) );
    }
    if ( attrs.yaxishighlightzero ) {
      chart.yAxis.highlightZero( ( attrs.yaxishighlightzero === 'true' ) );
    }
    if ( attrs.yaxisrotatelabels ) {
      chart.yAxis.rotateLabels( ( +attrs.yaxisrotatelabels ) );
    }
    if ( attrs.yaxisrotateylabel ) {
      chart.yAxis.rotateYLabel( ( attrs.yaxisrotateylabel === 'true' ) );
    }
    if ( attrs.yaxisstaggerlabels ) {
      chart.yAxis.staggerLabels( ( attrs.yaxisstaggerlabels === 'true' ) );
    }
    if ( attrs.yaxislabeldistance ) {
      chart.yAxis.axisLabelDistance( ( +attrs.yaxislabeldistance ) );
    }
  }

  function configureY1axis( chart, scope, attrs ) {
    if ( attrs.y1axisticks ) {
      chart.y1Axis.scale().ticks( attrs.y1axisticks );
    }
    if ( attrs.y1axistickvalues ) {
      if ( Array.isArray( scope.$eval( attrs.y1axistickvalues ) ) ) {
        chart.y1Axis.tickValues( scope.$eval( attrs.y1axistickvalues ) );
      } else if ( typeof scope.y1axistickvalues() === 'function' ) {
        chart.y1Axis.tickValues( scope.y1axistickvalues() );
      }
    }
    if ( attrs.y1axisticksubdivide ) {
      chart.y1Axis.tickSubdivide( scope.y1axisticksubdivide() );
    }
    if ( attrs.y1axisticksize ) {
      chart.y1Axis.tickSize( scope.y1axisticksize() );
    }
    if ( attrs.y1axistickpadding ) {
      chart.y1Axis.tickPadding( scope.y1axistickpadding() );
    }
    if ( attrs.y1axistickformat ) {
      chart.y1Axis.tickFormat( scope.y1axistickformat() );
    }
    if ( attrs.y1axislabel ) {
      chart.y1Axis.axisLabel( attrs.y1axislabel );
    }
    if ( attrs.y1axisscale ) {
      chart.y1Axis.yScale( scope.y1axisscale() );
    }
    if ( attrs.y1axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.y1axisdomain ) ) ) {
        chart.y1Axis.domain( scope.$eval( attrs.y1axisdomain ) );
      } else if ( typeof scope.y1axisdomain() === 'function' ) {
        chart.y1Axis.domain( scope.y1axisdomain() );
      }
    }
    if ( attrs.y1axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.y1axisrange ) ) ) {
        chart.y1Axis.range( scope.$eval( attrs.y1axisrange ) );
      } else if ( typeof scope.y1axisrange() === 'function' ) {
        chart.y1Axis.range( scope.y1axisrange() );
      }
    }
    if ( attrs.y1axisrangeband ) {
      chart.y1Axis.rangeBand( scope.y1axisrangeband() );
    }
    if ( attrs.y1axisrangebands ) {
      chart.y1Axis.rangeBands( scope.y1axisrangebands() );
    }
    if ( attrs.y1axisshowmaxmin ) {
      chart.y1Axis.showMaxMin( ( attrs.y1axisshowmaxmin === 'true' ) );
    }
    if ( attrs.y1axishighlightzero ) {
      chart.y1Axis.highlightZero( ( attrs.y1axishighlightzero === 'true' ) );
    }
    if ( attrs.y1axisrotatelabels ) {
      chart.y1Axis.rotateLabels( ( +scope.y1axisrotatelabels ) );
    }
    if ( attrs.y1axisrotateylabel ) {
      chart.y1Axis.rotateYLabel( ( attrs.y1axisrotateylabel === 'true' ) );
    }
    if ( attrs.y1axisstaggerlabels ) {
      chart.y1Axis.staggerlabels( ( attrs.y1axisstaggerlabels === 'true' ) );
    }
    if ( attrs.y1axislabeldistance ) {
      chart.y1Axis.axisLabelDistance( ( +attrs.y1axislabeldistance ) );
    }
  }

  function configureY2axis( chart, scope, attrs ) {
    if ( attrs.y2axisticks ) {
      chart.y2Axis.scale().ticks( attrs.y2axisticks );
    }
    if ( attrs.y2axistickvalues ) {
      chart.y2Axis.tickValues( scope.$eval( attrs.y2axistickvalues ) );
    }
    if ( attrs.y2axisticksubdivide ) {
      chart.y2Axis.tickSubdivide( scope.y2axisticksubdivide() );
    }
    if ( attrs.y2axisticksize ) {
      chart.y2Axis.tickSize( scope.y2axisticksize() );
    }
    if ( attrs.y2axistickpadding ) {
      chart.y2Axis.tickPadding( scope.y2axistickpadding() );
    }
    if ( attrs.y2axistickformat ) {
      chart.y2Axis.tickFormat( scope.y2axistickformat() );
    }
    if ( attrs.y2axislabel ) {
      chart.y2Axis.axisLabel( attrs.y2axislabel );
    }
    if ( attrs.y2axisscale ) {
      chart.y2Axis.yScale( scope.y2axisscale() );
    }
    if ( attrs.y2axisdomain ) {
      if ( Array.isArray( scope.$eval( attrs.y2axisdomain ) ) ) {
        chart.y2Axis.domain( scope.$eval( attrs.y2axisdomain ) );
      } else if ( typeof scope.y2axisdomain() === 'function' ) {
        chart.y2Axis.domain( scope.y2axisdomain() );
      }
    }
    if ( attrs.y2axisrange ) {
      if ( Array.isArray( scope.$eval( attrs.y2axisrange ) ) ) {
        chart.y2Axis.range( scope.$eval( attrs.y2axisrange ) );
      } else if ( typeof scope.y2axisrange() === 'function' ) {
        chart.y2Axis.range( scope.y2axisrange() );
      }
    }
    if ( attrs.y2axisrangeband ) {
      chart.y2Axis.rangeBand( scope.y2axisrangeband() );
    }
    if ( attrs.y2axisrangebands ) {
      chart.y2Axis.rangeBands( scope.y2axisrangebands() );
    }
    if ( attrs.y2axisshowmaxmin ) {
      chart.y2Axis.showMaxMin( ( attrs.y2axisshowmaxmin === 'true' ) );
    }
    if ( attrs.y2axishighlightzero ) {
      chart.y2Axis.highlightZero( ( attrs.y2axishighlightzero === 'true' ) );
    }
    if ( attrs.y2axisrotatelabels ) {
      chart.y2Axis.rotateLabels( ( +scope.y2axisrotatelabels ) );
    }
    if ( attrs.y2axisrotateylabel ) {
      chart.y2Axis.rotateYLabel( ( attrs.y2axisrotateylabel === 'true' ) );
    }
    if ( attrs.y2axisstaggerlabels ) {
      chart.y2Axis.staggerlabels( ( attrs.y2axisstaggerlabels === 'true' ) );
    }
    if ( attrs.y2axislabeldistance ) {
      chart.y2Axis.axisLabelDistance( ( +attrs.y2axislabeldistance ) );
    }
  }

  function initializeMargin( scope, attrs ) {
    var margin = scope.$eval( attrs.margin ) || {
      left: 50,
      top: 50,
      bottom: 50,
      right: 50
    };
    if ( typeof margin !== 'object' ) {
      // we were passed a vanilla int, convert to full margin object
      margin = {
        left: margin,
        top: margin,
        bottom: margin,
        right: margin
      };
    }
    scope.margin = margin;
  }

  function checkElementID( scope, attrs, element, chart, data ) {
    configureXaxis( chart, scope, attrs );
    configureX2axis( chart, scope, attrs );
    configureYaxis( chart, scope, attrs );
    configureY1axis( chart, scope, attrs );
    configureY2axis( chart, scope, attrs );
    configureLegend( chart, scope, attrs );
    processEvents( chart, scope );
    var dataAttributeChartID;
    //randomly generated if id attribute doesn't exist
    if ( !attrs.id ) {
      dataAttributeChartID = 'chartid' + Math.floor( Math.random() * 1000000001 );
      angular.element( element ).attr( 'data-chartid', dataAttributeChartID );
      //if an id is not supplied, create a random id.
      if ( d3.select( '[data-chartid=' + dataAttributeChartID + '] svg' ).empty() ) {
        d3.select( '[data-chartid=' + dataAttributeChartID + ']' ).append( 'svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
      } else {
        d3.select( '[data-chartid=' + dataAttributeChartID + '] svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
      }
    } else {
      if ( angular.isArray( data ) && data.length === 0 ) {
        d3.select( '#' + attrs.id + ' svg' ).remove();
      }
      if ( d3.select( '#' + attrs.id + ' svg' ).empty() ) {
        d3.select( '#' + attrs.id ).append( 'svg' );
      }
      d3.select( '#' + attrs.id + ' svg' ).attr( 'height', scope.height ).attr( 'width', scope.width ).datum( data ).transition().duration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration ).call( chart );
    }
  }
  angular.module( 'nvd3ChartDirectives', [] ).directive( 'nvd3LineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forcex: '@',
          forcey: '@',
          isArea: '@',
          interactive: '@',
          clipedge: '@',
          clipvoronoi: '@',
          interpolate: '@',
          callback: '&',
          useinteractiveguideline: '@',
          xaxisorient: '&',
          xaxisticks: '@',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.lineChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).rightAlignYAxis( attrs.rightalignyaxis === undefined ? false : attrs.rightalignyaxis === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).clipEdge( attrs.clipedge === undefined ? false : attrs.clipedge === 'true' ).clipVoronoi( attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true' ).interpolate( attrs.interpolate === undefined ? 'linear' : attrs.interpolate ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).isArea( attrs.isarea === undefined ? function ( d ) {
                    return d.area;
                  } : function () {
                    return attrs.isarea === 'true';
                  } );
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3CumulativeLineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forcex: '@',
          forcey: '@',
          isArea: '@',
          interactive: '@',
          clipedge: '@',
          clipvoronoi: '@',
          usevoronoi: '@',
          average: '&',
          rescaley: '@',
          callback: '&',
          useinteractiveguideline: '@',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.cumulativeLineChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).rightAlignYAxis( attrs.rightalignyaxis === undefined ? false : attrs.rightalignyaxis === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).clipEdge( attrs.clipedge === undefined ? false : attrs.clipedge === 'true' ).clipVoronoi( attrs.clipvoronoi === undefined ? false : attrs.clipvoronoi === 'true' ).useVoronoi( attrs.usevoronoi === undefined ? false : attrs.usevoronoi === 'true' ).average( attrs.average === undefined ? function ( d ) {
                    return d.average;
                  } : scope.average() ).color( attrs.color === undefined ? d3.scale.category10().range() : scope.color() ).isArea( attrs.isarea === undefined ? function ( d ) {
                    return d.area;
                  } : attrs.isarea === 'true' );
                  //.rescaleY(attrs.rescaley === undefined ? false : (attrs.rescaley === 'true'));
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3StackedAreaChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showcontrols: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forcex: '@',
          forcey: '@',
          forcesize: '@',
          interactive: '@',
          usevoronoi: '@',
          clipedge: '@',
          interpolate: '@',
          style: '@',
          order: '@',
          offset: '@',
          size: '&',
          xScale: '&',
          yScale: '&',
          xDomain: '&',
          yDomain: '&',
          xRange: '&',
          yRange: '&',
          sizeDomain: '&',
          callback: '&',
          showxaxis: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          showyaxis: '&',
          useinteractiveguideline: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.stackedAreaChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).forceSize( attrs.forcesize === undefined ? [] : scope.$eval( attrs.forcesize ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).clipEdge( attrs.clipedge === undefined ? false : attrs.clipedge === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.usevoronoi ) {
                    chart.useVoronoi( attrs.usevoronoi === 'true' );
                  }
                  if ( attrs.style ) {
                    chart.style( attrs.style );
                  }
                  if ( attrs.order ) {
                    chart.order( attrs.order );
                  }
                  if ( attrs.offset ) {
                    chart.offset( attrs.offset );
                  }
                  if ( attrs.interpolate ) {
                    chart.interpolate( attrs.interpolate );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.xscale ) {
                    chart.xScale( scope.xscale() );
                  }
                  if ( attrs.yscale ) {
                    chart.yScale( scope.yscale() );
                  }
                  if ( attrs.xdomain ) {
                    if ( Array.isArray( scope.$eval( attrs.xdomain ) ) ) {
                      chart.xDomain( scope.$eval( attrs.xdomain ) );
                    } else if ( typeof scope.xdomain() === 'function' ) {
                      chart.xDomain( scope.xdomain() );
                    }
                  }
                  if ( attrs.ydomain ) {
                    if ( Array.isArray( scope.$eval( attrs.ydomain ) ) ) {
                      chart.yDomain( scope.$eval( attrs.ydomain ) );
                    } else if ( typeof scope.ydomain() === 'function' ) {
                      chart.yDomain( scope.ydomain() );
                    }
                  }
                  if ( attrs.sizedomain ) {
                    chart.sizeDomain( scope.sizedomain() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3MultiBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          tooltipcontent: '&',
          color: '&',
          showcontrols: '@',
          nodata: '@',
          reducexticks: '@',
          staggerlabels: '@',
          rotatelabels: '@',
          margin: '&',
          x: '&',
          y: '&',
          forcey: '@',
          delay: '@',
          stacked: '@',
          callback: '&',
          showxaxis: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          showyaxis: '&',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.multiBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).reduceXTicks( attrs.reducexticks === undefined ? false : attrs.reducexticks === 'true' ).staggerLabels( attrs.staggerlabels === undefined ? false : attrs.staggerlabels === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).rotateLabels( attrs.rotatelabels === undefined ? 0 : attrs.rotatelabels ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).delay( attrs.delay === undefined ? 1200 : attrs.delay ).stacked( attrs.stacked === undefined ? false : attrs.stacked === 'true' );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3DiscreteBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          tooltipcontent: '&',
          staggerlabels: '@',
          color: '&',
          margin: '&',
          nodata: '@',
          x: '&',
          y: '&',
          forcey: '@',
          showvalues: '@',
          valueformat: '&',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.discreteBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).showValues( attrs.showvalues === undefined ? false : attrs.showvalues === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).staggerLabels( attrs.staggerlabels === undefined ? false : attrs.staggerlabels === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.valueformat ) {
                    chart.valueFormat( scope.valueformat() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3HistoricalBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          tooltips: '@',
          tooltipcontent: '&',
          color: '&',
          margin: '&',
          nodata: '@',
          x: '&',
          y: '&',
          forcey: '@',
          isarea: '@',
          interactive: '@',
          clipedge: '@',
          clipvoronoi: '@',
          interpolate: '@',
          highlightPoint: '@',
          clearHighlights: '@',
          callback: '&',
          useinteractiveguideline: '@',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.historicalBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( chart.useInteractiveGuideline ) {
                    chart.useInteractiveGuideline( attrs.useinteractiveguideline === undefined ? false : attrs.useinteractiveguideline === 'true' );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.valueformat ) {
                    chart.valueFormat( scope.valueformat() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3MultiBarHorizontalChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          tooltipcontent: '&',
          color: '&',
          showcontrols: '@',
          margin: '&',
          nodata: '@',
          x: '&',
          y: '&',
          forcey: '@',
          stacked: '@',
          showvalues: '@',
          valueformat: '&',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.multiBarHorizontalChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).showXAxis( attrs.showxaxis === undefined ? false : attrs.showxaxis === 'true' ).showYAxis( attrs.showyaxis === undefined ? false : attrs.showyaxis === 'true' ).forceY( attrs.forcey === undefined ? [ 0 ] : scope.$eval( attrs.forcey ) ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showValues( attrs.showvalues === undefined ? false : attrs.showvalues === 'true' ).stacked( attrs.stacked === undefined ? false : attrs.stacked === 'true' );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  if ( attrs.valueformat ) {
                    chart.valueFormat( scope.valueformat() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3PieChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlabels: '@',
          showlegend: '@',
          donutLabelsOutside: '@',
          pieLabelsOutside: '@',
          labelType: '@',
          nodata: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          donut: '@',
          donutRatio: '@',
          labelthreshold: '@',
          description: '&',
          tooltips: '@',
          tooltipcontent: '&',
          valueFormat: '&',
          callback: '&',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.pieChart().x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).width( scope.width ).height( scope.height ).margin( scope.margin ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).showLabels( attrs.showlabels === undefined ? false : attrs.showlabels === 'true' ).labelThreshold( attrs.labelthreshold === undefined ? 0.02 : attrs.labelthreshold ).labelType( attrs.labeltype === undefined ? 'key' : attrs.labeltype ).pieLabelsOutside( attrs.pielabelsoutside === undefined ? true : attrs.pielabelsoutside === 'true' ).valueFormat( attrs.valueformat === undefined ? d3.format( ',.2f' ) : attrs.valueformat ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).description( attrs.description === undefined ? function ( d ) {
                    return d.description;
                  } : scope.description() ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).donutLabelsOutside( attrs.donutlabelsoutside === undefined ? false : attrs.donutlabelsoutside === 'true' ).donut( attrs.donut === undefined ? false : attrs.donut === 'true' ).donutRatio( attrs.donutratio === undefined ? 0.5 : attrs.donutratio );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3ScatterChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showcontrols: '@',
          showDistX: '@',
          showDistY: '@',
          rightAlignYAxis: '@',
          fisheye: '@',
          xPadding: '@',
          yPadding: '@',
          tooltipContent: '&',
          tooltipXContent: '&',
          tooltipYContent: '&',
          color: '&',
          margin: '&',
          nodata: '@',
          transitionDuration: '@',
          shape: '&',
          onlyCircles: '@',
          interactive: '@',
          x: '&',
          y: '&',
          size: '&',
          forceX: '@',
          forceY: '@',
          forceSize: '@',
          xrange: '&',
          xdomain: '&',
          xscale: '&',
          yrange: '&',
          ydomain: '&',
          yscale: '&',
          sizerange: '&',
          sizedomain: '&',
          zscale: '&',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.scatterChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [] : scope.$eval( attrs.forcey ) ).forceSize( attrs.forcesize === undefined ? [] : scope.$eval( attrs.forcesize ) ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).tooltipContent( attrs.tooltipContent === undefined ? null : scope.tooltipContent() ).tooltipXContent( attrs.tooltipxcontent === undefined ? function ( key, x ) {
                    return '<strong>' + x + '</strong>';
                  } : scope.tooltipXContent() ).tooltipYContent( attrs.tooltipycontent === undefined ? function ( key, x, y ) {
                    return '<strong>' + y + '</strong>';
                  } : scope.tooltipYContent() ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showDistX( attrs.showdistx === undefined ? false : attrs.showdistx === 'true' ).showDistY( attrs.showdisty === undefined ? false : attrs.showdisty === 'true' ).xPadding( attrs.xpadding === undefined ? 0 : +attrs.xpadding ).yPadding( attrs.ypadding === undefined ? 0 : +attrs.ypadding ).fisheye( attrs.fisheye === undefined ? 0 : +attrs.fisheye ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).transitionDuration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration );
                  if ( attrs.shape ) {
                    chart.scatter.onlyCircles( false );
                    chart.scatter.shape( attrs.shape === undefined ? function ( d ) {
                      return d.shape || 'circle';
                    } : scope.shape() );
                  }
                  //'pointActive', 'clipVoronoi', 'clipRadius', 'useVoronoi'
                  if ( attrs.xdomain ) {
                    if ( Array.isArray( scope.$eval( attrs.xdomain ) ) ) {
                      chart.xDomain( scope.$eval( attrs.xdomain ) );
                    } else if ( typeof scope.xdomain() === 'function' ) {
                      chart.xDomain( scope.xdomain() );
                    }
                  }
                  if ( attrs.ydomain ) {
                    if ( Array.isArray( scope.$eval( attrs.ydomain ) ) ) {
                      chart.yDomain( scope.$eval( attrs.ydomain ) );
                    } else if ( typeof scope.ydomain() === 'function' ) {
                      chart.yDomain( scope.ydomain() );
                    }
                  }
                  if ( attrs.xscale ) {
                    chart.xDomain( scope.xdomain() );
                    chart.xRange( scope.xrange() );
                    chart.xScale( scope.xscale() );
                  }
                  if ( attrs.yscale ) {
                    chart.yDomain( scope.ydomain() );
                    chart.yRange( scope.yrange() );
                    chart.yScale( scope.yscale() );
                  }
                  if ( attrs.zscale ) {
                    chart.sizeDomain( scope.sizedomain() );
                    chart.sizeRange( scope.sizerange() );
                    chart.zScale( scope.zscale() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3ScatterPlusLineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          callback: '&'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.scatterPlusLineChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).tooltipContent( attrs.tooltipContent === undefined ? null : scope.tooltipContent() ).tooltipXContent( attrs.tooltipxcontent === undefined ? function ( key, x ) {
                    return '<strong>' + x + '</strong>';
                  } : scope.tooltipXContent() ).tooltipYContent( attrs.tooltipycontent === undefined ? function ( key, x, y ) {
                    return '<strong>' + y + '</strong>';
                  } : scope.tooltipYContent() ).showControls( attrs.showcontrols === undefined ? false : attrs.showcontrols === 'true' ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).showDistX( attrs.showdistx === undefined ? false : attrs.showdistx === 'true' ).showDistY( attrs.showdisty === undefined ? false : attrs.showdisty === 'true' ).xPadding( attrs.xpadding === undefined ? 0 : +attrs.xpadding ).yPadding( attrs.ypadding === undefined ? 0 : +attrs.ypadding ).fisheye( attrs.fisheye === undefined ? 0 : +attrs.fisheye ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).transitionDuration( attrs.transitionduration === undefined ? 250 : +attrs.transitionduration );
                  if ( attrs.shape ) {
                    chart.scatter.onlyCircles( false );
                    chart.scatter.shape( attrs.shape === undefined ? function ( d ) {
                      return d.shape || 'circle';
                    } : scope.shape() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          } );
        }
      };
    }
  ] ).directive( 'nvd3LinePlusBarChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          forceX: '@',
          forceY: '@',
          forceY2: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          clipvoronoi: '@',
          interpolate: '@',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          y1axisorient: '&',
          y1axisticks: '&',
          y1axistickvalues: '&y1axistickvalues',
          y1axisticksubdivide: '&',
          y1axisticksize: '&',
          y1axistickpadding: '&',
          y1axistickformat: '&',
          y1axislabel: '@',
          y1axisscale: '&',
          y1axisdomain: '&',
          y1axisrange: '&',
          y1axisrangeband: '&',
          y1axisrangebands: '&',
          y1axisshowmaxmin: '@',
          y1axishighlightzero: '@',
          y1axisrotatelabels: '@',
          y1axisrotateylabel: '@',
          y1axisstaggerlabels: '@',
          y1axisaxislabeldistance: '@',
          y2axisorient: '&',
          y2axisticks: '&',
          y2axistickvalues: '&y2axistickvalues',
          y2axisticksubdivide: '&',
          y2axisticksize: '&',
          y2axistickpadding: '&',
          y2axistickformat: '&',
          y2axislabel: '@',
          y2axisscale: '&',
          y2axisdomain: '&',
          y2axisrange: '&',
          y2axisrangeband: '&',
          y2axisrangebands: '&',
          y2axisshowmaxmin: '@',
          y2axishighlightzero: '@',
          y2axisrotatelabels: '@',
          y2axisrotateylabel: '@',
          y2axisstaggerlabels: '@',
          y2axisaxislabeldistance: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.linePlusBarChart().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).interpolate( attrs.interpolate === undefined ? 'linear' : attrs.interpolate ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() );
                  if ( attrs.forcex ) {
                    chart.lines.forceX( scope.$eval( attrs.forcex ) );
                    chart.bars.forceX( scope.$eval( attrs.forcex ) );
                  }
                  if ( attrs.forcey ) {
                    chart.lines.forceY( scope.$eval( attrs.forcey ) );
                    chart.bars.forceY( scope.$eval( attrs.forcey ) );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3LineWithFocusChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          height2: '@',
          id: '@',
          showlegend: '@',
          tooltips: '@',
          showxaxis: '@',
          showyaxis: '@',
          rightalignyaxis: '@',
          defaultstate: '@',
          nodata: '@',
          margin: '&',
          margin2: '&',
          tooltipcontent: '&',
          color: '&',
          x: '&',
          y: '&',
          forceX: '@',
          forceY: '@',
          clipedge: '@',
          clipvoronoi: '@',
          interpolate: '@',
          isArea: '@',
          size: '&',
          defined: '&',
          interactive: '@',
          callback: '&',
          xaxisorient: '&',
          xaxisticks: '&',
          xaxistickvalues: '&xaxistickvalues',
          xaxisticksubdivide: '&',
          xaxisticksize: '&',
          xaxistickpadding: '&',
          xaxistickformat: '&',
          xaxislabel: '@',
          xaxisscale: '&',
          xaxisdomain: '&',
          xaxisrange: '&',
          xaxisrangeband: '&',
          xaxisrangebands: '&',
          xaxisshowmaxmin: '@',
          xaxishighlightzero: '@',
          xaxisrotatelabels: '@',
          xaxisrotateylabel: '@',
          xaxisstaggerlabels: '@',
          xaxisaxislabeldistance: '@',
          x2axisorient: '&',
          x2axisticks: '&',
          x2axistickvalues: '&xaxistickvalues',
          x2axisticksubdivide: '&',
          x2axisticksize: '&',
          x2axistickpadding: '&',
          x2axistickformat: '&',
          x2axislabel: '@',
          x2axisscale: '&',
          x2axisdomain: '&',
          x2axisrange: '&',
          x2axisrangeband: '&',
          x2axisrangebands: '&',
          x2axisshowmaxmin: '@',
          x2axishighlightzero: '@',
          x2axisrotatelables: '@',
          x2axisrotateylabel: '@',
          x2axisstaggerlabels: '@',
          yaxisorient: '&',
          yaxisticks: '&',
          yaxistickvalues: '&yaxistickvalues',
          yaxisticksubdivide: '&',
          yaxisticksize: '&',
          yaxistickpadding: '&',
          yaxistickformat: '&',
          yaxislabel: '@',
          yaxisscale: '&',
          yaxisdomain: '&',
          yaxisrange: '&',
          yaxisrangeband: '&',
          yaxisrangebands: '&',
          yaxisshowmaxmin: '@',
          yaxishighlightzero: '@',
          yaxisrotatelabels: '@',
          yaxisrotateylabel: '@',
          yaxisstaggerlabels: '@',
          yaxislabeldistance: '@',
          y2axisorient: '&',
          y2axisticks: '&',
          y2axistickvalues: '&',
          y2axisticksubdivide: '&',
          y2axisticksize: '&',
          y2axistickpadding: '&',
          y2axistickformat: '&',
          y2axislabel: '@',
          y2axisscale: '&',
          y2axisdomain: '&',
          y2axisrange: '&',
          y2axisrangeband: '&',
          y2axisrangebands: '&',
          y2axisshowmaxmin: '@',
          y2axishighlightzero: '@',
          y2axisrotatelabels: '@',
          y2axisrotateylabel: '@',
          y2axisstaggerlabels: '@',
          legendmargin: '&',
          legendwidth: '@',
          legendheight: '@',
          legendkey: '@',
          legendcolor: '&',
          legendalign: '@',
          legendrightalign: '@',
          legendupdatestate: '@',
          legendradiobuttonmode: '@',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  //setup height 2
                  //height 2 is 100
                  //margin
                  //nvd3 default is {top: 30, right: 30, bottom: 30, left: 60}
                  //setup margin 2
                  //nvd3 default is {top: 0, right: 30, bottom: 20, left: 60}
                  if ( attrs.margin2 ) {
                    var margin2 = scope.$eval( attrs.margin2 );
                    if ( typeof margin2 !== 'object' ) {
                      // we were passed a vanilla int, convert to full margin object
                      margin2 = {
                        left: margin2,
                        top: margin2,
                        bottom: margin2,
                        right: margin2
                      };
                    }
                    scope.margin2 = margin2;
                  } else {
                    scope.margin2 = {
                      top: 0,
                      right: 30,
                      bottom: 20,
                      left: 60
                    };
                  }
                  //'xDomain', 'yDomain', 'xRange', 'yRange', ''clipEdge', 'clipVoronoi'
                  var chart = nv.models.lineWithFocusChart().width( scope.width ).height( scope.height ).height2( attrs.height2 === undefined ? 100 : +attrs.height2 ).margin( scope.margin ).margin2( scope.margin2 ).x( attrs.x === undefined ? function ( d ) {
                    return d[ 0 ];
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d[ 1 ];
                  } : scope.y() ).forceX( attrs.forcex === undefined ? [] : scope.$eval( attrs.forcex ) ).forceY( attrs.forcey === undefined ? [] : scope.$eval( attrs.forcey ) ).showLegend( attrs.showlegend === undefined ? false : attrs.showlegend === 'true' ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata ).color( attrs.color === undefined ? nv.utils.defaultColor() : scope.color() ).isArea( attrs.isarea === undefined ? function ( d ) {
                    return d.area;
                  } : function () {
                    return attrs.isarea === 'true';
                  } ).size( attrs.size === undefined ? function ( d ) {
                    return d.size === undefined ? 1 : d.size;
                  } : scope.size() ).interactive( attrs.interactive === undefined ? false : attrs.interactive === 'true' ).interpolate( attrs.interpolate === undefined ? 'linear' : attrs.interpolate );
                  if ( attrs.defined ) {
                    chart.defined( scope.defined() );
                  }
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3BulletChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          tooltips: '@',
          tooltipcontent: '&',
          orient: '@',
          ranges: '&',
          markers: '&',
          measures: '&',
          tickformat: '&',
          nodata: '@',
          callback: '&',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.bulletChart().width( scope.width ).height( scope.height ).margin( scope.margin ).orient( attrs.orient === undefined ? 'left' : attrs.orient ).tickFormat( attrs.tickformat === undefined ? null : scope.tickformat() ).tooltips( attrs.tooltips === undefined ? false : attrs.tooltips === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata );
                  if ( attrs.tooltipcontent ) {
                    chart.tooltipContent( scope.tooltipcontent() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3SparklineChart', [
    function () {
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          xscale: '&',
          yscale: '&',
          showvalue: '@',
          alignvalue: '@',
          rightalignvalue: '@',
          nodata: '@',
          callback: '&',
          xtickformat: '&',
          ytickformat: '&',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            $scope.d3Call = function ( data, chart ) {
              checkElementID( $scope, $attrs, $element, chart, data );
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  initializeMargin( scope, attrs );
                  var chart = nv.models.sparklinePlus().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).xTickFormat( attrs.xtickformat === undefined ? d3.format( ',r' ) : scope.xtickformat() ).yTickFormat( attrs.ytickformat === undefined ? d3.format( ',.2f' ) : scope.ytickformat() ).color( attrs.color === undefined ? nv.utils.getColor( [ '#000' ] ) : scope.color() ).showValue( attrs.showvalue === undefined ? true : attrs.showvalue === 'true' ).alignValue( attrs.alignvalue === undefined ? true : attrs.alignvalue === 'true' ).rightAlignValue( attrs.rightalignvalue === undefined ? false : attrs.rightalignvalue === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata );
                  if ( attrs.xScale ) {
                    chart.xScale( scope.xScale() );
                  }
                  if ( attrs.yScale ) {
                    chart.yScale( scope.yScale() );
                  }
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ).directive( 'nvd3SparklineWithBandlinesChart', [
    function () {
      /**
       * http://www.perceptualedge.com/articles/visual_business_intelligence/introducing_bandlines.pdf
       * You need five primary facts about a set of time-series values to construct a bandline:
       * 1) the lowest value,
       * 2) the 25th percentile (i.e., the point at and below which the lowest 25% of the values reside),
       * 3) the median (a.k.a., the 50th percentile, the point at and below which 50% of the values reside),
       * 4) the 75th percentile (i.e., the point at and below which 75% of the values reside), and
       * 5) the highest value.
       */
      return {
        restrict: 'EA',
        scope: {
          data: '=',
          width: '@',
          height: '@',
          id: '@',
          margin: '&',
          x: '&',
          y: '&',
          color: '&',
          xscale: '&',
          yscale: '&',
          showvalue: '@',
          alignvalue: '@',
          rightalignvalue: '@',
          nodata: '@',
          callback: '&',
          xtickformat: '&',
          ytickformat: '&',
          objectequality: '@',
          transitionduration: '@'
        },
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function ( $scope, $element, $attrs ) {
            //expect scope to contain bandlineProperties
            $scope.d3Call = function ( data, chart ) {
              var dataAttributeChartID;
              //randomly generated if id attribute doesn't exist
              var selectedChart;
              var sLineSelection;
              var bandlineData;
              var bandLines;
              if ( !$attrs.id ) {
                dataAttributeChartID = 'chartid' + Math.floor( Math.random() * 1000000001 );
                angular.element( $element ).attr( 'data-chartid', dataAttributeChartID );
                selectedChart = d3.select( '[data-iem-chartid=' + dataAttributeChartID + '] svg' ).attr( 'height', $scope.height ).attr( 'width', $scope.width ).datum( data );
                //chart.yScale()($scope.bandlineProperties.median)
                //var sLineSelection = d3.select('svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline');
                sLineSelection = d3.select( '[data-iem-chartid=' + dataAttributeChartID + '] svg' + ' g.nvd3.nv-wrap.nv-sparkline' );
                bandlineData = [
                  $scope.bandlineProperties.min,
                  $scope.bandlineProperties.twentyFithPercentile,
                  $scope.bandlineProperties.median,
                  $scope.bandlineProperties.seventyFithPercentile,
                  $scope.bandlineProperties.max
                ];
                bandLines = sLineSelection.selectAll( '.nv-bandline' ).data( [ bandlineData ] );
                bandLines.enter().append( 'g' ).attr( 'class', 'nv-bandline' );
                selectedChart.transition().duration( $attrs.transitionduration === undefined ? 250 : +$attrs.transitionduration ).call( chart );
              } else {
                if ( !d3.select( '#' + $attrs.id + ' svg' ) ) {
                  d3.select( '#' + $attrs.id ).append( 'svg' );
                }
                selectedChart = d3.select( '#' + $attrs.id + ' svg' ).attr( 'height', $scope.height ).attr( 'width', $scope.width ).datum( data );
                //chart.yScale()($scope.bandlineProperties.median)
                sLineSelection = d3.select( 'svg#' + $attrs.id + ' g.nvd3.nv-wrap.nv-sparkline' );
                bandlineData = [
                  $scope.bandlineProperties.min,
                  $scope.bandlineProperties.twentyFithPercentile,
                  $scope.bandlineProperties.median,
                  $scope.bandlineProperties.seventyFithPercentile,
                  $scope.bandlineProperties.max
                ];
                bandLines = sLineSelection.selectAll( '.nv-bandline' ).data( [ bandlineData ] );
                bandLines.enter().append( 'g' ).attr( 'class', 'nv-bandline' );
                selectedChart.transition().duration( $attrs.transitionduration === undefined ? 250 : +$attrs.transitionduration ).call( chart );
              }
            };
          }
        ],
        link: function ( scope, element, attrs ) {
          scope.$watch( 'data', function ( data ) {
            if ( data ) {
              //if the chart exists on the scope, do not call addGraph again, update data and call the chart.
              if ( scope.chart ) {
                return scope.d3Call( data, scope.chart );
              }
              nv.addGraph( {
                generate: function () {
                  scope.bandlineProperties = {};
                  var sortedValues;
                  initializeMargin( scope, attrs );
                  var chart = nv.models.sparklinePlus().width( scope.width ).height( scope.height ).margin( scope.margin ).x( attrs.x === undefined ? function ( d ) {
                    return d.x;
                  } : scope.x() ).y( attrs.y === undefined ? function ( d ) {
                    return d.y;
                  } : scope.y() ).xTickFormat( attrs.xtickformat === undefined ? d3.format( ',r' ) : scope.xtickformat() ).yTickFormat( attrs.ytickformat === undefined ? d3.format( ',.2f' ) : scope.ytickformat() ).color( attrs.color === undefined ? nv.utils.getColor( [ '#000' ] ) : scope.color() ).showValue( attrs.showvalue === undefined ? true : attrs.showvalue === 'true' ).alignValue( attrs.alignvalue === undefined ? true : attrs.alignvalue === 'true' ).rightAlignValue( attrs.rightalignvalue === undefined ? false : attrs.rightalignvalue === 'true' ).noData( attrs.nodata === undefined ? 'No Data Available.' : scope.nodata );
                  //calc bandline data
                  scope.bandlineProperties.min = d3.min( data, function ( d ) {
                    return d[ 1 ];
                  } );
                  scope.bandlineProperties.max = d3.max( data, function ( d ) {
                    return d[ 1 ];
                  } );
                  sortedValues = data.map( function ( d ) {
                    return d[ 1 ];
                  } ).sort( function ( a, b ) {
                    if ( a[ 0 ] < b[ 0 ] ) {
                      return -1;
                    } else if ( a[ 0 ] === b[ 0 ] ) {
                      return 0;
                    } else {
                      return 1;
                    }
                  } );
                  scope.bandlineProperties.twentyFithPercentile = d3.quantile( sortedValues, 0.25 );
                  scope.bandlineProperties.median = d3.median( sortedValues );
                  scope.bandlineProperties.seventyFithPercentile = d3.quantile( sortedValues, 0.75 );
                  if ( attrs.xScale ) {
                    chart.xScale( scope.xScale() );
                  }
                  if ( attrs.yScale ) {
                    chart.yScale( scope.yScale() );
                  }
                  configureXaxis( chart, scope, attrs );
                  configureYaxis( chart, scope, attrs );
                  processEvents( chart, scope );
                  scope.d3Call( data, chart );
                  nv.utils.windowResize( chart.update );
                  scope.chart = chart;
                  return chart;
                },
                callback: attrs.callback === undefined ? null : scope.callback()
              } );
            }
          }, attrs.objectequality === undefined ? false : attrs.objectequality === 'true' );
        }
      };
    }
  ] ); //still need to implement
  //sparkbars??
  //nv.models.multiBarTimeSeriesChart
  //nv.models.multiChart
  //nv.models.scatterPlusLineChart
  //nv.models.linePlusBarWithFocusChart
  //dual y-axis chart
  //crossfilter using $services?

}() );

/*
 * Copyright 2009-2012 Roland Huss
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* =================================
 * Jolokia Javascript Client Library
 * =================================
 *
 * Requires jquery.js and json2.js
 * (if no native JSON.stringify() support is available,
 * look here where this is the case: http://caniuse.com/json)
 */

(function() {

    var _jolokiaConstructorFunc = function ($) {

        // Default paramerters for GET and POST requests
        var DEFAULT_CLIENT_PARAMS = {
            type:"POST",
            jsonp:false
        };

        var GET_AJAX_PARAMS = {
            type:"GET"
        };

        var POST_AJAX_PARAMS = {
            type:"POST",
            processData:false,
            dataType:"json",
            contentType:"text/json"
        };

        // Processing parameters which are added to the
        // URL as query parameters if given as options
        var PROCESSING_PARAMS = ["maxDepth", "maxCollectionSize", "maxObjects", "ignoreErrors", "canonicalNaming",
                                 "serializeException", "includeStackTrace", "ifModifiedSince"];

        /**
         * Constructor for creating a client to the Jolokia agent.
         *
         * An object containing the default parameters can be provided as argument. For the possible parameters
         * see {@link #request()}.
         *
         * @param param either a string in which case it is used as the URL to the agent or
         *              an object with the default parameters as key-value pairs
         */
        function Jolokia(param) {
            // If called without 'new', we are constructing an object
            // nevertheless
            if (!(this instanceof arguments.callee)) {
                return new Jolokia(param);
            }

            // Jolokia Javascript Client version
            this.CLIENT_VERSION = "1.2.2";

            // Registered requests for fetching periodically
            var jobs = [];

            // Options used for every request
            var agentOptions = {};

            // State of the scheduler
            var pollerIsRunning = false;

            // Allow a single URL parameter as well
            if (typeof param === "string") {
                param = {url:param};
            }
            $.extend(agentOptions, DEFAULT_CLIENT_PARAMS, param);

            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // Public methods

            /**
             * The request method using one or more JSON requests and sending it to the agent. Beside the
             * request a bunch of options can be given, which are merged with the options provided
             * at the constructor (where the options given here take precedence).
             *
             * Known options are:
             *
             * <dl>
             *   <dt>url</dt>
             *   <dd>Agent URL, which is mandatory</dd>
             *   <dt>method</dt>
             *   <dd>
             *     Either "post" or "get" depending on the desired HTTP method (case does not matter).
             *     Please note, that bulk requests are not possible with "get". On the other
             *     hand, JSONP requests are not possible with "post" (which obviously implies
             *     that bulk request cannot be used with JSONP requests). Also, when using a
             *     <code>read</code> type request for multiple attributes, this also can
             *     only be sent as "post" requests. If not given, a HTTP method is determined
             *     dyamically. If a method is selected which doesn't fit to the request, an error
             *     is raised.
             *   </dd>
             *   <dt>jsonp</dt>
             *   <dd>
             *     Whether the request should be sent via JSONP (a technique for allowing cross
             *     domain request circumventing the infamous "same-origin-policy"). This can be
             *     used only with HTTP "get" requests.
             *    </dd>
             *   <dt>success</dt>
             *   <dd>
             *     Callback function which is called for a successful request. The callback receives
             *     the response as single argument. If no <code>success</code> callback is given, then
             *     the request is performed synchronously and gives back the response as return
             *     value.
             *   </dd>
             *   <dt>error</dt>
             *   <dd>
             *     Callback in case a Jolokia error occurs. A Jolokia error is one, in which the HTTP request
             *     suceeded with a status code of 200, but the response object contains a status other
             *     than OK (200) which happens if the request JMX operation fails. This callback receives
             *     the full Jolokia response object (with a key <code>error</code> set). If no error callback
             *     is given, but an asynchronous operation is performed, the error response is printed
             *     to the Javascript console by default.
             *   </dd>
             *   <dt>ajaxError</dt>
             *   <dd>
             *     Global error callback called when the Ajax request itself failed. It obtains the same arguments
             *     as the error callback given for <code>jQuery.ajax()</code>, i.e. the <code>XmlHttpResonse</code>,
             *     a text status and an error thrown. Refer to the jQuery documentation for more information about
             *     this error handler.
             *   </dd>
             *   <dt>username</dt>
             *   <dd>A username used for HTTP authentication</dd>
             *   <dt>password</dt>
             *   <dd>A password used for HTTP authentication</dd>
             *   <dt>timeout</dt>
             *   <dd>Timeout for the HTTP request</dd>
             *   <dt>maxDepth</dt>
             *   <dd>Maximum traversal depth for serialization of complex return values</dd>
             *   <dt>maxCollectionSize</dt>
             *   <dd>
             *      Maximum size of collections returned during serialization.
             *      If larger, the collection is returned truncated.
             *   </dd>
             *   <dt>maxObjects</dt>
             *   <dd>
             *      Maximum number of objects contained in the response.
             *   </dd>
             *   <dt>ignoreErrors</dt>
             *   <dd>
             *     If set to true, errors during JMX operations and JSON serialization
             *     are ignored. Otherwise if a single deserialization fails, the whole request
             *     returns with an error. This works only for certain operations like pattern reads..
             *   </dd>
             * </dl>
             *
             * @param request the request to send
             * @param params parameters used for sending the request
             * @return the response object if called synchronously or nothing if called for asynchronous operation.
             */
            this.request = function (request, params) {
                var opts = $.extend({}, agentOptions, params);
                assertNotNull(opts.url, "No URL given");

                var ajaxParams = {};

                // Copy over direct params for the jQuery ajax call
                $.each(["username", "password", "timeout"], function (i, key) {
                    if (opts[key]) {
                        ajaxParams[key] = opts[key];
                    }
                });

                if (ajaxParams['username'] && ajaxParams['password']) {
                    // If we have btoa() then we set the authentication preemptively,

                    // Otherwise (e.g. for IE < 10) an extra roundtrip might be necessary
                    // when using 'username' and 'password' in xhr.open(..)
                    // See http://stackoverflow.com/questions/5507234/how-to-use-basic-auth-and-jquery-and-ajax
                    // for details
                    if (window.btoa) {
                        ajaxParams.beforeSend = function (xhr) {
                            var tok = ajaxParams['username'] + ':' + ajaxParams['password'];
                            xhr.setRequestHeader('Authorization', "Basic " + window.btoa(tok));
                        };
                    }

                    // Add appropriate field for CORS access
                    ajaxParams.xhrFields = {
                        // Please note that for CORS access with credentials, the request
                        // must be asynchronous (see https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html#the-withcredentials-attribute)
                        // It works synchronously in Chrome nevertheless, but fails in Firefox.
                        withCredentials: true
                    };
                }

                if (extractMethod(request, opts) === "post") {
                    $.extend(ajaxParams, POST_AJAX_PARAMS);
                    ajaxParams.data = JSON.stringify(request);
                    ajaxParams.url = ensureTrailingSlash(opts.url);
                } else {
                    $.extend(ajaxParams, GET_AJAX_PARAMS);
                    ajaxParams.dataType = opts.jsonp ? "jsonp" : "json";
                    ajaxParams.url = opts.url + "/" + constructGetUrlPath(request);
                }

                // Add processing parameters as query parameters
                ajaxParams.url = addProcessingParameters(ajaxParams.url, opts);

                // Global error handler
                if (opts.ajaxError) {
                    ajaxParams.error = opts.ajaxError;
                }

                // Dispatch Callbacks to error and success handlers
                if (opts.success) {
                    var success_callback = constructCallbackDispatcher(opts.success);
                    var error_callback = constructCallbackDispatcher(opts.error);
                    ajaxParams.success = function (data) {
                        var responses = $.isArray(data) ? data : [ data ];
                        for (var idx = 0; idx < responses.length; idx++) {
                            var resp = responses[idx];
                            if (Jolokia.isError(resp)) {
                                error_callback(resp, idx);
                            } else {
                                success_callback(resp, idx);
                            }
                        }
                    };

                    // Perform the request
                    $.ajax(ajaxParams);
                    return null;
                } else {
                    // Synchronous operation requested (i.e. no callbacks provided)
                    if (opts.jsonp) {
                        throw Error("JSONP is not supported for synchronous requests");
                    }
                    ajaxParams.async = false;
                    var xhr = $.ajax(ajaxParams);
                    if (httpSuccess(xhr)) {
                        return $.parseJSON(xhr.responseText);
                    } else {
                        return null;
                    }
                }
            };

            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // Scheduler related methods

            /**
             * Register one or more requests for periodically polling the agent along with a callback to call on receipt
             * of the response.
             *
             * The first argument can be either an object or a function. The remaining arguments are interpreted
             * as Jolokia request objects
             *
             * If a function is given or an object with an attribute <code>callback</code> holding a function, then
             * this function is called with all responses received as argument, regardless whether the individual response
             * indicates a success or error state.
             *
             * If the first argument is an object with two callback attributes <code>success</code> and <code>error</code>,
             * these functions are called for <em>each</em> response separately, depending whether the response
             * indicates success or an error state. If multiple requests have been registered along with this callback object,
             * the callback is called multiple times, one for each request in the same order as the request are given.
             * As second argument, the handle which is returned by this method is given and as third argument the index
             * within the list of requests.
             *
             * If the first argument is an object, an additional 'config' attribute with processing parameters can
             * be given which is used as default for the registered requests.
             * Request with a 'config' section take precedence.
             *
             * @param callback and options specification.
             * @param request, request, .... One or more requests to be registered for this single callback
             * @return handle which can be used for unregistering the request again or for correlation purposes in the callbacks
             */
            this.register = function() {
                if (arguments.length < 2) {
                    throw "At a least one request must be provided";
                }
                var callback = arguments[0],
                    requests = Array.prototype.slice.call(arguments,1),
                    job;
                if (typeof callback === 'object') {
                    if (callback.success && callback.error) {
                        job = {
                            success: callback.success,
                            error: callback.error
                        };
                    } else if (callback.callback) {
                        job = {
                            callback: callback.callback
                        };
                    } else {
                        throw "Either 'callback' or ('success' and 'error') callback must be provided " +
                              "when registering a Jolokia job";
                    }
                    job = $.extend(job,{
                        config: callback.config,
                        onlyIfModified: callback.onlyIfModified
                    });
                } else if (typeof callback === 'function') {
                    // Simplest version without config possibility
                    job = {
                        success: null,
                        error: null,
                        callback: callback
                    };
                } else {
                    throw "First argument must be either a callback func " +
                          "or an object with 'success' and 'error' attributes";
                }
                if (!requests) {
                    throw "No requests given";
                }
                job.requests = requests;
                var idx = jobs.length;
                jobs[idx] = job;
                return idx;
            };

            /**
             * Unregister a one or more request which has been registered with {@link #registerRequest}. As parameter
             * the handle returned during the registration process must be given
             * @param handle
             */
            this.unregister = function(handle) {
                if (handle < jobs.length) {
                    jobs[handle] = undefined;
                }
            };

            /**
             * Return an array of handles for currently registered jobs.
             * @return Array of job handles or an empty array
             */
            this.jobs = function() {
                var ret = [],
                    len = jobs.length;
                for (var i = 0; i < len; i++) {
                    if (jobs[i]) {
                        ret.push(i);
                    }
                }
                return ret;
            };

            /**
             * Start the poller. The interval between two polling attempts can be optionally given or are taken from
             * the parameter <code>fetchInterval</code> given at construction time. If no interval is given at all,
             * 30 seconds is the default.
             *
             * If the poller is already running (i.e. {@link #isRunning()} is <code>true</code> then the scheduler
             * is restarted, but only if the new interval differs from the currently active one.
             *
             * @param interval interval in milliseconds between two polling attempts
             */
            this.start = function(interval) {
                interval = interval || agentOptions.fetchInterval || 30000;
                if (pollerIsRunning) {
                    if (interval === agentOptions.fetchInterval) {
                        // Nothing to do
                        return;
                    }
                    // Re-start with new interval
                    this.stop();
                }
                agentOptions.fetchInterval = interval;
                this.timerId = setInterval(callJolokia(this,jobs), interval);

                pollerIsRunning = true;
            };

            /**
             * Stop the poller. If the poller is not running, no operation is performed.
             */
            this.stop = function() {
                if (!pollerIsRunning && this.timerId != undefined) {
                    return;
                }
                clearInterval(this.timerId);
                this.timerId = null;

                pollerIsRunning = false;
            };

            /**
             * Check whether the poller is running.
             * @return true if the poller is running, false otherwise.
             */
            this.isRunning = function() {
                return pollerIsRunning;
            };

            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        }


        // ========================================================================
        // Private Methods:

        // Create a function called by a timer, which requests the registered requests
        // calling the stored callback on receipt. jolokia and jobs are put into the closure
        function callJolokia(jolokia,jobs) {
            return function() {
                var errorCbs = [],
                    successCbs = [],
                    i, j,
                    len = jobs.length;
                var requests = [];
                for (i = 0; i < len; i++) {
                    var job = jobs[i];
                    // Can happen when job has been deleted
                    // TODO: Can be probably optimized so that only the existing keys of jobs can be visited
                    if (!job) { continue;  }
                    var reqsLen = job.requests.length;
                    if (job.success) {
                        // Success/error pair of callbacks. For multiple request,
                        // these callback will be called multiple times
                        var successCb = cbSuccessClosure(job,i);
                        var errorCb = cbErrorClosure(job,i);
                        for (j = 0; j < reqsLen; j++) {
                            requests.push(prepareRequest(job,j));
                            successCbs.push(successCb);
                            errorCbs.push(errorCb);
                        }
                    } else {
                        // Job should have a single callback (job.callback) which will be
                        // called once with all responses at once as an array
                        var callback = cbCallbackClosure(job,jolokia);
                        // Add callbacks which collect the responses
                        for (j = 0; j < reqsLen - 1; j++) {
                            requests.push(prepareRequest(job,j));
                            successCbs.push(callback.cb);
                            errorCbs.push(callback.cb);
                        }
                        // Add final callback which finally will call the job.callback with all
                        // collected responses.
                        requests.push(prepareRequest(job,reqsLen-1));
                        successCbs.push(callback.lcb);
                        errorCbs.push(callback.lcb);
                    }
                }
                var opts = {
                    // Dispatch to the build up callbacks, request by request
                    success: function(resp, j) {
                        return successCbs[j].apply(jolokia, [resp, j]);
                    },
                    error: function(resp, j) {
                        return errorCbs[j].apply(jolokia, [resp, j]);
                    }
                };
                return jolokia.request(requests, opts);
            };
        }

        // Prepare a request with the proper configuration
        function prepareRequest(job,idx) {
            var request = job.requests[idx],
                config = job.config || {},
                // Add the proper ifModifiedSince parameter if already called at least once
                extra = job.onlyIfModified && job.lastModified ? { ifModifiedSince: job.lastModified } : {};

            request.config = $.extend({}, config, request.config, extra);
            return request;
        }

        // Closure for a full callback which stores the responses in an (closed) array
        // which the finally is feed in to the callback as array
        function cbCallbackClosure(job,jolokia) {
            var responses = [],
                callback = job.callback,
                lastModified = 0;

            return {
                cb : addResponse,
                lcb : function(resp,j) {
                    addResponse(resp);
                    // Callback is called only if at least one non-cached response
                    // is obtained. Update job's timestamp internally
                    if (responses.length > 0) {
                        job.lastModified = lastModified;
                        callback.apply(jolokia,responses);
                    }
                }
            };

            function addResponse(resp,j) {
                // Only remember responses with values and remember lowest timetamp, too.
                if (resp.status != 304) {
                    if (lastModified == 0 || resp.timestamp < lastModified ) {
                        lastModified = resp.timestamp;
                    }
                    responses.push(resp);
                }
            }
        }

        // Own function for creating a closure to avoid reference to mutable state in the loop
        function cbErrorClosure(job, i) {
            var callback = job.error;
            return function(resp,j) {
                // If we get a "304 - Not Modified" 'error', we do nothing
                if (resp.status == 304) {
                    return;
                }
                if (callback) {
                    callback(resp,i,j)
                }
            }
        }

        function cbSuccessClosure(job, i) {
            var callback = job.success;
            return function(resp,j) {
                if (callback) {
                    // Remember last success callback
                    if (job.onlyIfModified) {
                        job.lastModified = resp.timestamp;
                    }
                    callback(resp,i,j)
                }
            }
        }

        // Construct a callback dispatcher for appropriately dispatching
        // to a single callback or within an array of callbacks
        function constructCallbackDispatcher(callback) {
            if (callback == null) {
                return function (response) {
                    console.warn("Ignoring response " + JSON.stringify(response));
                };
            } else if (callback === "ignore") {
                // Ignore the return value
                return function () {
                };
            }
            var callbackArray = $.isArray(callback) ? callback : [ callback ];
            return function (response, idx) {
                callbackArray[idx % callbackArray.length](response, idx);
            }
        }

        // Extract the HTTP-Method to use and make some sanity checks if
        // the method was provided as part of the options, but dont fit
        // to the request given
        function extractMethod(request, opts) {
            var methodGiven = opts && opts.method ? opts.method.toLowerCase() : null,
                    method;
            if (methodGiven) {
                if (methodGiven === "get") {
                    if ($.isArray(request)) {
                        throw new Error("Cannot use GET with bulk requests");
                    }
                    if (request.type.toLowerCase() === "read" && $.isArray(request.attribute)) {
                        throw new Error("Cannot use GET for read with multiple attributes");
                    }
                    if (request.target) {
                        throw new Error("Cannot use GET request with proxy mode");
                    }
                    if (request.config) {
                        throw new Error("Cannot use GET with request specific config");
                    }
                }
                method = methodGiven;
            } else {
                // Determine method dynamically
                method = $.isArray(request) ||
                         request.config ||
                         (request.type.toLowerCase() === "read" && $.isArray(request.attribute)) ||
                         request.target ?
                        "post" : "get";
            }
            if (opts.jsonp && method === "post") {
                throw new Error("Can not use JSONP with POST requests");
            }
            return method;
        }

        // Add processing parameters given as request options
        // to an URL as GET query parameters
        function addProcessingParameters(url, opts) {
            var sep = url.indexOf("?") > 0 ? "&" : "?";
            $.each(PROCESSING_PARAMS, function (i, key) {
                if (opts[key] != null) {
                    url += sep + key + "=" + opts[key];
                    sep = "&";
                }
            });
            return url;
        }

        // ========================================================================
        // GET-Request handling

        // Create the URL used for a GET request
        function constructGetUrlPath(request) {
            var type = request.type;
            assertNotNull(type, "No request type given for building a GET request");
            type = type.toLowerCase();
            var extractor = GET_URL_EXTRACTORS[type];
            assertNotNull(extractor, "Unknown request type " + type);
            var result = extractor(request);
            var parts = result.parts || [];
            var url = type;
            $.each(parts, function (i, v) {
                url += "/" + Jolokia.escape(v)
            });
            if (result.path) {
                url += (result.path[0] == '/' ? "" : "/") + result.path;
            }
            console.log(url);
            return url;
        }

        // For POST requests it is recommended to have a trailing slash at the URL
        // in order to avoid a redirect which then results in a GET request.
        // See also https://bugs.eclipse.org/bugs/show_bug.cgi?id=331194#c1
        // for an explanation
        function ensureTrailingSlash(url) {
            // Squeeze any URL to a single one, optionally adding one
            return url.replace(/\/*$/, "/");
        }

        // Extractors used for preparing a GET request, i.e. for creating a stack
        // of arguments which gets appended to create the proper access URL
        // key: lowercase request type.
        // The return value is an object with two properties: The 'parts' to glue together, where
        // each part gets escaped and a 'path' which is appended literally
        var GET_URL_EXTRACTORS = {
            "read":function (request) {
                if (request.attribute == null) {
                    // Path gets ignored for multiple attribute fetch
                    return { parts:[ request.mbean, '*' ], path:request.path };
                } else {
                    return { parts:[ request.mbean, request.attribute ], path:request.path };
                }
            },
            "write":function (request) {
                return { parts:[request.mbean, request.attribute, valueToString(request.value)], path:request.path};
            },
            "exec":function (request) {
                var ret = [ request.mbean, request.operation ];
                if (request.arguments && request.arguments.length > 0) {
                    $.each(request.arguments, function (index, value) {
                        ret.push(valueToString(value));
                    });
                }
                return {parts:ret};
            },
            "version":function () {
                return {};
            },
            "search":function (request) {
                return { parts:[request.mbean]};
            },
            "list":function (request) {
                return { path:request.path};
            }
        };

        // Convert a value to a string for passing it to the Jolokia agent via
        // a get request (write, exec). Value can be either a single object or an array
        function valueToString(value) {
            if (value == null) {
                return "[null]";
            }
            if ($.isArray(value)) {
                var ret = "";
                for (var i = 0; i < value.length; i++) {
                    ret += value == null ? "[null]" : singleValueToString(value[i]);
                    if (i < value.length - 1) {
                        ret += ",";
                    }
                }
                return ret;
            } else {
                return singleValueToString(value);
            }
        }

        // Single value conversion for write/exec GET requests
        function singleValueToString(value) {
            if (typeof value === "string" && value.length == 0) {
                return "\"\"";
            } else {
                return value.toString();
            }
        }

        // Check whether a synchronous request was a success or not
        // Taken from jQuery 1.4
        function httpSuccess(xhr) {
            try {
                return !xhr.status && location.protocol === "file:" ||
                       xhr.status >= 200 && xhr.status < 300 ||
                       xhr.status === 304 || xhr.status === 1223;
            } catch (e) {
            }
            return false;
        }

        // ===============================================================================================
        // Utility methods:

        function assertNotNull(object, message) {
            if (object == null) {
                throw new Error(message);
            }
        }

        // ================================================================================================

        // Escape a path part, can be used as a static method outside this function too
        Jolokia.prototype.escape = Jolokia.escape = function (part) {
            return encodeURIComponent(part.replace(/!/g, "!!").replace(/\//g, "!/"));
        };

        /**
         * Utility method which checks whether a response is an error or a success
         * @param resp response to check
         * @return true if response is an error, false otherwise
         */
        Jolokia.prototype.isError = Jolokia.isError = function(resp) {
            return resp.status == null || resp.status != 200;
        };

        // Return back exported function/constructor
        return Jolokia;
    };

    // =====================================================================================================
    // Register either as global or as AMD module

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as a named module
            define(["jquery"], factory);
        } else {
            // Browser globals
            root.Jolokia = factory(root.jQuery);
        }
    }(this, function (jQuery) {
        return _jolokiaConstructorFunc(jQuery);
    }));
}());


/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('springCloudDashboard', [
  'ngResource',
  'ngRoute',
  'ui.router',
  'ui.bootstrap',
  'springCloudDashboard.services',
  'nvd3ChartDirectives'
])
  	.config(function ($stateProvider, $urlRouterProvider) {
  		$urlRouterProvider
  			.when('/', '/app')
  			.otherwise('/');
  		$stateProvider
	  		.state('overview', {
	  			url: '/app',
	  			templateUrl: 'views/overview.html',
	  			controller: 'overviewCtrl'
	  		})
			.state('overview.select', {
				url: '/:id',
				templateUrl: 'views/overview.selected.html',
				controller: 'overviewSelectedCtrl'
			})
  			.state('about', {
  				url: '/about',
  				templateUrl: 'views/about.html'
  			})
  			.state('apps', {
  				abstract:true,
  				url: '/app/:appId/instance/:instanceId',
  				controller: 'appsCtrl',
  				templateUrl: 'views/apps.html',
  				resolve: {
  			      instance: ['$stateParams', 'Instance' , function($stateParams, Instance) {
  			          return Instance.query({id: $stateParams.instanceId}).$promise;
  			      }]
  			   }
  			})
            .state('history', {
                url: '/history',
                templateUrl: 'views/apps/history.html',
                controller: 'appsHistoryCtrl'
            })
			.state('circuit-breaker', {
				url: '/circuit-breaker/:type/:id',
				templateUrl: 'views/circuit-breaker/index.html',
				controller: 'circuitBreakerCtrl'
			})
  			.state('apps.details', {
  				url: '/details',
  				templateUrl: 'views/apps/details.html',
  				controller: 'detailsCtrl'
  			})
  			.state('apps.details.metrics', {
  				url: '/metrics',
  				templateUrl: 'views/apps/details/metrics.html',
  				controller: 'detailsMetricsCtrl'
  			})
  			.state('apps.details.classpath', {
  				url: '/classpath',
  				templateUrl: 'views/apps/details/classpath.html',
  				controller: 'detailsClasspathCtrl'
  			})
			.state('apps.env', {
				url: '/env',
				templateUrl: 'views/apps/environment.html',
				controller: 'environmentCtrl'
			})
  			.state('apps.logging', {
  				url: '/logging',
  				templateUrl: 'views/apps/logging.html',
  				controller: 'loggingCtrl'
  			})
  			.state('apps.jmx', {
  				url: '/jmx',
  				templateUrl: 'views/apps/jmx.html',
  				controller: 'jmxCtrl'
  			})
  			.state('apps.threads', {
  				url: '/threads',
  				templateUrl: 'views/apps/threads.html',
  				controller: 'threadsCtrl'
  			})
			.state('apps.trace', {
				url: '/trace',
				templateUrl: 'views/apps/trace.html',
				controller: 'traceCtrl'
			});
  	})
  	.run(function ($rootScope, $state, $stateParams, $log) {
  		$rootScope.$state = $state;
  		$rootScope.$stateParams = $stateParams;
  	});

/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('springCloudDashboard')
	.filter('timeInterval', function() {
		function padZero(i,n) {
			var s = i + "";
		    while (s.length < n) s = "0" + s;
		    return s;
		}
		
		return function(input) { 
			var s = input || 0;
			var d = padZero(Math.floor(s / 86400000),2);
			var h = padZero(Math.floor(s  % 86400000 / 3600000),2);
			var m = padZero(Math.floor(s  % 3600000 / 60000),2);
			var s = padZero(Math.floor(s  % 60000 / 1000),2);
		    return d + ':' + h + ':' + m + ':' + s;
		} 
	})
	.filter('classNameLoggerOnly', function() { 
		return function(input, active) { 
			if (!active) {
				return input;
			}
			var result = [];
			for (var j in input) {
				var name = input[j].name;
				var i = name.lastIndexOf('.') + 1;
				if ( name.charAt(i) === name.charAt(i).toUpperCase() ) {
					result.push(input[j]);
				}
			}
			return result;
		}
	})
	.filter('capitalize', function() { 
		return function(input, active) { 
			var s = input + "";
			return s.charAt(0).toUpperCase() + s.slice(1);
		}
	})
	.filter('flatten', function($filter) {
		var flatten = function (obj, prefix) {
			if (obj instanceof Date) {
				obj = $filter('date')(obj, 'dd.MM.yyyy HH:mm:ss');
			}
			if (typeof obj === 'boolean' || typeof obj === 'string' || typeof obj === 'number') {
				return (prefix ? prefix + ': ' : '') + obj;
			}

			var result = '';
			var first = true;
			angular.forEach(obj, function (value, key) {
				if (angular.isString(value) && (key === 'time' || key === 'timestamp')) {
					if (/^\d+$/.test(value)) {
						value = new Date(value * 1000);
					} else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{4}$/.test(value)) {
						value = new Date(value);
					}
				}

				if (first) {
					first = false;
				} else {
					result = result + '\n';
				}

				result = result + flatten(value, prefix ? prefix + '.' + key : key);
			});

			return result;
		};
		return flatten;
	})
	.filter('joinArray', function() {
		return function (input, separator) {
			if (!Array.isArray(input) ) {
				return input;
			} else {
				return input.join(separator);
			}
		};
	})
	.filter('humanBytes', function () {
		var units = { B: Math.pow(1024, 0)
			, K: Math.pow(1024, 1)
			, M: Math.pow(1024, 2)
			, G: Math.pow(1024, 3)
			, T: Math.pow(1024, 4)
			, P: Math.pow(1024, 5)
		};

		return function (input, unit) {
			input = input || 0;
			unit = unit || 'B';

			var bytes = input * (units[unit] || 1 );

			var chosen = 'B';
			for (var u in units) {
				if (units[chosen] < units[u] && bytes >= units[u]) {
					chosen = u;
				}
			}

			return (bytes / units[chosen]).toFixed(1).replace(/\.0$/, '').replace(/,/g, '') + chosen;
		};
	})
	.filter('capitalize', function () {
		return function (input) {
			var s = input + '';
			return s.charAt(0).toUpperCase() + s.slice(1);
		};
	});
/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('springCloudDashboard')
       .controller('overviewCtrl', ['$scope', '$location', '$interval', '$q', '$stateParams', '$timeout', '$state', 'Applications', 'ApplicationOverview', 'InstanceOverview',
                                    function ($scope, $location, $interval, $q, $stateParams, $timeout, $state, Applications, ApplicationOverview, InstanceOverview) {

		$scope.findApp = function(name) {
			for ( var j = 0; $scope.applications != null && j < $scope.applications.length; j++ ) {
				if (name === $scope.applications[j].name) {
					return $scope.applications[j];
				}
			}
		};

		$scope.selectApp = function (name) {
			$scope.selectedAppName = name;
			$scope.selectedApp = $scope.findApp(name);
			if(angular.isDefined($scope.selectedApp)) {
				ApplicationOverview.getCircuitBreakerInfo($scope.selectedApp);
				$scope.selectedApp.active = true;
				$scope.selectedApp.instances.forEach(function(instance) { InstanceOverview.getInfo(instance) });
			}
		};

		$scope.updateAppStatus = function(app) {

		   var instanceUp = 0, instanceCount = 0;

		   app.instances.forEach(function(instance) {
			   instanceCount++;
			   if(instance.health == 'UP') {
				  instanceUp++;
			   }
		   });

		   var appState = instanceUp / instanceCount;
		   if(appState > 0.8) {
			  app.badge = 'success';
		   } else if (instanceUp == 0) {
			  app.badge = 'danger';
		   } else {
			  app.badge = 'warning';
		   }

		   app.instanceUp = instanceUp;
		   app.instanceCount = instanceCount;
		};

		$scope.loadData = function() {

			$scope.loading = true;

			return Applications.query(function(applications) {

                applications.forEach(function(app) {

                    app.instances.forEach(function(instance) {

						InstanceOverview.getHealth(instance).finally(function() {
							$scope.updateAppStatus(app);
						});

                    });

                });

	  			$scope.applications = applications;

				//Refresh current selected App
				if ($scope.selectedAppName) {
					$scope.selectApp($scope.selectedAppName);
				} else {
					$timeout(function() {
						if(applications.length > 0) $state.go('overview.select', {id: applications[0].name});
					}, 10);
				}

				$scope.loading = false;

			});
  		};

		$scope.loadData();

		if(dashboardConfig.refreshTimeout > 0) {
			// reload site every XX seconds
			$interval(function () {
				$scope.loadData();
			}, dashboardConfig.refreshTimeout);
		}
  	}])
	.controller('overviewSelectedCtrl', ['$scope', '$location', '$interval', '$q', '$stateParams','Applications', 'InstanceOverview', 'Instance',
	function ($scope, $location, $interval, $q, $stateParams) {
		$scope.id = $stateParams.id;
		$scope.selectApp($stateParams.id);
	}])
    .controller('appsHistoryCtrl',  ['$scope', 'InstancesHistory', function ($scope, InstancesHistory) {
        InstancesHistory.query(function(history) {
            $scope.registered = history.lastRegistered;
            $scope.cancelled = history.lastCancelled;
        });
   	}])
  	.controller('appsCtrl',  ['$scope', 'instance', '$stateParams', function ($scope, instance, $stateParams) {
		$scope.appId = $stateParams.appId;
		$scope.instance = instance;
  	}])
  	.controller('detailsCtrl', ['$scope', '$interval', 'instance', 'InstanceDetails', 'MetricsHelper',
  	                            function ($scope, $interval, instance, InstanceDetails, MetricsHelper) {
  		$scope.instance = instance;
  		InstanceDetails.getInfo(instance).success(function(info) {
			$scope.appInfo = info;
			if(info.app) {
				$scope.appInfo = info.app;
			}
			if(info.git) {
				$scope.gitInfo = info.git;
			}
			if($scope.appInfo.git) {
				delete $scope.appInfo.git;
			}
		}).error( function(error) {
			$scope.error = error;
		});

        InstanceDetails.getHealth(instance).success(function(health) {
			$scope.health = health;
		}).error( function(health) {
			$scope.health = health;
		});

		$scope.isHealthDetail = function (key, value) {
			return key !== 'status' && value !== null && (Array.isArray(value) || typeof value !== 'object');
		};

		$scope.isChildHealth = function (key, health) {
			return health !== null && !Array.isArray(health) && typeof health === 'object';
		};

        InstanceDetails.getMetrics(instance).success(function(metrics) {
			$scope.metrics = metrics;
			$scope.metrics["mem.used"] = $scope.metrics["mem"] - $scope.metrics["mem.free"];

			$scope.metrics["systemload.averagepercent"] = parseFloat($scope.metrics["systemload.average"]) / parseFloat($scope.metrics["processors"]) * 100;

			$scope.gcInfos = {};
			$scope.datasources = {};

			function createOrGet(map, key, factory) {
				return map[key] || (map[key] = factory());
			}

			MetricsHelper.find(metrics,
					[ /gc\.(.+)\.time/, /gc\.(.+)\.count/, /datasource\.(.+)\.active/,  /datasource\.(.+)\.usage/ ],
					[ function(metric, match, value) {
						createOrGet($scope.gcInfos, match[1], function() {return {time: 0, count: 0};}).time = value;
					 },
					function(metric, match, value) {
						createOrGet($scope.gcInfos, match[1], function() {return {time: 0, count: 0};}).count = value;
					 },
					function(metric, match, value) {
						$scope.hasDatasources = true;
						createOrGet($scope.datasources, match[1], function() {return {min: 0, max:0, active: 0, usage: 0};}).active = value;
					 },
					function(metric, match, value) {
						$scope.hasDatasources = true;
						createOrGet($scope.datasources, match[1], function() {return {min: 0, max:0, active: 0, usage: 0};}).usage = value;
			 }]);
		}).error( function(error) {
			$scope.error = error;
		});

		InstanceDetails.getCircuitBreakerInfo(instance).success(function(){
			instance.circuitBreaker = true;
		}).error(function() {
			instance.circuitBreaker = false;
		});

  		var start = Date.now();
  		var tick = $interval(function() {
  			$scope.ticks = Date.now() - start;
  		},1000);
  	}])
  	.controller('detailsMetricsCtrl',  ['$scope', 'instance', 'InstanceDetails', 'Abbreviator', 'MetricsHelper',
  	                                    function ($scope, instance, InstanceDetails, Abbreviator, MetricsHelper) {

		$scope.counters = [];
		$scope.countersMax = 0;
		$scope.gauges = [];
		$scope.gaugesMax = 0;
		$scope.showRichGauges = false;

        InstanceDetails.getMetrics(instance).success(function(metrics) {

			function merge(array, obj) {
				for (var i = 0; i < array.length; i++) {
					if (array[i].name === obj.name) {
						for (var a in obj) {
							array[i][a] = obj[a];
						}
						return;
					}
				}
				array.push(obj);
			}

			MetricsHelper.find(metrics, [/counter\..+/, /(gauge\..+)\.val/,
				/(gauge\..+)\.avg/, /(gauge\..+)\.min/, /(gauge\..+)\.max/,
				/(gauge\..+)\.count/, /(gauge\..+)\.alpha/, /(gauge\..+)/
			], [function (metric, match, value) {
				$scope.counters.push({ name: metric, value: value });
				if (value > $scope.countersMax) {
					$scope.countersMax = value;
				}
			},
				function (metric, match, value) {
					merge($scope.gauges, { name: match[1], value: value });
					$scope.showRichGauges = true;
					if (value > $scope.gaugesMax) {
						$scope.gaugesMax = value;
					}
				},
				function (metric, match, value) {
					merge($scope.gauges, { name: match[1], avg: value.toFixed(2) });
				},
				function (metric, match, value) {
					merge($scope.gauges, { name: match[1], min: value });
				},
				function (metric, match, value) {
					merge($scope.gauges, { name: match[1], max: value });
					if (value > $scope.gaugesMax) {
						$scope.gaugesMax = value;
					}
				},
				function (metric, match, value) {
					merge($scope.gauges, { name: match[1], count: value });
				},
				function () { /*NOP*/ },
				function (metric, match, value) {
					merge($scope.gauges, { name: match[1], value: value });
					if (value > $scope.gaugesMax) {
						$scope.gaugesMax = value;
					}
				}
			]);

		}).error( function(error) {
			$scope.error = error;
		});

   		var colorArray = ['#6db33f', '#a5b2b9', '#34302d'  , '#fec600' ,'#4e681e' ];
  		$scope.colorFunction = function() {
  			return function(d, i) {
  		    	return colorArray[i % colorArray.length];
  		    };
  		};

		$scope.abbreviateFunction = function(targetLength, preserveLast, shortenThreshold){
  		    return function(s) {
  		        return Abbreviator.abbreviate(s, '.', targetLength, preserveLast, shortenThreshold)
  		    };
  		};

		$scope.intFormatFunction = function(){
  		    return function(d) {
  		        return d3.format('d')(d);
  		    };
  		};

  		$scope.toolTipContentFunction = function(){
  			return function(key, x, y, e, graph) {
  		    	return '<b>' + key + '</b> ' +e.point[0] + ': ' + e.point[1] ;
  			}
  		};

  	}])
  	.controller('detailsEnvCtrl',  ['$scope', 'instance', 'InstanceDetails',
  	                                function ($scope, instance, InstanceDetails) {
  		$scope.instance = instance;
  		InstanceDetails.getEnv(instance).success(function(env) {
			$scope.env = env;
		}).error( function(error) {
			$scope.error = error;
  		});
  	}])
  	.controller('detailsPropsCtrl', ['$scope', 'instance', 'InstanceDetails',
  			function ($scope, instance, InstanceDetails) {
  		$scope.instance = instance;
  		InstanceDetails.getEnv(instance).success(function(env) {
			$scope.props = [];
			for (var attr in env) {
				if (attr.indexOf('[') != -1 && attr.indexOf('.properties]') != -1) {
					$scope.props.push({ key : attr, value: env[attr] });
				}
			}
		}).error( function(error) {
			$scope.error = error;
		});
  	}])
	.controller('environmentCtrl',  ['$scope', 'instance', 'InstanceDetails',
			function ($scope, instance, InstanceDetails) {
		$scope.instance = instance;
		$scope.overrides = { values: [{key: '', value: '' }], error: null};

		var toArray = function(map) {
			var array = [];
			for (var key in map) {
				var value = map[key];
				if (value instanceof Object) {
					value = toArray(value);
				}
				var entry = {key: key, value: value};
				array.push(entry);
			}
			return array.length > 0 ? array : undefined;
		};

		var collectKeys = function(envArray) {
			var allKeys = {};
			for (var i = 0; i < envArray.length; i++) {
				for (var j = 0; envArray[i].value && j < envArray[i].value.length; j++) {
					allKeys[envArray[i].value[j].key] = true;
				}
			}
			return Object.getOwnPropertyNames(allKeys);
		};

		$scope.reload = function() {
			$scope.env = {};
			$scope.envArray = [];
			$scope.allKeys = [];

			InstanceDetails.getEnv(instance)
					.success(function (env) {
						$scope.env = env;
						$scope.envArray = toArray(env);
						$scope.allKeys = collectKeys($scope.envArray);
					})
					.error(function (error) {
						$scope.error = error;
					});
		};

		$scope.reload();

		var getValue = function(item) {
			if (item.key && $scope.allKeys.indexOf(item.key) >= 0) {
				InstanceDetails.getEnv(instance, item.key).success(function(value) {
					item.value = value;
				});
			}
		};

		$scope.onChangeOverrideItem = function(item) {
			getValue(item);

			if ($scope.overrides.values[$scope.overrides.values.length - 1].key) {
				$scope.overrides.values.push({key: '', value: '' });
			}
		};

		$scope.override = function() {
			var map = {};
			for (var i = 0; i < $scope.overrides.values.length; i++) {
				if ($scope.overrides.values[i].key) {
					map[$scope.overrides.values[i].key] = $scope.overrides.values[i].value;
				}
			}

			$scope.overrides.error = null;
			InstanceDetails.setEnv(instance, map).success(function () {
				$scope.overrides = { values: [{key: '', value: '' }], error: null, changes: null};
				$scope.reload();
			})
					.error(function (error) {
						$scope.overrides.error = error;
						$scope.overrides.changes = null;
						$scope.reload();
					});
		};

		$scope.reset = function() {
			$scope.overrides.error = null;
			$scope.overrides.changes = null;
			InstanceDetails.resetEnv(instance).success(function () {
				$scope.reload();
			})
					.error(function (error) {
						$scope.overrides.error = error;
						$scope.reload();
					});

		};

		$scope.refresh = function() {
			$scope.overrides.error = null;
			$scope.overrides.changes = null;
			InstanceDetails.refresh(instance).success(function (changes) {
				$scope.overrides.changes = changes;
				$scope.reload();
			})
			.error(function (error) {
				$scope.overrides.error = error;
				$scope.reload();
			});

		};
	}])
	.controller('detailsClasspathCtrl',  ['$scope', 'instance', 'InstanceDetails',
							function ($scope, instance, InstanceDetails) {
			$scope.instance = instance;
			InstanceDetails.getEnv(instance).success(function(env) {
				var separator =  env['systemProperties']['path.separator'];
				$scope.classpath = env['systemProperties']['java.class.path'].split(separator);
			}).error( function(error) {
				$scope.error = error;
			});
	}])
	.controller('loggingCtrl',  ['$scope', 'instance', 'InstanceLogging',
  	                             function ($scope, instance, InstanceLogging) {
  		$scope.loggers = [];
  		$scope.filteredLoggers = [];
  		$scope.limit = 10;

  		function findLogger(loggers, name) {
  			for(var i in loggers) {
  				if (loggers[i].name === name){
  					return loggers[i];
  				}
  			}
  		}

		$scope.setLogLevel = function(name, level) {
			InstanceLogging.setLoglevel(instance, name, level).then(function(){
				$scope.reload(name);
			}).catch(function(response){
				$scope.error = response.error;
				$scope.reload(name);
			})
  		};

  		$scope.reload = function(prefix) {
  			for (var i in $scope.loggers) {
  				if (prefix == null || prefix === 'ROOT' || $scope.loggers[i].name.indexOf(prefix) == 0 ){
  					$scope.loggers[i].level = null;
  				}
  			}
  			$scope.refreshLevels();
  		};

  		$scope.refreshLevels = function() {
  			var toLoad = [];
  			var slice = $scope.filteredLoggers.slice(0, $scope.limit);
  			for (var i in slice ) {
  				if (slice[i].level === null) {
  					toLoad.push(slice[i]);
  				}
  			}

  			if (toLoad.length == 0) return;

  			InstanceLogging.getLoglevel(instance, toLoad).then(
  					function(responses) {
  						for (var i in responses) {
  							var name = responses[i].request.arguments[0];
  							var level = responses[i].value;
  							findLogger($scope.loggers, name).level = level;
  						}
  					}).catch(function(responses){
  						for (var i in responses) {
  							if (responses[i].error != null) {
  								$scope.error = responses[i].error;
  								console.log(responses[i].stacktrace);
  								break;
  							}
  						}
  					});
  		};

		InstanceLogging.getAllLoggers(instance).then( function (response) {
			$scope.loggers  = [];
			for (var i in response.value) {
				$scope.loggers .push({name: response.value[i], level: null});
			}

	  		$scope.$watchCollection('filteredLoggers', function() {
	  			$scope.refreshLevels();
	  		});

	  		$scope.$watch('limit', function() {
	  			$scope.refreshLevels();
	  		});
		}).catch(function(response) {
			$scope.error = response.error;
			console.log(response.stacktrace);
		})
  	}])
  	.controller('jmxCtrl',  ['$scope', '$modal', 'instance', 'InstanceJMX',
  	                         function ($scope, $modal, instance, InstanceJMX) {
		$scope.error = null;
		$scope.domains = [];

		InstanceJMX.list(instance).then(function(domains){
			$scope.domains = domains;
		}).catch(function(response) {
			$scope.error = response.error;
			console.log(response.stacktrace);
		});

  		$scope.readAllAttr = function(bean) {
  			bean.error = null;
  			InstanceJMX.readAllAttr(instance, bean).then(
  					function(response) {
		  				for (var name in response.value) {
		  					bean.attributes[name].error = null;
		  					bean.attributes[name].value = response.value[name];
		  					bean.attributes[name].jsonValue = JSON.stringify(response.value[name], null, "   ");
		  				}
		  			}).catch(function(response) {
		  				bean.error = response.error;
		  				console.log(response.stacktrace);
		  			});
  		};

  		$scope.writeAttr = function(bean, name, attr) {
  			attr.error = null;
  			InstanceJMX.writeAttr(instance, bean, name, attr.value).catch(
  					function(response) {
  						attr.error = response.error;
  						console.log(response.stacktrace);
  					});
  		};

  		$scope.invoke = function() {
  			$scope.invocation.state = 'executing';

  			InstanceJMX.invoke(instance, $scope.invocation.bean, $scope.invocation.opname, $scope.invocation.args).then(
  					function(response) {
  						$scope.invocation.state = 'success';
  						$scope.invocation.result = response.value;
  					}).catch(function(response){
  						$scope.invocation.state = 'error';
  						$scope.invocation.error = response.error;
  						$scope.invocation.stacktrace = response.stacktrace;
  					});

  			$modal.open({
  				templateUrl: 'invocationResultDialog.html',
  				scope: $scope
  				}).result.then(function() {
  					$scope.invocation = null;
				});
  		};

  		$scope.prepareInvoke = function(bean, name, op) {
  			$scope.invocation = { bean: bean, opname: name, opdesc: op, args: [], state: 'prepare' };

  			if (op instanceof Array) {
  				$modal.open({
				      templateUrl: 'invocationVariantDialog.html',
				      scope: $scope
				    }).result.then(function(chosenOp) {
						$scope.prepareInvoke(bean, name, chosenOp);
					}).catch(function() {
			  			$scope.invocation = null;
					});
  			} else {
  				if (op.args.length === 0) {
  					$scope.invoke();
  				} else {
  					var signature = "(";
  					for (var i in op.args) {
  						if (i > 0) signature += ',';
  						signature += op.args[i].type;
  						$scope.invocation.args[i] = null;
  					}
  					signature += ")";
  					$scope.invocation.opname = name + signature;

  					$modal.open({
  				      templateUrl: 'invocationPrepareDialog.html',
  				      scope: $scope
  				    }).result.then(function() {
  						$scope.invoke();
  					}).catch(function() {
  			  			$scope.invocation = null;
  					});
  				}
  			}
  		}
  	}])
  	.controller('threadsCtrl',  ['$scope', 'instance', 'InstanceThreads', function ($scope, instance, InstanceThreads) {
  		$scope.dumpThreads = function() {
  			InstanceThreads.getDump(instance).success(function(dump) {
	  			$scope.dump = dump;

	  			var threadStats = { NEW: 0, RUNNABLE: 0, BLOCKED: 0, WAITING: 0, TIMED_WAITING: 0, TERMINATED: 0};
	  			for (var i = 0; i < dump.length; i++) {
	  				threadStats[dump[i].threadState]++;
	  			}
	  			threadStats.total = dump.length;
	  			$scope.threadStats = threadStats;

	  		}).error( function(error) {
	  			$scope.error = error;
	  		});
  		}
  	}])
	.controller('traceCtrl',  ['$scope', '$interval', 'instance', 'InstanceDetails', function ($scope, $interval, instance, InstanceDetails) {

		$scope.lastTraceTime = 0;
		$scope.traces = [];
		$scope.refresher = null;
		$scope.refreshInterval = 5;

		$scope.refresh = function () {
			InstanceDetails.getTraces(instance)
					.success(function (traces) {
						for (var i = 0; i < traces.length; i++) {
							if (traces[i].timestamp > $scope.lastTraceTime) {
								$scope.traces.push(traces[i]);
							}
						}
						if (traces.length > 0) {
							$scope.lastTraceTime = traces[traces.length - 1].timestamp;
						}

					})
					.error(function (error) {
						$scope.error = error;
					});
		};

		$scope.toggleAutoRefresh = function() {
			if ($scope.refresher === null) {
				$scope.refresher = $interval(function () {
					$scope.refresh();
				}, $scope.refreshInterval * 1000);
			} else {
				$interval.cancel($scope.refresher);
				$scope.refresher = null;
			}
		};

		$scope.refresh();
	}]);

/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('springCloudDashboard')
    .controller('circuitBreakerCtrl',  ['$scope', '$stateParams', 'Instance',
        function ($scope, $stateParams, Instance) {

        if($stateParams.type == 'app') {
            var stream = "/circuitBreaker.stream?appName="+$stateParams.id;
            $scope.subtitle = $stateParams.id;
        } else if($stateParams.type == 'instance') {
            var stream = "/circuitBreaker.stream?instanceId="+$stateParams.id;
            var instance = Instance.query({id: $stateParams.id}, function(instance){
                $scope.subtitle = instance.name;
            });
        }

        // commands
        $scope.hystrixMonitor = new HystrixCommandMonitor('dependencies', {includeDetailIcon:false});

        // sort by error+volume by default
        $scope.hystrixMonitor.sortByErrorThenVolume();

        // start the EventSource which will open a streaming connection to the server
        $scope.source = new EventSource(stream);

        // add the listener that will process incoming events
        $scope.source.addEventListener('message', $scope.hystrixMonitor.eventSourceMessageListener, false);

        $scope.source.addEventListener('error', function(e) {
            if (e.eventPhase == EventSource.CLOSED) {
                // Connection was closed.
                console.log("Connection was closed on error: " + JSON.stringify(e));
            } else {
                console.log("Error occurred while streaming: " + JSON.stringify(e));
            }
        }, false);

        // thread pool
        $scope.dependencyThreadPoolMonitor = new HystrixThreadPoolMonitor('dependencyThreadPools');

        $scope.dependencyThreadPoolMonitor.sortByVolume();

        // start the EventSource which will open a streaming connection to the server
        $scope.threadSource = new EventSource(stream);

        // add the listener that will process incoming events
        $scope.threadSource.addEventListener('message', $scope.dependencyThreadPoolMonitor.eventSourceMessageListener, false);

        $scope.threadSource.addEventListener('error', function(e) {
            if (e.eventPhase == EventSource.CLOSED) {
                // Connection was closed.
                console.log("Connection was closed on error: " + e);
            } else {
                console.log("Error occurred while streaming: " + e);
            }
        }, false);

        $scope.$on('$destroy', function clearEventSource() {
            if($scope.source) { $scope.source.close(); delete $scope.source; }
            if($scope.threadSource) { $scope.threadSource.close(); delete $scope.threadSource; }
        })
    }]);
/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by instancelicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('springCloudDashboard.services', ['ngResource'])
  	.factory('Applications', ['$resource', function($resource) {
  		return $resource(
  			'api/applications', {}, {
  				query: { method:'GET', isArray:true }
  			});
  		}
  	])
	.service('ApplicationOverview', ['$http', function($http) {
		this.getCircuitBreakerInfo = function(application) {
			return $http.head('/circuitBreaker.stream', {
				params: {appName: application.name}
			}).success(function(response) {
				application.circuitBreaker = true;
			}).error(function() {
				application.circuitBreaker = false;
			});
		};
	}])
  	.factory('Instance', ['$resource', 'InstanceDetails', function($resource, InstanceDetails) {
  		return $resource(
  			'api/instance/:id', {}, {
  				query: {
					method:'GET',
					transformResponse: function(data) {
						var instance = angular.fromJson(data);
						InstanceDetails.getCapabilities(instance);
						return instance;
					}
				}
  			});
  		}
  	])
    .factory('InstancesHistory', ['$resource', function($resource) {
   		return $resource(
   			'api/registry/history', {}, {
   				query: { method:'GET'}
   			});
   		}
   	])
  	.service('InstanceOverview', ['$http', function($http) {
  		this.getInfo = function(instance) {
  			return $http.get('api/instance/'+ instance.id + '/info/').success(function(response) {
				var appInfo = response.app || response;
				instance.version = appInfo.version;
  				instance.info = appInfo;
  			}).error(function() {
  				instance.version = '---';
  			});
  		};
  		this.getHealth = function(instance) {
  			return $http.get('api/instance/'+ instance.id + '/health/').success(function (response) {
  				instance.health = response.status;
  			}).error(function (response, httpStatus) {
  				if (httpStatus === 503) {
  					instance.health = response.status;
  				} else if (httpStatus === 404) {
  					instance.health = 'OFFLINE';
  				} else {
  					instance.health = 'UNKNOWN';
  				}
  			});
  		};
  	}])
  	.service('InstanceDetails', ['$http', function($http) {

		var _this = this;
		this.isEndpointPresent = function(endpoint, configprops) {
			return !!configprops[endpoint];
		};

		this.getCapabilities = function(instance) {
			instance.capabilities = {};

			$http.get('api/instance/' + instance.id + '/configprops').success(function(configprops) {
				instance.capabilities.logfile = _this .isEndpointPresent('logfileEndpoint', configprops);
				instance.capabilities.restart = _this .isEndpointPresent('restartEndpoint', configprops);
				instance.capabilities.refresh = _this .isEndpointPresent('refreshEndpoint', configprops);
				instance.capabilities.pause = _this .isEndpointPresent('pauseEndpoint', configprops);
				instance.capabilities.resume = _this .isEndpointPresent('resumeEndpoint', configprops);
			});
		};

  		this.getInfo = function(instance) {
  			return $http.get('api/instance/'+ instance.id + '/info/');
  		};
  		this.getMetrics = function(instance) {
  			return $http.get('api/instance/'+ instance.id + '/metrics/');
  		};
		this.getEnv = function (instance, key) {
			if(key) {
				return $http.get('api/instance/' + instance.id + '/env' + (key ? '/' + key : '' ));
			} else {
				return $http.get('api/instance/'+ instance.id + '/env/');
			}
		};
		this.setEnv = function (instance, map) {
			return $http.post('api/instance/' + instance.id + '/env', '', {params: map});
		};
		this.resetEnv = function (instance) {
			return $http.post('api/instance/' + instance.id + '/env/reset');
		};
		this.refresh = function (instance) {
			return $http.post('api/instance/' + instance.id + '/refresh');
		};
  		this.getHealth = function(instance) {
  			return $http.get('api/instance/'+ instance.id + '/health/');
  		};
		this.getTraces = function (instance) {
			return $http.get('api/instance/' + instance.id + '/trace');
		};
		this.getCircuitBreakerInfo = function(instance) {
			return $http.head('/circuitBreaker.stream', {
				params: {instanceId: instance.id}
			});
		};
  	}])
  	.service('InstanceLogging', ['$http' , 'Jolokia', function($http, jolokia) {
  		var LOGBACK_MBEAN = 'ch.qos.logback.classic:Name=default,Type=ch.qos.logback.classic.jmx.JMXConfigurator';
  		
  		this.getLoglevel = function(instance, loggers) {
  			var requests = [];
  			for (var j in loggers) {
  				requests.push({ type: 'exec', mbean: LOGBACK_MBEAN, operation: 'getLoggerEffectiveLevel', arguments: [ loggers[j].name ] })
  			}
  			return jolokia.bulkRequest('api/instance/'+ instance.id + '/jolokia/', requests);
  		};
  		
  		this.setLoglevel = function(instance, logger, level) {
  			return jolokia.exec('api/instance/'+ instance.id + '/jolokia/', LOGBACK_MBEAN, 'setLoggerLevel' , [ logger, level] );
  		};
  		
  		this.getAllLoggers = function(instance) {
  			return jolokia.readAttr('api/instance/'+ instance.id + '/jolokia/', LOGBACK_MBEAN, 'LoggerList'); 
  		}
  	}])
  	.service('InstanceJMX', ['$rootScope', 'Abbreviator', 'Jolokia', function($rootScope, Abbreviator, jolokia) {
  		this.list = function(instance) {
  			return jolokia.list('api/instance/'+ instance.id + '/jolokia/').then(function(response) {
  					var domains = [];
  					for (var rDomainName in response.value) {
  						var rDomain = response.value[rDomainName];
  						var domain = {name : rDomainName, beans: [] };
  						
  						for (var rBeanName in rDomain ) {
  							var rBean = rDomain[rBeanName];
  							var bean = { id : domain.name + ':' + rBeanName,
  									     name : '', 
  									     nameProps: {},
  										 description : rBean.desc,
  										 operations : rBean.op,
  										 attributes : rBean.attr
  										 };
  						
  							var name = '';
  							var type = '';
  							var parts = rBeanName.split(',');
  							for (var i in parts ) {
  								var tokens = parts[i].split('=');
								if (tokens[0].toLowerCase() === 'name') {
									name = tokens[1];
								} else{
									bean.nameProps[tokens[0]] = tokens[1];
									if ((tokens[0].toLowerCase() === 'type' || tokens[0].toLowerCase() == 'j2eetype') && type.length ==0 ) {
										type = tokens[1];
									}
								}
  							}
  							
  							if (name.length !== 0) {
  								bean.name = name;
  							} 
  							if ( type.length !== 0) {
  								if (bean.name  !== 0) {
  									bean.name += ' ';
  								}
  								bean.name += '[' + Abbreviator.abbreviate(type, '.', 25, 1, 1) + ']';
  							} 
  							
  							if (bean.name.length === 0) {
  								bean.name = rBeanName;
  							}
  						
	  						domain.beans.push(bean);
  						}
  						
  						domains.push(domain);
  					}
  					
  					return domains;
  				}, function(response) {
  					return response;
  				});
  		};
  		
  		this.readAllAttr = function(instance, bean) { 			
  			return jolokia.read('api/instance/'+ instance.id + '/jolokia/', bean.id)
  		};
  		
  		this.writeAttr = function(instance, bean, attr, val) {
  			return jolokia.writeAttr('api/instance/'+ instance.id + '/jolokia/', bean.id, attr, val);
  		};
  		
  		this.invoke = function(instance, bean, opname, args) {
  			return jolokia.exec('api/instance/'+ instance.id + '/jolokia/', bean.id, opname, args);
		}
  		
  	}])
  	.service('Abbreviator', [function() {
  		  function _computeDotIndexes(fqName, delimiter, preserveLast) {
		    var dotArray = [];
		    
		    //iterate over String and find dots
		    var lastIndex = -1;
		    do {
		      lastIndex = fqName.indexOf(delimiter, lastIndex + 1);
		      if (lastIndex !== -1) {
		        dotArray.push(lastIndex);
		      }
		    } while (lastIndex !== -1)

		    // remove dots to preserve more than the last element
		    for (var i = 0; i < preserveLast -1; i++ ) {
		    	dotArray.pop();
		    }
		    	
		    return dotArray;
		  }

		  function _computeLengthArray(fqName, targetLength, dotArray, shortenThreshold) {
			var lengthArray = [];
		    var toTrim = fqName.length - targetLength;

		    for (var i = 0; i < dotArray.length; i++) {
		      var previousDotPosition = -1;
		      if (i > 0) {
		        previousDotPosition = dotArray[i - 1];
		      }

		      var len = dotArray[i] - previousDotPosition - 1;
		      var newLen = (toTrim > 0 && len > shortenThreshold ? 1 : len);
		      
		      toTrim -= (len - newLen);
		      lengthArray[i] = newLen + 1;
		    }

		    var lastDotIndex = dotArray.length - 1;
		    lengthArray[dotArray.length] = fqName.length - dotArray[lastDotIndex];
		    
		    return lengthArray;
		  }
  		
  		this.abbreviate = function(fqName, delimiter, targetLength, preserveLast, shortenThreshold) {
  		    if (fqName.length < targetLength) {
  		      return fqName;
  		    }

  		    var dotIndexesArray = _computeDotIndexes(fqName, delimiter, preserveLast);

  		    if (dotIndexesArray.length === 0) {
  		      return fqName;
  		    }

  		    var lengthArray = _computeLengthArray(fqName, targetLength, dotIndexesArray, shortenThreshold);

  		    var result = "";
  		    for (var i = 0; i <= dotIndexesArray.length; i++) {
  		    	if (i === 0 ) {
  		    		result += fqName.substr(0, lengthArray[i] -1);
  		    	} else {
  		    		result += fqName.substr(dotIndexesArray[i - 1], lengthArray[i]);
  		    	}
  		    }
  		    
  		    return result;
  		}
  	}])
  	.service('Jolokia', [ '$q' , '$rootScope', function($q){
  		var outer = this;
  		var j4p = new Jolokia();
  		
  		
  		this.bulkRequest = function(url, requests) {
  			var deferred = $q.defer();
  			deferred.notify(requests);

  			var hasError = false;
  			var responses = [];
  			
  			j4p.request( requests,
  					 {	url: url,
  						method: 'post',
  						success: function (response) {
  							responses.push(response);
  							if (responses.length >= requests.length) {
  								if (!hasError) {
  									deferred.resolve(responses);
  								} else {
  									deferred.resolve(responses);
  								}
  							}
  						},
  						error: function (response) {
  							hasError = true;
  							responses.push(response);
  							if (responses.length >= requests.length) {
  								deferred.reject(responses);
  							}
  						}
  					 });
  			
  			return deferred.promise;
  		};
  		
  		
  		this.request = function(url, request) {
  			var deferred = $q.defer();
  			deferred.notify(request);

  			j4p.request( request,
  					 {	url: url,
  						method: 'post',
  						success: function (response) {
  							deferred.resolve(response);
  						},
  						error: function (response) {
  							deferred.reject(response);
  						}
  					 });
  			
  			return deferred.promise;
  		};
  		
  		this.exec = function(url, mbean, op, args) {
  			return outer.request(url, { type: 'exec', mbean: mbean, operation: op, arguments: args });
  		};
  		
  		this.read = function(url, mbean) {
  			return outer.request(url, { type: 'read', mbean: mbean });
  		};
  		
  		this.readAttr = function(url, mbean, attr) {
  			return outer.request(url, { type: 'read', mbean: mbean, attribute: attr });
  		};
  		
  		this.writeAttr = function(url, mbean, attr, val) {
  			return outer.request(url, { type: 'write', mbean: mbean, attribute: attr, value: val });
  		};
  		
  		this.list = function(url) {
  			return outer.request(url, { type: 'list' });
  		}
  	}])
  	.service('MetricsHelper', [function() {
  		this.find = function (metrics, regexes, callbacks) {
  			for (var metric in metrics) {
  				for (var i in regexes) {
  						var match = regexes[i].exec(metric);
						if (match != null) {
							callbacks[i](metric, match, metrics[metric]);
							break;
						}
					}
				}
			}
  	}])
  	.service('InstanceThreads', ['$http', function($http) {
  		this.getDump = function(instance) {
  			return $http.get('api/instance/'+ instance.id + '/dump/');
  		}
  	}	]);

/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('springCloudDashboard')
    .directive('richMetricBar', function() {
        return {
            restrict: 'E',
            scope: {
                metric: '=forMetric',
                globalMax: '=?globalMax'
            },
            link: function(scope) {
                scope.globalMax = scope.globalMax || scope.metric.max;
                scope.minWidth = (scope.metric.min / scope.globalMax * 100).toFixed(2);
                scope.avgWidth = (scope.metric.avg / scope.globalMax * 100).toFixed(2);
                scope.valueWidth = (scope.metric.value / scope.globalMax * 100).toFixed(2);
                scope.maxWidth = (scope.metric.max / scope.globalMax * 100).toFixed(2);
            },
            template: '<div>\
                {{metric.name}} (count: {{metric.count}})   \
                    <div ng-if="metric.count > 1" class="progress with-marks">\
                        <div class="mark-current" style="left: {{valueWidth}}%"></div>\
                        <div class="progress-bar-offset" style="width:{{minWidth}}%"></div>\
                        <div class="progress-bar progress-bar-success" style="width: {{avgWidth - minWidth}}%;"></div>\
                        <div class="progress-bar progress-bar-success" style="width: {{maxWidth - avgWidth}}%"></div>\
                        <div tooltip="value {{metric.value}}" class="value-mark" style="left: {{valueWidth}}%;">{{metric.value}}</div>\
                    </div>\
                    <div ng-if="metric.count > 1" class="progress-bar-scale">\
                        <div tooltip="min {{metric.min}}" class="pitch-line" style="left: {{minWidth}}%;"><small class="muted">{{metric.min}}</small></div>\
                        <div tooltip="max {{metric.max}}" class="pitch-line" style="left: {{maxWidth}}%;"><small class="muted">{{metric.max}}</small></div>\
                        <div tooltip="average {{metric.avg}}" class="pitch-line" style="left: {{avgWidth}}%;">{{metric.avg}}</div>\
                    </div>\
                    <div ng-if="metric.count <= 1" class="progress" style="margin-bottom: 0px;">\
                        <div class="progress-bar progress-bar-success" style="width: {{valueWidth}}%; text-align:right; padding-right: 5px;">{{metric.value}}</div>\
                    </div>\
                </div>'
        }
});
/*
 * Copyright 2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('springCloudDashboard')
    .directive('simpleMetricBar', function() {
        return {
            restrict: 'E',
            scope: {
                metric: '=forMetric',
                globalMax: '=globalMax'
            },
            link: function(scope) {
                scope.valueWidth = (scope.metric.value / scope.globalMax * 100).toFixed(2);
            },
            template: '<div>\
                {{metric.name}}\
                    <div class="progress" style="margin-bottom: 0px;">\
                        <div class="progress-bar progress-bar-success" style="width: {{valueWidth}}%; text-align:right; padding-right: 5px;">{{metric.value}}</div>\
                    </div>\
                </div>'
        };
});

