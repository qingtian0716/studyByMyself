// 引入 Express 框架，这是一个用于构建 Web 应用的 Node.js 框架
// require: Node.js 的模块导入函数，用于加载外部模块
// express: Web 应用框架，提供了一系列强大的功能来创建 Web 和移动应用
const express = require('express')

// express(): 调用 express 函数创建应用实例，返回一个 Express 应用对象
// app: 应用实例，包含了应用的设置、路由等信息
const app = express()

// Router(): Express 的路由构造函数，创建一个新的路由对象
// router: 路由实例，用于创建模块化、可挂载的路由处理器
const router = express.Router()

// use(): 中间件函数，用于将中间件添加到应用的请求处理链中
// req: 请求对象，包含了 HTTP 请求的所有信息
// res: 响应对象，用于向客户端发送响应
// next: 回调函数，用于将控制权传递给下一个中间件
router.use((req, res, next) => {
  // Date.now(): 返回当前时间的时间戳（毫秒数）
  console.log('Time:', Date.now())
  next()
})

// '/user/:id': 路由路径，:id 是动态参数
// originalUrl: 包含完整的原始请求URL
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  // req.method: HTTP 请求方法（GET, POST, PUT, DELETE 等）
  console.log('Request Type:', req.method)
  next()
})

// get(): 专门处理 HTTP GET 请求的路由方法
// req.params: 包含路由参数的对象，这里可以通过 req.params.id 访问 URL 中的 id 值
router.get('/user/:id', (req, res, next) => {
  // next('route'): 跳过当前路由栈中的剩余中间件，直接跳到下一个路由
  if (req.params.id === '0') next('route')
  else next()
}, (req, res, next) => {
  // render(): 渲染视图模板的方法，第一个参数是模板名称
  res.render('regular')
})

router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

// app.use(): 将中间件函数挂载到指定的路径
// '/': 根路径，表示所有请求都会经过这个中间件
app.use('/', router)

// listen(): 启动 HTTP 服务器并监听指定端口
// port: 服务器监听的端口号
// ()=>{}: 服务器启动成功后的回调函数
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

//---------------------------------------------------

// 这是另一个路由示例，展示了如何进行身份验证检查

// 重新引入所需的模块和创建应用实例
const express = require('express')
const { cpSync } = require('fs')
const app = express()  //应用级
const router = express.Router() //路由级

// 定义一个前置验证中间件
// 这个中间件会检查请求头中是否包含 'x-auth' 字段
// req.headers: 包含所有 HTTP 请求头的对象
router.use((req, res, next) => {
  // 如果请求头中没有 x-auth，则跳过整个路由器
  // next('router'): 跳过当前路由器，直接进入下一个中间件或路由器
  if (!req.headers['x-auth']) return next('router')
  next()
})

// 定义一个需要验证的用户路由
// res.send(): 发送响应给客户端，可以是字符串、对象、Buffer等
router.get('/user/:id', (req, res) => {
  res.send('hello, user!')
})

// 将路由器挂载到 '/admin' 路径
// 如果请求未通过验证（即上面的中间件检查失败），则返回 401 状态码
// res.sendStatus(401): 发送 HTTP 401 Unauthorized 状态码
// 401 表示请求未经授权，需要进行身份验证
app.use('/admin', router, (req, res) => {
  res.sendStatus(401)
})


//--------------------------------------------------------------

// 错误处理中间件：必须包含 4 个参数 (err, req, res, next)
// 这是 Express 中的全局错误处理器，用于捕获整个应用中发生的错误
app.use((err, req, res, next) => {
// err.stack: 错误堆栈跟踪信息，包含错误发生的详细位置和调用链
console.error(err.stack)

// res.status(500): 设置 HTTP 状态码为 500（Internal Server Error）
// send(): 发送错误消息给客户端
// 500 状态码表示服务器内部错误
res.status(500).send('Something broke!')
})
  