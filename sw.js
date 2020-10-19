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
    "url": "webpack-runtime-9876a7f2e7278f3814ab.js"
  },
  {
    "url": "styles.273c79667365f697bf1c.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-4f158ce22b64be670d28.js"
  },
  {
    "url": "8a28b14e-4ab919c4e3cd6c59ed97.js"
  },
  {
    "url": "f65a48b9-047a011c6021491af099.js"
  },
  {
    "url": "app-8f795fd1f762978e0b8a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8f1c159d19dc2291b61bff905e23f0c2"
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
    "revision": "44e9a743604f60a9ae437d9bd681661d"
  },
  {
    "url": "polyfill-557a1d3e3c5faa9f0e99.js"
  },
  {
    "url": "2fd446977d3c6a804676c9c51a676f612d0ec86a-621bb37509a75bc06dcf.js"
  },
  {
    "url": "component---src-pages-404-mdx-a08bea98d44065751215.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "22281cf748adc1305c3de2565a677c6e"
  },
  {
    "url": "page-data/sq/d/1539982312.json",
    "revision": "45cb16167907d283cd811f0ada55c7d1"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "ddb3e4003170d1d5abd5fec4086a3c99"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "37148122874b6e214ca946ca9429f5a2"
  },
  {
    "url": "page-data/sq/d/3159585216.json",
    "revision": "c2a19842bac2ebad1401069111d856ae"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "0ef358c63ce8bb18f8adb15ea2b544c7"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "9b2233b92c3d7ddfea8f2ddddffb0cd2"
  },
  {
    "url": "component---src-pages-clients-mdx-36d76dcef6c9497cb1ce.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "a6dc95e054bbc7042fe2aa9844b09439"
  },
  {
    "url": "component---src-pages-devices-mdx-76bee9e24f6a97259985.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "eb8b279c844a4acadb75409721666171"
  },
  {
    "url": "component---src-pages-index-mdx-72cc6be006859686e788.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "a0239fd1c968d28ce127e482c8a86c9c"
  },
  {
    "url": "component---src-pages-sandbox-mdx-0be9c5b6e3042368afc8.js"
  },
  {
    "url": "page-data/sandbox/page-data.json",
    "revision": "c1b244f6d9604032ad4ee60a044bb019"
  },
  {
    "url": "component---src-pages-services-mdx-5781095333a3b0e1bd3b.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "399d7cbee05d6fdf36f038155ff00bf8"
  },
  {
    "url": "component---src-components-spec-tsx-4ec68cdba1ca324546e0.js"
  },
  {
    "url": "page-data/specification/page-data.json",
    "revision": "90289fe03e95893b03e51fa5c5a8a2fb"
  },
  {
    "url": "component---src-pages-tools-mdx-c246a00302797fce2a34.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "2469cd729be83cd1624b4d4ffd34e0cb"
  },
  {
    "url": "page-data/specification/device-catalog/page-data.json",
    "revision": "6b0acaa10902cbe676198e75e4d7d1ba"
  },
  {
    "url": "page-data/specification/glossary/page-data.json",
    "revision": "b9f59669396826d2fbfbfbc3ba3aa535"
  },
  {
    "url": "page-data/specification/service-spec-language/page-data.json",
    "revision": "3ff1b67f49dd567d7cc51f512f717a5f"
  },
  {
    "url": "component---src-templates-service-mdx-9eaf8e714ae0f356e6d1.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "94a2002781897ffa441e833acba6ad37"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "8e2b3ae1e64180918676ad5343654932"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "979299c1c1ed4f07f622f5d8d550145f"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "3e57539a5d9492ad90cb88fdde29b0af"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "528702899c6463bc139ca5ffec3adecb"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "cc83409fab0ce907a0d27a6ca63c782f"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "1046509c4d346406dd5fd15c4b66d551"
  },
  {
    "url": "page-data/services/crank/page-data.json",
    "revision": "8f1e8a35e3c8356bd06416103e9d84e2"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "5b442d621f06dc0d64728539fe04f88c"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "b26563d50cf97ecae508c4ac2986e00b"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "88c8ad952ec6d6ef287e760034509cc2"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "2eab4792a5dd0a1b92548d8c8d49b10f"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "6c819ed5a13cd64e29b4ce8027e4ba1c"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "e475207fb3e79d59e92b2257d0c66e0d"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "52a84d66c4e8d682b49b347dac56b88f"
  },
  {
    "url": "page-data/services/music/page-data.json",
    "revision": "010b9a5232016e09115c9cbc55ed9909"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "ba3ecf7381c2b7977b3bfaf566729cf3"
  },
  {
    "url": "page-data/services/pwmlight/page-data.json",
    "revision": "fb852488d5f3fd416b9b08980c05b97f"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "dbf5634f5b9898aa6f51fcee0c3552d3"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "60686771f2641dfc5c1c303c7fb58e36"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "50840876430fa9d54aa020e73f93363c"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "919e0bd969db89004418cd81ccae3f5b"
  },
  {
    "url": "page-data/services/temperature/page-data.json",
    "revision": "318b1aba90ea18b8a0877dcc686d04a5"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "56ac9d658ad0801a2fa3bdd51ce525b9"
  },
  {
    "url": "component---src-templates-device-mdx-defb2c6e06c78ccc9eb1.js"
  },
  {
    "url": "page-data/devices/microsoft-jm-acc/page-data.json",
    "revision": "7cc53d8a431c7eee0f3afebce600cca7"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-btn/page-data.json",
    "revision": "c9db923adf64464590552545fbc85262"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-ctrls/page-data.json",
    "revision": "3341faa00d27859ce6384d67760733e2"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank/page-data.json",
    "revision": "0239e7b1ccb4e9e713f4bf7e171c689e"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank-btn/page-data.json",
    "revision": "9149e0defeaeefa08c4d4ac5ccc2b534"
  },
  {
    "url": "page-data/devices/microsoft-jm-gamepad/page-data.json",
    "revision": "3f3f6074863c7980c464a9fa07d7e798"
  },
  {
    "url": "page-data/devices/microsoft-jm-ml/page-data.json",
    "revision": "a4163c0df3d68d5a74a147e3a64d024d"
  },
  {
    "url": "page-data/devices/microsoft-jm-motor/page-data.json",
    "revision": "48a3f77ccdab36df1d217f9123ab889f"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx/page-data.json",
    "revision": "b29c02aab802a29902b0d92b9199f217"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx-pwr/page-data.json",
    "revision": "a70003a95bd0f0b401f23eee249e03b5"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto/page-data.json",
    "revision": "8be1689c6788669795b9d3a83406c1ff"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto-touch/page-data.json",
    "revision": "937f1d9f4c18cf8bfb694e1f677f9d45"
  },
  {
    "url": "page-data/devices/microsoft-jm-pwr/page-data.json",
    "revision": "fe818519ff20b0cbce583c43ca248182"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo/page-data.json",
    "revision": "71383e58b21e84b7afa26aaf435ed49c"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo-pwr/page-data.json",
    "revision": "990396d5842d7caf29dfb557b626d97b"
  },
  {
    "url": "page-data/devices/microsoft-jm-slider/page-data.json",
    "revision": "7a8135a2b1bbac3741e917edc98056f1"
  },
  {
    "url": "page-data/devices/microsoft-jm-snd/page-data.json",
    "revision": "bdf1724758a882b56a32dc11da864a43"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-009345a49f1121e67396.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "77f0cfc60bf10df00c3cc7b2f3038836"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-fc94dd4053ab6fa3bd37.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "8838eb061a74382ad54eef8d8a5f3b6e"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-54364c830db87903fa30.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "c008c2ac0691154d2d6eee4d0de9f8cd"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-5a261033d3abbcc91d93.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "95d254a300b9a55b0cfe1b9155294e3a"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-475bc542d7db3aab9eba.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "64fc7e36896b3b1c9d680f31a20224a5"
  },
  {
    "url": "component---src-pages-tools-player-mdx-7facf1b4efe3d5858cd7.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "2ee994d7fc4f807ede8e857ba2fc9380"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-d6d681bf765a16cd282f.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "b1c8c0e720916d30664c02fd0aa357f4"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-d0a5639f4636e86beee2.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "bf25d6a5cf30117383f1f7203e9f06d0"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-e5a1101e0793e475c124.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "b63fe409061400de922178496d61bd0d"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-8f795fd1f762978e0b8a.js`))) {
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
