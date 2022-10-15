import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateJobcardDto } from './dto/create-jobcard.dto';
import { UpdateJobcardDto } from './dto/update-jobcard.dto';
import { JobCard, JobCardsDocument } from './schema/jobcards.schema';

@Injectable()
export class JobcardsService {
  constructor(
    @InjectModel(JobCard.name) private jobCardModel: Model<JobCardsDocument>,
  ) {}

  async create(createJobcardDto: CreateJobcardDto) {
    const jobcardCreated = await this.jobCardModel.create(createJobcardDto);
    return jobcardCreated;
  }

  async findAll() {
    const list = await this.jobCardModel.find({});
    return list;
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const jobcard = await this.jobCardModel.findById(id);
    if (!jobcard) throw new HttpException('JOBCARD_NOT_FOUND', 404);

    return jobcard;
  }

  async update(id: string, updateJobcardDto: UpdateJobcardDto) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const jobcard = await this.jobCardModel.findById(id);
    if (!jobcard) throw new HttpException('JOBCARD_NOT_FOUND', 404);
    const updatedJobcard = await this.jobCardModel.findByIdAndUpdate(
      id,
      updateJobcardDto,
      { new: true },
    );
    return updatedJobcard;
  }

  async remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const jobcard = await this.jobCardModel.findById(id);
    if (!jobcard) throw new HttpException('JOBCARD_NOT_FOUND', 404);
    const deletedJobcard = await this.jobCardModel.findOneAndDelete({
      _id: id,
    });
    return deletedJobcard;
  }
}
