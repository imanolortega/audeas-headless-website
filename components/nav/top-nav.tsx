import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const TopNav = () => {
  return (
    <div
      className={cn("sticky z-50 top-0 bg-audeas", "border-b", "fade-in")}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-2 px-6 sm:px-8 flex justify-end items-center"
      >
        <div className="flex gap">
          <Button className="hover:bg-transparent" variant="ghost" size="icon">
            <Instagram className="w-5" color="white" />
          </Button>
          <Button className="hover:bg-transparent" variant="ghost" size="icon">
            <Twitter className="w-5" color="white" />
          </Button>
          <Button className="hover:bg-transparent" variant="ghost" size="icon">
            <Facebook className="w-5" color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
};
