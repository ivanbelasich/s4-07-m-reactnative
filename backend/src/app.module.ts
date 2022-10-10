import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobcardsModule } from './jobcards/jobcards.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_ATLAS_URI),
    AuthModule,
    UsersModule,
    JobcardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
