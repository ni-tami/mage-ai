(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{5508:function(e,n,t){"use strict";t.r(n);t(82684);var r=t(46042),o=t(94537),u=t(40062),i=t(30210),l=t(9518),c=t(9310),d=t(31237),s=t(28598);n.default=function(e){var n=e.base,t=void 0!==n&&n,a=e.children,v=e.main,f=e.router,h=e.theme,p=e.updateThemeSettings,m=new u.S;return(0,s.jsx)(l.ThemeProvider,{theme:null!=h?h:(0,d.gh)(),children:(0,s.jsx)(o.aM,{router:f,theme:h,updateThemeSettings:p,children:(0,s.jsx)(i.aH,{client:m,children:(0,s.jsx)(r.sp,{base:t,children:(0,s.jsx)(c.pn,{main:v,children:a})})})})})}},9310:function(e,n,t){"use strict";t.d(n,{Mg:function(){return u},AR:function(){return r},Jm:function(){return o},pn:function(){return C},pf:function(){return b}});var r,o,u,i,l=t(82684);!function(e){e.DOWN="down",e.LEFT="left",e.RIGHT="right",e.UP="up"}(r||(r={})),function(e){e.CENTER="center",e.END="end",e.START="start"}(o||(o={})),function(e){e.CENTER="center",e.END="end",e.START="start"}(u||(u={})),function(e){e.BLUR="blur",e.CLICK="click",e.ESCAPE="escape",e.LEAVE="leave"}(i||(i={}));var c=(0,l.createContext)(null),d=function(){var e=(0,l.useContext)(c);if(!e)throw new Error("useTooltip must be used within a TooltipProvider");return e},s=t(82394),a=t(85253),v=t.n(a),f=t(28598);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){var t,r,o,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=(t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop,{pageX:t.left+r,pageY:t.top+o,width:t.width,height:t.height}),c=l.pageX,d=l.pageY;c&&(c-=u),d&&(d-=i);var s=c,a=d+l.height;n.style.position="absolute",n.style.left="".concat(s,"px"),n.style.top="".concat(a,"px")}function g(e,n){var t=e.children,i=e.layout,c=e.offset,d=e.options,s=(e.optionsPrev,d.event),a=d.style,h=d.wrapperRef,g=i.align,E=void 0===g?u.START:g,w=i.justify,T=void 0===w?o.START:w,y=i.position,R=i.horizontalDirection,C=void 0===R?r.RIGHT:R,b=i.verticalDirection,O=void 0===b?r.UP:b;return(0,l.useEffect)((function(){if(null!=n&&n.current&&null!=h&&h.current){var e,t,i,l=null!=s?s:{},d=(l.pageX,l.pageY,null==n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect()),a=d.height,f=(d.left,d.top,d.width),p=null!==(t=null==h||null===(i=h.current)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==t?t:{},g=p.height,w=void 0===g?0:g,R=(p.left,p.top,p.width),b=void 0===R?0:R,j=window.innerWidth,x=window.innerHeight,L=0,P=0;E===u.START?L=r.RIGHT===C?0:-f:E===u.CENTER?L=-Math.abs(b-f)/2:E===u.END&&(L=r.LEFT===C?-(f-b):b),T===o.START?P=r.UP===O?-(a+w):-a:T===o.CENTER?P=-(w+(a-w)/2):T===o.END&&(P=0),(null==y?void 0:y.x)+L<0?L=0-y.x:(null==y?void 0:y.x)+L>j&&(L=j-y.x),(null==y?void 0:y.y)+P<0?P=0-y.y:(null==y?void 0:y.y)+P>x&&(P=x-y.y),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;m(e,n,t,r);var o=function(){m(e,n,t,r)};window.addEventListener("scroll",o)}(h.current,n.current,null==c?void 0:c.x,null==c?void 0:c.y),n.current.style.transform="translate(".concat(L,"px, ").concat(P,"px)"),n.current.classList.remove(v().hide)}}),[E,T]),(0,f.jsx)("div",{className:[v().tooltipContent,v().hide].join(" "),ref:n,style:p({},a),children:t})}var E=l.forwardRef(g),w=t(51774),T=t.n(w),y=t(78050),R=t(9518),C=function(e){var n=e.children,r=(e.main,(0,l.useContext)(R.ThemeContext)),o=(0,l.useRef)(null),u=(0,l.useRef)(null),d=(0,l.useRef)(null),s=(0,l.useRef)(null),a=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,l.useRef)(!1);function p(){clearTimeout(o.current),clearTimeout(u.current),o.current=null,u.current=null}function m(e){o.current=setTimeout((function(){p(),d.current&&d.current.render(null),a.current=null,v.current=null,h.current=!1}),null!=e?e:1e3)}return(0,l.useEffect)((function(){var e=function(e){var n,t,r,o,u,i=(null!==(n=a.current)&&void 0!==n?n:{}).wrapperRef;if(!i)return!1;var l=null!==(t=null==i||null===(r=i.current)||void 0===r?void 0:r.getBoundingClientRect())&&void 0!==t?t:{},c=l.height,d=l.left,s=l.top,f=l.width,h=null!==(o=null==v||null===(u=v.current)||void 0===u?void 0:u.getBoundingClientRect())&&void 0!==o?o:{},p=h.height,m=h.left,g=h.top,E=h.width,w=e.pageX,T=e.pageY;return w>=d&&w<=d+f&&T>=s&&T<=s+c||w>=m&&w<=m+E&&T>=g&&T<=g+p},n=function(n){var t,r,l,c;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(r=t.hideOn)&&void 0!==r&&r.length&&null!=a&&null!==(l=a.current)&&void 0!==l&&null!==(c=l.hideOn)&&void 0!==c&&c.includes(i.LEAVE)&&(e(n)||o.current||(u.current=null,m()))},t=function(n){var t,r;clearTimeout(u.current),null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(r=t.hideOn)&&void 0!==r&&r.includes(i.CLICK)&&(e(n)||m(0))},r=function(e){var n,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(n=a.current)&&void 0!==n&&null!==(t=n.hideOn)&&void 0!==t&&t.includes(i.ESCAPE)&&"Escape"===e.key&&m(0)};document.addEventListener("focusout",(function(e){var n,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(n=a.current)&&void 0!==n&&null!==(t=n.hideOn)&&void 0!==t&&t.includes(i.BLUR)&&([a.current.wrapperRef,v].some((function(n){return(null==n?void 0:n.current)&&!(null!=n&&n.current.contains(e.relatedTarget))}))&&m(0))}),!0),document.addEventListener("keydown",r,!0),document.addEventListener("mousedown",t,!0),document.addEventListener("mousemove",n,!0);var l=d.current,c=s.current;return function(){document.removeEventListener("focusout",n),document.removeEventListener("keydown",r),document.removeEventListener("mousedown",t),document.removeEventListener("mousemove",n),l&&l.unmount(),c&&document.body.removeChild(c)}}),[]),(0,f.jsx)(c.Provider,{value:{hideTooltip:m,showTooltip:function(e,n,o){p();var i=a.current;a.current=o;var l=T()((function(){return Promise.resolve().then(t.bind(t,5508))}),{loadableGenerated:{webpack:function(){return[5508]}}});null!=s&&s.current||(s.current=document.createElement("div"),s.current.className="tooltip-root",s.current.id=String(Number(new Date)),document.body.appendChild(s.current)),d.current||(d.current=(0,y.createRoot)(s.current)),u.current=setTimeout((function(){p(),d.current.render((0,f.jsx)(l,{theme:r,children:(0,f.jsx)(E,{layout:n,options:o,optionsPrev:i,ref:v,children:e})})),h.current=!0}),h.current?0:2e3)}},children:n})};function b(e){var n=e.align,t=e.children,r=e.hide,o=e.justify,u=e.position,c=e.showOnClick,s=e.showOnHover,a=e.style,v=e.tooltip,h=e.tooltipStyle,p=e.horizontalDirection,m=e.verticalDirection,g=d(),E=(g.hideTooltip,g.showTooltip),w=(0,l.useRef)(null),T=(0,l.useCallback)((function(e){var t=e.target;if(t instanceof HTMLElement){var r=t.getBoundingClientRect(),l=r.left,d=r.top,s=[i.BLUR,i.CLICK,i.ESCAPE];c||s.push(i.LEAVE),E(v,{align:n,horizontalDirection:p,justify:o,position:null!=u?u:{x:l,y:d},verticalDirection:m},{event:e,hideOn:s,renderOnMouseMove:!0,style:h,wrapperRef:w})}}),[n,o,u,c,E,v,h,p,m]);return r?t:(0,f.jsx)("div",{onClick:c?T:void 0,onMouseEnter:s||!c?T:void 0,ref:w,style:a,children:t})}},85253:function(e){e.exports={tooltipContent:"TooltipContent_tooltipContent__jwrVy",hide:"TooltipContent_hide__q3_7w"}}}]);