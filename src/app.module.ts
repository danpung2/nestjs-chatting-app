import { MongooseModule } from '@nestjs/mongoose';
import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ChatsModule } from './chats/chats.module';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    ChatsModule
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
