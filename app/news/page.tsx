"use client"

import { CardComp } from "@/components/card"
import { CenterContainer } from "@/components/container"
import { Banner } from "@/components/main/banner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { assets } from "@/config/assets"

export default function News() {
  return (
    <>
      <Banner />
      <CenterContainer>
        <Tabs defaultValue={assets.newsPage.children[0].name} className="w-full">
          <TabsList className={"w-full justify-start"}>
            {assets.newsPage.children.map((tab) => (
              <TabsTrigger value={tab.name}>{tab.name}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={assets.newsPage.children[0].name}>
            <h2 className={"text-xl p-4 font-black"}>新闻</h2>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
              {assets.homePage.News.children.map((item) => (
                <CardComp {...item} pos={"outer-bottom"}>
                  {item.hasMore && <p className={"text-primary-foreground text-xl font-black"}>更多新闻</p>}
                </CardComp>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CenterContainer>
    </>
  )
}
