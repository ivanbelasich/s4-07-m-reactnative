import { Test, TestingModule } from '@nestjs/testing';
import { JobcardsService } from './jobcards.service';

describe('JobcardsService', () => {
  let service: JobcardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobcardsService],
    }).compile();

    service = module.get<JobcardsService>(JobcardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
