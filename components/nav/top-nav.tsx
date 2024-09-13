import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Logo from "@/public/home-logo-audeas.png";
import { Button } from "../ui/button";
import { MobileNav } from "./mobile-nav";
import { getMenuBySlug } from "@/lib/wordpress";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const TopNav = () => {
  return (
    <div
      className={cn("sticky z-50 top-0 bg-background", "border-b", "fade-in")}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-end items-center"
      >
        <div className="flex gap-2">
          <Button className="h-8 w-8" variant="outline" size="icon">
            <Instagram/>
          </Button>
          <Button className="h-8 w-8" variant="outline" size="icon">
            <Twitter />
          </Button>
          <Button className="h-8 w-8" variant="outline" size="icon">
            <Facebook />
          </Button>
        </div>
      </div>
    </div>
  );
};
