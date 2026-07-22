const { chromium } = require('playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const edgePath = process.env.EDGE_PATH || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const pageUrl = pathToFileURL(path.resolve(__dirname, '..', 'CBT.html')).href;
const outputPath = path.resolve(__dirname, '..', 'screenshot.png');

(async () => {
  const browser = await chromium.launch({ executablePath: edgePath, headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1024 }, deviceScaleFactor: 1 });
  await page.goto(pageUrl, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();
  console.log(`Saved ${outputPath}`);
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
