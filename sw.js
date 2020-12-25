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
    "url": "webpack-runtime-c28357d88130ce8a0b0a.js"
  },
  {
    "url": "styles.1bcf0d809ee48396e628.css"
  },
  {
    "url": "styles-4d1902e7bd39726e0535.js"
  },
  {
    "url": "framework-1ffecd2421b8acab27d5.js"
  },
  {
    "url": "app-decc6dbcc2d64b839835.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "df4ef8ecdf7d46f29208cb81342a1f38"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-1276fbfcedf3f010e996.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "6162d5123b9bd5e3baed1123885059d9"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "04b20eb6340f24cfb210d2686861a248"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "34ea851603e237eb2062b2a4a6772672"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "b16f4d2ce03c033512aeb091a62fd3af"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "ad5ff96a28765155fffb04e37433f7ff"
  },
  {
    "url": "page-data/sq/d/3159585216.json",
    "revision": "c2a19842bac2ebad1401069111d856ae"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "48553f2e2b0dd4ce03764a551ef1f808"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "0ef358c63ce8bb18f8adb15ea2b544c7"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2ba73562e6bda5bee34249f55c8fda34"
  },
  {
    "url": "polyfill-48c090f9325a898a672e.js"
  },
  {
    "url": "component---src-pages-404-mdx-3ec9934388664c166a8e.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "a3edae9f0302a9551c45c8f0b07f244c"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "f1041f52124027d784dda2bd1d55d7dd"
  },
  {
    "url": "component---src-pages-clients-mdx-0a3f0084632e72200a2f.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "f40c85633fc4922303db982821c98e04"
  },
  {
    "url": "component---src-pages-devices-mdx-80661de59e5211f2aa01.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "03a0b9ad98dac63418a3a6ceee9df48a"
  },
  {
    "url": "component---src-pages-dtmi-mdx-26a4a6cc982b9e5c9983.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "15ac1f2b164265de95d8730538ba0241"
  },
  {
    "url": "component---src-pages-github-mdx-40b61c7c8c9821735993.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a2f390cec4ee905b93c2443795c0cd59"
  },
  {
    "url": "component---src-pages-index-mdx-a15df2023d1958ea0c84.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "94b955921d9cd9eaa500692ded9d9982"
  },
  {
    "url": "component---src-components-spec-tsx-178a6895e3b0b05148bc.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "2d4a8f9b7958fa140e0899a8fde50f96"
  },
  {
    "url": "component---src-pages-services-mdx-3354f720419abc611d65.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "e9dfa341b7ea9ca3dbf531ee5da9de4c"
  },
  {
    "url": "component---src-pages-tools-mdx-4ac8207055a5498a47e0.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "0658575ee13b2a76df5d5f55e7d9ab01"
  },
  {
    "url": "component---src-pages-traces-mdx-ff9d04e23c20bbfe9b67.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "78fff997b7aacdf7391293d822d6fa43"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "4bf35a2d4cabf79b2dd2b37a695c2c68"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "114b3aa16031d1f6fddedd192aa2e89e"
  },
  {
    "url": "page-data/reference/motivation/page-data.json",
    "revision": "e28d96f3859ecfb06f7a160e3565546b"
  },
  {
    "url": "page-data/reference/pack-format/page-data.json",
    "revision": "d3c8affa8930b8be8dce65742d80bda4"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "a187c07d0efc8b36dd612f63f2ce293f"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "8ecd786ad3ef13fa44e455af01bcf921"
  },
  {
    "url": "component---src-templates-service-mdx-f3b9e4a5f10a9715f05e.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "656277698322c1bb210bb8d502bfe3e6"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "6bef775c4b9ec7872007c9a2fe059f29"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "071a867c92e052596582777e1c281dbd"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "34d534a5716b51b3e937160c23e46b22"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "ebbd70789f152f2b7919b60f14d79a34"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "96598a79473d7c965451bdb97c3dfec5"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "ddfe4ef58378804baed34ab4a5117cf5"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "e6cfb25fc7a454a75b702ab219dd292e"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "272301a550b206539520eb0959546bc9"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "68b9697418893413af968c7bf7e1e386"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "2064d0c9987ab7e86dcb8bfe722ae50b"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "26001fb267490e8a9962537eba880f79"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "626e2921cb99903df6c9df18fede8ab7"
  },
  {
    "url": "page-data/services/keyboard/page-data.json",
    "revision": "311ae700f06aee9a7123f878c9292599"
  },
  {
    "url": "page-data/services/ledmatrixcontroller/page-data.json",
    "revision": "84df0ac48a66a0775a18decdf72bb4b3"
  },
  {
    "url": "page-data/services/ledmatrixdisplay/page-data.json",
    "revision": "c8b3c01acbded83757767385770410cd"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "487d6c9346cefeb33c689bc7ba533e19"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "6cf90807da40d4f2b06a58bdb152a499"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "501024e97f2f3bde9abdec5be9e3eb42"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "728f374b027c9ce8f293c60c5dd3377d"
  },
  {
    "url": "page-data/services/monolight/page-data.json",
    "revision": "e5281fa9d7fb486c8cc4ce5fbb464df7"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "2f50804a90074cf1770b9325cb511da5"
  },
  {
    "url": "page-data/services/mouse/page-data.json",
    "revision": "8c53acc3634ef481f1891ed5217c3521"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "c565dad7c9c85fb014be9d22367c2288"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "23cfd2503abae6c2ce83ac8496011427"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "84961ec1927e902f7befb5b366dd8709"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "4cc01d8ff508dd53e71544ee28d613fa"
  },
  {
    "url": "page-data/services/rotary-encoder/page-data.json",
    "revision": "b58db9be3f9a5c65da74c14c71e7f94b"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "23f24e6328f89ec0de4d508502a857f9"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "6fdcd11ee3f3602b74082d404d3ab38b"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "9a99c07b5df5e1d62b45b03b26de77a1"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "a89c9af0f20a99bb3cca70bdf72cea8c"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "3c056f511803a1db5301b30fd3950c99"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "3afd62f357db0bbe53a62d1bb6c6275b"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "fa356981a6ee30f102194e9fd062f3b5"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-4b8246e1ffcec51d0d11.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "31b793b39a1528a8c48024a68b91416c"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-6c68589c1ba82f5871b4.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "2bd1339ffd8dd4418f67b6bbed5cf2a7"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-3000f6d55e125690e45f.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "972d98acca6c73ae288f8691b7400eb6"
  },
  {
    "url": "component---src-pages-tools-device-designer-mdx-ce1c3524a35cc4a084cb.js"
  },
  {
    "url": "page-data/tools/device-designer/page-data.json",
    "revision": "6ff9fcffb16bd33be51a8b4cda844524"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-ca10c5027b227c6f1962.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "20770f6e99039931d28f33722c1efaef"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-5efafe621e1a40d5ad5d.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "78e8d1954b7714a23ee882f0fa0a79b2"
  },
  {
    "url": "component---src-pages-tools-light-command-encoder-mdx-29244d675b752911bb34.js"
  },
  {
    "url": "page-data/tools/light-command-encoder/page-data.json",
    "revision": "03d4d071ff9832966887a892630d4a0d"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-a5db330af8351431ff9a.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "3aac65afe8c9fec18ccc34864a8f2039"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-b47826070117cbd1565f.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "3e7cfa36f41949215f87be22ed2167d4"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-0f9c7026a95851d7daed.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "87ea488413fb0b257e8d1959835f01f5"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-a492ce892a4981473788.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "e191865620da5962b72dba3bf31d587d"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-326e3b8938a2796d73c5.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "0baf4d2c559b6ebd82ff96ad961a6e57"
  },
  {
    "url": "component---src-pages-tools-player-mdx-673af7b70a486ba7686a.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "e10f9c0367a32fea3070b628dafd8d80"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-ed8136426d3ac684d9dd.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "30fcf463a7302b11d835d8661a819759"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-658990e82fffdeda82b6.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "ed7a773a99c2175eedfd824d5267b275"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-cfd4c721da464cfc4cac.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "6b3bc36acb849b191b503691aacc759b"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-a790797640f1527589f2.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "e8a0f54c2af652160ea7a82d8c437276"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-8ad613dd7b827982a55f.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "935aad6b9d3f53102cfdf707a92ff98e"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-decc6dbcc2d64b839835.js`))) {
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
