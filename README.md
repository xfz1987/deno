### Deno简介

##### 什么是Deno

Deno 就像 Node，但是在很多方面都得到了深入的改善。先从 Deno 功能列表开始：

- 它基于 JavaScript 语言的现代功能
- 它有全面的标准库
- 它以 TypeScript 为核心，以许多不同的方式带来了巨大的优势，包括一流的 TypeScript 支持（你不必单独编译 TypeScript，它由 Deno 自动完成）
- 它包含 [ES 模块](https://flaviocopes.com/es-modules/)
- 没有包管理器
- 它有一流的 `await`
- 内置测试功能
- 它尽可能地与浏览器保持兼容，例如提供内置的 `fetch` 和全局 `window` 对象

##### 一流的TypeScript支持

如果喜欢TypeScript，想要在任何地方使用await，但不想依赖项目中庞大的npm包，那么Deno是比较好的选择

Deno 用 Rust 和 TypeScript 编写，这两种语言今天正在迅速发展。

Deno 内置 TypeScript 运行时

##### 与Node.js的异同

相似之处：

- 两者都是基于 V8 Chromium Engine(https://flaviocopes.com/v8/) 开发的
- 两者都非常适合用 JavaScript 开发服务器端

差异：

- Node 用 C++ 和 JavaScript 编写。Deno 用 Rust 和 TypeScript 编写。
- Node 有一个名为 `npm` 的官方包管理器。Deno 没有，而是让你从 URL 导入任何 ES 模块。
- Node 使用 CommonJS 语法导入 pacakges。Deno 使用官方的 ES 模块。
- Deno 在其所有 API 和标准库中使用现代 ECMAScript 功能，而 Node.js 使用基于回调的标准库，并且没有计划对其进行升级。
- Deno 通过权限提供了一个沙箱安全层。程序只能访问由用户设置为可执行文件的权限作为标志。Node.js 程序可以访问用户有权访问的任何内容。
- Deno 长期以来一直在考虑将程序编译成可执行文件的可能性，而这种可执行文件可以在没有外部依赖项的情况下运行，就像 Go 一样，不过现在还没有正式提上日程(https://github.com/denoland/deno/issues/986)。这将改变游戏规则

##### 没有包管理器

没有包管理器并且必须依靠 URL 来承载和导入包有利有弊

我们可以创建软件包而无需将其发布到 npm 这样的存储库中，相信不久之后，Deno 网站会为第三方软件包提供代码托管（并通过 URL 分发）



