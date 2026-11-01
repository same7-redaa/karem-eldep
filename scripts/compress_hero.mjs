import sharp from 'sharp';
import fs from 'fs';

async function compressHero() {
  const input = 'public/france.png';
  const output = 'public/france.webp';
  if (!fs.existsSync(input)) {
    console.log('france.png not found');
    return;
  }
  const origSize = fs.statSync(input).size;
  await sharp(input)
    .resize(1920, 1080, { fit: 'cover', withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  const newSize = fs.statSync(output).size;
  console.log(`Hero converted: ${(origSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB (-${((1 - newSize/origSize)*100).toFixed(1)}%)`);
}

compressHero();

