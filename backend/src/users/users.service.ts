import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { JobCard, JobCardsDocument } from 'src/jobcards/schema/jobcards.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import {
  Notification,
  NotificationDocument,
} from 'src/notifications/schema/notifications.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(JobCard.name)
    private readonly jobcardModel: Model<JobCardsDocument>,
    @InjectModel(Notification.name)
    private readonly notificationModel: Model<NotificationDocument>,
  ) {}

  async findAll() {
    return await this.userModel.find({}).populate('jobcards');
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    return updatedUser;
  }

  async remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);
    const deletedUser = await this.userModel.findOneAndDelete({ _id: id });
    return deletedUser;
  }

  async findJobcards(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);
    const jobcards = await this.jobcardModel.find({ userId: id });
    return jobcards;
  }

  async findNotifications(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);
    const notifications = await this.notificationModel.find({ userId: id });
    return notifications;
  }
}
