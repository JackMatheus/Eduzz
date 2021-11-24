import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();
//https://web.digitalinnovation.one/course/microsservicos-e-integracoes-com-nodejs/learning/3a75f7c7-8fee-48c5-a012-fbc7f864aeab?back=/track/eduzz-fullstack-developer
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    //console.log(req.headers['authorization']);
    //https://www.base64decode.org/
    // console.log(req.headers['authorization']);

    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    //Tratamento inicial do erro
    try{
        const uuid = req.params.uuid;
        // console.log(uuid);
        // res.sendStatus(200);
        //Exemplo com banco de dados
        // bancoDeDados.getUsersById(uuid);
        // Retornando no front
        //>>>recebendo do db
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send({ user });
    }catch(error){
        // console.log(error)

        // >>>>Substituindo pela função que vem do niddlewares de erro
        // if(error instanceof DatabaseError){
        //     res.status(StatusCodes.BAD_REQUEST);
        // }else{
        //     res.status(StatusCodes.INTERNAL_SERVER_ERROR);
        // }
        
        //Undex eror>>>Usando a função next
        next(error);
        
    }
    
   

});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    // console.log(req.body);   
    //Exemplo com banco de dados
    // bancoDeDados.getUsersById(uuid);
    // Retornando no front
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(uuid);

});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;
    
    //Chamando o repo e modificando
    await userRepository.update(modifiedUser);

    // res.status(StatusCodes.OK).send({uuid});
    res.status(StatusCodes.OK).send({ modifiedUser });

});

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;
