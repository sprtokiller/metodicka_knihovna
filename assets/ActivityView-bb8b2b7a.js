import{i as Q,w as ve,o as G,a as ne,b as je,c as Ae,d as Ne,e as oe,r as We,f as m,g as T,h as P,u as F,j as Me,k as I,l as k,m as p,n as Re,p as le,q as Fe,s as xe,t as w,v as y,x as re,y as He,z as ae,A as se,N as ce,B as Ve,C as L,D as V,E as ye,F as De,G as Ye,H as Ce,I as we,J as Ue,K as Xe,L as Z,M as Ke,O as Se,P as Te,Q as M,R as de,S as Pe,T as B,U as b,V as x,W as Ie,X as H,Y as N,Z as Qe}from"./index-0fc9f888.js";let ie=[];const Oe=new WeakMap;function Ge(){ie.forEach(e=>e(...Oe.get(e))),ie=[]}function Ze(e,...t){Oe.set(e,t),!ie.includes(e)&&ie.push(e)===1&&requestAnimationFrame(Ge)}function qe(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function Je(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const et=/^(\d|\.)+$/,ze=/(\d|\.)+/;function J(e,{c:t=1,offset:o=0,attachPx:r=!0}={}){if(typeof e=="number"){const i=(e+o)*t;return i===0?"0":`${i}px`}else if(typeof e=="string")if(et.test(e)){const i=(Number(e)+o)*t;return r?i===0?"0":`${i}px`:`${i}`}else{const i=ze.exec(e);return i?e.replace(ze,String((Number(i[0])+o)*t)):e}return e}function tt(e,t,o){const r=Q(e,null);r!==null&&(t in r||(r[t]=[]),r[t].push(o.value),ve(o,(i,n)=>{const d=r[t],l=d.findIndex(u=>u===n);~l&&d.splice(l,1),d.push(i)}),G(()=>{const i=r[t],n=i.findIndex(d=>d===o.value);~n&&i.splice(n,1)}))}function ot(e,t,o){const r=Q(e,null);r!==null&&(t in r||(r[t]=[]),ne(()=>{const i=o();i&&r[t].push(i)}),G(()=>{const i=r[t],n=o(),d=i.findIndex(l=>l===n);~d&&i.splice(d,1)}))}let Y,K;const rt=()=>{var e,t;Y=je?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,K=!1,Y!==void 0?Y.then(()=>{K=!0}):K=!0};rt();function it(e){if(K)return;let t=!1;ne(()=>{K||Y==null||Y.then(()=>{t||e()})}),G(()=>{t=!0})}let ke=!1;function nt(){if(Ae&&window.CSS&&!ke&&(ke=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}var lt=/\s/;function at(e){for(var t=e.length;t--&&lt.test(e.charAt(t)););return t}var st=/^\s+/;function ct(e){return e&&e.slice(0,at(e)+1).replace(st,"")}var _e=0/0,dt=/^[-+]0x[0-9a-f]+$/i,ut=/^0b[01]+$/i,ft=/^0o[0-7]+$/i,mt=parseInt;function $e(e){if(typeof e=="number")return e;if(Ne(e))return _e;if(oe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=oe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ct(e);var o=ut.test(e);return o||ft.test(e)?mt(e.slice(2),o?2:8):dt.test(e)?_e:+e}var ht=function(){return We.Date.now()};const me=ht;var pt="Expected a function",vt=Math.max,gt=Math.min;function bt(e,t,o){var r,i,n,d,l,u,v=0,$=!1,S=!1,z=!0;if(typeof e!="function")throw new TypeError(pt);t=$e(t)||0,oe(o)&&($=!!o.leading,S="maxWait"in o,n=S?vt($e(o.maxWait)||0,t):n,z="trailing"in o?!!o.trailing:z);function _(s){var f=r,E=i;return r=i=void 0,v=s,d=e.apply(E,f),d}function g(s){return v=s,l=setTimeout(c,t),$?_(s):d}function h(s){var f=s-u,E=s-v,j=t-f;return S?gt(j,n-E):j}function a(s){var f=s-u,E=s-v;return u===void 0||f>=t||f<0||S&&E>=n}function c(){var s=me();if(a(s))return R(s);l=setTimeout(c,h(s))}function R(s){return l=void 0,z&&r?_(s):(r=i=void 0,d)}function q(){l!==void 0&&clearTimeout(l),v=0,r=u=i=l=void 0}function O(){return l===void 0?d:R(me())}function C(){var s=me(),f=a(s);if(r=arguments,i=this,u=s,f){if(l===void 0)return g(u);if(S)return clearTimeout(l),l=setTimeout(c,t),_(u)}return l===void 0&&(l=setTimeout(c,t)),d}return C.cancel=q,C.flush=O,C}var xt="Expected a function";function yt(e,t,o){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(xt);return oe(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),bt(e,t,{leading:r,maxWait:t,trailing:i})}function Ct(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function St(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const Tt=m("affix",[T("affixed",{position:"fixed"},[T("absolute-positioned",{position:"absolute"})])]),ge={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},zt=Re(ge),kt=P({name:"Affix",props:ge,setup(e){const{mergedClsPrefixRef:t}=F(e);Me("-affix",Tt,t);let o=null;const r=I(!1),i=I(!1),n=I(null),d=I(null),l=k(()=>i.value||r.value),u=k(()=>{var a,c;return(c=(a=e.triggerTop)!==null&&a!==void 0?a:e.offsetTop)!==null&&c!==void 0?c:e.top}),v=k(()=>{var a,c;return(c=(a=e.top)!==null&&a!==void 0?a:e.triggerTop)!==null&&c!==void 0?c:e.offsetTop}),$=k(()=>{var a,c;return(c=(a=e.bottom)!==null&&a!==void 0?a:e.triggerBottom)!==null&&c!==void 0?c:e.offsetBottom}),S=k(()=>{var a,c;return(c=(a=e.triggerBottom)!==null&&a!==void 0?a:e.offsetBottom)!==null&&c!==void 0?c:e.bottom}),z=I(null),_=()=>{const{target:a,listenTo:c}=e;a?o=a():c?o=qe(c):o=document,o&&(o.addEventListener("scroll",g),g())};function g(){Ze(h)}function h(){const{value:a}=z;if(!o||!a)return;const c=Ct(o);if(l.value){c<d.value&&(r.value=!1,d.value=null),c>n.value&&(i.value=!1,n.value=null);return}const R=St(o),q=a.getBoundingClientRect(),O=q.top-R.top,C=R.bottom-q.bottom,s=u.value,f=S.value;s!==void 0&&O<=s?(r.value=!0,d.value=c-(s-O)):(r.value=!1,d.value=null),f!==void 0&&C<=f?(i.value=!0,n.value=c+f-C):(i.value=!1,n.value=null)}return ne(()=>{_()}),G(()=>{o&&o.removeEventListener("scroll",g)}),{selfRef:z,affixed:l,mergedClsPrefix:t,mergedstyle:k(()=>{const a={};return r.value&&u.value!==void 0&&v.value!==void 0&&(a.top=`${v.value}px`),i.value&&S.value!==void 0&&$.value!==void 0&&(a.bottom=`${$.value}px`),a})}},render(){const{mergedClsPrefix:e}=this;return p("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),_t=P({name:"ChevronRight",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),$t={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},Bt=e=>{const{borderRadius:t,railColor:o,primaryColor:r,primaryColorHover:i,primaryColorPressed:n,textColor2:d}=e;return Object.assign(Object.assign({},$t),{borderRadius:t,railColor:o,railColorActive:r,linkColor:Fe(r,{alpha:.15}),linkTextColor:d,linkTextColorHover:i,linkTextColorPressed:n,linkTextColorActive:r})},Rt={name:"Anchor",common:le,self:Bt},wt=Rt,Pt=m("anchor",`
 position: relative;
`,[xe("block",`
 padding-left: var(--n-rail-width);
 `,[m("anchor-link",[w("+, >",[m("anchor-link",`
 margin-top: .5em;
 `)])]),m("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),xe("show-rail",[w(">",[m("anchor-link","padding-left: 0;")])])]),T("block",[m("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[T("active",`
 background-color: var(--n-link-color);
 `)])]),m("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),m("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[y("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[T("active",{backgroundColor:"var(--n-rail-color-active)"})])]),m("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[T("active",[w(">",[y("title",`
 color: var(--n-link-text-color-active);
 `)])]),y("title",`
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
 `,[w("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),w("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),ee=ae("n-anchor"),It={title:String,href:String},A=P({name:"AnchorLink",props:It,setup(e,{slots:t}){const o=I(null),r=Q(ee),i=re(e,"href"),n=He(()=>i.value&&i.value===r.activeHref.value);tt(ee,"collectedLinkHrefs",i),ot(ee,"titleEls",()=>o.value),ve(n,l=>{l&&o.value&&r.updateBarPosition(o.value)});function d(){e.href!==void 0&&r.setActiveHref(e.href)}return()=>{var l;const{value:u}=r.mergedClsPrefix;return p("div",{class:[`${u}-anchor-link`,n.value&&`${u}-anchor-link--active`]},p("a",{ref:o,class:[`${u}-anchor-link__title`],href:e.href,title:Je(e.title),onClick:d},e.title),(l=t.default)===null||l===void 0?void 0:l.call(t))}}});function Ot(e,t){const{top:o,height:r}=e.getBoundingClientRect(),i=t instanceof HTMLElement?t.getBoundingClientRect().top:0;return{top:o-i,height:r}}const be={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},qt=Re(be),Et=P({name:"BaseAnchor",props:Object.assign(Object.assign({},be),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const t=[],o=[],r=I(null),i=I(null),n=I(null),d=I(null),l=k(()=>e.type==="block"),u=k(()=>!l.value&&e.showRail);function v(){const{value:g}=n,{value:h}=i;g&&(g.style.transition="none"),h&&(h.style.transition="none"),o&&o.forEach(a=>{a.style.transition="none"}),Ve(()=>{const{value:a}=n,{value:c}=i;a&&(a.offsetWidth,a.style.transition=""),c&&(c.offsetWidth,c.style.transition=""),o&&o.forEach(R=>{R.offsetWidth,R.style.transition=""})})}function $(g,h=!0){const{value:a}=n,{value:c}=i,{value:R}=d;if(!R||!a)return;h||(a.style.transition="none",c&&(c.style.transition="none"));const{offsetHeight:q,offsetWidth:O}=g,{top:C,left:s}=g.getBoundingClientRect(),{top:f,left:E}=R.getBoundingClientRect(),j=C-f,X=s-E;a.style.top=`${j}px`,a.style.height=`${q}px`,c&&(c.style.top=`${j}px`,c.style.height=`${q}px`,c.style.maxWidth=`${O+X}px`),a.offsetHeight,c&&c.offsetHeight,h||(a.style.transition="",c&&(c.style.transition=""))}function S(g,h=!0){const a=/^#([^#]+)$/.exec(g);if(!a)return;const c=document.getElementById(a[1]);c&&(r.value=g,c.scrollIntoView(),h||v(),z())}const z=yt(()=>_(!0),128);function _(g=!0){var h;const a=[],c=qe((h=e.offsetTarget)!==null&&h!==void 0?h:document);t.forEach(s=>{const f=/#([^#]+)$/.exec(s);if(!f)return;const E=document.getElementById(f[1]);if(E&&c){const{top:j,height:X}=Ot(E,c);a.push({top:j,height:X,href:s})}}),a.sort((s,f)=>s.top>f.top?1:(s.top===f.top&&s.height<f.height,-1));const R=r.value,{bound:q,ignoreGap:O}=e,C=a.reduce((s,f)=>f.top+f.height<0?O?f:s:f.top<=q?s===null?f:f.top===s.top?f.href===R?f:s:f.top>s.top?f:s:s,null);g||v(),C?r.value=C.href:r.value=null}return se(ee,{activeHref:r,mergedClsPrefix:re(e,"mergedClsPrefix"),updateBarPosition:$,setActiveHref:S,collectedLinkHrefs:t,titleEls:o}),ne(()=>{document.addEventListener("scroll",z,!0),S(window.location.hash),_(!1)}),it(()=>{S(window.location.hash),_(!1)}),G(()=>{document.removeEventListener("scroll",z,!0)}),ve(r,g=>{if(g===null){const{value:h}=i;h&&!l.value&&(h.style.maxWidth="0")}}),{selfRef:d,barRef:n,slotRef:i,setActiveHref:S,activeHref:r,isBlockType:l,mergedShowRail:u}},render(){var e;const{mergedClsPrefix:t,mergedShowRail:o,isBlockType:r,$slots:i}=this,n=p("div",{class:[`${t}-anchor`,r&&`${t}-anchor--block`,o&&`${t}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?p("div",{ref:"slotRef",class:`${t}-anchor-link-background`}):null,o?p("div",{class:`${t}-anchor-rail`},p("div",{ref:"barRef",class:[`${t}-anchor-rail__bar`,this.activeHref!==null&&`${t}-anchor-rail__bar--active`]})):null,(e=i.default)===null||e===void 0?void 0:e.call(i));return this.internalScrollable?p(ce,null,{default:()=>n}):n}}),Lt=Object.assign(Object.assign(Object.assign(Object.assign({},L.props),{affix:Boolean}),ge),be),jt=P({name:"Anchor",props:Lt,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=F(e),i=L("Anchor","-anchor",Pt,wt,e,o),n=I(null),d=k(()=>{const{self:{railColor:u,linkColor:v,railColorActive:$,linkTextColor:S,linkTextColorHover:z,linkTextColorPressed:_,linkTextColorActive:g,linkFontSize:h,railWidth:a,linkPadding:c,borderRadius:R},common:{cubicBezierEaseInOut:q}}=i.value;return{"--n-link-border-radius":R,"--n-link-color":v,"--n-link-font-size":h,"--n-link-text-color":S,"--n-link-text-color-hover":z,"--n-link-text-color-active":g,"--n-link-text-color-pressed":_,"--n-link-padding":c,"--n-bezier":q,"--n-rail-color":u,"--n-rail-color-active":$,"--n-rail-width":a}}),l=r?V("anchor",void 0,d,e):void 0;return{scrollTo(u){var v;(v=n.value)===null||v===void 0||v.setActiveHref(u)},renderAnchor:()=>(l==null||l.onRender(),p(Et,Object.assign({ref:n,style:r?void 0:d.value,class:l==null?void 0:l.themeClass.value},ye(e,qt),{mergedClsPrefix:o.value}),t))}},render(){return this.affix?p(kt,Object.assign({},ye(this,zt)),{default:this.renderAnchor}):this.renderAnchor()}}),At=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:i,dividerColor:n,actionColor:d,scrollbarColor:l,scrollbarColorHover:u,invertedColor:v}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:d,headerColor:i,headerColorInverted:v,footerColor:d,footerColorInverted:v,headerBorderColor:n,headerBorderColorInverted:v,footerBorderColor:n,footerBorderColorInverted:v,siderBorderColor:n,siderBorderColorInverted:v,siderColor:i,siderColorInverted:v,siderToggleButtonBorder:`1px solid ${n}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:Ce(r,l),siderToggleBarColorHover:Ce(r,u),__invertScrollbar:"true"}},Nt=De({name:"Layout",common:le,peers:{Scrollbar:Ye},self:At}),ue=Nt,Wt={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},Mt=e=>{const{textColor3:t,infoColor:o,errorColor:r,successColor:i,warningColor:n,textColor1:d,textColor2:l,railColor:u,fontWeightStrong:v,fontSize:$}=e;return Object.assign(Object.assign({},Wt),{contentFontSize:$,titleFontWeight:v,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${i}`,circleBorderWarning:`2px solid ${n}`,iconColor:t,iconColorInfo:o,iconColorError:r,iconColorSuccess:i,iconColorWarning:n,titleTextColor:d,contentTextColor:l,metaTextColor:t,lineColor:u})},Ft={name:"Timeline",common:le,self:Mt},Ht=Ft,Vt={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},Dt=e=>{const{primaryColor:t,textColor2:o,borderColor:r,lineHeight:i,fontSize:n,borderRadiusSmall:d,dividerColor:l,fontWeightStrong:u,textColor1:v,textColor3:$,infoColor:S,warningColor:z,errorColor:_,successColor:g,codeColor:h}=e;return Object.assign(Object.assign({},Vt),{aTextColor:t,blockquoteTextColor:o,blockquotePrefixColor:r,blockquoteLineHeight:i,blockquoteFontSize:n,codeBorderRadius:d,liTextColor:o,liLineHeight:i,liFontSize:n,hrColor:l,headerFontWeight:u,headerTextColor:v,pTextColor:o,pTextColor1Depth:v,pTextColor2Depth:o,pTextColor3Depth:$,pLineHeight:i,pFontSize:n,headerBarColor:t,headerBarColorPrimary:t,headerBarColorInfo:S,headerBarColorError:_,headerBarColorWarning:z,headerBarColorSuccess:g,textColor:o,textColor1Depth:v,textColor2Depth:o,textColor3Depth:$,textColorPrimary:t,textColorInfo:S,textColorSuccess:g,textColorWarning:z,textColorError:_,codeTextColor:o,codeColor:h,codeBorder:"1px solid #0000"})},Yt={name:"Typography",common:le,self:Dt},Ut=Yt,Xt=ae("n-layout-sider"),fe={type:String,default:"static"},Kt=m("layout",`
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
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Qt={embedded:Boolean,position:fe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ee=ae("n-layout");function Gt(e){return P({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},L.props),Qt),setup(t){const o=I(null),r=I(null),{mergedClsPrefixRef:i,inlineThemeDisabled:n}=F(t),d=L("Layout","-layout",Kt,ue,t,i);function l(h,a){if(t.nativeScrollbar){const{value:c}=o;c&&(a===void 0?c.scrollTo(h):c.scrollTo(h,a))}else{const{value:c}=r;c&&c.scrollTo(h,a)}}se(Ee,t);let u=0,v=0;const $=h=>{var a;const c=h.target;u=c.scrollLeft,v=c.scrollTop,(a=t.onScroll)===null||a===void 0||a.call(t,h)};we(()=>{if(t.nativeScrollbar){const h=o.value;h&&(h.scrollTop=v,h.scrollLeft=u)}});const S={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},z={scrollTo:l},_=k(()=>{const{common:{cubicBezierEaseInOut:h},self:a}=d.value;return{"--n-bezier":h,"--n-color":t.embedded?a.colorEmbedded:a.color,"--n-text-color":a.textColor}}),g=n?V("layout",k(()=>t.embedded?"e":""),_,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:S,mergedTheme:d,handleNativeElScroll:$,cssVars:n?void 0:_,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},z)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=r?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return p("div",{class:n,style:this.cssVars},this.nativeScrollbar?p("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):p(ce,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const he=Gt(!1),Zt=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),T("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Jt={position:fe,inverted:Boolean,bordered:{type:Boolean,default:!1}},eo=P({name:"LayoutHeader",props:Object.assign(Object.assign({},L.props),Jt),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=F(e),r=L("Layout","-layout-header",Zt,ue,e,t),i=k(()=>{const{common:{cubicBezierEaseInOut:d},self:l}=r.value,u={"--n-bezier":d};return e.inverted?(u["--n-color"]=l.headerColorInverted,u["--n-text-color"]=l.textColorInverted,u["--n-border-color"]=l.headerBorderColorInverted):(u["--n-color"]=l.headerColor,u["--n-text-color"]=l.textColor,u["--n-border-color"]=l.headerBorderColor),u}),n=o?V("layout-header",k(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),to=m("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[T("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),T("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),oo=Object.assign(Object.assign({},L.props),{inverted:Boolean,position:fe,bordered:Boolean}),ro=P({name:"LayoutFooter",props:oo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=F(e),r=L("Layout","-layout-footer",to,ue,e,t),i=k(()=>{const{common:{cubicBezierEaseInOut:d},self:l}=r.value,u={"--n-bezier":d};return e.inverted?(u["--n-color"]=l.footerColorInverted,u["--n-text-color"]=l.textColorInverted,u["--n-border-color"]=l.footerBorderColorInverted):(u["--n-color"]=l.footerColor,u["--n-text-color"]=l.textColor,u["--n-border-color"]=l.footerBorderColor),u}),n=o?V("layout-footer",k(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),io=m("layout-sider",`
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
`,[T("bordered",[y("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),y("left-placement",[T("bordered",[y("border",`
 right: 0;
 `)])]),T("right-placement",`
 justify-content: flex-start;
 `,[T("bordered",[y("border",`
 left: 0;
 `)]),T("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[w("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[w("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),T("collapsed",[m("layout-toggle-bar",[w("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
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
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[y("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),y("bottom",`
 position: absolute;
 top: 34px;
 `),w("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),w("&:hover",[y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),y("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),T("show-content",[m("layout-sider-scroll-container",{opacity:1})]),T("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),no=P({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return p("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},p(Ue,{clsPrefix:e},{default:()=>p(_t,null)}))}}),lo=P({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return p("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},p("div",{class:`${e}-layout-toggle-bar__top`}),p("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ao={position:fe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},so=P({name:"LayoutSider",props:Object.assign(Object.assign({},L.props),ao),setup(e){const t=Q(Ee),o=I(null),r=I(null),i=k(()=>J(u.value?e.collapsedWidth:e.width)),n=k(()=>e.collapseMode!=="transform"?{}:{minWidth:J(e.width)}),d=k(()=>t?t.siderPlacement:"left"),l=I(e.defaultCollapsed),u=Xe(re(e,"collapsed"),l);function v(C,s){if(e.nativeScrollbar){const{value:f}=o;f&&(s===void 0?f.scrollTo(C):f.scrollTo(C,s))}else{const{value:f}=r;f&&f.scrollTo(C,s)}}function $(){const{"onUpdate:collapsed":C,onUpdateCollapsed:s,onExpand:f,onCollapse:E}=e,{value:j}=u;s&&Z(s,!j),C&&Z(C,!j),l.value=!j,j?f&&Z(f):E&&Z(E)}let S=0,z=0;const _=C=>{var s;const f=C.target;S=f.scrollLeft,z=f.scrollTop,(s=e.onScroll)===null||s===void 0||s.call(e,C)};we(()=>{if(e.nativeScrollbar){const C=o.value;C&&(C.scrollTop=z,C.scrollLeft=S)}}),se(Xt,{collapsedRef:u,collapseModeRef:re(e,"collapseMode")});const{mergedClsPrefixRef:g,inlineThemeDisabled:h}=F(e),a=L("Layout","-layout-sider",io,ue,e,g);function c(C){var s,f;C.propertyName==="max-width"&&(u.value?(s=e.onAfterLeave)===null||s===void 0||s.call(e):(f=e.onAfterEnter)===null||f===void 0||f.call(e))}const R={scrollTo:v},q=k(()=>{const{common:{cubicBezierEaseInOut:C},self:s}=a.value,{siderToggleButtonColor:f,siderToggleButtonBorder:E,siderToggleBarColor:j,siderToggleBarColorHover:X}=s,W={"--n-bezier":C,"--n-toggle-button-color":f,"--n-toggle-button-border":E,"--n-toggle-bar-color":j,"--n-toggle-bar-color-hover":X};return e.inverted?(W["--n-color"]=s.siderColorInverted,W["--n-text-color"]=s.textColorInverted,W["--n-border-color"]=s.siderBorderColorInverted,W["--n-toggle-button-icon-color"]=s.siderToggleButtonIconColorInverted,W.__invertScrollbar=s.__invertScrollbar):(W["--n-color"]=s.siderColor,W["--n-text-color"]=s.textColor,W["--n-border-color"]=s.siderBorderColor,W["--n-toggle-button-icon-color"]=s.siderToggleButtonIconColor),W}),O=h?V("layout-sider",k(()=>e.inverted?"a":"b"),q,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:g,mergedTheme:a,styleMaxWidth:i,mergedCollapsed:u,scrollContainerStyle:n,siderPlacement:d,handleNativeElScroll:_,handleTransitionend:c,handleTriggerClick:$,inlineThemeDisabled:h,cssVars:q,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender},R)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:J(this.width)}]},this.nativeScrollbar?p("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):p(ce,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?p(lo,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):p(no,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?p("div",{class:`${t}-layout-sider__border`}):null)}}),co=Object.assign(Object.assign({},L.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),uo=P({name:"Scrollbar",props:co,setup(){const e=I(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var r;(r=e.value)===null||r===void 0||r.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var r;(r=e.value)===null||r===void 0||r.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return p(ce,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),fo=uo,Be=1.25,mo=m("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${Be};
`,[T("horizontal",`
 flex-direction: row;
 `,[w(">",[m("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[T("dashed-line-type",[w(">",[m("timeline-item-timeline",[y("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),w(">",[m("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[w(">",[y("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),m("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[y("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),T("right-placement",[m("timeline-item",[m("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),m("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),T("left-placement",[m("timeline-item",[m("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),m("timeline-item-timeline",`
 left: 0;
 `)])]),m("timeline-item",`
 position: relative;
 `,[w("&:last-child",[m("timeline-item-timeline",[y("line",`
 display: none;
 `)]),m("timeline-item-content",[y("meta",`
 margin-bottom: 0;
 `)])]),m("timeline-item-content",[y("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),y("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),y("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),T("dashed-line-type",[m("timeline-item-timeline",[y("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),m("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${Be} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[y("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),y("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),y("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ho=Object.assign(Object.assign({},L.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Le=ae("n-timeline"),po=P({name:"Timeline",props:ho,setup(e,{slots:t}){const{mergedClsPrefixRef:o}=F(e),r=L("Timeline","-timeline",mo,Ht,e,o);return se(Le,{props:e,mergedThemeRef:r,mergedClsPrefixRef:o}),()=>{const{value:i}=o;return p("div",{class:[`${i}-timeline`,e.horizontal&&`${i}-timeline--horizontal`,`${i}-timeline--${e.size}-size`,!e.horizontal&&`${i}-timeline--${e.itemPlacement}-placement`]},t)}}}),vo={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},D=P({name:"TimelineItem",props:vo,setup(e){const t=Q(Le);t||Ke("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),nt();const{inlineThemeDisabled:o}=F(),r=k(()=>{const{props:{size:n,iconSize:d},mergedThemeRef:l}=t,{type:u}=e,{self:{titleTextColor:v,contentTextColor:$,metaTextColor:S,lineColor:z,titleFontWeight:_,contentFontSize:g,[M("iconSize",n)]:h,[M("titleMargin",n)]:a,[M("titleFontSize",n)]:c,[M("circleBorder",u)]:R,[M("iconColor",u)]:q},common:{cubicBezierEaseInOut:O}}=l.value;return{"--n-bezier":O,"--n-circle-border":R,"--n-icon-color":q,"--n-content-font-size":g,"--n-content-text-color":$,"--n-line-color":z,"--n-meta-text-color":S,"--n-title-font-size":c,"--n-title-font-weight":_,"--n-title-margin":a,"--n-title-text-color":v,"--n-icon-size":J(d)||h}}),i=o?V("timeline-item",k(()=>{const{props:{size:n,iconSize:d}}=t,{type:l}=e;return`${n[0]}${d||"a"}${l[0]}`}),r,t.props):void 0;return{mergedClsPrefix:t.mergedClsPrefixRef,cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedClsPrefix:e,color:t,onRender:o,$slots:r}=this;return o==null||o(),p("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},p("div",{class:`${e}-timeline-item-timeline`},p("div",{class:`${e}-timeline-item-timeline__line`}),Se(r.icon,i=>i?p("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:t}},i):p("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:t}}))),p("div",{class:`${e}-timeline-item-content`},Se(r.header,i=>i||this.title?p("div",{class:`${e}-timeline-item-content__title`},i||this.title):null),p("div",{class:`${e}-timeline-item-content__content`},Te(r.default,()=>[this.content])),p("div",{class:`${e}-timeline-item-content__meta`},Te(r.footer,()=>[this.time]))))}}),go=m("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[w("&:first-child",{marginTop:0}),T("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[T("align-text",{paddingLeft:0},[w("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),w("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),w("&::before",{backgroundColor:"var(--n-bar-color)"})])]),bo=Object.assign(Object.assign({},L.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),U=e=>P({name:`H${e}`,props:bo,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=F(t),i=L("Typography","-h",go,Ut,t,o),n=k(()=>{const{type:l}=t,{common:{cubicBezierEaseInOut:u},self:{headerFontWeight:v,headerTextColor:$,[M("headerPrefixWidth",e)]:S,[M("headerFontSize",e)]:z,[M("headerMargin",e)]:_,[M("headerBarWidth",e)]:g,[M("headerBarColor",l)]:h}}=i.value;return{"--n-bezier":u,"--n-font-size":z,"--n-margin":_,"--n-bar-color":h,"--n-bar-width":g,"--n-font-weight":v,"--n-text-color":$,"--n-prefix-width":S}}),d=r?V(`h${e}`,k(()=>t.type[0]),n,t):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:n,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var t;const{prefix:o,alignText:r,mergedClsPrefix:i,cssVars:n,$slots:d}=this;return(t=this.onRender)===null||t===void 0||t.call(this),p(`h${e}`,{class:[`${i}-h`,`${i}-h${e}`,this.themeClass,{[`${i}-h--prefix-bar`]:o,[`${i}-h--align-text`]:r}],style:n},d)}});U("1");const pe=U("2"),te=U("3");U("4");U("5");U("6");const xo=P({__name:"ActivityNavigation",setup(e){return(t,o)=>(de(),Pe(x(fo),{class:"h-100"},{default:B(()=>[b(x(jt),{affix:"","show-rail":!1,bound:64,type:"block","show-background":!0,"listen-to":".my-scroll-container"},{default:B(()=>[b(x(A),{title:"Profil",href:"#activity-profile"}),b(x(A),{title:"Průběh"},{default:B(()=>[b(x(A),{title:"Minutovník",href:"#activity-minutebook"}),b(x(A),{title:"Krok za krokem",href:"#activity-steps"})]),_:1}),b(x(A),{title:"Příprava"},{default:B(()=>[b(x(A),{title:"Materiály a pomůcky",href:"#activity-supplies"}),b(x(A),{title:"Tipy k realizaci",href:"#activity-tips"})]),_:1}),b(x(A),{title:"Varianty",href:"#activity-variants"}),b(x(A),{title:"Ke stažení",href:"#activity-downloads"}),b(x(A),{title:"Návodné otázky",href:"#activity-questions"}),b(x(A),{title:"Inspirace",href:"#activity-inspiration"},{default:B(()=>[b(x(A),{title:"Galerie",href:"#activity-gallery"}),b(x(A),{title:"Deriváty",href:"#activity-derivates"})]),_:1})]),_:1})]),_:1}))}}),yo={id:"activity-profile",class:"pt-2"},Co=N("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit iusto delectus vero! Sapiente, repellat iure voluptates dicta molestias delectus perspiciatis veritatis consequuntur laboriosam ratione a incidunt quidem tenetur nam. Est labore corporis, iure aliquid cum tempora qui eveniet minus eligendi, fugiat deleniti et assumenda consectetur! Ullam odit fuga aut nisi eligendi consectetur unde corporis laborum, qui non, adipisci at. Earum, beatae sint. Ut repudiandae unde ratione sequi, temporibus reiciendis corporis vel facilis dolorem sint officiis, doloribus harum mollitia id ipsa placeat doloremque expedita nesciunt quam quo ad eum. Sequi. Corrupti recusandae, voluptate provident tempora numquam, modi eaque inventore voluptatibus sit nulla architecto? Itaque odio corrupti veritatis non ducimus provident recusandae libero! Soluta repudiandae at, ut voluptatem delectus deserunt officiis. ",-1),So=P({__name:"ActivityProfile",setup(e){return(t,o)=>(de(),Ie("section",yo,[b(x(pe),{class:"mt-2"},{default:B(()=>[H("Profil")]),_:1}),Co]))}}),To={id:"activity-minutebook",class:"pt-2 pb-5"},zo=P({__name:"ActivityMinutebook",setup(e){return I(2),(t,o)=>{const r=Qe("n-space");return de(),Ie("section",To,[b(x(te),null,{default:B(()=>[H("Minutovník")]),_:1}),b(r,{vertical:""},{default:B(()=>[b(x(po),null,{default:B(()=>[b(x(D),{type:"default",title:"Rozdělení do skupin",time:"0:00 - 0:03"}),b(x(D),{type:"default",title:"Zadání pro novinářské redakce a experty",time:"0:03 - 0:05"}),b(x(D),{type:"warning",title:"Příprava otázek a odpovědí",content:"Redakce si připravuje otázky, na které se budou ptát expertů.",time:"0:05 - 0:10"}),b(x(D),{type:"success",title:"Tisková konference 1",content:"Průběh a moderace",time:"0:10 - 0:20"}),b(x(D),{type:"success",title:"Tisková konference 2",content:"Rotace na pozici týmů a expertů",time:"0:20 - 0:30"}),b(x(D),{type:"default",title:"Zpětná vazba a vyhodnocení",time:"0:30 - 0:35"})]),_:1})]),_:1})])}}}),ko={style:{padding:"0 3rem"}},_o={class:"pt-2"},$o={id:"activity-steps",class:"pt-2"},Bo=N("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, inventore cum, magni nam dolores ipsam accusantium labore a nostrum vel reprehenderit? Accusamus in qui, laboriosam nemo facilis harum est cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusantium earum officiis debitis illo et iure eveniet sapiente quia ipsa mollitia est deserunt soluta voluptatibus perspiciatis, nostrum laudantium maiores doloremque? ",-1),Ro={class:"pt-2"},wo={id:"activity-supplies",class:"pt-2"},Po=N("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur deleniti voluptatum ipsa minima perspiciatis accusantium dolores modi facilis fugit veritatis nihil, voluptatem, inventore facere architecto maxime atque doloribus minus. At ut sit explicabo quaerat similique accusantium aperiam optio blanditiis, doloribus rem cumque commodi! Pariatur fugit est rem, accusantium quos reiciendis delectus, amet dolore ea dolorum libero iusto magnam nobis? Aliquam, blanditiis consectetur. Reiciendis repudiandae fugit, magni debitis repellat similique sequi expedita amet vero officia iusto nobis optio beatae quibusdam. Ad eum tempore aspernatur adipisci non nemo? Nisi, doloribus consequuntur. Animi soluta quam perferendis itaque corrupti ut earum sit dolore non natus inventore, odit quidem similique quo dolorum accusamus atque? Vel unde magni sequi enim nesciunt vitae adipisci dicta ut. Voluptatum quam cumque incidunt sequi optio laudantium quibusdam accusantium distinctio quaerat reprehenderit rerum voluptates, architecto, nostrum blanditiis autem porro suscipit debitis. Ad quisquam vel voluptatum adipisci minima ducimus nemo ipsa! ",-1),Io={id:"activity-tips",class:"pt-2"},Oo=N("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi nostrum qui tempora excepturi? Dolores qui ab nobis, voluptates modi similique, incidunt id perferendis porro, aliquam ex at quae iste. Sapiente alias in mollitia repudiandae odit repellat facere hic quod officia sit! Laudantium, mollitia. Sint aliquid velit reprehenderit quia veniam quaerat magnam molestiae exercitationem facere! Dicta voluptates provident maxime numquam. Assumenda enim labore rerum, est repellat nulla voluptate cupiditate ut, architecto saepe quaerat adipisci vel, voluptatum provident aperiam. Qui iusto sunt laborum quam enim incidunt ducimus sequi quos quasi expedita. Nam cupiditate earum ex repellat. Pariatur, aperiam iste. Quaerat, saepe omnis, vero, voluptatibus corporis enim quia laborum quis minus magni error eveniet possimus odit. Quae aliquam quaerat tempore? Odit, ipsa! ",-1),qo=N("div",{class:"d-flex justify-content-center h-100"},[N("div",{class:"align-self-center"},"Patička")],-1),Lo=P({__name:"ActivityView",setup(e){return(t,o)=>(de(),Pe(x(he),{class:"vh-100 vw-100"},{default:B(()=>[b(x(eo),{style:{height:"4rem",padding:"1.5rem"},bordered:""},{default:B(()=>[H(" Místo pro záhlaví ")]),_:1}),b(x(he),{position:"absolute",style:{top:"4rem",bottom:"3rem"},"has-sider":"","sider-placement":"right"},{default:B(()=>[b(x(he),{class:"my-scroll-container",style:{"padding-right":"1rem"},"native-scrollbar":!1},{default:B(()=>[N("div",ko,[b(So),N("section",_o,[b(x(pe),null,{default:B(()=>[H("Průběh")]),_:1}),b(zo)]),N("section",$o,[b(x(te),null,{default:B(()=>[H("Krok za krokem")]),_:1}),Bo]),N("section",Ro,[b(x(pe),null,{default:B(()=>[H("Příprava")]),_:1})]),N("section",wo,[b(x(te),null,{default:B(()=>[H("Materiály a pomůcky")]),_:1}),Po]),N("section",Io,[b(x(te),null,{default:B(()=>[H("Tipy k realizaci")]),_:1}),Oo])])]),_:1}),b(x(so),{"content-style":"padding: 1.5rem 1.5rem 1.5rem 0px;","native-scrollbar":!1},{default:B(()=>[b(xo)]),_:1})]),_:1}),b(x(ro),{position:"absolute",style:{height:"3rem"},bordered:""},{default:B(()=>[qo]),_:1})]),_:1}))}});export{Lo as default};
