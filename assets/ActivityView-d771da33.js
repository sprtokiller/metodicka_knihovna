import{i as U,w as re,o as le,a as xe,b as cr,c as B,d as me,m as bn,e as yn,p as xn,r as N,f as be,g as ye,u as oe,h as wn,j as I,k as ae,l as ur,n as fr,q as Ae,s as Dt,C as hr,t as vr,v as q,x as pt,y as v,z as Cn,L as $n,A as gt,B as bt,D as Oe,E as Ue,F as Re,G as mr,H as pr,I as yt,J as gr,K as ve,M as xt,N as br,O as ke,P as Sn,Q as dt,S as Ft,R as yr,U as jt,T as Ht,V as Fe,W as xr,X as Wt,Y as wr,Z as Cr,_ as $r,$ as Sr,a0 as _r,a1 as kr,a2 as wt,a3 as b,a4 as A,a5 as X,a6 as _n,a7 as kn,a8 as k,a9 as M,aa as D,ab as ee,ac as Ct,ad as zr,ae as K,af as Me,ag as Tr,ah as $t,ai as zn,aj as Pr,ak as Vt,al as Tn,am as Ut,an as Yt,ao as Mr,ap as St,aq as Be,ar as Br,as as Er,at as Xt,au as Or,av as J,aw as ct,ax as ie,ay as Ye,az as Ar,aA as Rr,aB as ut,aC as Ir,aD as Lr,aE as Nr,aF as Pn,aG as Mn,aH as Dr,aI as Xe,aJ as Fr,aK as jr,aL as Hr,aM as Wr,aN as Vr,aO as Ur,aP as Yr,aQ as Xr,aR as Gr,aS as Gt,aT as _t,aU as Bn,aV as kt,aW as Kr,aX as qr,aY as Zr,aZ as Kt,a_ as te,a$ as Ie,b0 as P,b1 as S,b2 as C,b3 as we,b4 as F,b5 as he,b6 as Jr,b7 as Qr,b8 as zt,b9 as En,ba as eo}from"./index-5baadf14.js";let He=[];const On=new WeakMap;function to(){He.forEach(e=>e(...On.get(e))),He=[]}function An(e,...t){On.set(e,t),!He.includes(e)&&He.push(e)===1&&requestAnimationFrame(to)}function no(e){return e.nodeType===9?null:e.parentNode}function Rn(e){if(e===null)return null;const t=no(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return Rn(t)}function Tt(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function ro(e,t="default",n=[]){const o=e.$slots[t];return o===void 0?n:o()}function oo(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const io=/^(\d|\.)+$/,qt=/(\d|\.)+/;function Z(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+n)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(io.test(e)){const o=(Number(e)+n)*t;return r?o===0?"0":`${o}px`:`${o}`}else{const o=qt.exec(e);return o?e.replace(qt,String((Number(o[0])+n)*t)):e}return e}let Je;function ao(){return Je===void 0&&(Je=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Je}function lo(e,t,n){const r=U(e,null);r!==null&&(t in r||(r[t]=[]),r[t].push(n.value),re(n,(o,i)=>{const a=r[t],l=a.findIndex(s=>s===i);~l&&a.splice(l,1),a.push(o)}),le(()=>{const o=r[t],i=o.findIndex(a=>a===n.value);~i&&o.splice(i,1)}))}function so(e,t,n){const r=U(e,null);r!==null&&(t in r||(r[t]=[]),xe(()=>{const o=n();o&&r[t].push(o)}),le(()=>{const o=r[t],i=n(),a=o.findIndex(l=>l===i);~a&&o.splice(a,1)}))}let Se,Ee;const co=()=>{var e,t;Se=cr?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,Ee=!1,Se!==void 0?Se.then(()=>{Ee=!0}):Ee=!0};co();function In(e){if(Ee)return;let t=!1;xe(()=>{Ee||Se==null||Se.then(()=>{t||e()})}),le(()=>{t=!0})}function Ge(e,t){return re(e,n=>{n!==void 0&&(t.value=n)}),B(()=>e.value===void 0?t.value:e.value)}function uo(e,t){return B(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const fo=me("n-internal-select-menu-body"),Ln="__disabled__";function _e(e){const t=U(bn,null),n=U(yn,null),r=U(xn,null),o=U(fo,null),i=N();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};xe(()=>{be("fullscreenchange",document,a)}),le(()=>{ye("fullscreenchange",document,a)})}return oe(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?Ln:l===!0?i.value||"body":l:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:l??(i.value||"body")})}_e.tdkey=Ln;_e.propTo={type:[String,Object,Boolean],default:void 0};let Zt=!1;function ho(){if(wn&&window.CSS&&!Zt&&(Zt=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}let fe=null;function Nn(){if(fe===null&&(fe=document.getElementById("v-binder-view-measurer"),fe===null)){fe=document.createElement("div"),fe.id="v-binder-view-measurer";const{style:e}=fe;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(fe)}return fe.getBoundingClientRect()}function vo(e,t){const n=Nn();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Qe(e){const t=e.getBoundingClientRect(),n=Nn();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function mo(e){return e.nodeType===9?null:e.parentNode}function Dn(e){if(e===null)return null;const t=mo(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return Dn(t)}const po=I({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;ae("VBinder",(t=ur())===null||t===void 0?void 0:t.proxy);const n=U("VBinder",null),r=N(null),o=d=>{r.value=d,n&&e.syncTargetWithParent&&n.setTargetRef(d)};let i=[];const a=()=>{let d=r.value;for(;d=Dn(d),d!==null;)i.push(d);for(const _ of i)be("scroll",_,g,!0)},l=()=>{for(const d of i)ye("scroll",d,g,!0);i=[]},s=new Set,c=d=>{s.size===0&&a(),s.has(d)||s.add(d)},x=d=>{s.has(d)&&s.delete(d),s.size===0&&l()},g=()=>{An(h)},h=()=>{s.forEach(d=>d())},w=new Set,y=d=>{w.size===0&&be("resize",window,u),w.has(d)||w.add(d)},m=d=>{w.has(d)&&w.delete(d),w.size===0&&ye("resize",window,u)},u=()=>{w.forEach(d=>d())};return le(()=>{ye("resize",window,u),l()}),{targetRef:r,setTargetRef:o,addScrollListener:c,removeScrollListener:x,addResizeListener:y,removeResizeListener:m}},render(){return fr("binder",this.$slots)}}),go=po,bo=I({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=U("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Ae(Dt("follower",this.$slots),[[t]]):Dt("follower",this.$slots)}}),Ce="@@mmoContext",yo={mounted(e,{value:t}){e[Ce]={handler:void 0},typeof t=="function"&&(e[Ce].handler=t,be("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[Ce];typeof t=="function"?n.handler?n.handler!==t&&(ye("mousemoveoutside",e,n.handler),n.handler=t,be("mousemoveoutside",e,t)):(e[Ce].handler=t,be("mousemoveoutside",e,t)):n.handler&&(ye("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[Ce];t&&ye("mousemoveoutside",e,t),e[Ce].handler=void 0}},xo=yo,{c:Le}=hr(),wo="vueuc-style",Ne={top:"bottom",bottom:"top",left:"right",right:"left"},Jt={start:"end",center:"center",end:"start"},et={top:"height",bottom:"height",left:"width",right:"width"},Co={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},$o={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},So={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Qt={top:!0,bottom:!1,left:!0,right:!1},en={top:"end",bottom:"start",left:"end",right:"start"};function _o(e,t,n,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",c={top:0,left:0};const x=(w,y,m)=>{let u=0,d=0;const _=n[w]-t[y]-t[w];return _>0&&r&&(m?d=Qt[y]?_:-_:u=Qt[y]?_:-_),{left:u,top:d}},g=a==="left"||a==="right";if(s!=="center"){const w=So[e],y=Ne[w],m=et[w];if(n[m]>t[m]){if(t[w]+t[m]<n[m]){const u=(n[m]-t[m])/2;t[w]<u||t[y]<u?t[w]<t[y]?(s=Jt[l],c=x(m,y,g)):c=x(m,w,g):s="center"}}else n[m]<t[m]&&t[y]<0&&t[w]>t[y]&&(s=Jt[l])}else{const w=a==="bottom"||a==="top"?"left":"top",y=Ne[w],m=et[w],u=(n[m]-t[m])/2;(t[w]<u||t[y]<u)&&(t[w]>t[y]?(s=en[w],c=x(m,w,g)):(s=en[y],c=x(m,y,g)))}let h=a;return t[a]<n[et[a]]&&t[a]<t[Ne[a]]&&(h=Ne[a]),{placement:s!=="center"?`${h}-${s}`:h,left:c.left,top:c.top}}function ko(e,t){return t?$o[e]:Co[e]}function zo(e,t,n,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const To=Le([Le(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),Le(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[Le("> *",{pointerEvents:"all"})])]),Po=I({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=U("VBinder"),n=oe(()=>e.enabled!==void 0?e.enabled:e.show),r=N(null),o=N(null),i=()=>{const{syncTrigger:h}=e;h.includes("scroll")&&t.addScrollListener(s),h.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};xe(()=>{n.value&&(s(),i())});const l=vr();To.mount({id:"vueuc/binder",head:!0,anchorMetaName:wo,ssr:l}),le(()=>{a()}),In(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const h=r.value;if(h===null)return;const w=t.targetRef,{x:y,y:m,overlap:u}=e,d=y!==void 0&&m!==void 0?vo(y,m):Qe(w);h.style.setProperty("--v-target-width",`${Math.round(d.width)}px`),h.style.setProperty("--v-target-height",`${Math.round(d.height)}px`);const{width:_,minWidth:L,placement:z,internalShift:$,flip:f}=e;h.setAttribute("v-placement",z),u?h.setAttribute("v-overlap",""):h.removeAttribute("v-overlap");const{style:p}=h;_==="target"?p.width=`${d.width}px`:_!==void 0?p.width=_:p.width="",L==="target"?p.minWidth=`${d.width}px`:L!==void 0?p.minWidth=L:p.minWidth="";const T=Qe(h),R=Qe(o.value),{left:O,top:H,placement:Y}=_o(z,d,T,$,f,u),G=ko(Y,u),{left:E,top:j,transform:W}=zo(Y,R,d,H,O,u);h.setAttribute("v-placement",Y),h.style.setProperty("--v-offset-left",`${Math.round(O)}px`),h.style.setProperty("--v-offset-top",`${Math.round(H)}px`),h.style.transform=`translateX(${E}) translateY(${j}) ${W}`,h.style.setProperty("--v-transform-origin",G),h.style.transformOrigin=G};re(n,h=>{h?(i(),c()):a()});const c=()=>{gt().then(s).catch(h=>console.error(h))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(h=>{re(q(e,h),s)}),["teleportDisabled"].forEach(h=>{re(q(e,h),c)}),re(q(e,"syncTrigger"),h=>{h.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),h.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const x=pt(),g=oe(()=>{const{to:h}=e;if(h!==void 0)return h;x.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:g,syncPosition:s}},render(){return v($n,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=v("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[v("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Ae(n,[[Cn,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});function tn(e){return e.nodeName==="#document"}var Mo=/\s/;function Bo(e){for(var t=e.length;t--&&Mo.test(e.charAt(t)););return t}var Eo=/^\s+/;function Oo(e){return e&&e.slice(0,Bo(e)+1).replace(Eo,"")}var nn=0/0,Ao=/^[-+]0x[0-9a-f]+$/i,Ro=/^0b[01]+$/i,Io=/^0o[0-7]+$/i,Lo=parseInt;function rn(e){if(typeof e=="number")return e;if(bt(e))return nn;if(Oe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Oe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Oo(e);var n=Ro.test(e);return n||Io.test(e)?Lo(e.slice(2),n?2:8):Ao.test(e)?nn:+e}var No=Ue(Re,"WeakMap");const ft=No;var Do=mr(Object.keys,Object);const Fo=Do;var jo=Object.prototype,Ho=jo.hasOwnProperty;function Wo(e){if(!pr(e))return Fo(e);var t=[];for(var n in Object(e))Ho.call(e,n)&&n!="constructor"&&t.push(n);return t}function Pt(e){return yt(e)?gr(e):Wo(e)}var Vo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Uo=/^\w*$/;function Mt(e,t){if(ve(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||bt(e)?!0:Uo.test(e)||!Vo.test(e)||t!=null&&e in Object(t)}var Yo="Expected a function";function Bt(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Yo);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Bt.Cache||xt),n}Bt.Cache=xt;var Xo=500;function Go(e){var t=Bt(e,function(r){return n.size===Xo&&n.clear(),r}),n=t.cache;return t}var Ko=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qo=/\\(\\)?/g,Zo=Go(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ko,function(n,r,o,i){t.push(o?i.replace(qo,"$1"):r||n)}),t});const Jo=Zo;function Fn(e,t){return ve(e)?e:Mt(e,t)?[e]:Jo(br(e))}var Qo=1/0;function Ke(e){if(typeof e=="string"||bt(e))return e;var t=e+"";return t=="0"&&1/e==-Qo?"-0":t}function jn(e,t){t=Fn(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Ke(t[n++])];return n&&n==r?e:void 0}function ei(e,t,n){var r=e==null?void 0:jn(e,t);return r===void 0?n:r}function ti(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function ni(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function ri(){return[]}var oi=Object.prototype,ii=oi.propertyIsEnumerable,on=Object.getOwnPropertySymbols,ai=on?function(e){return e==null?[]:(e=Object(e),ni(on(e),function(t){return ii.call(e,t)}))}:ri;const li=ai;function si(e,t,n){var r=t(e);return ve(e)?r:ti(r,n(e))}function an(e){return si(e,Pt,li)}var di=Ue(Re,"DataView");const ht=di;var ci=Ue(Re,"Promise");const vt=ci;var ui=Ue(Re,"Set");const mt=ui;var ln="[object Map]",fi="[object Object]",sn="[object Promise]",dn="[object Set]",cn="[object WeakMap]",un="[object DataView]",hi=ke(ht),vi=ke(dt),mi=ke(vt),pi=ke(mt),gi=ke(ft),pe=Sn;(ht&&pe(new ht(new ArrayBuffer(1)))!=un||dt&&pe(new dt)!=ln||vt&&pe(vt.resolve())!=sn||mt&&pe(new mt)!=dn||ft&&pe(new ft)!=cn)&&(pe=function(e){var t=Sn(e),n=t==fi?e.constructor:void 0,r=n?ke(n):"";if(r)switch(r){case hi:return un;case vi:return ln;case mi:return sn;case pi:return dn;case gi:return cn}return t});const fn=pe;var bi="__lodash_hash_undefined__";function yi(e){return this.__data__.set(e,bi),this}function xi(e){return this.__data__.has(e)}function We(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new xt;++t<n;)this.add(e[t])}We.prototype.add=We.prototype.push=yi;We.prototype.has=xi;function wi(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Ci(e,t){return e.has(t)}var $i=1,Si=2;function Hn(e,t,n,r,o,i){var a=n&$i,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),x=i.get(t);if(c&&x)return c==t&&x==e;var g=-1,h=!0,w=n&Si?new We:void 0;for(i.set(e,t),i.set(t,e);++g<l;){var y=e[g],m=t[g];if(r)var u=a?r(m,y,g,t,e,i):r(y,m,g,e,t,i);if(u!==void 0){if(u)continue;h=!1;break}if(w){if(!wi(t,function(d,_){if(!Ci(w,_)&&(y===d||o(y,d,n,r,i)))return w.push(_)})){h=!1;break}}else if(!(y===m||o(y,m,n,r,i))){h=!1;break}}return i.delete(e),i.delete(t),h}function _i(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function ki(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var zi=1,Ti=2,Pi="[object Boolean]",Mi="[object Date]",Bi="[object Error]",Ei="[object Map]",Oi="[object Number]",Ai="[object RegExp]",Ri="[object Set]",Ii="[object String]",Li="[object Symbol]",Ni="[object ArrayBuffer]",Di="[object DataView]",hn=Ft?Ft.prototype:void 0,tt=hn?hn.valueOf:void 0;function Fi(e,t,n,r,o,i,a){switch(n){case Di:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ni:return!(e.byteLength!=t.byteLength||!i(new jt(e),new jt(t)));case Pi:case Mi:case Oi:return yr(+e,+t);case Bi:return e.name==t.name&&e.message==t.message;case Ai:case Ii:return e==t+"";case Ei:var l=_i;case Ri:var s=r&zi;if(l||(l=ki),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=Ti,a.set(e,t);var x=Hn(l(e),l(t),r,o,i,a);return a.delete(e),x;case Li:if(tt)return tt.call(e)==tt.call(t)}return!1}var ji=1,Hi=Object.prototype,Wi=Hi.hasOwnProperty;function Vi(e,t,n,r,o,i){var a=n&ji,l=an(e),s=l.length,c=an(t),x=c.length;if(s!=x&&!a)return!1;for(var g=s;g--;){var h=l[g];if(!(a?h in t:Wi.call(t,h)))return!1}var w=i.get(e),y=i.get(t);if(w&&y)return w==t&&y==e;var m=!0;i.set(e,t),i.set(t,e);for(var u=a;++g<s;){h=l[g];var d=e[h],_=t[h];if(r)var L=a?r(_,d,h,t,e,i):r(d,_,h,e,t,i);if(!(L===void 0?d===_||o(d,_,n,r,i):L)){m=!1;break}u||(u=h=="constructor")}if(m&&!u){var z=e.constructor,$=t.constructor;z!=$&&"constructor"in e&&"constructor"in t&&!(typeof z=="function"&&z instanceof z&&typeof $=="function"&&$ instanceof $)&&(m=!1)}return i.delete(e),i.delete(t),m}var Ui=1,vn="[object Arguments]",mn="[object Array]",De="[object Object]",Yi=Object.prototype,pn=Yi.hasOwnProperty;function Xi(e,t,n,r,o,i){var a=ve(e),l=ve(t),s=a?mn:fn(e),c=l?mn:fn(t);s=s==vn?De:s,c=c==vn?De:c;var x=s==De,g=c==De,h=s==c;if(h&&Ht(e)){if(!Ht(t))return!1;a=!0,x=!1}if(h&&!x)return i||(i=new Fe),a||xr(e)?Hn(e,t,n,r,o,i):Fi(e,t,s,n,r,o,i);if(!(n&Ui)){var w=x&&pn.call(e,"__wrapped__"),y=g&&pn.call(t,"__wrapped__");if(w||y){var m=w?e.value():e,u=y?t.value():t;return i||(i=new Fe),o(m,u,n,r,i)}}return h?(i||(i=new Fe),Vi(e,t,n,r,o,i)):!1}function Et(e,t,n,r,o){return e===t?!0:e==null||t==null||!Wt(e)&&!Wt(t)?e!==e&&t!==t:Xi(e,t,n,r,Et,o)}var Gi=1,Ki=2;function qi(e,t,n,r){var o=n.length,i=o,a=!r;if(e==null)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){l=n[o];var s=l[0],c=e[s],x=l[1];if(a&&l[2]){if(c===void 0&&!(s in e))return!1}else{var g=new Fe;if(r)var h=r(c,x,s,e,t,g);if(!(h===void 0?Et(x,c,Gi|Ki,r,g):h))return!1}}return!0}function Wn(e){return e===e&&!Oe(e)}function Zi(e){for(var t=Pt(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Wn(o)]}return t}function Vn(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Ji(e){var t=Zi(e);return t.length==1&&t[0][2]?Vn(t[0][0],t[0][1]):function(n){return n===e||qi(n,e,t)}}function Qi(e,t){return e!=null&&t in Object(e)}function ea(e,t,n){t=Fn(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=Ke(t[r]);if(!(i=e!=null&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&wr(o)&&Cr(a,o)&&(ve(e)||$r(e)))}function ta(e,t){return e!=null&&ea(e,t,Qi)}var na=1,ra=2;function oa(e,t){return Mt(e)&&Wn(t)?Vn(Ke(e),t):function(n){var r=ei(n,e);return r===void 0&&r===t?ta(n,e):Et(t,r,na|ra)}}function ia(e){return function(t){return t==null?void 0:t[e]}}function aa(e){return function(t){return jn(t,e)}}function la(e){return Mt(e)?ia(Ke(e)):aa(e)}function sa(e){return typeof e=="function"?e:e==null?Sr:typeof e=="object"?ve(e)?oa(e[0],e[1]):Ji(e):la(e)}function da(e,t){return e&&_r(e,t,Pt)}function ca(e,t){return function(n,r){if(n==null)return n;if(!yt(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&r(a[i],i,a)!==!1;);return n}}var ua=ca(da);const fa=ua;var ha=function(){return Re.Date.now()};const nt=ha;var va="Expected a function",ma=Math.max,pa=Math.min;function ga(e,t,n){var r,o,i,a,l,s,c=0,x=!1,g=!1,h=!0;if(typeof e!="function")throw new TypeError(va);t=rn(t)||0,Oe(n)&&(x=!!n.leading,g="maxWait"in n,i=g?ma(rn(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h);function w(f){var p=r,T=o;return r=o=void 0,c=f,a=e.apply(T,p),a}function y(f){return c=f,l=setTimeout(d,t),x?w(f):a}function m(f){var p=f-s,T=f-c,R=t-p;return g?pa(R,i-T):R}function u(f){var p=f-s,T=f-c;return s===void 0||p>=t||p<0||g&&T>=i}function d(){var f=nt();if(u(f))return _(f);l=setTimeout(d,m(f))}function _(f){return l=void 0,h&&r?w(f):(r=o=void 0,a)}function L(){l!==void 0&&clearTimeout(l),c=0,r=s=o=l=void 0}function z(){return l===void 0?a:_(nt())}function $(){var f=nt(),p=u(f);if(r=arguments,o=this,s=f,p){if(l===void 0)return y(s);if(g)return clearTimeout(l),l=setTimeout(d,t),w(s)}return l===void 0&&(l=setTimeout(d,t)),a}return $.cancel=L,$.flush=z,$}function ba(e,t){var n=-1,r=yt(e)?Array(e.length):[];return fa(e,function(o,i,a){r[++n]=t(o,i,a)}),r}function ya(e,t){var n=ve(e)?kr:ba;return n(e,sa(t))}var xa="Expected a function";function wa(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(xa);return Oe(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ga(e,t,{leading:r,maxWait:t,trailing:o})}const Ca={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},$a=Ca;function rt(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}function Te(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",o;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):i;o=e.formattingValues[a]||e.formattingValues[i]}else{var l=e.defaultWidth,s=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[s]||e.values[l]}var c=e.argumentCallback?e.argumentCallback(t):t;return o[c]}}function Pe(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var a=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?_a(l,function(g){return g.test(a)}):Sa(l,function(g){return g.test(a)}),c;c=e.valueCallback?e.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;var x=t.slice(a.length);return{value:c,rest:x}}}function Sa(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function _a(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function ka(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],i=t.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;var l=t.slice(o.length);return{value:a,rest:l}}}var za={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ta=function(t,n,r){var o,i=za[t];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:o+" ago":o};const Pa=Ta;var Ma={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ba={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ea={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Oa={date:rt({formats:Ma,defaultWidth:"full"}),time:rt({formats:Ba,defaultWidth:"full"}),dateTime:rt({formats:Ea,defaultWidth:"full"})};const Aa=Oa;var Ra={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ia=function(t,n,r,o){return Ra[t]};const La=Ia;var Na={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Da={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Fa={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ja={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ha={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Wa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Va=function(t,n){var r=Number(t),o=r%100;if(o>20||o<10)switch(o%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Ua={ordinalNumber:Va,era:Te({values:Na,defaultWidth:"wide"}),quarter:Te({values:Da,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Te({values:Fa,defaultWidth:"wide"}),day:Te({values:ja,defaultWidth:"wide"}),dayPeriod:Te({values:Ha,defaultWidth:"wide",formattingValues:Wa,defaultFormattingWidth:"wide"})};const Ya=Ua;var Xa=/^(\d+)(th|st|nd|rd)?/i,Ga=/\d+/i,Ka={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qa={any:[/^b/i,/^(a|c)/i]},Za={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ja={any:[/1/i,/2/i,/3/i,/4/i]},Qa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},el={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tl={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},rl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ol={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},il={ordinalNumber:ka({matchPattern:Xa,parsePattern:Ga,valueCallback:function(t){return parseInt(t,10)}}),era:Pe({matchPatterns:Ka,defaultMatchWidth:"wide",parsePatterns:qa,defaultParseWidth:"any"}),quarter:Pe({matchPatterns:Za,defaultMatchWidth:"wide",parsePatterns:Ja,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Pe({matchPatterns:Qa,defaultMatchWidth:"wide",parsePatterns:el,defaultParseWidth:"any"}),day:Pe({matchPatterns:tl,defaultMatchWidth:"wide",parsePatterns:nl,defaultParseWidth:"any"}),dayPeriod:Pe({matchPatterns:rl,defaultMatchWidth:"any",parsePatterns:ol,defaultParseWidth:"any"})};const al=il;var ll={code:"en-US",formatDistance:Pa,formatLong:Aa,formatRelative:La,localize:Ya,match:al,options:{weekStartsOn:0,firstWeekContainsDate:1}};const sl=ll,dl={name:"en-US",locale:sl},cl=dl;function ul(e){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=U(wt,null)||{},r=B(()=>{var i,a;return(a=(i=t==null?void 0:t.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:$a[e]});return{dateLocaleRef:B(()=>{var i;return(i=n==null?void 0:n.value)!==null&&i!==void 0?i:cl}),localeRef:r}}function fl(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function hl(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const vl=b("affix",[A("affixed",{position:"fixed"},[A("absolute-positioned",{position:"absolute"})])]),Ot={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},ml=kn(Ot),pl=I({name:"Affix",props:Ot,setup(e){const{mergedClsPrefixRef:t}=X(e);_n("-affix",vl,t);let n=null;const r=N(!1),o=N(!1),i=N(null),a=N(null),l=B(()=>o.value||r.value),s=B(()=>{var u,d;return(d=(u=e.triggerTop)!==null&&u!==void 0?u:e.offsetTop)!==null&&d!==void 0?d:e.top}),c=B(()=>{var u,d;return(d=(u=e.top)!==null&&u!==void 0?u:e.triggerTop)!==null&&d!==void 0?d:e.offsetTop}),x=B(()=>{var u,d;return(d=(u=e.bottom)!==null&&u!==void 0?u:e.triggerBottom)!==null&&d!==void 0?d:e.offsetBottom}),g=B(()=>{var u,d;return(d=(u=e.triggerBottom)!==null&&u!==void 0?u:e.offsetBottom)!==null&&d!==void 0?d:e.bottom}),h=N(null),w=()=>{const{target:u,listenTo:d}=e;u?n=u():d?n=Tt(d):n=document,n&&(n.addEventListener("scroll",y),y())};function y(){An(m)}function m(){const{value:u}=h;if(!n||!u)return;const d=fl(n);if(l.value){d<a.value&&(r.value=!1,a.value=null),d>i.value&&(o.value=!1,i.value=null);return}const _=hl(n),L=u.getBoundingClientRect(),z=L.top-_.top,$=_.bottom-L.bottom,f=s.value,p=g.value;f!==void 0&&z<=f?(r.value=!0,a.value=d-(f-z)):(r.value=!1,a.value=null),p!==void 0&&$<=p?(o.value=!0,i.value=d+p-$):(o.value=!1,i.value=null)}return xe(()=>{w()}),le(()=>{n&&n.removeEventListener("scroll",y)}),{selfRef:h,affixed:l,mergedClsPrefix:t,mergedstyle:B(()=>{const u={};return r.value&&s.value!==void 0&&c.value!==void 0&&(u.top=`${c.value}px`),o.value&&g.value!==void 0&&x.value!==void 0&&(u.bottom=`${x.value}px`),u})}},render(){const{mergedClsPrefix:e}=this;return v("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),gl=I({name:"ChevronRight",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),bl=I({name:"Empty",render(){return v("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),v("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),yl=b("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[k("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[M("+",[k("description",`
 margin-top: 8px;
 `)])]),k("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),k("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),xl=Object.assign(Object.assign({},D.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),wl=I({name:"Empty",props:xl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=D("Empty","-empty",yl,zr,e,t),{localeRef:o}=ul("Empty"),i=U(wt,null),a=B(()=>{var x,g,h;return(x=e.description)!==null&&x!==void 0?x:(h=(g=i==null?void 0:i.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||h===void 0?void 0:h.description}),l=B(()=>{var x,g;return((g=(x=i==null?void 0:i.mergedComponentPropsRef.value)===null||x===void 0?void 0:x.Empty)===null||g===void 0?void 0:g.renderIcon)||(()=>v(bl,null))}),s=B(()=>{const{size:x}=e,{common:{cubicBezierEaseInOut:g},self:{[K("iconSize",x)]:h,[K("fontSize",x)]:w,textColor:y,iconColor:m,extraTextColor:u}}=r.value;return{"--n-icon-size":h,"--n-font-size":w,"--n-bezier":g,"--n-text-color":y,"--n-icon-color":m,"--n-extra-text-color":u}}),c=n?ee("empty",B(()=>{let x="";const{size:g}=e;return x+=g[0],x}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:B(()=>a.value||o.value.description),cssVars:n?void 0:s,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),v("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?v("div",{class:`${t}-empty__icon`},e.icon?e.icon():v(Ct,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?v("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?v("div",{class:`${t}-empty__extra`},e.extra()):null)}}),ot={top:"bottom",bottom:"top",left:"right",right:"left"},V="var(--n-arrow-height) * 1.414",Cl=M([b("popover",`
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
 `)]),Me("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Me("scrollable",[Me("show-header-or-footer","padding: var(--n-padding);")])]),k("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),k("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),A("scrollable, show-header-or-footer",[k("content",`
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
 `)]),Q("top-start",`
 top: calc(${V} / -2);
 left: calc(${se("top-start")} - var(--v-offset-left));
 `),Q("top",`
 top: calc(${V} / -2);
 transform: translateX(calc(${V} / -2)) rotate(45deg);
 left: 50%;
 `),Q("top-end",`
 top: calc(${V} / -2);
 right: calc(${se("top-end")} + var(--v-offset-left));
 `),Q("bottom-start",`
 bottom: calc(${V} / -2);
 left: calc(${se("bottom-start")} - var(--v-offset-left));
 `),Q("bottom",`
 bottom: calc(${V} / -2);
 transform: translateX(calc(${V} / -2)) rotate(45deg);
 left: 50%;
 `),Q("bottom-end",`
 bottom: calc(${V} / -2);
 right: calc(${se("bottom-end")} + var(--v-offset-left));
 `),Q("left-start",`
 left: calc(${V} / -2);
 top: calc(${se("left-start")} - var(--v-offset-top));
 `),Q("left",`
 left: calc(${V} / -2);
 transform: translateY(calc(${V} / -2)) rotate(45deg);
 top: 50%;
 `),Q("left-end",`
 left: calc(${V} / -2);
 bottom: calc(${se("left-end")} + var(--v-offset-top));
 `),Q("right-start",`
 right: calc(${V} / -2);
 top: calc(${se("right-start")} - var(--v-offset-top));
 `),Q("right",`
 right: calc(${V} / -2);
 transform: translateY(calc(${V} / -2)) rotate(45deg);
 top: 50%;
 `),Q("right-end",`
 right: calc(${V} / -2);
 bottom: calc(${se("right-end")} + var(--v-offset-top));
 `),...ya({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${V}) / 2)`,s=se(o);return M(`[v-placement="${o}"] >`,[b("popover-shared",[A("center-arrow",[b("popover-arrow",`${t}: calc(max(${l}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function se(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function Q(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return M(`[v-placement="${e}"] >`,[b("popover-shared",`
 margin-${ot[n]}: var(--n-space);
 `,[A("show-arrow",`
 margin-${ot[n]}: var(--n-space-arrow);
 `),A("overlap",`
 margin: 0;
 `),Tr("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${ot[n]}: auto;
 ${r}
 `,[b("popover-arrow",t)])])])}const Un=Object.assign(Object.assign({},D.props),{to:_e.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),$l=({arrowStyle:e,clsPrefix:t})=>v("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},v("div",{class:`${t}-popover-arrow`,style:e})),Sl=I({name:"PopoverBody",inheritAttrs:!1,props:Un,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i}=X(e),a=D("Popover","-popover",Cl,Pr,e,o),l=N(null),s=U("NPopover"),c=N(null),x=N(e.show),g=N(!1);$t(()=>{const{show:p}=e;p&&!ao()&&!e.internalDeactivateImmediately&&(g.value=!0)});const h=B(()=>{const{trigger:p,onClickoutside:T}=e,R=[],{positionManuallyRef:{value:O}}=s;return O||(p==="click"&&!T&&R.push([Vt,z,void 0,{capture:!0}]),p==="hover"&&R.push([xo,L])),T&&R.push([Vt,z,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&g.value)&&R.push([Tn,e.show]),R}),w=B(()=>{const p=e.width==="trigger"?void 0:Z(e.width),T=[];p&&T.push({width:p});const{maxWidth:R,minWidth:O}=e;return R&&T.push({maxWidth:Z(R)}),O&&T.push({maxWidth:Z(O)}),i||T.push(y.value),T}),y=B(()=>{const{common:{cubicBezierEaseInOut:p,cubicBezierEaseIn:T,cubicBezierEaseOut:R},self:{space:O,spaceArrow:H,padding:Y,fontSize:G,textColor:E,dividerColor:j,color:W,boxShadow:ce,borderRadius:ue,arrowHeight:ne,arrowOffset:qe,arrowOffsetVertical:Ze}}=a.value;return{"--n-box-shadow":ce,"--n-bezier":p,"--n-bezier-ease-in":T,"--n-bezier-ease-out":R,"--n-font-size":G,"--n-text-color":E,"--n-color":W,"--n-divider-color":j,"--n-border-radius":ue,"--n-arrow-height":ne,"--n-arrow-offset":qe,"--n-arrow-offset-vertical":Ze,"--n-padding":Y,"--n-space":O,"--n-space-arrow":H}}),m=i?ee("popover",void 0,y,e):void 0;s.setBodyInstance({syncPosition:u}),le(()=>{s.setBodyInstance(null)}),re(q(e,"show"),p=>{e.animated||(p?x.value=!0:x.value=!1)});function u(){var p;(p=l.value)===null||p===void 0||p.syncPosition()}function d(p){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(p)}function _(p){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(p)}function L(p){e.trigger==="hover"&&!$().contains(Ut(p))&&s.handleMouseMoveOutside(p)}function z(p){(e.trigger==="click"&&!$().contains(Ut(p))||e.onClickoutside)&&s.handleClickOutside(p)}function $(){return s.getTriggerElement()}ae(xn,c),ae(yn,null),ae(bn,null);function f(){if(m==null||m.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&g.value))return null;let T;const R=s.internalRenderBodyRef.value,{value:O}=o;if(R)T=R([`${O}-popover-shared`,m==null?void 0:m.themeClass.value,e.overlap&&`${O}-popover-shared--overlap`,e.showArrow&&`${O}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${O}-popover-shared--center-arrow`],c,w.value,d,_);else{const{value:H}=s.extraClassRef,{internalTrapFocus:Y}=e,G=!Yt(t.header)||!Yt(t.footer),E=()=>{var j;const W=G?v(Br,null,Be(t.header,ne=>ne?v("div",{class:`${O}-popover__header`,style:e.headerStyle},ne):null),Be(t.default,ne=>ne?v("div",{class:`${O}-popover__content`,style:e.contentStyle},t):null),Be(t.footer,ne=>ne?v("div",{class:`${O}-popover__footer`,style:e.footerStyle},ne):null)):e.scrollable?(j=t.default)===null||j===void 0?void 0:j.call(t):v("div",{class:`${O}-popover__content`,style:e.contentStyle},t),ce=e.scrollable?v(Er,{contentClass:G?void 0:`${O}-popover__content`,contentStyle:G?void 0:e.contentStyle},{default:()=>W}):W,ue=e.showArrow?$l({arrowStyle:e.arrowStyle,clsPrefix:O}):null;return[ce,ue]};T=v("div",St({class:[`${O}-popover`,`${O}-popover-shared`,m==null?void 0:m.themeClass.value,H.map(j=>`${O}-${j}`),{[`${O}-popover--scrollable`]:e.scrollable,[`${O}-popover--show-header-or-footer`]:G,[`${O}-popover--raw`]:e.raw,[`${O}-popover-shared--overlap`]:e.overlap,[`${O}-popover-shared--show-arrow`]:e.showArrow,[`${O}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:c,style:w.value,onKeydown:s.handleKeydown,onMouseenter:d,onMouseleave:_},n),Y?v(Mr,{active:e.show,autoFocus:!0},{default:E}):E())}return Ae(T,h.value)}return{displayed:g,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:l,adjustedTo:_e(e),followerEnabled:x,renderContentNode:f}},render(){return v(Po,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===_e.tdkey},{default:()=>this.animated?v(zn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),_l=Object.keys(Un),kl={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function zl(e,t,n){kl[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=n[r];o?e.props[r]=(...a)=>{o(...a),i(...a)}:e.props[r]=i})}const Tl=J("").type,Yn={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:_e.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Pl=Object.assign(Object.assign(Object.assign({},D.props),Yn),{internalOnAfterLeave:Function,internalRenderBody:Function}),Ml=I({name:"Popover",inheritAttrs:!1,props:Pl,__popover__:!0,setup(e){const t=pt(),n=N(null),r=B(()=>e.show),o=N(e.defaultShow),i=Ge(r,o),a=oe(()=>e.disabled?!1:i.value),l=()=>{if(e.disabled)return!0;const{getDisabled:E}=e;return!!(E!=null&&E())},s=()=>l()?!1:i.value,c=uo(e,["arrow","showArrow"]),x=B(()=>e.overlap?!1:c.value);let g=null;const h=N(null),w=N(null),y=oe(()=>e.x!==void 0&&e.y!==void 0);function m(E){const{"onUpdate:show":j,onUpdateShow:W,onShow:ce,onHide:ue}=e;o.value=E,j&&ie(j,E),W&&ie(W,E),E&&ce&&ie(ce,!0),E&&ue&&ie(ue,!1)}function u(){g&&g.syncPosition()}function d(){const{value:E}=h;E&&(window.clearTimeout(E),h.value=null)}function _(){const{value:E}=w;E&&(window.clearTimeout(E),w.value=null)}function L(){const E=l();if(e.trigger==="focus"&&!E){if(s())return;m(!0)}}function z(){const E=l();if(e.trigger==="focus"&&!E){if(!s())return;m(!1)}}function $(){const E=l();if(e.trigger==="hover"&&!E){if(_(),h.value!==null||s())return;const j=()=>{m(!0),h.value=null},{delay:W}=e;W===0?j():h.value=window.setTimeout(j,W)}}function f(){const E=l();if(e.trigger==="hover"&&!E){if(d(),w.value!==null||!s())return;const j=()=>{m(!1),w.value=null},{duration:W}=e;W===0?j():w.value=window.setTimeout(j,W)}}function p(){f()}function T(E){var j;s()&&(e.trigger==="click"&&(d(),_(),m(!1)),(j=e.onClickoutside)===null||j===void 0||j.call(e,E))}function R(){if(e.trigger==="click"&&!l()){d(),_();const E=!s();m(E)}}function O(E){e.internalTrapFocus&&E.key==="Escape"&&(d(),_(),m(!1))}function H(E){o.value=E}function Y(){var E;return(E=n.value)===null||E===void 0?void 0:E.targetRef}function G(E){g=E}return ae("NPopover",{getTriggerElement:Y,handleKeydown:O,handleMouseEnter:$,handleMouseLeave:f,handleClickOutside:T,handleMouseMoveOutside:p,setBodyInstance:G,positionManuallyRef:y,isMountedRef:t,zIndexRef:q(e,"zIndex"),extraClassRef:q(e,"internalExtraClass"),internalRenderBodyRef:q(e,"internalRenderBody")}),$t(()=>{i.value&&l()&&m(!1)}),{binderInstRef:n,positionManually:y,mergedShowConsideringDisabledProp:a,uncontrolledShow:o,mergedShowArrow:x,getMergedShow:s,setShow:H,handleClick:R,handleMouseEnter:$,handleMouseLeave:f,handleFocus:L,handleBlur:z,syncPosition:u}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(n.activator?r=Xt(n,"activator"):r=Xt(n,"trigger"),r)){r=Or(r),r=r.type===Tl?v("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,l=[i,...a],s={onBlur:c=>{l.forEach(x=>{x.onBlur(c)})},onFocus:c=>{l.forEach(x=>{x.onFocus(c)})},onClick:c=>{l.forEach(x=>{x.onClick(c)})},onMouseenter:c=>{l.forEach(x=>{x.onMouseenter(c)})},onMouseleave:c=>{l.forEach(x=>{x.onMouseleave(c)})}};zl(r,a?"nested":t?"manual":this.trigger,s)}}return v(go,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Ae(v("div",{style:{position:"fixed",inset:0}}),[[Cn,{enabled:i,zIndex:this.zIndex}]]):null,t?null:v(bo,null,{default:()=>r}),v(Sl,ct(this.$props,_l,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}}),Bl=b("anchor",`
 position: relative;
`,[Me("block",`
 padding-left: var(--n-rail-width);
 `,[b("anchor-link",[M("+, >",[b("anchor-link",`
 margin-top: .5em;
 `)])]),b("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),Me("show-rail",[M(">",[b("anchor-link","padding-left: 0;")])])]),A("block",[b("anchor-link",`
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
 `,[k("bar",`
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
 `,[A("active",[M(">",[k("title",`
 color: var(--n-link-text-color-active);
 `)])]),k("title",`
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
 `)])])]),je=me("n-anchor"),El={title:String,href:String},de=I({name:"AnchorLink",props:El,setup(e,{slots:t}){const n=N(null),r=U(je),o=q(e,"href"),i=oe(()=>o.value&&o.value===r.activeHref.value);lo(je,"collectedLinkHrefs",o),so(je,"titleEls",()=>n.value),re(i,l=>{l&&n.value&&r.updateBarPosition(n.value)});function a(){e.href!==void 0&&r.setActiveHref(e.href)}return()=>{var l;const{value:s}=r.mergedClsPrefix;return v("div",{class:[`${s}-anchor-link`,i.value&&`${s}-anchor-link--active`]},v("a",{ref:n,class:[`${s}-anchor-link__title`],href:e.href,title:oo(e.title),onClick:a},e.title),(l=t.default)===null||l===void 0?void 0:l.call(t))}}});function Ol(e,t){const{top:n,height:r}=e.getBoundingClientRect(),o=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:n-o,height:r}}const At={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Al=kn(At),Rl=I({name:"BaseAnchor",props:Object.assign(Object.assign({},At),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],n=[],r=N(null),o=N(null),i=N(null),a=N(null),l=B(()=>e.type==="block"),s=B(()=>!l.value&&e.showRail);function c(){const{value:y}=i,{value:m}=o;y&&(y.style.transition="none"),m&&(m.style.transition="none"),n&&n.forEach(u=>{u.style.transition="none"}),gt(()=>{const{value:u}=i,{value:d}=o;u&&(u.offsetWidth,u.style.transition=""),d&&(d.offsetWidth,d.style.transition=""),n&&n.forEach(_=>{_.offsetWidth,_.style.transition=""})})}function x(y,m=!0){const{value:u}=i,{value:d}=o,{value:_}=a;if(!_||!u)return;m||(u.style.transition="none",d&&(d.style.transition="none"));const{offsetHeight:L,offsetWidth:z}=y,{top:$,left:f}=y.getBoundingClientRect(),{top:p,left:T}=_.getBoundingClientRect(),R=$-p,O=f-T;u.style.top=`${R}px`,u.style.height=`${L}px`,d&&(d.style.top=`${R}px`,d.style.height=`${L}px`,d.style.maxWidth=`${z+O}px`),u.offsetHeight,d&&d.offsetHeight,m||(u.style.transition="",d&&(d.style.transition=""))}function g(y,m=!0){const u=/^#([^#]+)$/.exec(y);if(!u)return;const d=document.getElementById(u[1]);d&&(r.value=y,d.scrollIntoView(),m||c(),h())}const h=wa(()=>w(!0),128);function w(y=!0){var m;const u=[],d=Tt((m=e.offsetTarget)!==null&&m!==void 0?m:document);t.forEach(f=>{const p=/#([^#]+)$/.exec(f);if(!p)return;const T=document.getElementById(p[1]);if(T&&d){const{top:R,height:O}=Ol(T,d);u.push({top:R,height:O,href:f})}}),u.sort((f,p)=>f.top>p.top?1:(f.top===p.top&&f.height<p.height,-1));const _=r.value,{bound:L,ignoreGap:z}=e,$=u.reduce((f,p)=>p.top+p.height<0?z?p:f:p.top<=L?f===null?p:p.top===f.top?p.href===_?p:f:p.top>f.top?p:f:f,null);y||c(),$?r.value=$.href:r.value=null}return ae(je,{activeHref:r,mergedClsPrefix:q(e,"mergedClsPrefix"),updateBarPosition:x,setActiveHref:g,collectedLinkHrefs:t,titleEls:n}),xe(()=>{document.addEventListener("scroll",h,!0),g(window.location.hash),w(!1)}),In(()=>{g(window.location.hash),w(!1)}),le(()=>{document.removeEventListener("scroll",h,!0)}),re(r,y=>{if(y===null){const{value:m}=o;m&&!l.value&&(m.style.maxWidth="0")}}),{selfRef:a,barRef:i,slotRef:o,setActiveHref:g,activeHref:r,isBlockType:l,mergedShowRail:s}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:n,isBlockType:r,$slots:o}=this,i=v("div",{class:[`${t}-anchor`,r&&`${t}-anchor--block`,n&&`${t}-anchor--show-rail`],ref:"selfRef"},n&&this.showBackground?v("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,n?v("div",{class:`${t}-anchor-rail`},v("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=o.default)===null||e===void 0?void 0:e.call(o));return this.internalScrollable?v(Ye,null,{default:()=>i}):i}}),Il=Object.assign(Object.assign(Object.assign(Object.assign({},D.props),{affix:Boolean}),Ot),At),Ll=I({name:"Anchor",props:Il,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=X(e),o=D("Anchor","-anchor",Bl,Ar,e,n),i=N(null),a=B(()=>{const{self:{railColor:s,linkColor:c,railColorActive:x,linkTextColor:g,linkTextColorHover:h,linkTextColorPressed:w,linkTextColorActive:y,linkFontSize:m,railWidth:u,linkPadding:d,borderRadius:_},common:{cubicBezierEaseInOut:L}}=o.value;return{"--n-link-border-radius":_,"--n-link-color":c,"--n-link-font-size":m,"--n-link-text-color":g,"--n-link-text-color-hover":h,"--n-link-text-color-active":y,"--n-link-text-color-pressed":w,"--n-link-padding":d,"--n-bezier":L,"--n-rail-color":s,"--n-rail-color-active":x,"--n-rail-width":u}}),l=r?ee("anchor",void 0,a,e):void 0;return{scrollTo(s){var c;(c=i.value)===null||c===void 0||c.setActiveHref(s)},renderAnchor:()=>(l==null||l.onRender(),v(Rl,Object.assign({ref:i,style:r?void 0:a.value,class:l==null?void 0:l.themeClass.value},ct(e,Al),{mergedClsPrefix:n.value}),t))}},render(){return this.affix?v(pl,Object.assign({},ct(this,ml)),{default:this.renderAnchor}):this.renderAnchor()}}),Nl=v("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},v("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},v("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},v("g",{transform:"translate(120.000000, 4285.000000)"},v("g",{transform:"translate(7.000000, 126.000000)"},v("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},v("g",{transform:"translate(4.000000, 2.000000)"},v("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),v("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),Dl=b("back-top",`
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
 `),M("svg",{pointerEvents:"none"}),M("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[b("base-icon",{color:"var(--n-icon-color-hover)"})]),M("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[b("base-icon",{color:"var(--n-icon-color-pressed)"})])]),Fl=Object.assign(Object.assign({},D.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),jl=I({name:"BackTop",inheritAttrs:!1,props:Fl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=N(null),o=N(!1);$t(()=>{const{value:z}=r;if(z===null){o.value=!1;return}o.value=z>=e.visibilityHeight});const i=N(!1);re(o,z=>{var $;i.value&&(($=e["onUpdate:show"])===null||$===void 0||$.call(e,z))});const a=q(e,"show"),l=Ge(a,o),s=N(!0),c=N(null),x=B(()=>({right:`calc(${Z(e.right)} + ${Ir.value})`,bottom:Z(e.bottom)}));let g,h;re(l,z=>{var $,f;i.value&&(z&&(($=e.onShow)===null||$===void 0||$.call(e)),(f=e.onHide)===null||f===void 0||f.call(e))});const w=D("BackTop","-back-top",Dl,Lr,e,t);function y(){var z;if(h)return;h=!0;const $=((z=e.target)===null||z===void 0?void 0:z.call(e))||Tt(e.listenTo)||Rn(c.value);if(!$)return;g=$===document.documentElement?document:$;const{to:f}=e;typeof f=="string"&&document.querySelector(f),g.addEventListener("scroll",u),u()}function m(){(tn(g)?document.documentElement:g).scrollTo({top:0,behavior:"smooth"})}function u(){r.value=(tn(g)?document.documentElement:g).scrollTop,i.value||gt(()=>{i.value=!0})}function d(){s.value=!1}xe(()=>{y(),s.value=l.value}),le(()=>{g&&g.removeEventListener("scroll",u)});const _=B(()=>{const{self:{color:z,boxShadow:$,boxShadowHover:f,boxShadowPressed:p,iconColor:T,iconColorHover:R,iconColorPressed:O,width:H,height:Y,iconSize:G,borderRadius:E,textColor:j},common:{cubicBezierEaseInOut:W}}=w.value;return{"--n-bezier":W,"--n-border-radius":E,"--n-height":Y,"--n-width":H,"--n-box-shadow":$,"--n-box-shadow-hover":f,"--n-box-shadow-pressed":p,"--n-color":z,"--n-icon-size":G,"--n-icon-color":T,"--n-icon-color-hover":R,"--n-icon-color-pressed":O,"--n-text-color":j}}),L=n?ee("back-top",void 0,_,e):void 0;return{placeholderRef:c,style:x,mergedShow:l,isMounted:pt(),scrollElement:N(null),scrollTop:r,DomInfoReady:i,transitionDisabled:s,mergedClsPrefix:t,handleAfterEnter:d,handleScroll:u,handleClick:m,cssVars:n?void 0:_,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender}},render(){const{mergedClsPrefix:e}=this;return v("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},v($n,{to:this.to,show:this.mergedShow},{default:()=>v(zn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?v("div",St(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),ut(this.$slots.default,()=>[v(Ct,{clsPrefix:e},{default:()=>Nl})])):null}})}))}}),Hl=v("svg",{viewBox:"0 0 64 64",class:"check-icon"},v("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Wl=v("svg",{viewBox:"0 0 100 100",class:"line-icon"},v("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Vl=me("n-checkbox-group"),Ul=M([b("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[M("&:hover",[b("checkbox-box",[k("border",{border:"var(--n-border-checked)"})])]),M("&:focus:not(:active)",[b("checkbox-box",[k("border",`
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
 `)])])]),A("checked, indeterminate",[M("&:focus:not(:active)",[b("checkbox-box",[k("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[k("border",{border:"var(--n-border-checked)"})])]),A("disabled",{cursor:"not-allowed"},[A("checked",[b("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[k("border",{border:"var(--n-border-disabled-checked)"}),b("checkbox-icon",[M(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),b("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[k("border",{border:"var(--n-border-disabled)"}),b("checkbox-icon",[M(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),k("label",{color:"var(--n-text-color-disabled)"})]),b("checkbox-box-wrapper",`
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
 `,[k("border",`
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
 `),Nr({left:"1px",top:"1px"})])]),k("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[M("&:empty",{display:"none"})])]),Pn(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Mn(b("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Yl=Object.assign(Object.assign({},D.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),it=I({name:"Checkbox",props:Yl,setup(e){const t=N(null),{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:o}=X(e),i=Dr(e,{mergedSize(f){const{size:p}=e;if(p!==void 0)return p;if(s){const{value:T}=s.mergedSizeRef;if(T!==void 0)return T}if(f){const{mergedSize:T}=f;if(T!==void 0)return T.value}return"medium"},mergedDisabled(f){const{disabled:p}=e;if(p!==void 0)return p;if(s){if(s.disabledRef.value)return!0;const{maxRef:{value:T},checkedCountRef:R}=s;if(T!==void 0&&R.value>=T&&!h.value)return!0;const{minRef:{value:O}}=s;if(O!==void 0&&R.value<=O&&h.value)return!0}return f?f.disabled.value:!1}}),{mergedDisabledRef:a,mergedSizeRef:l}=i,s=U(Vl,null),c=N(e.defaultChecked),x=q(e,"checked"),g=Ge(x,c),h=oe(()=>{if(s){const f=s.valueSetRef.value;return f&&e.value!==void 0?f.has(e.value):!1}else return g.value===e.checkedValue}),w=D("Checkbox","-checkbox",Ul,Hr,e,n);function y(f){if(s&&e.value!==void 0)s.toggleCheckbox(!h.value,e.value);else{const{onChange:p,"onUpdate:checked":T,onUpdateChecked:R}=e,{nTriggerFormInput:O,nTriggerFormChange:H}=i,Y=h.value?e.uncheckedValue:e.checkedValue;T&&ie(T,Y,f),R&&ie(R,Y,f),p&&ie(p,Y,f),O(),H(),c.value=Y}}function m(f){a.value||y(f)}function u(f){if(!a.value)switch(f.key){case" ":case"Enter":y(f)}}function d(f){switch(f.key){case" ":f.preventDefault()}}const _={focus:()=>{var f;(f=t.value)===null||f===void 0||f.focus()},blur:()=>{var f;(f=t.value)===null||f===void 0||f.blur()}},L=Xe("Checkbox",o,n),z=B(()=>{const{value:f}=l,{common:{cubicBezierEaseInOut:p},self:{borderRadius:T,color:R,colorChecked:O,colorDisabled:H,colorTableHeader:Y,colorTableHeaderModal:G,colorTableHeaderPopover:E,checkMarkColor:j,checkMarkColorDisabled:W,border:ce,borderFocus:ue,borderDisabled:ne,borderChecked:qe,boxShadowFocus:Ze,textColor:er,textColorDisabled:tr,checkMarkColorDisabledChecked:nr,colorDisabledChecked:rr,borderDisabledChecked:or,labelPadding:ir,labelLineHeight:ar,labelFontWeight:lr,[K("fontSize",f)]:sr,[K("size",f)]:dr}}=w.value;return{"--n-label-line-height":ar,"--n-label-font-weight":lr,"--n-size":dr,"--n-bezier":p,"--n-border-radius":T,"--n-border":ce,"--n-border-checked":qe,"--n-border-focus":ue,"--n-border-disabled":ne,"--n-border-disabled-checked":or,"--n-box-shadow-focus":Ze,"--n-color":R,"--n-color-checked":O,"--n-color-table":Y,"--n-color-table-modal":G,"--n-color-table-popover":E,"--n-color-disabled":H,"--n-color-disabled-checked":rr,"--n-text-color":er,"--n-text-color-disabled":tr,"--n-check-mark-color":j,"--n-check-mark-color-disabled":W,"--n-check-mark-color-disabled-checked":nr,"--n-font-size":sr,"--n-label-padding":ir}}),$=r?ee("checkbox",B(()=>l.value[0]),z,e):void 0;return Object.assign(i,_,{rtlEnabled:L,selfRef:t,mergedClsPrefix:n,mergedDisabled:a,renderedChecked:h,mergedTheme:w,labelId:Fr(),handleClick:m,handleKeyUp:u,handleKeyDown:d,cssVars:r?void 0:z,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var e;const{$slots:t,renderedChecked:n,mergedDisabled:r,indeterminate:o,privateInsideTable:i,cssVars:a,labelId:l,label:s,mergedClsPrefix:c,focusable:x,handleKeyUp:g,handleKeyDown:h,handleClick:w}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,n&&`${c}-checkbox--checked`,r&&`${c}-checkbox--disabled`,o&&`${c}-checkbox--indeterminate`,i&&`${c}-checkbox--inside-table`],tabindex:r||!x?void 0:0,role:"checkbox","aria-checked":o?"mixed":n,"aria-labelledby":l,style:a,onKeyup:g,onKeydown:h,onClick:w,onMousedown:()=>{be("selectstart",window,y=>{y.preventDefault()},{once:!0})}},v("div",{class:`${c}-checkbox-box-wrapper`}," ",v("div",{class:`${c}-checkbox-box`},v(jr,null,{default:()=>this.indeterminate?v("div",{key:"indeterminate",class:`${c}-checkbox-icon`},Wl):v("div",{key:"check",class:`${c}-checkbox-icon`},Hl)}),v("div",{class:`${c}-checkbox-box__border`}))),s!==null||t.default?v("span",{class:`${c}-checkbox__label`,id:l},t.default?t.default():s):null)}}),Xl=Object.assign(Object.assign({},Yn),D.props),at=I({name:"Tooltip",props:Xl,__popover__:!0,setup(e){const t=D("Tooltip","-tooltip",void 0,Wr,e),n=N(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(o){n.value.setShow(o)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:B(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return v(Ml,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Gl=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[A("color-transition",{transition:"color .3s var(--n-bezier)"}),A("depth",{color:"var(--n-color)"},[M("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),M("svg",{height:"1em",width:"1em"})]),Kl=Object.assign(Object.assign({},D.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),ql=I({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Kl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=D("Icon","-icon",Gl,Ur,e,t),o=B(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:l},self:s}=r.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:x}=s;return{"--n-bezier":l,"--n-color":c,"--n-opacity":x}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),i=n?ee("icon",B(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:t,mergedStyle:B(()=>{const{size:a,color:l}=e;return{fontSize:Z(a),color:l}}),cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:r,component:o,onRender:i,themeClass:a}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Vr("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),v("i",St(this.$attrs,{role:"img",class:[`${r}-icon`,a,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?v(o):this.$slots)}});let lt;const Zl=()=>{if(!wn)return!0;if(lt===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),lt=t}return lt},Jl=Object.assign(Object.assign({},D.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Xn=I({name:"Space",props:Jl,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=X(e),r=D("Space","-space",void 0,Xr,e,t),o=Xe("Space",n,t);return{useGap:Zl(),rtlEnabled:o,mergedClsPrefix:t,margin:B(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[K("gap",i)]:a}}=r.value,{row:l,col:s}=Gr(a);return{horizontal:Gt(s),vertical:Gt(l)}})}},render(){const{vertical:e,align:t,inline:n,justify:r,itemStyle:o,margin:i,wrap:a,mergedClsPrefix:l,rtlEnabled:s,useGap:c,wrapItem:x,internalUseGap:g}=this,h=Yr(ro(this));if(!h.length)return null;const w=`${i.horizontal}px`,y=`${i.horizontal/2}px`,m=`${i.vertical}px`,u=`${i.vertical/2}px`,d=h.length-1,_=r.startsWith("space-");return v("div",{role:"none",class:[`${l}-space`,s&&`${l}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!a||e?"nowrap":"wrap",marginTop:c||e?"":`-${u}`,marginBottom:c||e?"":`-${u}`,alignItems:t,gap:c?`${i.vertical}px ${i.horizontal}px`:""}},!x&&(c||g)?h:h.map((L,z)=>v("div",{role:"none",style:[o,{maxWidth:"100%"},c?"":e?{marginBottom:z!==d?m:""}:s?{marginLeft:_?r==="space-between"&&z===d?"":y:z!==d?w:"",marginRight:_?r==="space-between"&&z===0?"":y:"",paddingTop:u,paddingBottom:u}:{marginRight:_?r==="space-between"&&z===d?"":y:z!==d?w:"",marginLeft:_?r==="space-between"&&z===0?"":y:"",paddingTop:u,paddingBottom:u}]},L)))}}),Ql=Array.apply(null,{length:24}).map((e,t)=>{const n=t+1,r=`calc(100% / 24 * ${n})`;return[A(`${n}-span`,{width:r}),A(`${n}-offset`,{marginLeft:r}),A(`${n}-push`,{left:r}),A(`${n}-pull`,{right:r})]}),es=M([b("row",{width:"100%",display:"flex",flexWrap:"wrap"}),b("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[k("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),Ql])]),Gn=me("n-row"),ts={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},Kn=I({name:"Row",props:ts,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=X(e);_n("-legacy-grid",es,t);const r=Xe("Row",n,t),o=oe(()=>{const{gutter:a}=e;return Array.isArray(a)&&a[1]||0}),i=oe(()=>{const{gutter:a}=e;return Array.isArray(a)?a[0]:Number(a)});return ae(Gn,{mergedClsPrefixRef:t,gutterRef:q(e,"gutter"),verticalGutterRef:o,horizontalGutterRef:i}),{mergedClsPrefix:t,rtlEnabled:r,styleMargin:oe(()=>`-${Z(o.value,{c:.5})} -${Z(i.value,{c:.5})}`),styleWidth:oe(()=>`calc(100% + ${Z(i.value)})`)}},render(){return v("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),ns={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},Ve=I({name:"Col",props:ns,setup(e){const t=U(Gn,null);return t||_t("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:t.mergedClsPrefixRef,gutter:t.gutterRef,stylePadding:B(()=>`${Z(t.verticalGutterRef.value,{c:.5})} ${Z(t.horizontalGutterRef.value,{c:.5})}`),mergedPush:B(()=>Number(e.push)-Number(e.pull))}},render(){const{$slots:e,span:t,mergedPush:n,offset:r,stylePadding:o,gutter:i,mergedClsPrefix:a}=this;return v("div",{class:[`${a}-col`,{[`${a}-col--${t}-span`]:!0,[`${a}-col--${n}-push`]:n>0,[`${a}-col--${-n}-pull`]:n<0,[`${a}-col--${r}-offset`]:r}],style:{padding:o}},i?v("div",null,e):e)}}),rs=me("n-layout-sider"),Rt={type:String,default:"static"},os=b("layout",`
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
 `)]),is={embedded:Boolean,position:Rt,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},qn=me("n-layout");function as(e){return I({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},D.props),is),setup(t){const n=N(null),r=N(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=X(t),a=D("Layout","-layout",os,kt,t,o);function l(m,u){if(t.nativeScrollbar){const{value:d}=n;d&&(u===void 0?d.scrollTo(m):d.scrollTo(m,u))}else{const{value:d}=r;d&&d.scrollTo(m,u)}}ae(qn,t);let s=0,c=0;const x=m=>{var u;const d=m.target;s=d.scrollLeft,c=d.scrollTop,(u=t.onScroll)===null||u===void 0||u.call(t,m)};Bn(()=>{if(t.nativeScrollbar){const m=n.value;m&&(m.scrollTop=c,m.scrollLeft=s)}});const g={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:l},w=B(()=>{const{common:{cubicBezierEaseInOut:m},self:u}=a.value;return{"--n-bezier":m,"--n-color":t.embedded?u.colorEmbedded:u.color,"--n-text-color":u.textColor}}),y=i?ee("layout",B(()=>t.embedded?"e":""),w,t):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:n,scrollbarInstRef:r,hasSiderStyle:g,mergedTheme:a,handleNativeElScroll:x,cssVars:i?void 0:w,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},h)},render(){var t;const{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const o=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return v("div",{class:i,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${n}-layout-scroll-container`,style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):v(Ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const st=as(!1),ls=b("layout-header",`
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
 `)]),ss={position:Rt,inverted:Boolean,bordered:{type:Boolean,default:!1}},ds=I({name:"LayoutHeader",props:Object.assign(Object.assign({},D.props),ss),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=X(e),r=D("Layout","-layout-header",ls,kt,e,t),o=B(()=>{const{common:{cubicBezierEaseInOut:a},self:l}=r.value,s={"--n-bezier":a};return e.inverted?(s["--n-color"]=l.headerColorInverted,s["--n-text-color"]=l.textColorInverted,s["--n-border-color"]=l.headerBorderColorInverted):(s["--n-color"]=l.headerColor,s["--n-text-color"]=l.textColor,s["--n-border-color"]=l.headerBorderColor),s}),i=n?ee("layout-header",B(()=>e.inverted?"a":"b"),o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),cs=b("layout-sider",`
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
`,[A("bordered",[k("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),k("left-placement",[A("bordered",[k("border",`
 right: 0;
 `)])]),A("right-placement",`
 justify-content: flex-start;
 `,[A("bordered",[k("border",`
 left: 0;
 `)]),A("collapsed",[b("layout-toggle-button",[b("base-icon",`
 transform: rotate(180deg);
 `)]),b("layout-toggle-bar",[M("&:hover",[k("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),k("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),b("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[b("base-icon",`
 transform: rotate(0);
 `)]),b("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[M("&:hover",[k("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),k("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),A("collapsed",[b("layout-toggle-bar",[M("&:hover",[k("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),k("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),b("layout-toggle-button",[b("base-icon",`
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
 `,[k("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),k("bottom",`
 position: absolute;
 top: 34px;
 `),M("&:hover",[k("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),k("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),k("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),M("&:hover",[k("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),k("border",`
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
 `)]),us=I({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v(Ct,{clsPrefix:e},{default:()=>v(gl,null)}))}}),fs=I({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),hs={position:Rt,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},vs=I({name:"LayoutSider",props:Object.assign(Object.assign({},D.props),hs),setup(e){const t=U(qn),n=N(null),r=N(null),o=B(()=>Z(s.value?e.collapsedWidth:e.width)),i=B(()=>e.collapseMode!=="transform"?{}:{minWidth:Z(e.width)}),a=B(()=>t?t.siderPlacement:"left"),l=N(e.defaultCollapsed),s=Ge(q(e,"collapsed"),l);function c($,f){if(e.nativeScrollbar){const{value:p}=n;p&&(f===void 0?p.scrollTo($):p.scrollTo($,f))}else{const{value:p}=r;p&&p.scrollTo($,f)}}function x(){const{"onUpdate:collapsed":$,onUpdateCollapsed:f,onExpand:p,onCollapse:T}=e,{value:R}=s;f&&ie(f,!R),$&&ie($,!R),l.value=!R,R?p&&ie(p):T&&ie(T)}let g=0,h=0;const w=$=>{var f;const p=$.target;g=p.scrollLeft,h=p.scrollTop,(f=e.onScroll)===null||f===void 0||f.call(e,$)};Bn(()=>{if(e.nativeScrollbar){const $=n.value;$&&($.scrollTop=h,$.scrollLeft=g)}}),ae(rs,{collapsedRef:s,collapseModeRef:q(e,"collapseMode")});const{mergedClsPrefixRef:y,inlineThemeDisabled:m}=X(e),u=D("Layout","-layout-sider",cs,kt,e,y);function d($){var f,p;$.propertyName==="max-width"&&(s.value?(f=e.onAfterLeave)===null||f===void 0||f.call(e):(p=e.onAfterEnter)===null||p===void 0||p.call(e))}const _={scrollTo:c},L=B(()=>{const{common:{cubicBezierEaseInOut:$},self:f}=u.value,{siderToggleButtonColor:p,siderToggleButtonBorder:T,siderToggleBarColor:R,siderToggleBarColorHover:O}=f,H={"--n-bezier":$,"--n-toggle-button-color":p,"--n-toggle-button-border":T,"--n-toggle-bar-color":R,"--n-toggle-bar-color-hover":O};return e.inverted?(H["--n-color"]=f.siderColorInverted,H["--n-text-color"]=f.textColorInverted,H["--n-border-color"]=f.siderBorderColorInverted,H["--n-toggle-button-icon-color"]=f.siderToggleButtonIconColorInverted,H.__invertScrollbar=f.__invertScrollbar):(H["--n-color"]=f.siderColor,H["--n-text-color"]=f.textColor,H["--n-border-color"]=f.siderBorderColor,H["--n-toggle-button-icon-color"]=f.siderToggleButtonIconColor),H}),z=m?ee("layout-sider",B(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:y,mergedTheme:u,styleMaxWidth:o,mergedCollapsed:s,scrollContainerStyle:i,siderPlacement:a,handleNativeElScroll:w,handleTransitionend:d,handleTriggerClick:x,inlineThemeDisabled:m,cssVars:L,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},_)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Z(this.width)}]},this.nativeScrollbar?v("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(Ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?v(fs,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v(us,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${t}-layout-sider__border`}):null)}}),ms=M([b("list",`
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
 `,[A("show-divider",[b("list-item",[M("&:not(:last-child)",[k("divider",`
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
 `,[k("divider",`
 background-color: transparent;
 `)])])]),A("bordered, hoverable",[b("list-item",`
 padding: 12px 20px;
 `),k("header, footer",`
 padding: 12px 20px;
 `)]),k("header, footer",`
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
 `,[k("prefix",`
 margin-right: 20px;
 flex: 0;
 `),k("suffix",`
 margin-left: 20px;
 flex: 0;
 `),k("main",`
 flex: 1;
 `),k("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Pn(b("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Mn(b("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ps=Object.assign(Object.assign({},D.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),Zn=me("n-list"),Jn=I({name:"List",props:ps,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:r}=X(e),o=Xe("List",r,t),i=D("List","-list",ms,Kr,e,t);ae(Zn,{showDividerRef:q(e,"showDivider"),mergedClsPrefixRef:t});const a=B(()=>{const{common:{cubicBezierEaseInOut:s},self:{fontSize:c,textColor:x,color:g,colorModal:h,colorPopover:w,borderColor:y,borderColorModal:m,borderColorPopover:u,borderRadius:d,colorHover:_,colorHoverModal:L,colorHoverPopover:z}}=i.value;return{"--n-font-size":c,"--n-bezier":s,"--n-text-color":x,"--n-color":g,"--n-border-radius":d,"--n-border-color":y,"--n-border-color-modal":m,"--n-border-color-popover":u,"--n-color-modal":h,"--n-color-popover":w,"--n-color-hover":_,"--n-color-hover-modal":L,"--n-color-hover-popover":z}}),l=n?ee("list",void 0,a,e):void 0;return{mergedClsPrefix:t,rtlEnabled:o,cssVars:n?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:n,onRender:r}=this;return r==null||r(),v("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},t.header?v("div",{class:`${n}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?v("div",{class:`${n}-list__footer`},t.footer()):null)}}),ge=I({name:"ListItem",setup(){const e=U(Zn,null);return e||_t("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return v("li",{class:`${t}-list-item`},e.prefix?v("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?v("div",{class:`${t}-list-item__main`},e):null,e.suffix?v("div",{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&v("div",{class:`${t}-list-item__divider`}))}}),gs=Object.assign(Object.assign({},D.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),bs=I({name:"Scrollbar",props:gs,setup(){const e=N(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return v(Ye,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),ys=bs,gn=1.25,xs=b("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${gn};
`,[A("horizontal",`
 flex-direction: row;
 `,[M(">",[b("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[A("dashed-line-type",[M(">",[b("timeline-item-timeline",[k("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),M(">",[b("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[M(">",[k("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),b("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[k("line",`
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
 `,[M("&:last-child",[b("timeline-item-timeline",[k("line",`
 display: none;
 `)]),b("timeline-item-content",[k("meta",`
 margin-bottom: 0;
 `)])]),b("timeline-item-content",[k("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),k("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),k("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),A("dashed-line-type",[b("timeline-item-timeline",[k("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),b("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${gn} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[k("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),k("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),k("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ws=Object.assign(Object.assign({},D.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Qn=me("n-timeline"),Cs=I({name:"Timeline",props:ws,setup(e,{slots:t}){const{mergedClsPrefixRef:n}=X(e),r=D("Timeline","-timeline",xs,qr,e,n);return ae(Qn,{props:e,mergedThemeRef:r,mergedClsPrefixRef:n}),()=>{const{value:o}=n;return v("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},t)}}}),$s={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},$e=I({name:"TimelineItem",props:$s,setup(e){const t=U(Qn);t||_t("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),ho();const{inlineThemeDisabled:n}=X(),r=B(()=>{const{props:{size:i,iconSize:a},mergedThemeRef:l}=t,{type:s}=e,{self:{titleTextColor:c,contentTextColor:x,metaTextColor:g,lineColor:h,titleFontWeight:w,contentFontSize:y,[K("iconSize",i)]:m,[K("titleMargin",i)]:u,[K("titleFontSize",i)]:d,[K("circleBorder",s)]:_,[K("iconColor",s)]:L},common:{cubicBezierEaseInOut:z}}=l.value;return{"--n-bezier":z,"--n-circle-border":_,"--n-icon-color":L,"--n-content-font-size":y,"--n-content-text-color":x,"--n-line-color":h,"--n-meta-text-color":g,"--n-title-font-size":d,"--n-title-font-weight":w,"--n-title-margin":u,"--n-title-text-color":c,"--n-icon-size":Z(a)||m}}),o=n?ee("timeline-item",B(()=>{const{props:{size:i,iconSize:a}}=t,{type:l}=e;return`${i[0]}${a||"a"}${l[0]}`}),r,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:n?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:n,$slots:r}=this;return n==null||n(),v("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},v("div",{class:`${e}-timeline-item-timeline`},v("div",{class:`${e}-timeline-item-timeline__line`}),Be(r.icon,o=>o?v("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},o):v("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),v("div",{class:`${e}-timeline-item-content`},Be(r.header,o=>o||this.title?v("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),v("div",{class:`${e}-timeline-item-content__content`},ut(r.default,()=>[this.content])),v("div",{class:`${e}-timeline-item-content__meta`},ut(r.footer,()=>[this.time]))))}}),Ss=b("h",`
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
 `),M("&::before",{backgroundColor:"var(--n-bar-color)"})])]),_s=Object.assign(Object.assign({},D.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),ze=e=>I({name:`H${e}`,props:_s,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=X(t),o=D("Typography","-h",Ss,Zr,t,n),i=B(()=>{const{type:l}=t,{common:{cubicBezierEaseInOut:s},self:{headerFontWeight:c,headerTextColor:x,[K("headerPrefixWidth",e)]:g,[K("headerFontSize",e)]:h,[K("headerMargin",e)]:w,[K("headerBarWidth",e)]:y,[K("headerBarColor",l)]:m}}=o.value;return{"--n-bezier":s,"--n-font-size":h,"--n-margin":w,"--n-bar-color":m,"--n-bar-width":y,"--n-font-weight":c,"--n-text-color":x,"--n-prefix-width":g}}),a=r?ee(`h${e}`,B(()=>t.type[0]),i,t):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:i,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var t;const{prefix:n,alignText:r,mergedClsPrefix:o,cssVars:i,$slots:a}=this;return(t=this.onRender)===null||t===void 0||t.call(this),v(`h${e}`,{class:[`${o}-h`,`${o}-h${e}`,this.themeClass,{[`${o}-h--prefix-bar`]:n,[`${o}-h--align-text`]:r}],style:i},a)}});ze("1");const It=ze("2");ze("3");ze("4");ze("5");ze("6");function Lt(){const e=U(wt,null);return B(()=>{if(e===null)return Kt;const{mergedThemeRef:{value:t},mergedThemeOverridesRef:{value:n}}=e,r=(t==null?void 0:t.common)||Kt;return n!=null&&n.common?Object.assign({},r,n.common):r})}const ks=I({__name:"ActivityNavigation",setup(e){return(t,n)=>(te(),Ie(C(ys),{class:"h-100"},{default:P(()=>[S(C(Ll),{affix:"","show-rail":!1,bound:80,type:"block","show-background":!0,"listen-to":".my-scroll-container"},{default:P(()=>[S(C(de),{title:"Profil",href:"#activity-profile"}),S(C(de),{title:"Průběh krok za krokem",href:"#activity-flow"}),S(C(de),{title:"Příprava",href:"#activity-prep"}),S(C(de),{title:"Varianty",href:"#activity-variants"}),S(C(de),{title:"Ke stažení",href:"#activity-downloads"}),S(C(de),{title:"Návodné otázky",href:"#activity-questions"}),S(C(de),{title:"Inspirace",href:"#activity-inspiration"},{default:P(()=>[S(C(de),{style:{"margin-top":"4px"},title:"Galerie",href:"#activity-gallery"}),S(C(de),{style:{"margin-bottom":"0px"},title:"Deriváty",href:"#activity-derivates"})]),_:1})]),_:1})]),_:1}))}}),zs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ts=F("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z",fill:"currentColor"},null,-1),Ps=[Ts],Ms=I({name:"AttachFileFilled",render:function(t,n){return te(),we("svg",zs,Ps)}}),Bs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Es=F("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"},null,-1),Os=[Es],As=I({name:"GroupFilled",render:function(t,n){return te(),we("svg",Bs,Os)}}),Rs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Is=F("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z",fill:"currentColor"},null,-1),Ls=F("circle",{cx:"18",cy:"11.5",r:"1",fill:"currentColor"},null,-1),Ns=[Is,Ls],Ds=I({name:"PrintOutlined",render:function(t,n){return te(),we("svg",Rs,Ns)}}),Fs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},js=F("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z",fill:"currentColor"},null,-1),Hs=[js],Ws=I({name:"TimerSharp",render:function(t,n){return te(),we("svg",Fs,Hs)}}),Nt=e=>(Jr("data-v-c1d623b8"),e=e(),Qr(),e),Vs={id:"activity-profile",style:{height:"calc(100vh - 64px - 1rem)","padding-top":"1rem"}},Us={class:"stat-trig my-3"},Ys=Nt(()=>F("span",{class:"stat-desc"}," 25 – 40 min ",-1)),Xs={class:"stat-trig my-3"},Gs=Nt(()=>F("span",{class:"stat-desc"},[J(" 6 skupin"),F("br"),J("4 – 6 osob/sk. ")],-1)),Ks={class:"stat-trig my-3"},qs=Nt(()=>F("span",{class:"stat-desc"}," Stopky, losovací sada, vytištěné pracovní listy ",-1)),Zs=I({__name:"ActivityProfile",setup(e){const n=Lt().value.primaryColor;return(r,o)=>(te(),we("section",Vs,[S(C(It),null,{default:P(()=>[J("Profil aktivity: Tisková konference")]),_:1}),S(C(Kn),{gutter:12},{default:P(()=>[S(C(Ve),{span:20},{default:P(()=>[S(C(wl),{description:"You can't find anything",style:{"margin-top":"200px"}})]),_:1}),S(C(Ve),{span:4},{default:P(()=>[S(C(Jn),{"show-divider":!1},{default:P(()=>[S(C(ge),null,{default:P(()=>[S(C(at),{trigger:"hover"},{trigger:P(()=>[F("div",Us,[F("div",null,[S(C(Ws),{class:"stat-icon",style:he({color:C(n)})},null,8,["style"])]),Ys])]),default:P(()=>[J(" Celková délka se odvíjí od počtu vystřídaných skupin expertů. ")]),_:1})]),_:1}),S(C(ge),null,{default:P(()=>[S(C(at),{trigger:"hover"},{trigger:P(()=>[F("div",Xs,[F("div",null,[S(C(As),{class:"stat-icon",style:he({color:C(n)})},null,8,["style"])]),Gs])]),default:P(()=>[J(" Ideálně 4 studenti ve skupině, max 6 lidí ve skupině. ")]),_:1})]),_:1}),S(C(ge),null,{default:P(()=>[S(C(at),{trigger:"hover"},{trigger:P(()=>[F("div",Ks,[F("div",null,[S(C(Ds),{class:"stat-icon",style:he({color:C(n)})},null,8,["style"])]),qs])]),default:P(()=>[J(" Losovací sada – rozdělení třídy do týmů. Ideálně avizovat rozdělení již během hodiny předešlé – šetří to čas v hodině, kdy realizujeme TK")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}});const Js=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Qs=Js(Zs,[["__scopeId","data-v-c1d623b8"]]),ed=I({__name:"ActivityMinutebook",setup(e){return(t,n)=>(te(),Ie(C(zt),{title:"Minutovník"},{default:P(()=>[S(C(Xn),{vertical:""},{default:P(()=>[S(C(Cs),null,{default:P(()=>[S(C($e),{type:"default",title:"Rozdělení do skupin",time:"0:00 – 0:03"}),S(C($e),{type:"default",title:"Zadání pro novinářské redakce a experty",time:"0:03 – 0:05"}),S(C($e),{type:"success",title:"Příprava otázek a odpovědí",content:"Redakce si připravuje otázky, na které se budou ptát expertů.",time:"0:05 – 0:10"}),S(C($e),{type:"success",title:"Tisková konference 1",content:"Průběh a moderace",time:"0:10 – 0:20"}),S(C($e),{type:"success",title:"Tisková konference 2",content:"Rotace na pozici týmů a expertů",time:"0:20 – 0:30"}),S(C($e),{type:"default",title:"Zpětná vazba a vyhodnocení",time:"0:30 – 0:35"})]),_:1})]),_:1})]),_:1}))}}),td=F("div",null," Sestavit seznam témat pro experty (1–5 témat). ",-1),nd=F("div",null," Nasdílet témata studentům – ideálně v předchozí hodině, minimálně 1 den předem. ",-1),rd=F("div",null," Sestavit „vodítka“ – tzn. 2-3 otázky, které studentům pomohou lépe pochopit, jaké typy otázek tvořit. ",-1),od=F("div",null," Vytisknout „vodítkové“ otázky na papír, případně předepsat na flipchart. ",-1),id=I({__name:"ActivityPrepPhase",setup(e){const t=Lt().value,n=t.textColor3,r=t.warningColor;return t.errorColor,(o,i)=>(te(),Ie(C(zt),{title:"Přípravná fáze"},{default:P(()=>[S(C(Jn),{"show-divider":!1,class:"list-prep"},{default:P(()=>[S(C(ge),null,{prefix:P(()=>[F("div",{class:"list-number",style:he({borderColor:C(n)})},"1",4)]),default:P(()=>[td]),_:1}),S(C(ge),null,{prefix:P(()=>[F("div",{class:"list-number",style:he({borderColor:C(n)})},"2",4)]),default:P(()=>[nd]),_:1}),S(C(ge),null,{prefix:P(()=>[F("div",{class:"list-number",style:he({borderColor:C(r)})},"3",4)]),default:P(()=>[rd,F("span",{class:"list-infocontent",style:he({color:C(r)})},"Doporučeno v případě, že cílová skupina je mladší třída.",4)]),_:1}),S(C(ge),null,{prefix:P(()=>[F("div",{class:"list-number",style:he({borderColor:C(n)})},"4",4)]),default:P(()=>[od]),_:1})]),_:1})]),_:1}))}}),ad={id:"activity-flow",class:"pt-2"},ld=I({__name:"ActivityFlow",setup(e){return(t,n)=>(te(),we("section",ad,[S(C(It),null,{default:P(()=>[J("Průběh krok za krokem")]),_:1}),S(C(Kn),{gutter:12},{default:P(()=>[S(C(Ve),{span:16},{default:P(()=>[S(id,{style:{"margin-bottom":"12px"}})]),_:1}),S(C(Ve),{span:8},{default:P(()=>[S(ed)]),_:1})]),_:1})]))}}),sd=F("div",null,"Časomíra – přesýpací hodiny, písnička jako časově ohraničený úsek, atd.",-1),dd=I({__name:"ActivityMaterials",setup(e){const t=Lt().value;return(n,r)=>(te(),Ie(C(zt),{title:"Materiály a pomůcky"},{default:P(()=>[S(C(Xn),{vertical:"",size:"large"},{default:P(()=>[S(C(it),{size:"large"},{default:P(()=>[J(" Seznam témat, na které se budou tvořit otázky (vygeneruje kantor) ")]),_:1}),S(C(it),{size:"large"},{default:P(()=>[J(" Pracovní list pro zápis otázek – týmy „redakce“ využijí levou část PL, týmy „experti“ pracují s pravou částí PL ")]),_:1}),S(C(it),{size:"large",label:"large"},{default:P(()=>[sd,S(C(En),{size:"tiny",quaternary:"",color:C(t).primaryColor,onClick:r[0]||(r[0]=eo(()=>{},["stop"]))},{icon:P(()=>[S(C(ql),null,{default:P(()=>[S(C(Ms))]),_:1})]),default:P(()=>[J(" [PDF] Časomíry – různé formáty a možnosti pro měření času ")]),_:1},8,["color"])]),_:1})]),_:1})]),_:1}))}}),cd={id:"activity-prep",class:"pt-2"},ud=I({__name:"ActivityPrep",setup(e){return(t,n)=>(te(),we("section",cd,[S(C(It),null,{default:P(()=>[J("Příprava")]),_:1}),S(dd)]))}}),fd={style:{position:"absolute",bottom:"1.5rem","margin-left":"50%"}},hd={style:{padding:"0rem 3rem 1rem 3rem"}},md=I({__name:"ActivityView",setup(e){const t=N(null),n=N(!0);function r(o){o.target.scrollTop>20?n.value=!1:n.value=!0}return(o,i)=>(te(),Ie(C(st),{class:"vh-100 vw-100"},{default:P(()=>[S(C(ds),{style:{height:"4rem",padding:"1.5rem"},bordered:""},{default:P(()=>[J(" Záhlaví stránky ")]),_:1}),S(C(st),{position:"absolute",style:{top:"4rem"},"has-sider":"","sider-placement":"right"},{default:P(()=>[S(C(st),{ref_key:"contentRef",ref:t,"on-scroll":r,class:"my-scroll-container","native-scrollbar":!1},{default:P(()=>[Ae(F("div",fd,[S(C(En),{onClick:i[0]||(i[0]=a=>{var l;return(l=t.value)==null?void 0:l.scrollTo({top:630,behavior:"smooth"})})},{default:P(()=>[J("Zobrazit více")]),_:1})],512),[[Tn,n.value]]),F("div",hd,[S(Qs),S(ld),S(ud),S(C(jl),{style:{"z-index":"99"},bottom:30,right:30})])]),_:1},512),S(C(vs),{"content-style":"padding: 1.5rem 1.5rem 1.5rem 0px; margin-left: 1rem;","native-scrollbar":!1},{default:P(()=>[S(ks)]),_:1})]),_:1})]),_:1}))}});export{md as default};
