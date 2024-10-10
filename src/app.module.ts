import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { RestoranModule } from './restoran/restoran.module';
import { TablesModule } from './tables/tables.module';
import { MenagerModule } from './menager/menager.module';
import { ClientsModule } from './clients/clients.module';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [ConfigModule.forRoot({envFilePath: '.env', isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    RestoranModule,
    TablesModule,
    MenagerModule,
    ClientsModule,
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [
    AdminModule,
    RestoranModule,
    TablesModule,
    MenagerModule,
    ClientsModule,
  ],

  controllers: [],
  providers: [

  ],

})
export class AppModule {}
