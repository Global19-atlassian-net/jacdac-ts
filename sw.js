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
    "url": "webpack-runtime-9f8033a765507418d775.js"
  },
  {
    "url": "styles.4846cb2b6033eb0b568f.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-5a2e1e5177f75812222d.js"
  },
  {
    "url": "8a28b14e-4ab919c4e3cd6c59ed97.js"
  },
  {
    "url": "f65a48b9-98ce7bf9e6017f705a09.js"
  },
  {
    "url": "app-7f64acde6307f7db4e02.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "03bdd2166956806f99d48e06e6863559"
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
    "revision": "3da70bf9a2cf43b9ea6e37982ad087db"
  },
  {
    "url": "polyfill-568330c3e85cde5da1cf.js"
  },
  {
    "url": "61f5d369348cc6042d40c62aacf11e2d3f96f0ff-2bd1cda3a9e6b131fd81.js"
  },
  {
    "url": "component---src-pages-404-mdx-a08bea98d44065751215.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "98b020da972f833c829fa8b48f157843"
  },
  {
    "url": "page-data/sq/d/1539982312.json",
    "revision": "f6f5f1ced13f066690ce579a0b945710"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "ebecc441fa6f87d3d58159be774796b9"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "e971d61f2de7ebf654e89a26710a1506"
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
    "revision": "36f976e0a8b69f8fbb040f89f23428c2"
  },
  {
    "url": "component---src-pages-clients-mdx-36d76dcef6c9497cb1ce.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "05e7c9880417d6a55e5103b67fd95fce"
  },
  {
    "url": "component---src-pages-devices-mdx-76bee9e24f6a97259985.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "1b88e484f4a8ad40c01aaca0c990d188"
  },
  {
    "url": "component---src-pages-index-mdx-4d5935176ab278953ce6.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "6559737e47853dd0838a1401fb6d94c0"
  },
  {
    "url": "component---src-pages-sandbox-mdx-0be9c5b6e3042368afc8.js"
  },
  {
    "url": "page-data/sandbox/page-data.json",
    "revision": "677ae5e6981e0d47a75baa9df951cd58"
  },
  {
    "url": "component---src-pages-services-mdx-5781095333a3b0e1bd3b.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "b2e717c06b58f30bdcdb177c9c15ea90"
  },
  {
    "url": "component---src-components-spec-tsx-4ec68cdba1ca324546e0.js"
  },
  {
    "url": "page-data/specification/page-data.json",
    "revision": "044470a679fd267411c74bd4e77a1af9"
  },
  {
    "url": "component---src-pages-tools-mdx-c246a00302797fce2a34.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "bfc6c30d5848a776eba87db510679a04"
  },
  {
    "url": "component---src-pages-traces-mdx-bb53ed2b706218b4373a.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "ba54cf9459f6ed7d8be94284ae9de2e3"
  },
  {
    "url": "page-data/specification/device-catalog/page-data.json",
    "revision": "0fec45627245c9d4f750c4f928af957c"
  },
  {
    "url": "page-data/specification/glossary/page-data.json",
    "revision": "8929a828c8adee0008f453ee7a1513b7"
  },
  {
    "url": "page-data/specification/jacdac-protocol/page-data.json",
    "revision": "5132ef47f72893913f64a685193426d9"
  },
  {
    "url": "page-data/specification/service-spec-language/page-data.json",
    "revision": "61c647495f678cf8e3ce8c79980ddf9f"
  },
  {
    "url": "component---src-templates-service-mdx-356f830002aef8892c51.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "76033c39ef2ed1e0c4092c4ed62943fc"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "378529046065546174b14558ef22bd7f"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "52cf776eb9aeb2ea49f17ac5a8127cb6"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "747f4378a321eb379965ac2444730062"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "549f8265b748ca579e31542697153139"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "dcfb3f9b33a70c7303612bbed871a169"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "ff6271c4f1b63c505eb7897cf517a573"
  },
  {
    "url": "page-data/services/crank/page-data.json",
    "revision": "31f6b994b389da18f031d5a3755ff953"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "c3b1ba1fc235971d3df7e6559f8c2857"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "6a5508dd8493a2ebab2dd761583e90b9"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "aa6a8653ffe7471b8c942221a353dcaa"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "271ef2f7419e999c250d1e209097035f"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "5a037c40ca9ffc0af858a4d8e7ec2ba0"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "29633126fa213c0ca50451b399d5c1c3"
  },
  {
    "url": "page-data/services/mouse/page-data.json",
    "revision": "cf68d19329afdb3bbe0020965cef2dcf"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "d87790d39799db3b9915e54ada5bf098"
  },
  {
    "url": "page-data/services/music/page-data.json",
    "revision": "c00dc6c7b9606380a559a87bc53c89e4"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "47132e9852eafe0bc33f3bbc29d40928"
  },
  {
    "url": "page-data/services/pwmlight/page-data.json",
    "revision": "50bd32abf489c1ea96d8afc8e24642a3"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "9c8b8b26c8a4430e3c29d0a3af0e7728"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "4b9ab5fa1843b4735caf0b135648f87a"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "ef5663a6184ee6cf962382625aa78d91"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "8d1aeac6ad5bd1bfff51ce64cd04f7b9"
  },
  {
    "url": "page-data/services/temperature/page-data.json",
    "revision": "18f115fd11fdceebf7cd9282f75fd44f"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "8d744ca83288cc3269ac68a226acd845"
  },
  {
    "url": "component---src-templates-device-mdx-081c5febc80e95d07441.js"
  },
  {
    "url": "page-data/devices/microsoft-jm-acc/page-data.json",
    "revision": "8ed73f7029b66a8548da7e9e2f10e944"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-btn/page-data.json",
    "revision": "eab892ec7c08e37a5612e8ae8d89a735"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-ctrls/page-data.json",
    "revision": "3173ac9fe288b58bb976ef13b264ca51"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank/page-data.json",
    "revision": "a635fdb2d76019a51faa349c9c819ac2"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank-btn/page-data.json",
    "revision": "2a476210e2db0954f2c4b6dda6ecc813"
  },
  {
    "url": "page-data/devices/microsoft-jm-gamepad/page-data.json",
    "revision": "ec61d44b0e732759434e13dd46e4ac98"
  },
  {
    "url": "page-data/devices/microsoft-jm-ml/page-data.json",
    "revision": "0c1dae0a1d19f9a57f56b24281e4a319"
  },
  {
    "url": "page-data/devices/microsoft-jm-motor/page-data.json",
    "revision": "5f8d039bf044f0bd7d3b1f3568c1a772"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx/page-data.json",
    "revision": "b17de1505c38f87eae4932800b27b13e"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx-pwr/page-data.json",
    "revision": "33aa8f932ae08cde8439715db07fca9b"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto/page-data.json",
    "revision": "b59e65c5d486a91bb45c2ab3e47024fc"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto-touch/page-data.json",
    "revision": "bcda5521f7a78c47fb15a86c320ed66c"
  },
  {
    "url": "page-data/devices/microsoft-jm-pwr/page-data.json",
    "revision": "d03a9fac78c4c7849816a19b29407627"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo/page-data.json",
    "revision": "f443f9f76b6956481f3c6749317b1ffd"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo-pwr/page-data.json",
    "revision": "2fb903abf1314089a2355db7f80a35a8"
  },
  {
    "url": "page-data/devices/microsoft-jm-slider/page-data.json",
    "revision": "537823bffe1b33e1e3328d01c8c680ec"
  },
  {
    "url": "page-data/devices/microsoft-jm-snd/page-data.json",
    "revision": "b236b7028b824a6095f9129b7de3179a"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-009345a49f1121e67396.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "a2e7df289860285d69d6178e06426473"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-fc94dd4053ab6fa3bd37.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "43d218c0d880803f3fa55190cbd2b9e4"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-54364c830db87903fa30.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "c11843b7c8288d6626fde0cabe8932a1"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-5a261033d3abbcc91d93.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "4536f7c45d607f2548118055af2bb87a"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-475bc542d7db3aab9eba.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "1adcb562f396937290f8d9f184d93036"
  },
  {
    "url": "component---src-pages-tools-player-mdx-7facf1b4efe3d5858cd7.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "7acc243538919d8758925c2eb0c8fddc"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-d6d681bf765a16cd282f.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "4ce9092293866a038edf5e5e68f2423f"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-d0a5639f4636e86beee2.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "2b985d6aa2031b313a42438dff73696e"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-e5a1101e0793e475c124.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "49e989d5a3d906f14694053678c5de6e"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-7f64acde6307f7db4e02.js`))) {
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
