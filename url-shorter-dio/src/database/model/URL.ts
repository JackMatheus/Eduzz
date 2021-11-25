import { prop, Typegoose } from '@hasezoey/typegoose'

//Class URL é oque será gravado no banco da dados
export class URL extends Typegoose {
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}
//export to Model
export const URLModel = new URL().getModelForClass(URL);