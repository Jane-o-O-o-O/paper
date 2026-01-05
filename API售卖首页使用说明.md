# API 售卖首页功能 - 使用说明

## 🎉 已完成的功能

### ✅ 核心功能
1. **可编辑的公告首页** - 展示 API 售卖信息
2. **三种获取 API 方式展示** - 初始赠送、邀请好友、直接购买
3. **管理后台** - 便捷编辑公告内容
4. **响应式设计** - 完美支持移动端和桌面端
5. **深色模式支持** - 自动适配系统主题

---

## 📁 项目结构

```
Claude-Use/
├── app/
│   ├── page.tsx                    # 新首页 - API 售卖公告页
│   ├── tutorial/page.tsx           # 原安装教程页（已迁移）
│   ├── admin/page.tsx              # 管理后台 - 编辑公告
│   └── api/
│       └── announcement/route.ts   # API 路由 - 读取/保存公告数据
├── components/
│   ├── AnnouncementBanner.tsx      # 公告横幅组件
│   ├── ApiAcquisitionMethods.tsx   # 三种获取方式展示
│   └── AnnouncementEditor.tsx      # 可视化编辑器
├── data/
│   └── announcement.json           # 公告数据存储
└── public/
    └── uploads/                    # 图片上传目录
```

---

## 🚀 如何使用

### 1. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 2. 页面导航

- **首页** (`/`) - API 售卖公告页
  - 展示公告横幅（支持图片和文字）
  - 三种获取 API 方式卡片
  - 套餐价格展示
  - 常见问题解答

- **安装教程** (`/tutorial`) - 原 Claude Code 安装教程
  - Windows/macOS/Linux 安装指南
  - 功能介绍
  - 命令和提示词

- **管理后台** (`/admin`) - 编辑公告内容
  - 编辑标题、副标题、描述
  - 修改横幅图片
  - 编辑三种获取方式的内容
  - 编辑套餐价格信息

### 3. 编辑公告内容

#### 方式一：通过管理后台（推荐）

1. 访问 http://localhost:3000/admin
2. 在表单中编辑内容：
   - **基本信息**：标题、副标题、描述、横幅图片 URL
   - **获取方式**：三种方式的标题、图标、描述、额度、按钮文字、链接
   - **套餐价格**：套餐名称、价格、tokens 数量、功能列表
3. 点击"保存更改"按钮
4. 返回首页查看效果

#### 方式二：直接编辑 JSON 文件

编辑 `data/announcement.json` 文件：

```json
{
  "title": "欢迎使用 Claude API 服务",
  "subtitle": "高质量的 AI API 接口，助力您的应用开发",
  "bannerImage": "/uploads/banner.jpg",
  "description": "我们提供稳定、高效的 Claude API 服务...",
  "acquisitionMethods": [
    {
      "id": "initial",
      "title": "初始赠送",
      "icon": "🎁",
      "description": "新用户注册即可获得",
      "amount": "10,000 tokens",
      "action": "立即注册",
      "actionLink": "/register",
      "highlight": false
    }
    // ... 更多方式
  ],
  "pricingPlans": [
    {
      "name": "基础版",
      "price": "¥29",
      "tokens": "100,000 tokens",
      "features": ["支持所有模型", "7x24小时服务"],
      "popular": false
    }
    // ... 更多套餐
  ]
}
```

### 4. 上传图片

1. 将图片文件放到 `public/uploads/` 目录
2. 在管理后台的"横幅图片 URL"字段填写：`/uploads/你的图片名.jpg`
3. 保存后即可在首页看到图片

---

## 🎨 功能特性

### 首页公告横幅
- ✅ 渐变背景设计
- ✅ 支持自定义标题、副标题、描述
- ✅ 支持横幅图片展示
- ✅ 响应式布局（移动端/桌面端自适应）

### 三种获取方式
- ✅ 卡片式展示
- ✅ 支持高亮推荐（带"🔥 推荐"标签）
- ✅ 自定义图标（Emoji）
- ✅ 悬停动画效果
- ✅ 可配置跳转链接

### 套餐价格
- ✅ 三栏网格布局
- ✅ 支持标记"最受欢迎"套餐
- ✅ 功能列表展示
- ✅ 购买按钮

### 管理后台
- ✅ 实时编辑预览
- ✅ 表单验证
- ✅ 保存成功/失败提示
- ✅ 深色模式支持

---

## 🔧 技术实现

### API 路由
- **GET** `/api/announcement` - 获取公告数据
- **POST** `/api/announcement` - 保存公告数据

### 数据存储
- 使用 JSON 文件存储（`data/announcement.json`）
- 支持实时读取和保存
- 自动更新时间戳

### 组件架构
- **AnnouncementBanner** - 公告横幅展示
- **ApiAcquisitionMethods** - 获取方式卡片
- **AnnouncementEditor** - 可视化编辑器

---

## 📝 自定义建议

### 1. 修改配色方案
编辑组件中的 Tailwind CSS 类名：
- 主色调：`blue-600` → 改为其他颜色
- 渐变背景：`from-blue-600 via-blue-700 to-purple-700`

### 2. 添加更多获取方式
在 `data/announcement.json` 的 `acquisitionMethods` 数组中添加新对象。

### 3. 添加更多套餐
在 `data/announcement.json` 的 `pricingPlans` 数组中添加新对象。

### 4. 修改页面布局
编辑 `app/page.tsx` 调整组件顺序和布局。

---

## 🎯 下一步建议

### 可选增强功能
1. **图片上传 API** - 实现在管理后台直接上传图片
2. **用户认证** - 为管理后台添加登录保护
3. **邀请系统** - 实现真实的邀请链接生成和追踪
4. **支付集成** - 接入支付宝/微信支付 API
5. **数据库存储** - 替换 JSON 文件为数据库（如 PostgreSQL）

### 部署建议
1. 移除 `next.config.js` 中的 `output: 'export'`（已完成）
2. 使用 Vercel/Netlify 部署（支持 API 路由）
3. 配置环境变量保护敏感信息

---

## ⚠️ 注意事项

1. **数据持久化**：当前使用 JSON 文件存储，部署到 Vercel 等平台时，文件系统是只读的，需要改用数据库。

2. **安全性**：管理后台没有认证保护，生产环境需要添加登录验证。

3. **图片存储**：`public/uploads` 目录的图片在部署后可能丢失，建议使用云存储服务（如 AWS S3、阿里云 OSS）。

4. **API 限制**：当前 API 没有速率限制，生产环境需要添加。

---

## 📞 支持

如需进一步定制或遇到问题，请参考：
- Next.js 文档：https://nextjs.org/docs
- Tailwind CSS 文档：https://tailwindcss.com/docs
- React 文档：https://react.dev

---

## ✨ 总结

您现在拥有一个功能完整的 API 售卖首页，包括：
- ✅ 美观的公告展示页面
- ✅ 便捷的管理后台
- ✅ 完整的数据存储和 API
- ✅ 响应式设计和深色模式
- ✅ 可随时编辑的内容

只需访问 `/admin` 即可轻松修改首页的所有内容！
