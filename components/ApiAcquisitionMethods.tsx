'use client'

import Link from 'next/link'
import { useState } from 'react'

interface AcquisitionMethod {
  id: string
  title: string
  icon: string
  description: string
  amount: string
  action: string
  actionLink: string
  highlight: boolean
  copyText?: string
}

interface ApiAcquisitionMethodsProps {
  methods: AcquisitionMethod[]
}

export default function ApiAcquisitionMethods({ methods }: ApiAcquisitionMethodsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          三种方式获取 API 额度
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          选择最适合您的方式，立即开始使用
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              method.highlight
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl ring-4 ring-blue-300 dark:ring-blue-700'
                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {method.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                🔥 推荐
              </div>
            )}

            <div className="text-center">
              <div className="text-6xl mb-4">{method.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
              <p className={`text-sm mb-4 ${method.highlight ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                {method.description}
              </p>
              <div className="text-3xl font-bold mb-6">
                {method.amount}
              </div>
              {method.copyText ? (
                <button
                  onClick={() => handleCopy(method.copyText!, method.id)}
                  className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    method.highlight
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                  }`}
                >
                  {copiedId === method.id ? '✓ 已复制' : method.action}
                </button>
              ) : (
                <Link
                  href={method.actionLink}
                  className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    method.highlight
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                  }`}
                >
                  {method.action}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
