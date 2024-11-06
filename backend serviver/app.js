const express = require('express');//调用express工具创建http链接
const userController = require('./controllers/userController');
const sequelize = require('./config/database');//调用sequelize作为orm工具与数据库连接

const app = express();
app.use(express.json());

app.get('/users/:id', userController.getUser);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
