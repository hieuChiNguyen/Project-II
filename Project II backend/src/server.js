import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import initWebRoute from './routes/web.js'

import * as dotenv from 'dotenv';
dotenv.config();

// import Path from 'path';
// import connection from './configs/connectDB';

const app = express();
const port = process.env.PORT;
// const __dirname = Path.resolve();
// const port = 1337;

// set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})