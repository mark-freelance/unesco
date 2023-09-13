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
        <Tabs defaultValue={assets.news.tabs[0].name} className="w-full">
          <TabsList className={"w-full justify-start"}>
            {assets.news.tabs.map((tab) => (
              <TabsTrigger value={tab.name}>{tab.name}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={assets.news.tabs[0].name}>
            <h2 className={"text-xl p-4 font-black"}>新闻</h2>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
              {assets.home.news.children.map((item) => (
                <CardComp image={item.image} text={item.text} pos={"outer-bottom"} withKnowMoreButton={item.hasMore}>
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
