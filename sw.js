/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-bd9c0545657ca2945e5b.js"
  },
  {
    "url": "framework-d9d76db5be1d465b14c8.js"
  },
  {
    "url": "app-cbc0496be89bfd1bcdd9.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0bc9cbb404945527f117048be9b95646"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7542ec632975394c09bc.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "3cab4a78cd35877102804d62ca4256d5"
  },
  {
    "url": "polyfill-70ded200b3d23a2b3e6d.js"
  },
  {
    "url": "styles.1bcf0d809ee48396e628.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "e7b23b8c66383a2a7be4029010afed99c841733e-62e29f7c02b717f30919.js"
  },
  {
    "url": "component---src-pages-404-mdx-1058db2afbe64e5c3852.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "820dd72aa6eacc5f81f4ed469d13dd1e"
  },
  {
    "url": "page-data/sq/d/1762892263.json",
    "revision": "bf78af185d1e81b03a5218f2792f3c42"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "34ea851603e237eb2062b2a4a6772672"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "9c163590aa39db9be4e67023f5f0ed75"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "1706f907fb03a26a36a6957049358a3d"
  },
  {
    "url": "page-data/sq/d/3159585216.json",
    "revision": "c2a19842bac2ebad1401069111d856ae"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "775dd4a361fe5f2979c987059acfe4c8"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "0ef358c63ce8bb18f8adb15ea2b544c7"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "95759de080807bf891806eb7d7a24d31"
  },
  {
    "url": "component---src-pages-clients-mdx-b2f0ea5dd056dd78df36.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "0d1b1d337fba39749ce76a49f8c9493c"
  },
  {
    "url": "component---src-pages-github-mdx-ad1a2334e500f3aff616.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "dd6993ef8be1c39e15d2f3a4cd66c4ca"
  },
  {
    "url": "component---src-pages-index-mdx-2fd220ab52ef088b4331.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "200568b01d8be439895b2f2e143bae80"
  },
  {
    "url": "component---src-pages-modules-mdx-39058639c1dff4eec758.js"
  },
  {
    "url": "page-data/modules/page-data.json",
    "revision": "2604932e1d45c53cd58fa07683532d7b"
  },
  {
    "url": "component---src-components-spec-tsx-5b5e966ffcbd698d05d1.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "3a36f7feb84b29e5e12da22dea964b90"
  },
  {
    "url": "component---src-pages-services-mdx-9da5e6b58240c9172be0.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "650822ef41b8605617fa6c523879df43"
  },
  {
    "url": "component---src-pages-tools-mdx-a839abf73b9174ee23ee.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "a33bebfdf9f2dc291570e6a337eee784"
  },
  {
    "url": "component---src-pages-traces-mdx-96469dd7261ecd1caade.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "b119ff3d843d4bc5ea13d2dea12e04bb"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "4c71a330fa74aa20aef772a01af30765"
  },
  {
    "url": "page-data/reference/module-definition/page-data.json",
    "revision": "1d6f7a6b8c61ee8145455f86955ffab6"
  },
  {
    "url": "page-data/reference/motivation/page-data.json",
    "revision": "c445de19f2301bd17d555deb6cf7efc6"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "8a7c5d7c845cdfaf9485f94cd4133dc1"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "9f89a86b862b4cfb55cb8a54d9ec03f2"
  },
  {
    "url": "component---src-templates-service-mdx-434425f4777487551247.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "b2dfdbcbceb42adc9127bac2d90b661f"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "bda824f3aacc5de28625acbd9fb36b3e"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "b553c606c4535fa61b06b44e8d2ea00f"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "4d6f37f8a01ddc2641ebd40ccf09fa19"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "62f295149b587732f2f12f9b24c21729"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "6840415678684c1d03da36ef7fb9b659"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "e3614c2070e5af7723820c6afda7154d"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "329900455e68da5412cb2682d4295692"
  },
  {
    "url": "page-data/services/crank/page-data.json",
    "revision": "a8ce7cceb8f05db61f1c0fe0f128ca80"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "8c65606cfee0b483aee93f670806ad9f"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "6f8e6f26c5c32de7293b3184a3a0523a"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "a94c631b7a86116b1a7bc5d7757dd9fe"
  },
  {
    "url": "page-data/services/keyboard/page-data.json",
    "revision": "06d2a1e3d5ae6e4e1cc465f164f8751f"
  },
  {
    "url": "page-data/services/ledmatrixcontroller/page-data.json",
    "revision": "4c60f8f25458f298f56698e5554ce4c6"
  },
  {
    "url": "page-data/services/ledmatrixdisplay/page-data.json",
    "revision": "9541124d6f4e4688dfde5c647b217397"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "c8a3cd483ee705e9b754ce5f526bbbf9"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "29a9821496d59b1c31361cee127ae61e"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "5da4b938c17a7793c8279be8abcb65ce"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "c940052ffbe6a8c9bc7eeab29a889ddc"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "1ad9fa89acd56ddac9c742ea8978d13b"
  },
  {
    "url": "page-data/services/mouse/page-data.json",
    "revision": "28ff1efc09c50c13f4d5e5f15e7dcdfc"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "67ab2a81289c29394fce729dfb940734"
  },
  {
    "url": "page-data/services/music/page-data.json",
    "revision": "4d14903819788dd89c42491c76a26de1"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "cd98c1257adfddc769f4310957a9cfa4"
  },
  {
    "url": "page-data/services/pwmlight/page-data.json",
    "revision": "02f70274956666847aaf3a12686a36a9"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "d8383e9f6071055a22eccd9340c4a8be"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "a819b1b9b63274d3a184793d0ae95bed"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "971fac37cc0b0cd19cad93f93367c499"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "05ce621e230b53b145caa86cad8156e5"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "2d38617d2c640e04ebdd3ba5bfd37877"
  },
  {
    "url": "page-data/services/temperature/page-data.json",
    "revision": "e9fd954e23bdeb84485ea07c3aa95948"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "62bc1472cc5f33d704452e87b3ceffe6"
  },
  {
    "url": "component---src-templates-device-mdx-c035db80933c02877257.js"
  },
  {
    "url": "page-data/modules/microsoft-jm-acc/page-data.json",
    "revision": "26311750bcfe59627bc1abe3f30f8fa7"
  },
  {
    "url": "page-data/modules/microsoft-jm-arcade-btn/page-data.json",
    "revision": "9b837054d61cbbae0822fa1d8ef4dff9"
  },
  {
    "url": "page-data/modules/microsoft-jm-arcade-ctrls/page-data.json",
    "revision": "3830264088148e30fac2777ff7057f7c"
  },
  {
    "url": "page-data/modules/microsoft-jm-crank/page-data.json",
    "revision": "bae4f1b9c755026cc3819a954ccb6d52"
  },
  {
    "url": "page-data/modules/microsoft-jm-crank-btn/page-data.json",
    "revision": "0bf2c0984931ed4fa640fe6ce35e5b78"
  },
  {
    "url": "page-data/modules/microsoft-jm-gamepad/page-data.json",
    "revision": "9b739e5ecfc617e2238a5c3323beeef4"
  },
  {
    "url": "page-data/modules/microsoft-jm-ml/page-data.json",
    "revision": "d34823eb195da56fce9ad743dc057f6e"
  },
  {
    "url": "page-data/modules/microsoft-jm-motor/page-data.json",
    "revision": "01cd60e2a4ea6db901d863c0a0b9281f"
  },
  {
    "url": "page-data/modules/microsoft-jm-npx/page-data.json",
    "revision": "b835c263f9f36ca488254ffb86f15958"
  },
  {
    "url": "page-data/modules/microsoft-jm-npx-pwr/page-data.json",
    "revision": "5e9b15f5778d7677c9635e526cf1215b"
  },
  {
    "url": "page-data/modules/microsoft-jm-proto/page-data.json",
    "revision": "fa50813754d16c0453e844b30e1e15ed"
  },
  {
    "url": "page-data/modules/microsoft-jm-proto-touch/page-data.json",
    "revision": "bfd663a3a8c8eb46a42d4b7a53bad56a"
  },
  {
    "url": "page-data/modules/microsoft-jm-pwr/page-data.json",
    "revision": "8ebb0d8f88d87f44ff9eddd2e91ee9cc"
  },
  {
    "url": "page-data/modules/microsoft-jm-servo/page-data.json",
    "revision": "21a0ebf24c1f9b690fe1ca08dd3e8d30"
  },
  {
    "url": "page-data/modules/microsoft-jm-servo-pwr/page-data.json",
    "revision": "c55081f6c04aa030de6cd739186a7ebf"
  },
  {
    "url": "page-data/modules/microsoft-jm-slider/page-data.json",
    "revision": "0a35bd3efd8ff00f4043ffcce2c86479"
  },
  {
    "url": "page-data/modules/microsoft-jm-snd/page-data.json",
    "revision": "31c3e6cdb1f7bf8e99e25c9002f47ce8"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-6c68589c1ba82f5871b4.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "8fda24128b86a23eeb6be1a9c176ca2c"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-c333d512c3d600994781.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "b69c4c7d48f6ea8dc1ac9d7b9034c32a"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-2e3d51abd2a00be01bba.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "6eb3fd9dec1f80524d1c3835d977cde5"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-c8d3496b7a5e722791a9.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "d9dacd28b5839c821b622b5e55a4646c"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-237490971ef6eff3d549.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "20e3db06bbe880cb49ceb2d9dec01c42"
  },
  {
    "url": "component---src-pages-tools-module-designer-mdx-58b4a20c92ee94ca5064.js"
  },
  {
    "url": "page-data/tools/module-designer/page-data.json",
    "revision": "1db1b48c8a643b1f35e9dfa65b71bad4"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-be0cd91923b4c3231074.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "5938d95f61f16c7b19a5b2c5776392b4"
  },
  {
    "url": "component---src-pages-tools-player-mdx-c1c1ff7bc9d0d53e07e1.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "f613d89381696e093f84cdbce6e7ec49"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-bae1773dd00b838dac73.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "dc50f090e73960ed25f9aa78ba70815f"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-bd9193aed23c128ffc1a.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "114c47dc3e91589935b7881ae3d8006f"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-66d03ea2215fcba31bef.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "6bcd485c9c719dbe1f57ab1b7bb22fe7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2ffbc9c17984a3ace7a0231815151d14"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/jacdac-ts`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/jacdac-ts/app-cbc0496be89bfd1bcdd9.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/jacdac-ts/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
