import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Restoran } from 'src/restoran/schemas/restoran.schema';

export type TablesDocument = HydratedDocument<Tables>;

@Schema()
export class Tables {
  @Prop()
  numbers: string;

  @Prop()
  amount: number;

  @Prop()
  qr_code: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restoran'
  })
  restoran_id: Restoran;
}

export const TablesSchema = SchemaFactory.createForClass(Tables);
