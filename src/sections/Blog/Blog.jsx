import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

import SectionTitle from "../../components/ui/SectionTitle"
import { blogPosts } from "../../data/blog"

function Blog() {
  return (
    <section
      id="blog"
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="From the Blog"
          subtitle="Thoughts on development, projects, freelancing and the journey of building digital products."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
                transition-all
                duration-300
                hover:border-purple-500/40
                hover:bg-white/[0.05]
              "
            >

              {/* CATEGORY */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-widest
                    text-cyan-400
                  "
                >
                  {post.category}
                </span>

                <span className="text-xs text-gray-500">
                  {post.readTime}
                </span>

              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-6
                  text-xl
                  font-semibold
                  leading-snug
                  text-white
                  group-hover:text-cyan-300
                  transition-colors
                "
              >
                {post.title}
              </h3>

              {/* EXCERPT */}

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-gray-400
                "
              >
                {post.excerpt}
              </p>

              {/* DATE */}

              <p className="mt-6 text-xs text-gray-500">
                {post.date}
              </p>

              {/* LINK */}

              {post.date !== "Coming soon" && (
                <a
                  href={`/blog/${post.slug}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-sm
                    font-medium
                    text-white
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  Read article
                  <FaArrowRight className="text-xs" />
                </a>
              )}

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Blog