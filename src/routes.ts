// Disable eslint here since express does allow Promise<void> instead of void for routes
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import accounts from './controllers/accounts';

const router = express.Router();

router.get('/api/', (req, res) => {
  res.status(200).send({ data: 'Hello' });
});

router.post('/api/account/create', accounts.create);

export default router;