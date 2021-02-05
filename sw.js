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
    "url": "webpack-runtime-f08abe761523ca31183d.js"
  },
  {
    "url": "framework-f19c6c9d119c831d5054.js"
  },
  {
    "url": "styles.488bec41e2852ce31a16.css"
  },
  {
    "url": "styles-c212ca3684de16c6f115.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f508a86f124cd14983bd77ad28506689"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5988c10b84eb88d59ae8.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "6162d5123b9bd5e3baed1123885059d9"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "359bbb18facab14655a7a95efe816a2e"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "fe63dcdc309886d0a0ac41220588c86b"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "e40dd8252135768502151fe45fe30064"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "4cfe3341dcc518c03d5ed9caa4e8c3da"
  },
  {
    "url": "page-data/sq/d/3159585216.json",
    "revision": "5d2e72b71c2959e7b7cb24dbcbc36399"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "f061dfc53ae24bee83192adc29890f6c"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "03382e3277c004cb2baf444ef5702295"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e4d7a12c6e1ecaba6e0f8cded50182f8"
  },
  {
    "url": "polyfill-541f5afd2cddfffa2584.js"
  },
  {
    "url": "component---src-pages-404-mdx-562c68962f0375f7cd65.js"
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
    "url": "component---src-pages-clients-mdx-a8e2087f0f17f8ea08c2.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "967f4b012ebab966fb4d10ea9cb683ee"
  },
  {
    "url": "component---src-pages-dashboard-mdx-892e90ff24f27b1d8efa.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "651f5826438a71a7649667e43d08cdca"
  },
  {
    "url": "component---src-pages-devices-mdx-f0583fd48570277d8d70.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "03a0b9ad98dac63418a3a6ceee9df48a"
  },
  {
    "url": "component---src-pages-dtmi-mdx-6ebc17d2a804a0a4888c.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "4d16b9ced73aa2359df73019aa8f4aa8"
  },
  {
    "url": "component---src-pages-github-mdx-fe665250aa91a1ec06e6.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a2cb2967940b7b20a25d80d17b28b568"
  },
  {
    "url": "component---src-pages-index-mdx-4ba0adbee1fc27faf204.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cc8e1a4d0d1a3d7cc57d6cf8f299a866"
  },
  {
    "url": "component---src-components-spec-tsx-8cccf5b8eadb242f30bf.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "bfb402e0513d93b8a84ff1d3dc6200b2"
  },
  {
    "url": "component---src-pages-services-mdx-36e5187838c36b8c96ee.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "52a87321a4c66709786ff93f64a5beba"
  },
  {
    "url": "component---src-pages-tools-mdx-8575eb656e6716538bd6.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "45eeac4fa29132d0ef24419b38be985a"
  },
  {
    "url": "component---src-pages-traces-mdx-ca6a2ccc7336123d3b75.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "836a2e833df7e847bcee04985b16f10b"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "edb073f282f80efdc554f8cc9c71e0a0"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "731b9a86e7a4de36c636eccdc38894f4"
  },
  {
    "url": "component---src-templates-service-mdx-ccb652dcc06e93a50d20.js"
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
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "7a83ccbebbb1ac624d1a0ef3fb3cf62d"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "b9c9906e7f9dc7142bbb91aad8aba7e1"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "87268a67e3112563c2a04b2d7e3aae84"
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
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "a2cf1f312a3337f7e15c15efc24216f3"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "79cb7e6123776df2309f30a0e5238317"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "788713bae541cb01d565a8819e659fcd"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "2712104656ce41545062fc7c65742b95"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "822089252c1161ed2e323e18d98b01a7"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "b7b4c64cb8ffdd2e272e795beb3dd67e"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "e24383631e14c87bfb6776b9f65e0c24"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "f25eff3f21a487d9c6d2a7fe8d554c86"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "60c02c4eeab63d499cbeb8623a87f51f"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "493eedb10f4bea84d0a0dac24f11e836"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "f409b10f5a1bd48561861ef78e0a001d"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "bafe4ac030c1c55cd5a51fc7300ea22f"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "0709c7c9c347baf5f077194bce53ffb6"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "1c5fc9638f01ce216659ee711fa1dc11"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "c8aa465b5f9bf4731f7d21ef82371661"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "4dafc258a6cd4974fadbea4b1cec44cf"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "47f5f96c79d34653a89e880588550980"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "d223478253943b7664fd78e61d65b88d"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "d3c9a77f17efdff5d96d06dee29b845e"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "babc463f456b851b9b361f0b7e89d77a"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "416fae7102b4cf1112ce59f23fc341e9"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "25de0b1227b6d32120c0bed8d4ced435"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "7927b1e9d3a5595ab70c1d0a9a41d68a"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "213507b679dba2b12a5e2180711ea503"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "1a917d9b59af075d49900430c1ece249"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "92f779cd8544b411be0e6d8e69544108"
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
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "2acab4eb34b832dadf70b0182df90689"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "cfbda19e9dd067787344716d5b3a73ac"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "8fe28c491a93cdcc71aecc7fcc42f370"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "a4c0d1906672af306a6c99c849372562"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "bf2289677ac972faafb7ee43f68fbf3a"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "18153368e7dd9714d35d62d50d5ff5bc"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "b04c64c0a146de898a3591c93b21d2b8"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "daf36bbd0e7208f118235409fc266a13"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "39f62d9c2461b46925ab4681055e36de"
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
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "df434b3b451b7b72df76f170453d1ae3"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "47e7d585be35cc90ad0e67ff0cc133d8"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "2edee16c534f34ba509edd89399faee6"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "6b60547c9e9af8748eddb6f792f90aaf"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "05868ab0e1bc6faf933e389d0b6a929d"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "c0eec99d715e7f879c8de79fd7f6381d"
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
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "d2a093917108694e139ade93ed3e17f5"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "33067756bf7c62ee66e83312af213cda"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "89a27070c698ba08ba03930d1ebf2969"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "1f09357f75a4923e99badb6e10af674b"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "10bdadbdf79e50ccaa3bb85363705b51"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "1a3e8b0875d0678e5cae38dfcdcffe28"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "a107cd4ee6583cdb263e22c8a3035dc2"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "6b2c35ff856901420f14fc706edac36f"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "c1588201f9a86db3f9a2d1ae15f35189"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-e61bc64a38e329c3c656.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "31b793b39a1528a8c48024a68b91416c"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-8b5fd2918ddc2b00051b.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "2bd1339ffd8dd4418f67b6bbed5cf2a7"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-cb187c3b2de17f5d2a06.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "e794e1985cb4abf4e3496339193577da"
  },
  {
    "url": "component---src-pages-tools-device-designer-mdx-b3ea9c4addccbcb61ce2.js"
  },
  {
    "url": "page-data/tools/device-designer/page-data.json",
    "revision": "66cd6bdc9d2f1fbd86502191a9295844"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-fb959a17012ecb02220f.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "20770f6e99039931d28f33722c1efaef"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-6491dca47faac4c17188.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "312c3ecfca56255b9067d034380928cd"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-3905bcce05d810985b79.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "a3897cb8f319fde40ffaaa0fe6ef7dac"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-2c606c16f440cb333d77.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "e885527c451bd0f2811d8db1b2baf2d7"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-2366c8007ccd44e82758.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "c3a55030623c794540240dbb2a688b43"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-553ccbbd5171bf0468af.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "a1d778395f76551022fba9a553460057"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-4c4521c40839ac37c2d8.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "e191865620da5962b72dba3bf31d587d"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-b19a7c49dfbe417a50f9.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "0baf4d2c559b6ebd82ff96ad961a6e57"
  },
  {
    "url": "component---src-pages-tools-player-mdx-4e6b0493589eb4836c38.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "b143b3245e2a0bac973323c207be1e77"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-48ec82d91770fbfdc16a.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "30fcf463a7302b11d835d8661a819759"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-8351bce2678135dc059b.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "ed7a773a99c2175eedfd824d5267b275"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-e0082df9f8a9ab97e44b.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "6b3bc36acb849b191b503691aacc759b"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-e3081b3af545d69c1106.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "e8a0f54c2af652160ea7a82d8c437276"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-9e163720275b4643efdc.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "935aad6b9d3f53102cfdf707a92ff98e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b0f63197704603df762b7f43bbbc49a3"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-c80984736ff443f09192.js`))) {
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
