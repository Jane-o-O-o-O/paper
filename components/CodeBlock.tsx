'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  comment?: string
}

export default function CodeBlock({ code, comment }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(err => {
      console.error('Failed to copy:', err)
      alert('复制失败,请手动复制')
    })
  }

  return (
    <div className="code-block relative">
      <div className="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-sm">
        {comment && <div className="text-gray-400">{comment}</div>}
        <div className="text-gray-300">{code}</div>
      </div>
      <button 
        className="copy-button absolute right-2 top-2 p-1 rounded bg-gray-800 hover:bg-gray-700"
        onClick={copyCode}
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-400">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
        )}
      </button>
    </div>
  )
}
