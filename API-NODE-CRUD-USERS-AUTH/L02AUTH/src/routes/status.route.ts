import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();
//3.1tk-Desenvolvendo a rota de autorização e validando token
statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
   
    res.sendStatus(StatusCodes.OK);
});


export default statusRoute;