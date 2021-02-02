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
    "url": "webpack-runtime-9162441463bf7392156c.js"
  },
  {
    "url": "framework-1ffecd2421b8acab27d5.js"
  },
  {
    "url": "styles.0c6cc3ec9c0425052bb9.css"
  },
  {
    "url": "styles-4d1902e7bd39726e0535.js"
  },
  {
    "url": "app-ff774971eb1cb5e9df04.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "33d8126cde4125cdf42cad33e8e634c0"
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
    "revision": "22bb2190c731dddc4ff6905f4769bef0"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "1085e92d14300c37554310bb0c34ab63"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "a040cda7c32c144d1727385bfc678042"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "0724c52a73a1f10bcb45c1f9c532277c"
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
    "revision": "cc606a9d848bf923f6c94668e8297a0b"
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
    "url": "component---src-pages-dashboard-mdx-11b9aa1785aa46ebb7c8.js"
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
    "revision": "5b40680e00f66bec309013c18c0059d0"
  },
  {
    "url": "component---src-pages-services-mdx-59b5b467638779726e1a.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "52a87321a4c66709786ff93f64a5beba"
  },
  {
    "url": "component---src-pages-tools-mdx-72d3bb11af90bb926af0.js"
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
    "url": "page-data/reference/led-animation/page-data.json",
    "revision": "7f8e53ad3a18c82ac48c9e52a7f223b3"
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
    "revision": "aec1c6e0a1abb48e8a70f1600e505a09"
  },
  {
    "url": "component---src-templates-service-mdx-0130d2ebef532958504b.js"
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
    "url": "page-data/services/color/page-data.json",
    "revision": "f4fb14c6a19d4ce8f1b8dfff8b0a769c"
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
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "a417a9aaf31a990f980db1278415b867"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "535cda83a8f5170142cc0a0cf6e04041"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "820d7494d0fb2cc078414750629f3ba6"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "26001fb267490e8a9962537eba880f79"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "e558e8afbc40ad958ab3a2b5dbcd81a1"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "626e2921cb99903df6c9df18fede8ab7"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "6c212299385e37eeaa21066bd58349cc"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "aa80808493b1de4aaa991c233647fd0c"
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
    "url": "page-data/services/motion/page-data.json",
    "revision": "dd4b200edb41d7f24e6ac723866698dc"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "2f50804a90074cf1770b9325cb511da5"
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
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "720284ee56eedd11b4459391f3c52dcb"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "0320a730398f98f088a8e6b3319781e7"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "b857d60a717d4439cdd1c88270a080b3"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "9cce41922b9ea9e5749b4b105ad2b864"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "f7faa55d79ee85d47836726709b04f43"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "9eda5cac564fbedea7bbba21d7222fd2"
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
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "1db256ea41f627dc75d41089f5c4c707"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "41c2fa69593f85a02897b8c29c660dbf"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "96e96d9dcf5f110b4315675ec63e613b"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "cf52914a20216a5e090f9fa623cab2ed"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "41251f6df8d13e2268df50f3ae4a4678"
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
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "9e46e09811b7cc791f3a3325a33df926"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "64de490d89f4636d7aa26a517dab7333"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "3afd62f357db0bbe53a62d1bb6c6275b"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "da6fc2cb2e9a94d6d54c503f4e354cd0"
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
    "url": "component---src-pages-tools-led-animation-designer-mdx-535213fea31ab8ecad67.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "a3897cb8f319fde40ffaaa0fe6ef7dac"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-2798ec1be3c425a6d01e.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "e885527c451bd0f2811d8db1b2baf2d7"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-71d3a8d3ad04048dcfcc.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "c3a55030623c794540240dbb2a688b43"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-9736f3fce9ace7bfc316.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "a1d778395f76551022fba9a553460057"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-6f191007d9ef9c465c4b.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "e191865620da5962b72dba3bf31d587d"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-53659dde1083385a4aa9.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "0baf4d2c559b6ebd82ff96ad961a6e57"
  },
  {
    "url": "component---src-pages-tools-player-mdx-e78fe1f4956cd55b3bfd.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "b143b3245e2a0bac973323c207be1e77"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-9051cc32585a1f600ed7.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "30fcf463a7302b11d835d8661a819759"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-09e62d30b4b0d5471971.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "ed7a773a99c2175eedfd824d5267b275"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-af26cb34539c34e08ba3.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "6b3bc36acb849b191b503691aacc759b"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-b5749353a0fdd1e3a51e.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "e8a0f54c2af652160ea7a82d8c437276"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-ff774971eb1cb5e9df04.js`))) {
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
