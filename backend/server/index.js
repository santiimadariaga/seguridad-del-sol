import express from 'express';
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
import { usersRouter } from '../router/Router.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

// dotenv.config({ path: './env/.env' });

// app.use(cookieParser);

app.use('/db', usersRouter);
// app.get('/', (req, res) => {
//   res.send('Hola Mundo');
// });

app.listen(8000, () => {
  console.log('Server running in port 8000');
});
