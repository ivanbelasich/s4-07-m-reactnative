import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJobcardDto } from './dto/create-jobcard.dto';
import { UpdateJobcardDto } from './dto/update-jobcard.dto';
import { JobCards, JobCardsDocument } from './schema/jobcards.schema';

@Injectable()
export class JobcardsService {
  constructor(
    @InjectModel(JobCards.name) private jobCardsModule: Model<JobCardsDocument>,
  ) {}

  async create(createJobcardDto: CreateJobcardDto) {
    const jobcardCreated = await this.jobCardsModule.create(createJobcardDto);
    return jobcardCreated;
  }

  async findAll() {
    const list = await this.jobCardsModule.find({});
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobcard`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateJobcardDto: UpdateJobcardDto) {
    return `This action updates a #${id} jobscard`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobcard`;
  }
}
