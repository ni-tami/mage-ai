(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2403],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var r=t(82394),i=t(21831),o=t(82684),c=t(47999),l=t(49894),s=t(93461),u=t(57384),a=t(41424),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),m=t(32063),y=t(85019),b=t(82531),v=t(66166),g=t(3055),j=t(49125),x=t(91427),w=t(24141);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n,t=e.after,r=e.afterHidden,p=e.afterWidth,Z=e.afterWidthOverride,_=e.before,S=e.beforeWidth,k=e.breadcrumbs,P=e.children,C=e.errors,I=e.headerMenuItems,H=e.headerOffset,N=e.mainContainerHeader,M=e.navigationItems,D=e.setErrors,T=e.subheaderChildren,E=e.title,z=e.uuid,A=(0,w.i)().width,q="dashboard_after_width_".concat(z),W="dashboard_before_width_".concat(z),R=(0,o.useRef)(null),B=(0,o.useState)(Z?p:(0,x.U2)(q,p)),F=B[0],G=B[1],U=(0,o.useState)(!1),L=U[0],Y=U[1],Q=(0,o.useState)(_?Math.max((0,x.U2)(W,S),13*j.iI):null),X=Q[0],J=Q[1],K=(0,o.useState)(!1),V=K[0],$=K[1],ee=(0,o.useState)(null)[1],ne=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,te=null===ne||void 0===ne?void 0:ne.projects,re=[];k?re.push.apply(re,(0,i.Z)(k)):(null===te||void 0===te?void 0:te.length)>=1&&re.push.apply(re,[{label:function(){var e;return null===(e=te[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return E}}]),(0,o.useEffect)((function(){null===R||void 0===R||!R.current||L||V||null===ee||void 0===ee||ee(R.current.getBoundingClientRect().width)}),[L,F,V,X,R,ee,A]),(0,o.useEffect)((function(){L||(0,x.t8)(q,F)}),[r,L,F,q]),(0,o.useEffect)((function(){V||(0,x.t8)(W,X)}),[V,X,W]);var ie=(0,v.Z)(p);return(0,o.useEffect)((function(){Z&&ie!==p&&G(p)}),[Z,p,ie]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{title:E}),(0,f.jsx)(a.Z,{breadcrumbs:re,menuItems:I,project:null===te||void 0===te?void 0:te[0],version:null===te||void 0===te||null===(n=te[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===M||void 0===M?void 0:M.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(y.Z,{navigationItems:M,showMore:!0})}),(0,f.jsx)(s.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:t,afterHeightOffset:g.Mz,afterHidden:r,afterMousedownActive:L,afterWidth:F,before:_,beforeHeightOffset:g.Mz,beforeMousedownActive:V,beforeWidth:d.k1+(_?X:0),headerOffset:H,hideAfterCompletely:!0,leftOffset:_?d.k1:null,mainContainerHeader:N,mainContainerRef:R,setAfterMousedownActive:Y,setAfterWidth:G,setBeforeMousedownActive:$,setBeforeWidth:J,children:[T&&(0,f.jsx)(h,{children:T}),P]})})]}),C&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,f.jsx)(l.Z,O(O({},C),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c},W:function(){return o}});var r=t(38626),i=t(3055),o=34*t(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},79585:function(e,n,t){"use strict";t.d(n,{DQ:function(){return a},HY:function(){return c},SA:function(){return d},WH:function(){return o},eC:function(){return s},fF:function(){return l},tC:function(){return u}});var r=t(81132),i=t(9736),o="Workspace",c="Preferences",l="Git settings",s="Users",u="Account",a="Profile",d=function(e){var n=e.owner,t=e.roles,d=e.project_access,f=[{linkProps:{href:"/settings/workspace/preferences"},uuid:c}];(n||t===r.No.ADMIN||0!==(2&d))&&f.push({linkProps:{href:"/settings/workspace/users"},uuid:s}),(!(0,i.YB)()||t<=r.No.EDITOR)&&f.push({linkProps:{href:"/settings/workspace/sync-data"},uuid:l});var p=[{items:f,uuid:o}];return(0,i.YB)()?p.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:a}],uuid:u}]):p}},30775:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r=t(1210),i=t(82394),o=t(12691),c=t.n(o),l=t(10919),s=t(86673),u=t(19711),a=t(38626),d=t(23831),f=t(49125),p=t(90880),h=(f.iI,a.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),m=a.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,p.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||d.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||d.Z.background).codeTextarea,";\n  ")})),y=t(28598),b=t(82684);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n=e.isItemSelected,t=e.sections;return(0,y.jsx)(s.Z,{py:f.Gg,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.items,r=e.title,i=e.uuid;return(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(h,{children:(0,y.jsx)(u.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():i})}),null===t||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.linkProps,o=e.onClick,s=e.uuid,u=t?t():s,a=(0,y.jsx)(m,{selected:null===n||void 0===n?void 0:n(g(g({},e),{},{uuidWorkspace:i})),children:u});return r?(0,b.createElement)(c(),g(g({},r),{},{key:s,passHref:!0}),(0,y.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:a})):(0,y.jsx)(l.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:o,preventDefault:!0,sameColorAsText:!0,children:a},s)}))]},i)}))})},x=t(2850),w=t(79585),Z=t(9736);var O=function(e){var n=e.after,t=e.afterHidden,i=e.children,o=e.uuidItemSelected,c=e.uuidWorkspaceSelected,l=(0,Z.PR)()||{};return(0,y.jsx)(r.Z,{after:n,afterHidden:!n||t,afterWidth:n?50*f.iI:0,afterWidthOverride:!0,before:(0,y.jsx)(x.M,{children:(0,y.jsx)(j,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return c===t&&o===n},sections:(0,w.SA)(l)})}),beforeWidth:x.W,title:"Settings",uuid:"settings/index",children:i})}},87372:function(e,n,t){"use strict";var r,i,o,c,l,s,u,a,d=t(82394),f=t(26304),p=t(26653),h=t(38626),m=t(33591),y=t(23831),b=t(2005),v=t(31012),g=t(19711),j=t(49125),x=t(86673),w=t(28598),Z=["children","condensed","inline","level","marketing","spacingBelow"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],g.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||y.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(b.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(b.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(b.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(b.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(b.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),k=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||y.Z.content).active,";\n  ")})),P=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],S,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),v.aQ),m.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),v.aQ),m.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),v.aQ)),C=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],S,v.MJ),I=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],S,m.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.sm(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.md(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.lg(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI),m.media.xl(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*j.iI,7*j.iI)),H=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],S,v.BL),N=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],S),M=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],S),D=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],S),T=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],S,(function(e){return 1===e.level&&"\n    ".concat(v.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(v.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),E=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,c=e.marketing,l=e.spacingBelow,s=(0,f.Z)(e,Z);i?n=T:0===Number(o)?n=P:1===Number(o)?n=c?I:C:2===Number(o)?n=H:3===Number(o)?n=N:4===Number(o)?n=M:5===Number(o)&&(n=D);var u=(0,w.jsxs)(n,_(_({},s),{},{level:o,children:[l&&(0,w.jsx)(x.Z,{mb:r?2:3,children:t}),!l&&t]}));return i?u:(0,w.jsx)(k,{children:u})};E.defaultProps={level:3,weightStyle:6},n.Z=E},10831:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r,i=t(77837),o=t(82394),c=t(75582),l=t(38860),s=t.n(l),u=t(82684),a=t(21764),d=t(83455),f=t(60328),p=t(38341),h=t(67971),m=t(87372),y=t(10919),b=t(41788),v=t(55378),g=t(30775),j=t(86673);!function(e){e.SSH="ssh",e.HTTPS="https"}(r||(r={}));var x=[{autoComplete:"remote_repo_link",label:"Remote repo url",required:!0,uuid:"remote_repo_link"},{autoComplete:"repo_path",label:"Local directory path",labelDescription:"Defaults to Python's os.getcwd() if omitted. Mage will create this local directory if it doesn't already exist.",uuid:"repo_path"}],w=[{autoComplete:"username",label:"Username",uuid:"username"},{autoComplete:"email",label:"Email",uuid:"email"},{autoComplete:"ssh_public_key",label:"SSH public key in base64",labelDescription:'Run "cat ~/.ssh/id_rsa.pub | base64 | tr -d \\\\n && echo" in terminal to get base64 encoded public key and paste the result here. The key will be stored as a Mage secret.',type:"password",uuid:"ssh_public_key"},{autoComplete:"ssh_private_key",label:"SSH private key in base64",labelDescription:'Follow same steps as the public key, but run "cat ~/.ssh/id_rsa | base64 | tr -d \\\\n && echo" instead. The key will be stored as a Mage secret.',type:"password",uuid:"ssh_private_key"}],Z=[{autoComplete:"username",label:"Username",required:!0,uuid:"username"},{autoComplete:"email",label:"Email",required:!0,uuid:"email"},{autoComplete:"access_token",label:"Access token",labelDescription:"Add your Git access token to authenticate with your provided username. The access token will be stored as a Mage secret.",required:!0,type:"password",uuid:"access_token"}],O=[{autoComplete:"branch",label:"Branch name",required:!0,uuid:"branch"}],_=t(19711),S=t(82944),k=t(82531),P=t(49125),C=t(79585),I=t(96510),H=t(28598);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(){var e=k.ZP.syncs.list().data,n=(0,u.useState)(null),t=n[0],i=n[1],l=(0,u.useState)(null),s=l[0],b=l[1],N=(0,u.useState)(null),D=N[0],T=N[1],E=(0,u.useState)(null),z=E[0],A=E[1];(0,u.useEffect)((function(){if(e){var n,t=null===e||void 0===e||null===(n=e.syncs)||void 0===n?void 0:n[0];b(null===t||void 0===t?void 0:t.user_git_settings),i(t),A(!(null===t||void 0===t||!t.branch))}}),[e]);var q=(0,d.Db)(k.ZP.syncs.useCreate(),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(e){var n=e.sync;n&&(i(n),window.location.reload(),a.Am.success("Sync saved",{position:a.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"}))},onErrorCallback:function(e){var n=e.error.exception;return T(n)}})}}),W=(0,c.Z)(q,2),R=W[0],B=W[1].isLoading,F=(0,d.Db)(k.ZP.syncs.useUpdate("git"),{onSuccess:function(e){return(0,I.wD)(e,{callback:function(e){e.sync&&a.Am.success("Success!",{position:a.Am.POSITION.BOTTOM_RIGHT,toastId:"data_sync_success"})},onErrorCallback:function(e){var n=e.error.exception;return T(n)}})}}),G=(0,c.Z)(F,2),U=G[0],L=G[1].isLoading,Y=(0,u.useMemo)((function(){return(null===t||void 0===t?void 0:t.auth_type)||r.SSH}),[null===t||void 0===t?void 0:t.auth_type]),Q=(0,u.useMemo)((function(){return Y===r.HTTPS?Z:w}),[Y]),X=k.ZP.statuses.list().data,J=(0,u.useMemo)((function(){var e,n;return null===X||void 0===X||null===(e=X.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.require_user_authentication}),[X]),K=(0,u.useMemo)((function(){var e=i,n=t;return J&&(e=b,n=s),(0,H.jsx)("form",{children:Q.map((function(t){var r,i=t.autoComplete,c=t.disabled,l=t.label,s=t.labelDescription,u=t.required,a=t.type,d=t.uuid;return(0,H.jsxs)(j.Z,{mt:2,children:[s&&(0,H.jsx)(j.Z,{mb:1,children:(0,H.jsx)(_.ZP,{small:!0,children:s})}),(0,H.jsx)(S.Z,{autoComplete:i,disabled:c,label:l,onChange:function(n){e((function(e){return M(M({},e),{},(0,o.Z)({},d,n.target.value))}))},primary:!0,required:u,setContentOnMount:!0,type:a,value:(null===(r=n)||void 0===r?void 0:r[d])||""})]},d)}))})}),[Q,J,b,i,t,s]);return(0,H.jsx)(g.Z,{uuidItemSelected:C.fF,uuidWorkspaceSelected:C.WH,children:(0,H.jsxs)(j.Z,{p:P.cd,style:{width:"600px"},children:[(0,H.jsx)(m.Z,{children:"Git repository settings"}),(0,H.jsx)(j.Z,{mt:1,children:(0,H.jsx)(_.ZP,{bold:!0,children:"Authentication type"})}),(0,H.jsx)(j.Z,{mt:1,children:(0,H.jsx)(v.Z,{compact:!0,label:"Authentication type",onChange:function(e){var n=e.target.value;i((function(e){return M(M({},e),{},{auth_type:n})}))},value:Y,children:Object.entries(r).map((function(e){var n=(0,c.Z)(e,2),t=n[0],r=n[1];return(0,H.jsx)("option",{value:r,children:t},r)}))})}),(0,H.jsx)(j.Z,{mt:P.Mq,children:Y===r.SSH&&(0,H.jsxs)(_.ZP,{bold:!0,children:["You will need to ",(0,H.jsx)(y.Z,{href:"https://docs.mage.ai/developing-in-the-cloud/setting-up-git",openNewWindow:!0,children:"set up your SSH key"})," if you have not done so already."]})}),(0,H.jsx)("form",{children:x.map((function(e){var n=e.autoComplete,r=e.disabled,c=e.label,l=e.labelDescription,s=e.required,u=e.type,a=e.uuid;return(0,H.jsxs)(j.Z,{mt:2,children:[l&&(0,H.jsx)(j.Z,{mb:1,children:(0,H.jsx)(_.ZP,{small:!0,children:l})}),(0,H.jsx)(S.Z,{autoComplete:n,disabled:r,label:c,onChange:function(e){i((function(n){return M(M({},n),{},(0,o.Z)({},a,e.target.value))}))},primary:!0,required:s,setContentOnMount:!0,type:u,value:(null===t||void 0===t?void 0:t[a])||""})]},a)}))}),(0,H.jsx)(j.Z,{mt:P.Mq,children:(0,H.jsxs)(h.Z,{alignItems:"center",children:[(0,H.jsx)(j.Z,{mr:1,children:(0,H.jsx)(p.Z,{checked:!!z,onClick:function(){return A((function(e){var n=!e;return n||i((function(e){return M(M({},e),{},{branch:null,sync_on_pipeline_run:!1})})),n}))}})}),(0,H.jsxs)(_.ZP,{bold:!0,children:["Use ",(0,H.jsx)(y.Z,{bold:!0,href:"https://docs.mage.ai/production/data-sync/git#git-sync",openNewWindow:!0,children:"Git Sync"})," (Click link for more information)"]})]})}),z?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(j.Z,{mt:P.Mq,children:(0,H.jsx)(_.ZP,{bold:!0,children:"Sync with a specified branch when requested or on every trigger run. These settings will be saved at the project level."})}),(0,H.jsx)("form",{children:O.map((function(e){var n=e.autoComplete,r=e.disabled,c=e.label,l=e.required,s=e.type,u=e.uuid;return(0,H.jsx)(j.Z,{mt:2,children:(0,H.jsx)(S.Z,{autoComplete:n,disabled:r,label:c,onChange:function(e){i((function(n){return M(M({},n),{},(0,o.Z)({},u,e.target.value))}))},primary:!0,required:l,setContentOnMount:!0,type:s,value:(null===t||void 0===t?void 0:t[u])||""})},u)}))}),(0,H.jsx)(h.Z,{alignItems:"center",children:(0,H.jsx)(j.Z,{mt:2,children:(0,H.jsx)(p.Z,{checked:null===t||void 0===t?void 0:t.sync_on_pipeline_run,label:"Sync before each trigger run",onClick:function(){i((function(e){return M(M({},e),{},{sync_on_pipeline_run:!(null!==t&&void 0!==t&&t.sync_on_pipeline_run)})}))}})})}),(0,H.jsx)(j.Z,{mt:P.Mq,children:(0,H.jsx)(_.ZP,{bold:!0,children:"Configure the Git authentication credentials that will be used to sync with the specified Git repository."})}),(0,H.jsx)("form",{children:Q.map((function(e){var n=e.autoComplete,r=e.disabled,c=e.label,l=e.labelDescription,s=e.required,u=e.type,a=e.uuid;return(0,H.jsxs)(j.Z,{mt:2,children:[l&&(0,H.jsx)(j.Z,{mb:1,children:(0,H.jsx)(_.ZP,{small:!0,children:l})}),(0,H.jsx)(S.Z,{autoComplete:n,disabled:r,label:c,onChange:function(e){i((function(n){return M(M({},n),{},(0,o.Z)({},a,e.target.value))}))},primary:!0,required:s,setContentOnMount:!0,type:u,value:(null===t||void 0===t?void 0:t[a])||""})]},a)}))})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(j.Z,{mt:P.Mq,children:(0,H.jsx)(_.ZP,{bold:!0,children:"These fields are required to help Mage configure your Git settings. These settings will be specific to your user."})}),K]}),(0,H.jsx)(j.Z,{mt:2,children:(0,H.jsx)(f.Z,{loading:B,onClick:function(){return R({sync:M(M({},t),{},{user_git_settings:s})})},primary:!0,children:"Save repository settings"})}),D&&(0,H.jsx)(j.Z,{mt:1,children:(0,H.jsx)(_.ZP,{danger:!0,children:D})}),z&&(0,H.jsxs)(j.Z,{mt:P.HN,children:[(0,H.jsx)(m.Z,{children:"Synchronize code from remote repository"}),(0,H.jsxs)(j.Z,{mt:1,children:[(0,H.jsxs)(_.ZP,{children:["Running the sync from this page will run a one time sync with the remote repository.",(0,H.jsx)("br",{}),"This may ",(0,H.jsx)(_.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," your existing data, so make sure you\u2019ve committed or backed up your current changes."]}),(0,H.jsx)(j.Z,{mt:2}),(0,H.jsxs)(_.ZP,{children:["Reset will tell Mage to try to clone your repository from remote. This will also ",(0,H.jsx)(_.ZP,{bold:!0,danger:!0,inline:!0,children:"overwrite"})," all your local changes and reset any settings you may have configured for your local Git repo. This may be helpful if you are having issues syncing your repository."]})]}),(0,H.jsx)(j.Z,{mt:2,children:(0,H.jsxs)(h.Z,{children:[(0,H.jsx)(f.Z,{loading:L,onClick:function(){return U({sync:{action_type:"sync_data"}})},warning:!0,children:"Synchronize code"}),(0,H.jsx)(j.Z,{ml:2}),(0,H.jsx)(f.Z,{danger:!0,loading:L,onClick:function(){return U({sync:{action_type:"reset"}})},children:"Reset repository"})]})})]})]})})}D.getInitialProps=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var T=(0,b.Z)(D)},37056:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/sync-data",function(){return t(10831)}])},80022:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},15544:function(e,n,t){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},99177:function(e,n,t){"use strict";function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}t.d(n,{Z:function(){return i}})},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(12539),i=t(80022);function o(e,n){if(n&&("object"===r(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}}},function(e){e.O(0,[844,1424,1005,9774,2888,179],(function(){return n=37056,e(e.s=n);var n}));var n=e.O();_N_E=n}]);