import CodeBlock from './CodeBlock'

export default function FeaturesContent() {
  return (
    <div className="space-y-8">
      {/* Feature 1: Interaction Methods */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">1</span>
            Claude Code 交互方式
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">Claude Code 提供两种主要的交互方式：</p>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">启动交互模式：</p>
              <CodeBlock code="claude" />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">以初始查询启动：</p>
              <CodeBlock code='claude "解释这个项目"' />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">运行单个命令并退出：</p>
              <CodeBlock code='claude -p "这个函数做什么？"' />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">处理管道内容：</p>
              <CodeBlock code='cat logs.txt | claude -p "分析这些错误"' />
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Compact Context */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">2</span>
            压缩上下文节省点数
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">长上下文会消耗更多点数，使用以下命令压缩：</p>
          <CodeBlock code="/compact [您的描述]" />
        </div>
      </div>

      {/* Feature 3: Resume Conversations */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">3</span>
            恢复以前的对话
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">恢复最近的对话：</p>
              <CodeBlock code="claude --continue" />
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">显示交互式对话选择器：</p>
              <CodeBlock code="claude --resume" />
            </div>
          </div>
          
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 p-4">
            <p className="text-sm text-blue-700 dark:text-blue-400">--resume 会显示对话开始时间、摘要和消息数量，使用箭头键选择。</p>
          </div>
        </div>
      </div>

      {/* Feature 4: Image Processing */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">4</span>
            处理图像信息
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Claude Code 可以理解和分析图像内容，支持多种输入方式：</p>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-cyan-200">
            <h6 className="mb-3 font-medium text-cyan-800 dark:text-cyan-300">输入方式：</h6>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• 将图像拖放到 Claude Code 窗口中（在 MacOS 上）</li>
              <li>• 复制图像并使用 Ctrl+V 粘贴到 CLI 中（在 MacOS 上）</li>
              <li>• 提供图像路径</li>
            </ul>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-cyan-200">
            <h6 className="mb-3 font-medium text-cyan-800 dark:text-cyan-300">常用图像分析示例：</h6>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>&gt; 分析这个图像：/path/to/your/image.png</p>
              <p>&gt; 这是错误的截图。是什么导致了它？</p>
              <p>&gt; 描述这个截图中的UI元素</p>
              <p>&gt; 生成CSS以匹配这个设计模型</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 5: Deep Thinking */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">5</span>
            深入思考模式
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">对于复杂问题，通过自然语言要求 Claude 进行深入思考，获得更全面的解决方案：</p>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-orange-200">
            <h6 className="mb-3 font-medium text-orange-800 dark:text-orange-300">深入思考示例：</h6>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>&gt; 我需要使用OAuth2为我们的API实现一个新的身份验证系统。深入思考在我们的代码库中实现这一点的最佳方法。</p>
              <p>&gt; 思考这种方法中潜在的安全漏洞</p>
              <p>&gt; 更深入地思考我们应该处理的边缘情况</p>
            </div>
          </div>
          
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/30 p-4">
            <p className="text-sm text-yellow-700 dark:text-yellow-400">⚠️ 注意：深入思考功能适用于复杂问题，会消耗较多的额度点数。</p>
          </div>
          
          <div className="rounded-lg border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-4">
            <h6 className="mb-2 font-medium text-orange-800 dark:text-orange-300">💡 高级技巧：解锁 10 倍解决能力</h6>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">在 .claude/settings.local.json 中启用 MAX_THINKING_TOKENS，可以大幅提升 Claude 解决难题的能力：</p>
            <CodeBlock code={`{\n  "env": {\n    "MAX_THINKING_TOKENS": "32000"\n  }\n}`} />
            <p className="mt-2 text-sm text-orange-700 dark:text-orange-400">只需设置一次，即可永久激活 Claude 的深度思考能力。</p>
          </div>
        </div>
      </div>

      {/* Feature 6: Command History */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">6</span>
            管理命令历史
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">Claude Code 智能管理您的命令历史，提供便捷的历史导航功能：</p>
          
          <div className="rounded-lg bg-indigo-50 dark:bg-indigo-950/30 p-4 border border-indigo-200">
            <h6 className="mb-3 font-medium text-indigo-800 dark:text-indigo-300">历史管理功能：</h6>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• 历史按工作目录存储，每个项目独立管理</li>
              <li>• 使用 /clear 命令清除当前目录的历史</li>
              <li>• 支持智能搜索和过滤</li>
            </ul>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-indigo-200">
            <h6 className="mb-3 font-medium text-indigo-800 dark:text-indigo-300">键盘快捷键：</h6>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• <kbd>↑</kbd> / <kbd>↓</kbd> - 浏览历史命令</li>
              <li>• <kbd>Ctrl</kbd> + <kbd>R</kbd> - 反向搜索历史（如果终端支持）</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feature 7: CLAUDE.md */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">7</span>
            Claude.md 项目记忆
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">创建 CLAUDE.md 文件存储项目信息和约定：</p>
          <CodeBlock code="> /init" />
          <p className="text-sm text-gray-600 dark:text-gray-400">包括常用命令、代码风格偏好、命名约定和架构模式。</p>
        </div>
      </div>

      {/* Feature 8: MCP Support */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">8</span>
            MCP（模型上下文协议）支持
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">MCP 使 Claude 能够访问外部工具和数据源。这是高级功能，详见官方文档。</p>
        </div>
      </div>

      {/* Resources */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-blue-700 dark:text-blue-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            📚 更多学习资源
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-blue-200">
            <h6 className="mb-3 font-medium text-blue-800 dark:text-blue-300">官方文档：</h6>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• CLI 使用和控制</li>
              <li>• Claude Code 概述</li>
            </ul>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-blue-200">
            <h6 className="mb-3 font-medium text-blue-800 dark:text-blue-300">详细教程：</h6>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Claude Code 入门教程</li>
              <li>• 高级功能详解</li>
              <li>• 最佳实践指南</li>
              <li>• 常见问题解答</li>
            </ul>
          </div>
        </div>
      </div>

      {/* IDE Integration */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-purple-700 dark:text-purple-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="m18 16 4-4-4-4"></path>
              <path d="m6 8-4 4 4 4"></path>
              <path d="m14.5 4-5 16"></path>
            </svg>
            🔧 IDE 集成
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">Claude Code 可以集成到您喜欢的 IDE 中：</p>
          <CodeBlock code="/ide" />
          <p className="text-sm text-gray-600 dark:text-gray-400">运行此命令选择本地已安装的 IDE。</p>
        </div>
      </div>
    </div>
  )
}
