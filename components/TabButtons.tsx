interface TabButtonsProps {
  activeTab: 'windows' | 'macos' | 'linux'
  setActiveTab: (tab: 'windows' | 'macos' | 'linux') => void
}

export default function TabButtons({ activeTab, setActiveTab }: TabButtonsProps) {
  return (
    <div className="grid w-full grid-cols-3 mb-8 p-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
      <button
        onClick={() => setActiveTab('windows')}
        className={`flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg ${
          activeTab === 'windows'
            ? 'bg-white dark:bg-gray-800 text-blue-600 shadow'
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        </svg>
        Windows
      </button>
      <button
        onClick={() => setActiveTab('macos')}
        className={`flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg ${
          activeTab === 'macos'
            ? 'bg-white dark:bg-gray-800 text-blue-600 shadow'
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path>
          <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path>
        </svg>
        macOS
      </button>
      <button
        onClick={() => setActiveTab('linux')}
        className={`flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg ${
          activeTab === 'linux'
            ? 'bg-white dark:bg-gray-800 text-blue-600 shadow'
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
        Linux
      </button>
    </div>
  )
}
