import "reflect-metadata";
import express from 'express';
import './database/connect';
import cors from 'cors';
import routes from './routes/routes';
const app = express();
const PORT = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);



app.listen(PORT, ()=> console.log("Start is running !"));