import{i as U,w as ne,o as Z,a as ie,b as it,c as qe,d as lt,e as ce,r as at,f,g as _,h as L,u as H,j as He,k as I,l as T,m as u,n as Me,p as ze,q as P,s as C,t as G,v as oe,x as Q,y as J,N as ue,z as Fe,A as O,B as V,C as ke,D as st,E as ge,F as ct,G as dt,H as ut,I as We,J as ft,L as mt,T as ht,K as pt,M as ve,O as Ve,P as vt,Q as gt,R as be,S as bt,U as F,V as xt,W as Te,X as xe,Y as yt,Z as Ct,_ as Re,$ as St,a0 as De,a1 as le,a2 as wt,a3 as _t,a4 as $t,a5 as Be,a6 as zt,a7 as ee,a8 as fe,a9 as z,aa as x,ab as y,ac as Ge,ad as X,ae as A,af as Ue}from"./index-0b93055f.js";let de=[];const Ye=new WeakMap;function kt(){de.forEach(e=>e(...Ye.get(e))),de=[]}function Tt(e,...t){Ye.set(e,t),!de.includes(e)&&de.push(e)===1&&requestAnimationFrame(kt)}function Rt(e){return e.nodeType===9?null:e.parentNode}function Xe(e){if(e===null)return null;const t=Rt(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:o,overflowX:r,overflowY:n}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(o+n+r))return t}return Xe(t)}function ye(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function Bt(e,t="default",o=[]){const n=e.$slots[t];return n===void 0?o:n()}function Pt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const Lt=/^(\d|\.)+$/,Pe=/(\d|\.)+/;function W(e,{c:t=1,offset:o=0,attachPx:r=!0}={}){if(typeof e=="number"){const n=(e+o)*t;return n===0?"0":`${n}px`}else if(typeof e=="string")if(Lt.test(e)){const n=(Number(e)+o)*t;return r?n===0?"0":`${n}px`:`${n}`}else{const n=Pe.exec(e);return n?e.replace(Pe,String((Number(n[0])+o)*t)):e}return e}function Et(e,t,o){const r=U(e,null);r!==null&&(t in r||(r[t]=[]),r[t].push(o.value),ne(o,(n,i)=>{const s=r[t],c=s.findIndex(m=>m===i);~c&&s.splice(c,1),s.push(n)}),Z(()=>{const n=r[t],i=n.findIndex(s=>s===o.value);~i&&n.splice(i,1)}))}function It(e,t,o){const r=U(e,null);r!==null&&(t in r||(r[t]=[]),ie(()=>{const n=o();n&&r[t].push(n)}),Z(()=>{const n=r[t],i=o(),s=n.findIndex(c=>c===i);~s&&n.splice(s,1)}))}let K,re;const Ot=()=>{var e,t;K=it?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,re=!1,K!==void 0?K.then(()=>{re=!0}):re=!0};Ot();function jt(e){if(re)return;let t=!1;ie(()=>{re||K==null||K.then(()=>{t||e()})}),Z(()=>{t=!0})}let Le=!1;function Nt(){if(qe&&window.CSS&&!Le&&(Le=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function Ee(e){return e.nodeName==="#document"}var At=/\s/;function qt(e){for(var t=e.length;t--&&At.test(e.charAt(t)););return t}var Ht=/^\s+/;function Mt(e){return e&&e.slice(0,qt(e)+1).replace(Ht,"")}var Ie=0/0,Ft=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Vt=/^0o[0-7]+$/i,Dt=parseInt;function Oe(e){if(typeof e=="number")return e;if(lt(e))return Ie;if(ce(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ce(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Mt(e);var o=Wt.test(e);return o||Vt.test(e)?Dt(e.slice(2),o?2:8):Ft.test(e)?Ie:+e}var Gt=function(){return at.Date.now()};const me=Gt;var Ut="Expected a function",Yt=Math.max,Xt=Math.min;function Kt(e,t,o){var r,n,i,s,c,m,p=0,E=!1,w=!1,$=!0;if(typeof e!="function")throw new TypeError(Ut);t=Oe(t)||0,ce(o)&&(E=!!o.leading,w="maxWait"in o,i=w?Yt(Oe(o.maxWait)||0,t):i,$="trailing"in o?!!o.trailing:$);function R(a){var h=r,j=n;return r=n=void 0,p=a,s=e.apply(j,h),s}function g(a){return p=a,c=setTimeout(d,t),E?R(a):s}function v(a){var h=a-m,j=a-p,N=t-h;return w?Xt(N,i-j):N}function l(a){var h=a-m,j=a-p;return m===void 0||h>=t||h<0||w&&j>=i}function d(){var a=me();if(l(a))return k(a);c=setTimeout(d,v(a))}function k(a){return c=void 0,$&&r?R(a):(r=n=void 0,s)}function B(){c!==void 0&&clearTimeout(c),p=0,r=m=n=c=void 0}function S(){return c===void 0?s:k(me())}function b(){var a=me(),h=l(a);if(r=arguments,n=this,m=a,h){if(c===void 0)return g(m);if(w)return clearTimeout(c),c=setTimeout(d,t),R(m)}return c===void 0&&(c=setTimeout(d,t)),s}return b.cancel=B,b.flush=S,b}var Zt="Expected a function";function Qt(e,t,o){var r=!0,n=!0;if(typeof e!="function")throw new TypeError(Zt);return ce(o)&&(r="leading"in o?!!o.leading:r,n="trailing"in o?!!o.trailing:n),Kt(e,t,{leading:r,maxWait:t,trailing:n})}function Jt(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function eo(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const to=f("affix",[_("affixed",{position:"fixed"},[_("absolute-positioned",{position:"absolute"})])]),Ce={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},oo=Me(Ce),ro=L({name:"Affix",props:Ce,setup(e){const{mergedClsPrefixRef:t}=H(e);He("-affix",to,t);let o=null;const r=I(!1),n=I(!1),i=I(null),s=I(null),c=T(()=>n.value||r.value),m=T(()=>{var l,d;return(d=(l=e.triggerTop)!==null&&l!==void 0?l:e.offsetTop)!==null&&d!==void 0?d:e.top}),p=T(()=>{var l,d;return(d=(l=e.top)!==null&&l!==void 0?l:e.triggerTop)!==null&&d!==void 0?d:e.offsetTop}),E=T(()=>{var l,d;return(d=(l=e.bottom)!==null&&l!==void 0?l:e.triggerBottom)!==null&&d!==void 0?d:e.offsetBottom}),w=T(()=>{var l,d;return(d=(l=e.triggerBottom)!==null&&l!==void 0?l:e.offsetBottom)!==null&&d!==void 0?d:e.bottom}),$=I(null),R=()=>{const{target:l,listenTo:d}=e;l?o=l():d?o=ye(d):o=document,o&&(o.addEventListener("scroll",g),g())};function g(){Tt(v)}function v(){const{value:l}=$;if(!o||!l)return;const d=Jt(o);if(c.value){d<s.value&&(r.value=!1,s.value=null),d>i.value&&(n.value=!1,i.value=null);return}const k=eo(o),B=l.getBoundingClientRect(),S=B.top-k.top,b=k.bottom-B.bottom,a=m.value,h=w.value;a!==void 0&&S<=a?(r.value=!0,s.value=d-(a-S)):(r.value=!1,s.value=null),h!==void 0&&b<=h?(n.value=!0,i.value=d+h-b):(n.value=!1,i.value=null)}return ie(()=>{R()}),Z(()=>{o&&o.removeEventListener("scroll",g)}),{selfRef:$,affixed:c,mergedClsPrefix:t,mergedstyle:T(()=>{const l={};return r.value&&m.value!==void 0&&p.value!==void 0&&(l.top=`${p.value}px`),n.value&&w.value!==void 0&&E.value!==void 0&&(l.bottom=`${E.value}px`),l})}},render(){const{mergedClsPrefix:e}=this;return u("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),no=L({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),io=f("anchor",`
 position: relative;
`,[ze("block",`
 padding-left: var(--n-rail-width);
 `,[f("anchor-link",[P("+, >",[f("anchor-link",`
 margin-top: .5em;
 `)])]),f("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),ze("show-rail",[P(">",[f("anchor-link","padding-left: 0;")])])]),_("block",[f("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[_("active",`
 background-color: var(--n-link-color);
 `)])]),f("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),f("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[C("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[_("active",{backgroundColor:"var(--n-rail-color-active)"})])]),f("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[_("active",[P(">",[C("title",`
 color: var(--n-link-text-color-active);
 `)])]),C("title",`
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
 `,[P("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),P("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),se=Q("n-anchor"),lo={title:String,href:String},M=L({name:"AnchorLink",props:lo,setup(e,{slots:t}){const o=I(null),r=U(se),n=G(e,"href"),i=oe(()=>n.value&&n.value===r.activeHref.value);Et(se,"collectedLinkHrefs",n),It(se,"titleEls",()=>o.value),ne(i,c=>{c&&o.value&&r.updateBarPosition(o.value)});function s(){e.href!==void 0&&r.setActiveHref(e.href)}return()=>{var c;const{value:m}=r.mergedClsPrefix;return u("div",{class:[`${m}-anchor-link`,i.value&&`${m}-anchor-link--active`]},u("a",{ref:o,class:[`${m}-anchor-link__title`],href:e.href,title:Pt(e.title),onClick:s},e.title),(c=t.default)===null||c===void 0?void 0:c.call(t))}}});function ao(e,t){const{top:o,height:r}=e.getBoundingClientRect(),n=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:o-n,height:r}}const Se={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},so=Me(Se),co=L({name:"BaseAnchor",props:Object.assign(Object.assign({},Se),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],o=[],r=I(null),n=I(null),i=I(null),s=I(null),c=T(()=>e.type==="block"),m=T(()=>!c.value&&e.showRail);function p(){const{value:g}=i,{value:v}=n;g&&(g.style.transition="none"),v&&(v.style.transition="none"),o&&o.forEach(l=>{l.style.transition="none"}),Fe(()=>{const{value:l}=i,{value:d}=n;l&&(l.offsetWidth,l.style.transition=""),d&&(d.offsetWidth,d.style.transition=""),o&&o.forEach(k=>{k.offsetWidth,k.style.transition=""})})}function E(g,v=!0){const{value:l}=i,{value:d}=n,{value:k}=s;if(!k||!l)return;v||(l.style.transition="none",d&&(d.style.transition="none"));const{offsetHeight:B,offsetWidth:S}=g,{top:b,left:a}=g.getBoundingClientRect(),{top:h,left:j}=k.getBoundingClientRect(),N=b-h,D=a-j;l.style.top=`${N}px`,l.style.height=`${B}px`,d&&(d.style.top=`${N}px`,d.style.height=`${B}px`,d.style.maxWidth=`${S+D}px`),l.offsetHeight,d&&d.offsetHeight,v||(l.style.transition="",d&&(d.style.transition=""))}function w(g,v=!0){const l=/^#([^#]+)$/.exec(g);if(!l)return;const d=document.getElementById(l[1]);d&&(r.value=g,d.scrollIntoView(),v||p(),$())}const $=Qt(()=>R(!0),128);function R(g=!0){var v;const l=[],d=ye((v=e.offsetTarget)!==null&&v!==void 0?v:document);t.forEach(a=>{const h=/#([^#]+)$/.exec(a);if(!h)return;const j=document.getElementById(h[1]);if(j&&d){const{top:N,height:D}=ao(j,d);l.push({top:N,height:D,href:a})}}),l.sort((a,h)=>a.top>h.top?1:(a.top===h.top&&a.height<h.height,-1));const k=r.value,{bound:B,ignoreGap:S}=e,b=l.reduce((a,h)=>h.top+h.height<0?S?h:a:h.top<=B?a===null?h:h.top===a.top?h.href===k?h:a:h.top>a.top?h:a:a,null);g||p(),b?r.value=b.href:r.value=null}return J(se,{activeHref:r,mergedClsPrefix:G(e,"mergedClsPrefix"),updateBarPosition:E,setActiveHref:w,collectedLinkHrefs:t,titleEls:o}),ie(()=>{document.addEventListener("scroll",$,!0),w(window.location.hash),R(!1)}),jt(()=>{w(window.location.hash),R(!1)}),Z(()=>{document.removeEventListener("scroll",$,!0)}),ne(r,g=>{if(g===null){const{value:v}=n;v&&!c.value&&(v.style.maxWidth="0")}}),{selfRef:s,barRef:i,slotRef:n,setActiveHref:w,activeHref:r,isBlockType:c,mergedShowRail:m}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:o,isBlockType:r,$slots:n}=this,i=u("div",{class:[`${t}-anchor`,r&&`${t}-anchor--block`,o&&`${t}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?u("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,o?u("div",{class:`${t}-anchor-rail`},u("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=n.default)===null||e===void 0?void 0:e.call(n));return this.internalScrollable?u(ue,null,{default:()=>i}):i}}),uo=Object.assign(Object.assign(Object.assign(Object.assign({},O.props),{affix:Boolean}),Ce),Se),fo=L({name:"Anchor",props:uo,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=H(e),n=O("Anchor","-anchor",io,st,e,o),i=I(null),s=T(()=>{const{self:{railColor:m,linkColor:p,railColorActive:E,linkTextColor:w,linkTextColorHover:$,linkTextColorPressed:R,linkTextColorActive:g,linkFontSize:v,railWidth:l,linkPadding:d,borderRadius:k},common:{cubicBezierEaseInOut:B}}=n.value;return{"--n-link-border-radius":k,"--n-link-color":p,"--n-link-font-size":v,"--n-link-text-color":w,"--n-link-text-color-hover":$,"--n-link-text-color-active":g,"--n-link-text-color-pressed":R,"--n-link-padding":d,"--n-bezier":B,"--n-rail-color":m,"--n-rail-color-active":E,"--n-rail-width":l}}),c=r?V("anchor",void 0,s,e):void 0;return{scrollTo(m){var p;(p=i.value)===null||p===void 0||p.setActiveHref(m)},renderAnchor:()=>(c==null||c.onRender(),u(co,Object.assign({ref:i,style:r?void 0:s.value,class:c==null?void 0:c.themeClass.value},ke(e,so),{mergedClsPrefix:o.value}),t))}},render(){return this.affix?u(ro,Object.assign({},ke(this,oo)),{default:this.renderAnchor}):this.renderAnchor()}}),mo=e=>{const{popoverColor:t,textColor2:o,primaryColorHover:r,primaryColorPressed:n}=e;return Object.assign(Object.assign({},ct),{color:t,textColor:o,iconColor:o,iconColorHover:r,iconColorPressed:n,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},ho={name:"BackTop",common:ge,self:mo},po=ho,vo=u("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},u("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},u("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},u("g",{transform:"translate(120.000000, 4285.000000)"},u("g",{transform:"translate(7.000000, 126.000000)"},u("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},u("g",{transform:"translate(4.000000, 2.000000)"},u("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),u("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),go=f("back-top",`
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
`,[dt(),_("transition-disabled",{transition:"none !important"}),f("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),P("svg",{pointerEvents:"none"}),P("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[f("base-icon",{color:"var(--n-icon-color-hover)"})]),P("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[f("base-icon",{color:"var(--n-icon-color-pressed)"})])]),bo=Object.assign(Object.assign({},O.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),xo=L({name:"BackTop",inheritAttrs:!1,props:bo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=H(e),r=I(null),n=I(!1);ut(()=>{const{value:S}=r;if(S===null){n.value=!1;return}n.value=S>=e.visibilityHeight});const i=I(!1);ne(n,S=>{var b;i.value&&((b=e["onUpdate:show"])===null||b===void 0||b.call(e,S))});const s=G(e,"show"),c=We(s,n),m=I(!0),p=I(null),E=T(()=>({right:`calc(${W(e.right)} + ${vt.value})`,bottom:W(e.bottom)}));let w,$;ne(c,S=>{var b,a;i.value&&(S&&((b=e.onShow)===null||b===void 0||b.call(e)),(a=e.onHide)===null||a===void 0||a.call(e))});const R=O("BackTop","-back-top",go,po,e,t);function g(){var S;if($)return;$=!0;const b=((S=e.target)===null||S===void 0?void 0:S.call(e))||ye(e.listenTo)||Xe(p.value);if(!b)return;w=b===document.documentElement?document:b;const{to:a}=e;typeof a=="string"&&document.querySelector(a),w.addEventListener("scroll",l),l()}function v(){(Ee(w)?document.documentElement:w).scrollTo({top:0,behavior:"smooth"})}function l(){r.value=(Ee(w)?document.documentElement:w).scrollTop,i.value||Fe(()=>{i.value=!0})}function d(){m.value=!1}ie(()=>{g(),m.value=c.value}),Z(()=>{w&&w.removeEventListener("scroll",l)});const k=T(()=>{const{self:{color:S,boxShadow:b,boxShadowHover:a,boxShadowPressed:h,iconColor:j,iconColorHover:N,iconColorPressed:D,width:q,height:et,iconSize:tt,borderRadius:ot,textColor:rt},common:{cubicBezierEaseInOut:nt}}=R.value;return{"--n-bezier":nt,"--n-border-radius":ot,"--n-height":et,"--n-width":q,"--n-box-shadow":b,"--n-box-shadow-hover":a,"--n-box-shadow-pressed":h,"--n-color":S,"--n-icon-size":tt,"--n-icon-color":j,"--n-icon-color-hover":N,"--n-icon-color-pressed":D,"--n-text-color":rt}}),B=o?V("back-top",void 0,k,e):void 0;return{placeholderRef:p,style:E,mergedShow:c,isMounted:ft(),scrollElement:I(null),scrollTop:r,DomInfoReady:i,transitionDisabled:m,mergedClsPrefix:t,handleAfterEnter:d,handleScroll:l,handleClick:v,cssVars:o?void 0:k,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const{mergedClsPrefix:e}=this;return u("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},u(mt,{to:this.to,show:this.mergedShow},{default:()=>u(ht,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?u("div",pt(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),ve(this.$slots.default,()=>[u(Ve,{clsPrefix:e},{default:()=>vo})])):null}})}))}}),yo=()=>gt,Co={name:"Space",self:yo},So=Co;let he;const wo=()=>{if(!qe)return!0;if(he===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),he=t}return he},_o=Object.assign(Object.assign({},O.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),$o=L({name:"Space",props:_o,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=H(e),r=O("Space","-space",void 0,So,e,t),n=be("Space",o,t);return{useGap:wo(),rtlEnabled:n,mergedClsPrefix:t,margin:T(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[F("gap",i)]:s}}=r.value,{row:c,col:m}=xt(s);return{horizontal:Te(m),vertical:Te(c)}})}},render(){const{vertical:e,align:t,inline:o,justify:r,itemStyle:n,margin:i,wrap:s,mergedClsPrefix:c,rtlEnabled:m,useGap:p,wrapItem:E,internalUseGap:w}=this,$=bt(Bt(this));if(!$.length)return null;const R=`${i.horizontal}px`,g=`${i.horizontal/2}px`,v=`${i.vertical}px`,l=`${i.vertical/2}px`,d=$.length-1,k=r.startsWith("space-");return u("div",{role:"none",class:[`${c}-space`,m&&`${c}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!s||e?"nowrap":"wrap",marginTop:p||e?"":`-${l}`,marginBottom:p||e?"":`-${l}`,alignItems:t,gap:p?`${i.vertical}px ${i.horizontal}px`:""}},!E&&(p||w)?$:$.map((B,S)=>u("div",{role:"none",style:[n,{maxWidth:"100%"},p?"":e?{marginBottom:S!==d?v:""}:m?{marginLeft:k?r==="space-between"&&S===d?"":g:S!==d?R:"",marginRight:k?r==="space-between"&&S===0?"":g:"",paddingTop:l,paddingBottom:l}:{marginRight:k?r==="space-between"&&S===d?"":g:S!==d?R:"",marginLeft:k?r==="space-between"&&S===0?"":g:"",paddingTop:l,paddingBottom:l}]},B)))}}),zo=Array.apply(null,{length:24}).map((e,t)=>{const o=t+1,r=`calc(100% / 24 * ${o})`;return[_(`${o}-span`,{width:r}),_(`${o}-offset`,{marginLeft:r}),_(`${o}-push`,{left:r}),_(`${o}-pull`,{right:r})]}),ko=P([f("row",{width:"100%",display:"flex",flexWrap:"wrap"}),f("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[C("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),zo])]),Ke=Q("n-row"),To={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},Ro=L({name:"Row",props:To,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=H(e);He("-legacy-grid",ko,t);const r=be("Row",o,t),n=oe(()=>{const{gutter:s}=e;return Array.isArray(s)&&s[1]||0}),i=oe(()=>{const{gutter:s}=e;return Array.isArray(s)?s[0]:Number(s)});return J(Ke,{mergedClsPrefixRef:t,gutterRef:G(e,"gutter"),verticalGutterRef:n,horizontalGutterRef:i}),{mergedClsPrefix:t,rtlEnabled:r,styleMargin:oe(()=>`-${W(n.value,{c:.5})} -${W(i.value,{c:.5})}`),styleWidth:oe(()=>`calc(100% + ${W(i.value)})`)}},render(){return u("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),Bo={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},je=L({name:"Col",props:Bo,setup(e){const t=U(Ke,null);return t||xe("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:t.mergedClsPrefixRef,gutter:t.gutterRef,stylePadding:T(()=>`${W(t.verticalGutterRef.value,{c:.5})} ${W(t.horizontalGutterRef.value,{c:.5})}`),mergedPush:T(()=>Number(e.push)-Number(e.pull))}},render(){const{$slots:e,span:t,mergedPush:o,offset:r,stylePadding:n,gutter:i,mergedClsPrefix:s}=this;return u("div",{class:[`${s}-col`,{[`${s}-col--${t}-span`]:!0,[`${s}-col--${o}-push`]:o>0,[`${s}-col--${-o}-pull`]:o<0,[`${s}-col--${r}-offset`]:r}],style:{padding:n}},i?u("div",null,e):e)}}),Po=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:i,actionColor:s,scrollbarColor:c,scrollbarColorHover:m,invertedColor:p}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:s,headerColor:n,headerColorInverted:p,footerColor:s,footerColorInverted:p,headerBorderColor:i,headerBorderColorInverted:p,footerBorderColor:i,footerBorderColorInverted:p,siderBorderColor:i,siderBorderColorInverted:p,siderColor:n,siderColorInverted:p,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Re(r,c),siderToggleBarColorHover:Re(r,m),__invertScrollbar:"true"}},Lo=yt({name:"Layout",common:ge,peers:{Scrollbar:Ct},self:Po}),we=Lo,Eo=e=>{const{textColor3:t,infoColor:o,errorColor:r,successColor:n,warningColor:i,textColor1:s,textColor2:c,railColor:m,fontWeightStrong:p,fontSize:E}=e;return Object.assign(Object.assign({},St),{contentFontSize:E,titleFontWeight:p,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:o,iconColorError:r,iconColorSuccess:n,iconColorWarning:i,titleTextColor:s,contentTextColor:c,metaTextColor:t,lineColor:m})},Io={name:"Timeline",common:ge,self:Eo},Oo=Io,jo=Q("n-layout-sider"),_e={type:String,default:"static"},No=f("layout",`
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
`,[f("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),_("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ao={embedded:Boolean,position:_e,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ze=Q("n-layout");function qo(e){return L({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},O.props),Ao),setup(t){const o=I(null),r=I(null),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=H(t),s=O("Layout","-layout",No,we,t,n);function c(v,l){if(t.nativeScrollbar){const{value:d}=o;d&&(l===void 0?d.scrollTo(v):d.scrollTo(v,l))}else{const{value:d}=r;d&&d.scrollTo(v,l)}}J(Ze,t);let m=0,p=0;const E=v=>{var l;const d=v.target;m=d.scrollLeft,p=d.scrollTop,(l=t.onScroll)===null||l===void 0||l.call(t,v)};De(()=>{if(t.nativeScrollbar){const v=o.value;v&&(v.scrollTop=p,v.scrollLeft=m)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},$={scrollTo:c},R=T(()=>{const{common:{cubicBezierEaseInOut:v},self:l}=s.value;return{"--n-bezier":v,"--n-color":t.embedded?l.colorEmbedded:l.color,"--n-text-color":l.textColor}}),g=i?V("layout",T(()=>t.embedded?"e":""),R,t):void 0;return Object.assign({mergedClsPrefix:n,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:w,mergedTheme:s,handleNativeElScroll:E,cssVars:i?void 0:R,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},$)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const n=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return u("div",{class:i,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,n],onScroll:this.handleNativeElScroll},this.$slots):u(ue,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,n]}),this.$slots))}})}const pe=qo(!1),Ho=f("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[_("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),_("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Mo={position:_e,inverted:Boolean,bordered:{type:Boolean,default:!1}},Fo=L({name:"LayoutHeader",props:Object.assign(Object.assign({},O.props),Mo),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=H(e),r=O("Layout","-layout-header",Ho,we,e,t),n=T(()=>{const{common:{cubicBezierEaseInOut:s},self:c}=r.value,m={"--n-bezier":s};return e.inverted?(m["--n-color"]=c.headerColorInverted,m["--n-text-color"]=c.textColorInverted,m["--n-border-color"]=c.headerBorderColorInverted):(m["--n-color"]=c.headerColor,m["--n-text-color"]=c.textColor,m["--n-border-color"]=c.headerBorderColor),m}),i=o?V("layout-header",T(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Wo=f("layout-sider",`
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
`,[_("bordered",[C("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),C("left-placement",[_("bordered",[C("border",`
 right: 0;
 `)])]),_("right-placement",`
 justify-content: flex-start;
 `,[_("bordered",[C("border",`
 left: 0;
 `)]),_("collapsed",[f("layout-toggle-button",[f("base-icon",`
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",[P("&:hover",[C("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),C("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),f("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[f("base-icon",`
 transform: rotate(0);
 `)]),f("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[P("&:hover",[C("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),C("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),_("collapsed",[f("layout-toggle-bar",[P("&:hover",[C("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),C("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),f("layout-toggle-button",[f("base-icon",`
 transform: rotate(0);
 `)])]),f("layout-toggle-button",`
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
 `,[f("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[C("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),C("bottom",`
 position: absolute;
 top: 34px;
 `),P("&:hover",[C("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),C("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),C("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),P("&:hover",[C("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),C("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),f("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),_("show-content",[f("layout-sider-scroll-container",{opacity:1})]),_("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Vo=L({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(Ve,{clsPrefix:e},{default:()=>u(no,null)}))}}),Do=L({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Go={position:_e,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Uo=L({name:"LayoutSider",props:Object.assign(Object.assign({},O.props),Go),setup(e){const t=U(Ze),o=I(null),r=I(null),n=T(()=>W(m.value?e.collapsedWidth:e.width)),i=T(()=>e.collapseMode!=="transform"?{}:{minWidth:W(e.width)}),s=T(()=>t?t.siderPlacement:"left"),c=I(e.defaultCollapsed),m=We(G(e,"collapsed"),c);function p(b,a){if(e.nativeScrollbar){const{value:h}=o;h&&(a===void 0?h.scrollTo(b):h.scrollTo(b,a))}else{const{value:h}=r;h&&h.scrollTo(b,a)}}function E(){const{"onUpdate:collapsed":b,onUpdateCollapsed:a,onExpand:h,onCollapse:j}=e,{value:N}=m;a&&le(a,!N),b&&le(b,!N),c.value=!N,N?h&&le(h):j&&le(j)}let w=0,$=0;const R=b=>{var a;const h=b.target;w=h.scrollLeft,$=h.scrollTop,(a=e.onScroll)===null||a===void 0||a.call(e,b)};De(()=>{if(e.nativeScrollbar){const b=o.value;b&&(b.scrollTop=$,b.scrollLeft=w)}}),J(jo,{collapsedRef:m,collapseModeRef:G(e,"collapseMode")});const{mergedClsPrefixRef:g,inlineThemeDisabled:v}=H(e),l=O("Layout","-layout-sider",Wo,we,e,g);function d(b){var a,h;b.propertyName==="max-width"&&(m.value?(a=e.onAfterLeave)===null||a===void 0||a.call(e):(h=e.onAfterEnter)===null||h===void 0||h.call(e))}const k={scrollTo:p},B=T(()=>{const{common:{cubicBezierEaseInOut:b},self:a}=l.value,{siderToggleButtonColor:h,siderToggleButtonBorder:j,siderToggleBarColor:N,siderToggleBarColorHover:D}=a,q={"--n-bezier":b,"--n-toggle-button-color":h,"--n-toggle-button-border":j,"--n-toggle-bar-color":N,"--n-toggle-bar-color-hover":D};return e.inverted?(q["--n-color"]=a.siderColorInverted,q["--n-text-color"]=a.textColorInverted,q["--n-border-color"]=a.siderBorderColorInverted,q["--n-toggle-button-icon-color"]=a.siderToggleButtonIconColorInverted,q.__invertScrollbar=a.__invertScrollbar):(q["--n-color"]=a.siderColor,q["--n-text-color"]=a.textColor,q["--n-border-color"]=a.siderBorderColor,q["--n-toggle-button-icon-color"]=a.siderToggleButtonIconColor),q}),S=v?V("layout-sider",T(()=>e.inverted?"a":"b"),B,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:g,mergedTheme:l,styleMaxWidth:n,mergedCollapsed:m,scrollContainerStyle:i,siderPlacement:s,handleNativeElScroll:R,handleTransitionend:d,handleTriggerClick:E,inlineThemeDisabled:v,cssVars:B,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender},k)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:W(this.width)}]},this.nativeScrollbar?u("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(ue,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?u(Do,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(Vo,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),Yo=P([f("list",`
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
 `,[_("show-divider",[f("list-item",[P("&:not(:last-child)",[C("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),_("clickable",[f("list-item",`
 cursor: pointer;
 `)]),_("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),_("hoverable",[f("list-item",`
 border-radius: var(--n-border-radius);
 `,[P("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[C("divider",`
 background-color: transparent;
 `)])])]),_("bordered, hoverable",[f("list-item",`
 padding: 12px 20px;
 `),C("header, footer",`
 padding: 12px 20px;
 `)]),C("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[P("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),f("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("prefix",`
 margin-right: 20px;
 flex: 0;
 `),C("suffix",`
 margin-left: 20px;
 flex: 0;
 `),C("main",`
 flex: 1;
 `),C("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),wt(f("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),_t(f("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Xo=Object.assign(Object.assign({},O.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),Qe=Q("n-list"),Ko=L({name:"List",props:Xo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=H(e),n=be("List",r,t),i=O("List","-list",Yo,$t,e,t);J(Qe,{showDividerRef:G(e,"showDivider"),mergedClsPrefixRef:t});const s=T(()=>{const{common:{cubicBezierEaseInOut:m},self:{fontSize:p,textColor:E,color:w,colorModal:$,colorPopover:R,borderColor:g,borderColorModal:v,borderColorPopover:l,borderRadius:d,colorHover:k,colorHoverModal:B,colorHoverPopover:S}}=i.value;return{"--n-font-size":p,"--n-bezier":m,"--n-text-color":E,"--n-color":w,"--n-border-radius":d,"--n-border-color":g,"--n-border-color-modal":v,"--n-border-color-popover":l,"--n-color-modal":$,"--n-color-popover":R,"--n-color-hover":k,"--n-color-hover-modal":B,"--n-color-hover-popover":S}}),c=o?V("list",void 0,s,e):void 0;return{mergedClsPrefix:t,rtlEnabled:n,cssVars:o?void 0:s,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:o,onRender:r}=this;return r==null||r(),u("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},t.header?u("div",{class:`${o}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?u("div",{class:`${o}-list__footer`},t.footer()):null)}}),ae=L({name:"ListItem",setup(){const e=U(Qe,null);return e||xe("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return u("li",{class:`${t}-list-item`},e.prefix?u("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?u("div",{class:`${t}-list-item__main`},e):null,e.suffix?u("div",{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&u("div",{class:`${t}-list-item__divider`}))}}),Zo=Object.assign(Object.assign({},O.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),Qo=L({name:"Scrollbar",props:Zo,setup(){const e=I(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return u(ue,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Jo=Qo,Ne=1.25,er=f("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${Ne};
`,[_("horizontal",`
 flex-direction: row;
 `,[P(">",[f("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[_("dashed-line-type",[P(">",[f("timeline-item-timeline",[C("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),P(">",[f("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[P(">",[C("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),f("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[C("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),_("right-placement",[f("timeline-item",[f("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),f("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),_("left-placement",[f("timeline-item",[f("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),f("timeline-item-timeline",`
 left: 0;
 `)])]),f("timeline-item",`
 position: relative;
 `,[P("&:last-child",[f("timeline-item-timeline",[C("line",`
 display: none;
 `)]),f("timeline-item-content",[C("meta",`
 margin-bottom: 0;
 `)])]),f("timeline-item-content",[C("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),C("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),C("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),_("dashed-line-type",[f("timeline-item-timeline",[C("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),f("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${Ne} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[C("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),C("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),C("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),tr=Object.assign(Object.assign({},O.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Je=Q("n-timeline"),or=L({name:"Timeline",props:tr,setup(e,{slots:t}){const{mergedClsPrefixRef:o}=H(e),r=O("Timeline","-timeline",er,Oo,e,o);return J(Je,{props:e,mergedThemeRef:r,mergedClsPrefixRef:o}),()=>{const{value:n}=o;return u("div",{class:[`${n}-timeline`,e.horizontal&&`${n}-timeline--horizontal`,`${n}-timeline--${e.size}-size`,!e.horizontal&&`${n}-timeline--${e.itemPlacement}-placement`]},t)}}}),rr={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Y=L({name:"TimelineItem",props:rr,setup(e){const t=U(Je);t||xe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Nt();const{inlineThemeDisabled:o}=H(),r=T(()=>{const{props:{size:i,iconSize:s},mergedThemeRef:c}=t,{type:m}=e,{self:{titleTextColor:p,contentTextColor:E,metaTextColor:w,lineColor:$,titleFontWeight:R,contentFontSize:g,[F("iconSize",i)]:v,[F("titleMargin",i)]:l,[F("titleFontSize",i)]:d,[F("circleBorder",m)]:k,[F("iconColor",m)]:B},common:{cubicBezierEaseInOut:S}}=c.value;return{"--n-bezier":S,"--n-circle-border":k,"--n-icon-color":B,"--n-content-font-size":g,"--n-content-text-color":E,"--n-line-color":$,"--n-meta-text-color":w,"--n-title-font-size":d,"--n-title-font-weight":R,"--n-title-margin":l,"--n-title-text-color":p,"--n-icon-size":W(s)||v}}),n=o?V("timeline-item",T(()=>{const{props:{size:i,iconSize:s}}=t,{type:c}=e;return`${i[0]}${s||"a"}${c[0]}`}),r,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:o?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:o,$slots:r}=this;return o==null||o(),u("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},u("div",{class:`${e}-timeline-item-timeline`},u("div",{class:`${e}-timeline-item-timeline__line`}),Be(r.icon,n=>n?u("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},n):u("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),u("div",{class:`${e}-timeline-item-content`},Be(r.header,n=>n||this.title?u("div",{class:`${e}-timeline-item-content__title`},n||this.title):null),u("div",{class:`${e}-timeline-item-content__content`},ve(r.default,()=>[this.content])),u("div",{class:`${e}-timeline-item-content__meta`},ve(r.footer,()=>[this.time]))))}}),nr=f("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[P("&:first-child",{marginTop:0}),_("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[_("align-text",{paddingLeft:0},[P("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),P("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),P("&::before",{backgroundColor:"var(--n-bar-color)"})])]),ir=Object.assign(Object.assign({},O.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),te=e=>L({name:`H${e}`,props:ir,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=H(t),n=O("Typography","-h",nr,zt,t,o),i=T(()=>{const{type:c}=t,{common:{cubicBezierEaseInOut:m},self:{headerFontWeight:p,headerTextColor:E,[F("headerPrefixWidth",e)]:w,[F("headerFontSize",e)]:$,[F("headerMargin",e)]:R,[F("headerBarWidth",e)]:g,[F("headerBarColor",c)]:v}}=n.value;return{"--n-bezier":m,"--n-font-size":$,"--n-margin":R,"--n-bar-color":v,"--n-bar-width":g,"--n-font-weight":p,"--n-text-color":E,"--n-prefix-width":w}}),s=r?V(`h${e}`,T(()=>t.type[0]),i,t):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var t;const{prefix:o,alignText:r,mergedClsPrefix:n,cssVars:i,$slots:s}=this;return(t=this.onRender)===null||t===void 0||t.call(this),u(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:r}],style:i},s)}});te("1");const $e=te("2"),Ae=te("3");te("4");te("5");te("6");const lr=L({__name:"ActivityNavigation",setup(e){return(t,o)=>(ee(),fe(y(Jo),{class:"h-100"},{default:z(()=>[x(y(fo),{affix:"","show-rail":!1,bound:64,type:"block","show-background":!0,"listen-to":".my-scroll-container"},{default:z(()=>[x(y(M),{title:"Profil",href:"#activity-profile"}),x(y(M),{title:"Průběh krok za krokem",href:"#activity-flow"}),x(y(M),{title:"Příprava"},{default:z(()=>[x(y(M),{title:"Materiály a pomůcky",href:"#activity-supplies"}),x(y(M),{title:"Tipy k realizaci",href:"#activity-tips"})]),_:1}),x(y(M),{title:"Varianty",href:"#activity-variants"}),x(y(M),{title:"Ke stažení",href:"#activity-downloads"}),x(y(M),{title:"Návodné otázky",href:"#activity-questions"}),x(y(M),{title:"Inspirace",href:"#activity-inspiration"},{default:z(()=>[x(y(M),{title:"Galerie",href:"#activity-gallery"}),x(y(M),{title:"Deriváty",href:"#activity-derivates"})]),_:1})]),_:1})]),_:1}))}}),ar={id:"activity-profile",class:"pt-2"},sr=A("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit iusto delectus vero! Sapiente, repellat iure voluptates dicta molestias delectus perspiciatis veritatis consequuntur laboriosam ratione a incidunt quidem tenetur nam. Est labore corporis, iure aliquid cum tempora qui eveniet minus eligendi, fugiat deleniti et assumenda consectetur! Ullam odit fuga aut nisi eligendi consectetur unde corporis laborum, qui non, adipisci at. Earum, beatae sint. Ut repudiandae unde ratione sequi, temporibus reiciendis corporis vel facilis dolorem sint officiis, doloribus harum mollitia id ipsa placeat doloremque expedita nesciunt quam quo ad eum. Sequi. Corrupti recusandae, voluptate provident tempora numquam, modi eaque inventore voluptatibus sit nulla architecto? Itaque odio corrupti veritatis non ducimus provident recusandae libero! Soluta repudiandae at, ut voluptatem delectus deserunt officiis. ",-1),cr=L({__name:"ActivityProfile",setup(e){return(t,o)=>(ee(),Ge("section",ar,[x(y($e),{class:"mt-2"},{default:z(()=>[X("Profil")]),_:1}),sr]))}}),dr=L({__name:"ActivityMinutebook",setup(e){return(t,o)=>(ee(),fe(y(Ue),{title:"Minutovník"},{default:z(()=>[x(y($o),{vertical:""},{default:z(()=>[x(y(or),null,{default:z(()=>[x(y(Y),{type:"default",title:"Rozdělení do skupin",time:"0:00 – 0:03"}),x(y(Y),{type:"default",title:"Zadání pro novinářské redakce a experty",time:"0:03 – 0:05"}),x(y(Y),{type:"success",title:"Příprava otázek a odpovědí",content:"Redakce si připravuje otázky, na které se budou ptát expertů.",time:"0:05 – 0:10"}),x(y(Y),{type:"success",title:"Tisková konference 1",content:"Průběh a moderace",time:"0:10 – 0:20"}),x(y(Y),{type:"success",title:"Tisková konference 2",content:"Rotace na pozici týmů a expertů",time:"0:20 – 0:30"}),x(y(Y),{type:"default",title:"Zpětná vazba a vyhodnocení",time:"0:30 – 0:35"})]),_:1})]),_:1})]),_:1}))}}),ur=A("div",{class:"list-number"},"1",-1),fr=A("div",null," Sestavit seznam témat pro experty (1–5 témat). ",-1),mr=A("div",{class:"list-number"},"2",-1),hr=A("div",null," Nasdílet témata studentům – ideálně v předchozí hodině, minimálně 1 den předem. ",-1),pr=A("div",{class:"list-number warning"},"3",-1),vr=A("div",null," Sestavit „vodítka“ – tzn. 2-3 otázky, které studentům pomohou lépe pochopit, jaké typy otázek tvořit. ",-1),gr=A("span",{class:"list-infocontent"},"Doporučeno v případě, že cílová skupina je mladší třída.",-1),br=A("div",{class:"list-number"},"4",-1),xr=A("div",null," Vytisknout „vodítkové“ otázky na papír, případně předepsat na flipchart. ",-1),yr=L({__name:"ActivityPrepPhase",setup(e){return(t,o)=>(ee(),fe(y(Ue),{title:"Přípravná fáze"},{default:z(()=>[x(y(Ko),{"show-divider":!1,class:"list-prep"},{default:z(()=>[x(y(ae),null,{prefix:z(()=>[ur]),default:z(()=>[fr]),_:1}),x(y(ae),null,{prefix:z(()=>[mr]),default:z(()=>[hr]),_:1}),x(y(ae),null,{prefix:z(()=>[pr]),default:z(()=>[vr,gr]),_:1}),x(y(ae),null,{prefix:z(()=>[br]),default:z(()=>[xr]),_:1})]),_:1})]),_:1}))}}),Cr={id:"activity-flow",class:"pt-2"},Sr=L({__name:"ActivityFlow",setup(e){return(t,o)=>(ee(),Ge("section",Cr,[x(y($e),null,{default:z(()=>[X("Průběh krok za krokem")]),_:1}),x(y(Ro),{gutter:12},{default:z(()=>[x(y(je),{span:16},{default:z(()=>[x(yr,{style:{"margin-bottom":"12px"}})]),_:1}),x(y(je),{span:8},{default:z(()=>[x(dr)]),_:1})]),_:1})]))}}),wr={style:{padding:"1rem 3rem"}},_r={class:"pt-2"},$r={id:"activity-supplies",class:"pt-2"},zr=A("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur deleniti voluptatum ipsa minima perspiciatis accusantium dolores modi facilis fugit veritatis nihil, voluptatem, inventore facere architecto maxime atque doloribus minus. At ut sit explicabo quaerat similique accusantium aperiam optio blanditiis, doloribus rem cumque commodi! Pariatur fugit est rem, accusantium quos reiciendis delectus, amet dolore ea dolorum libero iusto magnam nobis? Aliquam, blanditiis consectetur. Reiciendis repudiandae fugit, magni debitis repellat similique sequi expedita amet vero officia iusto nobis optio beatae quibusdam. Ad eum tempore aspernatur adipisci non nemo? Nisi, doloribus consequuntur. Animi soluta quam perferendis itaque corrupti ut earum sit dolore non natus inventore, odit quidem similique quo dolorum accusamus atque? Vel unde magni sequi enim nesciunt vitae adipisci dicta ut. Voluptatum quam cumque incidunt sequi optio laudantium quibusdam accusantium distinctio quaerat reprehenderit rerum voluptates, architecto, nostrum blanditiis autem porro suscipit debitis. Ad quisquam vel voluptatum adipisci minima ducimus nemo ipsa! ",-1),kr={id:"activity-tips",class:"pt-2"},Tr=A("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi nostrum qui tempora excepturi? Dolores qui ab nobis, voluptates modi similique, incidunt id perferendis porro, aliquam ex at quae iste. Sapiente alias in mollitia repudiandae odit repellat facere hic quod officia sit! Laudantium, mollitia. Sint aliquid velit reprehenderit quia veniam quaerat magnam molestiae exercitationem facere! Dicta voluptates provident maxime numquam. Assumenda enim labore rerum, est repellat nulla voluptate cupiditate ut, architecto saepe quaerat adipisci vel, voluptatum provident aperiam. Qui iusto sunt laborum quam enim incidunt ducimus sequi quos quasi expedita. Nam cupiditate earum ex repellat. Pariatur, aperiam iste. Quaerat, saepe omnis, vero, voluptatibus corporis enim quia laborum quis minus magni error eveniet possimus odit. Quae aliquam quaerat tempore? Odit, ipsa! ",-1),Br=L({__name:"ActivityView",setup(e){return(t,o)=>(ee(),fe(y(pe),{class:"vh-100 vw-100"},{default:z(()=>[x(y(Fo),{style:{height:"4rem",padding:"1.5rem"},bordered:""},{default:z(()=>[X(" Káťa mi zase bude krást nápady ")]),_:1}),x(y(pe),{position:"absolute",style:{top:"4rem"},"has-sider":"","sider-placement":"right"},{default:z(()=>[x(y(pe),{class:"my-scroll-container","native-scrollbar":!1},{default:z(()=>[A("div",wr,[x(cr),x(Sr),A("section",_r,[x(y($e),null,{default:z(()=>[X("Příprava")]),_:1})]),A("section",$r,[x(y(Ae),null,{default:z(()=>[X("Materiály a pomůcky")]),_:1}),zr]),A("section",kr,[x(y(Ae),null,{default:z(()=>[X("Tipy k realizaci")]),_:1}),Tr]),x(y(xo),{style:{"z-index":"99"},bottom:30,right:30})])]),_:1}),x(y(Uo),{"content-style":"padding: 1.5rem 1.5rem 1.5rem 0px; margin-left: 1rem;","native-scrollbar":!1},{default:z(()=>[x(lr)]),_:1})]),_:1})]),_:1}))}});export{Br as default};
