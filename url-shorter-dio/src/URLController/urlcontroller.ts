import { Request, Response } from 'express'
import shortId from 'shortid'
import { isExpressionStatement } from 'typescript'
import { config } from '../config/Constants'
import { URLModel } from '../database/model/URL'

//Passos
//1- Ver se a URL já não Existe
//2- Criar o hash para essa URL 
// Salvar a URL no banco
// Retornar a URL que agente salvou
export class URLController {
	public async shorten(req: Request, response: Response): Promise<void> {
        //1- Ver se a URL já não Existe, usar npm i shortid@2.0.1
		const { originURL } = req.body;
		const url = await URLModel.findOne({ originURL })
		if (url) {
			response.json(url)
			return
		}
        //2- Criar o hash para essa URL 
		const hash = shortId.generate()
        //2.1- retornando a hash da URL 
		const shortURL = `${config.API_URL}/${hash}`
		const newURL = await URLModel.create({ hash, shortURL, originURL })
		response.json(newURL)
	}

	public async redirect(req: Request, response: Response): Promise<void> {
        //Pegar a URL
        //Encontrar a URL original pelo hash
        //Redirecionar para a url original a partir do que encontramos no banco de dados
		const { hash } = req.params
        //Mocando uma Url
        const urlmock = {
            originURL:"URLtest",
            hash:"Hashtest",
            shortURL:""
        }
		const url = await URLModel.findOne({ hash })
        
        //Redirecionar para a url original a partir do que encontramos no banco de dados
		if (url) {
			response.redirect(url.originURL)
			return
		}

		response.status(400).json({ error: 'URL not found' })
	}
}