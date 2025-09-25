import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Baby } from "lucide-react";

function BlogPage() {
  const [blog, setBlog] = React.useState(null);
  const { slug } = useParams();

  React.useEffect(() => {
    fetch("/generated/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const singleBlog = data.find((b) => b.slug === slug);
        setBlog(singleBlog);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!blog) return <div>Loading...</div>;

  // Create module from compiled MDX and extract the component
  const mdxModuleFactory = new Function("mdx", `${blog.content}`);
  const mdxModule = mdxModuleFactory({ Fragment, jsx, jsxs });
  const MDXContent = mdxModule.default || mdxModule;


  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-4">
      <Helmet>
        <title>{blog.frontmatter.title}</title>
        <meta name="description" content={blog.frontmatter.description} />
        <meta name="keywords" content={blog.frontmatter.keywords?.join(", ")} />
        {/* Canonical */}
        <link rel="canonical" href={`https://adnanaturals.com/blog/${slug}`} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.frontmatter.title} />
        <meta
          property="og:description"
          content={blog.frontmatter.description}
        />
        {blog.frontmatter.image && (
          <meta
            property="og:image"
            content={`https://adnanaturals.com${blog.frontmatter.image}`}
          />
        )}
        <meta
          property="og:url"
          content={`https://adnanaturals.com/blog/${slug}`}
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.frontmatter.title} />
        <meta
          name="twitter:description"
          content={blog.frontmatter.description}
        />
        {blog.frontmatter.image && (
          <meta
            name="twitter:image"
            content={`https://adnanaturals.com${blog.frontmatter.image}`}
          />
        )}
        {/* Article */}
        {blog.frontmatter.date && (
          <meta
            property="article:published_time"
            content={new Date(blog.frontmatter.date).toISOString()}
          />
        )}
      </Helmet>

      {/* Feature Image */}
      {blog.frontmatter.image && (
        <figure className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:mt-10">
          <div className=" w-full overflow-hidden rounded-xl shadow-lg bg-gray-100">
            <img
              src={blog.frontmatter.image}
              alt={blog.frontmatter.title || "Blog feature"}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </figure>
      )}

      <div className="mdx-content max-w-3xl mx-auto px-4 py-10">
        <MDXContent />
      </div>

      

      {/* Closing Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full bg-green-200 flex items-center justify-center">
            <Baby className="w-12 h-12 md:w-16 md:h-16 text-green-700" />
          </div>
          <p className="text-base md:text-lg text-gray-700 italic mb-6">
            "There's no 'one-size-fits-all' in motherhood. Lean on your
            instincts, cherish the small wins, and know that most mothers have
            always looked to their mothers for guidance - just like we did.
            That's how ADNA Naturals was born - out of a love, wisdom and
            unwavering care."
          </p>
          <p className="text-green-700 font-medium">
            Dr. Aarti Tolia, Dr. Namrata Shah & Mr. Tolia
          </p>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
