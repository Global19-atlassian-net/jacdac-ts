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
    "url": "webpack-runtime-e60dd1b0287b3a37ff59.js"
  },
  {
    "url": "framework-f19c6c9d119c831d5054.js"
  },
  {
    "url": "styles.9ef1f21220b6405eb9f5.css"
  },
  {
    "url": "styles-c212ca3684de16c6f115.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "db6a8a7f32ed8a2ee4df4838d1ea0f6e"
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
    "revision": "75cce17c04c5430b59fc8f034614034e"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "309f65fc243d22b4e3caf6bdc4ed456e"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "e40dd8252135768502151fe45fe30064"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "fde26be34ff64f1a0365c831c5802c36"
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
    "revision": "65842d02932ae7d1e3af485e37e21e58"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "d54ff1a3bfb89a645f171baf61c4cd33"
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
    "url": "component---src-pages-github-mdx-33088e8259dcda88a643.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a2cb2967940b7b20a25d80d17b28b568"
  },
  {
    "url": "component---src-pages-index-mdx-001a5f1512b51058b6c1.js"
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
    "revision": "0ce1944ab9ddf64924daa8f4dd940b7b"
  },
  {
    "url": "component---src-pages-services-mdx-9334fbae8d4156bd795e.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "52a87321a4c66709786ff93f64a5beba"
  },
  {
    "url": "component---src-pages-tools-mdx-08172df404c8ea5fb106.js"
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
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "86f6c26979ba4bc9209acd535bafa79e"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "6475ab1b300ffa87ff0cb02381eca204"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "ed511baa1b83267e17cd93ff2c34576e"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "d2a627a09c0197c510bd1376ec537f90"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "b14561a4dabb1da4fb58b42e126f59ce"
  },
  {
    "url": "component---src-templates-service-mdx-c265d087ae614df34ff6.js"
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
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "d0d74fc179252ce1f2dba8d763a6a7c6"
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
    "url": "page-data/services/compass/page-data.json",
    "revision": "d3163d6023104370fb5a21b2b02e1729"
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
    "revision": "74cb633226c7566a5e807b6a95ad62f0"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "2f4f0743cd45eeeb55ca9e3821975714"
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
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "107aa6108ba500d5a34d5da84c23cce5"
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
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "9833fab56955e7413ab0199a14bafa22"
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
    "url": "page-data/services/rng/page-data.json",
    "revision": "f9f86c3c154dfb7361a7147a2255e525"
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
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "88945d5ee32bcdba2cae8fa9fc4937fb"
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
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "6c64bd538bdd158d0ea6961c139be249"
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
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "f011d76a921a6d09d0998208fdff3fcf"
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
    "url": "component---src-pages-tools-azure-device-twin-designer-mdx-ec0ef989b52abdf87a06.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "81de1deee008b1ff4e2042c2434be47d"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-731af07ad5e318b4ce5c.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "aec5bdbbdb7a971a45988b0a3d89f9b2"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-adf4eb58424f4685669d.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "933265cc372a5cb001f6e54a1b98a01f"
  },
  {
    "url": "component---src-pages-tools-device-designer-mdx-50417b763c43fa6e9b80.js"
  },
  {
    "url": "page-data/tools/device-designer/page-data.json",
    "revision": "0302fd912d5f6cf35b982f1155235edf"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-804d5ac67af22e253ee4.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "c3c74787990c35b7e7f7febc9a3fa891"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-2158928e544af713f03d.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "e22e4cfa0b340bde5117188b1ef48238"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-mdx-041e6a823e01ac1541db.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "2b2311994a71c1cf1479bbad0634b8dc"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-d0f2be42922339a877b6.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "c686649272314237951222a920e2d313"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-mdx-50b375721e88cc5b61cd.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "7f819fc43722a1b5032c2656ab16ecd8"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-mdx-c620f232213e3f1ebe0e.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "323935fa6c6963e8c613855f1654dda2"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-e5f9cd2ea1ff673f3334.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "9ddb900248cea078ba4afc550e5bcbad"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-1a9fb0314859165333ff.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "e4c5f02829e3e5b7d2da09a0f84db0d9"
  },
  {
    "url": "component---src-pages-tools-player-mdx-cbb7df36b181c5a3b18f.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "dd6362aa46899da6df2587bb69331e39"
  },
  {
    "url": "component---src-pages-tools-prototest-mdx-16d89e644f48afebf3aa.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "0b60846b1397231e25409de852ed30a6"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-3399f8b610f59e80e433.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "fc5e83313d9722b02452e1baa81f0447"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-46c0f878dc1ca2b778f2.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "457949a471557e32f4e79b400bcd4fbf"
  },
  {
    "url": "component---src-pages-tools-settings-manager-mdx-78cb4ba2941bd7c7ad4e.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "0682dbd0de85cea6d0cec00adada635a"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-bddfc671ff8759645f2a.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "395d5bdbbb8a1cccd0f49b5e4ea58cf7"
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
  if (!resources || !(await caches.match(`/jacdac-ts/app-160f610db14db48f69d5.js`))) {
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
