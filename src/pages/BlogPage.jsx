import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import  { useEffect, useMemo, useState } from "react";
import { Baby, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/generated/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data || []);
        const singleBlog = (data || []).find((b) => b.slug === slug);
        setBlog(singleBlog || null);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  const MDXContent = useMemo(() => {
    if (!blog?.content) return null;

    const mdxModuleFactory = new Function("mdx", blog.content);
    const mdxModule = mdxModuleFactory({ Fragment, jsx, jsxs });
    return mdxModule.default || mdxModule;
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white pt-20 sm:pt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="aspect-[16/9] w-full bg-gray-200 rounded-xl animate-pulse mb-8" />
          <div className="space-y-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const recommended = (allBlogs || [])
    .filter((b) => b.slug !== slug)
    .sort((a, b) => {
      const da = a.frontmatter?.date ? new Date(a.frontmatter.date) : null;
      const db = b.frontmatter?.date ? new Date(b.frontmatter.date) : null;
      if (da && db) return db - da;
      if (db) return 1;
      if (da) return -1;
      return 0;
    })
    .slice(0, 3);

  // Create module from compiled MDX and extract the component
  // const mdxModuleFactory = new Function("mdx", `${blog.content}`);
  // const mdxModule = mdxModuleFactory({ Fragment, jsx, jsxs });
  // const MDXContent = mdxModule.default || mdxModule;

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition mt-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>
      <Helmet>
        <title>{blog.frontmatter.title}</title>
        <meta name="description" content={blog.frontmatter.description} />
        <meta
          name="keywords"
          content={blog.frontmatter.keywords?.join(", ") || ""}
        />
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
        <MDXContent
          components={{
            table: (props) => (
              <table
                className="w-full border border-gray-300 rounded-lg my-6 text-sm"
                {...props}
              />
            ),
            th: (props) => (
              <th
                className="bg-gray-100 border px-4 py-2 text-left"
                {...props}
              />
            ),
            td: (props) => <td className="border px-4 py-2" {...props} />,
            a: (props) => <a className="text-blue-600 underline" {...props} />,
          }}
        />
      </div>
      {/* Render Markdown content */}
      {/* <div className="max-w-3xl mx-auto px-4 py-10 prose prose-sm md:prose lg:prose-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {blog.content}
        </ReactMarkdown>
      </div> */}

      {/* Recommended Blogs */}
      {recommended.length > 0 && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">Recommended for you</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommended.map((b) => (
                <Link
                  key={b.slug}
                  to={`/blog/${b.slug}`}
                  className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                    <img
                      src={b.frontmatter?.image || "/assets/products/ProductFamily.jpg"}
                      alt={b.frontmatter?.title || "Blog thumbnail"}
                      className="h-full w-full object-cover group-hover:scale-105 transition"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold line-clamp-2">{b.frontmatter?.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{b.frontmatter?.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
