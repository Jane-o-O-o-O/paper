export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2024 Claude Code 安装指南 | 
          <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
            Anthropic
          </a>
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
          本教程仅供学习参考使用
        </p>
      </div>
    </footer>
  )
}
