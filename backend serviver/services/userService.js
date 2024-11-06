const userRepository = require('../repositories/userRepository');

class UserService {
  async findUserById(id) {
    return await userRepository.findById(id);
  }

  async addUser(user) {
    return await userRepository.save(user);
  }

  async modifyUser(id, updatedUser) {
    return await userRepository.update(id, updatedUser);
  }

  async removeUser(id) {
    await userRepository.delete(id);
  }
}

module.exports = new UserService();
//调用userRespository中的方法
