'use client'

import Link from 'next/link'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import ApiAcquisitionMethods from '@/components/ApiAcquisitionMethods'
import ThemeToggle from '@/components/ThemeToggle'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Claude API 服务
          </h1>
          <div className="flex items-center gap-4">
            <Link 
              href="/tutorial" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              📚 使用教程
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <AnnouncementBanner
          title={siteConfig.title}
          subtitle={siteConfig.subtitle}
          description={siteConfig.description}
          bannerImage={siteConfig.bannerImage}
        />

        <div className="mt-12">
          <ApiAcquisitionMethods methods={siteConfig.acquisitionMethods} />
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              套餐价格
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              选择适合您的套餐，灵活购买
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {siteConfig.pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl ring-4 ring-blue-300 dark:ring-blue-700'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ 最受欢迎
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {plan.tokens}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span className={plan.popular ? 'text-blue-50' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                  }`}
                >
                  立即购买
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            常见问题
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                如何开始使用？
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                注册账号后，您将自动获得初始额度。您可以立即开始使用 API，或者通过邀请好友、购买套餐来获得更多额度。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                额度如何计算？
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                额度以 tokens 为单位计算。不同的模型和请求会消耗不同数量的 tokens。您可以在控制台实时查看额度使用情况。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                支持哪些支付方式？
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                我们支持支付宝、微信支付等主流支付方式，购买后额度立即到账。
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Claude API 服务. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href={`mailto:${siteConfig.contactInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              📧 邮箱联系
            </a>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              💬 微信: {siteConfig.contactInfo.wechat}
            </span>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
              🐧 QQ: {siteConfig.contactInfo.qq}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
