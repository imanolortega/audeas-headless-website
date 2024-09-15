import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Logo from "@/public/home-logo-audeas.png";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { getMenuBySlug } from "@/lib/wordpress";

export const Nav = async ({ className, children, id }: NavProps) => {
  const mainMenu = await getMenuBySlug("main");
  const items = mainMenu.items;

  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b",
        "fade-in",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only">next-wp starter</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={175}
            height={80}
          ></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {items.map(({ ID, url, slug, title, type }) => {
              const getUrl = (
                type: string,
                url: string,
                slug: string
              ): string => {
                return type === "post_type" ? `pages/${slug}` : url;
              };
              const path = getUrl(type, url, slug);
              return (
                <Button key={ID} asChild variant="ghost" size="sm">
                  <Link href={path}>{title}</Link>
                </Button>
              );
            })}
          </div>
          <Button
            asChild
            className="hidden sm:flex bg-audeas hover:bg-audeas/95"
          >
            <Link className="text-white" href="/">
              Recursos
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
