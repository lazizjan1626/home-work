




import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';

export type menagerDucument = Menager & Document;

//create manager schema (name,email,password)
@Schema()
export class Menager {
    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true})
    email: string;


    @Prop({required: true})
    password: string;


    @Prop({default: true})
    restarand_id:number;

    @Prop({default: false})
    is_active:boolean;


    @Prop()
    setPassword(password: string) {
      const salt = bcrypt.genSaltSync(7);
      this.password = bcrypt.hashSync(password, salt);
    }

}

export const menagerSchema = SchemaFactory.createForClass(Menager);

