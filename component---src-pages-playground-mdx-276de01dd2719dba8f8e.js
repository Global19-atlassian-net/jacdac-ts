(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{DUkB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return w})),n.d(t,"default",(function(){return V}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var a=n("q1tI"),o=n.n(a),r=n("7ljp"),i=n("9Dj+"),s=n("wx14"),c=n("Ff2n"),d=n("iuhU"),l=n("H2TA");var u=a.createContext({}),m=a.forwardRef((function(e,t){var n=e.children,o=e.classes,r=e.className,i=e.component,l=void 0===i?"ul":i,m=e.dense,p=void 0!==m&&m,b=e.disablePadding,v=void 0!==b&&b,f=e.subheader,g=Object(c.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),y=a.useMemo((function(){return{dense:p}}),[p]);return a.createElement(u.Provider,{value:y},a.createElement(l,Object(s.a)({className:Object(d.a)(o.root,r,p&&o.dense,!v&&o.padding,f&&o.subheader),ref:t},g),f,n))})),p=Object(l.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(m),b=n("VD++");n("V+eJ");var v=n("bfFb"),f=n("i8i4"),g="undefined"==typeof window?a.useEffect:a.useLayoutEffect,y=a.forwardRef((function(e,t){var n=e.alignItems,o=void 0===n?"center":n,r=e.autoFocus,i=void 0!==r&&r,l=e.button,m=void 0!==l&&l,p=e.children,y=e.classes,O=e.className,j=e.component,h=e.ContainerComponent,E=void 0===h?"li":h,C=e.ContainerProps,x=(C=void 0===C?{}:C).className,N=Object(c.a)(C,["className"]),k=e.dense,T=void 0!==k&&k,I=e.disabled,w=void 0!==I&&I,P=e.disableGutters,S=void 0!==P&&P,V=e.divider,D=void 0!==V&&V,L=e.focusVisibleClassName,B=e.selected,M=void 0!==B&&B,R=Object(c.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),A=a.useContext(u),F={dense:T||A.dense||!1,alignItems:o},G=a.useRef(null);g((function(){i&&G.current&&G.current.focus()}),[i]);var X,$,H=a.Children.toArray(p),J=H.length&&(X=H[H.length-1],$=["ListItemSecondaryAction"],a.isValidElement(X)&&-1!==$.indexOf(X.type.muiName)),q=a.useCallback((function(e){G.current=f.findDOMNode(e)}),[]),z=Object(v.a)(q,t),U=Object(s.a)({className:Object(d.a)(y.root,O,F.dense&&y.dense,!S&&y.gutters,D&&y.divider,w&&y.disabled,m&&y.button,"center"!==o&&y.alignItemsFlexStart,J&&y.secondaryAction,M&&y.selected),disabled:w},R),W=j||"li";return m&&(U.component=j||"div",U.focusVisibleClassName=Object(d.a)(y.focusVisible,L),W=b.a),J?(W=U.component||j?W:"div","li"===E&&("li"===W?W="div":"li"===U.component&&(U.component="div")),a.createElement(u.Provider,{value:F},a.createElement(E,Object(s.a)({className:Object(d.a)(y.container,x),ref:z},N),a.createElement(W,U,H),H.pop()))):a.createElement(u.Provider,{value:F},a.createElement(W,Object(s.a)({ref:z},U),H))})),O=Object(l.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(y),j=n("ofer"),h=a.forwardRef((function(e,t){var n=e.children,o=e.classes,r=e.className,i=e.disableTypography,l=void 0!==i&&i,m=e.inset,p=void 0!==m&&m,b=e.primary,v=e.primaryTypographyProps,f=e.secondary,g=e.secondaryTypographyProps,y=Object(c.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),O=a.useContext(u).dense,h=null!=b?b:n;null==h||h.type===j.a||l||(h=a.createElement(j.a,Object(s.a)({variant:O?"body2":"body1",className:o.primary,component:"span",display:"block"},v),h));var E=f;return null==E||E.type===j.a||l||(E=a.createElement(j.a,Object(s.a)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},g),E)),a.createElement("div",Object(s.a)({className:Object(d.a)(o.root,r,O&&o.dense,p&&o.inset,h&&E&&o.multiline),ref:t},y),h,E)})),E=Object(l.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(h),C=function(e){return o.a.createElement(O,{key:e.device.id},o.a.createElement(E,{primary:e.device.shortId}))},x=(n("VRzm"),n("CX2u"),n("2Qkp")),N=n("dXH2");var k=n("uZH9"),T=n("OukM"),I=function(){var e=Object(a.useContext)(x.a),t=e.bus,n=e.connectionState,r=function(e,t){var n=Object(a.useContext)(x.a).bus,o=Object(a.useState)(!1),r=o[0],i=o[1],s=Object(a.useState)(null),c=s[0],d=s[1],l=Object(a.useState)(null),u=l[0],m=l[1],p=Object(a.useCallback)((function(){return i(!0),d(null),m(null),Object(N.a)(n,e).then((function(e){return d(e)})).catch((function(e){return m(e)})).finally((function(){return i(!1)}))}),(null==t?void 0:t.deps)||[]);return Object(a.useEffect)((function(){p()}),[p]),{data:null==c?void 0:c.data,loading:r,error:u,variables:null==t?void 0:t.variables}}("{\n        devices {\n            id\n            deviceId\n            shortId\n            services {\n                name\n            }\n        }\n    }",{deps:[function(e,t){var n=Object(a.useState)(void 0),o=n[0],r=n[1];return Object(a.useEffect)((function(){return e.subscribe(t,(function(e){return r(e)}))})),o}(t,T.o)]}),i=r.loading,s=r.error,c=r.data;return o.a.createElement(p,{component:"nav","aria-label":"devices"},i&&o.a.createElement(O,null,o.a.createElement(E,{primary:"loading..."})),s&&o.a.createElement(O,null,o.a.createElement(E,{primary:"error!"})),c&&!c.devices.length&&o.a.createElement(O,null,o.a.createElement(E,{primary:"No device detected..."})),c&&c.devices.map((function(e){return o.a.createElement(C,{device:e})})),n==k.b.Disconnected&&o.a.createElement(O,null,o.a.createElement(E,{primary:"Connect to see devices"})))};var w={},P={_frontmatter:w},S=i.a;function V(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(S,Object.assign({},P,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(I,{mdxType:"DeviceList"}))}V.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-playground-mdx-276de01dd2719dba8f8e.js.map