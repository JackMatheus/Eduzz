import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import ForbiddenError from "../models/errors/forbidden.error.model";

//Desenvolvendo um middleware para reutilizar as funções de autenticação
async function bearerAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        //recebemos o req.headers['authorization'];
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');
        }

        const tokenPayload = JWT.verify(token, 'my_secret_key')

        //Sub = subjet = usuário
        if (typeof tokenPayload !== 'object' && !tokenPayload.sub) {
            throw new ForbiddenError('Token Inválido');

        }
        const user = {
            uuid: tokenPayload.sub,
            username: tokenPayload.username
        };
        //obtendo user já altenticado >>> bearerAuthenticationMiddleware
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}

export default bearerAuthenticationMiddleware;