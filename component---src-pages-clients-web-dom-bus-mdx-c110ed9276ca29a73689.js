(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{aSOY:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return J})),t.d(a,"default",(function(){return q}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var n=t("q1tI"),s=t.n(n),c=t("7ljp"),o=t("9Dj+"),p=(t("V+eJ"),t("8+KV"),t("KQm4")),b=t("wx14"),r=(t("17x9"),t("bv9d"));var i=function(e){var a=function(a){var t=e(a);return a.css?Object(b.a)(Object(b.a)({},Object(r.a)(t,e(Object(b.a)({theme:a.theme},a.css)))),function(e,a){var t={};return Object.keys(e).forEach((function(n){-1===a.indexOf(n)&&(t[n]=e[n])})),t}(a.css,[e.filterProps])):t};return a.propTypes={},a.filterProps=["css"].concat(Object(p.a)(e.filterProps)),a};t("DNiP");var m=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];var n=function(e){return a.reduce((function(a,t){var n=t(e);return n?Object(r.a)(a,n):a}),{})};return n.propTypes={},n.filterProps=a.reduce((function(e,a){return e.concat(a.filterProps)}),[]),n},j=(t("LK8F"),t("KKXr"),t("rePB")),O=t("LybE");function l(e,a){return a&&"string"==typeof a?a.split(".").reduce((function(e,a){return e&&e[a]?e[a]:null}),e):null}var N=function(e){var a=e.prop,t=e.cssProperty,n=void 0===t?e.prop:t,s=e.themeKey,c=e.transform,o=function(e){if(null==e[a])return null;var t=e[a],o=l(e.theme,s)||{};return Object(O.a)(e,t,(function(e){var a;return"function"==typeof o?a=o(e):Array.isArray(o)?a=o[e]||e:(a=l(o,e)||e,c&&(a=c(a))),!1===n?a:Object(j.a)({},n,a)}))};return o.propTypes={},o.filterProps=[a],o};function u(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var g=m(N({prop:"border",themeKey:"borders",transform:u}),N({prop:"borderTop",themeKey:"borders",transform:u}),N({prop:"borderRight",themeKey:"borders",transform:u}),N({prop:"borderBottom",themeKey:"borders",transform:u}),N({prop:"borderLeft",themeKey:"borders",transform:u}),N({prop:"borderColor",themeKey:"palette"}),N({prop:"borderRadius",themeKey:"shape"})),d=m(N({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),N({prop:"display"}),N({prop:"overflow"}),N({prop:"textOverflow"}),N({prop:"visibility"}),N({prop:"whiteSpace"})),k=m(N({prop:"flexBasis"}),N({prop:"flexDirection"}),N({prop:"flexWrap"}),N({prop:"justifyContent"}),N({prop:"alignItems"}),N({prop:"alignContent"}),N({prop:"order"}),N({prop:"flex"}),N({prop:"flexGrow"}),N({prop:"flexShrink"}),N({prop:"alignSelf"}),N({prop:"justifyItems"}),N({prop:"justifySelf"})),h=m(N({prop:"gridGap"}),N({prop:"gridColumnGap"}),N({prop:"gridRowGap"}),N({prop:"gridColumn"}),N({prop:"gridRow"}),N({prop:"gridAutoFlow"}),N({prop:"gridAutoColumns"}),N({prop:"gridAutoRows"}),N({prop:"gridTemplateColumns"}),N({prop:"gridTemplateRows"}),N({prop:"gridTemplateAreas"}),N({prop:"gridArea"})),f=m(N({prop:"position"}),N({prop:"zIndex",themeKey:"zIndex"}),N({prop:"top"}),N({prop:"right"}),N({prop:"bottom"}),N({prop:"left"})),v=m(N({prop:"color",themeKey:"palette"}),N({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=N({prop:"boxShadow",themeKey:"shadows"});function w(e){return e<=1?"".concat(100*e,"%"):e}var C=N({prop:"width",transform:w}),x=N({prop:"maxWidth",transform:w}),T=N({prop:"minWidth",transform:w}),E=N({prop:"height",transform:w}),S=N({prop:"maxHeight",transform:w}),A=N({prop:"minHeight",transform:w}),K=(N({prop:"size",cssProperty:"width",transform:w}),N({prop:"size",cssProperty:"height",transform:w}),m(C,x,T,E,S,A,N({prop:"boxSizing"}))),I=t("+Hmc"),B=m(N({prop:"fontFamily",themeKey:"typography"}),N({prop:"fontSize",themeKey:"typography"}),N({prop:"fontStyle",themeKey:"typography"}),N({prop:"fontWeight",themeKey:"typography"}),N({prop:"letterSpacing"}),N({prop:"lineHeight"}),N({prop:"textAlign"})),P=t("/P46"),D=t("cNwE"),R=function(e){var a=Object(P.a)(e);return function(e,t){return a(e,Object(b.a)({defaultTheme:D.a},t))}},G=i(m(g,d,k,h,f,v,y,K,I.b,B)),W=R("div")(G,{name:"MuiBox"}),U={margin:"1rem"},z=function(e){return s.a.createElement(W,{style:U},e.children)},H=t("nyfv");var J={},_={_frontmatter:J},M=o.a;function q(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(c.b)(M,Object.assign({},_,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"JDBus"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"bus")," is the top-level ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom"}),"DOM")," element.\nIt processes the incoming and outcoming packets,\nhandles the connection to the underlying communiction transport\nand maintains a set of active ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/device"}),"devices")," nodes."),Object(c.b)("h2",null,"WebUSB bus"),Object(c.b)("p",null,"The most common use is to create a bus that uses WebUSB to\ncommunicate to a physical JACDAC device. This is done with ",Object(c.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"createUSBBus"),"."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," bus ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"createUSBBus"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(c.b)("h2",null,"Connection and disconnection"),Object(c.b)("p",null,"By default, the WebUSB bus will try to reconnect\nto any known connected physical device. The JACDAC physical device hasn't been paired yet,\nyou can initiate the connection from a user interaction handler (security measure as the user must manually pick the device)."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"await")," bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"connectAsync"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(c.b)("p",null,"The bus will detect that the physical device is disconnected automatically. If you wish to disconnect manually, use"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"await")," bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"disconnectAsync"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(c.b)("p",null,"You can query the status of the connection using ",Object(c.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"bus.connectionState"),". The connection has 4 states:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"connected: connected to a physical device over WebUSB and receiving packets"),Object(c.b)("li",{parentName:"ul"},"connection: connection in progress (for example, user is selecting the device)"),Object(c.b)("li",{parentName:"ul"},"disconnected: no active connection to a physical device"),Object(c.b)("li",{parentName:"ul"},"disconnecting: closing the connection to the physical device")),Object(c.b)("p",null,"Using the ",Object(c.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"CONNECTION_STATE")," event, you can track changes of the state."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// am i in connected state?"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," connected ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"connected\nbus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECTION_STATE"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"state",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(c.b)(z,{mdxType:"Widget"},Object(c.b)(H.a,{mdxType:"ConnectButton"})),Object(c.b)("h2",null,"Devices"),Object(c.b)("p",null,"You can query the bus at any to receive a snapshot of the devices DOM."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," devices ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"devices"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"for"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," device ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"of")," devices",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"device",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(c.b)("h2",null,"Events"),Object(c.b)("p",null,"All bus state mutation are advertised by events. You can listen or subscribe to those events."),Object(c.b)("h3",null,Object(c.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CHANGE")),Object(c.b)("p",null,"Catch all event raised when some change happened to the bus, whether it is a connection change or a change in the list of services\nor the error state changed."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CHANGE"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'bus changed!'"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(c.b)("h3",null,Object(c.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CONNECTION_STATE")),Object(c.b)("p",null,"Raised when the connection state of the bus has changed."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECTION_STATE"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus connection state: "),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"state",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(c.b)("h3",null,Object(c.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CONNECT"),", ",Object(c.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CONNECTING"),", ",Object(c.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"DISCONNECTING"),", ",Object(c.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"DISCONNECT")),Object(c.b)("p",null,"Raised on each connection state changes."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECT"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus connected"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nbus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECTING"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus connecting"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nbus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DISCONNECTING"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus disconnecting"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nbus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DISCONNECT"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus disconnected"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(c.b)("h3",null,Object(c.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"ERROR")),Object(c.b)("p",null,"An error occured."),Object(c.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"ERROR"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," context",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," exception ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"error"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus error: "),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"context",Object(c.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(c.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," exception",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))))}q.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clients-web-dom-bus-mdx-c110ed9276ca29a73689.js.map