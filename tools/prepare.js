const replace = require('replace-in-file');
const myArgs = process.argv.slice(2);
let version = myArgs[0];

if (!version) {
  const pkg = require('../package.json')
  version = pkg.version;
}

console.log(`patching version: ${version}`)

// patch with cdn files
async function patchDocs() {
  await patch({
    files: './docs/public/tools/*.html',
    from: "/dist/jacdac.umd.js",
    to: `https://cdn.jsdelivr.net/npm/jacdac-ts@${version}`
  })
}

async function patch(options) {
  try {
    const results = await replace(options)
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

patchDocs();