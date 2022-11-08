import express from 'express';
import bcrypt from 'bcrypt';
import UserRepository from '../../repository/user';

const create = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const repository = new UserRepository();
    await repository.createUser(email, username, hashedPassword);

    res.status(200).send({ message: 'Account created.' });
  } catch {
    res.status(500).send({ message: 'An error ocurred.' });
  }
};

export default create;
