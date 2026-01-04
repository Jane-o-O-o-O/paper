interface SidebarProps {
  currentPage: 'install' | 'features' | 'commands' | 'prompts'
  onPageChange: (page: 'install' | 'features' | 'commands' | 'prompts') => void
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="w-64 min-w-[16rem] h-full">
        <div className="sticky top-20">
          <nav className="space-y-1">
            <h3 className="px-3 mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">文档导航</h3>
            
            <button 
              onClick={() => onPageChange('install')}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'install'
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`transition-colors ${currentPage === 'install' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                  </svg>
                </span>
                <span>Claude Code 安装指南</span>
              </div>
            </button>
            
            <button 
              onClick={() => onPageChange('features')}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'features'
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`transition-colors ${currentPage === 'features' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </span>
                <span>Claude Code 功能</span>
              </div>
            </button>
            
            <button 
              onClick={() => onPageChange('commands')}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'commands'
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`transition-colors ${currentPage === 'commands' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="M10 8h.01"></path>
                    <path d="M12 12h.01"></path>
                    <path d="M14 8h.01"></path>
                    <path d="M16 12h.01"></path>
                    <path d="M18 8h.01"></path>
                    <path d="M6 8h.01"></path>
                    <path d="M7 16h10"></path>
                    <path d="M8 12h.01"></path>
                  </svg>
                </span>
                <span>常见命令和快捷键</span>
              </div>
            </button>
            
            <button 
              onClick={() => onPageChange('prompts')}
              className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                currentPage === 'prompts'
                  ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`transition-colors ${currentPage === 'prompts' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <span>推荐提示词大全</span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </aside>
  )
}
