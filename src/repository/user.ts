import db from './database';
export default class UserRepository {
  async createUser(email: string, username: string, password: string): Promise<void> {
    const r = await db('users').insert({ email, username, password }, ['id']);
    console.log(r);
  }
}
