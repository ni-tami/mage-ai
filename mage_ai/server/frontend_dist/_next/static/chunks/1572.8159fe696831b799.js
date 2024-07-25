"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1572],{61572:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(77837),u=t(82394),o=t(38860),c=t.n(o),i=t(82684),l=t(18735),a=t(75582);function s(e,n){Object.entries(n).forEach((function(n){var t=(0,a.Z)(n,2),r=t[0],u=t[1];r in e&&e[r]((function(n){return u(e,n)}))}))}function f(e,n){Object.entries(n).forEach((function(n){var t=(0,a.Z)(n,2),r=t[0],u=t[1];r in e&&e[r]((function(n){return u(e,n)}))}))}function d(e,n,t){var r;null===(r=null!=t?t:[])||void 0===r||r.forEach((function(t){var r;n&&(null==n||null===(r=n.addAction)||void 0===r||r.call(n,t(e)))}))}var p=t(83455),v=t(22271),m=t(89706);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e,n,u){var o,l=(0,i.useRef)(!1),s=(0,i.useRef)(null),f=(0,i.useState)(null),d=f[0],h=f[1],b=(0,i.useState)({languageServer:null==u||null===(o=u.languageServer)||void 0===o||!o.enabled,workspace:!1,wrapper:!1}),O=b[0],y=b[1],w=null!=u?u:{},j=w.languageServer,P=w.workspace,C=w.wrapper,k=(0,p.Db)((function(e){return v.ZP.browser_items.listAsync(g({exclude_pattern:m.I1,include_pattern:encodeURIComponent(String(m.d2))},e))})),E=(0,a.Z)(k,1)[0],x=(0,i.useCallback)((function(e,n){return E(n).then((function(n){var t=n.data.browser_items;return e(t)}))}),[]);return(0,i.useEffect)((function(){if(null==l||!l.current){var o=function(){var o=(0,r.Z)(c().mark((function r(){var o,i;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l.current=!0,r.next=3,t.e(3528).then(t.bind(t,3528));case 3:return o=r.sent,i=o.Manager,s.current=i.getInstance(e),r.next=8,s.current.initialize(n,g(g(g({},u),null!=j&&j.enabled?{languageServer:g(g({},j),{},{onComplete:function(){y((function(e){return g(g({},e),{},{languageServer:!0})}))}})}:{}),{},{workspace:g(g({},P),{},{onComplete:function(){y((function(e){return g(g({},e),{},{workspace:!0})}))},options:{fetch:x}}),wrapper:g(g({},C),{},{onComplete:function(){var e,n,t;(y((function(e){return g(g({},e),{},{wrapper:!0})})),null!=u&&null!==(e=u.wrapper)&&void 0!==e&&e.onComplete)&&(null==u||null===(n=u.wrapper)||void 0===n||null===(t=n.onComplete)||void 0===t||t.call(n))}})}));case 8:case"end":return r.stop()}}),r)})));return function(){return o.apply(this,arguments)}}();o()}return function(){s.current=null}}),[]),(0,i.useEffect)((function(){null!=s&&s.current&&!d&&Object.values(O).every((function(e){return e}))&&h(null==s?void 0:s.current)}),[O,d]),d},O=t(9518),y=t(59886),w=O.default.div.withConfig({displayName:"indexstyle__ContainerStyled",componentId:"sc-1833csf-0"})(["height:100%;overflow:hidden;width:100%;&.mounted{.ide-container{","}.ide-loading{display:none;}}"],(0,y.FL)("45deg","#6B50D71A","#FF141A4D",30,100)),j=O.default.div.withConfig({displayName:"indexstyle__IDEStyled",componentId:"sc-1833csf-1"})(["background-color:",";font-family:",";",""],(function(e){return e.theme.ide.background.color.base}),(function(e){return e.theme.fonts.family.monospace.regular}),(function(e){return e.hideDuplicateMenuItems&&'\n    /*\n     * The (n + 10) assumes a specific number of items in the block editor context\n     * menu. This includes "Run selected block", "Change All Occurrences", "Cut",\n     * "Copy", "Paste", "Command Palette", and 3 dividers. The 10th item from the\n     * bottom and higher are hidden to avoid duplicate shortcut items in the\n     * context menu.\n     */\n    .monaco-menu li.action-item:nth-last-child(n + 10) {\n      display: none;\n    }\n  '})),P=t(28598);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=function(e){var n=e.configurations,t=e.containerClassName,u=e.editorClassName,o=e.editorActions,a=e.eventListeners,p=e.onMountEditor,v=e.persistManagerOnUnmount,m=e.persistResourceOnUnmount,h=e.resource,g=e.style,O=e.theme,y=e.uuid,C=(0,i.useRef)(null),E=(0,i.useRef)(null),x=(0,i.useRef)(null),D=(0,i.useRef)(null),S=(0,i.useRef)(null),_=(0,i.useMemo)((function(){return{options:{configurations:k(k({},n),{},{theme:O})}}}),[n,O]),R=b(y,h,{wrapper:_});return(0,i.useEffect)((function(){if(null!=C&&C.current&&!D.current&&R){var e=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D.current=R,e.next=3,R.start(C.current);case 3:R.isUsingDiffEditor()?(E.current=R.getDiffEditor(),null!=E&&E.current&&s(null==E?void 0:E.current,a)):(x.current=R.getEditor(),setTimeout((function(){null!=x&&x.current&&(f(null==x?void 0:x.current,a),d(R.getMonaco(),null==x?void 0:x.current,o),p&&(null==p||p(x.current)))}),1e3));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}var n=S.current;R&&n&&!n.classList.contains("mounted")&&n&&n.classList.add("mounted");var t=null==D?void 0:D.current;return function(){t&&(m||t.closeResource(),v||(t.dispose(),E.current=null,x.current=null,D.current=null))}}),[a,o,R,p,v,m]),(0,P.jsxs)(w,{ref:S,children:[(0,P.jsx)(l.Z,{className:"ide-loading"}),(0,P.jsx)(j,{className:["ide-container",null!=t?t:""].filter(Boolean).join(" "),children:(0,P.jsx)("div",{className:u,ref:C,style:null!=g?g:{height:"100vh"}})}),(0,P.jsx)("div",{id:"monaco-suggest-application-root-".concat(y)})]})}}}]);