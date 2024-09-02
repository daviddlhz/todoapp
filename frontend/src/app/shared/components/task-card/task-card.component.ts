import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskEntity } from '../../../domain/entities/task.entity';
import { TaskStatus } from '../../../domain/enums/task.enum';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task!: TaskEntity;
  @Output() taskUpdated = new EventEmitter<TaskEntity>();
  @Output() taskDeleted = new EventEmitter<TaskEntity>();
  isEditing = false;
  originalTask: TaskEntity = { ...this.task };

  startEditing(): void {
    this.isEditing = true;
    this.originalTask = { ...this.task };
  }

  cancelEditing(): void {
    this.task = { ...this.originalTask };
    this.isEditing = false;
  }

  saveEditing(): void {
    this.isEditing = false;
    this.taskUpdated.emit(this.task);
  }

  toggleCompletion(): void {
    this.task.status =
      this.task.status === TaskStatus.PEDING
        ? TaskStatus.COMPLETED
        : TaskStatus.PEDING;
    this.taskUpdated.emit(this.task);
  }

  deleteTask(): void {
    this.taskDeleted.emit(this.task);
  }
}
