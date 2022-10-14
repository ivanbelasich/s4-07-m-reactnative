/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.userModel.find({}).populate('jobcards');
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
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
    const user = await this.userModel.findById(id);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);
    const deletedUser = await this.userModel.findOneAndDelete({ _id: id });
    return deletedUser;
  }
}
