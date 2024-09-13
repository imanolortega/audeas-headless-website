import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Link from "next/link";

import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
import { getAllPosts, getPageBySlug } from "@/lib/wordpress";
import PostCard from "@/components/posts/post-card";
import CTA from "@/components/cta/cta";
import FeatureNine from "@/components/feature/feature";

export default async function Home() {
  const posts = await getAllPosts();
  const page = await getPageBySlug('home');
  console.log(page)

  return (
    <>
      <FeatureNine />
      <Section className="md:py-8">
        <Container>
          <ExampleJsx />
        </Container>
      </Section>
      <CTA />
      <Section className="bg-accent md:py-8">
        <Container>
          <LatestsPost posts={posts} />
        </Container>
      </Section>
    </>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
        <Link
          className="border h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/posts"
        >
          <Pen size={32} />
          <span>
            Noticias{" "}
            <span className="block text-sm text-muted-foreground">
              Últimas publicaciones de Audeas
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            Páginas{" "}
            <span className="block text-sm text-muted-foreground">
              Todas las páginas
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/posts/authors"
        >
          <User size={32} />
          <span>
            Autores{" "}
            <span className="block text-sm text-muted-foreground">
              Lista de los autores
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/posts/tags"
        >
          <Tag size={32} />
          <span>
            Tags{" "}
            <span className="block text-sm text-muted-foreground">
              Contenido por etiquetas
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/posts/categories"
        >
          <Boxes size={32} />
          <span>
            Categorías{" "}
            <span className="block text-sm text-muted-foreground">
              Lista de categorías
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="https://github.com/9d8dev/next-wp"
        >
          <Folder size={32} />
          <span>
            Documentación útil{" "}
            <span className="block text-sm text-muted-foreground">
              Todos los documentos
            </span>
          </span>
        </a>
      </div>
    </article>
  );
};

const LatestsPost = ({ posts }: { posts: any }) => {
  return (
    <>
      <h2>
        <Balancer>Últimas Noticias</Balancer>
      </h2>
      <div className="grid md:grid-cols-3 gap-4 z-0">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
