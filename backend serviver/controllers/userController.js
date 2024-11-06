const userService = require('../services/userService');

class UserController {
  async getUser(req, res) {
    try {
      const user = await userService.findUserById(req.params.id);
      if (user) {
        res.status(200).json(user); //请求成功，通常用于 GET 请求
      } else {
        res.status(404).json({ message: 'User not found' });//请求的资源不存在，例如请求的用户 ID 不存在
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });//服务器内部错误，通常用于不可预见的错误
    }
  }

  async createUser(req, res) {
    try {
      const user = await userService.addUser(req.body);
      res.status(201).json(user);//资源创建成功，通常用于 POST 请求
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });//服务器内部错误，通常用于不可预见的错误
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.modifyUser(req.params.id, req.body);
      if (user) {
        res.status(200).json(user);//请求成功，通常用于 GET 请求
      } else {
        res.status(404).json({ message: 'User not found' });//请求的资源不存在，例如请求的用户 ID 不存在
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });//服务器内部错误，通常用于不可预见的错误
    }
  }

  async deleteUser(req, res) {
    try {
      await userService.removeUser(req.params.id);
      res.status(204).send();//请求成功但无返回内容，通常用于 DELETE 请求
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });//服务器内部错误，通常用于不可预见的错误
    }
  }
}

module.exports = new UserController();
