const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 3000; // 指定你希望的端口号

server.use(middlewares);
server.use(jsonServer.bodyParser);

// 自定义路由
server.get('/users', (req, res) => {
  // 获取所有用户的逻辑
  const users = router.db.get('users').value();
  res.json(users);
});

server.get('/users/:id', (req, res) => {
  // 根据 ID 获取用户的逻辑
  const user = router.db.get('users').find({ id: parseInt(req.params.id) }).value();
  res.json(user);
});

server.post('/users', (req, res) => {
  // 创建用户的逻辑
  const newUser = req.body;
  const users = router.db.get('users').push(newUser).write();
  res.json(newUser);
});

server.put('/users/:id', (req, res) => {
  // 根据 ID 更新用户的逻辑
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  router.db.get('users').find({ id: userId }).assign(updatedUser).write();
  res.json(updatedUser);
});

server.delete('/users/:id', (req, res) => {
  // 根据 ID 删除用户的逻辑
  const userId = parseInt(req.params.id);
  router.db.get('users').remove({ id: userId }).write();
  res.sendStatus(204);
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
