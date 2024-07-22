"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2339],{1604:function(e,n,t){var r,o;t.d(n,{T:function(){return o}}),function(e){e.FILE="file",e.FOLDER="folder"}(r||(r={})),function(e){e.LEFT="left",e.RIGHT="right"}(o||(o={}))},48655:function(e,n,t){var r=t(82394),o=t(26304),i=t(82684),l=t(9518),u=t(11314),c=t(28598),a=["autoHorizontalPadding","children","hideXscrollbar","innerRef"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=l.default.div.withConfig({displayName:"Scrollbar__ScrollbarStyled",componentId:"sc-8inxcm-0"})([""," ",";"],u.Z,(function(e){var n=e.autoHorizontalPadding,t=e.isOverflowing,r=e.theme.scrollbars.width;return n&&"\n    padding-left: ".concat(r.track,"px;\n    padding-right: ").concat(t?0:r.track,"px;\n  ")}));function f(e,n){var t=e.autoHorizontalPadding,r=e.children,l=e.hideXscrollbar,d=e.innerRef,f=(0,o.Z)(e,a),p=(0,i.useState)(!1),h=p[0],m=p[1],b=(0,i.useRef)(null),y=(0,i.useRef)(null),g=d||b;return(0,i.useEffect)((function(){if(t){var e=function(){if(g.current){var e,t,r,o=null==g||null===(e=g.current)||void 0===e?void 0:e.getBoundingClientRect(),i=null===(t=null!==(r=null==n?void 0:n.current)&&void 0!==r?r:null==y?void 0:y.current)||void 0===t?void 0:t.getBoundingClientRect(),l=(null==o?void 0:o.height)>(null==i?void 0:i.height);m(l)}},r=new ResizeObserver(e);g.current&&r.observe(g.current),e();var o=g.current;return function(){o&&r.unobserve(o)}}}),[t,r,n]),(0,c.jsx)(v,s(s({},f),{},{autoHorizontalPadding:t,hideXscrollbar:l,isOverflowing:h,onWheel:function(e){e.stopPropagation()},ref:n||y,children:(0,c.jsx)(u.P,{ref:g,children:r})}))}n.Z=(0,i.forwardRef)(f)},58944:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(82394),o=t(26304),i=t(11611),l=t(28160),u=t(9518),c=(0,u.css)(["position:relative;top:1;"]),a=u.default.kbd.withConfig({displayName:"indexstyle__KbdStyled",componentId:"sc-1e1l7ab-0"})(["",""],c),d=u.default.div.withConfig({displayName:"indexstyle__DivStyled",componentId:"sc-1e1l7ab-1"})(["",""],c),s=t(39643),v=t(28598),f=["inline","text"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=function(e){var n=e.inline,t=e.text,r=(0,o.Z)(e,f),i=n?d:a;return(0,v.jsx)(l.Z,h(h({},r),{},{inline:!0,children:(0,v.jsx)(i,{children:s.tE[t]||t})}))},b=t(82684),y=["textGroup"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n=e.textGroup,t=(0,o.Z)(e,y),r=[],u=[];return null==n||n.forEach((function(e,n){var o=[];e.forEach((function(e,r){u.push(e),r>=1&&o.push((0,b.createElement)(l.Z,O(O({},t),{},{key:"key-text-plus-".concat(null==u?void 0:u.length,"-").concat(e,"-").concat(n,"-").concat(r),muted:!0}),"+")),o.push((0,b.createElement)(m,O(O({},t),{},{inline:!0,key:"key-text-".concat(null==u?void 0:u.length,"-").concat(e,"-").concat(n,"-").concat(r),text:e})))})),n>=1&&r.push((0,v.jsx)(l.Z,{muted:!0,small:t.small,xsmall:t.xsmall,children:"then"},"then-".concat(n))),r.push.apply(r,o)})),(0,v.jsx)(i.Z,{alignItems:"center",autoFlow:"column",columnGap:4,children:r})}},37084:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(82394),o=t(75582),i=t(82684),l=t(1856),u=t(62876),c=t(86735),a=t(37195),d=t(53860);function s(e){var n,t,s=e.target,v=e.timeout,f=void 0===v?1e3:v,p=(0,l.Z)(),h=(0,o.Z)(p,2),m=h[0],b=h[1],y=(0,i.useRef)({}),g=(0,i.useRef)(!1),O=(0,i.useRef)({}),j=(0,i.useRef)(null),w=(0,i.useRef)((n={},(0,r.Z)(n,u.T.KEYDOWN,{}),(0,r.Z)(n,u.T.KEYUP,{}),n)),E=(0,i.useRef)((t={},(0,r.Z)(t,u.T.KEYDOWN,{}),(0,r.Z)(t,u.T.KEYUP,{}),t)),P=(0,i.useRef)([]);function x(){var e,n;w.current=(e={},(0,r.Z)(e,u.T.KEYDOWN,{}),(0,r.Z)(e,u.T.KEYUP,{}),e),E.current=(n={},(0,r.Z)(n,u.T.KEYDOWN,{}),(0,r.Z)(n,u.T.KEYUP,{}),n),P.current=[]}function k(){var e,n=[];return Object.values(null!==(e=null==E?void 0:E.current)&&void 0!==e?e:{}).forEach((function(e){Object.values(e).forEach((function(e){n.push((0,c.YC)(e,(function(e){return e.timestamp}))[0])}))})),n}function R(e){if(null!=s&&s.current){var n,t,i=(n=e,t=u.T.KEYDOWN===e.type?u.T.KEYDOWN:u.T.KEYUP===e.type?u.T.KEYUP:void 0,{altKey:n.altKey,ctrlKey:n.ctrlKey,key:n.key,metaKey:n.metaKey,shiftKey:n.shiftKey,timestamp:Number(new Date),type:t});g.current&&(x(),g.current=!1,u.T.KEYUP===i.type)||(!function(e){var n,t,o,i=e.key,l=e.type;(n=w.current[l])[i]||(n[i]=[]),w.current[l][i].push(e),(t=E.current[l])[i]||(t[i]=[]),E.current[l][i].push(e),u.T.KEYDOWN,e.type,u.T.KEYUP===e.type&&(P.current.push(k()),E.current=(o={},(0,r.Z)(o,u.T.KEYDOWN,{}),(0,r.Z)(o,u.T.KEYUP,{}),o))}(i),m((function(){return function(e){var n,t,r,i;d.e.keyboard.shortcuts&&console.log("commands",Object.keys(null!==(n=y.current)&&void 0!==n?n:{})),d.e.keyboard.shortcuts&&console.log("series",P.current),d.e.keyboard.shortcuts&&console.log("history",w.current);var l={};null===(t=Object.entries(null!==(r=null==y?void 0:y.current)&&void 0!==r?r:{}))||void 0===t||t.forEach((function(n){var t,r,i,c=(0,o.Z)(n,2),s=c[0],v=c[1];if(null!=v&&v.predicate&&null!=v&&v.handler){var f=!1,p=null!==(t=null==P?void 0:P.current)&&void 0!==t?t:[];u.T.KEYDOWN===e.type&&p.push(k());var h=null!==(r=null==v||null===(i=v.predicate)||void 0===i?void 0:i.predicates)&&void 0!==r?r:[];f=h.length>=2?h.every((function(e,n){return n>=(null==p?void 0:p.length)&&(0,a.u)(e,p[n])})):p.some((function(e){return 1===h.length?(0,a.u)(v.predicate,e,w.current):null==e?void 0:e.some((function(e){return(0,a.u)(v.predicate,[e],w.current)}))})),d.e.keyboard.shortcuts&&console.log("valid",f),f&&(l[s]=v)}}));var s,v=null===(i=(0,c.YC)(Object.values(null!=l?l:{}),(function(e){return e.priority})))||void 0===i?void 0:i[0];v&&(null==v||null===(s=v.handler)||void 0===s||s.call(v,e),b(),x(),g.current=!0,j.current&&clearTimeout(j.current))}(i)}),1),u.T.KEYDOWN!==i.type&&(j.current&&clearTimeout(j.current),j.current=setTimeout(x,f)))}}return(0,i.useEffect)((function(){var e=function(e){return R(e)},n=function(e){return R(e)};return document.addEventListener(u.T.KEYDOWN,e),document.addEventListener(u.T.KEYUP,n),function(){document.removeEventListener(u.T.KEYDOWN,e),document.removeEventListener(u.T.KEYUP,n)}}),[]),{deregisterCommands:function(){y.current={}},registerCommands:function(e,n){y.current=e,O.current=n}}}},12085:function(e,n,t){t.d(n,{Z:function(){return ge}});var r=t(82394),o=t(21831),i=t(26304),l=t(75582),u=t(66878),c=t(11611),a=t(58944),d=t(82684),s=t(28160),v=t(53860),f=t(29385),p=t(62243),h=t(80022),m=t(13692),b=t(93189),y=t(15544);function g(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,y.Z)(e);if(n){var o=(0,y.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,b.Z)(this,t)}}var O=function(e){(0,m.Z)(t,e);var n=g(t);function t(e,o){var i;return(0,p.Z)(this,t),i=n.call(this,e),(0,r.Z)((0,h.Z)(i),"detail",void 0),i.detail=o||{},i}return(0,f.Z)(t)}((0,t(66344).Z)(Event)),j=function(e){(0,m.Z)(t,e);var n=g(t);function t(e,o,i){var u;(0,p.Z)(this,t),u=n.call(this,e),(0,r.Z)((0,h.Z)(u),"detail",void 0),(0,r.Z)((0,h.Z)(u),"key",void 0),u.detail=o||{};var c=null!=i?i:[],a=(0,l.Z)(c,1);return u.key=a[0],u}return(0,f.Z)(t)}("undefined"!=typeof KeyboardEvent?KeyboardEvent:Event);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e,n,t){var r=(0,d.useRef)({}),o=(0,d.useCallback)((function(n,r,o){!function(e,n,r){var o,i=new(null!==(o=null==t?void 0:t.baseEvent)&&void 0!==o?o:O)(e,n,r);v.e.events.handler&&console.log("dispatchCustomEvent:",null==n?void 0:n.dispatcher,i),window.dispatchEvent(i)}(n,E(E({},r),{},{dispatcher:e}),o)}),[e,t]);return(0,d.useEffect)((function(){var e,o,i;null===(e=Object.entries(null!=n?n:{}))||void 0===e||e.forEach((function(e){var n=(0,l.Z)(e,2),t=n[0],o=n[1];r.current[t]=function(e){o(e)}}));var u=r.current,c=null===(o=null==t?void 0:t.eventListenerTarget)||void 0===o||o?window:null;return null===(i=Object.entries(null!=u?u:{}))||void 0===i||i.forEach((function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1];null==c||c.addEventListener(t,r)})),function(){var e;null===(e=Object.entries(null!=u?u:{}))||void 0===e||e.forEach((function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1];null==c||c.removeEventListener(t,r)}))}}),[e,t,n]),{dispatchCustomEvent:o}}var x=t(1856),k=t(89635),R=t(51209),C=t(28862),Z=t(31353),T=t(1604),D=t(9518),I=t(36264),K=t(59886),N=t(11314),S=40*I.i,Y=(0,D.css)(["border-left:1px solid var(--colors-graymd);border-right:1px solid var(--colors-graymd);"]),_=(0,D.css)(["",""],(function(e){return!e.noHover&&"\n    background-color: var(--colors-graymd);\n    border-left-color: var(--colors-gray);\n    border-right-color: var(--colors-gray);\n  "})),L=(0,D.css)(["",""],_),W=(0,D.css)(["background-color:var(--colors-graylo);border-left-color:var(--colors-gray);border-right-color:var(--colors-gray);"]),M=(0,D.css)(["",""],(function(e){return!e.noHover&&"\n    border-bottom-color: var(--colors-gray);\n    border-top-color: var(--colors-gray);\n  "})),F=(0,D.default)(k.E.div).withConfig({displayName:"indexstyle__MenuStyled",componentId:"sc-hs3dy7-0"})([""," max-height:100vh;min-width:","px;overflow:hidden;position:fixed;width:max-content;&:hover{cursor:default;}"],(function(e){var n=e.left,t=e.top,r=e.zIndex;return(void 0!==n||void 0!==t)&&"\n    left: ".concat(n,"px;\n    top: ").concat(t,"px;\n    z-index: ").concat(r||1,";\n  ")}),S),A=(0,D.default)(k.E.nav).withConfig({displayName:"indexstyle__MenuContent",componentId:"sc-hs3dy7-1"})([""," max-height:inherit;overflow-y:auto;"," ",""],N.Z,(function(e){var n=e.theme;return"\n    backdrop-filter: ".concat(n.menus.blur.base,";\n    border-radius: ").concat(n.menus.border.radius.base,";\n  ")}),(0,K.PH)("0deg","#0000004D","#0000004D",0,100,"graylo")),H=(0,D.default)(k.E.div).withConfig({displayName:"indexstyle__MenuContentScroll",componentId:"sc-hs3dy7-2"})([""]),G=D.default.div.withConfig({displayName:"indexstyle__MenuItemContainerStyled",componentId:"sc-hs3dy7-3"})([""," overflow:hidden;"," "," &.focusing{","}&.activated{","}&.hovering{","}&:hover{","}a{&:hover{cursor:default;}}"],Y,(function(e){var n=e.first,t=e.theme;return n&&"\n    border-top: 1px solid var(--colors-graymd);\n    border-top-left-radius: ".concat(t.menus.border.radius.base,";\n    border-top-right-radius: ").concat(t.menus.border.radius.base,";\n  ")}),(function(e){var n=e.last,t=e.theme;return n&&"\n    border-bottom: 1px solid var(--colors-graymd);\n    border-bottom-left-radius: ".concat(t.menus.border.radius.base,";\n    border-bottom-right-radius: ").concat(t.menus.border.radius.base,";\n  ")}),L,W,_,_),U=D.default.div.withConfig({displayName:"indexstyle__ItemContent",componentId:"sc-hs3dy7-4"})(["border-top:1px solid transparent;border-bottom:1px solid transparent;&:hover{","}"," ",""],M,(function(e){return e.first&&"\n    margin-top: ".concat(2,"px;\n\n    &:hover {\n      border-top-color: transparent;\n    }\n  ")}),(function(e){return e.last&&"\n    margin-bottom: ".concat(2,"px;\n\n    &:hover {\n      border-bottom-color: transparent;\n    }\n  ")})),B=D.default.div.withConfig({displayName:"indexstyle__MenuItemStyled",componentId:"sc-hs3dy7-5"})(["",""],(function(e){var n=e.theme;return"\n    padding: ".concat(n.menus.padding.item.base,";\n  ")})),z=D.default.div.withConfig({displayName:"indexstyle__DividerContainer",componentId:"sc-hs3dy7-6"})([""," ",""],Y,(function(e){var n=e.theme;return"\n    padding-left: ".concat(n.menus.padding.item.base,";\n    padding-right: ").concat(n.menus.padding.item.base,";\n  ")})),X=D.default.div.withConfig({displayName:"indexstyle__DividerStyled",componentId:"sc-hs3dy7-7"})(["background-color:var(--colors-graymd);height:1px;margin-bottom:","px;margin-top:","px;margin-left:16px;margin-right:16px;"],2,2),V=t(85202),q=t(28598);function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=(0,d.createContext)(void 0),ee=function(e){var n=e.children,t=e.containerRef,o=(0,d.useState)({}),i=o[0],u=o[1],c=(0,d.useCallback)((function(e,n){u((function(t){return Q(Q({},t),{},(0,r.Z)({},e,n))}))}),[]),a=(0,d.useCallback)((function(e){u((function(n){return Object.keys(n).filter((function(n){return parseInt(n)<e})).reduce((function(e,t){return e[parseInt(t)]=n[parseInt(t)],e}),{})}))}),[]);return(0,q.jsxs)($.Provider,{value:{portals:i,addPortal:c,removePortalsFromLevel:a},children:[n,Object.entries(i).map((function(e){var n=(0,l.Z)(e,2),r=(n[0],n[1]);return(null==t?void 0:t.current)&&(0,V.createPortal)(r,t.current)}))]})},ne=function(){var e=(0,d.useContext)($);if(!e)throw new Error("usePortals must be used within a PortalProvider");return e},te=t(62876),re=["items","keyboardNavigationItemFilter","onClose","portalRef"];function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function le(e,n){var t=e.contained,r=e.first,o=e.item,i=e.last,v=e.small,f=e.handleMouseEnter,p=e.handleMouseLeave,h=e.defaultOpen,m=e.onClickCallback,b=(0,d.useRef)(null),y=(0,x.Z)(),g=(0,l.Z)(y,2),O=g[0],j=g[1],w=o.Icon,E=o.description,P=o.disabled,R=o.divider,Z=o.items,T=o.keyboardShortcuts,D=o.label,I=o.onClick,K=o.uuid,N=(0,d.useMemo)((function(){return(null==Z?void 0:Z.length)||0}),[Z]);if((0,d.useEffect)((function(){return!h&&n.current&&n.current.classList.contains("activated")&&(b.current=setTimeout((function(){var e;null===(e=n.current)||void 0===e||e.classList.remove("activated")}),1e3)),function(){b.current&&clearTimeout(b.current)}}),[h]),R)return(0,q.jsx)(z,{children:(0,q.jsx)(X,{})});var S=w?w({secondary:!0,size:v?12:void 0}):void 0,Y=I||null!=Z&&Z.length?void 0:"true",_=!(P||I||null!=Z&&Z.length||R),L=(0,q.jsx)(B,{children:(0,q.jsxs)(c.Z,{rowGap:4,children:[(0,q.jsxs)(c.Z,{alignItems:"center",columnGap:16,justifyContent:"space-between",templateColumns:["1fr","auto"].filter(Boolean).join(" "),templateRows:"1fr",children:[(0,q.jsxs)(c.Z,{alignItems:"center",columnGap:8,templateColumns:[S&&"auto","1fr"].filter(Boolean).join(" "),children:[S,(0,q.jsx)(s.Z,{bold:_,secondary:!!Y,small:v,children:("function"==typeof D?null==D?void 0:D():D)||K})]}),(0,q.jsxs)(c.Z,{columnGap:4,templateColumns:[T&&"auto",N>=1&&"auto"].filter(Boolean).join(" "),children:[T&&(0,q.jsx)(a.Z,{monospace:!0,small:!v,textGroup:T,xsmall:v}),N>=1&&(0,q.jsx)(C.TZ,{size:12})]})]}),E&&(0,q.jsx)(s.Z,{maxWidth:400,secondary:!0,small:!v,xsmall:v,children:"function"==typeof E?null==E?void 0:E():E})]})});return(0,q.jsx)(G,{className:h?"activated":"",contained:t,first:r,last:i,noHover:Y,onMouseEnter:function(e){j(),O((function(){return f(e)}),100)},onMouseLeave:function(e){j(),p&&O((function(){return null==p?void 0:p(e)}),100)},ref:n,children:(0,q.jsxs)(U,{first:r,last:i,noHover:Y,children:[!I&&L,I&&(0,q.jsx)(u.Z,{asLink:!0,disabled:P,motion:!0,onClick:function(e){e.preventDefault(),null==I||I(e,o,(function(){return m()}))},plain:!0,width:"100%",children:(0,q.jsx)(k.E.div,{variants:{closed:{opacity:1,x:-2},open:{opacity:1,x:0}},children:L})})]})})}var ue=d.forwardRef(le);function ce(e){var n=e.above,t=e.addPortal,r=e.children,o=e.contained,i=e.direction,l=void 0===i?T.T.RIGHT:i,u=e.directionPrevious,c=e.items,a=e.itemsRef,s=e.level,v=e.openItems,f=(e.parentItemRef,e.position),p=e.rects,h=e.removePortals,m=e.renderChildrenRefs,b=e.small,y=e.standardMenu,g=e.uuid,O=(0,d.useRef)(l),j=(0,d.useRef)(null),w=(0,d.useRef)(null),E=(0,d.useRef)(null),P=(0,d.useRef)(null),x=(0,d.useRef)(),k=(0,d.useMemo)((function(){return"menu-item-items-".concat(g)}),[g]),R=(0,d.useCallback)((function(e,r,i){var u,d;if((null==E||null===(u=E.current)||void 0===u?void 0:u.uuid)!==(null==e?void 0:e.uuid)){var v,f;if(null!=i&&i.event)null==i||null===(v=i.event)||void 0===v||v.stopPropagation(),null==i||null===(f=i.event)||void 0===f||f.preventDefault();var b=null==r||null===(d=r.current)||void 0===d?void 0:d.getBoundingClientRect(),w={left:null==b?void 0:b.left,top:null==b?void 0:b.top,width:null==b?void 0:b.width,height:null==b?void 0:b.height},P=s+1,x=(0,q.jsx)(ce,ie(ie({},i),{},{above:n,addPortal:t,contained:o,direction:O.current,directionPrevious:l,items:null==e?void 0:e.items,itemsRef:a,level:P,parentItemRef:r,position:w,rects:{bounding:null==p?void 0:p.bounding,container:w,offset:{left:0,top:-w.height}},removePortals:h,renderChildrenRefs:m,small:!0,standardMenu:y,uuid:"".concat(g,"-").concat(e.uuid)}));h(P),t(P,x,j),null==c||c.forEach((function(n){var t,r,o,i,l,u=null==a||null===(t=a.current)||void 0===t?void 0:t[null==n?void 0:n.uuid];(null==n?void 0:n.uuid)!==(null==e?void 0:e.uuid)?null==u||null===(r=u.current)||void 0===r||null===(o=r.classList)||void 0===o||o.remove("activated"):null==u||null===(i=u.current)||void 0===i||null===(l=i.classList)||void 0===l||l.add("activated")})),E.current=e}}),[y,g,t,h,m,n,o,O,p,l,a,s,c]),C=(0,d.useMemo)((function(){return(null==c?void 0:c.length)||0}),[c]),D=(0,d.useCallback)((function(){E.current=null,h(s+1)}),[s,h]);return(0,d.useEffect)((function(){if(window.getComputedStyle(j.current)&&j.current){var e,t,r,i,u,d,h,b,y,g=null!=p?p:{},k=g.container,C=g.bounding,K=g.offset,N=null==j||null===(e=j.current)||void 0===e?void 0:e.getBoundingClientRect(),S={height:null!==(t=null==f?void 0:f.height)&&void 0!==t?t:0,left:null!==(r=null==f?void 0:f.left)&&void 0!==r?r:0,top:null!==(i=null==f?void 0:f.top)&&void 0!==i?i:0,width:null!==(u=null==f?void 0:f.width)&&void 0!==u?u:0},Y=I.i,_=(C.left,C.width,C.top,C.height,null!==(d=null==N?void 0:N.height)&&void 0!==d?d:0),L=null!==(h=null==N?void 0:N.width)&&void 0!==h?h:0,W=null!==(b=null==K?void 0:K.left)&&void 0!==b?b:0,M=null!==(y=null==K?void 0:K.top)&&void 0!==y?y:0;if(o);else if(n);else{var F,A,H=0;if(T.T.LEFT===l)H-=null!=L?L:0;else if(s>=1)H+=(null!==(A=null==k?void 0:k.width)&&void 0!==A?A:0)+Y;if(S.left+H<=0&&T.T.LEFT===l){var G,U;if(0===s)H=-(null!==(G=null==k?void 0:k.width)&&void 0!==G?G:0);else H+=L+(null!==(U=null==k?void 0:k.width)&&void 0!==U?U:0)+Y;O.current=T.T.RIGHT}W+=H,M+=null!==(F=null==k?void 0:k.height)&&void 0!==F?F:0,M+=0===s?Y/2:0}S.left+=W,S.top+=M;var B=window.innerHeight;if(S.top+_>B&&(S.top=B-_),S.top<0&&(S.top=0),j.current.style.left="".concat(S.left,"px"),j.current.style.top="".concat(S.top,"px"),j.current.style.opacity="1",j.current.style.visibility="visible",j.current.style.zIndex="".concat(Z.bf+100),w.current=j.current.getBoundingClientRect(),(null==v?void 0:v.length)>=1){var z,X,V=null==v||null===(z=v[0])||void 0===z?void 0:z.row,q=null==c?void 0:c[V];if(q)R(q,null==a||null===(X=a.current)||void 0===X?void 0:X[null==q?void 0:q.uuid],{openItems:v.slice(1)})}m.current[s]={hideChildren:D,renderChildren:function(e,n){var t;R(n,null==a||null===(t=a.current)||void 0===t?void 0:t[null==n?void 0:n.uuid],{event:e})}}}var J=x.current;return function(){clearTimeout(J),P.current=null,E.current=null,x.current=null}}),[o,p,l,n,f,s,D,u,v,c,a,R,m,k,y,g]),(0,q.jsxs)(F,{contained:o?"true":void 0,ref:j,style:{left:0,opacity:0,top:0,visibility:"hidden",zIndex:-1},children:[(0,q.jsx)(A,{animate:"open",initial:s>0?"open":"closed",variants:{closed:{opacity:.75,scale:.95},open:{opacity:1,scale:1,transition:{duration:.03,ease:"linear"}}},children:(0,q.jsx)(H,{animate:"open",initial:1===s?"closed":"open",variants:{open:{transition:{delayChildren:.02,duration:.04,ease:"linear",staggerChildren:.04}}},children:C>=1&&(null==c?void 0:c.map((function(e,n){var t,r,i;(t=a.current)[r=e.uuid]||(t[r]=(0,d.createRef)());var l=a.current[e.uuid];return(0,q.jsx)("div",{style:{display:"grid",width:"100%"},children:(0,q.jsx)(ue,{contained:o,defaultOpen:(null==v||null===(i=v[0])||void 0===i?void 0:i.row)===n,first:0===n,handleMouseEnter:function(n){var t;D(),(null==e||null===(t=e.items)||void 0===t?void 0:t.length)>=1&&R(e,l,{event:n})},item:e,last:n===C-1,onClickCallback:function(){return h(0)},ref:l,small:b})},"menu-item-".concat(e.uuid,"-").concat(n))})))})}),r]})}function ae(e){var n=e.items,t=e.keyboardNavigationItemFilter,u=e.onClose,c=e.portalRef,a=(0,i.Z)(e,re),s=(0,d.useRef)(null),v=(0,d.useRef)(!1),f=(0,d.useRef)(null),p=(0,d.useRef)({}),h=(0,d.useRef)({}),m=(0,d.useRef)([]),b=ne(),y=b.addPortal,g=b.removePortalsFromLevel,O=(0,d.useCallback)((function(e){g(e),u&&(null==u||u(e)),delete h.current[e]}),[u,g]),j=(0,d.useCallback)((function(e,n,t){h.current[e]=t,y(e,n)}),[y]),w=(0,d.useCallback)((function(e){var n,t,r,i,l,c=e.target;(null===(n=[].concat((0,o.Z)(null!==(t=Object.values(null!==(r=null==h?void 0:h.current)&&void 0!==r?r:{}))&&void 0!==t?t:[]),(0,o.Z)(null!==(i=Object.values(null!==(l=null==p?void 0:p.current)&&void 0!==l?l:{}))&&void 0!==i?i:[])))||void 0===n?void 0:n.some((function(e){var n;return null==e||null===(n=e.current)||void 0===n?void 0:n.contains(c)})))||(e.stopPropagation(),O(0),u&&(null==u||u(0)))}),[u,O]),E=(0,d.useCallback)((function(e){var r=null==e?void 0:e.detail,i=r.position,c=r.previousPosition,a=function(e){var r=null,i=(0,o.Z)(null!=n?n:[]).filter(t);return null==e||e.forEach((function(e){var n,l,u;r=null===(n=i)||void 0===n?void 0:n[e],i=(0,o.Z)(null!==(l=null===(u=r)||void 0===u?void 0:u.items)&&void 0!==l?l:[]).filter(t)})),[r,i]},d=a(i),s=(0,l.Z)(d,1)[0],f=a(c),h=(0,l.Z)(f,1)[0],b=s,y=h;if(te.i.ESCAPE===e.key)O(0),u&&(null==u||u(0));else if(te.i.ENTER===e.key&&b&&null!=b&&b.onClick){var g,j;if(!v.current)v.current=!0,e.preventDefault(),null==b||b.onClick(ie(ie({},e),{},{target:null==p||null===(g=p.current)||void 0===g||null===(j=g[null==b?void 0:b.uuid])||void 0===j?void 0:j.current}),b,(function(){return O(0)}))}else if((null==b?void 0:b.uuid)!==(null==y?void 0:y.uuid)){var w,E,P,x,k,R,C,Z,T,D,I,K=null==p||null===(w=p.current)||void 0===w?void 0:w[null==b?void 0:b.uuid],N=null==p||null===(E=p.current)||void 0===E?void 0:E[null==h?void 0:h.uuid];if(null!=K&&K.current)null==K||null===(C=K.current)||void 0===C||C.focus(),null==K||null===(Z=K.current)||void 0===Z||null===(T=Z.classList)||void 0===T||T.add("hovering");if(null!=N&&N.current)null==N||null===(D=N.current)||void 0===D||null===(I=D.classList)||void 0===I||I.remove("hovering");var S=null!==(P=null==m||null===(x=m.current)||void 0===x?void 0:x[(null==i?void 0:i.length)-1])&&void 0!==P?P:{},Y=S.hideChildren,_=S.renderChildren;(null==b||null===(k=b.items)||void 0===k?void 0:k.length)>=1?te.i.ARROWLEFT===e.key?null==Y||Y():_&&_(e,b):(null==y||null===(R=y.items)||void 0===R?void 0:R.length)>=1&&(null==Y||Y())}}),[n,t,u,O]);return f.current=P(c,(0,r.Z)({},te.T.KEYDOWN,E)).dispatchCustomEvent,(0,d.useEffect)((function(){document.addEventListener("click",w);var e=s.current;return function(){h.current={},p.current={},v.current=!1,document.removeEventListener("click",w),clearTimeout(e)}}),[w]),(0,q.jsx)(ce,ie(ie({},a),{},{addPortal:j,items:n,itemsRef:p,level:0,removePortals:O,renderChildrenRefs:m,children:(0,q.jsx)("div",{ref:c})}))}var de=function(e){var n=(0,d.useRef)(null);return(0,q.jsx)(ee,{containerRef:n,children:(0,q.jsx)(R.M,{children:(0,q.jsx)(ae,ie(ie({},e),{},{portalRef:n}))})})},se=t(37084),ve=t(86735);function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function pe(e){var n=e.itemFilter,t=void 0===n?function(){return!0}:n,i=e.target,l=(0,d.useRef)(null),u=(0,d.useRef)(null),c=(0,d.useRef)(null),a=P("useKeyboardNavigation",(0,r.Z)({},te.T.SET_KEYBOARD_NAVIGATION_POSITION,(function(e){clearTimeout(c.current),c.current=setTimeout((function(){var n,t;u.current=[null],null==e||null===(n=e.detail)||void 0===n||null===(t=n.position)||void 0===t||t.forEach((function(e,n){var t;n>=1&&m({x:1}),null===(t=(0,ve.w6)(e))||void 0===t||t.forEach((function(){m({y:1})}))}))}),100)})),{baseEvent:j}).dispatchCustomEvent;var s=(0,se.Z)({target:i}),f=s.deregisterCommands,p=s.registerCommands;function h(){var e,n;if(null!=l&&l.current){var r=null,o=null===(e=null!=l&&l.current?null==l?void 0:l.current:[])||void 0===e?void 0:e.filter(t);return null==u||null===(n=u.current)||void 0===n||n.forEach((function(e,n){var i,l,u;if(null!==e){if(n>=1&&(null===(i=r)||void 0===i||null===(l=i.items)||void 0===l?void 0:l.length)>=1){var c,a,d,s=null===(c=null!==(a=null===(d=r)||void 0===d?void 0:d.items)&&void 0!==a?a:[])||void 0===c?void 0:c.filter(t);(null==s?void 0:s.length)>=1&&(o=s)}r=null===(u=o)||void 0===u?void 0:u[e]}else r=null})),{item:r,items:o}}}function m(e){var n,t,r,i=e.x,l=e.y,c=(0,o.Z)(null!==(n=u.current)&&void 0!==n?n:[]),d=null!==(t=h())&&void 0!==t?t:{},s=d.item,f=d.items;v.e.keyboard.navigation&&console.log("position.args",i,l);var p=null;if(null!=i&&i){var m;if(p=i>0?te.i.ARROWRIGHT:te.i.ARROWLEFT,i<0&&u.current.length>=2)u.current.pop();else if(i>0){var b,y=u.current[u.current.length-1],g=null==f?void 0:f[y];(null==g||null===(b=g.items)||void 0===b?void 0:b.length)>=1&&u.current.push(0)}v.e.keyboard.navigation&&console.log("position.x",(null===(m=u.current)||void 0===m?void 0:m.length)-1)}if(null!=l&&l){var O,j,w,E;p=l>0?te.i.ARROWDOWN:te.i.ARROWUP;var P=null!==(O=u.current[u.current.length-1])&&void 0!==O?O:l>0?-1:null!==(j=null==s||null===(w=s.items)||void 0===w?void 0:w.length)&&void 0!==j?j:0;P+=l;var x=null!==(E=null==f?void 0:f.length)&&void 0!==E?E:0;P<0?P=0:x>=1&&P>=x&&(P=x-1),u.current[u.current.length-1]=P,v.e.keyboard.navigation&&console.log("position.y",P)}v.e.keyboard.navigation&&console.log("position.end",u.current,c),a(te.T.KEYDOWN,{position:u.current,previousPosition:c,previousTarget:s,target:null===(r=h())||void 0===r?void 0:r.item},[p])}return(0,d.useEffect)((function(){return function(){return f()}}),[]),{itemsRef:l,registerItems:function(e,n){var t,o;l.current=e,u.current=(null==n||null===(t=n.position)||void 0===t?void 0:t.length)>0?null==n?void 0:n.position:[null],p(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({down:{handler:function(){return m({y:1})},predicate:{key:te.i.ARROWDOWN,metaKey:!1}},enter:{handler:function(){var e;a(te.T.KEYDOWN,{position:u.current,target:null===(e=h())||void 0===e?void 0:e.item},[te.i.ENTER])},predicate:{key:te.i.ENTER,metaKey:!1}},left:{handler:function(){return m({x:-1})},predicate:{key:te.i.ARROWLEFT,metaKey:!1}},right:{handler:function(){return m({x:1})},predicate:{key:te.i.ARROWRIGHT,metaKey:!1}},up:{handler:function(){return m({y:-1})},predicate:{key:te.i.ARROWUP,metaKey:!1}}},null!==(o=null==n?void 0:n.commands)&&void 0!==o?o:{}))},resetPosition:function(){u.current=[null]}}}var he=t(78050);function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ye(e){var n;return!(null!=e&&e.divider)&&(!(null==e||!e.onClick)||(null==e||null===(n=e.items)||void 0===n?void 0:n.length)>=1)}function ge(e){var n=e.container,t=e.containerRef,r=e.useAsStandardMenu,o=e.uuid,i=(0,d.useRef)(null),l=(0,d.useRef)(null),u=pe({itemFilter:ye,target:l}),c=u.itemsRef,a=u.registerItems,s=u.resetPosition,v=(0,d.useContext)(D.ThemeContext),f=function(){var e;return null!==(e=null==t?void 0:t.current)&&void 0!==e?e:n},p=(0,d.useMemo)((function(){return"context-menu-root-".concat(o)}),[o]);function h(e,n){var t;return e&&(null===(t=f()||n)||void 0===t?void 0:t.contains(e.target))}function m(e,n){null!=n&&n.conditionally&&e&&function(e){var n;return null==i||null===(n=i.current)||void 0===n?void 0:n.contains(e.target)}(e)||(null!=l&&l.current&&(l.current.unmount(),l.current=null),c.current=null,s())}function b(e,n,t){var u=null!=t?t:{},c=u.contained,d=u.handleEscape,s=u.openItems,p=u.position;if(c||!f()||!e||h(e)){null==e||e.preventDefault();null!=l&&l.current||(l.current=(0,he.createRoot)(i.current)),l.current.render((0,q.jsx)(D.ThemeProvider,{theme:v,children:(0,q.jsx)(de,be(be({},t),{},{contained:c,event:e,items:n,keyboardNavigationItemFilter:ye,openItems:s,position:null!=p?p:{left:null==e?void 0:e.pageX,top:null==e?void 0:e.pageY},small:!0,standardMenu:r,uuid:o}))})),a(n,be(be({},s?{position:null==s?void 0:s.map((function(e){return e.row}))}:{}),d?{commands:{escape:{handler:d,predicate:{key:te.i.ESCAPE}}}}:{}))}}return(0,d.useEffect)((function(){var e,n=function(e){var n=document.getElementById(p);!n||null!=n&&n.contains(e.target)||m(e)};return null===(e=document)||void 0===e||e.addEventListener("click",n),function(){var e;null===(e=document)||void 0===e||e.removeEventListener("click",n)}}),[r]),{contextMenu:(0,q.jsx)("div",{ref:i}),hideMenu:function(){var e;null==l||null===(e=l.current)||void 0===e||e.render([])},removeContextMenu:m,renderContextMenu:b,shouldPassControl:function(e){return 2===e.button&&e&&h(e)},showMenu:function(e,n){b(null,null!=e?e:c.current,n)},teardown:function(){var e=null==l?void 0:l.current;e&&e.unmount(),l.current=null}}}},11314:function(e,n,t){t.d(n,{P:function(){return l}});var r=t(9518),o=t(59886),i=(0,r.css)(["height:inherit;"," "," "," ",""],(function(e){var n=e.hideX,t=e.hideY,r=e.showX,o=e.showY;return"\n    overflow-x: ".concat(n?"hidden":r?"scroll":"auto",";\n    overflow-y: ").concat(t?"hidden":o?"scroll":"auto",";\n  ")}),(function(e){return e.hideXscrollbar&&"\n    // for Internet Explorer, Edge\n    -ms-overflow-style: none;\n    // for Firefox\n    scrollbar-width: none;\n    // for Chrome, Safari, and Opera\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  "}),(function(e){return e.hideYscrollbar&&"\n    // for Internet Explorer, Edge\n    -ms-overflow-style: none;\n    // for Firefox\n    scrollbar-width: none;\n    // for Chrome, Safari, and Opera\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  "}),(function(e){var n=e.theme.scrollbars,t=n.background,r=n.border,i=n.width;return"\n    ::-webkit-scrollbar {\n      height: ".concat(i.track,"px;\n      width: ").concat(i.track,"px;\n    }\n\n    ::-webkit-scrollbar-track {\n    }\n\n    ::-webkit-scrollbar-thumb {\n      ").concat(o.eR,"\n\n      background: ").concat(t.thumb.default,";\n      border-radius: ").concat(r.radius.thumb,";\n    }\n\n    ::-webkit-scrollbar-thumb:hover {\n      background: ").concat(t.thumb.hover,";\n    }\n\n    ::-webkit-scrollbar-corner {\n      background: ").concat(t.track.default,";\n    }\n\n    ::-webkit-scrollbar-track {\n      background: ").concat(t.track.default,";\n      border-radius: ").concat(r.radius.track,";\n    }\n\n    ::-webkit-scrollbar-track:hover {\n      background: ").concat(t.track.hover,";\n    }\n  ")})),l=r.default.div.withConfig({displayName:"scrollbars__InnerStyled",componentId:"sc-1dwvfjp-0"})([""]);n.Z=i},53860:function(e,n,t){t.d(n,{e:function(){return r}});var r={events:{handler:!1},hooks:{shadow:!1,withOnMount:!1},keyboard:{navigation:!1,shortcuts:!1}}},1856:function(e,n,t){var r=t(82684);n.Z=function(){var e=(0,r.useRef)(null),n=(0,r.useCallback)((function(n,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];e.current&&clearTimeout(e.current),e.current=setTimeout((function(){n.apply(void 0,o)}),t)}),[]);return[n,(0,r.useCallback)((function(){e.current&&(clearTimeout(e.current),e.current=null)}),[])]}}}]);