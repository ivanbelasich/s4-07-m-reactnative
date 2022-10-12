import { Module } from '@nestjs/common';
import { JobcardsService } from './jobcards.service';
import { JobcardsController } from './jobcards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JobCard, JobCardSchema } from './schema/jobcards.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: JobCard.name,
        schema: JobCardSchema,
      },
    ]),
  ],
  controllers: [JobcardsController],
  providers: [JobcardsService],
})
export class JobcardsModule {}
