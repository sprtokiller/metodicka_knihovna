import{i as te,w as ce,o as we,a as Oe,b as Rr,c as A,d as Te,m as go,e as bo,p as xo,r as L,f as pe,g as me,u as xe,h as yo,j,k as ge,l as Mr,n as Er,q as at,s as Tn,C as Br,t as Ir,v as ie,x as wo,y as g,z as _o,L as Nr,A as _t,B as an,D as it,E as St,F as st,G as Dr,H as Lr,I as sn,J as jr,K as Ae,M as dn,N as zt,O as Vr,P as Ge,Q as Co,R as en,S as Pn,T as Fr,U as An,V as On,W as xt,X as Hr,Y as Rn,Z as Wr,_ as Ur,$ as Kr,a0 as Yr,a1 as Xr,a2 as Gr,a3 as $,a4 as k,a5 as ne,a6 as $o,a7 as ko,a8 as O,a9 as nt,aa as w,ab as Zr,ac as G,ad as cn,ae as _e,af as So,ag as qr,ah as Mn,ai as zo,aj as tn,ak as En,al as Jr,am as To,an as ot,ao as Po,ap as Qr,aq as Bn,ar as un,as as oe,at as lt,au as ye,av as Tt,aw as ei,ax as Pt,ay as ti,az as ni,aA as oi,aB as Ao,aC as In,aD as Nn,aE as re,aF as ri,aG as ii,aH as Oo,aI as Ro,aJ as li,aK as At,aL as ai,aM as si,aN as di,aO as de,aP as ci,aQ as ui,aR as fi,aS as hi,aT as vi,aU as Dn,aV as Mo,aW as fn,aX as pi,aY as mi,aZ as gi,a_ as Ln,a$ as bi,b0 as xi,b1 as jn,b2 as fe,b3 as Re,b4 as I,b5 as T,b6 as z,b7 as _,b8 as Be,b9 as Eo,ba as Bo,bb as dt,bc as yi,bd as wi,be as _i,bf as Ci}from"./index-9bc84105.js";import{_ as Io}from"./_plugin-vue_export-helper-c27b6911.js";let Ct=[];const No=new WeakMap;function $i(){Ct.forEach(e=>e(...No.get(e))),Ct=[]}function Do(e,...t){No.set(e,t),!Ct.includes(e)&&Ct.push(e)===1&&requestAnimationFrame($i)}function Lo(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function ki(e,t="default",n=[]){const r=e.$slots[t];return r===void 0?n:r()}function Si(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const zi=/^(\d|\.)+$/,Vn=/(\d|\.)+/;function ue(e,{c:t=1,offset:n=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+n)*t;return r===0?"0":`${r}px`}else if(typeof e=="string")if(zi.test(e)){const r=(Number(e)+n)*t;return o?r===0?"0":`${r}px`:`${r}`}else{const r=Vn.exec(e);return r?e.replace(Vn,String((Number(r[0])+n)*t)):e}return e}let Ft;function Ti(){return Ft===void 0&&(Ft=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Ft}function Pi(e,t,n){const o=te(e,null);o!==null&&(t in o||(o[t]=[]),o[t].push(n.value),ce(n,(r,i)=>{const l=o[t],a=l.findIndex(s=>s===i);~a&&l.splice(a,1),l.push(r)}),we(()=>{const r=o[t],i=r.findIndex(l=>l===n.value);~i&&r.splice(i,1)}))}function Ai(e,t,n){const o=te(e,null);o!==null&&(t in o||(o[t]=[]),Oe(()=>{const r=n();r&&o[t].push(r)}),we(()=>{const r=o[t],i=n(),l=r.findIndex(a=>a===i);~l&&r.splice(l,1)}))}let Ye,rt;const Oi=()=>{var e,t;Ye=Rr?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,rt=!1,Ye!==void 0?Ye.then(()=>{rt=!0}):rt=!0};Oi();function jo(e){if(rt)return;let t=!1;Oe(()=>{rt||Ye==null||Ye.then(()=>{t||e()})}),we(()=>{t=!0})}function Ot(e,t){return ce(e,n=>{n!==void 0&&(t.value=n)}),A(()=>e.value===void 0?t.value:e.value)}function Ri(e,t){return A(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const Mi=Te("n-internal-select-menu-body"),Vo="__disabled__";function Xe(e){const t=te(go,null),n=te(bo,null),o=te(xo,null),r=te(Mi,null),i=L();if(typeof document<"u"){i.value=document.fullscreenElement;const l=()=>{i.value=document.fullscreenElement};Oe(()=>{pe("fullscreenchange",document,l)}),we(()=>{me("fullscreenchange",document,l)})}return xe(()=>{var l;const{to:a}=e;return a!==void 0?a===!1?Vo:a===!0?i.value||"body":a:t!=null&&t.value?(l=t.value.$el)!==null&&l!==void 0?l:t.value:n!=null&&n.value?n.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:a??(i.value||"body")})}Xe.tdkey=Vo;Xe.propTo={type:[String,Object,Boolean],default:void 0};let Fn=!1;function Ei(){if(yo&&window.CSS&&!Fn&&(Fn=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}let Pe=null;function Fo(){if(Pe===null&&(Pe=document.getElementById("v-binder-view-measurer"),Pe===null)){Pe=document.createElement("div"),Pe.id="v-binder-view-measurer";const{style:e}=Pe;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Pe)}return Pe.getBoundingClientRect()}function Bi(e,t){const n=Fo();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Ht(e){const t=e.getBoundingClientRect(),n=Fo();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Ii(e){return e.nodeType===9?null:e.parentNode}function Ho(e){if(e===null)return null;const t=Ii(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:o,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+r+o))return t}return Ho(t)}const Ni=j({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;ge("VBinder",(t=Mr())===null||t===void 0?void 0:t.proxy);const n=te("VBinder",null),o=L(null),r=d=>{o.value=d,n&&e.syncTargetWithParent&&n.setTargetRef(d)};let i=[];const l=()=>{let d=o.value;for(;d=Ho(d),d!==null;)i.push(d);for(const P of i)pe("scroll",P,y,!0)},a=()=>{for(const d of i)me("scroll",d,y,!0);i=[]},s=new Set,u=d=>{s.size===0&&l(),s.has(d)||s.add(d)},b=d=>{s.has(d)&&s.delete(d),s.size===0&&a()},y=()=>{Do(h)},h=()=>{s.forEach(d=>d())},C=new Set,x=d=>{C.size===0&&pe("resize",window,c),C.has(d)||C.add(d)},v=d=>{C.has(d)&&C.delete(d),C.size===0&&me("resize",window,c)},c=()=>{C.forEach(d=>d())};return we(()=>{me("resize",window,c),a()}),{targetRef:o,setTargetRef:r,addScrollListener:u,removeScrollListener:b,addResizeListener:x,removeResizeListener:v}},render(){return Er("binder",this.$slots)}}),Di=Ni,Li=j({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=te("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?at(Tn("follower",this.$slots),[[t]]):Tn("follower",this.$slots)}}),We="@@mmoContext",ji={mounted(e,{value:t}){e[We]={handler:void 0},typeof t=="function"&&(e[We].handler=t,pe("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[We];typeof t=="function"?n.handler?n.handler!==t&&(me("mousemoveoutside",e,n.handler),n.handler=t,pe("mousemoveoutside",e,t)):(e[We].handler=t,pe("mousemoveoutside",e,t)):n.handler&&(me("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[We];t&&me("mousemoveoutside",e,t),e[We].handler=void 0}},Vi=ji,{c:pt}=Br(),Fi="vueuc-style",mt={top:"bottom",bottom:"top",left:"right",right:"left"},Hn={start:"end",center:"center",end:"start"},Wt={top:"height",bottom:"height",left:"width",right:"width"},Hi={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Wi={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Ui={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Wn={top:!0,bottom:!1,left:!0,right:!1},Un={top:"end",bottom:"start",left:"end",right:"start"};function Ki(e,t,n,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[l,a]=e.split("-");let s=a??"center",u={top:0,left:0};const b=(C,x,v)=>{let c=0,d=0;const P=n[C]-t[x]-t[C];return P>0&&o&&(v?d=Wn[x]?P:-P:c=Wn[x]?P:-P),{left:c,top:d}},y=l==="left"||l==="right";if(s!=="center"){const C=Ui[e],x=mt[C],v=Wt[C];if(n[v]>t[v]){if(t[C]+t[v]<n[v]){const c=(n[v]-t[v])/2;t[C]<c||t[x]<c?t[C]<t[x]?(s=Hn[a],u=b(v,x,y)):u=b(v,C,y):s="center"}}else n[v]<t[v]&&t[x]<0&&t[C]>t[x]&&(s=Hn[a])}else{const C=l==="bottom"||l==="top"?"left":"top",x=mt[C],v=Wt[C],c=(n[v]-t[v])/2;(t[C]<c||t[x]<c)&&(t[C]>t[x]?(s=Un[C],u=b(v,C,y)):(s=Un[x],u=b(v,x,y)))}let h=l;return t[l]<n[Wt[l]]&&t[l]<t[mt[l]]&&(h=mt[l]),{placement:s!=="center"?`${h}-${s}`:h,left:u.left,top:u.top}}function Yi(e,t){return t?Wi[e]:Hi[e]}function Xi(e,t,n,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateX(-50%)"}}}const Gi=pt([pt(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),pt(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[pt("> *",{pointerEvents:"all"})])]),Zi=j({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=te("VBinder"),n=xe(()=>e.enabled!==void 0?e.enabled:e.show),o=L(null),r=L(null),i=()=>{const{syncTrigger:h}=e;h.includes("scroll")&&t.addScrollListener(s),h.includes("resize")&&t.addResizeListener(s)},l=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};Oe(()=>{n.value&&(s(),i())});const a=Ir();Gi.mount({id:"vueuc/binder",head:!0,anchorMetaName:Fi,ssr:a}),we(()=>{l()}),jo(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const h=o.value;if(h===null)return;const C=t.targetRef,{x,y:v,overlap:c}=e,d=x!==void 0&&v!==void 0?Bi(x,v):Ht(C);h.style.setProperty("--v-target-width",`${Math.round(d.width)}px`),h.style.setProperty("--v-target-height",`${Math.round(d.height)}px`);const{width:P,minWidth:H,placement:D,internalShift:M,flip:m}=e;h.setAttribute("v-placement",D),c?h.setAttribute("v-overlap",""):h.removeAttribute("v-overlap");const{style:p}=h;P==="target"?p.width=`${d.width}px`:P!==void 0?p.width=P:p.width="",H==="target"?p.minWidth=`${d.width}px`:H!==void 0?p.minWidth=H:p.minWidth="";const E=Ht(h),V=Ht(r.value),{left:N,top:U,placement:X}=Ki(D,d,E,M,m,c),J=Yi(X,c),{left:B,top:Y,transform:Q}=Xi(X,V,d,U,N,c);h.setAttribute("v-placement",X),h.style.setProperty("--v-offset-left",`${Math.round(N)}px`),h.style.setProperty("--v-offset-top",`${Math.round(U)}px`),h.style.transform=`translateX(${B}) translateY(${Y}) ${Q}`,h.style.setProperty("--v-transform-origin",J),h.style.transformOrigin=J};ce(n,h=>{h?(i(),u()):l()});const u=()=>{_t().then(s).catch(h=>console.error(h))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(h=>{ce(ie(e,h),s)}),["teleportDisabled"].forEach(h=>{ce(ie(e,h),u)}),ce(ie(e,"syncTrigger"),h=>{h.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),h.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const b=wo(),y=xe(()=>{const{to:h}=e;if(h!==void 0)return h;b.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:r,followerRef:o,mergedTo:y,syncPosition:s}},render(){return g(Nr,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=g("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[g("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?at(n,[[_o,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var qi=/\s/;function Ji(e){for(var t=e.length;t--&&qi.test(e.charAt(t)););return t}var Qi=/^\s+/;function el(e){return e&&e.slice(0,Ji(e)+1).replace(Qi,"")}var Kn=0/0,tl=/^[-+]0x[0-9a-f]+$/i,nl=/^0b[01]+$/i,ol=/^0o[0-7]+$/i,rl=parseInt;function Yn(e){if(typeof e=="number")return e;if(an(e))return Kn;if(it(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=it(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=el(e);var n=nl.test(e);return n||ol.test(e)?rl(e.slice(2),n?2:8):tl.test(e)?Kn:+e}var il=St(st,"WeakMap");const nn=il;var ll=Dr(Object.keys,Object);const al=ll;var sl=Object.prototype,dl=sl.hasOwnProperty;function cl(e){if(!Lr(e))return al(e);var t=[];for(var n in Object(e))dl.call(e,n)&&n!="constructor"&&t.push(n);return t}function hn(e){return sn(e)?jr(e):cl(e)}var ul=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fl=/^\w*$/;function vn(e,t){if(Ae(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||an(e)?!0:fl.test(e)||!ul.test(e)||t!=null&&e in Object(t)}var hl="Expected a function";function pn(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(hl);var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],i=n.cache;if(i.has(r))return i.get(r);var l=e.apply(this,o);return n.cache=i.set(r,l)||i,l};return n.cache=new(pn.Cache||dn),n}pn.Cache=dn;var vl=500;function pl(e){var t=pn(e,function(o){return n.size===vl&&n.clear(),o}),n=t.cache;return t}var ml=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,gl=/\\(\\)?/g,bl=pl(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ml,function(n,o,r,i){t.push(r?i.replace(gl,"$1"):o||n)}),t});const xl=bl;function Wo(e,t){return Ae(e)?e:vn(e,t)?[e]:xl(zt(e))}var yl=1/0;function Rt(e){if(typeof e=="string"||an(e))return e;var t=e+"";return t=="0"&&1/e==-yl?"-0":t}function Uo(e,t){t=Wo(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[Rt(t[n++])];return n&&n==o?e:void 0}function wl(e,t,n){var o=e==null?void 0:Uo(e,t);return o===void 0?n:o}function _l(e,t){for(var n=-1,o=t.length,r=e.length;++n<o;)e[r+n]=t[n];return e}function Cl(e){return Vr(zt(e).toLowerCase())}function $l(e,t,n,o){var r=-1,i=e==null?0:e.length;for(o&&i&&(n=e[++r]);++r<i;)n=t(n,e[r],r,e);return n}function kl(e){return function(t){return e==null?void 0:e[t]}}var Sl={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},zl=kl(Sl);const Tl=zl;var Pl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Al="\\u0300-\\u036f",Ol="\\ufe20-\\ufe2f",Rl="\\u20d0-\\u20ff",Ml=Al+Ol+Rl,El="["+Ml+"]",Bl=RegExp(El,"g");function Il(e){return e=zt(e),e&&e.replace(Pl,Tl).replace(Bl,"")}var Nl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Dl(e){return e.match(Nl)||[]}var Ll=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function jl(e){return Ll.test(e)}var Ko="\\ud800-\\udfff",Vl="\\u0300-\\u036f",Fl="\\ufe20-\\ufe2f",Hl="\\u20d0-\\u20ff",Wl=Vl+Fl+Hl,Yo="\\u2700-\\u27bf",Xo="a-z\\xdf-\\xf6\\xf8-\\xff",Ul="\\xac\\xb1\\xd7\\xf7",Kl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yl="\\u2000-\\u206f",Xl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Go="A-Z\\xc0-\\xd6\\xd8-\\xde",Gl="\\ufe0e\\ufe0f",Zo=Ul+Kl+Yl+Xl,qo="['’]",Xn="["+Zo+"]",Zl="["+Wl+"]",Jo="\\d+",ql="["+Yo+"]",Qo="["+Xo+"]",er="[^"+Ko+Zo+Jo+Yo+Xo+Go+"]",Jl="\\ud83c[\\udffb-\\udfff]",Ql="(?:"+Zl+"|"+Jl+")",ea="[^"+Ko+"]",tr="(?:\\ud83c[\\udde6-\\uddff]){2}",nr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ke="["+Go+"]",ta="\\u200d",Gn="(?:"+Qo+"|"+er+")",na="(?:"+Ke+"|"+er+")",Zn="(?:"+qo+"(?:d|ll|m|re|s|t|ve))?",qn="(?:"+qo+"(?:D|LL|M|RE|S|T|VE))?",or=Ql+"?",rr="["+Gl+"]?",oa="(?:"+ta+"(?:"+[ea,tr,nr].join("|")+")"+rr+or+")*",ra="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ia="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",la=rr+or+oa,aa="(?:"+[ql,tr,nr].join("|")+")"+la,sa=RegExp([Ke+"?"+Qo+"+"+Zn+"(?="+[Xn,Ke,"$"].join("|")+")",na+"+"+qn+"(?="+[Xn,Ke+Gn,"$"].join("|")+")",Ke+"?"+Gn+"+"+Zn,Ke+"+"+qn,ia,ra,Jo,aa].join("|"),"g");function da(e){return e.match(sa)||[]}function ca(e,t,n){return e=zt(e),t=n?void 0:t,t===void 0?jl(e)?da(e):Dl(e):e.match(t)||[]}var ua="['’]",fa=RegExp(ua,"g");function ha(e){return function(t){return $l(ca(Il(t).replace(fa,"")),e,"")}}var va=ha(function(e,t,n){return t=t.toLowerCase(),e+(n?Cl(t):t)});const Jn=va;function pa(e,t){for(var n=-1,o=e==null?0:e.length,r=0,i=[];++n<o;){var l=e[n];t(l,n,e)&&(i[r++]=l)}return i}function ma(){return[]}var ga=Object.prototype,ba=ga.propertyIsEnumerable,Qn=Object.getOwnPropertySymbols,xa=Qn?function(e){return e==null?[]:(e=Object(e),pa(Qn(e),function(t){return ba.call(e,t)}))}:ma;const ya=xa;function wa(e,t,n){var o=t(e);return Ae(e)?o:_l(o,n(e))}function eo(e){return wa(e,hn,ya)}var _a=St(st,"DataView");const on=_a;var Ca=St(st,"Promise");const rn=Ca;var $a=St(st,"Set");const ln=$a;var to="[object Map]",ka="[object Object]",no="[object Promise]",oo="[object Set]",ro="[object WeakMap]",io="[object DataView]",Sa=Ge(on),za=Ge(en),Ta=Ge(rn),Pa=Ge(ln),Aa=Ge(nn),Ee=Co;(on&&Ee(new on(new ArrayBuffer(1)))!=io||en&&Ee(new en)!=to||rn&&Ee(rn.resolve())!=no||ln&&Ee(new ln)!=oo||nn&&Ee(new nn)!=ro)&&(Ee=function(e){var t=Co(e),n=t==ka?e.constructor:void 0,o=n?Ge(n):"";if(o)switch(o){case Sa:return io;case za:return to;case Ta:return no;case Pa:return oo;case Aa:return ro}return t});const lo=Ee;var Oa="__lodash_hash_undefined__";function Ra(e){return this.__data__.set(e,Oa),this}function Ma(e){return this.__data__.has(e)}function $t(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new dn;++t<n;)this.add(e[t])}$t.prototype.add=$t.prototype.push=Ra;$t.prototype.has=Ma;function Ea(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}function Ba(e,t){return e.has(t)}var Ia=1,Na=2;function ir(e,t,n,o,r,i){var l=n&Ia,a=e.length,s=t.length;if(a!=s&&!(l&&s>a))return!1;var u=i.get(e),b=i.get(t);if(u&&b)return u==t&&b==e;var y=-1,h=!0,C=n&Na?new $t:void 0;for(i.set(e,t),i.set(t,e);++y<a;){var x=e[y],v=t[y];if(o)var c=l?o(v,x,y,t,e,i):o(x,v,y,e,t,i);if(c!==void 0){if(c)continue;h=!1;break}if(C){if(!Ea(t,function(d,P){if(!Ba(C,P)&&(x===d||r(x,d,n,o,i)))return C.push(P)})){h=!1;break}}else if(!(x===v||r(x,v,n,o,i))){h=!1;break}}return i.delete(e),i.delete(t),h}function Da(e){var t=-1,n=Array(e.size);return e.forEach(function(o,r){n[++t]=[r,o]}),n}function La(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}var ja=1,Va=2,Fa="[object Boolean]",Ha="[object Date]",Wa="[object Error]",Ua="[object Map]",Ka="[object Number]",Ya="[object RegExp]",Xa="[object Set]",Ga="[object String]",Za="[object Symbol]",qa="[object ArrayBuffer]",Ja="[object DataView]",ao=Pn?Pn.prototype:void 0,Ut=ao?ao.valueOf:void 0;function Qa(e,t,n,o,r,i,l){switch(n){case Ja:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case qa:return!(e.byteLength!=t.byteLength||!i(new An(e),new An(t)));case Fa:case Ha:case Ka:return Fr(+e,+t);case Wa:return e.name==t.name&&e.message==t.message;case Ya:case Ga:return e==t+"";case Ua:var a=Da;case Xa:var s=o&ja;if(a||(a=La),e.size!=t.size&&!s)return!1;var u=l.get(e);if(u)return u==t;o|=Va,l.set(e,t);var b=ir(a(e),a(t),o,r,i,l);return l.delete(e),b;case Za:if(Ut)return Ut.call(e)==Ut.call(t)}return!1}var es=1,ts=Object.prototype,ns=ts.hasOwnProperty;function os(e,t,n,o,r,i){var l=n&es,a=eo(e),s=a.length,u=eo(t),b=u.length;if(s!=b&&!l)return!1;for(var y=s;y--;){var h=a[y];if(!(l?h in t:ns.call(t,h)))return!1}var C=i.get(e),x=i.get(t);if(C&&x)return C==t&&x==e;var v=!0;i.set(e,t),i.set(t,e);for(var c=l;++y<s;){h=a[y];var d=e[h],P=t[h];if(o)var H=l?o(P,d,h,t,e,i):o(d,P,h,e,t,i);if(!(H===void 0?d===P||r(d,P,n,o,i):H)){v=!1;break}c||(c=h=="constructor")}if(v&&!c){var D=e.constructor,M=t.constructor;D!=M&&"constructor"in e&&"constructor"in t&&!(typeof D=="function"&&D instanceof D&&typeof M=="function"&&M instanceof M)&&(v=!1)}return i.delete(e),i.delete(t),v}var rs=1,so="[object Arguments]",co="[object Array]",gt="[object Object]",is=Object.prototype,uo=is.hasOwnProperty;function ls(e,t,n,o,r,i){var l=Ae(e),a=Ae(t),s=l?co:lo(e),u=a?co:lo(t);s=s==so?gt:s,u=u==so?gt:u;var b=s==gt,y=u==gt,h=s==u;if(h&&On(e)){if(!On(t))return!1;l=!0,b=!1}if(h&&!b)return i||(i=new xt),l||Hr(e)?ir(e,t,n,o,r,i):Qa(e,t,s,n,o,r,i);if(!(n&rs)){var C=b&&uo.call(e,"__wrapped__"),x=y&&uo.call(t,"__wrapped__");if(C||x){var v=C?e.value():e,c=x?t.value():t;return i||(i=new xt),r(v,c,n,o,i)}}return h?(i||(i=new xt),os(e,t,n,o,r,i)):!1}function mn(e,t,n,o,r){return e===t?!0:e==null||t==null||!Rn(e)&&!Rn(t)?e!==e&&t!==t:ls(e,t,n,o,mn,r)}var as=1,ss=2;function ds(e,t,n,o){var r=n.length,i=r,l=!o;if(e==null)return!i;for(e=Object(e);r--;){var a=n[r];if(l&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++r<i;){a=n[r];var s=a[0],u=e[s],b=a[1];if(l&&a[2]){if(u===void 0&&!(s in e))return!1}else{var y=new xt;if(o)var h=o(u,b,s,e,t,y);if(!(h===void 0?mn(b,u,as|ss,o,y):h))return!1}}return!0}function lr(e){return e===e&&!it(e)}function cs(e){for(var t=hn(e),n=t.length;n--;){var o=t[n],r=e[o];t[n]=[o,r,lr(r)]}return t}function ar(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function us(e){var t=cs(e);return t.length==1&&t[0][2]?ar(t[0][0],t[0][1]):function(n){return n===e||ds(n,e,t)}}function fs(e,t){return e!=null&&t in Object(e)}function hs(e,t,n){t=Wo(t,e);for(var o=-1,r=t.length,i=!1;++o<r;){var l=Rt(t[o]);if(!(i=e!=null&&n(e,l)))break;e=e[l]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&Wr(r)&&Ur(l,r)&&(Ae(e)||Kr(e)))}function vs(e,t){return e!=null&&hs(e,t,fs)}var ps=1,ms=2;function gs(e,t){return vn(e)&&lr(t)?ar(Rt(e),t):function(n){var o=wl(n,e);return o===void 0&&o===t?vs(n,e):mn(t,o,ps|ms)}}function bs(e){return function(t){return t==null?void 0:t[e]}}function xs(e){return function(t){return Uo(t,e)}}function ys(e){return vn(e)?bs(Rt(e)):xs(e)}function ws(e){return typeof e=="function"?e:e==null?Yr:typeof e=="object"?Ae(e)?gs(e[0],e[1]):us(e):ys(e)}function _s(e,t){return e&&Xr(e,t,hn)}function Cs(e,t){return function(n,o){if(n==null)return n;if(!sn(n))return e(n,o);for(var r=n.length,i=t?r:-1,l=Object(n);(t?i--:++i<r)&&o(l[i],i,l)!==!1;);return n}}var $s=Cs(_s);const ks=$s;var Ss=function(){return st.Date.now()};const Kt=Ss;var zs="Expected a function",Ts=Math.max,Ps=Math.min;function As(e,t,n){var o,r,i,l,a,s,u=0,b=!1,y=!1,h=!0;if(typeof e!="function")throw new TypeError(zs);t=Yn(t)||0,it(n)&&(b=!!n.leading,y="maxWait"in n,i=y?Ts(Yn(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h);function C(m){var p=o,E=r;return o=r=void 0,u=m,l=e.apply(E,p),l}function x(m){return u=m,a=setTimeout(d,t),b?C(m):l}function v(m){var p=m-s,E=m-u,V=t-p;return y?Ps(V,i-E):V}function c(m){var p=m-s,E=m-u;return s===void 0||p>=t||p<0||y&&E>=i}function d(){var m=Kt();if(c(m))return P(m);a=setTimeout(d,v(m))}function P(m){return a=void 0,h&&o?C(m):(o=r=void 0,l)}function H(){a!==void 0&&clearTimeout(a),u=0,o=s=r=a=void 0}function D(){return a===void 0?l:P(Kt())}function M(){var m=Kt(),p=c(m);if(o=arguments,r=this,s=m,p){if(a===void 0)return x(s);if(y)return clearTimeout(a),a=setTimeout(d,t),C(s)}return a===void 0&&(a=setTimeout(d,t)),l}return M.cancel=H,M.flush=D,M}function Os(e,t){var n=-1,o=sn(e)?Array(e.length):[];return ks(e,function(r,i,l){o[++n]=t(r,i,l)}),o}function Rs(e,t){var n=Ae(e)?Gr:Os;return n(e,ws(t))}var Ms="Expected a function";function Es(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(Ms);return it(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),As(e,t,{leading:o,maxWait:t,trailing:r})}function Bs(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Is(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Ns=$("affix",[k("affixed",{position:"fixed"},[k("absolute-positioned",{position:"absolute"})])]),gn={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},Ds=ko(gn),Ls=j({name:"Affix",props:gn,setup(e){const{mergedClsPrefixRef:t}=ne(e);$o("-affix",Ns,t);let n=null;const o=L(!1),r=L(!1),i=L(null),l=L(null),a=A(()=>r.value||o.value),s=A(()=>{var c,d;return(d=(c=e.triggerTop)!==null&&c!==void 0?c:e.offsetTop)!==null&&d!==void 0?d:e.top}),u=A(()=>{var c,d;return(d=(c=e.top)!==null&&c!==void 0?c:e.triggerTop)!==null&&d!==void 0?d:e.offsetTop}),b=A(()=>{var c,d;return(d=(c=e.bottom)!==null&&c!==void 0?c:e.triggerBottom)!==null&&d!==void 0?d:e.offsetBottom}),y=A(()=>{var c,d;return(d=(c=e.triggerBottom)!==null&&c!==void 0?c:e.offsetBottom)!==null&&d!==void 0?d:e.bottom}),h=L(null),C=()=>{const{target:c,listenTo:d}=e;c?n=c():d?n=Lo(d):n=document,n&&(n.addEventListener("scroll",x),x())};function x(){Do(v)}function v(){const{value:c}=h;if(!n||!c)return;const d=Bs(n);if(a.value){d<l.value&&(o.value=!1,l.value=null),d>i.value&&(r.value=!1,i.value=null);return}const P=Is(n),H=c.getBoundingClientRect(),D=H.top-P.top,M=P.bottom-H.bottom,m=s.value,p=y.value;m!==void 0&&D<=m?(o.value=!0,l.value=d-(m-D)):(o.value=!1,l.value=null),p!==void 0&&M<=p?(r.value=!0,i.value=d+p-M):(r.value=!1,i.value=null)}return Oe(()=>{C()}),we(()=>{n&&n.removeEventListener("scroll",x)}),{selfRef:h,affixed:a,mergedClsPrefix:t,mergedstyle:A(()=>{const c={};return o.value&&s.value!==void 0&&u.value!==void 0&&(c.top=`${u.value}px`),r.value&&y.value!==void 0&&b.value!==void 0&&(c.bottom=`${b.value}px`),c})}},render(){const{mergedClsPrefix:e}=this;return g("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),js=j({name:"ChevronRight",render(){return g("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Yt={top:"bottom",bottom:"top",left:"right",right:"left"},ee="var(--n-arrow-height) * 1.414",Vs=O([$("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[O(">",[$("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),nt("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[nt("scrollable",[nt("show-header-or-footer","padding: var(--n-padding);")])]),w("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),w("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),k("scrollable, show-header-or-footer",[w("content",`
 padding: var(--n-padding);
 `)])]),$("popover-shared",`
 transform-origin: inherit;
 `,[$("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[$("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${ee});
 height: calc(${ee});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),O("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),O("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),O("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),O("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ve("top-start",`
 top: calc(${ee} / -2);
 left: calc(${ze("top-start")} - var(--v-offset-left));
 `),ve("top",`
 top: calc(${ee} / -2);
 transform: translateX(calc(${ee} / -2)) rotate(45deg);
 left: 50%;
 `),ve("top-end",`
 top: calc(${ee} / -2);
 right: calc(${ze("top-end")} + var(--v-offset-left));
 `),ve("bottom-start",`
 bottom: calc(${ee} / -2);
 left: calc(${ze("bottom-start")} - var(--v-offset-left));
 `),ve("bottom",`
 bottom: calc(${ee} / -2);
 transform: translateX(calc(${ee} / -2)) rotate(45deg);
 left: 50%;
 `),ve("bottom-end",`
 bottom: calc(${ee} / -2);
 right: calc(${ze("bottom-end")} + var(--v-offset-left));
 `),ve("left-start",`
 left: calc(${ee} / -2);
 top: calc(${ze("left-start")} - var(--v-offset-top));
 `),ve("left",`
 left: calc(${ee} / -2);
 transform: translateY(calc(${ee} / -2)) rotate(45deg);
 top: 50%;
 `),ve("left-end",`
 left: calc(${ee} / -2);
 bottom: calc(${ze("left-end")} + var(--v-offset-top));
 `),ve("right-start",`
 right: calc(${ee} / -2);
 top: calc(${ze("right-start")} - var(--v-offset-top));
 `),ve("right",`
 right: calc(${ee} / -2);
 transform: translateY(calc(${ee} / -2)) rotate(45deg);
 top: 50%;
 `),ve("right-end",`
 right: calc(${ee} / -2);
 bottom: calc(${ze("right-end")} + var(--v-offset-top));
 `),...Rs({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),o=n?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",a=`calc((${`var(--v-target-${o}, 0px)`} - ${ee}) / 2)`,s=ze(r);return O(`[v-placement="${r}"] >`,[$("popover-shared",[k("center-arrow",[$("popover-arrow",`${t}: calc(max(${a}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function ze(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ve(e,t){const n=e.split("-")[0],o=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return O(`[v-placement="${e}"] >`,[$("popover-shared",`
 margin-${Yt[n]}: var(--n-space);
 `,[k("show-arrow",`
 margin-${Yt[n]}: var(--n-space-arrow);
 `),k("overlap",`
 margin: 0;
 `),Zr("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Yt[n]}: auto;
 ${o}
 `,[$("popover-arrow",t)])])])}const sr=Object.assign(Object.assign({},G.props),{to:Xe.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),Fs=({arrowStyle:e,clsPrefix:t})=>g("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},g("div",{class:`${t}-popover-arrow`,style:e})),Hs=j({name:"PopoverBody",inheritAttrs:!1,props:sr,setup(e,{slots:t,attrs:n}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i}=ne(e),l=G("Popover","-popover",Vs,qr,e,r),a=L(null),s=te("NPopover"),u=L(null),b=L(e.show),y=L(!1);cn(()=>{const{show:p}=e;p&&!Ti()&&!e.internalDeactivateImmediately&&(y.value=!0)});const h=A(()=>{const{trigger:p,onClickoutside:E}=e,V=[],{positionManuallyRef:{value:N}}=s;return N||(p==="click"&&!E&&V.push([Mn,D,void 0,{capture:!0}]),p==="hover"&&V.push([Vi,H])),E&&V.push([Mn,D,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&y.value)&&V.push([zo,e.show]),V}),C=A(()=>{const p=e.width==="trigger"?void 0:ue(e.width),E=[];p&&E.push({width:p});const{maxWidth:V,minWidth:N}=e;return V&&E.push({maxWidth:ue(V)}),N&&E.push({maxWidth:ue(N)}),i||E.push(x.value),E}),x=A(()=>{const{common:{cubicBezierEaseInOut:p,cubicBezierEaseIn:E,cubicBezierEaseOut:V},self:{space:N,spaceArrow:U,padding:X,fontSize:J,textColor:B,dividerColor:Y,color:Q,boxShadow:Ce,borderRadius:be,arrowHeight:le,arrowOffset:Ie,arrowOffsetVertical:Ne}}=l.value;return{"--n-box-shadow":Ce,"--n-bezier":p,"--n-bezier-ease-in":E,"--n-bezier-ease-out":V,"--n-font-size":J,"--n-text-color":B,"--n-color":Q,"--n-divider-color":Y,"--n-border-radius":be,"--n-arrow-height":le,"--n-arrow-offset":Ie,"--n-arrow-offset-vertical":Ne,"--n-padding":X,"--n-space":N,"--n-space-arrow":U}}),v=i?_e("popover",void 0,x,e):void 0;s.setBodyInstance({syncPosition:c}),we(()=>{s.setBodyInstance(null)}),ce(ie(e,"show"),p=>{e.animated||(p?b.value=!0:b.value=!1)});function c(){var p;(p=a.value)===null||p===void 0||p.syncPosition()}function d(p){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(p)}function P(p){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(p)}function H(p){e.trigger==="hover"&&!M().contains(tn(p))&&s.handleMouseMoveOutside(p)}function D(p){(e.trigger==="click"&&!M().contains(tn(p))||e.onClickoutside)&&s.handleClickOutside(p)}function M(){return s.getTriggerElement()}ge(xo,u),ge(bo,null),ge(go,null);function m(){if(v==null||v.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&y.value))return null;let E;const V=s.internalRenderBodyRef.value,{value:N}=r;if(V)E=V([`${N}-popover-shared`,v==null?void 0:v.themeClass.value,e.overlap&&`${N}-popover-shared--overlap`,e.showArrow&&`${N}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${N}-popover-shared--center-arrow`],u,C.value,d,P);else{const{value:U}=s.extraClassRef,{internalTrapFocus:X}=e,J=!En(t.header)||!En(t.footer),B=()=>{var Y;const Q=J?g(Po,null,ot(t.header,le=>le?g("div",{class:`${N}-popover__header`,style:e.headerStyle},le):null),ot(t.default,le=>le?g("div",{class:`${N}-popover__content`,style:e.contentStyle},t):null),ot(t.footer,le=>le?g("div",{class:`${N}-popover__footer`,style:e.footerStyle},le):null)):e.scrollable?(Y=t.default)===null||Y===void 0?void 0:Y.call(t):g("div",{class:`${N}-popover__content`,style:e.contentStyle},t),Ce=e.scrollable?g(Qr,{contentClass:J?void 0:`${N}-popover__content`,contentStyle:J?void 0:e.contentStyle},{default:()=>Q}):Q,be=e.showArrow?Fs({arrowStyle:e.arrowStyle,clsPrefix:N}):null;return[Ce,be]};E=g("div",To({class:[`${N}-popover`,`${N}-popover-shared`,v==null?void 0:v.themeClass.value,U.map(Y=>`${N}-${Y}`),{[`${N}-popover--scrollable`]:e.scrollable,[`${N}-popover--show-header-or-footer`]:J,[`${N}-popover--raw`]:e.raw,[`${N}-popover-shared--overlap`]:e.overlap,[`${N}-popover-shared--show-arrow`]:e.showArrow,[`${N}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:C.value,onKeydown:s.handleKeydown,onMouseenter:d,onMouseleave:P},n),X?g(Jr,{active:e.show,autoFocus:!0},{default:B}):B())}return at(E,h.value)}return{displayed:y,namespace:o,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:a,adjustedTo:Xe(e),followerEnabled:b,renderContentNode:m}},render(){return g(Zi,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Xe.tdkey},{default:()=>this.animated?g(So,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Ws=Object.keys(sr),Us={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Ks(e,t,n){Us[t].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=n[o];r?e.props[o]=(...l)=>{r(...l),i(...l)}:e.props[o]=i})}const Ys=oe("").type,dr={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Xe.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Xs=Object.assign(Object.assign(Object.assign({},G.props),dr),{internalOnAfterLeave:Function,internalRenderBody:Function}),Gs=j({name:"Popover",inheritAttrs:!1,props:Xs,__popover__:!0,setup(e){const t=wo(),n=L(null),o=A(()=>e.show),r=L(e.defaultShow),i=Ot(o,r),l=xe(()=>e.disabled?!1:i.value),a=()=>{if(e.disabled)return!0;const{getDisabled:B}=e;return!!(B!=null&&B())},s=()=>a()?!1:i.value,u=Ri(e,["arrow","showArrow"]),b=A(()=>e.overlap?!1:u.value);let y=null;const h=L(null),C=L(null),x=xe(()=>e.x!==void 0&&e.y!==void 0);function v(B){const{"onUpdate:show":Y,onUpdateShow:Q,onShow:Ce,onHide:be}=e;r.value=B,Y&&ye(Y,B),Q&&ye(Q,B),B&&Ce&&ye(Ce,!0),B&&be&&ye(be,!1)}function c(){y&&y.syncPosition()}function d(){const{value:B}=h;B&&(window.clearTimeout(B),h.value=null)}function P(){const{value:B}=C;B&&(window.clearTimeout(B),C.value=null)}function H(){const B=a();if(e.trigger==="focus"&&!B){if(s())return;v(!0)}}function D(){const B=a();if(e.trigger==="focus"&&!B){if(!s())return;v(!1)}}function M(){const B=a();if(e.trigger==="hover"&&!B){if(P(),h.value!==null||s())return;const Y=()=>{v(!0),h.value=null},{delay:Q}=e;Q===0?Y():h.value=window.setTimeout(Y,Q)}}function m(){const B=a();if(e.trigger==="hover"&&!B){if(d(),C.value!==null||!s())return;const Y=()=>{v(!1),C.value=null},{duration:Q}=e;Q===0?Y():C.value=window.setTimeout(Y,Q)}}function p(){m()}function E(B){var Y;s()&&(e.trigger==="click"&&(d(),P(),v(!1)),(Y=e.onClickoutside)===null||Y===void 0||Y.call(e,B))}function V(){if(e.trigger==="click"&&!a()){d(),P();const B=!s();v(B)}}function N(B){e.internalTrapFocus&&B.key==="Escape"&&(d(),P(),v(!1))}function U(B){r.value=B}function X(){var B;return(B=n.value)===null||B===void 0?void 0:B.targetRef}function J(B){y=B}return ge("NPopover",{getTriggerElement:X,handleKeydown:N,handleMouseEnter:M,handleMouseLeave:m,handleClickOutside:E,handleMouseMoveOutside:p,setBodyInstance:J,positionManuallyRef:x,isMountedRef:t,zIndexRef:ie(e,"zIndex"),extraClassRef:ie(e,"internalExtraClass"),internalRenderBodyRef:ie(e,"internalRenderBody")}),cn(()=>{i.value&&a()&&v(!1)}),{binderInstRef:n,positionManually:x,mergedShowConsideringDisabledProp:l,uncontrolledShow:r,mergedShowArrow:b,getMergedShow:s,setShow:U,handleClick:V,handleMouseEnter:M,handleMouseLeave:m,handleFocus:H,handleBlur:D,syncPosition:c}},render(){var e;const{positionManually:t,$slots:n}=this;let o,r=!1;if(!t&&(n.activator?o=Bn(n,"activator"):o=Bn(n,"trigger"),o)){o=un(o),o=o.type===Ys?g("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:l}=this,a=[i,...l],s={onBlur:u=>{a.forEach(b=>{b.onBlur(u)})},onFocus:u=>{a.forEach(b=>{b.onFocus(u)})},onClick:u=>{a.forEach(b=>{b.onClick(u)})},onMouseenter:u=>{a.forEach(b=>{b.onMouseenter(u)})},onMouseleave:u=>{a.forEach(b=>{b.onMouseleave(u)})}};Ks(o,l?"nested":t?"manual":this.trigger,s)}}return g(Di,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?at(g("div",{style:{position:"fixed",inset:0}}),[[_o,{enabled:i,zIndex:this.zIndex}]]):null,t?null:g(Li,null,{default:()=>o}),g(Hs,lt(this.$props,Ws,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var l,a;return(a=(l=this.$slots).default)===null||a===void 0?void 0:a.call(l)},header:()=>{var l,a;return(a=(l=this.$slots).header)===null||a===void 0?void 0:a.call(l)},footer:()=>{var l,a;return(a=(l=this.$slots).footer)===null||a===void 0?void 0:a.call(l)}})]}})}}),Zs=$("anchor",`
 position: relative;
`,[nt("block",`
 padding-left: var(--n-rail-width);
 `,[$("anchor-link",[O("+, >",[$("anchor-link",`
 margin-top: .5em;
 `)])]),$("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),nt("show-rail",[O(">",[$("anchor-link","padding-left: 0;")])])]),k("block",[$("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[k("active",`
 background-color: var(--n-link-color);
 `)])]),$("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[w("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[k("active",{backgroundColor:"var(--n-rail-color-active)"})])]),$("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[k("active",[O(">",[w("title",`
 color: var(--n-link-text-color-active);
 `)])]),w("title",`
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
 `,[O("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),O("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),yt=Te("n-anchor"),qs={title:String,href:String},Js=j({name:"AnchorLink",props:qs,setup(e,{slots:t}){const n=L(null),o=te(yt),r=ie(e,"href"),i=xe(()=>r.value&&r.value===o.activeHref.value);Pi(yt,"collectedLinkHrefs",r),Ai(yt,"titleEls",()=>n.value),ce(i,a=>{a&&n.value&&o.updateBarPosition(n.value)});function l(){e.href!==void 0&&o.setActiveHref(e.href)}return()=>{var a;const{value:s}=o.mergedClsPrefix;return g("div",{class:[`${s}-anchor-link`,i.value&&`${s}-anchor-link--active`]},g("a",{ref:n,class:[`${s}-anchor-link__title`],href:e.href,title:Si(e.title),onClick:l},e.title),(a=t.default)===null||a===void 0?void 0:a.call(t))}}});function Qs(e,t){const{top:n,height:o}=e.getBoundingClientRect(),r=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:n-r,height:o}}const bn={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},ed=ko(bn),td=j({name:"BaseAnchor",props:Object.assign(Object.assign({},bn),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],n=[],o=L(null),r=L(null),i=L(null),l=L(null),a=A(()=>e.type==="block"),s=A(()=>!a.value&&e.showRail);function u(){const{value:x}=i,{value:v}=r;x&&(x.style.transition="none"),v&&(v.style.transition="none"),n&&n.forEach(c=>{c.style.transition="none"}),_t(()=>{const{value:c}=i,{value:d}=r;c&&(c.offsetWidth,c.style.transition=""),d&&(d.offsetWidth,d.style.transition=""),n&&n.forEach(P=>{P.offsetWidth,P.style.transition=""})})}function b(x,v=!0){const{value:c}=i,{value:d}=r,{value:P}=l;if(!P||!c)return;v||(c.style.transition="none",d&&(d.style.transition="none"));const{offsetHeight:H,offsetWidth:D}=x,{top:M,left:m}=x.getBoundingClientRect(),{top:p,left:E}=P.getBoundingClientRect(),V=M-p,N=m-E;c.style.top=`${V}px`,c.style.height=`${H}px`,d&&(d.style.top=`${V}px`,d.style.height=`${H}px`,d.style.maxWidth=`${D+N}px`),c.offsetHeight,d&&d.offsetHeight,v||(c.style.transition="",d&&(d.style.transition=""))}function y(x,v=!0){const c=/^#([^#]+)$/.exec(x);if(!c)return;const d=document.getElementById(c[1]);d&&(o.value=x,d.scrollIntoView(),v||u(),h())}const h=Es(()=>C(!0),128);function C(x=!0){var v;const c=[],d=Lo((v=e.offsetTarget)!==null&&v!==void 0?v:document);t.forEach(m=>{const p=/#([^#]+)$/.exec(m);if(!p)return;const E=document.getElementById(p[1]);if(E&&d){const{top:V,height:N}=Qs(E,d);c.push({top:V,height:N,href:m})}}),c.sort((m,p)=>m.top>p.top?1:(m.top===p.top&&m.height<p.height,-1));const P=o.value,{bound:H,ignoreGap:D}=e,M=c.reduce((m,p)=>p.top+p.height<0?D?p:m:p.top<=H?m===null?p:p.top===m.top?p.href===P?p:m:p.top>m.top?p:m:m,null);x||u(),M?o.value=M.href:o.value=null}return ge(yt,{activeHref:o,mergedClsPrefix:ie(e,"mergedClsPrefix"),updateBarPosition:b,setActiveHref:y,collectedLinkHrefs:t,titleEls:n}),Oe(()=>{document.addEventListener("scroll",h,!0),y(window.location.hash),C(!1)}),jo(()=>{y(window.location.hash),C(!1)}),we(()=>{document.removeEventListener("scroll",h,!0)}),ce(o,x=>{if(x===null){const{value:v}=r;v&&!a.value&&(v.style.maxWidth="0")}}),{selfRef:l,barRef:i,slotRef:r,setActiveHref:y,activeHref:o,isBlockType:a,mergedShowRail:s}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:n,isBlockType:o,$slots:r}=this,i=g("div",{class:[`${t}-anchor`,o&&`${t}-anchor--block`,n&&`${t}-anchor--show-rail`],ref:"selfRef"},n&&this.showBackground?g("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,n?g("div",{class:`${t}-anchor-rail`},g("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=r.default)===null||e===void 0?void 0:e.call(r));return this.internalScrollable?g(Tt,null,{default:()=>i}):i}}),nd=Object.assign(Object.assign(Object.assign(Object.assign({},G.props),{affix:Boolean}),gn),bn),od=j({name:"Anchor",props:nd,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ne(e),r=G("Anchor","-anchor",Zs,ei,e,n),i=L(null),l=A(()=>{const{self:{railColor:s,linkColor:u,railColorActive:b,linkTextColor:y,linkTextColorHover:h,linkTextColorPressed:C,linkTextColorActive:x,linkFontSize:v,railWidth:c,linkPadding:d,borderRadius:P},common:{cubicBezierEaseInOut:H}}=r.value;return{"--n-link-border-radius":P,"--n-link-color":u,"--n-link-font-size":v,"--n-link-text-color":y,"--n-link-text-color-hover":h,"--n-link-text-color-active":x,"--n-link-text-color-pressed":C,"--n-link-padding":d,"--n-bezier":H,"--n-rail-color":s,"--n-rail-color-active":b,"--n-rail-width":c}}),a=o?_e("anchor",void 0,l,e):void 0;return{scrollTo(s){var u;(u=i.value)===null||u===void 0||u.setActiveHref(s)},renderAnchor:()=>(a==null||a.onRender(),g(td,Object.assign({ref:i,style:o?void 0:l.value,class:a==null?void 0:a.themeClass.value},lt(e,ed),{mergedClsPrefix:n.value}),t))}},render(){return this.affix?g(Ls,Object.assign({},lt(this,Ds)),{default:this.renderAnchor}):this.renderAnchor()}});function rd(e){const{length:t}=e;return t>1&&(e.push(fo(e[0],0,"append")),e.unshift(fo(e[t-1],t-1,"prepend"))),e}function fo(e,t,n){return un(e,{key:`carousel-item-duplicate-${t}-${n}`})}function ho(e,t,n){return n?e===0?t-3:e===t-1?0:e-1:e}function Xt(e,t){return t?e+1:e}function id(e,t,n){return e<0?null:e===0?n?t-1:null:e-1}function ld(e,t,n){return e>t-1?null:e===t-1?n?0:null:e+1}function ad(e,t){return t&&e>3?e-2:e}function vo(e){return window.TouchEvent&&e instanceof window.TouchEvent}function po(e,t){let{offsetWidth:n,offsetHeight:o}=e;if(t){const r=getComputedStyle(e);n=n-parseFloat(r.getPropertyValue("padding-left"))-parseFloat(r.getPropertyValue("padding-right")),o=o-parseFloat(r.getPropertyValue("padding-top"))-parseFloat(r.getPropertyValue("padding-bottom"))}return{width:n,height:o}}function bt(e,t,n){return e<t?t:e>n?n:e}function sd(e){if(e===void 0)return 0;if(typeof e=="number")return e;const t=/^((\d+)?\.?\d+?)(ms|s)?$/,n=e.match(t);if(n){const[,o,,r="ms"]=n;return Number(o)*(r==="ms"?1:1e3)}return 0}const cr=Te("n-carousel-methods"),dd=e=>ge(cr,e),xn=(e="unknown",t="component")=>{const n=te(cr);return n||Pt(e,`\`${t}\` must be placed inside \`n-carousel\`.`),n},cd={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},ud=j({name:"CarouselDots",props:cd,setup(e){const{mergedClsPrefixRef:t}=ne(e),n=L([]),o=xn();function r(u,b){switch(u.key){case"Enter":case" ":u.preventDefault(),o.to(b);return}e.keyboard&&a(u)}function i(u){e.trigger==="hover"&&o.to(u)}function l(u){e.trigger==="click"&&o.to(u)}function a(u){var b;if(u.shiftKey||u.altKey||u.ctrlKey||u.metaKey)return;const y=(b=document.activeElement)===null||b===void 0?void 0:b.nodeName.toLowerCase();if(y==="input"||y==="textarea")return;const{code:h}=u,C=h==="PageUp"||h==="ArrowUp",x=h==="PageDown"||h==="ArrowDown",v=h==="PageUp"||h==="ArrowRight",c=h==="PageDown"||h==="ArrowLeft",d=o.isVertical(),P=d?C:v,H=d?x:c;!P&&!H||(u.preventDefault(),P&&!o.isNextDisabled()?(o.next(),s(o.currentIndexRef.value)):H&&!o.isPrevDisabled()&&(o.prev(),s(o.currentIndexRef.value)))}function s(u){var b;(b=n.value[u])===null||b===void 0||b.focus()}return ti(()=>n.value.length=0),{mergedClsPrefix:t,dotEls:n,handleKeydown:r,handleMouseenter:i,handleClick:l}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return g("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},ni(this.total,n=>{const o=n===this.currentIndex;return g("div",{"aria-selected":o,ref:r=>t.push(r),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,o&&`${e}-carousel__dot--active`],key:n,onClick:()=>this.handleClick(n),onMouseenter:()=>this.handleMouseenter(n),onKeydown:r=>this.handleKeydown(r,n)})}))}}),fd=g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),hd=g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),vd=j({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=ne(e),{isVertical:n,isPrevDisabled:o,isNextDisabled:r,prev:i,next:l}=xn();return{mergedClsPrefix:t,isVertical:n,isPrevDisabled:o,isNextDisabled:r,prev:i,next:l}},render(){const{mergedClsPrefix:e}=this;return g("div",{class:`${e}-carousel__arrow-group`},g("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},fd),g("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},hd))}}),wt="CarouselItem",pd=e=>{var t;return((t=e.type)===null||t===void 0?void 0:t.name)===wt},$e=j({name:wt,setup(e){const{mergedClsPrefixRef:t}=ne(e),n=xn(Jn(wt),`n-${Jn(wt)}`),o=L(),r=A(()=>{const{value:b}=o;return b?n.getSlideIndex(b):-1}),i=A(()=>n.isPrev(r.value)),l=A(()=>n.isNext(r.value)),a=A(()=>n.isActive(r.value)),s=A(()=>n.getSlideStyle(r.value));Oe(()=>n.addSlide(o.value)),we(()=>{n.removeSlide(o.value)});function u(b){const{value:y}=r;y!==void 0&&(n==null||n.onCarouselItemClick(y,b))}return{mergedClsPrefix:t,selfElRef:o,isPrev:i,isNext:l,isActive:a,index:r,style:s,handleClick:u}},render(){var e;const{$slots:t,mergedClsPrefix:n,isPrev:o,isNext:r,isActive:i,index:l,style:a}=this,s=[`${n}-carousel__slide`,{[`${n}-carousel__slide--current`]:i,[`${n}-carousel__slide--prev`]:o,[`${n}-carousel__slide--next`]:r}];return g("div",{ref:"selfElRef",class:s,role:"option",tabindex:"-1","data-index":l,"aria-hidden":!i,style:a,onClickCapture:this.handleClick},(e=t.default)===null||e===void 0?void 0:e.call(t,{isPrev:o,isNext:r,isActive:i,index:l}))}}),md=$("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[w("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[w("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[O("> img",`
 display: block;
 `)])]),w("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[k("dot",[w("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[O("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),k("active",`
 background-color: var(--n-dot-color-active);
 `)])]),k("line",[w("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[O("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),k("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),w("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[O("svg",`
 height: 1em;
 width: 1em;
 `),O("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),k("vertical",`
 touch-action: pan-x;
 `,[w("slides",`
 flex-direction: column;
 `),k("fade",[w("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),k("card",[w("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[k("current",`
 transform: translateY(-50%) translateZ(0);
 `),k("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),k("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),k("usercontrol",[w("slides",[O(">",[O("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),k("left",[w("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[k("line",[w("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[k("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),w("dot",`
 margin: 4px 0;
 `)]),w("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),k("vertical",[w("arrow",`
 transform: rotate(90deg);
 `)]),k("show-arrow",[k("bottom",[w("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),k("top",[w("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),k("left",[w("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),k("right",[w("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),k("left",[w("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[O("> *:first-child",`
 margin-bottom: 12px;
 `)])]),k("right",[w("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[k("line",[w("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[k("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),w("dot",`
 margin: 4px 0;
 `),w("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[O("> *:first-child",`
 margin-bottom: 12px;
 `)])]),k("top",[w("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[k("line",[w("dot",`
 margin: 0 4px;
 `)])]),w("dot",`
 margin: 0 4px;
 `),w("arrow-group",`
 top: 12px;
 right: 12px;
 `,[O("> *:first-child",`
 margin-right: 12px;
 `)])]),k("bottom",[w("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[k("line",[w("dot",`
 margin: 0 4px;
 `)])]),w("dot",`
 margin: 0 4px;
 `),w("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[O("> *:first-child",`
 margin-right: 12px;
 `)])]),k("fade",[w("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[k("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),k("card",[w("slides",`
 perspective: 1000px;
 `),w("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[k("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),k("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),k("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),gd=["transitionDuration","transitionTimingFunction"],bd=Object.assign(Object.assign({},G.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Gt=!1;const xd=j({name:"Carousel",props:bd,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=ne(e),o=L(null),r=L(null),i=L([]),l={value:[]},a=A(()=>e.direction==="vertical"),s=A(()=>a.value?"height":"width"),u=A(()=>a.value?"bottom":"right"),b=A(()=>e.effect==="slide"),y=A(()=>e.loop&&e.slidesPerView===1&&b.value),h=A(()=>e.effect==="custom"),C=A(()=>!b.value||e.centeredSlides?1:e.slidesPerView),x=A(()=>h.value?1:e.slidesPerView),v=A(()=>C.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),c=L({width:0,height:0}),d=A(()=>{const{value:f}=i;if(!f.length)return[];const{value:S}=v;if(S)return f.map(q=>po(q));const{value:R}=x,{value:W}=c,{value:K}=s;let F=W[K];if(R!=="auto"){const{spaceBetween:q}=e,he=F-(R-1)*q,vt=1/Math.max(1,R);F=he*vt}const Z=Object.assign(Object.assign({},W),{[K]:F});return f.map(()=>Z)}),P=A(()=>{const{value:f}=d;if(!f.length)return[];const{centeredSlides:S,spaceBetween:R}=e,{value:W}=s,{[W]:K}=c.value;let F=0;return f.map(({[W]:Z})=>{let q=F;return S&&(q+=(Z-K)/2),F+=Z+R,q})}),H=L(!1),D=A(()=>{const{transitionStyle:f}=e;return f?lt(f,gd):{}}),M=A(()=>h.value?0:sd(D.value.transitionDuration)),m=A(()=>{const{value:f}=i;if(!f.length)return[];const S=!(v.value||x.value===1),R=Z=>{if(S){const{value:q}=s;return{[q]:`${d.value[Z][q]}px`}}};if(h.value)return f.map((Z,q)=>R(q));const{effect:W,spaceBetween:K}=e,{value:F}=u;return f.reduce((Z,q,he)=>{const vt=Object.assign(Object.assign({},R(he)),{[`margin-${F}`]:`${K}px`});return Z.push(vt),H.value&&(W==="fade"||W==="card")&&Object.assign(vt,D.value),Z},[])}),p=A(()=>{const{value:f}=C,{length:S}=i.value;if(f!=="auto")return Math.max(S-f,0)+1;{const{value:R}=d,{length:W}=R;if(!W)return S;const{value:K}=P,{value:F}=s,Z=c.value[F];let q=R[R.length-1][F],he=W;for(;he>1&&q<Z;)he--,q+=K[he]-K[he-1];return bt(he+1,1,W)}}),E=A(()=>ad(p.value,y.value)),V=Xt(e.defaultIndex,y.value),N=L(ho(V,p.value,y.value)),U=Ot(ie(e,"currentIndex"),N),X=A(()=>Xt(U.value,y.value));function J(f){var S,R;f=bt(f,0,p.value-1);const W=ho(f,p.value,y.value),{value:K}=U;W!==U.value&&(N.value=W,(S=e["onUpdate:currentIndex"])===null||S===void 0||S.call(e,W,K),(R=e.onUpdateCurrentIndex)===null||R===void 0||R.call(e,W,K))}function B(f=X.value){return id(f,p.value,e.loop)}function Y(f=X.value){return ld(f,p.value,e.loop)}function Q(f){const S=je(f);return S!==null&&B()===S}function Ce(f){const S=je(f);return S!==null&&Y()===S}function be(f){return X.value===je(f)}function le(f){return U.value===f}function Ie(){return B()===null}function Ne(){return Y()===null}function Je(f){const S=bt(Xt(f,y.value),0,p.value);(f!==U.value||S!==X.value)&&J(S)}function Qe(){const f=B();f!==null&&J(f)}function De(){const f=Y();f!==null&&J(f)}function Bt(){(!ae||!y.value)&&Qe()}function It(){(!ae||!y.value)&&De()}let ae=!1,ke=0;const et=L({});function Le(f,S=0){et.value=Object.assign({},D.value,{transform:a.value?`translateY(${-f}px)`:`translateX(${-f}px)`,transitionDuration:`${S}ms`})}function Me(f=0){b.value?Nt(X.value,f):ke!==0&&(!ae&&f>0&&(ae=!0),Le(ke=0,f))}function Nt(f,S){const R=Cn(f);R!==ke&&S>0&&(ae=!0),ke=Cn(X.value),Le(R,S)}function Cn(f){let S;return f>=p.value-1?S=$n():S=P.value[f]||0,S}function $n(){if(C.value==="auto"){const{value:f}=s,{[f]:S}=c.value,{value:R}=P,W=R[R.length-1];let K;if(W===void 0)K=S;else{const{value:F}=d;K=W+F[F.length-1][f]}return K-S}else{const{value:f}=P;return f[p.value-1]||0}}const tt={currentIndexRef:U,to:Je,prev:Bt,next:It,isVertical:()=>a.value,isHorizontal:()=>!a.value,isPrev:Q,isNext:Ce,isActive:be,isPrevDisabled:Ie,isNextDisabled:Ne,getSlideIndex:je,getSlideStyle:xr,addSlide:gr,removeSlide:br,onCarouselItemClick:yr};dd(tt);function gr(f){f&&i.value.push(f)}function br(f){if(!f)return;const S=je(f);S!==-1&&i.value.splice(S,1)}function je(f){return typeof f=="number"?f:f?i.value.indexOf(f):-1}function xr(f){const S=je(f);if(S!==-1){const R=[m.value[S]],W=tt.isPrev(S),K=tt.isNext(S);return W&&R.push(e.prevSlideStyle||""),K&&R.push(e.nextSlideStyle||""),re(R)}}function yr(f,S){let R=!ae&&!ft&&!Vt;e.effect==="card"&&R&&!be(f)&&(Je(f),R=!1),R||(S.preventDefault(),S.stopPropagation())}let ct=null;function ut(){ct&&(clearInterval(ct),ct=null)}function Ve(){ut(),!e.autoplay||E.value<2||(ct=window.setInterval(De,e.interval))}let Dt=0,Lt=0,Se=0,jt=0,ft=!1,Vt=!1;function kn(f){var S;if(Gt||!(!((S=r.value)===null||S===void 0)&&S.contains(tn(f))))return;Gt=!0,ft=!0,Vt=!1,jt=Date.now(),ut(),f.type!=="touchstart"&&!f.target.isContentEditable&&f.preventDefault();const R=vo(f)?f.touches[0]:f;a.value?Lt=R.clientY:Dt=R.clientX,e.touchable&&(pe("touchmove",document,ht,{passive:!0}),pe("touchend",document,Fe),pe("touchcancel",document,Fe)),e.draggable&&(pe("mousemove",document,ht),pe("mouseup",document,Fe))}function ht(f){const{value:S}=a,{value:R}=s,W=vo(f)?f.touches[0]:f,K=S?W.clientY-Lt:W.clientX-Dt,F=c.value[R];Se=bt(K,-F,F),f.cancelable&&f.preventDefault(),b.value&&Le(ke-Se,0)}function Fe(){const{value:f}=X;let S=f;if(!ae&&Se!==0&&b.value){const R=ke-Se,W=[...P.value.slice(0,p.value-1),$n()];let K=null;for(let F=0;F<W.length;F++){const Z=Math.abs(W[F]-R);if(K!==null&&K<Z)break;K=Z,S=F}}if(S===f){const R=Date.now()-jt,{value:W}=s,K=c.value[W];Se>K/2||Se/R>.4?S=B(f):(Se<-K/2||Se/R<-.4)&&(S=Y(f))}S!==null&&S!==f?(Vt=!0,J(S),_t(()=>{(!y.value||N.value!==U.value)&&Me(M.value)})):Me(M.value),Sn(),Ve()}function Sn(){ft&&(Gt=!1),ft=!1,Dt=0,Lt=0,Se=0,jt=0,me("touchmove",document,ht),me("touchend",document,Fe),me("touchcancel",document,Fe),me("mousemove",document,ht),me("mouseup",document,Fe)}function wr(){if(b.value&&ae){const{value:f}=X;Nt(f,0)}else Ve();b.value&&(et.value.transitionDuration="0ms"),ae=!1}function _r(f){if(f.preventDefault(),ae)return;let{deltaX:S,deltaY:R}=f;f.shiftKey&&!S&&(S=R);const W=-1,K=1,F=(S||R)>0?K:W;let Z=0,q=0;a.value?q=F:Z=F;const he=10;(q*R>=he||Z*S>=he)&&(F===K&&!Ne()?De():F===W&&!Ie()&&Qe())}function Cr(){c.value=po(o.value,!0),Ve()}function $r(){var f,S;v.value&&((S=(f=d.effect).scheduler)===null||S===void 0||S.call(f),d.effect.run())}function kr(){e.autoplay&&ut()}function Sr(){e.autoplay&&Ve()}Oe(()=>{cn(Ve),requestAnimationFrame(()=>H.value=!0)}),we(()=>{Sn(),ut()}),oi(()=>{const{value:f}=i,{value:S}=l,R=new Map,W=F=>R.has(F)?R.get(F):-1;let K=!1;for(let F=0;F<f.length;F++){const Z=S.findIndex(q=>q.el===f[F]);Z!==F&&(K=!0),R.set(f[F],Z)}K&&f.sort((F,Z)=>W(F)-W(Z))}),ce(X,(f,S)=>{if(f!==S)if(Ve(),b.value){if(y.value&&E.value>2){const{value:R}=p;f===R-2&&S===1?f=0:f===1&&S===R-2&&(f=R-1)}Nt(f,M.value)}else Me()},{immediate:!0}),ce([y,C],()=>void _t(()=>J(X.value))),ce(P,()=>b.value&&Me(),{deep:!0}),ce(b,f=>{f?Me():(ae=!1,Le(ke=0))});const zr=A(()=>({onTouchstartPassive:e.touchable?kn:void 0,onMousedown:e.draggable?kn:void 0,onWheel:e.mousewheel?_r:void 0})),Tr=A(()=>Object.assign(Object.assign({},lt(tt,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:E.value,currentIndex:U.value})),Pr=A(()=>({total:E.value,currentIndex:U.value,to:tt.to})),Ar={getCurrentIndex:()=>U.value,to:Je,prev:Qe,next:De},Or=G("Carousel","-carousel",md,ri,e,t),zn=A(()=>{const{common:{cubicBezierEaseInOut:f},self:{dotSize:S,dotColor:R,dotColorActive:W,dotColorFocus:K,dotLineWidth:F,dotLineWidthActive:Z,arrowColor:q}}=Or.value;return{"--n-bezier":f,"--n-dot-color":R,"--n-dot-color-focus":K,"--n-dot-color-active":W,"--n-dot-size":S,"--n-dot-line-width":F,"--n-dot-line-width-active":Z,"--n-arrow-color":q}}),He=n?_e("carousel",void 0,zn,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:o,slidesElRef:r,slideVNodes:l,duplicatedable:y,userWantsControl:h,autoSlideSize:v,displayIndex:U,realIndex:X,slideStyles:m,translateStyle:et,slidesControlListeners:zr,handleTransitionEnd:wr,handleResize:Cr,handleSlideResize:$r,handleMouseenter:kr,handleMouseleave:Sr,isActive:le,arrowSlotProps:Tr,dotSlotProps:Pr},Ar),{cssVars:n?void 0:zn,themeClass:He==null?void 0:He.themeClass,onRender:He==null?void 0:He.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:n,userWantsControl:o,slideStyles:r,dotType:i,dotPlacement:l,slidesControlListeners:a,transitionProps:s={},arrowSlotProps:u,dotSlotProps:b,$slots:{default:y,dots:h,arrow:C}}=this,x=y&&Ao(y())||[];let v=yd(x);return v.length||(v=x.map(c=>g($e,null,{default:()=>un(c)}))),this.duplicatedable&&(v=rd(v)),this.slideVNodes.value=v,this.autoSlideSize&&(v=v.map(c=>g(In,{onResize:this.handleSlideResize},{default:()=>c}))),(e=this.onRender)===null||e===void 0||e.call(this),g("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,this.direction==="vertical"&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${l}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,o&&`${t}-carousel--usercontrol`],style:this.cssVars},a,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),g(In,{onResize:this.handleResize},{default:()=>g("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},o?v.map((c,d)=>g("div",{style:r[d],key:d},at(g(So,Object.assign({},s),{default:()=>c}),[[zo,this.isActive(d)]]))):v)}),this.showDots&&b.total>1&&Nn(h,b,()=>[g(ud,{key:i+l,total:b.total,currentIndex:b.currentIndex,dotType:i,trigger:this.trigger,keyboard:this.keyboard})]),n&&Nn(C,u,()=>[g(vd,null)]))}});function yd(e){return e.reduce((t,n)=>(pd(n)&&t.push(n),t),[])}const wd=g("svg",{viewBox:"0 0 64 64",class:"check-icon"},g("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),_d=g("svg",{viewBox:"0 0 100 100",class:"line-icon"},g("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Cd=Te("n-checkbox-group"),$d=O([$("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[O("&:hover",[$("checkbox-box",[w("border",{border:"var(--n-border-checked)"})])]),O("&:focus:not(:active)",[$("checkbox-box",[w("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),k("inside-table",[$("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),k("checked",[$("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[$("checkbox-icon",[O(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),k("indeterminate",[$("checkbox-box",[$("checkbox-icon",[O(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),O(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),k("checked, indeterminate",[O("&:focus:not(:active)",[$("checkbox-box",[w("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),$("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[w("border",{border:"var(--n-border-checked)"})])]),k("disabled",{cursor:"not-allowed"},[k("checked",[$("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[w("border",{border:"var(--n-border-disabled-checked)"}),$("checkbox-icon",[O(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),$("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[w("border",{border:"var(--n-border-disabled)"}),$("checkbox-icon",[O(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),w("label",{color:"var(--n-text-color-disabled)"})]),$("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),$("checkbox-box",`
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
 `,[w("border",`
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
 `),$("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[O(".check-icon, .line-icon",`
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
 `),ii({left:"1px",top:"1px"})])]),w("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[O("&:empty",{display:"none"})])]),Oo($("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Ro($("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),kd=Object.assign(Object.assign({},G.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Zt=j({name:"Checkbox",props:kd,setup(e){const t=L(null),{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedRtlRef:r}=ne(e),i=li(e,{mergedSize(m){const{size:p}=e;if(p!==void 0)return p;if(s){const{value:E}=s.mergedSizeRef;if(E!==void 0)return E}if(m){const{mergedSize:E}=m;if(E!==void 0)return E.value}return"medium"},mergedDisabled(m){const{disabled:p}=e;if(p!==void 0)return p;if(s){if(s.disabledRef.value)return!0;const{maxRef:{value:E},checkedCountRef:V}=s;if(E!==void 0&&V.value>=E&&!h.value)return!0;const{minRef:{value:N}}=s;if(N!==void 0&&V.value<=N&&h.value)return!0}return m?m.disabled.value:!1}}),{mergedDisabledRef:l,mergedSizeRef:a}=i,s=te(Cd,null),u=L(e.defaultChecked),b=ie(e,"checked"),y=Ot(b,u),h=xe(()=>{if(s){const m=s.valueSetRef.value;return m&&e.value!==void 0?m.has(e.value):!1}else return y.value===e.checkedValue}),C=G("Checkbox","-checkbox",$d,di,e,n);function x(m){if(s&&e.value!==void 0)s.toggleCheckbox(!h.value,e.value);else{const{onChange:p,"onUpdate:checked":E,onUpdateChecked:V}=e,{nTriggerFormInput:N,nTriggerFormChange:U}=i,X=h.value?e.uncheckedValue:e.checkedValue;E&&ye(E,X,m),V&&ye(V,X,m),p&&ye(p,X,m),N(),U(),u.value=X}}function v(m){l.value||x(m)}function c(m){if(!l.value)switch(m.key){case" ":case"Enter":x(m)}}function d(m){switch(m.key){case" ":m.preventDefault()}}const P={focus:()=>{var m;(m=t.value)===null||m===void 0||m.focus()},blur:()=>{var m;(m=t.value)===null||m===void 0||m.blur()}},H=At("Checkbox",r,n),D=A(()=>{const{value:m}=a,{common:{cubicBezierEaseInOut:p},self:{borderRadius:E,color:V,colorChecked:N,colorDisabled:U,colorTableHeader:X,colorTableHeaderModal:J,colorTableHeaderPopover:B,checkMarkColor:Y,checkMarkColorDisabled:Q,border:Ce,borderFocus:be,borderDisabled:le,borderChecked:Ie,boxShadowFocus:Ne,textColor:Je,textColorDisabled:Qe,checkMarkColorDisabledChecked:De,colorDisabledChecked:Bt,borderDisabledChecked:It,labelPadding:ae,labelLineHeight:ke,labelFontWeight:et,[de("fontSize",m)]:Le,[de("size",m)]:Me}}=C.value;return{"--n-label-line-height":ke,"--n-label-font-weight":et,"--n-size":Me,"--n-bezier":p,"--n-border-radius":E,"--n-border":Ce,"--n-border-checked":Ie,"--n-border-focus":be,"--n-border-disabled":le,"--n-border-disabled-checked":It,"--n-box-shadow-focus":Ne,"--n-color":V,"--n-color-checked":N,"--n-color-table":X,"--n-color-table-modal":J,"--n-color-table-popover":B,"--n-color-disabled":U,"--n-color-disabled-checked":Bt,"--n-text-color":Je,"--n-text-color-disabled":Qe,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":Q,"--n-check-mark-color-disabled-checked":De,"--n-font-size":Le,"--n-label-padding":ae}}),M=o?_e("checkbox",A(()=>a.value[0]),D,e):void 0;return Object.assign(i,P,{rtlEnabled:H,selfRef:t,mergedClsPrefix:n,mergedDisabled:l,renderedChecked:h,mergedTheme:C,labelId:ai(),handleClick:v,handleKeyUp:c,handleKeyDown:d,cssVars:o?void 0:D,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender})},render(){var e;const{$slots:t,renderedChecked:n,mergedDisabled:o,indeterminate:r,privateInsideTable:i,cssVars:l,labelId:a,label:s,mergedClsPrefix:u,focusable:b,handleKeyUp:y,handleKeyDown:h,handleClick:C}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{ref:"selfRef",class:[`${u}-checkbox`,this.themeClass,this.rtlEnabled&&`${u}-checkbox--rtl`,n&&`${u}-checkbox--checked`,o&&`${u}-checkbox--disabled`,r&&`${u}-checkbox--indeterminate`,i&&`${u}-checkbox--inside-table`],tabindex:o||!b?void 0:0,role:"checkbox","aria-checked":r?"mixed":n,"aria-labelledby":a,style:l,onKeyup:y,onKeydown:h,onClick:C,onMousedown:()=>{pe("selectstart",window,x=>{x.preventDefault()},{once:!0})}},g("div",{class:`${u}-checkbox-box-wrapper`}," ",g("div",{class:`${u}-checkbox-box`},g(si,null,{default:()=>this.indeterminate?g("div",{key:"indeterminate",class:`${u}-checkbox-icon`},_d):g("div",{key:"check",class:`${u}-checkbox-icon`},wd)}),g("div",{class:`${u}-checkbox-box__border`}))),s!==null||t.default?g("span",{class:`${u}-checkbox__label`,id:a},t.default?t.default():s):null)}}),Sd=Object.assign(Object.assign({},dr),G.props),qt=j({name:"Tooltip",props:Sd,__popover__:!0,setup(e){const t=G("Tooltip","-tooltip",void 0,ci,e),n=L(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(r){n.value.setShow(r)}}),{popoverRef:n,mergedTheme:t,popoverThemeOverrides:A(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return g(Gs,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),zd=$("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[k("color-transition",{transition:"color .3s var(--n-bezier)"}),k("depth",{color:"var(--n-color)"},[O("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),O("svg",{height:"1em",width:"1em"})]),Td=Object.assign(Object.assign({},G.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),Pd=j({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Td,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=ne(e),o=G("Icon","-icon",zd,fi,e,t),r=A(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:a},self:s}=o.value;if(l!==void 0){const{color:u,[`opacity${l}Depth`]:b}=s;return{"--n-bezier":a,"--n-color":u,"--n-opacity":b}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),i=n?_e("icon",A(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:A(()=>{const{size:l,color:a}=e;return{fontSize:ue(l),color:a}}),cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:o,component:r,onRender:i,themeClass:l}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&ui("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),g("i",To(this.$attrs,{role:"img",class:[`${o}-icon`,l,{[`${o}-icon--depth`]:n,[`${o}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?g(r):this.$slots)}});let Jt;const Ad=()=>{if(!yo)return!0;if(Jt===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),Jt=t}return Jt},Od=Object.assign(Object.assign({},G.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),ur=j({name:"Space",props:Od,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=ne(e),o=G("Space","-space",void 0,hi,e,t),r=At("Space",n,t);return{useGap:Ad(),rtlEnabled:r,mergedClsPrefix:t,margin:A(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[de("gap",i)]:l}}=o.value,{row:a,col:s}=vi(l);return{horizontal:Dn(s),vertical:Dn(a)}})}},render(){const{vertical:e,align:t,inline:n,justify:o,itemStyle:r,margin:i,wrap:l,mergedClsPrefix:a,rtlEnabled:s,useGap:u,wrapItem:b,internalUseGap:y}=this,h=Ao(ki(this));if(!h.length)return null;const C=`${i.horizontal}px`,x=`${i.horizontal/2}px`,v=`${i.vertical}px`,c=`${i.vertical/2}px`,d=h.length-1,P=o.startsWith("space-");return g("div",{role:"none",class:[`${a}-space`,s&&`${a}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(o)?"flex-"+o:o,flexWrap:!l||e?"nowrap":"wrap",marginTop:u||e?"":`-${c}`,marginBottom:u||e?"":`-${c}`,alignItems:t,gap:u?`${i.vertical}px ${i.horizontal}px`:""}},!b&&(u||y)?h:h.map((H,D)=>g("div",{role:"none",style:[r,{maxWidth:"100%"},u?"":e?{marginBottom:D!==d?v:""}:s?{marginLeft:P?o==="space-between"&&D===d?"":x:D!==d?C:"",marginRight:P?o==="space-between"&&D===0?"":x:"",paddingTop:c,paddingBottom:c}:{marginRight:P?o==="space-between"&&D===d?"":x:D!==d?C:"",marginLeft:P?o==="space-between"&&D===0?"":x:"",paddingTop:c,paddingBottom:c}]},H)))}}),Rd=Array.apply(null,{length:24}).map((e,t)=>{const n=t+1,o=`calc(100% / 24 * ${n})`;return[k(`${n}-span`,{width:o}),k(`${n}-offset`,{marginLeft:o}),k(`${n}-push`,{left:o}),k(`${n}-pull`,{right:o})]}),Md=O([$("row",{width:"100%",display:"flex",flexWrap:"wrap"}),$("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[w("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),Rd])]),fr=Te("n-row"),Ed={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},hr=j({name:"Row",props:Ed,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=ne(e);$o("-legacy-grid",Md,t);const o=At("Row",n,t),r=xe(()=>{const{gutter:l}=e;return Array.isArray(l)&&l[1]||0}),i=xe(()=>{const{gutter:l}=e;return Array.isArray(l)?l[0]:Number(l)});return ge(fr,{mergedClsPrefixRef:t,gutterRef:ie(e,"gutter"),verticalGutterRef:r,horizontalGutterRef:i}),{mergedClsPrefix:t,rtlEnabled:o,styleMargin:xe(()=>`-${ue(r.value,{c:.5})} -${ue(i.value,{c:.5})}`),styleWidth:xe(()=>`calc(100% + ${ue(i.value)})`)}},render(){return g("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),Bd={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},kt=j({name:"Col",props:Bd,setup(e){const t=te(fr,null);return t||Pt("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:t.mergedClsPrefixRef,gutter:t.gutterRef,stylePadding:A(()=>`${ue(t.verticalGutterRef.value,{c:.5})} ${ue(t.horizontalGutterRef.value,{c:.5})}`),mergedPush:A(()=>Number(e.push)-Number(e.pull))}},render(){const{$slots:e,span:t,mergedPush:n,offset:o,stylePadding:r,gutter:i,mergedClsPrefix:l}=this;return g("div",{class:[`${l}-col`,{[`${l}-col--${t}-span`]:!0,[`${l}-col--${n}-push`]:n>0,[`${l}-col--${-n}-pull`]:n<0,[`${l}-col--${o}-offset`]:o}],style:{padding:r}},i?g("div",null,e):e)}}),Id=Te("n-layout-sider"),yn={type:String,default:"static"},Nd=$("layout",`
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
`,[$("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),k("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Dd={embedded:Boolean,position:yn,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},vr=Te("n-layout");function Ld(e){return j({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},G.props),Dd),setup(t){const n=L(null),o=L(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=ne(t),l=G("Layout","-layout",Nd,fn,t,r);function a(v,c){if(t.nativeScrollbar){const{value:d}=n;d&&(c===void 0?d.scrollTo(v):d.scrollTo(v,c))}else{const{value:d}=o;d&&d.scrollTo(v,c)}}ge(vr,t);let s=0,u=0;const b=v=>{var c;const d=v.target;s=d.scrollLeft,u=d.scrollTop,(c=t.onScroll)===null||c===void 0||c.call(t,v)};Mo(()=>{if(t.nativeScrollbar){const v=n.value;v&&(v.scrollTop=u,v.scrollLeft=s)}});const y={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:a},C=A(()=>{const{common:{cubicBezierEaseInOut:v},self:c}=l.value;return{"--n-bezier":v,"--n-color":t.embedded?c.colorEmbedded:c.color,"--n-text-color":c.textColor}}),x=i?_e("layout",A(()=>t.embedded?"e":""),C,t):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:n,scrollbarInstRef:o,hasSiderStyle:y,mergedTheme:l,handleNativeElScroll:b,cssVars:i?void 0:C,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender},h)},render(){var t;const{mergedClsPrefix:n,hasSider:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const r=o?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return g("div",{class:i,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:`${n}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):g(Tt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const Qt=Ld(!1),jd=$("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[k("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),k("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Vd={position:yn,inverted:Boolean,bordered:{type:Boolean,default:!1}},Fd=j({name:"LayoutHeader",props:Object.assign(Object.assign({},G.props),Vd),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=ne(e),o=G("Layout","-layout-header",jd,fn,e,t),r=A(()=>{const{common:{cubicBezierEaseInOut:l},self:a}=o.value,s={"--n-bezier":l};return e.inverted?(s["--n-color"]=a.headerColorInverted,s["--n-text-color"]=a.textColorInverted,s["--n-border-color"]=a.headerBorderColorInverted):(s["--n-color"]=a.headerColor,s["--n-text-color"]=a.textColor,s["--n-border-color"]=a.headerBorderColor),s}),i=n?_e("layout-header",A(()=>e.inverted?"a":"b"),r,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Hd=$("layout-sider",`
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
`,[k("bordered",[w("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),w("left-placement",[k("bordered",[w("border",`
 right: 0;
 `)])]),k("right-placement",`
 justify-content: flex-start;
 `,[k("bordered",[w("border",`
 left: 0;
 `)]),k("collapsed",[$("layout-toggle-button",[$("base-icon",`
 transform: rotate(180deg);
 `)]),$("layout-toggle-bar",[O("&:hover",[w("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),$("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[$("base-icon",`
 transform: rotate(0);
 `)]),$("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[O("&:hover",[w("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),k("collapsed",[$("layout-toggle-bar",[O("&:hover",[w("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),$("layout-toggle-button",[$("base-icon",`
 transform: rotate(0);
 `)])]),$("layout-toggle-button",`
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
 `,[$("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),$("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[w("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),w("bottom",`
 position: absolute;
 top: 34px;
 `),O("&:hover",[w("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),w("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),w("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),O("&:hover",[w("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),w("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),$("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),k("show-content",[$("layout-sider-scroll-container",{opacity:1})]),k("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Wd=j({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return g("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},g(pi,{clsPrefix:e},{default:()=>g(js,null)}))}}),Ud=j({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return g("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},g("div",{class:`${e}-layout-toggle-bar__top`}),g("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Kd={position:yn,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Yd=j({name:"LayoutSider",props:Object.assign(Object.assign({},G.props),Kd),setup(e){const t=te(vr),n=L(null),o=L(null),r=A(()=>ue(s.value?e.collapsedWidth:e.width)),i=A(()=>e.collapseMode!=="transform"?{}:{minWidth:ue(e.width)}),l=A(()=>t?t.siderPlacement:"left"),a=L(e.defaultCollapsed),s=Ot(ie(e,"collapsed"),a);function u(M,m){if(e.nativeScrollbar){const{value:p}=n;p&&(m===void 0?p.scrollTo(M):p.scrollTo(M,m))}else{const{value:p}=o;p&&p.scrollTo(M,m)}}function b(){const{"onUpdate:collapsed":M,onUpdateCollapsed:m,onExpand:p,onCollapse:E}=e,{value:V}=s;m&&ye(m,!V),M&&ye(M,!V),a.value=!V,V?p&&ye(p):E&&ye(E)}let y=0,h=0;const C=M=>{var m;const p=M.target;y=p.scrollLeft,h=p.scrollTop,(m=e.onScroll)===null||m===void 0||m.call(e,M)};Mo(()=>{if(e.nativeScrollbar){const M=n.value;M&&(M.scrollTop=h,M.scrollLeft=y)}}),ge(Id,{collapsedRef:s,collapseModeRef:ie(e,"collapseMode")});const{mergedClsPrefixRef:x,inlineThemeDisabled:v}=ne(e),c=G("Layout","-layout-sider",Hd,fn,e,x);function d(M){var m,p;M.propertyName==="max-width"&&(s.value?(m=e.onAfterLeave)===null||m===void 0||m.call(e):(p=e.onAfterEnter)===null||p===void 0||p.call(e))}const P={scrollTo:u},H=A(()=>{const{common:{cubicBezierEaseInOut:M},self:m}=c.value,{siderToggleButtonColor:p,siderToggleButtonBorder:E,siderToggleBarColor:V,siderToggleBarColorHover:N}=m,U={"--n-bezier":M,"--n-toggle-button-color":p,"--n-toggle-button-border":E,"--n-toggle-bar-color":V,"--n-toggle-bar-color-hover":N};return e.inverted?(U["--n-color"]=m.siderColorInverted,U["--n-text-color"]=m.textColorInverted,U["--n-border-color"]=m.siderBorderColorInverted,U["--n-toggle-button-icon-color"]=m.siderToggleButtonIconColorInverted,U.__invertScrollbar=m.__invertScrollbar):(U["--n-color"]=m.siderColor,U["--n-text-color"]=m.textColor,U["--n-border-color"]=m.siderBorderColor,U["--n-toggle-button-icon-color"]=m.siderToggleButtonIconColor),U}),D=v?_e("layout-sider",A(()=>e.inverted?"a":"b"),H,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:o,mergedClsPrefix:x,mergedTheme:c,styleMaxWidth:r,mergedCollapsed:s,scrollContainerStyle:i,siderPlacement:l,handleNativeElScroll:C,handleTransitionend:d,handleTriggerClick:b,inlineThemeDisabled:v,cssVars:H,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender},P)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ue(this.width)}]},this.nativeScrollbar?g("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):g(Tt,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),o?o==="bar"?g(Ud,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):g(Wd,{clsPrefix:t,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?g("div",{class:`${t}-layout-sider__border`}):null)}}),Xd=O([$("list",`
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
 `,[k("show-divider",[$("list-item",[O("&:not(:last-child)",[w("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),k("clickable",[$("list-item",`
 cursor: pointer;
 `)]),k("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),k("hoverable",[$("list-item",`
 border-radius: var(--n-border-radius);
 `,[O("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[w("divider",`
 background-color: transparent;
 `)])])]),k("bordered, hoverable",[$("list-item",`
 padding: 12px 20px;
 `),w("header, footer",`
 padding: 12px 20px;
 `)]),w("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[O("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),$("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("prefix",`
 margin-right: 20px;
 flex: 0;
 `),w("suffix",`
 margin-left: 20px;
 flex: 0;
 `),w("main",`
 flex: 1;
 `),w("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Oo($("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Ro($("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Gd=Object.assign(Object.assign({},G.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),pr=Te("n-list"),wn=j({name:"List",props:Gd,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:o}=ne(e),r=At("List",o,t),i=G("List","-list",Xd,mi,e,t);ge(pr,{showDividerRef:ie(e,"showDivider"),mergedClsPrefixRef:t});const l=A(()=>{const{common:{cubicBezierEaseInOut:s},self:{fontSize:u,textColor:b,color:y,colorModal:h,colorPopover:C,borderColor:x,borderColorModal:v,borderColorPopover:c,borderRadius:d,colorHover:P,colorHoverModal:H,colorHoverPopover:D}}=i.value;return{"--n-font-size":u,"--n-bezier":s,"--n-text-color":b,"--n-color":y,"--n-border-radius":d,"--n-border-color":x,"--n-border-color-modal":v,"--n-border-color-popover":c,"--n-color-modal":h,"--n-color-popover":C,"--n-color-hover":P,"--n-color-hover-modal":H,"--n-color-hover-popover":D}}),a=n?_e("list",void 0,l,e):void 0;return{mergedClsPrefix:t,rtlEnabled:r,cssVars:n?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),g("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},t.header?g("div",{class:`${n}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?g("div",{class:`${n}-list__footer`},t.footer()):null)}}),se=j({name:"ListItem",setup(){const e=te(pr,null);return e||Pt("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return g("li",{class:`${t}-list-item`},e.prefix?g("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?g("div",{class:`${t}-list-item__main`},e):null,e.suffix?g("div",{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&g("div",{class:`${t}-list-item__divider`}))}}),Zd=Object.assign(Object.assign({},G.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),qd=j({name:"Scrollbar",props:Zd,setup(){const e=L(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var o;(o=e.value)===null||o===void 0||o.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var o;(o=e.value)===null||o===void 0||o.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return g(Tt,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Jd=qd,mo=1.25,Qd=$("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${mo};
`,[k("horizontal",`
 flex-direction: row;
 `,[O(">",[$("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[k("dashed-line-type",[O(">",[$("timeline-item-timeline",[w("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),O(">",[$("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[O(">",[w("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),$("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[w("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),k("right-placement",[$("timeline-item",[$("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),$("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),k("left-placement",[$("timeline-item",[$("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),$("timeline-item-timeline",`
 left: 0;
 `)])]),$("timeline-item",`
 position: relative;
 `,[O("&:last-child",[$("timeline-item-timeline",[w("line",`
 display: none;
 `)]),$("timeline-item-content",[w("meta",`
 margin-bottom: 0;
 `)])]),$("timeline-item-content",[w("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),w("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),w("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),k("dashed-line-type",[$("timeline-item-timeline",[w("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),$("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${mo} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[w("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),w("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),w("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ec=Object.assign(Object.assign({},G.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),mr=Te("n-timeline"),tc=j({name:"Timeline",props:ec,setup(e,{slots:t}){const{mergedClsPrefixRef:n}=ne(e),o=G("Timeline","-timeline",Qd,gi,e,n);return ge(mr,{props:e,mergedThemeRef:o,mergedClsPrefixRef:n}),()=>{const{value:r}=n;return g("div",{class:[`${r}-timeline`,e.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${e.size}-size`,!e.horizontal&&`${r}-timeline--${e.itemPlacement}-placement`]},t)}}}),nc={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Ue=j({name:"TimelineItem",props:nc,setup(e){const t=te(mr);t||Pt("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Ei();const{inlineThemeDisabled:n}=ne(),o=A(()=>{const{props:{size:i,iconSize:l},mergedThemeRef:a}=t,{type:s}=e,{self:{titleTextColor:u,contentTextColor:b,metaTextColor:y,lineColor:h,titleFontWeight:C,contentFontSize:x,[de("iconSize",i)]:v,[de("titleMargin",i)]:c,[de("titleFontSize",i)]:d,[de("circleBorder",s)]:P,[de("iconColor",s)]:H},common:{cubicBezierEaseInOut:D}}=a.value;return{"--n-bezier":D,"--n-circle-border":P,"--n-icon-color":H,"--n-content-font-size":x,"--n-content-text-color":b,"--n-line-color":h,"--n-meta-text-color":y,"--n-title-font-size":d,"--n-title-font-weight":C,"--n-title-margin":c,"--n-title-text-color":u,"--n-icon-size":ue(l)||v}}),r=n?_e("timeline-item",A(()=>{const{props:{size:i,iconSize:l}}=t,{type:a}=e;return`${i[0]}${l||"a"}${a[0]}`}),o,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:n?void 0:o,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:n,$slots:o}=this;return n==null||n(),g("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},g("div",{class:`${e}-timeline-item-timeline`},g("div",{class:`${e}-timeline-item-timeline__line`}),ot(o.icon,r=>r?g("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},r):g("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),g("div",{class:`${e}-timeline-item-content`},ot(o.header,r=>r||this.title?g("div",{class:`${e}-timeline-item-content__title`},r||this.title):null),g("div",{class:`${e}-timeline-item-content__content`},Ln(o.default,()=>[this.content])),g("div",{class:`${e}-timeline-item-content__meta`},Ln(o.footer,()=>[this.time]))))}}),oc=$("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[O("&:first-child",{marginTop:0}),k("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[k("align-text",{paddingLeft:0},[O("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),O("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),O("&::before",{backgroundColor:"var(--n-bar-color)"})])]),rc=Object.assign(Object.assign({},G.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),Ze=e=>j({name:`H${e}`,props:rc,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ne(t),r=G("Typography","-h",oc,bi,t,n),i=A(()=>{const{type:a}=t,{common:{cubicBezierEaseInOut:s},self:{headerFontWeight:u,headerTextColor:b,[de("headerPrefixWidth",e)]:y,[de("headerFontSize",e)]:h,[de("headerMargin",e)]:C,[de("headerBarWidth",e)]:x,[de("headerBarColor",a)]:v}}=r.value;return{"--n-bezier":s,"--n-font-size":h,"--n-margin":C,"--n-bar-color":v,"--n-bar-width":x,"--n-font-weight":u,"--n-text-color":b,"--n-prefix-width":y}}),l=o?_e(`h${e}`,A(()=>t.type[0]),i,t):void 0;return{mergedClsPrefix:n,cssVars:o?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var t;const{prefix:n,alignText:o,mergedClsPrefix:r,cssVars:i,$slots:l}=this;return(t=this.onRender)===null||t===void 0||t.call(this),g(`h${e}`,{class:[`${r}-h`,`${r}-h${e}`,this.themeClass,{[`${r}-h--prefix-bar`]:n,[`${r}-h--align-text`]:o}],style:i},l)}});Ze("1");const _n=Ze("2");Ze("3");Ze("4");Ze("5");Ze("6");function Mt(){const e=te(xi,null);return A(()=>{if(e===null)return jn;const{mergedThemeRef:{value:t},mergedThemeOverridesRef:{value:n}}=e,o=(t==null?void 0:t.common)||jn;return n!=null&&n.common?Object.assign({},o,n.common):o})}const ic={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},lc=I("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z",fill:"currentColor"},null,-1),ac=[lc],sc=j({name:"AttachFileFilled",render:function(t,n){return fe(),Re("svg",ic,ac)}}),dc={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},cc=I("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"},null,-1),uc=[cc],fc=j({name:"GroupFilled",render:function(t,n){return fe(),Re("svg",dc,uc)}}),hc={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},vc=I("path",{d:"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z",fill:"currentColor"},null,-1),pc=I("circle",{cx:"18",cy:"11.5",r:"1",fill:"currentColor"},null,-1),mc=[vc,pc],gc=j({name:"PrintOutlined",render:function(t,n){return fe(),Re("svg",hc,mc)}}),bc={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},xc=I("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z",fill:"currentColor"},null,-1),yc=[xc],wc=j({name:"TimerSharp",render:function(t,n){return fe(),Re("svg",bc,yc)}}),Et=e=>(Eo("data-v-ffa68727"),e=e(),Bo(),e),_c={class:"my-5",style:{"max-width":"70%"}},Cc={class:"my-5",style:{"max-width":"70%","margin-left":"30%"}},$c=Et(()=>I("br",null,null,-1)),kc={class:"my-5",style:{"max-width":"70%"}},Sc={class:"stat-trig my-3"},zc=Et(()=>I("span",{class:"stat-desc"}," 25 – 40 min ",-1)),Tc={class:"stat-trig my-3"},Pc=Et(()=>I("span",{class:"stat-desc"},[oe(" 6 skupin"),I("br"),oe("4 – 6 osob/sk. ")],-1)),Ac={class:"stat-trig my-3"},Oc=Et(()=>I("span",{class:"stat-desc"}," Stopky, losovací sada, vytištěné pracovní listy ",-1)),Rc=j({__name:"ActivityProfile",setup(e){const n=Mt().value.primaryColor;return(o,r)=>(fe(),Re("section",null,[T(_(_n),{prefix:"bar"},{default:z(()=>[oe("Profil aktivity: Tisková konference")]),_:1}),T(_(hr),{gutter:12},{default:z(()=>[T(_(kt),{span:19},{default:z(()=>[I("div",_c,[T(_(Be),{title:"Popis"},{default:z(()=>[oe(" Doformulovat - studenti formou hry na novináře a experty na tiskovou konferenci – novinářské redakce „grilují“ tým expertů. Expertní tým za správné odpovědi získává body… ")]),_:1})]),I("div",Cc,[T(_(Be),{title:"Cíl"},{default:z(()=>[oe(" Procvičit dovednost formulovat správně otázky, abych se dozvěděl požadovanou informaci."),$c,oe(" Procvičit učivo / informace, které souvisí s probranou či v budoucnu probíranou látkou / učivem. ")]),_:1})]),I("div",kc,[T(_(Be),{title:"Přínos"},{default:z(()=>[oe(" Otázky a odpovědi, které zazní během tiskové konference, může kantor/ka využít jako vstupy do testů či jiných forem opakování / upevňování učiva ")]),_:1})])]),_:1}),T(_(kt),{span:4,offset:"1"},{default:z(()=>[T(_(wn),{"show-divider":!1},{default:z(()=>[T(_(se),null,{default:z(()=>[T(_(qt),{trigger:"hover"},{trigger:z(()=>[I("div",Sc,[I("div",null,[T(_(wc),{class:"stat-icon",style:re({color:_(n)})},null,8,["style"])]),zc])]),default:z(()=>[oe(" Celková délka se odvíjí od počtu vystřídaných skupin expertů. ")]),_:1})]),_:1}),T(_(se),null,{default:z(()=>[T(_(qt),{trigger:"hover"},{trigger:z(()=>[I("div",Tc,[I("div",null,[T(_(fc),{class:"stat-icon",style:re({color:_(n)})},null,8,["style"])]),Pc])]),default:z(()=>[oe(" Ideálně 4 studenti ve skupině, max 6 lidí ve skupině. ")]),_:1})]),_:1}),T(_(se),null,{default:z(()=>[T(_(qt),{trigger:"hover"},{trigger:z(()=>[I("div",Ac,[I("div",null,[T(_(gc),{class:"stat-icon",style:re({color:_(n)})},null,8,["style"])]),Oc])]),default:z(()=>[oe(" Losovací sada – rozdělení třídy do týmů. Ideálně avizovat rozdělení již během hodiny předešlé – šetří to čas v hodině, kdy realizujeme TK")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}});const Mc=Io(Rc,[["__scopeId","data-v-ffa68727"]]),Ec=j({__name:"ActivityMinutebook",setup(e){return(t,n)=>(fe(),dt(_(Be),{title:"Minutovník"},{default:z(()=>[T(_(ur),{vertical:""},{default:z(()=>[T(_(tc),null,{default:z(()=>[T(_(Ue),{type:"default",title:"Rozdělení do skupin",time:"0:00 – 0:03"}),T(_(Ue),{type:"default",title:"Zadání pro novinářské redakce a experty",time:"0:03 – 0:05"}),T(_(Ue),{type:"success",title:"Příprava otázek a odpovědí",content:"Redakce si připravuje otázky, na které se budou ptát expertů.",time:"0:05 – 0:10"}),T(_(Ue),{type:"success",title:"Tisková konference 1",content:"Průběh a moderace",time:"0:10 – 0:20"}),T(_(Ue),{type:"success",title:"Tisková konference 2",content:"Rotace na pozici týmů a expertů",time:"0:20 – 0:30"}),T(_(Ue),{type:"default",title:"Zpětná vazba a vyhodnocení",time:"0:30 – 0:35"})]),_:1})]),_:1})]),_:1}))}}),Bc=I("div",null," Sestavit seznam témat pro experty (1–5 témat). ",-1),Ic=I("div",null," Nasdílet témata studentům – ideálně v předchozí hodině, minimálně 1 den předem. ",-1),Nc=I("div",null," Sestavit „vodítka“ – tzn. 2-3 otázky, které studentům pomohou lépe pochopit, jaké typy otázek tvořit. ",-1),Dc=I("div",null," Vytisknout „vodítkové“ otázky na papír, případně předepsat na flipchart. ",-1),Lc=j({__name:"ActivityPrepPhase",setup(e){const t=Mt().value,n=t.textColor3;t.successColor;const o=t.warningColor;return t.errorColor,(r,i)=>(fe(),dt(_(Be),{title:"Přípravná fáze"},{default:z(()=>[T(_(wn),{"show-divider":!1,class:"list-prep"},{default:z(()=>[T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"1",4)]),default:z(()=>[Bc]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"2",4)]),default:z(()=>[Ic]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(o)})},"3",4)]),default:z(()=>[Nc,I("span",{class:"list-infocontent",style:re({color:_(o)})},"Doporučeno v případě, že cílová skupina je mladší třída.",4)]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"4",4)]),default:z(()=>[Dc]),_:1})]),_:1})]),_:1}))}}),jc=I("div",null," Rozdělte třídu na skupiny po 4 (novinářské redakce) a jednu skupinu expertů. ",-1),Vc=I("div",null," Zadejte téma, ke kterému novináři vytvoří otázky, experti si připraví odpovědi. ",-1),Fc=I("div",null," Před zahájením TK vysvětlete postup kladení otázek ",-1),Hc=I("div",null," Kantor zahájí TK a vyzve prvního novináře, aby položil otázku ",-1),Wc=I("div",null," Kantor zvolí konkrétního experta, spouští 30 sekundový limit ",-1),Uc=I("div",null," Expert zodpoví otázku ",-1),Kc=j({__name:"ActivityActivePhase",setup(e){L("");const t=Mt().value,n=t.textColor3,o=t.successColor;return t.warningColor,t.errorColor,(r,i)=>(fe(),dt(_(Be),{title:"Průběh aktivity – instrukce pro studenty"},{default:z(()=>[T(_(wn),{"show-divider":!1,class:"list-active"},{default:z(()=>[T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"1",4)]),default:z(()=>[jc]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"2",4)]),default:z(()=>[Vc]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"3",4)]),default:z(()=>[Fc,I("span",{class:"list-infocontent",style:re({color:_(o)})},"Jste v roli moderátora (rozhodce) – posuzujete relevantnost otázky",4)]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"4",4)]),default:z(()=>[Hc]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"5",4)]),default:z(()=>[Wc]),_:1}),T(_(se),null,{prefix:z(()=>[I("div",{class:"list-number",style:re({borderColor:_(n)})},"6",4)]),default:z(()=>[Uc,I("span",{class:"list-infocontent",style:re({color:_(o)})},"Kantor posoudí správnost a věcnost odpovědi. Zapisuje info, zda otázka zodpovězena či nezodpovězena",4)]),_:1})]),_:1})]),_:1}))}}),Yc=j({__name:"ActivityFlow",setup(e){return(t,n)=>(fe(),Re("section",null,[T(_(_n),{prefix:"bar"},{default:z(()=>[oe("Průběh krok za krokem")]),_:1}),T(_(hr),{gutter:12,style:{"margin-bottom":"2rem"}},{default:z(()=>[T(_(kt),{span:16},{default:z(()=>[T(Lc,{style:{"margin-bottom":"12px"}}),T(Kc)]),_:1}),T(_(kt),{span:8},{default:z(()=>[T(Ec)]),_:1})]),_:1})]))}}),Xc=I("div",null,"Časomíra – přesýpací hodiny, písnička jako časově ohraničený úsek, atd.",-1),Gc=j({__name:"ActivityMaterials",setup(e){const t=Mt().value;return(n,o)=>(fe(),dt(_(Be),{title:"Materiály a pomůcky"},{default:z(()=>[T(_(ur),{vertical:"",size:"large"},{default:z(()=>[T(_(Zt),{size:"large"},{default:z(()=>[oe(" Seznam témat, na které se budou tvořit otázky (vygeneruje kantor) ")]),_:1}),T(_(Zt),{size:"large"},{default:z(()=>[oe(" Pracovní list pro zápis otázek – týmy „redakce“ využijí levou část PL, týmy „experti“ pracují s pravou částí PL ")]),_:1}),T(_(Zt),{size:"large",label:"large"},{default:z(()=>[Xc,T(_(yi),{size:"tiny",quaternary:"",color:_(t).primaryColor,onClick:o[0]||(o[0]=wi(()=>{},["stop"]))},{icon:z(()=>[T(_(Pd),null,{default:z(()=>[T(_(sc))]),_:1})]),default:z(()=>[oe(" [PDF] Časomíry – různé formáty a možnosti pro měření času ")]),_:1},8,["color"])]),_:1})]),_:1})]),_:1}))}}),Zc=j({__name:"ActivityPrep",setup(e){return(t,n)=>(fe(),Re("section",null,[T(_(_n),{prefix:"bar"},{default:z(()=>[oe("Příprava")]),_:1}),T(Gc)]))}}),qe=e=>(Eo("data-v-facd29f2"),e=e(),Bo(),e),qc={class:"inner-content-padding"},Jc=qe(()=>I("h1",null,"Varianty",-1)),Qc=qe(()=>I("h1",null,"Ke stažení",-1)),eu=qe(()=>I("h1",null,"Návodné otázky",-1)),tu=qe(()=>I("h1",null,"Inspirace",-1)),nu=qe(()=>I("h1",null,"Galerie",-1)),ou=qe(()=>I("h1",null,"Deriváty",-1)),ru=j({__name:"ActivityView",setup(e){const t=["Profil","Průběh krok za krokem","Příprava","Varianty","Ke stažení","Návodné otázky","Inspirace","Galerie","Deriváty"],n=L(null);function o(r){var i;(i=n.value)==null||i.to(r)}return(r,i)=>(fe(),dt(_(Qt),{class:"vh-100 vw-100"},{default:z(()=>[T(_(Fd),{style:{height:"4rem",padding:"1.5rem"},bordered:""},{default:z(()=>[oe(" Test deploy funkce ")]),_:1}),T(_(Qt),{position:"absolute",style:{top:"4rem"},"has-sider":"","sider-placement":"right"},{default:z(()=>[T(_(Qt),{"native-scrollbar":!1,class:"outer-content-padding"},{default:z(()=>[I("div",qc,[T(_(xd),{"show-dots":!1,ref_key:"carouselRef",ref:n},{default:z(()=>[T(_($e),{class:"carousel-content-padding"},{default:z(()=>[T(Mc)]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[T(Yc)]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[T(Zc)]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[Jc]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[Qc]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[eu]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[tu]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[nu]),_:1}),T(_($e),{class:"carousel-content-padding"},{default:z(()=>[ou]),_:1})]),_:1},512)])]),_:1}),T(_(Yd),{"content-style":"padding: 1.5rem 1.5rem 1.5rem 0px; margin-left: 1rem;","native-scrollbar":!1},{default:z(()=>[T(_(Jd),{class:"h-100"},{default:z(()=>[T(_(od),{affix:"","show-rail":!1,type:"block","show-background":!0},{default:z(()=>[(fe(),Re(Po,null,_i(t,(l,a)=>{var s;return T(_(Js),{key:l,title:l,onClick:u=>o(a),class:Ci({["n-anchor-link--active"]:((s=n.value)==null?void 0:s.getCurrentIndex())===a})},null,8,["title","onClick","class"])}),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const au=Io(ru,[["__scopeId","data-v-facd29f2"]]);export{au as default};
