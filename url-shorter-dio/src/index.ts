import { MongoConnection } from 'database/MongooseConnection';
import express, { Request, Response } from 'express';
import { URLController } from 'URLController/urlcontroller';
// import { MongoConnection } from './database/model/MongooseConnection';

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post('/shorten', urlController.shorten)

api.get('/:hash', urlController.redirect)

//Teste do server
api.get('/test', (req: Request, res: Response) => {
    // console.log ("Get API OK");
    res.json({ sucess: true })
});


api.listen(5000, () => console.log('Express Listening Port: 5000'));