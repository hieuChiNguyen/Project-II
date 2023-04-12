import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import * as dotenv from 'dotenv';
dotenv.config();
// import Path from 'path';
// import connection from './configs/connectDB';

const app = express();
const port = process.env.PORT;
// const __dirname = Path.resolve();
// const port = 1337;

configViewEngine(app);

app.get('/', (req, res) => {
  // res.sendFile(Path.join(__dirname, '/index.html'));
  res.render('index.ejs');
})

app.get('/products', (req, res) => {
  res.send('New Products');
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})