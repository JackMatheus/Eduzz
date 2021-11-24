
//linha5-4.0 jwt - Instalação da biblioteca JWT para geração de tokens//npm install --save jsonwebtoken//npm install --save-dev @types/jsonwebtoken
//https://web.digitalinnovation.one/course/microsservicos-e-integracoes-com-nodejs/learning/935802b3-bcc4-4100-ac09-3cb4ccb701e0?back=/track/eduzz-fullstack-developer
import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT from 'jsonwebtoken';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error.model';

//linha12-3.0-Header authorization 
const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    //linha16 5.0 -jwt >>>Pegando o user do middleware vc packjson (linha 27 a 32), devido ao basicMiddleware;
    try {
        const user = req.user;

        if (!user) {
            throw new ForbiddenError('Usuário não informado!');
        }
        //linha23-4.1jwt-Criando seu token com JWT
        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
        next(error);
    }
});


export default authorizationRoute;