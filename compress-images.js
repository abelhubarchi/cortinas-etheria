import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const categories = ['FLOREADO', 'MILRAYAS', 'RUSTICO', 'RUSTICO2'];
const staticMuestrarioPath = './static/muestrario';

async function compressImages() {
  console.log('🖼️  Iniciando compresión de imágenes...\n');

  for (const category of categories) {
    const categoryPath = path.join(staticMuestrarioPath, category);
    
    if (!fs.existsSync(categoryPath)) {
      console.log(`⚠️  Carpeta no encontrada: ${categoryPath}`);
      continue;
    }

    const files = fs.readdirSync(categoryPath).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    console.log(`📁 ${category}: ${files.length} imágenes`);

    for (const file of files) {
      const inputPath = path.join(categoryPath, file);
      const outputPath = path.join(categoryPath, file.replace(/\.[^.]+$/, '.webp'));

      try {
        const stats = fs.statSync(inputPath);
        const originalSize = (stats.size / 1024 / 1024).toFixed(2);

        await sharp(inputPath)
          .resize(2048, 2048, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 85 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = (newStats.size / 1024).toFixed(2);
        const originalSizeKB = (stats.size / 1024).toFixed(2);
        const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);

        console.log(`   ✅ ${file}`);
        console.log(`      ${originalSizeKB}KB → ${newSize}KB (${reduction}% menor)\n`);
      } catch (error) {
        console.error(`   ❌ Error procesando ${file}: ${error.message}\n`);
      }
    }
  }

  console.log('✨ ¡Compresión completada!');
}

compressImages().catch(console.error);
