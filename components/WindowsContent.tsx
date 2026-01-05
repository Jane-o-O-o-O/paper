import CodeBlock from './CodeBlock'

export default function WindowsContent() {
  return (
    <div className="space-y-8">
      {/* One-Click Installation */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-green-700 dark:text-green-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            一键安装(推荐)
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">使用一键安装脚本，自动完成 Node.js 和 Claude Code 的安装，最简单快捷！</p>
          
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 p-3">
            <h6 className="mb-2 text-sm font-medium text-blue-800 dark:text-blue-300">如何打开 PowerShell:</h6>
            <ol className="ml-4 list-decimal space-y-1 text-sm text-blue-700 dark:text-blue-400">
              <li>按下键盘上的 <kbd>Win</kbd> + <kbd>X</kbd> 组合键</li>
              <li>在弹出的菜单中选择"Windows PowerShell"或"终端"</li>
              <li>或者:按 <kbd>Win</kbd> 键,输入"PowerShell",然后回车</li>
            </ol>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-3 font-medium text-gray-800 dark:text-gray-200">方式一：官方源安装</p>
              <CodeBlock 
                comment="# 一键安装 Claude Code（官方源）"
                code="irm https://claude.ai/install.ps1 | iex"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">需要能够访问国际网络</p>
            </div>

            <div className="rounded-lg border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4">
              <p className="mb-3 font-medium text-green-800 dark:text-green-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                方式二：国内镜像安装(推荐国内用户)
              </p>
              <CodeBlock 
                comment="# 一键安装 Claude Code（腾讯云镜像）"
                code="irm https://c.zstring.cn/install.ps1 | iex"
              />
              <p className="mt-2 text-sm text-green-700 dark:text-green-400">使用腾讯云 CDN 加速，国内用户无需代理即可快速安装</p>
            </div>
          </div>

          <div className="rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/30 p-4">
            <h6 className="mb-2 font-medium text-yellow-800 dark:text-yellow-300">⚠️ 安装提示</h6>
            <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-400">
              <li>• 国内用户推荐使用「国内镜像安装」，速度更快更稳定</li>
              <li>• 如果官方源无法访问，可以使用代理工具（梯子）或切换到国内镜像</li>
              <li>• 安装脚本会自动安装 Node.js 和 Claude Code，无需手动安装其他依赖</li>
              <li>• 如果无法使用一键安装，请参考下方的手动安装步骤</li>
            </ul>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-2 font-medium text-green-800 dark:text-green-300">验证安装</h6>
            <p className="mb-3 text-sm text-green-700 dark:text-green-400">安装完成后，运行以下命令检查：</p>
            <CodeBlock code="claude --version" />
            <p className="mt-2 text-sm text-green-700 dark:text-green-400">如果显示版本号，恭喜你！安装成功了。</p>
          </div>

          <div className="rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-950/30 p-4">
            <h6 className="mb-2 font-medium text-orange-800 dark:text-orange-300">下一步：配置环境变量</h6>
            <p className="mb-3 text-sm text-orange-700 dark:text-orange-400">安装完成后，还需要配置环境变量才能正常使用。你有两个选择：</p>
            <div className="space-y-2 text-sm">
              <div className="rounded bg-white dark:bg-gray-800 p-3">
                <p className="font-medium text-orange-800 dark:text-orange-300 mb-2">方法一：使用 cc-switch 快速配置（推荐）</p>
                <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">cc-switch 是一个可视化配置工具，可以帮你快速配置环境变量：</p>
                <ol className="ml-4 list-decimal space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <li>从 GitHub 下载 cc-switch 工具</li>
                  <li>打开工具，根据界面提示输入你的 API 密钥</li>
                  <li>点击配置即可自动完成环境变量设置</li>
                </ol>
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">💡 下载地址: <a href="https://github.com/farion1231/cc-switch" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">https://github.com/farion1231/cc-switch</a></p>
              </div>
              <div className="rounded bg-white dark:bg-gray-800 p-3">
                <p className="font-medium text-orange-800 dark:text-orange-300 mb-2">方法二：手动配置环境变量</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">请查看下方的「步骤 3：设置环境变量」进行手动配置</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1: Install Node.js */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">1</span>
            手动安装：安装 Node.js 环境
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">Claude Code 需要 Node.js 环境才能运行。</p>
          
          <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6">
            <h5 className="mb-4 flex items-center text-lg font-bold text-gray-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-blue-600">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              </svg>
              Windows 安装方法 <span className="text-red-500">(二选一，推荐方法一)</span>
            </h5>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-bold text-gray-900 dark:text-white text-base">方法一：官网下载（推荐）</p>
                <ol className="ml-6 list-decimal space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>打开浏览器访问 <a href="https://nodejs.org/zh-cn/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Node.js 下载页面</a></li>
                  <li>点击 "LTS" 版本进行下载（推荐长期支持版本）</li>
                  <li>下载完成后双击 <code className="rounded bg-gray-100 dark:bg-gray-700 px-2 py-1">.msi</code> 文件</li>
                  <li>按照安装向导完成安装，保持默认设置即可</li>
                </ol>
              </div>
              
              <div>
                <p className="mb-2 font-bold text-gray-900 dark:text-white text-base">方法二：使用包管理器</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">如果你安装了 Chocolatey 或 Scoop，可以使用命令行安装：</p>
                <CodeBlock code={`# 使用 Chocolatey\nchoco install nodejs\n# 或使用 Scoop\nscoop install nodejs`} />
              </div>
            </div>
            
            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 p-4">
              <h6 className="mb-2 font-medium text-blue-800 dark:text-blue-300">Windows 注意事项</h6>
              <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-400">
                <li>• 建议使用 PowerShell 而不是 CMD</li>
                <li>• 如果遇到权限问题，尝试以管理员身份运行</li>
                <li>• 某些杀毒软件可能会误报，需要添加白名单</li>
              </ul>
            </div>
          </div>
          
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-2 font-medium text-green-800 dark:text-green-300">验证安装是否成功</h6>
            <p className="mb-3 text-sm text-green-700 dark:text-green-400">安装完成后，打开 PowerShell 或 CMD，输入以下命令：</p>
            <CodeBlock code={`node --version\nnpm --version`} />
            <p className="mt-2 text-sm text-green-700 dark:text-green-400">如果显示版本号，说明安装成功了！</p>
          </div>
        </div>
      </div>

      {/* Step 2: Install Claude Code */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">2</span>
            手动安装：安装 Claude Code
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <div className="rounded-xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6">
            <h5 className="mb-4 flex items-center text-lg font-bold text-gray-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-600">
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              使用 npm 安装 Claude Code
            </h5>
            <p className="mb-4 text-gray-700 dark:text-gray-300">打开 PowerShell 或 CMD 后，运行以下命令：</p>
            <CodeBlock 
              comment="# 全局安装 Claude Code"
              code="npm install -g @anthropic-ai/claude-code"
            />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">这个命令会从 npm 官方仓库下载并安装最新版本的 Claude Code。</p>
          </div>
          
          <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/30 p-4">
            <h6 className="mb-2 font-medium text-red-800 dark:text-red-300">常见报错：PowerShell 执行策略限制</h6>
            <p className="mb-3 text-sm text-red-700 dark:text-red-400">如果在运行 npm 命令时出现以下错误：</p>
            <div className="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-sm mb-4">
              <div className="text-red-400">npm : 无法加载文件 D:\Program Files\nodejs\npm.ps1,</div>
              <div className="text-red-400">因为在此系统上禁止运行脚本。</div>
            </div>
            
            <div className="space-y-3">
              <p className="font-medium text-red-800 dark:text-red-300">解决方案：</p>
              <ol className="ml-6 list-decimal space-y-2 text-sm text-red-700 dark:text-red-400">
                <li>
                  <span className="font-medium">以管理员身份打开 PowerShell：</span>
                  <ul className="ml-4 mt-1 list-disc text-xs">
                    <li>右键点击开始菜单</li>
                    <li>选择"Windows PowerShell (管理员)"或"终端 (管理员)"</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">运行以下命令：</span>
                  <div className="mt-2">
                    <CodeBlock code="Set-ExecutionPolicy RemoteSigned" />
                  </div>
                </li>
                <li>
                  <span className="font-medium">确认更改：</span>
                  <p className="mt-1 text-xs">当系统询问时，输入 <kbd>Y</kbd> 或者 <kbd>A</kbd>，然后按回车。</p>
                </li>
                <li>
                  <span className="font-medium">重新运行安装命令：</span>
                  <p className="mt-1 text-xs">可以关闭管理员窗口，打开普通 PowerShell 窗口，再次运行 npm install -g @anthropic-ai/claude-code 命令。</p>
                </li>
              </ol>
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">✅ 完成后，npm 命令就可以正常使用了。</p>
            </div>
          </div>
          
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-2 font-medium text-green-800 dark:text-green-300">验证 Claude Code 安装</h6>
            <p className="mb-3 text-sm text-green-700 dark:text-green-400">安装完成后，输入以下命令检查是否安装成功：</p>
            <CodeBlock code="claude --version" />
            <p className="mt-2 text-sm text-green-700 dark:text-green-400">如果显示版本号，恭喜你！Claude Code 已经成功安装了。</p>
            <div className="mt-3 rounded border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/30 p-3">
              <p className="text-xs text-yellow-700 dark:text-yellow-400">⚠️ <span className="font-medium">提示：</span>如果运行 claude --version 时提示需要 Git Bash，请参考下方"步骤 4"中的 Git 报错解决方案。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Environment Variables */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">3</span>
            设置环境变量
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">为了让 Claude Code 连接到你的中转服务，需要设置两个环境变量：</p>
          
          <div className="rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6">
            <h5 className="mb-4 flex items-center text-lg font-bold text-gray-900 dark:text-white">
              配置 Claude Code 环境变量
            </h5>
            
            <div className="space-y-6">
              <div>
                <p className="mb-3 font-bold text-gray-900 dark:text-white text-base">PowerShell 设置方法</p>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 font-medium text-gray-800 dark:text-gray-200">永久设置（强烈推荐）</p>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">在 PowerShell 中运行以下命令设置用户级环境变量：</p>
                    <CodeBlock 
                      comment="# 设置用户级环境变量（永久生效）"
                      code={`[System.Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "http://8.134.76.228:3000", [System.EnvironmentVariableTarget]::User)\n[System.Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "你的API密钥", [System.EnvironmentVariableTarget]::User)`}
                    />
                    <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">💡 设置后需要重新打开 PowerShell 窗口才能生效。</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-3 font-bold text-gray-900 dark:text-white text-base">CMD 设置方法</p>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 font-medium text-gray-800 dark:text-gray-200">永久设置（强烈推荐）</p>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">在 CMD 中运行以下命令设置用户级环境变量：</p>
                    <CodeBlock code={`setx ANTHROPIC_BASE_URL "http://8.134.76.228:3000"\nsetx ANTHROPIC_AUTH_TOKEN "你的API密钥"`} />
                    <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">💡 设置后需要重新打开 CMD 窗口才能生效。</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/30 p-3">
                <p className="text-xs text-yellow-700 dark:text-yellow-400">💡 记得将 "你的API密钥" 替换为实际密钥。</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-2 font-medium text-green-800 dark:text-green-300">验证环境变量设置</h6>
            <p className="mb-3 text-sm text-green-700 dark:text-green-400">设置完环境变量后，可以通过以下命令验证：</p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">PowerShell:</p>
                <CodeBlock code={`echo $env:ANTHROPIC_BASE_URL\necho $env:ANTHROPIC_AUTH_TOKEN`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CMD:</p>
                <CodeBlock code={`echo %ANTHROPIC_BASE_URL%\necho %ANTHROPIC_AUTH_TOKEN%`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Getting Started */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-cyan-700 dark:text-cyan-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M12 2v20"></path>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            开始使用 Claude Code
          </div>
        </div>
        
        <div className="px-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">现在你可以开始使用 Claude Code 了！</p>
          
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-cyan-200">
            <h6 className="mb-3 font-medium text-cyan-800 dark:text-cyan-300">基本使用命令：</h6>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">启动 Claude Code：</p>
                <CodeBlock code="claude" />
                <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">💡 首次启动提示：第一次启动 claude 时，会展示一些配置选项，直接按回车跳过即可，直到出现输入框可以输入内容。</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">在特定项目中使用：</p>
                <CodeBlock 
                  comment="# 进入你的项目目录"
                  code={`cd C:\\path\\to\\your\\project\n# 启动 Claude Code\nclaude`}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/30 p-4">
            <h6 className="mb-2 font-medium text-red-800 dark:text-red-300">常见报错：缺少 Git Bash</h6>
            <p className="mb-3 text-sm text-red-700 dark:text-red-400">如果在运行 claude 命令时出现以下提示：</p>
            <div className="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-sm mb-4">
              <div className="text-red-400">Claude Code on Windows requires git-bash...</div>
            </div>
            
            <div className="space-y-3">
              <p className="font-medium text-red-800 dark:text-red-300">解决方案：</p>
              <ol className="ml-6 list-decimal space-y-2 text-sm text-red-700 dark:text-red-400">
                <li>
                  <span className="font-medium">下载 Git：</span>
                  <ul className="ml-4 mt-1 list-disc text-xs">
                    <li>官方下载：访问 <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://git-scm.com/download/win</a></li>
                    <li>备用链接：阿里云盘分享（如果官网下载慢）</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">安装 Git：</span>
                  <p className="mt-1 text-xs">双击下载的安装包，一路点击"下一步"，保持默认设置即可。</p>
                </li>
                <li>
                  <span className="font-medium">重新运行 claude：</span>
                  <p className="mt-1 text-xs">安装完成后，重新打开 PowerShell 或 CMD，运行 claude 命令即可正常使用。</p>
                </li>
              </ol>
              <p className="mt-2 text-sm text-green-600 dark:text-green-400">✅ Git 安装完成后，claude 命令就可以正常运行了。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
