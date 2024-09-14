import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import { getAllPosts, getPageBySlug } from "@/lib/wordpress";

import { IconGrid } from "@/components/icon-grid/icon-grid";
import CTA from "@/components/cta/cta";
import FeatureNine from "@/components/feature/feature";
import PostCard from "@/components/posts/post-card";

export default async function Home() {
  const posts = await getAllPosts();
  const page = await getPageBySlug("home");

  return (
    <>
      <FeatureNine />
      <Section className="md:py-8">
        <Container>
          <IconGrid />
        </Container>
      </Section>
      <CTA />
      <Section className="bg-accent md:pt-0 md:pb-8">
        <Container>
          <LatestsPost posts={posts} />
        </Container>
      </Section>
    </>
  );
}

const LatestsPost = ({ posts }: { posts: any }) => {
  return (
    <>
      <h2 className="text-center">
        <Balancer className="font-semibold text-center">Últimas Noticias</Balancer>
      </h2>
      <div className="grid md:grid-cols-3 gap-4 z-0">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
