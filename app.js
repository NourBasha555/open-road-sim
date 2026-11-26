(()=>{var jM=Object.create;var Ch=Object.defineProperty;var JM=Object.getOwnPropertyDescriptor;var QM=Object.getOwnPropertyNames;var e1=Object.getPrototypeOf,t1=Object.prototype.hasOwnProperty;var n1=(n,e,t)=>e in n?Ch(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ns=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var i1=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of QM(e))!t1.call(n,r)&&r!==t&&Ch(n,r,{get:()=>e[r],enumerable:!(i=JM(e,r))||i.enumerable});return n};var Rh=(n,e,t)=>(t=n!=null?jM(e1(n)):{},i1(e||!n||!n.__esModule?Ch(t,"default",{value:n,enumerable:!0}):t,n));var V=(n,e,t)=>n1(n,typeof e!="symbol"?e+"":e,t);var h0=ns(Ge=>{"use strict";var ia=Symbol.for("react.element"),r1=Symbol.for("react.portal"),s1=Symbol.for("react.fragment"),o1=Symbol.for("react.strict_mode"),a1=Symbol.for("react.profiler"),l1=Symbol.for("react.provider"),c1=Symbol.for("react.context"),u1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),f1=Symbol.for("react.memo"),d1=Symbol.for("react.lazy"),e0=Symbol.iterator;function p1(n){return n===null||typeof n!="object"?null:(n=e0&&n[e0]||n["@@iterator"],typeof n=="function"?n:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r0=Object.assign,s0={};function Ls(n,e,t){this.props=n,this.context=e,this.refs=s0,this.updater=t||i0}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ls.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function o0(){}o0.prototype=Ls.prototype;function Ih(n,e,t){this.props=n,this.context=e,this.refs=s0,this.updater=t||i0}var Lh=Ih.prototype=new o0;Lh.constructor=Ih;r0(Lh,Ls.prototype);Lh.isPureReactComponent=!0;var t0=Array.isArray,a0=Object.prototype.hasOwnProperty,Nh={current:null},l0={key:!0,ref:!0,__self:!0,__source:!0};function c0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a0.call(e,i)&&!l0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ia,type:n,key:s,ref:o,props:r,_owner:Nh.current}}function m1(n,e){return{$$typeof:ia,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Dh(n){return typeof n=="object"&&n!==null&&n.$$typeof===ia}function g1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var n0=/\/+/g;function Ph(n,e){return typeof n=="object"&&n!==null&&n.key!=null?g1(""+n.key):e.toString(36)}function Fl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ia:case r1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ph(o,0):i,t0(r)?(t="",n!=null&&(t=n.replace(n0,"$&/")+"/"),Fl(r,e,t,"",function(c){return c})):r!=null&&(Dh(r)&&(r=m1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(n0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",t0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ph(s,a);o+=Fl(s,e,t,l,r)}else if(l=p1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ph(s,a++),o+=Fl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ul(n,e,t){if(n==null)return n;var i=[],r=0;return Fl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function v1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Ol={transition:null},x1={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Nh};function u0(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Ul,forEach:function(n,e,t){Ul(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ul(n,function(){e++}),e},toArray:function(n){return Ul(n,function(e){return e})||[]},only:function(n){if(!Dh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=Ls;Ge.Fragment=s1;Ge.Profiler=a1;Ge.PureComponent=Ih;Ge.StrictMode=o1;Ge.Suspense=h1;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;Ge.act=u0;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=r0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)a0.call(e,l)&&!l0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ia,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:c1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:l1,_context:n},n.Consumer=n};Ge.createElement=c0;Ge.createFactory=function(n){var e=c0.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:u1,render:n}};Ge.isValidElement=Dh;Ge.lazy=function(n){return{$$typeof:d1,_payload:{_status:-1,_result:n},_init:v1}};Ge.memo=function(n,e){return{$$typeof:f1,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=Ol.transition;Ol.transition={};try{n()}finally{Ol.transition=e}};Ge.unstable_act=u0;Ge.useCallback=function(n,e){return fn.current.useCallback(n,e)};Ge.useContext=function(n){return fn.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return fn.current.useEffect(n,e)};Ge.useId=function(){return fn.current.useId()};Ge.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return fn.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};Ge.useRef=function(n){return fn.current.useRef(n)};Ge.useState=function(n){return fn.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return fn.current.useTransition()};Ge.version="18.3.1"});var kl=ns((uR,f0)=>{"use strict";f0.exports=h0()});var S0=ns(ht=>{"use strict";function kh(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<Bl(r,e))n[i]=e,n[t]=r,t=i;else break e}}function oi(n){return n.length===0?null:n[0]}function Hl(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=n[o],l=o+1,c=n[l];if(0>Bl(a,t))l<r&&0>Bl(c,a)?(n[i]=c,n[l]=t,i=l):(n[i]=a,n[o]=t,i=o);else if(l<r&&0>Bl(c,t))n[i]=c,n[l]=t,i=l;else break e}}return e}function Bl(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(d0=performance,ht.unstable_now=function(){return d0.now()}):(Uh=Date,p0=Uh.now(),ht.unstable_now=function(){return Uh.now()-p0});var d0,Uh,p0,Ei=[],mr=[],y1=1,Vn=null,Jt=3,Vl=!1,is=!1,sa=!1,v0=typeof setTimeout=="function"?setTimeout:null,x0=typeof clearTimeout=="function"?clearTimeout:null,m0=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Bh(n){for(var e=oi(mr);e!==null;){if(e.callback===null)Hl(mr);else if(e.startTime<=n)Hl(mr),e.sortIndex=e.expirationTime,kh(Ei,e);else break;e=oi(mr)}}function zh(n){if(sa=!1,Bh(n),!is)if(oi(Ei)!==null)is=!0,Vh(Hh);else{var e=oi(mr);e!==null&&Gh(zh,e.startTime-n)}}function Hh(n,e){is=!1,sa&&(sa=!1,x0(oa),oa=-1),Vl=!0;var t=Jt;try{for(Bh(e),Vn=oi(Ei);Vn!==null&&(!(Vn.expirationTime>e)||n&&!M0());){var i=Vn.callback;if(typeof i=="function"){Vn.callback=null,Jt=Vn.priorityLevel;var r=i(Vn.expirationTime<=e);e=ht.unstable_now(),typeof r=="function"?Vn.callback=r:Vn===oi(Ei)&&Hl(Ei),Bh(e)}else Hl(Ei);Vn=oi(Ei)}if(Vn!==null)var s=!0;else{var o=oi(mr);o!==null&&Gh(zh,o.startTime-e),s=!1}return s}finally{Vn=null,Jt=t,Vl=!1}}var Gl=!1,zl=null,oa=-1,y0=5,_0=-1;function M0(){return!(ht.unstable_now()-_0<y0)}function Fh(){if(zl!==null){var n=ht.unstable_now();_0=n;var e=!0;try{e=zl(!0,n)}finally{e?ra():(Gl=!1,zl=null)}}else Gl=!1}var ra;typeof m0=="function"?ra=function(){m0(Fh)}:typeof MessageChannel!="undefined"?(Oh=new MessageChannel,g0=Oh.port2,Oh.port1.onmessage=Fh,ra=function(){g0.postMessage(null)}):ra=function(){v0(Fh,0)};var Oh,g0;function Vh(n){zl=n,Gl||(Gl=!0,ra())}function Gh(n,e){oa=v0(function(){n(ht.unstable_now())},e)}ht.unstable_IdlePriority=5;ht.unstable_ImmediatePriority=1;ht.unstable_LowPriority=4;ht.unstable_NormalPriority=3;ht.unstable_Profiling=null;ht.unstable_UserBlockingPriority=2;ht.unstable_cancelCallback=function(n){n.callback=null};ht.unstable_continueExecution=function(){is||Vl||(is=!0,Vh(Hh))};ht.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y0=0<n?Math.floor(1e3/n):5};ht.unstable_getCurrentPriorityLevel=function(){return Jt};ht.unstable_getFirstCallbackNode=function(){return oi(Ei)};ht.unstable_next=function(n){switch(Jt){case 1:case 2:case 3:var e=3;break;default:e=Jt}var t=Jt;Jt=e;try{return n()}finally{Jt=t}};ht.unstable_pauseExecution=function(){};ht.unstable_requestPaint=function(){};ht.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=Jt;Jt=n;try{return e()}finally{Jt=t}};ht.unstable_scheduleCallback=function(n,e,t){var i=ht.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:y1++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,kh(mr,n),oi(Ei)===null&&n===oi(mr)&&(sa?(x0(oa),oa=-1):sa=!0,Gh(zh,t-i))):(n.sortIndex=r,kh(Ei,n),is||Vl||(is=!0,Vh(Hh))),n};ht.unstable_shouldYield=M0;ht.unstable_wrapCallback=function(n){var e=Jt;return function(){var t=Jt;Jt=e;try{return n.apply(this,arguments)}finally{Jt=t}}}});var E0=ns((fR,w0)=>{"use strict";w0.exports=S0()});var Cy=ns(Dn=>{"use strict";var _1=kl(),Ln=E0();function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iv=new Set,Ca={};function gs(n,e){Qs(n,e),Qs(n+"Capture",e)}function Qs(n,e){for(Ca[n]=e,n=0;n<e.length;n++)Iv.add(e[n])}var Hi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),df=Object.prototype.hasOwnProperty,M1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T0={},b0={};function S1(n){return df.call(b0,n)?!0:df.call(T0,n)?!1:M1.test(n)?b0[n]=!0:(T0[n]=!0,!1)}function w1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E1(n,e,t,i){if(e===null||typeof e=="undefined"||w1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$t[n]=new mn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];$t[e]=new mn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){$t[n]=new mn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$t[n]=new mn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$t[n]=new mn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){$t[n]=new mn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){$t[n]=new mn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){$t[n]=new mn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){$t[n]=new mn(n,5,!1,n.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function od(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(sd,od);$t[e]=new mn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(sd,od);$t[e]=new mn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(sd,od);$t[e]=new mn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){$t[n]=new mn(n,1,!1,n.toLowerCase(),null,!1,!1)});$t.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){$t[n]=new mn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ad(n,e,t,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E1(e,t,r,i)&&(t=null),i||r===null?S1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Xi=_1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Nv=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Dv=Symbol.for("react.offscreen"),A0=Symbol.iterator;function aa(n){return n===null||typeof n!="object"?null:(n=A0&&n[A0]||n["@@iterator"],typeof n=="function"?n:null)}var bt=Object.assign,Wh;function ma(n){if(Wh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Wh=e&&e[1]||""}return`
`+Wh+n}var Xh=!1;function Yh(n,e){if(!n||Xh)return"";Xh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ma(n):""}function T1(n){switch(n.tag){case 5:return ma(n.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return n=Yh(n.type,!1),n;case 11:return n=Yh(n.type.render,!1),n;case 1:return n=Yh(n.type,!0),n;default:return""}}function vf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Fs:return"Fragment";case Us:return"Portal";case pf:return"Profiler";case ld:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Nv:return(n.displayName||"Context")+".Consumer";case Lv:return(n._context.displayName||"Context")+".Provider";case cd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ud:return e=n.displayName||null,e!==null?e:vf(n.type)||"Memo";case vr:e=n._payload,n=n._init;try{return vf(n(e))}catch{}}return null}function b1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Uv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A1(n){var e=Uv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Xl(n){n._valueTracker||(n._valueTracker=A1(n))}function Fv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Uv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function yc(n){if(n=n||(typeof document!="undefined"?document:void 0),typeof n=="undefined")return null;try{return n.activeElement||n.body}catch{return n.body}}function xf(n,e){var t=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function C0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ov(n,e){e=e.checked,e!=null&&ad(n,"checked",e,!1)}function yf(n,e){Ov(n,e);var t=Ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?_f(n,e.type,t):e.hasOwnProperty("defaultValue")&&_f(n,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function R0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function _f(n,e,t){(e!=="number"||yc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ga=Array.isArray;function qs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Mf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function P0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(ga(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ir(t)}}function kv(n,e){var t=Ir(e.value),i=Ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function I0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Bv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Bv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Yl,zv=(function(n){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Yl=Yl||document.createElement("div"),Yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ra(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C1=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(n){C1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ya[e]=ya[n]})});function Hv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ya.hasOwnProperty(n)&&ya[n]?(""+e).trim():e+"px"}function Vv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Hv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var R1=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wf(n,e){if(e){if(R1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Ef(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function hd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var bf=null,Ks=null,Zs=null;function L0(n){if(n=qa(n)){if(typeof bf!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=qc(e),bf(n.stateNode,n.type,e))}}function Gv(n){Ks?Zs?Zs.push(n):Zs=[n]:Ks=n}function Wv(){if(Ks){var n=Ks,e=Zs;if(Zs=Ks=null,L0(n),e)for(n=0;n<e.length;n++)L0(e[n])}}function Xv(n,e){return n(e)}function Yv(){}var qh=!1;function qv(n,e,t){if(qh)return n(e,t);qh=!0;try{return Xv(n,e,t)}finally{qh=!1,(Ks!==null||Zs!==null)&&(Yv(),Wv())}}function Pa(n,e){var t=n.stateNode;if(t===null)return null;var i=qc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Af=!1;if(Hi)try{Ns={},Object.defineProperty(Ns,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Af=!1}var Ns;function P1(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var _a=!1,_c=null,Mc=!1,Cf=null,I1={onError:function(n){_a=!0,_c=n}};function L1(n,e,t,i,r,s,o,a,l){_a=!1,_c=null,P1.apply(I1,arguments)}function N1(n,e,t,i,r,s,o,a,l){if(L1.apply(this,arguments),_a){if(_a){var c=_c;_a=!1,_c=null}else throw Error(ee(198));Mc||(Mc=!0,Cf=c)}}function vs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Kv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function N0(n){if(vs(n)!==n)throw Error(ee(188))}function D1(n){var e=n.alternate;if(!e){if(e=vs(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return N0(r),n;if(s===i)return N0(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function Zv(n){return n=D1(n),n!==null?$v(n):null}function $v(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$v(n);if(e!==null)return e;n=n.sibling}return null}var jv=Ln.unstable_scheduleCallback,D0=Ln.unstable_cancelCallback,U1=Ln.unstable_shouldYield,F1=Ln.unstable_requestPaint,It=Ln.unstable_now,O1=Ln.unstable_getCurrentPriorityLevel,fd=Ln.unstable_ImmediatePriority,Jv=Ln.unstable_UserBlockingPriority,Sc=Ln.unstable_NormalPriority,k1=Ln.unstable_LowPriority,Qv=Ln.unstable_IdlePriority,Gc=null,Ci=null;function B1(n){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Gc,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:V1,z1=Math.log,H1=Math.LN2;function V1(n){return n>>>=0,n===0?32:31-(z1(n)/H1|0)|0}var ql=64,Kl=4194304;function va(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=va(a):(s&=o,s!==0&&(i=va(s)))}else o=t&~r,o!==0?i=va(o):s!==0&&(i=va(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function G1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=G1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Rf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ex(){var n=ql;return ql<<=1,(ql&4194240)===0&&(ql=64),n}function Kh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Xa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function X1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function dd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var st=0;function tx(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nx,pd,ix,rx,sx,Pf=!1,Zl=[],wr=null,Er=null,Tr=null,Ia=new Map,La=new Map,yr=[],Y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U0(n,e){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function la(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qa(e),e!==null&&pd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function q1(n,e,t,i,r){switch(e){case"focusin":return wr=la(wr,n,e,t,i,r),!0;case"dragenter":return Er=la(Er,n,e,t,i,r),!0;case"mouseover":return Tr=la(Tr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,la(Ia.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,La.set(s,la(La.get(s)||null,n,e,t,i,r)),!0}return!1}function ox(n){var e=os(n.target);if(e!==null){var t=vs(e);if(t!==null){if(e=t.tag,e===13){if(e=Kv(t),e!==null){n.blockedOn=e,sx(n.priority,function(){ix(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=If(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Tf=i,t.target.dispatchEvent(i),Tf=null}else return e=qa(t),e!==null&&pd(e),n.blockedOn=t,!1;e.shift()}return!0}function F0(n,e,t){cc(n)&&t.delete(e)}function K1(){Pf=!1,wr!==null&&cc(wr)&&(wr=null),Er!==null&&cc(Er)&&(Er=null),Tr!==null&&cc(Tr)&&(Tr=null),Ia.forEach(F0),La.forEach(F0)}function ca(n,e){n.blockedOn===e&&(n.blockedOn=null,Pf||(Pf=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,K1)))}function Na(n){function e(r){return ca(r,n)}if(0<Zl.length){ca(Zl[0],n);for(var t=1;t<Zl.length;t++){var i=Zl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wr!==null&&ca(wr,n),Er!==null&&ca(Er,n),Tr!==null&&ca(Tr,n),Ia.forEach(e),La.forEach(e),t=0;t<yr.length;t++)i=yr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<yr.length&&(t=yr[0],t.blockedOn===null);)ox(t),t.blockedOn===null&&yr.shift()}var $s=Xi.ReactCurrentBatchConfig,Ec=!0;function Z1(n,e,t,i){var r=st,s=$s.transition;$s.transition=null;try{st=1,md(n,e,t,i)}finally{st=r,$s.transition=s}}function $1(n,e,t,i){var r=st,s=$s.transition;$s.transition=null;try{st=4,md(n,e,t,i)}finally{st=r,$s.transition=s}}function md(n,e,t,i){if(Ec){var r=If(n,e,t,i);if(r===null)tf(n,e,i,Tc,t),U0(n,i);else if(q1(r,n,e,t,i))i.stopPropagation();else if(U0(n,i),e&4&&-1<Y1.indexOf(n)){for(;r!==null;){var s=qa(r);if(s!==null&&nx(s),s=If(n,e,t,i),s===null&&tf(n,e,i,Tc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else tf(n,e,i,null,t)}}var Tc=null;function If(n,e,t,i){if(Tc=null,n=hd(i),n=os(n),n!==null)if(e=vs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Kv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Tc=n,null}function ax(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O1()){case fd:return 1;case Jv:return 4;case Sc:case k1:return 16;case Qv:return 536870912;default:return 16}default:return 16}}var Mr=null,gd=null,uc=null;function lx(){if(uc)return uc;var n,e=gd,t=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return uc=r.slice(n,1<i?1-i:void 0)}function hc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $l(){return!0}function O0(){return!1}function Nn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:O0,this.isPropagationStopped=O0,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=Nn(oo),Ya=bt({},oo,{view:0,detail:0}),j1=Nn(Ya),Zh,$h,ua,Wc=bt({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ua&&(ua&&n.type==="mousemove"?(Zh=n.screenX-ua.screenX,$h=n.screenY-ua.screenY):$h=Zh=0,ua=n),Zh)},movementY:function(n){return"movementY"in n?n.movementY:$h}}),k0=Nn(Wc),J1=bt({},Wc,{dataTransfer:0}),Q1=Nn(J1),eS=bt({},Ya,{relatedTarget:0}),jh=Nn(eS),tS=bt({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=Nn(tS),iS=bt({},oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rS=Nn(iS),sS=bt({},oo,{data:0}),B0=Nn(sS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=lS[n])?!!e[n]:!1}function xd(){return cS}var uS=bt({},Ya,{key:function(n){if(n.key){var e=oS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=hc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?aS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(n){return n.type==="keypress"?hc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?hc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hS=Nn(uS),fS=bt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z0=Nn(fS),dS=bt({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),pS=Nn(dS),mS=bt({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),gS=Nn(mS),vS=bt({},Wc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Nn(vS),yS=[9,13,27,32],yd=Hi&&"CompositionEvent"in window,Ma=null;Hi&&"documentMode"in document&&(Ma=document.documentMode);var _S=Hi&&"TextEvent"in window&&!Ma,cx=Hi&&(!yd||Ma&&8<Ma&&11>=Ma),H0=" ",V0=!1;function ux(n,e){switch(n){case"keyup":return yS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Os=!1;function MS(n,e){switch(n){case"compositionend":return hx(e);case"keypress":return e.which!==32?null:(V0=!0,H0);case"textInput":return n=e.data,n===H0&&V0?null:n;default:return null}}function SS(n,e){if(Os)return n==="compositionend"||!yd&&ux(n,e)?(n=lx(),uc=gd=Mr=null,Os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cx&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!wS[n.type]:e==="textarea"}function fx(n,e,t,i){Gv(i),e=bc(e,"onChange"),0<e.length&&(t=new vd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Sa=null,Da=null;function ES(n){wx(n,0)}function Xc(n){var e=zs(n);if(Fv(e))return n}function TS(n,e){if(n==="change")return e}var dx=!1;Hi&&(Hi?(Jl="oninput"in document,Jl||(Jh=document.createElement("div"),Jh.setAttribute("oninput","return;"),Jl=typeof Jh.oninput=="function"),jl=Jl):jl=!1,dx=jl&&(!document.documentMode||9<document.documentMode));var jl,Jl,Jh;function W0(){Sa&&(Sa.detachEvent("onpropertychange",px),Da=Sa=null)}function px(n){if(n.propertyName==="value"&&Xc(Da)){var e=[];fx(e,Da,n,hd(n)),qv(ES,e)}}function bS(n,e,t){n==="focusin"?(W0(),Sa=e,Da=t,Sa.attachEvent("onpropertychange",px)):n==="focusout"&&W0()}function AS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xc(Da)}function CS(n,e){if(n==="click")return Xc(e)}function RS(n,e){if(n==="input"||n==="change")return Xc(e)}function PS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var di=typeof Object.is=="function"?Object.is:PS;function Ua(n,e){if(di(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!df.call(e,r)||!di(n[r],e[r]))return!1}return!0}function X0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Y0(n,e){var t=X0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=X0(t)}}function mx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?mx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gx(){for(var n=window,e=yc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=yc(n.document)}return e}function _d(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function IS(n){var e=gx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&mx(t.ownerDocument.documentElement,t)){if(i!==null&&_d(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Y0(t,s);var o=Y0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var LS=Hi&&"documentMode"in document&&11>=document.documentMode,ks=null,Lf=null,wa=null,Nf=!1;function q0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Nf||ks==null||ks!==yc(i)||(i=ks,"selectionStart"in i&&_d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&Ua(wa,i)||(wa=i,i=bc(Lf,"onSelect"),0<i.length&&(e=new vd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ks)))}function Ql(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Bs={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},Qh={},vx={};Hi&&(vx=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function Yc(n){if(Qh[n])return Qh[n];if(!Bs[n])return n;var e=Bs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in vx)return Qh[n]=e[t];return n}var xx=Yc("animationend"),yx=Yc("animationiteration"),_x=Yc("animationstart"),Mx=Yc("transitionend"),Sx=new Map,K0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,e){Sx.set(n,e),gs(e,[n])}for(ec=0;ec<K0.length;ec++)tc=K0[ec],Z0=tc.toLowerCase(),$0=tc[0].toUpperCase()+tc.slice(1),Nr(Z0,"on"+$0);var tc,Z0,$0,ec;Nr(xx,"onAnimationEnd");Nr(yx,"onAnimationIteration");Nr(_x,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(Mx,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function j0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,N1(i,e,void 0,n),n.currentTarget=null}function wx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;j0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;j0(r,a,c),s=l}}}if(Mc)throw n=Cf,Mc=!1,Cf=null,n}function gt(n,e){var t=e[kf];t===void 0&&(t=e[kf]=new Set);var i=n+"__bubble";t.has(i)||(Ex(e,n,2,!1),t.add(i))}function ef(n,e,t){var i=0;e&&(i|=4),Ex(t,n,i,e)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Fa(n){if(!n[nc]){n[nc]=!0,Iv.forEach(function(t){t!=="selectionchange"&&(NS.has(t)||ef(t,!1,n),ef(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[nc]||(e[nc]=!0,ef("selectionchange",!1,e))}}function Ex(n,e,t,i){switch(ax(e)){case 1:var r=Z1;break;case 4:r=$1;break;default:r=md}t=r.bind(null,e,t,n),r=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function tf(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=os(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qv(function(){var c=s,u=hd(t),h=[];e:{var f=Sx.get(n);if(f!==void 0){var p=vd,m=n;switch(n){case"keypress":if(hc(t)===0)break e;case"keydown":case"keyup":p=hS;break;case"focusin":m="focus",p=jh;break;case"focusout":m="blur",p=jh;break;case"beforeblur":case"afterblur":p=jh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=k0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pS;break;case xx:case yx:case _x:p=nS;break;case Mx:p=gS;break;case"scroll":p=j1;break;case"wheel":p=xS;break;case"copy":case"cut":case"paste":p=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=z0}var x=(e&4)!==0,v=!x&&n==="scroll",d=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,y;g!==null;){y=g;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,d!==null&&(_=Pa(g,d),_!=null&&x.push(Oa(g,_,y)))),v)break;g=g.return}0<x.length&&(f=new p(f,m,null,t,u),h.push({event:f,listeners:x}))}}if((e&7)===0){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Tf&&(m=t.relatedTarget||t.fromElement)&&(os(m)||m[Vi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=t.relatedTarget||t.toElement,p=c,m=m?os(m):null,m!==null&&(v=vs(m),m!==v||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=k0,_="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(x=z0,_="onPointerLeave",d="onPointerEnter",g="pointer"),v=p==null?f:zs(p),y=m==null?f:zs(m),f=new x(_,g+"leave",p,t,u),f.target=v,f.relatedTarget=y,_=null,os(u)===c&&(x=new x(d,g+"enter",m,t,u),x.target=y,x.relatedTarget=v,_=x),v=_,p&&m)t:{for(x=p,d=m,g=0,y=x;y;y=Ds(y))g++;for(y=0,_=d;_;_=Ds(_))y++;for(;0<g-y;)x=Ds(x),g--;for(;0<y-g;)d=Ds(d),y--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=Ds(x),d=Ds(d)}x=null}else x=null;p!==null&&J0(h,f,p,x,!1),m!==null&&v!==null&&J0(h,v,m,x,!0)}}e:{if(f=c?zs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=TS;else if(G0(f))if(dx)T=RS;else{T=AS;var w=bS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=CS);if(T&&(T=T(n,c))){fx(h,T,t,u);break e}w&&w(n,f,c),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&_f(f,"number",f.value)}switch(w=c?zs(c):window,n){case"focusin":(G0(w)||w.contentEditable==="true")&&(ks=w,Lf=c,wa=null);break;case"focusout":wa=Lf=ks=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,q0(h,t,u);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":q0(h,t,u)}var A;if(yd)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Os?ux(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(cx&&t.locale!=="ko"&&(Os||C!=="onCompositionStart"?C==="onCompositionEnd"&&Os&&(A=lx()):(Mr=u,gd="value"in Mr?Mr.value:Mr.textContent,Os=!0)),w=bc(c,C),0<w.length&&(C=new B0(C,n,null,t,u),h.push({event:C,listeners:w}),A?C.data=A:(A=hx(t),A!==null&&(C.data=A)))),(A=_S?MS(n,t):SS(n,t))&&(c=bc(c,"onBeforeInput"),0<c.length&&(u=new B0("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}wx(h,e)})}function Oa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function bc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(n,t),s!=null&&i.unshift(Oa(n,s,r)),s=Pa(n,e),s!=null&&i.push(Oa(n,s,r))),n=n.return}return i}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function J0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Pa(t,s),l!=null&&o.unshift(Oa(t,l,a))):r||(l=Pa(t,s),l!=null&&o.push(Oa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var DS=/\r\n?/g,US=/\u0000|\uFFFD/g;function Q0(n){return(typeof n=="string"?n:""+n).replace(DS,`
`).replace(US,"")}function ic(n,e,t){if(e=Q0(e),Q0(n)!==e&&t)throw Error(ee(425))}function Ac(){}var Df=null,Uf=null;function Ff(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof ev!="undefined"?function(n){return ev.resolve(null).then(n).catch(kS)}:Of;function kS(n){setTimeout(function(){throw n})}function nf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Na(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Na(e)}function br(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function tv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ao=Math.random().toString(36).slice(2),Ai="__reactFiber$"+ao,ka="__reactProps$"+ao,Vi="__reactContainer$"+ao,kf="__reactEvents$"+ao,BS="__reactListeners$"+ao,zS="__reactHandles$"+ao;function os(n){var e=n[Ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vi]||t[Ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=tv(n);n!==null;){if(t=n[Ai])return t;n=tv(n)}return e}n=t,t=n.parentNode}return null}function qa(n){return n=n[Ai]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function qc(n){return n[ka]||null}var Bf=[],Hs=-1;function Dr(n){return{current:n}}function vt(n){0>Hs||(n.current=Bf[Hs],Bf[Hs]=null,Hs--)}function ft(n,e){Hs++,Bf[Hs]=n.current,n.current=e}var Lr={},nn=Dr(Lr),Sn=Dr(!1),hs=Lr;function eo(n,e){var t=n.type.contextTypes;if(!t)return Lr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function wn(n){return n=n.childContextTypes,n!=null}function Cc(){vt(Sn),vt(nn)}function nv(n,e,t){if(nn.current!==Lr)throw Error(ee(168));ft(nn,e),ft(Sn,t)}function Tx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,b1(n)||"Unknown",r));return bt({},t,i)}function Rc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,hs=nn.current,ft(nn,n),ft(Sn,Sn.current),!0}function iv(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=Tx(n,e,hs),i.__reactInternalMemoizedMergedChildContext=n,vt(Sn),vt(nn),ft(nn,n)):vt(Sn),ft(Sn,t)}var Oi=null,Kc=!1,rf=!1;function bx(n){Oi===null?Oi=[n]:Oi.push(n)}function HS(n){Kc=!0,bx(n)}function Ur(){if(!rf&&Oi!==null){rf=!0;var n=0,e=st;try{var t=Oi;for(st=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Oi=null,Kc=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(n+1)),jv(fd,Ur),r}finally{st=e,rf=!1}}return null}var Vs=[],Gs=0,Pc=null,Ic=0,Gn=[],Wn=0,fs=null,ki=1,Bi="";function rs(n,e){Vs[Gs++]=Ic,Vs[Gs++]=Pc,Pc=n,Ic=e}function Ax(n,e,t){Gn[Wn++]=ki,Gn[Wn++]=Bi,Gn[Wn++]=fs,fs=n;var i=ki;n=Bi;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-hi(e)+r|t<<r|i,Bi=s+n}else ki=1<<s|t<<r|i,Bi=n}function Md(n){n.return!==null&&(rs(n,1),Ax(n,1,0))}function Sd(n){for(;n===Pc;)Pc=Vs[--Gs],Vs[Gs]=null,Ic=Vs[--Gs],Vs[Gs]=null;for(;n===fs;)fs=Gn[--Wn],Gn[Wn]=null,Bi=Gn[--Wn],Gn[Wn]=null,ki=Gn[--Wn],Gn[Wn]=null}var In=null,Pn=null,_t=!1,ui=null;function Cx(n,e){var t=Xn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function rv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,In=n,Pn=br(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,In=n,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=fs!==null?{id:ki,overflow:Bi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,In=n,Pn=null,!0):!1;default:return!1}}function zf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hf(n){if(_t){var e=Pn;if(e){var t=e;if(!rv(n,e)){if(zf(n))throw Error(ee(418));e=br(t.nextSibling);var i=In;e&&rv(n,e)?Cx(i,t):(n.flags=n.flags&-4097|2,_t=!1,In=n)}}else{if(zf(n))throw Error(ee(418));n.flags=n.flags&-4097|2,_t=!1,In=n}}}function sv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function rc(n){if(n!==In)return!1;if(!_t)return sv(n),_t=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ff(n.type,n.memoizedProps)),e&&(e=Pn)){if(zf(n))throw Rx(),Error(ee(418));for(;e;)Cx(n,e),e=br(e.nextSibling)}if(sv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Pn=br(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Pn=null}}else Pn=In?br(n.stateNode.nextSibling):null;return!0}function Rx(){for(var n=Pn;n;)n=br(n.nextSibling)}function to(){Pn=In=null,_t=!1}function wd(n){ui===null?ui=[n]:ui.push(n)}var VS=Xi.ReactCurrentBatchConfig;function ha(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function sc(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function ov(n){var e=n._init;return e(n._payload)}function Px(n){function e(d,g){if(n){var y=d.deletions;y===null?(d.deletions=[g],d.flags|=16):y.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Pr(d,g),d.index=0,d.sibling=null,d}function s(d,g,y){return d.index=y,n?(y=d.alternate,y!==null?(y=y.index,y<g?(d.flags|=2,g):y):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,g,y,_){return g===null||g.tag!==6?(g=hf(y,d.mode,_),g.return=d,g):(g=r(g,y),g.return=d,g)}function l(d,g,y,_){var T=y.type;return T===Fs?u(d,g,y.props.children,_,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vr&&ov(T)===g.type)?(_=r(g,y.props),_.ref=ha(d,g,y),_.return=d,_):(_=xc(y.type,y.key,y.props,null,d.mode,_),_.ref=ha(d,g,y),_.return=d,_)}function c(d,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=ff(y,d.mode,_),g.return=d,g):(g=r(g,y.children||[]),g.return=d,g)}function u(d,g,y,_,T){return g===null||g.tag!==7?(g=us(y,d.mode,_,T),g.return=d,g):(g=r(g,y),g.return=d,g)}function h(d,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hf(""+g,d.mode,y),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wl:return y=xc(g.type,g.key,g.props,null,d.mode,y),y.ref=ha(d,null,g),y.return=d,y;case Us:return g=ff(g,d.mode,y),g.return=d,g;case vr:var _=g._init;return h(d,_(g._payload),y)}if(ga(g)||aa(g))return g=us(g,d.mode,y,null),g.return=d,g;sc(d,g)}return null}function f(d,g,y,_){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(d,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:return y.key===T?l(d,g,y,_):null;case Us:return y.key===T?c(d,g,y,_):null;case vr:return T=y._init,f(d,g,T(y._payload),_)}if(ga(y)||aa(y))return T!==null?null:u(d,g,y,_,null);sc(d,y)}return null}function p(d,g,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(y)||null,a(g,d,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wl:return d=d.get(_.key===null?y:_.key)||null,l(g,d,_,T);case Us:return d=d.get(_.key===null?y:_.key)||null,c(g,d,_,T);case vr:var w=_._init;return p(d,g,y,w(_._payload),T)}if(ga(_)||aa(_))return d=d.get(y)||null,u(g,d,_,T,null);sc(g,_)}return null}function m(d,g,y,_){for(var T=null,w=null,A=g,C=g=0,S=null;A!==null&&C<y.length;C++){A.index>C?(S=A,A=null):S=A.sibling;var M=f(d,A,y[C],_);if(M===null){A===null&&(A=S);break}n&&A&&M.alternate===null&&e(d,A),g=s(M,g,C),w===null?T=M:w.sibling=M,w=M,A=S}if(C===y.length)return t(d,A),_t&&rs(d,C),T;if(A===null){for(;C<y.length;C++)A=h(d,y[C],_),A!==null&&(g=s(A,g,C),w===null?T=A:w.sibling=A,w=A);return _t&&rs(d,C),T}for(A=i(d,A);C<y.length;C++)S=p(A,d,C,y[C],_),S!==null&&(n&&S.alternate!==null&&A.delete(S.key===null?C:S.key),g=s(S,g,C),w===null?T=S:w.sibling=S,w=S);return n&&A.forEach(function(P){return e(d,P)}),_t&&rs(d,C),T}function x(d,g,y,_){var T=aa(y);if(typeof T!="function")throw Error(ee(150));if(y=T.call(y),y==null)throw Error(ee(151));for(var w=T=null,A=g,C=g=0,S=null,M=y.next();A!==null&&!M.done;C++,M=y.next()){A.index>C?(S=A,A=null):S=A.sibling;var P=f(d,A,M.value,_);if(P===null){A===null&&(A=S);break}n&&A&&P.alternate===null&&e(d,A),g=s(P,g,C),w===null?T=P:w.sibling=P,w=P,A=S}if(M.done)return t(d,A),_t&&rs(d,C),T;if(A===null){for(;!M.done;C++,M=y.next())M=h(d,M.value,_),M!==null&&(g=s(M,g,C),w===null?T=M:w.sibling=M,w=M);return _t&&rs(d,C),T}for(A=i(d,A);!M.done;C++,M=y.next())M=p(A,d,C,M.value,_),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?C:M.key),g=s(M,g,C),w===null?T=M:w.sibling=M,w=M);return n&&A.forEach(function(B){return e(d,B)}),_t&&rs(d,C),T}function v(d,g,y,_){if(typeof y=="object"&&y!==null&&y.type===Fs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:e:{for(var T=y.key,w=g;w!==null;){if(w.key===T){if(T=y.type,T===Fs){if(w.tag===7){t(d,w.sibling),g=r(w,y.props.children),g.return=d,d=g;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===vr&&ov(T)===w.type){t(d,w.sibling),g=r(w,y.props),g.ref=ha(d,w,y),g.return=d,d=g;break e}t(d,w);break}else e(d,w);w=w.sibling}y.type===Fs?(g=us(y.props.children,d.mode,_,y.key),g.return=d,d=g):(_=xc(y.type,y.key,y.props,null,d.mode,_),_.ref=ha(d,g,y),_.return=d,d=_)}return o(d);case Us:e:{for(w=y.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(d,g.sibling),g=r(g,y.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=ff(y,d.mode,_),g.return=d,d=g}return o(d);case vr:return w=y._init,v(d,g,w(y._payload),_)}if(ga(y))return m(d,g,y,_);if(aa(y))return x(d,g,y,_);sc(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,y),g.return=d,d=g):(t(d,g),g=hf(y,d.mode,_),g.return=d,d=g),o(d)):t(d,g)}return v}var no=Px(!0),Ix=Px(!1),Lc=Dr(null),Nc=null,Ws=null,Ed=null;function Td(){Ed=Ws=Nc=null}function bd(n){var e=Lc.current;vt(Lc),n._currentValue=e}function Vf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function js(n,e){Nc=n,Ed=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Mn=!0),n.firstContext=null)}function qn(n){var e=n._currentValue;if(Ed!==n)if(n={context:n,memoizedValue:e,next:null},Ws===null){if(Nc===null)throw Error(ee(308));Ws=n,Nc.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return e}var as=null;function Ad(n){as===null?as=[n]:as.push(n)}function Lx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Ad(e)):(t.next=r.next,r.next=t),e.interleaved=t,Gi(n,i)}function Gi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var xr=!1;function Cd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(n,t)}return r=i.interleaved,r===null?(e.next=e,Ad(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(n,t)}function fc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,dd(n,t)}}function av(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Dc(n,e,t,i){var r=n.updateQueue;xr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=n,x=a;switch(f=e,p=t,x.tag){case 1:if(m=x.payload,typeof m=="function"){h=m.call(p,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,f=typeof m=="function"?m.call(p,h,f):m,f==null)break e;h=bt({},h,f);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ps|=o,n.lanes=o,n.memoizedState=h}}function lv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ka={},Ri=Dr(Ka),Ba=Dr(Ka),za=Dr(Ka);function ls(n){if(n===Ka)throw Error(ee(174));return n}function Rd(n,e){switch(ft(za,e),ft(Ba,n),ft(Ri,Ka),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Sf(e,n)}vt(Ri),ft(Ri,e)}function io(){vt(Ri),vt(Ba),vt(za)}function Dx(n){ls(za.current);var e=ls(Ri.current),t=Sf(e,n.type);e!==t&&(ft(Ba,n),ft(Ri,t))}function Pd(n){Ba.current===n&&(vt(Ri),vt(Ba))}var Et=Dr(0);function Uc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sf=[];function Id(){for(var n=0;n<sf.length;n++)sf[n]._workInProgressVersionPrimary=null;sf.length=0}var dc=Xi.ReactCurrentDispatcher,of=Xi.ReactCurrentBatchConfig,ds=0,Tt=null,kt=null,Vt=null,Fc=!1,Ea=!1,Ha=0,GS=0;function Qt(){throw Error(ee(321))}function Ld(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!di(n[t],e[t]))return!1;return!0}function Nd(n,e,t,i,r,s){if(ds=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dc.current=n===null||n.memoizedState===null?qS:KS,n=t(i,r),Ea){s=0;do{if(Ea=!1,Ha=0,25<=s)throw Error(ee(301));s+=1,Vt=kt=null,e.updateQueue=null,dc.current=ZS,n=t(i,r)}while(Ea)}if(dc.current=Oc,e=kt!==null&&kt.next!==null,ds=0,Vt=kt=Tt=null,Fc=!1,e)throw Error(ee(300));return n}function Dd(){var n=Ha!==0;return Ha=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Tt.memoizedState=Vt=n:Vt=Vt.next=n,Vt}function Kn(){if(kt===null){var n=Tt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=Vt===null?Tt.memoizedState:Vt.next;if(e!==null)Vt=e,kt=n;else{if(n===null)throw Error(ee(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Vt===null?Tt.memoizedState=Vt=n:Vt=Vt.next=n}return Vt}function Va(n,e){return typeof e=="function"?e(n):e}function af(n){var e=Kn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ds&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Tt.lanes|=u,ps|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Tt.lanes|=s,ps|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function lf(n){var e=Kn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ux(){}function Fx(n,e){var t=Tt,i=Kn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Ud(Bx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(t.flags|=2048,Ga(9,kx.bind(null,t,i,r,e),void 0,null),Gt===null)throw Error(ee(349));(ds&30)!==0||Ox(t,e,r)}return r}function Ox(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function kx(n,e,t,i){e.value=t,e.getSnapshot=i,zx(e)&&Hx(n)}function Bx(n,e,t){return t(function(){zx(e)&&Hx(n)})}function zx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!di(n,t)}catch{return!0}}function Hx(n){var e=Gi(n,1);e!==null&&fi(e,n,1,-1)}function cv(n){var e=bi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},e.queue=n,n=n.dispatch=YS.bind(null,Tt,n),[e.memoizedState,n]}function Ga(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Vx(){return Kn().memoizedState}function pc(n,e,t,i){var r=bi();Tt.flags|=n,r.memoizedState=Ga(1|e,t,void 0,i===void 0?null:i)}function Zc(n,e,t,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Ld(i,o.deps)){r.memoizedState=Ga(e,t,s,i);return}}Tt.flags|=n,r.memoizedState=Ga(1|e,t,s,i)}function uv(n,e){return pc(8390656,8,n,e)}function Ud(n,e){return Zc(2048,8,n,e)}function Gx(n,e){return Zc(4,2,n,e)}function Wx(n,e){return Zc(4,4,n,e)}function Xx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Yx(n,e,t){return t=t!=null?t.concat([n]):null,Zc(4,4,Xx.bind(null,e,n),t)}function Fd(){}function qx(n,e){var t=Kn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Kx(n,e){var t=Kn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Zx(n,e,t){return(ds&21)===0?(n.baseState&&(n.baseState=!1,Mn=!0),n.memoizedState=t):(di(t,e)||(t=ex(),Tt.lanes|=t,ps|=t,n.baseState=!0),e)}function WS(n,e){var t=st;st=t!==0&&4>t?t:4,n(!0);var i=of.transition;of.transition={};try{n(!1),e()}finally{st=t,of.transition=i}}function $x(){return Kn().memoizedState}function XS(n,e,t){var i=Rr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},jx(n))Jx(e,t);else if(t=Lx(n,e,t,i),t!==null){var r=pn();fi(t,n,i,r),Qx(t,e,i)}}function YS(n,e,t){var i=Rr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(jx(n))Jx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,Ad(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}t=Lx(n,e,r,i),t!==null&&(r=pn(),fi(t,n,i,r),Qx(t,e,i))}}function jx(n){var e=n.alternate;return n===Tt||e!==null&&e===Tt}function Jx(n,e){Ea=Fc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Qx(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,dd(n,t)}}var Oc={readContext:qn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},qS={readContext:qn,useCallback:function(n,e){return bi().memoizedState=[n,e===void 0?null:e],n},useContext:qn,useEffect:uv,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,pc(4194308,4,Xx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return pc(4194308,4,n,e)},useInsertionEffect:function(n,e){return pc(4,2,n,e)},useMemo:function(n,e){var t=bi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=bi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=XS.bind(null,Tt,n),[i.memoizedState,n]},useRef:function(n){var e=bi();return n={current:n},e.memoizedState=n},useState:cv,useDebugValue:Fd,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=cv(!1),e=n[0];return n=WS.bind(null,n[1]),bi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Tt,r=bi();if(_t){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Gt===null)throw Error(ee(349));(ds&30)!==0||Ox(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,uv(Bx.bind(null,i,s,n),[n]),i.flags|=2048,Ga(9,kx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=bi(),e=Gt.identifierPrefix;if(_t){var t=Bi,i=ki;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ha++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=GS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},KS={readContext:qn,useCallback:qx,useContext:qn,useEffect:Ud,useImperativeHandle:Yx,useInsertionEffect:Gx,useLayoutEffect:Wx,useMemo:Kx,useReducer:af,useRef:Vx,useState:function(){return af(Va)},useDebugValue:Fd,useDeferredValue:function(n){var e=Kn();return Zx(e,kt.memoizedState,n)},useTransition:function(){var n=af(Va)[0],e=Kn().memoizedState;return[n,e]},useMutableSource:Ux,useSyncExternalStore:Fx,useId:$x,unstable_isNewReconciler:!1},ZS={readContext:qn,useCallback:qx,useContext:qn,useEffect:Ud,useImperativeHandle:Yx,useInsertionEffect:Gx,useLayoutEffect:Wx,useMemo:Kx,useReducer:lf,useRef:Vx,useState:function(){return lf(Va)},useDebugValue:Fd,useDeferredValue:function(n){var e=Kn();return kt===null?e.memoizedState=n:Zx(e,kt.memoizedState,n)},useTransition:function(){var n=lf(Va)[0],e=Kn().memoizedState;return[n,e]},useMutableSource:Ux,useSyncExternalStore:Fx,useId:$x,unstable_isNewReconciler:!1};function li(n,e){if(n&&n.defaultProps){e=bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Gf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var $c={isMounted:function(n){return(n=n._reactInternals)?vs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=pn(),r=Rr(n),s=zi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(fi(e,n,r,i),fc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=pn(),r=Rr(n),s=zi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(fi(e,n,r,i),fc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=pn(),i=Rr(n),r=zi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(n,r,i),e!==null&&(fi(e,n,i,t),fc(e,n,i))}};function hv(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(t,i)||!Ua(r,s):!0}function ey(n,e,t){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=wn(e)?hs:nn.current,i=e.contextTypes,s=(i=i!=null)?eo(n,r):Lr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$c,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function fv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&$c.enqueueReplaceState(e,e.state,null)}function Wf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Cd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=wn(e)?hs:nn.current,r.context=eo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$c.enqueueReplaceState(r,r.state,null),Dc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,e){try{var t="",i=e;do t+=T1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function cf(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Xf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $S=typeof WeakMap=="function"?WeakMap:Map;function ty(n,e,t){t=zi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Bc||(Bc=!0,td=i),Xf(n,e)},t}function ny(n,e,t){t=zi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Xf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Xf(n,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function dv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $S;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=uw.bind(null,n,e,t),e.then(n,n))}function pv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function mv(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=zi(-1,1),e.tag=2,Ar(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var jS=Xi.ReactCurrentOwner,Mn=!1;function dn(n,e,t,i){e.child=n===null?Ix(e,null,t,i):no(e,n.child,t,i)}function gv(n,e,t,i,r){t=t.render;var s=e.ref;return js(e,r),i=Nd(n,e,t,i,s,r),t=Dd(),n!==null&&!Mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wi(n,e,r)):(_t&&t&&Md(e),e.flags|=1,dn(n,e,i,r),e.child)}function vv(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Wd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,iy(n,e,s,i,r)):(n=xc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ua,t(o,i)&&n.ref===e.ref)return Wi(n,e,r)}return e.flags|=1,n=Pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function iy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ua(s,i)&&n.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Mn=!0);else return e.lanes=n.lanes,Wi(n,e,r)}return Yf(n,e,t,i,r)}function ry(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ys,Rn),Rn|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ft(Ys,Rn),Rn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ft(Ys,Rn),Rn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ft(Ys,Rn),Rn|=i;return dn(n,e,r,t),e.child}function sy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Yf(n,e,t,i,r){var s=wn(t)?hs:nn.current;return s=eo(e,s),js(e,r),t=Nd(n,e,t,i,s,r),i=Dd(),n!==null&&!Mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wi(n,e,r)):(_t&&i&&Md(e),e.flags|=1,dn(n,e,t,r),e.child)}function xv(n,e,t,i,r){if(wn(t)){var s=!0;Rc(e)}else s=!1;if(js(e,r),e.stateNode===null)mc(n,e),ey(e,t,i),Wf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=wn(t)?hs:nn.current,c=eo(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&fv(e,o,i,c),xr=!1;var f=e.memoizedState;o.state=f,Dc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Sn.current||xr?(typeof u=="function"&&(Gf(e,t,u,i),l=e.memoizedState),(a=xr||hv(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Nx(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:li(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=wn(t)?hs:nn.current,l=eo(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&fv(e,o,i,l),xr=!1,f=e.memoizedState,o.state=f,Dc(e,i,o,r);var m=e.memoizedState;a!==h||f!==m||Sn.current||xr?(typeof p=="function"&&(Gf(e,t,p,i),m=e.memoizedState),(c=xr||hv(e,t,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return qf(n,e,t,i,s,r)}function qf(n,e,t,i,r,s){sy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&iv(e,t,!1),Wi(n,e,s);i=e.stateNode,jS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=no(e,n.child,null,s),e.child=no(e,null,a,s)):dn(n,e,a,s),e.memoizedState=i.state,r&&iv(e,t,!0),e.child}function oy(n){var e=n.stateNode;e.pendingContext?nv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&nv(n,e.context,!1),Rd(n,e.containerInfo)}function yv(n,e,t,i,r){return to(),wd(r),e.flags|=256,dn(n,e,t,i),e.child}var Kf={dehydrated:null,treeContext:null,retryLane:0};function Zf(n){return{baseLanes:n,cachePool:null,transitions:null}}function ay(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ft(Et,r&1),n===null)return Hf(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,i,0,null),n=us(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Zf(t),e.memoizedState=Kf,n):Od(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return JS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=us(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Zf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Kf,i}return s=n.child,n=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Od(n,e){return e=Qc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function oc(n,e,t,i){return i!==null&&wd(i),no(e,n.child,null,t),n=Od(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function JS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=cf(Error(ee(422))),oc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Qc({mode:"visible",children:i.children},r,0,null),s=us(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&no(e,n.child,null,o),e.child.memoizedState=Zf(o),e.memoizedState=Kf,s);if((e.mode&1)===0)return oc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=cf(s,i,void 0),oc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Mn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(n,r),fi(i,n,r,-1))}return Gd(),i=cf(Error(ee(421))),oc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=hw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Pn=br(r.nextSibling),In=e,_t=!0,ui=null,n!==null&&(Gn[Wn++]=ki,Gn[Wn++]=Bi,Gn[Wn++]=fs,ki=n.id,Bi=n.overflow,fs=e),e=Od(e,i.children),e.flags|=4096,e)}function _v(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Vf(n.return,e,t)}function uf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function ly(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(n,e,i.children,t),i=Et.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_v(n,t,e);else if(n.tag===19)_v(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ft(Et,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Uc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),uf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Uc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}uf(e,!0,t,null,s);break;case"together":uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mc(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Wi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ps|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=Pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function QS(n,e,t){switch(e.tag){case 3:oy(e),to();break;case 5:Dx(e);break;case 1:wn(e.type)&&Rc(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(Et,Et.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?ay(n,e,t):(ft(Et,Et.current&1),n=Wi(n,e,t),n!==null?n.sibling:null);ft(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return ly(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,ry(n,e,t)}return Wi(n,e,t)}var cy,$f,uy,hy;cy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$f=function(){};uy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ls(Ri.current);var s=null;switch(t){case"input":r=xf(n,r),i=xf(n,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=Mf(n,r),i=Mf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ac)}wf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};hy=function(n,e,t,i){t!==i&&(e.flags|=4)};function fa(n,e){if(!_t)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ew(n,e,t){var i=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return wn(e.type)&&Cc(),en(e),null;case 3:return i=e.stateNode,io(),vt(Sn),vt(nn),Id(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(rc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ui!==null&&(rd(ui),ui=null))),$f(n,e),en(e),null;case 5:Pd(e);var r=ls(za.current);if(t=e.type,n!==null&&e.stateNode!=null)uy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return en(e),null}if(n=ls(Ri.current),rc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[ka]=s,n=(e.mode&1)!==0,t){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)gt(xa[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":C0(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":P0(i,s),gt("invalid",i)}wf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ic(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ic(i.textContent,a,n),r=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(t){case"input":Xl(i),R0(i,s,!0);break;case"textarea":Xl(i),I0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Bv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ai]=e,n[ka]=i,cy(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ef(t,i),t){case"dialog":gt("cancel",n),gt("close",n),r=i;break;case"iframe":case"object":case"embed":gt("load",n),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)gt(xa[r],n);r=i;break;case"source":gt("error",n),r=i;break;case"img":case"image":case"link":gt("error",n),gt("load",n),r=i;break;case"details":gt("toggle",n),r=i;break;case"input":C0(n,i),r=xf(n,i),gt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",n);break;case"textarea":P0(n,i),r=Mf(n,i),gt("invalid",n);break;default:r=i}wf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ra(n,l):typeof l=="number"&&Ra(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",n):l!=null&&ad(n,s,l,o))}switch(t){case"input":Xl(n),R0(n,i,!1);break;case"textarea":Xl(n),I0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?qs(n,!!i.multiple,s,!1):i.defaultValue!=null&&qs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ac)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)hy(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=ls(za.current),ls(Ri.current),rc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==t)&&(n=In,n!==null))switch(n.tag){case 3:ic(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ic(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return en(e),null;case 13:if(vt(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(_t&&Pn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Rx(),to(),e.flags|=98560,s=!1;else if(s=rc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Ai]=e}else to(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ui!==null&&(rd(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Et.current&1)!==0?Bt===0&&(Bt=3):Gd())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return io(),$f(n,e),n===null&&Fa(e.stateNode.containerInfo),en(e),null;case 10:return bd(e.type._context),en(e),null;case 17:return wn(e.type)&&Cc(),en(e),null;case 19:if(vt(Et),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)fa(s,!1);else{if(Bt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Uc(n),o!==null){for(e.flags|=128,fa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ft(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&It()>so&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Uc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return en(e),null}else 2*It()-s.renderingStartTime>so&&t!==1073741824&&(e.flags|=128,i=!0,fa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,t=Et.current,ft(Et,i?t&1|2:t&1),e):(en(e),null);case 22:case 23:return Vd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Rn&1073741824)!==0&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function tw(n,e){switch(Sd(e),e.tag){case 1:return wn(e.type)&&Cc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return io(),vt(Sn),vt(nn),Id(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Pd(e),null;case 13:if(vt(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));to()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return vt(Et),null;case 4:return io(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var ac=!1,tn=!1,nw=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Xs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Rt(n,e,i)}else t.current=null}function jf(n,e,t){try{t()}catch(i){Rt(n,e,i)}}var Mv=!1;function iw(n,e){if(Df=Ec,n=gx(),_d(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uf={focusedElem:n,selectionRange:t},Ec=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,v=m.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:li(e.type,x),v);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(_){Rt(e,e.return,_)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return m=Mv,Mv=!1,m}function Ta(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&jf(e,t,s)}r=r.next}while(r!==i)}}function jc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Jf(n){var e=n.ref;if(e!==null){var t=n.stateNode;n.tag,n=t,typeof e=="function"?e(n):e.current=n}}function fy(n){var e=n.alternate;e!==null&&(n.alternate=null,fy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ai],delete e[ka],delete e[kf],delete e[BS],delete e[zS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dy(n){return n.tag===5||n.tag===3||n.tag===4}function Sv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(n=n.child,n!==null))for(Qf(n,e,t),n=n.sibling;n!==null;)Qf(n,e,t),n=n.sibling}function ed(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ed(n,e,t),n=n.sibling;n!==null;)ed(n,e,t),n=n.sibling}var Kt=null,ci=!1;function gr(n,e,t){for(t=t.child;t!==null;)py(n,e,t),t=t.sibling}function py(n,e,t){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Gc,t)}catch{}switch(t.tag){case 5:tn||Xs(t,e);case 6:var i=Kt,r=ci;Kt=null,gr(n,e,t),Kt=i,ci=r,Kt!==null&&(ci?(n=Kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Kt.removeChild(t.stateNode));break;case 18:Kt!==null&&(ci?(n=Kt,t=t.stateNode,n.nodeType===8?nf(n.parentNode,t):n.nodeType===1&&nf(n,t),Na(n)):nf(Kt,t.stateNode));break;case 4:i=Kt,r=ci,Kt=t.stateNode.containerInfo,ci=!0,gr(n,e,t),Kt=i,ci=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&jf(t,e,o),r=r.next}while(r!==i)}gr(n,e,t);break;case 1:if(!tn&&(Xs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Rt(t,e,a)}gr(n,e,t);break;case 21:gr(n,e,t);break;case 22:t.mode&1?(tn=(i=tn)||t.memoizedState!==null,gr(n,e,t),tn=i):gr(n,e,t);break;default:gr(n,e,t)}}function wv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new nw),e.forEach(function(i){var r=fw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ai(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,ci=!1;break e;case 3:Kt=a.stateNode.containerInfo,ci=!0;break e;case 4:Kt=a.stateNode.containerInfo,ci=!0;break e}a=a.return}if(Kt===null)throw Error(ee(160));py(s,o,r),Kt=null,ci=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)my(e,n),e=e.sibling}function my(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(e,n),Ti(n),i&4){try{Ta(3,n,n.return),jc(3,n)}catch(x){Rt(n,n.return,x)}try{Ta(5,n,n.return)}catch(x){Rt(n,n.return,x)}}break;case 1:ai(e,n),Ti(n),i&512&&t!==null&&Xs(t,t.return);break;case 5:if(ai(e,n),Ti(n),i&512&&t!==null&&Xs(t,t.return),n.flags&32){var r=n.stateNode;try{Ra(r,"")}catch(x){Rt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ov(r,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Vv(r,h):u==="dangerouslySetInnerHTML"?zv(r,h):u==="children"?Ra(r,h):ad(r,u,h,c)}switch(a){case"input":yf(r,s);break;case"textarea":kv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?qs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(x){Rt(n,n.return,x)}}break;case 6:if(ai(e,n),Ti(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){Rt(n,n.return,x)}}break;case 3:if(ai(e,n),Ti(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(x){Rt(n,n.return,x)}break;case 4:ai(e,n),Ti(n);break;case 13:ai(e,n),Ti(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zd=It())),i&4&&wv(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(tn=(c=tn)||u,ai(e,n),tn=c):ai(e,n),Ti(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&(n.mode&1)!==0)for(pe=n,u=n.child;u!==null;){for(h=pe=u;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ta(4,f,f.return);break;case 1:Xs(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){Rt(i,t,x)}}break;case 5:Xs(f,f.return);break;case 22:if(f.memoizedState!==null){Tv(h);continue}}p!==null?(p.return=f,pe=p):Tv(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hv("display",o))}catch(x){Rt(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Rt(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ai(e,n),Ti(n),i&4&&wv(n);break;case 21:break;default:ai(e,n),Ti(n)}}function Ti(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(dy(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=Sv(n);ed(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sv(n);Qf(n,a,o);break;default:throw Error(ee(161))}}catch(l){Rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function rw(n,e,t){pe=n,gy(n,e,t)}function gy(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ac;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=ac;var c=tn;if(ac=o,(tn=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?bv(r):l!==null?(l.return=o,pe=l):bv(r);for(;s!==null;)pe=s,gy(s,e,t),s=s.sibling;pe=r,ac=a,tn=c}Ev(n,e,t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,pe=s):Ev(n,e,t)}}function Ev(n){for(;pe!==null;){var e=pe;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:tn||jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:li(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}lv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}tn||e.flags&512&&Jf(e)}catch(f){Rt(e,e.return,f)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function Tv(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function bv(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{jc(4,e)}catch(l){Rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Jf(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{Jf(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var sw=Math.ceil,kc=Xi.ReactCurrentDispatcher,kd=Xi.ReactCurrentOwner,Yn=Xi.ReactCurrentBatchConfig,je=0,Gt=null,Ut=null,Zt=0,Rn=0,Ys=Dr(0),Bt=0,Wa=null,ps=0,Jc=0,Bd=0,ba=null,_n=null,zd=0,so=1/0,Fi=null,Bc=!1,td=null,Cr=null,lc=!1,Sr=null,zc=0,Aa=0,nd=null,gc=-1,vc=0;function pn(){return(je&6)!==0?It():gc!==-1?gc:gc=It()}function Rr(n){return(n.mode&1)===0?1:(je&2)!==0&&Zt!==0?Zt&-Zt:VS.transition!==null?(vc===0&&(vc=ex()),vc):(n=st,n!==0||(n=window.event,n=n===void 0?16:ax(n.type)),n)}function fi(n,e,t,i){if(50<Aa)throw Aa=0,nd=null,Error(ee(185));Xa(n,t,i),((je&2)===0||n!==Gt)&&(n===Gt&&((je&2)===0&&(Jc|=t),Bt===4&&_r(n,Zt)),En(n,i),t===1&&je===0&&(e.mode&1)===0&&(so=It()+500,Kc&&Ur()))}function En(n,e){var t=n.callbackNode;W1(n,e);var i=wc(n,n===Gt?Zt:0);if(i===0)t!==null&&D0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&D0(t),e===1)n.tag===0?HS(Av.bind(null,n)):bx(Av.bind(null,n)),OS(function(){(je&6)===0&&Ur()}),t=null;else{switch(tx(i)){case 1:t=fd;break;case 4:t=Jv;break;case 16:t=Sc;break;case 536870912:t=Qv;break;default:t=Sc}t=Ey(t,vy.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function vy(n,e){if(gc=-1,vc=0,(je&6)!==0)throw Error(ee(327));var t=n.callbackNode;if(Js()&&n.callbackNode!==t)return null;var i=wc(n,n===Gt?Zt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Hc(n,i);else{e=i;var r=je;je|=2;var s=yy();(Gt!==n||Zt!==e)&&(Fi=null,so=It()+500,cs(n,e));do try{lw();break}catch(a){xy(n,a)}while(!0);Td(),kc.current=s,je=r,Ut!==null?e=0:(Gt=null,Zt=0,e=Bt)}if(e!==0){if(e===2&&(r=Rf(n),r!==0&&(i=r,e=id(n,r))),e===1)throw t=Wa,cs(n,0),_r(n,i),En(n,It()),t;if(e===6)_r(n,i);else{if(r=n.current.alternate,(i&30)===0&&!ow(r)&&(e=Hc(n,i),e===2&&(s=Rf(n),s!==0&&(i=s,e=id(n,s))),e===1))throw t=Wa,cs(n,0),_r(n,i),En(n,It()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ss(n,_n,Fi);break;case 3:if(_r(n,i),(i&130023424)===i&&(e=zd+500-It(),10<e)){if(wc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){pn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Of(ss.bind(null,n,_n,Fi),e);break}ss(n,_n,Fi);break;case 4:if(_r(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sw(i/1960))-i,10<i){n.timeoutHandle=Of(ss.bind(null,n,_n,Fi),i);break}ss(n,_n,Fi);break;case 5:ss(n,_n,Fi);break;default:throw Error(ee(329))}}}return En(n,It()),n.callbackNode===t?vy.bind(null,n):null}function id(n,e){var t=ba;return n.current.memoizedState.isDehydrated&&(cs(n,e).flags|=256),n=Hc(n,e),n!==2&&(e=_n,_n=t,e!==null&&rd(e)),n}function rd(n){_n===null?_n=n:_n.push.apply(_n,n)}function ow(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(n,e){for(e&=~Bd,e&=~Jc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function Av(n){if((je&6)!==0)throw Error(ee(327));Js();var e=wc(n,0);if((e&1)===0)return En(n,It()),null;var t=Hc(n,e);if(n.tag!==0&&t===2){var i=Rf(n);i!==0&&(e=i,t=id(n,i))}if(t===1)throw t=Wa,cs(n,0),_r(n,e),En(n,It()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ss(n,_n,Fi),En(n,It()),null}function Hd(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(so=It()+500,Kc&&Ur())}}function ms(n){Sr!==null&&Sr.tag===0&&(je&6)===0&&Js();var e=je;je|=1;var t=Yn.transition,i=st;try{if(Yn.transition=null,st=1,n)return n()}finally{st=i,Yn.transition=t,je=e,(je&6)===0&&Ur()}}function Vd(){Rn=Ys.current,vt(Ys)}function cs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,FS(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(Sd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cc();break;case 3:io(),vt(Sn),vt(nn),Id();break;case 5:Pd(i);break;case 4:io();break;case 13:vt(Et);break;case 19:vt(Et);break;case 10:bd(i.type._context);break;case 22:case 23:Vd()}t=t.return}if(Gt=n,Ut=n=Pr(n.current,null),Zt=Rn=e,Bt=0,Wa=null,Bd=Jc=ps=0,_n=ba=null,as!==null){for(e=0;e<as.length;e++)if(t=as[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}as=null}return n}function xy(n,e){do{var t=Ut;try{if(Td(),dc.current=Oc,Fc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fc=!1}if(ds=0,Vt=kt=Tt=null,Ea=!1,Ha=0,kd.current=null,t===null||t.return===null){Bt=1,Wa=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if((u.mode&1)===0&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=pv(o);if(p!==null){p.flags&=-257,mv(p,o,a,s,e),p.mode&1&&dv(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if((e&1)===0){dv(s,c,e),Gd();break e}l=Error(ee(426))}}else if(_t&&a.mode&1){var v=pv(o);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),mv(v,o,a,s,e),wd(ro(l,a));break e}}s=l=ro(l,a),Bt!==4&&(Bt=2),ba===null?ba=[s]:ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ty(s,l,e);av(s,d);break e;case 1:a=l;var g=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cr===null||!Cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=ny(s,a,e);av(s,_);break e}}s=s.return}while(s!==null)}My(t)}catch(T){e=T,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function yy(){var n=kc.current;return kc.current=Oc,n===null?Oc:n}function Gd(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Gt===null||(ps&268435455)===0&&(Jc&268435455)===0||_r(Gt,Zt)}function Hc(n,e){var t=je;je|=2;var i=yy();(Gt!==n||Zt!==e)&&(Fi=null,cs(n,e));do try{aw();break}catch(r){xy(n,r)}while(!0);if(Td(),je=t,kc.current=i,Ut!==null)throw Error(ee(261));return Gt=null,Zt=0,Bt}function aw(){for(;Ut!==null;)_y(Ut)}function lw(){for(;Ut!==null&&!U1();)_y(Ut)}function _y(n){var e=wy(n.alternate,n,Rn);n.memoizedProps=n.pendingProps,e===null?My(n):Ut=e,kd.current=null}function My(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=ew(t,e,Rn),t!==null){Ut=t;return}}else{if(t=tw(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ut=null;return}}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Bt===0&&(Bt=5)}function ss(n,e,t){var i=st,r=Yn.transition;try{Yn.transition=null,st=1,cw(n,e,t,i)}finally{Yn.transition=r,st=i}return null}function cw(n,e,t,i){do Js();while(Sr!==null);if((je&6)!==0)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(X1(n,s),n===Gt&&(Ut=Gt=null,Zt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||lc||(lc=!0,Ey(Sc,function(){return Js(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=Yn.transition,Yn.transition=null;var o=st;st=1;var a=je;je|=4,kd.current=null,iw(n,t),my(t,n),IS(Uf),Ec=!!Df,Uf=Df=null,n.current=t,rw(t,n,r),F1(),je=a,st=o,Yn.transition=s}else n.current=t;if(lc&&(lc=!1,Sr=n,zc=r),s=n.pendingLanes,s===0&&(Cr=null),B1(t.stateNode,i),En(n,It()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bc)throw Bc=!1,n=td,td=null,n;return(zc&1)!==0&&n.tag!==0&&Js(),s=n.pendingLanes,(s&1)!==0?n===nd?Aa++:(Aa=0,nd=n):Aa=0,Ur(),null}function Js(){if(Sr!==null){var n=tx(zc),e=Yn.transition,t=st;try{if(Yn.transition=null,st=16>n?16:n,Sr===null)var i=!1;else{if(n=Sr,Sr=null,zc=0,(je&6)!==0)throw Error(ee(331));var r=je;for(je|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if((pe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Ta(8,u,s)}var h=u.child;if(h!==null)h.return=u,pe=h;else for(;pe!==null;){u=pe;var f=u.sibling,p=u.return;if(fy(u),u===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}pe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var g=n.current;for(pe=g;pe!==null;){o=pe;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,pe=y;else e:for(o=g;pe!==null;){if(a=pe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(T){Rt(a,a.return,T)}if(a===o){pe=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,pe=_;break e}pe=a.return}}if(je=r,Ur(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Gc,n)}catch{}i=!0}return i}finally{st=t,Yn.transition=e}}return!1}function Cv(n,e,t){e=ro(t,e),e=ty(n,e,1),n=Ar(n,e,1),e=pn(),n!==null&&(Xa(n,1,e),En(n,e))}function Rt(n,e,t){if(n.tag===3)Cv(n,n,t);else for(;e!==null;){if(e.tag===3){Cv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){n=ro(t,n),n=ny(e,n,1),e=Ar(e,n,1),n=pn(),e!==null&&(Xa(e,1,n),En(e,n));break}}e=e.return}}function uw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=pn(),n.pingedLanes|=n.suspendedLanes&t,Gt===n&&(Zt&t)===t&&(Bt===4||Bt===3&&(Zt&130023424)===Zt&&500>It()-zd?cs(n,0):Bd|=t),En(n,e)}function Sy(n,e){e===0&&((n.mode&1)===0?e=1:(e=Kl,Kl<<=1,(Kl&130023424)===0&&(Kl=4194304)));var t=pn();n=Gi(n,e),n!==null&&(Xa(n,e,t),En(n,t))}function hw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Sy(n,t)}function fw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Sy(n,t)}var wy;wy=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Sn.current)Mn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Mn=!1,QS(n,e,t);Mn=(n.flags&131072)!==0}else Mn=!1,_t&&(e.flags&1048576)!==0&&Ax(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;mc(n,e),n=e.pendingProps;var r=eo(e,nn.current);js(e,t),r=Nd(null,e,i,n,r,t);var s=Dd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,Rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cd(e),r.updater=$c,e.stateNode=r,r._reactInternals=e,Wf(e,i,n,t),e=qf(null,e,i,!0,s,t)):(e.tag=0,_t&&s&&Md(e),dn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(mc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pw(i),n=li(i,n),r){case 0:e=Yf(null,e,i,n,t);break e;case 1:e=xv(null,e,i,n,t);break e;case 11:e=gv(null,e,i,n,t);break e;case 14:e=vv(null,e,i,li(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Yf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),xv(n,e,i,r,t);case 3:e:{if(oy(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Nx(n,e),Dc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(ee(423)),e),e=yv(n,e,i,t,r);break e}else if(i!==r){r=ro(Error(ee(424)),e),e=yv(n,e,i,t,r);break e}else for(Pn=br(e.stateNode.containerInfo.firstChild),In=e,_t=!0,ui=null,t=Ix(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(to(),i===r){e=Wi(n,e,t);break e}dn(n,e,i,t)}e=e.child}return e;case 5:return Dx(e),n===null&&Hf(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ff(i,r)?o=null:s!==null&&Ff(i,s)&&(e.flags|=32),sy(n,e),dn(n,e,o,t),e.child;case 6:return n===null&&Hf(e),null;case 13:return ay(n,e,t);case 4:return Rd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=no(e,null,i,t):dn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),gv(n,e,i,r,t);case 7:return dn(n,e,e.pendingProps,t),e.child;case 8:return dn(n,e,e.pendingProps.children,t),e.child;case 12:return dn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Lc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!Sn.current){e=Wi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Vf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Vf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,t),r=qn(r),i=i(r),e.flags|=1,dn(n,e,i,t),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),vv(n,e,i,r,t);case 15:return iy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),mc(n,e),e.tag=1,wn(i)?(n=!0,Rc(e)):n=!1,js(e,t),ey(e,i,r),Wf(e,i,r,t),qf(null,e,i,!0,n,t);case 19:return ly(n,e,t);case 22:return ry(n,e,t)}throw Error(ee(156,e.tag))};function Ey(n,e){return jv(n,e)}function dw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(n,e,t,i){return new dw(n,e,t,i)}function Wd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pw(n){if(typeof n=="function")return Wd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===cd)return 11;if(n===ud)return 14}return 2}function Pr(n,e){var t=n.alternate;return t===null?(t=Xn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function xc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Wd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Fs:return us(t.children,r,s,e);case ld:o=8,r|=8;break;case pf:return n=Xn(12,t,e,r|2),n.elementType=pf,n.lanes=s,n;case mf:return n=Xn(13,t,e,r),n.elementType=mf,n.lanes=s,n;case gf:return n=Xn(19,t,e,r),n.elementType=gf,n.lanes=s,n;case Dv:return Qc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Lv:o=10;break e;case Nv:o=9;break e;case cd:o=11;break e;case ud:o=14;break e;case vr:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=Xn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function us(n,e,t,i){return n=Xn(7,n,i,e),n.lanes=t,n}function Qc(n,e,t,i){return n=Xn(22,n,i,e),n.elementType=Dv,n.lanes=t,n.stateNode={isHidden:!1},n}function hf(n,e,t){return n=Xn(6,n,null,e),n.lanes=t,n}function ff(n,e,t){return e=Xn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function mw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kh(0),this.expirationTimes=Kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xd(n,e,t,i,r,s,o,a,l){return n=new mw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(s),n}function gw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ty(n){if(!n)return Lr;n=n._reactInternals;e:{if(vs(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(wn(t))return Tx(n,t,e)}return e}function by(n,e,t,i,r,s,o,a,l){return n=Xd(t,i,!0,n,r,s,o,a,l),n.context=Ty(null),t=n.current,i=pn(),r=Rr(t),s=zi(i,r),s.callback=e!=null?e:null,Ar(t,s,r),n.current.lanes=r,Xa(n,r,i),En(n,i),n}function eu(n,e,t,i){var r=e.current,s=pn(),o=Rr(r);return t=Ty(t),e.context===null?e.context=t:e.pendingContext=t,e=zi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ar(r,e,o),n!==null&&(fi(n,r,o,s),fc(n,r,o)),o}function Vc(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Rv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Yd(n,e){Rv(n,e),(n=n.alternate)&&Rv(n,e)}function vw(){return null}var Ay=typeof reportError=="function"?reportError:function(n){console.error(n)};function qd(n){this._internalRoot=n}tu.prototype.render=qd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));eu(n,e,null,null)};tu.prototype.unmount=qd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ms(function(){eu(null,n,null,null)}),e[Vi]=null}};function tu(n){this._internalRoot=n}tu.prototype.unstable_scheduleHydration=function(n){if(n){var e=rx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<yr.length&&e!==0&&e<yr[t].priority;t++);yr.splice(t,0,n),t===0&&ox(n)}};function Kd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pv(){}function xw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vc(o);s.call(c)}}var o=by(e,i,n,0,null,!1,!1,"",Pv);return n._reactRootContainer=o,n[Vi]=o.current,Fa(n.nodeType===8?n.parentNode:n),ms(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Vc(l);a.call(c)}}var l=Xd(n,0,!1,null,null,!1,!1,"",Pv);return n._reactRootContainer=l,n[Vi]=l.current,Fa(n.nodeType===8?n.parentNode:n),ms(function(){eu(e,l,t,i)}),l}function iu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vc(o);a.call(l)}}eu(e,o,n,r)}else o=xw(t,e,n,r,i);return Vc(o)}nx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=va(e.pendingLanes);t!==0&&(dd(e,t|1),En(e,It()),(je&6)===0&&(so=It()+500,Ur()))}break;case 13:ms(function(){var i=Gi(n,1);if(i!==null){var r=pn();fi(i,n,1,r)}}),Yd(n,1)}};pd=function(n){if(n.tag===13){var e=Gi(n,134217728);if(e!==null){var t=pn();fi(e,n,134217728,t)}Yd(n,134217728)}};ix=function(n){if(n.tag===13){var e=Rr(n),t=Gi(n,e);if(t!==null){var i=pn();fi(t,n,e,i)}Yd(n,e)}};rx=function(){return st};sx=function(n,e){var t=st;try{return st=n,e()}finally{st=t}};bf=function(n,e,t){switch(e){case"input":if(yf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=qc(i);if(!r)throw Error(ee(90));Fv(i),yf(i,r)}}}break;case"textarea":kv(n,t);break;case"select":e=t.value,e!=null&&qs(n,!!t.multiple,e,!1)}};Xv=Hd;Yv=ms;var yw={usingClientEntryPoint:!1,Events:[qa,zs,qc,Gv,Wv,Hd]},da={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_w={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zv(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(pa=__REACT_DEVTOOLS_GLOBAL_HOOK__,!pa.isDisabled&&pa.supportsFiber))try{Gc=pa.inject(_w),Ci=pa}catch{}var pa;Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw;Dn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(e))throw Error(ee(200));return gw(n,e,null,t)};Dn.createRoot=function(n,e){if(!Kd(n))throw Error(ee(299));var t=!1,i="",r=Ay;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xd(n,1,!1,null,null,t,!1,i,r),n[Vi]=e.current,Fa(n.nodeType===8?n.parentNode:n),new qd(e)};Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=Zv(e),n=n===null?null:n.stateNode,n};Dn.flushSync=function(n){return ms(n)};Dn.hydrate=function(n,e,t){if(!nu(e))throw Error(ee(200));return iu(null,n,e,!0,t)};Dn.hydrateRoot=function(n,e,t){if(!Kd(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Ay;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=by(e,null,n,1,t!=null?t:null,r,!1,s,o),n[Vi]=e.current,Fa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new tu(e)};Dn.render=function(n,e,t){if(!nu(e))throw Error(ee(200));return iu(null,n,e,!1,t)};Dn.unmountComponentAtNode=function(n){if(!nu(n))throw Error(ee(40));return n._reactRootContainer?(ms(function(){iu(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1};Dn.unstable_batchedUpdates=Hd;Dn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!nu(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return iu(n,e,t,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426"});var Iy=ns((pR,Py)=>{"use strict";function Ry(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ry)}catch(n){console.error(n)}}Ry(),Py.exports=Cy()});var Ny=ns(Zd=>{"use strict";var Ly=Iy();Zd.createRoot=Ly.createRoot,Zd.hydrateRoot=Ly.hydrateRoot;var mR});var YM=Rh(kl()),qM=Rh(Ny());var F=Rh(kl());var Mw=0,Dy=1,Sw=2;var $_=1,Vm=2,Ji=3,Qn=0,an=1,vi=2,Ii=0,Co=1,Fu=2,Uy=3,Fy=4,ww=5,Ts=100,Ew=101,Tw=102,bw=103,Aw=104,Cw=200,Rw=201,Pw=202,Iw=203,Cp=204,Rp=205,Lw=206,Nw=207,Dw=208,Uw=209,Fw=210,Ow=211,kw=212,Bw=213,zw=214,Pp=0,Ip=1,Lp=2,Lo=3,Np=4,Dp=5,Up=6,Fp=7,j_=0,Hw=1,Vw=2,Wr=0,Gm=1,Wm=2,Xm=3,Sl=4,Gw=5,Ym=6,qm=7,Oy="attached",Ww="detached",J_=300,No=301,Do=302,Op=303,kp=304,dh=306,ir=1e3,er=1001,cl=1002,ln=1003,Km=1004;var Eo=1005;var Tn=1006,sl=1007;var $n=1008;var rr=1009,Q_=1010,eM=1011,ul=1012,Zm=1013,Cs=1014,yi=1015,An=1016,$m=1017,jm=1018,Uo=1020,tM=35902,nM=1021,iM=1022,jn=1023,rM=1024,sM=1025,Ro=1026,Fo=1027,Jm=1028,Qm=1029,oM=1030,eg=1031;var tg=1033,Iu=33776,Lu=33777,Nu=33778,Du=33779,Bp=35840,zp=35841,Hp=35842,Vp=35843,Gp=36196,Wp=37492,Xp=37496,Yp=37808,qp=37809,Kp=37810,Zp=37811,$p=37812,jp=37813,Jp=37814,Qp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,Uu=36492,om=36494,am=36495,aM=36283,lm=36284,cm=36285,um=36286,Xw=2200,Yw=2201,qw=2202,Oo=2300,ko=2301,$d=2302,To=2400,bo=2401,Ou=2402,ng=2500,Kw=2501,lM=0,ph=1,wl=2,Zw=3200,$w=3201;var cM=0,jw=1,Vr="",Mt="srgb",Nt="srgb-linear",mh="linear",it="srgb";var lo=7680;var ky=519,Jw=512,Qw=513,eE=514,uM=515,tE=516,nE=517,iE=518,rE=519,hm=35044,hM=35048;var By="300 es",tr=2e3,ku=2001,sr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zy=1234567,ol=Math.PI/180,Bo=180/Math.PI;function _i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function on(n,e,t){return Math.max(e,Math.min(t,n))}function ig(n,e){return(n%e+e)%e}function sE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function oE(n,e,t){return n!==e?(t-n)/(e-n):0}function al(n,e,t){return(1-t)*n+t*e}function aE(n,e,t,i){return al(n,e,1-Math.exp(-t*i))}function lE(n,e=1){return e-Math.abs(ig(n,e*2)-e)}function cE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function uE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fE(n,e){return n+Math.random()*(e-n)}function dE(n){return n*(.5-Math.random())}function pE(n){n!==void 0&&(zy=n);let e=zy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mE(n){return n*ol}function gE(n){return n*Bo}function vE(n){return(n&n-1)===0&&n!==0}function xE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _E(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var fM={DEG2RAD:ol,RAD2DEG:Bo,generateUUID:_i,clamp:on,euclideanModulo:ig,mapLinear:sE,inverseLerp:oE,lerp:al,damp:aE,pingpong:lE,smoothstep:cE,smootherstep:uE,randInt:hE,randFloat:fE,randFloatSpread:dE,seededRandom:pE,degToRad:mE,radToDeg:gE,isPowerOfTwo:vE,ceilPowerOfTwo:xE,floorPowerOfTwo:yE,setQuaternionFromProperEuler:_E,normalize:ot,denormalize:xi},be=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],m=i[8],x=r[0],v=r[3],d=r[6],g=r[1],y=r[4],_=r[7],T=r[2],w=r[5],A=r[8];return s[0]=o*x+a*g+l*T,s[3]=o*v+a*y+l*w,s[6]=o*d+a*_+l*A,s[1]=c*x+u*g+h*T,s[4]=c*v+u*y+h*w,s[7]=c*d+u*_+h*A,s[2]=f*x+p*g+m*T,s[5]=f*v+p*y+m*w,s[8]=f*d+p*_+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=t*h+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jd.makeScale(e,t)),this}rotate(e){return this.premultiply(jd.makeRotation(-e)),this}translate(e,t){return this.premultiply(jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jd=new Be;function dM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ME(){let n=hl("canvas");return n.style.display="block",n}var Hy={};function il(n){n in Hy||(Hy[n]=!0,console.warn(n))}function SE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function wE(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function EE(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ve={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(n.r=nr(n.r),n.g=nr(n.g),n.b=nr(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(n.r=Po(n.r),n.g=Po(n.g),n.b=Po(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vr?mh:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vy=[.64,.33,.3,.6,.15,.06],Gy=[.2126,.7152,.0722],Wy=[.3127,.329],Xy=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yy=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[Nt]:{primaries:Vy,whitePoint:Wy,transfer:mh,toXYZ:Xy,fromXYZ:Yy,luminanceCoefficients:Gy,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:Vy,whitePoint:Wy,transfer:it,toXYZ:Xy,fromXYZ:Yy,luminanceCoefficients:Gy,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}});var co,fm=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{co===void 0&&(co=hl("canvas")),co.width=e.width,co.height=e.height;let i=co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=co}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=hl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=nr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},TE=0,Bu=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jd(r[o].image)):s.push(Jd(r[o]))}else s=Jd(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Jd(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?fm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bE=0,Xt=class n extends sr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=er,r=er,s=Tn,o=$n,a=jn,l=rr,c=n.DEFAULT_ANISOTROPY,u=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=_i(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=J_;Xt.DEFAULT_ANISOTROPY=1;var et=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],m=l[9],x=l[2],v=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(p+1)/2,T=(d+1)/2,w=(u+f)/4,A=(h+x)/4,C=(m+v)/4;return y>_&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=w/r,s=C/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=C/s),this.set(i,r,s,t),this}let g=Math.sqrt((v-m)*(v-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(v-m)/g,this.y=(h-x)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dm=class extends sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Xt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends dm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},zu=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pm=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==m){let v=1-a,d=l*f+c*p+u*m+h*x,g=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let T=Math.sqrt(y),w=Math.atan2(T,d*g);v=Math.sin(v*w)/T,a=Math.sin(a*w)/T}let _=a*g;if(l=l*v+f*_,c=c*v+p*_,u=u*v+m*_,h=h*v+x*_,v===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*p-c*f,e[t+1]=l*m+u*f+c*h-a*p,e[t+2]=c*m+u*p+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"YXZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"ZXY":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"ZYX":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"YZX":this._x=f*u*h+c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h-f*p*m;break;case"XZY":this._x=f*u*h-c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qd.copy(this).projectOnVector(e),this.sub(Qd)}reflect(e){return this.sub(Qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qd=new I,qy=new cn,bn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ru.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ru.copy(i.boundingBox)),ru.applyMatrix4(e.matrixWorld),this.union(ru)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),su.subVectors(this.max,Za),uo.subVectors(e.a,Za),ho.subVectors(e.b,Za),fo.subVectors(e.c,Za),Fr.subVectors(ho,uo),Or.subVectors(fo,ho),xs.subVectors(uo,fo);let t=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-xs.z,xs.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,xs.z,0,-xs.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-xs.y,xs.x,0];return!ep(t,uo,ho,fo,su)||(t=[1,0,0,0,1,0,0,0,1],!ep(t,uo,ho,fo,su))?!1:(ou.crossVectors(Fr,Or),t=[ou.x,ou.y,ou.z],ep(t,uo,ho,fo,su))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yi=[new I,new I,new I,new I,new I,new I,new I,new I],pi=new I,ru=new bn,uo=new I,ho=new I,fo=new I,Fr=new I,Or=new I,xs=new I,Za=new I,su=new I,ou=new I,ys=new I;function ep(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ys.fromArray(n,s);let a=r.x*Math.abs(ys.x)+r.y*Math.abs(ys.y)+r.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),u=i.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var AE=new bn,$a=new I,tp=new I,On=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):AE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);let t=$a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(tp)),this.expandByPoint($a.copy(e.center).sub(tp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qi=new I,np=new I,au=new I,kr=new I,ip=new I,lu=new I,rp=new I,zo=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){np.copy(e).add(t).multiplyScalar(.5),au.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(np);let s=e.distanceTo(t)*.5,o=-this.direction.dot(au),a=kr.dot(this.direction),l=-kr.dot(au),c=kr.lengthSq(),u=Math.abs(1-o*o),h,f,p,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(np).addScaledVector(au,f),p}intersectSphere(e,t){qi.subVectors(e.center,this.origin);let i=qi.dot(this.direction),r=qi.dot(qi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,r,s){ip.subVectors(t,e),lu.subVectors(i,e),rp.crossVectors(ip,lu);let o=this.direction.dot(rp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);let l=a*this.direction.dot(lu.crossVectors(kr,lu));if(l<0)return null;let c=a*this.direction.dot(ip.cross(kr));if(c<0||l+c>o)return null;let u=-a*kr.dot(rp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class n{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,m,x,v){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,m,x,v)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,m,x,v){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/po.setFromMatrixColumn(e,0).length(),s=1/po.setFromMatrixColumn(e,1).length(),o=1/po.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,m=c*u,x=c*h;t[0]=f+x*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,m=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CE,e,RE)}lookAt(e,t,i){let r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Br.crossVectors(i,Un),Br.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Br.crossVectors(i,Un)),Br.normalize(),cu.crossVectors(Un,Br),r[0]=Br.x,r[4]=cu.x,r[8]=Un.x,r[1]=Br.y,r[5]=cu.y,r[9]=Un.y,r[2]=Br.z,r[6]=cu.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],m=i[2],x=i[6],v=i[10],d=i[14],g=i[3],y=i[7],_=i[11],T=i[15],w=r[0],A=r[4],C=r[8],S=r[12],M=r[1],P=r[5],B=r[9],k=r[13],W=r[2],Z=r[6],q=r[10],te=r[14],G=r[3],se=r[7],he=r[11],de=r[15];return s[0]=o*w+a*M+l*W+c*G,s[4]=o*A+a*P+l*Z+c*se,s[8]=o*C+a*B+l*q+c*he,s[12]=o*S+a*k+l*te+c*de,s[1]=u*w+h*M+f*W+p*G,s[5]=u*A+h*P+f*Z+p*se,s[9]=u*C+h*B+f*q+p*he,s[13]=u*S+h*k+f*te+p*de,s[2]=m*w+x*M+v*W+d*G,s[6]=m*A+x*P+v*Z+d*se,s[10]=m*C+x*B+v*q+d*he,s[14]=m*S+x*k+v*te+d*de,s[3]=g*w+y*M+_*W+T*G,s[7]=g*A+y*P+_*Z+T*se,s[11]=g*C+y*B+_*q+T*he,s[15]=g*S+y*k+_*te+T*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],m=e[3],x=e[7],v=e[11],d=e[15];return m*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+v*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],m=e[12],x=e[13],v=e[14],d=e[15],g=h*v*c-x*f*c+x*l*p-a*v*p-h*l*d+a*f*d,y=m*f*c-u*v*c-m*l*p+o*v*p+u*l*d-o*f*d,_=u*x*c-m*h*c+m*a*p-o*x*p-u*a*d+o*h*d,T=m*h*l-u*x*l-m*a*f+o*x*f+u*a*v-o*h*v,w=t*g+i*y+r*_+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=g*A,e[1]=(x*f*s-h*v*s-x*r*p+i*v*p+h*r*d-i*f*d)*A,e[2]=(a*v*s-x*l*s+x*r*c-i*v*c-a*r*d+i*l*d)*A,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=y*A,e[5]=(u*v*s-m*f*s+m*r*p-t*v*p-u*r*d+t*f*d)*A,e[6]=(m*l*s-o*v*s-m*r*c+t*v*c+o*r*d-t*l*d)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=_*A,e[9]=(m*h*s-u*x*s-m*i*p+t*x*p+u*i*d-t*h*d)*A,e[10]=(o*x*s-m*a*s+m*i*c-t*x*c-o*i*d+t*a*d)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*A,e[12]=T*A,e[13]=(u*x*r-m*h*r+m*i*f-t*x*f-u*i*v+t*h*v)*A,e[14]=(m*a*r-o*x*r-m*i*l+t*x*l+o*i*v-t*a*v)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,m=s*h,x=o*u,v=o*h,d=a*h,g=l*c,y=l*u,_=l*h,T=i.x,w=i.y,A=i.z;return r[0]=(1-(x+d))*T,r[1]=(p+_)*T,r[2]=(m-y)*T,r[3]=0,r[4]=(p-_)*w,r[5]=(1-(f+d))*w,r[6]=(v+g)*w,r[7]=0,r[8]=(m+y)*A,r[9]=(v-g)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=po.set(r[0],r[1],r[2]).length(),o=po.set(r[4],r[5],r[6]).length(),a=po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mi.copy(this);let c=1/s,u=1/o,h=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=tr){let l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r),p,m;if(a===tr)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===ku)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=tr){let l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u,m,x;if(a===tr)m=(o+s)*h,x=-2*h;else if(a===ku)m=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},po=new I,mi=new Fe,CE=new I(0,0,0),RE=new I(1,1,1),Br=new I,cu=new I,Un=new I,Ky=new Fe,Zy=new cn,ei=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ky.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ky,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zy.setFromEuler(this),this.setFromQuaternion(Zy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var Hu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},PE=0,$y=new I,mo=new cn,Ki=new Fe,uu=new I,ja=new I,IE=new I,LE=new cn,jy=new I(1,0,0),Jy=new I(0,1,0),Qy=new I(0,0,1),e_={type:"added"},NE={type:"removed"},go={type:"childadded",child:null},sp={type:"childremoved",child:null},At=class n extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ei,i=new cn,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Be}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(jy,e)}rotateY(e){return this.rotateOnAxis(Jy,e)}rotateZ(e){return this.rotateOnAxis(Qy,e)}translateOnAxis(e,t){return $y.copy(e).applyQuaternion(this.quaternion),this.position.add($y.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jy,e)}translateY(e){return this.translateOnAxis(Jy,e)}translateZ(e){return this.translateOnAxis(Qy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uu.copy(e):uu.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ja,uu,this.up):Ki.lookAt(uu,ja,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),mo.setFromRotationMatrix(Ki),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),go.child=e,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NE),sp.child=e,this.dispatchEvent(sp),sp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),go.child=e,this.dispatchEvent(go),go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,LE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new I,Zi=new I,op=new I,$i=new I,vo=new I,xo=new I,t_=new I,ap=new I,lp=new I,cp=new I,up=new et,hp=new et,fp=new et,bs=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gi.subVectors(e,t),r.cross(gi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gi.subVectors(r,t),Zi.subVectors(i,t),op.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(Zi),l=gi.dot(op),c=Zi.dot(Zi),u=Zi.dot(op),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return up.setScalar(0),hp.setScalar(0),fp.setScalar(0),up.fromBufferAttribute(e,t),hp.fromBufferAttribute(e,i),fp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(up,s.x),o.addScaledVector(hp,s.y),o.addScaledVector(fp,s.z),o}static isFrontFacing(e,t,i,r){return gi.subVectors(i,t),Zi.subVectors(e,t),gi.cross(Zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),gi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;vo.subVectors(r,i),xo.subVectors(s,i),ap.subVectors(e,i);let l=vo.dot(ap),c=xo.dot(ap);if(l<=0&&c<=0)return t.copy(i);lp.subVectors(e,r);let u=vo.dot(lp),h=xo.dot(lp);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(vo,o);cp.subVectors(e,s);let p=vo.dot(cp),m=xo.dot(cp);if(m>=0&&p<=m)return t.copy(s);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(xo,a);let v=u*m-p*h;if(v<=0&&h-u>=0&&p-m>=0)return t_.subVectors(s,r),a=(h-u)/(h-u+(p-m)),t.copy(r).addScaledVector(t_,a);let d=1/(v+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(vo,o).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},hu={h:0,s:0,l:0};function dp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ve.workingColorSpace){if(e=ig(e,1),t=on(t,0,1),i=on(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=dp(o,s,e+1/3),this.g=dp(o,s,e),this.b=dp(o,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let i=pM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ve.fromWorkingColorSpace(sn.copy(this),e),Math.round(on(sn.r*255,0,255))*65536+Math.round(on(sn.g*255,0,255))*256+Math.round(on(sn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,r=sn.g,s=sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Mt){Ve.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,r=sn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(hu);let i=al(zr.h,hu.h,t),r=al(zr.s,hu.s,t),s=al(zr.l,hu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ye;ye.NAMES=pM;var DE=0,kn=class extends sr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=_i(),this.name="",this.blending=Co,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cp,this.blendDst=Rp,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ky,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cp&&(i.blendSrc=this.blendSrc),this.blendDst!==Rp&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ky&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},un=class extends kn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new I,fu=new be,Pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hm,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fu.fromBufferAttribute(this,t),fu.applyMatrix3(e),this.setXY(t,fu.x,fu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hm&&(e.usage=this.usage),e}};var Vu=class extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Gu=class extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var St=class extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},UE=0,Zn=new Fe,pp=new At,yo=new I,Fn=new bn,Ja=new bn,Wt=new I,qt=class n extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dM(e)?Gu:Vu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return pp.lookAt(e),pp.updateMatrix(),this.applyMatrix4(pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{for(let i=0,r=t.count;i<r;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ja.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Fn.min,Ja.min),Fn.expandByPoint(Wt),Wt.addVectors(Fn.max,Ja.max),Fn.expandByPoint(Wt)):(Fn.expandByPoint(Ja.min),Fn.expandByPoint(Ja.max))}Fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(e,c),Wt.add(yo)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new I,l[C]=new I;let c=new I,u=new I,h=new I,f=new be,p=new be,m=new be,x=new I,v=new I;function d(C,S,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),m.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),m.sub(f);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(P),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(P),a[C].add(x),a[S].add(x),a[M].add(x),l[C].add(v),l[S].add(v),l[M].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,S=g.length;C<S;++C){let M=g[C],P=M.start,B=M.count;for(let k=P,W=P+B;k<W;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new I,_=new I,T=new I,w=new I;function A(C){T.fromBufferAttribute(r,C),w.copy(T);let S=a[C];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(w,S);let P=_.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,S=g.length;C<S;++C){let M=g[C],P=M.start,B=M.count;for(let k=P,W=P+B;k<W;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),x=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,m=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[m++]=c[p++]}return new Pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},n_=new Fe,_s=new zo,du=new On,i_=new I,pu=new I,mu=new I,gu=new I,mp=new I,vu=new I,r_=new I,xu=new I,xt=class extends At{constructor(e=new qt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){vu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(mp.fromBufferAttribute(h,e),o?vu.addScaledVector(mp,u):vu.addScaledVector(mp.sub(t),u))}t.add(vu)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),du.copy(i.boundingSphere),du.applyMatrix4(s),_s.copy(e.ray).recast(e.near),!(du.containsPoint(_s.origin)===!1&&(_s.intersectSphere(du,i_)===null||_s.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(s).invert(),_s.copy(e.ray).applyMatrix4(n_),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let v=f[m],d=o[v.materialIndex],g=Math.max(v.start,p.start),y=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let _=g,T=y;_<T;_+=3){let w=a.getX(_),A=a.getX(_+1),C=a.getX(_+2);r=yu(this,d,e,i,c,u,h,w,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=m,d=x;v<d;v+=3){let g=a.getX(v),y=a.getX(v+1),_=a.getX(v+2);r=yu(this,o,e,i,c,u,h,g,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let v=f[m],d=o[v.materialIndex],g=Math.max(v.start,p.start),y=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let _=g,T=y;_<T;_+=3){let w=_,A=_+1,C=_+2;r=yu(this,d,e,i,c,u,h,w,A,C),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=m,d=x;v<d;v+=3){let g=v,y=v+1,_=v+2;r=yu(this,o,e,i,c,u,h,g,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}};function FE(n,e,t,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qn,a),l===null)return null;xu.copy(a),xu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(xu);return c<t.near||c>t.far?null:{distance:c,point:xu.clone(),object:n}}function yu(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,pu),n.getVertexPosition(l,mu),n.getVertexPosition(c,gu);let u=FE(n,e,t,i,pu,mu,gu,r_);if(u){let h=new I;bs.getBarycoord(r_,pu,mu,gu,h),r&&(u.uv=bs.getInterpolatedAttribute(r,a,l,c,h,new be)),s&&(u.uv1=bs.getInterpolatedAttribute(s,a,l,c,h,new be)),o&&(u.normal=bs.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};bs.getNormal(pu,mu,gu,f.normal),u.face=f,u.barycoord=h}return u}var Mi=class n extends qt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function m(x,v,d,g,y,_,T,w,A,C,S){let M=_/A,P=T/C,B=_/2,k=T/2,W=w/2,Z=A+1,q=C+1,te=0,G=0,se=new I;for(let he=0;he<q;he++){let de=he*P-k;for(let De=0;De<Z;De++){let Ze=De*M-B;se[x]=Ze*g,se[v]=de*y,se[d]=W,c.push(se.x,se.y,se.z),se[x]=0,se[v]=0,se[d]=w>0?1:-1,u.push(se.x,se.y,se.z),h.push(De/A),h.push(1-he/C),te+=1}}for(let he=0;he<C;he++)for(let de=0;de<A;de++){let De=f+de+Z*he,Ze=f+de+Z*(he+1),K=f+(de+1)+Z*(he+1),ne=f+(de+1)+Z*he;l.push(De,Ze,ne),l.push(Ze,K,ne),G+=6}a.addGroup(p,G,S),p+=G,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ho(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=Ho(n[t]);for(let r in i)e[r]=i[r]}return e}function OE(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mM(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Ni={clone:Ho,merge:vn},kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends kn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Wu=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hr=new I,s_=new be,o_=new be,Ot=class extends Wu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,s_,o_),t.subVectors(o_,s_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ol*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_o=-90,Mo=1,mm=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ot(_o,Mo,e,t);r.layers=this.layers,this.add(r);let s=new Ot(_o,Mo,e,t);s.layers=this.layers,this.add(s);let o=new Ot(_o,Mo,e,t);o.layers=this.layers,this.add(o);let a=new Ot(_o,Mo,e,t);a.layers=this.layers,this.add(a);let l=new Ot(_o,Mo,e,t);l.layers=this.layers,this.add(l);let c=new Ot(_o,Mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===tr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Xu=class extends Xt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:No,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gm=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mi(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:Ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ii});s.uniforms.tEquirect.value=t;let o=new xt(r,s),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=Tn),new mm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},gp=new I,zE=new I,HE=new Be,Qi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=gp.subVectors(i,t).cross(zE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(gp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||HE.getNormalMatrix(e),r=this.coplanarPoint(gp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new On,_u=new I,fl=class{constructor(e=new Qi,t=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tr){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],m=r[9],x=r[10],v=r[11],d=r[12],g=r[13],y=r[14],_=r[15];if(i[0].setComponents(l-s,f-c,v-p,_-d).normalize(),i[1].setComponents(l+s,f+c,v+p,_+d).normalize(),i[2].setComponents(l+o,f+u,v+m,_+g).normalize(),i[3].setComponents(l-o,f-u,v-m,_-g).normalize(),i[4].setComponents(l-a,f-h,v-x,_-y).normalize(),t===tr)i[5].setComponents(l+a,f+h,v+x,_+y).normalize();else if(t===ku)i[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(_u.x=r.normal.x>0?e.max.x:e.min.x,_u.y=r.normal.y>0?e.max.y:e.min.y,_u.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VE(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){let m=h[f],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){let x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Xr=class n extends qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],m=[],x=[],v=[];for(let d=0;d<u;d++){let g=d*f-o;for(let y=0;y<c;y++){let _=y*h-s;m.push(_,-g,0),x.push(0,0,1),v.push(y/a),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){let y=g+c*d,_=g+c*(d+1),T=g+1+c*(d+1),w=g+1+c*d;p.push(y,_,w),p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new St(m,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},GE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yT="gl_FragColor = linearToOutputTexel( gl_FragColor );",_T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ab=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:GE,alphahash_pars_fragment:WE,alphamap_fragment:XE,alphamap_pars_fragment:YE,alphatest_fragment:qE,alphatest_pars_fragment:KE,aomap_fragment:ZE,aomap_pars_fragment:$E,batching_pars_vertex:jE,batching_vertex:JE,begin_vertex:QE,beginnormal_vertex:eT,bsdfs:tT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:aT,color_fragment:lT,color_pars_fragment:cT,color_pars_vertex:uT,color_vertex:hT,common:fT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:gT,emissivemap_fragment:vT,emissivemap_pars_fragment:xT,colorspace_fragment:yT,colorspace_pars_fragment:_T,envmap_fragment:MT,envmap_common_pars_fragment:ST,envmap_pars_fragment:wT,envmap_pars_vertex:ET,envmap_physical_pars_fragment:UT,envmap_vertex:TT,fog_vertex:bT,fog_pars_vertex:AT,fog_fragment:CT,fog_pars_fragment:RT,gradientmap_pars_fragment:PT,lightmap_pars_fragment:IT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:NT,lights_pars_begin:DT,lights_toon_fragment:FT,lights_toon_pars_fragment:OT,lights_phong_fragment:kT,lights_phong_pars_fragment:BT,lights_physical_fragment:zT,lights_physical_pars_fragment:HT,lights_fragment_begin:VT,lights_fragment_maps:GT,lights_fragment_end:WT,logdepthbuf_fragment:XT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:qT,logdepthbuf_vertex:KT,map_fragment:ZT,map_pars_fragment:$T,map_particle_fragment:jT,map_particle_pars_fragment:JT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:eb,morphinstance_vertex:tb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:rb,morphtarget_vertex:sb,normal_fragment_begin:ob,normal_fragment_maps:ab,normal_pars_fragment:lb,normal_pars_vertex:cb,normal_vertex:ub,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:vb,premultiplied_alpha_fragment:xb,project_vertex:yb,dithering_fragment:_b,dithering_pars_fragment:Mb,roughnessmap_fragment:Sb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Tb,shadowmap_vertex:bb,shadowmask_pars_fragment:Ab,skinbase_vertex:Cb,skinning_pars_vertex:Rb,skinning_vertex:Pb,skinnormal_vertex:Ib,specularmap_fragment:Lb,specularmap_pars_fragment:Nb,tonemapping_fragment:Db,tonemapping_pars_fragment:Ub,transmission_fragment:Fb,transmission_pars_fragment:Ob,uv_pars_fragment:kb,uv_pars_vertex:Bb,uv_vertex:zb,worldpos_vertex:Hb,background_vert:Vb,background_frag:Gb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:Yb,cube_frag:qb,depth_vert:Kb,depth_frag:Zb,distanceRGBA_vert:$b,distanceRGBA_frag:jb,equirect_vert:Jb,equirect_frag:Qb,linedashed_vert:eA,linedashed_frag:tA,meshbasic_vert:nA,meshbasic_frag:iA,meshlambert_vert:rA,meshlambert_frag:sA,meshmatcap_vert:oA,meshmatcap_frag:aA,meshnormal_vert:lA,meshnormal_frag:cA,meshphong_vert:uA,meshphong_frag:hA,meshphysical_vert:fA,meshphysical_frag:dA,meshtoon_vert:pA,meshtoon_frag:mA,points_vert:gA,points_frag:vA,shadow_vert:xA,shadow_frag:yA,sprite_vert:_A,sprite_frag:MA},oe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Pi={basic:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:vn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:vn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:vn([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:vn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:vn([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:vn([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:vn([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:vn([oe.lights,oe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Pi.physical={uniforms:vn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Mu={r:0,b:0,g:0},Ss=new ei,SA=new Fe;function wA(n,e,t,i,r,s,o){let a=new ye(0),l=s===!0?0:1,c,u,h=null,f=0,p=null;function m(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y}function x(g){let y=!1,_=m(g);_===null?d(a,l):_&&_.isColor&&(d(_,1),y=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(g,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===dh)?(u===void 0&&(u=new xt(new Mi(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Ho(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ss.copy(y.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Ss)),u.material.toneMapped=Ve.getTransfer(_.colorSpace)!==it,(h!==_||f!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xt(new Xr(2,2),new Lt({name:"BackgroundMaterial",uniforms:Ho(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==it,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function d(g,y){g.getRGB(Mu,mM(n)),i.buffers.color.setClear(Mu.r,Mu.g,Mu.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:x,addToRenderList:v}}function EA(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(M,P,B,k,W){let Z=!1,q=h(k,B,P);s!==q&&(s=q,c(s.object)),Z=p(M,k,B,W),Z&&m(M,k,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(M,P,B,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,B){let k=B.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Z=W[P.id];Z===void 0&&(Z={},W[P.id]=Z);let q=Z[k];return q===void 0&&(q=f(l()),Z[k]=q),q}function f(M){let P=[],B=[],k=[];for(let W=0;W<t;W++)P[W]=0,B[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,P,B,k){let W=s.attributes,Z=P.attributes,q=0,te=B.getAttributes();for(let G in te)if(te[G].location>=0){let he=W[G],de=Z[G];if(de===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),he===void 0||he.attribute!==de||de&&he.data!==de.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function m(M,P,B,k){let W={},Z=P.attributes,q=0,te=B.getAttributes();for(let G in te)if(te[G].location>=0){let he=Z[G];he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));let de={};de.attribute=he,he&&he.data&&(de.data=he.data),W[G]=de,q++}s.attributes=W,s.attributesNum=q,s.index=k}function x(){let M=s.newAttributes;for(let P=0,B=M.length;P<B;P++)M[P]=0}function v(M){d(M,0)}function d(M,P){let B=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;B[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),W[M]!==P&&(n.vertexAttribDivisor(M,P),W[M]=P)}function g(){let M=s.newAttributes,P=s.enabledAttributes;for(let B=0,k=P.length;B<k;B++)P[B]!==M[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function y(M,P,B,k,W,Z,q){q===!0?n.vertexAttribIPointer(M,P,B,W,Z):n.vertexAttribPointer(M,P,B,k,W,Z)}function _(M,P,B,k){x();let W=k.attributes,Z=B.getAttributes(),q=P.defaultAttributeValues;for(let te in Z){let G=Z[te];if(G.location>=0){let se=W[te];if(se===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){let he=se.normalized,de=se.itemSize,De=e.get(se);if(De===void 0)continue;let Ze=De.buffer,K=De.type,ne=De.bytesPerElement,_e=K===n.INT||K===n.UNSIGNED_INT||se.gpuType===Zm;if(se.isInterleavedBufferAttribute){let X=se.data,me=X.stride,Ae=se.offset;if(X.isInstancedInterleavedBuffer){for(let Pe=0;Pe<G.locationSize;Pe++)d(G.location+Pe,X.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)v(G.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Pe=0;Pe<G.locationSize;Pe++)y(G.location+Pe,de/G.locationSize,K,he,me*ne,(Ae+de/G.locationSize*Pe)*ne,_e)}else{if(se.isInstancedBufferAttribute){for(let X=0;X<G.locationSize;X++)d(G.location+X,se.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let X=0;X<G.locationSize;X++)v(G.location+X);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let X=0;X<G.locationSize;X++)y(G.location+X,de/G.locationSize,K,he,de*ne,de/G.locationSize*X*ne,_e)}}else if(q!==void 0){let he=q[te];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(G.location,he);break;case 3:n.vertexAttrib3fv(G.location,he);break;case 4:n.vertexAttrib4fv(G.location,he);break;default:n.vertexAttrib1fv(G.location,he)}}}}g()}function T(){C();for(let M in i){let P=i[M];for(let B in P){let k=P[B];for(let W in k)u(k[W].object),delete k[W];delete P[B]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let P=i[M.id];for(let B in P){let k=P[B];for(let W in k)u(k[W].object),delete k[W];delete P[B]}delete i[M.id]}function A(M){for(let P in i){let B=i[P];if(B[M.id]===void 0)continue;let k=B[M.id];for(let W in k)u(k[W].object),delete k[W];delete B[M.id]}}function C(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:v,disableUnusedAttributes:g}}function TA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*f[x];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yi&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function AA(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Qi,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let m=h.clippingPlanes,x=h.clipIntersection,v=h.clipShadows,d=n.get(h);if(!r||m===null||m.length===0||s&&!v)s?u(null):c();else{let g=s?0:i,y=g*4,_=d.clippingState||null;l.value=_,_=u(m,f,y,p);for(let T=0;T!==y;++T)_[T]=t[T];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,m){let x=h!==null?h.length:0,v=null;if(x!==0){if(v=l.value,m!==!0||v===null){let d=p+x*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<d)&&(v=new Float32Array(d));for(let y=0,_=p;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(g,a),o.normal.toArray(v,_),v[_+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function CA(n){let e=new WeakMap;function t(o,a){return a===Op?o.mapping=No:a===kp&&(o.mapping=Do),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Op||a===kp)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Li=class extends Wu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ao=4,a_=[.125,.215,.35,.446,.526,.582],As=20,vp=new Li,l_=new ye,xp=null,yp=0,_p=0,Mp=!1,Es=(1+Math.sqrt(5))/2,So=1/Es,c_=[new I(-Es,So,0),new I(Es,So,0),new I(-So,0,Es),new I(So,0,Es),new I(0,Es,-So),new I(0,Es,So),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xp=this._renderer.getRenderTarget(),yp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xp,yp,_p),this._renderer.xr.enabled=Mp,e.scissorTest=!1,Su(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===No||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xp=this._renderer.getRenderTarget(),yp=this._renderer.getActiveCubeFace(),_p=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:An,format:jn,colorSpace:Nt,depthBuffer:!1},r=u_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u_(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RA(s)),this._blurMaterial=PA(s,e,t)}return r}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,vp)}_sceneToCubeUV(e,t,i,r){let a=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(l_),u.toneMapping=Wr,u.autoClear=!1;let p=new un({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new xt(new Mi,p),x=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,x=!0):(p.color.copy(l_),x=!0);for(let d=0;d<6;d++){let g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let y=this._cubeSize;Su(r,g*y,d>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===No||e.mapping===Do;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Su(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,vp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=c_[(r-s-1)%c_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new xt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*As-1),x=s/m,v=isFinite(s)?1+Math.floor(u*x):As;v>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${As}`);let d=[],g=0;for(let A=0;A<As;++A){let C=A/x,S=Math.exp(-C*C/2);d.push(S),A===0?g+=S:A<v&&(g+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;let _=this._sizeLods[r],T=3*_*(r>y-Ao?r-y+Ao:0),w=4*(this._cubeSize-_);Su(t,T,w,3*_,2*_),l.setRenderTarget(t),l.render(h,vp)}};function RA(n){let e=[],t=[],i=[],r=n,s=n-Ao+1+a_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ao?l=a_[o-n+Ao-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,x=3,v=2,d=1,g=new Float32Array(x*m*p),y=new Float32Array(v*m*p),_=new Float32Array(d*m*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,C=w>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];g.set(S,x*m*w),y.set(f,v*m*w);let M=[w,w,w,w,w,w];_.set(M,d*m*w)}let T=new qt;T.setAttribute("position",new Pt(g,x)),T.setAttribute("uv",new Pt(y,v)),T.setAttribute("faceIndex",new Pt(_,d)),e.push(T),r>Ao&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function u_(n,e,t){let i=new Yt(n,e,t);return i.texture.mapping=dh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Su(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function PA(n,e,t){let i=new Float32Array(As),r=new I(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function h_(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function f_(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function rg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Op||l===kp,u=l===No||l===Do;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Vo(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Vo(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function LA(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&il("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NA(n,e,t,i){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let v=0,d=x.length;v<d;v++)e.remove(x[v])}f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)e.update(f[m],n.ARRAY_BUFFER);let p=h.morphAttributes;for(let m in p){let x=p[m];for(let v=0,d=x.length;v<d;v++)e.update(x[v],n.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,m=h.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let y=0,_=g.length;y<_;y+=3){let T=g[y+0],w=g[y+1],A=g[y+2];f.push(T,w,w,A,A,T)}}else if(m!==void 0){let g=m.array;x=m.version;for(let y=0,_=g.length/3-1;y<_;y+=3){let T=y+0,w=y+1,A=y+2;f.push(T,w,w,A,A,T)}}else return;let v=new(dM(f)?Gu:Vu)(f,1);v.version=x;let d=s.get(h);d&&e.remove(d),s.set(h,v)}function u(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function DA(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,s,f*o,m),t.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let v=0;for(let d=0;d<m;d++)v+=p[d];t.update(v,i,1)}function h(f,p,m,x){if(m===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,m);let d=0;for(let g=0;g<m;g++)d+=p[g]*x[g];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function UA(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FA(n,e,t){let i=new WeakMap,r=new et;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let S=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],y=0;p===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*T*4*h),A=new zu(w,_,T,h);A.type=yi,A.needsUpdate=!0;let C=y*4;for(let M=0;M<h;M++){let P=v[M],B=d[M],k=g[M],W=_*T*4*M;for(let Z=0;Z<P.count;Z++){let q=Z*C;p===!0&&(r.fromBufferAttribute(P,Z),w[W+q+0]=r.x,w[W+q+1]=r.y,w[W+q+2]=r.z,w[W+q+3]=0),m===!0&&(r.fromBufferAttribute(B,Z),w[W+q+4]=r.x,w[W+q+5]=r.y,w[W+q+6]=r.z,w[W+q+7]=0),x===!0&&(r.fromBufferAttribute(k,Z),w[W+q+8]=r.x,w[W+q+9]=r.y,w[W+q+10]=r.z,w[W+q+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new be(_,T)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function OA(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Yu=class extends Xt{constructor(e,t,i,r,s,o,a,l,c,u=Ro){if(u!==Ro&&u!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ro&&(i=Cs),i===void 0&&u===Fo&&(i=Uo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vM=new Xt,d_=new Yu(1,1),xM=new zu,yM=new pm,_M=new Xu,p_=[],m_=[],g_=new Float32Array(16),v_=new Float32Array(9),x_=new Float32Array(4);function jo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=p_[r];if(s===void 0&&(s=new Float32Array(r),p_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gh(n,e){let t=m_[e];t===void 0&&(t=new Int32Array(e),m_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kA(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function zA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function HA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function VA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;x_.set(i),n.uniformMatrix2fv(this.addr,!1,x_),Ht(t,i)}}function GA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;v_.set(i),n.uniformMatrix3fv(this.addr,!1,v_),Ht(t,i)}}function WA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;g_.set(i),n.uniformMatrix4fv(this.addr,!1,g_),Ht(t,i)}}function XA(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function YA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function qA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function KA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function ZA(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $A(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function jA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function JA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function QA(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(d_.compareFunction=uM,s=d_):s=vM,t.setTexture2D(e||s,r)}function eC(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yM,r)}function tC(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_M,r)}function nC(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xM,r)}function iC(n){switch(n){case 5126:return kA;case 35664:return BA;case 35665:return zA;case 35666:return HA;case 35674:return VA;case 35675:return GA;case 35676:return WA;case 5124:case 35670:return XA;case 35667:case 35671:return YA;case 35668:case 35672:return qA;case 35669:case 35673:return KA;case 5125:return ZA;case 36294:return $A;case 36295:return jA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return nC}}function rC(n,e){n.uniform1fv(this.addr,e)}function sC(n,e){let t=jo(e,this.size,2);n.uniform2fv(this.addr,t)}function oC(n,e){let t=jo(e,this.size,3);n.uniform3fv(this.addr,t)}function aC(n,e){let t=jo(e,this.size,4);n.uniform4fv(this.addr,t)}function lC(n,e){let t=jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cC(n,e){let t=jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uC(n,e){let t=jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hC(n,e){n.uniform1iv(this.addr,e)}function fC(n,e){n.uniform2iv(this.addr,e)}function dC(n,e){n.uniform3iv(this.addr,e)}function pC(n,e){n.uniform4iv(this.addr,e)}function mC(n,e){n.uniform1uiv(this.addr,e)}function gC(n,e){n.uniform2uiv(this.addr,e)}function vC(n,e){n.uniform3uiv(this.addr,e)}function xC(n,e){n.uniform4uiv(this.addr,e)}function yC(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||vM,s[o])}function _C(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||yM,s[o])}function MC(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_M,s[o])}function SC(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xM,s[o])}function wC(n){switch(n){case 5126:return rC;case 35664:return sC;case 35665:return oC;case 35666:return aC;case 35674:return lC;case 35675:return cC;case 35676:return uC;case 5124:case 35670:return hC;case 35667:case 35671:return fC;case 35668:case 35672:return dC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return gC;case 36295:return vC;case 36296:return xC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return SC}}var vm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iC(t.type)}},xm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wC(t.type)}},ym=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Sp=/(\w+)(\])?(\[|\.)?/g;function y_(n,e){n.seq.push(e),n.map[e.id]=e}function EC(n,e,t){let i=n.name,r=i.length;for(Sp.lastIndex=0;;){let s=Sp.exec(i),o=Sp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){y_(t,c===void 0?new vm(a,n,e):new xm(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new ym(a),y_(t,h)),t=h}}}var Io=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);EC(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function __(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var TC=37297,bC=0;function AC(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var M_=new Be;function CC(n){Ve._getMatrix(M_,Ve.workingColorSpace,n);let e=`mat3( ${M_.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(n)){case mh:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function S_(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+AC(n.getShaderSource(e),o)}else return r}function RC(n,e){let t=CC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function PC(n,e){let t;switch(e){case Gm:t="Linear";break;case Wm:t="Reinhard";break;case Xm:t="Cineon";break;case Sl:t="ACESFilmic";break;case Ym:t="AgX";break;case qm:t="Neutral";break;case Gw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wu=new I;function IC(){Ve.getLuminanceCoefficients(wu);let n=wu.x.toFixed(4),e=wu.y.toFixed(4),t=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function NC(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DC(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function rl(n){return n!==""}function w_(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var UC=/^[ \t]*#include +<([\w\d./]+)>/gm;function _m(n){return n.replace(UC,OC)}var FC=new Map;function OC(n,e){let t=He[e];if(t===void 0){let i=FC.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _m(t)}var kC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(n){return n.replace(kC,BC)}function BC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function b_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function HC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case No:case Do:e="ENVMAP_TYPE_CUBE";break;case dh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VC(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Do&&(e="ENVMAP_MODE_REFRACTION"),e}function GC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case j_:e="ENVMAP_BLENDING_MULTIPLY";break;case Hw:e="ENVMAP_BLENDING_MIX";break;case Vw:e="ENVMAP_BLENDING_ADD";break}return e}function WC(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function XC(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=zC(t),c=HC(t),u=VC(t),h=GC(t),f=WC(t),p=LC(t),m=NC(s),x=r.createProgram(),v,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rl).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rl).join(`
`),d.length>0&&(d+=`
`)):(v=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),d=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?He.tonemapping_pars_fragment:"",t.toneMapping!==Wr?PC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,RC("linearToOutputTexel",t.outputColorSpace),IC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),o=_m(o),o=w_(o,t),o=E_(o,t),a=_m(a),a=w_(a,t),a=E_(a,t),o=T_(o),a=T_(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",t.glslVersion===By?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===By?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=g+v+o,_=g+d+a,T=__(r,r.VERTEX_SHADER,y),w=__(r,r.FRAGMENT_SHADER,_);r.attachShader(x,T),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(n.debug.checkShaderErrors){let B=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(T).trim(),W=r.getShaderInfoLog(w).trim(),Z=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,w);else{let te=S_(r,T,"vertex"),G=S_(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+te+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||W==="")&&(q=!1);q&&(P.diagnostics={runnable:Z,programLog:B,vertexShader:{log:k,prefix:v},fragmentShader:{log:W,prefix:d}})}r.deleteShader(T),r.deleteShader(w),C=new Io(r,x),S=DC(r,x)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,TC)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}var YC=0,Mm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sm(e),t.set(e,i)),i}},Sm=class{constructor(e){this.id=YC++,this.code=e,this.usedTimes=0}};function qC(n,e,t,i,r,s,o){let a=new Hu,l=new Mm,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function v(S,M,P,B,k){let W=B.fog,Z=k.geometry,q=S.isMeshStandardMaterial?B.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),G=te&&te.mapping===dh?te.image.height:null,se=m[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,de=he!==void 0?he.length:0,De=0;Z.morphAttributes.position!==void 0&&(De=1),Z.morphAttributes.normal!==void 0&&(De=2),Z.morphAttributes.color!==void 0&&(De=3);let Ze,K,ne,_e;if(se){let rt=Pi[se];Ze=rt.vertexShader,K=rt.fragmentShader}else Ze=S.vertexShader,K=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);let X=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ae=k.isInstancedMesh===!0,Pe=k.isBatchedMesh===!0,at=!!S.map,Xe=!!S.matcap,yt=!!te,N=!!S.aoMap,hn=!!S.lightMap,Ye=!!S.bumpMap,qe=!!S.normalMap,Ie=!!S.displacementMap,dt=!!S.emissiveMap,Re=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,O=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,$=S.sheen>0,Ee=S.transmission>0,le=E&&!!S.anisotropyMap,ge=O&&!!S.clearcoatMap,$e=O&&!!S.clearcoatNormalMap,ie=O&&!!S.clearcoatRoughnessMap,ve=Q&&!!S.iridescenceMap,Le=Q&&!!S.iridescenceThicknessMap,Ne=$&&!!S.sheenColorMap,xe=$&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,ze=!!S.specularColorMap,ct=!!S.specularIntensityMap,L=Ee&&!!S.transmissionMap,ae=Ee&&!!S.thicknessMap,Y=!!S.gradientMap,J=!!S.alphaMap,fe=S.alphaTest>0,ce=!!S.alphaHash,Oe=!!S.extensions,Ct=Wr;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ct=n.toneMapping);let jt={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:K,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&k._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&k.instanceColor!==null,instancingMorph:Ae&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Nt,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:Xe,envMap:yt,envMapMode:yt&&te.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:hn,bumpMap:Ye,normalMap:qe,displacementMap:f&&Ie,emissiveMap:dt,normalMapObjectSpace:qe&&S.normalMapType===jw,normalMapTangentSpace:qe&&S.normalMapType===cM,metalnessMap:Re,roughnessMap:R,anisotropy:E,anisotropyMap:le,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:ie,dispersion:j,iridescence:Q,iridescenceMap:ve,iridescenceThicknessMap:Le,sheen:$,sheenColorMap:Ne,sheenRoughnessMap:xe,specularMap:Ke,specularColorMap:ze,specularIntensityMap:ct,transmission:Ee,transmissionMap:L,thicknessMap:ae,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Co&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:ce,combine:S.combine,mapUv:at&&x(S.map.channel),aoMapUv:N&&x(S.aoMap.channel),lightMapUv:hn&&x(S.lightMap.channel),bumpMapUv:Ye&&x(S.bumpMap.channel),normalMapUv:qe&&x(S.normalMap.channel),displacementMapUv:Ie&&x(S.displacementMap.channel),emissiveMapUv:dt&&x(S.emissiveMap.channel),metalnessMapUv:Re&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:le&&x(S.anisotropyMap.channel),clearcoatMapUv:ge&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&x(S.sheenRoughnessMap.channel),specularMapUv:Ke&&x(S.specularMap.channel),specularColorMapUv:ze&&x(S.specularColorMap.channel),specularIntensityMapUv:ct&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:ae&&x(S.thicknessMap.channel),alphaMapUv:J&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(qe||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(at||J),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:me,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&Ve.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:dt&&S.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vi,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function g(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let M=m[S.type],P;if(M){let B=Pi[M];P=Ni.clone(B.uniforms)}else P=S.uniforms;return P}function T(S,M){let P;for(let B=0,k=u.length;B<k;B++){let W=u[B];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new XC(n,M,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){let M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function KC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ZC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function A_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function C_(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,m,x,v){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:x,group:v},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=x,d.group=v),e++,d}function a(h,f,p,m,x,v){let d=o(h,f,p,m,x,v);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,m,x,v){let d=o(h,f,p,m,x,v);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||ZC),i.length>1&&i.sort(f||A_),r.length>1&&r.sort(f||A_)}function u(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $C(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new C_,n.set(i,[o])):r>=s.length?(o=new C_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ye};break;case"SpotLight":t={position:new I,direction:new I,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function JC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var QC=0;function e2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function t2(n){let e=new jC,t=JC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let r=new I,s=new Fe,o=new Fe;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,m=0,x=0,v=0,d=0,g=0,y=0,_=0,T=0,w=0,A=0;c.sort(e2);for(let S=0,M=c.length;S<M;S++){let P=c[S],B=P.color,k=P.intensity,W=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*k,h+=B.g*k,f+=B.b*k;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],k);A++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=q,p++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(B).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[x]=q;let te=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,te.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[x]=te.matrix,P.castShadow){let G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=Z,_++}x++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(B).multiplyScalar(k),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=q,v++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let te=P.shadow,G=t.get(P);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=q,m++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(k),q.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[d]=q,d++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let C=i.hash;(C.directionalLength!==p||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==v||C.hemiLength!==d||C.numDirectionalShadows!==g||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==T||C.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,C.directionalLength=p,C.pointLength=m,C.spotLength=x,C.rectAreaLength=v,C.hemiLength=d,C.numDirectionalShadows=g,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=T,C.numLightProbes=A,i.version=QC++)}function l(c,u){let h=0,f=0,p=0,m=0,x=0,v=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){let y=c[d];if(y.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),h++}else if(y.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),p++}else if(y.isRectAreaLight){let _=i.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),o.identity(),s.copy(y.matrixWorld),s.premultiply(v),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(v),x++}}}return{setup:a,setupView:l,state:i}}function R_(n){let e=new t2(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function n2(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new R_(n),e.set(r,[a])):s>=o.length?(a=new R_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var wm=class extends kn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Em=class extends kn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s2(n,e,t){let i=new fl,r=new be,s=new be,o=new et,a=new wm({depthPacking:$w}),l=new Em,c={},u=t.maxTextureSize,h={[Qn]:an,[an]:Qn,[vi]:vi},f=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:i2,fragmentShader:r2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new qt;m.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(m,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$_;let d=this.type;this.render=function(w,A,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ii),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=d!==Ji&&this.type===Ji,W=d===Ji&&this.type!==Ji;for(let Z=0,q=w.length;Z<q;Z++){let te=w[Z],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let se=G.getFrameExtents();if(r.multiply(se),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||k===!0||W===!0){let de=this.type!==Ji?{minFilter:ln,magFilter:ln}:{};G.map!==null&&G.map.dispose(),G.map=new Yt(r.x,r.y,de),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let he=G.getViewportCount();for(let de=0;de<he;de++){let De=G.getViewport(de);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),B.viewport(o),G.updateMatrices(te,de),i=G.getFrustum(),_(A,C,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===Ji&&g(G,C),G.needsUpdate=!1}d=this.type,v.needsUpdate=!1,n.setRenderTarget(S,M,P)};function g(w,A){let C=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yt(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,C,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,C,p,x,null)}function y(w,A,C,S){let M=null,P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=M.uuid,k=A.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let Z=W[k];Z===void 0&&(Z=M.clone(),W[k]=Z,A.addEventListener("dispose",T)),M=Z}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Ji?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=n.properties.get(M);B.light=C}return M}function _(w,A,C,S,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ji)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let k=e.update(w),W=w.material;if(Array.isArray(W)){let Z=k.groups;for(let q=0,te=Z.length;q<te;q++){let G=Z[q],se=W[G.materialIndex];if(se&&se.visible){let he=y(w,se,S,M);w.onBeforeShadow(n,w,A,C,k,he,G),n.renderBufferDirect(C,null,k,he,w,G),w.onAfterShadow(n,w,A,C,k,he,G)}}}else if(W.visible){let Z=y(w,W,S,M);w.onBeforeShadow(n,w,A,C,k,Z,null),n.renderBufferDirect(C,null,k,Z,w,null),w.onAfterShadow(n,w,A,C,k,Z,null)}}let B=w.children;for(let k=0,W=B.length;k<W;k++)_(B[k],A,C,S,M)}function T(w){w.target.removeEventListener("dispose",T);for(let C in c){let S=c[C],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var o2={[Pp]:Ip,[Lp]:Up,[Np]:Fp,[Lo]:Dp,[Ip]:Pp,[Up]:Lp,[Fp]:Np,[Dp]:Lo};function a2(n,e){function t(){let L=!1,ae=new et,Y=null,J=new et(0,0,0,0);return{setMask:function(fe){Y!==fe&&!L&&(n.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){L=fe},setClear:function(fe,ce,Oe,Ct,jt){jt===!0&&(fe*=Ct,ce*=Ct,Oe*=Ct),ae.set(fe,ce,Oe,Ct),J.equals(ae)===!1&&(n.clearColor(fe,ce,Oe,Ct),J.copy(ae))},reset:function(){L=!1,Y=null,J.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,Y=null,J=null,fe=null;return{setReversed:function(ce){if(ae!==ce){let Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);let Ct=fe;fe=null,this.setClear(Ct)}ae=ce},getReversed:function(){return ae},setTest:function(ce){ce?X(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!L&&(n.depthMask(ce),Y=ce)},setFunc:function(ce){if(ae&&(ce=o2[ce]),J!==ce){switch(ce){case Pp:n.depthFunc(n.NEVER);break;case Ip:n.depthFunc(n.ALWAYS);break;case Lp:n.depthFunc(n.LESS);break;case Lo:n.depthFunc(n.LEQUAL);break;case Np:n.depthFunc(n.EQUAL);break;case Dp:n.depthFunc(n.GEQUAL);break;case Up:n.depthFunc(n.GREATER);break;case Fp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ce}},setLocked:function(ce){L=ce},setClear:function(ce){fe!==ce&&(ae&&(ce=1-ce),n.clearDepth(ce),fe=ce)},reset:function(){L=!1,Y=null,J=null,fe=null,ae=!1}}}function r(){let L=!1,ae=null,Y=null,J=null,fe=null,ce=null,Oe=null,Ct=null,jt=null;return{setTest:function(rt){L||(rt?X(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(rt){ae!==rt&&!L&&(n.stencilMask(rt),ae=rt)},setFunc:function(rt,ri,Di){(Y!==rt||J!==ri||fe!==Di)&&(n.stencilFunc(rt,ri,Di),Y=rt,J=ri,fe=Di)},setOp:function(rt,ri,Di){(ce!==rt||Oe!==ri||Ct!==Di)&&(n.stencilOp(rt,ri,Di),ce=rt,Oe=ri,Ct=Di)},setLocked:function(rt){L=rt},setClear:function(rt){jt!==rt&&(n.clearStencil(rt),jt=rt)},reset:function(){L=!1,ae=null,Y=null,J=null,fe=null,ce=null,Oe=null,Ct=null,jt=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],m=null,x=!1,v=null,d=null,g=null,y=null,_=null,T=null,w=null,A=new ye(0,0,0),C=0,S=!1,M=null,P=null,B=null,k=null,W=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,te=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=te>=2);let se=null,he={},de=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Ze=new et().fromArray(de),K=new et().fromArray(De);function ne(L,ae,Y,J){let fe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(L,ce),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<Y;Oe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ae+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ce}let _e={};_e[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(n.DEPTH_TEST),o.setFunc(Lo),Ye(!1),qe(Dy),X(n.CULL_FACE),N(Ii);function X(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function me(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ae(L,ae){return h[L]!==ae?(n.bindFramebuffer(L,ae),h[L]=ae,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Pe(L,ae){let Y=p,J=!1;if(L){Y=f.get(ae),Y===void 0&&(Y=[],f.set(ae,Y));let fe=L.textures;if(Y.length!==fe.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Oe=fe.length;ce<Oe;ce++)Y[ce]=n.COLOR_ATTACHMENT0+ce;Y.length=fe.length,J=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,J=!0);J&&n.drawBuffers(Y)}function at(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let Xe={[Ts]:n.FUNC_ADD,[Ew]:n.FUNC_SUBTRACT,[Tw]:n.FUNC_REVERSE_SUBTRACT};Xe[bw]=n.MIN,Xe[Aw]=n.MAX;let yt={[Cw]:n.ZERO,[Rw]:n.ONE,[Pw]:n.SRC_COLOR,[Cp]:n.SRC_ALPHA,[Fw]:n.SRC_ALPHA_SATURATE,[Dw]:n.DST_COLOR,[Lw]:n.DST_ALPHA,[Iw]:n.ONE_MINUS_SRC_COLOR,[Rp]:n.ONE_MINUS_SRC_ALPHA,[Uw]:n.ONE_MINUS_DST_COLOR,[Nw]:n.ONE_MINUS_DST_ALPHA,[Ow]:n.CONSTANT_COLOR,[kw]:n.ONE_MINUS_CONSTANT_COLOR,[Bw]:n.CONSTANT_ALPHA,[zw]:n.ONE_MINUS_CONSTANT_ALPHA};function N(L,ae,Y,J,fe,ce,Oe,Ct,jt,rt){if(L===Ii){x===!0&&(me(n.BLEND),x=!1);return}if(x===!1&&(X(n.BLEND),x=!0),L!==ww){if(L!==v||rt!==S){if((d!==Ts||_!==Ts)&&(n.blendEquation(n.FUNC_ADD),d=Ts,_=Ts),rt)switch(L){case Co:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fu:n.blendFunc(n.ONE,n.ONE);break;case Uy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fy:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Co:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fy:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,y=null,T=null,w=null,A.set(0,0,0),C=0,v=L,S=rt}return}fe=fe||ae,ce=ce||Y,Oe=Oe||J,(ae!==d||fe!==_)&&(n.blendEquationSeparate(Xe[ae],Xe[fe]),d=ae,_=fe),(Y!==g||J!==y||ce!==T||Oe!==w)&&(n.blendFuncSeparate(yt[Y],yt[J],yt[ce],yt[Oe]),g=Y,y=J,T=ce,w=Oe),(Ct.equals(A)===!1||jt!==C)&&(n.blendColor(Ct.r,Ct.g,Ct.b,jt),A.copy(Ct),C=jt),v=L,S=!1}function hn(L,ae){L.side===vi?me(n.CULL_FACE):X(n.CULL_FACE);let Y=L.side===an;ae&&(Y=!Y),Ye(Y),L.blending===Co&&L.transparent===!1?N(Ii):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function qe(L){L!==Mw?(X(n.CULL_FACE),L!==P&&(L===Dy?n.cullFace(n.BACK):L===Sw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),P=L}function Ie(L){L!==B&&(q&&n.lineWidth(L),B=L)}function dt(L,ae,Y){L?(X(n.POLYGON_OFFSET_FILL),(k!==ae||W!==Y)&&(n.polygonOffset(ae,Y),k=ae,W=Y)):me(n.POLYGON_OFFSET_FILL)}function Re(L){L?X(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function R(L){L===void 0&&(L=n.TEXTURE0+Z-1),se!==L&&(n.activeTexture(L),se=L)}function E(L,ae,Y){Y===void 0&&(se===null?Y=n.TEXTURE0+Z-1:Y=se);let J=he[Y];J===void 0&&(J={type:void 0,texture:void 0},he[Y]=J),(J.type!==L||J.texture!==ae)&&(se!==Y&&(n.activeTexture(Y),se=Y),n.bindTexture(L,ae||_e[L]),J.type=L,J.texture=ae)}function O(){let L=he[se];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){Ze.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function xe(L){K.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function Ke(L,ae){let Y=c.get(ae);Y===void 0&&(Y=new WeakMap,c.set(ae,Y));let J=Y.get(L);J===void 0&&(J=n.getUniformBlockIndex(ae,L.name),Y.set(L,J))}function ze(L,ae){let J=c.get(ae).get(L);l.get(ae)!==J&&(n.uniformBlockBinding(ae,J,L.__bindingPointIndex),l.set(ae,J))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,he={},h={},f=new WeakMap,p=[],m=null,x=!1,v=null,d=null,g=null,y=null,_=null,T=null,w=null,A=new ye(0,0,0),C=0,S=!1,M=null,P=null,B=null,k=null,W=null,Ze.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:me,bindFramebuffer:Ae,drawBuffers:Pe,useProgram:at,setBlending:N,setMaterial:hn,setFlipSided:Ye,setCullFace:qe,setLineWidth:Ie,setPolygonOffset:dt,setScissorTest:Re,activeTexture:R,bindTexture:E,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ve,texImage3D:Le,updateUBOMapping:Ke,uniformBlockBinding:ze,texStorage2D:$e,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Ee,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Ne,viewport:xe,reset:ct}}function P_(n,e,t,i){let r=l2(i);switch(t){case nM:return n*e;case rM:return n*e;case sM:return n*e*2;case Jm:return n*e/r.components*r.byteLength;case Qm:return n*e/r.components*r.byteLength;case oM:return n*e*2/r.components*r.byteLength;case eg:return n*e*2/r.components*r.byteLength;case iM:return n*e*3/r.components*r.byteLength;case jn:return n*e*4/r.components*r.byteLength;case tg:return n*e*4/r.components*r.byteLength;case Iu:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zp:case Vp:return Math.max(n,16)*Math.max(e,8)/4;case Bp:case Hp:return Math.max(n,8)*Math.max(e,8)/2;case Gp:case Wp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $p:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uu:case om:case am:return Math.ceil(n/4)*Math.ceil(e/4)*16;case aM:case lm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cm:case um:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l2(n){switch(n){case rr:case Q_:return{byteLength:1,components:1};case ul:case eM:case An:return{byteLength:2,components:1};case $m:case jm:return{byteLength:2,components:4};case Cs:case Zm:case yi:return{byteLength:4,components:1};case tM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function c2(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return p?new OffscreenCanvas(R,E):hl("canvas")}function x(R,E,O){let j=1,Q=Re(R);if((Q.width>O||Q.height>O)&&(j=O/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let $=Math.floor(j*Q.width),Ee=Math.floor(j*Q.height);h===void 0&&(h=m($,Ee));let le=E?m($,Ee):h;return le.width=$,le.height=Ee,le.getContext("2d").drawImage(R,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Ee+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function v(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,E,O,j,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===n.RED&&(O===n.FLOAT&&($=n.R32F),O===n.HALF_FLOAT&&($=n.R16F),O===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.R8UI),O===n.UNSIGNED_SHORT&&($=n.R16UI),O===n.UNSIGNED_INT&&($=n.R32UI),O===n.BYTE&&($=n.R8I),O===n.SHORT&&($=n.R16I),O===n.INT&&($=n.R32I)),E===n.RG&&(O===n.FLOAT&&($=n.RG32F),O===n.HALF_FLOAT&&($=n.RG16F),O===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RG8UI),O===n.UNSIGNED_SHORT&&($=n.RG16UI),O===n.UNSIGNED_INT&&($=n.RG32UI),O===n.BYTE&&($=n.RG8I),O===n.SHORT&&($=n.RG16I),O===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGB8UI),O===n.UNSIGNED_SHORT&&($=n.RGB16UI),O===n.UNSIGNED_INT&&($=n.RGB32UI),O===n.BYTE&&($=n.RGB8I),O===n.SHORT&&($=n.RGB16I),O===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGBA8UI),O===n.UNSIGNED_SHORT&&($=n.RGBA16UI),O===n.UNSIGNED_INT&&($=n.RGBA32UI),O===n.BYTE&&($=n.RGBA8I),O===n.SHORT&&($=n.RGBA16I),O===n.INT&&($=n.RGBA32I)),E===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),E===n.RGBA){let Ee=Q?mh:Ve.getTransfer(j);O===n.FLOAT&&($=n.RGBA32F),O===n.HALF_FLOAT&&($=n.RGBA16F),O===n.UNSIGNED_BYTE&&($=Ee===it?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(R,E){let O;return R?E===null||E===Cs||E===Uo?O=n.DEPTH24_STENCIL8:E===yi?O=n.DEPTH32F_STENCIL8:E===ul&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cs||E===Uo?O=n.DEPTH_COMPONENT24:E===yi?O=n.DEPTH_COMPONENT32F:E===ul&&(O=n.DEPTH_COMPONENT16),O}function T(R,E){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){let E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function A(R){let E=R.target;E.removeEventListener("dispose",A),M(E)}function C(R){let E=i.get(R);if(E.__webglInit===void 0)return;let O=R.source,j=f.get(O);if(j){let Q=j[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(j).length===0&&f.delete(O)}i.remove(R)}function S(R){let E=i.get(R);n.deleteTexture(E.__webglTexture);let O=R.source,j=f.get(O);delete j[E.__cacheKey],o.memory.textures--}function M(R){let E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let Q=0;Q<E.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)n.deleteFramebuffer(E.__webglFramebuffer[j]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let O=R.textures;for(let j=0,Q=O.length;j<Q;j++){let $=i.get(O[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(R)}let P=0;function B(){P=0}function k(){let R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function W(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){let O=i.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,R,E);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+E)}function q(R,E){let O=i.get(R);if(R.version>0&&O.__version!==R.version){K(O,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+E)}function te(R,E){let O=i.get(R);if(R.version>0&&O.__version!==R.version){K(O,R,E);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+E)}function G(R,E){let O=i.get(R);if(R.version>0&&O.__version!==R.version){ne(O,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+E)}let se={[ir]:n.REPEAT,[er]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},he={[ln]:n.NEAREST,[Km]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[$n]:n.LINEAR_MIPMAP_LINEAR},de={[Jw]:n.NEVER,[rE]:n.ALWAYS,[Qw]:n.LESS,[uM]:n.LEQUAL,[eE]:n.EQUAL,[iE]:n.GEQUAL,[tE]:n.GREATER,[nE]:n.NOTEQUAL};function De(R,E){if(E.type===yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===sl||E.magFilter===Eo||E.magFilter===$n||E.minFilter===Tn||E.minFilter===sl||E.minFilter===Eo||E.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,se[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,se[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,se[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,he[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,he[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==Eo&&E.minFilter!==$n||E.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(R,E){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));let j=E.source,Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));let $=W(E);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[$].usedTimes++;let Ee=Q[R.__cacheKey];Ee!==void 0&&(Q[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(E)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return O}function K(R,E,O){let j=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=n.TEXTURE_3D);let Q=Ze(R,E),$=E.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+O);let Ee=i.get($);if($.version!==Ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);let le=Ve.getPrimaries(Ve.workingColorSpace),ge=E.colorSpace===Vr?null:Ve.getPrimaries(E.colorSpace),$e=E.colorSpace===Vr||le===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ie=x(E.image,!1,r.maxTextureSize);ie=dt(E,ie);let ve=s.convert(E.format,E.colorSpace),Le=s.convert(E.type),Ne=y(E.internalFormat,ve,Le,E.colorSpace,E.isVideoTexture);De(j,E);let xe,Ke=E.mipmaps,ze=E.isVideoTexture!==!0,ct=Ee.__version===void 0||Q===!0,L=$.dataReady,ae=T(E,ie);if(E.isDepthTexture)Ne=_(E.format===Fo,E.type),ct&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ne,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ve,Le,null));else if(E.isDataTexture)if(Ke.length>0){ze&&ct&&t.texStorage2D(n.TEXTURE_2D,ae,Ne,Ke[0].width,Ke[0].height);for(let Y=0,J=Ke.length;Y<J;Y++)xe=Ke[Y],ze?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,ve,Le,xe.data):t.texImage2D(n.TEXTURE_2D,Y,Ne,xe.width,xe.height,0,ve,Le,xe.data);E.generateMipmaps=!1}else ze?(ct&&t.texStorage2D(n.TEXTURE_2D,ae,Ne,ie.width,ie.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Le,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ie.width,ie.height,0,ve,Le,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ze&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Ne,Ke[0].width,Ke[0].height,ie.depth);for(let Y=0,J=Ke.length;Y<J;Y++)if(xe=Ke[Y],E.format!==jn)if(ve!==null)if(ze){if(L)if(E.layerUpdates.size>0){let fe=P_(xe.width,xe.height,E.format,E.type);for(let ce of E.layerUpdates){let Oe=xe.data.subarray(ce*fe/xe.data.BYTES_PER_ELEMENT,(ce+1)*fe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ce,xe.width,xe.height,1,ve,Oe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ie.depth,ve,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ne,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,ie.depth,ve,Le,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ne,xe.width,xe.height,ie.depth,0,ve,Le,xe.data)}else{ze&&ct&&t.texStorage2D(n.TEXTURE_2D,ae,Ne,Ke[0].width,Ke[0].height);for(let Y=0,J=Ke.length;Y<J;Y++)xe=Ke[Y],E.format!==jn?ve!==null?ze?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,ve,Le,xe.data):t.texImage2D(n.TEXTURE_2D,Y,Ne,xe.width,xe.height,0,ve,Le,xe.data)}else if(E.isDataArrayTexture)if(ze){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Ne,ie.width,ie.height,ie.depth),L)if(E.layerUpdates.size>0){let Y=P_(ie.width,ie.height,E.format,E.type);for(let J of E.layerUpdates){let fe=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ve,Le,fe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Le,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ie.width,ie.height,ie.depth,0,ve,Le,ie.data);else if(E.isData3DTexture)ze?(ct&&t.texStorage3D(n.TEXTURE_3D,ae,Ne,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Le,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ie.width,ie.height,ie.depth,0,ve,Le,ie.data);else if(E.isFramebufferTexture){if(ct)if(ze)t.texStorage2D(n.TEXTURE_2D,ae,Ne,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let fe=0;fe<ae;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ne,Y,J,0,ve,Le,null),Y>>=1,J>>=1}}else if(Ke.length>0){if(ze&&ct){let Y=Re(Ke[0]);t.texStorage2D(n.TEXTURE_2D,ae,Ne,Y.width,Y.height)}for(let Y=0,J=Ke.length;Y<J;Y++)xe=Ke[Y],ze?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ve,Le,xe):t.texImage2D(n.TEXTURE_2D,Y,Ne,ve,Le,xe);E.generateMipmaps=!1}else if(ze){if(ct){let Y=Re(ie);t.texStorage2D(n.TEXTURE_2D,ae,Ne,Y.width,Y.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Le,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ve,Le,ie);v(E)&&d(j),Ee.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ne(R,E,O){if(E.image.length!==6)return;let j=Ze(R,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);let $=i.get(Q);if(Q.version!==$.__version||j===!0){t.activeTexture(n.TEXTURE0+O);let Ee=Ve.getPrimaries(Ve.workingColorSpace),le=E.colorSpace===Vr?null:Ve.getPrimaries(E.colorSpace),ge=E.colorSpace===Vr||Ee===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let $e=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!$e&&!ie?ve[J]=x(E.image[J],!0,r.maxCubemapSize):ve[J]=ie?E.image[J].image:E.image[J],ve[J]=dt(E,ve[J]);let Le=ve[0],Ne=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),Ke=y(E.internalFormat,Ne,xe,E.colorSpace),ze=E.isVideoTexture!==!0,ct=$.__version===void 0||j===!0,L=Q.dataReady,ae=T(E,Le);De(n.TEXTURE_CUBE_MAP,E);let Y;if($e){ze&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ke,Le.width,Le.height);for(let J=0;J<6;J++){Y=ve[J].mipmaps;for(let fe=0;fe<Y.length;fe++){let ce=Y[fe];E.format!==jn?Ne!==null?ze?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ce.width,ce.height,Ne,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Ke,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ce.width,ce.height,Ne,xe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Ke,ce.width,ce.height,0,Ne,xe,ce.data)}}}else{if(Y=E.mipmaps,ze&&ct){Y.length>0&&ae++;let J=Re(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ke,J.width,J.height)}for(let J=0;J<6;J++)if(ie){ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Ne,xe,ve[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,ve[J].width,ve[J].height,0,Ne,xe,ve[J].data);for(let fe=0;fe<Y.length;fe++){let Oe=Y[fe].image[J].image;ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Oe.width,Oe.height,Ne,xe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Ke,Oe.width,Oe.height,0,Ne,xe,Oe.data)}}else{ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,xe,ve[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ke,Ne,xe,ve[J]);for(let fe=0;fe<Y.length;fe++){let ce=Y[fe];ze?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ne,xe,ce.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Ke,Ne,xe,ce.image[J])}}}v(E)&&d(n.TEXTURE_CUBE_MAP),$.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function _e(R,E,O,j,Q,$){let Ee=s.convert(O.format,O.colorSpace),le=s.convert(O.type),ge=y(O.internalFormat,Ee,le,O.colorSpace),$e=i.get(E),ie=i.get(O);if(ie.__renderTarget=E,!$e.__hasExternalTextures){let ve=Math.max(1,E.width>>$),Le=Math.max(1,E.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,ge,ve,Le,E.depth,0,Ee,le,null):t.texImage2D(Q,$,ge,ve,Le,0,Ee,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),qe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,ie.__webglTexture,0,Ye(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,ie.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function X(R,E,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){let j=E.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=_(E.stencilBuffer,Q),Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Ye(E);qe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,$,E.width,E.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,R)}else{let j=E.textures;for(let Q=0;Q<j.length;Q++){let $=j[Q],Ee=s.convert($.format,$.colorSpace),le=s.convert($.type),ge=y($.internalFormat,Ee,le,$.colorSpace),$e=Ye(E);O&&qe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,ge,E.width,E.height):qe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);let Q=j.__webglTexture,$=Ye(E);if(E.depthTexture.format===Ro)qe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Fo)qe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(R){let E=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=j}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");me(E.__webglFramebuffer,R)}else if(O){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=n.createRenderbuffer(),X(E.__webglDepthbuffer[j],R,!1);else{let Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),X(E.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,E,O){let j=i.get(R);E!==void 0&&_e(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ae(R)}function at(R){let E=R.texture,O=i.get(R),j=i.get(E);R.addEventListener("dispose",A);let Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=E.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let ge=0;ge<E.mipmaps.length;ge++)O.__webglFramebuffer[le][ge]=n.createFramebuffer()}else O.__webglFramebuffer[le]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)O.__webglFramebuffer[le]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let le=0,ge=Q.length;le<ge;le++){let $e=i.get(Q[le]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&qe(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){let ge=Q[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let $e=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),ve=y(ge.internalFormat,$e,ie,ge.colorSpace,R.isXRRenderTarget===!0),Le=Ye(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ve,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),X(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),De(n.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)_e(O.__webglFramebuffer[le][ge],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else _e(O.__webglFramebuffer[le],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let le=0,ge=Q.length;le<ge;le++){let $e=Q[le],ie=i.get($e);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),De(n.TEXTURE_2D,$e),_e(O.__webglFramebuffer,R,$e,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),v($e)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),De(le,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)_e(O.__webglFramebuffer[ge],R,E,n.COLOR_ATTACHMENT0,le,ge);else _e(O.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,le,0);v(E)&&d(le),t.unbindTexture()}R.depthBuffer&&Ae(R)}function Xe(R){let E=R.textures;for(let O=0,j=E.length;O<j;O++){let Q=E[O];if(v(Q)){let $=g(R),Ee=i.get(Q).__webglTexture;t.bindTexture($,Ee),d($),t.unbindTexture()}}}let yt=[],N=[];function hn(R){if(R.samples>0){if(qe(R)===!1){let E=R.textures,O=R.width,j=R.height,Q=n.COLOR_BUFFER_BIT,$=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(R),le=E.length>1;if(le)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let $e=i.get(E[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,Q,n.NEAREST),l===!0&&(yt.length=0,N.length=0,yt.push(n.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(yt.push($),N.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let $e=i.get(E[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ye(R){return Math.min(r.maxSamples,R.samples)}function qe(R){let E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ie(R){let E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function dt(R,E){let O=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Nt&&O!==Vr&&(Ve.getTransfer(O)===it?(j!==jn||Q!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function Re(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=Pe,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=qe}function u2(n,e){function t(i,r=Vr){let s,o=Ve.getTransfer(r);if(i===rr)return n.UNSIGNED_BYTE;if(i===$m)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Q_)return n.BYTE;if(i===eM)return n.SHORT;if(i===ul)return n.UNSIGNED_SHORT;if(i===Zm)return n.INT;if(i===Cs)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===nM)return n.ALPHA;if(i===iM)return n.RGB;if(i===jn)return n.RGBA;if(i===rM)return n.LUMINANCE;if(i===sM)return n.LUMINANCE_ALPHA;if(i===Ro)return n.DEPTH_COMPONENT;if(i===Fo)return n.DEPTH_STENCIL;if(i===Jm)return n.RED;if(i===Qm)return n.RED_INTEGER;if(i===oM)return n.RG;if(i===eg)return n.RG_INTEGER;if(i===tg)return n.RGBA_INTEGER;if(i===Iu||i===Lu||i===Nu||i===Du)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Iu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Iu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Du)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bp||i===zp||i===Hp||i===Vp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gp||i===Wp||i===Xp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gp||i===Wp)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yp||i===qp||i===Kp||i===Zp||i===$p||i===jp||i===Jp||i===Qp||i===em||i===tm||i===nm||i===im||i===rm||i===sm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$p)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===em)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tm)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nm)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===im)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rm)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sm)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uu||i===om||i===am)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Uu)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===om)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===am)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===aM||i===lm||i===cm||i===um)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===um)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Tm=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Jn=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},h2={type:"move"},ll=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let v=t.getJointPose(x,i),d=this._getHandJoint(c,x);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},f2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Xt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Lt({vertexShader:f2,fragmentShader:d2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Am=class extends sr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,m=null,x=new bm,v=t.getContextAttributes(),d=null,g=null,y=[],_=[],T=new be,w=null,A=new Ot;A.viewport=new et;let C=new Ot;C.viewport=new et;let S=[A,C],M=new Tm,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=y[K];return ne===void 0&&(ne=new ll,y[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=y[K];return ne===void 0&&(ne=new ll,y[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=y[K];return ne===void 0&&(ne=new ll,y[K]=ne),ne.getHandSpace()};function k(K){let ne=_.indexOf(K.inputSource);if(ne===-1)return;let _e=y[ne];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let K=0;K<y.length;K++){let ne=_[K];ne!==null&&(_[K]=null,y[K].disconnect(ne))}P=null,B=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,g=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){let ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Yt(p.framebufferWidth,p.framebufferHeight,{format:jn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,_e=null,X=null;v.depth&&(X=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?Fo:Ro,_e=v.stencil?Uo:Cs);let me={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Yt(f.textureWidth,f.textureHeight,{format:jn,type:rr,depthTexture:new Yu(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(K){for(let ne=0;ne<K.removed.length;ne++){let _e=K.removed[ne],X=_.indexOf(_e);X>=0&&(_[X]=null,y[X].disconnect(_e))}for(let ne=0;ne<K.added.length;ne++){let _e=K.added[ne],X=_.indexOf(_e);if(X===-1){for(let Ae=0;Ae<y.length;Ae++)if(Ae>=_.length){_.push(_e),X=Ae;break}else if(_[Ae]===null){_[Ae]=_e,X=Ae;break}if(X===-1)break}let me=y[X];me&&me.connect(_e)}}let q=new I,te=new I;function G(K,ne,_e){q.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);let X=q.distanceTo(te),me=ne.projectionMatrix.elements,Ae=_e.projectionMatrix.elements,Pe=me[14]/(me[10]-1),at=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],yt=(me[9]-1)/me[5],N=(me[8]-1)/me[0],hn=(Ae[8]+1)/Ae[0],Ye=Pe*N,qe=Pe*hn,Ie=X/(-N+hn),dt=Ie*-N;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(dt),K.translateZ(Ie),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Re=Pe+Ie,R=at+Ie,E=Ye-dt,O=qe+(X-dt),j=Xe*at/R*Re,Q=yt*at/R*Re;K.projectionMatrix.makePerspective(E,O,j,Q,Re,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,_e=K.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),M.near=C.near=A.near=ne,M.far=C.far=A.far=_e,(P!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,B=M.far),A.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;let X=K.parent,me=M.cameras;se(M,X);for(let Ae=0;Ae<me.length;Ae++)se(me[Ae],X);me.length===2?G(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),he(K,M,X)};function he(K,ne,_e){_e===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Bo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let de=null;function De(K,ne){if(u=ne.getViewerPose(c||o),m=ne,u!==null){let _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let X=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let Ae=0;Ae<_e.length;Ae++){let Pe=_e[Ae],at=null;if(p!==null)at=p.getViewport(Pe);else{let yt=h.getViewSubImage(f,Pe);at=yt.viewport,Ae===0&&(e.setRenderTargetTextures(g,yt.colorTexture,f.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(g))}let Xe=S[Ae];Xe===void 0&&(Xe=new Ot,Xe.layers.enable(Ae),Xe.viewport=new et,S[Ae]=Xe),Xe.matrix.fromArray(Pe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Pe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(at.x,at.y,at.width,at.height),Ae===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(Xe)}let me=r.enabledFeatures;if(me&&me.includes("depth-sensing")){let Ae=h.getDepthInformation(_e[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(e,Ae,r.renderState)}}for(let _e=0;_e<y.length;_e++){let X=_[_e],me=y[_e];X!==null&&me!==void 0&&me.update(X,ne,c||o)}de&&de(K,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}let Ze=new gM;Ze.setAnimationLoop(De),this.setAnimationLoop=function(K){de=K},this.dispose=function(){}}},ws=new ei,p2=new Fe;function m2(n,e){function t(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,mM(n)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,g,y,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(v,d):d.isMeshToonMaterial?(s(v,d),h(v,d)):d.isMeshPhongMaterial?(s(v,d),u(v,d)):d.isMeshStandardMaterial?(s(v,d),f(v,d),d.isMeshPhysicalMaterial&&p(v,d,_)):d.isMeshMatcapMaterial?(s(v,d),m(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),x(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(o(v,d),d.isLineDashedMaterial&&a(v,d)):d.isPointsMaterial?l(v,d,g,y):d.isSpriteMaterial?c(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,t(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===an&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,t(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===an&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,t(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,t(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);let g=e.get(d),y=g.envMap,_=g.envMapRotation;y&&(v.envMap.value=y,ws.copy(_),ws.x*=-1,ws.y*=-1,ws.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),v.envMapRotation.value.setFromMatrix4(p2.makeRotationFromEuler(ws)),v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,v.aoMapTransform))}function o(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform))}function a(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,g,y){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*g,v.scale.value=y*.5,d.map&&(v.map.value=d.map,t(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,t(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,t(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function h(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function f(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function p(v,d,g){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,d){d.matcap&&(v.matcap.value=d.matcap)}function x(v,d){let g=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function g2(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){let _=y.program;i.uniformBlockBinding(g,_)}function c(g,y){let _=r[g.id];_===void 0&&(m(g),_=u(g),r[g.id]=_,g.addEventListener("dispose",v));let T=y.program;i.updateUBOMapping(g,T);let w=e.render.frame;s[g.id]!==w&&(f(g),s[g.id]=w)}function u(g){let y=h();g.__bindingPointIndex=y;let _=n.createBuffer(),T=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let y=r[g.id],_=g.uniforms,T=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,A=_.length;w<A;w++){let C=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,M=C.length;S<M;S++){let P=C[S];if(p(P,w,S,T)===!0){let B=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],W=0;for(let Z=0;Z<k.length;Z++){let q=k[Z],te=x(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,B+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,y,_,T){let w=g.value,A=y+"_"+_;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{let C=T[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function m(g){let y=g.uniforms,_=0,T=16;for(let A=0,C=y.length;A<C;A++){let S=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,P=S.length;M<P;M++){let B=S[M],k=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Z=k.length;W<Z;W++){let q=k[W],te=x(q),G=_%T,se=G%te.boundary,he=G+se;_+=se,he!==0&&T-he<te.storage&&(_+=T-he),B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=te.storage}}}let w=_%T;return w>0&&(_+=T-w),g.__size=_,g.__cache={},this}function x(g){let y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function v(g){let y=g.target;y.removeEventListener("dispose",v);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(let g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var qu=class{constructor(e={}){let{canvas:t=ME(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),x=new Int32Array(4),v=null,d=null,g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=Wr,this.toneMappingExposure=1;let _=this,T=!1,w=0,A=0,C=null,S=-1,M=null,P=new et,B=new et,k=null,W=new ye(0),Z=0,q=t.width,te=t.height,G=1,se=null,he=null,de=new et(0,0,q,te),De=new et(0,0,q,te),Ze=!1,K=new fl,ne=!1,_e=!1,X=new Fe,me=new Fe,Ae=new I,Pe=new et,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function yt(){return C===null?G:1}let N=i;function hn(b,D){return t.getContext(b,D)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),N===null){let D="webgl2";if(N=hn(D,b),N===null)throw hn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ye,qe,Ie,dt,Re,R,E,O,j,Q,$,Ee,le,ge,$e,ie,ve,Le,Ne,xe,Ke,ze,ct,L;function ae(){Ye=new LA(N),Ye.init(),ze=new u2(N,Ye),qe=new bA(N,Ye,e,ze),Ie=new a2(N,Ye),qe.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),dt=new UA(N),Re=new KC,R=new c2(N,Ye,Ie,Re,qe,ze,dt),E=new CA(_),O=new IA(_),j=new VE(N),ct=new EA(N,j),Q=new NA(N,j,dt,ct),$=new OA(N,Q,j,dt),Ne=new FA(N,qe,R),ie=new AA(Re),Ee=new qC(_,E,O,Ye,qe,ct,ie),le=new m2(_,Re),ge=new $C,$e=new n2(Ye),Le=new wA(_,E,O,Ie,$,p,l),ve=new s2(_,$,qe),L=new g2(N,dt,qe,Ie),xe=new TA(N,Ye,dt),Ke=new DA(N,Ye,dt),dt.programs=Ee.programs,_.capabilities=qe,_.extensions=Ye,_.properties=Re,_.renderLists=ge,_.shadowMap=ve,_.state=Ie,_.info=dt}ae();let Y=new Am(_,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(q,te,!1))},this.getSize=function(b){return b.set(q,te)},this.setSize=function(b,D,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,te=D,t.width=Math.floor(b*G),t.height=Math.floor(D*G),z===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(q*G,te*G).floor()},this.setDrawingBufferSize=function(b,D,z){q=b,te=D,G=z,t.width=Math.floor(b*z),t.height=Math.floor(D*z),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(de)},this.setViewport=function(b,D,z,H){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,D,z,H),Ie.viewport(P.copy(de).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(De)},this.setScissor=function(b,D,z,H){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,D,z,H),Ie.scissor(B.copy(De).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(b){Ie.setScissorTest(Ze=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(b=!0,D=!0,z=!0){let H=0;if(b){let U=!1;if(C!==null){let re=C.texture.format;U=re===tg||re===eg||re===Qm}if(U){let re=C.texture.type,ue=re===rr||re===Cs||re===ul||re===Uo||re===$m||re===jm,Me=Le.getClearColor(),Se=Le.getClearAlpha(),Ue=Me.r,ke=Me.g,we=Me.b;ue?(m[0]=Ue,m[1]=ke,m[2]=we,m[3]=Se,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=Ue,x[1]=ke,x[2]=we,x[3]=Se,N.clearBufferiv(N.COLOR,0,x))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),z&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ge.dispose(),$e.dispose(),Re.dispose(),E.dispose(),O.dispose(),$.dispose(),ct.dispose(),L.dispose(),Ee.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Yg),Y.removeEventListener("sessionend",qg),ts.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=dt.autoReset,D=ve.enabled,z=ve.autoUpdate,H=ve.needsUpdate,U=ve.type;ae(),dt.autoReset=b,ve.enabled=D,ve.autoUpdate=z,ve.needsUpdate=H,ve.type=U}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oe(b){let D=b.target;D.removeEventListener("dispose",Oe),Ct(D)}function Ct(b){jt(b),Re.remove(b)}function jt(b){let D=Re.get(b).programs;D!==void 0&&(D.forEach(function(z){Ee.releaseProgram(z)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,z,H,U,re){D===null&&(D=at);let ue=U.isMesh&&U.matrixWorld.determinant()<0,Me=KM(b,D,z,H,U);Ie.setMaterial(H,ue);let Se=z.index,Ue=1;if(H.wireframe===!0){if(Se=Q.getWireframeAttribute(z),Se===void 0)return;Ue=2}let ke=z.drawRange,we=z.attributes.position,Je=ke.start*Ue,ut=(ke.start+ke.count)*Ue;re!==null&&(Je=Math.max(Je,re.start*Ue),ut=Math.min(ut,(re.start+re.count)*Ue)),Se!==null?(Je=Math.max(Je,0),ut=Math.min(ut,Se.count)):we!=null&&(Je=Math.max(Je,0),ut=Math.min(ut,we.count));let pt=ut-Je;if(pt<0||pt===1/0)return;ct.setup(U,H,Me,z,Se);let yn,tt=xe;if(Se!==null&&(yn=j.get(Se),tt=Ke,tt.setIndex(yn)),U.isMesh)H.wireframe===!0?(Ie.setLineWidth(H.wireframeLinewidth*yt()),tt.setMode(N.LINES)):tt.setMode(N.TRIANGLES);else if(U.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Ie.setLineWidth(Te*yt()),U.isLineSegments?tt.setMode(N.LINES):U.isLineLoop?tt.setMode(N.LINE_LOOP):tt.setMode(N.LINE_STRIP)}else U.isPoints?tt.setMode(N.POINTS):U.isSprite&&tt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Te=U._multiDrawStarts,Ui=U._multiDrawCounts,nt=U._multiDrawCount,si=Se?j.get(Se).bytesPerElement:1,Is=Re.get(H).currentProgram.getUniforms();for(let Cn=0;Cn<nt;Cn++)Is.setValue(N,"_gl_DrawID",Cn),tt.render(Te[Cn]/si,Ui[Cn])}else if(U.isInstancedMesh)tt.renderInstances(Je,pt,U.count);else if(z.isInstancedBufferGeometry){let Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ui=Math.min(z.instanceCount,Te);tt.renderInstances(Je,pt,Ui)}else tt.render(Je,pt)};function rt(b,D,z){b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=an,b.needsUpdate=!0,Dl(b,D,z),b.side=Qn,b.needsUpdate=!0,Dl(b,D,z),b.side=vi):Dl(b,D,z)}this.compile=function(b,D,z=null){z===null&&(z=b),d=$e.get(z),d.init(D),y.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),b!==z&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let H=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let re=U.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){let Me=re[ue];rt(Me,z,U),H.add(Me)}else rt(re,z,U),H.add(re)}),y.pop(),d=null,H},this.compileAsync=function(b,D,z=null){let H=this.compile(b,D,z);return new Promise(U=>{function re(){if(H.forEach(function(ue){Re.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){U(b);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ri=null;function Di(b){ri&&ri(b)}function Yg(){ts.stop()}function qg(){ts.start()}let ts=new gM;ts.setAnimationLoop(Di),typeof self!="undefined"&&ts.setContext(self),this.setAnimationLoop=function(b){ri=b,Y.setAnimationLoop(b),b===null?ts.stop():ts.start()},Y.addEventListener("sessionstart",Yg),Y.addEventListener("sessionend",qg),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,C),d=$e.get(b,y.length),d.init(D),y.push(d),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(me),_e=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,_e),v=ge.get(b,g.length),v.init(),g.push(v),Y.enabled===!0&&Y.isPresenting===!0){let re=_.xr.getDepthSensingMesh();re!==null&&Ah(re,D,-1/0,_.sortObjects)}Ah(b,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(se,he),Xe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Xe&&Le.addToRenderList(v,b),this.info.render.frame++,ne===!0&&ie.beginShadows();let z=d.state.shadowsArray;ve.render(z,b,D),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=v.opaque,U=v.transmissive;if(d.setupLights(),D.isArrayCamera){let re=D.cameras;if(U.length>0)for(let ue=0,Me=re.length;ue<Me;ue++){let Se=re[ue];Zg(H,U,b,Se)}Xe&&Le.render(b);for(let ue=0,Me=re.length;ue<Me;ue++){let Se=re[ue];Kg(v,b,Se,Se.viewport)}}else U.length>0&&Zg(H,U,b,D),Xe&&Le.render(b),Kg(v,b,D);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,D),ct.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],ne===!0&&ie.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Ah(b,D,z,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){H&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);let ue=$.update(b),Me=b.material;Me.visible&&v.push(b,ue,Me,z,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){let ue=$.update(b),Me=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){let Se=ue.groups;for(let Ue=0,ke=Se.length;Ue<ke;Ue++){let we=Se[Ue],Je=Me[we.materialIndex];Je&&Je.visible&&v.push(b,ue,Je,z,Pe.z,we)}}else Me.visible&&v.push(b,ue,Me,z,Pe.z,null)}}let re=b.children;for(let ue=0,Me=re.length;ue<Me;ue++)Ah(re[ue],D,z,H)}function Kg(b,D,z,H){let U=b.opaque,re=b.transmissive,ue=b.transparent;d.setupLightsView(z),ne===!0&&ie.setGlobalState(_.clippingPlanes,z),H&&Ie.viewport(P.copy(H)),U.length>0&&Nl(U,D,z),re.length>0&&Nl(re,D,z),ue.length>0&&Nl(ue,D,z),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Zg(b,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Yt(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?An:rr,minFilter:$n,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let re=d.state.transmissionRenderTarget[H.id],ue=H.viewport||P;re.setSize(ue.z,ue.w);let Me=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(W),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&Le.render(z);let Se=_.toneMapping;_.toneMapping=Wr;let Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),ne===!0&&ie.setGlobalState(_.clippingPlanes,H),Nl(b,z,H),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let we=0,Je=D.length;we<Je;we++){let ut=D[we],pt=ut.object,yn=ut.geometry,tt=ut.material,Te=ut.group;if(tt.side===vi&&pt.layers.test(H.layers)){let Ui=tt.side;tt.side=an,tt.needsUpdate=!0,$g(pt,z,H,yn,tt,Te),tt.side=Ui,tt.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}_.setRenderTarget(Me),_.setClearColor(W,Z),Ue!==void 0&&(H.viewport=Ue),_.toneMapping=Se}function Nl(b,D,z){let H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,re=b.length;U<re;U++){let ue=b[U],Me=ue.object,Se=ue.geometry,Ue=H===null?ue.material:H,ke=ue.group;Me.layers.test(z.layers)&&$g(Me,D,z,Se,Ue,ke)}}function $g(b,D,z,H,U,re){b.onBeforeRender(_,D,z,H,U,re),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,D,z,H,b,re),U.transparent===!0&&U.side===vi&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,_.renderBufferDirect(z,D,H,U,b,re),U.side=Qn,U.needsUpdate=!0,_.renderBufferDirect(z,D,H,U,b,re),U.side=vi):_.renderBufferDirect(z,D,H,U,b,re),b.onAfterRender(_,D,z,H,U,re)}function Dl(b,D,z){D.isScene!==!0&&(D=at);let H=Re.get(b),U=d.state.lights,re=d.state.shadowsArray,ue=U.state.version,Me=Ee.getParameters(b,U.state,re,D,z),Se=Ee.getProgramCacheKey(Me),Ue=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?O:E).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",Oe),Ue=new Map,H.programs=Ue);let ke=Ue.get(Se);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===ue)return Jg(b,Me),ke}else Me.uniforms=Ee.getUniforms(b),b.onBeforeCompile(Me,_),ke=Ee.acquireProgram(Me,Se),Ue.set(Se,ke),H.uniforms=Me.uniforms;let we=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=ie.uniform),Jg(b,Me),H.needsLights=$M(b),H.lightsStateVersion=ue,H.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function jg(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Io.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Jg(b,D){let z=Re.get(b);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function KM(b,D,z,H,U){D.isScene!==!0&&(D=at),R.resetTextureUnits();let re=D.fog,ue=H.isMeshStandardMaterial?D.environment:null,Me=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Nt,Se=(H.isMeshStandardMaterial?O:E).get(H.envMap||ue),Ue=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!z.morphAttributes.position,Je=!!z.morphAttributes.normal,ut=!!z.morphAttributes.color,pt=Wr;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=_.toneMapping);let yn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=yn!==void 0?yn.length:0,Te=Re.get(H),Ui=d.state.lights;if(ne===!0&&(_e===!0||b!==M)){let Hn=b===M&&H.id===S;ie.setState(H,b,Hn)}let nt=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ui.state.version||Te.outputColorSpace!==Me||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==Se||H.fog===!0&&Te.fog!==re||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==ke||Te.morphTargets!==we||Te.morphNormals!==Je||Te.morphColors!==ut||Te.toneMapping!==pt||Te.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Te.__version=H.version);let si=Te.currentProgram;nt===!0&&(si=Dl(H,D,U));let Is=!1,Cn=!1,ta=!1,mt=si.getUniforms(),wi=Te.uniforms;if(Ie.useProgram(si.program)&&(Is=!0,Cn=!0,ta=!0),H.id!==S&&(S=H.id,Cn=!0),Is||M!==b){Ie.buffers.depth.getReversed()?(X.copy(b.projectionMatrix),wE(X),EE(X),mt.setValue(N,"projectionMatrix",X)):mt.setValue(N,"projectionMatrix",b.projectionMatrix),mt.setValue(N,"viewMatrix",b.matrixWorldInverse);let dr=mt.map.cameraPosition;dr!==void 0&&dr.setValue(N,Ae.setFromMatrixPosition(b.matrixWorld)),qe.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Cn=!0,ta=!0)}if(U.isSkinnedMesh){mt.setOptional(N,U,"bindMatrix"),mt.setOptional(N,U,"bindMatrixInverse");let Hn=U.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),mt.setValue(N,"boneTexture",Hn.boneTexture,R))}U.isBatchedMesh&&(mt.setOptional(N,U,"batchingTexture"),mt.setValue(N,"batchingTexture",U._matricesTexture,R),mt.setOptional(N,U,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",U._indirectTexture,R),mt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",U._colorsTexture,R));let na=z.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&Ne.update(U,z,si),(Cn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,mt.setValue(N,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(wi.envMap.value=Se,wi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(wi.envMapIntensity.value=D.environmentIntensity),Cn&&(mt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&ZM(wi,ta),re&&H.fog===!0&&le.refreshFogUniforms(wi,re),le.refreshMaterialUniforms(wi,H,G,te,d.state.transmissionRenderTarget[b.id]),Io.upload(N,jg(Te),wi,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Io.upload(N,jg(Te),wi,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(N,"center",U.center),mt.setValue(N,"modelViewMatrix",U.modelViewMatrix),mt.setValue(N,"normalMatrix",U.normalMatrix),mt.setValue(N,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Hn=H.uniformsGroups;for(let dr=0,pr=Hn.length;dr<pr;dr++){let Qg=Hn[dr];L.update(Qg,si),L.bind(Qg,si)}}return si}function ZM(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function $M(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,D,z){Re.get(b.texture).__webglTexture=D,Re.get(b.depthTexture).__webglTexture=z;let H=Re.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let z=Re.get(b);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,z=0){C=b,w=D,A=z;let H=!0,U=null,re=!1,ue=!1;if(b){let Se=Re.get(b);if(Se.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Se.__hasExternalTextures)R.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let we=b.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Re.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}let Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ue=!0);let ke=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[D])?U=ke[D][z]:U=ke[D],re=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?U=Re.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[z]:U=ke,P.copy(b.viewport),B.copy(b.scissor),k=b.scissorTest}else P.copy(de).multiplyScalar(G).floor(),B.copy(De).multiplyScalar(G).floor(),k=Ze;if(Ie.bindFramebuffer(N.FRAMEBUFFER,U)&&H&&Ie.drawBuffers(b,U),Ie.viewport(P),Ie.scissor(B),Ie.setScissorTest(k),re){let Se=Re.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Se.__webglTexture,z)}else if(ue){let Se=Re.get(b.texture),Ue=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,z||0,Ue)}S=-1},this.readRenderTargetPixels=function(b,D,z,H,U,re,ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){Ie.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Se=b.texture,Ue=Se.format,ke=Se.type;if(!qe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&z>=0&&z<=b.height-U&&N.readPixels(D,z,H,U,ze.convert(Ue),ze.convert(ke),re)}finally{let Se=C!==null?Re.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(b,D,z,H,U,re,ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){let Se=b.texture,Ue=Se.format,ke=Se.type;if(!qe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-H&&z>=0&&z<=b.height-U){Ie.bindFramebuffer(N.FRAMEBUFFER,Me);let we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(D,z,H,U,ze.convert(Ue),ze.convert(ke),0);let Je=C!==null?Re.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Je);let ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await SE(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(we),N.deleteSync(ut),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,z=0){b.isTexture!==!0&&(il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let H=Math.pow(2,-z),U=Math.floor(b.image.width*H),re=Math.floor(b.image.height*H),ue=D!==null?D.x:0,Me=D!==null?D.y:0;R.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ue,Me,U,re),Ie.unbindTexture()},this.copyTextureToTexture=function(b,D,z=null,H=null,U=0){b.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let re,ue,Me,Se,Ue,ke,we,Je,ut,pt=b.isCompressedTexture?b.mipmaps[U]:b.image;z!==null?(re=z.max.x-z.min.x,ue=z.max.y-z.min.y,Me=z.isBox3?z.max.z-z.min.z:1,Se=z.min.x,Ue=z.min.y,ke=z.isBox3?z.min.z:0):(re=pt.width,ue=pt.height,Me=pt.depth||1,Se=0,Ue=0,ke=0),H!==null?(we=H.x,Je=H.y,ut=H.z):(we=0,Je=0,ut=0);let yn=ze.convert(D.format),tt=ze.convert(D.type),Te;D.isData3DTexture?(R.setTexture3D(D,0),Te=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),Te=N.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),Te=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Ui=N.getParameter(N.UNPACK_ROW_LENGTH),nt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),si=N.getParameter(N.UNPACK_SKIP_PIXELS),Is=N.getParameter(N.UNPACK_SKIP_ROWS),Cn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);let ta=b.isDataArrayTexture||b.isData3DTexture,mt=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let wi=Re.get(b),na=Re.get(D),Hn=Re.get(wi.__renderTarget),dr=Re.get(na.__renderTarget);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,Hn.__webglFramebuffer),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let pr=0;pr<Me;pr++)ta&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(b).__webglTexture,U,ke+pr),b.isDepthTexture?(mt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(D).__webglTexture,U,ut+pr),N.blitFramebuffer(Se,Ue,re,ue,we,Je,re,ue,N.DEPTH_BUFFER_BIT,N.NEAREST)):mt?N.copyTexSubImage3D(Te,U,we,Je,ut+pr,Se,Ue,re,ue):N.copyTexSubImage2D(Te,U,we,Je,ut+pr,Se,Ue,re,ue);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Te,U,we,Je,ut,re,ue,Me,yn,tt,pt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,U,we,Je,ut,re,ue,Me,yn,pt.data):N.texSubImage3D(Te,U,we,Je,ut,re,ue,Me,yn,tt,pt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,we,Je,re,ue,yn,tt,pt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,we,Je,pt.width,pt.height,yn,pt.data):N.texSubImage2D(N.TEXTURE_2D,U,we,Je,re,ue,yn,tt,pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ui),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,si),N.pixelStorei(N.UNPACK_SKIP_ROWS,Is),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Cn),U===0&&D.generateMipmaps&&N.generateMipmap(Te),Ie.unbindTexture()},this.copyTextureToTexture3D=function(b,D,z=null,H=null,U=0){return b.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0),il('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,z,H,U)},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ie.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Ie.reset(),ct.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}},Ku=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Go=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},dl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hm,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new I,pl=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var I_=new I,L_=new et,N_=new et,v2=new I,D_=new Fe,Eu=new I,wp=new On,U_=new Fe,Ep=new zo,Zu=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oy,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Eu),this.boundingBox.expandByPoint(Eu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Eu),this.boundingSphere.expandByPoint(Eu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wp.copy(this.boundingSphere),wp.applyMatrix4(r),e.ray.intersectsSphere(wp)!==!1&&(U_.copy(r).invert(),Ep.copy(e.ray).applyMatrix4(U_),!(this.boundingBox!==null&&Ep.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ep)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Oy?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ww?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;L_.fromBufferAttribute(r.attributes.skinIndex,e),N_.fromBufferAttribute(r.attributes.skinWeight,e),I_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=N_.getComponent(s);if(o!==0){let a=L_.getComponent(s);D_.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(v2.copy(I_).applyMatrix4(D_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ml=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},$u=class extends Xt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=ln,u=ln,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},F_=new Fe,x2=new Fe,ju=class n{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:x2;F_.multiplyMatrices(a,t[s]),F_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new $u(t,e,e,jn,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ml),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},or=class extends Pt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wo=new Fe,O_=new Fe,Tu=[],k_=new bn,y2=new Fe,Qa=new xt,el=new On,Wo=class extends xt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,y2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wo),k_.copy(e.boundingBox).applyMatrix4(wo),this.boundingBox.union(k_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wo),el.copy(e.boundingSphere).applyMatrix4(wo),this.boundingSphere.union(el)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Qa.geometry=this.geometry,Qa.material=this.material,Qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(i),e.ray.intersectsSphere(el)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,wo),O_.multiplyMatrices(i,wo),Qa.matrixWorld=O_,Qa.raycast(e,Tu);for(let o=0,a=Tu.length;o<a;o++){let l=Tu[o];l.instanceId=s,l.object=this,t.push(l)}Tu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new $u(new Float32Array(r*this.count),r,this.count,Jm,yi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gl=class extends kn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ju=new I,Qu=new I,B_=new Fe,tl=new zo,bu=new On,Tp=new I,z_=new I,Xo=class extends At{constructor(e=new qt,t=new gl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ju.fromBufferAttribute(t,r-1),Qu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ju.distanceTo(Qu);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bu.copy(i.boundingSphere),bu.applyMatrix4(r),bu.radius+=s,e.ray.intersectsSphere(bu)===!1)return;B_.copy(r).invert(),tl.copy(e.ray).applyMatrix4(B_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,v=m-1;x<v;x+=c){let d=u.getX(x),g=u.getX(x+1),y=Au(this,e,tl,l,d,g);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(m-1),v=u.getX(p),d=Au(this,e,tl,l,x,v);d&&t.push(d)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,v=m-1;x<v;x+=c){let d=Au(this,e,tl,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=Au(this,e,tl,l,m-1,p);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Au(n,e,t,i,r,s){let o=n.geometry.attributes.position;if(Ju.fromBufferAttribute(o,r),Qu.fromBufferAttribute(o,s),t.distanceSqToSegment(Ju,Qu,Tp,z_)>i)return;Tp.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Tp);if(!(l<e.near||l>e.far))return{distance:l,point:z_.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var H_=new I,V_=new I,eh=class extends Xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)H_.fromBufferAttribute(t,r),V_.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+H_.distanceTo(V_);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},th=class extends Xo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vl=class extends kn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},G_=new Fe,Cm=new zo,Cu=new On,Ru=new I,nh=class extends At{constructor(e=new qt,t=new vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cu.copy(i.boundingSphere),Cu.applyMatrix4(r),Cu.radius+=s,e.ray.intersectsSphere(Cu)===!1)return;G_.copy(r).invert(),Cm.copy(e.ray).applyMatrix4(G_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,x=p;m<x;m++){let v=c.getX(m);Ru.fromBufferAttribute(h,v),W_(Ru,v,l,r,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=f,x=p;m<x;m++)Ru.fromBufferAttribute(h,m),W_(Ru,m,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function W_(n,e,t,i,r,s,o){let a=Cm.distanceSqToPoint(n);if(a<t){let l=new I;Cm.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xl=class extends Xt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ih=class n extends qt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],p=[],m=0,x=[],v=i/2,d=0;g(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(p,2));function g(){let _=new I,T=new I,w=0,A=(t-e)/i;for(let C=0;C<=s;C++){let S=[],M=C/s,P=M*(t-e)+e;for(let B=0;B<=r;B++){let k=B/r,W=k*l+a,Z=Math.sin(W),q=Math.cos(W);T.x=P*Z,T.y=-M*i+v,T.z=P*q,h.push(T.x,T.y,T.z),_.set(Z,A,q).normalize(),f.push(_.x,_.y,_.z),p.push(k,1-M),S.push(m++)}x.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){let M=x[S][C],P=x[S+1][C],B=x[S+1][C+1],k=x[S][C+1];(e>0||S!==0)&&(u.push(M,P,k),w+=3),(t>0||S!==s-1)&&(u.push(P,B,k),w+=3)}c.addGroup(d,w,0),d+=w}function y(_){let T=m,w=new be,A=new I,C=0,S=_===!0?e:t,M=_===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,v*M,0),f.push(0,M,0),p.push(.5,.5),m++;let P=m;for(let B=0;B<=r;B++){let W=B/r*l+a,Z=Math.cos(W),q=Math.sin(W);A.x=S*q,A.y=v*M,A.z=S*Z,h.push(A.x,A.y,A.z),f.push(0,M,0),w.x=Z*.5+.5,w.y=q*.5*M+.5,p.push(w.x,w.y),m++}for(let B=0;B<r;B++){let k=T+B,W=P+B;_===!0?u.push(W,W+1,k):u.push(W+1,W,k),C+=3}c.addGroup(d,C,_===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Rm=class n extends qt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(s.slice(),3)),this.setAttribute("uv",new St(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){let y=new I,_=new I,T=new I;for(let w=0;w<t.length;w+=3)p(t[w+0],y),p(t[w+1],_),p(t[w+2],T),l(y,_,T,g)}function l(g,y,_,T){let w=T+1,A=[];for(let C=0;C<=w;C++){A[C]=[];let S=g.clone().lerp(_,C/w),M=y.clone().lerp(_,C/w),P=w-C;for(let B=0;B<=P;B++)B===0&&C===w?A[C][B]=S:A[C][B]=S.clone().lerp(M,B/P)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){let M=Math.floor(S/2);S%2===0?(f(A[C][M+1]),f(A[C+1][M]),f(A[C][M])):(f(A[C][M+1]),f(A[C+1][M+1]),f(A[C+1][M]))}}function c(g){let y=new I;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(g),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function u(){let g=new I;for(let y=0;y<s.length;y+=3){g.x=s[y+0],g.y=s[y+1],g.z=s[y+2];let _=v(g)/2/Math.PI+.5,T=d(g)/Math.PI+.5;o.push(_,1-T)}m(),h()}function h(){for(let g=0;g<o.length;g+=6){let y=o[g+0],_=o[g+2],T=o[g+4],w=Math.max(y,_,T),A=Math.min(y,_,T);w>.9&&A<.1&&(y<.2&&(o[g+0]+=1),_<.2&&(o[g+2]+=1),T<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,y){let _=g*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){let g=new I,y=new I,_=new I,T=new I,w=new be,A=new be,C=new be;for(let S=0,M=0;S<s.length;S+=9,M+=6){g.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),w.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),T.copy(g).add(y).add(_).divideScalar(3);let P=v(T);x(w,M+0,g,P),x(A,M+2,y,P),x(C,M+4,_,P)}}function x(g,y,_,T){T<0&&g.x===1&&(o[y]=g.x-1),_.x===0&&_.z===0&&(o[y]=T/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var rh=class n extends Rm{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var yl=class n extends qt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,f=new I,p=[],m=[],x=[],v=[];for(let d=0;d<=i;d++){let g=[],y=d/i,_=0;d===0&&o===0?_=.5/t:d===i&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let w=T/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),v.push(w+_,1-y),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<t;g++){let y=u[d][g+1],_=u[d][g],T=u[d+1][g],w=u[d+1][g+1];(d!==0||o>0)&&p.push(y,_,w),(d!==i-1||l<Math.PI)&&p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new St(m,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sh=class extends Lt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Bn=class extends kn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cM,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends Bn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function M2(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function X_(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function MM(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var Yr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pm=class extends Yr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:To,endingEnd:To}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bo:s=e,a=2*t-i;break;case Ou:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case bo:o=e,l=2*i-t;break;case Ou:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-t)/(r-t),x=m*m,v=x*m,d=-f*v+2*f*x-f*m,g=(1+f)*v+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-p)*v+(1.5+p)*x+.5*m,_=p*v-p*x;for(let T=0;T!==a;++T)s[T]=d*o[u+T]+g*o[c+T]+y*o[l+T]+_*o[h+T];return s}},oh=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Im=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pu(t,this.TimeBufferType),this.values=Pu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pu(e.times,Array),values:Pu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Im(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case $d:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return $d}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&_2(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===$d,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,f=h-i,p=h+i;for(let m=0;m!==i;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=ko;var qr=class extends ti{constructor(e,t,i){super(e,t,i)}};qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Oo;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ah=class extends ti{};ah.prototype.ValueTypeName="color";var ar=class extends ti{};ar.prototype.ValueTypeName="number";var Lm=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)cn.slerpFlat(s,0,o,c-a,o,c,l);return s}},lr=class extends ti{InterpolantFactoryMethodLinear(e){return new Lm(this.times,this.values,this.getValueSize(),e)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends ti{constructor(e,t,i){super(e,t,i)}};Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Oo;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var cr=class extends ti{};cr.prototype.ValueTypeName="vector";var Yo=class{constructor(e="",t=-1,i=[],r=ng){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(w2(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ti.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=M2(l);l=X_(l,1,u),c=X_(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ar(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,f,p,m,x){if(p.length!==0){let v=[],d=[];MM(p,v,d,m),v.length!==0&&x.push(new h(f,v,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let x=0;x<f[m].morphTargets.length;x++)p[f[m].morphTargets[x]]=-1;for(let x in p){let v=[],d=[];for(let g=0;g!==f[m].morphTargets.length;++g){let y=f[m];v.push(y.time),d.push(y.morphTarget===x?1:0)}r.push(new ar(".morphTargetInfluence["+x+"]",v,d))}l=p.length*o}else{let p=".bones["+t[h].name+"]";i(cr,p+".position",f,"pos",r),i(lr,p+".quaternion",f,"rot",r),i(cr,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function S2(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ar;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return ah;case"quaternion":return lr;case"bool":case"boolean":return qr;case"string":return Kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function w2(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=S2(n.type);if(n.times===void 0){let t=[],i=[];MM(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Gr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Nm=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}},E2=new Nm,ur=class{constructor(e){this.manager=e!==void 0?e:E2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ur.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Dm=class extends Error{constructor(e,t){super(e),this.response=t}},_l=class extends ur{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Gr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:i,onError:r});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=ji[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0,x=0,v=new ReadableStream({start(d){g();function g(){h.read().then(({done:y,value:_})=>{if(y)d.close();else{x+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:p});for(let w=0,A=u.length;w<A;w++){let C=u[w];C.onProgress&&C.onProgress(T)}d.enqueue(_),g()}},y=>{d.error(y)})}}});return new Response(v)}else throw new Dm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Gr.add(e,c);let u=ji[e];delete ji[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=ji[e];if(u===void 0)throw this.manager.itemError(e),c;delete ji[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Um=class extends ur{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Gr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=hl("img");function l(){u(),Gr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var lh=class extends ur{constructor(e){super(e)}load(e,t,i,r){let s=new Xt,o=new Um(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},qo=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ch=class extends qo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bp=new Fe,Y_=new I,q_=new I,Ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Y_.setFromMatrixPosition(e.matrixWorld),t.position.copy(Y_),q_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(q_),t.updateMatrixWorld(),bp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fm=class extends Ml{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Bo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ko=class extends qo{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Fm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},K_=new Fe,nl=new I,Ap=new I,Om=class extends Ml{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),nl.setFromMatrixPosition(e.matrixWorld),i.position.copy(nl),Ap.copy(i.position),Ap.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ap),i.updateMatrixWorld(),r.makeTranslation(-nl.x,-nl.y,-nl.z),K_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(K_)}},Zo=class extends qo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Om}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},km=class extends Ml{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$o=class extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new km}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zr=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var uh=class extends ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Gr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Gr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Gr.add(e,l),s.manager.itemStart(e)}};var hh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Z_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Z_();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Z_(){return performance.now()}var Bm=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){cn.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;cn.multiplyQuaternionsFlat(e,o,e,t,e,i),cn.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},sg="\\[\\]\\.:\\/",T2=new RegExp("["+sg+"]","g"),og="[^"+sg+"]",b2="[^"+sg.replace("\\.","")+"]",A2=/((?:WC+[\/:])*)/.source.replace("WC",og),C2=/(WCOD+)?/.source.replace("WCOD",b2),R2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",og),P2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",og),I2=new RegExp("^"+A2+C2+R2+P2+"$"),L2=["material","materials","bones","map"],zm=class{constructor(e,t,i){let r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T2,"")}static parseTrackName(e){let t=I2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);L2.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=zm;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hm=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:To,endingEnd:To};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yw,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Kw:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case ng:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===qw;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Xw){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=bo,r.endingEnd=bo):(e?r.endingStart=this.zeroSlopeAtStart?bo:To:r.endingStart=Ou,t?r.endingEnd=this.zeroSlopeAtEnd?bo:To:r.endingEnd=Ou)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}},N2=new Float32Array(1),fh=class extends sr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let f=r[h],p=f.name,m=u[p];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;m=new Bm(lt.create(i,p,x),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new oh(new Float32Array(2),new Float32Array(2),1,N2),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?Yo.findByName(r,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=ng),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Hm(this,o,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?Yo.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function El(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new qt,c=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let m=0;m<p.count;++m)h.push(p.getX(m)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(let u in s){let h=SM(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);let m=SM(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function SM(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new Pt(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,p=u.count;f<p;f++)for(let m=0;m<t;m++){let x=u.getComponent(f,m);a.setComponent(f+h,m,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function ag(n,e){if(e===lM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wl||e===ph){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===wl)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var vh=class extends ur{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pg(t)}),this.register(function(t){return new mg(t)}),this.register(function(t){return new Eg(t)}),this.register(function(t){return new Tg(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new xg(t)}),this.register(function(t){return new yg(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new dg(t)}),this.register(function(t){return new Mg(t)}),this.register(function(t){return new gg(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new Sg(t)}),this.register(function(t){return new hg(t)}),this.register(function(t){return new Ag(t)}),this.register(function(t){return new Cg(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Zr.extractUrlBase(e);o=Zr.resolveURL(c,this.path)}else o=Zr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new _l(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===AM){try{o[We.KHR_BINARY_GLTF]=new Rg(e)}catch(h){r&&r(h);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Fg(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:o[h]=new fg;break;case We.KHR_DRACO_MESH_COMPRESSION:o[h]=new Pg(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[h]=new Ig;break;case We.KHR_MESH_QUANTIZATION:o[h]=new Lg;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function U2(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hg=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Nt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $o(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zo(u),c.distance=h;break;case"spot":c=new Ko(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},fg=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,i){let r=[];e.color=new ye(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Mt))}return Promise.all(r)}},dg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},pg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(s)}},mg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},gg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},vg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Mt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},xg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},yg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],Nt),Promise.all(s)}},_g=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Mg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Mt)),Promise.all(s)}},Sg=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},wg=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Eg=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Tg=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},bg=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ag=class{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}},Cg=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let c of r.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let m of h){let x=new Fe,v=new I,d=new cn,g=new I(1,1,1),y=new Wo(m.geometry,m.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&g.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(v,d,g));for(let _ in l)if(_==="_COLOR_0"){let T=l[_];y.instanceColor=new or(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);At.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},AM="glTF",Tl=12,wM={JSON:1313821514,BIN:5130562},Rg=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Tl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==AM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Tl,s=new DataView(e,Tl),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===wM.JSON){let c=new Uint8Array(e,Tl+o,a);this.content=i.decode(c)}else if(l===wM.BIN){let c=Tl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pg=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Dg[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Dg[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],p=Jo[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(p){for(let m in p.attributes){let x=p.attributes[m],v=l[m];v!==void 0&&(x.normalized=v)}h(p)},a,c,Nt,f)})})}},Ig=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Lg=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},xh=class extends Yr{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,p=f*h,m=e*c,x=m-c,v=-2*p+3*f,d=p-f,g=1-v,y=d-f+h;for(let _=0;_!==a;_++){let T=o[x+_+a],w=o[x+_+l]*u,A=o[m+_+a],C=o[m+_]*u;s[_]=g*T+y*w+v*A+d*C}return s}},F2=new cn,Ng=class extends xh{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return F2.fromArray(s).normalize().toArray(s),s}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},EM={9728:ln,9729:Tn,9984:Km,9985:sl,9986:Eo,9987:$n},TM={33071:er,33648:cl,10497:ir},lg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dg={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},O2={CUBICSPLINE:void 0,LINEAR:ko,STEP:Oo},cg={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function k2(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Bn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),n.DefaultMaterial}function Rs(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function hr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function B2(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function z2(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function H2(n){let e,t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ug(t.attributes):e=n.indices+":"+ug(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+ug(n.targets[i]);return e}function ug(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ug(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function V2(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var G2=new Fe,Fg=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new U2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||i&&r<17||s&&o<98?this.textureLoader=new lh(this.options.manager):this.textureLoader=new uh(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _l(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Rs(s,a,r),hr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(Zr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=lg[r.type],a=Jo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Pt(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=lg[r.type],c=Jo[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,x,v;if(p&&p!==h){let d=Math.floor(f/p),g="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count,y=t.cache.get(g);y||(x=new c(a,d*p,r.count*p/u),y=new dl(x,p/u),t.cache.add(g,y)),v=new pl(y,l,f%p/u,m)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),v=new Pt(x,l,m);if(r.sparse!==void 0){let d=lg.SCALAR,g=Jo[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,T=new g(o[1],y,r.sparse.count*d),w=new c(o[2],_,r.sparse.count*l);a!==null&&(v=new Pt(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let A=0,C=T.length;A<C;A++){let S=T[A];if(v.setX(S,w[A*l]),l>=2&&v.setY(S,w[A*l+1]),l>=3&&v.setZ(S,w[A*l+2]),l>=4&&v.setW(S,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=m}return v})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=EM[f.magFilter]||Tn,u.minFilter=EM[f.minFilter]||$n,u.wrapS=TM[f.wrapS]||ir,u.wrapT=TM[f.wrapT]||ir,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ln&&u.minFilter!==Tn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let v=new Xt(x);v.needsUpdate=!0,f(v)}),t.load(Zr.resolveURL(h,s.path),m,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),hr(h,o),h.userData.mimeType=o.mimeType||V2(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new vl,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new gl,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Bn}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){let h=r[We.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Nt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=vi);let u=s.alphaMode||cg.OPAQUE;if(u===cg.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===cg.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==un&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==un&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==un){let h=s.emissiveFactor;a.emissive=new ye().setRGB(h[0],h[1],h[2],Nt)}return s.emissiveTexture!==void 0&&o!==un&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),hr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Rs(r,h,s),h})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bM(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=H2(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=bM(new qt,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?k2(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,m=u.length;p<m;p++){let x=u[p],v=o[p],d,g=c[p];if(v.mode===ni.TRIANGLES||v.mode===ni.TRIANGLE_STRIP||v.mode===ni.TRIANGLE_FAN||v.mode===void 0)d=s.isSkinnedMesh===!0?new Zu(x,g):new xt(x,g),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),v.mode===ni.TRIANGLE_STRIP?d.geometry=ag(d.geometry,ph):v.mode===ni.TRIANGLE_FAN&&(d.geometry=ag(d.geometry,wl));else if(v.mode===ni.LINES)d=new eh(x,g);else if(v.mode===ni.LINE_STRIP)d=new Xo(x,g);else if(v.mode===ni.LINE_LOOP)d=new th(x,g);else if(v.mode===ni.POINTS)d=new nh(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(d.geometry.morphAttributes).length>0&&z2(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),hr(d,s),v.extensions&&Rs(r,d,v),t.assignFinalMaterial(d),h.push(d)}for(let p=0,m=h.length;p<m;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Rs(r,h[0],s),h[0];let f=new Jn;s.extensions&&Rs(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,m=h.length;p<m;p++)f.add(h[p]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ot(fM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Li(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),hr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Fe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ju(a,l)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let p=r.channels[h],m=r.samplers[p.sampler],x=p.target,v=x.node,d=r.parameters!==void 0?r.parameters[m.input]:m.input,g=r.parameters!==void 0?r.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",v)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",g)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],m=h[2],x=h[3],v=h[4],d=[];for(let g=0,y=f.length;g<y;g++){let _=f[g],T=p[g],w=m[g],A=x[g],C=v[g];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=i._createAnimationTracks(_,T,w,A,C);if(S)for(let M=0;M<S.length;M++)d.push(S[M])}return new Yo(s,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,G2)});for(let p=0,m=h.length;p<m;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ml:c.length>1?u=new Jn:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),hr(u,s),s.extensions&&Rs(i,u,s),s.matrix!==void 0){let h=new Fe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new Jn;i.name&&(s.name=r.createUniqueName(i.name)),hr(s,i),i.extensions&&Rs(t,s,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of r.associations)(f instanceof kn||f instanceof Xt)&&h.set(f,p);return u.traverse(f=>{let p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];$r[s.path]===$r.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch($r[s.path]){case $r.weights:c=ar;break;case $r.rotation:c=lr;break;case $r.position:case $r.scale:c=cr;break;default:i.itemSize===1?c=ar:c=cr;break}let u=r.interpolation!==void 0?O2[r.interpolation]:ko,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){let m=new c(l[f]+"."+$r[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Ug(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof lr?Ng:xh;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function W2(n,e,t){let i=e.attributes,r=new bn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=Ug(Jo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){let x=Ug(Jo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new On;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function bM(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=Dg[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ve.workingColorSpace!==Nt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),hr(n,e),W2(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?B2(n,e.targets,t):n})}function CM(n){let e=new Map,t=new Map,i=n.clone();return RM(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function RM(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)RM(n.children[i],e.children[i],t)}var yh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X2=new Li(-1,1,1,-1,0,1),Og=class extends qt{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}},Y2=new Og,jr=class{constructor(e){this._mesh=new xt(Y2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Qo=class extends zn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bl=class extends zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},_h=class extends zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Mh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new be);this._width=i.width,this._height=i.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qo(yh),this.copyPass.material.blending=Ii,this.clock=new hh}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bl!==void 0&&(o instanceof bl?i=!0:o instanceof _h&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sh=class extends zn{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,i){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var PM={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ea=class n extends zn{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new be(e.x,e.y):new be(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(s,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Yt(s,o,{type:An});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Yt(s,o,{type:An});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}let a=PM;this.highPassUniforms=Ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new be(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=yh;this.copyUniforms=Ni.clone(u.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Fu,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new un,this.fsQuad=new jr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new be(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new be(.5,.5)},direction:{value:new be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ea.BlurDirectionX=new be(1,0);ea.BlurDirectionY=new be(0,1);var IM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var wh=class extends zn{constructor(){super();let e=IM;this.uniforms=Ni.clone(e.uniforms),this.material=new sh({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new jr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ve.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ym?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qm&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jr=[{id:"m3",name:"BMW M3 style",style:"bmw",kind:"manual",blurb:"Manual 6-speed sedan, fast and loud",color:[.04,.16,.62],mass:1600,Tp:520,redline:7400,gears:[3.9,2.4,1.75,1.35,1.05,.86],rev:3.5,final:3.6,R:.34,cda:.66,mu:1.15,a:1.35,b:1.45,L:2.38,W:.94,H:.97,cabTop:1.42,cab0:-1.25,cab1:1.2},{id:"530",name:"BMW 5 Series style",style:"bmw",kind:"auto",blurb:"Automatic luxury sedan, smooth",color:[.05,.05,.06],mass:1750,Tp:380,redline:6500,gears:[3.6,2.2,1.5,1.1,.85,.68],rev:3.4,final:3.6,R:.34,cda:.68,mu:1,a:1.4,b:1.5,L:2.5,W:.95,H:1,cabTop:1.46,cab0:-1.4,cab1:1.25},{id:"c",name:"Mercedes C-Class style",style:"merc",kind:"auto",blurb:"Automatic sedan, comfortable",color:[.7,.72,.76],mass:1650,Tp:360,redline:6500,gears:[3.6,2.2,1.5,1.1,.85,.68],rev:3.4,final:3.65,R:.33,cda:.66,mu:1,a:1.35,b:1.45,L:2.4,W:.93,H:.98,cabTop:1.44,cab0:-1.3,cab1:1.2},{id:"gt",name:"Mercedes AMG GT style",style:"merc",kind:"manual",blurb:"Manual 6-speed coupe, very fast",color:[.62,.03,.05],mass:1550,Tp:600,redline:7200,gears:[3.3,2.2,1.65,1.28,1.02,.82],rev:3.3,final:3.5,R:.34,cda:.6,mu:1.3,a:1.3,b:1.45,L:2.4,W:.97,H:.84,cabTop:1.22,cab0:-.85,cab1:.8}],Al=Math.PI*2,Si=(n,e,t)=>Math.max(e,Math.min(t,n)),Eh=Math.tanh,Cl=class{constructor(e){V(this,"s",e);V(this,"x",-3.2);V(this,"z",-25);V(this,"psi",0);V(this,"u",0);V(this,"v",0);V(this,"r",0);V(this,"we",0);V(this,"running",!1);V(this,"ign",!1);V(this,"stallT",0);V(this,"grace",0);V(this,"crank",0);V(this,"gear",0);V(this,"shiftT",0);V(this,"shiftDir",0);V(this,"stalled",!1);V(this,"autoMode","D");V(this,"clutchEff",0);V(this,"thrEff",0);V(this,"steerAng",0);V(this,"spin",0);V(this,"wheelSpin",!1);V(this,"slip",0);V(this,"ax",0);V(this,"ay",0);V(this,"wt",0);V(this,"impact",0);V(this,"msg","");V(this,"msgT",0);V(this,"assist",!1);this.reset()}reset(e=-3.2,t=-25,i=0){this.x=e,this.z=t,this.psi=i,this.u=0,this.v=0,this.r=0,this.we=0,this.running=!1,this.ign=!1,this.stallT=0,this.grace=0,this.crank=0,this.gear=this.s.kind==="auto"?1:0,this.stalled=!1,this.autoMode="D"}toast(e){this.msg=e,this.msgT=2.2}startEngine(e=1){if(!(this.running||this.crank>0)){if(this.s.kind==="manual"&&this.gear!==0&&e<.5&&!this.assist){this.toast("Press the clutch or select neutral to start");return}this.crank=.7,this.stalled=!1,this.ign=!0,this.stallT=0}}toggleKey(e=1){this.ign?this.stopEngine():this.startEngine(e)}stopEngine(){!this.ign&&!this.running&&this.crank<=0||(this.running=!1,this.ign=!1,this.crank=0,this.stalled=!1,this.stallT=0,this.toast("Engine off"))}torque(e){let t=e/this.s.redline,i=Si(.5+1.75*t-1.55*t*t,.35,1.1);return this.s.Tp*i*(e>this.s.redline?0:1)}rpm(){return this.we*60/Al}ratioOf(e){return e===0?0:(e>0?this.s.gears[e-1]:-this.s.rev)*this.s.final}shift(e,t){let i=this.s;if(i.kind!=="manual")return;if(!(t.clutch>.55||this.assist)){this.toast("Press the clutch to shift");return}Math.abs(this.u)>1.5&&this.gear<0&&e>0&&this.gear;let r=this.gear+e;if(r<-1&&(r=-1),r>i.gears.length&&(r=i.gears.length),r===-1&&Math.abs(this.u)>2){this.toast("Stop before reverse");return}r!==this.gear&&(this.gear=r,this.shiftT=.3)}setGear(e,t){if(e-this.gear!==0){if(e!==0&&!(t.clutch>.55||this.assist)){this.toast("Press the clutch to shift");return}if(e===-1&&Math.abs(this.u)>2){this.toast("Stop before reverse");return}this.gear=e,this.shiftT=.3}}setAuto(e){if(this.s.kind==="auto"){if(e==="R"&&this.u>1.5){this.toast("Stop before reverse");return}if(e==="D"&&this.u<-1.5){this.toast("Stop before drive");return}this.autoMode=e,e==="R"?this.gear=-1:e==="N"?this.gear=0:this.gear<1&&(this.gear=1)}}autoLogic(e,t){if(this.shiftT>0){this.shiftT-=e;return}if(this.autoMode!=="D")return;let i=this.s,r=Math.abs(this.u)/i.R*60/Al,s=t.thr,o=2300+3500*s,a=1150+1500*s,l=c=>r*i.gears[c-1]*i.final;this.gear<i.gears.length&&l(this.gear)>o?(this.gear++,this.shiftT=.28):this.gear>1&&l(this.gear)<a?(this.gear--,this.shiftT=.25):this.gear<1&&(this.gear=1)}engagement(e){let t=this.s,i=this.rpm();if(this.gear===0)return 0;if(t.kind==="auto"){let o=Si((i-950)/800,0,1),a=e.brake>.08?0:.045;return o=Math.max(o,a),this.shiftT>0&&(o*=.2),this.clutchEff=0,o}let r=e.clutch;if(this.assist){let o=Math.abs(this.u)/t.R*Math.abs(this.ratioOf(this.gear))*60/Al,a=o>1250?1:Si((i-1050)/800,0,1);e.thr<.03&&o<1100&&(a=0),this.shiftT>0&&(a=0),r=.9-.55*a,a===0&&(r=1)}this.clutchEff=r;let s=Si((.9-r)/.55,0,1);return s*s*(3-2*s)}step(e,t){let i=this.s,r=9.81,s=i.mass;this.s.kind==="auto"&&this.autoLogic(e,t),this.shiftT>0&&i.kind==="manual"&&(this.shiftT-=e);let o=this.ratioOf(this.gear),a=this.u/i.R*o,l=this.rpm(),c=0,u=t.thr;this.crank>0&&(this.crank-=e,this.we+=(95-this.we)*Math.min(1,e*8),this.crank<=0&&(this.running=!0,this.grace=1.2,this.we=Math.max(this.we,95)));let h=this.s.kind==="manual"&&this.gear!==0?1:0,f=this.running?Si((1150-l)/260,0,.6)*(.75+.25*h):0,p=Math.max(u,f);this.thrEff=u;let m=(.05*i.Tp+4e-5*i.Tp*l)*(1-.9*p);c=this.running?this.torque(l)*p-m:-m*1.5,this.crank>0&&(c=0);let x=this.engagement(t),v=2.2*i.Tp*x,d=.14*i.Tp,g=o===0?0:Si(d*(this.we-a),-v,v),y=.2;if(this.crank<=0&&(this.we=Math.max(0,this.we+(c-g)/y*e)),this.grace>0&&(this.grace-=e),this.running&&this.crank<=0){let N=i.kind==="manual"&&this.gear!==0&&x>.8&&this.rpm()<180&&this.grace<=0;this.stallT=N?this.stallT+e:Math.max(0,this.stallT-e*2),this.stallT>.4?(this.running=!1,this.ign=!1,this.stalled=!0,this.we=0,this.stallT=0,this.toast("Engine stalled. Press START")):!N&&this.we<24&&(this.we=24)}this.we>i.redline*Al/60*1.05&&(this.we=i.redline*Al/60*1.05);let _=o===0?0:g*o/i.R*.9,T=i.mu*s*r*.5;this.wheelSpin=Math.abs(_)>T,_=Si(_,-T,T);let w=Eh(this.u*4),A=(t.brake*1*i.mu*s*r*.92+t.hand*.38*s*r)*w,C=.5*1.2*i.cda*this.u*Math.abs(this.u)+.015*s*r*Eh(this.u*3),S=_-A-C,M=i.a+i.b,P=s*i.a*i.b*1.1;this.wt+=(Si(this.ax,-11,8)-this.wt)*Math.min(1,e*8);let B=Si(s*this.wt*.52/M,-.22*s*r,.22*s*r),k=s*r*i.b/M-B,W=s*r*i.a/M+B,Z=Math.abs(this.u),q=.5/(1+Math.pow(Z/9,2.1)),te=-this.steerAng*q,G=this.u>=0?1:-1,se=Math.max(Z,2.2),he=Math.atan2(this.v+i.a*this.r*G,se)-te*G,de=Math.atan2(this.v-i.b*this.r*G,se),De=i.mu*.97,Ze=i.mu*1.06,K=Math.abs(_)+t.hand*.45*s*r*.5*Math.min(1,Z),ne=Math.sqrt(Math.max(.12,1-Math.pow(Math.min(.97,K/(Ze*W)),2)*.8))*(1-.75*t.hand)*(1-.1*t.brake),_e=Math.sqrt(Math.max(.2,1-Math.pow(Math.min(.97,t.brake*.55),2))),X=-De*k*_e*Eh(7*he),me=-Ze*W*ne*Eh(8*de);this.slip=Math.max(Math.abs(he)-.06,Math.abs(de)-.06,0)*Math.min(1,Z/8)*1.4+(this.wheelSpin?.15:0)+t.hand*Math.min(1,Z/6)*.3;let Ae=(S-X*Math.sin(te))/s+this.v*this.r,Pe=(X*Math.cos(te)+me)/s-this.u*this.r,at=(i.a*X*Math.cos(te)-i.b*me)/P-this.r*.35*Math.min(1,Z/6);this.u+=Ae*e,this.v+=Pe*e,this.r+=at*e;{let N=Math.min(1.35,10.5/Math.max(Z,4));Math.abs(this.r)>N&&(this.r=Math.sign(this.r)*N);let hn=.45*Math.max(Z,3);Math.abs(this.v)>hn&&(this.v=Math.sign(this.v)*hn)}if(this.ax=Ae,this.ay=Pe+this.u*this.r,Z<2.5){let N=1/(1+e*12*(1-Z/2.5));this.v*=N,this.r*=N}Z<.15&&t.thr<.02&&(t.brake>.05||o===0||t.hand>.1)&&(this.u*=.9),this.psi+=this.r*e;let Xe=Math.sin(this.psi),yt=Math.cos(this.psi);this.x+=(this.u*Xe+this.v*yt)*e,this.z+=(this.u*yt-this.v*Xe)*e,this.spin+=this.u/i.R*e}collide(e){let t=this.s,i=t.W*1.02,r=[t.L-.9,0,-(t.L-.9)];this.impact=0;for(let s=0;s<2;s++)for(let o of r){let a=Math.sin(this.psi),l=Math.cos(this.psi),c=this.x+a*o,u=this.z+l*o;for(let h of e){if(c<h[0]-i||c>h[2]+i||u<h[1]-i||u>h[3]+i)continue;let f=Si(c,h[0],h[2]),p=Si(u,h[1],h[3]),m=c-f,x=u-p,v=Math.hypot(m,x);if(v===0&&(m=c-(h[0]+h[2])/2,x=u-(h[1]+h[3])/2,v=Math.hypot(m,x)||1),v>=i)continue;let d=m/v,g=x/v,y=i-v;this.x+=d*y,this.z+=g*y;let _=this.u*a+this.v*l,T=this.u*l-this.v*a,w=_*d+T*g;if(w<0){this.impact=Math.max(this.impact,-w),_-=1.15*w*d,T-=1.15*w*g;let A=-1.15*w,C=(d*l-g*a)*A;this.r+=o*C*.45/(t.a*t.b*1.15)*.5,this.u=_*a+T*l,this.v=_*l-T*a,this.u*=.97}}}}};function Qe(n,e,t){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,2147483629);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function q2(n,e){let i=n*.27,r=e*.27,s=Math.floor(i),o=Math.floor(r),a=i-s,l=r-o;a=a*a*(3-2*a),l=l*l*(3-2*l);let c=Qe(s,o,77),u=Qe(s+1,o,77),h=Qe(s,o+1,77),f=Qe(s+1,o+1,77);return(c*(1-a)+u*a)*(1-l)+(h*(1-a)+f*a)*l}var Rl=new Map;function K2(n,e){let t=n+","+e,i=Rl.get(t);if(i)return i;let r={bld:[],pine:[],round:[],lamp:[],sig:[],boxes:[]},s=n*60,o=e*60,a=q2(n,e),l=(p,m,x,v,d,g)=>{r.bld.push(p,0,m,x,v,d,g[0],g[1],g[2]),r.boxes.push([p-x/2,m-d/2,p+x/2,m+d/2])},c=(p,m,x)=>{let v=(.8+Qe(n,e,p*7+m)*.8)*x,d=.8+Qe(m,p,5)*.4;(Qe(p,m,9)>.45?r.pine:r.round).push(p,0,m,v,v,v,.7*d,.9*d,.65*d)},u=(p,m,x)=>!r.boxes.some(v=>p>v[0]-x&&p<v[2]+x&&m>v[1]-x&&m<v[3]+x),h=[[s+19.75,o+19.75],[s+40.25,o+19.75],[s+19.75,o+40.25],[s+40.25,o+40.25]];if(a>.6)h.forEach((p,m)=>{if(Qe(n,e,10+m)<.88){let x=13+Qe(n,e,20+m)*6,v=13+Qe(n,e,30+m)*6,d=24+Math.pow(Qe(n,e,40+m),1.6)*95,g=.38+Qe(n,e,50+m)*.4,y=Qe(n,e,60+m);l(p[0],p[1],x,d,v,[g*(.95+y*.15),g*1.02,g*(1.05+(1-y)*.15)]);for(let T=0;T<2;T++)r.bld.push(p[0]+(Qe(n,e,90+m*2+T)-.5)*x*.5,d,p[1]+(Qe(n,e,95+m*2+T)-.5)*v*.5,2.5+T,1.6,2.2,.5,.5,.52);let _=[[.8,.15,.12],[.1,.35,.6],[.15,.5,.25],[.85,.6,.1]][Math.floor(Qe(n,e,97+m)*4)];r.bld.push(p[0],3.3,p[1]-v/2-.9,x*.85,.25,1.8,_[0],_[1],_[2]),r.bld.push(p[0],3.3,p[1]+v/2+.9,x*.85,.25,1.8,_[1],_[2],_[0])}});else if(a>.36){Qe(n,e,5)<.22?l(s+30,o+30,24,16+Qe(n,e,6)*12,24,[.7,.66,.58]):h.forEach((p,m)=>{if(Qe(n,e,10+m)<.78){let x=10+Qe(n,e,20+m)*3.5,v=10+Qe(n,e,30+m)*3.5,d=5+Qe(n,e,40+m)*4,g=[[.85,.8,.7],[.9,.88,.85],[.78,.55,.42],[.7,.75,.8],[.88,.8,.55]][Math.floor(Qe(n,e,50+m)*5)];l(p[0]+(Qe(n,e,70+m)-.5)*3,p[1]+(Qe(n,e,80+m)-.5)*3,x,d,v,g);let y=r.boxes[r.boxes.length-1];r.bld.push((y[0]+y[2])/2,d,(y[1]+y[3])/2,x+1.2,.8,v+1.2,.3,.14,.12)}});for(let p=0;p<7;p++){let m=s+10.5+Qe(n,e,100+p)*39,x=o+10.5+Qe(n,e,120+p)*39;u(m,x,3)&&c(m,x,.9)}}else{let p=14+Math.floor(Qe(n,e,3)*14);for(let m=0;m<p;m++)c(s+10.5+Qe(n,e,100+m)*39,o+10.5+Qe(n,e,150+m)*39,1.2)}let f=[[8.4,31],[-8.4,31],[31,8.4],[31,-8.4]];for(let p of[-1,1])for(let m of[-1,1])r.sig.push(s+p*8.7,0,o+m*8.7,1,1,1,1,1,1);for(let p of f)r.lamp.push(s+p[0],0,o+p[1],1,1,1,1,1,1);return Rl.set(t,r),Rl.size>400&&Rl.delete(Rl.keys().next().value),r}function kg(n,e,t){let i={bld:[],pine:[],round:[],lamp:[],sig:[],boxes:[]};for(let r=n-t;r<=n+t;r++)for(let s=e-t;s<=e+t;s++){let o=K2(r,s);for(let a of["bld","pine","round","lamp","sig"]){let l=o[a],c=i[a];for(let u=0;u<l.length;u++)c.push(l[u])}for(let a of o.boxes)i.boxes.push(a)}return i}function Pl(n,e,t,i){let r=(i+Qe(n,e,501)*26)%26;return t===0?r<10?2:r<12?1:0:r>=13&&r<23?2:r>=23&&r<25?1:0}var Z2=(n,e)=>(n%e+e)%e;function LM(n){n.axis===0?(n.z=n.s,n.x=n.k*60-n.dir*3.2,n.psi=n.dir>0?0:Math.PI):(n.x=n.s,n.z=n.k*60+n.dir*3.2,n.psi=n.dir>0?Math.PI/2:-Math.PI/2)}var Il=class{constructor(e,t){V(this,"variants",e);V(this,"pedVariants",t);V(this,"cars",[]);V(this,"peds",[]);V(this,"nCars",16);V(this,"nPeds",34)}spawnCar(e,t,i,r){for(let s=0;s<8;s++){let o=Math.random()<.5?0:1,a=Math.random()<.5?1:-1,l=o===0?i:t,u=Math.round((o===0?t:i)/60)+Math.floor(Math.random()*5)-2,h=r?Math.random()*360-180:(Math.random()<.5?-1:1)*(130+Math.random()*70),f=l+h,p=Z2(f,60);if(p<17||p>43||this.cars.some(x=>x!==e&&x.axis===o&&x.dir===a&&x.k===u&&Math.abs(x.s-f)<14))continue;let m=e||{axis:o,dir:a,k:u,s:f,v:0,vmax:0,variant:0,brake:0,x:0,z:0,psi:0,spin:0};return m.axis=o,m.dir=a,m.k=u,m.s=f,m.vmax=9+Math.random()*6,m.v=m.vmax*.6,m.variant=Math.floor(Math.random()*this.variants),LM(m),m}return null}spawnPed(e,t,i,r){let s=Math.random()<.5?0:1,o=s===0?i:t,a=s===0?t:i,l=e||{axis:s,k:0,side:1,s:0,dir:1,v:1.3,phase:0,variant:0,x:0,z:0,psi:0,wait:!1};return l.axis=s,l.k=Math.round(a/60)+Math.floor(Math.random()*3)-1,l.side=Math.random()<.5?1:-1,l.dir=Math.random()<.5?1:-1,l.s=o+(r?Math.random()*240-120:(Math.random()<.5?-1:1)*(110+Math.random()*40)),l.v=1.1+Math.random()*.6,l.variant=Math.floor(Math.random()*this.pedVariants),l.phase=Math.random()*6,this.placePed(l),l}placePed(e){e.axis===0?(e.x=e.k*60+e.side*8.3,e.z=e.s,e.psi=e.dir>0?0:Math.PI):(e.z=e.k*60+e.side*8.3,e.x=e.s,e.psi=e.dir>0?Math.PI/2:-Math.PI/2)}update(e,t,i,r,s){for(;this.cars.length<this.nCars;){let o=this.spawnCar(null,t,i,!0);if(!o)break;this.cars.push(o)}for(;this.peds.length<this.nPeds;)this.peds.push(this.spawnPed(null,t,i,!0));for(let o of this.cars){let a=o.dir,l=o.s+a*2.3,c=1e9;for(let w of this.cars)if(w!==o&&w.axis===o.axis&&w.dir===a&&w.k===o.k){let A=(w.s-o.s)*a-4.8;A>-3&&A<c&&(c=A)}let u=o.axis===0?i:t,h=o.axis===0?t:i,f=o.axis===0?o.k*60-a*3.2:o.k*60+a*3.2;if(Math.abs(h-f)<1.9){let w=(u-o.s)*a-4.6;w>-3&&w<c&&(c=Math.min(c,w))}let p=a>0?Math.ceil((o.s+.001)/60)*60:Math.floor((o.s-.001)/60)*60,m=p-a*11.5,x=(m-l)*a+2.3-.2*0,v=o.axis===0?o.k:Math.round(p/60),d=o.axis===0?Math.round(p/60):o.k,g=Pl(v,d,o.axis,r),y=(m-o.s)*a-2.3;y>-.8&&(g===0||g===1&&y>o.v*o.v/8)&&(c=Math.min(c,Math.max(0,y)));let _=Math.min(o.vmax,Math.sqrt(10*Math.max(0,c-1.5))),T=Math.max(-10*e,Math.min(2.6*e,_-o.v));o.v=Math.max(0,o.v+T),o.brake=T<-.05||o.v<.3?1:0,o.s+=a*o.v*e,o.spin+=o.v/.32*e,LM(o),Math.hypot(o.x-t,o.z-i)>240&&this.spawnCar(o,t,i,!1)}for(let o of this.peds){let a=o.dir,l=Math.round(o.s/60)*60,c=!1;if(Math.abs(o.s-l)>=8){let u=a>0?Math.ceil(o.s/60)*60:Math.floor(o.s/60)*60,f=(u-a*8-o.s)*a;if(f>=-.01&&f<.8){let p=o.axis===0?o.k:Math.round(u/60),m=o.axis===0?Math.round(u/60):o.k;Pl(p,m,1-o.axis,r)!==0&&(c=!0)}}o.wait=c,c||(o.s+=a*o.v*e,o.phase+=e*o.v*4.2),this.placePed(o),Math.hypot(o.x-t,o.z-i)>170&&this.spawnPed(o,t,i,!1)}}boxes(){return this.cars.map(e=>e.axis===0?[e.x-.95,e.z-2.2,e.x+.95,e.z+2.2]:[e.x-2.2,e.z-.95,e.x+2.2,e.z+.95])}};var $2=()=>{try{let n=parseFloat(localStorage.getItem("rs_sens")||"");return n>=.4&&n<=1.8?n:1}catch{return 1}},wt={sens:$2(),steer:0,thr:0,brake:0,clutch:0,hand:0,rot:0,keys:{}},Bg=n=>{let e=Math.hypot(...n);return[n[0]/e,n[1]/e,n[2]/e]},zg=[{sun:Bg([.45,.75,.35]),sunCol:[3.4,3,2.6],sky:[.5,.64,.9],gnd:[.26,.23,.19],fog:[.62,.76,.95],top:[.1,.32,.8],fogD:1/330,night:0},{sun:Bg([.85,.2,.3]),sunCol:[4.2,2,.8],sky:[.35,.3,.45],gnd:[.22,.13,.08],fog:[.95,.52,.34],top:[.14,.18,.42],fogD:1/300,night:0},{sun:Bg([-.3,.5,.4]),sunCol:[.16,.22,.4],sky:[.04,.06,.12],gnd:[.015,.016,.025],fog:[.025,.035,.07],top:[.004,.01,.035],fogD:1/260,night:1}],BM=(()=>{try{return new URL(".",document.baseURI).href}catch{return"./"}})(),NM=["m3","e5","c","gt"],DM=["casual-man","casual-woman","business-man","business-woman","construction-worker","runner-woman"],zM="Cars and pedestrians: 3D models from Vinish.Dev (vinish.dev/free-3d-models), licensed CC BY 4.0. Simplified for mobile. Personal hobby project: car badges are hand-drawn look-alikes, not official logos, and the car models are generic (not made by BMW or Mercedes-Benz).",j2="varying vec3 vD; void main(){ vD=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position.z=gl_Position.w*.9999; }",J2=`
varying vec3 vD; uniform vec3 uSunDir,uSunCol,uFog,uTop; uniform float uNight,uTime;
float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y); }
float fbm(vec2 p){ float a=.5,s=0.; for(int i=0;i<5;i++){ s+=a*vn(p); p=p*2.03+vec2(17.,9.); a*=.5; } return s; }
void main(){
  vec3 d=normalize(vD); float h=d.y;
  vec3 col=mix(uFog,uTop,pow(clamp(h,0.,1.),.45));
  float s=max(dot(d,uSunDir),0.);
  col+=uSunCol*.12*pow(s,6.)+uSunCol*.5*pow(s,60.);
  #ifndef ENV
  col+=mix(vec3(10.,9.,7.),vec3(1.2,1.3,1.6),uNight)*smoothstep(.9994,.9998,s);
  if(h>0.){
    vec2 cp=d.xz/(h+.08)*.55+vec2(uTime*.008,uTime*.003);
    float cl=fbm(cp*1.3); float cov=smoothstep(.47,.76,cl)*smoothstep(0.,.12,h);
    float lit=fbm(cp*1.3+uSunDir.xz*.18); float shade=clamp((cl-lit)*3.2+.62,0.,1.);
    vec3 bright=uSunCol*.28+uFog*.78+vec3(.16); vec3 dark=mix(uFog*.5,uTop*.85,.35);
    vec3 cc=mix(dark,bright,shade); cc=mix(cc,uFog*.5,uNight);
    col=mix(col,cc,cov*.9);
    if(uNight>.5){ vec3 q=floor(d*220.); float st=step(.9972,hash(q.xz+q.y*7.1)); col+=st*.9*smoothstep(.05,.3,h); }
  }
  float a=atan(d.x,d.z);
  float ridge=.03+.035*sin(a*3.+.7)+.02*sin(a*8.3+2.)+.01*sin(a*21.+1.);
  if(h<ridge&&h>-.2){ vec3 mc=mix(uFog,vec3(.18,.22,.3)*(.4+.6*uSunCol.g*.3)+uFog*.25,.45+.5*smoothstep(-.2,max(ridge,.001),h)*.2); col=mix(mc,uFog,.55); }
  col=mix(col,uFog,pow(1.-clamp(h,0.,1.),6.)*.6);
  if(h<=0.) col=uFog;
  #else
  if(h<=0.) col=mix(uFog,vec3(.12,.12,.11),.7)*.6;
  #endif
  gl_FragColor=vec4(col,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function Ll(n,e){let t=Math.imul(n|0,374761393)^Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296}function Hg(n,e){let t=Math.floor(n),i=Math.floor(e),r=n-t,s=e-i;r=r*r*(3-2*r),s=s*s*(3-2*s);let o=Ll(t,i),a=Ll(t+1,i),l=Ll(t,i+1),c=Ll(t+1,i+1);return(o*(1-r)+a*r)*(1-s)+(l*(1-r)+c*r)*s}function Q2(n,e){let t=document.createElement("canvas");t.width=t.height=n;let i=t.getContext("2d"),r=i.createImageData(n,n),s=r.data,o=60/n;for(let l=0;l<n;l++)for(let c=0;c<n;c++){let u=(c+.5)*o-30,h=(l+.5)*o-30,f=Math.abs(u),p=Math.abs(h),m=Math.min(f,p),x=Ll(c,l),v=Hg(u*.35+40,h*.35+40),d,g,y;if(m<7){let T=50+x*9+v*8;if(d=T,g=T+1,y=T+4,f<7&&p<7){let A=v*10;d+=A,g+=A,y+=A}else{let A=f<7,C=A?f:p,S=A?h:u,M=A?p:f,P=A?u:h;C>.15&&C<.15+.14*1.3&&(d=214,g=160,y=24),Math.abs(C-6.3)<.1&&(S%10+10)%10<6&&(d=190,g=190,y=186),M<10.6&&C<5.9&&(P%1.5+1.5)%1.5<.75&&(d=205,g=205,y=200),M>11&&M<11.7&&C>.5&&C<6&&(d=215,g=215,y=210);let k=1-Math.min(1,Math.abs((C%3.2+3.2)%3.2-1.6)/1.1);d-=6*k,g-=6*k,y-=6*k}}else if(m<9.6)if(m<7.35)d=100,g=99,y=96;else{let T=158+x*14-7;d=T,g=T-1,y=T-6,((u%2+2)%2<.07||(h%2+2)%2<.07)&&(d-=22,g-=22,y-=22)}else{let T=Hg(u*.9,h*.9),w=Hg(u*3.1+9,h*3.1);d=52+40*T+18*w+x*10,g=98+55*T+22*w+x*14,y=36+22*T+x*8}let _=(l*n+c)*4;s[_]=d,s[_+1]=g,s[_+2]=y,s[_+3]=255}i.putImageData(r,0,0);let a=new xl(t);return a.wrapS=a.wrapT=ir,a.colorSpace=Mt,a.anisotropy=e,a.repeat.set(24,24),a.offset.set(.5,.5),a.generateMipmaps=!0,a.minFilter=$n,a.needsUpdate=!0,a}var HM=new vh,UM=n=>new Promise((e,t)=>HM.load(BM+n+".glb",i=>e(i.scene),void 0,t)),FM=(n,e)=>{n.traverse(t=>{t.isMesh&&(t.castShadow=e)})};function Vg(n,e,t){let i=iR(n),r=[],s=[],o=null,a=[],l=[],c=[],u=new Map;return i.traverse(h=>{/^Wheel_/.test(h.name)&&(r.push(h),h.rotation.order="YXZ",/^Wheel_F/.test(h.name)&&s.push(h)),h.name==="Steering_Wheel"&&(o=h);let f=h;if(!f.isMesh)return;f.castShadow=t.hi,f.receiveShadow=!1,f.frustumCulled=!0;let p=f.material,m=p.name||"",x=u.get(p);if(!x){if(x=p,/^(Paint|g_paint)/.test(m)&&e){let v=new xn({color:new ye().setRGB(e[0],e[1],e[2],Mt),metalness:.6,roughness:.3,clearcoat:t.hi?1:0,clearcoatRoughness:.04,envMapIntensity:1.6});v.name=m,x=v,a.push(v)}else t.own&&/^(LED_Red|g_tail)$/.test(m)?(x=p.clone(),x.emissive=new ye(1,.03,.02),x.emissiveIntensity=.15,l.push(x)):t.own&&/^(LED|Projector|g_head)$/.test(m)&&(x=p.clone(),x.emissive=new ye(1,.95,.85),x.emissiveIntensity=0,c.push(x));(x.transparent||/^(Glass|Lens|g_glass|g_lens)/.test(m))&&(x.transparent=!0,x.depthWrite=!1,x.side=Qn),u.set(p,x)}f.material=x}),{root:i,wheels:r,front:s,steer:o,paint:a,tail:l,head:c}}function eR(n){let t=document.createElement("canvas");t.width=t.height=256;let i=t.getContext("2d"),r=256/2;if(n==="roundel"){i.fillStyle="#0b0b0d",i.beginPath(),i.arc(r,r,r-4,0,7),i.fill(),i.strokeStyle="#c9ccd2",i.lineWidth=5,i.beginPath(),i.arc(r,r,r-8,0,7),i.stroke();let o=r*.72,a=["#f4f6f8","#1c69d4","#f4f6f8","#1c69d4"];for(let l=0;l<4;l++)i.fillStyle=a[l],i.beginPath(),i.moveTo(r,r),i.arc(r,r,o,l*Math.PI/2-Math.PI/2,(l+1)*Math.PI/2-Math.PI/2),i.closePath(),i.fill()}else{i.fillStyle="#16181c",i.beginPath(),i.arc(r,r,r-4,0,7),i.fill(),i.strokeStyle="#d5d9df",i.lineWidth=12,i.beginPath(),i.arc(r,r,r-16,0,7),i.stroke(),i.fillStyle="#d5d9df";for(let o=0;o<3;o++){let a=-Math.PI/2+o*2*Math.PI/3,l=Math.cos(a),c=Math.sin(a),u=r-22,h=11;i.beginPath(),i.moveTo(r+l*u,r+c*u),i.lineTo(r-c*h,r+l*h),i.lineTo(r+c*h,r-l*h),i.closePath(),i.fill()}}let s=new xl(t);return s.colorSpace=Mt,s.anisotropy=4,s}var tR=["roundel","roundel","star","star"];function nR(n,e){n.updateMatrixWorld(!0);let t=new bn().setFromObject(n),i=t.getSize(new I),r=(t.min.x+t.max.x)/2,s=eR(tR[e]),o=new Bn({map:s,transparent:!0,alphaTest:.4,roughness:.35,metalness:.3,polygonOffset:!0,polygonOffsetFactor:-4}),a=Math.min(.15,i.x*.085),l=new Xr(a,a),c=new xt(l,o);c.position.set(r,t.min.y+i.y*OM[e][0],t.max.z+.012-kM[e][0]),c.rotation.x=-.2,c.name="badge_f";let u=new xt(l,o);u.position.set(r,t.min.y+i.y*OM[e][1],t.min.z-.012+kM[e][1]),u.rotation.y=Math.PI,u.name="badge_r",n.add(c,u)}var OM=[[.47,.62],[.47,.62],[.47,.62],[.45,.6]],kM=[[-.045,-.04],[-.045,-.04],[-.045,-.04],[-.045,-.04]];function iR(n){return n.clone(!0)}var Qr=(n,e,t)=>Math.max(e,Math.min(t,n)),Th=class{constructor(e){V(this,"canvas");V(this,"renderer");V(this,"scene",new Go);V(this,"camera",new Ot(65,1,.15,900));V(this,"sky");V(this,"skyMat");V(this,"sun");V(this,"hemi");V(this,"headL");V(this,"lampLights",[]);V(this,"envs",[null,null,null]);V(this,"pmrem");V(this,"ground");V(this,"groundTex",{});V(this,"bldMat");V(this,"nightU",{value:0});V(this,"instBld");V(this,"instPine");V(this,"instRound");V(this,"instLamp");V(this,"instLampHead");V(this,"instSig");V(this,"instSigL");V(this,"lampHeadMat");V(this,"carSrc",[null,null,null,null]);V(this,"carLoading",[]);V(this,"tSrc",[null,null,null,null]);V(this,"pSrc",[]);V(this,"pAnims",[]);V(this,"car",null);V(this,"carIdx",-1);V(this,"carHolder",new Jn);V(this,"tCars",[]);V(this,"pedObj",[]);V(this,"sim");V(this,"spec");V(this,"boxes",[]);V(this,"tod",0);V(this,"quality",2);V(this,"view",0);V(this,"sound",!0);V(this,"running",!1);V(this,"raf",0);V(this,"last",0);V(this,"acc",0);V(this,"time",0);V(this,"frames",0);V(this,"fpsAcc",0);V(this,"fps",60);V(this,"slow",0);V(this,"camYaw",0);V(this,"camPit",0);V(this,"camZoom",1);V(this,"camTouch",0);V(this,"camDrag",!1);V(this,"cockState",null);V(this,"mirF",0);V(this,"camReturn",(()=>{try{return localStorage.getItem("rs_camret")!=="0"}catch{return!0}})());V(this,"mirRT",[]);V(this,"mirCam",new Ot(40,3.3,.2,600));V(this,"mirScene",new Go);V(this,"mirOrtho",new Li(-1,1,1,-1,0,1));V(this,"mirQuad");V(this,"cell",[999,999]);V(this,"camA",0);V(this,"camPos",[0,5,-10]);V(this,"roll",0);V(this,"pitch",0);V(this,"kbThr",0);V(this,"kbBrake",0);V(this,"kbClu",0);V(this,"kbSteer",0);V(this,"traffic",new Il(4,6));V(this,"hitCool",0);V(this,"pedHits",0);V(this,"sigAcc",99);V(this,"loading",!0);V(this,"onHud",()=>{});V(this,"mini",null);V(this,"ac",null);V(this,"aud",null);V(this,"lastShiftKey",0);V(this,"tmpM",new Fe);V(this,"tmpQ",new cn);V(this,"tmpP",new I);V(this,"tmpS",new I);V(this,"tmpC",new ye);V(this,"tmpE",new ei);V(this,"composer",null);V(this,"bloom",null);V(this,"assistOn",!1);V(this,"steerNow",0);V(this,"lastDt",.016);V(this,"lampCache",[]);V(this,"lampAcc",0);this.canvas=e;let t=new qu({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1});this.renderer=t,t.outputColorSpace=Mt,t.toneMapping=Sl,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Vm,this.pmrem=new Vo(t),this.camera.rotation.order="YXZ",this.skyMat=new Lt({vertexShader:j2,fragmentShader:J2,side:an,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:new I},uSunCol:{value:new I},uFog:{value:new I},uTop:{value:new I},uNight:{value:0},uTime:{value:0}}}),this.sky=new xt(new yl(1,24,14),this.skyMat),this.sky.scale.setScalar(600),this.sky.renderOrder=-1e3,this.sky.frustumCulled=!1,this.scene.add(this.sky),this.sun=new $o(16777215,3),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.06;let i=this.sun.shadow.camera;i.left=-55,i.right=55,i.top=55,i.bottom=-55,i.near=10,i.far=260,i.updateProjectionMatrix(),this.scene.add(this.sun),this.scene.add(this.sun.target),this.hemi=new ch(16777215,4473924,.3),this.scene.add(this.hemi),this.headL=new Ko(16773853,0,70,.55,.5,1.2),this.scene.add(this.headL),this.scene.add(this.headL.target);for(let r=0;r<4;r++){let s=new Zo(16767392,0,28,1.6);this.lampLights.push(s),this.scene.add(s)}this.scene.fog=new Ku(16777215,1/330),this.buildWorldObjects(),this.scene.add(this.carHolder),this.setQuality(2),this.applyTod(),this.sim=new Cl(Jr[0]),this.spec=Jr[0],this.loadAssets(),this.initMirrors(),this.setupCamInput()}setCamReturn(e){this.camReturn=e;try{localStorage.setItem("rs_camret",e?"1":"0")}catch{}}initMirrors(){let e=(r,s)=>new Yt(r,s,{type:An});this.mirRT=[e(320,96),e(160,128),e(160,128)];let t=new Xr(2,2),i=t.attributes.uv;for(let r=0;r<i.count;r++)i.setX(r,1-i.getX(r));this.mirQuad=new xt(t,new un({depthTest:!1,depthWrite:!1})),this.mirScene.add(this.mirQuad)}setupCamInput(){let e=this.canvas,t=new Map,i=0;e.style.touchAction="none",e.addEventListener("pointerdown",s=>{try{e.setPointerCapture(s.pointerId)}catch{}if(t.set(s.pointerId,{x:s.clientX,y:s.clientY}),this.camDrag=!0,t.size===2){let[o,a]=[...t.values()];i=Math.hypot(o.x-a.x,o.y-a.y)}}),e.addEventListener("pointermove",s=>{let o=t.get(s.pointerId);if(!o)return;let a=s.clientX-o.x,l=s.clientY-o.y;if(o.x=s.clientX,o.y=s.clientY,this.camTouch=performance.now(),t.size>=2){let[c,u]=[...t.values()],h=Math.hypot(c.x-u.x,c.y-u.y);i>0&&h>0&&(this.camZoom=Qr(this.camZoom*i/h,.5,2.2)),i=h;return}this.view===1?(this.camYaw=Qr(this.camYaw+a*.007,-2.4,2.4),this.camPit=Qr(this.camPit+l*.004,-.5,.5)):(this.camYaw=Qr(this.camYaw-a*.008,-Math.PI,Math.PI),this.camPit=Qr(this.camPit+l*.005,-.12,1.2))});let r=s=>{t.delete(s.pointerId),t.size<2&&(i=0),this.camDrag=t.size>0,this.camTouch=performance.now()};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("wheel",s=>{s.preventDefault(),this.camZoom=Qr(this.camZoom*(1+Math.sign(s.deltaY)*.08),.5,2.2)},{passive:!1})}async loadAssets(){try{let e=[];NM.forEach((t,i)=>e.push(UM(t+"_lo").then(r=>{this.tSrc[i]=r}))),DM.forEach((t,i)=>e.push(new Promise(r=>{HM.load(BM+"p_"+t+".glb",s=>{this.pSrc[i]=s.scene,this.pAnims[i]=s.animations,r()},void 0,()=>r())}))),await Promise.all(e)}catch{}this.loading=!1}ensureCar(e){return this.carSrc[e]?Promise.resolve():(this.carLoading[e]||(this.carLoading[e]=UM(NM[e]).then(t=>{this.carSrc[e]=t})),this.carLoading[e])}buildWorldObjects(){let e=this.scene,t=new Xr(1440,1440);t.rotateX(-Math.PI/2),this.ground=new xt(t,new Bn({roughness:.92,metalness:0,color:16777215,envMapIntensity:.45})),this.ground.receiveShadow=!0,e.add(this.ground);let i=this.ground.material;i.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP=(modelMatrix*vec4(position,1.)).xz;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWP;
float hh(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vv(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hh(i),hh(i+vec2(1,0)),f.x),mix(hh(i+vec2(0,1)),hh(i+vec2(1,1)),f.x),f.y); }
float ff(vec2 p){ float a=.5,s=0.; for(int i=0;i<4;i++){ s+=a*vv(p); p=p*2.03+vec2(11.,5.); a*=.5; } return s; }`).replace("#include <color_fragment>",`#include <color_fragment>
        float g1=ff(vWP*.06), g2=vv(vWP*1.1), g3=vv(vWP*6.5), g4=vv(vWP*23.);
        float isG=smoothstep(.0,.1,diffuseColor.g-diffuseColor.r-.02);
        float isA=step(diffuseColor.r,.05)*step(diffuseColor.g-diffuseColor.r,.012);
        diffuseColor.rgb*=mix(vec3(1.),vec3(.7+.6*g1)*(.86+.28*g2)*(.9+.2*g3)*(.94+.12*g4),isG);
        diffuseColor.rgb*=mix(1.,(.92+.16*g3)*(.92+.16*g2)*(.95+.1*g4),isA);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.5+.35*g2,isA);`)};let r=new Mi(1,1,1);r.translate(0,.5,0);let s=new Bn({roughness:.86,metalness:0,color:16777215});this.bldMat=s,s.envMapIntensity=.3;let o=this.nightU;s.onBeforeCompile=g=>{g.uniforms.uNight=o,g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vM; varying vec3 vN0; varying vec3 vIsc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vIsc=vec3(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz),length(instanceMatrix[2].xyz)); vM=position*vIsc; vN0=normal;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vM; varying vec3 vN0; varying vec3 vIsc; uniform float uNight;
float bh(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float winM=0.; float litA=0.;
        { vec3 an=abs(vN0); float side=step(an.y,.5); vec2 f= an.x>.5 ? vec2(vM.z+vIsc.x*.0,vM.y) : vec2(vM.x,vM.y);
          float seed=an.x>.5? vIsc.x+vM.x:vIsc.z+vM.z;
          vec2 cell=vec2(3.1,3.5); vec2 id=floor(f/cell); vec2 uv=fract(f/cell);
          float w=step(.18,uv.x)*step(uv.x,.82)*step(.22,uv.y)*step(uv.y,.8);
          w*=side*step(2.4,vIsc.y)*step(.8,f.y)*step(f.y,vIsc.y-.9);
          float hs=bh(id+vec2(floor(vIsc.x*3.),floor(vIsc.z*3.)));
          winM=w; float shade=.55+.9*hs;
          diffuseColor.rgb=mix(diffuseColor.rgb*(.92+.16*bh(id*1.7)),vec3(.07,.1,.15)*shade,w*.9);
          litA=w*step(.6,hs)*uNight;
          if(vN0.y>.5) diffuseColor.rgb*=.78;
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.12,winM);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=vec3(1.,.78,.45)*litA*1.3;`)};let a=(g,y,_,T=!0)=>{let w=new Wo(g,y,_);return w.count=0,w.castShadow=T,w.receiveShadow=!0,w.frustumCulled=!1,w.instanceMatrix.setUsage(hM),w.instanceColor=new or(new Float32Array(_*3),3),e.add(w),w};this.instBld=a(r,s,4200);let l=(g,y)=>{let _=g.attributes.position.count,T=new Float32Array(_*3);for(let w=0;w<_;w++)T[w*3]=y[0],T[w*3+1]=y[1],T[w*3+2]=y[2];return g.setAttribute("color",new Pt(T,3)),g},c=(g,y,_,T,w,A)=>{let C=new ih(g,y,_,w);return C.translate(0,T+_/2,0),l(C.toNonIndexed(),A)},u=(g,y,_,T,w,A,C=1)=>{let S=new rh(g,C);return S.scale(1,w,1),S.translate(y,_,T),l(S.toNonIndexed(),A)},h=El([c(.2,.28,1.8,0,7,[.3,.2,.12]),c(0,2.3,3,1.2,9,[.1,.3,.13]),c(0,1.8,2.6,2.7,9,[.12,.34,.15]),c(0,1.2,2.2,4,9,[.15,.38,.17])]),f=El([c(.22,.3,2.6,0,7,[.32,.22,.12]),u(2,0,3.7,0,.9,[.2,.42,.15]),u(1.4,1,3.2,.5,.9,[.24,.46,.17]),u(1.3,-.9,3.3,-.6,.9,[.18,.38,.14])]),p=new Bn({vertexColors:!0,roughness:.9,metalness:0,envMapIntensity:.5});this.instPine=a(h,p,3e3),this.instRound=a(f,p,3e3);let m=El([c(.08,.12,7.2,0,6,[.25,.26,.28]),(()=>{let g=new Mi(1.4,.1,.14);return g.translate(.6,7.25,0),l(g.toNonIndexed(),[.25,.26,.28])})()]),x=new Bn({vertexColors:!0,roughness:.5,metalness:.6});this.instLamp=a(m,x,700);let v=new Mi(.55,.12,.3);v.translate(1.2,7.13,0),this.lampHeadMat=new un({color:11184810,toneMapped:!1}),this.instLampHead=a(v,this.lampHeadMat,700,!1);let d=El([c(.08,.1,5.4,0,6,[.3,.31,.33]),(()=>{let g=new Mi(.52,1.4,.52);return g.translate(0,5.55,0),l(g.toNonIndexed(),[.03,.03,.035])})()]);this.instSig=a(d,new Bn({vertexColors:!0,roughness:.6,metalness:.3}),700),this.instSigL=a(new Mi(1,1,1),new un({toneMapped:!1}),1100,!1)}groundFor(e){let t=e>=2?2048:1024;this.groundTex[t]||(this.groundTex[t]=Q2(t,Math.min(8,this.renderer.capabilities.getMaxAnisotropy())));let i=this.ground.material;i.map=this.groundTex[t],i.needsUpdate=!0}setQuality(e){var r;this.quality=e;let t=this.renderer,i=e>=2?2048:e===1?1024:512;t.shadowMap.enabled=e>=1,this.sun.castShadow=e>=1,this.sun.shadow.mapSize.x!==i&&(this.sun.shadow.mapSize.set(i,i),(r=this.sun.shadow.map)==null||r.dispose(),this.sun.shadow.map=null),this.groundFor(e),e>=2&&!this.composer&&this.initComposer(),this.scene.traverse(s=>{let o=s.material;o&&(o.needsUpdate=!0)}),this.resize()}resize(){var a;let e=window.devicePixelRatio||1,t=(a=[.7,Math.min(e,1.25),Math.min(e,1.75)][this.quality])!=null?a:1,i=this.canvas.clientWidth,r=this.canvas.clientHeight,s=Math.max(2,Math.floor(i*t)),o=Math.max(2,Math.floor(r*t));(this.canvas.width!==s||this.canvas.height!==o)&&(this.renderer.setPixelRatio(1),this.renderer.setSize(s,o,!1),this.camera.aspect=s/o,this.camera.updateProjectionMatrix(),this.composer&&this.composer.setSize(s,o))}applyTod(){let e=zg[this.tod],t=this.skyMat.uniforms;t.uSunDir.value.set(...e.sun),t.uSunCol.value.set(...e.sunCol),t.uFog.value.set(...e.fog),t.uTop.value.set(...e.top),t.uNight.value=e.night,this.scene.fog.color.setRGB(e.fog[0],e.fog[1],e.fog[2],Nt),this.scene.fog.density=e.fogD;let i=new ye().setRGB(e.sunCol[0],e.sunCol[1],e.sunCol[2],Nt),r=Math.max(i.r,i.g,i.b);if(i.multiplyScalar(1/r),this.sun.color.copy(i),this.sun.intensity=e.night?.5:Math.min(4.2,r*1.05),this.hemi.color.setRGB(e.sky[0],e.sky[1],e.sky[2],Nt),this.hemi.groundColor.setRGB(e.gnd[0]*1.5,e.gnd[1]*1.5,e.gnd[2]*1.5,Nt),this.hemi.intensity=e.night?.3:.65,this.nightU.value=e.night,!this.envs[this.tod]){let s=new Go,o=this.skyMat.clone();o.defines={ENV:""},o.uniforms=Ni.clone(this.skyMat.uniforms),o.needsUpdate=!0;let a=new xt(new yl(1,24,14),o);a.scale.setScalar(100),s.add(a),this.envs[this.tod]=this.pmrem.fromScene(s,0,1,500).texture,o.dispose()}this.scene.environment=this.envs[this.tod],this.scene.environmentIntensity=e.night?.35:.9,this.lampHeadMat.color.setRGB(e.night?3:.45,e.night?2.4:.45,e.night?1.4:.45),this.lampHeadMat.color.multiplyScalar(1)}async loadCar(e){if(this.spec=Jr[e],this.sim=new Cl(this.spec),this.cell=[999,999],this.camA=0,this.traffic=new Il(4,6),this.sim.assist=this.assistOn,this.pedObj.forEach(i=>{var r;return i&&((r=i.root.parent)==null?void 0:r.remove(i.root))}),this.pedObj=[],this.tCars.forEach(i=>{var r;return(r=i.obj.root.parent)==null?void 0:r.remove(i.obj.root)}),this.tCars=[],this.carHolder.clear(),this.car=null,this.carIdx=e,this.cockState=null,await this.ensureCar(e),this.carIdx!==e)return;let t=Vg(this.carSrc[e],this.spec.color,{hi:!0,own:!0});nR(t.root,e),this.car=t,this.carHolder.add(t.root)}initComposer(){let e=this.renderer,t=e.getSize(new be),i=new Yt(t.x,t.y,{type:An,samples:4}),r=new Mh(e,i);r.setPixelRatio(1),r.setSize(t.x,t.y),r.addPass(new Sh(this.scene,this.camera)),this.bloom=new ea(new be(t.x/2,t.y/2),.3,.75,.9),r.addPass(this.bloom),r.addPass(new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c=texture2D(tDiffuse,vUv); vec2 q=vUv-.5; float v=1.-smoothstep(.35,.85,length(q*vec2(1.,.8)))*.38; float l=dot(c.rgb,vec3(.2126,.7152,.0722)); c.rgb=mix(vec3(l),c.rgb,1.1)*v; gl_FragColor=c; }"})),r.addPass(new wh),this.composer=r}setAssist(e){this.assistOn=e,this.sim.assist=e}initAudio(){if(this.ac){this.ac.resume();return}try{let e=window.AudioContext||window.webkitAudioContext,t=new e;this.ac=t;let i=t.createGain();i.gain.value=.5,i.connect(t.destination);let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=800,r.connect(i);let s=t.createGain();s.gain.value=0,s.connect(r);let o=(x,v)=>{let d=t.createOscillator();d.type=x;let g=t.createGain();return g.gain.value=v,d.connect(g),g.connect(s),d.start(),d},a=o("sawtooth",.5),l=o("square",.25),c=o("sawtooth",.22),u=t.createBuffer(1,t.sampleRate*2,t.sampleRate),h=u.getChannelData(0);for(let x=0;x<h.length;x++)h[x]=Math.random()*2-1;let f=(x,v,d=1)=>{let g=t.createBufferSource();g.buffer=u,g.loop=!0;let y=t.createBiquadFilter();y.type=v,y.frequency.value=x,y.Q.value=d;let _=t.createGain();return _.gain.value=0,g.connect(y),y.connect(_),_.connect(i),g.start(),{g:_,bf:y}},p=f(1100,"bandpass",2),m=f(500,"lowpass");this.aud={ac:t,master:i,lp:r,eg:s,o1:a,o2:l,o3:c,tire:p,wind:m,nb:u}}catch{this.aud=null}}audioUpdate(){let e=this.aud;if(!e)return;let t=e.ac.currentTime,i=this.sim;if(!this.sound){e.master.gain.setTargetAtTime(0,t,.05);return}e.master.gain.setTargetAtTime(.5,t,.05);let r=i.rpm(),s=Math.max(18,r/60*2);if(e.o1.frequency.setTargetAtTime(s,t,.03),e.o2.frequency.setTargetAtTime(s*.5,t,.03),e.o3.frequency.setTargetAtTime(s*2.01,t,.03),e.eg.gain.setTargetAtTime(i.running?.09+.16*i.thrEff:0,t,.05),e.lp.frequency.setTargetAtTime(350+r*.45+i.thrEff*1400,t,.05),e.tire.g.gain.setTargetAtTime(Math.min(.22,Math.max(0,i.slip-.12)*.9),t,.05),e.wind.g.gain.setTargetAtTime(Math.min(.12,Math.abs(i.u)/60*.12),t,.1),i.impact>1.5){let o=e.ac.createBufferSource();o.buffer=e.nb;let a=e.ac.createGain();a.gain.setValueAtTime(Math.min(.8,i.impact/15),t),a.gain.exponentialRampToValueAtTime(.001,t+.35);let l=e.ac.createBiquadFilter();l.type="lowpass",l.frequency.value=500,o.connect(l),l.connect(a),a.connect(e.master),o.start(t,Math.random()),o.stop(t+.4)}}start(e,t,i){if(this.tod=t,this.applyTod(),this.setQuality(i),this.initAudio(),this.cell=[999,999],this.loadCar(e),!this.running){this.running=!0,this.last=performance.now();let r=s=>{this.running&&(this.raf=requestAnimationFrame(r),this.frame(s))};this.raf=requestAnimationFrame(r)}}stop(){this.running=!1,cancelAnimationFrame(this.raf)}pause(e){this.aud&&(e?this.aud.ac.suspend():this.aud.ac.resume())}respawn(){let e=this.sim,t=Math.round(e.psi/(Math.PI/2))*(Math.PI/2),i=Math.round(Math.sin(t)),r=Math.round(Math.cos(t)),s=e.x,o=e.z;r!==0?s=Math.round(e.x/60)*60-r*3.2:o=Math.round(e.z/60)*60+i*3.2;let a=e.ign;e.reset(s,o,t),a&&e.startEngine(1)}key(e,t){let i=e.key.toLowerCase();if(wt.keys[i]=t,t&&!e.repeat){let r=this.inputs();i==="e"&&this.sim.shift(1,r),i==="q"&&this.sim.shift(-1,r),i==="c"&&(this.view=(this.view+1)%3),i==="r"&&this.respawn(),i==="x"&&this.sim.toggleKey(r.clutch),/^[1-6]$/.test(i)&&this.sim.setGear(+i,r),i==="n"&&this.sim.setGear(0,r),i==="g"&&this.sim.setGear(-1,r),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(i)&&e.preventDefault()}}inputs(){let e=wt.keys;return{steer:this.steerNow,thr:Math.max(wt.thr,this.kbThr),brake:Math.max(wt.brake,this.kbBrake),clutch:Math.max(wt.clutch,this.kbClu),hand:Math.max(wt.hand,e[" "]?1:0)}}setToD(e){this.tod=e,this.applyTod()}frame(e){let t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,t<=0)return;this.time+=t,this.fpsAcc+=t,this.frames++,this.fpsAcc>=1&&(this.fps=this.frames/this.fpsAcc,this.frames=0,this.fpsAcc=0,this.fps<26&&this.quality>0?(this.slow++,this.slow>=3&&(this.setQuality(this.quality-1),this.slow=0,this.sim.toast("Graphics lowered for speed"))):this.slow=0);let i=wt.keys,r=this.sim,s=(f,p,m,x)=>p?Math.min(1,f+m*t):Math.max(0,f-x*t);this.kbThr=s(this.kbThr,!!(i.w||i.arrowup),4,6),this.kbBrake=s(this.kbBrake,!!(i.s||i.arrowdown),5,8),this.kbClu=s(this.kbClu,!!i.shift,6,3);let o=(i.d||i.arrowright?1:0)-(i.a||i.arrowleft?1:0);this.kbSteer+=(o-this.kbSteer)*Math.min(1,t*5);let a=Qr((Math.abs(wt.steer)>.001?wt.steer:this.kbSteer)*wt.sens,-1,1);this.steerNow=a;{let f=Math.abs(r.u),p=Math.abs(a)<Math.abs(r.steerAng)?14+f*.3:24,m=a-r.steerAng,x=(9-Math.min(4,f*.12))*t;r.steerAng+=Qr(m*Math.min(1,t*p),-x,x)}let l=this.inputs(),c=Math.max(1,Math.min(8,Math.round(t*240)));for(let f=0;f<c;f++)r.step(t/c,l);let u=Math.floor(r.x/60),h=Math.floor(r.z/60);if(u!==this.cell[0]||h!==this.cell[1]){this.cell=[u,h];let f=kg(u,h,4),p=kg(u,h,1);this.boxes=p.boxes,this.fillWorld(f)}this.traffic.update(t,r.x,r.z,this.time,r.u),r.collide(this.boxes.concat(this.traffic.boxes())),this.hitCool-=t;for(let f of this.traffic.peds){let p=f.x-r.x,m=f.z-r.z;if(p*p+m*m>30)continue;let x=p*Math.sin(r.psi)+m*Math.cos(r.psi),v=p*Math.cos(r.psi)-m*Math.sin(r.psi);Math.abs(x)<this.spec.L+.3&&Math.abs(v)<this.spec.W+.3&&Math.abs(r.u)>2.5&&this.hitCool<=0&&(this.pedHits++,this.hitCool=3,r.toast("You hit a pedestrian! ("+this.pedHits+")"),f.s+=f.dir*400)}this.updateSignals(),r.msgT>0&&(r.msgT-=t),this.roll+=(-r.ay*.012-this.roll)*Math.min(1,t*6),this.pitch+=(r.ax*.008-this.pitch)*Math.min(1,t*6),this.render(),this.audioUpdate(),this.frames%3===0&&this.hud(),this.mini&&this.frames%4===0&&this.drawMini()}hud(){let e=this.sim,t=this.spec,i=e.gear===0?"N":e.gear<0?"R":String(e.gear);this.onHud({kmh:Math.abs(e.u)*3.6,rpm:e.rpm(),redline:t.redline,gear:t.kind==="auto"?e.autoMode==="D"?"D"+i:e.autoMode:i,running:e.running,ign:e.ign,clutch:e.clutchEff,thr:e.thrEff,brake:Math.max(wt.brake,this.kbBrake),fps:this.fps,msg:e.msgT>0?e.msg:"",manual:t.kind==="manual",assist:this.assistOn,stalled:e.stalled,quality:this.quality,auto:e.autoMode})}drawMini(){let e=this.mini,t=e.getContext("2d"),i=e.width,r=e.height,s=this.sim,o=i/260;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,i,r),t.fillStyle="rgba(18,22,28,.78)",t.fillRect(0,0,i,r);let a=Math.cos(s.psi),l=Math.sin(s.psi);t.setTransform(o*-a,o*-l,o*l,o*-a,i/2,r*.62),t.translate(-s.x,-s.z),t.fillStyle="#4a5360";let c=150;for(let u=Math.floor((s.x-c)/60);u<=Math.ceil((s.x+c)/60);u++)t.fillRect(u*60-7,s.z-c*1.5,14,c*3);for(let u=Math.floor((s.z-c)/60);u<=Math.ceil((s.z+c)/60);u++)t.fillRect(s.x-c*1.5,u*60-7,c*3,14);t.fillStyle="#2b3139";for(let u of this.boxes)t.fillRect(u[0],u[1],u[2]-u[0],u[3]-u[1]);t.fillStyle="#7ec8ff";for(let u of this.traffic.cars)t.fillRect(u.x-1.5,u.z-1.5,3,3);t.setTransform(1,0,0,1,0,0),t.fillStyle="#ffcf3a",t.beginPath(),t.moveTo(i/2,r*.62-9*o*1.4),t.lineTo(i/2-6*o*1.4,r*.62+7*o*1.4),t.lineTo(i/2+6*o*1.4,r*.62+7*o*1.4),t.fill()}fillWorld(e){let t=this.tmpM,i=this.tmpQ,r=this.tmpP,s=this.tmpS,o=this.tmpC;i.identity();let a=(l,c,u,h)=>{let f=Math.min(l.instanceMatrix.count,Math.floor(c.length/9));l.count=f,h&&(h.count=f);for(let p=0;p<f;p++){let m=p*9;r.set(c[m],c[m+1],c[m+2]),s.set(c[m+3],c[m+4],c[m+5]),t.compose(r,i,s),l.setMatrixAt(p,t),h&&h.setMatrixAt(p,t),u&&(o.setRGB(c[m+6],c[m+7],c[m+8],Mt),l.setColorAt(p,o))}l.instanceMatrix.needsUpdate=!0,h&&(h.instanceMatrix.needsUpdate=!0),u&&l.instanceColor&&(l.instanceColor.needsUpdate=!0)};a(this.instBld,e.bld,!0),a(this.instPine,e.pine,!0),a(this.instRound,e.round,!0),a(this.instLamp,e.lamp,!1,this.instLampHead),a(this.instSig,e.sig,!1);for(let l of[this.instLamp,this.instSig])if(l.instanceColor){for(let c=0;c<l.count;c++)l.setColorAt(c,o.setRGB(1,1,1));l.instanceColor.needsUpdate=!0}for(let l=0;l<this.instLampHead.count;l++)this.instLampHead.setColorAt(l,o.setRGB(1,1,1));this.instLampHead.instanceColor&&(this.instLampHead.instanceColor.needsUpdate=!0)}updateSignals(){if(this.sigAcc+=1,this.sigAcc<8)return;this.sigAcc=0;let e=Math.floor((this.sim.x+60/2)/60),t=Math.floor((this.sim.z+60/2)/60),i=3,r=this.instSigL,s=0,o=[[1,.06,.04],[1,.6,.03],[.1,1,.25]],a=this.tmpM,l=this.tmpQ,c=this.tmpP,u=this.tmpS,h=this.tmpC;l.identity();for(let f=e-i;f<=e+i;f++)for(let p=t-i;p<=t+i;p++){let m=[Pl(f,p,0,this.time),Pl(f,p,1,this.time)],x=f*60,v=p*60;for(let d of[-1,1])for(let g of[-1,1]){let y=x+d*8.7,_=v+g*8.7;for(let[T,w,A]of[[0,1,0],[0,-1,0],[1,0,1],[-1,0,1]]){if(s>=1100)break;let C=m[A],S=o[C],M=C===0?6:C===1?5.55:5.1;c.set(y+T*.3,M-.16+.16,_+w*.3),u.set(T?.06:.26,.3,w?.06:.26),a.compose(c,l,u),r.setMatrixAt(s,a),r.setColorAt(s,h.setRGB(S[0]*2.2,S[1]*2.2,S[2]*2.2)),s++}}}r.count=s,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}steerVis(){let e=this.sim,t=Math.abs(e.u);return-e.steerAng*.5/(1+Math.pow(t/9,2.1))}updateCars(){let e=this.sim,t=this.spec,i=zg[this.tod];if(this.car){let a=this.car,l=this.carHolder;l.position.set(e.x,0,e.z),l.rotation.order="YZX",l.rotation.set(this.pitch,e.psi,this.roll);let c=this.steerVis()*1.6;for(let h of a.wheels)h.rotation.x=e.spin;for(let h of a.front)h.rotation.y=c;a.steer&&(a.steer.rotation.z=e.steerAng*2.2);let u=Math.max(wt.brake,this.kbBrake);for(let h of a.tail)h.emissiveIntensity=.15+u*3.2+i.night*.5;for(let h of a.head)h.emissiveIntensity=i.night?2.2:0;a.root.visible=!0,l.updateMatrixWorld(!0)}if(!this.tSrc[0])return;let r=[[.75,.75,.78],[.04,.04,.05],[.5,.06,.06],[.88,.88,.84],[.15,.2,.28],[.8,.62,.08],[.1,.25,.5],[.3,.3,.32]];for(;this.tCars.length<this.traffic.cars.length;){let a=this.tCars.length,l=this.traffic.cars[a].variant%4,c=Vg(this.tSrc[l],r[(a*3+l)%8],{hi:!1,own:!0});this.scene.add(c.root),this.tCars.push({obj:c,variant:l})}for(let a=0;a<this.traffic.cars.length;a++){let l=this.traffic.cars[a],c=this.tCars[a];if(c.variant!==l.variant%4){this.scene.remove(c.obj.root);let x=l.variant%4;c=this.tCars[a]={obj:Vg(this.tSrc[x],r[(a*3+x)%8],{hi:!1,own:!0}),variant:x},this.scene.add(c.obj.root)}let u=l.x-e.x,h=l.z-e.z,f=u*u+h*h,p=c.obj;if(p.root.visible=f<62e3,!p.root.visible)continue;p.root.position.set(l.x,0,l.z),p.root.rotation.set(0,l.psi,0);for(let x of p.wheels)x.rotation.x=l.spin;for(let x of p.tail)x.emissiveIntensity=.15+l.brake*3+i.night*.5;for(let x of p.head)x.emissiveIntensity=i.night?2:0;let m=f<3600&&this.quality>=1;p.root._cs!==m&&(p.root._cs=m,FM(p.root,m))}if(!this.pSrc.some(Boolean))return;let s=this.traffic.peds,o=this.lastDt;for(let a=0;a<s.length;a++){let l=s[a],c=l.x-e.x,u=l.z-e.z,h=c*c+u*u,f=this.pedObj[a]||null;if(h>9e3){f&&(f.root.visible=!1);continue}let p=l.variant%DM.length;if(!f||f.variant!==p){f&&this.scene.remove(f.root);let x=this.pSrc[p];if(!x)continue;let v=CM(x);v.traverse(C=>{C.isMesh&&(C.frustumCulled=!1,C.receiveShadow=!1)});let d=new fh(v),g=this.pAnims[p]||[],y=g.find(C=>/walk/i.test(C.name)),_=g.find(C=>/idle/i.test(C.name)),T=d.clipAction(y||g[0]),w=d.clipAction(_||g[0]);T.play(),w.play(),T.setEffectiveWeight(1),w.setEffectiveWeight(0),T.time=Math.random()*1;let A=.94+a*37%17/17*.14;v.scale.setScalar(A),f=this.pedObj[a]={root:v,mixer:d,walk:T,idle:w,variant:p,wait:!1,scale:A},this.scene.add(v)}f.root.visible=!0,f.root.position.set(l.x,0,l.z),f.root.rotation.y=l.psi,f.wait!==l.wait&&(f.wait=l.wait,f.walk.setEffectiveWeight(l.wait?0:1),f.idle.setEffectiveWeight(l.wait?1:0)),f.walk.setEffectiveTimeScale(Math.max(.6,l.v/1.35)),h<3600&&f.mixer.update(o);let m=h<900&&this.quality>=1;f.root._cs!==m&&(f.root._cs=m,FM(f.root,m))}}render(){let e=this.sim,t=this.spec,i=zg[this.tod],r=this.camera;this.resize();let s=this.canvas.width,o=this.canvas.height;this.lastDt=Math.min(.05,Math.max(.001,1/Math.max(10,this.fps))),this.updateCars();let a=Math.abs(e.u),l=Math.atan2(e.u*Math.sin(e.psi)+e.v*Math.cos(e.psi),e.u*Math.cos(e.psi)-e.v*Math.sin(e.psi)),c=e.psi;if(a>6&&e.u>0){let y=l-e.psi;y=Math.atan2(Math.sin(y),Math.cos(y)),c=e.psi+y*.35}let u=Math.atan2(Math.sin(c-this.camA),Math.cos(c-this.camA));if(this.camA+=u*Math.min(1,.016*4.5),this.camReturn&&!this.camDrag&&performance.now()-this.camTouch>1500){let y=Math.exp(-this.lastDt*3);this.camYaw*=y,this.camPit*=y,Math.abs(this.camYaw)<.002&&(this.camYaw=0)}if(this.car){let y=this.view===1;this.cockState!==y&&(this.cockState=y,this.car.root.traverse(_=>{let T=_.material;_.isMesh&&T&&/^(Glass|Frit)$/.test(T.name)&&(_.visible=!y)}))}let h,f,p=62+Math.min(14,a*.28),m=[e.x,0,e.z];if(this.view===1){let y=Math.sin(e.psi),_=Math.cos(e.psi),T=.37,w=-.16;h=[m[0]+y*w+_*T,1.19+this.pitch*2,m[2]+_*w-y*T];let A=e.psi+e.steerAng*-.04+this.camYaw;f=[h[0]+Math.sin(A)*20,1.1-this.pitch*8+Math.tan(this.camPit)*20,h[2]+Math.cos(A)*20],p=74+Math.min(10,a*.2)}else{let y=(this.view===0?7.2+t.L*.3:12)*this.camZoom,_=this.view===0?2.5+t.H*.5:5,T=this.camA+this.camYaw,w=this.camPit,A=y*Math.cos(w),C=_+Math.sin(w)*y;h=[m[0]-Math.sin(T)*A,C,m[2]-Math.cos(T)*A],f=[m[0]+Math.sin(T)*3,1.15,m[2]+Math.cos(T)*3]}if(this.camPos=h,r.fov=p,r.updateProjectionMatrix(),r.position.set(...h),r.lookAt(f[0],f[1],f[2]),r.updateMatrixWorld(),this.sun.position.set(e.x+i.sun[0]*120,i.sun[1]*120,e.z+i.sun[2]*120),this.sun.target.position.set(e.x,0,e.z),this.sun.target.updateMatrixWorld(),this.quality>=1){let _=110/this.sun.shadow.mapSize.x}this.sky.position.copy(r.position),this.skyMat.uniforms.uTime.value=this.time,this.ground.position.set(Math.round(r.position.x/60)*60,0,Math.round(r.position.z/60)*60);let x=i.night>.5;this.headL.intensity=x?90:0,x&&(this.headL.position.set(e.x+Math.sin(e.psi)*1.8,.75,e.z+Math.cos(e.psi)*1.8),this.headL.target.position.set(e.x+Math.sin(e.psi)*20,0,e.z+Math.cos(e.psi)*20),this.headL.target.updateMatrixWorld());let v=x&&this.quality>=1,d=this.nearLamps();for(let y=0;y<4;y++){let _=this.lampLights[y];_.intensity=v&&d[y]?70:0,d[y]&&_.position.set(d[y][0]+1.2,7,d[y][1])}this.renderer.shadowMap.autoUpdate=!0,this.quality>=2&&this.composer?this.composer.render():this.renderer.render(this.scene,r),this.view===1&&this.quality>=1&&this.car&&this.renderMirrors()}renderMirrors(){let e=this.renderer,t=this.sim,i=this.mirF++%3,r=this.canvas.width,s=this.canvas.height,o=Math.sin(t.psi),a=Math.cos(t.psi),l=this.mirCam,c=(_,T,w)=>[t.x+o*w+a*_,T,t.z+a*w-o*_],u,h,f,p=!1;if(i===0)u=c(0,1.3,-2.3),h=[-o,0,-a],f=38,p=!0;else{let _=i===1?1:-1;u=c(_*1,1.02,.5),h=[-o*.96+a*.24*_,0,-a*.96-o*.24*_],f=46}l.fov=f,l.aspect=this.mirRT[i].width/this.mirRT[i].height,l.updateProjectionMatrix(),l.position.set(u[0],u[1],u[2]),l.lookAt(u[0]+h[0]*30,u[1]-.5,u[2]+h[2]*30),l.updateMatrixWorld();let m=this.sky.position.clone();this.sky.position.copy(l.position),p&&(this.carHolder.visible=!1),e.shadowMap.autoUpdate=!1,e.setRenderTarget(this.mirRT[i]),e.render(this.scene,l),e.setRenderTarget(null),e.shadowMap.autoUpdate=!0,this.carHolder.visible=!0,this.sky.position.copy(m);let x=new ye;e.getClearColor(x);let v=e.getClearAlpha();e.autoClear=!1,e.setScissorTest(!0),e.setClearColor(658448,1);let d=Math.round(r*.24),g=Math.round(r*.15),y=[[Math.round((r-d)/2),Math.round(s*.15),d,Math.round(d/3.33)],[Math.round(r*.03),Math.round(s*.36),g,Math.round(g/1.25)],[Math.round(r*.82),Math.round(s*.36),g,Math.round(g/1.25)]];for(let _=0;_<3;_++){let[T,w,A,C]=y[_],S=s-w-C;this.mirQuad.material.map=this.mirRT[_].texture,e.setScissor(T-3,S-3,A+6,C+6),e.setViewport(T-3,S-3,A+6,C+6),e.clear(!0,!1,!1),e.setScissor(T,S,A,C),e.setViewport(T,S,A,C),this.mirQuad.material.needsUpdate=!1,e.render(this.mirScene,this.mirOrtho)}e.setScissorTest(!1),e.setViewport(0,0,r,s),e.setClearColor(x,v),e.autoClear=!0}nearLamps(){if(this.lampAcc++,this.lampAcc%15===1){let e=this.sim,t=[],i=[[8.4,31],[-8.4,31],[31,8.4],[31,-8.4]],r=Math.floor(e.x/60),s=Math.floor(e.z/60);for(let o=r-1;o<=r+1;o++)for(let a=s-1;a<=s+1;a++)for(let l of i){let c=o*60+l[0],u=a*60+l[1];t.push([c,u,(c-e.x)**2+(u-e.z)**2])}t.sort((o,a)=>o[2]-a[2]),this.lampCache=t.slice(0,4).map(o=>[o[0],o[1]])}return this.lampCache}};var Ps=(n,e,t)=>Math.max(e,Math.min(t,n));function XM(n,e){let t=e.getBoundingClientRect(),i=n.clientX-(t.left+t.width/2),r=n.clientY-(t.top+t.height/2),s=e.offsetWidth,o=e.offsetHeight;return wt.rot?[(r+s/2)/s,(-i+o/2)/o]:[(i+s/2)/s,(r+o/2)/o]}function Gg({label:n,color:e,field:t,lock:i}){let r=(0,F.useRef)(null),s=(0,F.useRef)(null),o=(0,F.useRef)(0),a=(0,F.useRef)(0),l=(0,F.useRef)(!1);(0,F.useEffect)(()=>{let u=0,h=performance.now(),f=p=>{let m=Math.min(.05,(p-h)/1e3);h=p,l.current?a.current+=(o.current-a.current)*Math.min(1,m*18):a.current=Math.max(0,a.current-m*(t==="clutch"?2.2:6)),wt[t]=a.current,r.current&&(r.current.style.height=Math.round(a.current*100)+"%"),u=requestAnimationFrame(f)};return u=requestAnimationFrame(f),()=>{cancelAnimationFrame(u),wt[t]=0}},[t]);let c=u=>{let h=XM(u,s.current)[1];o.current=Ps((h-.08)/.6,0,1)};return F.default.createElement("div",{ref:s,className:"gp-pedal",style:{borderColor:e},onPointerDown:u=>{u.preventDefault(),u.target.setPointerCapture(u.pointerId),l.current=!0,c(u)},onPointerMove:u=>{l.current&&c(u)},onPointerUp:()=>{l.current=!1},onPointerCancel:()=>{l.current=!1}},F.default.createElement("div",{ref:r,className:"gp-fill",style:{background:e}}),F.default.createElement("span",null,n),null)}function VM({compact:n}){let[e,t]=(0,F.useState)(wt.sens),i=r=>{let s=parseFloat(r.target.value);t(s),wt.sens=s;try{localStorage.setItem("rs_sens",String(s))}catch{}};return F.default.createElement("label",{className:"gp-sens"+(n?" c":"")},F.default.createElement("span",null,"Steer ",Math.round(e*100),"%"),F.default.createElement("input",{type:"range",min:"0.4",max:"1.8",step:"0.05",value:e,onChange:i,onPointerDown:r=>r.stopPropagation()}))}function rR(){let n=(0,F.useRef)(null),e=(0,F.useRef)(0),t=(0,F.useRef)(0),i=(0,F.useRef)(!1),r=(0,F.useRef)(0),s=(0,F.useRef)(0),o=Math.PI*.8;(0,F.useEffect)(()=>{let l=0,c=performance.now(),u=h=>{let f=Math.min(.05,(h-c)/1e3);if(c=h,!i.current){let m=3.2+4*(1-Math.min(1,Math.abs(t.current)/o));t.current*=Math.exp(-m*f),Math.abs(t.current)<.01&&(t.current=0)}e.current+=(t.current-e.current)*Math.min(1,f*(i.current?45:40));let p=Ps(e.current/o,-1,1);wt.steer=Math.sign(p)*Math.pow(Math.abs(p),1.2),n.current&&(n.current.style.transform=`rotate(${e.current*180/Math.PI}deg)`),l=requestAnimationFrame(u)};return l=requestAnimationFrame(u),()=>{cancelAnimationFrame(l),wt.steer=0}},[]);let a=l=>{let c=l.currentTarget.getBoundingClientRect();return Math.atan2(l.clientY-(c.top+c.height/2),l.clientX-(c.left+c.width/2))};return F.default.createElement("div",{className:"gp-wheelwrap",onPointerDown:l=>{l.preventDefault(),l.currentTarget.setPointerCapture(l.pointerId),i.current=!0,s.current=a(l),r.current=t.current},onPointerMove:l=>{if(!i.current)return;let c=l.currentTarget.getBoundingClientRect();if(Math.hypot(l.clientX-(c.left+c.width/2),l.clientY-(c.top+c.height/2))<c.width*.12)return;let u=a(l),h=u-s.current;h=Math.atan2(Math.sin(h),Math.cos(h)),s.current=u,!(Math.abs(h)>.6)&&(t.current=Ps(t.current+h,-o,o))},onPointerUp:()=>{i.current=!1},onPointerCancel:()=>{i.current=!1}},F.default.createElement("div",{ref:n,className:"gp-wheel"},F.default.createElement("svg",{viewBox:"0 0 100 100",width:"100%",height:"100%"},F.default.createElement("defs",null,F.default.createElement("radialGradient",{id:"lthr",cx:"50%",cy:"50%",r:"50%"},F.default.createElement("stop",{offset:"80%",stopColor:"#2a2b2f"}),F.default.createElement("stop",{offset:"92%",stopColor:"#17181b"}),F.default.createElement("stop",{offset:"100%",stopColor:"#0c0c0e"})),F.default.createElement("linearGradient",{id:"spk",x1:"0",y1:"0",x2:"0",y2:"1"},F.default.createElement("stop",{offset:"0",stopColor:"#8d939c"}),F.default.createElement("stop",{offset:".5",stopColor:"#3a3d44"}),F.default.createElement("stop",{offset:"1",stopColor:"#1d1f23"})),F.default.createElement("radialGradient",{id:"hub",cx:"40%",cy:"35%",r:"75%"},F.default.createElement("stop",{offset:"0",stopColor:"#4a4e56"}),F.default.createElement("stop",{offset:"1",stopColor:"#15161a"})),F.default.createElement("pattern",{id:"grain",width:"2.2",height:"2.2",patternUnits:"userSpaceOnUse"},F.default.createElement("circle",{cx:"0.6",cy:"0.6",r:"0.35",fill:"#ffffff",fillOpacity:".09"}),F.default.createElement("circle",{cx:"1.7",cy:"1.6",r:"0.3",fill:"#000",fillOpacity:".35"}))),F.default.createElement("circle",{cx:"50",cy:"50",r:"44.5",fill:"none",stroke:"#0b0b0d",strokeWidth:"11.5"}),F.default.createElement("circle",{cx:"50",cy:"50",r:"44.5",fill:"none",stroke:"#232428",strokeWidth:"10"}),F.default.createElement("circle",{cx:"50",cy:"50",r:"44.5",fill:"none",stroke:"url(#grain)",strokeWidth:"10"}),F.default.createElement("circle",{cx:"50",cy:"50",r:"48.2",fill:"none",stroke:"#4a4d54",strokeWidth:".7",strokeOpacity:".8"}),F.default.createElement("circle",{cx:"50",cy:"50",r:"40.6",fill:"none",stroke:"#4a4d54",strokeWidth:".7",strokeOpacity:".8"}),F.default.createElement("circle",{cx:"50",cy:"50",r:"44.5",fill:"none",stroke:"#d8c48e",strokeWidth:".7",strokeDasharray:"1.7 1.3",strokeOpacity:".75",transform:"rotate(2 50 50)"}),F.default.createElement("g",{stroke:"#3b3d44",strokeWidth:"11",strokeLinecap:"round",fill:"none"},F.default.createElement("path",{d:"M10.6 42 A42 42 0 0 0 10.6 62"}),F.default.createElement("path",{d:"M89.4 42 A42 42 0 0 1 89.4 62"})),F.default.createElement("rect",{x:"46.2",y:"2.4",width:"7.6",height:"9.4",rx:"1.2",fill:"#d8352b"}),F.default.createElement("rect",{x:"49.4",y:"3.4",width:".8",height:"7.4",fill:"#fff",fillOpacity:".5"}),F.default.createElement("path",{d:"M7 50 L34 44 Q50 41 66 44 L93 50 L93 56 L66 53 Q50 51.5 34 53 L7 56 Z",fill:"url(#spk)",stroke:"#0d0e10",strokeWidth:".8"}),F.default.createElement("path",{d:"M43 56 L40 84 Q50 88 60 84 L57 56 Z",fill:"url(#spk)",stroke:"#0d0e10",strokeWidth:".8"}),F.default.createElement("circle",{cx:"50",cy:"52",r:"13.5",fill:"url(#hub)",stroke:"#8d939c",strokeWidth:"1.2"}),F.default.createElement("circle",{cx:"50",cy:"52",r:"9",fill:"#0f1013",stroke:"#c9ccd2",strokeWidth:".8"}),F.default.createElement("circle",{cx:"50",cy:"52",r:"4.2",fill:"#2a2d33",stroke:"#c9ccd2",strokeWidth:".7"}),F.default.createElement("circle",{cx:"22",cy:"48.5",r:"1.3",fill:"#9aa0a8"}),F.default.createElement("circle",{cx:"78",cy:"48.5",r:"1.3",fill:"#9aa0a8"}))))}var bh=120,Wg=136,es=68,ii=22,fr=114,Dt=[20,46,72,98],GM={[-1]:[Dt[0],ii],1:[Dt[1],ii],2:[Dt[1],fr],3:[Dt[2],ii],4:[Dt[2],fr],5:[Dt[3],ii],6:[Dt[3],fr]};function sR({gearTxt:n,game:e}){let t=(0,F.useRef)(null),[i,r]=(0,F.useState)(null),s=(0,F.useRef)(2),o=(0,F.useRef)(Dt[2]-13),a=(0,F.useRef)(99),l=(0,F.useRef)(!1),c=n==="R"?-1:n==="N"?0:parseInt(n)||0,u=c!==0&&GM[c]?GM[c]:[o.current,es],h=i||u,f=p=>{let[m,x]=XM(p,t.current),v=Ps(m*bh,10,bh-10),d=Ps(x*Wg,ii-6,fr+6),g,y=d;if(Math.abs(d-es)<13){let A=0;Dt.forEach((C,S)=>{Math.abs(C-v)<Math.abs(Dt[A]-v)&&(A=S)}),s.current=A,g=v,o.current=v,a.current=99}else g=Dt[s.current],s.current===0&&d>es&&(y=es+12);let T=c,w=e();y<=ii+4?T=s.current===0?-1:s.current*2-1:y>=fr-4&&s.current>0?T=s.current*2:Math.abs(y-es)<24&&(T=0),T!==w.sim.gear&&a.current!==T&&(a.current=T,w.sim.setGear(T,w.inputs()),w.sim.gear!==T&&(y=Ps(y,es-12,es+12))),r([g,y])};return F.default.createElement("div",{ref:t,className:"gp-stick",onPointerDown:p=>{p.preventDefault(),p.currentTarget.setPointerCapture(p.pointerId),l.current=!0,a.current=99,f(p)},onPointerMove:p=>{l.current&&f(p)},onPointerUp:()=>{l.current=!1,r(null)},onPointerCancel:()=>{l.current=!1,r(null)}},F.default.createElement("svg",{viewBox:`0 0 ${bh} ${Wg}`,width:"100%",height:"100%"},F.default.createElement("rect",{x:"2",y:"2",width:bh-4,height:Wg-4,rx:"12",fill:"rgba(10,12,16,.62)",stroke:"rgba(255,255,255,.25)"}),F.default.createElement("g",{stroke:"#3a3f47",strokeWidth:"9",strokeLinecap:"round",fill:"none"},F.default.createElement("path",{d:`M${Dt[0]} ${ii} V${es} H${Dt[3]}`}),[1,2,3].map(p=>F.default.createElement("path",{key:p,d:`M${Dt[p]} ${ii} V${fr}`}))),[["R",Dt[0],ii-12],["1",Dt[1],ii-12],["2",Dt[1],fr+17],["3",Dt[2],ii-12],["4",Dt[2],fr+17],["5",Dt[3],ii-12],["6",Dt[3],fr+17]].map(([p,m,x])=>F.default.createElement("text",{key:p,x:m,y:x,textAnchor:"middle",fontSize:"11",fill:"#9aa1ab",fontFamily:"system-ui",fontWeight:"700"},p)),F.default.createElement("circle",{cx:h[0],cy:h[1],r:"11",fill:c===0?"#ffb020":"#ff6a3d",stroke:"#fff",strokeWidth:"1.5"})))}function oR({h:n}){let e=Ps(n.rpm/n.redline,0,1.05),t=44,i=Math.PI*1.5*t,r=e>.88;return F.default.createElement("svg",{viewBox:"0 0 120 120",className:"gp-gauge"},F.default.createElement("circle",{cx:"60",cy:"60",r:"52",fill:"rgba(10,12,16,.62)"}),F.default.createElement("circle",{cx:"60",cy:"60",r:t,fill:"none",stroke:"#2c3037",strokeWidth:"8",strokeDasharray:`${i} 999`,transform:"rotate(135 60 60)",strokeLinecap:"round"}),F.default.createElement("circle",{cx:"60",cy:"60",r:t,fill:"none",stroke:r?"#ff3b30":"#ffb020",strokeWidth:"8",strokeDasharray:`${i*Math.min(1,e)} 999`,transform:"rotate(135 60 60)",strokeLinecap:"round"}),F.default.createElement("text",{x:"60",y:"58",textAnchor:"middle",fill:"#fff",fontSize:"26",fontWeight:"700",fontFamily:"system-ui"},Math.round(n.kmh)),F.default.createElement("text",{x:"60",y:"72",textAnchor:"middle",fill:"#9aa1ab",fontSize:"9",fontFamily:"system-ui"},"km/h"),F.default.createElement("text",{x:"60",y:"94",textAnchor:"middle",fill:n.running?"#ffd24a":"#ff5a4f",fontSize:"17",fontWeight:"700",fontFamily:"system-ui"},n.running?n.gear:n.ign?"...":"OFF"),F.default.createElement("text",{x:"60",y:"108",textAnchor:"middle",fill:"#9aa1ab",fontSize:"8",fontFamily:"system-ui"},Math.round(n.rpm/10)*10," rpm"))}var WM=["Day","Sunset","Night"],aR=["Low","Medium","High"];function Xg({standalone:n=!1}){let e=(0,F.useRef)(null),t=(0,F.useRef)(null),i=(0,F.useRef)(null),r=(0,F.useRef)(null),[s,o]=(0,F.useState)("menu"),[a,l]=(0,F.useState)(0),[c,u]=(0,F.useState)(0),[h,f]=(0,F.useState)(2),[p,m]=(0,F.useState)(()=>{try{return localStorage.getItem("rs_camret")!=="0"}catch{return!0}}),[x,v]=(0,F.useState)(null),[d,g]=(0,F.useState)(""),[y,_]=(0,F.useState)(360),[T,w]=(0,F.useState)(0),[A,C]=(0,F.useState)(!0),[S,M]=(0,F.useState)(!1),[P,B]=(0,F.useState)(!1),[k,W]=(0,F.useState)(400),[Z,q]=(0,F.useState)(!1),te=y>=620,G=k<=440,se=te?Math.min(560,Math.round(y*.5)):Math.min(660,Math.round(y*1.6));wt.rot=P?1:0,(0,F.useEffect)(()=>{let X=()=>{var Pe,at;_(((Pe=e.current)==null?void 0:Pe.clientWidth)||360),W(((at=e.current)==null?void 0:at.clientHeight)||400)},me=new ResizeObserver(X);e.current&&me.observe(e.current),X();let Ae=()=>q(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",Ae),()=>{me.disconnect(),document.removeEventListener("fullscreenchange",Ae)}},[]),(0,F.useEffect)(()=>()=>{var X;(X=r.current)==null||X.stop()},[]),(0,F.useEffect)(()=>{let X=Ae=>{var Pe;s==="play"&&((Pe=r.current)==null||Pe.key(Ae,!0))},me=Ae=>{var Pe;s==="play"&&((Pe=r.current)==null||Pe.key(Ae,!1))};return window.addEventListener("keydown",X),window.addEventListener("keyup",me),()=>{window.removeEventListener("keydown",X),window.removeEventListener("keyup",me)}},[s]),(0,F.useEffect)(()=>{s==="play"&&r.current&&(r.current.mini=i.current)},[s]);let he=()=>{try{r.current||(r.current=new Th(t.current),r.current.mini=i.current,r.current.onHud=v);let X=r.current;X.setAssist(S),X.start(a,c,h),X.view=T,X.sound=A,X.setAssist(S),o("play")}catch(X){g(String((X==null?void 0:X.message)||X))}},de=()=>r.current,De=Jr[a].kind==="manual",Ze=typeof document!="undefined"&&!!document.fullscreenEnabled,K=async()=>{try{if(document.fullscreenElement){await document.exitFullscreen();return}await e.current.requestFullscreen();try{await screen.orientation.lock("landscape")}catch{}}catch{}},ne=()=>{de().sim.toggleKey(de().inputs().clutch)},_e=()=>{let X=(c+1)%3;u(X),de().setToD(X)};return F.default.createElement("div",{ref:e,className:"gp-box"+(te?" wide":"")+(G?" short":"")+(n?" standalone":"")+(P?" rot":""),style:n||P?void 0:{height:se}},F.default.createElement("canvas",{ref:t,className:"gp-canvas",onPointerDown:()=>{}}),s==="play"&&F.default.createElement(F.default.Fragment,null,F.default.createElement("canvas",{ref:i,width:220,height:220,className:"gp-mini"}),x&&F.default.createElement("div",{className:"gp-hud"},F.default.createElement(oR,{h:x})),x!=null&&x.msg?F.default.createElement("div",{className:"gp-toast"},x.msg):null,F.default.createElement("div",{className:"gp-top"},F.default.createElement("button",{type:"button",onClick:()=>{o("menu"),de().pause(!0)}},"Menu"),F.default.createElement("button",{type:"button",onClick:()=>{let X=(T+1)%3;w(X),de().view=X}},"Cam"),F.default.createElement("button",{type:"button",onClick:_e},WM[c]),F.default.createElement("button",{type:"button",onClick:()=>{C(!A),de().sound=!A}},A?"Sound":"Muted"),F.default.createElement("button",{type:"button",onClick:()=>de().respawn()},"Reset"),F.default.createElement(VM,{compact:!0}),F.default.createElement("button",{type:"button",className:x!=null&&x.ign?"on":"",onClick:ne},"KEY ",x!=null&&x.ign?"ON":"OFF"),F.default.createElement("button",{type:"button",className:P?"on":"",onClick:()=>B(!P)},"Rotate view"),Ze&&F.default.createElement("button",{type:"button",className:Z?"on":"",onClick:K},Z?"Exit full":"Fullscreen"),De&&F.default.createElement("button",{type:"button",className:S?"on":"",onClick:()=>{M(!S),de().setAssist(!S)}},"Assist ",S?"ON":"OFF")),x&&!x.ign&&F.default.createElement("button",{type:"button",className:"gp-start",onClick:ne},x.stalled?"STALLED: TURN KEY TO RESTART":"TURN KEY: START ENGINE"),F.default.createElement("div",{className:"gp-left"+(De?" withclutch":"")},F.default.createElement("button",{type:"button",className:"gp-hb",onPointerDown:X=>{X.target.setPointerCapture(X.pointerId),wt.hand=1},onPointerUp:()=>{wt.hand=0},onPointerCancel:()=>{wt.hand=0}},"HAND BRAKE"),F.default.createElement(rR,null)),De?F.default.createElement("div",{className:"gp-gear"},F.default.createElement(sR,{gearTxt:x?x.gear:"N",game:de})):F.default.createElement("div",{className:"gp-gear"},["D","N","R"].map(X=>F.default.createElement("button",{key:X,type:"button",className:(x==null?void 0:x.auto)===X?"on":"",onClick:()=>de().sim.setAuto(X)},X))),De&&F.default.createElement("div",{className:"gp-clutch"},F.default.createElement(Gg,{label:"CLUTCH",color:"#4aa3ff",field:"clutch"})),F.default.createElement("div",{className:"gp-pedals"},F.default.createElement(Gg,{label:"BRAKE",color:"#ff4a4a",field:"brake"}),F.default.createElement(Gg,{label:"GAS",color:"#3ddc84",field:"thr"}))),s==="menu"&&F.default.createElement("div",{className:"gp-menu"},F.default.createElement("div",{className:"gp-title"},"OPEN ROAD SIM"),F.default.createElement("div",{className:"gp-sub"},"Open-world driving simulator"),F.default.createElement("div",{className:"gp-cars"},Jr.map((X,me)=>F.default.createElement("button",{type:"button",key:X.id,className:"gp-car"+(me===a?" sel":""),onClick:()=>l(me)},F.default.createElement("b",null,X.name),F.default.createElement("span",null,X.kind==="manual"?"MANUAL + clutch":"AUTOMATIC"),F.default.createElement("em",null,X.blurb)))),F.default.createElement("div",{className:"gp-row"},F.default.createElement("span",null,"Time"),WM.map((X,me)=>F.default.createElement("button",{type:"button",key:X,className:me===c?"on":"",onClick:()=>u(me)},X))),F.default.createElement("div",{className:"gp-row"},F.default.createElement(VM,null)),F.default.createElement("div",{className:"gp-row"},F.default.createElement("span",null,"Camera auto-return"),F.default.createElement("button",{type:"button",className:p?"on":"",onClick:()=>{var X;m(!0),(X=r.current)==null||X.setCamReturn(!0)}},"On"),F.default.createElement("button",{type:"button",className:p?"":"on",onClick:()=>{var X;m(!1),(X=r.current)==null||X.setCamReturn(!1)}},"Off"),F.default.createElement("span",{style:{opacity:.6,fontSize:11}},"Drag = look around, pinch = zoom")),F.default.createElement("div",{className:"gp-row"},F.default.createElement("span",null,"Graphics"),aR.map((X,me)=>F.default.createElement("button",{type:"button",key:X,className:me===h?"on":"",onClick:()=>f(me)},X))),Jr[a].kind==="manual"&&F.default.createElement("div",{className:"gp-row"},F.default.createElement("span",null,"Clutch assist"),F.default.createElement("button",{type:"button",className:S?"":"on",onClick:()=>M(!1)},"Off (real)"),F.default.createElement("button",{type:"button",className:S?"on":"",onClick:()=>M(!0)},"On (easy)")),d?F.default.createElement("div",{className:"gp-err"},d):null,F.default.createElement("button",{type:"button",className:"gp-drive",onClick:he},"DRIVE"),F.default.createElement("p",{className:"gp-credit"},zM),F.default.createElement("div",{className:"gp-tip"},"Manual cars: hold the CLUTCH pedal (left), then move the gear stick. Car names are style-inspired, not licensed models."),Ze&&F.default.createElement("button",{type:"button",className:"gp-fsbtn",onClick:K},"Fullscreen landscape"),F.default.createElement("button",{type:"button",className:"gp-fsbtn",onClick:()=>B(!P)},P?"Normal view":"Rotate view (use phone upright)")))}(0,qM.createRoot)(document.getElementById("root")).render(YM.default.createElement(Xg,{standalone:!0}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
