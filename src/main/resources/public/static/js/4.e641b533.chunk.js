(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{72:function(e,t,n){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=Function.bind.apply(e,o),i=new a;return r&&t(i,r.prototype),i}).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,s=Object.freeze,m=Object.seal,f=Object.create,p="undefined"!==typeof Reflect&&Reflect,d=p.apply,h=p.construct;d||(d=function(e,t,n){return e.apply(t,n)}),s||(s=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var g,y=k(Array.prototype.forEach),b=k(Array.prototype.pop),v=k(Array.prototype.push),T=k(String.prototype.toLowerCase),N=k(String.prototype.match),A=k(String.prototype.replace),E=k(String.prototype.indexOf),w=k(String.prototype.trim),x=k(RegExp.prototype.test),S=(g=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(g,t)});function k(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function _(e,t,n){n=n||T,i&&i(e,null);for(var r=t.length;r--;){var o=t[r];if("string"===typeof o){var a=n(o);a!==o&&(l(t)||(t[r]=a),o=a)}e[o]=!0}return e}function O(e){var t,n=f(null);for(t in e)d(a,e,[t])&&(n[t]=e[t]);return n}function D(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return k(n.get);if("function"===typeof n.value)return k(n.value)}e=c(e)}return function(e){return console.warn("fallback value for",e),null}}var R=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),C=s(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),I=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),F=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=s(["#text"]),U=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),z=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),G=m(/<%[\w\W]*|[\w\W]*%>/gm),W=m(/^data-[\-\w.\u00B7-\uFFFF]/),q=m(/^aria-[\-\w]+$/),Y=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),K=m(/^(?:\w+script|data):/i),V=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$=m(/^html$/i),J=function(){return"undefined"===typeof window?null:window},X=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null;n.currentScript&&n.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=n.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J(),o=function(e){return t(e)};if(o.version="2.4.0",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,u=n.Node,m=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,k=n.trustedTypes,Z=m.prototype,Q=D(Z,"cloneNode"),ee=D(Z,"nextSibling"),te=D(Z,"childNodes"),ne=D(Z,"parentNode");if("function"===typeof c){var re=i.createElement("template");re.content&&re.content.ownerDocument&&(i=re.content.ownerDocument)}var oe=X(k,a),ae=oe?oe.createHTML(""):"",ie=i,le=ie.implementation,ce=ie.createNodeIterator,ue=ie.createDocumentFragment,se=ie.getElementsByTagName,me=a.importNode,fe={};try{fe=O(i).documentMode?i.documentMode:{}}catch(Et){}var pe={};o.isSupported="function"===typeof ne&&le&&"undefined"!==typeof le.createHTMLDocument&&9!==fe;var de,he,ge=P,ye=G,be=W,ve=q,Te=K,Ne=V,Ae=Y,Ee=null,we=_({},[].concat(r(R),r(L),r(M),r(I),r(H))),xe=null,Se=_({},[].concat(r(U),r(z),r(B),r(j))),ke=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),_e=null,Oe=null,De=!0,Re=!0,Le=!1,Me=!1,Ce=!1,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,Be=!0,je=!1,Pe=!0,Ge=!1,We={},qe=null,Ye=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ke=null,Ve=_({},["audio","video","img","source","image","track"]),$e=null,Je=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Xe="http://www.w3.org/1998/Math/MathML",Ze="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml",et=Qe,tt=!1,nt=["application/xhtml+xml","text/html"],rt=null,ot=i.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},it=function(t){rt&&rt===t||(t&&"object"===e(t)||(t={}),t=O(t),de=de=-1===nt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===de?function(e){return e}:T,Ee="ALLOWED_TAGS"in t?_({},t.ALLOWED_TAGS,he):we,xe="ALLOWED_ATTR"in t?_({},t.ALLOWED_ATTR,he):Se,$e="ADD_URI_SAFE_ATTR"in t?_(O(Je),t.ADD_URI_SAFE_ATTR,he):Je,Ke="ADD_DATA_URI_TAGS"in t?_(O(Ve),t.ADD_DATA_URI_TAGS,he):Ve,qe="FORBID_CONTENTS"in t?_({},t.FORBID_CONTENTS,he):Ye,_e="FORBID_TAGS"in t?_({},t.FORBID_TAGS,he):{},Oe="FORBID_ATTR"in t?_({},t.FORBID_ATTR,he):{},We="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,Le=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Me=t.SAFE_FOR_TEMPLATES||!1,Ce=t.WHOLE_DOCUMENT||!1,He=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,Fe=t.FORCE_BODY||!1,Be=!1!==t.SANITIZE_DOM,je=t.SANITIZE_NAMED_PROPS||!1,Pe=!1!==t.KEEP_CONTENT,Ge=t.IN_PLACE||!1,Ae=t.ALLOWED_URI_REGEXP||Ae,et=t.NAMESPACE||Qe,t.CUSTOM_ELEMENT_HANDLING&&at(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&at(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Me&&(Re=!1),Ue&&(He=!0),We&&(Ee=_({},r(H)),xe=[],!0===We.html&&(_(Ee,R),_(xe,U)),!0===We.svg&&(_(Ee,L),_(xe,z),_(xe,j)),!0===We.svgFilters&&(_(Ee,M),_(xe,z),_(xe,j)),!0===We.mathMl&&(_(Ee,I),_(xe,B),_(xe,j))),t.ADD_TAGS&&(Ee===we&&(Ee=O(Ee)),_(Ee,t.ADD_TAGS,he)),t.ADD_ATTR&&(xe===Se&&(xe=O(xe)),_(xe,t.ADD_ATTR,he)),t.ADD_URI_SAFE_ATTR&&_($e,t.ADD_URI_SAFE_ATTR,he),t.FORBID_CONTENTS&&(qe===Ye&&(qe=O(qe)),_(qe,t.FORBID_CONTENTS,he)),Pe&&(Ee["#text"]=!0),Ce&&_(Ee,["html","head","body"]),Ee.table&&(_(Ee,["tbody"]),delete _e.tbody),s&&s(t),rt=t)},lt=_({},["mi","mo","mn","ms","mtext"]),ct=_({},["foreignobject","desc","title","annotation-xml"]),ut=_({},["title","style","font","a","script"]),st=_({},L);_(st,M),_(st,C);var mt=_({},I);_(mt,F);var ft=function(e){v(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Et){try{e.outerHTML=ae}catch(Et){e.remove()}}},pt=function(e,t){try{v(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Et){v(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(He||Ue)try{ft(t)}catch(Et){}else try{t.setAttribute(e,"")}catch(Et){}},dt=function(e){var t,n;if(Fe)e="<remove></remove>"+e;else{var r=N(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===de&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=oe?oe.createHTML(e):e;if(et===Qe)try{t=(new g).parseFromString(o,de)}catch(Et){}if(!t||!t.documentElement){t=le.createDocument(et,"template",null);try{t.documentElement.innerHTML=tt?"":o}catch(Et){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),et===Qe?se.call(t,Ce?"html":"body")[0]:Ce?t.documentElement:a},ht=function(e){return ce.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},gt=function(t){return"object"===e(u)?t instanceof u:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},yt=function(e,t,n){pe[e]&&y(pe[e],function(e){e.call(o,t,n,rt)})},bt=function(e){var t,n;if(yt("beforeSanitizeElements",e,null),(n=e)instanceof h&&("string"!==typeof n.nodeName||"string"!==typeof n.textContent||"function"!==typeof n.removeChild||!(n.attributes instanceof d)||"function"!==typeof n.removeAttribute||"function"!==typeof n.setAttribute||"string"!==typeof n.namespaceURI||"function"!==typeof n.insertBefore))return ft(e),!0;if(x(/[\u0080-\uFFFF]/,e.nodeName))return ft(e),!0;var r=he(e.nodeName);if(yt("uponSanitizeElement",e,{tagName:r,allowedTags:Ee}),e.hasChildNodes()&&!gt(e.firstElementChild)&&(!gt(e.content)||!gt(e.content.firstElementChild))&&x(/<[/\w]/g,e.innerHTML)&&x(/<[/\w]/g,e.textContent))return ft(e),!0;if("select"===r&&x(/<template/i,e.innerHTML))return ft(e),!0;if(!Ee[r]||_e[r]){if(!_e[r]&&Tt(r)){if(ke.tagNameCheck instanceof RegExp&&x(ke.tagNameCheck,r))return!1;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(r))return!1}if(Pe&&!qe[r]){var a=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&a)for(var l=i.length,c=l-1;c>=0;--c)a.insertBefore(Q(i[c],!0),ee(e))}return ft(e),!0}return e instanceof m&&!function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Qe,tagName:"template"});var n=T(e.tagName),r=T(t.tagName);return e.namespaceURI===Ze?t.namespaceURI===Qe?"svg"===n:t.namespaceURI===Xe?"svg"===n&&("annotation-xml"===r||lt[r]):Boolean(st[n]):e.namespaceURI===Xe?t.namespaceURI===Qe?"math"===n:t.namespaceURI===Ze?"math"===n&&ct[r]:Boolean(mt[n]):e.namespaceURI===Qe&&(!(t.namespaceURI===Ze&&!ct[r])&&!(t.namespaceURI===Xe&&!lt[r])&&!mt[n]&&(ut[n]||!st[n]))}(e)?(ft(e),!0):"noscript"!==r&&"noembed"!==r||!x(/<\/no(script|embed)/i,e.innerHTML)?(Me&&3===e.nodeType&&(t=e.textContent,t=A(t,ge," "),t=A(t,ye," "),e.textContent!==t&&(v(o.removed,{element:e.cloneNode()}),e.textContent=t)),yt("afterSanitizeElements",e,null),!1):(ft(e),!0)},vt=function(e,t,n){if(Be&&("id"===t||"name"===t)&&(n in i||n in ot))return!1;if(Re&&!Oe[t]&&x(be,t));else if(De&&x(ve,t));else if(!xe[t]||Oe[t]){if(!(Tt(e)&&(ke.tagNameCheck instanceof RegExp&&x(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&x(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&x(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return!1}else if($e[t]);else if(x(Ae,A(n,Ne,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==E(n,"data:")||!Ke[e])if(Le&&!x(Te,A(n,Ne,"")));else if(n)return!1;return!0},Tt=function(e){return e.indexOf("-")>0},Nt=function(t){var n,r,a,i;yt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(i=l.length;i--;){var u=n=l[i],s=u.name,m=u.namespaceURI;if(r="value"===s?n.value:w(n.value),a=he(s),c.attrName=a,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,yt("uponSanitizeAttribute",t,c),r=c.attrValue,!c.forceKeepAttr&&(pt(s,t),c.keepAttr))if(x(/\/>/i,r))pt(s,t);else{Me&&(r=A(r,ge," "),r=A(r,ye," "));var f=he(t.nodeName);if(vt(f,a,r)){if(!je||"id"!==a&&"name"!==a||(pt(s,t),r="user-content-"+r),oe&&"object"===e(k)&&"function"===typeof k.getAttributeType)if(m);else switch(k.getAttributeType(f,a)){case"TrustedHTML":r=oe.createHTML(r);break;case"TrustedScriptURL":r=oe.createScriptURL(r)}try{m?t.setAttributeNS(m,s,r):t.setAttribute(s,r),b(o.removed)}catch(Et){}}}}yt("afterSanitizeAttributes",t,null)}},At=function e(t){var n,r=ht(t);for(yt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)yt("uponSanitizeShadowNode",n,null),bt(n)||(n.content instanceof l&&e(n.content),Nt(n));yt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,c,s,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((tt=!t)&&(t="\x3c!--\x3e"),"string"!==typeof t&&!gt(t)){if("function"!==typeof t.toString)throw S("toString is not a function");if("string"!==typeof(t=t.toString()))throw S("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"===typeof n.toStaticHTML){if("string"===typeof t)return n.toStaticHTML(t);if(gt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Ie||it(f),o.removed=[],"string"===typeof t&&(Ge=!1),Ge){if(t.nodeName){var p=he(t.nodeName);if(!Ee[p]||_e[p])throw S("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof u)r=dt("\x3c!----\x3e"),1===(i=r.ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName?r=i:"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!He&&!Me&&!Ce&&-1===t.indexOf("<"))return oe&&ze?oe.createHTML(t):t;if(!(r=dt(t)))return He?null:ze?ae:""}r&&Fe&&ft(r.firstChild);for(var d=ht(Ge?t:r);c=d.nextNode();)3===c.nodeType&&c===s||bt(c)||(c.content instanceof l&&At(c.content),Nt(c),s=c);if(s=null,Ge)return t;if(He){if(Ue)for(m=ue.call(r.ownerDocument);r.firstChild;)m.appendChild(r.firstChild);else m=r;return xe.shadowroot&&(m=me.call(a,m,!0)),m}var h=Ce?r.outerHTML:r.innerHTML;return Ce&&Ee["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&x($,r.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+h),Me&&(h=A(h,ge," "),h=A(h,ye," ")),oe&&ze?oe.createHTML(h):h},o.setConfig=function(e){it(e),Ie=!0},o.clearConfig=function(){rt=null,Ie=!1},o.isValidAttribute=function(e,t,n){rt||it({});var r=he(e),o=he(t);return vt(r,o,n)},o.addHook=function(e,t){"function"===typeof t&&(pe[e]=pe[e]||[],v(pe[e],t))},o.removeHook=function(e){if(pe[e])return b(pe[e])},o.removeHooks=function(e){pe[e]&&(pe[e]=[])},o.removeAllHooks=function(){pe={}},o}()}()}}]);
//# sourceMappingURL=4.e641b533.chunk.js.map