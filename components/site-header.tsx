"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { assets } from "@/config/assets"
import { CENTER_LIMITER_CLASS } from "@/config/ui"
import { cn } from "@/lib/utils"
// from "@radix-ui/react-navigation-menu"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export function SiteHeader() {
  const bgClass = "bg-primary"
  return (
    <header className={cn("sticky z-40 top-0 px-8 w-full border-b-2", bgClass)}>
      <div className={cn("container flex py-2 space-x-4 justify-between items-end sm:space-x-0", CENTER_LIMITER_CLASS)}>
        <Link href={"/"}>
          <Image src={assets.general.logo} alt={"logo"} className={"h-12 w-auto"} />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className={"flex gap-4"}>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn("bg-transparent text-white font-black")}>首页</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {assets.general.nav.children.map((item, i) => (
              <NavigationMenuItem key={i}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className={"bg-transparent text-white font-black"}>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className={cn("fixed left-0 w-screen flex items-center h-fit p-4 gap-4 mt-3", bgClass)}>
                        <Image src={item.left} alt={""} className={"w-fit md:mr-40"} />
                        {item.children.map(({ name, bg }, j) => (
                          <Link href={`/article/${i + 1}/${j + 1}`} key={j}>
                            <div className={"w-32 "}>
                              <AspectRatio ratio={1} className={"relative"}>
                                <Image src={bg} alt={""} fill sizes={"width:128px;"} />
                                <div className={"absolute w-full h-full | flex items-center justify-center z-10"}>
                                  <span className={"text-white font-medium w-2/3 text-center text-shadow"}>{name}</span>
                                </div>
                              </AspectRatio>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink className={cn("bg-transparent text-white font-black")}>{item.name}</NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
