import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    //atribuindo uma lista vazia mocada
    const users = [{ userName: 'Jackson' }];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: String}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    console.log(uuid);
    // res.sendStatus(200);
    //Exemplo com banco de dados
    // bancoDeDados.getUsersById(uuid);
    // Retornando no front
    res.status(StatusCodes.OK).send({ uuid });

});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    // console.log(req.body);   
    //Exemplo com banco de dados
    // bancoDeDados.getUsersById(uuid);
    // Retornando no front
    res.status(StatusCodes.CREATED).send(newUser);

});

usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;
    // res.status(StatusCodes.OK).send({uuid});
    res.status(StatusCodes.OK).send({modifiedUser});

});

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK);
   
});


export default usersRoute;
