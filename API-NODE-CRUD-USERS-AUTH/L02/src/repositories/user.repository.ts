//https://web.digitalinnovation.one/course/nodejs-com-bancos-de-dados-relacionais-sql/learning/e4099f86-b366-4814-8ff1-1b74a5f45d2a?back=/track/eduzz-fullstack-developer
//1-Para buscar do banco de dados
import db from '../db';
import User from '../models/user.model';
import DatabaseError from '../models/errors/database.error.model';
//db: explanation: https://web.digitalinnovation.one/course/nodejs-com-bancos-de-dados-relacionais-sql/learning/1e5d010f-c0a8-4180-a550-4e03f054d011?back=/track/eduzz-fullstack-developer
//db elefant: https://api.elephantsql.com/console/8a5be933-e097-4ba7-93ee-4d683354928d/browser?
//Classe responsável em fazer a consulta no banco de dados
class UserRepository {
    //1.2-Executando os script do SQL
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;
        const { rows } = await db.query<User>(query);
        return rows || [];
        //1.3-Enviando o return rows para a users.rota >>> 

    }

    async findById(uuid: string): Promise<User> {
        try {
            const query = `
            SELECT uuid, username
            FROM application_user
            WHERE uuid = $1;
        `;
            //WHERE uuid = $1; pega a primeira linha
            const values = [uuid];
            const { rows } = await db.query<User>(query, values);
            const [user] = rows;  //=user=rows[0]
            return user;
            //1.3-Enviando o return rows para a users.rota >>> 
        }  catch (error) {
            // console.log("error") ;
            //instaciei o DatabaseError
            throw new DatabaseError('Erro na consulta por ID', error);
        }
      
    }
    
    //async crie=> create(user: User) então retorne Promise<String> 
    async create(user: User): Promise<string> {
        const script = `
        INSERT INTO application_user (
        username,
        password ) VALUES($1, crypt($2,'my_salt'))
        RETURNING uuid

    `;
        // VALUES($1=username, crypt($2=password)
        const values = [user.username, user.password]
        //Executando o script
        const { rows } = await db.query<{ uuid: string }>(script, values);
        const [newUser] = rows;
        return newUser.uuid;
    }
    //1.3-Enviando o return rows para a users.rota >>> 

    //async atualize=> create(user: User) então retorne Promise<String> 
    async update(user: User): Promise<void> {
        const script = `
            UPDATE application_user 
            SET
            username =$1,
            password = crypt($2,'my_salt')
            WHERE uuid = $3
    
        `;
        //password = crypt($2,'my_salt') =para criptografar a senha
        // VALUES($1=username, crypt($2=password)
        const values = [user.username, user.password, user.uuid]
        //Executando o script
        await db.query(script, values);
   
    }
    //1.3-Enviando o return rows para a users.rota >>> 

    async remove(uuid: string): Promise<void> {
        const cript = `
            DELETE
            FROM application_user
            WHERE uuid = $1
        `;
        const values = [uuid];
        await db.query(cript, values);
    }
}

export default new UserRepository();