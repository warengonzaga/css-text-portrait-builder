/**
 * Parses the builds to allow it to be run serverless
 * (i.e. open directly in the browser)
 */

const jsdom = require('jsdom');
const fs = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: node $CWD/postbuild.js FILENAME');
  process.exit(1);
}

const { JSDOM } = jsdom;

try {
  const file = process.argv[2];
  const data = fs.readFileSync(file, 'utf-8');

  const virtualConsole = new jsdom.VirtualConsole();
  const dom = new JSDOM(data, { virtualConsole });

  const document = dom.window.document;

  document.querySelector('link[rel="stylesheet"]').href = document
    .querySelector('link[rel="stylesheet"]')
    .href.replace('/', '');

  document.getElementsByTagName('script')[0].src = document
    .getElementsByTagName('script')[0]
    .src.replace('/', '');

  document.getElementsByTagName('script')[0].removeAttribute('type');

  fs.writeFile(file, dom.serialize(), (err) => {
    if (err) throw err;
    console.log('\nPostbuild success!\n');
  });

  virtualConsole.sendTo(console);
} catch (error) {
  console.log(error);
  process.exit(1);
}
