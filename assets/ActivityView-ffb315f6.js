import{i as U,w as ie,o as de,a as xe,b as cr,c as B,d as pe,m as yn,e as xn,p as wn,r as D,f as be,g as ye,u as ae,h as Cn,j as R,k as se,l as ur,n as fr,q as Re,s as Ft,C as hr,t as vr,v as Z,x as bt,y as v,z as _n,L as $n,A as yt,B as xt,D as Ae,E as Ue,F as Ie,G as mr,H as pr,I as wt,J as gr,K as me,M as Ct,N as br,O as Se,P as kn,Q as ut,S as jt,R as yr,U as Ht,T as Wt,V as Fe,W as xr,X as Vt,Y as wr,Z as Cr,_ as _r,$ as $r,a0 as kr,a1 as Sr,a2 as _t,a3 as b,a4 as A,a5 as X,a6 as Sn,a7 as zn,a8 as z,a9 as M,aa as F,ab as re,ac as $t,ad as zr,ae as q,af as Be,ag as Tr,ah as kt,ai as Tn,aj as Pr,ak as Ut,al as Pn,am as Yt,an as Kt,ao as Mr,ap as St,aq as Ee,ar as Br,as as Er,at as Xt,au as Or,av as Q,aw as ft,ax as le,ay as Ye,az as Ar,aA as Rr,aB as ht,aC as Ir,aD as Lr,aE as Nr,aF as Mn,aG as Bn,aH as Dr,aI as Ke,aJ as Fr,aK as jr,aL as Hr,aM as Wr,aN as Vr,aO as Ur,aP as Yr,aQ as Kr,aR as Xr,aS as Gt,aT as zt,aU as En,aV as Tt,aW as Gr,aX as qr,aY as Zr,aZ as qt,a_ as te,a$ as ze,b0 as k,b1 as _,b2 as x,b3 as we,b4 as L,b5 as K,b6 as Jr,b7 as Qr,b8 as Xe,b9 as On,ba as eo}from"./index-57bbe7ec.js";let He=[];const An=new WeakMap;function to(){He.forEach(e=>e(...An.get(e))),He=[]}function Rn(e,...t){An.set(e,t),!He.includes(e)&&He.push(e)===1&&requestAnimationFrame(to)}function no(e){return e.nodeType===9?null:e.parentNode}function In(e){if(e===null)return null;const t=no(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return In(t)}function Pt(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function ro(e,t="default",n=[]){const o=e.$slots[t];return o===void 0?n:o()}function oo(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const io=/^(\d|\.)+$/,Zt=/(\d|\.)+/;function J(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+n)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(io.test(e)){const o=(Number(e)+n)*t;return r?o===0?"0":`${o}px`:`${o}`}else{const o=Zt.exec(e);return o?e.replace(Zt,String((Number(o[0])+n)*t)):e}return e}let et;function ao(){return et===void 0&&(et=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),et}function lo(e,t,n){const r=U(e,null);r!==null&&(t in r||(r[t]=[]),r[t].push(n.value),ie(n,(o,i)=>{const a=r[t],l=a.findIndex(s=>s===i);~l&&a.splice(l,1),a.push(o)}),de(()=>{const o=r[t],i=o.findIndex(a=>a===n.value);~i&&o.splice(i,1)}))}function so(e,t,n){const r=U(e,null);r!==null&&(t in r||(r[t]=[]),xe(()=>{const o=n();o&&r[t].push(o)}),de(()=>{const o=r[t],i=n(),a=o.findIndex(l=>l===i);~a&&o.splice(a,1)}))}let $e,Oe;const co=()=>{var e,t;$e=cr?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,Oe=!1,$e!==void 0?$e.then(()=>{Oe=!0}):Oe=!0};co();function Ln(e){if(Oe)return;let t=!1;xe(()=>{Oe||$e==null||$e.then(()=>{t||e()})}),de(()=>{t=!0})}function Ge(e,t){return ie(e,n=>{n!==void 0&&(t.value=n)}),B(()=>e.value===void 0?t.value:e.value)}function uo(e,t){return B(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const fo=pe("n-internal-select-menu-body"),Nn="__disabled__";function ke(e){const t=U(yn,null),n=U(xn,null),r=U(wn,null),o=U(fo,null),i=D();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};xe(()=>{be("fullscreenchange",document,a)}),de(()=>{ye("fullscreenchange",document,a)})}return ae(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?Nn:l===!0?i.value||"body":l:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:l??(i.value||"body")})}ke.tdkey=Nn;ke.propTo={type:[String,Object,Boolean],default:void 0};let Jt=!1;function ho(){if(Cn&&window.CSS&&!Jt&&(Jt=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}let ve=null;function Dn(){if(ve===null&&(ve=document.getElementById("v-binder-view-measurer"),ve===null)){ve=document.createElement("div"),ve.id="v-binder-view-measurer";const{style:e}=ve;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(ve)}return ve.getBoundingClientRect()}function vo(e,t){const n=Dn();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function tt(e){const t=e.getBoundingClientRect(),n=Dn();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function mo(e){return e.nodeType===9?null:e.parentNode}function Fn(e){if(e===null)return null;const t=mo(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return Fn(t)}const po=R({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;se("VBinder",(t=ur())===null||t===void 0?void 0:t.proxy);const n=U("VBinder",null),r=D(null),o=d=>{r.value=d,n&&e.syncTargetWithParent&&n.setTargetRef(d)};let i=[];const a=()=>{let d=r.value;for(;d=Fn(d),d!==null;)i.push(d);for(const S of i)be("scroll",S,g,!0)},l=()=>{for(const d of i)ye("scroll",d,g,!0);i=[]},s=new Set,c=d=>{s.size===0&&a(),s.has(d)||s.add(d)},w=d=>{s.has(d)&&s.delete(d),s.size===0&&l()},g=()=>{Rn(h)},h=()=>{s.forEach(d=>d())},C=new Set,y=d=>{C.size===0&&be("resize",window,u),C.has(d)||C.add(d)},m=d=>{C.has(d)&&C.delete(d),C.size===0&&ye("resize",window,u)},u=()=>{C.forEach(d=>d())};return de(()=>{ye("resize",window,u),l()}),{targetRef:r,setTargetRef:o,addScrollListener:c,removeScrollListener:w,addResizeListener:y,removeResizeListener:m}},render(){return fr("binder",this.$slots)}}),go=po,bo=R({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=U("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Re(Ft("follower",this.$slots),[[t]]):Ft("follower",this.$slots)}}),Ce="@@mmoContext",yo={mounted(e,{value:t}){e[Ce]={handler:void 0},typeof t=="function"&&(e[Ce].handler=t,be("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[Ce];typeof t=="function"?n.handler?n.handler!==t&&(ye("mousemoveoutside",e,n.handler),n.handler=t,be("mousemoveoutside",e,t)):(e[Ce].handler=t,be("mousemoveoutside",e,t)):n.handler&&(ye("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[Ce];t&&ye("mousemoveoutside",e,t),e[Ce].handler=void 0}},xo=yo,{c:Le}=hr(),wo="vueuc-style",Ne={top:"bottom",bottom:"top",left:"right",right:"left"},Qt={start:"end",center:"center",end:"start"},nt={top:"height",bottom:"height",left:"width",right:"width"},Co={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},_o={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},$o={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},en={top:!0,bottom:!1,left:!0,right:!1},tn={top:"end",bottom:"start",left:"end",right:"start"};function ko(e,t,n,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",c={top:0,left:0};const w=(C,y,m)=>{let u=0,d=0;const S=n[C]-t[y]-t[C];return S>0&&r&&(m?d=en[y]?S:-S:u=en[y]?S:-S),{left:u,top:d}},g=a==="left"||a==="right";if(s!=="center"){const C=$o[e],y=Ne[C],m=nt[C];if(n[m]>t[m]){if(t[C]+t[m]<n[m]){const u=(n[m]-t[m])/2;t[C]<u||t[y]<u?t[C]<t[y]?(s=Qt[l],c=w(m,y,g)):c=w(m,C,g):s="center"}}else n[m]<t[m]&&t[y]<0&&t[C]>t[y]&&(s=Qt[l])}else{const C=a==="bottom"||a==="top"?"left":"top",y=Ne[C],m=nt[C],u=(n[m]-t[m])/2;(t[C]<u||t[y]<u)&&(t[C]>t[y]?(s=tn[C],c=w(m,C,g)):(s=tn[y],c=w(m,y,g)))}let h=a;return t[a]<n[nt[a]]&&t[a]<t[Ne[a]]&&(h=Ne[a]),{placement:s!=="center"?`${h}-${s}`:h,left:c.left,top:c.top}}function So(e,t){return t?_o[e]:Co[e]}function zo(e,t,n,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const To=Le([Le(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Le(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Le("> *",{pointerEvents:"all"})])]),Po=R({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=U("VBinder"),n=ae(()=>e.enabled!==void 0?e.enabled:e.show),r=D(null),o=D(null),i=()=>{const{syncTrigger:h}=e;h.includes("scroll")&&t.addScrollListener(s),h.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};xe(()=>{n.value&&(s(),i())});const l=vr();To.mount({id:"vueuc/binder",head:!0,anchorMetaName:wo,ssr:l}),de(()=>{a()}),Ln(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const h=r.value;if(h===null)return;const C=t.targetRef,{x:y,y:m,overlap:u}=e,d=y!==void 0&&m!==void 0?vo(y,m):tt(C);h.style.setProperty("--v-target-width",`${Math.round(d.width)}px`),h.style.setProperty("--v-target-height",`${Math.round(d.height)}px`);const{width:S,minWidth:N,placement:T,internalShift:$,flip:f}=e;h.setAttribute("v-placement",T),u?h.setAttribute("v-overlap",""):h.removeAttribute("v-overlap");const{style:p}=h;S==="target"?p.width=`${d.width}px`:S!==void 0?p.width=S:p.width="",N==="target"?p.minWidth=`${d.width}px`:N!==void 0?p.minWidth=N:p.minWidth="";const P=tt(h),I=tt(o.value),{left:O,top:H,placement:Y}=ko(T,d,P,$,f,u),G=So(Y,u),{left:E,top:j,transform:W}=zo(Y,I,d,H,O,u);h.setAttribute("v-placement",Y),h.style.setProperty("--v-offset-left",`${Math.round(O)}px`),h.style.setProperty("--v-offset-top",`${Math.round(H)}px`),h.style.transform=`translateX(${E}) translateY(${j}) ${W}`,h.style.setProperty("--v-transform-origin",G),h.style.transformOrigin=G};ie(n,h=>{h?(i(),c()):a()});const c=()=>{yt().then(s).catch(h=>console.error(h))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(h=>{ie(Z(e,h),s)}),["teleportDisabled"].forEach(h=>{ie(Z(e,h),c)}),ie(Z(e,"syncTrigger"),h=>{h.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),h.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const w=bt(),g=ae(()=>{const{to:h}=e;if(h!==void 0)return h;w.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:g,syncPosition:s}},render(){return v($n,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=v("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[v("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Re(n,[[_n,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});function nn(e){return e.nodeName==="#document"}var Mo=/\s/;function Bo(e){for(var t=e.length;t--&&Mo.test(e.charAt(t)););return t}var Eo=/^\s+/;function Oo(e){return e&&e.slice(0,Bo(e)+1).replace(Eo,"")}var rn=0/0,Ao=/^[-+]0x[0-9a-f]+$/i,Ro=/^0b[01]+$/i,Io=/^0o[0-7]+$/i,Lo=parseInt;function on(e){if(typeof e=="number")return e;if(xt(e))return rn;if(Ae(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ae(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Oo(e);var n=Ro.test(e);return n||Io.test(e)?Lo(e.slice(2),n?2:8):Ao.test(e)?rn:+e}var No=Ue(Ie,"WeakMap");const vt=No;var Do=mr(Object.keys,Object);const Fo=Do;var jo=Object.prototype,Ho=jo.hasOwnProperty;function Wo(e){if(!pr(e))return Fo(e);var t=[];for(var n in Object(e))Ho.call(e,n)&&n!="constructor"&&t.push(n);return t}function Mt(e){return wt(e)?gr(e):Wo(e)}var Vo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Uo=/^\w*$/;function Bt(e,t){if(me(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||xt(e)?!0:Uo.test(e)||!Vo.test(e)||t!=null&&e in Object(t)}var Yo="Expected a function";function Et(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Yo);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Et.Cache||Ct),n}Et.Cache=Ct;var Ko=500;function Xo(e){var t=Et(e,function(r){return n.size===Ko&&n.clear(),r}),n=t.cache;return t}var Go=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qo=/\\(\\)?/g,Zo=Xo(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Go,function(n,r,o,i){t.push(o?i.replace(qo,"$1"):r||n)}),t});const Jo=Zo;function jn(e,t){return me(e)?e:Bt(e,t)?[e]:Jo(br(e))}var Qo=1/0;function qe(e){if(typeof e=="string"||xt(e))return e;var t=e+"";return t=="0"&&1/e==-Qo?"-0":t}function Hn(e,t){t=jn(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[qe(t[n++])];return n&&n==r?e:void 0}function ei(e,t,n){var r=e==null?void 0:Hn(e,t);return r===void 0?n:r}function ti(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function ni(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function ri(){return[]}var oi=Object.prototype,ii=oi.propertyIsEnumerable,an=Object.getOwnPropertySymbols,ai=an?function(e){return e==null?[]:(e=Object(e),ni(an(e),function(t){return ii.call(e,t)}))}:ri;const li=ai;function si(e,t,n){var r=t(e);return me(e)?r:ti(r,n(e))}function ln(e){return si(e,Mt,li)}var di=Ue(Ie,"DataView");const mt=di;var ci=Ue(Ie,"Promise");const pt=ci;var ui=Ue(Ie,"Set");const gt=ui;var sn="[object Map]",fi="[object Object]",dn="[object Promise]",cn="[object Set]",un="[object WeakMap]",fn="[object DataView]",hi=Se(mt),vi=Se(ut),mi=Se(pt),pi=Se(gt),gi=Se(vt),ge=kn;(mt&&ge(new mt(new ArrayBuffer(1)))!=fn||ut&&ge(new ut)!=sn||pt&&ge(pt.resolve())!=dn||gt&&ge(new gt)!=cn||vt&&ge(new vt)!=un)&&(ge=function(e){var t=kn(e),n=t==fi?e.constructor:void 0,r=n?Se(n):"";if(r)switch(r){case hi:return fn;case vi:return sn;case mi:return dn;case pi:return cn;case gi:return un}return t});const hn=ge;var bi="__lodash_hash_undefined__";function yi(e){return this.__data__.set(e,bi),this}function xi(e){return this.__data__.has(e)}function We(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ct;++t<n;)this.add(e[t])}We.prototype.add=We.prototype.push=yi;We.prototype.has=xi;function wi(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Ci(e,t){return e.has(t)}var _i=1,$i=2;function Wn(e,t,n,r,o,i){var a=n&_i,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),w=i.get(t);if(c&&w)return c==t&&w==e;var g=-1,h=!0,C=n&$i?new We:void 0;for(i.set(e,t),i.set(t,e);++g<l;){var y=e[g],m=t[g];if(r)var u=a?r(m,y,g,t,e,i):r(y,m,g,e,t,i);if(u!==void 0){if(u)continue;h=!1;break}if(C){if(!wi(t,function(d,S){if(!Ci(C,S)&&(y===d||o(y,d,n,r,i)))return C.push(S)})){h=!1;break}}else if(!(y===m||o(y,m,n,r,i))){h=!1;break}}return i.delete(e),i.delete(t),h}function ki(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function Si(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var zi=1,Ti=2,Pi="[object Boolean]",Mi="[object Date]",Bi="[object Error]",Ei="[object Map]",Oi="[object Number]",Ai="[object RegExp]",Ri="[object Set]",Ii="[object String]",Li="[object Symbol]",Ni="[object ArrayBuffer]",Di="[object DataView]",vn=jt?jt.prototype:void 0,rt=vn?vn.valueOf:void 0;function Fi(e,t,n,r,o,i,a){switch(n){case Di:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ni:return!(e.byteLength!=t.byteLength||!i(new Ht(e),new Ht(t)));case Pi:case Mi:case Oi:return yr(+e,+t);case Bi:return e.name==t.name&&e.message==t.message;case Ai:case Ii:return e==t+"";case Ei:var l=ki;case Ri:var s=r&zi;if(l||(l=Si),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=Ti,a.set(e,t);var w=Wn(l(e),l(t),r,o,i,a);return a.delete(e),w;case Li:if(rt)return rt.call(e)==rt.call(t)}return!1}var ji=1,Hi=Object.prototype,Wi=Hi.hasOwnProperty;function Vi(e,t,n,r,o,i){var a=n&ji,l=ln(e),s=l.length,c=ln(t),w=c.length;if(s!=w&&!a)return!1;for(var g=s;g--;){var h=l[g];if(!(a?h in t:Wi.call(t,h)))return!1}var C=i.get(e),y=i.get(t);if(C&&y)return C==t&&y==e;var m=!0;i.set(e,t),i.set(t,e);for(var u=a;++g<s;){h=l[g];var d=e[h],S=t[h];if(r)var N=a?r(S,d,h,t,e,i):r(d,S,h,e,t,i);if(!(N===void 0?d===S||o(d,S,n,r,i):N)){m=!1;break}u||(u=h=="constructor")}if(m&&!u){var T=e.constructor,$=t.constructor;T!=$&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof $=="function"&&$ instanceof $)&&(m=!1)}return i.delete(e),i.delete(t),m}var Ui=1,mn="[object Arguments]",pn="[object Array]",De="[object Object]",Yi=Object.prototype,gn=Yi.hasOwnProperty;function Ki(e,t,n,r,o,i){var a=me(e),l=me(t),s=a?pn:hn(e),c=l?pn:hn(t);s=s==mn?De:s,c=c==mn?De:c;var w=s==De,g=c==De,h=s==c;if(h&&Wt(e)){if(!Wt(t))return!1;a=!0,w=!1}if(h&&!w)return i||(i=new Fe),a||xr(e)?Wn(e,t,n,r,o,i):Fi(e,t,s,n,r,o,i);if(!(n&Ui)){var C=w&&gn.call(e,"__wrapped__"),y=g&&gn.call(t,"__wrapped__");if(C||y){var m=C?e.value():e,u=y?t.value():t;return i||(i=new Fe),o(m,u,n,r,i)}}return h?(i||(i=new Fe),Vi(e,t,n,r,o,i)):!1}function Ot(e,t,n,r,o){return e===t?!0:e==null||t==null||!Vt(e)&&!Vt(t)?e!==e&&t!==t:Ki(e,t,n,r,Ot,o)}var Xi=1,Gi=2;function qi(e,t,n,r){var o=n.length,i=o,a=!r;if(e==null)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){l=n[o];var s=l[0],c=e[s],w=l[1];if(a&&l[2]){if(c===void 0&&!(s in e))return!1}else{var g=new Fe;if(r)var h=r(c,w,s,e,t,g);if(!(h===void 0?Ot(w,c,Xi|Gi,r,g):h))return!1}}return!0}function Vn(e){return e===e&&!Ae(e)}function Zi(e){for(var t=Mt(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Vn(o)]}return t}function Un(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Ji(e){var t=Zi(e);return t.length==1&&t[0][2]?Un(t[0][0],t[0][1]):function(n){return n===e||qi(n,e,t)}}function Qi(e,t){return e!=null&&t in Object(e)}function ea(e,t,n){t=jn(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=qe(t[r]);if(!(i=e!=null&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&wr(o)&&Cr(a,o)&&(me(e)||_r(e)))}function ta(e,t){return e!=null&&ea(e,t,Qi)}var na=1,ra=2;function oa(e,t){return Bt(e)&&Vn(t)?Un(qe(e),t):function(n){var r=ei(n,e);return r===void 0&&r===t?ta(n,e):Ot(t,r,na|ra)}}function ia(e){return function(t){return t==null?void 0:t[e]}}function aa(e){return function(t){return Hn(t,e)}}function la(e){return Bt(e)?ia(qe(e)):aa(e)}function sa(e){return typeof e=="function"?e:e==null?$r:typeof e=="object"?me(e)?oa(e[0],e[1]):Ji(e):la(e)}function da(e,t){return e&&kr(e,t,Mt)}function ca(e,t){return function(n,r){if(n==null)return n;if(!wt(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&r(a[i],i,a)!==!1;);return n}}var ua=ca(da);const fa=ua;var ha=function(){return Ie.Date.now()};const ot=ha;var va="Expected a function",ma=Math.max,pa=Math.min;function ga(e,t,n){var r,o,i,a,l,s,c=0,w=!1,g=!1,h=!0;if(typeof e!="function")throw new TypeError(va);t=on(t)||0,Ae(n)&&(w=!!n.leading,g="maxWait"in n,i=g?ma(on(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h);function C(f){var p=r,P=o;return r=o=void 0,c=f,a=e.apply(P,p),a}function y(f){return c=f,l=setTimeout(d,t),w?C(f):a}function m(f){var p=f-s,P=f-c,I=t-p;return g?pa(I,i-P):I}function u(f){var p=f-s,P=f-c;return s===void 0||p>=t||p<0||g&&P>=i}function d(){var f=ot();if(u(f))return S(f);l=setTimeout(d,m(f))}function S(f){return l=void 0,h&&r?C(f):(r=o=void 0,a)}function N(){l!==void 0&&clearTimeout(l),c=0,r=s=o=l=void 0}function T(){return l===void 0?a:S(ot())}function $(){var f=ot(),p=u(f);if(r=arguments,o=this,s=f,p){if(l===void 0)return y(s);if(g)return clearTimeout(l),l=setTimeout(d,t),C(s)}return l===void 0&&(l=setTimeout(d,t)),a}return $.cancel=N,$.flush=T,$}function ba(e,t){var n=-1,r=wt(e)?Array(e.length):[];return fa(e,function(o,i,a){r[++n]=t(o,i,a)}),r}function ya(e,t){var n=me(e)?Sr:ba;return n(e,sa(t))}var xa="Expected a function";function wa(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(xa);return Ae(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ga(e,t,{leading:r,maxWait:t,trailing:o})}const Ca={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},_a=Ca;function it(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}function Pe(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",o;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):i;o=e.formattingValues[a]||e.formattingValues[i]}else{var l=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[s]||e.values[l]}var c=e.argumentCallback?e.argumentCallback(t):t;return o[c]}}function Me(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var a=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?ka(l,function(g){return g.test(a)}):$a(l,function(g){return g.test(a)}),c;c=e.valueCallback?e.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;var w=t.slice(a.length);return{value:c,rest:w}}}function $a(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function ka(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function Sa(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],i=t.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;var l=t.slice(o.length);return{value:a,rest:l}}}var za={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ta=function(t,n,r){var o,i=za[t];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:o+" ago":o};const Pa=Ta;var Ma={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ba={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ea={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Oa={date:it({formats:Ma,defaultWidth:"full"}),time:it({formats:Ba,defaultWidth:"full"}),dateTime:it({formats:Ea,defaultWidth:"full"})};const Aa=Oa;var Ra={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ia=function(t,n,r,o){return Ra[t]};const La=Ia;var Na={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Da={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Fa={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ja={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ha={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Wa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Va=function(t,n){var r=Number(t),o=r%100;if(o>20||o<10)switch(o%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Ua={ordinalNumber:Va,era:Pe({values:Na,defaultWidth:"wide"}),quarter:Pe({values:Da,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Pe({values:Fa,defaultWidth:"wide"}),day:Pe({values:ja,defaultWidth:"wide"}),dayPeriod:Pe({values:Ha,defaultWidth:"wide",formattingValues:Wa,defaultFormattingWidth:"wide"})};const Ya=Ua;var Ka=/^(\d+)(th|st|nd|rd)?/i,Xa=/\d+/i,Ga={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qa={any:[/^b/i,/^(a|c)/i]},Za={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ja={any:[/1/i,/2/i,/3/i,/4/i]},Qa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},el={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tl={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},rl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ol={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},il={ordinalNumber:Sa({matchPattern:Ka,parsePattern:Xa,valueCallback:function(t){return parseInt(t,10)}}),era:Me({matchPatterns:Ga,defaultMatchWidth:"wide",parsePatterns:qa,defaultParseWidth:"any"}),quarter:Me({matchPatterns:Za,defaultMatchWidth:"wide",parsePatterns:Ja,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Me({matchPatterns:Qa,defaultMatchWidth:"wide",parsePatterns:el,defaultParseWidth:"any"}),day:Me({matchPatterns:tl,defaultMatchWidth:"wide",parsePatterns:nl,defaultParseWidth:"any"}),dayPeriod:Me({matchPatterns:rl,defaultMatchWidth:"any",parsePatterns:ol,defaultParseWidth:"any"})};const al=il;var ll={code:"en-US",formatDistance:Pa,formatLong:Aa,formatRelative:La,localize:Ya,match:al,options:{weekStartsOn:0,firstWeekContainsDate:1}};const sl=ll,dl={name:"en-US",locale:sl},cl=dl;function ul(e){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=U(_t,null)||{},r=B(()=>{var i,a;return(a=(i=t==null?void 0:t.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:_a[e]});return{dateLocaleRef:B(()=>{var i;return(i=n==null?void 0:n.value)!==null&&i!==void 0?i:cl}),localeRef:r}}function fl(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function hl(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const vl=b("affix",[A("affixed",{position:"fixed"},[A("absolute-positioned",{position:"absolute"})])]),At={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ml=zn(At),pl=R({name:"Affix",props:At,setup(e){const{mergedClsPrefixRef:t}=X(e);Sn("-affix",vl,t);let n=null;const r=D(!1),o=D(!1),i=D(null),a=D(null),l=B(()=>o.value||r.value),s=B(()=>{var u,d;return(d=(u=e.triggerTop)!==null&&u!==void 0?u:e.offsetTop)!==null&&d!==void 0?d:e.top}),c=B(()=>{var u,d;return(d=(u=e.top)!==null&&u!==void 0?u:e.triggerTop)!==null&&d!==void 0?d:e.offsetTop}),w=B(()=>{var u,d;return(d=(u=e.bottom)!==null&&u!==void 0?u:e.triggerBottom)!==null&&d!==void 0?d:e.offsetBottom}),g=B(()=>{var u,d;return(d=(u=e.triggerBottom)!==null&&u!==void 0?u:e.offsetBottom)!==null&&d!==void 0?d:e.bottom}),h=D(null),C=()=>{const{target:u,listenTo:d}=e;u?n=u():d?n=Pt(d):n=document,n&&(n.addEventListener("scroll",y),y())};function y(){Rn(m)}function m(){const{value:u}=h;if(!n||!u)return;const d=fl(n);if(l.value){d<a.value&&(r.value=!1,a.value=null),d>i.value&&(o.value=!1,i.value=null);return}const S=hl(n),N=u.getBoundingClientRect(),T=N.top-S.top,$=S.bottom-N.bottom,f=s.value,p=g.value;f!==void 0&&T<=f?(r.value=!0,a.value=d-(f-T)):(r.value=!1,a.value=null),p!==void 0&&$<=p?(o.value=!0,i.value=d+p-$):(o.value=!1,i.value=null)}return xe(()=>{C()}),de(()=>{n&&n.removeEventListener("scroll",y)}),{selfRef:h,affixed:l,mergedClsPrefix:t,mergedstyle:B(()=>{const u={};return r.value&&s.value!==void 0&&c.value!==void 0&&(u.top=`${c.value}px`),o.value&&g.value!==void 0&&w.value!==void 0&&(u.bottom=`${w.value}px`),u})}},render(){const{mergedClsPrefix:e}=this;return v("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),gl=R({name:"ChevronRight",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),bl=R({name:"Empty",render(){return v("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),v("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),yl=b("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[M("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),xl=Object.assign(Object.assign({},F.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),wl=R({name:"Empty",props:xl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=F("Empty","-empty",yl,zr,e,t),{localeRef:o}=ul("Empty"),i=U(_t,null),a=B(()=>{var w,g,h;return(w=e.description)!==null&&w!==void 0?w:(h=(g=i==null?void 0:i.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||h===void 0?void 0:h.description}),l=B(()=>{var w,g;return((g=(w=i==null?void 0:i.mergedComponentPropsRef.value)===null||w===void 0?void 0:w.Empty)===null||g===void 0?void 0:g.renderIcon)||(()=>v(bl,null))}),s=B(()=>{const{size:w}=e,{common:{cubicBezierEaseInOut:g},self:{[q("iconSize",w)]:h,[q("fontSize",w)]:C,textColor:y,iconColor:m,extraTextColor:u}}=r.value;return{"--n-icon-size":h,"--n-font-size":C,"--n-bezier":g,"--n-text-color":y,"--n-icon-color":m,"--n-extra-text-color":u}}),c=n?re("empty",B(()=>{let w="";const{size:g}=e;return w+=g[0],w}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:B(()=>a.value||o.value.description),cssVars:n?void 0:s,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),v("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?v("div",{class:`${t}-empty__icon`},e.icon?e.icon():v($t,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?v("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?v("div",{class:`${t}-empty__extra`},e.extra()):null)}}),at={top:"bottom",bottom:"top",left:"right",right:"left"},V="var(--n-arrow-height) * 1.414",Cl=M([b("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[M(">",[b("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Be("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Be("scrollable",[Be("show-header-or-footer","padding: var(--n-padding);")])]),z("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),z("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),A("scrollable, show-header-or-footer",[z("content",`
 padding: var(--n-padding);
 `)])]),b("popover-shared",`
 transform-origin: inherit;
 `,[b("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[b("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${V});
 height: calc(${V});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),M("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),M("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),M("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),M("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ne("top-start",`
 top: calc(${V} / -2);
 left: calc(${ce("top-start")} - var(--v-offset-left));
 `),ne("top",`
 top: calc(${V} / -2);
 transform: translateX(calc(${V} / -2)) rotate(45deg);
 left: 50%;
 `),ne("top-end",`
 top: calc(${V} / -2);
 right: calc(${ce("top-end")} + var(--v-offset-left));
 `),ne("bottom-start",`
 bottom: calc(${V} / -2);
 left: calc(${ce("bottom-start")} - var(--v-offset-left));
 `),ne("bottom",`
 bottom: calc(${V} / -2);
 transform: translateX(calc(${V} / -2)) rotate(45deg);
 left: 50%;
 `),ne("bottom-end",`
 bottom: calc(${V} / -2);
 right: calc(${ce("bottom-end")} + var(--v-offset-left));
 `),ne("left-start",`
 left: calc(${V} / -2);
 top: calc(${ce("left-start")} - var(--v-offset-top));
 `),ne("left",`
 left: calc(${V} / -2);
 transform: translateY(calc(${V} / -2)) rotate(45deg);
 top: 50%;
 `),ne("left-end",`
 left: calc(${V} / -2);
 bottom: calc(${ce("left-end")} + var(--v-offset-top));
 `),ne("right-start",`
 right: calc(${V} / -2);
 top: calc(${ce("right-start")} - var(--v-offset-top));
 `),ne("right",`
 right: calc(${V} / -2);
 transform: translateY(calc(${V} / -2)) rotate(45deg);
 top: 50%;
 `),ne("right-end",`
 right: calc(${V} / -2);
 bottom: calc(${ce("right-end")} + var(--v-offset-top));
 `),...ya({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${V}) / 2)`,s=ce(o);return M(`[v-placement="${o}"] >`,[b("popover-shared",[A("center-arrow",[b("popover-arrow",`${t}: calc(max(${l}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function ce(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ne(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return M(`[v-placement="${e}"] >`,[b("popover-shared",`
 margin-${at[n]}: var(--n-space);
 `,[A("show-arrow",`
 margin-${at[n]}: var(--n-space-arrow);
 `),A("overlap",`
 margin: 0;
 `),Tr("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${at[n]}: auto;
 ${r}
 `,[b("popover-arrow",t)])])])}const Yn=Object.assign(Object.assign({},F.props),{to:ke.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),_l=({arrowStyle:e,clsPrefix:t})=>v("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},v("div",{class:`${t}-popover-arrow`,style:e})),$l=R({name:"PopoverBody",inheritAttrs:!1,props:Yn,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i}=X(e),a=F("Popover","-popover",Cl,Pr,e,o),l=D(null),s=U("NPopover"),c=D(null),w=D(e.show),g=D(!1);kt(()=>{const{show:p}=e;p&&!ao()&&!e.internalDeactivateImmediately&&(g.value=!0)});const h=B(()=>{const{trigger:p,onClickoutside:P}=e,I=[],{positionManuallyRef:{value:O}}=s;return O||(p==="click"&&!P&&I.push([Ut,T,void 0,{capture:!0}]),p==="hover"&&I.push([xo,N])),P&&I.push([Ut,T,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&g.value)&&I.push([Pn,e.show]),I}),C=B(()=>{const p=e.width==="trigger"?void 0:J(e.width),P=[];p&&P.push({width:p});const{maxWidth:I,minWidth:O}=e;return I&&P.push({maxWidth:J(I)}),O&&P.push({maxWidth:J(O)}),i||P.push(y.value),P}),y=B(()=>{const{common:{cubicBezierEaseInOut:p,cubicBezierEaseIn:P,cubicBezierEaseOut:I},self:{space:O,spaceArrow:H,padding:Y,fontSize:G,textColor:E,dividerColor:j,color:W,boxShadow:fe,borderRadius:he,arrowHeight:oe,arrowOffset:Je,arrowOffsetVertical:Qe}}=a.value;return{"--n-box-shadow":fe,"--n-bezier":p,"--n-bezier-ease-in":P,"--n-bezier-ease-out":I,"--n-font-size":G,"--n-text-color":E,"--n-color":W,"--n-divider-color":j,"--n-border-radius":he,"--n-arrow-height":oe,"--n-arrow-offset":Je,"--n-arrow-offset-vertical":Qe,"--n-padding":Y,"--n-space":O,"--n-space-arrow":H}}),m=i?re("popover",void 0,y,e):void 0;s.setBodyInstance({syncPosition:u}),de(()=>{s.setBodyInstance(null)}),ie(Z(e,"show"),p=>{e.animated||(p?w.value=!0:w.value=!1)});function u(){var p;(p=l.value)===null||p===void 0||p.syncPosition()}function d(p){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(p)}function S(p){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(p)}function N(p){e.trigger==="hover"&&!$().contains(Yt(p))&&s.handleMouseMoveOutside(p)}function T(p){(e.trigger==="click"&&!$().contains(Yt(p))||e.onClickoutside)&&s.handleClickOutside(p)}function $(){return s.getTriggerElement()}se(wn,c),se(xn,null),se(yn,null);function f(){if(m==null||m.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&g.value))return null;let P;const I=s.internalRenderBodyRef.value,{value:O}=o;if(I)P=I([`${O}-popover-shared`,m==null?void 0:m.themeClass.value,e.overlap&&`${O}-popover-shared--overlap`,e.showArrow&&`${O}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${O}-popover-shared--center-arrow`],c,C.value,d,S);else{const{value:H}=s.extraClassRef,{internalTrapFocus:Y}=e,G=!Kt(t.header)||!Kt(t.footer),E=()=>{var j;const W=G?v(Br,null,Ee(t.header,oe=>oe?v("div",{class:`${O}-popover__header`,style:e.headerStyle},oe):null),Ee(t.default,oe=>oe?v("div",{class:`${O}-popover__content`,style:e.contentStyle},t):null),Ee(t.footer,oe=>oe?v("div",{class:`${O}-popover__footer`,style:e.footerStyle},oe):null)):e.scrollable?(j=t.default)===null||j===void 0?void 0:j.call(t):v("div",{class:`${O}-popover__content`,style:e.contentStyle},t),fe=e.scrollable?v(Er,{contentClass:G?void 0:`${O}-popover__content`,contentStyle:G?void 0:e.contentStyle},{default:()=>W}):W,he=e.showArrow?_l({arrowStyle:e.arrowStyle,clsPrefix:O}):null;return[fe,he]};P=v("div",St({class:[`${O}-popover`,`${O}-popover-shared`,m==null?void 0:m.themeClass.value,H.map(j=>`${O}-${j}`),{[`${O}-popover--scrollable`]:e.scrollable,[`${O}-popover--show-header-or-footer`]:G,[`${O}-popover--raw`]:e.raw,[`${O}-popover-shared--overlap`]:e.overlap,[`${O}-popover-shared--show-arrow`]:e.showArrow,[`${O}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:C.value,onKeydown:s.handleKeydown,onMouseenter:d,onMouseleave:S},n),Y?v(Mr,{active:e.show,autoFocus:!0},{default:E}):E())}return Re(P,h.value)}return{displayed:g,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:l,adjustedTo:ke(e),followerEnabled:w,renderContentNode:f}},render(){return v(Po,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===ke.tdkey},{default:()=>this.animated?v(Tn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),kl=Object.keys(Yn),Sl={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function zl(e,t,n){Sl[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=n[r];o?e.props[r]=(...a)=>{o(...a),i(...a)}:e.props[r]=i})}const Tl=Q("").type,Kn={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:ke.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Pl=Object.assign(Object.assign(Object.assign({},F.props),Kn),{internalOnAfterLeave:Function,internalRenderBody:Function}),Ml=R({name:"Popover",inheritAttrs:!1,props:Pl,__popover__:!0,setup(e){const t=bt(),n=D(null),r=B(()=>e.show),o=D(e.defaultShow),i=Ge(r,o),a=ae(()=>e.disabled?!1:i.value),l=()=>{if(e.disabled)return!0;const{getDisabled:E}=e;return!!(E!=null&&E())},s=()=>l()?!1:i.value,c=uo(e,["arrow","showArrow"]),w=B(()=>e.overlap?!1:c.value);let g=null;const h=D(null),C=D(null),y=ae(()=>e.x!==void 0&&e.y!==void 0);function m(E){const{"onUpdate:show":j,onUpdateShow:W,onShow:fe,onHide:he}=e;o.value=E,j&&le(j,E),W&&le(W,E),E&&fe&&le(fe,!0),E&&he&&le(he,!1)}function u(){g&&g.syncPosition()}function d(){const{value:E}=h;E&&(window.clearTimeout(E),h.value=null)}function S(){const{value:E}=C;E&&(window.clearTimeout(E),C.value=null)}function N(){const E=l();if(e.trigger==="focus"&&!E){if(s())return;m(!0)}}function T(){const E=l();if(e.trigger==="focus"&&!E){if(!s())return;m(!1)}}function $(){const E=l();if(e.trigger==="hover"&&!E){if(S(),h.value!==null||s())return;const j=()=>{m(!0),h.value=null},{delay:W}=e;W===0?j():h.value=window.setTimeout(j,W)}}function f(){const E=l();if(e.trigger==="hover"&&!E){if(d(),C.value!==null||!s())return;const j=()=>{m(!1),C.value=null},{duration:W}=e;W===0?j():C.value=window.setTimeout(j,W)}}function p(){f()}function P(E){var j;s()&&(e.trigger==="click"&&(d(),S(),m(!1)),(j=e.onClickoutside)===null||j===void 0||j.call(e,E))}function I(){if(e.trigger==="click"&&!l()){d(),S();const E=!s();m(E)}}function O(E){e.internalTrapFocus&&E.key==="Escape"&&(d(),S(),m(!1))}function H(E){o.value=E}function Y(){var E;return(E=n.value)===null||E===void 0?void 0:E.targetRef}function G(E){g=E}return se("NPopover",{getTriggerElement:Y,handleKeydown:O,handleMouseEnter:$,handleMouseLeave:f,handleClickOutside:P,handleMouseMoveOutside:p,setBodyInstance:G,positionManuallyRef:y,isMountedRef:t,zIndexRef:Z(e,"zIndex"),extraClassRef:Z(e,"internalExtraClass"),internalRenderBodyRef:Z(e,"internalRenderBody")}),kt(()=>{i.value&&l()&&m(!1)}),{binderInstRef:n,positionManually:y,mergedShowConsideringDisabledProp:a,uncontrolledShow:o,mergedShowArrow:w,getMergedShow:s,setShow:H,handleClick:I,handleMouseEnter:$,handleMouseLeave:f,handleFocus:N,handleBlur:T,syncPosition:u}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(n.activator?r=Xt(n,"activator"):r=Xt(n,"trigger"),r)){r=Or(r),r=r.type===Tl?v("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,l=[i,...a],s={onBlur:c=>{l.forEach(w=>{w.onBlur(c)})},onFocus:c=>{l.forEach(w=>{w.onFocus(c)})},onClick:c=>{l.forEach(w=>{w.onClick(c)})},onMouseenter:c=>{l.forEach(w=>{w.onMouseenter(c)})},onMouseleave:c=>{l.forEach(w=>{w.onMouseleave(c)})}};zl(r,a?"nested":t?"manual":this.trigger,s)}}return v(go,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Re(v("div",{style:{position:"fixed",inset:0}}),[[_n,{enabled:i,zIndex:this.zIndex}]]):null,t?null:v(bo,null,{default:()=>r}),v($l,ft(this.$props,kl,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}}),Bl=b("anchor",`
 position: relative;
`,[Be("block",`
 padding-left: var(--n-rail-width);
 `,[b("anchor-link",[M("+, >",[b("anchor-link",`
 margin-top: .5em;
 `)])]),b("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),Be("show-rail",[M(">",[b("anchor-link","padding-left: 0;")])])]),A("block",[b("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[A("active",`
 background-color: var(--n-link-color);
 `)])]),b("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[z("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[A("active",{backgroundColor:"var(--n-rail-color-active)"})])]),b("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[A("active",[M(">",[z("title",`
 color: var(--n-link-text-color-active);
 `)])]),z("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[M("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),M("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),je=pe("n-anchor"),El={title:String,href:String},ue=R({name:"AnchorLink",props:El,setup(e,{slots:t}){const n=D(null),r=U(je),o=Z(e,"href"),i=ae(()=>o.value&&o.value===r.activeHref.value);lo(je,"collectedLinkHrefs",o),so(je,"titleEls",()=>n.value),ie(i,l=>{l&&n.value&&r.updateBarPosition(n.value)});function a(){e.href!==void 0&&r.setActiveHref(e.href)}return()=>{var l;const{value:s}=r.mergedClsPrefix;return v("div",{class:[`${s}-anchor-link`,i.value&&`${s}-anchor-link--active`]},v("a",{ref:n,class:[`${s}-anchor-link__title`],href:e.href,title:oo(e.title),onClick:a},e.title),(l=t.default)===null||l===void 0?void 0:l.call(t))}}});function Ol(e,t){const{top:n,height:r}=e.getBoundingClientRect(),o=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:n-o,height:r}}const Rt={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Al=zn(Rt),Rl=R({name:"BaseAnchor",props:Object.assign(Object.assign({},Rt),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],n=[],r=D(null),o=D(null),i=D(null),a=D(null),l=B(()=>e.type==="block"),s=B(()=>!l.value&&e.showRail);function c(){const{value:y}=i,{value:m}=o;y&&(y.style.transition="none"),m&&(m.style.transition="none"),n&&n.forEach(u=>{u.style.transition="none"}),yt(()=>{const{value:u}=i,{value:d}=o;u&&(u.offsetWidth,u.style.transition=""),d&&(d.offsetWidth,d.style.transition=""),n&&n.forEach(S=>{S.offsetWidth,S.style.transition=""})})}function w(y,m=!0){const{value:u}=i,{value:d}=o,{value:S}=a;if(!S||!u)return;m||(u.style.transition="none",d&&(d.style.transition="none"));const{offsetHeight:N,offsetWidth:T}=y,{top:$,left:f}=y.getBoundingClientRect(),{top:p,left:P}=S.getBoundingClientRect(),I=$-p,O=f-P;u.style.top=`${I}px`,u.style.height=`${N}px`,d&&(d.style.top=`${I}px`,d.style.height=`${N}px`,d.style.maxWidth=`${T+O}px`),u.offsetHeight,d&&d.offsetHeight,m||(u.style.transition="",d&&(d.style.transition=""))}function g(y,m=!0){const u=/^#([^#]+)$/.exec(y);if(!u)return;const d=document.getElementById(u[1]);d&&(r.value=y,d.scrollIntoView(),m||c(),h())}const h=wa(()=>C(!0),128);function C(y=!0){var m;const u=[],d=Pt((m=e.offsetTarget)!==null&&m!==void 0?m:document);t.forEach(f=>{const p=/#([^#]+)$/.exec(f);if(!p)return;const P=document.getElementById(p[1]);if(P&&d){const{top:I,height:O}=Ol(P,d);u.push({top:I,height:O,href:f})}}),u.sort((f,p)=>f.top>p.top?1:(f.top===p.top&&f.height<p.height,-1));const S=r.value,{bound:N,ignoreGap:T}=e,$=u.reduce((f,p)=>p.top+p.height<0?T?p:f:p.top<=N?f===null?p:p.top===f.top?p.href===S?p:f:p.top>f.top?p:f:f,null);y||c(),$?r.value=$.href:r.value=null}return se(je,{activeHref:r,mergedClsPrefix:Z(e,"mergedClsPrefix"),updateBarPosition:w,setActiveHref:g,collectedLinkHrefs:t,titleEls:n}),xe(()=>{document.addEventListener("scroll",h,!0),g(window.location.hash),C(!1)}),Ln(()=>{g(window.location.hash),C(!1)}),de(()=>{document.removeEventListener("scroll",h,!0)}),ie(r,y=>{if(y===null){const{value:m}=o;m&&!l.value&&(m.style.maxWidth="0")}}),{selfRef:a,barRef:i,slotRef:o,setActiveHref:g,activeHref:r,isBlockType:l,mergedShowRail:s}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:n,isBlockType:r,$slots:o}=this,i=v("div",{class:[`${t}-anchor`,r&&`${t}-anchor--block`,n&&`${t}-anchor--show-rail`],ref:"selfRef"},n&&this.showBackground?v("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,n?v("div",{class:`${t}-anchor-rail`},v("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=o.default)===null||e===void 0?void 0:e.call(o));return this.internalScrollable?v(Ye,null,{default:()=>i}):i}}),Il=Object.assign(Object.assign(Object.assign(Object.assign({},F.props),{affix:Boolean}),At),Rt),Ll=R({name:"Anchor",props:Il,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=X(e),o=F("Anchor","-anchor",Bl,Ar,e,n),i=D(null),a=B(()=>{const{self:{railColor:s,linkColor:c,railColorActive:w,linkTextColor:g,linkTextColorHover:h,linkTextColorPressed:C,linkTextColorActive:y,linkFontSize:m,railWidth:u,linkPadding:d,borderRadius:S},common:{cubicBezierEaseInOut:N}}=o.value;return{"--n-link-border-radius":S,"--n-link-color":c,"--n-link-font-size":m,"--n-link-text-color":g,"--n-link-text-color-hover":h,"--n-link-text-color-active":y,"--n-link-text-color-pressed":C,"--n-link-padding":d,"--n-bezier":N,"--n-rail-color":s,"--n-rail-color-active":w,"--n-rail-width":u}}),l=r?re("anchor",void 0,a,e):void 0;return{scrollTo(s){var c;(c=i.value)===null||c===void 0||c.setActiveHref(s)},renderAnchor:()=>(l==null||l.onRender(),v(Rl,Object.assign({ref:i,style:r?void 0:a.value,class:l==null?void 0:l.themeClass.value},ft(e,Al),{mergedClsPrefix:n.value}),t))}},render(){return this.affix?v(pl,Object.assign({},ft(this,ml)),{default:this.renderAnchor}):this.renderAnchor()}}),Nl=v("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},v("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},v("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},v("g",{transform:"translate(120.000000, 4285.000000)"},v("g",{transform:"translate(7.000000, 126.000000)"},v("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},v("g",{transform:"translate(4.000000, 2.000000)"},v("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),v("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),Dl=b("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[Rr(),A("transition-disabled",{transition:"none !important"}),b("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),M("svg",{pointerEvents:"none"}),M("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[b("base-icon",{color:"var(--n-icon-color-hover)"})]),M("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[b("base-icon",{color:"var(--n-icon-color-pressed)"})])]),Fl=Object.assign(Object.assign({},F.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),jl=R({name:"BackTop",inheritAttrs:!1,props:Fl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=D(null),o=D(!1);kt(()=>{const{value:T}=r;if(T===null){o.value=!1;return}o.value=T>=e.visibilityHeight});const i=D(!1);ie(o,T=>{var $;i.value&&(($=e["onUpdate:show"])===null||$===void 0||$.call(e,T))});const a=Z(e,"show"),l=Ge(a,o),s=D(!0),c=D(null),w=B(()=>({right:`calc(${J(e.right)} + ${Ir.value})`,bottom:J(e.bottom)}));let g,h;ie(l,T=>{var $,f;i.value&&(T&&(($=e.onShow)===null||$===void 0||$.call(e)),(f=e.onHide)===null||f===void 0||f.call(e))});const C=F("BackTop","-back-top",Dl,Lr,e,t);function y(){var T;if(h)return;h=!0;const $=((T=e.target)===null||T===void 0?void 0:T.call(e))||Pt(e.listenTo)||In(c.value);if(!$)return;g=$===document.documentElement?document:$;const{to:f}=e;typeof f=="string"&&document.querySelector(f),g.addEventListener("scroll",u),u()}function m(){(nn(g)?document.documentElement:g).scrollTo({top:0,behavior:"smooth"})}function u(){r.value=(nn(g)?document.documentElement:g).scrollTop,i.value||yt(()=>{i.value=!0})}function d(){s.value=!1}xe(()=>{y(),s.value=l.value}),de(()=>{g&&g.removeEventListener("scroll",u)});const S=B(()=>{const{self:{color:T,boxShadow:$,boxShadowHover:f,boxShadowPressed:p,iconColor:P,iconColorHover:I,iconColorPressed:O,width:H,height:Y,iconSize:G,borderRadius:E,textColor:j},common:{cubicBezierEaseInOut:W}}=C.value;return{"--n-bezier":W,"--n-border-radius":E,"--n-height":Y,"--n-width":H,"--n-box-shadow":$,"--n-box-shadow-hover":f,"--n-box-shadow-pressed":p,"--n-color":T,"--n-icon-size":G,"--n-icon-color":P,"--n-icon-color-hover":I,"--n-icon-color-pressed":O,"--n-text-color":j}}),N=n?re("back-top",void 0,S,e):void 0;return{placeholderRef:c,style:w,mergedShow:l,isMounted:bt(),scrollElement:D(null),scrollTop:r,DomInfoReady:i,transitionDisabled:s,mergedClsPrefix:t,handleAfterEnter:d,handleScroll:u,handleClick:m,cssVars:n?void 0:S,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e}=this;return v("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},v($n,{to:this.to,show:this.mergedShow},{default:()=>v(Tn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?v("div",St(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),ht(this.$slots.default,()=>[v($t,{clsPrefix:e},{default:()=>Nl})])):null}})}))}}),Hl=v("svg",{viewBox:"0 0 64 64",class:"check-icon"},v("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Wl=v("svg",{viewBox:"0 0 100 100",class:"line-icon"},v("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Vl=pe("n-checkbox-group"),Ul=M([b("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[M("&:hover",[b("checkbox-box",[z("border",{border:"var(--n-border-checked)"})])]),M("&:focus:not(:active)",[b("checkbox-box",[z("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("inside-table",[b("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),A("checked",[b("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[b("checkbox-icon",[M(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("indeterminate",[b("checkbox-box",[b("checkbox-icon",[M(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),M(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),A("checked, indeterminate",[M("&:focus:not(:active)",[b("checkbox-box",[z("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[z("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[b("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[z("border",{border:"var(--n-border-disabled-checked)"}),b("checkbox-icon",[M(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),b("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[z("border",{border:"var(--n-border-disabled)"}),b("checkbox-icon",[M(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),z("label",{color:"var(--n-text-color-disabled)"})]),b("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),b("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[z("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),b("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[M(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),Nr({left:"1px",top:"1px"})])]),z("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[M("&:empty",{display:"none"})])]),Mn(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Bn(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Yl=Object.assign(Object.assign({},F.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),lt=R({name:"Checkbox",props:Yl,setup(e){const t=D(null),{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:o}=X(e),i=Dr(e,{mergedSize(f){const{size:p}=e;if(p!==void 0)return p;if(s){const{value:P}=s.mergedSizeRef;if(P!==void 0)return P}if(f){const{mergedSize:P}=f;if(P!==void 0)return P.value}return"medium"},mergedDisabled(f){const{disabled:p}=e;if(p!==void 0)return p;if(s){if(s.disabledRef.value)return!0;const{maxRef:{value:P},checkedCountRef:I}=s;if(P!==void 0&&I.value>=P&&!h.value)return!0;const{minRef:{value:O}}=s;if(O!==void 0&&I.value<=O&&h.value)return!0}return f?f.disabled.value:!1}}),{mergedDisabledRef:a,mergedSizeRef:l}=i,s=U(Vl,null),c=D(e.defaultChecked),w=Z(e,"checked"),g=Ge(w,c),h=ae(()=>{if(s){const f=s.valueSetRef.value;return f&&e.value!==void 0?f.has(e.value):!1}else return g.value===e.checkedValue}),C=F("Checkbox","-checkbox",Ul,Hr,e,n);function y(f){if(s&&e.value!==void 0)s.toggleCheckbox(!h.value,e.value);else{const{onChange:p,"onUpdate:checked":P,onUpdateChecked:I}=e,{nTriggerFormInput:O,nTriggerFormChange:H}=i,Y=h.value?e.uncheckedValue:e.checkedValue;P&&le(P,Y,f),I&&le(I,Y,f),p&&le(p,Y,f),O(),H(),c.value=Y}}function m(f){a.value||y(f)}function u(f){if(!a.value)switch(f.key){case" ":case"Enter":y(f)}}function d(f){switch(f.key){case" ":f.preventDefault()}}const S={focus:()=>{var f;(f=t.value)===null||f===void 0||f.focus()},blur:()=>{var f;(f=t.value)===null||f===void 0||f.blur()}},N=Ke("Checkbox",o,n),T=B(()=>{const{value:f}=l,{common:{cubicBezierEaseInOut:p},self:{borderRadius:P,color:I,colorChecked:O,colorDisabled:H,colorTableHeader:Y,colorTableHeaderModal:G,colorTableHeaderPopover:E,checkMarkColor:j,checkMarkColorDisabled:W,border:fe,borderFocus:he,borderDisabled:oe,borderChecked:Je,boxShadowFocus:Qe,textColor:er,textColorDisabled:tr,checkMarkColorDisabledChecked:nr,colorDisabledChecked:rr,borderDisabledChecked:or,labelPadding:ir,labelLineHeight:ar,labelFontWeight:lr,[q("fontSize",f)]:sr,[q("size",f)]:dr}}=C.value;return{"--n-label-line-height":ar,"--n-label-font-weight":lr,"--n-size":dr,"--n-bezier":p,"--n-border-radius":P,"--n-border":fe,"--n-border-checked":Je,"--n-border-focus":he,"--n-border-disabled":oe,"--n-border-disabled-checked":or,"--n-box-shadow-focus":Qe,"--n-color":I,"--n-color-checked":O,"--n-color-table":Y,"--n-color-table-modal":G,"--n-color-table-popover":E,"--n-color-disabled":H,"--n-color-disabled-checked":rr,"--n-text-color":er,"--n-text-color-disabled":tr,"--n-check-mark-color":j,"--n-check-mark-color-disabled":W,"--n-check-mark-color-disabled-checked":nr,"--n-font-size":sr,"--n-label-padding":ir}}),$=r?re("checkbox",B(()=>l.value[0]),T,e):void 0;return Object.assign(i,S,{rtlEnabled:N,selfRef:t,mergedClsPrefix:n,mergedDisabled:a,renderedChecked:h,mergedTheme:C,labelId:Fr(),handleClick:m,handleKeyUp:u,handleKeyDown:d,cssVars:r?void 0:T,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var e;const{$slots:t,renderedChecked:n,mergedDisabled:r,indeterminate:o,privateInsideTable:i,cssVars:a,labelId:l,label:s,mergedClsPrefix:c,focusable:w,handleKeyUp:g,handleKeyDown:h,handleClick:C}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,n&&`${c}-checkbox--checked`,r&&`${c}-checkbox--disabled`,o&&`${c}-checkbox--indeterminate`,i&&`${c}-checkbox--inside-table`],tabindex:r||!w?void 0:0,role:"checkbox","aria-checked":o?"mixed":n,"aria-labelledby":l,style:a,onKeyup:g,onKeydown:h,onClick:C,onMousedown:()=>{be("selectstart",window,y=>{y.preventDefault()},{once:!0})}},v("div",{class:`${c}-checkbox-box-wrapper`}," ",v("div",{class:`${c}-checkbox-box`},v(jr,null,{default:()=>this.indeterminate?v("div",{key:"indeterminate",class:`${c}-checkbox-icon`},Wl):v("div",{key:"check",class:`${c}-checkbox-icon`},Hl)}),v("div",{class:`${c}-checkbox-box__border`}))),s!==null||t.default?v("span",{class:`${c}-checkbox__label`,id:l},t.default?t.default():s):null)}}),Kl=Object.assign(Object.assign({},Kn),F.props),st=R({name:"Tooltip",props:Kl,__popover__:!0,setup(e){const t=F("Tooltip","-tooltip",void 0,Wr,e),n=D(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(o){n.value.setShow(o)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:B(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return v(Ml,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Xl=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[A("color-transition",{transition:"color .3s var(--n-bezier)"}),A("depth",{color:"var(--n-color)"},[M("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),M("svg",{height:"1em",width:"1em"})]),Gl=Object.assign(Object.assign({},F.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),ql=R({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Gl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=F("Icon","-icon",Xl,Ur,e,t),o=B(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:l},self:s}=r.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:w}=s;return{"--n-bezier":l,"--n-color":c,"--n-opacity":w}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),i=n?re("icon",B(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:t,mergedStyle:B(()=>{const{size:a,color:l}=e;return{fontSize:J(a),color:l}}),cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:r,component:o,onRender:i,themeClass:a}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Vr("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),v("i",St(this.$attrs,{role:"img",class:[`${r}-icon`,a,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?v(o):this.$slots)}});let dt;const Zl=()=>{if(!Cn)return!0;if(dt===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),dt=t}return dt},Jl=Object.assign(Object.assign({},F.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Xn=R({name:"Space",props:Jl,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=X(e),r=F("Space","-space",void 0,Kr,e,t),o=Ke("Space",n,t);return{useGap:Zl(),rtlEnabled:o,mergedClsPrefix:t,margin:B(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[q("gap",i)]:a}}=r.value,{row:l,col:s}=Xr(a);return{horizontal:Gt(s),vertical:Gt(l)}})}},render(){const{vertical:e,align:t,inline:n,justify:r,itemStyle:o,margin:i,wrap:a,mergedClsPrefix:l,rtlEnabled:s,useGap:c,wrapItem:w,internalUseGap:g}=this,h=Yr(ro(this));if(!h.length)return null;const C=`${i.horizontal}px`,y=`${i.horizontal/2}px`,m=`${i.vertical}px`,u=`${i.vertical/2}px`,d=h.length-1,S=r.startsWith("space-");return v("div",{role:"none",class:[`${l}-space`,s&&`${l}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!a||e?"nowrap":"wrap",marginTop:c||e?"":`-${u}`,marginBottom:c||e?"":`-${u}`,alignItems:t,gap:c?`${i.vertical}px ${i.horizontal}px`:""}},!w&&(c||g)?h:h.map((N,T)=>v("div",{role:"none",style:[o,{maxWidth:"100%"},c?"":e?{marginBottom:T!==d?m:""}:s?{marginLeft:S?r==="space-between"&&T===d?"":y:T!==d?C:"",marginRight:S?r==="space-between"&&T===0?"":y:"",paddingTop:u,paddingBottom:u}:{marginRight:S?r==="space-between"&&T===d?"":y:T!==d?C:"",marginLeft:S?r==="space-between"&&T===0?"":y:"",paddingTop:u,paddingBottom:u}]},N)))}}),Ql=Array.apply(null,{length:24}).map((e,t)=>{const n=t+1,r=`calc(100% / 24 * ${n})`;return[A(`${n}-span`,{width:r}),A(`${n}-offset`,{marginLeft:r}),A(`${n}-push`,{left:r}),A(`${n}-pull`,{right:r})]}),es=M([b("row",{width:"100%",display:"flex",flexWrap:"wrap"}),b("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[z("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),Ql])]),Gn=pe("n-row"),ts={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},qn=R({name:"Row",props:ts,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=X(e);Sn("-legacy-grid",es,t);const r=Ke("Row",n,t),o=ae(()=>{const{gutter:a}=e;return Array.isArray(a)&&a[1]||0}),i=ae(()=>{const{gutter:a}=e;return Array.isArray(a)?a[0]:Number(a)});return se(Gn,{mergedClsPrefixRef:t,gutterRef:Z(e,"gutter"),verticalGutterRef:o,horizontalGutterRef:i}),{mergedClsPrefix:t,rtlEnabled:r,styleMargin:ae(()=>`-${J(o.value,{c:.5})} -${J(i.value,{c:.5})}`),styleWidth:ae(()=>`calc(100% + ${J(i.value)})`)}},render(){return v("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),ns={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},Ve=R({name:"Col",props:ns,setup(e){const t=U(Gn,null);return t||zt("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:t.mergedClsPrefixRef,gutter:t.gutterRef,stylePadding:B(()=>`${J(t.verticalGutterRef.value,{c:.5})} ${J(t.horizontalGutterRef.value,{c:.5})}`),mergedPush:B(()=>Number(e.push)-Number(e.pull))}},render(){const{$slots:e,span:t,mergedPush:n,offset:r,stylePadding:o,gutter:i,mergedClsPrefix:a}=this;return v("div",{class:[`${a}-col`,{[`${a}-col--${t}-span`]:!0,[`${a}-col--${n}-push`]:n>0,[`${a}-col--${-n}-pull`]:n<0,[`${a}-col--${r}-offset`]:r}],style:{padding:o}},i?v("div",null,e):e)}}),rs=pe("n-layout-sider"),It={type:String,default:"static"},os=b("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[b("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),A("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),is={embedded:Boolean,position:It,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Zn=pe("n-layout");function as(e){return R({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},F.props),is),setup(t){const n=D(null),r=D(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=X(t),a=F("Layout","-layout",os,Tt,t,o);function l(m,u){if(t.nativeScrollbar){const{value:d}=n;d&&(u===void 0?d.scrollTo(m):d.scrollTo(m,u))}else{const{value:d}=r;d&&d.scrollTo(m,u)}}se(Zn,t);let s=0,c=0;const w=m=>{var u;const d=m.target;s=d.scrollLeft,c=d.scrollTop,(u=t.onScroll)===null||u===void 0||u.call(t,m)};En(()=>{if(t.nativeScrollbar){const m=n.value;m&&(m.scrollTop=c,m.scrollLeft=s)}});const g={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:l},C=B(()=>{const{common:{cubicBezierEaseInOut:m},self:u}=a.value;return{"--n-bezier":m,"--n-color":t.embedded?u.colorEmbedded:u.color,"--n-text-color":u.textColor}}),y=i?re("layout",B(()=>t.embedded?"e":""),C,t):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:n,scrollbarInstRef:r,hasSiderStyle:g,mergedTheme:a,handleNativeElScroll:w,cssVars:i?void 0:C,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},h)},render(){var t;const{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const o=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return v("div",{class:i,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${n}-layout-scroll-container`,style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):v(Ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const ct=as(!1),ls=b("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[A("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),A("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),ss={position:It,inverted:Boolean,bordered:{type:Boolean,default:!1}},ds=R({name:"LayoutHeader",props:Object.assign(Object.assign({},F.props),ss),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=F("Layout","-layout-header",ls,Tt,e,t),o=B(()=>{const{common:{cubicBezierEaseInOut:a},self:l}=r.value,s={"--n-bezier":a};return e.inverted?(s["--n-color"]=l.headerColorInverted,s["--n-text-color"]=l.textColorInverted,s["--n-border-color"]=l.headerBorderColorInverted):(s["--n-color"]=l.headerColor,s["--n-text-color"]=l.textColor,s["--n-border-color"]=l.headerBorderColor),s}),i=n?re("layout-header",B(()=>e.inverted?"a":"b"),o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),cs=b("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[A("bordered",[z("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),z("left-placement",[A("bordered",[z("border",`
 right: 0;
 `)])]),A("right-placement",`
 justify-content: flex-start;
 `,[A("bordered",[z("border",`
 left: 0;
 `)]),A("collapsed",[b("layout-toggle-button",[b("base-icon",`
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",[M("&:hover",[z("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),b("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[b("base-icon",`
 transform: rotate(0);
 `)]),b("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[M("&:hover",[z("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),A("collapsed",[b("layout-toggle-bar",[M("&:hover",[z("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),b("layout-toggle-button",[b("base-icon",`
 transform: rotate(0);
 `)])]),b("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[b("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[z("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),z("bottom",`
 position: absolute;
 top: 34px;
 `),M("&:hover",[z("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),z("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),z("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),M("&:hover",[z("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),z("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),b("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),A("show-content",[b("layout-sider-scroll-container",{opacity:1})]),A("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),us=R({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v($t,{clsPrefix:e},{default:()=>v(gl,null)}))}}),fs=R({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),hs={position:It,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},vs=R({name:"LayoutSider",props:Object.assign(Object.assign({},F.props),hs),setup(e){const t=U(Zn),n=D(null),r=D(null),o=B(()=>J(s.value?e.collapsedWidth:e.width)),i=B(()=>e.collapseMode!=="transform"?{}:{minWidth:J(e.width)}),a=B(()=>t?t.siderPlacement:"left"),l=D(e.defaultCollapsed),s=Ge(Z(e,"collapsed"),l);function c($,f){if(e.nativeScrollbar){const{value:p}=n;p&&(f===void 0?p.scrollTo($):p.scrollTo($,f))}else{const{value:p}=r;p&&p.scrollTo($,f)}}function w(){const{"onUpdate:collapsed":$,onUpdateCollapsed:f,onExpand:p,onCollapse:P}=e,{value:I}=s;f&&le(f,!I),$&&le($,!I),l.value=!I,I?p&&le(p):P&&le(P)}let g=0,h=0;const C=$=>{var f;const p=$.target;g=p.scrollLeft,h=p.scrollTop,(f=e.onScroll)===null||f===void 0||f.call(e,$)};En(()=>{if(e.nativeScrollbar){const $=n.value;$&&($.scrollTop=h,$.scrollLeft=g)}}),se(rs,{collapsedRef:s,collapseModeRef:Z(e,"collapseMode")});const{mergedClsPrefixRef:y,inlineThemeDisabled:m}=X(e),u=F("Layout","-layout-sider",cs,Tt,e,y);function d($){var f,p;$.propertyName==="max-width"&&(s.value?(f=e.onAfterLeave)===null||f===void 0||f.call(e):(p=e.onAfterEnter)===null||p===void 0||p.call(e))}const S={scrollTo:c},N=B(()=>{const{common:{cubicBezierEaseInOut:$},self:f}=u.value,{siderToggleButtonColor:p,siderToggleButtonBorder:P,siderToggleBarColor:I,siderToggleBarColorHover:O}=f,H={"--n-bezier":$,"--n-toggle-button-color":p,"--n-toggle-button-border":P,"--n-toggle-bar-color":I,"--n-toggle-bar-color-hover":O};return e.inverted?(H["--n-color"]=f.siderColorInverted,H["--n-text-color"]=f.textColorInverted,H["--n-border-color"]=f.siderBorderColorInverted,H["--n-toggle-button-icon-color"]=f.siderToggleButtonIconColorInverted,H.__invertScrollbar=f.__invertScrollbar):(H["--n-color"]=f.siderColor,H["--n-text-color"]=f.textColor,H["--n-border-color"]=f.siderBorderColor,H["--n-toggle-button-icon-color"]=f.siderToggleButtonIconColor),H}),T=m?re("layout-sider",B(()=>e.inverted?"a":"b"),N,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:y,mergedTheme:u,styleMaxWidth:o,mergedCollapsed:s,scrollContainerStyle:i,siderPlacement:a,handleNativeElScroll:C,handleTransitionend:d,handleTriggerClick:w,inlineThemeDisabled:m,cssVars:N,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},S)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:J(this.width)}]},this.nativeScrollbar?v("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(Ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?v(fs,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v(us,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${t}-layout-sider__border`}):null)}}),ms=M([b("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[A("show-divider",[b("list-item",[M("&:not(:last-child)",[z("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),A("clickable",[b("list-item",`
 cursor: pointer;
 `)]),A("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),A("hoverable",[b("list-item",`
 border-radius: var(--n-border-radius);
 `,[M("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[z("divider",`
 background-color: transparent;
 `)])])]),A("bordered, hoverable",[b("list-item",`
 padding: 12px 20px;
 `),z("header, footer",`
 padding: 12px 20px;
 `)]),z("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[M("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),b("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[z("prefix",`
 margin-right: 20px;
 flex: 0;
 `),z("suffix",`
 margin-left: 20px;
 flex: 0;
 `),z("main",`
 flex: 1;
 `),z("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Mn(b("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Bn(b("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ps=Object.assign(Object.assign({},F.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),Jn=pe("n-list"),Lt=R({name:"List",props:ps,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:r}=X(e),o=Ke("List",r,t),i=F("List","-list",ms,Gr,e,t);se(Jn,{showDividerRef:Z(e,"showDivider"),mergedClsPrefixRef:t});const a=B(()=>{const{common:{cubicBezierEaseInOut:s},self:{fontSize:c,textColor:w,color:g,colorModal:h,colorPopover:C,borderColor:y,borderColorModal:m,borderColorPopover:u,borderRadius:d,colorHover:S,colorHoverModal:N,colorHoverPopover:T}}=i.value;return{"--n-font-size":c,"--n-bezier":s,"--n-text-color":w,"--n-color":g,"--n-border-radius":d,"--n-border-color":y,"--n-border-color-modal":m,"--n-border-color-popover":u,"--n-color-modal":h,"--n-color-popover":C,"--n-color-hover":S,"--n-color-hover-modal":N,"--n-color-hover-popover":T}}),l=n?re("list",void 0,a,e):void 0;return{mergedClsPrefix:t,rtlEnabled:o,cssVars:n?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:n,onRender:r}=this;return r==null||r(),v("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},t.header?v("div",{class:`${n}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?v("div",{class:`${n}-list__footer`},t.footer()):null)}}),ee=R({name:"ListItem",setup(){const e=U(Jn,null);return e||zt("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return v("li",{class:`${t}-list-item`},e.prefix?v("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?v("div",{class:`${t}-list-item__main`},e):null,e.suffix?v("div",{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&v("div",{class:`${t}-list-item__divider`}))}}),gs=Object.assign(Object.assign({},F.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),bs=R({name:"Scrollbar",props:gs,setup(){const e=D(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return v(Ye,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ys=bs,bn=1.25,xs=b("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${bn};
`,[A("horizontal",`
 flex-direction: row;
 `,[M(">",[b("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[A("dashed-line-type",[M(">",[b("timeline-item-timeline",[z("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),M(">",[b("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[M(">",[z("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),b("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[z("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),A("right-placement",[b("timeline-item",[b("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),b("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),A("left-placement",[b("timeline-item",[b("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),b("timeline-item-timeline",`
 left: 0;
 `)])]),b("timeline-item",`
 position: relative;
 `,[M("&:last-child",[b("timeline-item-timeline",[z("line",`
 display: none;
 `)]),b("timeline-item-content",[z("meta",`
 margin-bottom: 0;
 `)])]),b("timeline-item-content",[z("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),z("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),z("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),A("dashed-line-type",[b("timeline-item-timeline",[z("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),b("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${bn} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[z("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),z("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),z("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ws=Object.assign(Object.assign({},F.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Qn=pe("n-timeline"),Cs=R({name:"Timeline",props:ws,setup(e,{slots:t}){const{mergedClsPrefixRef:n}=X(e),r=F("Timeline","-timeline",xs,qr,e,n);return se(Qn,{props:e,mergedThemeRef:r,mergedClsPrefixRef:n}),()=>{const{value:o}=n;return v("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},t)}}}),_s={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},_e=R({name:"TimelineItem",props:_s,setup(e){const t=U(Qn);t||zt("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),ho();const{inlineThemeDisabled:n}=X(),r=B(()=>{const{props:{size:i,iconSize:a},mergedThemeRef:l}=t,{type:s}=e,{self:{titleTextColor:c,contentTextColor:w,metaTextColor:g,lineColor:h,titleFontWeight:C,contentFontSize:y,[q("iconSize",i)]:m,[q("titleMargin",i)]:u,[q("titleFontSize",i)]:d,[q("circleBorder",s)]:S,[q("iconColor",s)]:N},common:{cubicBezierEaseInOut:T}}=l.value;return{"--n-bezier":T,"--n-circle-border":S,"--n-icon-color":N,"--n-content-font-size":y,"--n-content-text-color":w,"--n-line-color":h,"--n-meta-text-color":g,"--n-title-font-size":d,"--n-title-font-weight":C,"--n-title-margin":u,"--n-title-text-color":c,"--n-icon-size":J(a)||m}}),o=n?re("timeline-item",B(()=>{const{props:{size:i,iconSize:a}}=t,{type:l}=e;return`${i[0]}${a||"a"}${l[0]}`}),r,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:n?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:n,$slots:r}=this;return n==null||n(),v("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},v("div",{class:`${e}-timeline-item-timeline`},v("div",{class:`${e}-timeline-item-timeline__line`}),Ee(r.icon,o=>o?v("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},o):v("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),v("div",{class:`${e}-timeline-item-content`},Ee(r.header,o=>o||this.title?v("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),v("div",{class:`${e}-timeline-item-content__content`},ht(r.default,()=>[this.content])),v("div",{class:`${e}-timeline-item-content__meta`},ht(r.footer,()=>[this.time]))))}}),$s=b("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[M("&:first-child",{marginTop:0}),A("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[A("align-text",{paddingLeft:0},[M("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),M("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),M("&::before",{backgroundColor:"var(--n-bar-color)"})])]),ks=Object.assign(Object.assign({},F.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),Te=e=>R({name:`H${e}`,props:ks,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=X(t),o=F("Typography","-h",$s,Zr,t,n),i=B(()=>{const{type:l}=t,{common:{cubicBezierEaseInOut:s},self:{headerFontWeight:c,headerTextColor:w,[q("headerPrefixWidth",e)]:g,[q("headerFontSize",e)]:h,[q("headerMargin",e)]:C,[q("headerBarWidth",e)]:y,[q("headerBarColor",l)]:m}}=o.value;return{"--n-bezier":s,"--n-font-size":h,"--n-margin":C,"--n-bar-color":m,"--n-bar-width":y,"--n-font-weight":c,"--n-text-color":w,"--n-prefix-width":g}}),a=r?re(`h${e}`,B(()=>t.type[0]),i,t):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var t;const{prefix:n,alignText:r,mergedClsPrefix:o,cssVars:i,$slots:a}=this;return(t=this.onRender)===null||t===void 0||t.call(this),v(`h${e}`,{class:[`${o}-h`,`${o}-h${e}`,this.themeClass,{[`${o}-h--prefix-bar`]:n,[`${o}-h--align-text`]:r}],style:i},a)}});Te("1");const Nt=Te("2");Te("3");Te("4");Te("5");Te("6");function Ze(){const e=U(_t,null);return B(()=>{if(e===null)return qt;const{mergedThemeRef:{value:t},mergedThemeOverridesRef:{value:n}}=e,r=(t==null?void 0:t.common)||qt;return n!=null&&n.common?Object.assign({},r,n.common):r})}const Ss=R({__name:"ActivityNavigation",setup(e){return(t,n)=>(te(),ze(x(ys),{class:"h-100"},{default:k(()=>[_(x(Ll),{affix:"","show-rail":!1,bound:80,type:"block","show-background":!0,"listen-to":".my-scroll-container"},{default:k(()=>[_(x(ue),{title:"Profil",href:"#activity-profile"}),_(x(ue),{title:"Průběh krok za krokem",href:"#activity-flow"}),_(x(ue),{title:"Příprava",href:"#activity-prep"}),_(x(ue),{title:"Varianty",href:"#activity-variants"}),_(x(ue),{title:"Ke stažení",href:"#activity-downloads"}),_(x(ue),{title:"Návodné otázky",href:"#activity-questions"}),_(x(ue),{title:"Inspirace",href:"#activity-inspiration"},{default:k(()=>[_(x(ue),{style:{"margin-top":"4px"},title:"Galerie",href:"#activity-gallery"}),_(x(ue),{style:{"margin-bottom":"0px"},title:"Deriváty",href:"#activity-derivates"})]),_:1})]),_:1})]),_:1}))}}),zs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ts=L("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z",fill:"currentColor"},null,-1),Ps=[Ts],Ms=R({name:"AttachFileFilled",render:function(t,n){return te(),we("svg",zs,Ps)}}),Bs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Es=L("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"},null,-1),Os=[Es],As=R({name:"GroupFilled",render:function(t,n){return te(),we("svg",Bs,Os)}}),Rs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Is=L("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z",fill:"currentColor"},null,-1),Ls=L("circle",{cx:"18",cy:"11.5",r:"1",fill:"currentColor"},null,-1),Ns=[Is,Ls],Ds=R({name:"PrintOutlined",render:function(t,n){return te(),we("svg",Rs,Ns)}}),Fs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},js=L("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z",fill:"currentColor"},null,-1),Hs=[js],Ws=R({name:"TimerSharp",render:function(t,n){return te(),we("svg",Fs,Hs)}}),Dt=e=>(Jr("data-v-c1d623b8"),e=e(),Qr(),e),Vs={id:"activity-profile",style:{height:"calc(100vh - 64px - 1rem)","padding-top":"1rem"}},Us={class:"stat-trig my-3"},Ys=Dt(()=>L("span",{class:"stat-desc"}," 25 – 40 min ",-1)),Ks={class:"stat-trig my-3"},Xs=Dt(()=>L("span",{class:"stat-desc"},[Q(" 6 skupin"),L("br"),Q("4 – 6 osob/sk. ")],-1)),Gs={class:"stat-trig my-3"},qs=Dt(()=>L("span",{class:"stat-desc"}," Stopky, losovací sada, vytištěné pracovní listy ",-1)),Zs=R({__name:"ActivityProfile",setup(e){const n=Ze().value.primaryColor;return(r,o)=>(te(),we("section",Vs,[_(x(Nt),null,{default:k(()=>[Q("Profil aktivity: Tisková konference")]),_:1}),_(x(qn),{gutter:12},{default:k(()=>[_(x(Ve),{span:20},{default:k(()=>[_(x(wl),{description:"You can't find anything",style:{"margin-top":"200px"}})]),_:1}),_(x(Ve),{span:4},{default:k(()=>[_(x(Lt),{"show-divider":!1},{default:k(()=>[_(x(ee),null,{default:k(()=>[_(x(st),{trigger:"hover"},{trigger:k(()=>[L("div",Us,[L("div",null,[_(x(Ws),{class:"stat-icon",style:K({color:x(n)})},null,8,["style"])]),Ys])]),default:k(()=>[Q(" Celková délka se odvíjí od počtu vystřídaných skupin expertů. ")]),_:1})]),_:1}),_(x(ee),null,{default:k(()=>[_(x(st),{trigger:"hover"},{trigger:k(()=>[L("div",Ks,[L("div",null,[_(x(As),{class:"stat-icon",style:K({color:x(n)})},null,8,["style"])]),Xs])]),default:k(()=>[Q(" Ideálně 4 studenti ve skupině, max 6 lidí ve skupině. ")]),_:1})]),_:1}),_(x(ee),null,{default:k(()=>[_(x(st),{trigger:"hover"},{trigger:k(()=>[L("div",Gs,[L("div",null,[_(x(Ds),{class:"stat-icon",style:K({color:x(n)})},null,8,["style"])]),qs])]),default:k(()=>[Q(" Losovací sada – rozdělení třídy do týmů. Ideálně avizovat rozdělení již během hodiny předešlé – šetří to čas v hodině, kdy realizujeme TK")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}});const Js=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Qs=Js(Zs,[["__scopeId","data-v-c1d623b8"]]),ed=R({__name:"ActivityMinutebook",setup(e){return(t,n)=>(te(),ze(x(Xe),{title:"Minutovník"},{default:k(()=>[_(x(Xn),{vertical:""},{default:k(()=>[_(x(Cs),null,{default:k(()=>[_(x(_e),{type:"default",title:"Rozdělení do skupin",time:"0:00 – 0:03"}),_(x(_e),{type:"default",title:"Zadání pro novinářské redakce a experty",time:"0:03 – 0:05"}),_(x(_e),{type:"success",title:"Příprava otázek a odpovědí",content:"Redakce si připravuje otázky, na které se budou ptát expertů.",time:"0:05 – 0:10"}),_(x(_e),{type:"success",title:"Tisková konference 1",content:"Průběh a moderace",time:"0:10 – 0:20"}),_(x(_e),{type:"success",title:"Tisková konference 2",content:"Rotace na pozici týmů a expertů",time:"0:20 – 0:30"}),_(x(_e),{type:"default",title:"Zpětná vazba a vyhodnocení",time:"0:30 – 0:35"})]),_:1})]),_:1})]),_:1}))}}),td=L("div",null," Sestavit seznam témat pro experty (1–5 témat). ",-1),nd=L("div",null," Nasdílet témata studentům – ideálně v předchozí hodině, minimálně 1 den předem. ",-1),rd=L("div",null," Sestavit „vodítka“ – tzn. 2-3 otázky, které studentům pomohou lépe pochopit, jaké typy otázek tvořit. ",-1),od=L("div",null," Vytisknout „vodítkové“ otázky na papír, případně předepsat na flipchart. ",-1),id=R({__name:"ActivityPrepPhase",setup(e){const t=Ze().value,n=t.textColor3;t.successColor;const r=t.warningColor;return t.errorColor,(o,i)=>(te(),ze(x(Xe),{title:"Přípravná fáze"},{default:k(()=>[_(x(Lt),{"show-divider":!1,class:"list-prep"},{default:k(()=>[_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"1",4)]),default:k(()=>[td]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"2",4)]),default:k(()=>[nd]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(r)})},"3",4)]),default:k(()=>[rd,L("span",{class:"list-infocontent",style:K({color:x(r)})},"Doporučeno v případě, že cílová skupina je mladší třída.",4)]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"4",4)]),default:k(()=>[od]),_:1})]),_:1})]),_:1}))}}),ad=L("div",null," Rozdělte třídu na skupiny po 4 (novinářské redakce) a jednu skupinu expertů. ",-1),ld=L("div",null," Zadejte téma, ke kterému novináři vytvoří otázky, experti si připraví odpovědi. ",-1),sd=L("div",null," Před zahájením TK vysvětlete postup kladení otázek ",-1),dd=L("div",null," Kantor zahájí TK a vyzve prvního novináře, aby položil otázku ",-1),cd=L("div",null," Kantor zvolí konkrétního experta, spouští 30 sekundový limit ",-1),ud=L("div",null," Expert zodpoví otázku ",-1),fd=R({__name:"ActivityActivePhase",setup(e){const t=Ze().value,n=t.textColor3,r=t.successColor;return t.warningColor,t.errorColor,(o,i)=>(te(),ze(x(Xe),{title:"Průběh aktivity – instrukce pro studenty"},{default:k(()=>[_(x(Lt),{"show-divider":!1,class:"list-active"},{default:k(()=>[_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"1",4)]),default:k(()=>[ad]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"2",4)]),default:k(()=>[ld]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"3",4)]),default:k(()=>[sd,L("span",{class:"list-infocontent",style:K({color:x(r)})},"Jste v roli moderátora (rozhodce) – posuzujete relevantnost otázky",4)]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"4",4)]),default:k(()=>[dd]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"5",4)]),default:k(()=>[cd]),_:1}),_(x(ee),null,{prefix:k(()=>[L("div",{class:"list-number",style:K({borderColor:x(n)})},"6",4)]),default:k(()=>[ud,L("span",{class:"list-infocontent",style:K({color:x(r)})},"Kantor posoudí správnost a věcnost odpovědi. Zapisuje info, zda otázka zodpovězena či nezodpovězena",4)]),_:1})]),_:1})]),_:1}))}}),hd={id:"activity-flow",class:"pt-2"},vd=R({__name:"ActivityFlow",setup(e){return(t,n)=>(te(),we("section",hd,[_(x(Nt),null,{default:k(()=>[Q("Průběh krok za krokem")]),_:1}),_(x(qn),{gutter:12,style:{"margin-bottom":"2rem"}},{default:k(()=>[_(x(Ve),{span:16},{default:k(()=>[_(id,{style:{"margin-bottom":"12px"}}),_(fd)]),_:1}),_(x(Ve),{span:8},{default:k(()=>[_(ed)]),_:1})]),_:1})]))}}),md=L("div",null,"Časomíra – přesýpací hodiny, písnička jako časově ohraničený úsek, atd.",-1),pd=R({__name:"ActivityMaterials",setup(e){const t=Ze().value;return(n,r)=>(te(),ze(x(Xe),{title:"Materiály a pomůcky"},{default:k(()=>[_(x(Xn),{vertical:"",size:"large"},{default:k(()=>[_(x(lt),{size:"large"},{default:k(()=>[Q(" Seznam témat, na které se budou tvořit otázky (vygeneruje kantor) ")]),_:1}),_(x(lt),{size:"large"},{default:k(()=>[Q(" Pracovní list pro zápis otázek – týmy „redakce“ využijí levou část PL, týmy „experti“ pracují s pravou částí PL ")]),_:1}),_(x(lt),{size:"large",label:"large"},{default:k(()=>[md,_(x(On),{size:"tiny",quaternary:"",color:x(t).primaryColor,onClick:r[0]||(r[0]=eo(()=>{},["stop"]))},{icon:k(()=>[_(x(ql),null,{default:k(()=>[_(x(Ms))]),_:1})]),default:k(()=>[Q(" [PDF] Časomíry – různé formáty a možnosti pro měření času ")]),_:1},8,["color"])]),_:1})]),_:1})]),_:1}))}}),gd={id:"activity-prep",class:"pt-2"},bd=R({__name:"ActivityPrep",setup(e){return(t,n)=>(te(),we("section",gd,[_(x(Nt),null,{default:k(()=>[Q("Příprava")]),_:1}),_(pd)]))}}),yd={style:{position:"absolute",bottom:"1.5rem","margin-left":"50%"}},xd={style:{padding:"0rem 3rem 1rem 3rem"}},Cd=R({__name:"ActivityView",setup(e){const t=D(null),n=D(!0);function r(o){o.target.scrollTop>20?n.value=!1:n.value=!0}return(o,i)=>(te(),ze(x(ct),{class:"vh-100 vw-100"},{default:k(()=>[_(x(ds),{style:{height:"4rem",padding:"1.5rem"},bordered:""},{default:k(()=>[Q(" Záhlaví stránky ")]),_:1}),_(x(ct),{position:"absolute",style:{top:"4rem"},"has-sider":"","sider-placement":"right"},{default:k(()=>[_(x(ct),{ref_key:"contentRef",ref:t,"on-scroll":r,class:"my-scroll-container","native-scrollbar":!1},{default:k(()=>[Re(L("div",yd,[_(x(On),{onClick:i[0]||(i[0]=a=>{var l;return(l=t.value)==null?void 0:l.scrollTo({top:630,behavior:"smooth"})})},{default:k(()=>[Q("Zobrazit více")]),_:1})],512),[[Pn,n.value]]),L("div",xd,[_(Qs),_(vd),_(bd),_(x(jl),{style:{"z-index":"99"},bottom:30,right:30})])]),_:1},512),_(x(vs),{"content-style":"padding: 1.5rem 1.5rem 1.5rem 0px; margin-left: 1rem;","native-scrollbar":!1},{default:k(()=>[_(Ss)]),_:1})]),_:1})]),_:1}))}});export{Cd as default};
