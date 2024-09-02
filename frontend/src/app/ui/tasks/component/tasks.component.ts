import { Component, OnInit } from '@angular/core';
import { TaskEntity } from '../../../domain/entities/task.entity';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'task-component',
  templateUrl: './tasks.component.html',
})
export class TaskComponent implements OnInit {
  tasks: TaskEntity[] = [];

  constructor(private taskService: TaskService) {  }
  
  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: TaskEntity): void {
    this.taskService.createTask(task).subscribe(() => this.loadTasks());
  }

  updateTask(task: TaskEntity): void {
    this.taskService.updateTask(task).subscribe(() => this.loadTasks());
  }

  deleteTask(task: TaskEntity): void {
    this.taskService.deleteTask(task.id!).subscribe(() => this.loadTasks());
  }
}
