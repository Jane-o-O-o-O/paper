import CodeBlock from './CodeBlock'

export default function CommandsContent() {
  return (
    <div className="space-y-8">
      {/* Slash Commands */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-blue-700 dark:text-blue-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M12 2v20"></path>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Claude Code 常见的 / 命令
          </div>
        </div>
        
        <div className="px-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <th className="text-left py-3 px-4 font-semibold text-blue-900 dark:text-blue-300">命令</th>
                  <th className="text-left py-3 px-4 font-semibold text-blue-900 dark:text-blue-300">用途</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/bug</td>
                  <td className="py-3 px-4">报告错误（将对话发送给 Anthropic）</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/clear</td>
                  <td className="py-3 px-4">清除对话历史</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/compact [instructions]</td>
                  <td className="py-3 px-4">压缩对话，可选择焦点说明</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/config</td>
                  <td className="py-3 px-4">查看/修改配置</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/cost</td>
                  <td className="py-3 px-4">显示令牌使用统计</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/doctor</td>
                  <td className="py-3 px-4">检查 Claude Code 安装的健康状况</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/help</td>
                  <td className="py-3 px-4">获取使用帮助</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/init</td>
                  <td className="py-3 px-4">使用 CLAUDE.md 指南初始化项目</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/login</td>
                  <td className="py-3 px-4">切换 Anthropic 账户</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/logout</td>
                  <td className="py-3 px-4">从 Anthropic 账户登出</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/memory</td>
                  <td className="py-3 px-4">编辑 CLAUDE.md 记忆文件</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/pr_comments</td>
                  <td className="py-3 px-4">查看拉取请求评论</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/review</td>
                  <td className="py-3 px-4">请求代码审查</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/status</td>
                  <td className="py-3 px-4">查看账户和系统状态</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-900/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/terminal-setup</td>
                  <td className="py-3 px-4">安装 Shift+Enter 换行键绑定（仅限 iTerm2 和 VSCode）</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">/vim</td>
                  <td className="py-3 px-4">进入 vim 模式以切换插入和命令模式</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CLI Commands */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7 text-green-600">
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
            Claude Code 常见的 CLI 命令
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 p-3">
            <p className="text-sm text-blue-700 dark:text-blue-400">
              参考链接：<a href="https://docs.anthropic.com/zh-CN/docs/claude-code/cli-reference" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">https://docs.anthropic.com/zh-CN/docs/claude-code/cli-reference</a>
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">命令</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">描述</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">示例</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">claude</td>
                  <td className="py-3 px-4">启动交互式 REPL</td>
                  <td className="py-3 px-4 font-mono text-sm">claude</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">claude "query"</td>
                  <td className="py-3 px-4">使用初始提示启动 REPL</td>
                  <td className="py-3 px-4 font-mono text-sm">claude "explain this project"</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">claude -p "query"</td>
                  <td className="py-3 px-4">通过 SDK 查询，然后退出</td>
                  <td className="py-3 px-4 font-mono text-sm">claude -p "explain this function"</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">cat file | claude -p "query"</td>
                  <td className="py-3 px-4">处理管道内容</td>
                  <td className="py-3 px-4 font-mono text-sm">cat logs.txt | claude -p "explain"</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">claude -c</td>
                  <td className="py-3 px-4">继续最近的对话</td>
                  <td className="py-3 px-4 font-mono text-sm">claude -c</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">claude -c -p "query"</td>
                  <td className="py-3 px-4">通过 SDK 继续</td>
                  <td className="py-3 px-4 font-mono text-sm">claude -c -p "Check for type errors"</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">claude -r "&lt;session-id&gt;" "query"</td>
                  <td className="py-3 px-4">通过 ID 恢复会话</td>
                  <td className="py-3 px-4 font-mono text-sm">claude -r "abc123" "Finish this PR"</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-green-600 dark:text-green-400">claude mcp</td>
                  <td className="py-3 px-4">配置模型上下文协议 (MCP) 服务器</td>
                  <td className="py-3 px-4 text-sm">参见 MCP 文档</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CLI Parameters */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-purple-700 dark:text-purple-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M4 7h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 17h16"></path>
            </svg>
            Claude Code 常见的 CLI 参数
          </div>
        </div>
        
        <div className="px-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white dark:bg-gray-800 rounded-lg">
              <thead>
                <tr className="border-b-2 border-purple-300 dark:border-purple-700">
                  <th className="text-left py-3 px-4 font-semibold text-purple-900 dark:text-purple-300">标志</th>
                  <th className="text-left py-3 px-4 font-semibold text-purple-900 dark:text-purple-300">描述</th>
                  <th className="text-left py-3 px-4 font-semibold text-purple-900 dark:text-purple-300">示例</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--print, -p</td>
                  <td className="py-3 px-4">在非交互模式下运行</td>
                  <td className="py-3 px-4 font-mono text-sm">claude -p "query"</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--output-format</td>
                  <td className="py-3 px-4">指定输出格式（text、json、stream-json）</td>
                  <td className="py-3 px-4 font-mono text-sm">claude -p --output-format json</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--resume, -r</td>
                  <td className="py-3 px-4">通过会话 ID 恢复对话</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --resume abc123</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--continue, -c</td>
                  <td className="py-3 px-4">继续最近的对话</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --continue</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--verbose</td>
                  <td className="py-3 px-4">启用详细日志记录</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --verbose</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--max-turns</td>
                  <td className="py-3 px-4">在非交互模式下限制代理轮次</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --max-turns 3</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--system-prompt</td>
                  <td className="py-3 px-4">覆盖系统提示（仅适用于 --print）</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --system-prompt "Custom instructions"</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--append-system-prompt</td>
                  <td className="py-3 px-4">附加到系统提示（仅适用于 --print）</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --append-system-prompt "Additional context"</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--allowedTools</td>
                  <td className="py-3 px-4">允许的工具的空格分隔列表</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --allowedTools mcp__slack,mcp__filesystem</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--disallowedTools</td>
                  <td className="py-3 px-4">拒绝的工具的空格分隔列表</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --disallowedTools mcp__spotify,mcp__github</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--mcp-config</td>
                  <td className="py-3 px-4">从 JSON 文件加载 MCP 服务器</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --mcp-config servers.json</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--permission-prompt-tool</td>
                  <td className="py-3 px-4">用于处理权限提示的 MCP 工具</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --permission-prompt-tool mcp_allow</td>
                </tr>
                <tr className="border-b border-purple-100 dark:border-purple-900/50">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--logout</td>
                  <td className="py-3 px-4">退出登录</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --logout</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">--pick-relay</td>
                  <td className="py-3 px-4">选择节点</td>
                  <td className="py-3 px-4 font-mono text-sm">claude --pick-relay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts - General */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-cyan-700 dark:text-cyan-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
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
            Claude Code 常用的快捷键
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* General Controls */}
          <div>
            <h6 className="mb-3 font-bold text-lg text-cyan-800 dark:text-cyan-300">1. 通用控制</h6>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white dark:bg-gray-800 rounded-lg">
                <thead>
                  <tr className="border-b-2 border-cyan-300 dark:border-cyan-700">
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">快捷键</th>
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">描述</th>
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">上下文</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Ctrl+C</kbd></td>
                    <td className="py-3 px-4">取消当前输入或生成</td>
                    <td className="py-3 px-4">标准中断</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Ctrl+D</kbd></td>
                    <td className="py-3 px-4">退出 Claude Code 会话</td>
                    <td className="py-3 px-4">EOF 信号</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Ctrl+L</kbd></td>
                    <td className="py-3 px-4">清除终端屏幕</td>
                    <td className="py-3 px-4">保留对话历史</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">↑</kbd> / <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">↓</kbd></td>
                    <td className="py-3 px-4">导航命令历史</td>
                    <td className="py-3 px-4">回调之前的输入</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Esc</kbd> + <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Esc</kbd></td>
                    <td className="py-3 px-4">编辑上一条消息</td>
                    <td className="py-3 px-4">双击 Escape 键修改</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Multi-line Input */}
          <div>
            <h6 className="mb-3 font-bold text-lg text-cyan-800 dark:text-cyan-300">2. 多行输入方法</h6>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white dark:bg-gray-800 rounded-lg">
                <thead>
                  <tr className="border-b-2 border-cyan-300 dark:border-cyan-700">
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">快捷键</th>
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">上下文</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">\</kbd> + <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Enter</kbd></td>
                    <td className="py-3 px-4">快速转义 - 在所有终端中工作</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Option+Enter</kbd></td>
                    <td className="py-3 px-4">macOS 默认 - macOS 上的默认设置</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4"><kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">Shift+Enter</kbd></td>
                    <td className="py-3 px-4">终端设置 - 在 /terminal-setup 之后</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">粘贴模式</td>
                    <td className="py-3 px-4">直接粘贴 - 用于代码块、日志</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Commands */}
          <div>
            <h6 className="mb-3 font-bold text-lg text-cyan-800 dark:text-cyan-300">3. 快速命令</h6>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white dark:bg-gray-800 rounded-lg">
                <thead>
                  <tr className="border-b-2 border-cyan-300 dark:border-cyan-700">
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">快捷键</th>
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">描述</th>
                    <th className="text-left py-3 px-4 font-semibold text-cyan-900 dark:text-cyan-300">注释</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400">#</td>
                    <td className="py-3 px-4">开头的 #</td>
                    <td className="py-3 px-4">内存快捷键 - 添加到 CLAUDE.md</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-900/50">
                    <td className="py-3 px-4 font-mono text-cyan-600 dark:text-cyan-400">/</td>
                    <td className="py-3 px-4">提示文件选择</td>
                    <td className="py-3 px-4">开头的 / - 斜杠命令</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 px-4">参见斜杠命令列表</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
