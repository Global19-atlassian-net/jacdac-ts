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
    "url": "webpack-runtime-60b619681e7c6dbd1f82.js"
  },
  {
    "url": "framework-42776f85416e151aa8b2.js"
  },
  {
    "url": "app-819daf9f68f0ee13639f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fc204797a69bd11d68885b8b31ef5945"
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
    "revision": "41deb3a804885f856928a33c3e91399d"
  },
  {
    "url": "polyfill-54eb59dc70b6e3f2d957.js"
  },
  {
    "url": "styles.1bcf0d809ee48396e628.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "519e53d6af6689699ed3e57bed8b43417da5e214-f240b3e909e9cd583e35.js"
  },
  {
    "url": "component---src-pages-404-mdx-1058db2afbe64e5c3852.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "47a96ecf4e2bbf95bd9343fdabe7e56e"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "c5dbe0914b38d694d51037bd139569be"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "ad0b4fd05e1b6aef43ba19b85420d13a"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "774b004ca0ca8f22966f1516dcdcf8ad"
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
    "revision": "7db1a2d81e41fad25886cc9eb2894bed"
  },
  {
    "url": "component---src-pages-clients-mdx-b2f0ea5dd056dd78df36.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "825f2320478b72cd99ef5e3068c39bfc"
  },
  {
    "url": "component---src-pages-devices-mdx-991d708c637f122be84e.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "48baaf3bf0843e7a0acb507651fa43ba"
  },
  {
    "url": "component---src-pages-github-mdx-48c4e2bfd930937fb494.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "404d25f81fa7ba6fd213458984768fad"
  },
  {
    "url": "component---src-pages-index-mdx-ee5ac2f659277065a91d.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0b54cb4c348931ae5b54f2dd7441f5e8"
  },
  {
    "url": "component---src-components-spec-tsx-5b5e966ffcbd698d05d1.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "ec56946e8e530b77cb5d623938202c11"
  },
  {
    "url": "component---src-pages-services-mdx-305af546877f7196c166.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "72d5ffbf0643058631187bfe8daefe33"
  },
  {
    "url": "component---src-pages-tools-mdx-8facbf79b58d16ecd1c6.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "a6d8ba9573e62b5aa245e865cc224ad8"
  },
  {
    "url": "component---src-pages-traces-mdx-f15cf2efc06c0ed7008c.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "625a43dbab03fab9961120cf48157c19"
  },
  {
    "url": "page-data/reference/device-entry/page-data.json",
    "revision": "4f23c450311132ec441b01cbe9ac8581"
  },
  {
    "url": "page-data/reference/device-identity/page-data.json",
    "revision": "f28ae8be3b16ab531a4117a908fa22e9"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "5dc50cfefba0fa5247e9c65f67b8db51"
  },
  {
    "url": "page-data/reference/jd-highlevel/page-data.json",
    "revision": "2bcc75d2c34b079886fc6220189bdd9a"
  },
  {
    "url": "page-data/reference/motivation/page-data.json",
    "revision": "f60db8a43c2a8171a267340bd0e08e46"
  },
  {
    "url": "page-data/reference/physical-layer/page-data.json",
    "revision": "01de8c014e0d01e23dc135f557246cde"
  },
  {
    "url": "page-data/reference/service-layer/page-data.json",
    "revision": "c7556e985646e121cfbec1a541fa37ea"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "1ea75cfc4b154e4bf9e6df8b3053897a"
  },
  {
    "url": "page-data/reference/transport-layer/page-data.json",
    "revision": "324a5bcb1909b2f799ef376a6524f544"
  },
  {
    "url": "component---src-templates-service-mdx-e66d5709b13d657ebbab.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "9216785351b7dfde0f3460ca679906fd"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "4ba8c686a8120a360b3d0d2147f32dc5"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "cb136eaaf62fae369a0f026dbc826729"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "727cd686267e1ba2954a8ebb360f6e5a"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "b7504854b451872b408e68e94dc816ae"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "6984706cfa150286600307972400a24f"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "6968b26dd1f085a344d90765c4077f5a"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "5f3aa1156653395ff44a020cc7328f97"
  },
  {
    "url": "page-data/services/crank/page-data.json",
    "revision": "365475d7deab09be946fd3c3e064e539"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "bf0419b13e859612de00e8f992ed26c2"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "3fb61fa61fd05a8f5564209aa5c40df0"
  },
  {
    "url": "page-data/services/keyboard/page-data.json",
    "revision": "fa8a6de0a7ce6b5c3fadae92e2fbec4a"
  },
  {
    "url": "page-data/services/ledmatrixcontroller/page-data.json",
    "revision": "9738943fb8bb2970751202ea59a42115"
  },
  {
    "url": "page-data/services/ledmatrixdisplay/page-data.json",
    "revision": "86d563779ae6db92e7bb0c1804541004"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "588ee5188138745be96d1728ccd08094"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "ca655cba27a9ddc27d62298c46a8838d"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "f4e95ec2d9d4419d8735dbe195426d3d"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "67ee96c8030d851479be674367979205"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "21b33e1435e5768357b489b7e96d4fac"
  },
  {
    "url": "page-data/services/mouse/page-data.json",
    "revision": "9651b035a568e98dedb34bc73765b5ce"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "0ca70521c57e91aa5474e58799b998d5"
  },
  {
    "url": "page-data/services/music/page-data.json",
    "revision": "655f14d221d9bdbb44223b17fea9788d"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "5fb951ed6c169b31e654e9618152849e"
  },
  {
    "url": "page-data/services/pwmlight/page-data.json",
    "revision": "385f9ab20e7a5e5b9ca93cbed389901a"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "48f3b31aa02192105fa984eb130d72a0"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "c406951b3a0b0c26e58f8f09572e4533"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "5334062de2d30b7448d37b1ac50f3b70"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "85235cf579392ee7137cdb6b3cfe1d94"
  },
  {
    "url": "page-data/services/temperature/page-data.json",
    "revision": "5fc2e329e9c47bb0f95a34e784c4ce62"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "a48427804b9e99a1daddee275999df29"
  },
  {
    "url": "component---src-templates-device-mdx-de420a9f8d6982ed1fe1.js"
  },
  {
    "url": "page-data/devices/microsoft-jm-acc/page-data.json",
    "revision": "1482dace5d88b91f26286a805d2429de"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-btn/page-data.json",
    "revision": "07ec942a32583d9331897b1ed57f0ab5"
  },
  {
    "url": "page-data/devices/microsoft-jm-arcade-ctrls/page-data.json",
    "revision": "f2c34d100be6f85cbf40105a4ec82b0c"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank/page-data.json",
    "revision": "ed7f62ede1b1cf67ff761e1601f99991"
  },
  {
    "url": "page-data/devices/microsoft-jm-crank-btn/page-data.json",
    "revision": "4c081a611d9a4f5d22a2f2c58dc44c1e"
  },
  {
    "url": "page-data/devices/microsoft-jm-gamepad/page-data.json",
    "revision": "e026cc2ab4e300de30cb2c3200eccc37"
  },
  {
    "url": "page-data/devices/microsoft-jm-ml/page-data.json",
    "revision": "a702913be8b4183d1e4c9555af8a224a"
  },
  {
    "url": "page-data/devices/microsoft-jm-motor/page-data.json",
    "revision": "cfeb5069a83ca8106c322ecc12bd0730"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx/page-data.json",
    "revision": "a36c2f7a66fb7e81d1cbd7c792a40780"
  },
  {
    "url": "page-data/devices/microsoft-jm-npx-pwr/page-data.json",
    "revision": "f5b7714c0966609b8317e0d9a53f6280"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto/page-data.json",
    "revision": "2362f947f0c34adbeab232cc1b1a6e37"
  },
  {
    "url": "page-data/devices/microsoft-jm-proto-touch/page-data.json",
    "revision": "18a15d71068ea06f0c6c4b2d497a7ea6"
  },
  {
    "url": "page-data/devices/microsoft-jm-pwr/page-data.json",
    "revision": "b825409ff205a37f7983bd9ce74eb8e5"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo/page-data.json",
    "revision": "717f05395ad617f0f7f3b79e7b72de4b"
  },
  {
    "url": "page-data/devices/microsoft-jm-servo-pwr/page-data.json",
    "revision": "7bd2c8b14fd5153c2ea72e65aa2814a2"
  },
  {
    "url": "page-data/devices/microsoft-jm-slider/page-data.json",
    "revision": "f1e22d1cc37c1a192b821680efbb9455"
  },
  {
    "url": "page-data/devices/microsoft-jm-snd/page-data.json",
    "revision": "64fd4abf0f2907c822f5a0f90c3756fb"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-949aea35beb395656be2.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "3918ecfae6b3dbf4b30148731ae2086b"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-170d5940357c5eecc9a4.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "9b5312946da22a3db5a9e8d029698684"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-38a50d9b05dbb9c58fee.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "643f7326d4eb2b8e0a48be8cdc8caf05"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-a31a6fa34ff2d38e416f.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "36ef66d4931b6a1e9260967465b24019"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-cba4f798348ac74917ff.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "26e0531cf602601b6e0465330de4cd6e"
  },
  {
    "url": "component---src-pages-tools-player-mdx-acf954e137c2155e9849.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "9d90b558a80f810519add2ac577a567e"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-ade9f993df267cf96279.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "0f303877fb25fe93bfd7b9220de61284"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-b400e7a02559dcdc7307.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "00e79016650118a94881aa39282be27c"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-c231d9f574894aabbfdc.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "ba4cd48f540781dc7cc09b5874030171"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-819daf9f68f0ee13639f.js`))) {
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
