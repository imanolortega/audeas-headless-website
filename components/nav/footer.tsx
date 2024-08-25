import { Container, Section } from '../craft';
import { ThemeToggle } from "@/components/theme/theme-toggle";

import Image from 'next/image';
import Link from 'next/link';

import Logo from "@/public/logo.svg";
import { contentMenu, mainMenu } from '@/menu.config';
import { getMenuBySlug } from '@/lib/wordpress';

export const Footer = async () => {
  const mainMenu = await getMenuBySlug('main')
  const items = mainMenu.items

  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Website</h5>
            {items.map(({
              ID,
              slug,
              title,
              type,
            }) => (
              <Link
                className="hover:underline underline-offset-4"
                key={ID}
                href={`/${type === 'post_type' ? 'pages' : ''}/${slug}`}
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Blog</h5>
            {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <ThemeToggle />
          <p className="text-muted-foreground">
            © 2024. Audeas | Asociación Civil.
          </p>
        </Container>
      </Section>
    </footer>
  );
};
