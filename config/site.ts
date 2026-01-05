export const siteConfig = {
  title: "欢迎使用 Claude API 服务",
  subtitle: "高质量的 AI API 接口，助力您的应用开发",
  bannerImage: "/uploads/banner.jpg",
  description: "我们提供稳定、高效的 Claude API 服务，支持多种模型选择，满足您的各种需求。",

  acquisitionMethods: [
    {
      id: "initial",
      title: "初始赠送",
      icon: "🎁",
      description: "群号123456",
      amount: "100刀",
      action: "立即加群",
      actionLink: "https://your-register-link.com",
      highlight: false
    },
    {
      id: "referral",
      title: "进行star",
      icon: "👥",
      description: "点击进入，star项目截图提交即可",
      amount: "每人 200 刀",
      action: "项目链接",
      actionLink: "https://github.com/lllllllama/deeptrender",
      highlight: true
    },
    {
      id: "purchase",
      title: "直接购买",
      icon: "💳",
      description: "选择适合您的套餐",
      amount: "多种套餐可选",
      action: "查看套餐",
      actionLink: "https://your-pricing-link.com",
      highlight: false
    }
  ],

  pricingPlans: [
    {
      name: "基础版",
      price: "¥29",
      tokens: "100,000 tokens",
      features: ["支持所有模型", "7x24小时服务", "API 文档支持"],
      purchaseLink: "https://your-payment-link.com/basic"
    },
    {
      name: "专业版",
      price: "¥99",
      tokens: "500,000 tokens",
      features: ["支持所有模型", "7x24小时服务", "API 文档支持", "优先技术支持", "更高并发限制"],
      popular: true,
      purchaseLink: "https://your-payment-link.com/pro"
    },
  ],

  contactInfo: {
    email: "support@example.com",
    wechat: "your-wechat-id",
    qq: "123456789"
  }
}
