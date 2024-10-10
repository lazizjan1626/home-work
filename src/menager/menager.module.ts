import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenagerService } from './menager.service';
import { MenagerController } from './menager.controller';
import { Menager, menagerSchema } from './schemas/menager.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Menager.name, schema: menagerSchema }]), 
  ],
  exports: [MenagerService], 
  controllers: [MenagerController],
  providers: [MenagerService], 
})
export class MenagerModule {}
