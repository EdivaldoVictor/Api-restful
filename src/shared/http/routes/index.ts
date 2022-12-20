import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Dev' });
});

// eslint-disable-next-line prettier/prettier
export default routes;
