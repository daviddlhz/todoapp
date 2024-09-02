import { Component, Output, EventEmitter } from '@angular/core';
import { TaskEntity } from '../../../domain/entities/task.entity';
import { TaskStatus } from '../../../domain/enums/task.enum';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
})
export class TaskModalComponent {
  newTask: TaskEntity = { title: '', description: '', status: TaskStatus.PEDING };
  @Output() taskAdded = new EventEmitter<TaskEntity>();

  /**
   * Adds a new task and emits the taskAdded event.
   */
  addTask(): void {
    this.taskAdded.emit(this.newTask);
    this.resetForm();
  }

  /**
   * Resets the form to its initial state.
   */
  resetForm(): void {
    this.newTask = { title: '', description: '', status: TaskStatus.PEDING };
  }
}
