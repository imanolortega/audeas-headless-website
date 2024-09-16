import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/public/home-logo-audeas.png";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { getMenuBySlug } from "@/lib/wordpress";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
          <h2 className="sr-only">Audeas | Asociación Civil</h2>
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={175}
            height={80}
          />
        </Link>
        {children}
        <div className="flex items-center gap-2">
          {/* Links fuera del NavigationMenuTrigger */}
          <NavigationMenu>
            <NavigationMenuList>
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
                  <NavigationMenuItem key={ID}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={path}
                        className="block font-normal select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            asChild
            className="hidden sm:flex bg-audeas hover:bg-audeas/95 text-base"
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
