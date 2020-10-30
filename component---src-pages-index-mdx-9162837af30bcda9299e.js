(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{pfKO:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return p}));var c=a("8o2o"),r=(a("q1tI"),a("7ljp")),o=a("9Dj+"),n={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.mdx)("div",t)}},s=i("DeviceSpecificationList"),l=i("ServiceSpecificationList"),m={_frontmatter:n},d=o.f;function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.mdx)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"JACDAC")," (",Object(r.mdx)("strong",{parentName:"p"},"J"),"oint ",Object(r.mdx)("strong",{parentName:"p"},"A"),"synchronous ",Object(r.mdx)("strong",{parentName:"p"},"C"),"ommunications; ",Object(r.mdx)("strong",{parentName:"p"},"D"),"evice ",Object(r.mdx)("strong",{parentName:"p"},"A"),"gnostic ",Object(r.mdx)("strong",{parentName:"p"},"C"),"ontrol) is a\na plug-and-play hardware/software stack for connecting microcontrollers and their peripherals\n(sensors/actuators), with applications to rapid prototyping, making, and physical computing. "),Object(r.mdx)("p",null,"JACDAC devices communicate over a ",Object(r.mdx)("em",{parentName:"p"},"bus"),", where each ",Object(r.mdx)("em",{parentName:"p"},"device")," can advertise itself and the set of device-specific services it provides via the JACDAC control service, common to all devices. A ",Object(r.mdx)("em",{parentName:"p"},"service")," is specified by a ",Object(r.mdx)("em",{parentName:"p"},"service class")," that encapsulates the process of communicating with a JACDAC device via packets. A ",Object(r.mdx)("em",{parentName:"p"},"packet")," includes a device identifier and data payload. JACDAC packets are sent serially among physical devices on the JACDAC bus and may also be sent over WebUSB, providing connectivity to web-based tooling and services running in the web browser (see the connect icon at the top of this page). "),Object(r.mdx)("h2",{id:"device-catalog",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#device-catalog","aria-label":"device catalog permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Device catalog"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/devices"}),"device catalog")," lists the registered JACDAC devices that can be automatically detected on the bus. Once a device is detected, the catalog information provides vendor information, pictures and firmware information."),Object(r.mdx)(s,{count:3,shuffle:!0,mdxType:"DeviceSpecificationList"}),Object(r.mdx)("h2",{id:"service-catalog",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#service-catalog","aria-label":"service catalog permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Service catalog"),Object(r.mdx)("p",null,"The ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/services"}),"service catalog")," lists the registered JACDAC service classes, which are stored in the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/microsoft/jacdac",target:"_blank",rel:"nofollow noopener noreferrer"}),"JACDAC")," repository."),Object(r.mdx)(l,{count:3,shuffle:!0,mdxType:"ServiceSpecificationList"}),Object(r.mdx)("h2",{id:"for-jacdac-users",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#for-jacdac-users","aria-label":"for jacdac users permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"For JACDAC users"),Object(r.mdx)("p",null,"JACDAC has support for the C, CircuitPython, and TypeScript languages, as well as for Microsoft MakeCode.\nTo get familiar with the JACDAC abstractions and APIs right away, we suggest browsing the\nTypeScript ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"./clients/web/dom"}),"JACDAC Object Model"),", which is used to make this web site a JACDAC endpoint (over WebUSB),\nas well as the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"./tools/"}),"tools")," built using the model."),Object(r.mdx)("h2",{id:"for-jacdac-manufacturers-and-implementers",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#for-jacdac-manufacturers-and-implementers","aria-label":"for jacdac manufacturers and implementers permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"For JACDAC manufacturers and implementers"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"./reference/device-catalog"}),"Device Catalog Specification")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"./reference/service-spec-language"}),"Service Specification Language")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"./reference/jacdac-protocol"}),"JACDAC Protocol Specification")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"./reference/serial-protocol"}),"Serial Wire Protocol")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"./reference/glossary"}),"Glossary"))),Object(r.mdx)("h2",{id:"community",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#community","aria-label":"community permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Community"),Object(r.mdx)("p",null,"We are still in the process of setting up a community area for JACDAC discussions.\nFor now, please feel free to ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/microsoft/jacdac/issues",target:"_blank",rel:"nofollow noopener noreferrer"}),"file issues with questions"),"."),Object(r.mdx)("h2",{id:"jacdac-github-repos",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#jacdac-github-repos","aria-label":"jacdac github repos permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"JACDAC Github repos"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"JACDAC Core",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/jacdac",target:"_blank",rel:"nofollow noopener noreferrer"}),"Device and service catalogs")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/jacdac-c",target:"_blank",rel:"nofollow noopener noreferrer"}),"Protocol Common C Library")))),Object(r.mdx)("li",{parentName:"ul"},"Processor-specific ports",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/jacdac-stm32x0",target:"_blank",rel:"nofollow noopener noreferrer"}),"STM32")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/jacdac-esp32",target:"_blank",rel:"nofollow noopener noreferrer"}),"ESP32")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/jacdac-padauk",target:"_blank",rel:"nofollow noopener noreferrer"}),"Paduak")))),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/jacdac-ts/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Web site and TypeScript-based tools")),Object(r.mdx)("li",{parentName:"ul"},"JACDAC Integrations",Object(r.mdx)("ul",{parentName:"li"},Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/jacdac-circuitpython",target:"_blank",rel:"nofollow noopener noreferrer"}),"Adafruit CircuitPython")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/pxt-jacdac-services",target:"_blank",rel:"nofollow noopener noreferrer"}),"Microsoft MakeCode")," "),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/microsoft/jupyter-jacdac",target:"_blank",rel:"nofollow noopener noreferrer"}),"Jupyter Lab"))))),Object(r.mdx)("h2",{id:"applications",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#applications","aria-label":"applications permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Applications"),Object(r.mdx)("h3",{id:"fashion",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h3"},{href:"#fashion","aria-label":"fashion permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Fashion"),Object(r.mdx)("p",null,"JACDAC was the technology used to network microcontrollers together at the\n",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.bklynlibrary.org/bklyn-fashion-academy",target:"_blank",rel:"nofollow noopener noreferrer"}),"BKLYN Fashion Academy")," in 2019."),Object(r.mdx)("p",null,"Read more about it ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.microsoft.com/en-us/research/blog/fashion-forward-researchers-designers-debut-new-tech-on-new-york-city-runway",target:"_blank",rel:"nofollow noopener noreferrer"}),"here"),",\nor watch the video below:"),Object(r.mdx)("p",null,Object(r.mdx)("iframe",Object.assign({parentName:"p"},{width:"100%",height:315,src:"https://www.youtube-nocookie.com/embed/TvSmYga2Pic?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),Object(r.mdx)("h3",{id:"gaming",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h3"},{href:"#gaming","aria-label":"gaming permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Gaming"),Object(r.mdx)("p",null,Object(r.mdx)("iframe",Object.assign({parentName:"p"},{width:"100%",height:315,src:"https://www.youtube-nocookie.com/embed/YKshfoeGtbM?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),Object(r.mdx)("p",null,Object(r.mdx)("iframe",Object.assign({parentName:"p"},{width:"100%",height:315,src:"https://www.youtube-nocookie.com/embed/CKBXQIGQEuw?rel=0",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),Object(r.mdx)("h2",{id:"why-jacdac",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#why-jacdac","aria-label":"why jacdac permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Why JACDAC?"),Object(r.mdx)("p",null,"The advent of simpler programming environments for microcontrollers over the past decade has greatly\nchanged who can write code for them. It is now possible for novices to program microcontrollers using only a\nweb browser, a process that was previously the domain of skilled embedded firmware engineers.\nHowever, despite a marked improvement in software tooling, it’s still challenging to build devices\nthat bring together new combinations of hardware, as traditional protocols (such as I2C and SPI)\nfor connecting microcontrollers to each other and to peripherals are low-level and inflexible. "),Object(r.mdx)("p",null,"JACDAC is a new hardware/software stack for low-cost microcontrollers that makes connecting microcontrollers and peripherals\nas simple as plugging a USB device into your personal computer. JACDAC’s reversible physical connector, a flexible bus-based topology,\nstandardized signalling and service specifications, hardware and software reference designs, and web-based tooling bring interactive\ndevice prototyping into the 21st century. "),Object(r.mdx)("p",null,"The careful design of JACDAC means that it’s inexpensive and low power; it can be supported by\nmicrocontrollers that cost as little as two and a half US cents.  Support for WebUSB and TypeScript extends the JACDAC bus to the web\nbrowser (and the Internet), enabling the development of services and the debugging of the JACDAC bus directly from the Web browser,\nreducing the gap between the Web and the microcontroller."),Object(r.mdx)("h2",{id:"microsoft-open-source-code-of-conduct",style:{position:"relative"}},Object(r.mdx)("a",Object.assign({parentName:"h2"},{href:"#microsoft-open-source-code-of-conduct","aria-label":"microsoft open source code of conduct permalink",className:"anchor before"}),Object(r.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Microsoft Open Source Code of Conduct"),Object(r.mdx)("p",null,"This project is hosted at ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/microsoft/jacdac-ts",target:"_blank",rel:"nofollow noopener noreferrer"}),"https://github.com/microsoft/jacdac-ts"),". This project has adopted the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://opensource.microsoft.com/codeofconduct/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Microsoft Open Source Code of Conduct"),"."),Object(r.mdx)("p",null,"Resources:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://opensource.microsoft.com/codeofconduct/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Microsoft Open Source Code of Conduct")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"https://opensource.microsoft.com/codeofconduct/faq/",target:"_blank",rel:"nofollow noopener noreferrer"}),"Microsoft Code of Conduct FAQ")),Object(r.mdx)("li",{parentName:"ul"},"Contact ",Object(r.mdx)("a",Object.assign({parentName:"li"},{href:"mailto:opencode@microsoft.com",target:"_blank",rel:"nofollow noopener noreferrer"}),"opencode@microsoft.com")," with questions or concerns")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-9162837af30bcda9299e.js.map