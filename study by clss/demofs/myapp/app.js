
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
//要使用路由参数定义路由，只需在路由的路径中指定路由参数
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
// ...existing code...

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});