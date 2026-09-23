const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAllFavicons() {
  const logoPath = path.join(__dirname, '..', 'public', 'images', 'logo.png');
  const pubDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');

  if (!fs.existsSync(logoPath)) {
    console.error('Logo file not found:', logoPath);
    process.exit(1);
  }

  // 1. Generate multi-resolution PNGs in /public and /src/app
  // 16x16
  await sharp(logoPath)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'favicon-16x16.png'));

  // 32x32
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'favicon-32x32.png'));

  // 48x48
  await sharp(logoPath)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'favicon.png'));

  // 192x192
  await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'icon.png'));

  // copy to src/app/icon.png so Next.js App Router serves it directly
  await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  // 180x180 Apple touch icon
  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'apple-touch-icon.png'));

  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  // 512x512 Android / PWA
  await sharp(logoPath)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'icon-512.png'));

  // 2. Generate standard multi-frame ICO file (16, 32, 48)
  const sizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of sizes) {
    const buf = await sharp(logoPath)
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size: s, data: buf });
  }

  const numImages = pngBuffers.length;
  const headerSize = 6 + 16 * numImages;
  let currentOffset = headerSize;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(numImages, 4);

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 0);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.data.length, 8);
    entry.writeUInt32LE(currentOffset, 12);
    currentOffset += item.data.length;
    entries.push(entry);
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.data)]);
  fs.writeFileSync(path.join(pubDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  // 3. Generate high-res SVG embedding logo image
  const svgPngBuf = await sharp(logoPath)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const base64 = svgPngBuf.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <image href="data:image/png;base64,${base64}" x="0" y="0" width="256" height="256" />
</svg>
`;

  fs.writeFileSync(path.join(pubDir, 'favicon.svg'), svgContent);
  fs.writeFileSync(path.join(pubDir, 'icon.svg'), svgContent);

  console.log('All favicons successfully generated from public/images/logo.png');
}

generateAllFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
