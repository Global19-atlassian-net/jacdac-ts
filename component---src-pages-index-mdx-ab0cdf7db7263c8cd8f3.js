(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{pfKO:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var c=a("8o2o"),o=(a("q1tI"),a("7ljp")),n=a("9Dj+"),r=a("raEh"),i={},s={_frontmatter:i},d=n.f;function l(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(o.mdx)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"JACDAC")," (",Object(o.mdx)("strong",{parentName:"p"},"J"),"oint ",Object(o.mdx)("strong",{parentName:"p"},"A"),"synchronous ",Object(o.mdx)("strong",{parentName:"p"},"C"),"ommunications; ",Object(o.mdx)("strong",{parentName:"p"},"D"),"evice ",Object(o.mdx)("strong",{parentName:"p"},"A"),"gnostic ",Object(o.mdx)("strong",{parentName:"p"},"C"),"ontrol) is a single wire broadcast protocol\nfor the plug and play of microcontrollers (MCUs) within the contexts of rapid prototyping,\nmaking, and physical computing."),Object(o.mdx)("p",null,"A JACDAC ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/bus"}),"bus")," is made of connected devices.\nA ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/device"}),"device")," may host services.\nA ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/service"}),"service")," has registers, accept commands\nand may return acks. A ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/register"}),"register")," is an addressed data location, organized in ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/field"}),"fields"),",\nthat may be get, set or streamed."),Object(o.mdx)("h2",{id:"motivation",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h2"},{href:"#motivation","aria-label":"motivation permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Motivation"),Object(o.mdx)("p",null,"Widely used and highly efficient, I2C and SPI are the wired protocols of choice when connecting onboard sensors to microcontrollers.\nSince these protocols are supported as standard by many microcontrollers, they are also the defacto way of connecting external peripheral\nboards to microcontrollers. Wiring peripheral boards correctly is difficult for novice users and once wired,\nthe configuration of the system is static and does not support plug and play."),Object(o.mdx)("p",null,"With the wide-adoption of web technologies and the huge growth in the Internet of Things (IoT),\nthe worlds of the feature rich and highly capable modern microcontroller and the Web should be closer together, yet they are not."),Object(o.mdx)("p",null,"JACDAC is a dynamic plug and play serial protocol allowing the configuration of systems at runtime.\nIt runs over a single wire allowing a variety of connectors to be used,\nsimplifying connections between devices. Finally, WebUSB and TypeScript extends the JACDAC bus to the web browser (and the Internet),\nenabling the development of services and the debugging of the JACDAC bus directly from the Web browser,\nreducing the gap between the Web and the microcontroller."),Object(o.mdx)("h2",{id:"specification",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h2"},{href:"#specification","aria-label":"specification permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Specification"),Object(o.mdx)("p",null,"JACDAC operates in a bus topology and requires devices have a microcontroller with UART, Timer, and GPIO interrupt capabilities."),Object(o.mdx)("p",null,Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/spec/specification"}),"Read the full protocol specification.")),Object(o.mdx)("h2",{id:"services",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h2"},{href:"#services","aria-label":"services permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Services"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/services"}),"list of known service specifications")," provides a set of\nstandaridized JACDAC modules. Additional modules can be specified in the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/microsoft/jacdac",target:"_blank",rel:"nofollow noopener noreferrer"}),"specification")," repository."),Object(o.mdx)("p",null,Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/services"}),"Browser the services.")),Object(o.mdx)("h2",{id:"device-catalog",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h2"},{href:"#device-catalog","aria-label":"device catalog permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Device Catalog"),Object(o.mdx)("p",null,"The JACDAC project contains a catalog of known devices that\ncan be automatically detected on the bus. Once a device is detected,\nthe catalog information provides vendor information, pictures and firmware information."),Object(o.mdx)("p",null,Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/devices"}),"Browser the devices.")),Object(o.mdx)(r.a,{mdxType:"DeviceList"}),Object(o.mdx)("h2",{id:"community",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h2"},{href:"#community","aria-label":"community permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Community"),Object(o.mdx)("p",null,"We are still in the process of setting up a community area for JACDAC discussions,\nbut for now please feel free to file issues with questions ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/microsoft/jacdac",target:"_blank",rel:"nofollow noopener noreferrer"}),"on the Github respository for this site"),"."),Object(o.mdx)("h2",{id:"applications",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h2"},{href:"#applications","aria-label":"applications permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Applications"),Object(o.mdx)("h3",{id:"fashion",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h3"},{href:"#fashion","aria-label":"fashion permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Fashion"),Object(o.mdx)("p",null,"JACDAC was the technology used to network microcontrollers together at the\n",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.bklynlibrary.org/bklyn-fashion-academy",target:"_blank",rel:"nofollow noopener noreferrer"}),"BKLYN Fashion Academy")," in 2019."),Object(o.mdx)("p",null,"Read more about it ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.microsoft.com/en-us/research/blog/fashion-forward-researchers-designers-debut-new-tech-on-new-york-city-runway",target:"_blank",rel:"nofollow noopener noreferrer"}),"here"),",\nor watch the video below:"),Object(o.mdx)("p",null,Object(o.mdx)("iframe",Object.assign({parentName:"p"},{width:"100%",height:315,src:"https://www.youtube-nocookie.com/embed/TvSmYga2Pic?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),Object(o.mdx)("h3",{id:"gaming",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h3"},{href:"#gaming","aria-label":"gaming permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Gaming"),Object(o.mdx)("p",null,Object(o.mdx)("iframe",Object.assign({parentName:"p"},{width:"100%",height:315,src:"https://www.youtube-nocookie.com/embed/YKshfoeGtbM?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),Object(o.mdx)("p",null,Object(o.mdx)("iframe",Object.assign({parentName:"p"},{width:"100%",height:315,src:"https://www.youtube-nocookie.com/embed/CKBXQIGQEuw?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),Object(o.mdx)("h2",{id:"microsoft-open-source-code-of-conduct",style:{position:"relative"}},Object(o.mdx)("a",Object.assign({parentName:"h2"},{href:"#microsoft-open-source-code-of-conduct","aria-label":"microsoft open source code of conduct permalink",className:"anchor before"}),Object(o.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(o.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Microsoft Open Source Code of Conduct"),Object(o.mdx)("p",null,"This project is hosted at ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/microsoft/jacdac-ts",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/microsoft/jacdac-ts"),". This project has adopted the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://opensource.microsoft.com/codeofconduct/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Microsoft Open Source Code of Conduct"),"."),Object(o.mdx)("p",null,"Resources:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"https://opensource.microsoft.com/codeofconduct/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Microsoft Open Source Code of Conduct")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"https://opensource.microsoft.com/codeofconduct/faq/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Microsoft Code of Conduct FAQ")),Object(o.mdx)("li",{parentName:"ul"},"Contact ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"mailto:opencode@microsoft.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"opencode@microsoft.com")," with questions or concerns")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-ab0cdf7db7263c8cd8f3.js.map