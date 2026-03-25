/**
 * Recompress embedded raster in public/product-image-2.svg (same URL, smaller payload).
 * Run: node scripts/optimize-product-image-2.cjs
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const svgPath = path.join(__dirname, "..", "public", "product-image-2.svg");
const svg = fs.readFileSync(svgPath, "utf8");
const re = /xlink:href="(data:image\/[^;]+;base64,[^"]+)"/;
const m = svg.match(re);
if (!m) {
  console.error("No embedded data URL found in SVG.");
  process.exit(1);
}
const dataUrl = m[1];
const b64 = dataUrl.split(",")[1];
const input = Buffer.from(b64, "base64");
console.log("Embedded raster input size (bytes):", input.length);

sharp(input)
  .resize(960, null, {
    withoutEnlargement: true,
    fit: "inside",
  })
  .jpeg({ quality: 82, mozjpeg: true })
  .toBuffer()
  .then((output) => {
    const replacement = `data:image/jpeg;base64,${output.toString("base64")}`;
    const newSvg = svg.replace(dataUrl, replacement);
    fs.writeFileSync(svgPath, newSvg);
    console.log("Embedded JPEG size (bytes):", output.length);
    console.log("SVG file size (bytes):", newSvg.length);
    console.log("Done:", svgPath);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
