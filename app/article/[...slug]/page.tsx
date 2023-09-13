import { Mdx } from "@/components/mdx-components"
import { cn } from "@/lib/utils"
import { allArticles } from "contentlayer/generated"

// export const generateStaticParams = async () =>
//   allArticles.map((post) => {
//     return { slug: post.slugAsParams.split("/") }
//   })

const getPostFromSlug = (slug: string[]) => {
  // ['1', '1']
  const post = allArticles.find((post) => post.slugAsParams === slug.join("/"))
  if (!post) throw new Error(`Post not found for slug: ${slug}`)
  return post
}

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const post = getPostFromSlug(params.slug)
  return { title: post.title }
}

export default function Article({ params }: { params: { slug: string[] } }) {
  const post = getPostFromSlug(params.slug)

  return (
    <article
      className={cn(
        "mx-auto max-w-xl py-8 "
        // "prose dark:prose-invert"
      )}
    >
      <Mdx code={post.body.code} />
      {/*<div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />*/}
    </article>
  )
}
