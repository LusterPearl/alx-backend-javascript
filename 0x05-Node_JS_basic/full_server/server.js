import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

const app = express();
const port = 1245;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;
