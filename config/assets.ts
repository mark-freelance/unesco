import teachers from "./teachers.json"
import Logo from "~/cregu_logo（页面顶部左上角）.png"
import Nav3_Left from "~/导航 区/NEWS/二级展开/左侧简介.png"
import Nav3_1Bg from "~/导航 区/NEWS/二级展开/机构咨询（底板）.png"
import Nav3_1Fg from "~/导航 区/NEWS/二级展开/机构资讯.png"
import Nav1_2Fg from "~/导航 区/关于我们/二级展开/使命&目标.png"
import Nav1_2Bg from "~/导航 区/关于我们/二级展开/使命&目标（底图）.png"
import Nav1_Left from "~/导航 区/关于我们/二级展开/左侧简介.png"
import Nav1_1Fg from "~/导航 区/关于我们/二级展开/机构简介.png"
import Nav1_1Bg from "~/导航 区/关于我们/二级展开/机构简介（底图）.png"
import Nav1_3Fg from "~/导航 区/关于我们/二级展开/联系我们.png"
import Nav1_3Bg from "~/导航 区/关于我们/二级展开/联系我们（底图）.png"
import Nav4_1Bg from "~/导航 区/合作机构/二级展开/CREGU (底图).png"
import Nav4_1Fg from "~/导航 区/合作机构/二级展开/CREGU.png"
import Nav4_2Bg from "~/导航 区/合作机构/二级展开/KIP (底图).png"
import Nav4_2Fg from "~/导航 区/合作机构/二级展开/KIP.png"
import Nav4_3Fg from "~/导航 区/合作机构/二级展开/ils leda.png"
import Nav4_3Bg from "~/导航 区/合作机构/二级展开/ilsleda (底板).png"
import Nav4_Left from "~/导航 区/合作机构/二级展开/左侧简介文字.png"
import Nav2_Left from "~/导航 区/项目介绍/二级展开/左侧简介.png"
import Nav2_1Fg from "~/导航 区/项目介绍/二级展开/模拟联合国.png"
import Nav2_1Bg from "~/导航 区/项目介绍/二级展开/模拟联合国（底图）.png"
import Nav2_2Fg from "~/导航 区/项目介绍/二级展开/联合国实习.png"
import Nav2_2Bg from "~/导航 区/项目介绍/二级展开/联合国实习（底图）.png"
import Content1RTImage from "~/正文01 区/“战争起源于人的思想，因此必须在人的思想中筑起保卫和平的屏障”， 这对于“通过教育、科学、文化、传播和信息促进建设和平、消除贫.png"
import Content1LImage from "~/正文01 区/画框区.png"
import Content2RText from "~/正文02 区/右 区/什么是模拟联合国_ 为什么要参加模拟联合国_.png"
import Content2RImage from "~/正文02 区/右 区/底图.png"
import Content2LImage from "~/正文02 区/左 区/底图.png"
import Content2LText from "~/正文02 区/左 区/欢迎你参与到 多元的联合国实习项目中来.png"
import Content3Image from "~/正文03 区/底图.png"
import Content3Text from "~/正文03 区/更多伙伴机构与组织.png"
import Content4TImage from "~/正文04 区/NEWS.png"
import Content4B2Image from "~/正文04 区/中 区/02 NEWS (底图).png"
import Content4B2Text from "~/正文04 区/中 区/中心成员参加菜鸟集团 的探索可持续经营管理培训。.png"
import Content4MImage from "~/正文04 区/关于我们的相关资讯可以 访问NEWS频道,我们会及时更新&发布。.png"
import Content4B3Image from "~/正文04 区/右 区/03 NEWS (底图).png"
import Content4B1Image from "~/正文04 区/左 区/01 NEWS (底图).png"
import Content4B1Text from "~/正文04 区/左 区/中心将访问菜鸟集团， 探索可持续发展的新合作形式。.png"
import Teacher1Name from "~/正文05 区/导师/01（导师名）.png"
import Teacher1Avatar from "~/正文05 区/导师/01（导师头像）.png"
import Teacher2Name from "~/正文05 区/导师/02（导师名）.png"
import Teacher2Avatar from "~/正文05 区/导师/02（导师头像）.png"
import Teacher3Name from "~/正文05 区/导师/03（导师名）.png"
import Teacher3Avatar from "~/正文05 区/导师/03（导师头像）.png"
import Teacher4Name from "~/正文05 区/导师/04（导师名）.png"
import Teacher4Avatar from "~/正文05 区/导师/04（导师头像）.png"
import Teacher5Name from "~/正文05 区/导师/05（导师名）.png"
import Teacher5Avatar from "~/正文05 区/导师/05（导师头像）.png"
import Teacher6Name from "~/正文05 区/导师/06（导师名）.png"
import Teacher6Avatar from "~/正文05 区/导师/06（导师头像）.png"
import Content5TImage from "~/正文05 区/导师展示.png"
import Content5MImage from "~/正文05 区/我们拥有强大且专业的导师 团队更多关于导师介绍可以点击访问。.png"
import Banner1Text from "~/顶部Banner 区/01 Banner/About us.png"
import Banner1Image from "~/顶部Banner 区/01 Banner/底图01.png"
import Banner2Image from "~/顶部Banner 区/02 Banner/底图02.png"
import Banner2Text from "~/顶部Banner 区/02 Banner/联合国实习项目.png"
import Banner3Image from "~/顶部Banner 区/03 Banner/底图03.png"
import Banner3Text from "~/顶部Banner 区/03 Banner/模拟联合国.png"

