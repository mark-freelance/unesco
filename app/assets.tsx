// import Nav1_1Article from "@/content/1_1_机构简介.md";
// import Nav1_2Article from "@/content/1_2_联系我们.md";
// import Nav2_1Article from "@/content/2_1_联合国实习.md";
// import Nav2_2Article from "@/content/2_2_模拟联合国.md";
// import Nav4_1Article from "@/content/4_1_专家团队.md";
// import Nav4_2Article from "@/content/4_2_联合国KIP国际学院.md";
// import Nav4_3Article from "@/content/4_3_联合国地方经济发展局.md";
// import Nav4_4Article from "@/content/4_4_联合国南南合作发展与创新处（IDEASS）.md";
import Logo from "~/cregu_logo（页面顶部左上角）.png";
import Nav3_Left from "~/导航 区/NEWS/二级展开/左侧简介.png";
import Nav3_1Bg from "~/导航 区/NEWS/二级展开/机构咨询（底板）.png";
import Nav3_1Fg from "~/导航 区/NEWS/二级展开/机构资讯.png";
import Nav1_2Fg from "~/导航 区/关于我们/二级展开/使命&目标.png";
import Nav1_2Bg from "~/导航 区/关于我们/二级展开/使命&目标（底图）.png";
import Nav1_Left from "~/导航 区/关于我们/二级展开/左侧简介.png";
import Nav1_1Fg from "~/导航 区/关于我们/二级展开/机构简介.png";
import Nav1_1Bg from "~/导航 区/关于我们/二级展开/机构简介（底图）.png";
import Nav1_3Fg from "~/导航 区/关于我们/二级展开/联系我们.png";
import Nav1_3Bg from "~/导航 区/关于我们/二级展开/联系我们（底图）.png";
import Nav4_1Bg from "~/导航 区/合作机构/二级展开/CREGU (底图).png";
import Nav4_1Fg from "~/导航 区/合作机构/二级展开/CREGU.png";
import Nav4_2Bg from "~/导航 区/合作机构/二级展开/KIP (底图).png";
import Nav4_2Fg from "~/导航 区/合作机构/二级展开/KIP.png";
import Nav4_3Fg from "~/导航 区/合作机构/二级展开/ils leda.png";
import Nav4_3Bg from "~/导航 区/合作机构/二级展开/ilsleda (底板).png";
import Nav4_Left from "~/导航 区/合作机构/二级展开/左侧简介文字.png";
import Nav2_Left from "~/导航 区/项目介绍/二级展开/左侧简介.png";
import Nav2_1Fg from "~/导航 区/项目介绍/二级展开/模拟联合国.png";
import Nav2_1Bg from "~/导航 区/项目介绍/二级展开/模拟联合国（底图）.png";
import Nav2_2Fg from "~/导航 区/项目介绍/二级展开/联合国实习.png";
import Nav2_2Bg from "~/导航 区/项目介绍/二级展开/联合国实习（底图）.png";
import Teacher1Name from "~/正文05 区/导师/01（导师名）.png";
import Teacher1Avatar from "~/正文05 区/导师/01（导师头像）.png";
import Teacher2Name from "~/正文05 区/导师/02（导师名）.png";
import Teacher2Avatar from "~/正文05 区/导师/02（导师头像）.png";
import Teacher3Name from "~/正文05 区/导师/03（导师名）.png";
import Teacher3Avatar from "~/正文05 区/导师/03（导师头像）.png";
import Teacher4Name from "~/正文05 区/导师/04（导师名）.png";
import Teacher4Avatar from "~/正文05 区/导师/04（导师头像）.png";
import Teacher5Name from "~/正文05 区/导师/05（导师名）.png";
import Teacher5Avatar from "~/正文05 区/导师/05（导师头像）.png";
import Teacher6Name from "~/正文05 区/导师/06（导师名）.png";
import Teacher6Avatar from "~/正文05 区/导师/06（导师头像）.png";

export const assets = {
  logo: Logo,
  teachers: {
    items: [
      { avatar: Teacher1Avatar, name: Teacher1Name },
      { avatar: Teacher2Avatar, name: Teacher2Name },
      { avatar: Teacher3Avatar, name: Teacher3Name },
      { avatar: Teacher4Avatar, name: Teacher4Name },
      { avatar: Teacher5Avatar, name: Teacher5Name },
      { avatar: Teacher6Avatar, name: Teacher6Name },
    ],
  },
  nav: {
    items: [
      {
        name: "关于我们",
        left: Nav1_Left,
        children: [
          {
            bg: Nav1_1Bg,
            fg: Nav1_1Fg,
            // link: Nav1_1Article
          },
          {
            bg: Nav1_2Bg,
            fg: Nav1_2Fg,
            // link: Nav1_2Article
          },
        ],
      },
      {
        name: "项目介绍",
        left: Nav2_Left,
        children: [
          {
            bg: Nav2_1Bg,
            fg: Nav2_1Fg,
            // link: Nav2_1Article
          },
          {
            bg: Nav2_2Bg,
            fg: Nav2_2Fg,
            // link: Nav2_2Article
          },
        ],
      },
      {
        name: "NEWS",
        left: Nav3_Left,
        children: [{ bg: Nav3_1Bg, fg: Nav3_1Fg }],
      },
      {
        name: "合作机构",
        left: Nav4_Left,
        children: [
          {
            bg: Nav4_1Bg,
            fg: Nav4_1Fg,
            // link: Nav4_1Article
          },
          {
            bg: Nav4_2Bg,
            fg: Nav4_2Fg,
            // link: Nav4_2Article
          },
          {
            bg: Nav4_3Bg,
            fg: Nav4_3Fg,
            // link: Nav4_3Article
          },
          {
            bg: Nav4_3Bg,
            fg: Nav4_3Fg,
            // link: Nav4_4Article
          },
        ],
      },
    ],
  },
};
