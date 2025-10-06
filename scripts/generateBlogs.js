// scripts/generateBlogs.js
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';

async function generateBlogs() {
  const dataPath = path.join(process.cwd(), 'src/data/blogs');
  const outputPath = path.join(process.cwd(), 'public/generated');

  await fs.mkdir(outputPath, { recursive: true });

  const files = await fs.readdir(dataPath);

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace('.mdx', '');
      const fileContent = await fs.readFile(path.join(dataPath, file), 'utf-8');
      const { content, data } = matter(fileContent);

      // Compile MDX to a function body string with GFM (tables, task lists, etc.)
      const compiled = await compile(content, {
        outputFormat: 'function-body',
        remarkPlugins: [remarkGfm],
      });

      return {
        slug,
        frontmatter: data,
        content: String(compiled),
      };
    })
  );

  await fs.writeFile(
    path.join(outputPath, 'blogs.json'),
    JSON.stringify(allBlogs, null, 2)
  );

  console.log('blogs.json generated successfully.');
}

generateBlogs();
