import * as dotenv from 'dotenv'
import express, { Application } from 'express';
import api from './routes';

dotenv.config();

const app: Application = express();
app.use(express.json());

const port = 8080;

app.use(api);

const server = app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default { app, server };
