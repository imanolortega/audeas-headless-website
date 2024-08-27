import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import Link from "next/link";

import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
import PostCard from "@/components/posts/post-card";
import { getAllPosts } from "@/lib/wordpress";

export default async function Home() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <>
      <Section>
        <Container>
          <ExampleJsx />
        </Container>
      </Section>
      <Section>
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
      <h1>
        <Balancer>Next.js and WordPress Starter</Balancer>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
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
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
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
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
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
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
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
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
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
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
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
    <div className="prose-m-none">
      <h1>
        <Balancer>Últimas Noticias</Balancer>
      </h1>
      <div className="grid md:grid-cols-3 gap-4 z-0">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
