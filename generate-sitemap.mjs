import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file path (ESM-compatible version of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON manually instead of import with assert
const productsJsonPath = path.resolve(__dirname, 'products.json');
const products = JSON.parse(fs.readFileSync(productsJsonPath, 'utf-8'));

const baseUrl = 'https://adnanaturals.com';

const urls = products
  .map(
    (product) => `
  <url>
    <loc>${baseUrl}/product/${product.id}</loc>
    <lastmod>${product.lastModified}T08:00:00+00:00</lastmod>
    <priority>0.80</priority>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log('✅ sitemap.xml generated at:', outputPath);
