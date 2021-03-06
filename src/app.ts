import express from 'express';
import errors from './middlewares/error';
import route from './routes';

const app = express();

app.use(express.json());

app.use(route);

app.use(errors);

export default app;
