import Link from "next/link";

import {
  Handshake,
  Newspaper,
  Microscope,
  Briefcase,
  GraduationCap,
  BookOpenText,
} from "lucide-react";

export const IconGrid = () => {
  return (
    <article className="prose-m-none">
      <div className="grid md:grid-cols-3 gap-4 not-prose">
        <Link
          className="border border-audeas/40 h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/"
        >
          <Newspaper size={32} />
          <span>
            Publicaciones{" "}
            <span className="block text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
              dolore magna aliqua.
            </span>
          </span>
        </Link>
        <Link
          className="border border-audeas/40  h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/"
        >
          <Handshake size={32} />
          <span>
            Relaciones Institucionales{" "}
            <span className="block text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
              dolore magna aliqua.
            </span>
          </span>
        </Link>
        <Link
          className="border border-audeas/40  h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/"
        >
          <GraduationCap size={32} />
          <span>
            Posgrado{" "}
            <span className="block text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
              dolore magna aliqua.
            </span>
          </span>
        </Link>
        <Link
          className="border border-audeas/40  h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/posts/tags"
        >
          <Microscope size={32} />
          <span>
            Ciencia y Tecnología{" "}
            <span className="block text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
              dolore magna aliqua.
            </span>
          </span>
        </Link>
        <Link
          className="border border-audeas/40  h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="/posts/categories"
        >
          <Briefcase size={32} />
          <span>
            Actividades{" "}
            <span className="block text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
              dolore magna aliqua.
            </span>
          </span>
        </Link>
        <a
          className="border border-audeas/40  h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
          href="https://github.com/9d8dev/next-wp"
        >
          <BookOpenText size={32} />
          <span>
            Documentación útil{" "}
            <span className="block text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et
              dolore magna aliqua.
            </span>
          </span>
        </a>
      </div>
    </article>
  );
};
