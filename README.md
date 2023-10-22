# Unesco Mock

## Usage

### environment

```shell
# MacOS necessary, ref: https://github.com/Automattic/node-canvas/issues/2186
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman

yarn
```

### run

```bash
yarn
yarn dev
```

## demo preview

at https://zsy2.cs-magic.cn

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

## deploy

### basic

本项目目前没有涉及任何环境变量相关的秘钥，因此部署的时候，在服务器端 clone 后正常运行即可

- 运行前：`yarn`
- 开发模式运行：`yarn dev`
- 生产模式编译并运行：`yarn build && yarn start`
- 生产模式 zero-downtime 模式：`yarn update && yarn start`

### ssl （nginx）

提供一下我的 nginx 配置（我的域名在 `cs-magic.cn`）：

```shell
# /etc/nginx/sites-available/default

# 以下 block 用于监听所有一级、二级子域名的 http 流量，并重定向到 https，以增强安全性
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        server_name cs-magic.cn *.cs-magic.cn;

        return 301 https://$server_name$request_uri;
}

# 以下 block 用于监听所有在 `zsy2` 子域名下的 https 流量
# 并反向代理到 本地的 30913 接口（与 `yarn start -p 30913` 组合使用）
# 前提需要配置证书
server {
  # listen on *:443 -> ssl; instead of *:80
  listen 443 ssl;

  server_name zsy2.cs-magic.cn;

# 证书路径
  ssl_certificate /etc/letsencrypt/live/cs-magic.cn-0002/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/cs-magic.cn-0002/privkey.pem;
  include snippets/ssl-params.conf;

  location / {
    # reverse proxy for next server
    proxy_pass http://localhost:30913;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;

    # we need to remove this 404 handling
    # because next's _next folder and own handling
    # try_files $uri $uri/ =404;
  }
  location ~ /.well-known {
    allow all;
  }
}
```

提供一下基于 `Lets Encrypt` 免费生成证书的办法：

```shell
# 需要修改为你自己的邮箱和域名
EMAIL=cto@cs-magic.com
DOMAIN=cs-magic.cn

# 放心大胆的运行，然后出啥错，google搜索即可，最终你应该可以搞定
# 值得注意的是，它会要求你在dns服务商输入两次txt记录
# 亚马逊是直接用换行表示两条，而腾讯云则是可以直接添加两条，这个有所区别
sudo certbot certonly \
--manual \
--preferred-challenges=dns \
--email $EMAIL \
--server https://acme-v02.api.letsencrypt.org/directory \
-d  $DOMAIN\
-d "*.$DOMAIN"
```

最后运行：

```shell
# 检查 nginx 配置服务是否正确
sudo nginx -t

# 重启 nginx 使配置生效
sudo systemctl restart nginx
```

### 最佳实践：零宕机升级服务器

如果你每次升级，重新运行 `yarn build && yarn start`，由于 `build` 的时候，`.next`文件夹会被覆写，所以导致直接 serve 的服务挂掉。更严重的， 如果编译失败，将导致整个服务直接死掉。

一个最简单暴力且有效的解决办法是，我们设置 `build` 的时候，生成在 `.next-tmp`，直到编译顺利完成，再覆写 `.next` 文件夹。

听起来很复杂，不过我们已经通过改动 `next.config.js` 实现了这一特性，并且将脚本写入了 `package.json`，只需要 `yarn update` 就可以自动从 github 拉取最新的代码，并且编译的时候采取这种转移策略。

最后，如果我们使用 `pm2`，将可以更好地管理我们的程序，让它在后端完美稳定地运行着。

以下是全部策略：


```shell

git clone https://github.com/m-archive-commercial/unesco.git

cd unesco

# 初始化
yarn

# 先生成初始依赖程序
yarn build

# 使用 pm2 新开 nextjs 的服务，并启动在 30913 端口（对齐 nginx）
pm2 start --name "unesco" 'yarn start -p 30913'

# 之后就可以无伤地升级服务（自动拉取最新代码、自动编译、自动运行）
yarn update && p=unesco && pm2 restart $p && pm2 log $p
```

## todo

- [ ] 研究：在`contentlayer.config.ts`中设置`contentType`，为什么 mdx 可以渲染表格，但是 markdown 不可以
- [ ] 研究： heroes page 是否有更好（更统一）的实现方式

## ref

- template: https://github.com/shadcn/next-template

## License

None
