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
    "url": "webpack-runtime-7ea168eeff676cd9ae56.js"
  },
  {
    "url": "framework-84c5bc9bcda17bddb490.js"
  },
  {
    "url": "app-79cf8aa8c07ca97000cc.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ae3e5ec942943693866bde9735c42b47"
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
    "revision": "5dcd74bc0ad17ba6406272561e995a0a"
  },
  {
    "url": "polyfill-8cd958d8fe54e5172afb.js"
  },
  {
    "url": "styles.1bcf0d809ee48396e628.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "29ef597415c3af6b39979bc16a29a50b0455bf16-a1da96db5011f10f0bc5.js"
  },
  {
    "url": "component---src-pages-404-mdx-1058db2afbe64e5c3852.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "fea1d7a7fe73fd6a94ee8107e2af37d7"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "26b566a8ea3f29b4c6a805fc2b7788cd"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "34ea851603e237eb2062b2a4a6772672"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "8888d9f8ab0c01bbb5ff9db1fa9d44dd"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "1584c065dab6c0803b87911abc480ff5"
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
    "revision": "b2e58e1e4369775e0442ebd30889d4ec"
  },
  {
    "url": "component---src-pages-clients-mdx-b2f0ea5dd056dd78df36.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "967f4b012ebab966fb4d10ea9cb683ee"
  },
  {
    "url": "component---src-pages-devices-mdx-991d708c637f122be84e.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "dd6e13fea94a3994796c69399ca408ca"
  },
  {
    "url": "component---src-pages-github-mdx-8967849246d69767f9d0.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a2cb2967940b7b20a25d80d17b28b568"
  },
  {
    "url": "component---src-pages-index-mdx-9d015800eaa72b69349e.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "60abf29b69db739dc65718c6cb6e0936"
  },
  {
    "url": "component---src-components-spec-tsx-5b5e966ffcbd698d05d1.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "713079fde91c04cadb204a15ec2749bc"
  },
  {
    "url": "component---src-pages-services-mdx-305af546877f7196c166.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "52a87321a4c66709786ff93f64a5beba"
  },
  {
    "url": "component---src-pages-tools-mdx-50b78e9096789bb27ede.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "45eeac4fa29132d0ef24419b38be985a"
  },
  {
    "url": "component---src-pages-traces-mdx-792818d61cddbfdf8533.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "836a2e833df7e847bcee04985b16f10b"
  },
  {
    "url": "page-data/reference/device-entry/page-data.json",
    "revision": "f1e66a7835d8d10ba958219aa4ed8002"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "be4f9a311fe9bcef4f566159672ab9ff"
  },
  {
    "url": "page-data/reference/motivation/page-data.json",
    "revision": "819187928426d218879c9d84a27cdffe"
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
    "url": "component---src-templates-service-mdx-508447da2d8902190f12.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "dbfbbb7d537ae2a389473c0c4158fc90"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "7997a8c4adb848a69b3b7d800ccd1dec"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "1e60a576f366363675f4aaf292a23863"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "b369fb76c0bd96c1075b57ecb3e46dd8"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "1be1d030523679131a50230949cc4306"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "40122295c68835131544fab375c68945"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "bfbb0371fbcc679793f617616fdde7a9"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "1d5d4b08250508a41129db4969ed362a"
  },
  {
    "url": "page-data/services/crank/page-data.json",
    "revision": "29833893a1ea96e14ac22f5f25f650c0"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "81c3949cd6ee2666d16fc2f6115380db"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "807e74b345002e5ebccbc5b0a4f24123"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "bafe4ac030c1c55cd5a51fc7300ea22f"
  },
  {
    "url": "page-data/services/keyboard/page-data.json",
    "revision": "db0e476e95e586280562dc9961a7003d"
  },
  {
    "url": "page-data/services/ledmatrixcontroller/page-data.json",
    "revision": "04deeea27f02989132777a7b979397e2"
  },
  {
    "url": "page-data/services/ledmatrixdisplay/page-data.json",
    "revision": "7bbcaf977ff5ca3bde98d91e7a060273"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "f4efa475b949b7ace37ff11c948ddfa7"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "86c1513b6ab9721c93cd3efa4afa83fd"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "7c7d94cc50eaaa082d13f3747f4b7071"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "1fa83280bfcb01407670825474062d4a"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "2e0c0dc46222c91d32fb710a6d4e81e7"
  },
  {
    "url": "page-data/services/mouse/page-data.json",
    "revision": "ac02d5154021edcb91f6c9f9e337c21d"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "181c050ec881aee47f4d630139eaf098"
  },
  {
    "url": "page-data/services/music/page-data.json",
    "revision": "efd5d6fbed251196622c9cc140390dd3"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "7f854456caada9a40bdd4bff73adb927"
  },
  {
    "url": "page-data/services/pwmlight/page-data.json",
    "revision": "c53cbeca66f70ec0b1596bfa9fc37cae"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "e7c66378a44265187d258773b9a0bfd1"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "d3a7c13bab535bfeb46ed2fd923365c8"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "6adc657d1949400ecffb4f6bd522cab7"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "69beecb9ce2fcfa61b46f38a7a23cb68"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "bfa92fb86bc8d2d8e31ae6a8c9c9e061"
  },
  {
    "url": "page-data/services/temperature/page-data.json",
    "revision": "3cf86e10159ff6033bc6865c0f0a76f2"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "a107cd4ee6583cdb263e22c8a3035dc2"
  },
  {
    "url": "component---src-templates-device-mdx-5678ed183d26c73bd001.js"
  },
  {
    "url": "page-data/devices/microsoft-jm-acc/page-data.json",
    "revision": "409fd32a1ab82da1050aed688d607fa6"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-btn/page-data.json",
    "revision": "226526832d10ca7b34c78cf3442447b4"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-ctrls/page-data.json",
    "revision": "e203480485d1f1d3b33e81eea9762680"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank/page-data.json",
    "revision": "30bde79e8247628242b2062b18005b42"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank-btn/page-data.json",
    "revision": "dbdc3f50ff10636dd39367b166517cd4"
  },
  {
    "url": "page-data/devices/microsoft-jm-gamepad/page-data.json",
    "revision": "85b0e50686acf40b05e5595610193e7f"
  },
  {
    "url": "page-data/devices/microsoft-jm-ml/page-data.json",
    "revision": "b0fb9a53db770298f8eed4ce07429f3d"
  },
  {
    "url": "page-data/devices/microsoft-jm-motor/page-data.json",
    "revision": "e2c2503118d2132a1d887d270d724a1f"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx/page-data.json",
    "revision": "083a31728e6319de6627c651be45ff29"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx-pwr/page-data.json",
    "revision": "6a4dd9a6b4ee69f632c4b140ab8e4f95"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto/page-data.json",
    "revision": "7e95902254883a0b2380dd3610dbbfdc"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto-touch/page-data.json",
    "revision": "83d93a920643c9fc3a36b1504ecd8ae8"
  },
  {
    "url": "page-data/devices/microsoft-jm-pwr/page-data.json",
    "revision": "0447dc3ffce8b5ea2230dac9e7f89777"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo/page-data.json",
    "revision": "bac1c9a4b190459634993febab0c6ed1"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo-pwr/page-data.json",
    "revision": "9b5460f57a911df5f57cfa6676fbbc21"
  },
  {
    "url": "page-data/devices/microsoft-jm-slider/page-data.json",
    "revision": "63b19fd37d71a9d80b64bd681ab48aca"
  },
  {
    "url": "page-data/devices/microsoft-jm-snd/page-data.json",
    "revision": "06b34a378e61cdcb9e8245064b228f2e"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-d07ea17d24f9b3d510f8.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "fdbcc3e317efdc95fb1eb244c409d897"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-c333d512c3d600994781.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "e794e1985cb4abf4e3496339193577da"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-2e3d51abd2a00be01bba.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "e353a00467b35419c18a983f8e1516ef"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-c8d3496b7a5e722791a9.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "312c3ecfca56255b9067d034380928cd"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-237490971ef6eff3d549.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "930148ed2d8dcf5c605cf00def46e4cc"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-e08a4818f15c227d6f39.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "c0fca0b4752772f0997c647159a71051"
  },
  {
    "url": "component---src-pages-tools-player-mdx-083a6432ea898e80150e.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "b143b3245e2a0bac973323c207be1e77"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-cc09e4c540a05f6e1903.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "78567749eefd3cf7a91ebfb583f99272"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-9f35476ab034b4620df2.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "94f948cf0fa7517a3508b36fe7fa2f39"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-d2024af9687306a685d8.js"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-79cf8aa8c07ca97000cc.js`))) {
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
