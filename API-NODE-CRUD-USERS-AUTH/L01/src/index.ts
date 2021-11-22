import express from "express";
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
//Configuração da aplicação em JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Aplicação usando o arquivo de rotas
app.use(usersRoute)
//Transferido responsabilidade para statusRoute >>>
// app.get('/status', (req: Request , res: Response, next: NextFunction) => {
//     res.status(200).send({foo: 'sucesso haha!'});  
// });
app.use(statusRoute);

//Inicializando o servidor
app.listen(3000, () => {
    console.log("Aplicação sendo executada na porta 3000");
});