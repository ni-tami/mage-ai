(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6997],{40625:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(82394),i=n(21831),o=n(26304),s=n(51774),u=n.n(s),c=n(28862),a=n(11611),l=n(51721),f=n.n(l),d=n(63747),p=n.n(d),h=n(82684),m=n(79047),v=n(77837),x=n(38860),w=n.n(x);function b(e){var t=e.children,r=e.loadEditorServices,i=(0,h.useRef)(0);return(0,h.useEffect)((function(){if(r&&0===i.current){var e=function(){var e=(0,v.Z)(w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4084),n.e(7563),n.e(3528),n.e(6392)]).then(n.bind(n,3528)).then((function(e){e.Manager.loadServices(),i.current=1}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}var t=function(){var e=(0,v.Z)(w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4084),n.e(7563),n.e(3528),n.e(6392)]).then(n.bind(n,3528)).then((function(e){e.Manager.dispose()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(){t()}}),[r]),t}var g=n(28598),y=["frameworkUUID","uuid"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=u()((function(){return Promise.all([n.e(3662),n.e(5443),n.e(7142),n.e(4084),n.e(5935),n.e(3334)]).then(n.bind(n,11615))}),{ssr:!1,loadableGenerated:{webpack:function(){return[11615]}}});var O=function(e){var t=e.frameworkUUID,n=e.uuid,r=(0,o.Z)(e,y),s=(0,h.useContext)(m.VY),u=s.header,l=s.page;return(0,h.useEffect)((function(){var e,r;t&&n&&((null==u?void 0:u.setHeader)&&(null==u||null===(e=u.setHeader)||void 0===e||e.call(u,{buildInterAppNavItems:function(e,t){var n=t.router;return[{Icon:c.IbL,onClick:function(){n.push({pathname:"/v2/pipelines/[slug]/builder/[framework]",query:{framework:"rag",slug:"rag1"}})},uuid:"builder"}].concat((0,i.Z)(null==e?void 0:e.filter((function(e){return"code"===e.uuid}))))},cacheKey:[t,n].join(":"),selectedNavItem:"builder",version:0})),(null==l?void 0:l.setPage)&&(null==l||null===(r=l.setPage)||void 0===r||r.call(l,{success:!0,title:"Ultra Mage"})))}),[t,n]),(0,g.jsx)(b,{loadEditorServices:!0,children:(0,g.jsx)("div",{className:[f().content,p().container].join(" "),children:(0,g.jsxs)(a.Z,{autoColumns:"auto",height:"inherit",templateRows:"auto 1fr auto",width:"100%",children:[(0,g.jsx)("div",{}),(0,g.jsxs)(a.Z,{autoRows:"auto",height:"inherit",templateColumns:"auto 1fr",width:"100%",children:[(0,g.jsx)("div",{}),(0,g.jsx)(E,P(P({},r),{},{executionFrameworkUUID:t,pipelineUUID:n}))]}),(0,g.jsx)("div",{})]})})})}},63747:function(e){e.exports={container:"PipelineBuilder_container__Vpu_6",expanded:"PipelineBuilder_expanded__kvweU",collapsed:"PipelineBuilder_collapsed__xSdow"}},51209:function(e,t,n){"use strict";n.d(t,{M:function(){return w}});var r=n(28598),i=n(82684),o=n(760),s=n(79493),u=n(40044),c=n(47348),a=n(49817);class l extends i.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:t}){const n=(0,i.useId)(),o=(0,i.useRef)(null),s=(0,i.useRef)({width:0,height:0,top:0,left:0}),{nonce:u}=(0,i.useContext)(a._);return(0,i.useInsertionEffect)((()=>{const{width:e,height:r,top:i,left:c}=s.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;const a=document.createElement("style");return u&&(a.nonce=u),document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${i}px !important;\n            left: ${c}px !important;\n          }\n        `),()=>{document.head.removeChild(a)}}),[t]),(0,r.jsx)(l,{isPresent:t,childRef:o,sizeRef:s,children:i.cloneElement(e,{ref:o})})}const d=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:s,presenceAffectsLayout:a,mode:l})=>{const d=(0,c.h)(p),h=(0,i.useId)(),m=(0,i.useMemo)((()=>({id:h,initial:t,isPresent:n,custom:s,onExitComplete:e=>{d.set(e,!0);for(const e of d.values())if(!e)return;o&&o()},register:e=>(d.set(e,!1),()=>d.delete(e))})),a?[Math.random()]:[n]);return(0,i.useMemo)((()=>{d.forEach(((e,t)=>d.set(t,!1)))}),[n]),i.useEffect((()=>{!n&&!d.size&&o&&o()}),[n]),"popLayout"===l&&(e=(0,r.jsx)(f,{isPresent:n,children:e})),(0,r.jsx)(u.O.Provider,{value:m,children:e})};function p(){return new Map}var h=n(26628),m=n(84746);var v=n(38313);const x=e=>e.key||"";const w=({children:e,custom:t,initial:n=!0,onExitComplete:u,exitBeforeEnter:c,presenceAffectsLayout:a=!0,mode:l="sync"})=>{(0,v.k)(!c,"Replace exitBeforeEnter with mode='wait'");const f=(0,i.useContext)(h.p).forceRender||(0,o.N)()[0],p=(0,s.t)(),w=function(e){const t=[];return i.Children.forEach(e,(e=>{(0,i.isValidElement)(e)&&t.push(e)})),t}(e);let b=w;const g=(0,i.useRef)(new Map).current,y=(0,i.useRef)(b),j=(0,i.useRef)(new Map).current,P=(0,i.useRef)(!0);var E;if((0,m.L)((()=>{P.current=!1,function(e,t){e.forEach((e=>{const n=x(e);t.set(n,e)}))}(w,j),y.current=b})),E=()=>{P.current=!0,j.clear(),g.clear()},(0,i.useEffect)((()=>()=>E()),[]),P.current)return(0,r.jsx)(r.Fragment,{children:b.map((e=>(0,r.jsx)(d,{isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:a,mode:l,children:e},x(e))))});b=[...b];const O=y.current.map(x),k=w.map(x),C=O.length;for(let e=0;e<C;e++){const t=O[e];-1!==k.indexOf(t)||g.has(t)||g.set(t,void 0)}return"wait"===l&&g.size&&(b=[]),g.forEach(((e,n)=>{if(-1!==k.indexOf(n))return;const i=j.get(n);if(!i)return;const o=O.indexOf(n);let s=e;if(!s){const e=()=>{g.delete(n);const e=Array.from(j.keys()).filter((e=>!k.includes(e)));if(e.forEach((e=>j.delete(e))),y.current=w.filter((t=>{const r=x(t);return r===n||e.includes(r)})),!g.size){if(!1===p.current)return;f(),u&&u()}};s=(0,r.jsx)(d,{isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:a,mode:l,children:i},x(i)),g.set(n,s)}b.splice(o,0,s)})),b=b.map((e=>{const t=e.key;return g.has(t)?e:(0,r.jsx)(d,{isPresent:!0,presenceAffectsLayout:a,mode:l,children:e},x(e))})),(0,r.jsx)(r.Fragment,{children:g.size?b:b.map((e=>(0,i.cloneElement)(e)))})}},760:function(e,t,n){"use strict";n.d(t,{N:function(){return s}});var r=n(82684),i=n(79493),o=n(94100);function s(){const e=(0,i.t)(),[t,n]=(0,r.useState)(0),s=(0,r.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,r.useCallback)((()=>o.Wi.postRender(s)),[s]),t]}},79493:function(e,t,n){"use strict";n.d(t,{t:function(){return o}});var r=n(82684),i=n(84746);function o(){const e=(0,r.useRef)(!1);return(0,i.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},66344:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(15544),i=n(61049);var o=n(30018);function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,s)}function s(){return(0,o.Z)(e,arguments,(0,r.Z)(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(s,e)},s(e)}}}]);