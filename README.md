# Unesco Mock

## Usage

```bash
yarn
yarn dev
```

## project structure

- 静态资源
  - 说明：在 `public/core` 下，是舒昱一开始发我的文件夹 `CREGU官网首页测试开发切片` 的变体，主要做了一些文件名对齐工作，以及补充了一些其他资源
  - 导入：在 `config/assets.ts` 里统一静态导入，方便 SSR 处理
- 静态文档
  - 源文档：需求详细描述, https://www.yuque.com/zhangshuyu-hkq8d/bfe2gh/ioldqv4ewt590nw4#eq9JL
  - 配置：在 `content/article`，主要格式为 markdown，交由 `app/article/[...slug]/page.tsx` 处理
  - 特殊
    - 没有 3 （NEWS）是因为新闻页单开了一页
    - 4.1（导师页）没有使用 md，是因为这一页涉及到了图文混排，所以在 `app/article/4/1/page.tsx` 里单独处理了

## todo

- [ ] 研究：在`contentlayer.config.ts`中设置`contentType`，为什么 mdx 可以渲染表格，但是 markdown 不可以
- [ ] 研究： heroes page 是否有更好（更统一）的实现方式

## ref

- template: https://github.com/shadcn/next-template

## License

None
