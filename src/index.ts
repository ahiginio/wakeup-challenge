import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import errorMiddleware from './common/middleware/error';
import settings from './settings';
import loggerWinston from './common/logger';
import cors from 'cors';
dotenv.config();
loggerWinston.info(`Starting server at port ${settings.applicationPort}!`);

import './common/adapters/db';
import routes from './routes';
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use((req, res, next) => {
  if (req.originalUrl === '/api/payments/webhook') {
    next();
  } else {
    express.json({ limit: process.env.REQUEST_LIMIT || '20MB' })(req, res, next);
  }
});
app.use(express.text({ limit: process.env.REQUEST_LIMIT || '20MB' }));
app.use(function (req, res, next) {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  next();
});

routes(app);

// The error handler must be before any other error middleware and after all controllers
app.use(errorMiddleware);

app.listen(settings.applicationPort);
