import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <div className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 mb-6 md:mb-8 border-0 shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur">
      <div className="px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xl md:text-3xl font-bold gradient-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 md:mr-3 h-6 w-6 md:h-8 md:w-8 text-blue-600">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
            Claude Code 安装指南
          </div>
          <ThemeToggle />
        </div>
        <p className="mt-2 md:mt-3 text-sm md:text-lg text-gray-600 dark:text-gray-400">
          跟着这个教程,你可以轻松在自己的电脑上安装 Claude Code。
        </p>
      </div>
    </div>
  )
}
