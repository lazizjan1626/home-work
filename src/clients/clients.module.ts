import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client, clientSchema } from './schemas/client.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: clientSchema }]),],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
