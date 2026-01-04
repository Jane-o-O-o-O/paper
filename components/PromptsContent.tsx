import CodeBlock from './CodeBlock'

export default function PromptsContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-blue-700 dark:text-blue-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
            </svg>
            💡 Claude Code 提示词大全
          </div>
        </div>
        
        <div className="px-6">
          <p className="text-gray-700 dark:text-gray-300">
            Claude Code 的强大功能很大程度上取决于如何与它有效沟通。本文汇总了各种开发场景下的高效提示词模板，帮助开发者快速掌握 Claude Code 的使用技巧。
          </p>
        </div>
      </div>

      {/* Project Initialization */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">1</span>
            项目初始化
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* Quick Understanding */}
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-3 font-semibold text-green-800 dark:text-green-300">快速了解项目结构</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p>请阅读项目的 README.md、package.json 和主要目录,帮我了解这个项目的架构和技术栈,但暂时不要编写任何代码。</p>
            </div>
          </div>

          {/* Create Config */}
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-3 font-semibold text-green-800 dark:text-green-300">创建项目配置文件</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p>请帮我创建一个详细的 CLAUDE.md 文件,包含项目架构说明、常用命令、代码规范和开发环境配置。</p>
            </div>
          </div>

          {/* Environment Setup */}
          <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 p-4">
            <h6 className="mb-3 font-semibold text-green-800 dark:text-green-300">项目环境配置</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p>请检查项目的环境配置,确保所有依赖正确安装,并运行初始化脚本。如果有任何问题请告诉我如何解决。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Development */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">2</span>
            功能开发
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* New Feature */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 p-4">
            <h6 className="mb-3 font-semibold text-blue-800 dark:text-blue-300">新功能开发流程</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">我需要开发 [功能描述]。请按照以下步骤：</p>
              <ol className="ml-6 list-decimal space-y-1">
                <li>先阅读相关代码了解现有架构</li>
                <li>制定详细的实现计划</li>
                <li>实现核心功能</li>
                <li>编写测试</li>
                <li>更新文档</li>
              </ol>
              <p className="mt-2 text-xs text-blue-600 dark:text-blue-400">每完成一步都要暂停等待我确认。</p>
            </div>
          </div>

          {/* API Development */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 p-4">
            <h6 className="mb-3 font-semibold text-blue-800 dark:text-blue-300">API 接口开发</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请帮我设计和实现 [API 描述] 接口,包括：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>路由定义</li>
                <li>请求参数验证</li>
                <li>业务逻辑实现</li>
                <li>响应格式定义</li>
                <li>错误处理</li>
                <li>API 文档</li>
              </ul>
            </div>
          </div>

          {/* Component Development */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 p-4">
            <h6 className="mb-3 font-semibold text-blue-800 dark:text-blue-300">组件开发</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请帮我创建一个 [组件名称] 组件,要求：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>遵循项目现有的组件模式</li>
                <li>包含 TypeScript 类型定义</li>
                <li>支持 [具体功能需求]</li>
                <li>编写对应的测试文件</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Debugging & Optimization */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">3</span>
            代码调试与优化
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* Error Diagnosis */}
          <div className="rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-950/30 p-4">
            <h6 className="mb-3 font-semibold text-orange-800 dark:text-orange-300">错误诊断</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p>我遇到了这个错误：[错误信息]。请帮我分析错误原因,并提供修复方案。如果需要查看相关代码,请告诉我。</p>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-950/30 p-4">
            <h6 className="mb-3 font-semibold text-orange-800 dark:text-orange-300">性能优化</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请分析 [文件/功能] 的性能问题,并提供优化建议。重点关注：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>执行效率</li>
                <li>内存使用</li>
                <li>加载速度</li>
                <li>用户体验</li>
              </ul>
            </div>
          </div>

          {/* Code Refactoring */}
          <div className="rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-950/30 p-4">
            <h6 className="mb-3 font-semibold text-orange-800 dark:text-orange-300">代码重构</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请重构 [文件名] 中的 [函数/类],目标是：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>提高代码可读性</li>
                <li>减少重复代码</li>
                <li>遵循最佳实践</li>
                <li>保持功能不变</li>
              </ul>
              <p className="mt-2 text-xs text-orange-600 dark:text-orange-400">请先分析现有代码,然后提供重构计划。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testing */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">4</span>
            测试相关
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* Test Cases */}
          <div className="rounded-lg border border-purple-200 bg-purple-50 dark:bg-purple-950/30 p-4">
            <h6 className="mb-3 font-semibold text-purple-800 dark:text-purple-300">测试用例编写</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请为 [函数/类/组件] 编写全面的测试用例,包括：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>正常情况测试</li>
                <li>边界条件测试</li>
                <li>错误情况测试</li>
                <li>模拟依赖项</li>
              </ul>
            </div>
          </div>

          {/* Fix Tests */}
          <div className="rounded-lg border border-purple-200 bg-purple-50 dark:bg-purple-950/30 p-4">
            <h6 className="mb-3 font-semibold text-purple-800 dark:text-purple-300">测试修复</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p>有几个测试失败了,请分析失败原因并修复。运行测试命令是：[测试命令]</p>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">5</span>
            文档编写
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* API Documentation */}
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 dark:bg-cyan-950/30 p-4">
            <h6 className="mb-3 font-semibold text-cyan-800 dark:text-cyan-300">API 文档生成</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请为项目生成 API 文档,包括：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>接口列表</li>
                <li>请求参数说明</li>
                <li>响应格式示例</li>
                <li>错误码说明</li>
              </ul>
            </div>
          </div>

          {/* Code Comments */}
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 dark:bg-cyan-950/30 p-4">
            <h6 className="mb-3 font-semibold text-cyan-800 dark:text-cyan-300">代码注释</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请为 [文件/函数] 添加详细的代码注释,包括：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>功能描述</li>
                <li>参数说明</li>
                <li>返回值说明</li>
                <li>使用示例</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Git Workflow */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-white dark:bg-gray-800">
        <div className="px-6">
          <div className="leading-none font-bold flex items-center text-2xl text-gray-900 dark:text-white">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">6</span>
            Git 工作流
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* Code Commit */}
          <div className="rounded-lg border border-pink-200 bg-pink-50 dark:bg-pink-950/30 p-4">
            <h6 className="mb-3 font-semibold text-pink-800 dark:text-pink-300">代码提交</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p>请查看当前的修改,编写合适的提交信息并提交代码。提交信息要遵循项目的提交规范。</p>
            </div>
          </div>

          {/* Create PR */}
          <div className="rounded-lg border border-pink-200 bg-pink-50 dark:bg-pink-950/30 p-4">
            <h6 className="mb-3 font-semibold text-pink-800 dark:text-pink-300">创建 PR</h6>
            <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">请创建一个 Pull Request,包括：</p>
              <ul className="ml-6 list-disc space-y-1">
                <li>清晰的标题和描述</li>
                <li>修改内容摘要</li>
                <li>测试计划</li>
                <li>相关 Issue 链接</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-yellow-700 dark:text-yellow-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
            使用建议
          </div>
        </div>
        
        <div className="px-6 space-y-6">
          {/* Principles */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-yellow-200">
            <h6 className="mb-3 font-semibold text-yellow-800 dark:text-yellow-300">提示词编写原则</h6>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• <span className="font-medium">明确具体：</span>详细描述需求,避免模糊表达</li>
              <li>• <span className="font-medium">分步骤：</span>复杂任务拆分为多个步骤</li>
              <li>• <span className="font-medium">设定边界：</span>明确什么要做,什么不要做</li>
              <li>• <span className="font-medium">包含上下文：</span>提供必要的背景信息</li>
              <li>• <span className="font-medium">验证确认：</span>重要步骤要求确认再继续</li>
            </ul>
          </div>

          {/* Common Modifiers */}
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-yellow-200">
            <h6 className="mb-3 font-semibold text-yellow-800 dark:text-yellow-300">常用修饰词</h6>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">"请先分析..."</code> - 要求 Claude 先理解再行动</li>
              <li>• <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">"暂时不要..."</code> - 设定明确的边界</li>
              <li>• <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">"每完成一步都要暂停"</code> - 控制执行节奏</li>
              <li>• <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">"遵循项目现有..."</code> - 保持一致性</li>
              <li>• <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">"如果需要...请告诉我"</code> - 主动沟通</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Efficiency Tips */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
        <div className="px-6">
          <div className="leading-none font-semibold flex items-center text-green-700 dark:text-green-400 text-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-7 w-7">
              <path d="M12 2v20"></path>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            效率提升技巧
          </div>
        </div>
        
        <div className="px-6">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-green-200">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-medium text-green-700 dark:text-green-400">使用 @ 引用文件：</span>
                <code className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">@src/components/Button.tsx</code>
              </li>
              <li>
                <span className="font-medium text-green-700 dark:text-green-400">利用扩展思考：</span>
                <span className="ml-2">按两次 Shift+TAB 进入 PLAN 模式</span>
              </li>
              <li>
                <span className="font-medium text-green-700 dark:text-green-400">合理清理上下文：</span>
                <span className="ml-2">使用 /clear 和 /compact</span>
              </li>
              <li>
                <span className="font-medium text-green-700 dark:text-green-400">创建自定义命令：</span>
                <span className="ml-2">在 .claude/commands/ 目录下</span>
              </li>
              <li>
                <span className="font-medium text-green-700 dark:text-green-400">批量操作：</span>
                <span className="ml-2">一次性处理多个相似任务</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="flex flex-col gap-6 rounded-xl py-6 border-0 shadow-md bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
        <div className="px-6">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-4 border border-blue-200">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-blue-700 dark:text-blue-400">💡 提示：</span>
              这些提示词模板可以根据具体项目需求进行调整。建议收藏本文作为日常开发参考,逐步熟练掌握与 Claude Code 的高效沟通方式。
            </p>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              通过使用这些精心设计的提示词,您将能够更好地发挥 Claude Code 的强大功能,显著提升开发效率和代码质量。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
