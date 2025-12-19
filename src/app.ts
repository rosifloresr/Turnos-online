import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import routes from './routes';

const app = express();

app.use('./api/v1', routes)
app.use(cors());
app.use(express.json());

export default app;