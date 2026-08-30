import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SERVICES_DIR = 'public/images/services';
const IMAGES_DIR = 'public/images';

async function compressServiceImages() {
  console.log('=== Compressing Service Images (PNG → WebP) ===\n');
  const files = fs.readdirSync(SERVICES_DIR).filter(f => f.endsWith('.png'));
  
  for (const file of files) {
    const inputPath = path.join(SERVICES_DIR, file);
    const outputName = file.replace('.png', '.webp');
    const outputPath = path.join(SERVICES_DIR, outputName);
    
    const originalSize = fs.statSync(inputPath).size;
    
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'cover', withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    
    const newSize = fs.statSync(outputPath).size;
    const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${file} → ${outputName}`);
    console.log(`   ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${saved}% smaller)\n`);
    
    // Remove original PNG after conversion
    fs.unlinkSync(inputPath);
  }
}

async function compressJpgImages() {
  console.log('=== Compressing JPG Images ===\n');
  const files = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.jpg'));
  
  for (const file of files) {
    const inputPath = path.join(IMAGES_DIR, file);
    const outputName = file.replace('.jpg', '.webp');
    const outputPath = path.join(IMAGES_DIR, outputName);
    
    const originalSize = fs.statSync(inputPath).size;
    
    await sharp(inputPath)
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath);
    
    const newSize = fs.statSync(outputPath).size;
    const saved = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${file} → ${outputName}`);
    console.log(`   ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${saved}% smaller)\n`);
  }
}

async function main() {
  await compressServiceImages();
  await compressJpgImages();
  
  console.log('\n=== Final Summary ===');
  
  // List all webp files
  const serviceWebps = fs.readdirSync(SERVICES_DIR).filter(f => f.endsWith('.webp'));
  const imageWebps = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.webp'));
  
  let totalSize = 0;
  console.log('\nService images:');
  for (const f of serviceWebps) {
    const s = fs.statSync(path.join(SERVICES_DIR, f)).size;
    totalSize += s;
    console.log(`  ${f}: ${(s/1024).toFixed(0)}KB`);
  }
  console.log('\nGeneral images:');
  for (const f of imageWebps) {
    const s = fs.statSync(path.join(IMAGES_DIR, f)).size;
    totalSize += s;
    console.log(`  ${f}: ${(s/1024).toFixed(0)}KB`);
  }
  console.log(`\nTotal WebP size: ${(totalSize/1024/1024).toFixed(2)}MB`);
}

main().catch(console.error);
