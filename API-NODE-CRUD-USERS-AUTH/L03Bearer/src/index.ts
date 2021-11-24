import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
import authorization from './routes/authorization.route';
import basicAuthenticationMiddleware from "./middlewares/basic-authentication.middleware";
import authorizationRoute from "./routes/authorization.route";
import bearerAuthenticationMiddleware from "./middlewares/bearer-authentication.middleware";

const app = express();
//Configuração da aplicação em JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(basicAuthenticationMiddleware)
//Aplicação usando o arquivo de rotas
app.use(bearerAuthenticationMiddleware,usersRoute);
//Transferido responsabilidade para statusRoute >>>
// app.get('/status', (req: Request , res: Response, next: NextFunction) => {
//     res.status(200).send({foo: 'sucesso haha!'});  
// });
app.use(statusRoute);
app.use(authorization);
app.use(authorizationRoute);

//Configuração dos errorHandler de erro
app.use(errorHandler);


//Inicializando o servidor
app.listen(3000, () => {
    console.log("Aplicação sendo executada na porta 3000");
});