"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

import { X } from "lucide-react";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerDescription,
} from "./ui/drawer";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Item } from "./ui/item";

interface SubItems {
  href: string;
  label: string;
}

interface MenuItems {
  href?: string;
  label: string;
  items?: SubItems[];
}
export function MobileNav({
  items,
  className,
}: {
  items: MenuItems[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "h-8  items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
        >
          <div className="relative flex h-8 w-4 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  "top-1"
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  "top-2.5"
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-background/90 no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100">
        <div className="relative flex flex-col gap-12 overflow-auto px-6 py-6">
          <DrawerClose className="absolute right-5 top-5">
            <X />
          </DrawerClose>
          <div className="flex flex-col gap-4">
            <DrawerHeader>
              <DrawerTitle className="sr-only">Menu</DrawerTitle>
              <DrawerDescription className="sr-only">Menu</DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-3">
              <MobileLink href="/" onOpenChange={setOpen}>
                Home
              </MobileLink>
              {items.map((item, index) => {
                if (item.href) {
                  return (
                    <MobileLink
                      key={index}
                      href={item.href}
                      onOpenChange={setOpen}
                    >
                      {item.label}
                    </MobileLink>
                  );
                } else {
                  return (
                    <Accordion collapsible type="single" key={item.label}>
                      <AccordionItem value={item.label}>
                        <AccordionTrigger className="text-2xl font-medium">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          {item.items &&
                            item.items.length > 0 &&
                            item.items.map((subItem) => (
                              <Item asChild key={subItem.label}>
                                <MobileLink
                                  href={subItem.href}
                                  key={subItem.href}
                                  className="text-xl"
                                >
                                  {subItem.label}
                                </MobileLink>
                              </Item>
                            ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-2xl font-medium hover:underline", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
