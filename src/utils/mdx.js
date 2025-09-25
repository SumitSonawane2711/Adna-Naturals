import path from "path";
import fs from 'fs/promises';
import { compile } from "@mdx-js/mdx";
import matter from "gray-matter";


export const getSingleBlog = async (slug) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), "src/data/blogs", `${slug}.mdx`),
            "utf-8"
        );

        if (!singleBlog) return null;

        const { content: rawContent, data: frontmatter } = matter(singleBlog);

        const compiledMDX = await compile(rawContent, { outputFormat: "function-body" });

        return {
            frontmatter,
            content: compiledMDX.toString(), // This is a JS function string
        };
    } catch (error) {
        console.error("Error reading blog file:", error);
        return null;
    }
};

export const getBlogs = async () => {
    const files = await fs.readdir(path.join(process.cwd(), "src/data/blogs"));

    const allBlogs = await Promise.all(
        files.map(async (file) => {
            const slug = file.replace(".mdx", "");
            const frontmatter = await getBlogFrontmatterBySlug(slug);
            return { slug, ...frontmatter };
        })
    );

    return allBlogs;
};

export const getBlogFrontmatterBySlug = async (slug) => {
    const singleBlog = await fs.readFile(
        path.join(process.cwd(), "src/data/blogs", `${slug}.mdx`),
        "utf-8"
    );

    if (!singleBlog) return null;

    const { data: frontmatter } = matter(singleBlog);
    return frontmatter;
};