export const assets = {
  general: {
    logo: Logo,
    nav: {
      children: [
        {
          name: "关于我们",
          left: Nav1_Left,
          children: [
            {
              name: "机构简介",
              image: Nav1_1Bg,
              fg: Nav1_1Fg,
            },
            {
              name: "专家团队",
              image: Nav4_1Bg,
              fg: Nav4_1Fg,
            },
            {
              name: "联系我们",
              image: Nav1_2Bg,
              fg: Nav1_2Fg,
            },
          ],
        },
        {
          name: "项目介绍",
          left: Nav2_Left,
          children: [
            {
              name: "联合国实习",
              image: Nav2_1Bg,
              fg: Nav2_1Fg,
            },
            {
              name: "模拟联合国",
              image: Nav2_2Bg,
              fg: Nav2_2Fg,
            },
          ],
        },
        {
          name: "NEWS",
          left: Nav3_Left,
          children: null,
        },
        {
          name: "合作机构",
          left: Nav4_Left,
          children: [
            {
              name: "联合国KIP国际学院",
              image: Nav4_2Bg,
              fg: Nav4_2Fg,
            },
            {
              name: "联合国地方经济发展局",
              image: Nav4_3Bg,
              fg: Nav4_3Fg,
            },
            {
              name: "联合国南南合作发展与创新处",
              image: Nav4_3Bg,
              fg: Nav4_3Fg,
            },
          ],
        },
      ],
    },
    teachers,
  },

  homePage: {
    banners: [
      { image: Banner1Image, text: Banner1Text, link: "/article/1/1" },
      { image: Banner2Image, text: Banner2Text, link: "/article/2/1" },
      { image: Banner3Image, text: Banner3Text, link: "/article/2/2" },
    ],
    News: {
      title: Content4TImage,
      subTitle: Content4MImage,
      children: [
        { image: Content4B1Image, text: Content4B1Text, link: "/news/1" },
        { image: Content4B2Image, text: Content4B2Text, link: "/news/2" },
        { image: Content4B3Image, link: "/news", hasMore: true },
      ],
    },
    modules: {
      Intro: {
        left: {
          image: Content1LImage,
        },
        right: {
          image: Content1RTImage,
          link: "/article/1/1",
        },
      },
      UnitedNations: {
        children: [
          {
            image: Content2LImage,
            text: Content2LText,
            link: "/article/2/1",
          },
          {
            image: Content2RImage,
            text: Content2RText,
            link: "/article/2/2",
          },
        ],
      },
      More: {
        image: Content3Image,
        text: Content3Text,
        link: "/article/4/1",
      },
      Teachers: {
        top: Content5TImage,
        middle: Content5MImage,
      },
    },
  },
  newsPage: {
    children: [
      { name: "主页", children: [{ name: "新闻", children: [{ image: "" }] }] },
      { name: "事件" },
      { name: "新闻发布" },
      { name: "新闻与案例" },
      { name: "多媒体" },
      { name: "联系人" },
    ],
  },
  teachersPage: {
    children: [
      { avatar: Teacher1Avatar, name: Teacher1Name },
      { avatar: Teacher2Avatar, name: Teacher2Name },
      { avatar: Teacher3Avatar, name: Teacher3Name },
      { avatar: Teacher4Avatar, name: Teacher4Name },
      { avatar: Teacher5Avatar, name: Teacher5Name },
      { avatar: Teacher6Avatar, name: Teacher6Name },
    ],
  },
}

export type ITeacher = (typeof teachers)[0]
