import { userRepository } from './user.repository';

export class UserService {
  async findByEmail(email: string) {
    return userRepository.findOne({ where: { email } });
  }

  async create(userData: Partial<any>) {
    return userRepository.save(userData);
  }
}
