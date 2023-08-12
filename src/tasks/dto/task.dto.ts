/* eslint-disable prettier/prettier */

import { TaskStatus } from '../tasks.entity';
import { MinLength, IsString, IsNotEmpty, } from 'class-validator';
export class createTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  description: string;
}

export class updateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
