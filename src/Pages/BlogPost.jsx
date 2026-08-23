import { Link, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

import { blogPosts } from "../data/blog"

function BlogPost() {
  const { slug } = useParams()

  const post = blogPosts.find(
    (item) => item.slug === slug
  )

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-4xl font-bold">
            Article not found
          </h1>

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              text-cyan-400
            "
          >
            <FaArrowLeft className="text-xs" />
            Back to portfolio
          </Link>

        </div>

      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 pt-32 pb-20">

      <article className="max-w-3xl mx-auto">

        {/* BACK */}

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-400
            hover:text-white
            transition
          "
        >
          <FaArrowLeft className="text-xs" />
          Back to portfolio
        </Link>

        {/* META */}

        <div className="mt-12">

          <p
            className="
              text-sm
              uppercase
              tracking-widest
              text-cyan-400
            "
          >
            {post.category}
          </p>

          <h1
            className="
              mt-5
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
            "
          >
            {post.title}
          </h1>

          <p className="mt-6 text-gray-400">
            {post.date} · {post.readTime}
          </p>

          {/* TAGS */}

          <div className="flex flex-wrap gap-2 mt-6">

            {post.tags.map((tag) => (
              <span
                key={tag}
                className="
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-xs
                  text-gray-300
                "
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* ARTICLE */}

        <div className="mt-16">

          {post.content.map((block, index) => {

            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="
                    mt-12
                    mb-5
                    text-2xl
                    md:text-3xl
                    font-bold
                  "
                >
                  {block.text}
                </h2>
              )
            }

            return (
              <p
                key={index}
                className="
                  mt-6
                  text-gray-300
                  leading-8
                  text-lg
                "
              >
                {block.text}
              </p>
            )
          })}

        </div>

      </article>

    </main>
  )
}

export default BlogPost