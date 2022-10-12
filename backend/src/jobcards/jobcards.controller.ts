import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
} from '@nestjs/common';
import { JobcardsService } from './jobcards.service';
import { UpdateJobcardDto } from './dto/update-jobcard.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateJobcardDto } from './dto/create-jobcard.dto';

@ApiTags('jobcards')
@Controller('api/jobcards')
export class JobcardsController {
  constructor(private readonly jobcardsService: JobcardsService) {}

  @Post()
  create(@Body() createJobcardDto: CreateJobcardDto) {
    return this.jobcardsService.create(createJobcardDto);
  }

  @Get()
  findAll() {
    return this.jobcardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobcardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobcardDto: UpdateJobcardDto) {
    return this.jobcardsService.update(+id, updateJobcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobcardsService.remove(+id);
  }
}
