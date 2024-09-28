import { MongooseModule } from '@nestjs/mongoose';
import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL)
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
    configure() {
        const DEBUG = process.env.MODE === "dev" ? true : false;
        mongoose.set("debug", DEBUG)
    }
}
