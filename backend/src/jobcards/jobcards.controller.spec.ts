import { Test, TestingModule } from '@nestjs/testing';
import { JobcardsController } from './jobcards.controller';
import { JobcardsService } from './jobcards.service';

describe('JobcardsController', () => {
  let controller: JobcardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobcardsController],
      providers: [JobcardsService],
    }).compile();

    controller = module.get<JobcardsController>(JobcardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
