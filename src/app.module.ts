import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // je n'ai pas réussi avec MySQL
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/user-app', {
      useNewUrlParser: true,
    }),
    UserModule,
    CarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'garagedls',
//       entities: [],
//       synchronize: true,
//     }),
//     UserModule,
//     CarModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

export class AppModule {}
