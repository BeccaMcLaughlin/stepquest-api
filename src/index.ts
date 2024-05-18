import express from 'express';
import { container } from './infrastructure/di/container';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, StepQuest!');
});
