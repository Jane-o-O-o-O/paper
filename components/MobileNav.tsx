interface MobileNavProps {
  currentPage: 'install' | 'features' | 'commands' | 'prompts'
  onPageChange: (page: 'install' | 'features' | 'commands' | 'prompts') => void
}

export default function MobileNav({ currentPage, onPageChange }: MobileNavProps) {
  return (
    <div className="lg:hidden mb-6 w-full overflow-x-auto">
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg min-w-max">
        <button 
          onClick={() => onPageChange('install')}
          className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
            currentPage === 'install'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
          }`}
        >
          安装指南
        </button>
        <button 
          onClick={() => onPageChange('features')}
          className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
            currentPage === 'features'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
          }`}
        >
          功能
        </button>
        <button 
          onClick={() => onPageChange('commands')}
          className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
            currentPage === 'commands'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
          }`}
        >
          命令
        </button>
        <button 
          onClick={() => onPageChange('prompts')}
          className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
            currentPage === 'prompts'
              ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
          }`}
        >
          提示词
        </button>
      </div>
    </div>
  )
}
