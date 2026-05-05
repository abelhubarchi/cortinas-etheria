// @ts-nocheck
import { readdir } from 'fs/promises';
import path from 'path';

const categoryLabelMap = {
	FLOREADO: 'Floreado',
	MILRAYAS: 'Mil Rayas',
	RUSTICO: 'Rústico',
	RUSTICO2: 'Rústico 2'
};

const imageRegex = /\.webp$/i;

/** */
export async function load() {
	const baseDir = path.join(process.cwd(), 'static', 'muestrario');
	const categories = [];

	try {
		const categoryDirs = await readdir(baseDir, { withFileTypes: true });
		
		for (const dir of categoryDirs) {
			if (!dir.isDirectory()) continue;
			
			const categoryName = dir.name;
			const displayName = categoryLabelMap[categoryName] || categoryName;
			const categoryPath = path.join(baseDir, categoryName);
			
			const files = await readdir(categoryPath, { withFileTypes: true });
			const webpFiles = files
				.filter((f) => f.isFile() && imageRegex.test(f.name))
				.map((f) => f.name)
				.sort();

			const fabrics = webpFiles.map((fileName, index) => ({
				name: `${displayName} ${index + 1}`,
				path: `/muestrario/${categoryName}/${fileName}`
			}));

			categories.push({
				name: displayName,
				fabrics: fabrics,
				expanded: false
			});
		}
		
		console.log('✅ Loaded categories:', categories.map(c => `${c.name} (${c.fabrics.length})`));
	} catch (error) {
		console.error('❌ Error reading muestrario:', error);
	}

	return { categories };
}

