export const siteConfig = {
  title: "欢迎使用 Claude API 服务",
  subtitle: "高质量的 AI API 接口，助力您的应用开发",
  bannerImage: "/banner.png",
  description: "我们提供稳定、高效的 Claude API 服务，支持多种模型选择，满足您的各种需求。",

  acquisitionMethods: [
    {
      id: "initial",
      title: "初始赠送",
      icon: "🎁",
      description: "加微信号：Jane-o-O-o-O",
      amount: "50刀",
      action: "点击复制",
      actionLink: "https://your-register-link.com",
      highlight: false,
      copyText: "Jane-o-O-o-O"
    },
    {
      id: "referral",
      title: "进行star",
      icon: "👥",
      description: "联系up主，互惠star项目，更有100刀相送",
      amount: "每人 100 刀",
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
      actionLink: "#pricing-section",
      highlight: false
    }
  ],

  pricingPlans: [
    {
      name: "基础套餐",
      price: "¥39",
      tokens: "100刀",
      features: ["支持所有模型", "7x24小时服务", "API 文档支持"],
      purchaseLink: "https://pay.ldxp.cn/item/39phjz"
    },
    {
      name: "进阶套餐",
      price: "¥59",
      tokens: "200刀",
      features: ["支持所有模型", "7x24小时服务", "API 文档支持", "优先技术支持"],
      popular: true,
      purchaseLink: "https://pay.ldxp.cn/item/559uvr"
    },
    {
      name: "专业套餐",
      price: "¥89",
      tokens: "300刀",
      features: ["支持所有模型", "7x24小时服务", "API 文档支持", "优先技术支持", "更高并发限制"],
      purchaseLink: "https://pay.ldxp.cn/item/2muzn5"
    },
  ],

  modelPricing: [
    {
      name: "Auto",
      credit: "1x credit",
      description: "根据任务自动选择模型，实现最佳使用效果和稳定质量"
    },
    {
      name: "Claude Sonnet 4.5",
      credit: "1.3x credit",
      description: "最新的 Claude Sonnet 模型"
    },
    {
      name: "Claude Sonnet 4",
      credit: "1.3x credit",
      description: "混合推理和编码，适合日常使用"
    },
    {
      name: "Claude Haiku 4.5",
      credit: "0.4x credit",
      description: "最新的 Claude Haiku 模型"
    },
    {
      name: "Claude Opus 4.5",
      credit: "2.2x credit",
      description: "最强大的 Claude 模型"
    }
  ],

  contactInfo: {
    email: "support@example.com",
    wechat: "Jane-o-O-o-O",
    qq: "2689124001"
  }
}
