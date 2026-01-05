import Link from "next/link";
import { siteConfig } from "@/lib/config";

const SiteFooter = () => {
  return (
    <footer className="group-has-[.section-soft]/body:bg-surface/40 flex flex-col px-4 xl:px-6 max-w-7xl mx-auto ">
      <div className="container-wrapper border-y border-border py-4 sm:flex sm:flex-row justify-between space-y-8">
        <div>
          <p className="text-sm font-semibold mb-2">BAM Lab Logo</p>
          <p className="font-serif text-xs text-muted-foreground">
            Mauris mi felis, porttitor eu auctor volutpat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="space-y-2">
            <p className="text-primary text-sm font-semibold">Quick Links</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-4 font-serif text-muted-foreground">
              {siteConfig.footerItems.map((item, i) => (
                <Link href={item.href} key={i} className="group">
                  <p className="w-fit relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-primary text-sm font-semibold">Location</p>
            <div className="flex flex-col gap-1 font-serif text-muted-foreground text-sm">
              <p>Queen&apos;s University</p>
              <p>633 Goodwin Hall</p>
              <p>Kingston, Ontario</p>
              <p>Canada, K7L 2N8</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-wrapper py-6">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-muted-foreground text-center text-xs sm:text-sm leading-loose">
            © 2025 Big-Data and Analytics Management Lab.{" "}
            <br className="sm:hidden" />
            All rights reserved.
          </p>
          <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
            Built by{" "}
            <Link
              href={
                "https://calicode.dev/?utm_source=bamlab_site&utm_medium=web&utm_campaign=footer_built_by_callout"
              }
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              Calicode
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
