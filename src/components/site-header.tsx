"use client";

import { siteConfig } from "@/lib/config";
import MainNav from "./main-nav";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const SiteHeader = () => {
  return (
    <header className="py-4 bg-background sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-(--header-height) items-center justify-between gap-2">
          <MobileNav className="flex lg:hidden" items={siteConfig.navItems} />
          <Link href="/" className="flex">
            <ExportedImage
              src="/imgs/logos/bam_logo_short.png"
              alt="Logo"
              width={150}
              height={180}
              className="w-12 h-14 md:w-14 md:h-16"
            />
          </Link>

          <div className="flex items-center min-w-4">
            <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
