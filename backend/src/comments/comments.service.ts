import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentsDocument } from './schema/comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentsDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = await this.commentModel.create(createCommentDto);
    return newComment;
  }

  async findAll() {
    const comments = await this.commentModel.find({});
    return comments;
  }

  async findOne(id: string) {
    const comment = await this.commentModel.findById(id);
    if (!comment) throw new HttpException('COMMENT_NOT_FOUND', 404);

    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentModel.findById(id);
    if (!comment) throw new HttpException('COMMENT_NOT_FOUND', 404);
    const updatedComment = await this.commentModel.findByIdAndUpdate(
      id,
      updateCommentDto,
      { new: true },
    );
    return updatedComment;
  }

  async remove(id: string) {
    const comment = await this.commentModel.findById(id);
    if (!comment) throw new HttpException('COMMENT_NOT_FOUND', 404);
    const deletedComment = await this.commentModel.findOneAndDelete({
      _id: id,
    });
    return deletedComment;
  }
}
