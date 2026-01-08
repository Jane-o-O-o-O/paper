import CodeBlock from './CodeBlock'

export default function LinuxContent() {
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

          <div className="space-y-4">
            <div>
              <p className="mb-3 font-medium text-gray-800 dark:text-gray-200">方式一：官方源安装</p>
              <CodeBlock 
                comment="# 一键安装 Claude Code（官方源）"
                code="curl -fsSL https://claude.ai/install.sh | bash"
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
                code="curl -fsSL https://c.zstring.cn/install.sh | bash"
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
              Linux 安装方法
            </h5>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-bold text-gray-900 dark:text-white text-base">Ubuntu / Debian：</p>
                <CodeBlock code={`# 更新包管理器\nsudo apt update\n# 安装 Node.js\ncurl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt-get install -y nodejs`} />
              </div>
              
              <div>
                <p className="mb-2 font-bold text-gray-900 dark:text-white text-base">CentOS / RHEL / Fedora：</p>
                <CodeBlock code={`# 安装 Node.js\ncurl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -\nsudo yum install nodejs`} />
              </div>

              <div>
                <p className="mb-2 font-bold text-gray-900 dark:text-white text-base">Arch Linux：</p>
                <CodeBlock code="sudo pacman -S nodejs npm" />
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-2 font-medium text-green-800 dark:text-green-300">验证安装是否成功</h6>
            <p className="mb-3 text-sm text-green-700 dark:text-green-400">安装完成后，输入以下命令：</p>
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
              使用 npm 安装 Claude Code
            </h5>
            <p className="mb-4 text-gray-700 dark:text-gray-300">打开终端，运行以下命令：</p>
            <CodeBlock 
              comment="# 全局安装 Claude Code"
              code="npm install -g @anthropic-ai/claude-code"
            />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">如果遇到权限问题，可以使用 sudo：</p>
            <div className="mt-2">
              <CodeBlock code="sudo npm install -g @anthropic-ai/claude-code" />
            </div>
          </div>
          
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-2 font-medium text-green-800 dark:text-green-300">验证 Claude Code 安装</h6>
            <p className="mb-3 text-sm text-green-700 dark:text-green-400">安装完成后，输入以下命令检查是否安装成功：</p>
            <CodeBlock code="claude --version" />
            <p className="mt-2 text-sm text-green-700 dark:text-green-400">如果显示版本号，恭喜你！Claude Code 已经成功安装了。</p>
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
            
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-bold text-gray-900 dark:text-white text-base">临时设置（当前会话）</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">在终端中运行以下命令：</p>
                <CodeBlock code={`export ANTHROPIC_BASE_URL="http://claudecode.sylu.cc/"\nexport ANTHROPIC_AUTH_TOKEN="你的API密钥"`} />
              </div>
              
              <div>
                <p className="mb-2 font-bold text-gray-900 dark:text-white text-base">永久设置</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">编辑你的 shell 配置文件：</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">对于 bash：</p>
                    <CodeBlock code={`echo 'export ANTHROPIC_BASE_URL="http://claudecode.sylu.cc/"' >> ~/.bashrc\necho 'export ANTHROPIC_AUTH_TOKEN="你的API密钥"' >> ~/.bashrc\nsource ~/.bashrc`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-2 font-medium text-green-800 dark:text-green-300">验证环境变量设置</h6>
            <p className="mb-3 text-sm text-green-700 dark:text-green-400">设置完环境变量后，可以通过以下命令验证：</p>
            <CodeBlock code={`echo $ANTHROPIC_BASE_URL\necho $ANTHROPIC_AUTH_TOKEN`} />
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
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">在特定项目中使用：</p>
                <CodeBlock 
                  comment="# 进入你的项目目录"
                  code={`cd /path/to/your/project\n# 启动 Claude Code\nclaude`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
