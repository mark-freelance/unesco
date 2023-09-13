"use client"

import { assets } from "@/app/assets"
import { SubNavCard } from "@/components/main/nav"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export function SiteHeader() {
  const bg = "bg-primary"
  return (
    <header className={cn("sticky z-40 top-0 px-8 w-full border-b-2", bg)}>
      <div className="container flex p-2 space-x-4 justify-between items-end sm:space-x-0">
        <Image src={assets.logo} alt={"logo"} className={"h-12 w-auto"} />

        <NavigationMenu>
          <NavigationMenuList className={"flex gap-4"}>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn("bg-transparent text-white font-black")}>首页</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {assets.nav.items.map((item, index1) => (
              <NavigationMenuItem key={index1}>
                <NavigationMenuTrigger className={"bg-transparent text-white font-black"}>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={cn("fixed left-0 w-screen flex items-center h-fit p-4 gap-4 mt-3", bg)}>
                    <Image src={item.left} alt={""} className={"w-fit md:mr-40"} />
                    {item.children.map((props, index2) => (
                      <Link href={`/article/${index1 + 1}/${index2 + 1}`} key={index2}>
                        <SubNavCard {...props} key={index2} />
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
