import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from '@/lib/wordpress'

import { Section, Container, Article, Main } from '@/components/craft'
import { Metadata } from 'next'
import { badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import BackButton from '@/components/back'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  const featuredMedia = await getFeaturedMediaById(post.featured_media)
  const date = new Date(post.date).toLocaleDateString('es-AR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const category = await getCategoryById(post.categories[0])

  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
      </Container>
      <Container>
        <h1>
          <Balancer>
            <span
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></span>
          </Balancer>
        </h1>
        <div className="flex justify-between items-center gap-4 text-sm mb-4">
          <h5>Publicado el {date}</h5>
          <Link
            href={`/posts/?category=${category.id}`}
            className={cn(badgeVariants({ variant: 'outline' }), 'not-prose')}
          >
            {category.name}
          </Link>
        </div>
        <div className="h-96 my-10 md:h-[560px] overflow-hidden flex items-center justify-center border rounded-lg bg-accent/25">
          {/* eslint-disable-next-line */}
          <img
            className="w-full"
            src={featuredMedia.source_url}
            alt={post.title.rendered}
          />
        </div>
        <Article
          className="m-auto"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </Container>
    </Section>
  )
}
