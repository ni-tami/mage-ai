(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3277],{84392:function(e,n,r){"use strict";r.d(n,{HF:function(){return i},L6:function(){return t}});var t,u=r(81132),o=r(10503);function i(e,n){var r=e.owner,i=e.roles,s=[{Icon:o.Vz,id:t.WORKSPACES,isSelected:function(){return t.WORKSPACES===n},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}];return(r||i===u.No.ADMIN)&&s.push({Icon:o.NO,id:t.USERS,isSelected:function(){return t.USERS===n},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),s.push({Icon:o.Zr,id:t.SETTINGS,isSelected:function(){return t.SETTINGS===n},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),s}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(t||(t={}))},3849:function(e,n,r){"use strict";r(82684);var t=r(1210),u=r(49125),o=r(84392),i=r(9736),s=r(28598);n.Z=function(e){var n=e.before,r=e.breadcrumbs,c=void 0===r?[]:r,a=e.children,f=e.errors,l=e.pageName,d=e.subheaderChildren,p=(0,i.PR)()||{};return(0,s.jsx)(t.Z,{before:n,beforeWidth:n?50*u.iI:0,breadcrumbs:c,errors:f,navigationItems:(0,o.HF)(p,l),subheaderChildren:d,title:"Workspaces",uuid:"workspaces/index",children:a})}},29273:function(e,n,r){"use strict";r.r(n);var t=r(77837),u=r(38860),o=r.n(u),i=(r(82684),r(34376)),s=r(41788),c=r(86673),a=r(20582),f=r(3849),l=r(49125),d=r(84392),p=r(28598);function b(){var e=(0,i.useRouter)();return(0,p.jsx)(f.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{label:function(){return"Users"},linkProps:{as:"/manage/users",href:"/manage/users"}},{bold:!0,label:function(){return"New"}}],pageName:d.L6.USERS,children:(0,p.jsx)(c.Z,{p:l.cd,children:(0,p.jsx)(a.Z,{hideFields:["roles"],newUser:!0,onSaveSuccess:function(n){e.push("/manage/users/[user]","/manage/users/".concat(null===n||void 0===n?void 0:n.id))},title:"Add new user",user:{}})})})}b.getInitialProps=function(){var e=(0,t.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=(0,s.Z)(b)},47272:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users/new",function(){return r(29273)}])},80022:function(e,n,r){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(n,{Z:function(){return t}})},15544:function(e,n,r){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}r.d(n,{Z:function(){return t}})},99177:function(e,n,r){"use strict";function t(e,n){return t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(e,n)}function u(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}r.d(n,{Z:function(){return u}})},93189:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(12539),u=r(80022);function o(e,n){if(n&&("object"===t(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}}},function(e){e.O(0,[844,1424,1005,3883,9774,2888,179],(function(){return n=47272,e(e.s=n);var n}));var n=e.O();_N_E=n}]);