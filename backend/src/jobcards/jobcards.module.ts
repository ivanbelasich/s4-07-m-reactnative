import { Module } from '@nestjs/common';
import { JobcardsService } from './jobcards.service';
import { JobcardsController } from './jobcards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobCards, JobCardsSchema } from './schema/jobcards.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: JobCards.name,
        schema: JobCardsSchema,
      },
    ]),
  ],
  controllers: [JobcardsController],
  providers: [JobcardsService],
})
export class JobcardsModule {}
