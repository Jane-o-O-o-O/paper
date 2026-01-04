# Claude Code 安装指南

这是一个使用 Next.js 13+ (App Router) 构建的 Claude Code 安装教程网站。

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **App Router** - Next.js 13+ 路由系统

## 开始使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 启动生产服务器

```bash
npm run start
# 或
yarn start
# 或
pnpm start
```

## 项目结构

```
├── app/                    # App Router 目录
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 主页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx         # 页头组件
│   ├── Sidebar.tsx        # 侧边栏组件
│   ├── TabButtons.tsx     # 标签按钮组件
│   ├── WindowsContent.tsx # Windows 内容
│   ├── MacOSContent.tsx   # macOS 内容
│   ├── LinuxContent.tsx   # Linux 内容
│   ├── CodeBlock.tsx      # 代码块组件
│   └── Footer.tsx         # 页脚组件
├── public/                # 静态资源
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript 配置
├── tailwind.config.ts     # Tailwind CSS 配置
└── next.config.js         # Next.js 配置
```

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 深色模式支持
- ✅ 三个平台的安装指南（Windows、macOS、Linux）
- ✅ 代码块一键复制功能
- ✅ 平滑的标签切换动画
- ✅ TypeScript 类型安全
- ✅ 静态导出支持

## 部署

本项目配置了静态导出，可以部署到任何静态托管服务：

```bash
npm run build
```

构建完成后，`out` 目录包含所有静态文件，可以直接部署。

### 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/claude-code-tutorial)

### 部署到 Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/claude-code-tutorial)

## License

MIT
