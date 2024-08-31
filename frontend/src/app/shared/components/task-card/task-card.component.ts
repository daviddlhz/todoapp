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
  isEditing = false;
  originalTask: TaskEntity = { ...this.task };

  startEditing(): void {
    this.isEditing = true;
    this.originalTask = { ...this.task }; // Guardar una copia del estado original
  }

  cancelEditing(): void {
    this.task = { ...this.originalTask }; // Revertir cambios
    this.isEditing = false;
  }

  saveEditing(): void {
    this.isEditing = false;
    this.taskUpdated.emit(this.task); // Emitir evento de actualización
  }

  toggleCompletion(): void {
    this.task.status =
      this.task.status === TaskStatus.PEDING ? TaskStatus.COMPLETED : TaskStatus.PEDING;
    this.taskUpdated.emit(this.task);
  }
}
