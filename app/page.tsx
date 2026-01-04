'use client'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import TabButtons from '@/components/TabButtons'
import WindowsContent from '@/components/WindowsContent'
import MacOSContent from '@/components/MacOSContent'
import LinuxContent from '@/components/LinuxContent'
import FeaturesContent from '@/components/FeaturesContent'
import CommandsContent from '@/components/CommandsContent'
import PromptsContent from '@/components/PromptsContent'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'windows' | 'macos' | 'linux'>('windows')
  const [currentPage, setCurrentPage] = useState<'install' | 'features' | 'commands' | 'prompts'>('install')

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        <Header />

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
          <MobileNav currentPage={currentPage} onPageChange={setCurrentPage} />

          <main className="flex-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
              <div className="max-w-5xl">
                {currentPage === 'install' ? (
                  <div className="flex flex-col gap-2 w-full">
                    <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />

                    {activeTab === 'windows' && <WindowsContent />}
                    {activeTab === 'macos' && <MacOSContent />}
                    {activeTab === 'linux' && <LinuxContent />}
                  </div>
                ) : currentPage === 'features' ? (
                  <FeaturesContent />
                ) : currentPage === 'commands' ? (
                  <CommandsContent />
                ) : (
                  <PromptsContent />
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
