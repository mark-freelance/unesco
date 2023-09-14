"use client"

import { CenterContainer } from "@/components/container"
import { Banner } from "@/components/main/banner"
import { AllNews } from "@/components/news"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { assets } from "@/config/assets"
import { PropsWithChildren } from "react"

export default function News({ children }: PropsWithChildren) {
  return (
    <>
      <Banner />
      <CenterContainer>{children}</CenterContainer>
    </>
  )
}
