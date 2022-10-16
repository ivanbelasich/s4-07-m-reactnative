import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import {
  Notification,
  NotificationDocument,
} from './schema/notifications.schema';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
  ) {}
  async create(createNotificationDto: CreateNotificationDto) {
    const notificationCreated = await this.notificationModel.create(
      createNotificationDto,
    );
    return notificationCreated;
  }

  async findAll() {
    const list = await this.notificationModel.find({});
    return list;
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const notification = await this.notificationModel.findById(id);
    if (!notification) throw new HttpException('NOTIFICATION_NOT_FOUND', 404);

    return notification;
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const notification = await this.notificationModel.findById(id);
    if (!notification) throw new HttpException('NOTIFICATION_NOT_FOUND', 404);
    const updatedNotification = await this.notificationModel.findByIdAndUpdate(
      id,
      updateNotificationDto,
      { new: true },
    );
    return updatedNotification;
  }

  async remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new HttpException('INVALID_ID', 404);
    const notification = await this.notificationModel.findById(id);
    if (!notification) throw new HttpException('NOTIFICATION_NOT_FOUND', 404);
    const deletedNotification = await this.notificationModel.findOneAndDelete({
      _id: id,
    });
    return deletedNotification;
  }
}
