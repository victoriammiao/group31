const User = require('../models/user');

class UserRepository {
  async findById(id) {
    return await User.findByPk(id);
  }

  async save(user) {
    return await User.create(user);
  }

  async update(id, updatedUser) {
    const user = await User.findByPk(id);
    if (user) {
      return await user.update(updatedUser);
    }
    return null;
  }

  async delete(id) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
    }
  }
}

module.exports = new UserRepository();
//主要调用userModel的方法，与mysql进行连接