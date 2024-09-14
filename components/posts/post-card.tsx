import Image from "next/image";
import Link from "next/link";

import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";

import {
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
} from "@/lib/wordpress";

export default async function PostCard({ post }: { post: Post }) {
  const media = await getFeaturedMediaById(post.featured_media);
  const date = new Date(post.date).toLocaleDateString("es-AR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await getCategoryById(post.categories[0]);

  return (
    <Link
      href={`/posts/${post.slug}`}
      className={cn(
        "border border-audeas/30 p-4 bg-background/70 rounded-lg group flex justify-between flex-col not-prose gap-8",
        "hover:bg-background transition-all"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border flex items-center justify-center">
          <Image
            className="h-full w-full object-cover"
            src={media.source_url}
            alt={post.title.rendered}
            width={400}
            height={200}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          className="text-xl text-audeas font-bold group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all"
        ></div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html:
              post.excerpt.rendered.split(" ").slice(0, 12).join(" ").trim() +
              "...",
          }}
        ></div>
      </div>

      <div className="flex flex-col gap-4">
        <hr className="border-audeas" />
        <div className="flex justify-between items-center text-xs">
          <p className="">{category.name}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
