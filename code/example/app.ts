
// 首先从 Oak 导入 Application 和 Router 对象
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
// 环境变量 PORT 和 HOST，默认运行在 localhost:4000 上
const env = Deno.env.toObject()
const PORT = env.PORT || 4000
const HOST = env.HOST || '127.0.0.1'

interface Dog {
  name:string
  age:number
}

let dogs:Array<Dog> = [
  { name: 'xiaobai', age: 8 },
  { name: 'ahuang', age: 10 }
]

export const getDogs = ({ response } : { response: any }) => {
  response.body = dogs
}

export const getDog = ({
  params, response
} : {
  params: { name: string }
  response: any
}) => {
  const dog = dogs.filter(dog => dog.name === params.name)
  if (dog.length) {
    response.status = 200
    response.body = dog[0]
    return
  }
  response.status = 400
  response.body = { msg: `Cannot find dog ${params.name}` }
}

export const addDog = async ({
  request,
  response
}: {
  request: any
  response: any
}) => {
  // 使用 await 是因为 name 和 age 的值是作为 JSON 传递的
  const body = await request.body()
  const dog:Dog = body.value
  dogs.push(dog)

  response.status = 200
  response.body = { msg: 'ok' }
}

export const updateDog = async ({
  params,
  request,
  response
}: {
  params: { name: string }
  request: any
  response: any
}) => {
  const temp = dogs.filter(existingDog => existingDog.name === params.name)
  const body = await request.body()
  const { age }: { age: number } = body.value
  if (temp.length) {
    temp[0].age = age
    response.status = 200
    response.body = { msg: 'ok' }
    return
  }
  
  response.status = 400
  response.body = { msg: `Cannot find dog ${params.name}` }
}

export const removeDog = ({
  params,
  response
}: {
  params: { name: string }
  response: any
}) => {
  const lengthBefore = dogs.length
  dogs = dogs.filter(dog => dog.name !== params.name)

  if (lengthBefore === dogs.length) {
    response.status = 400
    response.body = { msg: `Cannot find dog ${params.name}` }
    return
  }

  response.status = 200
  response.body = { msg: 'ok' }
}

// 创建路由
const router = new Router()

router
  .get('/dogs', getDogs)
  .get('/dogs/:name', getDog)
  .post('/dogs', addDog)
  .put('/dogs/:name', updateDog)
  .delete('/dogs/:name', removeDog)

// 创建应用
const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listen on port ${PORT}...`)

// 监听端口
await app.listen(`${HOST}:${PORT}`)

// deno run --allow-env --allow-net app.ts