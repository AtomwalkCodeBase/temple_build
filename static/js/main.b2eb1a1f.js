/*! For license information please see main.b2eb1a1f.js.LICENSE.txt */
(()=>{var e={93:(e,t,n)=>{"use strict";n.d(t,{aI:()=>b,r5:()=>f,Cv:()=>v,gettemplist:()=>g,TM:()=>x});const r="https://temple.atomwalk.com",i=`${r}/temple/api`,a=`${i}/process_temple_data/`,o=`${i}/get_temple_list/`,s=`${i}/process_temple_images/`,l=`${i}/process_temple_group_data/`,c=`${i}/get_temple_group_list/`;var d=n(213);const u=()=>localStorage.getItem("userToken")?localStorage.getItem("userToken"):localStorage.getItem("customerToken"),p=async(e,t)=>{const n=u();return d.A.create({baseURL:i,params:t,headers:{Authorization:`Token ${n}`}}).get(e)},m=async(e,t)=>{const n=u();return d.A.create({baseURL:i,headers:{Authorization:n?`Token ${n}`:"","Content-Type":"application/json"}}).post(e,t)},h=async(e,t)=>{const n=u();if(t instanceof FormData)return d.A.create({baseURL:i,headers:{Authorization:`Token ${n}`,"Content-Type":"multipart/form-data"}}).post(e,t);console.error("Data is not FormData!")};d.A.create({baseURL:i}),d.A.get,d.A.post,d.A.put,d.A.delete;function f(e){return m(a,e)}function g(){return p(o)}function x(e,t){if(t instanceof FormData)return h(s,t);const n=new FormData;n.append("temple_id",e),n.append("call_mode","TEMPLE_IMAGE");return Array.from(t||[]).forEach(((e,t)=>{const r=0===t?"image_file":`image_file_${t}`;n.append(r,e)})),h(s,n)}function b(e){return e instanceof FormData?h(l,e):m(l,e)}function v(){return p(c)}},219:(e,t,n)=>{"use strict";var r=n(763),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?o:s[e.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=o;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var i=m(n);i&&i!==h&&e(t,i,r)}var o=d(n);u&&(o=o.concat(u(n)));for(var s=l(t),f=l(n),g=0;g<o.length;++g){var x=o[g];if(!a[x]&&(!r||!r[x])&&(!f||!f[x])&&(!s||!s[x])){var b=p(n,x);try{c(t,x,b)}catch(v){}}}}return t}},983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,x=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,y=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case u:case a:case s:case o:case m:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case f:case l:return e;default:return t}}case i:return t}}}function j(e){return w(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=a,t.Lazy=g,t.Memo=f,t.Portal=i,t.Profiler=s,t.StrictMode=o,t.Suspense=m,t.isAsyncMode=function(e){return j(e)||w(e)===d},t.isConcurrentMode=j,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===f},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===u||e===s||e===o||e===m||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===f||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===x)},t.typeOf=w},763:(e,t,n)=>{"use strict";e.exports=n(983)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},h={};function f(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new f(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new f(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new f(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new f(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new f(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new f(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new f(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new f(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new f(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function v(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!u.call(h,e)||!u.call(m,e)&&(p.test(e)?h[e]=!0:(m[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,b);g[t]=new f(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,b);g[t]=new f(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,b);g[t]=new f(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new f(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new f("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new f(e,1,!1,e.toLowerCase(),null,!0,!0)}));var y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),j=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),A=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var D=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var F=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=F&&e[F]||e["@@iterator"])?e:null}var I,M=Object.assign;function L(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var O=!1;function B(e,t){if(!e||O)return"";O=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{O=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function $(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case j:return"Portal";case E:return"Profiler";case k:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case A:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return V(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return M({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return M({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function ae(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return de(e,t)}))}:de);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function fe(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||me.hasOwnProperty(e)&&me[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=fe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(me).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),me[t]=me[e]}))}));var xe=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var je=null,Se=null,ke=null;function Ee(e){if(e=vi(e)){if("function"!==typeof je)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),je(e.stateNode,e.type,t))}}function Ce(e){Se?ke?ke.push(e):ke=[e]:Se=e}function Ae(){if(Se){var e=Se,t=ke;if(ke=Se=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function _e(e,t){return e(t)}function Pe(){}var Te=!1;function Re(e,t,n){if(Te)return e(t,n);Te=!0;try{return _e(e,t,n)}finally{Te=!1,(null!==Se||null!==ke)&&(Pe(),Ae())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var De=!1;if(d)try{var Fe={};Object.defineProperty(Fe,"passive",{get:function(){De=!0}}),window.addEventListener("test",Fe,Fe),window.removeEventListener("test",Fe,Fe)}catch(de){De=!1}function Ne(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ie=!1,Me=null,Le=!1,Oe=null,Be={onError:function(e){Ie=!0,Me=e}};function $e(e,t,n,r,i,a,o,s,l){Ie=!1,Me=null,Ne.apply(Be,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ve(e)!==e)throw Error(a(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return He(i),e;if(o===r)return He(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,qe=i.unstable_cancelCallback,Ke=i.unstable_shouldYield,Xe=i.unstable_requestPaint,Qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=ut(s):0!==(a&=o)&&(r=ut(a))}else 0!==(o=n&~i)?r=ut(o):0!==a&&(r=ut(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function mt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ft(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vt=0;function yt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,jt,St,kt,Et,Ct=!1,At=[],_t=null,Pt=null,Tt=null,Rt=new Map,zt=new Map,Dt=[],Ft="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function It(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=vi(t))&&jt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Mt(e){var t=bi(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Et(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&jt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ye=r,n.target.dispatchEvent(r),ye=null,t.shift()}return!0}function Ot(e,t,n){Lt(e)&&n.delete(t)}function Bt(){Ct=!1,null!==_t&&Lt(_t)&&(_t=null),null!==Pt&&Lt(Pt)&&(Pt=null),null!==Tt&&Lt(Tt)&&(Tt=null),Rt.forEach(Ot),zt.forEach(Ot)}function $t(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Bt)))}function Vt(e){function t(t){return $t(t,e)}if(0<At.length){$t(At[0],e);for(var n=1;n<At.length;n++){var r=At[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&$t(_t,e),null!==Pt&&$t(Pt,e),null!==Tt&&$t(Tt,e),Rt.forEach(t),zt.forEach(t),n=0;n<Dt.length;n++)(r=Dt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&null===(n=Dt[0]).blockedOn;)Mt(n),null===n.blockedOn&&Dt.shift()}var Ut=y.ReactCurrentBatchConfig,Ht=!0;function Wt(e,t,n,r){var i=vt,a=Ut.transition;Ut.transition=null;try{vt=1,Yt(e,t,n,r)}finally{vt=i,Ut.transition=a}}function Gt(e,t,n,r){var i=vt,a=Ut.transition;Ut.transition=null;try{vt=4,Yt(e,t,n,r)}finally{vt=i,Ut.transition=a}}function Yt(e,t,n,r){if(Ht){var i=Kt(e,t,n,r);if(null===i)Hr(e,t,r,qt,n),Nt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return _t=It(_t,e,t,n,r,i),!0;case"dragenter":return Pt=It(Pt,e,t,n,r,i),!0;case"mouseover":return Tt=It(Tt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Rt.set(a,It(Rt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,zt.set(a,It(zt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Nt(e,r),4&t&&-1<Ft.indexOf(e)){for(;null!==i;){var a=vi(i);if(null!==a&&wt(a),null===(a=Kt(e,t,n,r))&&Hr(e,t,r,qt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var qt=null;function Kt(e,t,n,r){if(qt=null,null!==(e=bi(e=we(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Qt?Qt.value:Qt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=an(cn),un=M({},cn,{view:0,detail:0}),pn=an(un),mn=M({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=an(mn),fn=an(M({},mn,{dataTransfer:0})),gn=an(M({},un,{relatedTarget:0})),xn=an(M({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=M({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=an(bn),yn=an(M({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function En(){return kn}var Cn=M({},un,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?jn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),An=an(Cn),_n=an(M({},mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(M({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Tn=an(M({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=M({},mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=an(Rn),Dn=[9,13,27,32],Fn=d&&"CompositionEvent"in window,Nn=null;d&&"documentMode"in document&&(Nn=document.documentMode);var In=d&&"TextEvent"in window&&!Nn,Mn=d&&(!Fn||Nn&&8<Nn&&11>=Nn),Ln=String.fromCharCode(32),On=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Dn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $n(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Wn(e,t,n,r){Ce(r),0<(t=Gr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Yn=null;function qn(e){Lr(e,0)}function Kn(e){if(Y(yi(e)))return e}function Xn(e,t){if("change"===e)return t}var Qn=!1;if(d){var Jn;if(d){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Yn=Gn=null)}function nr(e){if("value"===e.propertyName&&Kn(Yn)){var t=[];Wn(t,Yn,e,we(e)),Re(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Yn)}function ar(e,t){if("click"===e)return Kn(t)}function or(e,t){if("input"===e||"change"===e)return Kn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!u.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function ur(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ur(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ur(n.ownerDocument.documentElement,n)){if(null!==r&&mr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=dr(n,a);var o=dr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fr=d&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,br=null,vr=!1;function yr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&lr(br,r)||(br=r,0<(r=Gr(xr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},kr={};function Er(e){if(Sr[e])return Sr[e];if(!jr[e])return e;var t,n=jr[e];for(t in n)if(n.hasOwnProperty(t)&&t in kr)return Sr[e]=n[t];return e}d&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);var Cr=Er("animationend"),Ar=Er("animationiteration"),_r=Er("animationstart"),Pr=Er("transitionend"),Tr=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Tr.set(e,t),l(t,[e])}for(var Dr=0;Dr<Rr.length;Dr++){var Fr=Rr[Dr];zr(Fr.toLowerCase(),"on"+(Fr[0].toUpperCase()+Fr.slice(1)))}zr(Cr,"onAnimationEnd"),zr(Ar,"onAnimationIteration"),zr(_r,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Pr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Mr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,c){if($e.apply(this,arguments),Ie){if(!Ie)throw Error(a(198));var d=Me;Ie=!1,Me=null,Le||(Le=!0,Oe=d)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Mr(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Mr(i,s,c),a=l}}}if(Le)throw e=Oe,Le=!1,Oe=null,e}function Or(e,t){var n=t[fi];void 0===n&&(n=t[fi]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var $r="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[$r]){e[$r]=!0,o.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[$r]||(t[$r]=!0,Br("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(Xt(t)){case 1:var i=Wt;break;case 4:i=Gt;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!De||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=bi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Re((function(){var r=a,i=we(n),o=[];e:{var s=Tr.get(e);if(void 0!==s){var l=dn,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=An;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pn;break;case Cr:case Ar:case _r:l=xn;break;case Pr:l=Tn;break;case"scroll":l=pn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=_n}var d=0!==(4&t),u=!d&&"scroll"===e,p=d?null!==s?s+"Capture":null:s;d=[];for(var m,h=r;null!==h;){var f=(m=h).stateNode;if(5===m.tag&&null!==f&&(m=f,null!==p&&(null!=(f=ze(h,p))&&d.push(Wr(h,f,m)))),u)break;h=h.return}0<d.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===ye||!(c=n.relatedTarget||n.fromElement)||!bi(c)&&!c[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?bi(c):null)&&(c!==(u=Ve(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(d=hn,f="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=_n,f="onPointerLeave",p="onPointerEnter",h="pointer"),u=null==l?s:yi(l),m=null==c?s:yi(c),(s=new d(f,h+"leave",l,n,i)).target=u,s.relatedTarget=m,f=null,bi(i)===r&&((d=new d(p,h+"enter",c,n,i)).target=m,d.relatedTarget=u,f=d),u=f,l&&c)e:{for(p=c,h=0,m=d=l;m;m=Yr(m))h++;for(m=0,f=p;f;f=Yr(f))m++;for(;0<h-m;)d=Yr(d),h--;for(;0<m-h;)p=Yr(p),m--;for(;h--;){if(d===p||null!==p&&d===p.alternate)break e;d=Yr(d),p=Yr(p)}d=null}else d=null;null!==l&&qr(o,s,l,d,!1),null!==c&&null!==u&&qr(o,u,c,d,!0)}if("select"===(l=(s=r?yi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Xn;else if(Hn(s))if(Qn)g=or;else{g=ir;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ar);switch(g&&(g=g(e,r))?Wn(o,g,n,i):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?yi(r):window,e){case"focusin":(Hn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,br=null);break;case"focusout":br=xr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,yr(o,n,i);break;case"selectionchange":if(fr)break;case"keydown":case"keyup":yr(o,n,i)}var b;if(Fn)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Vn?Bn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Mn&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Vn&&(b=en()):(Jt="value"in(Qt=i)?Qt.value:Qt.textContent,Vn=!0)),0<(x=Gr(r,v)).length&&(v=new yn(v,e,null,n,i),o.push({event:v,listeners:x}),b?v.data=b:null!==(b=$n(n))&&(v.data=b))),(b=In?function(e,t){switch(e){case"compositionend":return $n(t);case"keypress":return 32!==t.which?null:(On=!0,Ln);case"textInput":return(e=t.data)===Ln&&On?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!Fn&&Bn(e,t)?(e=en(),Zt=Jt=Qt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(i=new yn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=b))}Lr(o,t)}))}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=ze(e,n))&&r.unshift(Wr(e,a,i)),null!=(a=ze(e,t))&&r.push(Wr(e,a,i))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=ze(n,a))&&o.unshift(Wr(n,l,s)):i||null!=(l=ze(n,a))&&o.push(Wr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Kr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Kr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(a(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Vt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Vt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),pi="__reactFiber$"+ui,mi="__reactProps$"+ui,hi="__reactContainer$"+ui,fi="__reactEvents$"+ui,gi="__reactListeners$"+ui,xi="__reactHandles$"+ui;function bi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[pi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function yi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[mi]||null}var ji=[],Si=-1;function ki(e){return{current:e}}function Ei(e){0>Si||(e.current=ji[Si],ji[Si]=null,Si--)}function Ci(e,t){Si++,ji[Si]=e.current,e.current=t}var Ai={},_i=ki(Ai),Pi=ki(!1),Ti=Ai;function Ri(e,t){var n=e.type.contextTypes;if(!n)return Ai;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function zi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Di(){Ei(Pi),Ei(_i)}function Fi(e,t,n){if(_i.current!==Ai)throw Error(a(168));Ci(_i,t),Ci(Pi,n)}function Ni(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,U(e)||"Unknown",i));return M({},n,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ai,Ti=_i.current,Ci(_i,e),Ci(Pi,Pi.current),!0}function Mi(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ni(e,t,Ti),r.__reactInternalMemoizedMergedChildContext=e,Ei(Pi),Ei(_i),Ci(_i,e)):Ei(Pi),Ci(Pi,n)}var Li=null,Oi=!1,Bi=!1;function $i(e){null===Li?Li=[e]:Li.push(e)}function Vi(){if(!Bi&&null!==Li){Bi=!0;var e=0,t=vt;try{var n=Li;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Li=null,Oi=!1}catch(i){throw null!==Li&&(Li=Li.slice(e+1)),Ye(Ze,Vi),i}finally{vt=t,Bi=!1}}return null}var Ui=[],Hi=0,Wi=null,Gi=0,Yi=[],qi=0,Ki=null,Xi=1,Qi="";function Ji(e,t){Ui[Hi++]=Gi,Ui[Hi++]=Wi,Wi=e,Gi=t}function Zi(e,t,n){Yi[qi++]=Xi,Yi[qi++]=Qi,Yi[qi++]=Ki,Ki=e;var r=Xi;e=Qi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xi=1<<32-ot(t)+i|n<<i|r,Qi=a+e}else Xi=1<<a|n<<i|r,Qi=e}function ea(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function ta(e){for(;e===Wi;)Wi=Ui[--Hi],Ui[Hi]=null,Gi=Ui[--Hi],Ui[Hi]=null;for(;e===Ki;)Ki=Yi[--qi],Yi[qi]=null,Qi=Yi[--qi],Yi[qi]=null,Xi=Yi[--qi],Yi[qi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Rc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ki?{id:Xi,overflow:Qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Rc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=ra;if(t){var n=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ci(n.nextSibling);var r=na;t&&sa(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function ua(e){if(e!==na)return!1;if(!ia)return da(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw pa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=ra;e;)e=ci(e.nextSibling)}function ma(){ra=na=null,ia=!1}function ha(e){null===aa?aa=[e]:aa.push(e)}var fa=y.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function va(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Dc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Mc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===S?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===z&&ba(a)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Fc(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Lc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,a){return null===t||7!==t.tag?((t=Nc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Mc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Fc(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case j:return(t=Lc(t,e.mode,n)).return=e,t;case z:return p(e,(0,t._init)(t._payload),n)}if(te(t)||N(t))return(t=Nc(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function m(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case j:return n.key===i?d(e,t,n,r):null;case z:return m(e,t,(i=n._init)(n._payload),r)}if(te(n)||N(n))return null!==i?null:u(e,t,n,r,null);xa(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case j:return d(t,e=e.get(null===r.key?n:r.key)||null,r,i);case z:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||N(r))return u(t,e=e.get(n)||null,r,i,null);xa(t,r)}return null}function f(i,a,s,l){for(var c=null,d=null,u=a,f=a=0,g=null;null!==u&&f<s.length;f++){u.index>f?(g=u,u=null):g=u.sibling;var x=m(i,u,s[f],l);if(null===x){null===u&&(u=g);break}e&&u&&null===x.alternate&&t(i,u),a=o(x,a,f),null===d?c=x:d.sibling=x,d=x,u=g}if(f===s.length)return n(i,u),ia&&Ji(i,f),c;if(null===u){for(;f<s.length;f++)null!==(u=p(i,s[f],l))&&(a=o(u,a,f),null===d?c=u:d.sibling=u,d=u);return ia&&Ji(i,f),c}for(u=r(i,u);f<s.length;f++)null!==(g=h(u,i,f,s[f],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?f:g.key),a=o(g,a,f),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach((function(e){return t(i,e)})),ia&&Ji(i,f),c}function g(i,s,l,c){var d=N(l);if("function"!==typeof d)throw Error(a(150));if(null==(l=d.call(l)))throw Error(a(151));for(var u=d=null,f=s,g=s=0,x=null,b=l.next();null!==f&&!b.done;g++,b=l.next()){f.index>g?(x=f,f=null):x=f.sibling;var v=m(i,f,b.value,c);if(null===v){null===f&&(f=x);break}e&&f&&null===v.alternate&&t(i,f),s=o(v,s,g),null===u?d=v:u.sibling=v,u=v,f=x}if(b.done)return n(i,f),ia&&Ji(i,g),d;if(null===f){for(;!b.done;g++,b=l.next())null!==(b=p(i,b.value,c))&&(s=o(b,s,g),null===u?d=b:u.sibling=b,u=b);return ia&&Ji(i,g),d}for(f=r(i,f);!b.done;g++,b=l.next())null!==(b=h(f,i,g,b.value,c))&&(e&&null!==b.alternate&&f.delete(null===b.key?g:b.key),s=o(b,s,g),null===u?d=b:u.sibling=b,u=b);return e&&f.forEach((function(e){return t(i,e)})),ia&&Ji(i,g),d}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,d=a;null!==d;){if(d.key===c){if((c=o.type)===S){if(7===d.tag){n(r,d.sibling),(a=i(d,o.props.children)).return=r,r=a;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&ba(c)===d.type){n(r,d.sibling),(a=i(d,o.props)).ref=ga(r,d,o),a.return=r,r=a;break e}n(r,d);break}t(r,d),d=d.sibling}o.type===S?((a=Nc(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=Fc(o.type,o.key,o.props,null,r.mode,l)).ref=ga(r,a,o),l.return=r,r=l)}return s(r);case j:e:{for(d=o.key;null!==a;){if(a.key===d){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Lc(o,r.mode,l)).return=r,r=a}return s(r);case z:return e(r,a,(d=o._init)(o._payload),l)}if(te(o))return f(r,a,o,l);if(N(o))return g(r,a,o,l);xa(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Mc(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var ya=va(!0),wa=va(!1),ja=ki(null),Sa=null,ka=null,Ea=null;function Ca(){Ea=ka=Sa=null}function Aa(e){var t=ja.current;Ei(ja),e._currentValue=t}function _a(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){Sa=e,Ea=ka=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vs=!0),e.firstContext=null)}function Ta(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===ka){if(null===Sa)throw Error(a(308));ka=e,Sa.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var Ra=null;function za(e){null===Ra?Ra=[e]:Ra.push(e)}function Da(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,za(t)):(n.next=i.next,i.next=n),t.interleaved=n,Fa(e,r)}function Fa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Na=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function La(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Oa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&_l)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Fa(e,n)}return null===(i=r.interleaved)?(t.next=t,za(r)):(t.next=i.next,i.next=t),r.interleaved=t,Fa(e,n)}function Ba(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var i=e.updateQueue;Na=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var d=e.alternate;null!==d&&((s=(d=d.updateQueue).lastBaseUpdate)!==o&&(null===s?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(null!==a){var u=i.baseState;for(o=0,d=c=l=null,s=a;;){var p=s.lane,m=s.eventTime;if((r&p)===p){null!==d&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,f=s;switch(p=t,m=n,f.tag){case 1:if("function"===typeof(h=f.payload)){u=h.call(m,u,p);break e}u=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=f.payload)?h.call(m,u,p):h)||void 0===p)break e;u=M({},u,p);break e;case 2:Na=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===d?(c=d=m,l=u):d=d.next=m,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===d&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Il|=o,e.lanes=o,e.memoizedState=u}}function Ua(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Ha={},Wa=ki(Ha),Ga=ki(Ha),Ya=ki(Ha);function qa(e){if(e===Ha)throw Error(a(174));return e}function Ka(e,t){switch(Ci(Ya,t),Ci(Ga,e),Ci(Wa,Ha),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ei(Wa),Ci(Wa,t)}function Xa(){Ei(Wa),Ei(Ga),Ei(Ya)}function Qa(e){qa(Ya.current);var t=qa(Wa.current),n=le(t,e.type);t!==n&&(Ci(Ga,e),Ci(Wa,n))}function Ja(e){Ga.current===e&&(Ei(Wa),Ei(Ga))}var Za=ki(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=y.ReactCurrentDispatcher,io=y.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,co=!1,uo=!1,po=0,mo=0;function ho(){throw Error(a(321))}function fo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,i),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,i)}while(uo)}if(ro.current=Jo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,co=!1,t)throw Error(a(300));return e}function xo(){var e=0!==po;return po=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function vo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function yo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,c=null,d=o;do{var u=d.lane;if((ao&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,oo.lanes|=u,Il|=u}d=d.next}while(null!==d&&d!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(vs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Il|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jo(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sr(o,t.memoizedState)||(vs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function ko(e,t){var n=oo,r=vo(),i=t(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,vs=!0),r=r.queue,Io(Ao.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Ro(9,Co.bind(null,n,r,i,t),void 0,null),null===Pl)throw Error(a(349));0!==(30&ao)||Eo(n,t,i)}return i}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,_o(t)&&Po(e)}function Ao(e,t,n){return n((function(){_o(t)&&Po(e)}))}function _o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Po(e){var t=Fa(e,1);null!==t&&nc(t,e,1,-1)}function To(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=qo.bind(null,oo,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zo(){return vo().memoizedState}function Do(e,t,n,r){var i=bo();oo.flags|=e,i.memoizedState=Ro(1|t,n,void 0,void 0===r?null:r)}function Fo(e,t,n,r){var i=vo();r=void 0===r?null:r;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==r&&fo(r,o.deps))return void(i.memoizedState=Ro(t,n,a,r))}oo.flags|=e,i.memoizedState=Ro(1|t,n,a,r)}function No(e,t){return Do(8390656,8,e,t)}function Io(e,t){return Fo(2048,8,e,t)}function Mo(e,t){return Fo(4,2,e,t)}function Lo(e,t){return Fo(4,4,e,t)}function Oo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Fo(4,4,Oo.bind(null,t,e),n)}function $o(){}function Vo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ho(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n):(sr(n,t)||(n=ft(),oo.lanes|=n,Il|=n,e.baseState=!0),t)}function Wo(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{vt=n,io.transition=r}}function Go(){return vo().memoizedState}function Yo(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ko(e))Xo(t,n);else if(null!==(n=Da(e,t,n,r))){nc(n,e,r,ec()),Qo(n,t,r)}}function qo(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ko(e))Xo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(i.next=i,za(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Da(e,t,i,r))&&(nc(n,e,r,i=ec()),Qo(n,t,r))}}function Ko(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Xo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Jo={readContext:Ta,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:Ta,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Ta,useEffect:No,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Do(4194308,4,Oo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:To,useDebugValue:$o,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=To(!1),t=e[0];return e=Wo.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=bo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Pl)throw Error(a(349));0!==(30&ao)||Eo(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,No(Ao.bind(null,r,o,e),[e]),r.flags|=2048,Ro(9,Co.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=Pl.identifierPrefix;if(ia){var n=Qi;t=":"+t+"R"+(n=(Xi&~(1<<32-ot(Xi)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=mo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ta,useCallback:Vo,useContext:Ta,useEffect:Io,useImperativeHandle:Bo,useInsertionEffect:Mo,useLayoutEffect:Lo,useMemo:Uo,useReducer:wo,useRef:zo,useState:function(){return wo(yo)},useDebugValue:$o,useDeferredValue:function(e){return Ho(vo(),so.memoizedState,e)},useTransition:function(){return[wo(yo)[0],vo().memoizedState]},useMutableSource:So,useSyncExternalStore:ko,useId:Go,unstable_isNewReconciler:!1},ts={readContext:Ta,useCallback:Vo,useContext:Ta,useEffect:Io,useImperativeHandle:Bo,useInsertionEffect:Mo,useLayoutEffect:Lo,useMemo:Uo,useReducer:jo,useRef:zo,useState:function(){return jo(yo)},useDebugValue:$o,useDeferredValue:function(e){var t=vo();return null===so?t.memoizedState=e:Ho(t,so.memoizedState,e)},useTransition:function(){return[jo(yo)[0],vo().memoizedState]},useMutableSource:So,useSyncExternalStore:ko,useId:Go,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=M({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:M({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=La(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Oa(e,a,i))&&(nc(t,e,i,r),Ba(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=La(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Oa(e,a,i))&&(nc(t,e,i,r),Ba(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=La(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Oa(e,i,r))&&(nc(t,e,r,n),Ba(t,e,r))}};function as(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,a))}function os(e,t,n){var r=!1,i=Ai,a=t.contextType;return"object"===typeof a&&null!==a?a=Ta(a):(i=zi(t)?Ti:_i.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ri(e,i):Ai),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ia(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=Ta(a):(a=zi(t)?Ti:_i.current,i.context=Ri(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rs(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Va(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=$(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function us(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function ms(e,t,n){(n=La(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Wl=r),us(0,t)},n}function hs(e,t,n){(n=La(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){us(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){us(0,t),"function"!==typeof r&&(null===Gl?Gl=new Set([this]):Gl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function fs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=La(-1,1)).tag=2,Oa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var bs=y.ReactCurrentOwner,vs=!1;function ys(e,t,n,r){t.child=null===e?wa(t,null,n,r):ya(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var a=t.ref;return Pa(t,i),r=go(e,t,n,r,a,i),n=xo(),null===e||vs?(ia&&n&&ea(t),t.flags|=1,ys(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function js(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||zc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Fc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Hs(e,t,i)}return t.flags|=1,(e=Dc(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Hs(e,t,i);0!==(131072&e.flags)&&(vs=!0)}}return Cs(e,t,n,r,i)}function ks(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Dl,zl),zl|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Dl,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ci(Dl,zl),zl|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ci(Dl,zl),zl|=r;return ys(e,t,i,n),t.child}function Es(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var a=zi(n)?Ti:_i.current;return a=Ri(t,a),Pa(t,i),n=go(e,t,n,r,a,i),r=xo(),null===e||vs?(ia&&r&&ea(t),t.flags|=1,ys(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function As(e,t,n,r,i){if(zi(n)){var a=!0;Ii(t)}else a=!1;if(Pa(t,i),null===t.stateNode)Us(e,t),os(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ta(c):c=Ri(t,c=zi(n)?Ti:_i.current);var d=n.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate;u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),Na=!1;var p=t.memoizedState;o.state=p,Va(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Pi.current||Na?("function"===typeof d&&(rs(t,n,d,r),l=t.memoizedState),(s=Na||as(t,n,s,r,p,l,c))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ma(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,u=t.pendingProps,p=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ta(l):l=Ri(t,l=zi(n)?Ti:_i.current);var m=n.getDerivedStateFromProps;(d="function"===typeof m||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==u||p!==l)&&ss(t,o,r,l),Na=!1,p=t.memoizedState,o.state=p,Va(t,r,o,i);var h=t.memoizedState;s!==u||p!==h||Pi.current||Na?("function"===typeof m&&(rs(t,n,m,r),h=t.memoizedState),(c=Na||as(t,n,c,r,p,h,l)||!1)?(d||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return _s(e,t,n,r,a,i)}function _s(e,t,n,r,i,a){Es(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Mi(t,n,!1),Hs(e,t,a);r=t.stateNode,bs.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=ya(t,e.child,null,a),t.child=ya(t,null,s,a)):ys(e,t,s,a),t.memoizedState=r.state,i&&Mi(t,n,!0),t.child}function Ps(e){var t=e.stateNode;t.pendingContext?Fi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Fi(0,t.context,!1),Ka(e,t.containerInfo)}function Ts(e,t,n,r,i){return ma(),ha(i),t.flags|=256,ys(e,t,n,r),t.child}var Rs,zs,Ds,Fs,Ns={dehydrated:null,treeContext:null,retryLane:0};function Is(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ms(e,t,n){var r,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ci(Za,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Ic(l,i,0,null),e=Nc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Is(n),t.memoizedState=Ns,e):Ls(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Os(e,t,s,r=ds(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ic({mode:"visible",children:r.children},i,0,null),(o=Nc(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&ya(t,e.child,null,s),t.child.memoizedState=Is(s),t.memoizedState=Ns,o);if(0===(1&t.mode))return Os(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Os(e,t,s,r=ds(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),vs||l){if(null!==(r=Pl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Fa(e,i),nc(r,e,i,-1))}return fc(),Os(e,t,s,r=ds(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ac.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ci(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Yi[qi++]=Xi,Yi[qi++]=Qi,Yi[qi++]=Ki,Xi=e.id,Qi=e.overflow,Ki=t),t=Ls(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Dc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Dc(r,s):(s=Nc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Is(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ns,i}return e=(s=e.child).sibling,i=Dc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ls(e,t){return(t=Ic({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Os(e,t,n,r){return null!==r&&ha(r),ya(t,e.child,null,n),(e=Ls(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_a(e.return,t,n)}function $s(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Vs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ys(e,t,r.children,n),0!==(2&(r=Za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bs(e,n,t);else if(19===e.tag)Bs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(Za,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$s(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$s(t,!0,n,null,a);break;case"together":$s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Il|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Dc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ws(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gs(t),null;case 1:case 17:return zi(t.type)&&Di(),Gs(t),null;case 3:return r=t.stateNode,Xa(),Ei(Pi),Ei(_i),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),zs(e,t),Gs(t),null;case 5:Ja(t);var i=qa(Ya.current);if(n=t.type,null!==e&&null!=t.stateNode)Ds(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Gs(t),null}if(e=qa(Wa.current),ua(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pi]=t,r[mi]=o,e=0!==(1&t.mode),n){case"dialog":Or("cancel",r),Or("close",r);break;case"iframe":case"object":case"embed":Or("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)Or(Nr[i],r);break;case"source":Or("error",r);break;case"img":case"image":case"link":Or("error",r),Or("load",r);break;case"details":Or("toggle",r);break;case"input":X(r,o),Or("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Or("invalid",r);break;case"textarea":ie(r,o),Or("invalid",r)}for(var l in be(n,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Or("scroll",r)}switch(n){case"input":G(r),Z(r,o,!0);break;case"textarea":G(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[mi]=r,Rs(e,t,!1,!1),t.stateNode=e;e:{switch(l=ve(n,r),n){case"dialog":Or("cancel",e),Or("close",e),i=r;break;case"iframe":case"object":case"embed":Or("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)Or(Nr[i],e);i=r;break;case"source":Or("error",e),i=r;break;case"img":case"image":case"link":Or("error",e),Or("load",e),i=r;break;case"details":Or("toggle",e),i=r;break;case"input":X(e,r),i=K(e,r),Or("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=M({},r,{value:void 0}),Or("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Or("invalid",e)}for(o in be(n,i),c=i)if(c.hasOwnProperty(o)){var d=c[o];"style"===o?ge(e,d):"dangerouslySetInnerHTML"===o?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===o?"string"===typeof d?("textarea"!==n||""!==d)&&pe(e,d):"number"===typeof d&&pe(e,""+d):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=d&&"onScroll"===o&&Or("scroll",e):null!=d&&v(e,o,d,l))}switch(n){case"input":G(e),Z(e,r,!1);break;case"textarea":G(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gs(t),null;case 6:if(e&&null!=t.stateNode)Fs(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=qa(Ya.current),qa(Wa.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Gs(t),null;case 13:if(Ei(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))pa(),ma(),t.flags|=98560,o=!1;else if(o=ua(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[pi]=t}else ma(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gs(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===Fl&&(Fl=3):fc())),null!==t.updateQueue&&(t.flags|=4),Gs(t),null);case 4:return Xa(),zs(e,t),null===e&&Vr(t.stateNode.containerInfo),Gs(t),null;case 10:return Aa(t.type._context),Gs(t),null;case 19:if(Ei(Za),null===(o=t.memoizedState))return Gs(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Ws(o,!1);else{if(0!==Fl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Ws(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Qe()>Vl&&(t.flags|=128,r=!0,Ws(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ws(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return Gs(t),null}else 2*Qe()-o.renderingStartTime>Vl&&1073741824!==n&&(t.flags|=128,r=!0,Ws(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Qe(),t.sibling=null,n=Za.current,Ci(Za,r?1&n|2:1&n),t):(Gs(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zl)&&(Gs(t),6&t.subtreeFlags&&(t.flags|=8192)):Gs(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function qs(e,t){switch(ta(t),t.tag){case 1:return zi(t.type)&&Di(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),Ei(Pi),Ei(_i),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ei(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ma()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ei(Za),null;case 4:return Xa(),null;case 10:return Aa(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Rs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zs=function(){},Ds=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,qa(Wa.current);var a,o=null;switch(n){case"input":i=K(e,i),r=K(e,r),o=[];break;case"select":i=M({},i,{value:void 0}),r=M({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(d in be(n,r),n=null,i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(s.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(l=null!=i?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(s.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Or("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}},Fs=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ks=!1,Xs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){kc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){kc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[mi],delete t[fi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,ul=!1;function pl(e,t,n){for(n=n.child;null!==n;)ml(e,t,n),n=n.sibling}function ml(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Xs||Zs(n,t);case 6:var r=dl,i=ul;dl=null,pl(e,t,n),ul=i,null!==(dl=r)&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Vt(e)):li(dl,n.stateNode));break;case 4:r=dl,i=ul,dl=n.stateNode.containerInfo,ul=!0,pl(e,t,n),dl=r,ul=i;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(n,t,o),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Xs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){kc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Xs=(r=Xs)||null!==n.memoizedState,pl(e,t,n),Xs=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qs),t.forEach((function(t){var r=_c.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function fl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,ul=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===dl)throw Error(a(160));ml(o,s,i),dl=null,ul=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(d){kc(i,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fl(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){kc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){kc(e,e.return,g)}}break;case 1:fl(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(fl(t,e),xl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){kc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&Q(i,o),ve(l,s);var d=ve(l,o);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];"style"===u?ge(i,p):"dangerouslySetInnerHTML"===u?ue(i,p):"children"===u?pe(i,p):v(i,u,p,d)}switch(l){case"input":J(i,o);break;case"textarea":ae(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(i,!!o.multiple,h,!1):m!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[mi]=o}catch(g){kc(e,e.return,g)}}break;case 6:if(fl(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){kc(e,e.return,g)}}break;case 3:if(fl(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(g){kc(e,e.return,g)}break;case 4:default:fl(t,e),xl(e);break;case 13:fl(t,e),xl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||($l=Qe())),4&r&&hl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Xs=(d=Xs)||u,fl(t,e),Xs=d):fl(t,e),xl(e),8192&r){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Js=e,u=e.child;null!==u;){for(p=Js=u;null!==Js;){switch(h=(m=Js).child,m.tag){case 0:case 11:case 14:case 15:nl(4,m,m.return);break;case 1:Zs(m,m.return);var f=m.stateNode;if("function"===typeof f.componentWillUnmount){r=m,n=m.return;try{t=r,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(g){kc(r,n,g)}}break;case 5:Zs(m,m.return);break;case 22:if(null!==m.memoizedState){wl(p);continue}}null!==h?(h.return=m,Js=h):wl(p)}u=u.sibling}e:for(u=null,p=e;;){if(5===p.tag){if(null===u){u=p;try{i=p.stateNode,d?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=fe("display",s))}catch(g){kc(e,e.return,g)}}}else if(6===p.tag){if(null===u)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){kc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fl(t,e),xl(e),4&r&&hl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){kc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Js=e,vl(e,t,n)}function vl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Ks;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=Ks;var c=Xs;if(Ks=o,(Xs=l)&&!c)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?jl(i):null!==l?(l.return=o,Js=l):jl(i);for(;null!==a;)Js=a,vl(a,t,n),a=a.sibling;Js=i,Ks=s,Xs=c}yl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Js=a):yl(e)}}function yl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ua(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ua(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var p=u.dehydrated;null!==p&&Vt(p)}}}break;default:throw Error(a(163))}Xs||512&t.flags&&il(t)}catch(m){kc(t,t.return,m)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function jl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){kc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){kc(t,i,l)}}var a=t.return;try{il(t)}catch(l){kc(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){kc(t,o,l)}}}catch(l){kc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,kl=Math.ceil,El=y.ReactCurrentDispatcher,Cl=y.ReactCurrentOwner,Al=y.ReactCurrentBatchConfig,_l=0,Pl=null,Tl=null,Rl=0,zl=0,Dl=ki(0),Fl=0,Nl=null,Il=0,Ml=0,Ll=0,Ol=null,Bl=null,$l=0,Vl=1/0,Ul=null,Hl=!1,Wl=null,Gl=null,Yl=!1,ql=null,Kl=0,Xl=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&_l)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&_l)&&0!==Rl?Rl&-Rl:null!==fa.transition?(0===Zl&&(Zl=ft()),Zl):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nc(e,t,n,r){if(50<Xl)throw Xl=0,Ql=null,Error(a(185));xt(e,n,r),0!==(2&_l)&&e===Pl||(e===Pl&&(0===(2&_l)&&(Ml|=n),4===Fl&&sc(e,Rl)),rc(e,r),1===n&&0===_l&&0===(1&t.mode)&&(Vl=Qe()+500,Oi&&Vi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=mt(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=pt(e,e===Pl?Rl:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Oi=!0,$i(e)}(lc.bind(null,e)):$i(lc.bind(null,e)),oi((function(){0===(6&_l)&&Vi()})),n=null;else{switch(yt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&_l))throw Error(a(327));var n=e.callbackNode;if(jc()&&e.callbackNode!==n)return null;var r=pt(e,e===Pl?Rl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=_l;_l|=2;var o=hc();for(Pl===e&&Rl===t||(Ul=null,Vl=Qe()+500,pc(e,t));;)try{bc();break}catch(l){mc(e,l)}Ca(),El.current=o,_l=i,null!==Tl?t=0:(Pl=null,Rl=0,t=Fl)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t)throw n=Nl,pc(e,0),sc(e,r),rc(e,Qe()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t))throw n=Nl,pc(e,0),sc(e,r),rc(e,Qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Bl,Ul);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=$l+500-Qe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Bl,Ul),t);break}wc(e,Bl,Ul);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Bl,Ul),r);break}wc(e,Bl,Ul);break;default:throw Error(a(329))}}}return rc(e,Qe()),e.callbackNode===n?ic.bind(null,e):null}function ac(e,t){var n=Ol;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bl,Bl=n,null!==t&&oc(t)),e}function oc(e){null===Bl?Bl=e:Bl.push.apply(Bl,e)}function sc(e,t){for(t&=~Ll,t&=~Ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&_l))throw Error(a(327));jc();var t=pt(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Nl,pc(e,0),sc(e,t),rc(e,Qe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Bl,Ul),rc(e,Qe()),null}function cc(e,t){var n=_l;_l|=1;try{return e(t)}finally{0===(_l=n)&&(Vl=Qe()+500,Oi&&Vi())}}function dc(e){null!==ql&&0===ql.tag&&0===(6&_l)&&jc();var t=_l;_l|=1;var n=Al.transition,r=vt;try{if(Al.transition=null,vt=1,e)return e()}finally{vt=r,Al.transition=n,0===(6&(_l=t))&&Vi()}}function uc(){zl=Dl.current,Ei(Dl)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Tl)for(n=Tl.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Di();break;case 3:Xa(),Ei(Pi),Ei(_i),no();break;case 5:Ja(r);break;case 4:Xa();break;case 13:case 19:Ei(Za);break;case 10:Aa(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Pl=e,Tl=e=Dc(e.current,null),Rl=zl=t,Fl=0,Nl=null,Ll=Ml=Il=0,Bl=Ol=null,null!==Ra){for(t=0;t<Ra.length;t++)if(null!==(r=(n=Ra[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Ra=null}return e}function mc(e,t){for(;;){var n=Tl;try{if(Ca(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,lo=so=oo=null,uo=!1,po=0,Cl.current=null,null===n||null===n.return){Fl=1,Nl=t,Tl=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Rl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=l,p=u.tag;if(0===(1&u.mode)&&(0===p||11===p||15===p)){var m=u.alternate;m?(u.updateQueue=m.updateQueue,u.memoizedState=m.memoizedState,u.lanes=m.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,xs(h,s,l,0,t),1&h.mode&&fs(o,d,t),c=d;var f=(t=h).updateQueue;if(null===f){var g=new Set;g.add(c),t.updateQueue=g}else f.add(c);break e}if(0===(1&t)){fs(o,d,t),fc();break e}c=Error(a(426))}else if(ia&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),ha(cs(c,l));break e}}o=c=cs(c,l),4!==Fl&&(Fl=2),null===Ol?Ol=[o]:Ol.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,$a(o,ms(0,c,t));break e;case 1:l=c;var b=o.type,v=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Gl||!Gl.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t,$a(o,hs(o,l,t));break e}}o=o.return}while(null!==o)}yc(n)}catch(y){t=y,Tl===n&&null!==n&&(Tl=n=n.return);continue}break}}function hc(){var e=El.current;return El.current=Jo,null===e?Jo:e}function fc(){0!==Fl&&3!==Fl&&2!==Fl||(Fl=4),null===Pl||0===(268435455&Il)&&0===(268435455&Ml)||sc(Pl,Rl)}function gc(e,t){var n=_l;_l|=2;var r=hc();for(Pl===e&&Rl===t||(Ul=null,pc(e,t));;)try{xc();break}catch(i){mc(e,i)}if(Ca(),_l=n,El.current=r,null!==Tl)throw Error(a(261));return Pl=null,Rl=0,Fl}function xc(){for(;null!==Tl;)vc(Tl)}function bc(){for(;null!==Tl&&!Ke();)vc(Tl)}function vc(e){var t=Sl(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?yc(e):Tl=t,Cl.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,zl)))return void(Tl=n)}else{if(null!==(n=qs(n,t)))return n.flags&=32767,void(Tl=n);if(null===e)return Fl=6,void(Tl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Tl=t);Tl=t=e}while(null!==t);0===Fl&&(Fl=5)}function wc(e,t,n){var r=vt,i=Al.transition;try{Al.transition=null,vt=1,function(e,t,n,r){do{jc()}while(null!==ql);if(0!==(6&_l))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Pl&&(Tl=Pl=null,Rl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,Pc(tt,(function(){return jc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Al.transition,Al.transition=null;var s=vt;vt=1;var l=_l;_l|=4,Cl.current=null,function(e,t){if(ei=Ht,mr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=e,m=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)m=p,p=h;for(;;){if(p===e)break t;if(m===n&&++d===i&&(l=s),m===o&&++u===r&&(c=s),null!==(h=p.nextSibling))break;m=(p=m).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var f=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==f){var g=f.memoizedProps,x=f.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(a(163))}}catch(w){kc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}f=tl,tl=!1}(e,n),gl(n,e),hr(ti),Ht=!!ei,ti=ei=null,e.current=n,bl(n,e,i),Xe(),_l=l,vt=s,Al.transition=o}else e.current=n;if(Yl&&(Yl=!1,ql=e,Kl=i),o=e.pendingLanes,0===o&&(Gl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=Wl,Wl=null,e;0!==(1&Kl)&&0!==e.tag&&jc(),o=e.pendingLanes,0!==(1&o)?e===Ql?Xl++:(Xl=0,Ql=e):Xl=0,Vi()}(e,t,n,r)}finally{Al.transition=i,vt=r}return null}function jc(){if(null!==ql){var e=yt(Kl),t=Al.transition,n=vt;try{if(Al.transition=null,vt=16>e?16:e,null===ql)var r=!1;else{if(e=ql,ql=null,Kl=0,0!==(6&_l))throw Error(a(331));var i=_l;for(_l|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Js=d;null!==Js;){var u=Js;switch(u.tag){case 0:case 11:case 15:nl(8,u,o)}var p=u.child;if(null!==p)p.return=u,Js=p;else for(;null!==Js;){var m=(u=Js).sibling,h=u.return;if(al(u),u===d){Js=null;break}if(null!==m){m.return=h,Js=m;break}Js=h}}}var f=o.alternate;if(null!==f){var g=f.child;if(null!==g){f.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Js=b;break e}Js=o.return}}var v=e.current;for(Js=v;null!==Js;){var y=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==y)y.return=s,Js=y;else e:for(s=v;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(j){kc(l,l.return,j)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(_l=i,Vi(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(j){}r=!0}return r}finally{vt=n,Al.transition=t}}return!1}function Sc(e,t,n){e=Oa(e,t=ms(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function kc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gl||!Gl.has(r))){t=Oa(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Pl===e&&(Rl&n)===n&&(4===Fl||3===Fl&&(130023424&Rl)===Rl&&500>Qe()-$l?pc(e,0):Ll|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var n=ec();null!==(e=Fa(e,t))&&(xt(e,t,n),rc(e,n))}function Ac(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function _c(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Cc(e,n)}function Pc(e,t){return Ye(e,t)}function Tc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rc(e,t,n,r){return new Tc(e,t,n,r)}function zc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dc(e,t){var n=e.alternate;return null===n?((n=Rc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fc(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)zc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Nc(n.children,i,o,t);case k:s=8,i|=8;break;case E:return(e=Rc(12,n,t,2|i)).elementType=E,e.lanes=o,e;case P:return(e=Rc(13,n,t,i)).elementType=P,e.lanes=o,e;case T:return(e=Rc(19,n,t,i)).elementType=T,e.lanes=o,e;case D:return Ic(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case A:s=9;break e;case _:s=11;break e;case R:s=14;break e;case z:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Rc(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Nc(e,t,n,r){return(e=Rc(7,e,r,t)).lanes=n,e}function Ic(e,t,n,r){return(e=Rc(22,e,r,t)).elementType=D,e.lanes=n,e.stateNode={isHidden:!1},e}function Mc(e,t,n){return(e=Rc(6,e,null,t)).lanes=n,e}function Lc(e,t,n){return(t=Rc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,i,a,o,s,l){return e=new Oc(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Rc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(a),e}function $c(e){if(!e)return Ai;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(zi(n))return Ni(e,n,t)}return t}function Vc(e,t,n,r,i,a,o,s,l){return(e=Bc(n,r,!0,e,0,a,0,s,l)).context=$c(null),n=e.current,(a=La(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Oa(n,a,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function Uc(e,t,n,r){var i=t.current,a=ec(),o=tc(i);return n=$c(n),null===t.context?t.context=n:t.pendingContext=n,(t=La(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Oa(i,t,o))&&(nc(e,i,o,a),Ba(e,i,o)),o}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)vs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:Ps(t),ma();break;case 5:Qa(t);break;case 1:zi(t.type)&&Ii(t);break;case 4:Ka(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(ja,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ms(e,t,n):(Ci(Za,1&Za.current),null!==(e=Hs(e,t,n))?e.sibling:null);Ci(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Vs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,ks(e,t,n)}return Hs(e,t,n)}(e,t,n);vs=0!==(131072&e.flags)}else vs=!1,ia&&0!==(1048576&t.flags)&&Zi(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var i=Ri(t,_i.current);Pa(t,n),i=go(null,t,r,e,i,n);var o=xo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zi(r)?(o=!0,Ii(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ia(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=_s(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),ys(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return zc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===R)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=As(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=js(null,t,r,ns(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,As(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Ps(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Ma(e,t),Va(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ts(e,t,r,n,i=cs(Error(a(423)),t));break e}if(r!==i){t=Ts(e,t,r,n,i=cs(Error(a(424)),t));break e}for(ra=ci(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ma(),r===i){t=Hs(e,t,n);break e}ys(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),null===e&&ca(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==o&&ni(r,o)&&(t.flags|=32),Es(e,t),ys(e,t,s,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Ms(e,t,n);case 4:return Ka(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ya(t,null,r,n):ys(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return ys(e,t,t.pendingProps,n),t.child;case 8:case 12:return ys(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ci(ja,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===i.children&&!Pi.current){t=Hs(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=La(-1,n&-n)).tag=2;var d=o.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),_a(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),_a(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}ys(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pa(t,n),r=r(i=Ta(i)),t.flags|=1,ys(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),js(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Us(e,t),t.tag=1,zi(r)?(e=!0,Ii(t)):e=!1,Pa(t,n),os(t,r,i),ls(t,r,i,n),_s(null,t,r,!0,e,n);case 19:return Vs(e,t,n);case 22:return ks(e,t,n)}throw Error(a(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function qc(e){this._internalRoot=e}function Kc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Hc(o);s.call(e)}}Uc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Hc(o);a.call(e)}}var o=Vc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[hi]=o.current,Vr(8===e.nodeType?e.parentNode:e),dc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Hc(l);s.call(e)}}var l=Bc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[hi]=l.current,Vr(8===e.nodeType?e.parentNode:e),dc((function(){Uc(t,l,n,r)})),l}(n,t,e,i,r);return Hc(o)}Kc.prototype.render=qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Uc(e,t,null,null)},Kc.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc((function(){Uc(null,e,null,null)})),t[hi]=null}},Kc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&0!==t&&t<Dt[n].priority;n++);Dt.splice(n,0,e),0===n&&Mt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Qe()),0===(6&_l)&&(Vl=Qe()+500,Vi()))}break;case 13:dc((function(){var t=Fa(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Gc(e,1)}},jt=function(e){if(13===e.tag){var t=Fa(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Fa(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},kt=function(){return vt},Et=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},je=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(a(90));Y(r),J(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=cc,Pe=dc;var ed={usingClientEntryPoint:!1,Events:[vi,yi,wi,Ce,Ae,cc]},td={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rd.isDisabled&&rd.supportsFiber)try{it=rd.inject(nd),at=rd}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:j,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xc(e))throw Error(a(299));var n=!1,r="",i=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Vr(8===e.nodeType?e.parentNode:e),new qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=Yc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Vc(t,null,e,1,null!=n?n:null,i,0,o,s),e[hi]=t.current,Vr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Kc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(a(40));return!!e._reactRootContainer&&(dc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},82:(e,t)=>{"use strict";var n=60103,r=60106,i=60107,a=60108,o=60114,s=60109,l=60110,c=60112,d=60113,u=60120,p=60115,m=60116,h=60121,f=60122,g=60117,x=60129,b=60131;if("function"===typeof Symbol&&Symbol.for){var v=Symbol.for;n=v("react.element"),r=v("react.portal"),i=v("react.fragment"),a=v("react.strict_mode"),o=v("react.profiler"),s=v("react.provider"),l=v("react.context"),c=v("react.forward_ref"),d=v("react.suspense"),u=v("react.suspense_list"),p=v("react.memo"),m=v("react.lazy"),h=v("react.block"),f=v("react.server.block"),g=v("react.fundamental"),x=v("react.debug_trace_mode"),b=v("react.legacy_hidden")}function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case o:case a:case d:case u:return e;default:switch(e=e&&e.$$typeof){case l:case c:case m:case p:case s:return e;default:return t}}case r:return t}}}t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===o||e===x||e===a||e===d||e===u||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===c||e.$$typeof===g||e.$$typeof===h||e[0]===f)},t.typeOf=y},86:(e,t,n)=>{"use strict";e.exports=n(82)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=x.prototype;var y=v.prototype=new b;y.constructor=v,f(y,x.prototype),y.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,i)&&!k.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var A=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+_(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(A,"$&/")+"/"),P(o,t,i,"",(function(e){return e}))):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(A,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var d=a+_(s=e[c],c);l+=P(s,t,i,d,o)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=P(s=s.value,t,i,d=a+_(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function T(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},D={transition:null},F={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:D,ReactCurrentOwner:S};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=o,t.PureComponent=v,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.act=N,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=f({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,d=e[c];if(0>a(l,n))c<i&&0>a(d,l)?(e[r]=d,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,m=3,h=!1,f=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function w(e){if(g=!1,y(e),!f)if(null!==r(c))f=!0,D(j);else{var t=r(d);null!==t&&F(w,t.startTime-e)}}function j(e,n){f=!1,g&&(g=!1,b(C),C=-1),h=!0;var a=m;try{for(y(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!P());){var o=p.callback;if("function"===typeof o){p.callback=null,m=p.priorityLevel;var s=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),y(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var u=r(d);null!==u&&F(w,u.startTime-n),l=!1}return l}finally{p=null,m=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,k=!1,E=null,C=-1,A=5,_=-1;function P(){return!(t.unstable_now()-_<A)}function T(){if(null!==E){var e=t.unstable_now();_=e;var n=!0;try{n=E(!0,e)}finally{n?S():(k=!1,E=null)}}else k=!1}if("function"===typeof v)S=function(){v(T)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,z=R.port2;R.port1.onmessage=T,S=function(){z.postMessage(null)}}else S=function(){x(T,0)};function D(e){E=e,k||(k=!0,S())}function F(e,n){C=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){f||h||(f=!0,D(j))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(d,e),null===r(c)&&e===r(d)&&(g?(b(C),C=-1):g=!0,F(w,a-o))):(e.sortIndex=s,n(c,e),f||h||(f=!0,D(j))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(i=n?n.call(r,d,u,c):void 0)||void 0===i&&d!==u)return!1}return!0}},213:(e,t,n)=>{"use strict";n.d(t,{A:()=>yt});var r={};function i(e,t){return function(){return e.apply(t,arguments)}}n.r(r),n.d(r,{hasBrowserEnv:()=>ce,hasStandardBrowserEnv:()=>ue,hasStandardBrowserWebWorkerEnv:()=>pe,navigator:()=>de,origin:()=>me});const{toString:a}=Object.prototype,{getPrototypeOf:o}=Object,{iterator:s,toStringTag:l}=Symbol,c=(d=Object.create(null),e=>{const t=a.call(e);return d[t]||(d[t]=t.slice(8,-1).toLowerCase())});var d;const u=e=>(e=e.toLowerCase(),t=>c(t)===e),p=e=>t=>typeof t===e,{isArray:m}=Array,h=p("undefined");function f(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&b(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const g=u("ArrayBuffer");const x=p("string"),b=p("function"),v=p("number"),y=e=>null!==e&&"object"===typeof e,w=e=>{if("object"!==c(e))return!1;const t=o(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(l in e)&&!(s in e)},j=u("Date"),S=u("File"),k=u("Blob"),E=u("FileList"),C=u("URLSearchParams"),[A,_,P,T]=["ReadableStream","Request","Response","Headers"].map(u);function R(e,t){let n,r,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),m(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{if(f(e))return;const r=i?Object.getOwnPropertyNames(e):Object.keys(e),a=r.length;let o;for(n=0;n<a;n++)o=r[n],t.call(null,e[o],o,e)}}function z(e,t){if(f(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const D="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,F=e=>!h(e)&&e!==D;const N=(I="undefined"!==typeof Uint8Array&&o(Uint8Array),e=>I&&e instanceof I);var I;const M=u("HTMLFormElement"),L=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),O=u("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};R(n,((n,i)=>{let a;!1!==(a=t(n,i,e))&&(r[i]=a||n)})),Object.defineProperties(e,r)};const $=u("AsyncFunction"),V=((e,t)=>{return e?setImmediate:t?(n=`axios@${Math.random()}`,r=[],D.addEventListener("message",(e=>{let{source:t,data:i}=e;t===D&&i===n&&r.length&&r.shift()()}),!1),e=>{r.push(e),D.postMessage(n,"*")}):e=>setTimeout(e);var n,r})("function"===typeof setImmediate,b(D.postMessage)),U="undefined"!==typeof queueMicrotask?queueMicrotask.bind(D):"undefined"!==typeof process&&process.nextTick||V,H={isArray:m,isArrayBuffer:g,isBuffer:f,isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||b(e.append)&&("formdata"===(t=c(e))||"object"===t&&b(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:x,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:w,isEmptyObject:e=>{if(!y(e)||f(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(t){return!1}},isReadableStream:A,isRequest:_,isResponse:P,isHeaders:T,isUndefined:h,isDate:j,isFile:S,isBlob:k,isRegExp:O,isFunction:b,isStream:e=>y(e)&&b(e.pipe),isURLSearchParams:C,isTypedArray:N,isFileList:E,forEach:R,merge:function e(){const{caseless:t}=F(this)&&this||{},n={},r=(r,i)=>{const a=t&&z(n,i)||i;w(n[a])&&w(r)?n[a]=e(n[a],r):w(r)?n[a]=e({},r):m(r)?n[a]=r.slice():n[a]=r};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&R(arguments[i],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return R(t,((t,r)=>{n&&b(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,a,s;const l={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)s=i[a],r&&!r(s,e,t)||l[s]||(t[s]=e[s],l[s]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:c,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(m(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[s]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:M,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(b(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];b(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return m(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:z,global:D,isContextDefined:F,isSpecCompliantForm:function(e){return!!(e&&b(e.append)&&"FormData"===e[l]&&e[s])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(f(e))return e;if(!("toJSON"in e)){t[r]=e;const i=m(e)?[]:{};return R(e,((e,t)=>{const a=n(e,r+1);!h(a)&&(i[t]=a)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:$,isThenable:e=>e&&(y(e)||b(e))&&b(e.then)&&b(e.catch),setImmediate:V,asap:U,isIterable:e=>null!=e&&b(e[s])};function W(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}H.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const G=W.prototype,Y={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Y[e]={value:e}})),Object.defineProperties(W,Y),Object.defineProperty(G,"isAxiosError",{value:!0}),W.from=(e,t,n,r,i,a)=>{const o=Object.create(G);return H.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),W.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const q=W;function K(e){return H.isPlainObject(e)||H.isArray(e)}function X(e){return H.endsWith(e,"[]")?e.slice(0,-2):e}function Q(e,t,n){return e?e.concat(t).map((function(e,t){return e=X(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const J=H.toFlatObject(H,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Z=function(e,t,n){if(!H.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!H.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&H.isSpecCompliantForm(t);if(!H.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(H.isDate(e))return e.toISOString();if(H.isBoolean(e))return e.toString();if(!s&&H.isBlob(e))throw new q("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(e)||H.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,i){let s=e;if(e&&!i&&"object"===typeof e)if(H.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(H.isArray(e)&&function(e){return H.isArray(e)&&!e.some(K)}(e)||(H.isFileList(e)||H.endsWith(n,"[]"))&&(s=H.toArray(e)))return n=X(n),s.forEach((function(e,r){!H.isUndefined(e)&&null!==e&&t.append(!0===o?Q([n],r,a):null===o?n:n+"[]",l(e))})),!1;return!!K(e)||(t.append(Q(i,n,a),l(e)),!1)}const d=[],u=Object.assign(J,{defaultVisitor:c,convertValue:l,isVisitable:K});if(!H.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!H.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+r.join("."));d.push(n),H.forEach(n,(function(n,a){!0===(!(H.isUndefined(n)||null===n)&&i.call(t,n,H.isString(a)?a.trim():a,r,u))&&e(n,r?r.concat(a):[a])})),d.pop()}}(e),t};function ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function te(e,t){this._pairs=[],e&&Z(e,this,t)}const ne=te.prototype;ne.append=function(e,t){this._pairs.push([e,t])},ne.toString=function(e){const t=e?function(t){return e.call(this,t,ee)}:ee;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const re=te;function ie(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ae(e,t,n){if(!t)return e;const r=n&&n.encode||ie;H.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let a;if(a=i?i(t,n):H.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),a){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}const oe=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:re,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ce="undefined"!==typeof window&&"undefined"!==typeof document,de="object"===typeof navigator&&navigator||void 0,ue=ce&&(!de||["ReactNative","NativeScript","NS"].indexOf(de.product)<0),pe="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,me=ce&&window.location.href||"http://localhost",he={...r,...le};const fe=function(e){function t(e,n,r,i){let a=e[i++];if("__proto__"===a)return!0;const o=Number.isFinite(+a),s=i>=e.length;if(a=!a&&H.isArray(r)?r.length:a,s)return H.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o;r[a]&&H.isObject(r[a])||(r[a]=[]);return t(e,n,r[a],i)&&H.isArray(r[a])&&(r[a]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}(r[a])),!o}if(H.isFormData(e)&&H.isFunction(e.entries)){const n={};return H.forEachEntry(e,((e,r)=>{t(function(e){return H.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ge={transitional:se,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=H.isObject(e);i&&H.isHTMLForm(e)&&(e=new FormData(e));if(H.isFormData(e))return r?JSON.stringify(fe(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Z(e,new he.classes.URLSearchParams,{visitor:function(e,t,n,r){return he.isNode&&H.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((a=H.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Z(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(H.isString(e))try{return(t||JSON.parse)(e),H.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ge.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(i){if(n){if("SyntaxError"===i.name)throw q.from(i,q.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],(e=>{ge.headers[e]={}}));const xe=ge,be=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ve=Symbol("internals");function ye(e){return e&&String(e).trim().toLowerCase()}function we(e){return!1===e||null==e?e:H.isArray(e)?e.map(we):String(e)}function je(e,t,n,r,i){return H.isFunction(r)?r.call(this,t,n):(i&&(t=n),H.isString(t)?H.isString(r)?-1!==t.indexOf(r):H.isRegExp(r)?r.test(t):void 0:void 0)}class Se{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=ye(t);if(!i)throw new Error("header name must be a non-empty string");const a=H.findKey(r,i);(!a||void 0===r[a]||!0===n||void 0===n&&!1!==r[a])&&(r[a||t]=we(e))}const a=(e,t)=>H.forEach(e,((e,n)=>i(e,n,t)));if(H.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(H.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))a((e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&be[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(H.isObject(e)&&H.isIterable(e)){let n,r,i={};for(const t of e){if(!H.isArray(t))throw TypeError("Object iterator must return a key-value pair");i[r=t[0]]=(n=i[r])?H.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}a(i,t)}else null!=e&&i(t,e,n);return this}get(e,t){if(e=ye(e)){const n=H.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(H.isFunction(t))return t.call(this,e,n);if(H.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ye(e)){const n=H.findKey(this,e);return!(!n||void 0===this[n]||t&&!je(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=ye(e)){const i=H.findKey(n,e);!i||t&&!je(0,n[i],i,t)||(delete n[i],r=!0)}}return H.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!je(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return H.forEach(this,((r,i)=>{const a=H.findKey(n,i);if(a)return t[a]=we(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=we(r),n[o]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return H.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&H.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[ve]=this[ve]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ye(e);t[r]||(!function(e,t){const n=H.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return H.isArray(e)?e.forEach(r):r(e),this}}Se.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),H.reduceDescriptors(Se.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),H.freezeMethods(Se);const ke=Se;function Ee(e,t){const n=this||xe,r=t||n,i=ke.from(r.headers);let a=r.data;return H.forEach(e,(function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)})),i.normalize(),a}function Ce(e){return!(!e||!e.__CANCEL__)}function Ae(e,t,n){q.call(this,null==e?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}H.inherits(Ae,q,{__CANCEL__:!0});const _e=Ae;function Pe(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Te=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,a=0,o=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[o];i||(i=l),n[a]=s,r[a]=l;let d=o,u=0;for(;d!==a;)u+=n[d++],d%=e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),l-i<t)return;const p=c&&l-c;return p?Math.round(1e3*u/p):void 0}};const Re=function(e,t){let n,r,i=0,a=1e3/t;const o=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=a,n=null,r&&(clearTimeout(r),r=null),e(...t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=a?o(l,e):(n=l,r||(r=setTimeout((()=>{r=null,o(n)}),a-t)))},()=>n&&o(n)]},ze=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const i=Te(50,250);return Re((n=>{const a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,l=i(s);r=a;e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&a<=o?(o-a)/l:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0})}),n)},De=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Fe=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return H.asap((()=>e(...n)))},Ne=he.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,he.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(he.origin),he.navigator&&/(msie|trident)/i.test(he.navigator.userAgent)):()=>!0,Ie=he.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const o=[e+"="+encodeURIComponent(t)];H.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),H.isString(r)&&o.push("path="+r),H.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Me(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Le=e=>e instanceof ke?{...e}:e;function Oe(e,t){t=t||{};const n={};function r(e,t,n,r){return H.isPlainObject(e)&&H.isPlainObject(t)?H.merge.call({caseless:r},e,t):H.isPlainObject(t)?H.merge({},t):H.isArray(t)?t.slice():t}function i(e,t,n,i){return H.isUndefined(t)?H.isUndefined(e)?void 0:r(void 0,e,0,i):r(e,t,0,i)}function a(e,t){if(!H.isUndefined(t))return r(void 0,t)}function o(e,t){return H.isUndefined(t)?H.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,i,a){return a in t?r(n,i):a in e?r(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(Le(e),Le(t),0,!0)};return H.forEach(Object.keys({...e,...t}),(function(r){const a=l[r]||i,o=a(e[r],t[r],r);H.isUndefined(o)&&a!==s||(n[r]=o)})),n}const Be=e=>{const t=Oe({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:l}=t;if(t.headers=s=ke.from(s),t.url=ae(Me(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),H.isFormData(r))if(he.hasStandardBrowserEnv||he.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(he.hasStandardBrowserEnv&&(i&&H.isFunction(i)&&(i=i(t)),i||!1!==i&&Ne(t.url))){const e=a&&o&&Ie.read(o);e&&s.set(a,e)}return t},$e="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Be(e);let i=r.data;const a=ke.from(r.headers).normalize();let o,s,l,c,d,{responseType:u,onUploadProgress:p,onDownloadProgress:m}=r;function h(){c&&c(),d&&d(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let f=new XMLHttpRequest;function g(){if(!f)return;const r=ke.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders());Pe((function(e){t(e),h()}),(function(e){n(e),h()}),{data:u&&"text"!==u&&"json"!==u?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f}),f=null}f.open(r.method.toUpperCase(),r.url,!0),f.timeout=r.timeout,"onloadend"in f?f.onloadend=g:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&setTimeout(g)},f.onabort=function(){f&&(n(new q("Request aborted",q.ECONNABORTED,e,f)),f=null)},f.onerror=function(){n(new q("Network Error",q.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||se;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new q(t,i.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,f)),f=null},void 0===i&&a.setContentType(null),"setRequestHeader"in f&&H.forEach(a.toJSON(),(function(e,t){f.setRequestHeader(t,e)})),H.isUndefined(r.withCredentials)||(f.withCredentials=!!r.withCredentials),u&&"json"!==u&&(f.responseType=r.responseType),m&&([l,d]=ze(m,!0),f.addEventListener("progress",l)),p&&f.upload&&([s,c]=ze(p),f.upload.addEventListener("progress",s),f.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(o=t=>{f&&(n(!t||t.type?new _e(null,e,f):t),f.abort(),f=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===he.protocols.indexOf(x)?n(new q("Unsupported protocol "+x+":",q.ERR_BAD_REQUEST,e)):f.send(i||null)}))},Ve=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof q?t:new _e(t instanceof Error?t.message:t))}};let a=t&&setTimeout((()=>{a=null,i(new q(`timeout ${t} of ms exceeded`,q.ETIMEDOUT))}),t);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:s}=r;return s.unsubscribe=()=>H.asap(o),s}},Ue=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},He=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},We=(e,t,n,r)=>{const i=async function*(e,t){for await(const n of He(e))yield*Ue(n,t)}(e,t);let a,o=0,s=e=>{a||(a=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return s(),void e.close();let a=r.byteLength;if(n){let e=o+=a;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},Ge="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Ye=Ge&&"function"===typeof ReadableStream,qe=Ge&&("function"===typeof TextEncoder?(Ke=new TextEncoder,e=>Ke.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var Ke;const Xe=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(i){return!1}},Qe=Ye&&Xe((()=>{let e=!1;const t=new Request(he.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Je=Ye&&Xe((()=>H.isReadableStream(new Response("").body))),Ze={stream:Je&&(e=>e.body)};var et;Ge&&(et=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Ze[e]&&(Ze[e]=H.isFunction(et[e])?t=>t[e]():(t,n)=>{throw new q(`Response type '${e}' is not supported`,q.ERR_NOT_SUPPORT,n)})})));const tt=async(e,t)=>{const n=H.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(H.isBlob(e))return e.size;if(H.isSpecCompliantForm(e)){const t=new Request(he.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return H.isArrayBufferView(e)||H.isArrayBuffer(e)?e.byteLength:(H.isURLSearchParams(e)&&(e+=""),H.isString(e)?(await qe(e)).byteLength:void 0)})(t):n},nt={http:null,xhr:$e,fetch:Ge&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:d,withCredentials:u="same-origin",fetchOptions:p}=Be(e);c=c?(c+"").toLowerCase():"text";let m,h=Ve([i,a&&a.toAbortSignal()],o);const f=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&Qe&&"get"!==n&&"head"!==n&&0!==(g=await tt(d,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(H.isFormData(r)&&(e=n.headers.get("content-type"))&&d.setContentType(e),n.body){const[e,t]=De(g,ze(Fe(l)));r=We(n.body,65536,e,t)}}H.isString(u)||(u=u?"include":"omit");const i="credentials"in Request.prototype;m=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:i?u:void 0});let a=await fetch(m,p);const o=Je&&("stream"===c||"response"===c);if(Je&&(s||o&&f)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=a[t]}));const t=H.toFiniteNumber(a.headers.get("content-length")),[n,r]=s&&De(t,ze(Fe(s),!0))||[];a=new Response(We(a.body,65536,n,(()=>{r&&r(),f&&f()})),e)}c=c||"text";let x=await Ze[H.findKey(Ze,c)||"text"](a,e);return!o&&f&&f(),await new Promise(((t,n)=>{Pe(t,n,{data:x,headers:ke.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:m})}))}catch(x){if(f&&f(),x&&"TypeError"===x.name&&/Load failed|fetch/i.test(x.message))throw Object.assign(new q("Network Error",q.ERR_NETWORK,e,m),{cause:x.cause||x});throw q.from(x,x&&x.code,e,m)}})};H.forEach(nt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const rt=e=>`- ${e}`,it=e=>H.isFunction(e)||null===e||!1===e,at=e=>{e=H.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){let t;if(n=e[a],r=n,!it(n)&&(r=nt[(t=String(n)).toLowerCase()],void 0===r))throw new q(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+a]=r}if(!r){const e=Object.entries(i).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(rt).join("\n"):" "+rt(e[0]):"as no adapter specified";throw new q("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function ot(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _e(null,e)}function st(e){ot(e),e.headers=ke.from(e.headers),e.data=Ee.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return at(e.adapter||xe.adapter)(e).then((function(t){return ot(e),t.data=Ee.call(e,e.transformResponse,t),t.headers=ke.from(t.headers),t}),(function(t){return Ce(t)||(ot(e),t&&t.response&&(t.response.data=Ee.call(e,e.transformResponse,t.response),t.response.headers=ke.from(t.response.headers))),Promise.reject(t)}))}const lt="1.11.0",ct={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ct[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const dt={};ct.transitional=function(e,t,n){function r(e,t){return"[Axios v"+lt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,a)=>{if(!1===e)throw new q(r(i," has been removed"+(t?" in "+t:"")),q.ERR_DEPRECATED);return t&&!dt[i]&&(dt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},ct.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const ut={assertOptions:function(e,t,n){if("object"!==typeof e)throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const t=e[a],n=void 0===t||o(t,a,e);if(!0!==n)throw new q("option "+a+" must be "+n,q.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new q("Unknown option "+a,q.ERR_BAD_OPTION)}},validators:ct},pt=ut.validators;class mt{constructor(e){this.defaults=e||{},this.interceptors={request:new oe,response:new oe}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Oe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&ut.assertOptions(n,{silentJSONParsing:pt.transitional(pt.boolean),forcedJSONParsing:pt.transitional(pt.boolean),clarifyTimeoutError:pt.transitional(pt.boolean)},!1),null!=r&&(H.isFunction(r)?t.paramsSerializer={serialize:r}:ut.assertOptions(r,{encode:pt.function,serialize:pt.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ut.assertOptions(t,{baseUrl:pt.spelling("baseURL"),withXsrfToken:pt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=i&&H.merge(i.common,i[t.method]);i&&H.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=ke.concat(a,i);const o=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let d,u=0;if(!s){const e=[st.bind(this),void 0];for(e.unshift(...o),e.push(...l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=o.length;let p=t;for(u=0;u<d;){const e=o[u++],t=o[u++];try{p=e(p)}catch(m){t.call(this,m);break}}try{c=st.call(this,p)}catch(m){return Promise.reject(m)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return ae(Me((e=Oe(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}H.forEach(["delete","get","head","options"],(function(e){mt.prototype[e]=function(t,n){return this.request(Oe(n||{},{method:e,url:t,data:(n||{}).data}))}})),H.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Oe(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}mt.prototype[e]=t(),mt.prototype[e+"Form"]=t(!0)}));const ht=mt;class ft{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new _e(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new ft((function(t){e=t})),cancel:e}}}const gt=ft;const xt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xt).forEach((e=>{let[t,n]=e;xt[n]=t}));const bt=xt;const vt=function e(t){const n=new ht(t),r=i(ht.prototype.request,n);return H.extend(r,ht.prototype,n,{allOwnKeys:!0}),H.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Oe(t,n))},r}(xe);vt.Axios=ht,vt.CanceledError=_e,vt.CancelToken=gt,vt.isCancel=Ce,vt.VERSION=lt,vt.toFormData=Z,vt.AxiosError=q,vt.Cancel=vt.CanceledError,vt.all=function(e){return Promise.all(e)},vt.spread=function(e){return function(t){return e.apply(null,t)}},vt.isAxiosError=function(e){return H.isObject(e)&&!0===e.isAxiosError},vt.mergeConfig=Oe,vt.AxiosHeaders=ke,vt.formToJSON=e=>fe(H.isHTMLForm(e)?new FormData(e):e),vt.getAdapter=at,vt.HttpStatusCode=bt,vt.default=vt;const yt=vt}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),i=n(391);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const o="popstate";function s(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),a({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,i){void 0===i&&(i={});let{window:l=document.defaultView,v5Compat:p=!1}=i,m=l.history,h=e.Pop,f=null,g=x();function x(){return(m.state||{idx:null}).idx}function b(){h=e.Pop;let t=x(),n=null==t?null:t-g;g=t,f&&f({action:h,location:y.location,delta:n})}function v(e){let t="null"!==l.location.origin?l.location.origin:l.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,m.replaceState(a({},m.state,{idx:g}),""));let y={get action(){return h},get location(){return t(l,m)},listen(e){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(o,b),f=e,()=>{l.removeEventListener(o,b),f=null}},createHref:e=>n(l,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let i=d(y.location,t,n);r&&r(i,t),g=x()+1;let a=c(i,g),o=y.createHref(i);try{m.pushState(a,"",o)}catch(s){if(s instanceof DOMException&&"DataCloneError"===s.name)throw s;l.location.assign(o)}p&&f&&f({action:h,location:y.location,delta:1})},replace:function(t,n){h=e.Replace;let i=d(y.location,t,n);r&&r(i,t),g=x();let a=c(i,g),o=y.createHref(i);m.replaceState(a,"",o),p&&f&&f({action:h,location:y.location,delta:0})},go:e=>m.go(e)};return y}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function f(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let i=T(("string"===typeof t?p(t):t).pathname||"/",n);if(null==i)return null;let a=x(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=P(i);o=A(a[s],e,r)}return o}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(s(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let l=N([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(s(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),x(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:C(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))i(e,t,r);else i(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=b(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const v=/^:[\w-]+$/,y=3,w=2,j=1,S=10,k=-2,E=e=>"*"===e;function C(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=k),t&&(r+=w),n.filter((e=>!E(e))).reduce(((e,t)=>e+(v.test(t)?y:""===t?j:S)),r)}function A(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",d=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&n&&!r[r.length-1].route.index&&(d=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:N([a,d.pathname]),pathnameBase:I(N([a,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(a=N([a,d.pathnameBase]))}return o}function _(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);l("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),c=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:c,pathname:a,pathnameBase:o,pattern:e}}function P(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return l(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function R(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function D(e,t){let n=z(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function F(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=p(e):(i=a({},e),s(!i.pathname||!i.pathname.includes("?"),R("?","pathname","search",i)),s(!i.pathname||!i.pathname.includes("#"),R("#","pathname","hash",i)),s(!i.search||!i.search.includes("#"),R("#","search","hash",i)));let o,l=""===e||""===i.pathname,c=l?"/":i.pathname;if(null==c)o=n;else{let e=t.length-1;if(!r&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let d=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?p(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:M(r),hash:L(i)}}(i,o),u=c&&"/"!==c&&c.endsWith("/"),m=(l||"."===c)&&n.endsWith("/");return d.pathname.endsWith("/")||!u&&!m||(d.pathname+="/"),d}const N=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function O(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const B=["post","put","patch","delete"],$=(new Set(B),["get",...B]);new Set($),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const U=t.createContext(null);const H=t.createContext(null);const W=t.createContext(null);const G=t.createContext(null);const Y=t.createContext({outlet:null,matches:[],isDataRoute:!1});const q=t.createContext(null);function K(){return null!=t.useContext(G)}function X(){return K()||s(!1),t.useContext(G).location}function Q(e){t.useContext(W).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(Y);return e?function(){let{router:e}=le(oe.UseNavigateStable),n=de(se.UseNavigateStable),r=t.useRef(!1);Q((()=>{r.current=!0}));let i=t.useCallback((function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,V({fromRouteId:n},i)))}),[e,n]);return i}():function(){K()||s(!1);let e=t.useContext(U),{basename:n,future:r,navigator:i}=t.useContext(W),{matches:a}=t.useContext(Y),{pathname:o}=X(),l=JSON.stringify(D(a,r.v7_relativeSplatPath)),c=t.useRef(!1);return Q((()=>{c.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!c.current)return;if("number"===typeof t)return void i.go(t);let a=F(t,JSON.parse(l),o,"path"===r.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:N([n,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)}),[n,i,l,o,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(W),{matches:a}=t.useContext(Y),{pathname:o}=X(),s=JSON.stringify(D(a,i.v7_relativeSplatPath));return t.useMemo((()=>F(e,JSON.parse(s),o,"path"===r)),[e,s,o,r])}function ee(n,r,i,a){K()||s(!1);let{navigator:o}=t.useContext(W),{matches:l}=t.useContext(Y),c=l[l.length-1],d=c?c.params:{},u=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let m,h=X();if(r){var g;let e="string"===typeof r?p(r):r;"/"===u||(null==(g=e.pathname)?void 0:g.startsWith(u))||s(!1),m=e}else m=h;let x=m.pathname||"/",b=x;if("/"!==u){let e=u.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=f(n,{pathname:b});let y=ae(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:N([u,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:N([u,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,i,a);return r&&y?t.createElement(G.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:e.Pop}},y):y}function te(){let e=function(){var e;let n=t.useContext(q),r=ce(se.UseRouteError),i=de(se.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=O(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Y.Provider,{value:this.props.routeContext},t.createElement(q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:i}=e,a=t.useContext(U);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Y.Provider,{value:n},i)}function ae(e,n,r,i){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,c=null==(a=r)?void 0:a.errors;if(null!=c){let e=l.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||s(!1),l=l.slice(0,Math.min(l.length,e+1))}let d=!1,u=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){d=!0,l=u>=0?l.slice(0,u+1):[l[0]];break}}}return l.reduceRight(((e,i,a)=>{let o,s=!1,p=null,m=null;var h;r&&(o=c&&i.route.id?c[i.route.id]:void 0,p=i.route.errorElement||ne,d&&(u<0&&0===a?(h="route-fallback",!1||ue[h]||(ue[h]=!0),s=!0,m=null):u===a&&(s=!0,m=i.route.hydrateFallbackElement||null)));let f=n.concat(l.slice(0,a+1)),g=()=>{let n;return n=o?p:s?m:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ie,{match:i,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:o,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()}),null)}var oe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(oe||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function le(e){let n=t.useContext(U);return n||s(!1),n}function ce(e){let n=t.useContext(H);return n||s(!1),n}function de(e){let n=function(){let e=t.useContext(Y);return e||s(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||s(!1),r.route.id}const ue={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){let{to:n,replace:r,state:i,relative:a}=e;K()||s(!1);let{future:o,static:l}=t.useContext(W),{matches:c}=t.useContext(Y),{pathname:d}=X(),u=J(),p=F(n,D(c,o.v7_relativeSplatPath),d,"path"===a),m=JSON.stringify(p);return t.useEffect((()=>u(JSON.parse(m),{replace:r,state:i,relative:a})),[u,m,a,r,i]),null}function he(e){s(!1)}function fe(n){let{basename:r="/",children:i=null,location:a,navigationType:o=e.Pop,navigator:l,static:c=!1,future:d}=n;K()&&s(!1);let u=r.replace(/^\/*/,"/"),m=t.useMemo((()=>({basename:u,navigator:l,static:c,future:V({v7_relativeSplatPath:!1},d)})),[u,d,l,c]);"string"===typeof a&&(a=p(a));let{pathname:h="/",search:f="",hash:g="",state:x=null,key:b="default"}=a,v=t.useMemo((()=>{let e=T(h,u);return null==e?null:{location:{pathname:e,search:f,hash:g,state:x,key:b},navigationType:o}}),[u,h,f,g,x,b,o]);return null==v?null:t.createElement(W.Provider,{value:m},t.createElement(G.Provider,{children:i,value:v}))}function ge(e){let{children:t,location:n}=e;return ee(xe(t),n)}new Promise((()=>{}));t.Component;function xe(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,i)=>{if(!t.isValidElement(e))return;let a=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,xe(e.props.children,a));e.type!==he&&s(!1),e.props.index&&e.props.children&&s(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=xe(e.props.children,a)),r.push(o)})),r}var be=n(950),ve=n.t(be,2);function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}function we(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const je=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Qj){}new Map;const Se=r.startTransition;ve.flushSync,r.useId;function ke(e){let{basename:n,children:r,future:i,window:a}=e,o=t.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),m((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return d("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:u(t)}),null,s)));let l=o.current,[c,p]=t.useState({action:l.action,location:l.location}),{v7_startTransition:h}=i||{},f=t.useCallback((e=>{h&&Se?Se((()=>p(e))):p(e)}),[p,h]);return t.useLayoutEffect((()=>l.listen(f)),[l,f]),t.useEffect((()=>pe(i)),[i]),t.createElement(fe,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ae=t.forwardRef((function(e,n){let r,{onClick:i,relative:a,reloadDocument:o,replace:l,state:c,target:d,to:p,preventScrollReset:m,viewTransition:h}=e,f=we(e,je),{basename:g}=t.useContext(W),x=!1;if("string"===typeof p&&Ce.test(p)&&(r=p,Ee))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=T(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:x=!0}catch(Qj){}let b=function(e,n){let{relative:r}=void 0===n?{}:n;K()||s(!1);let{basename:i,navigator:a}=t.useContext(W),{hash:o,pathname:l,search:c}=Z(e,{relative:r}),d=l;return"/"!==i&&(d="/"===l?i:N([i,l])),a.createHref({pathname:d,search:c,hash:o})}(p,{relative:a}),v=function(e,n){let{target:r,replace:i,state:a,preventScrollReset:o,relative:s,viewTransition:l}=void 0===n?{}:n,c=J(),d=X(),p=Z(e,{relative:s});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:u(d)===u(p);c(e,{replace:n,state:a,preventScrollReset:o,relative:s,viewTransition:l})}}),[d,c,p,i,a,r,e,o,s,l])}(p,{replace:l,state:c,target:d,preventScrollReset:m,relative:a,viewTransition:h});return t.createElement("a",ye({},f,{href:r||b,onClick:x||o?i:function(e){i&&i(e),e.defaultPrevented||v(e)},ref:n,target:d}))}));var _e,Pe;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_e||(_e={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Pe||(Pe={}));var Te=n(86),Re=n(324),ze=n.n(Re);const De=function(e){function t(e,r,l,c,p){for(var m,h,f,g,y,j=0,S=0,k=0,E=0,C=0,z=0,F=f=m=0,I=0,M=0,L=0,O=0,B=l.length,$=B-1,V="",U="",H="",W="";I<B;){if(h=l.charCodeAt(I),I===$&&0!==S+E+k+j&&(0!==S&&(h=47===S?10:47),E=k=j=0,B++,$++),0===S+E+k+j){if(I===$&&(0<M&&(V=V.replace(u,"")),0<V.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:V+=l.charAt(I)}h=59}switch(h){case 123:for(m=(V=V.trim()).charCodeAt(0),f=1,O=++I;I<B;){switch(h=l.charCodeAt(I)){case 123:f++;break;case 125:f--;break;case 47:switch(h=l.charCodeAt(I+1)){case 42:case 47:e:{for(F=I+1;F<$;++F)switch(l.charCodeAt(F)){case 47:if(42===h&&42===l.charCodeAt(F-1)&&I+2!==F){I=F+1;break e}break;case 10:if(47===h){I=F+1;break e}}I=F}}break;case 91:h++;case 40:h++;case 34:case 39:for(;I++<$&&l.charCodeAt(I)!==h;);}if(0===f)break;I++}if(f=l.substring(O,I),0===m&&(m=(V=V.replace(d,"").trim()).charCodeAt(0)),64===m){switch(0<M&&(V=V.replace(u,"")),h=V.charCodeAt(1)){case 100:case 109:case 115:case 45:M=r;break;default:M=R}if(O=(f=t(r,M,f,h,p+1)).length,0<D&&(y=s(3,f,M=n(R,V,L),r,_,A,O,h,p,c),V=M.join(""),void 0!==y&&0===(O=(f=y.trim()).length)&&(h=0,f="")),0<O)switch(h){case 115:V=V.replace(w,o);case 100:case 109:case 45:f=V+"{"+f+"}";break;case 107:f=(V=V.replace(x,"$1 $2"))+"{"+f+"}",f=1===T||2===T&&a("@"+f,3)?"@-webkit-"+f+"@"+f:"@"+f;break;default:f=V+f,112===c&&(U+=f,f="")}else f=""}else f=t(r,n(r,V,L),f,c,p+1);H+=f,f=L=M=F=m=0,V="",h=l.charCodeAt(++I);break;case 125:case 59:if(1<(O=(V=(0<M?V.replace(u,""):V).trim()).length))switch(0===F&&(m=V.charCodeAt(0),45===m||96<m&&123>m)&&(O=(V=V.replace(" ",":")).length),0<D&&void 0!==(y=s(1,V,r,e,_,A,U.length,c,p,c))&&0===(O=(V=y.trim()).length)&&(V="\0\0"),m=V.charCodeAt(0),h=V.charCodeAt(1),m){case 0:break;case 64:if(105===h||99===h){W+=V+l.charAt(I);break}default:58!==V.charCodeAt(O-1)&&(U+=i(V,m,h,V.charCodeAt(2)))}L=M=F=m=0,V="",h=l.charCodeAt(++I)}}switch(h){case 13:case 10:47===S?S=0:0===1+m&&107!==c&&0<V.length&&(M=1,V+="\0"),0<D*N&&s(0,V,r,e,_,A,U.length,c,p,c),A=1,_++;break;case 59:case 125:if(0===S+E+k+j){A++;break}default:switch(A++,g=l.charAt(I),h){case 9:case 32:if(0===E+j+S)switch(C){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===E+S+j&&(M=L=1,g="\f"+g);break;case 108:if(0===E+S+j+P&&0<F)switch(I-F){case 2:112===C&&58===l.charCodeAt(I-3)&&(P=C);case 8:111===z&&(P=z)}break;case 58:0===E+S+j&&(F=I);break;case 44:0===S+k+E+j&&(M=1,g+="\r");break;case 34:case 39:0===S&&(E=E===h?0:0===E?h:E);break;case 91:0===E+S+k&&j++;break;case 93:0===E+S+k&&j--;break;case 41:0===E+S+j&&k--;break;case 40:if(0===E+S+j){if(0===m)if(2*C+3*z===533);else m=1;k++}break;case 64:0===S+k+E+j+F+f&&(f=1);break;case 42:case 47:if(!(0<E+j+k))switch(S){case 0:switch(2*h+3*l.charCodeAt(I+1)){case 235:S=47;break;case 220:O=I,S=42}break;case 42:47===h&&42===C&&O+2!==I&&(33===l.charCodeAt(O+2)&&(U+=l.substring(O,I+1)),g="",S=0)}}0===S&&(V+=g)}z=C,C=h,I++}if(0<(O=U.length)){if(M=r,0<D&&(void 0!==(y=s(2,U,M,e,_,A,O,c,p,c))&&0===(U=y).length))return W+U+H;if(U=M.join(",")+"{"+U+"}",0!==T*P){switch(2!==T||a(U,2)||(P=0),P){case 111:U=U.replace(v,":-moz-$1")+U;break;case 112:U=U.replace(b,"::-webkit-input-$1")+U.replace(b,"::-moz-$1")+U.replace(b,":-ms-input-$1")+U}P=0}}return W+U+H}function n(e,t,n){var i=t.trim().split(f);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<a;++s)for(var c=0;c<o;++c)t[l++]=r(e[c]+" ",i[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var o=e+";",s=2*t+3*n+4*r;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===T||2===T&&a(l,1)?"-webkit-"+l+l:l}if(0===T||2===T&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(C,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return m.test(o)?o.replace(p,":-webkit-")+o.replace(p,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(y,"tb");break;case 232:l=o.replace(y,"tb-rl");break;case 220:l=o.replace(y,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function a(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),F(2!==t?r:r.replace(k,"$1"),n,t)}function o(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(j," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,i,a,o,s,l,d){for(var u,p=0,m=t;p<D;++p)switch(u=z[p].call(c,e,m,n,r,i,a,o,s,l,d)){case void 0:case!1:case!0:case null:break;default:m=u}if(m!==t)return m}function l(e){return void 0!==(e=e.prefix)&&(F=null,e?"function"!==typeof e?T=1:(T=2,F=e):T=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<D){var i=s(-1,n,r,r,_,A,0,0,0,0);void 0!==i&&"string"===typeof i&&(n=i)}var a=t(R,r,n,0,0);return 0<D&&(void 0!==(i=s(-2,a,r,r,_,A,a.length,0,0,0))&&(a=i)),P=0,A=_=1,a}var d=/^\0+/g,u=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,h=/([,: ])(transform)/g,f=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,v=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,j=/([\s\S]*?);/g,S=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,C=/([^-])(image-set\()/,A=1,_=1,P=0,T=1,R=[],z=[],D=0,F=null,N=0;return c.use=function e(t){switch(t){case void 0:case null:D=z.length=0;break;default:if("function"===typeof t)z[D++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else N=0|!!t}return e},c.set=l,void 0!==e&&l(e),c};const Fe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ne(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Ie=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Me=Ne((function(e){return Ie.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),Le=n(219),Oe=n.n(Le);function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $e=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ve=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,Te.typeOf)(e)},Ue=Object.freeze([]),He=Object.freeze({});function We(e){return"function"==typeof e}function Ge(e){return e.displayName||e.name||"Component"}function Ye(e){return e&&"string"==typeof e.styledComponentId}var qe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.SC_ATTR)||"data-styled",Ke="undefined"!=typeof window&&"HTMLElement"in window,Xe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyBBrFfio7_3WSIM90krm-lqycBLYyaxe7Q",REACT_APP_FIREBASE_APP_ID:"1:123814095646:web:4f6847bbcddd89f437770f",REACT_APP_FIREBASE_AUTH_DOMAIN:"blog-website-d0187.firebaseapp.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-W131QLE6DS",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"123814095646",REACT_APP_FIREBASE_PROJECT_ID:"blog-website-d0187",REACT_APP_FIREBASE_STORAGE_BUCKET:"blog-website-d0187.firebasestorage.app"}.SC_DISABLE_SPEEDY))),Qe={};function Je(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Ze=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&Je(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),et=new Map,tt=new Map,nt=1,rt=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},it=function(e){return tt.get(e)},at=function(e,t){t>=nt&&(nt=t+1),et.set(e,t),tt.set(t,e)},ot="style["+qe+'][data-styled-version="5.3.11"]',st=new RegExp("^"+qe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lt=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},ct=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(st);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(at(c,l),lt(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},dt=function(){return n.nc},ut=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(qe))return r}}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(qe,"active"),r.setAttribute("data-styled-version","5.3.11");var o=dt();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},pt=function(){function e(e){var t=this.element=ut(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}Je(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),mt=function(){function e(e){var t=this.element=ut(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ft=Ke,gt={isServer:!Ke,useCSSOMInjection:!Xe},xt=function(){function e(e,t,n){void 0===e&&(e=He),void 0===t&&(t={}),this.options=Be({},gt,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ke&&ft&&(ft=!1,function(e){for(var t=document.querySelectorAll(ot),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(qe)&&(ct(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return rt(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Be({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new ht(i):r?new pt(i):new mt(i),new Ze(e)));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var a=it(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(o&&s&&o.size){var l=qe+".g"+i+'[id="'+a+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),bt=/(a)(d)/gi,vt=function(e){return String.fromCharCode(e+(e>25?39:97))};function yt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=vt(t%52)+n;return(vt(t%52)+n).replace(bt,"$1-$2")}var wt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jt=function(e){return wt(5381,e)};function St(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(We(n)&&!Ye(n))return!1}return!0}var kt=jt("5.3.11"),Et=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&St(e),this.componentId=t,this.baseHash=wt(kt,t),this.baseStyle=n,xt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var a=Ut(this.rules,e,t,n).join(""),o=yt(wt(this.baseHash,a)>>>0);if(!t.hasNameForId(r,o)){var s=n(a,"."+o,void 0,r);t.insertRules(r,o,s)}i.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=wt(this.baseHash,n.hash),d="",u=0;u<l;u++){var p=this.rules[u];if("string"==typeof p)d+=p;else if(p){var m=Ut(p,e,t,n),h=Array.isArray(m)?m.join(""):m;c=wt(c,h+u),d+=h}}if(d){var f=yt(c>>>0);if(!t.hasNameForId(r,f)){var g=n(d,"."+f,void 0,r);t.insertRules(r,f,g)}i.push(f)}}return i.join(" ")},e}(),Ct=/^\s*\/\/.*$/gm,At=[":","[",".","#"];function _t(e){var t,n,r,i,a=void 0===e?He:e,o=a.options,s=void 0===o?He:o,l=a.plugins,c=void 0===l?Ue:l,d=new De(s),u=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,a,o,s,l,c,d,u){switch(n){case 1:if(0===d&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){u.push(e)})),m=function(e,r,a){return 0===r&&-1!==At.indexOf(a[n.length])||a.match(i)?e:"."+t};function h(e,a,o,s){void 0===s&&(s="&");var l=e.replace(Ct,""),c=a&&o?o+" "+a+" { "+l+" }":l;return t=s,n=a,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(o||!a?"":a,c)}return d.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,m))},p,function(e){if(-2===e){var t=u;return u=[],t}}])),h.hash=c.length?c.reduce((function(e,t){return t.name||Je(15),wt(e,t.name)}),5381).toString():"",h}var Pt=t.createContext(),Tt=(Pt.Consumer,t.createContext()),Rt=(Tt.Consumer,new xt),zt=_t();function Dt(){return(0,t.useContext)(Pt)||Rt}function Ft(){return(0,t.useContext)(Tt)||zt}function Nt(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],a=Dt(),o=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,t.useMemo)((function(){return _t({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,t.useEffect)((function(){ze()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),t.createElement(Pt.Provider,{value:o},t.createElement(Tt.Provider,{value:s},e.children))}var It=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=zt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return Je(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=zt),this.name+e.hash},e}(),Mt=/([A-Z])/,Lt=/([A-Z])/g,Ot=/^ms-/,Bt=function(e){return"-"+e.toLowerCase()};function $t(e){return Mt.test(e)?e.replace(Lt,Bt).replace(Ot,"-ms-"):e}var Vt=function(e){return null==e||!1===e||""===e};function Ut(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)""!==(i=Ut(e[o],t,n,r))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return Vt(e)?"":Ye(e)?"."+e.styledComponentId:We(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:Ut(e(t),t,n,r):e instanceof It?n?(e.inject(n,r),e.getName(r)):e:Ve(e)?function e(t,n){var r,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!Vt(t[o])&&(Array.isArray(t[o])&&t[o].isCss||We(t[o])?a.push($t(o)+":",t[o],";"):Ve(t[o])?a.push.apply(a,e(t[o],o)):a.push($t(o)+": "+(r=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in Fe||r.startsWith("--")?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(a,["}"]):a}(e):e.toString();var l}var Ht=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return We(e)||Ve(e)?Ht(Ut($e(Ue,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ht(Ut($e(e,n)))}new Set;var Gt=function(e,t,n){return void 0===n&&(n=He),e.theme!==n.theme&&e.theme||t||n.theme},Yt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qt=/(^-|-$)/g;function Kt(e){return e.replace(Yt,"-").replace(qt,"")}var Xt=function(e){return yt(jt(e)>>>0)};function Qt(e){return"string"==typeof e&&!0}var Jt=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Zt=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function en(e,t,n){var r=e[n];Jt(t)&&Jt(r)?tn(r,t):e[n]=t}function tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Jt(o))for(var s in o)Zt(s)&&en(e,o[s],s)}return e}var nn=t.createContext();nn.Consumer;function rn(e){var n=(0,t.useContext)(nn),r=(0,t.useMemo)((function(){return function(e,t){return e?We(e)?e(t):Array.isArray(e)||"object"!=typeof e?Je(8):t?Be({},t,{},e):e:Je(14)}(e.theme,n)}),[e.theme,n]);return e.children?t.createElement(nn.Provider,{value:r},e.children):null}var an={};function on(e,n,r){var i=Ye(e),a=!Qt(e),o=n.attrs,s=void 0===o?Ue:o,l=n.componentId,c=void 0===l?function(e,t){var n="string"!=typeof e?"sc":Kt(e);an[n]=(an[n]||0)+1;var r=n+"-"+Xt("5.3.11"+n+an[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):l,d=n.displayName,u=void 0===d?function(e){return Qt(e)?"styled."+e:"Styled("+Ge(e)+")"}(e):d,p=n.displayName&&n.componentId?Kt(n.displayName)+"-"+n.componentId:n.componentId||c,m=i&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,h=n.shouldForwardProp;i&&e.shouldForwardProp&&(h=n.shouldForwardProp?function(t,r,i){return e.shouldForwardProp(t,r,i)&&n.shouldForwardProp(t,r,i)}:e.shouldForwardProp);var f,g=new Et(r,p,i?e.componentStyle:void 0),x=g.isStatic&&0===s.length,b=function(e,n){return function(e,n,r,i){var a=e.attrs,o=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.shouldForwardProp,d=e.styledComponentId,u=e.target,p=function(e,t,n){void 0===e&&(e=He);var r=Be({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,a,o=e;for(t in We(o)&&(o=o(r)),o)r[t]=i[t]="className"===t?(n=i[t],a=o[t],n&&a?n+" "+a:n||a):o[t]})),[r,i]}(Gt(n,(0,t.useContext)(nn),s)||He,n,a),m=p[0],h=p[1],f=function(e,t,n){var r=Dt(),i=Ft();return t?e.generateAndInjectStyles(He,r,i):e.generateAndInjectStyles(n,r,i)}(o,i,m),g=r,x=h.$as||n.$as||h.as||n.as||u,b=Qt(x),v=h!==n?Be({},n,{},h):n,y={};for(var w in v)"$"!==w[0]&&"as"!==w&&("forwardedAs"===w?y.as=v[w]:(c?c(w,Me,x):!b||Me(w))&&(y[w]=v[w]));return n.style&&h.style!==n.style&&(y.style=Be({},n.style,{},h.style)),y.className=Array.prototype.concat(l,d,f!==d?f:null,n.className,h.className).filter(Boolean).join(" "),y.ref=g,(0,t.createElement)(x,y)}(f,e,n,x)};return b.displayName=u,(f=t.forwardRef(b)).attrs=m,f.componentStyle=g,f.displayName=u,f.shouldForwardProp=h,f.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ue,f.styledComponentId=p,f.target=i?e.target:e,f.withComponent=function(e){var t=n.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["componentId"]),a=t&&t+"-"+(Qt(e)?e:Kt(Ge(e)));return on(e,Be({},i,{attrs:m,componentId:a}),r)},Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?tn({},e.defaultProps,t):t}}),Object.defineProperty(f,"toString",{value:function(){return"."+f.styledComponentId}}),a&&Oe()(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),f}var sn=function(e){return function e(t,n,r){if(void 0===r&&(r=He),!(0,Te.isValidElementType)(n))return Je(1,String(n));var i=function(){return t(n,r,Wt.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,Be({},r,{},i))},i.attrs=function(i){return e(t,n,Be({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(on,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){sn[e]=sn(e)}));var ln=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=St(e),xt.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(Ut(this.rules,t,n,r).join(""),""),a=this.componentId+e;n.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&xt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function cn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Wt.apply(void 0,[e].concat(n)).join(""),a=Xt(i);return new It(a,i)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=dt();return"<style "+[n&&'nonce="'+n+'"',qe+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?Je(2):e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)return Je(2);var r=((n={})[qe]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),i=dt();return i&&(r.nonce=i),[t.createElement("style",Be({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new xt({isServer:!0}),this.sealed=!1}var n=e.prototype;n.collectStyles=function(e){return this.sealed?Je(2):t.createElement(Nt,{sheet:this.instance},e)},n.interleaveWithNodeStream=function(e){return Je(3)}}();const dn=sn,un=(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=Wt.apply(void 0,[e].concat(r)),o="sc-global-"+Xt(JSON.stringify(a)),s=new ln(a,o);function l(e){var n=Dt(),r=Ft(),i=(0,t.useContext)(nn),a=(0,t.useRef)(n.allocateGSInstance(o)).current;return n.server&&c(a,e,n,i,r),(0,t.useLayoutEffect)((function(){if(!n.server)return c(a,e,n,i,r),function(){return s.removeStyles(a,n)}}),[a,e,n,i,r]),null}function c(e,t,n,r,i){if(s.isStatic)s.renderStyles(e,Qe,n,i);else{var a=Be({},t,{theme:Gt(t,r,l.defaultProps)});s.renderStyles(e,a,n,i)}}return t.memo(l)})`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&family=Dancing+Script:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${e=>e.theme.fonts.body};
    background: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${e=>e.theme.fonts.heading};
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Advanced Animations */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes glow {
    from { text-shadow: 0 0 20px #DAA520, 0 0 30px #DAA520, 0 0 40px #DAA520; }
    to { text-shadow: 0 0 30px #FF9933, 0 0 40px #FF9933, 0 0 50px #FF9933; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
    50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  @keyframes slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes fadeInUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes scaleIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(180deg, ${e=>e.theme.colors.lightGray}, ${e=>e.theme.colors.background});
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.gradient.primary};
    border-radius: 6px;
    border: 2px solid ${e=>e.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.gradient.sunset};
  }

  /* Selection */
  ::selection {
    background: ${e=>e.theme.colors.primary};
    color: white;
  }

  /* Utility Classes */
  .gradient-text {
    background: ${e=>e.theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .floating {
    animation: ${e=>e.theme.animations.float};
  }

  .glowing {
    animation: ${e=>e.theme.animations.glow};
  }
`,pn={colors:{primary:"#FF6B35",secondary:"#FF6B35",accent:"#3B5998",background:"#FFF8E7",darkBackground:"#1A1A2E",text:"#2D2D2D",gold:"#DAA520",lightGold:"#F4E4BC",white:"#FFFFFF",lightGray:"#F8F9FA",darkGray:"#666666",purple:"#6C5CE7",pink:"#FD79A8",blue:"#74B9FF",green:"#00B894",red:"#E17055",gradient:{primary:"linear-gradient(135deg, #ab353d 0%, #de8634ff 100%)",secondary:"linear-gradient(135deg, #3B5998 0%, #6C5CE7 100%)",sunset:"linear-gradient(135deg, #FF6B35 0%, #FF9933 50%, #DAA520 100%)",divine:"linear-gradient(135deg, #FFD700 0%, #FF9933 50%, #FF6B35 100%)",mystical:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",temple:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}},fonts:{heading:"'Playfair Display', serif",body:"'Poppins', sans-serif",decorative:"'Dancing Script', cursive"},breakpoints:{mobile:"768px",tablet:"1024px",desktop:"1200px"},shadows:{card:"0 20px 60px rgba(0, 0, 0, 0.1)",cardHover:"0 30px 80px rgba(0, 0, 0, 0.15)",button:"0 10px 30px rgba(255, 153, 51, 0.4)",buttonHover:"0 15px 40px rgba(255, 153, 51, 0.6)",glass:"0 8px 32px 0 rgba(31, 38, 135, 0.37)",glow:"0 0 30px rgba(255, 153, 51, 0.5)",divine:"0 0 50px rgba(218, 165, 32, 0.6)"},animations:{float:"float 6s ease-in-out infinite",glow:"glow 2s ease-in-out infinite alternate",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite",spin:"spin 1s linear infinite",wiggle:"wiggle 1s ease-in-out infinite"}},mn=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),hn=(0,t.createContext)({}),fn=(0,t.createContext)(null),gn="undefined"!==typeof document,xn=gn?t.useLayoutEffect:t.useEffect,bn=(0,t.createContext)({strict:!1}),vn=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),yn="data-"+vn("framerAppearId");function wn(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function jn(e){return"string"===typeof e||Array.isArray(e)}function Sn(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const kn=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],En=["initial",...kn];function Cn(e){return Sn(e.animate)||En.some((t=>jn(e[t])))}function An(e){return Boolean(Cn(e)||e.variants)}function _n(e){const{initial:n,animate:r}=function(e,t){if(Cn(e)){const{initial:t,animate:n}=e;return{initial:!1===t||jn(t)?t:void 0,animate:jn(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(hn));return(0,t.useMemo)((()=>({initial:n,animate:r})),[Pn(n),Pn(r)])}function Pn(e){return Array.isArray(e)?e.join(" "):e}const Tn={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Rn={};for(const n in Tn)Rn[n]={isEnabled:e=>Tn[n].some((t=>!!e[t]))};const zn=(0,t.createContext)({}),Dn=(0,t.createContext)({}),Fn=Symbol.for("motionComponentSymbol");function Nn(e){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:a,Component:o}=e;n&&function(e){for(const t in e)Rn[t]={...Rn[t],...e[t]}}(n);const s=(0,t.forwardRef)((function(e,s){let l;const c={...(0,t.useContext)(mn),...e,layoutId:In(e)},{isStatic:d}=c,u=_n(e),p=a(e,d);if(!d&&gn){u.visualElement=function(e,n,r,i){const{visualElement:a}=(0,t.useContext)(hn),o=(0,t.useContext)(bn),s=(0,t.useContext)(fn),l=(0,t.useContext)(mn).reducedMotion,c=(0,t.useRef)();i=i||o.renderer,!c.current&&i&&(c.current=i(e,{visualState:n,parent:a,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const d=c.current;(0,t.useInsertionEffect)((()=>{d&&d.update(r,s)}));const u=(0,t.useRef)(Boolean(r[yn]&&!window.HandoffComplete));return xn((()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())})),(0,t.useEffect)((()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))})),d}(o,p,c,r);const e=(0,t.useContext)(Dn),i=(0,t.useContext)(bn).strict;u.visualElement&&(l=u.visualElement.loadFeatures(c,i,n,e))}return t.createElement(hn.Provider,{value:u},l&&u.visualElement?t.createElement(l,{visualElement:u.visualElement,...c}):null,i(o,e,function(e,n,r){return(0,t.useCallback)((t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):wn(r)&&(r.current=t))}),[n])}(p,u.visualElement,s),p,d,u.visualElement))}));return s[Fn]=o,s}function In(e){let{layoutId:n}=e;const r=(0,t.useContext)(zn).id;return r&&void 0!==n?r+"-"+n:n}function Mn(e){function t(t){return Nn(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const Ln=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function On(e){return"string"===typeof e&&!e.includes("-")&&!!(Ln.indexOf(e)>-1||/[A-Z]/.test(e))}const Bn={};const $n=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vn=new Set($n);function Un(e,t){let{layout:n,layoutId:r}=t;return Vn.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Bn[e]||"opacity"===e)}const Hn=e=>Boolean(e&&e.getVelocity),Wn={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Gn=$n.length;const Yn=e=>t=>"string"===typeof t&&t.startsWith(e),qn=Yn("--"),Kn=Yn("var(--"),Xn=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Qn=(e,t,n)=>Math.min(Math.max(n,e),t),Jn={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Zn={...Jn,transform:e=>Qn(0,1,e)},er={...Jn,default:1},tr=e=>Math.round(1e5*e)/1e5,nr=/(-)?([\d]*\.?[\d])+/g,rr=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ir=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ar(e){return"string"===typeof e}const or=e=>({test:t=>ar(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),sr=or("deg"),lr=or("%"),cr=or("px"),dr=or("vh"),ur=or("vw"),pr={...lr,parse:e=>lr.parse(e)/100,transform:e=>lr.transform(100*e)},mr={...Jn,transform:Math.round},hr={borderWidth:cr,borderTopWidth:cr,borderRightWidth:cr,borderBottomWidth:cr,borderLeftWidth:cr,borderRadius:cr,radius:cr,borderTopLeftRadius:cr,borderTopRightRadius:cr,borderBottomRightRadius:cr,borderBottomLeftRadius:cr,width:cr,maxWidth:cr,height:cr,maxHeight:cr,size:cr,top:cr,right:cr,bottom:cr,left:cr,padding:cr,paddingTop:cr,paddingRight:cr,paddingBottom:cr,paddingLeft:cr,margin:cr,marginTop:cr,marginRight:cr,marginBottom:cr,marginLeft:cr,rotate:sr,rotateX:sr,rotateY:sr,rotateZ:sr,scale:er,scaleX:er,scaleY:er,scaleZ:er,skew:sr,skewX:sr,skewY:sr,distance:cr,translateX:cr,translateY:cr,translateZ:cr,x:cr,y:cr,z:cr,perspective:cr,transformPerspective:cr,opacity:Zn,originX:pr,originY:pr,originZ:cr,zIndex:mr,fillOpacity:Zn,strokeOpacity:Zn,numOctaves:mr};function fr(e,t,n,r){const{style:i,vars:a,transform:o,transformOrigin:s}=e;let l=!1,c=!1,d=!0;for(const u in t){const e=t[u];if(qn(u)){a[u]=e;continue}const n=hr[u],r=Xn(e,n);if(Vn.has(u)){if(l=!0,o[u]=r,!d)continue;e!==(n.default||0)&&(d=!1)}else u.startsWith("origin")?(c=!0,s[u]=r):i[u]=r}if(t.transform||(l||r?i.transform=function(e,t,n,r){let{enableHardwareAcceleration:i=!0,allowTransformNone:a=!0}=t,o="";for(let s=0;s<Gn;s++){const t=$n[s];void 0!==e[t]&&(o+=`${Wn[t]||t}(${e[t]}) `)}return i&&!e.z&&(o+="translateZ(0)"),o=o.trim(),r?o=r(e,n?"":o):a&&n&&(o="none"),o}(e.transform,n,d,r):i.transform&&(i.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const gr=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function xr(e,t,n){for(const r in t)Hn(t[r])||Un(r,n)||(e[r]=t[r])}function br(e,n,r){const i={};return xr(i,e.style||{},e),Object.assign(i,function(e,n,r){let{transformTemplate:i}=e;return(0,t.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return fr(e,n,{enableHardwareAcceleration:!r},i),Object.assign({},e.vars,e.style)}),[n])}(e,n,r)),e.transformValues?e.transformValues(i):i}function vr(e,t,n){const r={},i=br(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const yr=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wr(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yr.has(e)}let jr=e=>!wr(e);try{(Sr=require("@emotion/is-prop-valid").default)&&(jr=e=>e.startsWith("on")?!wr(e):Sr(e))}catch(Jj){}var Sr;function kr(e,t,n){return"string"===typeof e?e:cr.transform(t+n*e)}const Er={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cr={offset:"strokeDashoffset",array:"strokeDasharray"};function Ar(e,t,n,r,i){let{attrX:a,attrY:o,attrScale:s,originX:l,originY:c,pathLength:d,pathSpacing:u=1,pathOffset:p=0,...m}=t;if(fr(e,m,n,i),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:f,dimensions:g}=e;h.transform&&(g&&(f.transform=h.transform),delete h.transform),g&&(void 0!==l||void 0!==c||f.transform)&&(f.transformOrigin=function(e,t,n){return`${kr(t,e.x,e.width)} ${kr(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==a&&(h.x=a),void 0!==o&&(h.y=o),void 0!==s&&(h.scale=s),void 0!==d&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Er:Cr;e[a.offset]=cr.transform(-r);const o=cr.transform(t),s=cr.transform(n);e[a.array]=`${o} ${s}`}(h,d,u,p,!1)}const _r=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Pr=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Tr(e,n,r,i){const a=(0,t.useMemo)((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Ar(t,n,{enableHardwareAcceleration:!1},Pr(i),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n]);if(e.style){const t={};xr(t,e.style,e),a.style={...t,...a.style}}return a}function Rr(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,a,o)=>{let{latestValues:s}=a;const l=(On(n)?Tr:vr)(r,s,o,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(jr(i)||!0===n&&wr(i)||!t&&!wr(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,e),d={...c,...l,ref:i},{children:u}=r,p=(0,t.useMemo)((()=>Hn(u)?u.get():u),[u]);return(0,t.createElement)(n,{...d,children:p})}}function zr(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const Dr=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Fr(e,t,n,r){zr(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Dr.has(i)?i:vn(i),t.attrs[i])}function Nr(e,t){const{style:n}=e,r={};for(const i in n)(Hn(n[i])||t.style&&Hn(t.style[i])||Un(i,e))&&(r[i]=n[i]);return r}function Ir(e,t){const n=Nr(e,t);for(const r in e)if(Hn(e[r])||Hn(t[r])){n[-1!==$n.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function Mr(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}function Lr(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}const Or=e=>Array.isArray(e),Br=e=>Or(e)?e[e.length-1]||0:e;function $r(e){const t=Hn(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Vr=e=>(n,r)=>{const i=(0,t.useContext)(hn),a=(0,t.useContext)(fn),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a,onMount:o}=e;const s={latestValues:Ur(t,n,r,i),renderState:a()};return o&&(s.mount=e=>o(t,e,s)),s}(e,n,i,a);return r?o():Lr(o)};function Ur(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=$r(a[p]);let{initial:o,animate:s}=e;const l=Cn(e),c=An(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let d=!!n&&!1===n.initial;d=d||!1===o;const u=d?s:o;if(u&&"boolean"!==typeof u&&!Sn(u)){(Array.isArray(u)?u:[u]).forEach((t=>{const n=Mr(e,t);if(!n)return;const{transitionEnd:r,transition:a,...o}=n;for(const e in o){let t=o[e];if(Array.isArray(t)){t=t[d?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in r)i[e]=r[e]}))}return i}const Hr=e=>e;class Wr{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const Gr=["prepare","read","update","preRender","render","postRender"];const{schedule:Yr,cancel:qr,state:Kr,steps:Xr}=function(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=Gr.reduce(((e,t)=>(e[t]=function(e){let t=new Wr,n=new Wr,r=0,i=!1,a=!1;const o=new WeakSet,s={schedule:function(e){const a=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=a?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),s.add(e)&&a&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),o.delete(e)},process:l=>{if(i)a=!0;else{if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),o.has(r)&&(s.schedule(r),e())}i=!1,a&&(a=!1,s.process(l))}}};return s}((()=>n=!0)),e)),{}),o=e=>a[e].process(i),s=()=>{const a=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1),i.timestamp=a,i.isProcessing=!0,Gr.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=Gr.reduce(((t,o)=>{const l=a[o];return t[o]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),l.schedule(t,a,o)},t}),{});return{schedule:l,cancel:e=>Gr.forEach((t=>a[t].cancel(e))),state:i,steps:a}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Hr,!0),Qr={useVisualState:Vr({scrapeMotionValuesFromProps:Ir,createRenderState:_r,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;Yr.read((()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Qj){r.dimensions={x:0,y:0,width:0,height:0}}})),Yr.render((()=>{Ar(r,i,{enableHardwareAcceleration:!1},Pr(t.tagName),e.transformTemplate),Fr(t,r)}))}})},Jr={useVisualState:Vr({scrapeMotionValuesFromProps:Nr,createRenderState:gr})};function Zr(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const ei=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function ti(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function ni(e,t,n,r){return Zr(e,t,(e=>t=>ei(t)&&e(t,ti(t)))(n),r)}const ri=(e,t)=>n=>t(e(n)),ii=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(ri)};function ai(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const oi=ai("dragHorizontal"),si=ai("dragVertical");function li(e){let t=!1;if("y"===e)t=si();else if("x"===e)t=oi();else{const e=oi(),n=si();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function ci(){const e=li(!0);return!e||(e(),!1)}class di{constructor(e){this.isMounted=!1,this.node=e}update(){}}function ui(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return ni(e.current,n,((n,i)=>{if("touch"===n.pointerType||ci())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&Yr.update((()=>a[r](n,i)))}),{passive:!e.getProps()[r]})}const pi=(e,t)=>!!t&&(e===t||pi(e,t.parentElement));function mi(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ti(n))}const hi=new WeakMap,fi=new WeakMap,gi=e=>{const t=hi.get(e.target);t&&t(e)},xi=e=>{e.forEach(gi)};function bi(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;fi.has(r)||fi.set(r,{});const i=fi.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(xi,{root:t,...n})),i[a]}(t);return hi.set(e,n),r.observe(e),()=>{hi.delete(e),r.unobserve(e)}}const vi={some:0,all:1};const yi={inView:{Feature:class extends di{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:vi[r]};return bi(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends di{constructor(){super(...arguments),this.removeStartListeners=Hr,this.removeEndListeners=Hr,this.removeAccessibleListeners=Hr,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=ni(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();Yr.update((()=>{i||pi(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)}))}),{passive:!(n.onTap||n.onPointerUp)}),i=ni(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=ii(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=Zr(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=Zr(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&mi("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&Yr.update((()=>n(e,t)))}))})),mi("down",((e,t)=>{this.startPress(e,t)}))})),t=Zr(this.node.current,"blur",(()=>{this.isPressing&&mi("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=ii(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&Yr.update((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ci()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&Yr.update((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=ni(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=Zr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ii(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends di{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Qj){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ii(Zr(this.node.current,"focus",(()=>this.onFocus())),Zr(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends di{mount(){this.unmount=ii(ui(this.node,!0),ui(this.node,!1))}unmount(){}}}};function wi(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ji(e,t,n){const r=e.getProps();return Mr(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.getVelocity())),t}(e))}let Si=Hr,ki=Hr;const Ei=e=>1e3*e,Ci=e=>e/1e3,Ai=!1,_i=e=>Array.isArray(e)&&"number"===typeof e[0];function Pi(e){return Boolean(!e||"string"===typeof e&&Ri[e]||_i(e)||Array.isArray(e)&&e.every(Pi))}const Ti=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Ri={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ti([0,.65,.55,1]),circOut:Ti([.55,0,1,.45]),backIn:Ti([.31,.01,.66,-.59]),backOut:Ti([.33,1.53,.69,.99])};function zi(e){if(e)return _i(e)?Ti(e):Array.isArray(e)?e.map(zi):Ri[e]}const Di=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Fi(e,t,n,r){if(e===t&&n===r)return Hr;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=Di(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:Di(i(e),t,r)}const Ni=Fi(.42,0,1,1),Ii=Fi(0,0,.58,1),Mi=Fi(.42,0,.58,1),Li=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Oi=e=>t=>1-e(1-t),Bi=e=>1-Math.sin(Math.acos(e)),$i=Oi(Bi),Vi=Li(Bi),Ui=Fi(.33,1.53,.69,.99),Hi=Oi(Ui),Wi=Li(Hi),Gi={linear:Hr,easeIn:Ni,easeInOut:Mi,easeOut:Ii,circIn:Bi,circInOut:Vi,circOut:$i,backIn:Hi,backInOut:Wi,backOut:Ui,anticipate:e=>(e*=2)<1?.5*Hi(e):.5*(2-Math.pow(2,-10*(e-1)))},Yi=e=>{if(Array.isArray(e)){ki(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Fi(t,n,r,i)}return"string"===typeof e?(ki(void 0!==Gi[e],`Invalid easing type '${e}'`),Gi[e]):e},qi=(e,t)=>n=>Boolean(ar(n)&&ir.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ki=(e,t,n)=>r=>{if(!ar(r))return r;const[i,a,o,s]=r.match(nr);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Xi={...Jn,transform:e=>Math.round((e=>Qn(0,255,e))(e))},Qi={test:qi("rgb","red"),parse:Ki("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Xi.transform(t)+", "+Xi.transform(n)+", "+Xi.transform(r)+", "+tr(Zn.transform(i))+")"}};const Ji={test:qi("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Qi.transform},Zi={test:qi("hsl","hue"),parse:Ki("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+lr.transform(tr(n))+", "+lr.transform(tr(r))+", "+tr(Zn.transform(i))+")"}},ea={test:e=>Qi.test(e)||Ji.test(e)||Zi.test(e),parse:e=>Qi.test(e)?Qi.parse(e):Zi.test(e)?Zi.parse(e):Ji.parse(e),transform:e=>ar(e)?e:e.hasOwnProperty("red")?Qi.transform(e):Zi.transform(e)},ta=(e,t,n)=>-n*e+n*t+e;function na(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const ra=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},ia=[Ji,Qi,Zi];function aa(e){const t=(e=>ia.find((t=>t.test(e))))(e);ki(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===Zi&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=na(i,e,t+1/3),o=na(i,e,t),s=na(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const oa=(e,t)=>{const n=aa(e),r=aa(t),i={...n};return e=>(i.red=ra(n.red,r.red,e),i.green=ra(n.green,r.green,e),i.blue=ra(n.blue,r.blue,e),i.alpha=ta(n.alpha,r.alpha,e),Qi.transform(i))};const sa={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:Hr},la={regex:rr,countKey:"Colors",token:"${c}",parse:ea.parse},ca={regex:nr,countKey:"Numbers",token:"${n}",parse:Jn.parse};function da(e,t){let{regex:n,countKey:r,token:i,parse:a}=t;const o=e.tokenised.match(n);o&&(e["num"+r]=o.length,e.tokenised=e.tokenised.replace(n,i),e.values.push(...o.map(a)))}function ua(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&da(n,sa),da(n,la),da(n,ca),n}function pa(e){return ua(e).values}function ma(e){const{values:t,numColors:n,numVars:r,tokenised:i}=ua(e),a=t.length;return e=>{let t=i;for(let i=0;i<a;i++)t=i<r?t.replace(sa.token,e[i]):i<r+n?t.replace(la.token,ea.transform(e[i])):t.replace(ca.token,tr(e[i]));return t}}const ha=e=>"number"===typeof e?0:e;const fa={test:function(e){var t,n;return isNaN(e)&&ar(e)&&((null===(t=e.match(nr))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(rr))||void 0===n?void 0:n.length)||0)>0},parse:pa,createTransformer:ma,getAnimatableNone:function(e){const t=pa(e);return ma(e)(t.map(ha))}},ga=(e,t)=>n=>`${n>0?t:e}`;function xa(e,t){return"number"===typeof e?n=>ta(e,t,n):ea.test(e)?oa(e,t):e.startsWith("var(")?ga(e,t):ya(e,t)}const ba=(e,t)=>{const n=[...e],r=n.length,i=e.map(((e,n)=>xa(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},va=(e,t)=>{const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=xa(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}},ya=(e,t)=>{const n=fa.createTransformer(t),r=ua(e),i=ua(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?ii(ba(r.values,i.values),n):(Si(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),ga(e,t))},wa=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},ja=(e,t)=>n=>ta(e,t,n);function Sa(e,t,n){const r=[],i=n||function(e){return"number"===typeof e?ja:"string"===typeof e?ea.test(e)?oa:ya:Array.isArray(e)?ba:"object"===typeof e?va:ja}(e[0]),a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||Hr:t;n=ii(e,n)}r.push(n)}return r}function ka(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(ki(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=Sa(t,r,i),s=o.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=wa(e[n],e[n+1],t);return o[n](r)};return n?t=>l(Qn(e[0],e[a-1],t)):l}function Ea(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=wa(0,t,r);e.push(ta(n,1,i))}}(t,e.length-1),t}function Ca(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Yi):Yi(i),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Ea(n),t),l=ka(s,n,{ease:Array.isArray(a)?a:(c=n,d=a,c.map((()=>d||Mi)).splice(0,c.length-1))});var c,d;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}function Aa(e,t){return t?e*(1e3/t):0}function _a(e,t,n){const r=Math.max(t-5,0);return Aa(n-e(r),t-r)}const Pa=.001;function Ta(e){let t,n,{duration:r=800,bounce:i=.25,velocity:a=0,mass:o=1}=e;Si(r<=Ei(10),"Spring duration must be 10 seconds or less");let s=1-i;s=Qn(.05,1,s),r=Qn(.01,10,Ci(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=za(e,s),l=Math.exp(-n);return Pa-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=za(Math.pow(e,2),s);return(-t(e)+Pa>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Ra;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Ei(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const Ra=12;function za(e,t){return e*Math.sqrt(1-t*t)}const Da=["duration","bounce"],Fa=["stiffness","damping","mass"];function Na(e,t){return t.some((t=>void 0!==e[t]))}function Ia(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const a=t[0],o=t[t.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:m}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Na(e,Fa)&&Na(e,Da)){const n=Ta(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-Ci(i.velocity||0)}),h=p||0,f=c/(2*Math.sqrt(l*d)),g=o-a,x=Ci(Math.sqrt(l/d)),b=Math.abs(g)<5;let v;if(r||(r=b?.01:2),n||(n=b?.005:.5),f<1){const e=za(x,f);v=t=>{const n=Math.exp(-f*x*t);return o-n*((h+f*x*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===f)v=e=>o-Math.exp(-x*e)*(g+(h+x*g)*e);else{const e=x*Math.sqrt(f*f-1);v=t=>{const n=Math.exp(-f*x*t),r=Math.min(e*t,300);return o-n*((h+f*x*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:m&&u||null,next:e=>{const t=v(e);if(m)s.done=e>=u;else{let i=h;0!==e&&(i=f<1?_a(v,e,t):0);const a=Math.abs(i)<=r,l=Math.abs(o-t)<=n;s.done=a&&l}return s.value=s.done?o:t,s}}}function Ma(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:d=.5,restSpeed:u}=e;const p=t[0],m={done:!1,value:p},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let f=r*n;const g=p+f,x=void 0===s?g:s(g);x!==g&&(f=x-p);const b=e=>-f*Math.exp(-e/i),v=e=>x+b(e),y=e=>{const t=b(e),n=v(e);m.done=Math.abs(t)<=d,m.value=m.done?x:n};let w,j;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(m.value)&&(w=e,j=Ia({keyframes:[m.value,h(m.value)],velocity:_a(v,e,m.value),damping:a,stiffness:o,restDelta:d,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return j||void 0!==w||(t=!0,y(e),S(e)),void 0!==w&&e>w?j.next(e-w):(!t&&y(e),m)}}}const La=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>Yr.update(t,!0),stop:()=>qr(t),now:()=>Kr.isProcessing?Kr.timestamp:performance.now()}};function Oa(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const Ba={decay:Ma,inertia:Ma,tween:Ca,keyframes:Ca,spring:Ia};function $a(e){let t,n,{autoplay:r=!0,delay:i=0,driver:a=La,keyframes:o,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:d="loop",onPlay:u,onStop:p,onComplete:m,onUpdate:h,...f}=e,g=1,x=!1;const b=()=>{n=new Promise((e=>{t=e}))};let v;b();const y=Ba[s]||Ca;let w;y!==Ca&&"number"!==typeof o[0]&&(w=ka([0,100],o,{clamp:!1}),o=[0,100]);const j=y({...f,keyframes:o});let S;"mirror"===d&&(S=y({...f,keyframes:[...o].reverse(),velocity:-(f.velocity||0)}));let k="idle",E=null,C=null,A=null;null===j.calculatedDuration&&l&&(j.calculatedDuration=Oa(j));const{calculatedDuration:_}=j;let P=1/0,T=1/0;null!==_&&(P=_+c,T=P*(l+1)-c);let R=0;const z=e=>{if(null===C)return;g>0&&(C=Math.min(C,e)),g<0&&(C=Math.min(e-T/g,C)),R=null!==E?E:Math.round(e-C)*g;const t=R-i*(g>=0?1:-1),n=g>=0?t<0:t>T;R=Math.max(t,0),"finished"===k&&null===E&&(R=T);let r=R,a=j;if(l){const e=Math.min(R,T)/P;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===d?(n=1-n,c&&(n-=c/P)):"mirror"===d&&(a=S)),r=Qn(0,1,n)*P}const s=n?{done:!1,value:o[0]}:a.next(r);w&&(s.value=w(s.value));let{done:u}=s;n||null===_||(u=g>=0?R>=T:R<=0);const p=null===E&&("finished"===k||"running"===k&&u);return h&&h(s.value),p&&N(),s},D=()=>{v&&v.stop(),v=void 0},F=()=>{k="idle",D(),t(),b(),C=A=null},N=()=>{k="finished",m&&m(),D(),t()},I=()=>{if(x)return;v||(v=a(z));const e=v.now();u&&u(),null!==E?C=e-E:C&&"finished"!==k||(C=e),"finished"===k&&b(),A=C,E=null,k="running",v.start()};r&&I();const M={then:(e,t)=>n.then(e,t),get time(){return Ci(R)},set time(e){e=Ei(e),R=e,null===E&&v&&0!==g?C=v.now()-e/g:E=e},get duration(){const e=null===j.calculatedDuration?Oa(j):j.calculatedDuration;return Ci(e)},get speed(){return g},set speed(e){e!==g&&v&&(g=e,M.time=Ci(R))},get state(){return k},play:I,pause:()=>{k="paused",E=R},stop:()=>{x=!0,"idle"!==k&&(k="idle",p&&p(),F())},cancel:()=>{null!==A&&z(A),F()},complete:()=>{k="finished"},sample:e=>(C=0,z(e))};return M}const Va=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Ua=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function Ha(e,t,n){let{onUpdate:r,onComplete:i,...a}=n;if(!(Va()&&Ua.has(t)&&!a.repeatDelay&&"mirror"!==a.repeatType&&0!==a.damping&&"inertia"!==a.type))return!1;let o,s,l=!1,c=!1;const d=()=>{s=new Promise((e=>{o=e}))};d();let{keyframes:u,duration:p=300,ease:m,times:h}=a;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Pi(t.ease))(t,a)){const e=$a({...a,repeat:0,delay:0});let t={done:!1,value:u[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;h=void 0,u=n,p=r-10,m="linear"}const f=function(e,t,n){let{delay:r=0,duration:i,repeat:a=0,repeatType:o="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const d=zi(s);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"})}(e.owner.current,t,u,{...a,duration:p,ease:m,times:h}),g=()=>{c=!1,f.cancel()},x=()=>{c=!0,Yr.update(g),o(),d()};f.onfinish=()=>{c||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(u,a)),i&&i(),x())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(f.timeline=e,f.onfinish=null,Hr),get time(){return Ci(f.currentTime||0)},set time(e){f.currentTime=Ei(e)},get speed(){return f.playbackRate},set speed(e){f.playbackRate=e},get duration(){return Ci(p)},play:()=>{l||(f.play(),qr(g))},pause:()=>f.pause(),stop:()=>{if(l=!0,"idle"===f.playState)return;const{currentTime:t}=f;if(t){const n=$a({...a,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}x()},complete:()=>{c||f.finish()},cancel:x}}const Wa={type:"spring",stiffness:500,damping:25,restSpeed:10},Ga={type:"keyframes",duration:.8},Ya={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qa=(e,t)=>{let{keyframes:n}=t;return n.length>2?Ga:Vn.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Wa:Ya},Ka=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!fa.test(t)&&"0"!==t||t.startsWith("url("))),Xa=new Set(["brightness","contrast","saturate","opacity"]);function Qa(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(nr)||[];if(!r)return e;const i=n.replace(r,"");let a=Xa.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const Ja=/([a-z-]*)\(.*?\)/g,Za={...fa,getAnimatableNone:e=>{const t=e.match(Ja);return t?t.map(Qa).join(" "):e}},eo={...hr,color:ea,backgroundColor:ea,outlineColor:ea,fill:ea,stroke:ea,borderColor:ea,borderTopColor:ea,borderRightColor:ea,borderBottomColor:ea,borderLeftColor:ea,filter:Za,WebkitFilter:Za},to=e=>eo[e];function no(e,t){let n=to(e);return n!==Za&&(n=fa),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ro=e=>/^0[^.\s]+$/.test(e);function io(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||ro(e):void 0}function ao(e,t){return e[t]||e.default||e}const oo=!1,so=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const a=ao(r,e)||{},o=a.delay||r.delay||0;let{elapsed:s=0}=r;s-=Ei(o);const l=function(e,t,n,r){const i=Ka(t,n);let a;a=Array.isArray(n)?[...n]:[null,n];const o=void 0!==r.from?r.from:e.get();let s;const l=[];for(let c=0;c<a.length;c++)null===a[c]&&(a[c]=0===c?o:a[c-1]),io(a[c])&&l.push(c),"string"===typeof a[c]&&"none"!==a[c]&&"0"!==a[c]&&(s=a[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++)a[l[c]]=no(t,s);return a}(t,e,n,a),c=l[0],d=l[l.length-1],u=Ka(e,c),p=Ka(e,d);Si(u===p,`You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-s,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{i(),a.onComplete&&a.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:d,...u}=e;return!!Object.keys(u).length}(a)||(m={...m,...qa(e,m)}),m.duration&&(m.duration=Ei(m.duration)),m.repeatDelay&&(m.repeatDelay=Ei(m.repeatDelay)),!u||!p||Ai||!1===a.type||oo)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:i}=e;const a=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Hr,pause:Hr,stop:Hr,then:e=>(e(),Promise.resolve()),cancel:Hr,complete:Hr});return n?$a({keyframes:[0,1],duration:0,delay:n,onComplete:a}):a()}(Ai?{...m,delay:0}:m);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=Ha(t,e,m);if(n)return n}return $a(m)}};function lo(e){return Boolean(Hn(e)&&e.add)}const co=e=>/^\-?\d*\.?\d+$/.test(e);function uo(e,t){-1===e.indexOf(t)&&e.push(t)}function po(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class mo{constructor(){this.subscriptions=[]}add(e){return uo(this.subscriptions,e),()=>po(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ho={current:void 0};class fo{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:i}=Kr;t.lastUpdated!==i&&(t.timeDelta=r,t.lastUpdated=i,Yr.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>Yr.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new mo);const n=this.events[e].add(t);return"change"===e?()=>{n(),Yr.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ho.current&&ho.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Aa(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function go(e,t){return new fo(e,t)}const xo=e=>t=>t.test(e),bo=[Jn,cr,lr,sr,ur,dr,{test:e=>"auto"===e,parse:e=>e}],vo=e=>bo.find(xo(e)),yo=[...bo,ea,fa],wo=e=>yo.find(xo(e));function jo(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,go(n))}function So(e,t){const n=ji(e,t);let{transitionEnd:r={},transition:i={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const o in a){jo(e,o,Br(a[o]))}}function ko(e,t){if(!t)return;return(t[e]||t.default||t).from}function Eo(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Co(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function Ao(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(a=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u),r=s[u];if(!t||void 0===r||d&&Eo(d,u))continue;const i={delay:n,elapsed:0,...ao(a||{},u)};if(window.HandoffAppearAnimations){const n=e.getProps()[yn];if(n){const e=window.HandoffAppearAnimations(n,u,t,Yr);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let o=!i.isHandoff&&!Co(t,r);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(o=!1),t.animation&&(o=!1),o)continue;t.start(so(u,t,r,e.shouldReduceMotion&&Vn.has(u)?{type:!1}:i));const p=t.animation;lo(l)&&(l.add(u),p.then((()=>l.remove(u)))),c.push(p)}return o&&Promise.all(c).then((()=>{o&&So(e,o)})),c}function _o(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=ji(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Ao(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(Po).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(_o(e,t,{...a,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then((()=>t()))}return Promise.all([a(),o(n.delay)])}function Po(e,t){return e.sortNodePosition(t)}const To=[...kn].reverse(),Ro=kn.length;function zo(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>_o(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=_o(e,t,r);else{const i="function"===typeof t?ji(e,t,r.custom):t;n=Promise.all(Ao(e,i,r))}return n.then((()=>e.notify("AnimationComplete",t)))}(e,n,r)})))}function Do(e){let t=zo(e);const n={animate:No(!0),whileInView:No(),whileHover:No(),whileTap:No(),whileDrag:No(),whileFocus:No(),exit:No()};let r=!0;const i=(t,n)=>{const r=ji(e,n);if(r){const{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function a(a,o){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],d=new Set;let u={},p=1/0;for(let t=0;t<Ro;t++){const m=To[t],h=n[m],f=void 0!==s[m]?s[m]:l[m],g=jn(f),x=m===o?h.isActive:null;!1===x&&(p=t);let b=f===l[m]&&f!==s[m]&&g;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...u},!h.isActive&&null===x||!f&&!h.prevProp||Sn(f)||"boolean"===typeof f)continue;let v=Fo(h.prevProp,f)||m===o&&h.isActive&&!b&&g||t>p&&g,y=!1;const w=Array.isArray(f)?f:[f];let j=w.reduce(i,{});!1===x&&(j={});const{prevResolvedValues:S={}}=h,k={...S,...j},E=e=>{v=!0,d.has(e)&&(y=!0,d.delete(e)),h.needsAnimating[e]=!0};for(const e in k){const t=j[e],n=S[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Or(t)&&Or(n)?!wi(t,n):t!==n,r?void 0!==t?E(e):d.add(e):void 0!==t&&d.has(e)?E(e):h.protectedKeys[e]=!0}h.prevProp=f,h.prevResolvedValues=j,h.isActive&&(u={...u,...j}),r&&e.blockInitialAnimation&&(v=!1),!v||b&&!y||c.push(...w.map((e=>({animation:e,options:{type:m,...a}}))))}if(d.size){const t={};d.forEach((n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)})),c.push({animation:t})}let m=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(m=!1),r=!1,m?t(c):Promise.resolve()}return{animateChanges:a,setActive:function(t,r,i){var o;if(n[t].isActive===r)return Promise.resolve();null===(o=e.variantChildren)||void 0===o||o.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const s=a(i,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function Fo(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!wi(t,e)}function No(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let Io=0;const Mo={animation:{Feature:class extends di{constructor(e){super(e),e.animationState||(e.animationState=Do(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Sn(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends di{constructor(){super(...arguments),this.id=Io++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&i.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Lo=(e,t)=>Math.abs(e-t);class Oo{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Vo(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Lo(e.x,t.x),r=Lo(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Kr;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Bo(t,this.transformPagePoint),Yr.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Vo("pointercancel"===e.type?this.lastMoveEventInfo:Bo(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!ei(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=Bo(ti(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=Kr;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Vo(a,this.history)),this.removeListeners=ii(ni(this.contextWindow,"pointermove",this.handlePointerMove),ni(this.contextWindow,"pointerup",this.handlePointerUp),ni(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),qr(this.updatePoint)}}function Bo(e,t){return t?{point:t(e.point)}:e}function $o(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Vo(e,t){let{point:n}=e;return{point:n,delta:$o(n,Ho(t)),offset:$o(n,Uo(t)),velocity:Wo(t,.1)}}function Uo(e){return e[0]}function Ho(e){return e[e.length-1]}function Wo(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Ho(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ei(t)));)n--;if(!r)return{x:0,y:0};const a=Ci(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Go(e){return e.max-e.min}function Yo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function qo(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=ta(t.min,t.max,e.origin),e.scale=Go(n)/Go(t),(Yo(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ta(n.min,n.max,e.origin)-e.originPoint,(Yo(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ko(e,t,n,r){qo(e.x,t.x,n.x,r?r.originX:void 0),qo(e.y,t.y,n.y,r?r.originY:void 0)}function Xo(e,t,n){e.min=n.min+t.min,e.max=e.min+Go(t)}function Qo(e,t,n){e.min=t.min-n.min,e.max=e.min+Go(t)}function Jo(e,t,n){Qo(e.x,t.x,n.x),Qo(e.y,t.y,n.y)}function Zo(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function es(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const ts=.35;function ns(e,t,n){return{min:rs(e,t),max:rs(e,n)}}function rs(e,t){return"number"===typeof e?e:e[t]||0}function is(e){return[e("x"),e("y")]}function as(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function os(e){return void 0===e||1===e}function ss(e){let{scale:t,scaleX:n,scaleY:r}=e;return!os(t)||!os(n)||!os(r)}function ls(e){return ss(e)||cs(e)||e.z||e.rotate||e.rotateX||e.rotateY}function cs(e){return ds(e.x)||ds(e.y)}function ds(e){return e&&"0%"!==e}function us(e,t,n){return n+t*(e-n)}function ps(e,t,n,r,i){return void 0!==i&&(e=us(e,i,r)),us(e,n,r)+t}function ms(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=ps(e.min,t,n,r,i),e.max=ps(e.max,t,n,r,i)}function hs(e,t){let{x:n,y:r}=t;ms(e.x,n.translate,n.scale,n.originPoint),ms(e.y,r.translate,r.scale,r.originPoint)}function fs(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function gs(e,t){e.min=e.min+t,e.max=e.max+t}function xs(e,t,n){let[r,i,a]=n;const o=void 0!==t[a]?t[a]:.5,s=ta(e.min,e.max,o);ms(e,t[r],t[i],s,t.scale)}const bs=["x","scaleX","originX"],vs=["y","scaleY","originY"];function ys(e,t){xs(e.x,t,bs),xs(e.y,t,vs)}function ws(e,t){return as(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const js=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},Ss=new WeakMap;class ks{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Oo(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ti(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=li(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),is((e=>{let t=this.getAxisMotionValue(e).get()||0;if(lr.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Go(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&Yr.update((()=>i(e,t)),!1,!0);const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>is((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:js(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&Yr.update((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Es(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?ta(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?ta(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&wn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:Zo(e.x,r,a),y:Zo(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ts;return!1===e?e=0:!0===e&&(e=ts),{x:ns(e,"left","right"),y:ns(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&is((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!wn(e))return!1;const n=e.current;ki(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=ws(e,n),{scroll:i}=t;return i&&(gs(r.x,i.offset.x),gs(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:es(e.x,t.x),y:es(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=as(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=is((o=>{if(!Es(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,d=r?40:1e7,u={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,u)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(so(e,n,0,t))}stopAnimation(){is((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){is((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){is((t=>{const{drag:n}=this.getProps();if(!Es(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-ta(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!wn(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};is((e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=Go(e),i=Go(t);return i>r?n=wa(t.min,t.max-r,e.min):r>i&&(n=wa(e.min,e.max-i,t.min)),Qn(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),is((t=>{if(!Es(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(ta(i,a,r[t]))}))}addListeners(){if(!this.visualElement.current)return;Ss.set(this.visualElement,this);const e=ni(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();wn(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const i=Zr(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(is((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ts,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function Es(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Cs=e=>(t,n)=>{e&&Yr.update((()=>e(t,n)))};const As={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _s(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ps={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!cr.test(e))return e;e=parseFloat(e)}return`${_s(e,t.target.x)}% ${_s(e,t.target.y)}%`}},Ts={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=fa.parse(e);if(a.length>5)return i;const o=fa.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const d=ta(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=d),"number"===typeof a[3+s]&&(a[3+s]/=d),o(a)}};class Rs extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var a;a=Ds,Object.assign(Bn,a),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),As.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Yr.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function zs(e){const[n,r]=function(){const e=(0,t.useContext)(fn);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,a=(0,t.useId)();return(0,t.useEffect)((()=>i(a)),[]),!n&&r?[!1,()=>r&&r(a)]:[!0]}(),i=(0,t.useContext)(zn);return t.createElement(Rs,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(Dn),isPresent:n,safeToRemove:r})}const Ds={borderRadius:{...Ps,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ps,borderTopRightRadius:Ps,borderBottomLeftRadius:Ps,borderBottomRightRadius:Ps,boxShadow:Ts},Fs=["TopLeft","TopRight","BottomLeft","BottomRight"],Ns=Fs.length,Is=e=>"string"===typeof e?parseFloat(e):e,Ms=e=>"number"===typeof e||cr.test(e);function Ls(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Os=$s(0,.5,$i),Bs=$s(.5,.95,Hr);function $s(e,t,n){return r=>r<e?0:r>t?1:n(wa(e,t,r))}function Vs(e,t){e.min=t.min,e.max=t.max}function Us(e,t){Vs(e.x,t.x),Vs(e.y,t.y)}function Hs(e,t,n,r,i){return e=us(e-=t,1/n,r),void 0!==i&&(e=us(e,1/i,r)),e}function Ws(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;lr.test(t)&&(t=parseFloat(t),t=ta(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=ta(a.min,a.max,r);e===a&&(s-=t),e.min=Hs(e.min,t,n,s,i),e.max=Hs(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Gs=["x","scaleX","originX"],Ys=["y","scaleY","originY"];function qs(e,t,n,r){Ws(e.x,t,Gs,n?n.x:void 0,r?r.x:void 0),Ws(e.y,t,Ys,n?n.y:void 0,r?r.y:void 0)}function Ks(e){return 0===e.translate&&1===e.scale}function Xs(e){return Ks(e.x)&&Ks(e.y)}function Qs(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Js(e){return Go(e.x)/Go(e.y)}class Zs{constructor(){this.members=[]}add(e){uo(this.members,e),e.scheduleRender()}remove(e){if(po(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function el(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y;if((i||a)&&(r=`translate3d(${i}px, ${a}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}const o=e.x.scale*t.x,s=e.y.scale*t.y;return 1===o&&1===s||(r+=`scale(${o}, ${s})`),r||"none"}const tl=(e,t)=>e.depth-t.depth;class nl{constructor(){this.children=[],this.isDirty=!1}add(e){uo(this.children,e),this.isDirty=!0}remove(e){po(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(tl),this.isDirty=!1,this.children.forEach(e)}}const rl=["","X","Y","Z"],il={visibility:"hidden"};let al=0;const ol={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function sl(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=al++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ol.totalNodes=ol.resolvedTargetDeltas=ol.recalculatedProjection=0,this.nodes.forEach(dl),this.nodes.forEach(xl),this.nodes.forEach(bl),this.nodes.forEach(ul),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(ol)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new nl)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new mo),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(qr(r),e(o-t))};return Yr.read(r,!0),()=>qr(r)}(r,250),As.hasAnimatedSinceResize&&(As.hasAnimatedSinceResize=!1,this.nodes.forEach(gl))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||kl,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!Qs(this.targetLayout,i)||r,d=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||d||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,d);const e={...ao(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||gl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,qr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(vl),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(ml);this.isUpdating||this.nodes.forEach(hl),this.isUpdating=!1,this.nodes.forEach(fl),this.nodes.forEach(ll),this.nodes.forEach(cl),this.clearAllSnapshots();const e=performance.now();Kr.delta=Qn(0,1e3/60,e-Kr.timestamp),Kr.timestamp=e,Kr.isProcessing=!0,Xr.update.process(Kr),Xr.preRender.process(Kr),Xr.render.process(Kr),Kr.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(pl),this.sharedNodes.forEach(yl)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Yr.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Yr.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!Xs(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||ls(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Al((r=n).x),Al(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(gs(t.x,n.offset.x),gs(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Us(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;if(r!==this.root&&i&&a.layoutScroll){if(i.isRoot){Us(t,e);const{scroll:n}=this.root;n&&(gs(t.x,-n.offset.x),gs(t.y,-n.offset.y))}gs(t.x,i.offset.x),gs(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Us(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&ys(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),ls(e.latestValues)&&ys(n,e.latestValues)}return ls(this.latestValues)&&ys(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Us(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!ls(e.latestValues))continue;ss(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Us(r,e.measurePageBox()),qs(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return ls(this.latestValues)&&qs(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Kr.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:a}=this.options;if(this.layout&&(i||a)){if(this.resolvedRelativeTargetAt=Kr.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Jo(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Us(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,Xo(o.x,s.x,l.x),Xo(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Us(this.target,this.layout.layoutBox),hs(this.target,this.targetDelta)):Us(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Jo(this.relativeTargetOrigin,this.target,e.target),Us(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ol.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!ss(this.parent.latestValues)&&!cs(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===Kr.timestamp&&(r=!1),r)return;const{layout:i,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!a)return;Us(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const i=a.instance;i&&i.style&&"contents"===i.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ys(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,hs(e,o)),r&&ls(a.latestValues)&&ys(e,a.latestValues))}t.x=fs(t.x),t.y=fs(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;Ko(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=el(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===o&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),ol.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,d=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Sl));let u;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;var l,p,m,h;wl(a.x,e.x,n),wl(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jo(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),l=this.relativeTarget,p=this.relativeTargetOrigin,m=o,h=n,jl(l.x,p.x,m.x,h),jl(l.y,p.y,m.y,h),u&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u={x:{min:0,max:0},y:{min:0,max:0}}),Us(u,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=ta(0,void 0!==n.opacity?n.opacity:1,Os(r)),e.opacityExit=ta(void 0!==t.opacity?t.opacity:1,0,Bs(r))):a&&(e.opacity=ta(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let o=0;o<Ns;o++){const i=`border${Fs[o]}Radius`;let a=Ls(t,i),s=Ls(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Ms(a)===Ms(s)?(e[i]=Math.max(ta(Is(a),Is(s),r),0),(lr.test(s)||lr.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=ta(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(qr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Yr.update((()=>{As.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=Hn(e)?e:go(e);return r.start(so("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&_l(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Go(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Go(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Us(t,n),ys(t,i),Ko(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Zs);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let i=0;i<rl.length;i++){const t="rotate"+rl[i];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const i in r)e.setStaticValue(i,r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return il;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=$r(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=$r(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!ls(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),r.transform=el(this.projectionDeltaWithTransform,this.treeScale,o),i&&(r.transform=i(o,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?r.opacity=a===this?null!==(n=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:r.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const c in Bn){if(void 0===o[c])continue;const{correct:e,applyTo:t}=Bn[c],n="none"===r.transform?o[c]:e(o[c],a);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=a===this?$r(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(ml),this.root.sharedNodes.clear()}}}function ll(e){e.updateLayout()}function cl(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,a=n.source!==e.layout.source;"size"===i?is((e=>{const r=a?n.measuredBox[e]:n.layoutBox[e],i=Go(r);r.min=t[e].min,r.max=r.min+i})):_l(i,n.layoutBox,t)&&is((r=>{const i=a?n.measuredBox[r]:n.layoutBox[r],o=Go(t[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Ko(o,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Ko(s,e.applyTransform(r,!0),n.measuredBox):Ko(s,t,n.layoutBox);const l=!Xs(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Jo(o,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Jo(s,t,a.layoutBox),Qs(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function dl(e){ol.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ul(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function pl(e){e.clearSnapshot()}function ml(e){e.clearMeasurements()}function hl(e){e.isLayoutDirty=!1}function fl(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function gl(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xl(e){e.resolveTargetDelta()}function bl(e){e.calcProjection()}function vl(e){e.resetRotation()}function yl(e){e.removeLeadSnapshot()}function wl(e,t,n){e.translate=ta(t.translate,0,n),e.scale=ta(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function jl(e,t,n,r){e.min=ta(t.min,n.min,r),e.max=ta(t.max,n.max,r)}function Sl(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const kl={duration:.45,ease:[.4,0,.1,1]},El=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Cl=El("applewebkit/")&&!El("chrome/")?Math.round:Hr;function Al(e){e.min=Cl(e.min),e.max=Cl(e.max)}function _l(e,t,n){return"position"===e||"preserve-aspect"===e&&!Yo(Js(t),Js(n),.2)}const Pl=sl({attachResizeListener:(e,t)=>Zr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Tl={current:void 0},Rl=sl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Tl.current){const e=new Pl({});e.mount(window),e.setOptions({layoutScroll:!0}),Tl.current=e}return Tl.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),zl={pan:{Feature:class extends di{constructor(){super(...arguments),this.removePointerDownListener=Hr}onPointerDown(e){this.session=new Oo(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:js(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Cs(e),onStart:Cs(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&Yr.update((()=>r(e,t)))}}}mount(){this.removePointerDownListener=ni(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends di{constructor(e){super(e),this.removeGroupControls=Hr,this.removeListeners=Hr,this.controls=new ks(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Hr}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Rl,MeasureLayout:zs}},Dl=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Fl(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;ki(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=Dl.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return co(e)?parseFloat(e):e}return Kn(i)?Fl(i,t,n+1):i}const Nl=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Il=e=>Nl.has(e),Ml=e=>e===Jn||e===cr,Ll=(e,t)=>parseFloat(e.split(", ")[t]),Ol=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const a=i.match(/^matrix3d\((.+)\)$/);if(a)return Ll(a[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?Ll(t[1],e):0}},Bl=new Set(["x","y","z"]),$l=$n.filter((e=>!Bl.has(e)));const Vl={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:Ol(4,13),y:Ol(5,14)};Vl.translateX=Vl.x,Vl.translateY=Vl.y;const Ul=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const i=Object.keys(t).filter(Il);let a=[],o=!1;const s=[];if(i.forEach((i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let c=n[i],d=vo(c);const u=t[i];let p;if(Or(u)){const e=u.length,t=null===u[0]?1:0;c=u[t],d=vo(c);for(let n=t;n<e&&null!==u[n];n++)p?ki(vo(u[n])===p,"All keyframes must be of the same type"):(p=vo(u[n]),ki(p===d||Ml(d)&&Ml(p),"Keyframes must be of the same dimension as the current value"))}else p=vo(u);if(d!==p)if(Ml(d)&&Ml(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof u?t[i]=parseFloat(u):Array.isArray(u)&&p===cr&&(t[i]=u.map(parseFloat))}else(null===d||void 0===d?void 0:d.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===u)?0===c?l.set(p.transform(c)):t[i]=d.transform(u):(o||(a=function(e){const t=[];return $l.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),o=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],l.jump(u))})),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,n)=>{const r=t.measureViewportBox(),i=t.current,a=getComputedStyle(i),{display:o}=a,s={};"none"===o&&t.setStaticValue("display",e.display||"block"),n.forEach((e=>{s[e]=Vl[e](r,a)})),t.render();const l=t.measureViewportBox();return n.forEach((n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=Vl[n](l,a)})),e})(t,e,s);return a.length&&a.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),e.render(),gn&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}return{target:t,transitionEnd:r}};function Hl(e,t,n,r){return(e=>Object.keys(e).some(Il))(t)?Ul(e,t,n,r):{target:t,transitionEnd:r}}const Wl=(e,t,n,r)=>{const i=function(e,t,n){let{...r}=t;const i=e.current;if(!(i instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach((e=>{const t=e.get();if(!Kn(t))return;const n=Fl(t,i);n&&e.set(n)}));for(const a in r){const e=r[a];if(!Kn(e))continue;const t=Fl(e,i);t&&(r[a]=t,n||(n={}),void 0===n[a]&&(n[a]=e))}return{target:r,transitionEnd:n}}(e,t,r);return Hl(e,t=i.target,n,r=i.transitionEnd)},Gl={current:null},Yl={current:!1};const ql=new WeakMap,Kl=Object.keys(Rn),Xl=Kl.length,Ql=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Jl=En.length;class Zl{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:a}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Yr.render(this.render,!1,!0);const{latestValues:s,renderState:l}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Cn(n),this.isVariantNode=An(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(n,{});for(const u in d){const e=d[u];void 0!==s[u]&&Hn(e)&&(e.set(s[u],!1),lo(c)&&c.add(u))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,ql.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Yl.current||function(){if(Yl.current=!0,gn)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gl.current=e.matches;e.addListener(t),t()}else Gl.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Gl.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ql.delete(this.current),this.projection&&this.projection.unmount(),qr(this.notifyUpdate),qr(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=Vn.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Yr.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{r(),i()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let i,a,{children:o,...s}=e;for(let l=0;l<Xl;l++){const e=Kl[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:o}=Rn[e];r&&(i=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),o&&(a=o))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:a,layoutScroll:o,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||a&&wn(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Ql.length;n++){const t=Ql[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const i in t){const a=t[i],o=n[i];if(Hn(a))e.addValue(i,a),lo(r)&&r.add(i);else if(Hn(o))e.addValue(i,go(a,{owner:e})),lo(r)&&r.remove(i);else if(o!==a)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(a)}else{const t=e.getStaticValue(i);e.addValue(i,go(void 0!==t?t:a,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<Jl;t++){const n=En[t],r=this.props[n];(jn(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=go(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=Mr(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||Hn(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new mo),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class ec extends Zl{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:i,...a}=e,{transformValues:o}=t,s=function(e,t,n){const r={};for(const i in e){const e=ko(i,t);if(void 0!==e)r[i]=e;else{const e=n.getValue(i);e&&(r[i]=e.get())}}return r}(a,r||{},this);if(o&&(i&&(i=o(i)),a&&(a=o(a)),s&&(s=o(s))),n){!function(e,t,n){var r,i;const a=Object.keys(t).filter((t=>!e.hasValue(t))),o=a.length;if(o)for(let s=0;s<o;s++){const o=a[s],l=t[o];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(i=null!==(r=n[o])&&void 0!==r?r:e.readValue(o))&&void 0!==i?i:t[o]),void 0!==c&&null!==c&&("string"===typeof c&&(co(c)||ro(c))?c=parseFloat(c):!wo(c)&&fa.test(l)&&(c=no(o,l)),e.addValue(o,go(c,{owner:e})),void 0===n[o]&&(n[o]=c),null!==c&&e.setBaseTarget(o,c))}}(this,a,s);const e=Wl(this,a,s,i);i=e.transitionEnd,a=e.target}return{transition:r,transitionEnd:i,...a}}}class tc extends ec{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(Vn.has(t)){const e=to(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(qn(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return ws(e,n)}build(e,t,n,r){fr(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Nr(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Hn(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,n,r){zr(e,t,n,r)}}class nc extends ec{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Vn.has(t)){const e=to(t);return e&&e.default||0}return t=Dr.has(t)?t:vn(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return Ir(e,t)}build(e,t,n,r){Ar(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){Fr(e,t,0,r)}mount(e){this.isSVGTag=Pr(e.tagName),super.mount(e)}}const rc=(e,t)=>On(e)?new nc(t,{enableHardwareAcceleration:!1}):new tc(t,{enableHardwareAcceleration:!0}),ic={...Mo,...yi,...zl,...{layout:{ProjectionNode:Rl,MeasureLayout:zs}}},ac=Mn(((e,t)=>function(e,t,n,r){let{forwardMotionProps:i=!1}=t;return{...On(e)?Qr:Jr,preloadedFeatures:n,useRender:Rr(i),createVisualElement:r,Component:e}}(e,t,ic,rc)));function oc(){const e=(0,t.useRef)(!1);return xn((()=>(e.current=!0,()=>{e.current=!1})),[]),e}class sc extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function lc(e){let{children:n,isPresent:r}=e;const i=(0,t.useId)(),a=(0,t.useRef)(null),o=(0,t.useRef)({width:0,height:0,top:0,left:0});return(0,t.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:s}=o.current;if(r||!a.current||!e||!t)return;a.current.dataset.motionPopId=i;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),t.createElement(sc,{isPresent:r,childRef:a,sizeRef:o},t.cloneElement(n,{ref:a}))}const cc=e=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l}=e;const c=Lr(dc),d=(0,t.useId)(),u=(0,t.useMemo)((()=>({id:d,initial:r,isPresent:i,custom:o,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;a&&a()},register:e=>(c.set(e,!1),()=>c.delete(e))})),s?void 0:[i]);return(0,t.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[i]),t.useEffect((()=>{!i&&!c.size&&a&&a()}),[i]),"popLayout"===l&&(n=t.createElement(lc,{isPresent:i},n)),t.createElement(fn.Provider,{value:u},n)};function dc(){return new Map}const uc=e=>e.key||"";const pc=e=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,exitBeforeEnter:o,presenceAffectsLayout:s=!0,mode:l="sync"}=e;ki(!o,"Replace exitBeforeEnter with mode='wait'");const c=(0,t.useContext)(zn).forceRender||function(){const e=oc(),[n,r]=(0,t.useState)(0),i=(0,t.useCallback)((()=>{e.current&&r(n+1)}),[n]);return[(0,t.useCallback)((()=>Yr.postRender(i)),[i]),n]}()[0],d=oc(),u=function(e){const n=[];return t.Children.forEach(e,(e=>{(0,t.isValidElement)(e)&&n.push(e)})),n}(n);let p=u;const m=(0,t.useRef)(new Map).current,h=(0,t.useRef)(p),f=(0,t.useRef)(new Map).current,g=(0,t.useRef)(!0);var x;if(xn((()=>{g.current=!1,function(e,t){e.forEach((e=>{const n=uc(e);t.set(n,e)}))}(u,f),h.current=p})),x=()=>{g.current=!0,f.clear(),m.clear()},(0,t.useEffect)((()=>()=>x()),[]),g.current)return t.createElement(t.Fragment,null,p.map((e=>t.createElement(cc,{key:uc(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:s,mode:l},e))));p=[...p];const b=h.current.map(uc),v=u.map(uc),y=b.length;for(let t=0;t<y;t++){const e=b[t];-1!==v.indexOf(e)||m.has(e)||m.set(e,void 0)}return"wait"===l&&m.size&&(p=[]),m.forEach(((e,n)=>{if(-1!==v.indexOf(n))return;const i=f.get(n);if(!i)return;const o=b.indexOf(n);let g=e;if(!g){const e=()=>{m.delete(n);const e=Array.from(f.keys()).filter((e=>!v.includes(e)));if(e.forEach((e=>f.delete(e))),h.current=u.filter((t=>{const r=uc(t);return r===n||e.includes(r)})),!m.size){if(!1===d.current)return;c(),a&&a()}};g=t.createElement(cc,{key:uc(i),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},i),m.set(n,g)}p.splice(o,0,g)})),p=p.map((e=>{const n=e.key;return m.has(n)?e:t.createElement(cc,{key:uc(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)})),t.createElement(t.Fragment,null,m.size?p:p.map((e=>(0,t.cloneElement)(e))))};var mc=n(579);const hc=dn(ac.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: ${e=>e.scrolled?"rgba(255, 248, 231, 0.95)":"rgba(255, 248, 231, 0.8)"};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 153, 51, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${e=>e.scrolled?"0 10px 40px rgba(0, 0, 0, 0.1)":"none"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${e=>e.theme.colors.gradient.primary};
    opacity: ${e=>e.scrolled?1:0};
    transition: opacity 0.5s ease;
  }
`,fc=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,gc=dn(ac.div)`
  font-family: ${e=>e.theme.fonts.heading};
  font-size: 2.2rem;
  font-weight: 800;
  background: ${e=>e.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${e=>e.theme.colors.gradient.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`,xc=dn(ac.span)`
  font-size: 2.8rem;
  background: ${e=>e.theme.colors.gradient.divine};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 10px rgba(218, 165, 32, 0.5));
`,bc=dn.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    display: none;
  }
`,vc=dn(Ae)`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${e=>e.theme.colors.text};
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border-radius: 25px;

  &:hover {
    color: ${e=>e.theme.colors.primary};
    background: rgba(255, 153, 51, 0.1);
    transform: translateY(-2px);
  }

  &.active {
    color: ${e=>e.theme.colors.primary};
    background: rgba(255, 153, 51, 0.15);
    box-shadow: 0 5px 15px rgba(255, 153, 51, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: ${e=>e.theme.colors.gradient.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::before,
  &.active::before {
    width: 80%;
  }
`,yc=dn(ac.button)`
  display: none;
  background: ${e=>e.theme.colors.gradient.primary};
  color: white;
  font-size: 1.5rem;
  padding: 0.8rem;
  border-radius: 12px;
  box-shadow: ${e=>e.theme.shadows.button};

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,wc=dn(ac.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 248, 231, 0.98);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 153, 51, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`,jc=dn(Ae)`
  display: block;
  padding: 1.5rem 0;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.text};
  border-bottom: 1px solid rgba(255, 153, 51, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover,
  &.active {
    color: ${e=>e.theme.colors.primary};
    padding-left: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 100%;
    background: rgba(255, 153, 51, 0.1);
    transition: width 0.3s ease;
  }

  &:hover::before,
  &.active::before {
    width: 4px;
  }
`,Sc=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1),a=X();(0,t.useEffect)((()=>{const e=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const o=[{path:"/",label:"Home"},{path:"/temples",label:"Temples"},{path:"/book-puja",label:"Book Puja"},{path:"/live-darshan",label:"Live Darshan"},{path:"/shop",label:"Shop"},{path:"/bhajans",label:"Bhajans"},{path:"/login",label:"Login"}];return(0,mc.jsxs)(hc,{scrolled:e,initial:{y:-100},animate:{y:0},transition:{duration:.8,ease:"easeOut"},children:[(0,mc.jsxs)(fc,{children:[(0,mc.jsxs)(gc,{whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,mc.jsx)(xc,{animate:{filter:["drop-shadow(0 0 10px rgba(218, 165, 32, 0.5))","drop-shadow(0 0 20px rgba(255, 153, 51, 0.8))","drop-shadow(0 0 10px rgba(218, 165, 32, 0.5))"]},transition:{duration:3,repeat:Number.POSITIVE_INFINITY,repeatType:"reverse"},children:"\u0950"}),"DevotionHub"]}),(0,mc.jsx)(bc,{children:o.map(((e,t)=>(0,mc.jsx)(ac.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:(0,mc.jsx)(vc,{to:e.path,className:a.pathname===e.path?"active":"",children:e.label})},e.path)))}),(0,mc.jsx)(yc,{onClick:()=>i(!r),whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2630"})]}),(0,mc.jsx)(pc,{children:r&&(0,mc.jsx)(wc,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.4,ease:"easeInOut"},children:o.map(((e,t)=>(0,mc.jsx)(ac.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.1*t},children:(0,mc.jsx)(jc,{to:e.path,className:a.pathname===e.path?"active":"",onClick:()=>i(!1),children:e.label})},e.path)))})})]})},kc=n.p+"static/media/India.be129e8a07b5ea938c51.png";var Ec=n(93);const Cc=dn.div`
  min-height: 100vh;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 80px;
  }
`,Ac=dn.section`
  background: linear-gradient(
    135deg,
    ${e=>e.theme.colors.background},
    rgba(255, 153, 51, 0.1)
  );
  text-align: center;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`,_c=dn(ac.h1)`
  font-size: 2.1rem;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
`,Pc=dn(ac.p)`
  font-size: 1rem;
  color: ${e=>e.theme.colors.darkGray};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 100%;
  }
`,Tc=dn.section`
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`,Rc=dn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px 20px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 0 8px 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    padding: 0 6px 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 4px 8px;
  }
`,zc=dn(ac.div)`
  background: ${e=>e.theme.colors.white};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`,Dc=dn.div`
  height: 200px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`,Fc=dn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Nc=dn.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Ic=dn.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
`,Mc=dn.p`
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }
`,Lc=dn.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  gap: 0.4rem;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
    gap: 0.3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    gap: 0.25rem;
  }
`,Oc=dn.span`
  color: ${e=>e.theme.colors.darkGray};
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Bc=dn.span`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,$c=dn.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-top: 1rem;
    flex-direction: column;
  }
`,Vc=dn(ac.button)`
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  background: transparent;
  color: ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.primary};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 153, 51, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`,Uc=dn(ac.button)`
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.85rem;
    
    &:hover {
      transform: translateY(-1px);
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`,Hc=dn.button`
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &.primary {
    background: ${e=>e.theme.colors.primary};
    color: white;

    &:hover {
      background: ${e=>e.theme.colors.gold};
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: ${e=>e.theme.colors.primary};
    border: 2px solid ${e=>e.theme.colors.primary};

    &:hover {
      background: ${e=>e.theme.colors.primary};
      color: white;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
    
    &.primary:hover,
    &.secondary:hover {
      transform: translateY(-1px);
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`,Wc=[{name:"All",image:kc},{name:"Ayodhya",image:"https://imgs.search.brave.com/zS0HKW7iNh0nSlY3OeRWSghw0Vi4GTC9seiFCaXkL9k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk0/MDkyNjg2Ny9waG90/by9hLWdlbmVyYWwt/dmlldy1vZi1hLXRl/bXBsZS10by1oaW5k/dS1kZWl0eS1yYW0t/b24tdGhlLWV2ZS1v/Zi1pdHMtY29uc2Vj/cmF0aW9uLWNlcmVt/b255LWluLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0zZU5W/YlNLeTNFUEJRZFdO/T0g0TXE5QlFtVTdy/aVRoMmtsZVNXMDR1/SFhVPQ"},{name:"Varanasi",image:"https://imgs.search.brave.com/vtLuEF9ewiI7j5wACfx1hG85Hfd2iMI9uf6Am0t-TOY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODIz/ODU4MjY4L3Bob3Rv/L21hbmlrYXJuaWth/LWdoYXQtaW4tdmFy/YW5hc2ktaW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU40ajg4U2hzS3B1/anNzN1V3dl8ycUVG/ckVOdy1hZ185c2Fl/LTl0cWI0MzQ9"},{name:"Andhra pradesh",image:"https://imgs.search.brave.com/45u5nMGwZQRxHkFDlGaIEogjQe3M86of3p3a3-Q_rKA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudHJhdmVsdHJp/YW5nbGUuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMTIvVmVua2F0/ZXN3YXJhLVRlbXBs/ZS10aXJ1cGF0aS5q/cGc"},{name:"Mathura",image:"https://imgs.search.brave.com/cjAJYo3sJVI1NA6qdY5oO_vFsDHGPnLtQ6_r3XRjgdg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dG91cm15aW5kaWEu/Y29tL2Jsb2cvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA2/L0R3YXJrYWRoaXNo/LVRlbXBsZS1NYXRodXJh/LmpwZw"},{name:"Vrindavan",image:"https://imgs.search.brave.com/B7br7Q6Rj7kjAg_riOnoaCGdBsJBXVJcTGCB11RkGo0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcm9w/YWNpdHkuY29tL2Js/b2dzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA2L1ByZW0t/TWFuZGlyLTIuanBn"},{name:"Odisha",image:"https://imgs.search.brave.com/KdvZBl6XFP-z5-8FMlxDWzjwaFXgd52N4k1N9dLkp8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU1L0phZ2FubmF0/aF9UZW1wbGUsX1B1/cmkuanBn"},{name:"Punjab",image:"https://imgs.search.brave.com/ZH796PCB-gq0b1ozv7bj4gxTPzmkRWA0iXQGlU5Bkng/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdHls/ZXNhdGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzAyL0R1cmdpYW5h/LVRlbXBsZS1pbi1B/bXJpdHNhci5qcGc"},{name:"Haridwar",image:"https://imgs.search.brave.com/XYNxPCa-qD_sVc20pMRQqbqhuJjxvXYvvd0z6qPor70/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aGFyaWR3YXJyaXNo/aWtlc2h0b3VyaXNt/LmNvbS9oYXJpZHdh/ci1waG90b3MvMTIu/anBn"},{name:"Uttarakhand",image:"https://imgs.search.brave.com/jQbZOAxouTz0S95i2q3RqmzqLVkxK1wqZjJoWPklQmc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS90cmF5YW1iYWtl/c2h3YXItdGVtcGxl/LXJpc2hpa2VzaC11/dHRyYWtoYW5kLWF0/dHItbmVhcmJ5P3Fs/dD04MiZ0cz0xNzI2/NjQ2MjcxODc4"},{name:"Tamil Nadu",image:"https://i.natgeofe.com/n/b9e9b8d1-fa08-4b90-96bb-310cace03847/meenakshi-amman-temple-india.jpg"}],Gc=dn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0 1rem 0;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f3f3f3;
  background: transparent;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    padding: 1.5rem 0 1rem 0;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem 0 0.8rem 0;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 0.8rem 0 0.6rem 0;
    margin-bottom: 0.8rem;
  }
`,Yc=dn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-width: 80px;

  @media (max-width: 768px) {
    min-width: 70px;
  }

  @media (max-width: 480px) {
    min-width: 60px;
  }
`,qc=dn.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  border: 3px solid transparent;
  transition: border 0.2s, box-shadow 0.2s;
  
  &.active {
    border-color: #ab353d;
    box-shadow: 0 0 0 4px #f3e3e5;
  }
  
  &:hover {
    border-color: #e67c1c;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    margin-bottom: 0.3rem;
  }
`,Kc=dn.span`
  font-size: 1rem;
  color: #888;
  font-weight: 500;
  transition: color 0.2s, font-weight 0.2s;
  text-align: center;
  
  &.active {
    color: #ab353d;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,Xc=dn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    padding: 0 0.8rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    gap: 0.8rem;
  }
`,Qc=dn.div`
  flex: 1.2;
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
    flex: 1;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`,Jc=dn.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    order: 1;
  }

  @media (max-width: 768px) {
    order: 1;
  }
`,Zc=dn.img`
  width: 400px;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: 0;

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`,ed=dn.ul`
  padding: 0;
  list-style: none;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    margin: 1.2rem 0;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`,td=dn.li`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: #888;
  margin-bottom: 1rem;
  
  &::before {
    content: '✔';
    color: orange;
    font-size: 1.3rem;
    margin-right: 0.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
    
    &::before {
      font-size: 1.2rem;
      margin-right: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    
    &::before {
      font-size: 1.1rem;
      margin-right: 0.5rem;
    }
  }
`,nd=dn.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 1.2rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
  }
`,rd=()=>{const e=J(),[n,r]=(0,t.useState)("All"),[i,a]=(0,t.useState)([]),[o,s]=(0,t.useState)(!0),[l,c]=(0,t.useState)(""),d="https://www.poojn.in/wp-content/uploads/2025/02/Govindaraja-Temple-History-Architecture-and-Significance.jpeg.jpg";(0,t.useEffect)((()=>{(async()=>{try{s(!0),c("");const e=await(0,Ec.gettemplist)(),t=(Array.isArray(null===e||void 0===e?void 0:e.data)?e.data:[]).map((e=>{var t;const n=null===e||void 0===e||null===(t=e.additional_field_list)||void 0===t?void 0:t.temple_timings,r=[null===n||void 0===n?void 0:n.morning_opening,null===n||void 0===n?void 0:n.evening_closing].filter(Boolean).join(" - ");return{id:e.temple_id||e.id,name:e.name||"Unnamed Temple",location:e.location||[e.address_line_3,e.state_code].filter(Boolean).join(", ")||"",image:e.image||d,deity:e.deity||null,timings:r||null}}));a(t)}catch(Qj){c("Failed to load temples"),a([])}finally{s(!1)}})()}),[]);const u={hidden:{y:50,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}},p="All"===n?i:i.filter((e=>(e.location||"").toLowerCase().includes(n.toLowerCase())));return(0,mc.jsxs)(Cc,{children:[(0,mc.jsxs)(Ac,{style:{background:"linear-gradient(to top, rgb(255, 247, 239) 0%, rgb(247, 226, 186) 100%)"},children:[(0,mc.jsxs)(Xc,{children:[(0,mc.jsxs)(Qc,{children:[(0,mc.jsx)(_c,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:"Embark on a Sacred Journey through India's Divine Temples"}),(0,mc.jsx)(Pc,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.2}}),(0,mc.jsxs)(ed,{children:[(0,mc.jsx)(td,{children:"Explore the stories, rituals, and glory of ancient shrines"}),(0,mc.jsx)(td,{children:"Connect with temples dedicated to your beloved deities"}),(0,mc.jsx)(td,{children:"Participate in holy festivals and support temple activities"})]}),(0,mc.jsx)(nd,{children:(0,mc.jsx)(Hc,{className:"primary",children:"Explore Temples of India"})})]}),(0,mc.jsx)(Jc,{children:(0,mc.jsx)(Zc,{src:kc,alt:"India Map"})})]}),(0,mc.jsx)(Gc,{children:Wc.map((e=>{const t=n.trim().toLowerCase()===e.name.trim().toLowerCase();return(0,mc.jsxs)(Yc,{onClick:()=>r(e.name),children:[(0,mc.jsx)(qc,{src:e.image,alt:e.name,className:t?"active":""}),(0,mc.jsx)(Kc,{className:t?"active":"",children:e.name})]},e.name)}))})]}),(0,mc.jsx)(Tc,{children:(0,mc.jsx)(ac.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:"visible",children:(0,mc.jsxs)(Rc,{children:[o&&(0,mc.jsx)("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"2rem",color:"#888"},children:"Loading temples..."}),!o&&l&&(0,mc.jsx)("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"2rem",color:"#c00"},children:l}),!o&&!l&&p.map((t=>(0,mc.jsxs)(zc,{variants:u,whileHover:{y:-5},children:[(0,mc.jsx)(Dc,{children:(0,mc.jsx)(Fc,{src:t.image||d,alt:t.name})}),(0,mc.jsxs)(Nc,{children:[(0,mc.jsx)(Ic,{children:t.name}),(0,mc.jsxs)(Mc,{children:["\ud83d\udccd ",t.location]}),(0,mc.jsxs)(Lc,{children:[(0,mc.jsx)("span",{role:"img","aria-label":"Om",children:"\ud83d\udd49\ufe0f"}),(0,mc.jsx)(Oc,{children:"Deity:"}),(0,mc.jsx)(Bc,{children:t.deity||"\u2014"})]}),(0,mc.jsxs)(Lc,{children:[(0,mc.jsx)("span",{role:"img","aria-label":"Clock",children:"\ud83d\udd52"}),(0,mc.jsx)(Oc,{children:"Timings:"}),(0,mc.jsx)(Bc,{children:t.timings||"\u2014"})]}),(0,mc.jsxs)($c,{children:[(0,mc.jsx)(Vc,{onClick:()=>{return n=t.id,void e(`/templeDetails/${n}`);var n},whileHover:{scale:1.02},whileTap:{scale:.98},children:"View Details"}),(0,mc.jsx)(Uc,{onClick:()=>{return n=t.id,void e("/book-seva",{state:{templeId:n}});var n},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Book Seva"})]})]})]},t.id)))]})})})]})},id=dn.div`
  min-height: 100vh;
  padding-top: 100px;
  background: linear-gradient(135deg, ${e=>e.theme.colors.background}, rgba(255, 153, 51, 0.05));
`,ad=dn.section`
  padding: 3rem 0;
  text-align: center;
`,od=dn(ac.h1)`
  font-size: 3rem;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1rem;

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,sd=dn.section`
  padding: 2rem 0 4rem;
`,ld=dn(ac.div)`
  max-width: 800px;
  margin: 0 auto;
  background: ${e=>e.theme.colors.white};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${e=>e.theme.shadows.card};

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    margin: 0 20px;
    padding: 2rem;
  }
`,cd=dn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,dd=dn.div`
  display: flex;
  flex-direction: column;
`,ud=dn.label`
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.5rem;
`,pd=dn.input`
  padding: 1rem;
  border: 2px solid ${e=>e.theme.colors.lightGray};
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(255, 153, 51, 0.1);
  }
`,md=dn.select`
  padding: 1rem;
  border: 2px solid ${e=>e.theme.colors.lightGray};
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(255, 153, 51, 0.1);
  }
`,hd=dn.textarea`
  padding: 1rem;
  border: 2px solid ${e=>e.theme.colors.lightGray};
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(255, 153, 51, 0.1);
  }
`,fd=dn(ac.button)`
  width: 100%;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.gold});
  color: white;
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: ${e=>e.theme.shadows.button};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 153, 51, 0.4);
  }
`,gd=dn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`,xd=dn(ac.div)`
  background: ${e=>e.selected?`linear-gradient(135deg, ${e.theme.colors.primary}, ${e.theme.colors.gold})`:e.theme.colors.lightGray};
  color: ${e=>e.selected?"white":e.theme.colors.text};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    border-color: ${e=>e.theme.colors.primary};
  }
`,bd=()=>{const[e,n]=(0,t.useState)(""),[r,i]=(0,t.useState)({name:"",email:"",phone:"",temple:"",date:"",time:"",specialRequests:""}),a=e=>{i({...r,[e.target.name]:e.target.value})};return(0,mc.jsxs)(id,{children:[(0,mc.jsx)(ad,{children:(0,mc.jsx)("div",{className:"container",children:(0,mc.jsx)(od,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:"Book Your Sacred Puja"})})}),(0,mc.jsx)(sd,{children:(0,mc.jsx)("div",{className:"container",children:(0,mc.jsxs)(ld,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.2},children:[(0,mc.jsx)("h3",{style:{marginBottom:"2rem",textAlign:"center",color:"#2D2D2D"},children:"Select Your Puja Type"}),(0,mc.jsx)(gd,{children:[{id:"maha-aarti",name:"Maha Aarti",price:"\u20b9501"},{id:"rudrabhishek",name:"Rudrabhishek",price:"\u20b91001"},{id:"lakshmi-puja",name:"Lakshmi Puja",price:"\u20b9751"},{id:"hanuman-chalisa",name:"Hanuman Chalisa",price:"\u20b9301"},{id:"ganga-aarti",name:"Ganga Aarti",price:"\u20b9401"},{id:"special-abhishek",name:"Special Abhishek",price:"\u20b91501"}].map((t=>(0,mc.jsxs)(xd,{selected:e===t.id,onClick:()=>n(t.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,mc.jsx)("h4",{children:t.name}),(0,mc.jsx)("p",{style:{margin:"0.5rem 0",fontSize:"1.2rem",fontWeight:"bold"},children:t.price})]},t.id)))}),(0,mc.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Puja booking submitted:",{selectedPuja:e,...r}),alert("Your puja booking has been submitted successfully! We will contact you shortly.")},children:[(0,mc.jsxs)(cd,{children:[(0,mc.jsxs)(dd,{children:[(0,mc.jsx)(ud,{children:"Full Name *"}),(0,mc.jsx)(pd,{type:"text",name:"name",value:r.name,onChange:a,required:!0,placeholder:"Enter your full name"})]}),(0,mc.jsxs)(dd,{children:[(0,mc.jsx)(ud,{children:"Email Address *"}),(0,mc.jsx)(pd,{type:"email",name:"email",value:r.email,onChange:a,required:!0,placeholder:"Enter your email"})]}),(0,mc.jsxs)(dd,{children:[(0,mc.jsx)(ud,{children:"Phone Number *"}),(0,mc.jsx)(pd,{type:"tel",name:"phone",value:r.phone,onChange:a,required:!0,placeholder:"Enter your phone number"})]}),(0,mc.jsxs)(dd,{children:[(0,mc.jsx)(ud,{children:"Select Temple *"}),(0,mc.jsxs)(md,{name:"temple",value:r.temple,onChange:a,required:!0,children:[(0,mc.jsx)("option",{value:"",children:"Choose a temple"}),["Jagannath Temple, Puri","Golden Temple, Amritsar","Meenakshi Temple, Madurai","Kedarnath Temple","Tirupati Balaji","Somnath Temple","Vaishno Devi Temple","Kashi Vishwanath Temple"].map(((e,t)=>(0,mc.jsx)("option",{value:e,children:e},t)))]})]}),(0,mc.jsxs)(dd,{children:[(0,mc.jsx)(ud,{children:"Preferred Date *"}),(0,mc.jsx)(pd,{type:"date",name:"date",value:r.date,onChange:a,required:!0,min:(new Date).toISOString().split("T")[0]})]}),(0,mc.jsxs)(dd,{children:[(0,mc.jsx)(ud,{children:"Preferred Time"}),(0,mc.jsxs)(md,{name:"time",value:r.time,onChange:a,children:[(0,mc.jsx)("option",{value:"",children:"Select time"}),(0,mc.jsx)("option",{value:"morning",children:"Morning (6:00 AM - 12:00 PM)"}),(0,mc.jsx)("option",{value:"afternoon",children:"Afternoon (12:00 PM - 6:00 PM)"}),(0,mc.jsx)("option",{value:"evening",children:"Evening (6:00 PM - 10:00 PM)"})]})]})]}),(0,mc.jsxs)(dd,{style:{marginBottom:"2rem"},children:[(0,mc.jsx)(ud,{children:"Special Requests or Prayers"}),(0,mc.jsx)(hd,{name:"specialRequests",value:r.specialRequests,onChange:a,placeholder:"Any specific prayers, intentions, or special requirements..."})]}),(0,mc.jsx)(fd,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},disabled:!e,children:"Book Puja Now"})]})]})})})]})},vd=n.p+"static/media/Hall_01.07f6f00e05f6f778b3a7.webp",yd=n.p+"static/media/Hall_02.424d9a8cf873c5226c63.jpg",wd=n.p+"static/media/Hall_03.8ade43264343a28f273b.jpg",jd=dn.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 50%, #FBBF24 100%);
`,Sd=dn.div`
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 50%, #EC4899 100%);
  color: white;
  padding: 4rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.2); }
  &::after { content: '🪷'; position: absolute; top: 2rem; left: 2rem; font-size: 4rem; opacity: 0.2; animation: pulse 2s infinite; }

  @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.4; } }
`,kd=dn(ac.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FEF08A 0%, #FED7AA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
`,Ed=dn(ac.p)`
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,Cd=dn.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`,Ad=(dn.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #9A3412;
  text-align: center;
  margin-bottom: 2rem;
`,dn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`),_d=dn(ac.div)`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${e=>e.selected?"0 20px 40px rgba(234, 88, 12, 0.3), 0 0 0 4px #EA580C":"0 10px 30px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;

  &:hover { transform: scale(1.05); box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); }
`,Pd=dn.div`
  position: relative;
  height: 200px;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease;

  &::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%); }
`,Td=dn.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,Rd=dn.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  opacity: ${e=>e.active?1:0};
  transition: opacity 0.5s ease;
`,zd=dn.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`,Dd=dn.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`,Fd=dn.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.prev {
    left: 0.5rem;
  }

  &.next {
    right: 0.5rem;
  }
`,Nd=dn.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #EA580C;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  z-index: 2;
`,Id=dn(ac.div)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #10B981;
  color: white;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 2;
`,Md=dn.div`
  padding: 1.5rem;

  h3 { font-size: 1.5rem; font-weight: bold; color: #9A3412; margin-bottom: 0.5rem; }
  .capacity { color: #EA580C; font-weight: 600; margin-bottom: 1rem; }
  .features { display: flex; flex-direction: column; gap: 0.5rem; }
  .feature { display: flex; align-items: center; font-size: 0.9rem; color: #6B7280; gap: 0.5rem; }
`,Ld=dn.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: stretch;

  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`,Od=dn.div`
  background: ${e=>e.summary?"linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)":"white"};
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border: ${e=>e.summary?"2px solid #FED7AA":"1px solid #FED7AA"};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;

  h3 { 
    font-size: 2rem; 
    font-weight: bold; 
    color: #9A3412; 
    margin-bottom: 1.5rem; 
    display: flex; 
    align-items: center; 
    gap: 0.75rem;
    white-space: nowrap;
  }
`,Bd=dn.div`
  display: grid;
  grid-template-columns: ${e=>e.full?"1fr":"1fr 1fr"};
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`,$d=dn.div`
  label { color: #B45309; font-weight: 600; margin-bottom: 0.5rem; display: block; }
`,Vd=dn.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #FED7AA;
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-size: 1rem;

  &:focus { outline: none; border-color: #EA580C; box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1); }
`,Ud=dn.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #FED7AA;
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-size: 1rem;
  background: white;

  &:focus { outline: none; border-color: #EA580C; box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1); }
`,Hd=dn(ac.button)`
  width: 100%;
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  box-shadow: 0 10px 20px rgba(234, 88, 12, 0.3);
  border: none;
  cursor: pointer;

  &:hover { box-shadow: 0 15px 30px rgba(234, 88, 12, 0.4); transform: translateY(-2px); }
`,Wd=dn.div`
  background: ${e=>e.total?"linear-gradient(135deg, #EA580C 0%, #DC2626 100%)":"white"};
  color: ${e=>e.total?"white":"inherit"};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${e=>e.total?"0 10px 20px rgba(234, 88, 12, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.05)"};

  .row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
  .row:last-child { margin-bottom: 0; }
  .label { font-weight: 600; color: ${e=>e.total?"white":"#6B7280"}; }
  .value { color: ${e=>e.total?"white":"#EA580C"}; font-weight: ${e=>e.total?"bold":"600"}; font-size: ${e=>e.total?"1.5rem":"1rem"}; }
`,Gd=dn.div`
  text-align: center;
  padding: 2rem 0;
  .icon { font-size: 4rem; margin-bottom: 1rem; }
  .text { color: #EA580C; font-weight: 600; }
`,Yd=dn.div`
  text-align: center;
  font-size: 0.9rem;
  color: #6B7280;
  margin-top: 1rem;
  div { margin-bottom: 0.25rem; }
`,qd=()=>{const[e,n]=(0,t.useState)(null),[r,i]=(0,t.useState)(""),[a,o]=(0,t.useState)("12:00"),[s,l]=(0,t.useState)(""),[c,d]=(0,t.useState)(""),[u,p]=(0,t.useState)(""),[m,h]=(0,t.useState)(0),f=[vd,yd,wd];(0,t.useEffect)((()=>{const e=setInterval((()=>{h((e=>e===f.length-1?0:e+1))}),3e3);return()=>clearInterval(e)}),[f.length]);const g=[{id:1,name:"Shiv Mandapam",capacity:"200 people",images:f,price:5e3,features:["AC Available","Parking","Decoration"]},{id:2,name:"Ganesh Sabha",capacity:"150 people",images:f,price:4e3,features:["Traditional Setup","Sound System","Parking"]},{id:3,name:"Durga Darbar",capacity:"300 people",images:f,price:6e3,features:["Premium Hall","Full AC","Catering Support"]}];return(0,mc.jsxs)(jd,{children:[(0,mc.jsxs)(Sd,{children:[(0,mc.jsxs)(kd,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},children:[(0,mc.jsx)("span",{style:{fontSize:"3rem",marginRight:"0.5rem"},children:"\u0950"})," Sacred Hall Booking"]}),(0,mc.jsx)(Ed,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:"Reserve our divine halls for your spiritual celebrations and sacred ceremonies"})]}),(0,mc.jsxs)(Cd,{children:[(0,mc.jsx)(Ad,{children:g.map(((t,r)=>(0,mc.jsxs)(_d,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:.3+.1*r},onClick:()=>n(t),selected:(null===e||void 0===e?void 0:e.id)===t.id,children:[t.images?(0,mc.jsxs)(Td,{children:[t.images.map(((e,t)=>(0,mc.jsx)(Rd,{src:e,active:m===t},t))),(0,mc.jsxs)(Nd,{children:["\u20b9",t.price.toLocaleString()]}),(null===e||void 0===e?void 0:e.id)===t.id&&(0,mc.jsx)(Id,{initial:{scale:0},animate:{scale:1},children:"\u2713"}),(0,mc.jsx)(Fd,{className:"prev",onClick:e=>{e.stopPropagation(),h((e=>0===e?f.length-1:e-1))},children:"\u2039"}),(0,mc.jsx)(Fd,{className:"next",onClick:e=>{e.stopPropagation(),h((e=>e===f.length-1?0:e+1))},children:"\u203a"}),(0,mc.jsx)(zd,{children:t.images.map(((e,t)=>(0,mc.jsx)(Dd,{active:m===t,onClick:e=>{e.stopPropagation(),(e=>{h(e)})(t)}},t)))})]}):(0,mc.jsxs)(Pd,{src:t.image,children:[(0,mc.jsxs)(Nd,{children:["\u20b9",t.price.toLocaleString()]}),(null===e||void 0===e?void 0:e.id)===t.id&&(0,mc.jsx)(Id,{initial:{scale:0},animate:{scale:1},children:"\u2713"})]}),(0,mc.jsxs)(Md,{children:[(0,mc.jsx)("h3",{children:t.name}),(0,mc.jsxs)("div",{className:"capacity",children:["\ud83d\udc65 Capacity: ",t.capacity]}),(0,mc.jsx)("div",{className:"features",children:t.features.map(((e,t)=>(0,mc.jsxs)("div",{className:"feature",children:[(0,mc.jsx)("span",{style:{color:"#EA580C"},children:"\u2728"}),e]},t)))})]})]},t.id)))}),(0,mc.jsxs)(Ld,{children:[(0,mc.jsxs)(Od,{children:[(0,mc.jsxs)("h3",{children:[(0,mc.jsx)("span",{children:"\ud83d\udcdd"}),"Booking Details"]}),(0,mc.jsxs)(Bd,{children:[(0,mc.jsxs)($d,{children:[(0,mc.jsx)("label",{children:"Your Name"}),(0,mc.jsx)(Vd,{type:"text",value:s,onChange:e=>l(e.target.value),placeholder:"Enter your full name"})]}),(0,mc.jsxs)($d,{children:[(0,mc.jsx)("label",{children:"Phone Number"}),(0,mc.jsx)(Vd,{type:"tel",value:u,onChange:e=>p(e.target.value),placeholder:"Enter your phone number"})]})]}),(0,mc.jsx)(Bd,{full:!0,children:(0,mc.jsxs)($d,{children:[(0,mc.jsx)("label",{children:"Email Address"}),(0,mc.jsx)(Vd,{type:"email",value:c,onChange:e=>d(e.target.value),placeholder:"Enter your email address"})]})}),(0,mc.jsxs)(Bd,{children:[(0,mc.jsxs)($d,{children:[(0,mc.jsx)("label",{children:"Event Date"}),(0,mc.jsx)(Vd,{type:"date",value:r,onChange:e=>i(e.target.value)})]}),(0,mc.jsxs)($d,{children:[(0,mc.jsx)("label",{children:"Event Time"}),(0,mc.jsxs)(Ud,{value:a,onChange:e=>o(e.target.value),children:[(0,mc.jsx)("option",{value:"08:00",children:"\ud83c\udf05 8:00 AM"}),(0,mc.jsx)("option",{value:"12:00",children:"\u2600\ufe0f 12:00 PM"}),(0,mc.jsx)("option",{value:"16:00",children:"\ud83c\udf07 4:00 PM"}),(0,mc.jsx)("option",{value:"20:00",children:"\ud83c\udf19 8:00 PM"})]})]})]}),(0,mc.jsx)(Hd,{onClick:()=>e?s&&c&&u&&r?void alert(`Booking confirmed for ${e.name}!`):alert("Please fill all required fields"):alert("Please select a hall"),whileHover:{scale:1.02},whileTap:{scale:.98},children:"\ud83d\ude4f Confirm Sacred Booking"})]}),(0,mc.jsxs)(Od,{summary:!0,children:[(0,mc.jsxs)("h3",{children:[(0,mc.jsx)("span",{children:"\ud83d\udccb"}),"Booking Summary"]}),e?(0,mc.jsxs)("div",{children:[(0,mc.jsxs)(Wd,{children:[(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Hall:"}),(0,mc.jsx)("span",{className:"value",children:e.name})]}),(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Capacity:"}),(0,mc.jsx)("span",{className:"value",children:e.capacity})]})]}),(0,mc.jsxs)(Wd,{children:[(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Date:"}),(0,mc.jsx)("span",{className:"value",children:r||"Not selected"})]}),(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Time:"}),(0,mc.jsx)("span",{className:"value",children:a})]})]}),(0,mc.jsx)(Wd,{total:!0,children:(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Total Amount:"}),(0,mc.jsxs)("span",{className:"value",children:["\u20b9",e.price.toLocaleString()]})]})}),(0,mc.jsxs)(Yd,{children:[(0,mc.jsx)("div",{children:"\u2728 Includes basic decoration and setup"}),(0,mc.jsx)("div",{children:"\ud83c\udfb5 Sound system available"}),(0,mc.jsx)("div",{children:"\ud83d\ude97 Free parking included"})]})]}):(0,mc.jsxs)(Gd,{children:[(0,mc.jsx)("div",{className:"icon",children:"\ud83c\udfdb\ufe0f"}),(0,mc.jsx)("div",{className:"text",children:"Please select a hall to see booking summary"})]})]})]})]})]})},Kd=dn.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 50%, #FBBF24 100%);
`,Xd=dn.div`
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 50%, #EC4899 100%);
  color: white;
  padding: 4rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.2); }
  &::after { content: '🪷'; position: absolute; top: 2rem; left: 2rem; font-size: 4rem; opacity: 0.2; animation: pulse 2s infinite; }

  @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.4; } }
`,Qd=dn(ac.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FEF08A 0%, #FED7AA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
`,Jd=dn(ac.p)`
  font-size: 1.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,Zd=dn.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
`,eu=dn.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`,tu=dn(ac.div)`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  text-align: center;
  box-shadow: ${e=>e.selected?"0 20px 40px rgba(234, 88, 12, 0.3), 0 0 0 4px #EA580C":"0 10px 30px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;

  &:hover { transform: scale(1.05); }
`,nu=dn.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #EA580C;
`,ru=dn.h4`
  font-size: 1.25rem;
  font-weight: bold;
  color: #9A3412;
  margin-bottom: 0.5rem;
`,iu=dn.div`
  color: #EA580C;
  font-weight: 600;
  font-size: 1.1rem;
`,au=dn.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`,ou=dn.div`
  background: ${e=>e.summary?"linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)":"white"};
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border: ${e=>e.summary?"2px solid #FED7AA":"1px solid #FED7AA"};
  height: 100%;

  h3 { 
    font-size: 2rem; 
    font-weight: bold; 
    color: #9A3412; 
    margin-bottom: 1.5rem; 
    display: flex; 
    align-items: center; 
    gap: 0.75rem;
  }
`,su=dn.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,lu=dn.div`
  label { color: #B45309; font-weight: 600; margin-bottom: 0.5rem; display: block; }
`,cu=dn.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #FED7AA;
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-size: 1rem;

  &:focus { outline: none; border-color: #EA580C; box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1); }
`,du=dn.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #FED7AA;
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-size: 1rem;
  background: white;

  &:focus { outline: none; border-color: #EA580C; box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1); }
`,uu=dn(ac.button)`
  width: 100%;
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  box-shadow: 0 10px 20px rgba(234, 88, 12, 0.3);
  border: none;
  cursor: pointer;

  &:hover { box-shadow: 0 15px 30px rgba(234, 88, 12, 0.4); transform: translateY(-2px); }
`,pu=dn.div`
  background: ${e=>e.total?"linear-gradient(135deg, #EA580C 0%, #DC2626 100%)":"white"};
  color: ${e=>e.total?"white":"inherit"};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${e=>e.total?"0 10px 20px rgba(234, 88, 12, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.05)"};

  .row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
  .row:last-child { margin-bottom: 0; }
  .label { font-weight: 600; color: ${e=>e.total?"white":"#6B7280"}; }
  .value { color: ${e=>e.total?"white":"#EA580C"}; font-weight: ${e=>e.total?"bold":"600"}; font-size: ${e=>e.total?"1.5rem":"1rem"}; }
`,mu=[{name:"Rudrabhishek",price:1500,icon:"\ud83d\udd49\ufe0f"},{name:"Navagraha Puja",price:2500,icon:"\u2600\ufe0f"},{name:"Satyanarayan Katha",price:3e3,icon:"\ud83d\udcff"},{name:"Chandi Path",price:4500,icon:"\ud83e\ude94"}],hu=["Morning (8 AM \u2013 10 AM)","Midday (11 AM \u2013 1 PM)","Afternoon (2 PM \u2013 4 PM)","Evening (5 PM \u2013 7 PM)"],fu=()=>{const[e,n]=(0,t.useState)(mu[0]),[r,i]=(0,t.useState)(""),[a,o]=(0,t.useState)(10),[s,l]=(0,t.useState)(hu[0]);return(0,mc.jsxs)(Kd,{children:[(0,mc.jsxs)(Xd,{children:[(0,mc.jsxs)(Qd,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},children:[(0,mc.jsx)("span",{style:{fontSize:"3rem",marginRight:"0.5rem"},children:"\ud83e\ude94"})," Sacred Puja Booking"]}),(0,mc.jsx)(Jd,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:"Book divine pujas for spiritual blessings and prosperity"})]}),(0,mc.jsxs)(Zd,{children:[(0,mc.jsx)("h2",{style:{fontSize:"2.5rem",fontWeight:"bold",color:"#9A3412",textAlign:"center",marginBottom:"2rem"},children:"Select Your Puja"}),(0,mc.jsx)(eu,{children:mu.map((t=>(0,mc.jsxs)(tu,{onClick:()=>n(t),selected:e.name===t.name,whileHover:{scale:1.02},children:[(0,mc.jsx)(nu,{children:t.icon}),(0,mc.jsx)(ru,{children:t.name}),(0,mc.jsxs)(iu,{children:["\u20b9",t.price.toLocaleString()]})]},t.name)))}),(0,mc.jsxs)(au,{children:[(0,mc.jsxs)(ou,{children:[(0,mc.jsxs)("h3",{children:[(0,mc.jsx)("span",{children:"\ud83d\udcc5"})," Booking Details"]}),(0,mc.jsxs)(su,{children:[(0,mc.jsxs)(lu,{children:[(0,mc.jsx)("label",{children:"Puja Date"}),(0,mc.jsx)(cu,{type:"date",value:r,onChange:e=>i(e.target.value)})]}),(0,mc.jsxs)(lu,{children:[(0,mc.jsx)("label",{children:"Number of Participants"}),(0,mc.jsx)(cu,{type:"number",min:"1",value:a,onChange:e=>o(e.target.value)})]}),(0,mc.jsxs)(lu,{children:[(0,mc.jsx)("label",{children:"Preferred Time Slot"}),(0,mc.jsx)(du,{value:s,onChange:e=>l(e.target.value),children:hu.map((e=>(0,mc.jsx)("option",{value:e,children:e},e)))})]})]}),(0,mc.jsx)(uu,{onClick:()=>{if(!r)return alert("Please select a date");alert(`Puja booking confirmed for ${e.name}!`)},whileHover:{scale:1.02},whileTap:{scale:.98},children:"\ud83d\ude4f Book Sacred Puja"})]}),(0,mc.jsxs)(ou,{summary:!0,children:[(0,mc.jsxs)("h3",{children:[(0,mc.jsx)("span",{children:"\ud83d\udccb"})," Puja Summary"]}),(0,mc.jsxs)(pu,{children:[(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Puja:"}),(0,mc.jsx)("span",{className:"value",children:e.name})]}),(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Price:"}),(0,mc.jsxs)("span",{className:"value",children:["\u20b9",e.price.toLocaleString()]})]})]}),(0,mc.jsxs)(pu,{children:[(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Date:"}),(0,mc.jsx)("span",{className:"value",children:r||"Not selected"})]}),(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Time Slot:"}),(0,mc.jsx)("span",{className:"value",children:s})]}),(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Participants:"}),(0,mc.jsx)("span",{className:"value",children:a})]})]}),(0,mc.jsx)(pu,{total:!0,children:(0,mc.jsxs)("div",{className:"row",children:[(0,mc.jsx)("span",{className:"label",children:"Total Amount:"}),(0,mc.jsxs)("span",{className:"value",children:["\u20b9",e.price.toLocaleString()]})]})})]})]})]})]})},gu=dn.div`
  min-height: 100vh;
  background: #FFF8F0;
  position: relative;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  padding-top: 100px; /* Add padding to account for fixed navbar */
`,xu=dn.div`
  position: relative;
  padding: 3rem 0 2rem;
  background: linear-gradient(135deg, #FFF5E6 0%, #FFE4C4 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(184, 115, 51, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`,bu=dn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`,vu=dn.div`
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  padding: 0 1rem;
`,yu=dn.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.1);
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
    border-radius: 3px;
  }
`,wu=dn.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  color: #D2691E;
  font-weight: 500;
  margin-top: 1rem;
`,ju=dn.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  opacity: 0.08;
  pointer-events: none;
  z-index: 1;
  
  &::before {
    content: "🕉️";
    position: absolute;
    top: 20%;
    left: 10%;
    font-size: 3rem;
    animation: float 6s ease-in-out infinite;
  }
  
  &::after {
    content: "🔔";
    position: absolute;
    top: 30%;
    right: 15%;
    font-size: 2rem;
    animation: float 4s ease-in-out infinite reverse;
  }
`,Su=dn.div`
  background: linear-gradient(90deg, #D2691E, #8B4513);
  border-radius: 50px;
  padding: 0.5rem;
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 8px 24px rgba(139, 69, 19, 0.3);
`,ku=dn.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`,Eu=dn.button`
  background: ${e=>e.active?"rgba(255, 255, 255, 0.95)":"transparent"};
  color: ${e=>e.active?"#8B4513":"white"};
  border: none;
  padding: 0.75rem 1.75rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: rgba(255, 255, 255, 0.85);
    color: ${e=>e.active?"#8B4513":"#D2691E"};
  }
`,Cu=dn.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
`,Au=dn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  padding: 0 1rem;
`,_u=dn.div`
  font-size: 2rem;
  color: #D2691E;
`,Pu=dn.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: 600;
  color: #8B4513;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
  }
`,Tu=dn.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ru=dn(ac.div)`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(210, 105, 30, 0.2);
  height: fit-content;
`,zu=dn.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, #D2691E, #8B4513);
  }
`,Du=dn.div`
  margin-bottom: 1.75rem;
`,Fu=dn.label`
  display: block;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`,Nu=dn.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(210, 105, 30, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #8B4513;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #D2691E;
    box-shadow: 0 0 0 3px rgba(210, 105, 30, 0.1);
  }
`,Iu=dn.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(210, 105, 30, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #8B4513;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #D2691E;
    box-shadow: 0 0 0 3px rgba(210, 105, 30, 0.1);
  }
`,Mu=dn(ac.div)`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(210, 105, 30, 0.2);
  position: relative;
  height: fit-content;
  
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 1px solid rgba(218, 165, 32, 0.2);
    border-radius: 12px;
    pointer-events: none;
    z-index: -1;
  }
`,Lu=dn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(255, 248, 231, 0.6);
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid rgba(210, 105, 30, 0.15);
`,Ou=dn.span`
  font-size: 1.5rem;
  color: #D2691E;
`,Bu=dn.span`
  font-weight: 600;
  color: #8B4513;
  font-family: 'Poppins', sans-serif;
`,$u=dn.div`
  background: rgba(255, 248, 231, 0.6);
  padding: 1.25rem;
  border-radius: 8px;
  margin: 1.25rem 0;
  border: 1px solid rgba(210, 105, 30, 0.15);
  font-family: 'Poppins', sans-serif;
`,Vu=dn.div`
  background: rgba(255, 248, 231, 0.6);
  padding: 1.25rem;
  border-radius: 8px;
  margin: 1.25rem 0;
  border: 1px solid rgba(210, 105, 30, 0.15);
  font-family: 'Poppins', sans-serif;
`,Uu=dn.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 248, 231, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(210, 105, 30, 0.15);
  font-family: 'Poppins', sans-serif;
`,Hu=dn.h4`
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
`,Wu=dn.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #D2691E;
`,Gu=dn(ac.button)`
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(90deg, #D2691E, #8B4513);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(139, 69, 19, 0.3);
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(139, 69, 19, 0.4);
    background: linear-gradient(90deg, #8B4513, #D2691E);
  }
`,Yu=dn.div`
  text-align: center;
  margin: 3rem 0;
  font-size: 2rem;
  color: #D2691E;
  animation: float 4s ease-in-out infinite;
`,qu=dn(ac.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 8px 25px rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(210, 105, 30, 0.2);
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`,Ku=dn.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid rgba(210, 105, 30, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,Xu=dn.div`
  flex: 1;
`,Qu=dn.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.5rem;
`,Ju=dn.p`
  color: #D2691E;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: "📍";
  }
`,Zu=dn.p`
  color: #8B4513;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: "🕉️";
  }
`,ep=()=>{const e=X(),[n,r]=(0,t.useState)(["Flowers","Sweets"]),[i,a]=(0,t.useState)("2024-04-24"),[o,s]=(0,t.useState)("Shree Ganesh Mandir"),[l,c]=(0,t.useState)(null),[d,u]=(0,t.useState)("chadhava"),p=[{id:1,name:"Kashi Vishwanath Temple",location:"Varanasi, Uttar Pradesh",deity:"Lord Shiva",timings:"5AM-11AM, 4PM-9PM",image:"https://i.pinimg.com/736x/9e/90/70/9e90707222c55c19f922ff7097c5975d.jpg"},{id:2,name:"Jagannath Temple",location:"Puri, Odisha",deity:"Lord Jagannath",timings:"6AM-9PM",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-agvMxTV3rSTZCB9Npd1ueYqg-qbe0bxhQ&s"},{id:3,name:"Meenakshi Temple",location:"Madurai, Tamil Nadu",deity:"Goddess Meenakshi",timings:"5AM-12:30PM, 4PM-9:30PM",image:"https://i.natgeofe.com/n/b9e9b8d1-fa08-4b90-96bb-310cace03847/meenakshi-amman-temple-india.jpg"},{id:4,name:"Tirupati Balaji Temple",location:"Andhra Pradesh",deity:"Lord Venkateswara",timings:"3AM-11:30PM",image:"https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/09/How-to-Reach-Tirupati-Balaji-Temple.jpg"},{id:5,name:"Somnath Temple",location:"Gujarat",deity:"Lord Shiva",timings:"6AM-10PM",image:"https://c9admin.cottage9.com/uploads/5839/somnath-temple.jpg"},{id:6,name:"Golden Temple",location:"Amritsar, Punjab",deity:"Guru Granth Sahib",timings:"Open 24 Hours",image:"https://static.toiimg.com/photo/61820954.cms"}];(0,t.useEffect)((()=>{var t;if(window.scrollTo(0,0),null!==(t=e.state)&&void 0!==t&&t.templeId){const t=p.find((t=>t.id===e.state.templeId));t&&(c(t),s(t.name))}}),[e.state]),(0,t.useEffect)((()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}),[]);return(0,mc.jsxs)(gu,{children:[(0,mc.jsx)(xu,{children:(0,mc.jsxs)(bu,{children:[(0,mc.jsxs)(vu,{children:[(0,mc.jsx)(ju,{}),(0,mc.jsx)(yu,{children:"Book Seva"}),(0,mc.jsx)(wu,{children:"Experience divine blessings through sacred offerings"})]}),(0,mc.jsx)(Su,{children:(0,mc.jsxs)(ku,{children:[(0,mc.jsx)(Eu,{active:"chadhava"===d,onClick:()=>u("chadhava"),children:"Chadhava"}),(0,mc.jsx)(Eu,{active:"hall-booking"===d,onClick:()=>u("hall-booking"),children:"Hall Booking"}),(0,mc.jsx)(Eu,{active:"special-puja"===d,onClick:()=>u("special-puja"),children:"Special Puja"}),(0,mc.jsx)(Eu,{active:"donations"===d,onClick:()=>u("donations"),children:"Donations"}),(0,mc.jsx)(Eu,{active:"volunteering"===d,onClick:()=>u("volunteering"),children:"Volunteering"})]})})]})}),(0,mc.jsxs)(Cu,{children:["chadhava"===d&&(0,mc.jsxs)(mc.Fragment,{children:[l&&(0,mc.jsxs)(qu,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[(0,mc.jsx)(Ku,{src:l.image,alt:l.name}),(0,mc.jsxs)(Xu,{children:[(0,mc.jsx)(Qu,{children:l.name}),(0,mc.jsx)(Ju,{children:l.location}),(0,mc.jsx)(Zu,{children:l.deity})]})]}),(0,mc.jsxs)(Au,{children:[(0,mc.jsx)(_u,{children:"\ud83e\ude94"}),(0,mc.jsx)(Pu,{children:"Chadhava Offerings"})]}),(0,mc.jsxs)(Tu,{children:[(0,mc.jsxs)(Ru,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6},children:[(0,mc.jsx)(zu,{children:"Select Offerings"}),(0,mc.jsxs)(Du,{children:[(0,mc.jsx)(Fu,{children:"Offering Type"}),(0,mc.jsxs)(Nu,{children:[(0,mc.jsx)("option",{children:"Flowers (\u20b9200-\u20b9500)"}),(0,mc.jsx)("option",{children:"Sweets (\u20b9300-\u20b9600)"}),(0,mc.jsx)("option",{children:"Fruits (\u20b9150-\u20b9400)"}),(0,mc.jsx)("option",{children:"Incense (\u20b9100-\u20b9300)"}),(0,mc.jsx)("option",{children:"Oil (\u20b9250-\u20b9500)"}),(0,mc.jsx)("option",{children:"Special Prasadam (\u20b9500-\u20b91000)"})]})]}),(0,mc.jsxs)(Du,{children:[(0,mc.jsx)(Fu,{children:"Preferred Date"}),(0,mc.jsx)(Iu,{type:"date",value:i,onChange:e=>a(e.target.value),min:(new Date).toISOString().split("T")[0]})]}),(0,mc.jsxs)(Du,{children:[(0,mc.jsx)(Fu,{children:"Temple Location"}),(0,mc.jsx)(Iu,{type:"text",value:o,onChange:e=>s(e.target.value),placeholder:"Enter temple name or location"})]})]}),(0,mc.jsxs)(Mu,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[(0,mc.jsx)(zu,{children:"Order Summary"}),n.map(((e,t)=>(0,mc.jsxs)(Lu,{children:[(0,mc.jsx)(Ou,{children:"Flowers"===e?"\ud83c\udf38":"Sweets"===e?"\ud83c\udf6c":"Fruits"===e?"\ud83c\udf4e":"\ud83e\ude94"}),(0,mc.jsx)(Bu,{children:e})]},t))),(0,mc.jsxs)($u,{children:[(0,mc.jsx)("strong",{children:"Selected Date:"})," ",(m=i,new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"}))]}),(0,mc.jsxs)(Vu,{children:[(0,mc.jsx)("strong",{children:"Temple Location:"})," ",o]}),(0,mc.jsxs)(Uu,{children:[(0,mc.jsx)(Hu,{children:"Estimated Cost Range"}),(0,mc.jsx)(Wu,{children:"\u20b9500 - \u20b91000"}),(0,mc.jsx)("small",{children:"(Final amount will be confirmed after verification)"})]}),(0,mc.jsx)(Gu,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"Proceed to Payment"})]})]})]}),"hall-booking"===d&&(0,mc.jsx)(qd,{}),"special-puja"===d&&(0,mc.jsx)(fu,{}),"donations"===d&&(0,mc.jsxs)("div",{style:{textAlign:"center",padding:"4rem 2rem"},children:[(0,mc.jsx)("h2",{style:{color:"#8B4513",marginBottom:"1rem"},children:"Donations"}),(0,mc.jsx)("p",{style:{color:"#D2691E"},children:"Coming Soon..."})]}),"volunteering"===d&&(0,mc.jsxs)("div",{style:{textAlign:"center",padding:"4rem 2rem"},children:[(0,mc.jsx)("h2",{style:{color:"#8B4513",marginBottom:"1rem"},children:"Volunteering"}),(0,mc.jsx)("p",{style:{color:"#D2691E"},children:"Coming Soon..."})]})]}),(0,mc.jsx)(Yu,{children:"\ud83e\udeb7"})]});var m},tp=dn.div`
  min-height: 100vh;
  padding-top: 100px;
`,np=dn.section`
  background: linear-gradient(135deg, ${e=>e.theme.colors.background}, rgba(255, 153, 51, 0.1));
  padding: 3rem 0;
  text-align: center;
`,rp=dn(ac.h1)`
  font-size: 3rem;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1rem;

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,ip=dn.section`
  padding: 4rem 0;
`,ap=dn.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${e=>e.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,op=dn(ac.div)`
  background: ${e=>e.theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.card};
`,sp=dn.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.gold});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;

  &::before {
    content: '📺';
    position: absolute;
  }

  &::after {
    content: 'LIVE';
    position: absolute;
    top: 20px;
    right: 20px;
    background: red;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }
`,lp=dn.div`
  padding: 1.5rem;
`,cp=dn.h3`
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.5rem;
`,dp=dn.p`
  color: ${e=>e.theme.colors.darkGray};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,up=dn(ac.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,pp=dn.div`
  background: ${e=>e.theme.colors.white};
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: ${e=>e.theme.shadows.card};
`,mp=dn.h3`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`,hp=dn(ac.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background: ${e=>e.theme.colors.background};
    border-color: ${e=>e.theme.colors.primary};
  }

  &.active {
    background: linear-gradient(135deg, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.gold});
    color: white;
  }
`,fp=dn.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>e.active?"rgba(255,255,255,0.2)":e.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`,gp=dn.div`
  flex: 1;
`,xp=dn.h4`
  margin-bottom: 0.2rem;
  font-size: 1rem;
`,bp=dn.p`
  font-size: 0.8rem;
  opacity: 0.8;
`,vp=dn.div`
  background: ${e=>e.theme.colors.white};
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: ${e=>e.theme.shadows.card};
  height: 300px;
  display: flex;
  flex-direction: column;
`,yp=dn.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.primary};
    border-radius: 2px;
  }
`,wp=dn.div`
  margin-bottom: 0.8rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${e=>e.theme.colors.background};
`,jp=dn.span`
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
  font-size: 0.9rem;
`,Sp=dn.p`
  margin: 0.2rem 0 0 0;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
`,kp=dn.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${e=>e.theme.colors.lightGray};
  border-radius: 20px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
  }
`,Ep=()=>{const[e,n]=(0,t.useState)(0),[r,i]=(0,t.useState)(""),a=[{id:1,name:"Jagannath Temple",location:"Puri, Odisha",status:"Live Now",viewers:15420,icon:"\ud83c\udfdb\ufe0f"},{id:2,name:"Golden Temple",location:"Amritsar, Punjab",status:"Live Now",viewers:8930,icon:"\ud83d\udd4c"},{id:3,name:"Meenakshi Temple",location:"Madurai, Tamil Nadu",status:"Starting Soon",viewers:0,icon:"\ud83c\udfdb\ufe0f"},{id:4,name:"Tirupati Balaji",location:"Andhra Pradesh",status:"Live Now",viewers:25670,icon:"\u26e9\ufe0f"}];return(0,mc.jsxs)(tp,{children:[(0,mc.jsx)(np,{children:(0,mc.jsx)("div",{className:"container",children:(0,mc.jsx)(rp,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},children:"Live Temple Darshan"})})}),(0,mc.jsx)(ip,{children:(0,mc.jsxs)(ap,{children:[(0,mc.jsxs)(op,{initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{duration:.8},children:[(0,mc.jsx)(sp,{}),(0,mc.jsxs)(lp,{children:[(0,mc.jsx)(cp,{children:a[e].name}),(0,mc.jsxs)(dp,{children:["\ud83d\udc65 ",a[e].viewers.toLocaleString()," viewers watching"]}),(0,mc.jsx)("p",{style:{color:"#666",lineHeight:1.6},children:"Experience the divine presence and sacred atmosphere of this holy temple. Join thousands of devotees in this spiritual journey from the comfort of your home."})]})]}),(0,mc.jsxs)(up,{initial:{x:50,opacity:0},animate:{x:0,opacity:1},transition:{duration:.8,delay:.2},children:[(0,mc.jsxs)(pp,{children:[(0,mc.jsx)(mp,{children:"Available Temples"}),a.map(((t,r)=>(0,mc.jsxs)(hp,{className:e===r?"active":"",onClick:()=>n(r),whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,mc.jsx)(fp,{active:e===r,children:t.icon}),(0,mc.jsxs)(gp,{children:[(0,mc.jsx)(xp,{children:t.name}),(0,mc.jsx)(bp,{children:t.status})]})]},t.id)))]}),(0,mc.jsxs)(vp,{children:[(0,mc.jsx)(mp,{children:"Live Chat"}),(0,mc.jsx)(yp,{children:[{user:"Devotee123",message:"Har Har Mahadev! \ud83d\ude4f"},{user:"Spiritual_Soul",message:"Such peaceful darshan, feeling blessed"},{user:"PrayerWarrior",message:"Om Namah Shivaya"},{user:"BlessedOne",message:"Thank you for this beautiful service \ud83c\udf38"},{user:"DevoteeHeart",message:"Jai Jagannath! \ud83d\udea9"}].map(((e,t)=>(0,mc.jsxs)(wp,{children:[(0,mc.jsxs)(jp,{children:[e.user,":"]}),(0,mc.jsx)(Sp,{children:e.message})]},t)))}),(0,mc.jsx)("form",{onSubmit:e=>{e.preventDefault(),r.trim()&&(console.log("Chat message:",r),i(""))},children:(0,mc.jsx)(kp,{type:"text",value:r,onChange:e=>i(e.target.value),placeholder:"Share your prayers and blessings..."})})]})]})]})})]})},Cp=n.p+"static/media/footer_01.6263d8db9275dca79982.png",Ap=n.p+"static/media/footer_02.e3666e343f6928a3ee5a.png",_p=n.p+"static/media/testimonial_01.ffd5f5f068b6827eadb2.png",Pp=dn.footer`
  background-image: url(${_p});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: #EDEDED;
  padding: 0;
  overflow: hidden;
  min-height: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.82);
    z-index: 1;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }
`,Tp=dn.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 0;

  @media (min-width: 768px) {
    padding: 80px 60px 0;
  }
`,Rp=dn.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;
  }
`,zp=dn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`,Dp=dn.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #FFFFFF;
  margin: 0;
  
  span {
    color: #F59E0B;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,Fp=dn.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: #F3F4F6;
  max-width: 280px;
  line-height: 1.5;
  margin: 0;
`,Np=dn.div`
  text-align: left;

  @media (min-width: 992px) {
    text-align: right;
  }
`,Ip=dn.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 15px;
`,Mp=dn.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
  }
`,Lp=dn.input`
  padding: 12px 20px;
  border-radius: 30px;
  border: none;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  background-color: #FFFFFF;
  color: #333;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #F59E0B;
  }

  @media (min-width: 576px) {
    width: 300px;
    padding: 15px 20px;
  }
`,Op=dn.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6A00, #FF8C00);
  border: none;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 106, 0, 0.3);
  }

  @media (min-width: 576px) {
    align-self: center;
  }
`,Bp=dn.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    margin-bottom: 80px;
  }
`,$p=dn.div``,Vp=dn.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #FFFFFF;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`,Up=dn.a`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  color: #F3F4F6;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #F59E0B;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 12px;
  }
`,Hp=dn.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  position: relative;
  z-index: 4;
  width: 100%;
  border-top: 1px solid rgba(255,255,255,0.2);

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 12px;
    padding: 20px 0 40px;
  }
`,Wp=dn.span`
  font-family: 'Inter', 'Roboto', 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #f3f4f6;
  white-space: nowrap;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #f59e0b;
  }

  @media (min-width: 576px) {
    font-size: 14px;
    font-weight: 600;
    margin: 0 8px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
    margin: 0 12px;
  }
`,Gp=dn.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  z-index: 3;
  opacity: 0.8;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`,Yp=dn.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  z-index: 3;
  opacity: 0.8;
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 300px;
  }
`,qp=()=>(0,mc.jsxs)(Pp,{children:[(0,mc.jsx)(Gp,{src:Ap,alt:"Small Temple Illustration"}),(0,mc.jsx)(Yp,{src:Cp,alt:"Big Temple Illustration"}),(0,mc.jsxs)(Tp,{children:[(0,mc.jsxs)(Rp,{children:[(0,mc.jsxs)(zp,{children:[(0,mc.jsxs)(Dp,{children:["TEMPLE",(0,mc.jsx)("span",{children:"NAME"})]}),(0,mc.jsx)(Fp,{children:"Because we take you to the most peaceful and divine places."})]}),(0,mc.jsxs)(Np,{children:[(0,mc.jsx)(Ip,{children:"Get Updates"}),(0,mc.jsxs)(Mp,{children:[(0,mc.jsx)(Lp,{type:"email",placeholder:"Enter your email..."}),(0,mc.jsx)(Op,{type:"submit","aria-label":"Subscribe",children:"\u2192"})]})]})]}),(0,mc.jsxs)(Bp,{children:[(0,mc.jsxs)($p,{children:[(0,mc.jsx)(Vp,{children:"Resources"}),(0,mc.jsx)(Up,{href:"#",children:"Why Temple?"}),(0,mc.jsx)(Up,{href:"#",children:"Articles"}),(0,mc.jsx)(Up,{href:"#",children:"Shop"}),(0,mc.jsx)(Up,{href:"#",children:"Bookings"})]}),(0,mc.jsxs)($p,{children:[(0,mc.jsx)(Vp,{children:"Company"}),(0,mc.jsx)(Up,{href:"#",children:"About us"}),(0,mc.jsx)(Up,{href:"#",children:"Gallery"}),(0,mc.jsx)(Up,{href:"#",children:"Temple List"}),(0,mc.jsx)(Up,{href:"#",children:"Contact Us"})]}),(0,mc.jsxs)($p,{children:[(0,mc.jsx)(Vp,{children:"Get latens"}),(0,mc.jsx)(Up,{href:"#",children:"Facebook"}),(0,mc.jsx)(Up,{href:"#",children:"Twitter"}),(0,mc.jsx)(Up,{href:"#",children:"LinkedIn"}),(0,mc.jsx)(Up,{href:"#",children:"YouTube"})]}),(0,mc.jsxs)($p,{children:[(0,mc.jsx)(Vp,{children:"Social"}),(0,mc.jsx)(Up,{href:"#",children:"Facebook"}),(0,mc.jsx)(Up,{href:"#",children:"Twitter"}),(0,mc.jsx)(Up,{href:"#",children:"LinkedIn"}),(0,mc.jsx)(Up,{href:"#",children:"YouTube"})]})]}),(0,mc.jsxs)(Hp,{children:[(0,mc.jsx)(Wp,{children:"\xa9 2024 Temple"}),(0,mc.jsx)(Wp,{children:"Support"}),(0,mc.jsx)(Wp,{children:"Privacy Policy"}),(0,mc.jsx)(Wp,{children:"Terms of Use"}),(0,mc.jsx)(Wp,{children:"Cookie Policy"})]})]})]}),Kp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t)).join(" ").trim()};var Xp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Qp=(0,t.forwardRef)(((e,n)=>{let{color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:c,...d}=e;return(0,t.createElement)("svg",{ref:n,...Xp,width:i,height:i,stroke:r,strokeWidth:o?24*Number(a)/Number(i):a,className:Kp("lucide",s),...d},[...c.map((e=>{let[n,r]=e;return(0,t.createElement)(n,r)})),...Array.isArray(l)?l:[l]])})),Jp=(e,n)=>{const r=(0,t.forwardRef)(((r,i)=>{let{className:a,...o}=r;return(0,t.createElement)(Qp,{ref:i,iconNode:n,className:Kp(`lucide-${s=e,s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,a),...o});var s}));return r.displayName=`${e}`,r},Zp=Jp("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),em=Jp("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),tm=Jp("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),nm=Jp("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),rm=n.p+"static/media/durgaMaa.739515de657cb8474fa8.png",im=n.p+"static/media/Ganesh.622fc26788fab3632248.png",am=n.p+"static/media/LordShiva.9704926990ce96e390bd.png",om=cn`
  from {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sm=cn`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,lm=cn`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`,cm=cn`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`,dm=dn.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,um=dn.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${e=>e.active?"0":"100%"});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  background-image: url(${e=>e.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${e=>e.active?Wt`gradientShift 8s ease infinite`:"none"};

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,pm=dn.div`
  max-width: 1200px;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`,mm=dn.div`
  color: white;
  animation: ${e=>e.active?om:"none"} 1s ease-out 0.3s
    both;
`,hm=dn.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, rgb(255, 153, 51));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  animation: ${e=>e.active?om:"none"} 1s ease-out 0.5s
    both;
`,fm=dn.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  animation: ${e=>e.active?om:"none"} 1s ease-out 0.7s
    both;
`,gm=dn.div`
  display: flex;
  gap: 1rem;
  animation: ${e=>e.active?om:"none"} 1s ease-out 0.9s
    both;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,xm=dn.button`
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
    animation: ${cm} 2s infinite;
  }
`,bm=dn.button`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`,vm=dn.div`
  position: relative;
  animation: ${e=>e.active?sm:"none"} 1s ease-out 0.2s
    both;
`,ym=dn.div`
  opacity: 0.3;
  width: ${e=>e.size||"300px"};
  height: ${e=>e.size||"300px"};
  background: ${e=>e.bg||"linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"};
  border-radius: 50%;
  position: absolute;
  top: ${e=>e.top||"50%"};
  left: ${e=>e.left||"50%"};
  transform: translate(-50%, -50%);
  animation: ${lm} ${e=>e.duration||"6s"} ease-in-out infinite;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: ${e=>e.zIndex||1};

  &::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }
`,wm=dn.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  align-items: center;
  z-index: 10;
`,jm=dn.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`,Sm=dn.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 1rem;
`,km=dn.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.active?"white":"rgba(255, 255, 255, 0.3)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: scale(1.2);
  }
`,Em=dn.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #ee5a24);
  width: ${e=>e.progress}%;
  transition: width 0.1s linear;
  z-index: 10;
`,Cm=[{id:1,title:"Maa Durga\u2019s Blessings for All",subtitle:"She rises with strength, protects with grace, The divine energy in every time and space.",gradient:"linear-gradient(135deg, #DC143C 0%, #FF8C00 100%)",cta1:"Get Started",cta2:"Watch Demo",img:rm},{id:2,title:"Divine Beginnings with Lord Ganesha",subtitle:"Seek blessings under the sacred shade,Where wisdom and new journeys are made.",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",cta1:"Explore",cta2:"More",img:im},{id:3,title:"Ganesh Chaturthi Celebrations Begin",subtitle:"In the heart of nature, Bappa arrives with grace,Let wisdom and joy fill every sacred space.",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",cta1:"Start Free Trial",cta2:"View Pricing",img:am}];function Am(){const[e,n]=(0,t.useState)(0),[r,i]=(0,t.useState)(0),[a,o]=(0,t.useState)(!0);(0,t.useEffect)((()=>{if(!a)return;const e=setInterval((()=>{i((e=>e>=100?(n((e=>(e+1)%Cm.length)),0):e+.5))}),50);return()=>clearInterval(e)}),[a]);return(0,mc.jsxs)(dm,{onMouseEnter:()=>o(!1),onMouseLeave:()=>o(!0),children:[Cm.map(((t,n)=>(0,mc.jsx)(um,{active:n===e,gradient:t.gradient,img:t.img,children:(0,mc.jsxs)(pm,{children:[(0,mc.jsxs)(mm,{active:n===e,children:[(0,mc.jsx)(hm,{active:n===e,children:t.title}),(0,mc.jsx)(fm,{active:n===e,children:t.subtitle}),(0,mc.jsxs)(gm,{active:n===e,children:[(0,mc.jsxs)(xm,{children:[t.cta1,(0,mc.jsx)(Zp,{size:20})]}),(0,mc.jsxs)(bm,{children:[(0,mc.jsx)(em,{size:20}),t.cta2]})]})]}),(0,mc.jsxs)(vm,{active:n===e,children:[(0,mc.jsx)(ym,{size:"400px",duration:"8s",zIndex:1}),(0,mc.jsx)(ym,{size:"200px",top:"30%",left:"70%",duration:"6s",bg:"linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))",zIndex:2}),(0,mc.jsx)(ym,{size:"120px",top:"70%",left:"20%",duration:"4s",bg:"linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",zIndex:3})]})]})},t.id))),(0,mc.jsxs)(wm,{children:[(0,mc.jsx)(jm,{onClick:()=>{n((e=>(e-1+Cm.length)%Cm.length)),i(0)},children:(0,mc.jsx)(tm,{size:24})}),(0,mc.jsx)(Sm,{children:Cm.map(((t,r)=>(0,mc.jsx)(km,{active:r===e,onClick:()=>(e=>{n(e),i(0)})(r)},r)))}),(0,mc.jsx)(jm,{onClick:()=>{n((e=>(e+1)%Cm.length)),i(0)},children:(0,mc.jsx)(nm,{size:24})})]}),(0,mc.jsx)(Em,{progress:r})]})}const _m=dn.section`
  padding: 2.5rem 0;
  background: url('https://ayodhyadarshanam.com/static/media/SubHeroBg.eefb8ef14f7af1951305.png');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(255, 153, 51, 0.05),
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(218, 165, 32, 0.05),
        transparent 50%
      );
  }
`,Pm=dn.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`,Tm=dn(ac.h2)`
  font-size: 4rem;
  font-weight: 900;
  background: #ab353d;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: ${e=>e.theme.colors.gradient.primary};
    border-radius: 2px;
  }

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`,Rm=dn(ac.p)`
  font-size: 1.3rem;
  color: ${e=>e.theme.colors.darkGray};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,zm=dn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Dm=dn(ac.div)`
  background: ${e=>e.theme.colors.white};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`,Fm=dn.div`
  height: 200px;
  position: relative;
  overflow: hidden;
`,Nm=dn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Im=dn.div`
  padding: 1.5rem;
`,Mm=dn.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.5rem;
`,Lm=dn.p`
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,Om=dn.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  gap: 0.4rem;
`,Bm=dn.span`
  color: ${e=>e.theme.colors.darkGray};
  font-size: 0.9rem;
`,$m=dn.span`
  color: ${e=>e.theme.colors.text};
  font-weight: 500;
  font-size: 0.9rem;
`,Vm=dn.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,Um=dn(ac.button)`
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  background: transparent;
  color: ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.primary};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 153, 51, 0.1);
  }
`,Hm=dn(ac.button)`
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`,Wm=()=>{const e=J(),t={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return(0,mc.jsx)(_m,{children:(0,mc.jsxs)("div",{className:"container",children:[(0,mc.jsxs)(Pm,{children:[(0,mc.jsx)(Tm,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8},viewport:{once:!0},children:"Sacred Temples"}),(0,mc.jsx)(Rm,{initial:{y:30,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"Discover India's most revered temples and plan your visit"})]}),(0,mc.jsx)(ac.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:(0,mc.jsx)(zm,{children:[{id:1,name:"Kashi Vishwanath Temple",location:"Varanasi, Uttar Pradesh",deity:"Lord Shiva",timings:"5AM-11AM, 4PM-9PM",image:"https://i.pinimg.com/736x/9e/90/70/9e90707222c55c19f922ff7097c5975d.jpg"},{id:2,name:"Jagannath Temple",location:"Puri, Odisha",deity:"Lord Jagannath",timings:"6AM-9PM",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-agvMxTV3rSTZCB9Npd1ueYqg-qbe0bxhQ&s"},{id:3,name:"Meenakshi Temple",location:"Madurai, Tamil Nadu",deity:"Goddess Meenakshi",timings:"5AM-12:30PM, 4PM-9:30PM",image:"https://i.natgeofe.com/n/b9e9b8d1-fa08-4b90-96bb-310cace03847/meenakshi-amman-temple-india.jpg"},{id:4,name:"Tirupati Balaji Temple",location:"Andhra Pradesh",deity:"Lord Venkateswara",timings:"3AM-11:30PM",image:"https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/09/How-to-Reach-Tirupati-Balaji-Temple.jpg"},{id:5,name:"Somnath Temple",location:"Gujarat",deity:"Lord Shiva",timings:"6AM-10PM",image:"https://c9admin.cottage9.com/uploads/5839/somnath-temple.jpg"},{id:6,name:"Golden Temple",location:"Amritsar, Punjab",deity:"Guru Granth Sahib",timings:"Open 24 Hours",image:"https://static.toiimg.com/photo/61820954.cms"}].map((n=>(0,mc.jsxs)(Dm,{variants:t,whileHover:{y:-5},children:[(0,mc.jsx)(Fm,{children:(0,mc.jsx)(Nm,{src:n.image,alt:n.name})}),(0,mc.jsxs)(Im,{children:[(0,mc.jsx)(Mm,{children:n.name}),(0,mc.jsxs)(Lm,{children:["\ud83d\udccd ",n.location]}),(0,mc.jsxs)(Om,{children:[(0,mc.jsx)("span",{role:"img","aria-label":"Om",children:"\ud83d\udd49\ufe0f"}),(0,mc.jsx)(Bm,{children:"Deity:"}),(0,mc.jsx)($m,{children:n.deity})]}),(0,mc.jsxs)(Om,{children:[(0,mc.jsx)("span",{role:"img","aria-label":"Clock",children:"\ud83d\udd52"}),(0,mc.jsx)(Bm,{children:"Timings:"}),(0,mc.jsx)($m,{children:n.timings})]}),(0,mc.jsxs)(Vm,{children:[(0,mc.jsx)(Um,{whileHover:{scale:1.02},whileTap:{scale:.98},children:"View Details"}),(0,mc.jsx)(Hm,{onClick:()=>{return t=n.id,void e("/book-seva",{state:{templeId:t}});var t},whileHover:{scale:1.02},whileTap:{scale:.98},children:"Book Seva"})]})]})]},n.id)))})})]})})},Gm=dn.section`
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${_p});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 153, 51, 0.3), rgba(255, 193, 7, 0.2));
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
    min-height: auto;
    height: auto;
  }
`,Ym=dn.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`,qm=dn(ac.h2)`
  font-family: 'Lora', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: white;
    margin: 1rem auto;
  }
  
  @media (max-width: 480px) {
    &::after {
      width: 70px;
      margin: 0.8rem auto;
    }
  }
`,Km=dn(ac.p)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: white;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 0;
  }
`,Xm=dn.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 380px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 320px;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    min-height: 400px;
  }
`,Qm=dn(ac.div)`
  width: 100%;
  min-height: 380px;
  height: auto;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 320px;
  }

  @media (max-width: 480px) {
    min-height: 400px;
    padding: 1.2rem;
  }
`,Jm=dn.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,Zm=dn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`,eh=dn.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9933, #ffcc33);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`,th=dn.h4`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
  margin-bottom: 0.25rem;
`,nh=dn.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  opacity: 0.7;
`,rh=dn.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`,ih=dn.div`
  text-align: center;
  
  .stars {
    color: white;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    margin-bottom: 0.25rem;
  }
  
  .label {
    font-family: 'Inter', sans-serif;
    font-size: clamp(0.75rem, 1vw, 0.85rem);
    opacity: 0.8;
  }
`,ah=dn.p`
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-style: italic;
  max-width: 600px;
  margin: 1rem 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    line-height: 1.6;
    padding: 0;
    margin: 0.5rem 0 1rem;
  }
`,oh=dn.div`
  position: absolute;
  width: calc(100% - 40px);
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 10;
  
  @media (min-width: 768px) {
    width: calc(100% - 100px);
    left: 50px;
  }

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
    margin-top: 1rem;
    pointer-events: auto;
    justify-content: center;
    gap: 2rem;
  }
`,sh=dn.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #ffc464ff;
  border: 2px solid white;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: #ff8c1a;
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    position: static;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`,lh=dn.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
  position: relative;
  z-index: 10;

  @media (min-width: 769px) {
    display: none;
  }
`,ch=dn.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>{let{active:t}=e;return t?"#ff9933":"rgba(255, 255, 255, 0.5)"}};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff9933;
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`,dh=()=>{const[e,n]=(0,t.useState)(0),[r,i]=(0,t.useState)(!1),a=[{id:1,name:"Priya Sharma",location:"Mumbai, India",text:"The live darshan feature is absolutely amazing! I could participate in the morning aarti at Tirupati from my home. The video quality is excellent and the experience felt so divine.",avatar:"PS"},{id:2,name:"Rajesh Kumar",location:"Delhi, India",text:"Booking puja online was so convenient. The priests performed the ritual with complete devotion and I received the prasad within 3 days. Highly recommended service!",avatar:"RK"},{id:3,name:"Meera Patel",location:"Ahmedabad, Gujarat",text:"The bhajan collection is soul-stirring. I listen to them during my daily prayers and meditation. The quality of audio and the selection of bhajans is outstanding.",avatar:"MP"},{id:4,name:"Suresh Reddy",location:"Hyderabad, Telangana",text:"As someone living abroad, this platform helps me stay connected to my roots. The astrology consultation was very insightful and accurate. Thank you for this wonderful service.",avatar:"SR"},{id:5,name:"Kavita Singh",location:"Jaipur, Rajasthan",text:"The prasad delivery service is exceptional. Everything was packed beautifully and reached in perfect condition. It truly felt like receiving blessings directly from the temple.",avatar:"KS"},{id:6,name:"Amit Gupta",location:"Kolkata, West Bengal",text:"The spiritual blogs section is very informative. I've learned so much about different festivals and their significance. The content is well-researched and beautifully written.",avatar:"AG"}];(0,t.useEffect)((()=>{const e=()=>{i(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,t.useEffect)((()=>{const e=setInterval((()=>{n((e=>(e+1)%a.length))}),4e3);return()=>clearInterval(e)}),[a.length]);return(0,mc.jsx)(Gm,{children:(0,mc.jsxs)(Ym,{children:[(0,mc.jsx)(qm,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8},viewport:{once:!0},children:"What Our Devotees Say"}),(0,mc.jsx)(Km,{initial:{y:30,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"Hear from our users about their spiritual experiences and how our platform has enriched their lives"}),(0,mc.jsx)(Xm,{children:(0,mc.jsx)(pc,{mode:"wait",children:(0,mc.jsx)(Qm,{variants:{enter:{x:300,opacity:0},center:{zIndex:1,x:0,opacity:1},exit:{zIndex:0,x:-300,opacity:0}},initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:(0,mc.jsxs)(Jm,{children:[(0,mc.jsxs)(Zm,{children:[(0,mc.jsx)(eh,{children:a[e].avatar}),(0,mc.jsx)(th,{children:a[e].name}),(0,mc.jsx)(nh,{children:a[e].location})]}),(0,mc.jsx)(rh,{children:(0,mc.jsxs)(ih,{children:[(0,mc.jsx)("div",{className:"stars",children:"\u2605\u2605\u2605\u2605\u2605"}),(0,mc.jsx)("div",{className:"label",children:"Rating"})]})}),(0,mc.jsx)(ah,{children:a[e].text})]})},e)})}),(0,mc.jsxs)(oh,{children:[(0,mc.jsx)(sh,{onClick:()=>{n((e=>(e-1+a.length)%a.length))},"aria-label":"Previous testimonial",children:"\u2190"}),r&&(0,mc.jsx)(lh,{children:a.map(((t,r)=>(0,mc.jsx)(ch,{active:r===e,onClick:()=>(e=>{n(e)})(r),"aria-label":`Go to testimonial ${r+1}`},r)))}),(0,mc.jsx)(sh,{onClick:()=>{n((e=>(e+1)%a.length))},"aria-label":"Next testimonial",children:"\u2192"})]})]})})},uh=dn.section`
  padding: 4.5rem 1.5rem 3.5rem;
  background: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }
`,ph=dn.h2`
  font-size: 3.2rem;
  font-weight: 1000;
  color: #111;
  margin-bottom: 1.1rem;
  letter-spacing: -1px;
  line-height: 1.12;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: -0.5px;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,mh=dn.p`
  font-size: 1.22rem;
  color: #444;
  margin-bottom: 3.2rem;
  font-weight: 400;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0;
  }
`,hh=dn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.2rem 3.8rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`,fh=dn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 1.1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 0.8rem;
  }
`,gh=dn.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  font-size: 2.1rem;
  background: ${e=>{let{color:t}=e;return t||"#F4A300"}};
  color: #fff;
  margin-bottom: 0.2rem;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 1.8rem;
    border-radius: 12px;
  }
`,xh=dn.h3`
  font-size: 1.45rem;
  font-weight: 950;
  color: #111;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,bh=dn.p`
  font-size: 1.04rem;
  color: #444;
  line-height: 1.6;
  font-weight: 500;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    max-width: 300px;
  }
`,vh=[{icon:"\ud83d\uded5",color:"#F4A300",title:"Digital Temple",desc:"Carry your temple in your pocket and feel the divine presence anytime, anywhere."},{icon:"\ud83d\udcc5",color:"#E86A33",title:"Puja Booking",desc:"Book sevas and rituals online with ease and personalized Sankalp details."},{icon:"\ud83d\udcb0",color:"#A259FF",title:"Easy Donations",desc:"Offer your support securely and receive instant digital receipts."},{icon:"\ud83d\udce9",color:"#2EC4B6",title:"Devotee Connect",desc:"Send blessings, aarti timings, and festival updates directly to devotees."},{icon:"\ud83d\udd14",color:"#FFB703",title:"Ritual Alerts",desc:"Get reminders for aartis, fasts, and sacred festivals every day."},{icon:"\ud83c\udf38",color:"#FF6F61",title:"Virtual Seva",desc:"Light a diya, offer flowers, and stay connected with devotion from anywhere."}],yh=()=>(0,mc.jsxs)(uh,{children:[(0,mc.jsx)(ph,{children:"One App for all your devotional needs"}),(0,mc.jsx)(mh,{children:"Sri Mandir brings these amazing features for you, get these features for free and start your devotional journey now."}),(0,mc.jsx)(hh,{children:vh.map(((e,t)=>(0,mc.jsxs)(fh,{children:[(0,mc.jsx)(gh,{color:e.color,children:e.icon}),(0,mc.jsx)(xh,{children:e.title}),(0,mc.jsx)(bh,{children:e.desc})]},t)))})]}),wh=dn.section`
  padding: 4rem 0;
  background: #fff;
`,jh=dn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,Sh=dn.div`
  text-align: center;
  margin-bottom: 3rem;
`,kh=dn.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 1rem;
`,Eh=dn.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Ch=dn.a`
  color: #FF6B35;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #E55A2B;
  }
`,Ah=dn.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_h=dn.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`,Ph=dn.div`
  width: 100%;
  height: 180px;
  background: ${e=>{let{bgColor:t}=e;return t}};
  background-image: ${e=>{let{imageUrl:t}=e;return t?`url(${t})`:"none"}};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
`,Th=dn.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`,Rh=dn.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.8rem;
`,zh=dn.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  flex: 1;
`,Dh=dn.a`
  color: #FF6B35;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.3s ease;

  &:hover {
    color: #E55A2B;
    text-decoration: underline;
  }
`,Fh=[{id:1,title:"Aarti",description:"Find the lyrics and significance of popular Aartis to enrich your daily worship rituals.",imageUrl:"https://localnation.co.in/cdn/shop/products/YW2t9tqdzm.jpg?v=1665294178",bgColor:"#FF9933",link:"/aarti"},{id:2,title:"Chalisa",description:"Read powerful Chalisas dedicated to various deities. Chant to seek blessings and divine grace.",imageUrl:"https://img.freepik.com/free-photo/view-ancient-scroll-writing-documenting-history_23-2151751702.jpg?semt=ais_hybrid&w=740",bgColor:"#E86A33",link:"/chalisa"},{id:3,title:"Mantra",description:"Discover potent Vedic mantras to bring peace, focus, and spiritual strength into your life.",imageUrl:"https://moditoys.com/cdn/shop/articles/The-Power-of-Chanting-Vedic-Mantras-Explained.jpg?v=1739479315",bgColor:"#3B5998",link:"/mantra"},{id:4,title:"Blogs",description:"Read inspiring devotional blogs on fasting tips, festivals, Vedic stories, and spiritual journeys.",imageUrl:"https://img.freepik.com/premium-vector/blog-icons-design_18591-34330.jpg",bgColor:"#6C5CE7",link:"/blogs"}],Nh=()=>(0,mc.jsx)(wh,{children:(0,mc.jsxs)(jh,{children:[(0,mc.jsxs)(Sh,{children:[(0,mc.jsx)(kh,{children:"Discover Devotional Wisdom from Sanatan Dharma"}),(0,mc.jsx)(Eh,{children:"Explore enlightening articles on festivals, fasts, mantras, rituals, and holistic living \u2014 rooted in the timeless teachings of Sanatan Dharma."}),(0,mc.jsx)(Ch,{href:"/blogs",children:"Explore All Articles \u2192"})]}),(0,mc.jsx)(Ah,{children:Fh.map((e=>(0,mc.jsxs)(_h,{children:[(0,mc.jsx)(Ph,{bgColor:e.bgColor,imageUrl:e.imageUrl}),(0,mc.jsxs)(Th,{children:[(0,mc.jsx)(Rh,{children:e.title}),(0,mc.jsx)(zh,{children:e.description}),(0,mc.jsx)(Dh,{href:e.link,children:"Read All \u2192"})]})]},e.id)))})]})}),Ih=n.p+"static/media/temple_01.26ee47d4a835c489540c.png",Mh=n.p+"static/media/temple_02.c2d2228aa99ba4a8735a.png",Lh=n.p+"static/media/temple_03.79b60c1f5f18af2e7eb1.png",Oh=n.p+"static/media/temple_04.a61ec1a102477b7c71f2.png",Bh=dn.section`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #fff;
`,$h=dn.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,Vh=dn.div`
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background-image: ${e=>{let{imageUrl:t}=e;return`url(${t})`}};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: 30%;

  @media (max-width: 768px) {
    min-height: 400px;
    background-position-y: center;
  }
`,Uh=dn.h2`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`,Hh=dn.button`
  background: #ebcf89;
  color: #333333;
  border: none;
  border-radius: 9999px;
  padding: 12px 28px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d4b876;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 16px;
  }
`,Wh=dn.section`
  background: #fff;
  padding: 60px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`,Gh=dn.div`
  max-width: 1140px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: center;
  padding: 0 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 24px;
  }
`,Yh=dn.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 1;

  @media (max-width: 900px) {
    order: 2;
  }
`,qh=dn.h2`
  font-family: "Lora", serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #2d253f;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 1.5rem;
  }
`,Kh=dn.p`
  font-family: "Lora", serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 34px;
  color: rgb(67, 63, 76);
  margin-bottom: 1.5rem;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 1rem;
  }
`,Xh=dn.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  max-height: 420px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  order: 2;

  @media (max-width: 900px) {
    order: 1;
    max-height: 350px;
  }
`,Qh=dn.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  z-index: 10;
  width: 480px;
  max-width: 90%;
  margin: 20px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    transform: none;
    width: calc(100% - 40px);
    padding: 30px;
    margin: 20px auto;
  }
`,Jh=dn(Qh)`
  position: absolute;
  top: 65%;
  right: 6%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    right: 4%;
    width: 400px;
  }

  @media (max-width: 768px) {
    margin-top: -60px;
  }
`,Zh=dn(Qh)`
  position: absolute;
  top: 10%;
  left: 8%;

  @media (max-width: 1024px) {
    left: 4%;
    width: 400px;
  }

  @media (max-width: 768px) {
    margin-top: -60px;
  }
`,ef=dn(Qh)`
  position: absolute;
  top: 48%;
  right: 4%;

  @media (max-width: 1024px) {
    right: 4%;
    width: 400px;
  }

  @media (max-width: 768px) {
    margin-top: -60px;
  }
`,tf=dn.p`
  font-family: "Lora", serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #55525a;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`,nf=dn.div`
  @media (min-width: 769px) {
    display: none;
  }
`,rf=()=>(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsxs)(Bh,{children:[(0,mc.jsx)($h,{children:(0,mc.jsx)(Vh,{imageUrl:Ih})}),(0,mc.jsxs)(Jh,{children:[(0,mc.jsx)(Uh,{children:"Science Behind Hindu Temples"}),(0,mc.jsx)(tf,{children:"Discover the Ancient Science of Temple Architecture and Vaastu Shastras."}),(0,mc.jsx)(Hh,{children:"LEARN MORE"})]})]}),(0,mc.jsx)(Wh,{children:(0,mc.jsxs)(Gh,{children:[(0,mc.jsxs)(Yh,{children:[(0,mc.jsx)(qh,{children:"Not Anyone Can Restore Ancient Temples"}),(0,mc.jsx)(Kh,{children:"Temple architecture is an entire field of knowledge on its own and is based upon deep scientific and spiritual principles. Various texts like the Agamas and Shilpa Sastras teach the principles of temple architecture. Renovation cannot and must not be done by traditional contractors who have no regard towards the ancient texts/methodologies."}),(0,mc.jsx)(Kh,{children:"Instead, highly-qualified, trained, and established temple architects, or sthapathis as they are known, must undertake the renovation of these ancient temples so that the subtle energies do not get disturbed or ruined."}),(0,mc.jsx)(Kh,{children:"Behind Every Temple only utilizes these highly trained individuals to ensure 100% authentic renovations are done."})]}),(0,mc.jsx)(Xh,{src:Mh,alt:"Ancient ruined temple"})]})}),(0,mc.jsxs)(Bh,{children:[(0,mc.jsx)($h,{children:(0,mc.jsx)(Vh,{imageUrl:Lh})}),(0,mc.jsx)(nf,{children:(0,mc.jsxs)(Zh,{children:[(0,mc.jsx)(Uh,{children:"Completed Temple Renovations"}),(0,mc.jsx)(tf,{children:"Explore some of the completed temple renovation projects!"}),(0,mc.jsx)(Hh,{children:"LEARN MORE"})]})}),(0,mc.jsxs)(Zh,{children:[(0,mc.jsx)(Uh,{children:"Completed Temple Renovations"}),(0,mc.jsx)(tf,{children:"Explore some of the completed temple renovation projects!"}),(0,mc.jsx)(Hh,{children:"LEARN MORE"})]})]}),(0,mc.jsxs)(Bh,{children:[(0,mc.jsx)($h,{children:(0,mc.jsx)(Vh,{imageUrl:Oh})}),(0,mc.jsx)(nf,{children:(0,mc.jsxs)(ef,{children:[(0,mc.jsx)(Uh,{children:"Upcoming Temple Projects"}),(0,mc.jsx)(tf,{children:"Discover temples that are currently under restoration and how you can contribute!"}),(0,mc.jsx)(Hh,{children:"LEARN MORE"})]})}),(0,mc.jsxs)(ef,{children:[(0,mc.jsx)(Uh,{children:"Upcoming Temple Projects"}),(0,mc.jsx)(tf,{children:"Discover temples that are currently under restoration and how you can contribute!"}),(0,mc.jsx)(Hh,{children:"LEARN MORE"})]})]})]}),af=dn.section`
  padding: 5rem 0 5rem 0;
  background: #fff;
`,of=dn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,sf=dn.h2`
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 44px;
  line-height: 54px;
  color: #2d253f;
  text-align: center;
  margin-bottom: 3.5rem;
`,lf=dn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,cf=dn.div`
  background: #2d253f;
  border-radius: 24px;
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 340px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
`,df=dn.h3`
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: rgb(235, 207, 137);
  margin-bottom: 1.3rem;
`,uf=dn.p`
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: rgb(217, 231, 230);
  margin-bottom: 2.2rem;
`,pf=dn.button`
  background: #ebcf89;
  color: #232136;
  border: none;
  padding: 0.85rem 2.2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: auto;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 10px rgba(235, 207, 137, 0.10);
  &:hover {
    background: #ffe7a0;
    box-shadow: 0 4px 18px rgba(235, 207, 137, 0.18);
  }
`,mf=[{title:"Donate",description:"Help us directly restore ancient temples by contributing to verified projects rooted in dharma and tradition.",buttonText:"Donate Now"},{title:"Volunteer",description:"Join hands on-site or remotely\u2014assist with temple events, education, documentation, and outreach.",buttonText:"Volunteer"},{title:"Share",description:"Amplify our mission. Share stories, spread awareness, and inspire others to reconnect with Sanatan Dharma.",buttonText:"Share"}],hf=()=>(0,mc.jsx)(af,{children:(0,mc.jsxs)(of,{children:[(0,mc.jsx)(sf,{children:"3 Ways You Can Help Restore Temples & Protect Dharma"}),(0,mc.jsx)(lf,{children:mf.map(((e,t)=>(0,mc.jsxs)(cf,{children:[(0,mc.jsx)(df,{children:e.title}),(0,mc.jsx)(uf,{children:e.description}),(0,mc.jsx)(pf,{children:e.buttonText})]},e.title)))})]})}),ff=dn.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
`,gf=dn(ac.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(234, 88, 12, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(234, 88, 12, 0.4);
  }
`,xf=dn(ac.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  height: 480px;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 2px solid #FED7AA;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 85vw;
    height: 60vh;
    right: 7.5vw;
  }
`,bf=dn.div`
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
  color: white;
  padding: 0.875rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .online-indicator {
    width: 12px;
    height: 12px;
    background: #10B981;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.2);
  }



  .header-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .header-btn {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`,vf=dn.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #FFF8F0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #FED7AA;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #EA580C;
    border-radius: 3px;
  }
`,yf=dn(ac.div)`
  max-width: 85%;
  padding: 0.875rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  line-height: 1.4;
  word-wrap: break-word;

  ${e=>e.isUser?"\n    background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);\n    color: white;\n    align-self: flex-end;\n    border-bottom-right-radius: 0.25rem;\n  ":"\n    background: white;\n    color: #374151;\n    align-self: flex-start;\n    border: 1px solid #FED7AA;\n    border-bottom-left-radius: 0.25rem;\n  "}

  /* Bot message formatting */
  ${e=>!e.isUser&&"\n    h1, h2, h3, h4, h5, h6 {\n      color: #EA580C;\n      margin: 0.5rem 0;\n      font-weight: 600;\n    }\n\n    h1 { font-size: 1.1rem; }\n    h2 { font-size: 1rem; }\n    h3 { font-size: 0.95rem; }\n\n    strong, b {\n      color: #EA580C;\n      font-weight: 600;\n    }\n\n    em, i {\n      color: #B45309;\n      font-style: italic;\n    }\n\n    ul, ol {\n      margin: 0.5rem 0;\n      padding-left: 1.5rem;\n    }\n\n    li {\n      margin: 0.25rem 0;\n    }\n\n    p {\n      margin: 0.5rem 0;\n    }\n\n    .highlight {\n      background: #FEF3C7;\n      padding: 0.25rem 0.5rem;\n      border-radius: 0.25rem;\n      color: #B45309;\n      font-weight: 500;\n    }\n\n    .highlight-saffron {\n      color: #FF6B35;\n      font-weight: 600;\n    }\n\n    .divider {\n      border-top: 1px solid #FED7AA;\n      margin: 0.75rem 0;\n    }\n  "}
`,wf=dn.div`
  padding: 0.875rem;
  border-top: 1px solid #FED7AA;
  background: white;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,jf=dn.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #FED7AA;
  border-radius: 2rem;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #EA580C;
  }

  &::placeholder {
    color: #9CA3AF;
  }
`,Sf=dn.button`
  background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,kf=dn.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid #FED7AA;
  border-radius: 1rem;
  align-self: flex-start;
  border-bottom-left-radius: 0.25rem;

  .dot {
    width: 8px;
    height: 8px;
    background: #EA580C;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out;

    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`,Ef=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)([{id:1,text:"Namaste! \ud83d\ude4f I'm your temple assistant. How can I help you today?",isUser:!1,timestamp:new Date}]),[a,o]=(0,t.useState)(""),[s,l]=(0,t.useState)(!1),c=(0,t.useRef)(null),d=(0,t.useRef)(null);(0,t.useEffect)((()=>{(()=>{var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})})()}),[r]),(0,t.useEffect)((()=>{e&&d.current&&d.current.focus()}),[e]);const u=async()=>{if(!a.trim()||s)return;const e={id:Date.now(),text:a.trim(),isUser:!0,timestamp:new Date};i((t=>[...t,e])),o(""),l(!0);try{const t=await fetch("https://niraj-22.app.n8n.cloud/webhook/33e18bf6-e658-434b-b53c-2993ea8151aa",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e.text})}),n=await t.json();let r;console.log("API Response:",n),"output"in n?r=n.output:"response"in n?r=n.response:"text"in n?r=n.text:"message"in n?r=n.message:(console.log("Response structure:",n),r=JSON.stringify(n));const a=(e=>{if(!e)return e;let t=e.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/__(.*?)__/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/_(.*?)_/g,"<em>$1</em>").replace(/^\* (.*$)/gim,"<li>$1</li>").replace(/^- (.*$)/gim,"<li>$1</li>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/\[(.*?)\]/g,'<span class="highlight">$1</span>').replace(/---/g,'<div class="divider"></div>');return t=t.replace(/\b(Temple|Mandir|Gurudwara|Church|Mosque)\b/gi,'<span class="highlight-saffron">$1</span>').replace(/\b(Lord|Goddess|Shiva|Vishnu|Brahma|Ganesh|Krishna|Rama|Hanuman|Durga|Lakshmi|Saraswati|Kali|Kartikeya|Ganesha|Shiv|Vishnu|Brahma|Ganesh|Krishna|Rama|Hanuman|Durga|Lakshmi|Saraswati|Kali|Kartikeya)\b/gi,'<span class="highlight-saffron">$1</span>').replace(/\b(Puja|Pooja|Aarti|Bhajan|Kirtan|Prasad|Prasadam|Darshan|Darsanam|Abhishek|Abhishekam|Havan|Yagya|Yajna|Mantra|Sloka|Stotra|Stotram)\b/gi,'<span class="highlight-saffron">$1</span>').replace(/\b(Morning|Evening|Afternoon|Night|Dawn|Dusk|Sunrise|Sunset|AM|PM|O'Clock|Hours|Minutes|Days|Weeks|Months|Years)\b/gi,'<span class="highlight-saffron">$1</span>').replace(/\b(\u20b9\d+|\d+\s*(rupees|rs|rupee)|Rs\.?\s*\d+)\b/gi,'<span class="highlight-saffron">$1</span>').replace(/\b(\d{10}|\d{3}-\d{3}-\d{4}|\+91\s*\d{10})\b/g,'<span class="highlight-saffron">$1</span>').replace(/\b(Book|Booking|Reserve|Reservation|Register|Registration|Schedule|Appointment|Visit|Attend|Participate|Join|Enroll|Sign up|Sign-up)\b/gi,'<span class="highlight-saffron">$1</span>').replace(/\b(Sacred|Divine|Holy|Blessed|Spiritual|Religious|Traditional|Ancient|Historic|Famous|Popular|Important|Special|Unique|Rare|Exclusive)\b/gi,'<span class="highlight-saffron">$1</span>'),t.includes("<h1>")||t.includes("<h2>")||t.includes("<h3>")||(t=`<p>${t}</p>`),t.includes("<li>")&&(t=t.replace(/(<li>.*<\/li>)/gs,"<ul>$1</ul>")),t})(r);console.log("Original text:",r),console.log("Formatted text:",a);const o={id:Date.now()+1,text:a||"I'm sorry, I couldn't process your request. Please try again.",isUser:!1,timestamp:new Date};i((e=>[...e,o]))}catch(t){console.error("Error sending message:",t);const e={id:Date.now()+1,text:"I'm sorry, there was an error processing your request. Please try again later.",isUser:!1,timestamp:new Date};i((t=>[...t,e]))}finally{l(!1)}};return(0,mc.jsxs)(ff,{children:[(0,mc.jsx)(pc,{children:e&&(0,mc.jsxs)(xf,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{duration:.3},children:[(0,mc.jsxs)(bf,{children:[(0,mc.jsxs)("h3",{children:["\ud83d\udd49\ufe0f Bhakti Assistant",(0,mc.jsx)("div",{className:"online-indicator"})]}),(0,mc.jsxs)("div",{className:"header-buttons",children:[(0,mc.jsx)("button",{className:"header-btn",onClick:()=>{i([{id:Date.now(),text:"Namaste! \ud83d\ude4f I'm your temple assistant. How can I help you today?",isUser:!1,timestamp:new Date}])},"aria-label":"Clear chat",title:"Clear chat",children:"\ud83d\uddd1\ufe0f"}),(0,mc.jsx)("button",{className:"header-btn",onClick:()=>n(!1),"aria-label":"Close chat",title:"Close chat",children:"\xd7"})]})]}),(0,mc.jsxs)(vf,{children:[(0,mc.jsxs)(pc,{children:[r.map((e=>(0,mc.jsx)(yf,{isUser:e.isUser,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:e.isUser?e.text:(0,mc.jsx)("div",{dangerouslySetInnerHTML:{__html:e.text}})},e.id))),s&&(0,mc.jsxs)(kf,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,mc.jsx)("div",{className:"dot"}),(0,mc.jsx)("div",{className:"dot"}),(0,mc.jsx)("div",{className:"dot"})]})]}),(0,mc.jsx)("div",{ref:c})]}),(0,mc.jsxs)(wf,{children:[(0,mc.jsx)(jf,{ref:d,type:"text",placeholder:"Type your message...",value:a,onChange:e=>o(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),u())},disabled:s}),(0,mc.jsx)(Sf,{onClick:u,disabled:!a.trim()||s,"aria-label":"Send message",children:"\u27a4"})]})]})}),(0,mc.jsx)(gf,{onClick:()=>n(!e),whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Open chat",children:"\ud83d\udcac"})]})},Cf=dn.div`
  min-height: 100vh;
  position: relative;
`,Af=()=>(0,mc.jsxs)(Cf,{children:[(0,mc.jsx)(Am,{}),(0,mc.jsx)(Wm,{}),(0,mc.jsx)(hf,{}),(0,mc.jsx)(rf,{}),(0,mc.jsx)(yh,{}),(0,mc.jsx)(dh,{}),(0,mc.jsx)(Nh,{}),(0,mc.jsx)(Ef,{})]}),_f=dn.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fef7e0 0%, #fff8dc 50%, #f5f5dc 100%);
  font-family: 'Georgia', serif;
  padding-top: 80px;
`,Pf=dn.div`
  background: linear-gradient(45deg, #8b4513 0%, #a0522d 50%, #cd853f 100%);
  color: white;
  text-align: center;
  padding: 60px 20px 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="lotus" patternUnits="userSpaceOnUse" width="20" height="20"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23lotus)"/></svg>');
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,Tf=dn(ac.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  font-family: 'Cinzel', serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Rf=dn(ac.p)`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`,zf=dn(ac.p)`
  font-size: 1.1rem;
  font-style: italic;
  opacity: 0.8;
`,Df=dn.section`
  max-width: 1200px;
  margin: -20px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`,Ff=dn(ac.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border: 4px solid #daa520;
`,Nf=dn.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 300px;
  }
`,If=dn.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
`,Mf=dn.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${e=>e.active?"#daa520":"#ccc"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #daa520;
  }
`,Lf=dn.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`,Of=dn.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Bf=dn.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: start;
  position: sticky;
  top: 100px;
`,$f=dn(ac.section)`
  background: white;
  padding: 30px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border-left: 5px solid #daa520;
`,Vf=dn.h2`
  font-size: 1.8rem;
  color: #8b4513;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '🕉️';
    font-size: 1.2rem;
  }
`,Uf=dn.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  text-align: justify;
`,Hf=dn(ac.div)`
  background: linear-gradient(135deg, #fff 0%, #fefefe 100%);
  padding: 25px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  border: 1px solid #e0e0e0;
`,Wf=dn.h3`
  font-size: 1.4rem;
  color: #8b4513;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
`,Gf=dn.div`
  display: grid;
  gap: 12px;
`,Yf=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: #faf0e6;
  border-radius: 8px;
  border-left: 3px solid #daa520;
`,qf=dn.span`
  font-weight: 600;
  color: #8b4513;
`,Kf=dn.span`
  color: #444;
  font-family: monospace;
`,Xf=(dn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`,dn.span`
  background: linear-gradient(45deg, #daa520, #b8860b);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`,dn(ac.button)`
  background: linear-gradient(45deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 30px auto 0;
  display: block;
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
  }
`),Qf=dn.div`
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
`,Jf=dn.div`
  margin: 10px 0;

  strong {
    display: block;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 5px;
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
  }
`,Zf=dn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: #8b4513;
`,eg=dn.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
`,tg=dn.div`
  font-size: 1.2rem;
  color: #c00;
  margin-bottom: 20px;
`,ng=dn.button`
  background: #8b4513;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #a0522d;
  }
`,rg="https://www.poojn.in/wp-content/uploads/2025/02/Govindaraja-Temple-History-Architecture-and-Significance.jpeg.jpg",ig=()=>{const{templeId:e}=function(){let{matches:e}=t.useContext(Y),n=e[e.length-1];return n?n.params:{}}(),n=J(),[r,i]=(0,t.useState)(0),[a,o]=(0,t.useState)(null),[s,l]=(0,t.useState)(!0),[c,d]=(0,t.useState)("");(0,t.useEffect)((()=>{e&&(async()=>{try{l(!0),d(""),console.log("Fetching temple details for ID:",e);const i=await(0,Ec.gettemplist)();if(console.log("API Response:",i),console.log("Response data:",null===i||void 0===i?void 0:i.data),null!==i&&void 0!==i&&i.data&&Array.isArray(i.data)){console.log("Temple list length:",i.data.length);const a=i.data.find((t=>{const n=t.temple_id||t.id;return console.log(`Checking temple: ${t.name}, ID: ${n}, Looking for: ${e}`),n==e}));if(console.log("Found temple:",a),a){var t,n,r;const e={id:a.temple_id||a.id,name:a.name||"Unnamed Temple",location:a.location||[a.address_line_3,a.state_code].filter(Boolean).join(", ")||"Location not specified",deity:a.deity||"Deity not specified",timingsText:m(null===(t=a.additional_field_list)||void 0===t?void 0:t.temple_timings),sections:p(null===(n=a.additional_field_list)||void 0===n?void 0:n.temple_data_list),timings:h(null===(r=a.additional_field_list)||void 0===r?void 0:r.temple_timings),images:u(a)};console.log("Transformed data:",e),o(e)}else d("Temple not found")}else d("Failed to load temple data")}catch(i){console.error("Error fetching temple details:",i),d("Failed to load temple details. Please try again.")}finally{l(!1)}})()}),[e]);const u=e=>{const t=[];console.log("Processing images for temple:",e.name),console.log("Main image:",e.image),e.image&&(t.push(e.image),console.log("Added main image:",e.image));for(let n=1;n<=9;n++){const r=`image_${n}`;e[r]&&(t.push(e[r]),console.log(`Added ${r}:`,e[r]))}return console.log("Total images collected:",t.length),console.log("All images:",t),0===t.length&&(t.push(rg),console.log("No images found, using default")),t},p=e=>{if(console.log("Processing temple_data_list:",e),!e||!Array.isArray(e))return console.log("No temple_data_list found, using fallback"),[{title:"Information",content:"Temple information not available."}];const t=e.map((e=>({title:e.title||"Section",content:e.paragraph||"Content not available."})));return console.log("Processed sections:",t),t},m=e=>{if(console.log("Processing timings object:",e),!e||!e.selected_time_slots||!Array.isArray(e.selected_time_slots))return console.log("No selected_time_slots found"),"Timings not available";const t=e.selected_time_slots;if(console.log("Time slots found:",t),0===t.length)return"Timings not available";const n=t.map((e=>`${e.start||""} - ${e.end||""}`)).join(", ");return console.log("Formatted timings:",n),n},h=e=>{if(console.log("Processing detailed timings:",e),!e||!e.selected_time_slots||!Array.isArray(e.selected_time_slots))return console.log("No selected_time_slots for detailed timings"),[{title:"General Timings",time:"Information not available"}];const t=e.selected_time_slots;if(console.log("Time slots for detailed timings:",t),0===t.length)return[{title:"General Timings",time:"Information not available"}];const n=t.map((e=>({title:e.name||"Time Slot",time:`${e.start||""} - ${e.end||""}`})));return console.log("Detailed timings created:",n),n};if((0,t.useEffect)((()=>{if(a&&a.images&&a.images.length>1){const e=setInterval((()=>{i((e=>(e+1)%a.images.length))}),5e3);return()=>clearInterval(e)}}),[a]),s)return(0,mc.jsx)(Zf,{children:(0,mc.jsx)("div",{children:"\ud83d\udd49\ufe0f Loading temple details..."})});if(c||!a)return(0,mc.jsxs)(eg,{children:[(0,mc.jsx)(tg,{children:c||"Something went wrong"}),(0,mc.jsx)(ng,{onClick:()=>window.location.reload(),children:"Try Again"})]});const f={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},g={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5,ease:"easeOut"}}};return(0,mc.jsxs)(_f,{children:[(0,mc.jsxs)(Pf,{children:[(0,mc.jsx)(Tf,{variants:g,initial:"hidden",animate:"visible",children:a.name}),(0,mc.jsxs)(Rf,{variants:g,initial:"hidden",animate:"visible",transition:{delay:.1},children:["\ud83d\udccd ",a.location]}),(0,mc.jsxs)(zf,{variants:g,initial:"hidden",animate:"visible",transition:{delay:.2},children:["Dedicated to ",a.deity]})]}),(0,mc.jsxs)(Df,{children:[(0,mc.jsx)(Ff,{variants:g,initial:"hidden",animate:"visible",transition:{delay:.3},children:(0,mc.jsx)(Nf,{src:a.images&&a.images.length>0?a.images[r]:rg,alt:`${a.name} Image ${r+1}`,onError:e=>{console.log("Image failed to load, using default"),e.target.src=rg}})}),a.images&&a.images.length>1&&(0,mc.jsx)(If,{children:a.images.map(((e,t)=>(0,mc.jsx)(Mf,{active:t===r,onClick:()=>i(t)},t)))})]}),(0,mc.jsxs)(Lf,{children:[(0,mc.jsx)(Of,{children:(0,mc.jsxs)(ac.div,{variants:f,initial:"hidden",animate:"visible",children:[a.sections&&a.sections.length>0?a.sections.map(((e,t)=>(0,mc.jsxs)($f,{variants:g,children:[(0,mc.jsx)(Vf,{children:e.title}),(0,mc.jsx)(Uf,{children:e.content})]},t))):(0,mc.jsxs)($f,{variants:g,children:[(0,mc.jsx)(Vf,{children:"About This Temple"}),(0,mc.jsxs)(Uf,{children:["Welcome to ",a.name,". This sacred place offers spiritual solace and divine blessings to all devotees. The temple is located in ",a.location," and is dedicated to ",a.deity,"."]})]}),(0,mc.jsx)(Xf,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>n("/book-seva",{state:{templeId:a.id}}),children:"\ud83d\ude4f Book Seva"})]})}),(0,mc.jsx)(Bf,{children:(0,mc.jsxs)(ac.div,{variants:f,initial:"hidden",animate:"visible",children:[(0,mc.jsx)(Hf,{variants:g,children:(0,mc.jsxs)(Qf,{children:[(0,mc.jsxs)(Jf,{children:[(0,mc.jsx)("strong",{children:"Temple Timings"}),(0,mc.jsx)("span",{children:a.timingsText})]}),(0,mc.jsxs)(Jf,{children:[(0,mc.jsx)("strong",{children:"Primary Deity"}),(0,mc.jsx)("span",{children:a.deity})]})]})}),(0,mc.jsxs)(Hf,{variants:g,children:[(0,mc.jsx)(Wf,{children:"\ud83d\udd50 Detailed Timings"}),(0,mc.jsx)(Gf,{children:a.timings.map(((e,t)=>(0,mc.jsxs)(Yf,{children:[(0,mc.jsx)(qf,{children:e.title}),(0,mc.jsx)(Kf,{children:e.time})]},t)))})]}),(0,mc.jsxs)(Hf,{variants:g,children:[(0,mc.jsx)(Wf,{children:"\ud83d\ude4f Sacred Offerings"}),(0,mc.jsx)("div",{style:{textAlign:"center",color:"#888",padding:"20px"},children:"Offerings information not available"})]})]})})]})]})},ag=dn.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  z-index: 1000;
  overflow-y: auto;

  @media (max-width: 768px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`,og=dn.div`
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .om-symbol {
    font-size: 2.5rem;
    color: #f59e0b;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
  }

  .subtitle {
    font-size: 0.9rem;
    color: #94a3b8;
    margin-top: 0.25rem;
  }
`,sg=dn.div`
  padding: 1.5rem 0;
`,lg=dn.div`
  padding: 0 2rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,cg=dn(Ae)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: ${e=>e.active?"#F59E0B":"#E2E8F0"};
  background: ${e=>e.active?"rgba(245, 158, 11, 0.1)":"transparent"};
  text-decoration: none;
  transition: all 0.3s ease;
  border-right: ${e=>e.active?"3px solid #F59E0B":"3px solid transparent"};

  &:hover {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }

  .icon {
    font-size: 1.2rem;
    margin-right: 1rem;
    width: 20px;
    text-align: center;
  }

  .label {
    font-weight: 500;
  }
`,dg=()=>{const e=X();return(0,mc.jsxs)(ag,{children:[(0,mc.jsxs)(og,{children:[(0,mc.jsx)(ac.div,{className:"om-symbol",animate:{filter:["drop-shadow(0 0 10px rgba(245, 158, 11, 0.5))","drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))","drop-shadow(0 0 10px rgba(245, 158, 11, 0.5))"]},transition:{duration:3,repeat:Number.POSITIVE_INFINITY,repeatType:"reverse"},children:"\ud83d\udd49\ufe0f"}),(0,mc.jsx)("div",{className:"title",children:"Temple Admin"}),(0,mc.jsx)("div",{className:"subtitle",children:"Management Portal"})]}),(0,mc.jsxs)(sg,{children:[(0,mc.jsx)(lg,{children:"Temple Management"}),[{path:"/admin/temples",icon:"\ud83c\udfdb\ufe0f",label:"All Temple List",section:"Temple Management"}].map((t=>(0,mc.jsxs)(cg,{to:t.path,active:e.pathname===t.path,children:[(0,mc.jsx)("span",{className:"icon",children:t.icon}),(0,mc.jsx)("span",{className:"label",children:t.label})]},t.path)))]})]})};var ug=n(213);const pg=()=>!(!localStorage.getItem("userToken")&&!localStorage.getItem("customerToken")),mg=dn.div`
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`,hg=dn.h1`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
  
  @media (min-width: 480px) {
    font-size: 1.25rem;
    max-width: 220px;
  }
  
  @media (min-width: 640px) {
    font-size: 1.4rem;
    max-width: none;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`,fg=dn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (min-width: 480px) {
    gap: 0.75rem;
  }
  
  @media (min-width: 640px) {
    gap: 1rem;
  }
`,gg=dn.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #64748b;
  font-size: 0.8rem;
  
  @media (min-width: 480px) {
    font-size: 0.85rem;
    gap: 0.5rem;
  }
  
  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
`,xg=dn(ac.button)`
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.35rem 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.8rem;
  
  &:hover {
    background: #dc2626;
  }
  
  @media (min-width: 480px) {
    padding: 0.4rem 0.85rem;
    font-size: 0.85rem;
  }
  
  @media (min-width: 640px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
  }
`,bg=()=>{const e=J();return(0,mc.jsxs)(mg,{children:[(0,mc.jsx)(hg,{children:"Temple Management Dashboard"}),(0,mc.jsxs)(fg,{children:[(0,mc.jsxs)(gg,{children:[(0,mc.jsx)("span",{children:"\ud83d\udc64"}),(0,mc.jsx)("span",{children:"Admin User"})]}),(0,mc.jsx)(xg,{onClick:()=>{localStorage.removeItem("userToken"),localStorage.removeItem("customerToken"),e("/login")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Logout"})]})]})},vg=dn.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: ${e=>{const t={sm:"4px",md:"6px",lg:"8px"};return t[e.size]||t.md}};
  padding: ${e=>{const t={sm:"6px 12px",md:"8px 16px",lg:"12px 24px"};return t[e.size]||t.md}};
  font-size: ${e=>{const t={sm:"14px",md:"16px",lg:"18px"};return t[e.size]||t.md}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  outline: none;
  position: relative;
  min-width: fit-content;
  
  background: ${e=>{const t={blue:"#2563eb",red:"#dc2626",green:"#16a34a",orange:"#f7931e",gray:"#6b7280",purple:"#7c3aed",teal:"#0d9488",yellow:"#ca8a04"},n=t[e.color]||e.color||t.blue;return"outline"===e.variant?"transparent":n}};
  
  color: ${e=>{const t={blue:"#2563eb",red:"#dc2626",green:"#16a34a",orange:"#f7931e",gray:"#6b7280",purple:"#7c3aed",teal:"#0d9488",yellow:"#ca8a04"},n=t[e.color]||e.color||t.blue;return"outline"===e.variant?n:"#ffffff"}};
  
  border: ${e=>{const t={blue:"#2563eb",red:"#dc2626",green:"#16a34a",orange:"#f7931e",gray:"#6b7280",purple:"#7c3aed",teal:"#0d9488",yellow:"#ca8a04"},n=t[e.color]||e.color||t.blue;return"outline"===e.variant?`2px solid ${n}`:"none"}};
  
  &:hover:not(:disabled) {
    background: ${e=>{const t={blue:"#1d4ed8",red:"#b91c1c",green:"#15803d",orange:"#ea580c",gray:"#4b5563",purple:"#6d28d9",teal:"#0f766e",yellow:"#a16207"},n=t[e.color]||e.color||t.blue;return"outline"===e.variant?"rgba(0, 0, 0, 0.05)":n}};
    transform: ${e=>"outline"===e.variant?"none":"translateY(-1px)"};
    box-shadow: ${e=>{const t={blue:"#2563eb",red:"#dc2626",green:"#16a34a",orange:"#f7931e",gray:"#6b7280",purple:"#7c3aed",teal:"#0d9488",yellow:"#ca8a04"},n=t[e.color]||e.color||t.blue;return"outline"===e.variant?"none":`0 4px 12px ${n}40`}};
  }
  
  &:focus {
    outline: none;
    box-shadow: ${e=>{const t={blue:"#2563eb",red:"#dc2626",green:"#16a34a",orange:"#f7931e",gray:"#6b7280",purple:"#7c3aed",teal:"#0d9488",yellow:"#ca8a04"};return`0 0 0 3px ${t[e.color]||e.color||t.blue}30`}};
  }
  
  &:active:not(:disabled) {
    transform: ${e=>"outline"===e.variant?"none":"translateY(0)"};
    box-shadow: ${e=>{const t={blue:"#2563eb",red:"#dc2626",green:"#16a34a",orange:"#f7931e",gray:"#6b7280",purple:"#7c3aed",teal:"#0d9488",yellow:"#ca8a04"},n=t[e.color]||e.color||t.blue;return"outline"===e.variant?"none":`0 2px 8px ${n}50`}};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &:hover {
      background: ${e=>{const t={blue:"#2563eb",red:"#dc2626",green:"#16a34a",orange:"#f7931e",gray:"#6b7280",purple:"#7c3aed",teal:"#0d9488",yellow:"#ca8a04"},n=t[e.color]||e.color||t.blue;return"outline"===e.variant?"transparent":n}};
      transform: none;
      box-shadow: none;
    }
  }
  
  ${e=>e.loading&&"\n    position: relative;\n    color: transparent;\n    \n    &::after {\n      content: '';\n      position: absolute;\n      width: 16px;\n      height: 16px;\n      border: 2px solid transparent;\n      border-top: 2px solid currentColor;\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n    \n    @keyframes spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  "}
`,yg=e=>{let{children:t,variant:n="filled",color:r="blue",size:i="md",className:a,loading:o=!1,...s}=e;return(0,mc.jsx)(vg,{variant:n,color:r,size:i,className:a,loading:o,...s,children:t})};yg.defaultProps={variant:"filled",color:"blue",size:"md",loading:!1,type:"button"};const wg=yg,jg=dn(ac.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
`,Sg=dn(ac.div)`
  background: white;
  border-radius: 1rem;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`,kg=dn.div`
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
`,Eg=dn.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,Cg=dn.div`
  padding: 2rem;
`,Ag=dn.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_g=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.full-width {
    grid-column: 1 / -1;
  }
`,Pg=dn.label`
  color: #b45309;
  font-weight: 600;
  font-size: 0.9rem;
`,Tg=dn.input`
  padding: 0.75rem 1rem;
  border: 2px solid #fed7aa;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
  }
`,Rg=dn.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #fed7aa;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
  }
`,zg=dn.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`,Dg=dn.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #fecaca;
  margin-bottom: 1rem;
`,Fg=e=>{let{temple:n,onClose:r,onSuccess:i}=e;const[a,o]=(0,t.useState)({name:"",email_id:"",mobile_number:"",alternate_contact_number:"",contact_name:"",address_line_1:"",address_line_2:"",address_line_3:"",state_code:"",pin_code:"",county_code:"IN",established_date:"",remarks:"",web_page:"",location:"",geo_location_data:"",temple_group:"",temple_sub_group:"",temple_group_id:null,temple_sub_group_id:null}),[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)("");(0,t.useEffect)((()=>{n&&o({name:n.name||"",email_id:n.email_id||"",mobile_number:n.mobile_number||"",alternate_contact_number:n.alternate_contact_number||"",contact_name:n.contact_name||"",address_line_1:n.address_line_1||"",address_line_2:n.address_line_2||"",address_line_3:n.address_line_3||"",state_code:n.state_code||"",pin_code:n.pin_code||"",county_code:n.county_code||"IN",established_date:n.established_date||"",remarks:n.remarks||"",web_page:n.web_page||"",location:n.location||"",geo_location_data:n.geo_location_data||"",temple_group:n.temple_group||"",temple_sub_group:n.temple_sub_group||"",temple_group_id:n.temple_group_id||null,temple_sub_group_id:n.temple_sub_group_id||null,temple_id:n.temple_id||""})}),[n]);const u=e=>{o({...a,[e.target.name]:e.target.value}),d("")};return(0,mc.jsx)(jg,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:(0,mc.jsxs)(Sg,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,mc.jsxs)(kg,{children:[(0,mc.jsx)("h2",{children:n?"\u270f\ufe0f Edit Temple":"\u2795 Add New Temple"}),(0,mc.jsx)(Eg,{onClick:r,children:"\xd7"})]}),(0,mc.jsxs)(Cg,{children:[c&&(0,mc.jsx)(Dg,{children:c}),(0,mc.jsxs)(Ag,{onSubmit:async e=>{e.preventDefault(),l(!0),d("");try{const e={call_mode:n?"UPDATE":"ADD",...a};null!==n&&void 0!==n&&n.temple_id&&(e.temple_id=n.temple_id),console.log("Sending temple data:",{temple_data:e});const t=await(0,Ec.r5)({temple_data:e});console.log("API Response:",t),i()}catch(t){console.error("API Error:",t),d(t.message||"Failed to save temple. Please try again.")}finally{l(!1)}},children:[(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"name",children:"Temple Name *"}),(0,mc.jsx)(Tg,{type:"text",id:"name",name:"name",value:a.name,onChange:u,required:!0,placeholder:"Enter temple name"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"contact_name",children:"Contact Person"}),(0,mc.jsx)(Tg,{type:"text",id:"contact_name",name:"contact_name",value:a.contact_name,onChange:u,placeholder:"Contact person name"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"email_id",children:"Email Address"}),(0,mc.jsx)(Tg,{type:"email",id:"email_id",name:"email_id",value:a.email_id,onChange:u,placeholder:"temple@example.com"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"mobile_number",children:"Mobile Number *"}),(0,mc.jsx)(Tg,{type:"tel",id:"mobile_number",name:"mobile_number",value:a.mobile_number,onChange:u,required:!0,placeholder:"9876543210"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"alternate_contact_number",children:"Alternate Contact"}),(0,mc.jsx)(Tg,{type:"tel",id:"alternate_contact_number",name:"alternate_contact_number",value:a.alternate_contact_number,onChange:u,placeholder:"Alternate contact number"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"web_page",children:"Website"}),(0,mc.jsx)(Tg,{type:"url",id:"web_page",name:"web_page",value:a.web_page,onChange:u,placeholder:"https://www.temple.org"})]}),(0,mc.jsxs)(_g,{className:"full-width",children:[(0,mc.jsx)(Pg,{htmlFor:"address_line_1",children:"Address Line 1 *"}),(0,mc.jsx)(Tg,{type:"text",id:"address_line_1",name:"address_line_1",value:a.address_line_1,onChange:u,required:!0,placeholder:"Street address"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"address_line_2",children:"Address Line 2"}),(0,mc.jsx)(Tg,{type:"text",id:"address_line_2",name:"address_line_2",value:a.address_line_2,onChange:u,placeholder:"Area/Locality"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"address_line_3",children:"City *"}),(0,mc.jsx)(Tg,{type:"text",id:"address_line_3",name:"address_line_3",value:a.address_line_3,onChange:u,required:!0,placeholder:"City"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"state_code",children:"State Code *"}),(0,mc.jsx)(Tg,{type:"text",id:"state_code",name:"state_code",value:a.state_code,onChange:u,required:!0,placeholder:"AP, TN, KA, etc."})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"pin_code",children:"PIN Code *"}),(0,mc.jsx)(Tg,{type:"text",id:"pin_code",name:"pin_code",value:a.pin_code,onChange:u,required:!0,placeholder:"517501"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"established_date",children:"Established Date"}),(0,mc.jsx)(Tg,{type:"date",id:"established_date",name:"established_date",value:a.established_date,onChange:u})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"location",children:"Location Description"}),(0,mc.jsx)(Tg,{type:"text",id:"location",name:"location",value:a.location,onChange:u,placeholder:"Tirupati, Andhra Pradesh"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"geo_location_data",children:"Geo Location (Lat,Long)"}),(0,mc.jsx)(Tg,{type:"text",id:"geo_location_data",name:"geo_location_data",value:a.geo_location_data,onChange:u,placeholder:"13.6288,79.4192"})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"temple_group",children:"Temple Group"}),(0,mc.jsx)(Tg,{type:"text",id:"temple_group",name:"temple_group",value:a.temple_group,onChange:u,placeholder:"e.g., Narayan, Shiva, etc."})]}),(0,mc.jsxs)(_g,{children:[(0,mc.jsx)(Pg,{htmlFor:"temple_sub_group",children:"Temple Sub Group"}),(0,mc.jsx)(Tg,{type:"text",id:"temple_sub_group",name:"temple_sub_group",value:a.temple_sub_group,onChange:u,placeholder:"e.g., Heritage, Modern, etc."})]}),(0,mc.jsxs)(_g,{className:"full-width",children:[(0,mc.jsx)(Pg,{htmlFor:"remarks",children:"Remarks"}),(0,mc.jsx)(Rg,{id:"remarks",name:"remarks",value:a.remarks,onChange:u,placeholder:"Additional notes about the temple..."})]}),(0,mc.jsxs)(zg,{children:[(0,mc.jsx)(wg,{type:"button",variant:"outline",color:"gray",onClick:r,children:"Cancel"}),(0,mc.jsx)(wg,{type:"submit",color:"orange",disabled:s,loading:s,children:s?"\ud83d\ude4f Saving...":n?"\ud83d\udcbe Update Temple":"\u2795 Add Temple"})]})]})]})]})})},Ng=dn.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,Ig=dn.div`
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,Mg=dn.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
  }

  p {
    opacity: 0.9;
    margin: 0;
  }
`,Lg=dn(ac.button)`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,Og=dn.div`
  overflow-x: auto;
`,Bg=dn.table`
  width: 100%;
  border-collapse: collapse;
`,$g=dn.thead`
  background: #f8fafc;

  th {
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
  }
`,Vg=dn.tbody`
  tr {
    border-bottom: 1px solid #f3f4f6;
    transition: background-color 0.2s;

    &:hover {
      background: #f9fafb;
    }
  }

  td {
    padding: 1rem;
    color: #6b7280;
  }
`,Ug=dn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${e=>e.active?"#D1FAE5":"#FEE2E2"};
  color: ${e=>e.active?"#065F46":"#991B1B"};
`,Hg=dn.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s;

  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`,Wg=dn.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f4f6;
    border-top: 4px solid #ea580c;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,Gg=dn.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #6b7280;

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #374151;
  }
`,Yg=()=>{const[e,n]=(0,t.useState)([]),[r,i]=(0,t.useState)(!0),[a,o]=(0,t.useState)(!1),[s,l]=(0,t.useState)(null);(0,t.useEffect)((()=>{c()}),[]);const c=async()=>{try{i(!0);const e=await(0,Ec.gettemplist)();n(e.data||[])}catch(e){console.error("Error fetching temples:",e),n([])}finally{i(!1)}},d=()=>{o(!1),l(null)};return r?(0,mc.jsx)(Ng,{children:(0,mc.jsx)(Wg,{children:(0,mc.jsx)("div",{className:"spinner"})})}):(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsxs)(Ng,{children:[(0,mc.jsxs)(Ig,{children:[(0,mc.jsxs)(Mg,{children:[(0,mc.jsx)("h1",{children:"\ud83c\udfdb\ufe0f All Temple List"}),(0,mc.jsx)("p",{children:"Manage and monitor all registered temples"})]}),(0,mc.jsxs)(Lg,{onClick:()=>{l(null),o(!0)},whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,mc.jsx)("span",{children:"\u2795"}),"Add Temple"]})]}),0===e.length?(0,mc.jsxs)(Gg,{children:[(0,mc.jsx)("div",{className:"icon",children:"\ud83c\udfdb\ufe0f"}),(0,mc.jsx)("h3",{children:"No Temples Found"}),(0,mc.jsx)("p",{children:"Start by adding your first temple to the system"})]}):(0,mc.jsx)(Og,{children:(0,mc.jsxs)(Bg,{children:[(0,mc.jsx)($g,{children:(0,mc.jsxs)("tr",{children:[(0,mc.jsx)("th",{children:"Temple Name"}),(0,mc.jsx)("th",{children:"Location"}),(0,mc.jsx)("th",{children:"Contact"}),(0,mc.jsx)("th",{children:"Email"}),(0,mc.jsx)("th",{children:"Status"}),(0,mc.jsx)("th",{children:"Actions"})]})}),(0,mc.jsx)(Vg,{children:e.map(((e,t)=>(0,mc.jsxs)(ac.tr,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,mc.jsx)("td",{children:(0,mc.jsx)("strong",{children:e.name})}),(0,mc.jsx)("td",{children:e.location||`${e.address_line_3}, ${e.state_code}`}),(0,mc.jsx)("td",{children:e.mobile_number}),(0,mc.jsx)("td",{children:e.email_id}),(0,mc.jsx)("td",{children:(0,mc.jsx)(Ug,{active:"inactive"!==e.status,children:e.status||"Active"})}),(0,mc.jsxs)("td",{children:[(0,mc.jsx)(Hg,{onClick:()=>(e=>{l(e),o(!0)})(e),title:"Edit Temple",children:"\u270f\ufe0f"}),(0,mc.jsx)(Hg,{title:"View Details",children:"\ud83d\udc41\ufe0f"})]})]},e.id||t)))})]})})]}),(0,mc.jsx)(pc,{children:a&&(0,mc.jsx)(Fg,{temple:s,onClose:d,onSuccess:()=>{c(),d()}})})]})},qg=dn.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
`,Kg=dn.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 280px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`,Xg=dn.div`
  flex: 1;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Qg=()=>pg()?(0,mc.jsxs)(qg,{children:[(0,mc.jsx)(dg,{}),(0,mc.jsxs)(Kg,{children:[(0,mc.jsx)(bg,{}),(0,mc.jsx)(Xg,{children:(0,mc.jsxs)(ge,{children:[(0,mc.jsx)(he,{path:"/",element:(0,mc.jsx)(me,{to:"/admin/temples",replace:!0})}),(0,mc.jsx)(he,{path:"/temples",element:(0,mc.jsx)(Yg,{})})]})})]})]}):(0,mc.jsx)(me,{to:"/login",replace:!0});var Jg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Zg=t.createContext&&t.createContext(Jg),ex=["attr","size","title"];function tx(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function nx(){return nx=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nx.apply(this,arguments)}function rx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ix(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rx(Object(n),!0).forEach((function(t){ax(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rx(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ax(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ox(e){return e&&e.map(((e,n)=>t.createElement(e.tag,ix({key:n},e.attr),ox(e.child))))}function sx(e){return n=>t.createElement(lx,nx({attr:ix({},e.attr)},n),ox(e.child))}function lx(e){var n=n=>{var r,{attr:i,size:a,title:o}=e,s=tx(e,ex),l=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",nx({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:ix(ix({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==Zg?t.createElement(Zg.Consumer,null,(e=>n(e))):n(Jg)}function cx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"},child:[]}]})(e)}function dx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"},child:[]}]})(e)}function ux(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(e)}function px(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"},child:[]}]})(e)}function mx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},child:[]}]})(e)}function hx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"},child:[]}]})(e)}function fx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"},child:[]}]})(e)}function gx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"},child:[]}]})(e)}function xx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"},child:[]}]})(e)}function bx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(e)}function vx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"},child:[]}]})(e)}function yx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"},child:[]}]})(e)}function wx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"},child:[]}]})(e)}function jx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"},child:[]}]})(e)}function Sx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"},child:[]}]})(e)}function kx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"},child:[]}]})(e)}function Ex(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"},child:[]}]})(e)}function Cx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"},child:[]}]})(e)}function Ax(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(e)}function _x(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"},child:[]}]})(e)}function Px(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"},child:[]}]})(e)}function Tx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"},child:[]}]})(e)}function Rx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"},child:[]}]})(e)}function zx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"},child:[]}]})(e)}function Dx(e){return sx({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 9.02c0 1.09-.89 1.98-1.98 1.98H18V8.86c1.72-.44 3-1.99 3-3.84V5l-2 .02C19 6.11 18.11 7 17.02 7h-.52L12 1 7.5 7h-.52C5.89 7 5 6.11 5 5.02H3c0 1.86 1.28 3.4 3 3.84V11H4.98C3.89 11 3 10.11 3 9.02H1c0 1.86 1.28 3.4 3 3.84V22h7v-4c0-.55.45-1 1-1s1 .45 1 1v4h7v-9.14c1.72-.44 3-1.99 3-3.84V9l-2 .02zm-9-4.69L14 7h-4l2-2.67zM8 9h8v2H8V9zm10 11h-3v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2H6v-7h12v7z"},child:[]}]})(e)}const Fx="#800000",Nx="#fff",Ix="#fff",Mx=dn.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: ${Fx};
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  z-index: 100;
  width: ${260}px;
  box-shadow: 8px 0 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  ${e=>e.$collapsed&&Wt`
    width: ${80}px;
  `}
`,Lx=dn.div`
  position: relative;
  flex-shrink: 0;
`,Ox=dn.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  ${e=>e.$collapsed&&Wt`
    justify-content: center;
    padding: 1.5rem 0 1rem 0;
  `}
`,Bx=dn.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: ${Nx};
  transition: opacity 0.3s ease;
  ${e=>e.$collapsed&&Wt`
    opacity: 0;
    width: 0;
  `}
`,$x=dn.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff7f7;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: ${Fx};
  z-index: 101;
  &:hover {
    background: #ffeaea;
    transform: scale(1.05);
  }
`,Vx=dn.div`
  margin-top: 0.75rem;
  padding: 0 1.5rem 0 1.5rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
  ${e=>e.$collapsed&&Wt`
    opacity: 0;
    height: 0;
    padding: 0;
    margin-top: 0;
    overflow: hidden;
  `}
`,Ux=dn.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  color: ${Fx};
  &:focus {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 2px #f3d6d6;
  }
`,Hx=dn.div`
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,Wx=dn.nav`
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 0;
  overscroll-behavior: contain;
`,Gx=dn.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Yx=dn.li`
  margin: 0.25rem 0.75rem;
`,qx=dn(Ae)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: ${e=>{let{$isActive:t}=e;return t?"600":"500"}};
  font-size: 0.95rem;
  color: ${e=>{let{$isActive:t}=e;return t?"#800000":Nx}};
  background: ${e=>{let{$isActive:t}=e;return t?Ix:"transparent"}};
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    background: ${e=>{let{$isActive:t}=e;return t?Ix:"rgba(128,0,0,0.08)"}};
  }
  ${e=>e.$collapsed&&Wt`
    justify-content: center;
    padding: 0.75rem 0;
  `}
`,Kx=dn.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${e=>e.$collapsed?"0":"0.75rem"};
  font-size: 1.2rem;
`,Xx=dn.span`
  transition: opacity 0.3s ease;
  ${e=>e.$collapsed&&Wt`
    opacity: 0;
    width: 0;
  `}
`,Qx=dn.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  ${e=>e.$collapsed&&Wt`
    justify-content: center;
    padding: 1rem 0;
  `}
`,Jx=dn.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  color: #800000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: ${e=>e.$collapsed?"0":"0.75rem"};
  border: 2px solid #800000;
`,Zx=dn.div`
  transition: opacity 0.3s ease;
  ${e=>e.$collapsed&&Wt`
    opacity: 0;
    width: 0;
  `}
`,eb=dn.div`
  font-weight: 600;
  color: #fff;
  font-size: 0.95rem;
`,tb=dn.div`
  color: #fff;
  opacity: 0.8;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,nb=dn(Kx)`
  color: #fff !important;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border-radius: 50%;
  padding: 4px;
  &:hover {
    background: rgba(255,255,255,0.12);
    color: #800000 !important;
  }
`,rb=[{label:"Dashboard",icon:(0,mc.jsx)(dx,{}),to:"/templeadmin/dashboard"},{label:"Temple Master",icon:(0,mc.jsx)(Dx,{}),to:"/templeadmin/temple-master"},{label:"Puja Master",icon:(0,mc.jsx)(Sx,{}),to:"/templeadmin/puja-master"},{label:"Hall Master",icon:(0,mc.jsx)(Rx,{}),to:"/templeadmin/hall-master"},{label:"Puja Bookings",icon:(0,mc.jsx)(Tx,{}),to:"/templeadmin/puja-bookings"},{label:"Hall Bookings",icon:(0,mc.jsx)(px,{}),to:"/templeadmin/hall-bookings"},{label:"Calendar",icon:(0,mc.jsx)(cx,{}),to:"/templeadmin/calendar"},{label:"Manual Booking",icon:(0,mc.jsx)(Sx,{}),to:"/templeadmin/manual-booking"},{label:"Reports",icon:(0,mc.jsx)(jx,{}),to:"/templeadmin/reports"}],ib=e=>{let{collapsed:n,setCollapsed:r}=e;const i=X(),a=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const e=a.current;if(e)return e.addEventListener("wheel",t,{passive:!1}),()=>e.removeEventListener("wheel",t);function t(t){t.preventDefault(),t.stopPropagation(),e.scrollTop+=t.deltaY}}),[]),(0,mc.jsxs)(Mx,{$collapsed:n,children:[(0,mc.jsxs)(Lx,{children:[(0,mc.jsxs)(Ox,{$collapsed:n,children:[(0,mc.jsx)(Bx,{$collapsed:n,children:"Temple Admin"}),(0,mc.jsx)($x,{$collapsed:n,onClick:()=>r(!n),"aria-label":n?"Expand sidebar":"Collapse sidebar",children:n?(0,mc.jsx)(Cx,{}):(0,mc.jsx)(Ex,{})})]}),(0,mc.jsx)(Vx,{$collapsed:n,children:(0,mc.jsx)(Ux,{placeholder:"Search..."})})]}),(0,mc.jsx)(Hx,{children:(0,mc.jsx)(Wx,{ref:a,tabIndex:0,children:(0,mc.jsx)(Gx,{children:rb.map((e=>(0,mc.jsx)(Yx,{children:(0,mc.jsxs)(qx,{to:e.to,$isActive:i.pathname===e.to,$collapsed:n,children:[(0,mc.jsx)(Kx,{$collapsed:n,children:e.icon}),!n&&(0,mc.jsx)(Xx,{children:e.label})]})},e.to)))})})}),(0,mc.jsxs)(Qx,{$collapsed:n,children:[(0,mc.jsx)(Jx,{$collapsed:n,children:"R"}),!n&&(0,mc.jsxs)(Zx,{children:[(0,mc.jsx)(eb,{children:"Richard"}),(0,mc.jsx)(tb,{children:"9394lay@gmail.com"})]}),!n&&(0,mc.jsx)(nb,{style:{marginLeft:"auto"},children:(0,mc.jsx)(mx,{})})]})]})},ab=e=>{let{children:n}=e;const[r,i]=(0,t.useState)(!1),a=r?80:260;return(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsx)(ib,{collapsed:r,setCollapsed:i}),(0,mc.jsx)("main",{style:{marginLeft:a,minHeight:"100vh",padding:"2rem",background:"#f9f7f4",boxSizing:"border-box",transition:"margin-left 0.3s ease"},children:n})]})},ob=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border-radius: 0 0 12px 12px;
`,sb=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,lb=dn.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  font-family: 'Inter', sans-serif;
`,cb=dn.p`
  color: #64748b;
  font-size: 0.875rem;
  margin: 0;
`,db=dn.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ub=dn.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`,pb=dn.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #800000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
`,mb=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`,hb=dn.span`
  font-weight: 600;
  color: #1e293b;
  font-size: 0.875rem;
`,fb=dn.span`
  color: #64748b;
  font-size: 0.75rem;
`,gb=dn(wg)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
`,xb=()=>{const e=J(),t=(e=>{switch(e.split("/").pop()){case"dashboard":return{title:"Dashboard",subtitle:"Overview of temple management system"};case"puja-master":return{title:"Puja Master",subtitle:"Manage puja configurations, time slots, and categories"};case"hall-master":return{title:"Hall Master",subtitle:"Manage temple halls and facilities"};case"puja-bookings":return{title:"Puja Bookings",subtitle:"View and manage puja reservations"};case"hall-bookings":return{title:"Hall Bookings",subtitle:"View and manage hall reservations"};case"calendar":return{title:"Calendar",subtitle:"Temple events and schedule management"};case"manual-booking":return{title:"Manual Booking",subtitle:"Create and manage bookings manually"};case"reports":return{title:"Reports",subtitle:"Analytics and reporting dashboard"};case"temple-master":return{title:"Temple Master",subtitle:"Manage temple details and images"};default:return{title:"Admin Panel",subtitle:"Temple Management System"}}})(X().pathname);return(0,mc.jsxs)(ob,{children:[(0,mc.jsxs)(sb,{children:[(0,mc.jsx)(lb,{children:t.title}),(0,mc.jsx)(cb,{children:t.subtitle})]}),(0,mc.jsxs)(db,{children:[(0,mc.jsxs)(ub,{children:[(0,mc.jsx)(pb,{children:"R"}),(0,mc.jsxs)(mb,{children:[(0,mc.jsx)(hb,{children:"Richard"}),(0,mc.jsx)(fb,{children:"Admin"})]})]}),(0,mc.jsxs)(gb,{color:"red",variant:"outline",onClick:()=>{localStorage.removeItem("userToken"),localStorage.removeItem("customerToken"),e("/login")},children:[(0,mc.jsx)(mx,{}),"Logout"]})]})]})},bb=e=>{let{onAddPuja:t,onAddHall:n,onAddTemple:r}=e;return(0,mc.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginBottom:"2rem"},children:(0,mc.jsxs)("div",{style:{display:"flex",gap:"1rem"},children:[(0,mc.jsx)(wg,{color:"orange",onClick:r,children:"\ud83c\udfdb\ufe0f Add Temple"}),(0,mc.jsx)(wg,{color:"orange",onClick:t,children:"\ud83d\udd49\ufe0f Add New Puja"}),(0,mc.jsx)(wg,{color:"orange",onClick:n,children:"\ud83c\udfdb\ufe0f Add New Hall"}),(0,mc.jsx)(wg,{color:"gray",children:"\ud83d\udcca View Reports"}),(0,mc.jsx)(wg,{color:"gray",children:"\ud83d\udcc5 Manual Booking"})]})})},vb=dn.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,yb=dn.div`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`,wb=dn.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`,jb=dn.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`,Sb=dn.div`
  position: relative;
  display: flex;
  align-items: center;
`,kb=dn.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  width: 250px;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 3px rgba(128, 0, 0, 0.1);
  }
`,Eb=dn(fx)`
  position: absolute;
  left: 0.75rem;
  color: #6b7280;
  font-size: 1.125rem;
`,Cb=dn(wg)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ab=dn.div`
  overflow-x: auto;
`,_b=dn.table`
  width: 100%;
  border-collapse: collapse;
`,Pb=dn.th`
  background: #f9fafb;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
`,Tb=dn.td`
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.875rem;
  color: #374151;
`,Rb=dn.tr`
  &:hover {
    background: #f9fafb;
  }
`,zb=dn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  ${e=>{switch(e.$status){case"Active":return"\n          background: #dcfce7;\n          color: #166534;\n        ";case"Inactive":return"\n          background: #fee2e2;\n          color: #991b1b;\n        ";default:return"\n          background: #f3f4f6;\n          color: #374151;\n        "}}}
`,Db=dn.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,Fb=(dn(wg)`
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  min-width: auto;
`,dn.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #6b7280;
`),Nb=dn.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #6b7280;
`,Ib=dn.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #dc2626;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  margin: 1rem 2rem;
`,Mb=e=>{let{onEditTemple:r}=e;const[i,a]=(0,t.useState)([]),[o,s]=(0,t.useState)(!0),[l,c]=(0,t.useState)(""),[d,u]=(0,t.useState)(""),[p,m]=(0,t.useState)("All");(0,t.useEffect)((()=>{h()}),[]);const h=async()=>{try{s(!0),c("");const{gettemplist:e}=await Promise.resolve().then(n.bind(n,93)),t=await e();t.data?a(t.data):a([])}catch(e){console.error("Error fetching temples:",e),c("Failed to fetch temple list. Please try again."),a([])}finally{s(!1)}};(0,t.useEffect)((()=>(window.refreshTempleList=h,()=>{delete window.refreshTempleList})),[]);const f=i.filter((e=>{var t,n,r;const i=(null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(d.toLowerCase()))||(null===(n=e.location)||void 0===n?void 0:n.toLowerCase().includes(d.toLowerCase()))||(null===(r=e.contact_name)||void 0===r?void 0:r.toLowerCase().includes(d.toLowerCase())),a="All"===p||e.status===p;return i&&a}));return o?(0,mc.jsx)(vb,{children:(0,mc.jsx)(Nb,{children:(0,mc.jsx)("div",{children:"\ud83d\udd04 Loading temples..."})})}):l?(0,mc.jsx)(vb,{children:(0,mc.jsxs)(Ib,{children:[(0,mc.jsxs)("div",{children:["\u274c ",l]}),(0,mc.jsx)(wg,{color:"blue",size:"sm",onClick:h,style:{marginTop:"1rem"},children:"Retry"})]})}):(0,mc.jsxs)(vb,{children:[(0,mc.jsxs)(yb,{children:[(0,mc.jsx)(wb,{children:"\ud83c\udfdb\ufe0f Booked Temple List"}),(0,mc.jsxs)(jb,{children:[(0,mc.jsxs)(Sb,{children:[(0,mc.jsx)(Eb,{}),(0,mc.jsx)(kb,{type:"text",placeholder:"Search temples...",value:d,onChange:e=>u(e.target.value)})]}),(0,mc.jsxs)(Cb,{variant:"outline",color:"gray",size:"sm",onClick:()=>m("All"===p?"Active":"Active"===p?"Inactive":"All"),children:[(0,mc.jsx)(wx,{}),"All"===p?"All Status":p]})]})]}),(0,mc.jsx)(Ab,{children:(0,mc.jsxs)(_b,{children:[(0,mc.jsx)("thead",{children:(0,mc.jsxs)("tr",{children:[(0,mc.jsx)(Pb,{children:"Temple Name"}),(0,mc.jsx)(Pb,{children:"Location"}),(0,mc.jsx)(Pb,{children:"Contact Person"}),(0,mc.jsx)(Pb,{children:"Mobile"}),(0,mc.jsx)(Pb,{children:"Email"}),(0,mc.jsx)(Pb,{children:"Status"}),(0,mc.jsx)(Pb,{children:"Actions"})]})}),(0,mc.jsx)("tbody",{children:0===f.length?(0,mc.jsx)("tr",{children:(0,mc.jsx)(Tb,{colSpan:7,children:(0,mc.jsx)(Fb,{children:d||"All"!==p?"No temples match your search criteria":"No temples found"})})}):f.map((e=>(0,mc.jsxs)(Rb,{children:[(0,mc.jsx)(Tb,{children:(0,mc.jsx)("strong",{children:e.name||"N/A"})}),(0,mc.jsx)(Tb,{children:e.location||e.address_line_3||"N/A"}),(0,mc.jsx)(Tb,{children:e.contact_name||"N/A"}),(0,mc.jsx)(Tb,{children:e.mobile_number||"N/A"}),(0,mc.jsx)(Tb,{children:e.email_id||"N/A"}),(0,mc.jsx)(Tb,{children:(0,mc.jsx)(zb,{$status:e.status||"Active",children:e.status||"Active"})}),(0,mc.jsx)(Tb,{children:(0,mc.jsxs)(Db,{children:[(0,mc.jsx)(wg,{color:"blue",variant:"outline",size:"sm",onClick:()=>(e=>{console.log("View temple:",e)})(e),style:{minWidth:70},children:"View"}),(0,mc.jsx)(wg,{color:"blue",size:"sm",onClick:()=>(e=>{console.log("Edit temple:",e),r&&r(e)})(e),style:{minWidth:70},children:"Edit"})]})})]},e.temple_id||e.id)))})]})})]})},Lb=["Minutes","Hours"],Ob={modalOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(8px)",padding:"2rem",animation:"fadeIn 0.3s ease-out",overflowY:"auto"},modalContainer:{background:"linear-gradient(145deg, #ffffff, #f8fafc)",borderRadius:"16px",width:"100%",maxWidth:"500px",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.25)",overflowY:"auto",maxHeight:"calc(100vh - 4rem)",animation:"scaleIn 0.3s ease-out"},modalHeader:{background:"linear-gradient(to right, #FF6B00, #FF8F33)",padding:"1.5rem",position:"sticky",top:0,zIndex:10},modalTitle:{color:"#fff",fontSize:"1.6rem",fontWeight:"700",margin:0,textAlign:"center",letterSpacing:"0.5px"},closeButton:{position:"absolute",top:"14px",right:"14px",background:"rgba(255, 255, 255, 0.35)",border:"none",width:"40px",height:"40px",borderRadius:"50%",color:"#fff",fontSize:"1.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s, transform 0.2s"},modalBody:{padding:"2rem",background:"#fff"},formGroup:{marginBottom:"1.75rem"},label:{display:"block",fontSize:"0.9rem",fontWeight:"600",color:"#1f2937",marginBottom:"0.6rem"},input:{width:"100%",padding:"0.85rem",border:"1px solid #d1d5db",borderRadius:"12px",fontSize:"0.9rem",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none",boxSizing:"border-box"},errorText:{color:"#dc2626",fontSize:"0.8rem",marginTop:"0.3rem",display:"block"},timeSlotContainer:{display:"flex",flexWrap:"wrap",gap:"0.6rem",marginTop:"0.6rem"},timeSlotButton:e=>({padding:"0.6rem 1.2rem",borderRadius:"12px",border:"1px solid "+(e?"#FF6B00":"#d1d5db"),background:e?"#FF6B00":"#fff",color:e?"#fff":"#1f2937",fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s"}),durationContainer:{display:"flex",gap:"0.85rem"},buttonGroup:{display:"flex",justifyContent:"flex-end",gap:"0.85rem",marginTop:"2rem",position:"sticky",bottom:0,background:"#fff",padding:"1rem 0"},secondaryButton:{padding:"0.85rem 1.5rem",borderRadius:"12px",border:"1px solid #d1d5db",background:"#fff",color:"#1f2937",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer",transition:"background 0.2s"},primaryButton:{padding:"0.85rem 1.5rem",borderRadius:"12px",border:"none",background:"#FF6B00",color:"#fff",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer",transition:"background 0.2s"}};const Bb=function(e){let{open:n,onClose:r,onSave:i}=e;const[a,o]=(0,t.useState)({pujaName:"",price:"",timeSlots:[],duration:"",durationUnit:Lb[0],maxAttendees:"",description:""}),[s,l]=(0,t.useState)({}),c=(0,t.useRef)();(0,t.useEffect)((()=>{if(!n)return;const e=e=>"Escape"===e.key&&r();return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[n,r]),(0,t.useEffect)((()=>{n&&c.current&&c.current.focus()}),[n]);const d=(e,t)=>{o((n=>({...n,[e]:t}))),s[e]&&l((t=>({...t,[e]:""})))},u=e=>{e.preventDefault(),(()=>{const e={};return a.pujaName.trim()||(e.pujaName="Required field"),(!a.price||isNaN(a.price)||a.price<=0)&&(e.price="Enter a valid amount"),(!a.duration||isNaN(a.duration)||a.duration<=0)&&(e.duration="Enter a valid duration"),(!a.maxAttendees||isNaN(a.maxAttendees)||a.maxAttendees<=0)&&(e.maxAttendees="Enter a valid number"),l(e),0===Object.keys(e).length})()&&(i(a),r())};return n?(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsx)("style",{children:"\n  @keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n  @keyframes scaleIn {\n    from { transform: scale(0.9); opacity: 0; }\n    to { transform: scale(1); opacity: 1; }\n  }\n  .modal-close-button:hover {\n    background: rgba(255, 255, 255, 0.5);\n    transform: rotate(90deg);\n  }\n  .modal-input:focus {\n    border-color: #FF6B00;\n    box-shadow: 0 0 0 4px rgba(255, 107, 0, 0.25);\n  }\n  .modal-secondary-button:hover {\n    background: #f1f5f9;\n  }\n  .modal-primary-button:hover {\n    background: #e55a00;\n  }\n  @media (max-width: 640px) {\n    .modal-overlay {\n      padding: 1.5rem;\n    }\n    .modal-container {\n      max-height: calc(100vh - 3rem);\n    }\n    .modal-title {\n      font-size: 1.4rem;\n    }\n    .modal-body {\n      padding: 1.5rem;\n    }\n  }\n"}),(0,mc.jsx)("div",{style:Ob.modalOverlay,className:"modal-overlay",children:(0,mc.jsxs)("div",{style:Ob.modalContainer,ref:c,tabIndex:-1,className:"modal-container",children:[(0,mc.jsxs)("div",{style:Ob.modalHeader,children:[(0,mc.jsx)("h2",{style:Ob.modalTitle,children:"Add New Puja"}),(0,mc.jsx)("button",{style:Ob.closeButton,onClick:r,className:"modal-close-button",children:"\xd7"})]}),(0,mc.jsx)("div",{style:Ob.modalBody,children:(0,mc.jsxs)("div",{onSubmit:u,children:[(0,mc.jsxs)("div",{style:Ob.formGroup,children:[(0,mc.jsx)("label",{style:Ob.label,children:"Puja Name *"}),(0,mc.jsx)("input",{type:"text",placeholder:"Enter puja name",value:a.pujaName,onChange:e=>d("pujaName",e.target.value),style:Ob.input,className:"modal-input",autoFocus:!0}),s.pujaName&&(0,mc.jsx)("span",{style:Ob.errorText,children:s.pujaName})]}),(0,mc.jsxs)("div",{style:Ob.formGroup,children:[(0,mc.jsx)("label",{style:Ob.label,children:"Price (\u20b9) *"}),(0,mc.jsx)("input",{type:"number",placeholder:"Enter price",value:a.price,onChange:e=>d("price",e.target.value),style:Ob.input,className:"modal-input",min:"1"}),s.price&&(0,mc.jsx)("span",{style:Ob.errorText,children:s.price})]}),(0,mc.jsxs)("div",{style:Ob.formGroup,children:[(0,mc.jsx)("label",{style:Ob.label,children:"Time Slot(s) *"}),(0,mc.jsx)("div",{style:Ob.timeSlotContainer,children:(0,mc.jsxs)("div",{style:{padding:"1rem",background:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef",color:"#6c757d",fontSize:"0.9rem",textAlign:"center"},children:["Time slots are now managed centrally in the Time Slot Manager.",(0,mc.jsx)("br",{}),"Please use the Puja Master to create pujas with time slot assignments."]})}),s.timeSlots&&(0,mc.jsx)("span",{style:Ob.errorText,children:s.timeSlots})]}),(0,mc.jsxs)("div",{style:Ob.formGroup,children:[(0,mc.jsx)("label",{style:Ob.label,children:"Duration *"}),(0,mc.jsxs)("div",{style:Ob.durationContainer,children:[(0,mc.jsx)("input",{type:"number",placeholder:"60",value:a.duration,onChange:e=>d("duration",e.target.value),style:{...Ob.input,flex:1},className:"modal-input",min:"1"}),(0,mc.jsx)("select",{value:a.durationUnit,onChange:e=>d("durationUnit",e.target.value),style:{...Ob.input,width:"130px"},className:"modal-input",children:Lb.map((e=>(0,mc.jsx)("option",{value:e,children:e},e)))})]}),s.duration&&(0,mc.jsx)("span",{style:Ob.errorText,children:s.duration})]}),(0,mc.jsxs)("div",{style:Ob.formGroup,children:[(0,mc.jsx)("label",{style:Ob.label,children:"Max Attendees *"}),(0,mc.jsx)("input",{type:"number",placeholder:"Maximum attendees",value:a.maxAttendees,onChange:e=>d("maxAttendees",e.target.value),style:Ob.input,className:"modal-input",min:"1"}),s.maxAttendees&&(0,mc.jsx)("span",{style:Ob.errorText,children:s.maxAttendees})]}),(0,mc.jsxs)("div",{style:Ob.formGroup,children:[(0,mc.jsx)("label",{style:Ob.label,children:"Description"}),(0,mc.jsx)("textarea",{placeholder:"Brief description (optional)",value:a.description,onChange:e=>d("description",e.target.value),style:{...Ob.input,minHeight:"120px"},className:"modal-input",rows:"4"})]}),(0,mc.jsxs)("div",{style:Ob.buttonGroup,children:[(0,mc.jsx)("button",{type:"button",style:Ob.secondaryButton,onClick:r,className:"modal-secondary-button",children:"Cancel"}),(0,mc.jsx)("button",{type:"button",style:Ob.primaryButton,onClick:u,className:"modal-primary-button",children:"Save Puja"})]})]})})]})})]}):null},$b=["Marriage Hall","Dining Hall","Seminar Hall","Open Ground"],Vb=["Air Conditioning","Sound System","Stage","Projector","Seating"],Ub=["Hourly","Fixed"],Hb={modalOverlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.65)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,backdropFilter:"blur(8px)",padding:"2rem",animation:"fadeIn 0.3s ease-out",overflowY:"auto"},modalContainer:{background:"linear-gradient(145deg, #ffffff, #f8fafc)",borderRadius:"16px",width:"100%",maxWidth:"680px",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.25)",overflowY:"auto",maxHeight:"calc(100vh - 4rem)",animation:"scaleIn 0.3s ease-out"},modalHeader:{background:"linear-gradient(to right, #FF6B00, #FF8F33)",padding:"1.5rem",position:"sticky",top:0,zIndex:10},modalTitle:{color:"#fff",fontSize:"1.6rem",fontWeight:"700",margin:0,textAlign:"center",letterSpacing:"0.5px"},closeButton:{position:"absolute",top:"14px",right:"14px",background:"rgba(255, 255, 255, 0.35)",border:"none",width:"40px",height:"40px",borderRadius:"50%",color:"#fff",fontSize:"1.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s, transform 0.2s"},modalBody:{padding:"2rem",background:"#fff"},formGroup:{marginBottom:"1.75rem"},label:{display:"block",fontSize:"0.9rem",fontWeight:"600",color:"#1f2937",marginBottom:"0.6rem"},input:{width:"100%",padding:"0.85rem",border:"1px solid #d1d5db",borderRadius:"12px",fontSize:"0.9rem",transition:"border-color 0.2s, box-shadow 0.2s",outline:"none",boxSizing:"border-box"},errorText:{color:"#dc2626",fontSize:"0.8rem",marginTop:"0.3rem",display:"block"},chipStyle:e=>({padding:"0.6rem 1.2rem",borderRadius:"12px",border:"1px solid "+(e?"#FF6B00":"#d1d5db"),background:e?"#FF6B00":"#fff",color:e?"#fff":"#1f2937",fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s",marginRight:"0.6rem",marginBottom:"0.6rem"}),durationContainer:{display:"flex",gap:"0.85rem"},buttonGroup:{display:"flex",justifyContent:"flex-end",gap:"0.85rem",marginTop:"2rem",position:"sticky",bottom:0,background:"#fff",padding:"1rem 0"},secondaryButton:{padding:"0.85rem 1.5rem",borderRadius:"12px",border:"1px solid #d1d5db",background:"#fff",color:"#1f2937",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer",transition:"background 0.2s"},primaryButton:{padding:"0.85rem 1.5rem",borderRadius:"12px",border:"none",background:"#FF6B00",color:"#fff",fontSize:"0.9rem",fontWeight:"500",cursor:"pointer",transition:"background 0.2s"},fileInputStyle:{width:"100%",padding:"0.85rem",border:"2px dashed #d1d5db",borderRadius:"12px",fontSize:"0.9rem",background:"#f9f9f9",cursor:"pointer",textAlign:"center",color:"#666",marginBottom:"0.6rem"},imagePreviewStyle:{width:"100px",height:"100px",objectFit:"cover",borderRadius:"8px",marginTop:"0.6rem"},flexContainer:{display:"flex",gap:"0.85rem",marginBottom:"1.75rem"},flexItem:{flex:1}},Wb=`\n  @keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n  @keyframes scaleIn {\n    from { transform: scale(0.9); opacity: 0; }\n    to { transform: scale(1); opacity: 1; }\n  }\n  .modal-close-button:hover {\n    background: rgba(255, 255, 255, 0.5);\n    transform: rotate(90deg);\n  }\n  .modal-input:focus {\n    border-color: #FF6B00;\n    box-shadow: 0 0 0 4px rgba(255, 107, 0, 0.25);\n  }\n  .modal-secondary-button:hover {\n    background: #f1f5f9;\n  }\n  .modal-primary-button:hover {\n    background: #e55a00;\n  }\n  .modal-chip:hover {\n    background: ${Hb.chipStyle(!1).background};\n    color: ${Hb.chipStyle(!1).color};\n  }\n  @media (max-width: 640px) {\n    .modal-overlay {\n      padding: 1.5rem;\n    }\n    .modal-container {\n      max-height: calc(100vh - 3rem);\n    }\n    .modal-title {\n      font-size: 1.4rem;\n    }\n    .modal-body {\n      padding: 1.5rem;\n    }\n    .modal-flex-container {\n      flex-direction: column;\n    }\n  }\n`;const Gb=function(e){let{open:n,onClose:r,onSave:i}=e;const[a,o]=(0,t.useState)(""),[s,l]=(0,t.useState)(""),[c,d]=(0,t.useState)($b[0]),[u,p]=(0,t.useState)(""),[m,h]=(0,t.useState)([]),[f,g]=(0,t.useState)(""),[x,b]=(0,t.useState)(Ub[0]),[v,y]=(0,t.useState)(null),[w,j]=(0,t.useState)(null),[S,k]=(0,t.useState)(""),[E,C]=(0,t.useState)({}),A=(0,t.useRef)(),_=(0,t.useRef)();return(0,t.useEffect)((()=>{if(!n)return;const e=e=>"Escape"===e.key&&r();return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[n,r]),(0,t.useEffect)((()=>{n&&A.current&&A.current.focus()}),[n]),n?(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsx)("style",{children:Wb}),(0,mc.jsx)("div",{style:Hb.modalOverlay,className:"modal-overlay",children:(0,mc.jsxs)("div",{style:Hb.modalContainer,ref:A,tabIndex:-1,className:"modal-container",children:[(0,mc.jsxs)("div",{style:Hb.modalHeader,children:[(0,mc.jsx)("h2",{style:Hb.modalTitle,children:"Add New Hall"}),(0,mc.jsx)("button",{style:Hb.closeButton,onClick:r,className:"modal-close-button",children:"\xd7"})]}),(0,mc.jsx)("div",{style:Hb.modalBody,children:(0,mc.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(()=>{const e={};return a.trim()||(e.hallName="Required field"),s.trim()||(e.location="Required field"),(!u||isNaN(u)||u<=0)&&(e.capacity="Enter a valid number"),0===m.length&&(e.amenities="Select at least one amenity"),(!f||isNaN(f)||f<=0)&&(e.baseRate="Enter a valid amount"),C(e),0===Object.keys(e).length})()&&(i({hallName:a,location:s,hallType:c,capacity:u,amenities:m,baseRate:f,rateType:x,imageFile:v,description:S}),r())},children:[(0,mc.jsxs)("div",{style:Hb.formGroup,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Hall Name *"}),(0,mc.jsx)("input",{type:"text",placeholder:"Enter hall name",value:a,onChange:e=>o(e.target.value),style:Hb.input,className:"modal-input",autoFocus:!0}),E.hallName&&(0,mc.jsx)("span",{style:Hb.errorText,children:E.hallName})]}),(0,mc.jsxs)("div",{style:Hb.formGroup,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Location *"}),(0,mc.jsx)("input",{type:"text",placeholder:"Enter location or floor",value:s,onChange:e=>l(e.target.value),style:Hb.input,className:"modal-input"}),E.location&&(0,mc.jsx)("span",{style:Hb.errorText,children:E.location})]}),(0,mc.jsxs)("div",{style:Hb.formGroup,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Hall Type *"}),(0,mc.jsx)("select",{value:c,onChange:e=>d(e.target.value),style:Hb.input,className:"modal-input",children:$b.map((e=>(0,mc.jsx)("option",{value:e,children:e},e)))})]}),(0,mc.jsxs)("div",{style:Hb.formGroup,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Capacity *"}),(0,mc.jsx)("input",{type:"number",placeholder:"Maximum seating capacity",value:u,onChange:e=>p(e.target.value),style:Hb.input,className:"modal-input",min:"1"}),E.capacity&&(0,mc.jsx)("span",{style:Hb.errorText,children:E.capacity})]}),(0,mc.jsxs)("div",{style:Hb.formGroup,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Amenities *"}),(0,mc.jsx)("div",{style:{marginBottom:"0.6rem"},children:Vb.map((e=>(0,mc.jsx)("button",{type:"button",style:Hb.chipStyle(m.includes(e)),onClick:()=>(e=>{h((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e])),E.amenities&&C((e=>({...e,amenities:""})))})(e),className:"modal-chip",children:e},e)))}),E.amenities&&(0,mc.jsx)("span",{style:Hb.errorText,children:E.amenities})]}),(0,mc.jsxs)("div",{style:Hb.flexContainer,className:"modal-flex-container",children:[(0,mc.jsxs)("div",{style:Hb.flexItem,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Base Rate (\u20b9) *"}),(0,mc.jsx)("input",{type:"number",placeholder:"Enter base rate in \u20b9",value:f,onChange:e=>g(e.target.value),style:Hb.input,className:"modal-input",min:"1"}),E.baseRate&&(0,mc.jsx)("span",{style:Hb.errorText,children:E.baseRate})]}),(0,mc.jsxs)("div",{style:Hb.flexItem,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Rate Type *"}),(0,mc.jsx)("select",{value:x,onChange:e=>b(e.target.value),style:Hb.input,className:"modal-input",children:Ub.map((e=>(0,mc.jsx)("option",{value:e,children:e},e)))})]})]}),(0,mc.jsxs)("div",{style:Hb.formGroup,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Image Upload"}),(0,mc.jsx)("input",{ref:_,type:"file",accept:"image/jpeg,image/png",onChange:e=>{const t=e.target.files[0];if(t){if(t.size>5242880)return void alert("File size must be less than 5MB");y(t);const e=new FileReader;e.onload=e=>j(e.target.result),e.readAsDataURL(t)}},style:{display:"none"}}),(0,mc.jsx)("div",{style:Hb.fileInputStyle,onClick:()=>{var e;null===(e=_.current)||void 0===e||e.click()},children:w?(0,mc.jsxs)("div",{children:[(0,mc.jsxs)("div",{children:["Image selected: ",null===v||void 0===v?void 0:v.name]}),(0,mc.jsx)("img",{src:w,alt:"Preview",style:Hb.imagePreviewStyle})]}):(0,mc.jsx)("div",{children:"Click to upload JPG/PNG (Max size: 5MB)"})})]}),(0,mc.jsxs)("div",{style:Hb.formGroup,children:[(0,mc.jsx)("label",{style:Hb.label,children:"Description"}),(0,mc.jsx)("textarea",{placeholder:"Brief description of the hall",value:S,onChange:e=>k(e.target.value),style:{...Hb.input,minHeight:"120px"},className:"modal-input",rows:"4"})]}),(0,mc.jsxs)("div",{style:Hb.buttonGroup,children:[(0,mc.jsx)("button",{type:"button",style:Hb.secondaryButton,onClick:r,className:"modal-secondary-button",children:"Cancel"}),(0,mc.jsx)("button",{type:"submit",style:Hb.primaryButton,className:"modal-primary-button",children:"Save Hall"})]})]})})]})})]}):null},Yb=()=>{const e=J(),[n,r]=(0,t.useState)(!1),[i,a]=(0,t.useState)(!1),[o,s]=(0,t.useState)(!1);(0,t.useEffect)((()=>{pg()||e("/login")}),[e]);return(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsx)(bb,{onAddPuja:()=>r(!0),onAddHall:()=>a(!0),onAddTemple:()=>s(!0)}),(0,mc.jsx)(Mb,{}),(0,mc.jsx)(Bb,{open:n,onClose:()=>r(!1),onSave:e=>{console.log("Saved Puja:",e),r(!1)}}),(0,mc.jsx)(Gb,{open:i,onClose:()=>a(!1),onSave:e=>{console.log("Saved Hall:",e),a(!1)}}),o&&(0,mc.jsx)(Fg,{temple:null,onClose:()=>s(!1),onSuccess:()=>{console.log("Temple saved successfully"),s(!1),window.refreshTempleList&&window.refreshTempleList()}})]})},qb=dn.input`
  padding: ${e=>{const t={sm:"0.5rem 0.75rem",md:"0.75rem 1rem",lg:"1rem 1.25rem"};return t[e.size]||t.md}};
  border: 1px solid #e0e0e0;
  border-radius: ${e=>{const t={sm:"4px",md:"8px",lg:"12px"};return t[e.size]||t.md}};
  font-size: ${e=>{const t={sm:"14px",md:"16px",lg:"18px"};return t[e.size]||t.md}};
  background: #fff;
  color: #333;
  outline: none;
  transition: all 0.2s ease-in-out;
  min-width: ${e=>e.minWidth||"auto"};
  width: ${e=>e.width||"auto"};
  
  &::placeholder {
    color: #9ca3af;
  }
  
  &:focus {
    border-color: #f7931e;
    box-shadow: 0 0 0 3px rgba(247, 147, 30, 0.1);
  }
  
  &:hover {
    border-color: #d1d5db;
  }
  
  &:disabled {
    background: #f9fafb;
    color: #6b7280;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Kb=e=>{let{value:t,onChange:n,placeholder:r="Search...",size:i="md",disabled:a=!1,width:o,minWidth:s,className:l,...c}=e;return(0,mc.jsx)(qb,{type:"text",value:t,onChange:n,placeholder:r,size:i,disabled:a,width:o,minWidth:s,className:l,...c})};Kb.defaultProps={placeholder:"Search...",size:"md",disabled:!1};const Xb=Kb,Qb=dn.select`
  padding: ${e=>{const t={sm:"0.5rem 0.75rem",md:"0.75rem 1rem",lg:"1rem 1.25rem"};return t[e.size]||t.md}};
  border: 1px solid #e0e0e0;
  border-radius: ${e=>{const t={sm:"4px",md:"8px",lg:"12px"};return t[e.size]||t.md}};
  font-size: ${e=>{const t={sm:"14px",md:"16px",lg:"18px"};return t[e.size]||t.md}};
  background: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  min-width: ${e=>e.minWidth||"auto"};
  width: ${e=>e.width||"auto"};
  
  &:focus {
    border-color: #f7931e;
    box-shadow: 0 0 0 3px rgba(247, 147, 30, 0.1);
  }
  
  &:hover {
    border-color: #d1d5db;
  }
  
  &:disabled {
    background: #f9fafb;
    color: #6b7280;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  option {
    padding: 0.5rem;
    background: #fff;
    color: #333;
  }
`,Jb=e=>{let{options:t=[],value:n,onChange:r,placeholder:i,size:a="md",disabled:o=!1,width:s,minWidth:l,className:c,...d}=e;return(0,mc.jsxs)(Qb,{value:n,onChange:r,size:a,disabled:o,width:s,minWidth:l,className:c,...d,children:[i&&(0,mc.jsx)("option",{value:"",disabled:!0,children:i}),t.map((e=>(0,mc.jsx)("option",{value:e.value,children:e.label},e.value)))]})};Jb.defaultProps={options:[],size:"md",disabled:!1};const Zb=Jb,ev=dn.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  line-height: 1.5;

  ${e=>{let{variant:t,color:n}=e;return"filled"===t?`\n    background-color: ${tv[n]||n};\n    color: white;\n    border: none;\n    &:hover:not(:disabled) {\n      background-color: ${rv(tv[n]||n)};\n    }\n  `:`\n    background-color: transparent;\n    border: 1px solid ${tv[n]||n};\n    color: ${tv[n]||n};\n    &:hover:not(:disabled) {\n      background-color: ${nv(tv[n]||n,.1)};\n    }\n  `}}

  ${e=>{let{size:t}=e;switch(t){case"sm":return"padding: 6px 12px; font-size: 14px;";case"lg":return"padding: 12px 24px; font-size: 18px;";default:return"padding: 8px 16px; font-size: 16px;"}}}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${e=>nv(tv[e.color]||e.color,.3)};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,tv={blue:"#3b82f6",red:"#ef4444",green:"#22c55e",orange:"#FFA500",saffron:"#FFA500",maroon:"#800000",gray:"#888"},nv=(e,t)=>e.startsWith("#")?`rgba(${(e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)}, ${parseInt(t[2],16)}, ${parseInt(t[3],16)}`:"0, 0, 0"})(e)}, ${t})`:e,rv=e=>{if(e.startsWith("#")){const t=parseInt(e.replace("#",""),16);return`#${(Math.max(0,(t>>16)-30)<<16|Math.max(0,(t>>8&255)-30)<<8|Math.max(0,(255&t)-30)).toString(16).padStart(6,"0")}`}return e},iv=dn.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  background: #fff;
`,av=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1.5rem;
`,ov=dn.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`,sv=dn.div`
  display: flex;
  gap: 1rem;
`,lv=dn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,cv=dn.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1.5px solid #F8D7DA;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 24px #f5f5f5;
    border-color: #f5f5f5;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>"Active"===e.$status?"#22c55e":"#ef4444"};
  }
`,dv=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,uv=dn.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
  line-height: 1.4;
`,pv=dn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${e=>"Active"===e.$status?"#e6f9ed":"#F8D7DA"};
  color: ${e=>"Active"===e.$status?"#22c55e":"rgb(172, 54, 73)"};
  border: 1px solid ${e=>"Active"===e.$status?"#22c55e":"rgb(172, 54, 73)"};
`,mv=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,hv=dn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`,fv=dn.span`
  color: #6b7280;
  font-weight: 500;
  min-width: 80px;
`,gv=dn.span`
  color: #374151;
  font-weight: 400;
`,xv=dn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,bv=dn.span`
  background: #fbeaec;
  color: rgb(172, 54, 73);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
`,vv=dn.span`
  font-size: 0.85rem;
  color: #b36b7a;
`,yv=dn.span`
  font-weight: 700;
  color: rgb(172, 54, 73);
  font-size: 1rem;
`,wv=dn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,jv=dn.span`
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
`,Sv=dn.span`
  color: #6b7280;
  font-size: 0.9rem;
  font-style: italic;
`,kv=dn.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  background: #f5f5f5;
  color: rgb(172, 54, 73);
  padding: 0.25rem 0.85rem 0.25rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.95em;
  font-weight: 500;
  box-shadow: 0 1px 4px #f8d7da33;
`,Ev=dn.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`,Cv=dn.button`
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  ${e=>{let{variant:t}=e;return"edit"===t&&"\n      background: #f5f5f5;\n      color: rgb(172, 54, 73);\n      border: 1.5px solid #f5f5f5;\n      &:hover {\n        background: #F8D7DA;\n        color: rgb(172, 54, 73);\n        border: 1.5px solid rgb(172, 54, 73);\n      }\n    "}}
  ${e=>{let{variant:t}=e;return"delete"===t&&"\n      background: #e74c3c;\n      color: #fff;\n      &:hover {\n        background: #fadbd8;\n        color: #e74c3c;\n        border: 1.5px solid #e74c3c;\n      }\n    "}}
  ${e=>{let{variant:t}=e;return"toggle"===t&&"\n      background: #fff;\n      color: rgb(172, 54, 73);\n      border: 1.5px solid rgb(172, 54, 73);\n      &:hover {\n        background: #f5f5f5;\n        color: rgb(172, 54, 73);\n      }\n    "}}
`,Av=dn.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
  font-size: 1.1rem;
  background: white;
  border-radius: 12px;
  margin-top: 1rem;
`,_v=dn.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`,Pv=dn.button`
  padding: 0.5rem 1rem;
  border: 1.5px solid rgb(172, 54, 73);
  background: ${e=>e.$active?"rgb(172, 54, 73)":"#fff"};
  color: ${e=>e.$active?"#fff":"rgb(172, 54, 73)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: none;
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
  &:hover {
    background: #F8D7DA;
    color: rgb(172, 54, 73);
    border: 1.5px solid rgb(172, 54, 73);
  }
`,Tv=e=>{let{children:t,variant:n="filled",color:r="blue",size:i="md",className:a,...o}=e;return(0,mc.jsx)(ev,{variant:n,color:r,size:i,className:a,...o,children:t})},Rv=e=>{let{pujas:n,onDeletePuja:r,onToggleStatus:i,onAddPuja:a,onEditPuja:o,timeSlots:s=[],categories:l=[]}=e;const[c,d]=(0,t.useState)(""),[u,p]=(0,t.useState)("All"),[m,h]=(0,t.useState)("All"),[f,g]=(0,t.useState)("All"),[x,b]=(0,t.useState)("cards"),v=l.find((e=>e.name===m)),y=(null===v||void 0===v?void 0:v.subcategories)||[],w=n.filter((e=>{const t=e.name.toLowerCase().includes(c.toLowerCase())||e.category.toLowerCase().includes(c.toLowerCase())||e.subcategory&&e.subcategory.toLowerCase().includes(c.toLowerCase()),n="All"===u||e.status===u,r="All"===m||e.category===m,i="All"===f||e.subcategory===f;return t&&n&&r&&i}));return(0,mc.jsxs)(iv,{children:[(0,mc.jsxs)(av,{children:[(0,mc.jsxs)(ov,{children:[(0,mc.jsx)(Xb,{value:c,onChange:e=>d(e.target.value),placeholder:"Search by Puja Name or Category",minWidth:"250px"}),(0,mc.jsx)(Zb,{options:[{value:"All",label:"All Status"},{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}],value:u,onChange:e=>p(e.target.value)}),(0,mc.jsx)(Zb,{options:[{value:"All",label:"All Categories"},...l.map((e=>({value:e.name,label:e.name})))],value:m,onChange:e=>{h(e.target.value),g("All")}}),(null===v||void 0===v?void 0:v.hasSubcategories)&&(0,mc.jsx)(Zb,{options:[{value:"All",label:"All Subcategories"},...y.map((e=>({value:e,label:e})))],value:f,onChange:e=>g(e.target.value)})]}),(0,mc.jsxs)(sv,{children:[(0,mc.jsx)(Tv,{onClick:a,color:"rgb(172, 54, 73)",size:"md",children:"Add New Puja"}),(0,mc.jsx)(Tv,{variant:"outline",color:"gray",size:"md",children:"Export List"})]})]}),(0,mc.jsxs)(_v,{children:[(0,mc.jsx)(Pv,{$active:"cards"===x,onClick:()=>b("cards"),children:"Cards View"}),(0,mc.jsx)(Pv,{$active:"table"===x,onClick:()=>b("table"),children:"Table View"})]}),"cards"===x?(0,mc.jsx)(lv,{children:w.map((e=>(0,mc.jsxs)(cv,{$status:e.status,children:[(0,mc.jsxs)(dv,{children:[(0,mc.jsx)(uv,{children:e.name}),(0,mc.jsx)(pv,{$status:e.status,children:e.status})]}),(0,mc.jsxs)(mv,{children:[(0,mc.jsxs)(hv,{children:[(0,mc.jsx)(fv,{children:"Category:"}),(0,mc.jsxs)(xv,{children:[(0,mc.jsx)(bv,{children:e.category}),e.subcategory&&(0,mc.jsxs)(vv,{children:["\u2192 ",e.subcategory]})]})]}),(0,mc.jsxs)(hv,{children:[(0,mc.jsx)(fv,{children:"Price:"}),(0,mc.jsxs)(yv,{children:["\u20b9",e.price]})]}),(0,mc.jsxs)(hv,{children:[(0,mc.jsx)(fv,{children:"Duration:"}),(0,mc.jsx)(gv,{children:e.duration})]}),(0,mc.jsxs)(hv,{children:[(0,mc.jsx)(fv,{children:"Location:"}),(0,mc.jsxs)(kv,{children:[(0,mc.jsx)(bx,{style:{color:"rgb(172, 54, 73)",fontSize:"1.1em",marginRight:2}}),e.location]})]}),(0,mc.jsxs)(hv,{children:[(0,mc.jsx)(fv,{children:"Time Slots:"}),(0,mc.jsx)(wv,{children:e.timeSlots&&e.timeSlots.length>0?e.timeSlots.map(((e,t)=>{const n=s.find((t=>t.id===e));return n?(0,mc.jsxs)(jv,{children:[n.name," (",n.start,"-",n.end,")"]},t):null})):(0,mc.jsx)(Sv,{children:"No slots assigned"})})]})]}),(0,mc.jsxs)(Ev,{children:[(0,mc.jsx)(Cv,{variant:"toggle",onClick:()=>i(e.id),style:{minWidth:90},children:"Toggle Status"}),(0,mc.jsx)(Cv,{variant:"edit",onClick:()=>o(e),style:{minWidth:70},children:"Edit"}),(0,mc.jsx)(Cv,{variant:"delete",onClick:()=>r(e.id),style:{minWidth:70},children:"Delete"})]})]},e.id)))}):(0,mc.jsx)("div",{style:{background:"white",borderRadius:"12px",overflow:"hidden",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.05)"},children:(0,mc.jsx)("div",{style:{overflowX:"auto"},children:(0,mc.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse"},children:[(0,mc.jsx)("thead",{children:(0,mc.jsxs)("tr",{style:{background:"#f9fafb"},children:[(0,mc.jsx)("th",{style:{padding:"1rem",textAlign:"left",fontWeight:"600",fontSize:"0.9rem",color:"#1f2937"},children:"Puja Name"}),(0,mc.jsx)("th",{style:{padding:"1rem",textAlign:"left",fontWeight:"600",fontSize:"0.9rem",color:"#1f2937"},children:"Category"}),(0,mc.jsx)("th",{style:{padding:"1rem",textAlign:"left",fontWeight:"600",fontSize:"0.9rem",color:"#1f2937"},children:"Price"}),(0,mc.jsx)("th",{style:{padding:"1rem",textAlign:"left",fontWeight:"600",fontSize:"0.9rem",color:"#1f2937"},children:"Status"}),(0,mc.jsx)("th",{style:{padding:"1rem",textAlign:"left",fontWeight:"600",fontSize:"0.9rem",color:"#1f2937"},children:"Actions"})]})}),(0,mc.jsx)("tbody",{children:w.map((e=>(0,mc.jsxs)("tr",{style:{borderBottom:"1px solid #f3f4f6"},children:[(0,mc.jsx)("td",{style:{padding:"1rem",fontWeight:"500"},children:e.name}),(0,mc.jsx)("td",{style:{padding:"1rem"},children:(0,mc.jsxs)(xv,{children:[(0,mc.jsx)(bv,{children:e.category}),e.subcategory&&(0,mc.jsxs)(vv,{children:["\u2192 ",e.subcategory]})]})}),(0,mc.jsxs)("td",{style:{padding:"1rem",fontWeight:"600"},children:["\u20b9",e.price]}),(0,mc.jsx)("td",{style:{padding:"1rem"},children:(0,mc.jsx)(pv,{$status:e.status,children:e.status})}),(0,mc.jsx)("td",{style:{padding:"1rem"},children:(0,mc.jsxs)(Ev,{style:{margin:0,padding:0,border:"none"},children:[(0,mc.jsx)(Tv,{onClick:()=>i(e.id),variant:"outline",color:"Active"===e.status?"green":"red",size:"sm",children:"Toggle"}),(0,mc.jsx)(Tv,{onClick:()=>o(e),color:"blue",size:"sm",children:"Edit"}),(0,mc.jsx)(Tv,{onClick:()=>r(e.id),color:"red",size:"sm",children:"Delete"})]})})]},e.id)))})]})})}),0===w.length&&(0,mc.jsx)(Av,{children:"No pujas found matching your criteria."})]})},zv=dn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
`,Dv=dn.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e5e7eb;
  z-index: 1;
`,Fv=dn.div`
  position: absolute;
  top: 20px;
  left: 0;
  height: 2px;
  background: rgb(184, 22, 22);
  z-index: 2;
  transition: width 0.3s ease;
  width: ${e=>e.$progress}%;
`,Nv=dn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;
  position: relative;
`,Iv=dn.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  background: ${e=>e.$active?"rgb(184, 22, 22)":"#fff"};
  color: ${e=>e.$active?"#fff":"#6b7280"};
  border: 2px solid ${e=>e.$active?"rgb(184, 22, 22)":"#d1d5db"};
`,Mv=dn.span`
  font-size: 0.875rem;
  font-weight: ${e=>e.$active?"600":"500"};
  color: ${e=>e.$active?"rgb(184, 22, 22)":"#6b7280"};
  text-align: center;
  white-space: nowrap;
`,Lv=e=>{let{steps:t,currentStep:n}=e;const r=(n+1)/t.length*100;return(0,mc.jsxs)(zv,{children:[(0,mc.jsx)(Dv,{}),(0,mc.jsx)(Fv,{$progress:r}),t.map(((e,t)=>(0,mc.jsxs)(Nv,{style:{flex:1},children:[(0,mc.jsx)(Iv,{$active:t<=n,children:t+1}),(0,mc.jsx)(Mv,{$active:t<=n,children:e.label})]},t)))]})},Ov=["Temple","Devotee Home","Both"],Bv=["Flowers","Coconut","Lamp","Incense","Kumkum","Chandan"],$v=["Pandit Sharma","Pandit Rao","Pandit Patel","Pandit Singh"],Vv=["Auto Assign","Manual Assign"],Uv="rgb(172, 54, 73)",Hv="#F8D7DA",Wv="rgb(172, 54, 73)",Gv="#fff",Yv=dn.div`
  max-width: 800px;
  margin: 0 auto;
`,qv=dn.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`,Kv=dn.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
`,Xv=dn.div`
  display: grid;
  gap: 1.5rem;
`,Qv=dn.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,Jv=dn.div``,Zv=dn.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`,ey=dn.input`
  width: 100%;
  padding: 0.75rem;
  border: ${e=>e.error?"1px solid #dc3545":"1px solid #e0e0e0"};
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: ${Wv};
  }
`,ty=dn.select`
  width: 100%;
  padding: 0.75rem;
  border: ${e=>e.error?"1px solid #dc3545":"1px solid #e0e0e0"};
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: ${Wv};
  }
`,ny=dn.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  outline: none;
  &:focus {
    border-color: ${Wv};
  }
`,ry=dn.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.25rem;
`,iy=dn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,ay=dn.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: ${e=>e.selected?"rgb(172, 54, 73)":"#f5f5f5"};
  color: ${e=>e.selected?Gv:"#333"};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  &:hover {
    background: ${e=>e.selected?Wv:Hv};
    color: ${e=>e.selected?Gv:Uv};
  }
`,oy=dn.div`
  display: flex;
  gap: 1rem;
`,sy=dn.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,ly=dn.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  background: #f9f9f9;
  cursor: pointer;
  &:focus {
    border-color: ${Wv};
  }
`,cy=dn.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
`,dy=dn.button`
  padding: 0.75rem 1.5rem;
  border: ${e=>"secondary"===e.variant?"1px solid #ccc":"none"};
  border-radius: 8px;
  background: ${e=>e.disabled?"#f5f5f5":"secondary"===e.variant?"#fff":Uv};
  color: ${e=>e.disabled?"#ccc":"secondary"===e.variant?"#666":"#fff"};
  font-weight: 600;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  transition: all 0.2s;
  &:hover:not(:disabled) {
    background: ${e=>(e.variant,Hv)};
    color: ${e=>(e.variant,Uv)};
    border: ${e=>"secondary"===e.variant?`1px solid ${Uv}`:"none"};
  }
`,uy=dn.div`
  display: flex;
  gap: 1rem;
`,py=e=>{let{onSavePuja:n,onCancel:r,initialValues:i,timeSlots:a=[],categories:o=[]}=e;const[s,l]=(0,t.useState)((()=>i?{pujaName:i.name||"",category:i.category||(o.length>0?o[0].name:""),subcategory:i.subcategory||"",allowedLocations:i.allowedLocations&&i.allowedLocations.length>0?i.allowedLocations:i.location?[i.location]:[],maxAttendees:i.maxAttendees||"",description:i.description||"",imageFile:null,price:i.price||"",specialPrice:i.specialPrice||"",timeSlots:i.timeSlots||[],slotCapacity:i.slotCapacity||"",itemsRequired:i.itemsRequired||[],preparationTime:i.preparationTime||"",preparationUnit:i.preparationUnit||"Minutes",specialInstructions:i.specialInstructions||"",defaultPriest:i.defaultPriest||"",backupPriest:i.backupPriest||"",assignmentType:i.assignmentType||Vv[0],status:i.status||"Active",effectiveFrom:i.effectiveFrom||"",effectiveTo:i.effectiveTo||"",reason:i.reason||""}:{pujaName:"",category:o.length>0?o[0].name:"",subcategory:"",allowedLocations:[],maxAttendees:"",description:"",imageFile:null,price:"",specialPrice:"",timeSlots:[],slotCapacity:"",itemsRequired:[],preparationTime:"",preparationUnit:"Minutes",specialInstructions:"",defaultPriest:"",backupPriest:"",assignmentType:Vv[0],status:"Active",effectiveFrom:"",effectiveTo:"",reason:""})),c=o.find((e=>e.name===s.category)),d=(null===c||void 0===c?void 0:c.subcategories)||[],[u,p]=(0,t.useState)({}),[m,h]=(0,t.useState)("basic"),f=[{id:"basic",label:"Basic Information"},{id:"pricing",label:"Pricing & Time Slots"},{id:"ritual",label:"Ritual & Preparation"},{id:"priest",label:"Priest Assignment"},{id:"availability",label:"Availability"}],g=(e,t)=>{l((n=>({...n,[e]:t}))),u[e]&&p((t=>({...t,[e]:""})))},x=e=>{const t={};return"basic"===e&&(s.pujaName.trim()||(t.pujaName="Puja name is required"),s.allowedLocations.length||(t.allowedLocations="Select at least one location")),"pricing"===e&&((!s.price||isNaN(s.price)||Number(s.price)<=0)&&(t.price="Price must be a positive number"),s.timeSlots.length||(t.timeSlots="Select at least one time slot")),"priest"===e&&("Manual Assign"!==s.assignmentType||s.defaultPriest||(t.defaultPriest="Default priest is required for manual assignment")),p(t),0===Object.keys(t).length},b=()=>(0,mc.jsxs)("div",{children:[(0,mc.jsx)(Kv,{children:"Basic Information"}),(0,mc.jsxs)(Xv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Puja Name *"}),(0,mc.jsx)(ey,{type:"text",placeholder:"Morning Puja",value:s.pujaName,onChange:e=>g("pujaName",e.target.value),error:u.pujaName}),u.pujaName&&(0,mc.jsx)(ry,{children:u.pujaName})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Category *"}),(0,mc.jsx)(Zb,{options:o.map((e=>({value:e.name,label:e.name}))),value:s.category,onChange:e=>{g("category",e.target.value),g("subcategory","")}})]}),(null===c||void 0===c?void 0:c.hasSubcategories)&&(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Subcategory"}),(0,mc.jsx)(Zb,{options:[{value:"",label:"Select Subcategory (Optional)"},...d.map((e=>({value:e,label:e})))],value:s.subcategory,onChange:e=>g("subcategory",e.target.value)})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Allowed Locations"}),(0,mc.jsx)(Zb,{options:Ov.map((e=>({value:e,label:e}))),value:s.allowedLocations[0]||"",onChange:e=>g("allowedLocations",[e.target.value]),placeholder:"Select Location",style:u.allowedLocations?{border:"1.5px solid #e74c3c"}:{}}),u.allowedLocations&&(0,mc.jsx)(ry,{children:u.allowedLocations})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Max Attendees"}),(0,mc.jsx)(ey,{type:"number",placeholder:"50",value:s.maxAttendees,onChange:e=>g("maxAttendees",e.target.value)})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Description"}),(0,mc.jsx)(ny,{placeholder:"Brief description of the puja",value:s.description,onChange:e=>g("description",e.target.value),rows:4})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Image Upload"}),(0,mc.jsx)(ly,{type:"file",accept:"image/*",onChange:e=>g("imageFile",e.target.files[0])})]})]})]}),v=()=>(0,mc.jsxs)("div",{children:[(0,mc.jsx)(Kv,{children:"Ritual & Preparation Details"}),(0,mc.jsxs)(Xv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Items Required"}),(0,mc.jsx)(iy,{children:Bv.map((e=>(0,mc.jsx)(ay,{type:"button",onClick:()=>{return t="itemsRequired",n=e,void l((e=>({...e,[t]:e[t].includes(n)?e[t].filter((e=>e!==n)):[...e[t],n]})));var t,n},selected:s.itemsRequired.includes(e),children:e},e)))})]}),(0,mc.jsxs)(Qv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Preparation Time"}),(0,mc.jsx)(ey,{type:"number",placeholder:"30",value:s.preparationTime,onChange:e=>g("preparationTime",e.target.value)})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Preparation Time Unit"}),(0,mc.jsx)(Zb,{options:[{value:"Minutes",label:"Minutes"},{value:"Hours",label:"Hours"}],value:s.preparationUnit,onChange:e=>g("preparationUnit",e.target.value)})]})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Special Instructions"}),(0,mc.jsx)(ny,{placeholder:"Bring valid ID for temple entry",value:s.specialInstructions,onChange:e=>g("specialInstructions",e.target.value),rows:3})]})]})]}),y=f.findIndex((e=>e.id===m));return(0,mc.jsxs)(Yv,{children:[(0,mc.jsx)(Lv,{steps:f,currentStep:y}),(0,mc.jsxs)(qv,{children:[(()=>{switch(m){case"basic":default:return b();case"pricing":return(0,mc.jsxs)("div",{children:[(0,mc.jsx)(Kv,{children:"Pricing & Time Slots"}),(0,mc.jsxs)(Xv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Price (\u20b9)"}),(0,mc.jsx)(ey,{type:"number",value:s.price,onChange:e=>g("price",e.target.value),min:"0"})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Special Price (Optional)"}),(0,mc.jsx)(ey,{type:"number",value:s.specialPrice,onChange:e=>g("specialPrice",e.target.value),min:"0"})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Assign Time Slots"}),(0,mc.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:0===a.filter((e=>"Active"===e.status)).length?(0,mc.jsx)("span",{style:{color:"#888"},children:"No active time slots available. Please add in Time Slot Manager."}):a.filter((e=>"Active"===e.status)).map((e=>(0,mc.jsxs)("label",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,mc.jsx)("input",{type:"checkbox",checked:s.timeSlots.includes(e.id),onChange:t=>{const n=t.target.checked;l((t=>({...t,timeSlots:n?[...t.timeSlots,e.id]:t.timeSlots.filter((t=>t!==e.id))})))}}),e.name," (",e.start," - ",e.end,", Capacity: ",e.capacity,")"]},e.id)))})]})]})]});case"ritual":return v();case"priest":return(0,mc.jsxs)("div",{children:[(0,mc.jsx)(Kv,{children:"Priest Assignment"}),(0,mc.jsxs)(Xv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Assignment Type"}),(0,mc.jsx)(Zb,{options:Vv.map((e=>({value:e,label:e}))),value:s.assignmentType,onChange:e=>g("assignmentType",e.target.value)})]}),(0,mc.jsxs)(Qv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Default Priest"}),(0,mc.jsxs)(ty,{value:s.defaultPriest,onChange:e=>g("defaultPriest",e.target.value),error:u.defaultPriest,children:[(0,mc.jsx)("option",{value:"",children:"Select Priest"}),$v.map((e=>(0,mc.jsx)("option",{value:e,children:e},e)))]}),u.defaultPriest&&(0,mc.jsx)(ry,{children:u.defaultPriest})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Backup Priest"}),(0,mc.jsxs)(ty,{value:s.backupPriest,onChange:e=>g("backupPriest",e.target.value),children:[(0,mc.jsx)("option",{value:"",children:"Select Backup Priest"}),$v.map((e=>(0,mc.jsx)("option",{value:e,children:e},e)))]})]})]})]})]});case"availability":return(0,mc.jsxs)("div",{children:[(0,mc.jsx)(Kv,{children:"Availability"}),(0,mc.jsxs)(Xv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Status *"}),(0,mc.jsxs)(oy,{children:[(0,mc.jsxs)(sy,{children:[(0,mc.jsx)("input",{type:"radio",name:"status",value:"Active",checked:"Active"===s.status,onChange:e=>g("status",e.target.value)}),"Active"]}),(0,mc.jsxs)(sy,{children:[(0,mc.jsx)("input",{type:"radio",name:"status",value:"Inactive",checked:"Inactive"===s.status,onChange:e=>g("status",e.target.value)}),"Inactive"]})]})]}),(0,mc.jsxs)(Qv,{children:[(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Effective From"}),(0,mc.jsx)(ey,{type:"date",value:s.effectiveFrom,onChange:e=>g("effectiveFrom",e.target.value)})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Effective To"}),(0,mc.jsx)(ey,{type:"date",value:s.effectiveTo,onChange:e=>g("effectiveTo",e.target.value)})]})]}),(0,mc.jsxs)(Jv,{children:[(0,mc.jsx)(Zv,{children:"Reason/Notes"}),(0,mc.jsx)(ny,{placeholder:"Priest on leave",value:s.reason,onChange:e=>g("reason",e.target.value),rows:3})]})]})]})}})(),(0,mc.jsxs)(cy,{children:[(0,mc.jsx)(dy,{onClick:()=>{const e=f.findIndex((e=>e.id===m));e>0&&h(f[e-1].id)},disabled:"basic"===m,variant:"secondary",children:"Previous"}),(0,mc.jsx)(uy,{children:"availability"===m?(0,mc.jsx)(dy,{onClick:()=>{if(x(m)){const e={name:s.pujaName,category:s.category,subcategory:s.subcategory,price:Number(s.price),specialPrice:s.specialPrice?Number(s.specialPrice):null,timeSlots:s.timeSlots,duration:`${s.preparationTime||0} ${s.preparationUnit}`,location:s.allowedLocations[0]||"Temple",status:s.status,maxAttendees:s.maxAttendees?Number(s.maxAttendees):null,description:s.description,itemsRequired:s.itemsRequired,preparationTime:s.preparationTime,preparationUnit:s.preparationUnit,specialInstructions:s.specialInstructions,defaultPriest:s.defaultPriest,backupPriest:s.backupPriest,assignmentType:s.assignmentType,effectiveFrom:s.effectiveFrom,effectiveTo:s.effectiveTo,reason:s.reason,imageFile:s.imageFile};n(e),r()}},children:"Save Puja"}):(0,mc.jsx)(dy,{onClick:()=>{if(x(m)){const e=f.findIndex((e=>e.id===m));e<f.length-1&&h(f[e+1].id)}},children:"Next"})})]})]})]})},my=dn.div`
  width: 100%;
  overflow-x: auto;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(255,215,0,0.07);
  margin-bottom: 2rem;
`,hy=dn.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 700px;
`,fy=dn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  gap: 1.5rem;
  flex-wrap: wrap;
`,gy=(dn.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgb(172, 54, 73);
  margin: 0;
  padding-bottom: 0.25rem;
  border-bottom: 3px solid rgb(172, 54, 73);
  letter-spacing: 0.5px;
`,dn(wg)`
  background: rgb(172, 54, 73) !important;
  color: #fff !important;
  border: none !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  padding: 0.85rem 2rem !important;
  border-radius: 10px !important;
  box-shadow: 0 2px 8px #f8d7da33;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #F8D7DA !important;
    color: rgb(172, 54, 73) !important;
  }
`),xy=dn.th`
  position: sticky;
  top: 0;
  background:rgb(184, 22, 22);
  color: #fff;
  font-weight: 600;
  padding: 1rem 0.75rem;
  text-align: left;
  z-index: 2;
  font-size: 1rem;
`,by=dn.td`
  padding: 0.85rem 0.75rem;
  font-size: 0.98rem;
  color: #222;
  border-bottom: 1px solid #f3f4f6;
`,vy=dn.tr`
  background: ${e=>e.$zebra?"#f5f5f5":"#fff"};
  transition: background 0.2s;
  &:hover {
    background: #F8D7DA;
  }
`,yy=dn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${e=>"Active"===e.$status?"#22c55e":"rgb(172, 54, 73)"};
  color: #fff;
  border: none;
`,wy=dn.div`
  display: flex;
  gap: 0.5rem;
`,jy=dn.div`
  text-align: center;
  color: #aaa;
  font-size: 1.1rem;
  padding: 3rem 0;
`,Sy=dn.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ky=dn.form`
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  min-width: 340px;
  max-width: 95vw;
  box-shadow: 0 8px 32px rgba(172,54,73,0.13);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`,Ey=dn.h3`
  margin-bottom: 0.5rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: rgb(172, 54, 73);
  text-align: left;
`,Cy=dn.button`
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: none;
  border: none;
  color: #888;
  font-size: 1.7rem;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 10;
  &:hover {
    color: rgb(172, 54, 73);
  }
`,Ay=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,_y=dn.label`
  font-size: 0.95rem;
  color: #444;
`,Py=dn.input`
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  background: #faf9f7;
  &:focus {
    outline: none;
    border-color: #800000;
    background: #fff;
  }
`,Ty=dn.div`
  color: #e74c3c;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`,Ry=dn.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
`,zy=dn.button`
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  ${e=>{let{variant:t}=e;return"toggle"===t&&"\n      background: #fff;\n      color: rgb(172, 54, 73);\n      border: 1.5px solid rgb(172, 54, 73);\n      &:hover {\n        background: #F8D7DA;\n        color: rgb(172, 54, 73);\n      }\n    "}}
  ${e=>{let{variant:t}=e;return"edit"===t&&"\n      background: rgb(172, 54, 73);\n      color: #fff;\n      &:hover {\n        background: #F8D7DA;\n        color: rgb(172, 54, 73);\n      }\n    "}}
  ${e=>{let{variant:t}=e;return"delete"===t&&"\n      background: #e74c3c;\n      color: #fff;\n      &:hover {\n        background: #fadbd8;\n        color: #e74c3c;\n      }\n    "}}
`,Dy=e=>{let{timeSlots:n,onAddTimeSlot:r,onEditTimeSlot:i,onDeleteTimeSlot:a,onToggleTimeSlotStatus:o}=e;const[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(null),[u,p]=(0,t.useState)({name:"",start:"",end:"",capacity:""}),[m,h]=(0,t.useState)(""),f=()=>{p({name:"",start:"",end:"",capacity:""}),d(null),h("")},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(p({name:e.name,start:e.start,end:e.end,capacity:e.capacity}),d(e)):f(),l(!0)},x=()=>{l(!1),f()},b=e=>{const{name:t,value:n}=e.target;p((e=>({...e,[t]:n})))},v=e=>{e.preventDefault(),u.name.trim()&&u.start&&u.end&&u.capacity?u.start>=u.end?h("Start time must be before end time."):isNaN(u.capacity)||Number(u.capacity)<=0?h("Capacity must be a positive number."):(c?i(c.id,{...c,...u,capacity:Number(u.capacity)}):r({...u,capacity:Number(u.capacity)}),x()):h("All fields are required.")};return(0,mc.jsxs)("div",{style:{maxWidth:1e3,margin:"0 auto",padding:"2rem"},children:[(0,mc.jsx)(fy,{children:(0,mc.jsx)(gy,{onClick:()=>g(),size:"md",children:"+ Add New Time Slot"})}),(0,mc.jsx)(my,{children:(0,mc.jsxs)(hy,{children:[(0,mc.jsx)("thead",{children:(0,mc.jsxs)("tr",{children:[(0,mc.jsx)(xy,{children:"Name"}),(0,mc.jsx)(xy,{children:"Start Time"}),(0,mc.jsx)(xy,{children:"End Time"}),(0,mc.jsx)(xy,{children:"Capacity"}),(0,mc.jsx)(xy,{children:"Status"}),(0,mc.jsx)(xy,{children:"Actions"})]})}),(0,mc.jsx)("tbody",{children:0===n.length?(0,mc.jsx)("tr",{children:(0,mc.jsx)(by,{colSpan:6,children:(0,mc.jsx)(jy,{children:"No time slots defined."})})}):n.map(((e,t)=>(0,mc.jsxs)(vy,{$zebra:t%2===1,children:[(0,mc.jsx)(by,{children:e.name}),(0,mc.jsx)(by,{children:e.start}),(0,mc.jsx)(by,{children:e.end}),(0,mc.jsx)(by,{children:e.capacity}),(0,mc.jsx)(by,{children:(0,mc.jsx)(yy,{$status:e.status,children:e.status})}),(0,mc.jsx)(by,{children:(0,mc.jsxs)(wy,{children:[(0,mc.jsx)(zy,{variant:"toggle",onClick:()=>o(e.id),style:{minWidth:90},children:"Active"===e.status?"Deactivate":"Activate"}),(0,mc.jsx)(zy,{variant:"edit",onClick:()=>g(e),style:{minWidth:70},children:"Edit"}),(0,mc.jsx)(zy,{variant:"delete",onClick:()=>a(e.id),style:{minWidth:70},children:"Delete"})]})})]},e.id)))})]})}),s&&(0,mc.jsx)(Sy,{children:(0,mc.jsxs)(ky,{onSubmit:v,children:[(0,mc.jsx)(Cy,{type:"button",onClick:x,"aria-label":"Close",children:(0,mc.jsx)(Ax,{})}),(0,mc.jsx)(Ey,{children:c?"Edit Time Slot":"Add New Time Slot"}),(0,mc.jsxs)(Ay,{children:[(0,mc.jsx)(_y,{children:"Name"}),(0,mc.jsx)(Py,{name:"name",value:u.name,onChange:b})]}),(0,mc.jsxs)(Ay,{style:{display:"flex",gap:12},children:[(0,mc.jsxs)("div",{style:{flex:1},children:[(0,mc.jsx)(_y,{children:"Start Time"}),(0,mc.jsx)(Py,{name:"start",type:"time",value:u.start,onChange:b})]}),(0,mc.jsxs)("div",{style:{flex:1},children:[(0,mc.jsx)(_y,{children:"End Time"}),(0,mc.jsx)(Py,{name:"end",type:"time",value:u.end,onChange:b})]})]}),(0,mc.jsxs)(Ay,{children:[(0,mc.jsx)(_y,{children:"Capacity"}),(0,mc.jsx)(Py,{name:"capacity",type:"number",min:"1",value:u.capacity,onChange:b})]}),m&&(0,mc.jsx)(Ty,{children:m}),(0,mc.jsxs)(Ry,{children:[(0,mc.jsx)(wg,{onClick:x,variant:"outline",color:"gray",size:"md",type:"button",children:"Cancel"}),(0,mc.jsx)(wg,{onClick:v,color:"#800000",size:"md",type:"submit",children:c?"Update":"Add"})]})]})})]})},Fy="rgb(184, 22, 22)",Ny="rgba(184, 22, 22, 0.1)",Iy="rgba(184, 22, 22, 0.05)",My="rgb(150, 18, 18)",Ly=dn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`,Oy=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1.5rem;
`,By=(dn.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${Fy};
    border-radius: 2px;
  }
`,dn.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${Fy};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 5px rgba(184, 22, 22, 0.3);
  
  &:hover {
    background: ${My};
    transform: translateY(-1px);
  }
  
  svg {
    font-size: 1.2rem;
  }
`),$y=dn.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`,Vy=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: ${e=>e.$isActive?Iy:"#f7fafc"};
  cursor: pointer;
  border-bottom: ${e=>e.$expanded?"1px solid #e2e8f0":"none"};
`,Uy=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Hy=dn.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Wy=dn.p`
  font-size: 0.9rem;
  color: #718096;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Gy=dn.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${e=>e.$active?"#c6f6d5":"#fed7d7"};
  color: ${e=>e.$active?"#22543d":"#742a2a"};
`,Yy=dn.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,qy=dn.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: none;
  border: 1px solid #e2e8f0;
  color: #718096;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f1f5f9;
    
    &.edit {
      color: ${Fy};
      border-color: ${Ny};
    }
    
    &.delete {
      color: #e53e3e;
      border-color: #fed7d7;
    }
  }
`,Ky=dn.button`
  background: none;
  border: none;
  color: #718096;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.2s;
  transform: ${e=>e.$expanded?"rotate(180deg)":"rotate(0deg)"};
`,Xy=dn.div`
  padding: ${e=>e.$expanded?"1.25rem":"0"};
  background: #f7fafc;
  max-height: ${e=>e.$expanded?"1000px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;
`,Qy=dn.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: ${e=>e.$hasItems?"1rem":"0"};
`,Jy=dn.div`
  display: flex;
  align-items: center;
  background: ${Iy};
  color: ${Fy};
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
`,Zy=dn.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${Fy};
  cursor: pointer;
  margin-left: 0.25rem;
  font-size: 1rem;
  transition: color 0.2s;
  
  &:hover {
    color: #e53e3e;
  }
`,ew=dn.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${Ny};
  color: ${Fy};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(184, 22, 22, 0.2);
  }
  
  svg {
    font-size: 1rem;
  }
`,tw=dn.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,nw=dn.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
`,rw=dn.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
  }
`,iw=dn.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #718096;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #e53e3e;
  }
`,aw=dn.div`
  margin-bottom: 1.25rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #4a5568;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s;
    
    &:focus {
      outline: none;
      border-color: ${Fy};
      box-shadow: 0 0 0 3px rgba(184, 22, 22, 0.2);
    }
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
  }
`,ow=dn.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  
  input {
    width: auto;
  }
  
  label {
    margin: 0;
    font-weight: 400;
  }
`,sw=dn.div`
  color: #e53e3e;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,lw=dn.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,cw=dn.button`
  background: white;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f7fafc;
  }
`,dw=dn.button`
  background: ${Fy};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${My};
  }
`,uw=dn.div`
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  h3 {
    color: #4a5568;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #718096;
    margin-bottom: 1.5rem;
  }
`,pw=e=>{let{categories:n,onAddCategory:r,onEditCategory:i,onDeleteCategory:a,onToggleCategoryStatus:o,onAddSubcategory:s,onRemoveSubcategory:l}=e;const[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(null),[m,h]=(0,t.useState)(!1),[f,g]=(0,t.useState)(null),[x,b]=(0,t.useState)({name:"",description:"",hasSubcategories:!1}),[v,y]=(0,t.useState)(""),[w,j]=(0,t.useState)(""),[S,k]=(0,t.useState)({}),E=e=>{k((t=>({...t,[e]:!t[e]})))},C=()=>{b({name:"",description:"",hasSubcategories:!1}),p(null),j("")},A=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(b({name:e.name,description:e.description||"",hasSubcategories:e.hasSubcategories}),p(e)):C(),d(!0)},_=()=>{d(!1),C()},P=e=>{const{name:t,value:n,type:r,checked:i}=e.target;b((e=>({...e,[t]:"checkbox"===r?i:n})))},T=()=>{h(!1),g(null),y("")};return(0,mc.jsxs)(Ly,{children:[(0,mc.jsx)(Oy,{children:(0,mc.jsxs)(By,{onClick:()=>A(),children:[(0,mc.jsx)(vx,{})," Add Category"]})}),0===n.length?(0,mc.jsxs)(uw,{children:[(0,mc.jsx)("h3",{children:"No categories found"}),(0,mc.jsx)("p",{children:"Get started by adding your first category"}),(0,mc.jsxs)(By,{onClick:()=>A(),children:[(0,mc.jsx)(vx,{})," Add Category"]})]}):n.map((e=>(0,mc.jsxs)($y,{children:[(0,mc.jsxs)(Vy,{$isActive:"Active"===e.status,$expanded:S[e.id],onClick:()=>E(e.id),children:[(0,mc.jsxs)(Uy,{children:[(0,mc.jsxs)(Hy,{children:[e.name,e.hasSubcategories&&(0,mc.jsx)(Ky,{$expanded:S[e.id],onClick:t=>{t.stopPropagation(),E(e.id)},children:S[e.id]?(0,mc.jsx)(_x,{}):(0,mc.jsx)(Px,{})})]}),(0,mc.jsx)(Wy,{children:e.description})]}),(0,mc.jsxs)(Yy,{children:[(0,mc.jsx)(Gy,{$active:"Active"===e.status,children:e.status}),(0,mc.jsx)(qy,{className:"edit",onClick:t=>{t.stopPropagation(),A(e)},children:(0,mc.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,mc.jsx)("path",{d:"M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,mc.jsx)("path",{d:"M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,mc.jsx)(qy,{className:"delete",onClick:t=>{t.stopPropagation(),a(e.id)},children:(0,mc.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,mc.jsx)("path",{d:"M3 6H5H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,mc.jsx)("path",{d:"M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,mc.jsx)("path",{d:"M10 11V17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,mc.jsx)("path",{d:"M14 11V17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]}),e.hasSubcategories&&(0,mc.jsxs)(Xy,{$expanded:S[e.id],children:[(0,mc.jsx)(Qy,{$hasItems:e.subcategories.length>0,children:e.subcategories.map(((t,n)=>(0,mc.jsxs)(Jy,{children:[t,(0,mc.jsx)(Zy,{onClick:()=>l(e.id,t),children:"\xd7"})]},n)))}),(0,mc.jsxs)(ew,{onClick:()=>(e=>{g(e),y(""),h(!0)})(e),children:[(0,mc.jsx)(vx,{})," Add Subcategory"]})]})]},e.id))),c&&(0,mc.jsx)(tw,{children:(0,mc.jsxs)(nw,{children:[(0,mc.jsx)(iw,{onClick:_,children:(0,mc.jsx)(Ax,{})}),(0,mc.jsx)(rw,{children:(0,mc.jsx)("h3",{children:u?"Edit Category":"Add New Category"})}),(0,mc.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x.name.trim()&&x.description.trim()?(u?i(u.id,x):r(x),_()):j("Name and description are required.")},children:[(0,mc.jsxs)(aw,{children:[(0,mc.jsx)("label",{children:"Category Name"}),(0,mc.jsx)("input",{type:"text",name:"name",value:x.name,onChange:P,placeholder:"Enter category name"})]}),(0,mc.jsxs)(aw,{children:[(0,mc.jsx)("label",{children:"Description"}),(0,mc.jsx)("textarea",{name:"description",value:x.description,onChange:P,placeholder:"Enter category description"})]}),(0,mc.jsxs)(ow,{children:[(0,mc.jsx)("input",{type:"checkbox",id:"hasSubcategories",name:"hasSubcategories",checked:x.hasSubcategories,onChange:P}),(0,mc.jsx)("label",{htmlFor:"hasSubcategories",children:"Allow subcategories"})]}),w&&(0,mc.jsx)(sw,{children:w}),(0,mc.jsxs)(lw,{children:[(0,mc.jsx)(cw,{type:"button",onClick:_,children:"Cancel"}),(0,mc.jsx)(dw,{type:"submit",children:u?"Update Category":"Add Category"})]})]})]})}),m&&f&&(0,mc.jsx)(tw,{children:(0,mc.jsxs)(nw,{children:[(0,mc.jsx)(iw,{onClick:T,children:(0,mc.jsx)(Ax,{})}),(0,mc.jsx)(rw,{children:(0,mc.jsxs)("h3",{children:["Add Subcategory to ",f.name]})}),(0,mc.jsxs)("form",{onSubmit:e=>{e.preventDefault(),v.trim()?f.subcategories.includes(v.trim())?j("Subcategory already exists."):(s(f.id,v.trim()),T()):j("Subcategory name is required.")},children:[(0,mc.jsxs)(aw,{children:[(0,mc.jsx)("label",{children:"Subcategory Name"}),(0,mc.jsx)("input",{type:"text",value:v,onChange:e=>y(e.target.value),placeholder:"Enter subcategory name"})]}),w&&(0,mc.jsx)(sw,{children:w}),(0,mc.jsxs)(lw,{children:[(0,mc.jsx)(cw,{type:"button",onClick:T,children:"Cancel"}),(0,mc.jsx)(dw,{type:"submit",children:"Add Subcategory"})]})]})]})})]})},mw=dn.div`
  max-width: 1200px;
  margin: 0 auto;
`,hw=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,fw=dn.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`,gw=dn(wg)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xw=dn.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,bw=dn.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,vw=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
`,yw=dn.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ww=dn.div`
  display: flex;
  gap: 0.5rem;
`,jw=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.5rem 0;
`,Sw=dn.span`
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
`,kw=dn.span`
  color: #1e293b;
  font-size: 0.875rem;
  font-weight: 500;
`,Ew=dn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  ${e=>{switch(e.$status){case"Active":return"\n          background: #dcfce7;\n          color: #166534;\n        ";case"Inactive":return"\n          background: #fee2e2;\n          color: #991b1b;\n        ";default:return"\n          background: #f3f4f6;\n          color: #374151;\n        "}}}
`,Cw=()=>{const[e,n]=(0,t.useState)([{id:1,priestName:"Pandit Ramesh Kumar",specialization:"Vedic Rituals",maxPujasPerDay:5,defaultPujas:["Ganesh Puja","Lakshmi Puja"],backupPriests:["Pandit Suresh","Pandit Amit"],status:"Active",availability:"Mon-Sat, 6 AM - 8 PM"},{id:2,priestName:"Pandit Suresh Sharma",specialization:"Marriage Ceremonies",maxPujasPerDay:3,defaultPujas:["Vivah Sanskar","Griha Pravesh"],backupPriests:["Pandit Ramesh","Pandit Amit"],status:"Active",availability:"Mon-Sun, 8 AM - 6 PM"},{id:3,priestName:"Pandit Amit Patel",specialization:"Festival Pujas",maxPujasPerDay:4,defaultPujas:["Diwali Puja","Navratri Puja"],backupPriests:["Pandit Ramesh","Pandit Suresh"],status:"Inactive",availability:"Mon-Fri, 7 AM - 7 PM"}]);return(0,mc.jsxs)(mw,{children:[(0,mc.jsxs)(hw,{children:[(0,mc.jsx)(fw,{children:"\ud83d\udc68\u200d\ud83d\udcbc Priest Assignment Management"}),(0,mc.jsxs)(gw,{color:"blue",onClick:()=>{console.log("Add new priest assignment")},children:[(0,mc.jsx)(vx,{}),"Add Assignment"]})]}),(0,mc.jsx)(xw,{children:e.map((e=>(0,mc.jsxs)(bw,{children:[(0,mc.jsxs)(vw,{children:[(0,mc.jsxs)(yw,{children:[(0,mc.jsx)(zx,{}),e.priestName]}),(0,mc.jsxs)(ww,{children:[(0,mc.jsx)(wg,{size:"sm",variant:"outline",color:"orange",onClick:()=>(e=>{console.log("Edit assignment:",e)})(e),children:(0,mc.jsx)(kx,{})}),(0,mc.jsx)(wg,{size:"sm",variant:"outline",color:"red",onClick:()=>(e=>{n((t=>t.filter((t=>t.id!==e))))})(e.id),children:(0,mc.jsx)(ux,{})})]})]}),(0,mc.jsxs)("div",{children:[(0,mc.jsxs)(jw,{children:[(0,mc.jsx)(Sw,{children:"Specialization:"}),(0,mc.jsx)(kw,{children:e.specialization})]}),(0,mc.jsxs)(jw,{children:[(0,mc.jsx)(Sw,{children:"Max Pujas/Day:"}),(0,mc.jsx)(kw,{children:e.maxPujasPerDay})]}),(0,mc.jsxs)(jw,{children:[(0,mc.jsx)(Sw,{children:"Status:"}),(0,mc.jsx)(Ew,{$status:e.status,children:e.status})]}),(0,mc.jsxs)(jw,{children:[(0,mc.jsx)(Sw,{children:"Availability:"}),(0,mc.jsx)(kw,{children:e.availability})]}),(0,mc.jsxs)(jw,{children:[(0,mc.jsx)(Sw,{children:"Default Pujas:"}),(0,mc.jsx)(kw,{children:e.defaultPujas.join(", ")})]}),(0,mc.jsxs)(jw,{children:[(0,mc.jsx)(Sw,{children:"Backup Priests:"}),(0,mc.jsx)(kw,{children:e.backupPriests.join(", ")})]})]})]},e.id)))}),0===e.length&&(0,mc.jsxs)("div",{style:{textAlign:"center",padding:"3rem",color:"#6b7280"},children:[(0,mc.jsx)(gx,{style:{fontSize:"3rem",marginBottom:"1rem"}}),(0,mc.jsx)("h3",{children:"No Priest Assignments"}),(0,mc.jsx)("p",{children:"Start by adding priest assignments to manage puja allocations."})]})]})},Aw=dn.div`
  max-width: 1200px;
  margin: 0 auto;
`,_w=dn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,Pw=dn.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`,Tw=dn.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`,Rw=dn.div`
  position: relative;
  display: flex;
  align-items: center;
`,zw=dn.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  width: 250px;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 3px rgba(128, 0, 0, 0.1);
  }
`,Dw=dn(fx)`
  position: absolute;
  left: 0.75rem;
  color: #6b7280;
  font-size: 1.125rem;
`,Fw=dn(wg)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Nw=dn.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,Iw=dn.table`
  width: 100%;
  border-collapse: collapse;
`,Mw=dn.th`
  background: #f9fafb;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
`,Lw=dn.td`
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.875rem;
  color: #374151;
`,Ow=dn.tr`
  &:hover {
    background: #f9fafb;
  }
`,Bw=(dn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #fee2e2;
  color: #991b1b;
`,dn.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`),$w=dn(wg)`
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  min-width: auto;
`,Vw=dn.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #6b7280;
`,Uw=()=>{const[e,n]=(0,t.useState)(""),[r,i]=(0,t.useState)("All"),[a]=(0,t.useState)([{id:1,name:"Ganesh Chaturthi Puja",category:"Festival Pujas",subcategory:"Ganesh Chaturthi",price:1500,duration:"2 hours",archivedDate:"2024-01-15",archivedReason:"Seasonal puja completed"},{id:2,name:"Old Wedding Ceremony",category:"Special Occasion Pujas",subcategory:"Wedding",price:5e3,duration:"4 hours",archivedDate:"2024-01-10",archivedReason:"Outdated pricing"},{id:3,name:"Traditional Housewarming",category:"Special Occasion Pujas",subcategory:"Housewarming",price:2e3,duration:"3 hours",archivedDate:"2024-01-05",archivedReason:"Replaced with new version"}]),o=a.filter((t=>{const n=t.name.toLowerCase().includes(e.toLowerCase())||t.category.toLowerCase().includes(e.toLowerCase()),i="All"===r||t.category===r;return n&&i})),s=["All",...Array.from(new Set(a.map((e=>e.category))))];return(0,mc.jsxs)(Aw,{children:[(0,mc.jsxs)(_w,{children:[(0,mc.jsx)(Pw,{children:"\ud83d\udce6 Archive - Inactive Pujas"}),(0,mc.jsxs)(Tw,{children:[(0,mc.jsxs)(Rw,{children:[(0,mc.jsx)(Dw,{}),(0,mc.jsx)(zw,{type:"text",placeholder:"Search archived pujas...",value:e,onChange:e=>n(e.target.value)})]}),(0,mc.jsxs)(Fw,{variant:"outline",color:"gray",size:"sm",onClick:()=>{const e=(s.indexOf(r)+1)%s.length;i(s[e])},children:[(0,mc.jsx)(wx,{}),r]})]})]}),(0,mc.jsx)(Nw,{children:(0,mc.jsxs)(Iw,{children:[(0,mc.jsx)("thead",{children:(0,mc.jsxs)("tr",{children:[(0,mc.jsx)(Mw,{children:"Puja Name"}),(0,mc.jsx)(Mw,{children:"Category"}),(0,mc.jsx)(Mw,{children:"Subcategory"}),(0,mc.jsx)(Mw,{children:"Price"}),(0,mc.jsx)(Mw,{children:"Duration"}),(0,mc.jsx)(Mw,{children:"Archived Date"}),(0,mc.jsx)(Mw,{children:"Reason"}),(0,mc.jsx)(Mw,{children:"Actions"})]})}),(0,mc.jsx)("tbody",{children:0===o.length?(0,mc.jsx)("tr",{children:(0,mc.jsx)(Lw,{colSpan:8,children:(0,mc.jsx)(Vw,{children:e||"All"!==r?"No archived pujas match your search criteria":"No archived pujas found"})})}):o.map((e=>(0,mc.jsxs)(Ow,{children:[(0,mc.jsx)(Lw,{children:(0,mc.jsx)("strong",{children:e.name})}),(0,mc.jsx)(Lw,{children:e.category}),(0,mc.jsx)(Lw,{children:e.subcategory}),(0,mc.jsxs)(Lw,{children:["\u20b9",e.price]}),(0,mc.jsx)(Lw,{children:e.duration}),(0,mc.jsx)(Lw,{children:e.archivedDate}),(0,mc.jsx)(Lw,{children:e.archivedReason}),(0,mc.jsx)(Lw,{children:(0,mc.jsxs)(Bw,{children:[(0,mc.jsx)($w,{color:"blue",variant:"outline",size:"sm",onClick:()=>(e=>{console.log("View archived puja:",e)})(e),title:"View Details",children:(0,mc.jsx)(xx,{})}),(0,mc.jsx)($w,{color:"green",variant:"outline",size:"sm",onClick:()=>(e=>{console.log("Restore puja:",e)})(e),title:"Restore Puja",children:(0,mc.jsx)(hx,{})}),(0,mc.jsx)($w,{color:"red",variant:"outline",size:"sm",onClick:()=>(e=>{console.log("Delete archived puja:",e)})(e.id),title:"Delete Permanently",children:(0,mc.jsx)(ux,{})})]})})]},e.id)))})]})}),0===o.length&&!e&&"All"===r&&(0,mc.jsxs)("div",{style:{textAlign:"center",padding:"3rem",color:"#6b7280"},children:[(0,mc.jsx)(yx,{style:{fontSize:"3rem",marginBottom:"1rem"}}),(0,mc.jsx)("h3",{children:"Archive is Empty"}),(0,mc.jsx)("p",{children:"No pujas have been archived yet. Inactive pujas will appear here."})]})]})},Hw=dn.div`
  border-bottom: 2px solid #f0f0f0;
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
  @media (max-width: 768px) { margin-bottom: 1.5rem; }
`,Ww=dn.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${e=>e.$isActive?"rgb(184, 22, 22)":"transparent"};
  color: ${e=>e.$isActive?"#fff":"#800000"};
  font-weight: ${e=>e.$isActive?600:500};
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.95rem;
  white-space: nowrap;
  border-bottom: ${e=>e.$isActive?"2px solid rgb(184, 22, 22)":"none"};
  &:hover {
    background: #F8D7DA;
    color: rgb(184, 22, 22);
    border-bottom: 2px solid rgb(184, 22, 22);
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;const Gw=function(e){let{tabs:t,activeTab:n,onChange:r}=e;return(0,mc.jsx)(Hw,{children:t.map((e=>(0,mc.jsx)(Ww,{onClick:()=>r(e.id),$isActive:n===e.id,children:e.label},e.id)))})},Yw=dn.div`
  padding: 2rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,qw=dn.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(255,215,0,0.08);
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Kw=[{id:1,name:"Morning Puja",category:"Daily Pujas",subcategory:"Morning",price:1200,timeSlots:[1],duration:"1 hr",location:"Temple",status:"Active",description:"Traditional morning worship ceremony"},{id:2,name:"Evening Aarti",category:"Daily Pujas",subcategory:"Evening",price:800,timeSlots:[2],duration:"45 mins",location:"Temple",status:"Active",description:"Evening lamp ceremony with devotional songs"},{id:3,name:"Ganesh Puja",category:"Festival Pujas",subcategory:"Ganesh Chaturthi",price:2500,timeSlots:[1,2],duration:"2 hrs",location:"Temple",status:"Active",description:"Special worship of Lord Ganesha"},{id:4,name:"Satyanarayan Katha",category:"Special Occasion Pujas",subcategory:"Housewarming",price:5e3,timeSlots:[],duration:"3 hrs",location:"Both",status:"Inactive",description:"Religious ceremony for new beginnings"}],Xw=[{id:"all-pujas",label:"All Pujas",component:Rv},{id:"add-puja",label:"Add New Puja",component:py},{id:"time-slots",label:"Time Slots",component:Dy},{id:"categories",label:"Categories",component:pw},{id:"priest-assignment",label:"Priest Assignment",component:Cw},{id:"archive",label:"Archive",component:Uw}],Qw=()=>{const[e,n]=(0,t.useState)("all-pujas"),[r,i]=(0,t.useState)(Kw),[a,o]=(0,t.useState)(null),[s,l]=(0,t.useState)([{id:1,name:"Morning Slot",start:"06:00",end:"07:00",capacity:10,status:"Active"},{id:2,name:"Evening Slot",start:"18:00",end:"19:00",capacity:15,status:"Active"}]),[c,d]=(0,t.useState)([{id:1,name:"Daily Pujas",description:"Regular temple rituals performed every day.",hasSubcategories:!0,subcategories:["Morning","Afternoon","Evening"],status:"Active"},{id:2,name:"Weekly Pujas",description:"Performed on specific days of the week.",hasSubcategories:!1,subcategories:[],status:"Active"},{id:3,name:"Monthly / Periodic Pujas",description:"Performed on specific lunar dates or monthly occasions.",hasSubcategories:!1,subcategories:[],status:"Active"},{id:4,name:"Festival Pujas",description:"Seasonal rituals linked to major festivals.",hasSubcategories:!0,subcategories:["Diwali","Ganesh Chaturthi","Navratri","Holi"],status:"Active"},{id:5,name:"Special Occasion Pujas",description:"For life events or special ceremonies.",hasSubcategories:!0,subcategories:["Wedding","Housewarming","Naming Ceremony"],status:"Active"}]),u=e=>{const t={...e,id:Date.now(),status:e.status||"Active",timeSlots:e.timeSlots||[]};i((e=>[...e,t])),n("all-pujas")},p=e=>{i((t=>t.filter((t=>t.id!==e))))},m=e=>{i((t=>t.map((t=>t.id===e?{...t,status:"Active"===t.status?"Inactive":"Active"}:t))))},h=e=>{o(e),n("add-puja")},f=e=>{((e,t)=>{i((n=>n.map((n=>n.id===e?{...n,...t}:n))))})(a.id,e),o(null),n("all-pujas")},g=e=>{l((t=>[...t,{...e,id:Date.now(),status:e.status||"Active"}]))},x=(e,t)=>{l((n=>n.map((n=>n.id===e?{...n,...t}:n))))},b=e=>{l((t=>t.filter((t=>t.id!==e))))},v=e=>{l((t=>t.map((t=>t.id===e?{...t,status:"Active"===t.status?"Inactive":"Active"}:t))))},y=e=>{d((t=>[...t,{...e,id:Date.now(),status:e.status||"Active",subcategories:(e.hasSubcategories,[])}]))},w=(e,t)=>{d((n=>n.map((n=>n.id===e?{...n,...t}:n))))},j=e=>{d((t=>t.filter((t=>t.id!==e))))},S=e=>{d((t=>t.map((t=>t.id===e?{...t,status:"Active"===t.status?"Inactive":"Active"}:t))))},k=(e,t)=>{d((n=>n.map((n=>n.id===e?{...n,subcategories:[...n.subcategories,t]}:n))))},E=(e,t)=>{d((n=>n.map((n=>n.id===e?{...n,subcategories:n.subcategories.filter((e=>e!==t))}:n))))};return(0,mc.jsxs)(Yw,{children:[(0,mc.jsx)(Gw,{tabs:Xw,activeTab:e,onChange:e=>{"add-puja"===e&&o(null),n(e)}}),(0,mc.jsx)(qw,{children:(()=>{switch(e){case"all-pujas":default:return(0,mc.jsx)(Rv,{pujas:r,onDeletePuja:p,onToggleStatus:m,onAddPuja:()=>n("add-puja"),onEditPuja:h,timeSlots:s,categories:c});case"add-puja":return(0,mc.jsx)(py,{initialValues:a||void 0,onSavePuja:a?f:u,onCancel:()=>{o(null),n("all-pujas")},timeSlots:s,categories:c});case"time-slots":return(0,mc.jsx)(Dy,{timeSlots:s,onAddTimeSlot:g,onEditTimeSlot:x,onDeleteTimeSlot:b,onToggleTimeSlotStatus:v});case"categories":return(0,mc.jsx)(pw,{categories:c,onAddCategory:y,onEditCategory:w,onDeleteCategory:j,onToggleCategoryStatus:S,onAddSubcategory:k,onRemoveSubcategory:E});case"priest-assignment":return(0,mc.jsx)(Cw,{});case"archive":return(0,mc.jsx)(Uw,{})}})()})]})},Jw=dn.div`
  width: 100%;
  overflow-x: auto;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(255,215,0,0.07);
  margin-bottom: 2rem;
`,Zw=dn.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 700px;
`,ej=dn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  gap: 1.5rem;
  flex-wrap: wrap;
`,tj=(dn.h2`
  font-size: 2rem;
  font-weight: 700;
  color: rgb(172, 54, 73);
  margin: 0;
  padding-bottom: 0.25rem;
  border-bottom: 3px solid rgb(172, 54, 73);
  letter-spacing: 0.5px;
`,dn(wg)`
  background: rgb(172, 54, 73) !important;
  color: #fff !important;
  border: none !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  padding: 0.85rem 2rem !important;
  border-radius: 10px !important;
  box-shadow: 0 2px 8px #f8d7da33;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #F8D7DA !important;
    color: rgb(172, 54, 73) !important;
  }
`),nj=dn.th`
  position: sticky;
  top: 0;
  background:rgb(184, 22, 22);
  color: #fff;
  font-weight: 600;
  padding: 1rem 0.75rem;
  text-align: left;
  z-index: 2;
  font-size: 1rem;
`,rj=dn.td`
  padding: 0.85rem 0.75rem;
  font-size: 0.98rem;
  color: #222;
  border-bottom: 1px solid #f3f4f6;
`,ij=dn.tr`
  background: ${e=>e.$zebra?"#f5f5f5":"#fff"};
  transition: background 0.2s;
  &:hover {
    background: #F8D7DA;
  }
`,aj=dn.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${e=>"Active"===e.$status?"#22c55e":"rgb(172, 54, 73)"};
  color: #fff;
  border: none;
`,oj=dn.div`
  display: flex;
  gap: 0.5rem;
`,sj=dn.div`
  text-align: center;
  color: #aaa;
  font-size: 1.1rem;
  padding: 3rem 0;
`,lj=dn.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,cj=dn.form`
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  min-width: 340px;
  max-width: 95vw;
  box-shadow: 0 8px 32px rgba(172,54,73,0.13);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`,dj=dn.h3`
  margin-bottom: 0.5rem;
  font-size: 1.35rem;
  font-weight: 700;
  color: rgb(172, 54, 73);
  text-align: left;
`,uj=dn.button`
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: none;
  border: none;
  color: #888;
  font-size: 1.7rem;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 10;
  &:hover {
    color: rgb(172, 54, 73);
  }
`,pj=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,mj=dn.label`
  font-size: 0.95rem;
  color: #444;
`,hj=dn.input`
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  background: #faf9f7;
  &:focus {
    outline: none;
    border-color: #800000;
    background: #fff;
  }
`,fj=dn.div`
  color: #e74c3c;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`,gj=dn.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
`,xj=dn.button`
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  ${e=>{let{variant:t}=e;return"toggle"===t&&"\n      background: #fff;\n      color: rgb(172, 54, 73);\n      border: 1.5px solid rgb(172, 54, 73);\n      &:hover {\n        background: #F8D7DA;\n        color: rgb(172, 54, 73);\n      }\n    "}}
  ${e=>{let{variant:t}=e;return"edit"===t&&"\n      background: rgb(172, 54, 73);\n      color: #fff;\n      &:hover {\n        background: #F8D7DA;\n        color: rgb(172, 54, 73);\n      }\n    "}}
  ${e=>{let{variant:t}=e;return"delete"===t&&"\n      background: #e74c3c;\n      color: #fff;\n      &:hover {\n        background: #fadbd8;\n        color: #e74c3c;\n      }\n    "}}
`,bj=e=>{let{timeSlots:n,onAddTimeSlot:r,onEditTimeSlot:i,onDeleteTimeSlot:a,onToggleTimeSlotStatus:o}=e;const[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(null),[u,p]=(0,t.useState)({name:"",start:"",end:""}),[m,h]=(0,t.useState)(""),f=()=>{p({name:"",start:"",end:""}),d(null),h("")},g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(p({name:e.name,start:e.start,end:e.end}),d(e)):f(),l(!0)},x=()=>{l(!1),f()},b=e=>{const{name:t,value:n}=e.target;p((e=>({...e,[t]:n})))},v=e=>{e.preventDefault(),u.name.trim()&&u.start&&u.end?u.start>=u.end?h("Start time must be before end time."):(c?i(c.id,{...c,...u}):r({...u}),x()):h("All fields are required.")};return(0,mc.jsxs)("div",{style:{maxWidth:1e3,margin:"0 auto",padding:"2rem"},children:[(0,mc.jsx)(ej,{children:(0,mc.jsx)(tj,{onClick:()=>g(),size:"md",children:"+ Add New Time Slot"})}),(0,mc.jsx)(Jw,{children:(0,mc.jsxs)(Zw,{children:[(0,mc.jsx)("thead",{children:(0,mc.jsxs)("tr",{children:[(0,mc.jsx)(nj,{children:"Name"}),(0,mc.jsx)(nj,{children:"Start Time"}),(0,mc.jsx)(nj,{children:"End Time"}),(0,mc.jsx)(nj,{children:"Status"}),(0,mc.jsx)(nj,{children:"Actions"})]})}),(0,mc.jsx)("tbody",{children:0===n.length?(0,mc.jsx)("tr",{children:(0,mc.jsx)(rj,{colSpan:5,children:(0,mc.jsx)(sj,{children:"No time slots defined."})})}):n.map(((e,t)=>(0,mc.jsxs)(ij,{$zebra:t%2===1,children:[(0,mc.jsx)(rj,{children:e.name}),(0,mc.jsx)(rj,{children:e.start}),(0,mc.jsx)(rj,{children:e.end}),(0,mc.jsx)(rj,{children:(0,mc.jsx)(aj,{$status:e.status,children:e.status})}),(0,mc.jsx)(rj,{children:(0,mc.jsxs)(oj,{children:[(0,mc.jsx)(xj,{variant:"toggle",onClick:()=>o(e.id),style:{minWidth:90},children:"Active"===e.status?"Deactivate":"Activate"}),(0,mc.jsx)(xj,{variant:"edit",onClick:()=>g(e),style:{minWidth:70},children:"Edit"}),(0,mc.jsx)(xj,{variant:"delete",onClick:()=>a(e.id),style:{minWidth:70},children:"Delete"})]})})]},e.id)))})]})}),s&&(0,mc.jsx)(lj,{children:(0,mc.jsxs)(cj,{onSubmit:v,children:[(0,mc.jsx)(uj,{type:"button",onClick:x,"aria-label":"Close",children:(0,mc.jsx)(Ax,{})}),(0,mc.jsx)(dj,{children:c?"Edit Time Slot":"Add New Time Slot"}),(0,mc.jsxs)(pj,{children:[(0,mc.jsx)(mj,{children:"Name"}),(0,mc.jsx)(hj,{name:"name",value:u.name,onChange:b})]}),(0,mc.jsxs)(pj,{style:{display:"flex",gap:12},children:[(0,mc.jsxs)("div",{style:{flex:1},children:[(0,mc.jsx)(mj,{children:"Start Time"}),(0,mc.jsx)(hj,{name:"start",type:"time",value:u.start,onChange:b})]}),(0,mc.jsxs)("div",{style:{flex:1},children:[(0,mc.jsx)(mj,{children:"End Time"}),(0,mc.jsx)(hj,{name:"end",type:"time",value:u.end,onChange:b})]})]}),m&&(0,mc.jsx)(fj,{children:m}),(0,mc.jsxs)(gj,{children:[(0,mc.jsx)(wg,{onClick:x,variant:"outline",color:"gray",size:"md",type:"button",children:"Cancel"}),(0,mc.jsx)(wg,{onClick:v,color:"#800000",size:"md",type:"submit",children:c?"Update":"Add"})]})]})})]})},vj=dn.div`
  padding: 2rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,yj=dn.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #1e293b;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,wj=dn.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.08);
  @media (min-width: 768px) { padding: 1.75rem; }
`,jj=dn.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`,Sj=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  &.full { grid-column: 1 / -1; }
`,kj=dn.label`
  color: #b45309;
  font-weight: 600;
  font-size: 0.9rem;
`,Ej=dn.input`
  padding: 0.75rem 1rem;
  border: 2px solid #fed7aa;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
  }
`,Cj=dn.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #fed7aa;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  resize: vertical;
  min-height: 100px;
  &:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
  }
`,Aj=dn.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 1rem;
`,_j=dn.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 0.75rem 1rem;
  border: 1px solid #fecaca;
  border-radius: 8px;
  margin-bottom: 1rem;
`,Pj=dn.div`
  background: #ecfdf5;
  color: #065f46;
  padding: 0.75rem 1rem;
  border: 1px solid #a7f3d0;
  border-radius: 8px;
  margin-bottom: 1rem;
`,Tj=dn.hr`
  border: none;
  border-top: 1px solid #f1f5f9;
  margin: 1rem 0;
`;const Rj=function(){const[e,n]=(0,t.useState)("temple-list"),r=(0,t.useMemo)((()=>[{id:"temple-list",label:"Temple List"},{id:"add-temple",label:"Add a Temple"},{id:"time-slots",label:"Time Slots"},{id:"temple-groups",label:"Temple Groups"}]),[]),[i,a]=(0,t.useState)(!1),[o,s]=(0,t.useState)(""),[l,c]=(0,t.useState)(""),[d,u]=(0,t.useState)(""),[p,m]=(0,t.useState)(0),h=(0,t.useMemo)((()=>[{id:0,label:"Basic Information"},{id:1,label:"Address Details"},{id:2,label:"Groups & Remarks"},{id:3,label:"Temple Timings"},{id:4,label:"Temple Sections"},{id:5,label:"Temple Images"}]),[]),[f,g]=(0,t.useState)({name:"",email_id:"",mobile_number:"",alternate_contact_number:"",contact_name:"",address_line_1:"",address_line_2:"",address_line_3:"",state_code:"",pin_code:"",county_code:"IN",established_date:"",remarks:"",web_page:"",location:"",geo_location_data:"",temple_group:"",temple_sub_group:"",temple_group_id:null,temple_sub_group_id:null}),[x,b]=(0,t.useState)({mainImage:null,additionalImages:[]}),[v,y]=(0,t.useState)({morning_opening:"",morning_closing:"",evening_opening:"",evening_closing:""}),[w,j]=(0,t.useState)([{title:"",paragraph:""}]),[S,k]=(0,t.useState)([{id:"morning",name:"Morning Time",start:"6 AM",end:"11 AM",status:"Active"},{id:"evening",name:"Evening Time",start:"4 PM",end:"9 PM",status:"Active"}]),[E,C]=(0,t.useState)([]),[A,_]=(0,t.useState)([]),[P,T]=(0,t.useState)([]),[R,z]=(0,t.useState)({name:"",image:null}),[D,F]=(0,t.useState)({name:"",image:null}),[N,I]=(0,t.useState)(null),[M,L]=(0,t.useState)(null),[O,B]=(0,t.useState)(!1),$=()=>{s(""),c("")},V=e=>{$();const{name:t,value:n}=e.target;g((e=>({...e,[t]:n})))},U=(e,t,n)=>j((r=>r.map(((r,i)=>i===e?{...r,[t]:n}:r)))),H=async()=>{B(!0);try{var e;const t=await(0,Ec.Cv)();console.log("Temple Groups API Response:",t);const n=(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data)||(null===t||void 0===t?void 0:t.data)||[];console.log("Temple Groups Data:",n);const r=n.filter((e=>"T"===e.group_type)),i=n.filter((e=>"S"===e.group_type));console.log("Groups Data:",r),console.log("Sub Groups Data:",i),_(r),T(i)}catch(t){console.error("Error fetching temple groups:",t),s("Failed to fetch temple groups")}finally{B(!1)}},W=()=>{z({name:"",image:null}),F({name:"",image:null}),I(null),L(null)};return(0,t.useEffect)((()=>{"temple-groups"===e&&H()}),[e]),(0,t.useEffect)((()=>{"add-temple"===e&&H()}),[e]),(0,mc.jsxs)(vj,{children:[(0,mc.jsx)(Gw,{tabs:r,activeTab:e,onChange:n}),(0,mc.jsxs)(wj,{children:[o?(0,mc.jsx)(_j,{children:o}):null,l?(0,mc.jsx)(Pj,{children:l}):null,"add-temple"===e&&(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsx)(Lv,{steps:h,currentStep:p}),0===p&&(0,mc.jsxs)(mc.Fragment,{children:[d&&(0,mc.jsxs)("div",{style:{marginBottom:"1rem",padding:"1rem",backgroundColor:"#dbeafe",color:"#1e40af",borderRadius:"8px",fontSize:"0.875rem",border:"1px solid #93c5fd",display:"flex",alignItems:"center",gap:"0.5rem"},children:["\u270f\ufe0f ",(0,mc.jsx)("strong",{children:"Editing Temple:"})," ",f.name," (ID: ",d,")"]}),(0,mc.jsxs)(jj,{children:[(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Temple Name *"}),(0,mc.jsx)(Ej,{name:"name",value:f.name,onChange:V,required:!0,placeholder:"Sri Ram Mandir"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Contact Person"}),(0,mc.jsx)(Ej,{name:"contact_name",value:f.contact_name,onChange:V,placeholder:"Ramesh Kumar"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Email"}),(0,mc.jsx)(Ej,{type:"email",name:"email_id",value:f.email_id,onChange:V,placeholder:"contact@svtemple.org"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Mobile Number *"}),(0,mc.jsx)(Ej,{name:"mobile_number",value:f.mobile_number,onChange:V,placeholder:"9876543210"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Alternate Contact"}),(0,mc.jsx)(Ej,{name:"alternate_contact_number",value:f.alternate_contact_number,onChange:V,placeholder:"9123456780"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Website"}),(0,mc.jsx)(Ej,{name:"web_page",value:f.web_page,onChange:V,placeholder:"https://www.svtemple.org"})]})]})]}),1===p&&(0,mc.jsxs)(jj,{children:[(0,mc.jsxs)(Sj,{className:"full",children:[(0,mc.jsx)(kj,{children:"Address Line 1 *"}),(0,mc.jsx)(Ej,{name:"address_line_1",value:f.address_line_1,onChange:V,placeholder:"Main Road"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Address Line 2"}),(0,mc.jsx)(Ej,{name:"address_line_2",value:f.address_line_2,onChange:V,placeholder:"Near River Bank"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"City *"}),(0,mc.jsx)(Ej,{name:"address_line_3",value:f.address_line_3,onChange:V,placeholder:"Bangalore"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"State Code *"}),(0,mc.jsx)(Ej,{name:"state_code",value:f.state_code,onChange:V,placeholder:"KA"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"PIN Code *"}),(0,mc.jsx)(Ej,{name:"pin_code",value:f.pin_code,onChange:V,placeholder:"517501"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Location"}),(0,mc.jsx)(Ej,{name:"location",value:f.location,onChange:V,placeholder:"Bangalore, Karnataka"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Geo Location (Lat,Long)"}),(0,mc.jsx)(Ej,{name:"geo_location_data",value:f.geo_location_data,onChange:V,placeholder:"13.6288,79.4192"})]})]}),2===p&&(0,mc.jsxs)(jj,{children:[(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Temple Group"}),(0,mc.jsxs)("select",{name:"temple_group_id",value:f.temple_group_id||"",onChange:V,style:{padding:"0.75rem 1rem",border:"2px solid #fed7aa",borderRadius:"0.5rem",fontSize:"1rem",transition:"all 0.2s",backgroundColor:"#fff",cursor:"pointer"},onFocus:e=>{e.target.style.borderColor="#ea580c",e.target.style.boxShadow="0 0 0 3px rgba(234, 88, 12, 0.1)"},onBlur:e=>{e.target.style.borderColor="#fed7aa",e.target.style.boxShadow="none"},children:[(0,mc.jsx)("option",{value:"",children:"Select Temple Group"}),A.map((e=>(0,mc.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Temple Sub Group"}),(0,mc.jsxs)("select",{name:"temple_sub_group_id",value:f.temple_sub_group_id||"",onChange:V,style:{padding:"0.75rem 1rem",border:"2px solid #fed7aa",borderRadius:"0.5rem",fontSize:"1rem",transition:"all 0.2s",backgroundColor:"#fff",cursor:"pointer"},onFocus:e=>{e.target.style.borderColor="#ea580c",e.target.style.boxShadow="0 0 0 3px rgba(234, 88, 12, 0.1)"},onBlur:e=>{e.target.style.borderColor="#fed7aa",e.target.style.boxShadow="none"},children:[(0,mc.jsx)("option",{value:"",children:"Select Temple Sub Group"}),P.map((e=>(0,mc.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,mc.jsxs)(Sj,{className:"full",children:[(0,mc.jsx)(kj,{children:"Remarks"}),(0,mc.jsx)(Cj,{name:"remarks",value:f.remarks,onChange:V,placeholder:"Renovated recently"})]})]}),3===p&&(0,mc.jsxs)("div",{children:[(0,mc.jsx)(kj,{style:{marginBottom:"1rem",display:"block"},children:"Select Temple Timings"}),(0,mc.jsxs)("div",{style:{display:"grid",gap:"0.75rem"},children:[S.filter((e=>"Inactive"!==e.status)).map((e=>(0,mc.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",border:"1px solid #fed7aa",borderRadius:"8px",backgroundColor:E.includes(e.id)?"#fff7f7":"#fff"},children:[(0,mc.jsx)("input",{type:"checkbox",id:`slot-${e.id}`,checked:E.includes(e.id),onChange:t=>{t.target.checked?C((t=>[...t,e.id])):C((t=>t.filter((t=>t!==e.id))))},style:{width:"18px",height:"18px",accentColor:"#ea580c"}}),(0,mc.jsxs)("label",{htmlFor:`slot-${e.id}`,style:{flex:1,cursor:"pointer",fontWeight:E.includes(e.id)?"600":"400"},children:[(0,mc.jsx)("strong",{children:e.name})," - ",e.start," to ",e.end]})]},e.id))),0===S.filter((e=>"Inactive"!==e.status)).length&&(0,mc.jsx)("div",{style:{padding:"1rem",textAlign:"center",color:"#64748b",border:"1px dashed #fed7aa",borderRadius:"8px"},children:'No active time slots available. Please add time slots in the "Time Slots" tab first.'})]})]}),4===p&&(0,mc.jsxs)(mc.Fragment,{children:[(0,mc.jsx)(yj,{style:{fontSize:"1.25rem",marginTop:0},children:"Temple Details Sections"}),w.map(((e,t)=>(0,mc.jsx)(wj,{style:{padding:"1rem",marginBottom:"0.75rem"},children:(0,mc.jsxs)(jj,{children:[(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Title"}),(0,mc.jsx)(Ej,{value:e.title,onChange:e=>U(t,"title",e.target.value),placeholder:"History"})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Paragraph"}),(0,mc.jsx)(Cj,{value:e.paragraph,onChange:e=>U(t,"paragraph",e.target.value),placeholder:"Description..."})]})]})},t))),(0,mc.jsxs)(Aj,{children:[(0,mc.jsx)(wg,{color:"orange",onClick:()=>j((e=>[...e,{title:"",paragraph:""}])),children:"Add Section"}),(0,mc.jsx)(wg,{color:"red",onClick:()=>j((e=>e.length>0?e.slice(0,-1):e)),disabled:0===w.length,children:"Remove"}),(0,mc.jsx)(wg,{color:d?"green":"orange",onClick:async function(){a(!0),$();try{const t={selected_time_slots:S.filter((e=>E.includes(e.id))).map((e=>({id:e.id,name:e.name,start:e.start,end:e.end})))},n={temple_data:{call_mode:d?"UPDATE":"ADD",...d?{temple_id:d}:{},...f,temple_timings:t,temple_data_list:w.filter((e=>e.title||e.paragraph))}};console.log("Creating temple with payload:",n);const r=await(0,Ec.r5)(n);if(console.log("Temple creation response:",r),d)c("Temple updated successfully! You can now add images in the next step."),m(5);else{var e;console.log("Temple created successfully, fetching temple list to get ID...");const t=await(0,Ec.gettemplist)();console.log("Temple list response:",t);const n=((null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data)||(null===t||void 0===t?void 0:t.data)||[]).find((e=>e.name===f.name&&e.mobile_number===f.mobile_number&&e.address_line_1===f.address_line_1));if(!n||!n.temple_id)throw new Error("Temple created but could not find temple ID. Please check the temple list.");const r=n.temple_id;console.log("Found temple ID:",r),u(r),c("Temple created successfully! You can now add images in the next step."),m(5)}}catch(r){var t,n;console.error("Error in submitTempleSections:",r),s((null===r||void 0===r||null===(t=r.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||(null===r||void 0===r?void 0:r.message)||"Failed to save temple")}finally{a(!1)}},loading:i,disabled:i,children:d?"Update Temple & Continue":"Create Temple & Continue"})]})]}),5===p&&(0,mc.jsxs)("div",{children:[!d&&(0,mc.jsx)("div",{style:{marginBottom:"1rem",padding:"1rem",backgroundColor:"#fef3c7",color:"#92400e",borderRadius:"8px",fontSize:"0.875rem",border:"1px solid #fbbf24"},children:"\u26a0\ufe0f Please complete the previous steps to create the temple first. You need a temple ID to upload images."}),(0,mc.jsxs)(Sj,{className:"full",children:[(0,mc.jsx)(kj,{children:"Main Temple Image * (Required)"}),(0,mc.jsx)(Ej,{type:"file",accept:"image/*",onChange:e=>b((t=>({...t,mainImage:e.target.files[0]||null})))}),x.mainImage&&(0,mc.jsxs)("div",{style:{marginTop:"0.5rem",padding:"0.5rem",backgroundColor:"#f0f9ff",borderRadius:"4px",fontSize:"0.875rem"},children:["Selected: ",x.mainImage.name]})]}),(0,mc.jsx)(Tj,{}),(0,mc.jsxs)(Sj,{className:"full",children:[(0,mc.jsx)(kj,{children:"Additional Images (Optional - up to 9)"}),(0,mc.jsxs)("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"1rem"},children:[(0,mc.jsx)(Ej,{type:"file",accept:"image/*",onChange:e=>{e.target.files[0]&&b((t=>({...t,additionalImages:[...t.additionalImages,e.target.files[0]]})))}}),(0,mc.jsx)(wg,{color:"orange",onClick:()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.onchange=e=>{e.target.files[0]&&b((t=>({...t,additionalImages:[...t.additionalImages,e.target.files[0]]})))},e.click()},children:"Add Image"})]}),x.additionalImages.length>0&&(0,mc.jsx)("div",{style:{display:"grid",gap:"0.5rem"},children:x.additionalImages.map(((e,t)=>(0,mc.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem",backgroundColor:"#f8fafc",borderRadius:"4px",border:"1px solid #e2e8f0"},children:[(0,mc.jsxs)("span",{style:{fontSize:"0.875rem"},children:[t+1,". ",e.name]}),(0,mc.jsx)(wg,{color:"red",size:"sm",onClick:()=>{b((e=>({...e,additionalImages:e.additionalImages.filter(((e,n)=>n!==t))})))},children:"Remove"})]},t)))}),x.additionalImages.length>=9&&(0,mc.jsx)("div",{style:{marginTop:"0.5rem",padding:"0.5rem",backgroundColor:"#fef3c7",color:"#92400e",borderRadius:"4px",fontSize:"0.875rem"},children:"Maximum 9 additional images reached."})]})]}),(0,mc.jsx)(Tj,{}),(0,mc.jsxs)(Aj,{children:[(0,mc.jsx)(wg,{color:"gray",onClick:()=>{u(""),g({name:"",email_id:"",mobile_number:"",alternate_contact_number:"",contact_name:"",address_line_1:"",address_line_2:"",address_line_3:"",state_code:"",pin_code:"",county_code:"IN",established_date:"",remarks:"",web_page:"",location:"",geo_location_data:"",temple_group:"",temple_sub_group:"",temple_group_id:"",temple_sub_group_id:""}),C([]),j([{title:"",paragraph:""}]),b({mainImage:null,additionalImages:[]}),m(0)},children:"Reset"}),p>0&&(0,mc.jsx)(wg,{color:"gray",onClick:()=>m((e=>Math.max(0,e-1))),children:"Back"}),p<h.length-1&&(0,mc.jsx)(wg,{color:"orange",onClick:()=>m((e=>Math.min(h.length-1,e+1))),children:"Next"}),p===h.length-1&&(0,mc.jsx)(wg,{color:"orange",onClick:async function(){if(d)if(x.mainImage){a(!0),$();try{var e;const t=new FormData;t.append("temple_id",d),t.append("call_mode","TEMPLE_IMAGE"),x.mainImage&&(t.append("image_file",x.mainImage),t.append("image_file_1",x.mainImage)),x.additionalImages.slice(0,9).forEach(((e,n)=>{t.append(`image_file_${n+1}`,e)})),console.log("Uploading images for temple:",d),console.log("Image files:",{mainImage:null===(e=x.mainImage)||void 0===e?void 0:e.name,additionalImages:x.additionalImages.map((e=>e.name))}),console.log("FormData contents:");for(let[e,n]of t.entries())console.log(`${e}:`,n);const r=await(0,Ec.TM)(d,t);console.log("Image upload response:",r),c(`Temple ${d?"updated":"created"} successfully! Redirecting to temple list...`),setTimeout((()=>{n("temple-list"),m(0),u(""),g({name:"",email_id:"",mobile_number:"",alternate_contact_number:"",contact_name:"",address_line_1:"",address_line_2:"",address_line_3:"",state_code:"",pin_code:"",county_code:"IN",established_date:"",remarks:"",web_page:"",location:"",geo_location_data:"",temple_group:"",temple_sub_group:"",temple_group_id:null,temple_sub_group_id:null}),C([]),j([{title:"",paragraph:""}]),b({mainImage:null,additionalImages:[]})}),1500)}catch(f){var t,r,i,o,l,p,h;console.error("Error in submitTempleImages:",f),console.error("Error response:",f.response),console.error("Error data:",null===(t=f.response)||void 0===t?void 0:t.data),console.error("Error status:",null===(r=f.response)||void 0===r?void 0:r.status),console.error("Error message:",f.message);let e="Failed to upload images";"NETWORK_ERROR"===f.code||f.message.includes("Network Error")?e="Network error. Please check your internet connection and try again.":500===(null===(i=f.response)||void 0===i?void 0:i.status)?e="Server error (500). Please try again later.":401===(null===(o=f.response)||void 0===o?void 0:o.status)?e="Authentication error. Please login again.":413===(null===(l=f.response)||void 0===l?void 0:l.status)?e="Image file too large. Please use smaller images.":null!==(p=f.response)&&void 0!==p&&null!==(h=p.data)&&void 0!==h&&h.message?e=f.response.data.message:f.message&&(e=f.message),s(e)}finally{a(!1)}}else s("Main temple image is required.");else s("Temple ID not found. Please complete the previous steps first.")},loading:i,disabled:i,children:"Upload Images"})]})]}),"temple-list"===e&&(0,mc.jsx)(Mb,{onEditTemple:e=>{var t,r;if(n("add-temple"),u(e.temple_id),g({name:e.name||"",email_id:e.email_id||"",mobile_number:e.mobile_number||"",alternate_contact_number:e.alternate_contact_number||"",contact_name:e.contact_name||"",address_line_1:e.address_line_1||"",address_line_2:e.address_line_2||"",address_line_3:e.address_line_3||"",state_code:e.state_code||"",pin_code:e.pin_code||"",county_code:e.county_code||"IN",established_date:e.established_date||"",remarks:e.remarks||"",web_page:e.web_page||"",location:e.location||"",geo_location_data:e.geo_location_data||"",temple_group:e.temple_group||"",temple_sub_group:e.temple_sub_group||"",temple_group_id:e.temple_group_id||null,temple_sub_group_id:e.temple_sub_group_id||null}),null!==(t=e.additional_field_list)&&void 0!==t&&t.temple_timings){const t=e.additional_field_list.temple_timings;if((t.morning_opening||t.morning_closing||t.evening_opening||t.evening_closing)&&y({morning_opening:t.morning_opening||"",morning_closing:t.morning_closing||"",evening_opening:t.evening_opening||"",evening_closing:t.evening_closing||""}),t.selected_time_slots&&t.selected_time_slots.length>0){const e=t.selected_time_slots.map((e=>e.id));C(e)}}null!==(r=e.additional_field_list)&&void 0!==r&&r.temple_data_list&&e.additional_field_list.temple_data_list.length>0?j(e.additional_field_list.temple_data_list):j([{title:"",paragraph:""}]),m(0),$()}}),"time-slots"===e&&(0,mc.jsx)(bj,{timeSlots:S,onAddTimeSlot:e=>k((t=>[...t,{...e,id:Date.now(),status:e.status||"Active"}])),onEditTimeSlot:(e,t)=>k((n=>n.map((n=>n.id===e?{...n,...t}:n)))),onDeleteTimeSlot:e=>k((t=>t.filter((t=>"morning"!==t.id&&"evening"!==t.id&&t.id!==e)))),onToggleTimeSlotStatus:e=>k((t=>t.map((t=>t.id===e?{...t,status:"Active"===t.status?"Inactive":"Active"}:t))))}),"temple-groups"===e&&(0,mc.jsxs)("div",{children:[(0,mc.jsx)(yj,{style:{fontSize:"1.25rem",marginTop:0,marginBottom:"1.5rem"},children:"Temple Groups Management"}),(0,mc.jsxs)(wj,{style:{marginBottom:"2rem"},children:[(0,mc.jsx)("h3",{style:{margin:"0 0 1rem 0",color:"#1e293b"},children:N?`Edit Group: ${N.name}`:"Create New Group"}),(0,mc.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),R.name.trim()){a(!0),$();try{const e=new FormData;if(e.append("name",R.name.trim()),e.append("group_type","T"),e.append("call_mode",N?"UPDATE":"ADD"),N){const t=N.id||N.group_id||N.temple_group_id;if(!t)throw new Error("Group ID not found in the data");e.append("group_id",t)}R.image&&e.append("image",R.image),console.log("Group FormData:",{name:R.name.trim(),group_type:"T",call_mode:N?"UPDATE":"ADD",group_id:N?N.id||N.group_id||N.temple_group_id:void 0}),await(0,Ec.aI)(e),c(`Group ${N?"updated":"created"} successfully!`),z({name:"",image:null}),I(null),await H()}catch(r){var t,n;console.error("Error saving group:",r),s((null===r||void 0===r||null===(t=r.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||(null===r||void 0===r?void 0:r.message)||"Failed to save group")}finally{a(!1)}}else s("Group name is required")},children:[(0,mc.jsxs)(jj,{children:[(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Group Name *"}),(0,mc.jsx)(Ej,{name:"name",value:R.name,onChange:e=>z((t=>({...t,name:e.target.value}))),placeholder:"Enter group name",required:!0})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Group Image"}),(0,mc.jsx)(Ej,{type:"file",accept:"image/*",onChange:e=>z((t=>({...t,image:e.target.files[0]||null})))}),R.image&&(0,mc.jsxs)("div",{style:{marginTop:"0.5rem",padding:"0.5rem",backgroundColor:"#f0f9ff",borderRadius:"4px",fontSize:"0.875rem"},children:["Selected: ",R.image.name]})]})]}),(0,mc.jsxs)(Aj,{children:[(0,mc.jsx)(wg,{color:"gray",onClick:W,children:"Reset"}),(0,mc.jsx)(wg,{color:N?"green":"orange",type:"submit",loading:i,disabled:i,children:N?"Update Group":"Create Group"})]})]})]}),(0,mc.jsxs)(wj,{style:{marginBottom:"2rem"},children:[(0,mc.jsx)("h3",{style:{margin:"0 0 1rem 0",color:"#1e293b"},children:M?`Edit Sub Group: ${M.name}`:"Create New Sub Group"}),(0,mc.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),D.name.trim()){a(!0),$();try{const e=new FormData;if(e.append("name",D.name.trim()),e.append("group_type","S"),e.append("call_mode",M?"UPDATE":"ADD"),M){const t=M.id||M.group_id||M.temple_group_id;if(!t)throw new Error("Sub Group ID not found in the data");e.append("group_id",t)}D.image&&e.append("image",D.image),console.log("Sub Group FormData:",{name:D.name.trim(),group_type:"S",call_mode:M?"UPDATE":"ADD",group_id:M?M.id||M.group_id||M.temple_group_id:void 0}),await(0,Ec.aI)(e),c(`Sub group ${M?"updated":"created"} successfully!`),F({name:"",image:null}),L(null),await H()}catch(r){var t,n;console.error("Error saving sub group:",r),s((null===r||void 0===r||null===(t=r.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)||(null===r||void 0===r?void 0:r.message)||"Failed to save sub group")}finally{a(!1)}}else s("Sub group name is required")},children:[(0,mc.jsxs)(jj,{children:[(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Sub Group Name *"}),(0,mc.jsx)(Ej,{name:"name",value:D.name,onChange:e=>F((t=>({...t,name:e.target.value}))),placeholder:"Enter sub group name",required:!0})]}),(0,mc.jsxs)(Sj,{children:[(0,mc.jsx)(kj,{children:"Sub Group Image"}),(0,mc.jsx)(Ej,{type:"file",accept:"image/*",onChange:e=>F((t=>({...t,image:e.target.files[0]||null})))}),D.image&&(0,mc.jsxs)("div",{style:{marginTop:"0.5rem",padding:"0.5rem",backgroundColor:"#f0f9ff",borderRadius:"4px",fontSize:"0.875rem"},children:["Selected: ",D.image.name]})]})]}),(0,mc.jsxs)(Aj,{children:[(0,mc.jsx)(wg,{color:"gray",onClick:W,children:"Reset"}),(0,mc.jsx)(wg,{color:M?"green":"orange",type:"submit",loading:i,disabled:i,children:M?"Update Sub Group":"Create Sub Group"})]})]})]}),(0,mc.jsxs)(wj,{style:{marginBottom:"2rem"},children:[(0,mc.jsx)("h3",{style:{margin:"0 0 1rem 0",color:"#1e293b"},children:"Existing Groups"}),O?(0,mc.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"Loading groups..."}):0===A.length?(0,mc.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b",border:"1px dashed #fed7aa",borderRadius:"8px"},children:"No groups found. Create your first group above."}):(0,mc.jsx)("div",{style:{overflowX:"auto"},children:(0,mc.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid #e2e8f0"},children:[(0,mc.jsx)("thead",{children:(0,mc.jsxs)("tr",{style:{backgroundColor:"#f8fafc"},children:[(0,mc.jsx)("th",{style:{padding:"0.75rem",textAlign:"left",border:"1px solid #e2e8f0",fontWeight:"600"},children:"Name"}),(0,mc.jsx)("th",{style:{padding:"0.75rem",textAlign:"left",border:"1px solid #e2e8f0",fontWeight:"600"},children:"Image"}),(0,mc.jsx)("th",{style:{padding:"0.75rem",textAlign:"center",border:"1px solid #e2e8f0",fontWeight:"600"},children:"Actions"})]})}),(0,mc.jsx)("tbody",{children:A.map((e=>(0,mc.jsxs)("tr",{style:{borderBottom:"1px solid #e2e8f0"},children:[(0,mc.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #e2e8f0"},children:e.name}),(0,mc.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #e2e8f0"},children:e.image?(0,mc.jsx)("img",{src:e.image,alt:e.name,style:{width:"50px",height:"50px",objectFit:"cover",borderRadius:"4px"}}):(0,mc.jsx)("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"No image"})}),(0,mc.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #e2e8f0",textAlign:"center"},children:(0,mc.jsx)(wg,{color:"blue",size:"sm",onClick:()=>(e=>{console.log("Editing group:",e),I(e),z({name:e.name,image:null})})(e),children:"Edit"})})]},e.id)))})]})})]}),(0,mc.jsxs)(wj,{children:[(0,mc.jsx)("h3",{style:{margin:"0 0 1rem 0",color:"#1e293b"},children:"Existing Sub Groups"}),O?(0,mc.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"Loading sub groups..."}):0===P.length?(0,mc.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b",border:"1px dashed #fed7aa",borderRadius:"8px"},children:"No sub groups found. Create your first sub group above."}):(0,mc.jsx)("div",{style:{overflowX:"auto"},children:(0,mc.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",border:"1px solid #e2e8f0"},children:[(0,mc.jsx)("thead",{children:(0,mc.jsxs)("tr",{style:{backgroundColor:"#f8fafc"},children:[(0,mc.jsx)("th",{style:{padding:"0.75rem",textAlign:"left",border:"1px solid #e2e8f0",fontWeight:"600"},children:"Name"}),(0,mc.jsx)("th",{style:{padding:"0.75rem",textAlign:"left",border:"1px solid #e2e8f0",fontWeight:"600"},children:"Image"}),(0,mc.jsx)("th",{style:{padding:"0.75rem",textAlign:"center",border:"1px solid #e2e8f0",fontWeight:"600"},children:"Actions"})]})}),(0,mc.jsx)("tbody",{children:P.map((e=>(0,mc.jsxs)("tr",{style:{borderBottom:"1px solid #e2e8f0"},children:[(0,mc.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #e2e8f0"},children:e.name}),(0,mc.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #e2e8f0"},children:e.image?(0,mc.jsx)("img",{src:e.image,alt:e.name,style:{width:"50px",height:"50px",objectFit:"cover",borderRadius:"4px"}}):(0,mc.jsx)("span",{style:{color:"#64748b",fontSize:"0.875rem"},children:"No image"})}),(0,mc.jsx)("td",{style:{padding:"0.75rem",border:"1px solid #e2e8f0",textAlign:"center"},children:(0,mc.jsx)(wg,{color:"blue",size:"sm",onClick:()=>(e=>{console.log("Editing sub group:",e),L(e),F({name:e.name,image:null})})(e),children:"Edit"})})]},e.id)))})]})})]})]})]})]})},zj=()=>(0,mc.jsxs)("div",{style:{padding:"2rem"},children:[(0,mc.jsx)("h1",{children:"\ud83c\udfdb\ufe0f Hall Master"}),(0,mc.jsx)("p",{children:"Hall management functionality coming soon..."})]}),Dj=()=>(0,mc.jsxs)("div",{style:{padding:"2rem"},children:[(0,mc.jsx)("h1",{children:"\ud83d\udcc5 Puja Bookings"}),(0,mc.jsx)("p",{children:"Puja booking management coming soon..."})]}),Fj=()=>(0,mc.jsxs)("div",{style:{padding:"2rem"},children:[(0,mc.jsx)("h1",{children:"\ud83c\udfdb\ufe0f Hall Bookings"}),(0,mc.jsx)("p",{children:"Hall booking management coming soon..."})]}),Nj=()=>(0,mc.jsxs)("div",{style:{padding:"2rem"},children:[(0,mc.jsx)("h1",{children:"\ud83d\udcc5 Calendar"}),(0,mc.jsx)("p",{children:"Calendar functionality coming soon..."})]}),Ij=()=>(0,mc.jsxs)("div",{style:{padding:"2rem"},children:[(0,mc.jsx)("h1",{children:"\u270d\ufe0f Manual Booking"}),(0,mc.jsx)("p",{children:"Manual booking functionality coming soon..."})]}),Mj=()=>(0,mc.jsxs)("div",{style:{padding:"2rem"},children:[(0,mc.jsx)("h1",{children:"\ud83d\udcca Reports"}),(0,mc.jsx)("p",{children:"Reporting functionality coming soon..."})]}),Lj=()=>{const e=J();return(0,t.useEffect)((()=>{pg()||e("/login")}),[e]),(0,mc.jsxs)(ab,{children:[(0,mc.jsx)(xb,{}),(0,mc.jsxs)(ge,{children:[(0,mc.jsx)(he,{path:"/",element:(0,mc.jsx)(me,{to:"/templeadmin/dashboard",replace:!0})}),(0,mc.jsx)(he,{path:"/dashboard",element:(0,mc.jsx)(Yb,{})}),(0,mc.jsx)(he,{path:"/temple-master",element:(0,mc.jsx)(Rj,{})}),(0,mc.jsx)(he,{path:"/puja-master",element:(0,mc.jsx)(Qw,{})}),(0,mc.jsx)(he,{path:"/hall-master",element:(0,mc.jsx)(zj,{})}),(0,mc.jsx)(he,{path:"/puja-bookings",element:(0,mc.jsx)(Dj,{})}),(0,mc.jsx)(he,{path:"/hall-bookings",element:(0,mc.jsx)(Fj,{})}),(0,mc.jsx)(he,{path:"/calendar",element:(0,mc.jsx)(Nj,{})}),(0,mc.jsx)(he,{path:"/manual-booking",element:(0,mc.jsx)(Ij,{})}),(0,mc.jsx)(he,{path:"/reports",element:(0,mc.jsx)(Mj,{})}),(0,mc.jsx)(he,{path:"*",element:(0,mc.jsx)(me,{to:"/templeadmin/dashboard",replace:!0})})]})]})},Oj=dn.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 50%, #fbbf24 100%);
  padding: 2rem;
`,Bj=dn(ac.div)`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  border: 2px solid #fed7aa;
`,$j=dn.div`
  text-align: center;
  margin-bottom: 2rem;

  .om-symbol {
    font-size: 3rem;
    color: #ea580c;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #9a3412;
  }
`,Vj=dn.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Uj=dn.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Hj=dn.label`
  color: #b45309;
  font-weight: 600;
  font-size: 0.9rem;
`,Wj=dn.input`
  padding: 0.75rem 1rem;
  border: 2px solid #fed7aa;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #ea580c;
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1);
  }
`,Gj=dn(ac.button)`
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  box-shadow: 0 10px 20px rgba(234, 88, 12, 0.3);
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 15px 30px rgba(234, 88, 12, 0.4);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Yj=dn.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #fecaca;
`,qj=()=>{const[e,n]=(0,t.useState)({username:"",password:""}),[r,i]=(0,t.useState)(!1),[a,o]=(0,t.useState)(""),s=J(),l=t=>{n({...e,[t.target.name]:t.target.value}),o("")};return(0,mc.jsx)(Oj,{children:(0,mc.jsxs)(Bj,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,mc.jsxs)($j,{children:[(0,mc.jsx)("div",{className:"om-symbol",children:"\ud83d\udd49\ufe0f"}),(0,mc.jsx)("div",{className:"title",children:"Temple Admin"})]}),(0,mc.jsxs)(Vj,{onSubmit:async t=>{t.preventDefault(),i(!0),o("");try{const t=await(async e=>{try{return(await ug.A.post("https://temple.atomwalk.com/auth/login/",e,{headers:{"Content-Type":"application/json"}})).data}catch(a){var t;throw(null===(t=a.response)||void 0===t?void 0:t.data)||a.message}})(e);t.key?(localStorage.setItem("userToken",t.key),s("/admin")):o("Invalid response from server")}catch(n){o(n.message||"Login failed. Please check your credentials.")}finally{i(!1)}},children:[a&&(0,mc.jsx)(Yj,{children:a}),(0,mc.jsxs)(Uj,{children:[(0,mc.jsx)(Hj,{htmlFor:"username",children:"Username"}),(0,mc.jsx)(Wj,{type:"text",id:"username",name:"username",value:e.username,onChange:l,required:!0,placeholder:"Enter your username"})]}),(0,mc.jsxs)(Uj,{children:[(0,mc.jsx)(Hj,{htmlFor:"password",children:"Password"}),(0,mc.jsx)(Wj,{type:"password",id:"password",name:"password",value:e.password,onChange:l,required:!0,placeholder:"Enter your password"})]}),(0,mc.jsx)(Gj,{type:"submit",disabled:r,whileHover:{scale:1.02},whileTap:{scale:.98},children:r?"\ud83d\ude4f Signing In...":"\ud83d\ude4f Sign In"})]})]})})};function Kj(){const e=X(),t=e.pathname.startsWith("/admin")||e.pathname.startsWith("/templeadmin");return(0,mc.jsxs)(mc.Fragment,{children:[!t&&(0,mc.jsx)(Sc,{}),(0,mc.jsxs)(ge,{children:[(0,mc.jsx)(he,{path:"/",element:(0,mc.jsx)(Af,{})}),(0,mc.jsx)(he,{path:"/temples",element:(0,mc.jsx)(rd,{})}),(0,mc.jsx)(he,{path:"/templeDetails/:templeId",element:(0,mc.jsx)(ig,{})}),(0,mc.jsx)(he,{path:"/book-puja",element:(0,mc.jsx)(bd,{})}),(0,mc.jsx)(he,{path:"/book-seva",element:(0,mc.jsx)(ep,{})}),(0,mc.jsx)(he,{path:"/live-darshan",element:(0,mc.jsx)(Ep,{})}),(0,mc.jsx)(he,{path:"/login",element:(0,mc.jsx)(qj,{})}),(0,mc.jsx)(he,{path:"/admin/*",element:(0,mc.jsx)(Qg,{})}),(0,mc.jsx)(he,{path:"/templeadmin/*",element:(0,mc.jsx)(Lj,{})})]}),!t&&(0,mc.jsx)(qp,{})]})}const Xj=function(){return(0,mc.jsxs)(rn,{theme:pn,children:[(0,mc.jsx)(un,{}),(0,mc.jsx)(ke,{children:(0,mc.jsx)(Kj,{})})]})};i.createRoot(document.getElementById("root")).render((0,mc.jsx)(t.StrictMode,{children:(0,mc.jsx)(Xj,{})}))})()})();
//# sourceMappingURL=main.b2eb1a1f.js.map