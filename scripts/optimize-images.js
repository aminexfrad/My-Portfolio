const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../src/Assets/home-main.png');
const outputPath = path.join(__dirname, '../src/Assets/home-main.webp');

// Optimize the image
sharp(inputPath)
  .webp({ quality: 80 }) // Convert to WebP with 80% quality
  .resize(1000, null, { // Resize width to 1000px, maintain aspect ratio
    withoutEnlargement: true,
    fit: 'inside'
  })
  .toFile(outputPath)
  .then(info => {
    console.log('Image optimized successfully:', info);
    // Get original file size
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = info.size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    console.log(`Size reduced by ${savings}%`);
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  });
