// 从 URL 上导入 server.ts 模块，并提取（ES6 解构赋值）出 serve 对象,模块最新版本
// 可以使用 @VERSION 导入特定版本，如'https://deno.land/std@v0.42.0/http/server.ts'

import { serve } from "https://deno.land/std/http/server.ts";
// 实例化一个 serve 对象
const s = serve({ port: 8001 });
// 在终端上打印程序监听的端口地址
console.log("http://localhost:8001/");
// 使用 ES9 新特性 for await 语法，当访问监听端口时，返回一句“Hello World”
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

// deno run welcome.ts
