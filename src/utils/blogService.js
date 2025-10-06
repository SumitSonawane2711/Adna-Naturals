import blogs from '../generated/blogs.json';

export const getAllBlogs = () => {
  return blogs;
};

export const getSingleBlog = (slug ) => {
  return blogs.find((b) => b.slug === slug) || null;
};

export const getFrontmatterBySlug = (slug)=> {
  const blog = blogs.find((b) => b.slug === slug);
  return blog ? blog.frontmatter : null;
};