import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private task: Task[] = [
    {
      id: v4(),
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.task;
  }

  createTasks(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.task.push(task);
    return task;
  }

  deleteTasks(id: string) {
    this.task = this.task.filter((tasks) => tasks.id !== id);
  }

  getTaskById(id: string): Task {
    return this.task.find((tasks) => tasks.id === id);
  }

  updateTasks(id: string, updatedFields: updateTaskDto): Task {
    const task = this.getTaskById(id);
    const newTask = Object.assign(task, updatedFields);
    this.task = this.task.map((tasks) => (tasks.id === id ? newTask : task));
    return newTask;
  }
}
