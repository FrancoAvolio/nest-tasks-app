import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
    ];
  }
}
