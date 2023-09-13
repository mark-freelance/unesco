"use client";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
import { assets } from "@/components/assets";
import { SubNavCard } from "@/components/main/nav";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "~/cregu_logo（页面顶部左上角）.png";

export function SiteHeader() {
  const bg = "bg-primary";
  return (
    <header className={cn("fixed z-40 top-0 px-8 w-full border-b-2", bg)}>
      <div className="container flex p-2 space-x-4 justify-between items-end sm:space-x-0">
        <Image src={Logo} alt={"logo"} className={"h-12 w-auto"} />

        <NavigationMenu>
          <NavigationMenuList className={"flex gap-4"}>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn("bg-transparent text-white font-black")}>首页</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {assets.nav.items.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className={"bg-transparent text-white font-black"}>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={cn("fixed left-0 w-screen flex items-center h-fit p-4 gap-4 mt-3", bg)}>
                    <Image src={item.left} alt={""} className={"w-fit md:mr-40"} />
                    {item.children.map((props, index) => (
                      <SubNavCard {...props} key={index} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
