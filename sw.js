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
    "url": "webpack-runtime-829aeb612ed6cabde19d.js"
  },
  {
    "url": "framework-b127a1f811ef6126842d.js"
  },
  {
    "url": "app-06202b42a6ccd252e632.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "65b3ef5dbbdb144930c956434095bdf7"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-47c8d8b7529f7a984452.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f6d33c2ae77faf6b9ef41e4e98563159"
  },
  {
    "url": "polyfill-7124bc996e9df7372b4b.js"
  },
  {
    "url": "styles.1bcf0d809ee48396e628.css"
  },
  {
    "url": "styles-7d4153d260c0197f0043.js"
  },
  {
    "url": "e73235ffa343cbf04f86a667055d566c770988e1-8e5ac01f3c2b42bec79f.js"
  },
  {
    "url": "8a828f368b0a6f23c02befad9c9e9cb8c52ec0ee-17ddf1c18e267fcffc36.js"
  },
  {
    "url": "component---src-pages-404-mdx-20961d756cc4912ba7e2.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "fea1d7a7fe73fd6a94ee8107e2af37d7"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "01fae14208c9d555bd8d7695dce0ba89"
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
    "revision": "7e7c828bb6056a3c7f1078645b1f36d4"
  },
  {
    "url": "page-data/sq/d/3159585216.json",
    "revision": "c2a19842bac2ebad1401069111d856ae"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "bcf85d10f61f4b814f63aec5799a192c"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "0ef358c63ce8bb18f8adb15ea2b544c7"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "b2e58e1e4369775e0442ebd30889d4ec"
  },
  {
    "url": "component---src-pages-clients-mdx-c94732a3b0ac5a19a379.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "967f4b012ebab966fb4d10ea9cb683ee"
  },
  {
    "url": "component---src-pages-devices-mdx-8bf25912cef10de46c3d.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "dd6e13fea94a3994796c69399ca408ca"
  },
  {
    "url": "component---src-pages-dtmi-mdx-e9339920a39d59ab1da6.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "4d16b9ced73aa2359df73019aa8f4aa8"
  },
  {
    "url": "component---src-pages-github-mdx-745c1ece976cdc0432a2.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a2cb2967940b7b20a25d80d17b28b568"
  },
  {
    "url": "component---src-pages-index-mdx-9b8066e981acf4090dc1.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "60abf29b69db739dc65718c6cb6e0936"
  },
  {
    "url": "component---src-components-spec-tsx-b5a35ab7588b551dc5cf.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "3b2a045a8d44a34decc3a08cc7c272d6"
  },
  {
    "url": "component---src-pages-services-mdx-3c4ff65a21b7856aaa02.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "52a87321a4c66709786ff93f64a5beba"
  },
  {
    "url": "component---src-pages-tools-mdx-8fb04d0cb4e890e5a321.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "45eeac4fa29132d0ef24419b38be985a"
  },
  {
    "url": "component---src-pages-traces-mdx-00b8350807ae22079c85.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "836a2e833df7e847bcee04985b16f10b"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "d5da1d425edf4cc7c327056f24abfc2c"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "0ee7591db4cc0c3a70836597cbbb24e3"
  },
  {
    "url": "page-data/reference/motivation/page-data.json",
    "revision": "819187928426d218879c9d84a27cdffe"
  },
  {
    "url": "page-data/reference/pack-format/page-data.json",
    "revision": "edd966f5e613dd70b8217def25854d65"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "fcdffbe4521226b44bb42ed8ac625df6"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "8b18077fd15893fff51199534484cd0a"
  },
  {
    "url": "component---src-templates-service-mdx-657bc444182c1dd987f5.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "e1ef961b21065505aca2f8faf72378ad"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "7997a8c4adb848a69b3b7d800ccd1dec"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "9335f197615ce31b7df83b84fec6ac05"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "e01a6a408aa262cfcf3bd08f74eca6e0"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "69bb0474f547e9bab5b163ca22211b91"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "4a577a68fd37b13b43bfe5e7c2bb1433"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "d0b84639c4f95249582f75a585a74161"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "ff6580456ad44d29433ca9e69db15219"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "082522267f7e15b40900fb2386f5aeae"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "788713bae541cb01d565a8819e659fcd"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "3f0bd5cb3425bf2d488bb04379d4e920"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "493eedb10f4bea84d0a0dac24f11e836"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "bafe4ac030c1c55cd5a51fc7300ea22f"
  },
  {
    "url": "page-data/services/keyboard/page-data.json",
    "revision": "b065f4318223bb7abdddc0f98269f92f"
  },
  {
    "url": "page-data/services/ledmatrixcontroller/page-data.json",
    "revision": "e4778e47eb0639df8dc753b578b58af6"
  },
  {
    "url": "page-data/services/ledmatrixdisplay/page-data.json",
    "revision": "6cbe09dc2b41e9255b1e97a3ecdb62e5"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "0324d0a8ef525b04318a0d508131d1a0"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "d223478253943b7664fd78e61d65b88d"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "babc463f456b851b9b361f0b7e89d77a"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "25de0b1227b6d32120c0bed8d4ced435"
  },
  {
    "url": "page-data/services/monolight/page-data.json",
    "revision": "1235292ccbd3008e9b982c8efce68fa7"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "213507b679dba2b12a5e2180711ea503"
  },
  {
    "url": "page-data/services/mouse/page-data.json",
    "revision": "5897260c807f7ae3685f5d3c47516059"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "1a917d9b59af075d49900430c1ece249"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "43dc592776373393b274eec13349469b"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "f727b2d3307b093a3b4c05c88cddcb9f"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "82c2ae15b0d56d1ec9f09fbb84d0d4f6"
  },
  {
    "url": "page-data/services/rotary-encoder/page-data.json",
    "revision": "0696c3187679cd21797ce9b4bfee6e6d"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "da79397a0947d1693b5f643f5d624f81"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "f31965815af086179406c38a94f5f05c"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "98d3a23e9ae90cdf6a02343a10ab2846"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "f4e4e15e46262125d383c58efcaa54ba"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "9bb2967dfd22f6483e7f906463065273"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "a107cd4ee6583cdb263e22c8a3035dc2"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-b97338169b213d8b6e7b.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "761ee3f09fcab2bac4b1ea2d10bd8f71"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-c5b9f1b6393b14cf7ce4.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "fdbcc3e317efdc95fb1eb244c409d897"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-8c07f6f7ace32bd3a1aa.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "e794e1985cb4abf4e3496339193577da"
  },
  {
    "url": "component---src-pages-tools-device-designer-mdx-468688a7fcaf012d64f2.js"
  },
  {
    "url": "page-data/tools/device-designer/page-data.json",
    "revision": "66cd6bdc9d2f1fbd86502191a9295844"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-f6da5cabfc74dfc5249a.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "e353a00467b35419c18a983f8e1516ef"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-fc8a718f1e228fc8c9a4.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "312c3ecfca56255b9067d034380928cd"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-252df69b8b49c0d5d7e6.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "e885527c451bd0f2811d8db1b2baf2d7"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-94589d768076a67ee656.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "9c3b446247b8adcec5a8ffaf8ed30f27"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-34548328a73cf0ec77bb.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "d0c797a1359f1e60d319733b7c0aca8a"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-06a116ed961ba55c9fdc.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "930148ed2d8dcf5c605cf00def46e4cc"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-14fa94618459e6003540.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "c0fca0b4752772f0997c647159a71051"
  },
  {
    "url": "component---src-pages-tools-player-mdx-afb3fdef9d8f790b4b94.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "b143b3245e2a0bac973323c207be1e77"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-2bbdb154fb29b215f81e.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "c90d308fc766532ff56b09a1c1a7053b"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-f22fe1540069fbb6db09.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "78567749eefd3cf7a91ebfb583f99272"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-02f2f27c36a805360c41.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "94f948cf0fa7517a3508b36fe7fa2f39"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-ba5cee777e3808dc6d88.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "484e7adeab32cdf5bffb8202cc387e1a"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-c3ec5a7013fb14552c53.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "2a7024aa52aa377dee0162d2381b18d8"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-06202b42a6ccd252e632.js`))) {
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
