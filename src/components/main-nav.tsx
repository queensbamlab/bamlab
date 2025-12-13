"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";

import { Item, ItemContent, ItemTitle } from "./ui/item";

interface SubItems {
  href: string;
  label: string;
}

interface MenuItems {
  href?: string;
  label: string;
  items?: SubItems[];
}

const MainNav = ({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: MenuItems[];
}) => {
  const pathname = usePathname();
  return (
    // TODO: Change viewport for mobile
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="">
        <nav className={cn("items-center gap-0.5", className)} {...props}>
          {items.map((item, i) => {
            const isActive = pathname === item.href;

            return (
              <NavigationMenuItem key={i}>
                {item.items && item.items.length > 0 ? (
                  <>
                    <NavigationMenuTrigger className="text-base">{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 py-2">
                      {item.items.map((subItem, j) => (
                        <Item key={j} className="px-2 py-0">
                          <NavigationMenuLink asChild className="w-full ">
                            <Link href={subItem.href}>
                              <ItemContent>
                                <ItemTitle className="text-base">{subItem.label}</ItemTitle>
                              </ItemContent>
                            </Link>
                          </NavigationMenuLink>
                        </Item>
                      ))}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <>
                    <NavigationMenuLink
                      asChild
                      className="font-medium rounded-md text-base"
                    >
                      <Link href={item.href || ""}>{item.label}</Link>
                    </NavigationMenuLink>
                  </>
                )}
              </NavigationMenuItem>
            );
          })}

          <NavigationMenuItem className="ml-4">
            <Button asChild variant={"secondary"}>
              <NavigationMenuLink
                asChild
                className={cn(pathname === "/contact" && "", "text-base")}
              >
                <Link href={"/contact"}>Contact</Link>
              </NavigationMenuLink>
            </Button>
          </NavigationMenuItem>
        </nav>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
