import { PartialType } from '@nestjs/mapped-types';
import { CreateJobcardDto } from './create-jobcard.dto';

export class UpdateJobcardDto extends PartialType(CreateJobcardDto) {}
