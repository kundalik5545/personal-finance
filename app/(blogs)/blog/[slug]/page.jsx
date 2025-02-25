import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const slug = params.slug; // No need for `await`, `params.slug` is a string

  if (!slug) {
    return notFound();
  }

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Not Found",
      description: "Blog post not found",
    };
  }

  return {
    title: blog.title,
    description: blog.description.slice(0, 150),
    keywords:
      blog.keywords ||
      "coding blogs, web development, programming, open-source, software development",
    openGraph: {
      title: blog.title,
      description: blog.description.slice(0, 200),
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${blog.slug}`,
      images: [{ url: blog.image }],
    },
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${blog.slug}`,
  };
}

const BlogPost = async ({ params }) => {
  const slug = params.slug;

  // Define the full path to the Markdown file
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { title: data.title || "Blog Post" })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypePrettyCode, {
        theme: "github-dark",
        transformers: [
          transformerCopyButton({
            visibility: "always",
            feedbackDuration: 3000,
          }),
        ],
      });

    const htmlContent = (await processor.process(content)).toString();

    return (
      <div className="">
        {/* Content Wrapper */}
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>

          {/* Author and Date */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-500 mb-2">
            <p className="text-sm italic">By {data.author}</p>
            <p className="text-sm">{data.date}</p>
          </div>
        </div>

        {/* Render Markdown/HTML Content */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert w-full"
        />
      </div>
    );
  } catch (error) {
    console.error("Error reading blog post:", error);
    return notFound();
  }
};

export default BlogPost;
