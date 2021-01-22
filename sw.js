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
    "url": "webpack-runtime-04eb8bc6952319147adf.js"
  },
  {
    "url": "framework-1ffecd2421b8acab27d5.js"
  },
  {
    "url": "styles.e7ba35cea6d93aec6af0.css"
  },
  {
    "url": "styles-4d1902e7bd39726e0535.js"
  },
  {
    "url": "app-dfa54c2c41e7fa21a890.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "18f942108d794540eb913332cda5739f"
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
    "revision": "fc35cdf4064666b0386dcb6667601d1b"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "f77b1e0dc03952ebbac9ff1cf6c7244b"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "a040cda7c32c144d1727385bfc678042"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "11a2bc7cd8588da14f5298965cf0ad76"
  },
  {
    "url": "page-data/sq/d/3159585216.json",
    "revision": "c2a19842bac2ebad1401069111d856ae"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "f061dfc53ae24bee83192adc29890f6c"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "0ef358c63ce8bb18f8adb15ea2b544c7"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6f7680d15e8b83b3dfdf9da87d863630"
  },
  {
    "url": "polyfill-860c3442a8635066b9ae.js"
  },
  {
    "url": "component---src-pages-404-mdx-67799612b5f307d89697.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "fea1d7a7fe73fd6a94ee8107e2af37d7"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "b2e58e1e4369775e0442ebd30889d4ec"
  },
  {
    "url": "component---src-pages-clients-mdx-89dbc7cb464a6e5aa149.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "967f4b012ebab966fb4d10ea9cb683ee"
  },
  {
    "url": "component---src-pages-dashboard-mdx-f22accdfbb91cb4f1e92.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "651f5826438a71a7649667e43d08cdca"
  },
  {
    "url": "component---src-pages-devices-mdx-dd6b0e9085b32f772d7c.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "03a0b9ad98dac63418a3a6ceee9df48a"
  },
  {
    "url": "component---src-pages-dtmi-mdx-be9cc199d9bf793dcf4a.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "4d16b9ced73aa2359df73019aa8f4aa8"
  },
  {
    "url": "component---src-pages-github-mdx-cc418693f32595000862.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a2cb2967940b7b20a25d80d17b28b568"
  },
  {
    "url": "component---src-pages-index-mdx-1bbdbc2b2664940936de.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cc8e1a4d0d1a3d7cc57d6cf8f299a866"
  },
  {
    "url": "component---src-components-spec-tsx-f35682de84728a2eafc2.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "3b2a045a8d44a34decc3a08cc7c272d6"
  },
  {
    "url": "component---src-pages-services-mdx-2cad79377483b256e41c.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "52a87321a4c66709786ff93f64a5beba"
  },
  {
    "url": "component---src-pages-tools-mdx-be9465cbe82ffbbd4451.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "45eeac4fa29132d0ef24419b38be985a"
  },
  {
    "url": "component---src-pages-traces-mdx-dba49d66f0139c969163.js"
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
    "revision": "9da7d1b5de7887495e07a0c5c4b84bc1"
  },
  {
    "url": "component---src-templates-service-mdx-a099d2f0140375c11000.js"
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
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "58495fa8596a7a7479330cb7113df144"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "0451395a76956324ae949362027f5081"
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
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "167dc4985bcb86c102652f7444912f2f"
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
    "url": "page-data/services/distance/page-data.json",
    "revision": "16ae5871e46b07498653ee75391b98a3"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "72dc0bc542324af6659c193e7e6e3e4b"
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
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "3f14501728a2253e6931d84e98ef6927"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "1bd960758fda82e9f0d1d357bc2dc2cb"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "6cf90807da40d4f2b06a58bdb152a499"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "314c583d981aa3660a9cb8a718dffac1"
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
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "02c96c2758250b17f8d6795eb004bd06"
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
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "0320a730398f98f088a8e6b3319781e7"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "f7faa55d79ee85d47836726709b04f43"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "4cc01d8ff508dd53e71544ee28d613fa"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "8ba5bf4e94d1d7bca5998bc81c661470"
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
    "url": "page-data/services/switch/page-data.json",
    "revision": "e315ae3cb01d20672b83558ba90050e7"
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
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "e37e95ebca7f17bc640ceba50add7620"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "3afd62f357db0bbe53a62d1bb6c6275b"
  },
  {
    "url": "page-data/services/voc/page-data.json",
    "revision": "1595145f6516783cc77df51bb3291c13"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "fa356981a6ee30f102194e9fd062f3b5"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "f11058f3fa93dc37d311a9b7b31a68c7"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "2b1aba2949ceb24f37cb390f0e267aab"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-6c9fedd2e1adbc891978.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "31b793b39a1528a8c48024a68b91416c"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-34e84f83e085c61b88bc.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "2bd1339ffd8dd4418f67b6bbed5cf2a7"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-fbae3717469a591c5b49.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "e794e1985cb4abf4e3496339193577da"
  },
  {
    "url": "component---src-pages-tools-device-designer-mdx-80d78ac46a56d3d022c4.js"
  },
  {
    "url": "page-data/tools/device-designer/page-data.json",
    "revision": "66cd6bdc9d2f1fbd86502191a9295844"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-16e3c21afb8fa8e73e43.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "20770f6e99039931d28f33722c1efaef"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-9aa5571182fa66d4ac55.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "312c3ecfca56255b9067d034380928cd"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-86af87fa2ad0d4611bb4.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "e885527c451bd0f2811d8db1b2baf2d7"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-625110dc2e92733d53b3.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "c3a55030623c794540240dbb2a688b43"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-27bf31fa59df4ed75c83.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "a1d778395f76551022fba9a553460057"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-f52e8482aa463eacb7e3.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "e191865620da5962b72dba3bf31d587d"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-b2dad1af33c8750ea887.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "0baf4d2c559b6ebd82ff96ad961a6e57"
  },
  {
    "url": "component---src-pages-tools-player-mdx-e3aca6473ab7badfd0da.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "b143b3245e2a0bac973323c207be1e77"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-2819b3075a428c08187f.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "30fcf463a7302b11d835d8661a819759"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-8f0146f52cdc315e5533.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "ed7a773a99c2175eedfd824d5267b275"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-4085d65aab705af87548.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "94f948cf0fa7517a3508b36fe7fa2f39"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-1e18c5e11041a5a6b999.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "e8a0f54c2af652160ea7a82d8c437276"
  },
  {
    "url": "component---src-pages-tools-status-light-designer-mdx-94d2f959bc828a9dccf1.js"
  },
  {
    "url": "page-data/tools/status-light-designer/page-data.json",
    "revision": "1bcc4f2c7acaf872699270acff998459"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-ad1d14ebb014edce52a2.js"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-dfa54c2c41e7fa21a890.js`))) {
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
