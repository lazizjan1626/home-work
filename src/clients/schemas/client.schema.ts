import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type ClientsDocument = Client & Document;
@Schema()
export class Client {
    @Prop({ required: true,autoIncrement: true})
    id: number;


    @Prop()
    name: string;

}

export const clientSchema = SchemaFactory.createForClass(Client);
