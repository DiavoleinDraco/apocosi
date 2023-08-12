import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';
@Controller('tasks')
export class TasksController {
  constructor(private tasksServie: TasksService) {}

  @Get()
  helloworld() {
    return this.tasksServie.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: createTaskDto) {
    return this.tasksServie.createTasks(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.tasksServie.deleteTasks(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatefields: updateTaskDto) {
    return this.tasksServie.updateTasks(id, updatefields);
  }
}
