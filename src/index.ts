import express, { Router } from 'express';
import { container } from './infrastructure/di/container';
import { Configuration } from './application/config';
const config = container.resolve<Configuration>('config');
const routes = container.resolve<Router>('apiRouter');

const app = express();
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello, StepQuest!');
});

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
