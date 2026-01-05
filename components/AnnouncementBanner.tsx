'use client'

interface AnnouncementBannerProps {
  title: string
  subtitle: string
  description: string
  bannerImage?: string
}

export default function AnnouncementBanner({ 
  title, 
  subtitle, 
  description, 
  bannerImage 
}: AnnouncementBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-8 md:p-12 text-white shadow-2xl">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
        {/* 文字内容 */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            {subtitle}
          </p>
          <p className="text-lg text-blue-50 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* 图片展示 */}
        {bannerImage && (
          <div className="flex-shrink-0 w-full lg:w-96">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src={bannerImage} 
                alt="Banner" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // 图片加载失败时显示占位符
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E图片加载中...%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
